import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ALL_STORY_STAGES, COMIC_VILLAINS, getStageById, getVillainById, getWorldById } from '../../data/comicGameData';
import { audioService } from '../../services/audioService';
import { micEngine } from '../../services/micEngine';
import { ComicHero, MicCaptureResult, SpritePose, StoryStage, VillainId } from '../../types/comicGame';
import { ComicActionButton, MicWaveformOrb, SpeakerIcon, StarIcon, SwapIcon } from './ComicUiPrimitives';

export interface ComicBattleScreenProps {
  hero: ComicHero;
  villainId: VillainId;
  initialStage?: StoryStage;
  toddlerFriendly?: boolean;
  onSelectVillain: (villainId: VillainId) => void;
  onBattleWin: (stageId: string, earnedStars: number) => void;
  onOpenStoryMap?: () => void;
}

const EMPTY_BARS = new Array<number>(16).fill(8);
const HIT_DAMAGE = 34;

function AccuracyArcMeter({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  const arcLen = Math.PI * 34;
  const dashOffset = arcLen * (1 - clamped / 100);
  const strokeColor = clamped >= 75 ? '#84CC16' : clamped >= 45 ? '#FACC15' : clamped > 0 ? '#EF4444' : '#94A3B8';
  return (
    <div data-testid="battle-accuracy-arc" className="relative flex flex-col items-center justify-center w-[90px] shrink-0">
      <svg viewBox="0 0 88 52" className="w-[86px] h-[50px]" aria-hidden="true">
        <path d="M 10 44 A 34 34 0 0 1 78 44" fill="none" stroke="#E2E8F0" strokeWidth="9" strokeLinecap="round" />
        <path d="M 10 44 A 34 34 0 0 1 78 44" fill="none" stroke={strokeColor} strokeWidth="9" strokeLinecap="round" strokeDasharray={arcLen} strokeDashoffset={dashOffset} className="transition-all duration-300" />
      </svg>
      <div className="-mt-6 text-center leading-none">
        <span data-testid="battle-accuracy-value" className="font-mono font-black text-base text-[#0F172A] tabular-nums">{clamped}%</span>
        <div className="font-display font-bold text-[9px] uppercase tracking-wider text-slate-600">ACC</div>
      </div>
    </div>
  );
}

export const ComicBattleScreen: React.FC<ComicBattleScreenProps> = ({
  hero,
  villainId,
  initialStage,
  toddlerFriendly = true,
  onSelectVillain,
  onBattleWin,
  onOpenStoryMap,
}) => {
  const [stage, setStage] = useState<StoryStage>(() => initialStage || getStageById('w6_s1'));
  const [heroHp, setHeroHp] = useState(100);
  const [villainHp, setVillainHp] = useState(100);
  const [combo, setCombo] = useState(0);
  const [heroPose, setHeroPose] = useState<SpritePose>('idle');
  const [villainPose, setVillainPose] = useState<SpritePose>('idle');
  const [isListening, setIsListening] = useState(false);
  const [bars, setBars] = useState<number[]>(EMPTY_BARS);
  const [volume, setVolume] = useState(0);
  const [lastAccuracy, setLastAccuracy] = useState(0);
  const [lastResult, setLastResult] = useState<MicCaptureResult | null>(null);
  const [calloutText, setCalloutText] = useState<string>('');

  const sessionRef = useRef(0);
  const poseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const villainHpRef = useRef(100);
  villainHpRef.current = villainHp;

  useEffect(() => {
    if (!initialStage) return;
    setStage(initialStage);
    setHeroHp(100);
    setVillainHp(100);
    setCombo(0);
    setHeroPose('idle');
    setVillainPose('idle');
    setLastResult(null);
    setLastAccuracy(0);
    setCalloutText('');
  }, [initialStage]);

  useEffect(() => {
    return () => {
      sessionRef.current += 1;
      if (poseTimerRef.current) clearTimeout(poseTimerRef.current);
      micEngine.stop();
      audioService.stopSpeaking();
    };
  }, []);

  const villain = useMemo(() => getVillainById(villainId), [villainId]);
  const world = useMemo(() => getWorldById(stage.worldId), [stage.worldId]);
  const arenaBackdrop = world.arenaScene || hero.arenaScene;

  const scheduleIdleReset = (ms: number) => {
    if (poseTimerRef.current) clearTimeout(poseTimerRef.current);
    poseTimerRef.current = setTimeout(() => {
      setHeroPose((p) => (p === 'victory' ? 'victory' : 'idle'));
      setVillainPose('idle');
      setCalloutText('');
    }, ms);
  };

  const applyHitSuccess = (accuracy: number, modeLabel?: string) => {
    const nextHp = Math.max(0, villainHpRef.current - HIT_DAMAGE);
    const defeated = nextHp === 0;
    setVillainHp(nextHp);
    setHeroHp((hp) => Math.min(100, hp + 10));
    setCombo((c) => c + 1);
    setLastAccuracy(accuracy);
    setHeroPose(defeated ? 'victory' : 'attack');
    setVillainPose('hit');
    setCalloutText(defeated ? 'VICTORY!' : modeLabel || hero.attackCalloutEn);
    audioService.playSuccessJingle();
    audioService.speakEnglish(hero.attackCalloutEn, 1.0, 'hero');
    if (defeated) onBattleWin(stage.id, 3);
    else scheduleIdleReset(1800);
  };

  const applyWrongAttempt = (accuracy: number) => {
    setLastAccuracy(accuracy);
    setCombo(0);
    setHeroHp((hp) => Math.max(20, hp - 20));
    setHeroPose('hit');
    setVillainPose('attack');
    setCalloutText('OOPS!');
    audioService.playGentleTryAgain();
    scheduleIdleReset(2000);
  };

  const handleCycleVillain = () => {
    const idx = COMIC_VILLAINS.findIndex((v) => v.id === villain.id);
    onSelectVillain(COMIC_VILLAINS[(idx + 1) % COMIC_VILLAINS.length].id);
    setVillainHp(100);
    setHeroPose('idle');
    setVillainPose('speaking');
    scheduleIdleReset(1100);
  };

  const handleCycleWord = () => {
    const idx = ALL_STORY_STAGES.findIndex((s) => s.id === stage.id);
    const next = ALL_STORY_STAGES[(idx + 1) % ALL_STORY_STAGES.length];
    setStage(next);
    setVillainHp(100);
    setHeroHp(100);
    setHeroPose('idle');
    setVillainPose('idle');
    setLastResult(null);
    setLastAccuracy(0);
    setCalloutText('');
    audioService.speakEnglish(next.displayWord, 0.9, 'teacher');
  };

  const handleHearWord = () => {
    setHeroPose('speaking');
    audioService.speakEnglish(stage.displayWord, 0.9, 'teacher');
    scheduleIdleReset(1000);
  };

  const handleMicBattle = async () => {
    if (isListening) {
      micEngine.stop();
      setIsListening(false);
      return;
    }
    if (villainHpRef.current === 0) {
      handleCycleWord();
      return;
    }
    const seq = ++sessionRef.current;
    setIsListening(true);
    setHeroPose('speaking');
    const res = await micEngine.startCapture({
      targetText: stage.displayWord,
      acceptableKeywords: [stage.wordId, stage.displayWord],
      toddlerFriendly,
      onWaveform: (nextBars, nextVol) => {
        if (sessionRef.current !== seq) return;
        setBars(nextBars);
        setVolume(nextVol);
      },
    });
    if (sessionRef.current !== seq) return;
    setIsListening(false);
    setBars(EMPTY_BARS);
    setVolume(0);
    setLastResult(res);
    if (res.passed) applyHitSuccess(res.accuracy, res.mode === 'voice_wave' ? 'VOICE WAVE!' : hero.attackCalloutEn);
    else if (res.mode === 'blocked') {
      setHeroPose('idle');
      setCalloutText('ALLOW MIC!');
    } else applyWrongAttempt(res.accuracy);
  };

  const handlePowerAssist = () => {
    if (isListening) return;
    if (villainHpRef.current === 0) {
      handleCycleWord();
      return;
    }
    audioService.speakEnglish(stage.displayWord, 0.9, 'teacher');
    setLastResult({ passed: true, accuracy: 88, grade: 'good', transcript: stage.displayWord, mode: 'voice_wave', messageEn: 'POWER ASSIST!' });
    applyHitSuccess(88, 'POWER ASSIST!');
  };

  const orbTone = isListening ? 'listening' : lastResult?.mode === 'blocked' ? 'blocked' : lastResult ? (lastResult.passed ? 'pass' : 'retry') : 'idle';
  const orbLabel = isListening ? 'Listening...' : lastResult?.messageEn || 'TAP MIC TO ATTACK';

  return (
    <section
      data-testid="comic-battle-screen"
      data-mic-mode={lastResult?.mode || 'idle'}
      className="relative flex-1 min-h-0 h-full w-full overflow-hidden flex flex-col justify-between p-2 sm:p-4 gap-1.5 sm:gap-2.5"
    >
      <img src={arenaBackdrop} alt={world.nameEn} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" draggable={false} />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0F172A]/35 pointer-events-none" />

      {/* Switcher Bar */}
      <div className="relative z-10 shrink-0 max-w-4xl w-full mx-auto flex items-center justify-between gap-1.5">
        <button type="button" data-testid="btn-switch-word" onClick={handleCycleWord} className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] active:translate-y-[1px] font-display font-black text-[11px] sm:text-xs text-[#0F172A] cursor-pointer truncate">
          <SwapIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Word: {stage.displayWord}</span>
        </button>
        {onOpenStoryMap && (
          <button type="button" data-testid="btn-battle-open-map" onClick={() => { audioService.playPopSound(500); onOpenStoryMap(); }} className="px-2.5 py-1 rounded-xl bg-white border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] font-display font-black text-[11px] sm:text-xs text-[#0F172A] cursor-pointer shrink-0">
            W{stage.worldId} Map
          </button>
        )}
        <button type="button" data-testid="btn-switch-villain" onClick={handleCycleVillain} className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#A855F7] text-white border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] active:translate-y-[1px] font-display font-black text-[11px] sm:text-xs cursor-pointer truncate">
          <SwapIcon className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{villain.nameEn}</span>
        </button>
      </div>

      {/* HP Bars + Combo */}
      <div className="relative z-10 shrink-0 max-w-4xl w-full mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="bg-white/95 rounded-xl border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] p-1.5">
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-display font-black text-[#0F172A] mb-0.5">
            <span className="truncate">{hero.id === 'hesman' ? 'Hesman' : hero.nameEn}</span>
            <span data-testid="hero-hp-text" className="font-mono tabular-nums">{heroHp}%</span>
          </div>
          <div className="h-2.5 sm:h-3 rounded-full bg-slate-200 border-[2px] border-[#0F172A] overflow-hidden">
            <div data-testid="hero-hp-bar" className="h-full bg-[#22C55E] transition-all duration-300" style={{ width: `${heroHp}%` }} />
          </div>
        </div>
        <div data-testid="battle-combo" className="px-2.5 py-1 rounded-xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] font-display font-black text-xs sm:text-sm text-[#0F172A] whitespace-nowrap">
          COMBO x{combo}
        </div>
        <div className="bg-white/95 rounded-xl border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] p-1.5">
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-display font-black text-[#0F172A] mb-0.5">
            <span className="truncate">{villain.nameEn}</span>
            <span data-testid="villain-hp-text" className="font-mono tabular-nums">{villainHp}%</span>
          </div>
          <div className="h-2.5 sm:h-3 rounded-full bg-slate-200 border-[2px] border-[#0F172A] overflow-hidden">
            <div data-testid="villain-hp-bar" className="h-full bg-[#EF4444] transition-all duration-300" style={{ width: `${villainHp}%` }} />
          </div>
        </div>
      </div>

      {/* Arena Center */}
      <div className="relative z-10 flex-1 min-h-0 max-w-4xl w-full mx-auto flex flex-col justify-between">
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <button type="button" data-testid="battle-speech-bubble" onClick={handleHearWord} className="relative px-4 py-1.5 rounded-2xl bg-white border-[3.5px] border-[#0F172A] shadow-[4px_4px_0_#0F172A] cursor-pointer active:translate-y-[1px]">
            <span className="font-display font-black text-sm sm:text-lg tracking-wide text-[#0F172A]">SAY: {stage.displayWord.toUpperCase()}!</span>
          </button>
          <div data-testid="battle-word-card" onClick={handleHearWord} className="relative -rotate-2 bg-[#FFFDF5] rounded-2xl border-[4px] border-[#0F172A] shadow-[5px_6px_0_#0F172A] px-3 py-1.5 sm:px-5 sm:py-2 flex items-center gap-3 cursor-pointer">
            <img src={stage.imageUrl} alt={stage.displayWord} className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-[0_3px_0_rgba(15,23,42,0.18)]" draggable={false} />
            <div className="flex flex-col items-start">
              <span className="font-display font-black text-xl sm:text-3xl text-[#0F172A] leading-none">{stage.displayWord.toUpperCase()}</span>
              <span className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#22D3EE] border-[2px] border-[#0F172A] font-display font-black text-[10px] sm:text-xs text-[#0F172A]">
                <SpeakerIcon className="w-3.5 h-3.5" /><span>Hear</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex-1 min-h-0 flex items-end justify-between gap-2 pb-1">
          {calloutText && (
            <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[3px_4px_0_#0F172A] font-display font-black text-xs sm:text-base text-[#0F172A] animate-bounce whitespace-nowrap">
              {calloutText}
            </div>
          )}
          <div className="w-[46%] h-full max-h-[210px] sm:max-h-[280px] flex items-end justify-center">
            <img data-testid="battle-hero-sprite" data-pose={heroPose} src={hero.sprites[heroPose]} alt={`${hero.nameEn} ${heroPose}`} className={`max-h-full max-w-full object-contain drop-shadow-[0_8px_0_rgba(15,23,42,0.45)] transition-transform duration-200 ${heroPose === 'hit' ? 'animate-hit-shake' : heroPose === 'attack' ? 'scale-110 translate-x-2' : 'animate-hero-idle'}`} draggable={false} />
          </div>
          <div className="w-[46%] h-full max-h-[210px] sm:max-h-[280px] flex items-end justify-center">
            <img data-testid="battle-villain-sprite" data-pose={villainPose} src={villain.sprites[villainPose]} alt={`${villain.nameEn} ${villainPose}`} className={`max-h-full max-w-full object-contain drop-shadow-[0_8px_0_rgba(15,23,42,0.45)] transition-transform duration-200 ${villainPose === 'hit' ? 'animate-hit-shake opacity-85' : 'animate-float'}`} draggable={false} />
          </div>
        </div>
      </div>

      {/* Bottom Mic & Telemetry */}
      <div className="relative z-10 shrink-0 max-w-4xl w-full mx-auto bg-white/95 rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] p-2 sm:p-2.5 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <AccuracyArcMeter value={lastAccuracy} />
          <div className="flex-1 min-w-0">
            <MicWaveformOrb testId="btn-battle-mic" bars={bars} volume={volume} isListening={isListening} statusLabel={orbLabel} tone={orbTone} compact onClick={handleMicBattle} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2">
          <ComicActionButton data-testid="btn-power-assist" variant="cyan" size="xs" onClick={handlePowerAssist} disabled={isListening}>
            Power Assist
          </ComicActionButton>
          {lastResult?.transcript && <span className="truncate font-mono font-bold text-[11px] text-[#0F172A]/80">Heard: "{lastResult.transcript}"</span>}
          {villainHp === 0 && (
            <ComicActionButton data-testid="btn-battle-next" variant="lime" size="xs" onClick={handleCycleWord}>
              <StarIcon className="w-3.5 h-3.5" /><span>Next Battle</span>
            </ComicActionButton>
          )}
        </div>
      </div>
    </section>
  );
};
