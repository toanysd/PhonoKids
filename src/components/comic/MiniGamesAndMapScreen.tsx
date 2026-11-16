import React, { useEffect, useMemo, useRef, useState } from 'react';
import { STORY_WORLDS, getVillainById, getWorldById } from '../../data/comicGameData';
import { audioService } from '../../services/audioService';
import { micEngine } from '../../services/micEngine';
import { ComicHero, MicCaptureResult, StoryStage } from '../../types/comicGame';
import { ComicActionButton, ComicPanel, MicWaveformOrb, PlayIcon, SpeakerIcon, StarIcon } from './ComicUiPrimitives';

export interface FreeStoryMapScreenProps {
  hero: ComicHero;
  stageStars: Record<string, number>;
  initialWorldId?: number;
  onPlayStage: (stage: StoryStage) => void;
}

export const FreeStoryMapScreen: React.FC<FreeStoryMapScreenProps> = ({
  hero,
  stageStars,
  initialWorldId = 1,
  onPlayStage,
}) => {
  const [worldId, setWorldId] = useState<number>(initialWorldId);
  const world = useMemo(() => getWorldById(worldId), [worldId]);
  const villain = useMemo(() => getVillainById(world.villainId), [world.villainId]);
  const totalCleared = Object.values(stageStars).filter((s) => s > 0).length;

  return (
    <section data-testid="free-story-map-screen" className="relative flex-1 min-h-0 h-full w-full overflow-hidden flex flex-col gap-2 p-2 sm:p-4">
      <img src={world.arenaScene} alt={world.nameEn} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none" draggable={false} />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0F172A]/40 pointer-events-none" />

      <div className="relative z-10 shrink-0 max-w-4xl w-full mx-auto grid grid-cols-6 gap-1 sm:gap-2">
        {STORY_WORLDS.map((w) => {
          const active = w.id === worldId;
          return (
            <button
              key={w.id}
              type="button"
              data-testid={`world-tab-${w.id}`}
              onClick={() => { audioService.playPopSound(480 + w.id * 35); setWorldId(w.id); }}
              style={{ backgroundColor: active ? w.accentColor : '#FFFFFF' }}
              className={`rounded-xl border-[3px] border-[#0F172A] py-1.5 px-1 flex flex-col items-center leading-none cursor-pointer transition-transform ${active ? 'shadow-[3px_4px_0_#0F172A] -translate-y-0.5' : 'opacity-90 shadow-[2px_2px_0_#0F172A]'}`}
            >
              <span className="font-mono font-black text-[10px] sm:text-xs text-[#0F172A]">W{w.id}</span>
              <span className="font-display font-black text-xs sm:text-sm text-[#0F172A] mt-0.5">{w.phonemeLabel}</span>
            </button>
          );
        })}
      </div>

      <ComicPanel variant="cream" className="relative z-10 shrink-0 max-w-4xl w-full mx-auto px-3 py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <img src={hero.sprites.idle} alt={hero.nameEn} className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0" draggable={false} />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h2 className="font-display font-black text-sm sm:text-lg text-[#0F172A] leading-none truncate">{world.nameEn}</h2>
              <span className="px-2 py-0.5 rounded-full bg-[#A3E635] border-[2px] border-[#0F172A] font-mono font-black text-[10px] text-[#0F172A]">ALL 30 UNLOCKED</span>
            </div>
            <p className="font-sans font-bold text-[11px] text-slate-700 truncate mt-0.5">Tap any stage to battle ({totalCleared}/30 cleared)</p>
          </div>
        </div>
        <img src={villain.sprites.idle} alt={villain.nameEn} className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0" draggable={false} />
      </ComicPanel>

      <div className="relative z-10 flex-1 min-h-0 max-w-4xl w-full mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 content-stretch">
        {world.stages.map((stage) => {
          const earned = stageStars[stage.id] || 0;
          return (
            <div key={stage.id} className={`relative rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] ${stage.isBoss ? 'col-span-2 sm:col-span-1 bg-[#FEF08A]' : 'bg-white hover:bg-[#FFFDF5]'}`}>
              <button
                type="button"
                data-testid={`map-stage-${stage.id}`}
                onClick={() => { audioService.playPopSound(560); onPlayStage(stage); }}
                className="w-full h-full p-2 sm:p-3 flex flex-col items-center justify-between cursor-pointer active:translate-y-[2px]"
              >
                <div className="w-full flex items-center justify-between pr-8">
                  <span className={`px-2 py-0.5 rounded-lg border-[2px] border-[#0F172A] font-mono font-black text-[10px] ${stage.isBoss ? 'bg-[#EF4444] text-white' : 'bg-[#22D3EE] text-[#0F172A]'}`}>
                    {stage.isBoss ? `BOSS ${stage.stageNumber}` : `STAGE ${stage.stageNumber}`}
                  </span>
                </div>
                <img src={stage.imageUrl} alt={stage.displayWord} className="w-14 h-14 sm:w-20 sm:h-20 object-contain my-1 drop-shadow-[0_3px_0_rgba(15,23,42,0.18)]" draggable={false} />
                <div className="w-full flex items-center justify-between gap-1">
                  <span className="font-display font-black text-sm sm:text-base text-[#0F172A] truncate">{stage.displayWord}</span>
                  <span className="inline-flex items-center gap-0.5 font-mono font-black text-xs text-[#0F172A]">
                    <StarIcon className="w-3.5 h-3.5" />{earned}
                  </span>
                </div>
                <div className="w-full mt-1 py-0.5 rounded-lg bg-[#0F172A] text-white font-display font-black text-[10px] uppercase tracking-wider flex items-center justify-center gap-1">
                  <PlayIcon className="w-3 h-3" /><span>BATTLE</span>
                </div>
              </button>
              <button
                type="button"
                aria-label={`Hear ${stage.displayWord}`}
                onClick={() => audioService.speakEnglish(stage.displayWord, 0.9, 'teacher')}
                className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-[#FFFDF5] border-[2px] border-[#0F172A] flex items-center justify-center cursor-pointer"
              >
                <SpeakerIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export interface MiniGamesScreenProps {
  hero: ComicHero;
  toddlerFriendly?: boolean;
  onMiniGameWin: (starsEarned: number) => void;
}

type MiniTab = 'pop' | 'fusion' | 'echo';
interface WordChoice { id: string; word: string; }

const MINI_WORDS: WordChoice[] = [
  { id: 'sun', word: 'sun' }, { id: 'star', word: 'star' }, { id: 'cat', word: 'cat' }, { id: 'hat', word: 'hat' },
  { id: 'pig', word: 'pig' }, { id: 'top', word: 'top' }, { id: 'moon', word: 'moon' }, { id: 'ship', word: 'ship' },
  { id: 'map', word: 'map' }, { id: 'pen', word: 'pen' },
];
const EMPTY_BARS = new Array<number>(16).fill(8);

function buildPopOptions(seedIdx: number) {
  const target = MINI_WORDS[seedIdx % MINI_WORDS.length];
  const others = MINI_WORDS.filter((w) => w.id !== target.id);
  const picked = [target, others[seedIdx % others.length], others[(seedIdx + 2) % others.length], others[(seedIdx + 4) % others.length]];
  const rot = seedIdx % 4;
  return { target, choices: [...picked.slice(rot), ...picked.slice(0, rot)] };
}

function buildTiles(word: string, seed: number) {
  const raw = word.toUpperCase().split('').map((ch, i) => ({ id: `${i}_${ch}`, ch }));
  if (raw.length <= 1) return raw;
  const shift = (seed % (raw.length - 1)) + 1;
  return [...raw.slice(shift), ...raw.slice(0, shift)];
}

export const MiniGamesScreen: React.FC<MiniGamesScreenProps> = ({
  hero,
  toddlerFriendly = true,
  onMiniGameWin,
}) => {
  const [tab, setTab] = useState<MiniTab>('pop');
  const [roundIdx, setRoundIdx] = useState(0);
  const [popStreak, setPopStreak] = useState(0);
  const [fusionBuilt, setFusionBuilt] = useState<{ id: string; ch: string }[]>([]);
  const [banner, setBanner] = useState('Pick a Mini Game and earn Stars!');
  const [isListening, setIsListening] = useState(false);
  const [bars, setBars] = useState<number[]>(EMPTY_BARS);
  const [volume, setVolume] = useState(0);
  const [echoRes, setEchoRes] = useState<MicCaptureResult | null>(null);
  const sessionRef = useRef(0);

  useEffect(() => () => {
    sessionRef.current += 1;
    micEngine.stop();
    audioService.stopSpeaking();
  }, []);

  const popData = useMemo(() => buildPopOptions(roundIdx), [roundIdx]);
  const fusionTarget = MINI_WORDS[(roundIdx + 2) % MINI_WORDS.length];
  const fusionTiles = useMemo(() => buildTiles(fusionTarget.word, roundIdx + 1), [fusionTarget, roundIdx]);
  const echoTarget = MINI_WORDS[(roundIdx + 5) % MINI_WORDS.length];

  const handlePopChoice = (choice: WordChoice) => {
    if (choice.id !== popData.target.id) {
      audioService.playGentleTryAgain();
      setBanner(`Oops! Listen for ${popData.target.word.toUpperCase()}`);
      return;
    }
    const nextStreak = popStreak + 1;
    audioService.playSuccessJingle();
    if (nextStreak >= 3) {
      onMiniGameWin(5);
      setPopStreak(0);
      setBanner('SOUND POP BLITZ WIN! +5 STARS!');
    } else {
      setPopStreak(nextStreak);
      setBanner(`GREAT! ${nextStreak}/3`);
    }
    setRoundIdx((r) => r + 1);
  };

  const handleFusionTap = (tile: { id: string; ch: string }) => {
    if (fusionBuilt.some((t) => t.id === tile.id)) return;
    const expectedChar = fusionTarget.word.toUpperCase()[fusionBuilt.length];
    if (tile.ch !== expectedChar) {
      audioService.playGentleTryAgain();
      setBanner(`Try letter "${expectedChar}" next!`);
      return;
    }
    const nextBuilt = [...fusionBuilt, tile];
    setFusionBuilt(nextBuilt);
    audioService.playPopSound(520 + nextBuilt.length * 40);
    if (nextBuilt.length === fusionTarget.word.length) {
      audioService.playSuccessJingle();
      audioService.speakEnglish(fusionTarget.word, 0.9, 'teacher');
      onMiniGameWin(5);
      setBanner(`WORD FUSION: ${fusionTarget.word.toUpperCase()}! +5 STARS!`);
      setTimeout(() => { setFusionBuilt([]); setRoundIdx((r) => r + 1); }, 700);
    }
  };

  const handleEchoMic = async () => {
    if (isListening) { micEngine.stop(); setIsListening(false); return; }
    const seq = ++sessionRef.current;
    setIsListening(true);
    const res = await micEngine.startCapture({
      targetText: echoTarget.word,
      acceptableKeywords: [echoTarget.word],
      toddlerFriendly,
      onWaveform: (b, v) => { if (sessionRef.current === seq) { setBars(b); setVolume(v); } },
    });
    if (sessionRef.current !== seq) return;
    setIsListening(false);
    setBars(EMPTY_BARS);
    setVolume(0);
    setEchoRes(res);
    if (res.passed) {
      audioService.playSuccessJingle();
      onMiniGameWin(6);
      setBanner('ECHO RADAR LOCK! +6 STARS!');
      setRoundIdx((r) => r + 1);
    } else {
      audioService.playGentleTryAgain();
      setBanner(res.messageEn);
    }
  };

  return (
    <section data-testid="mini-games-screen" className="flex-1 min-h-0 h-full w-full overflow-hidden flex flex-col gap-2 p-2 sm:p-4 max-w-4xl mx-auto">
      <div className="shrink-0 grid grid-cols-3 gap-1.5 sm:gap-2.5">
        {[{ id: 'pop' as const, label: 'Sound Pop Blitz' }, { id: 'fusion' as const, label: 'Word Fusion' }, { id: 'echo' as const, label: 'Echo Radar' }].map((t) => (
          <ComicActionButton key={t.id} data-testid={`minigame-tab-${t.id}`} size="sm" variant={tab === t.id ? 'yellow' : 'white'} onClick={() => { micEngine.stop(); setIsListening(false); setTab(t.id); setFusionBuilt([]); setBanner(`${t.label} Ready!`); }}>
            <span className="truncate">{t.label}</span>
          </ComicActionButton>
        ))}
      </div>

      <ComicPanel variant="cyan" className="shrink-0 px-3 py-1.5 flex items-center justify-between gap-2">
        <span data-testid="minigame-banner" className="font-display font-black text-xs sm:text-sm text-[#0F172A] truncate">{banner}</span>
        <img src={hero.sprites.idle} alt={hero.nameEn} className="w-8 h-8 object-contain shrink-0" draggable={false} />
      </ComicPanel>

      <ComicPanel variant="cream" className="flex-1 min-h-0 p-3 sm:p-4 flex flex-col justify-between gap-2 overflow-hidden">
        {tab === 'pop' && (
          <>
            <div className="shrink-0 flex items-center justify-between gap-2">
              <div className="font-display font-black text-base sm:text-xl text-[#0F172A]">
                Tap: <span className="px-2 py-0.5 rounded-lg bg-[#FACC15] border-[2px] border-[#0F172A]">{popData.target.word.toUpperCase()}</span>
              </div>
              <ComicActionButton data-testid="btn-pop-hear" size="sm" variant="cyan" onClick={() => audioService.speakEnglish(popData.target.word, 0.9, 'teacher')}>
                <SpeakerIcon className="w-4 h-4" /><span>Hear ({popStreak}/3)</span>
              </ComicActionButton>
            </div>
            <div className="flex-1 min-h-0 grid grid-cols-2 gap-2.5">
              {popData.choices.map((c) => (
                <button key={c.id} type="button" data-testid={`pop-choice-${c.id}`} onClick={() => handlePopChoice(c)} className="rounded-2xl bg-white hover:bg-[#FEF08A] border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] active:translate-y-[2px] flex flex-col items-center justify-center p-2 cursor-pointer">
                  <img src={`/assets/comic/words/${c.id}.webp`} alt={c.word} className="w-16 h-16 sm:w-24 sm:h-24 object-contain" draggable={false} />
                  <span className="mt-1 font-display font-black text-sm sm:text-base text-[#0F172A]">{c.word.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </>
        )}
        {tab === 'fusion' && (
          <>
            <div className="flex flex-col items-center gap-2">
              <img src={`/assets/comic/words/${fusionTarget.id}.webp`} alt={fusionTarget.word} className="w-24 h-24 sm:w-32 sm:h-32 object-contain" draggable={false} />
              <ComicActionButton size="xs" variant="cyan" onClick={() => audioService.speakEnglish(fusionTarget.word, 0.9, 'teacher')}>
                <SpeakerIcon className="w-3.5 h-3.5" /><span>Hear Word</span>
              </ComicActionButton>
            </div>
            <div data-testid="fusion-slots" className="flex items-center justify-center gap-2">
              {fusionTarget.word.toUpperCase().split('').map((_, idx) => (
                <div key={idx} className="w-12 h-14 sm:w-14 sm:h-16 rounded-2xl bg-white border-[3.5px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] flex items-center justify-center font-display font-black text-2xl text-[#0F172A]">
                  {fusionBuilt[idx]?.ch || '_'}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {fusionTiles.map((tile, idx) => {
                const used = fusionBuilt.some((t) => t.id === tile.id);
                return (
                  <ComicActionButton key={tile.id} data-testid={`fusion-tile-${idx}`} size="lg" variant={used ? 'white' : 'yellow'} disabled={used} onClick={() => handleFusionTap(tile)} className="w-14 h-14">
                    {tile.ch}
                  </ComicActionButton>
                );
              })}
            </div>
          </>
        )}
        {tab === 'echo' && (
          <>
            <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-2">
              <img src={`/assets/comic/words/${echoTarget.id}.webp`} alt={echoTarget.word} className="w-28 h-28 sm:w-36 sm:h-36 object-contain" draggable={false} />
              <div className="flex items-center gap-2">
                <span className="px-4 py-1 rounded-2xl bg-[#FACC15] border-[3px] border-[#0F172A] font-display font-black text-2xl text-[#0F172A]">{echoTarget.word.toUpperCase()}</span>
                <ComicActionButton size="sm" variant="cyan" onClick={() => audioService.speakEnglish(echoTarget.word, 0.9, 'teacher')}>
                  <SpeakerIcon className="w-4 h-4" /><span>Hear</span>
                </ComicActionButton>
              </div>
            </div>
            <MicWaveformOrb testId="btn-echo-mic" bars={bars} volume={volume} isListening={isListening} statusLabel={isListening ? 'Listening...' : echoRes?.messageEn || 'TAP TO ECHO'} tone={isListening ? 'listening' : echoRes?.passed ? 'pass' : echoRes ? 'retry' : 'idle'} onClick={handleEchoMic} />
          </>
        )}
      </ComicPanel>
    </section>
  );
};
