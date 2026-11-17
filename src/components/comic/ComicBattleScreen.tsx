import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ALL_STORY_STAGES, COMIC_VILLAINS, getStageById, getVillainById, getWorldById } from '../../data/comicGameData';
import { audioService } from '../../services/audioService';
import { micEngine } from '../../services/micEngine';
import { ComicHero, MangaCameraShot, MicCaptureResult, SpritePose, StoryStage, VillainId } from '../../types/comicGame';
import { ComicActionButton, MicWaveformOrb, StarIcon, SwapIcon } from './ComicUiPrimitives';
import { MangaBattleStage } from './MangaBattleStage';

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

const CAMERA_OPTIONS: Array<{ id: 'auto' | MangaCameraShot; label: string }> = [
  { id: 'auto', label: 'AUTO' },
  { id: 'vs_split', label: '1:VS' },
  { id: 'eye_cutin', label: '2:EYE' },
  { id: 'finisher_splash', label: '3:SPL' },
  { id: 'clash_shoulder', label: '4:OTS' },
  { id: 'victory_cover', label: '5:COV' },
];

function AccuracyArcMeter({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  const arcLen = Math.PI * 30;
  const dashOffset = arcLen * (1 - clamped / 100);
  const strokeColor = clamped >= 75 ? '#84CC16' : clamped >= 45 ? '#FACC15' : clamped > 0 ? '#EF4444' : '#94A3B8';
  return (
    <div data-testid="battle-accuracy-arc" className="relative flex flex-col items-center justify-center w-[72px] shrink-0">
      <svg viewBox="0 0 80 46" className="w-[70px] h-[40px]" aria-hidden="true">
        <path d="M 10 40 A 30 30 0 0 1 70 40" fill="none" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
        <path d="M 10 40 A 30 30 0 0 1 70 40" fill="none" stroke={strokeColor} strokeWidth="8" strokeLinecap="round" strokeDasharray={arcLen} strokeDashoffset={dashOffset} className="transition-all duration-300" />
      </svg>
      <div className="-mt-5 text-center leading-none">
        <span data-testid="battle-accuracy-value" className="font-mono font-black text-sm text-[#0F172A] tabular-nums">{clamped}%</span>
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
  const [cameraMode, setCameraMode] = useState<'auto' | MangaCameraShot>('auto');
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
    setCameraMode('auto');
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

  useEffect(() => {
    [hero.mangaCutinUrl, hero.mangaSplashUrl, villain.mangaMenaceUrl].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [hero.mangaCutinUrl, hero.mangaSplashUrl, villain.mangaMenaceUrl]);

  const activeShot: MangaCameraShot =
    cameraMode !== 'auto'
      ? cameraMode
      : villainHp === 0
        ? 'victory_cover'
        : isListening
          ? 'eye_cutin'
          : heroPose === 'attack'
            ? 'finisher_splash'
            : heroPose === 'hit'
              ? 'clash_shoulder'
              : 'vs_split';

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
    setCameraMode('auto');
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
    setCameraMode('auto');
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
    setCameraMode('auto');
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
    setCameraMode('auto');
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
      className="relative flex-1 min-h-0 h-full w-full overflow-hidden flex flex-col justify-between px-2 py-1.5 sm:px-4 sm:py-2 gap-1.5"
    >
      <img src={arenaBackdrop} alt={world.nameEn} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" draggable={false} />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0F172A]/45 pointer-events-none" />

      {/* Ultra-Compact Top Bar: Chapter / Camera Switcher / Slim VS Strip */}
      <div className="relative z-10 shrink-0 max-w-4xl w-full mx-auto flex flex-col gap-1">
        <div className="flex items-center justify-between gap-1">
          <button type="button" data-testid="btn-switch-word" onClick={handleCycleWord} className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#FACC15] border-[2.5px] border-[#0F172A] shadow-[2px_2px_0_#0F172A] active:translate-y-[1px] font-display font-black text-[11px] text-[#0F172A] cursor-pointer truncate">
            <SwapIcon className="w-3 h-3 shrink-0" />
            <span className="truncate">Ch.{stage.stageNumber}: {stage.displayWord}</span>
          </button>
          <div className="flex items-center gap-1 shrink-0">
            {onOpenStoryMap && (
              <button type="button" data-testid="btn-battle-open-map" onClick={() => { audioService.playPopSound(500); onOpenStoryMap(); }} className="px-2 py-0.5 rounded-lg bg-white border-[2.5px] border-[#0F172A] shadow-[2px_2px_0_#0F172A] font-display font-black text-[11px] text-[#0F172A] cursor-pointer">
                W{stage.worldId} Map
              </button>
            )}
            <button type="button" data-testid="btn-switch-villain" onClick={handleCycleVillain} className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#A855F7] text-white border-[2.5px] border-[#0F172A] shadow-[2px_2px_0_#0F172A] active:translate-y-[1px] font-display font-black text-[11px] cursor-pointer max-w-[135px] truncate">
              <SwapIcon className="w-3 h-3 shrink-0" />
              <span className="truncate">{villain.nameEn}</span>
            </button>
          </div>
        </div>

        <div data-testid="manga-cam-bar" className="flex items-center justify-between gap-1 bg-white/95 rounded-lg border-[2.5px] border-[#0F172A] px-1 py-0.5">
          {CAMERA_OPTIONS.map((cam) => (
            <button
              key={cam.id}
              type="button"
              data-testid={`btn-cam-${cam.id}`}
              onClick={() => setCameraMode(cam.id)}
              className={`flex-1 py-0.5 rounded font-mono font-black text-[9px] sm:text-[10px] cursor-pointer ${cameraMode === cam.id ? 'bg-[#0F172A] text-[#FACC15]' : 'text-[#0F172A] hover:bg-slate-200'}`}
            >
              {cam.label}
            </button>
          ))}
        </div>

        {/* Slim Shonen VS Strip */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 bg-white/95 rounded-xl border-[2.5px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] px-2 py-1">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="font-display font-black text-[10px] text-[#0F172A] truncate">{hero.id === 'hesman' ? 'Hesman' : hero.nameEn}</span>
            <div className="flex-1 h-2.5 rounded-full bg-slate-200 border-[2px] border-[#0F172A] overflow-hidden">
              <div data-testid="hero-hp-bar" className="h-full bg-[#22C55E] transition-all duration-300" style={{ width: `${heroHp}%` }} />
            </div>
            <span data-testid="hero-hp-text" className="font-mono font-black text-[10px] text-[#0F172A] tabular-nums">{heroHp}%</span>
          </div>
          <div data-testid="battle-combo" className="px-2 py-0.5 rounded-lg bg-[#FACC15] border-[2px] border-[#0F172A] font-display font-black text-[10px] text-[#0F172A] whitespace-nowrap">
            x{combo}
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <span data-testid="villain-hp-text" className="font-mono font-black text-[10px] text-[#0F172A] tabular-nums">{villainHp}%</span>
            <div className="flex-1 h-2.5 rounded-full bg-slate-200 border-[2px] border-[#0F172A] overflow-hidden">
              <div data-testid="villain-hp-bar" className="h-full bg-[#EF4444] transition-all duration-300" style={{ width: `${villainHp}%` }} />
            </div>
            <span className="font-display font-black text-[10px] text-[#0F172A] truncate">{villain.nameEn}</span>
          </div>
        </div>
      </div>

      {/* Main Living Manga Page (70%+ vertical height) */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col">
        <MangaBattleStage
          shot={activeShot}
          hero={hero}
          villain={villain}
          stage={stage}
          heroPose={heroPose}
          villainPose={villainPose}
          volume={volume}
          isListening={isListening}
          calloutText={calloutText}
          lastAccuracy={lastAccuracy}
          combo={combo}
          onHearWord={handleHearWord}
          onNextBattle={handleCycleWord}
        />
      </div>

      {/* Compact Bottom Mic Trigger Strip */}
      <div className="relative z-10 shrink-0 max-w-4xl w-full mx-auto bg-white/95 rounded-2xl border-[3px] border-[#0F172A] shadow-[3px_4px_0_#0F172A] px-2 py-1 flex items-center gap-2">
        <AccuracyArcMeter value={lastAccuracy} />
        <div className="flex-1 min-w-0">
          <MicWaveformOrb testId="btn-battle-mic" bars={bars} volume={volume} isListening={isListening} statusLabel={orbLabel} tone={orbTone} compact onClick={handleMicBattle} />
        </div>
        <div className="shrink-0 flex flex-col gap-1">
          <ComicActionButton data-testid="btn-power-assist" variant="cyan" size="xs" onClick={handlePowerAssist} disabled={isListening}>
            Assist
          </ComicActionButton>
          {villainHp === 0 && (
            <ComicActionButton data-testid="btn-battle-next" variant="lime" size="xs" onClick={handleCycleWord}>
              <StarIcon className="w-3 h-3" /><span>Next</span>
            </ComicActionButton>
          )}
        </div>
      </div>
    </section>
  );
};
