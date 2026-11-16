import React, { useEffect, useMemo, useRef, useState } from 'react';
import { SOUND_LAB_PHONEMES, getPhonemeById } from '../../data/soundLabData';
import { audioService } from '../../services/audioService';
import { micEngine } from '../../services/micEngine';
import {
  ComicHero,
  MicCaptureResult,
  PhonemeArticulation,
  PhonemeCategory,
  SpritePose,
} from '../../types/comicGame';
import {
  CheckIcon,
  ComicActionButton,
  ComicPanel,
  MicIcon,
  MicWaveformOrb,
  SpeakerIcon,
} from './ComicUiPrimitives';
import { SagittalMouthSvg } from './SagittalMouthSvg';

export interface SoundLabScreenProps {
  hero: ComicHero;
  toddlerFriendly?: boolean;
  practicedPhonemes: string[];
  initialPhonemeId?: string;
  onPracticeSuccess: (phonemeId: string) => void;
}

type CategoryFilter = 'all' | PhonemeCategory;

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'air', label: 'Air' },
  { id: 'pop', label: 'Pop' },
  { id: 'nasal_liquid', label: 'Voice/Nasal' },
  { id: 'vowel', label: 'Vowels' },
];

const EMPTY_BARS = new Array<number>(16).fill(8);

export const SoundLabScreen: React.FC<SoundLabScreenProps> = ({
  hero,
  toddlerFriendly = true,
  practicedPhonemes,
  initialPhonemeId,
  onPracticeSuccess,
}) => {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [selectedId, setSelectedId] = useState<string>(() => initialPhonemeId || 's');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [bars, setBars] = useState<number[]>(EMPTY_BARS);
  const [volume, setVolume] = useState(0);
  const [coachPose, setCoachPose] = useState<SpritePose>('idle');
  const [lastResult, setLastResult] = useState<MicCaptureResult | null>(null);
  const sessionRef = useRef(0);

  const filteredPhonemes = useMemo(() => {
    if (category === 'all') return SOUND_LAB_PHONEMES;
    return SOUND_LAB_PHONEMES.filter((p) => p.category === category);
  }, [category]);

  const phoneme: PhonemeArticulation = useMemo(() => getPhonemeById(selectedId), [selectedId]);

  useEffect(() => {
    if (initialPhonemeId) {
      setSelectedId(initialPhonemeId);
    }
  }, [initialPhonemeId]);

  useEffect(() => {
    return () => {
      sessionRef.current += 1;
      micEngine.stop();
      audioService.stopSpeaking();
    };
  }, []);

  const playPhonemeDemo = async (target: PhonemeArticulation) => {
    const seq = ++sessionRef.current;
    micEngine.stop();
    setIsListening(false);
    setIsPlayingAudio(true);
    setCoachPose('speaking');

    const audioKey = target.id === 'oo' ? 'oo_long' : target.id;
    await audioService.playPhoneme(audioKey);
    if (sessionRef.current !== seq) return;
    await audioService.speakEnglish(target.exampleWord, 0.9, 'teacher');
    if (sessionRef.current !== seq) return;
    setIsPlayingAudio(false);
    setCoachPose('idle');
  };

  const handleSelectPhoneme = (next: PhonemeArticulation) => {
    setSelectedId(next.id);
    setLastResult(null);
    setBars(EMPTY_BARS);
    setVolume(0);
    void playPhonemeDemo(next);
  };

  const handleSelectCategory = (nextCat: CategoryFilter) => {
    setCategory(nextCat);
    const list = nextCat === 'all' ? SOUND_LAB_PHONEMES : SOUND_LAB_PHONEMES.filter((p) => p.category === nextCat);
    if (list.length > 0 && !list.some((item) => item.id === selectedId)) {
      handleSelectPhoneme(list[0]);
    }
  };

  const handleSayIt = async () => {
    if (isListening) {
      sessionRef.current += 1;
      micEngine.stop();
      setIsListening(false);
      setBars(EMPTY_BARS);
      setCoachPose('idle');
      return;
    }

    const seq = ++sessionRef.current;
    setIsPlayingAudio(false);
    setIsListening(true);
    setLastResult(null);
    setCoachPose('speaking');

    const result = await micEngine.startCapture({
      targetText: phoneme.exampleWord,
      acceptableKeywords: [phoneme.symbol, phoneme.exampleWord],
      toddlerFriendly,
      onWaveform: (nextBars, nextVol) => {
        if (sessionRef.current === seq) {
          setBars(nextBars);
          setVolume(nextVol);
        }
      },
    });

    if (sessionRef.current !== seq) return;
    setIsListening(false);
    setBars(EMPTY_BARS);
    setVolume(0);
    setLastResult(result);

    if (result.passed) {
      setCoachPose('victory');
      audioService.playSuccessJingle();
      onPracticeSuccess(phoneme.id);
    } else {
      setCoachPose('hit');
      audioService.playGentleTryAgain();
    }
  };

  const orbTone = isListening
    ? 'listening'
    : !lastResult
    ? 'idle'
    : lastResult.mode === 'blocked'
    ? 'blocked'
    : lastResult.passed
    ? 'pass'
    : 'retry';

  const orbStatus = isListening
    ? 'Listening...'
    : lastResult
    ? lastResult.messageEn
    : 'TAP SAY IT';

  const isPracticed = practicedPhonemes.includes(phoneme.id);

  return (
    <section
      data-testid="sound-lab-screen"
      className="flex-1 min-h-0 w-full max-w-5xl mx-auto px-2.5 pb-2 pt-0.5 flex flex-col gap-1.5 overflow-hidden"
    >
      {/* Category Pills */}
      <div className="shrink-0 flex items-center gap-1.5 overflow-x-auto pb-0.5">
        {CATEGORIES.map((cat) => {
          const active = category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              data-testid={`lab-cat-${cat.id}`}
              onClick={() => {
                audioService.playPopSound(520);
                handleSelectCategory(cat.id);
              }}
              className={`shrink-0 px-2.5 py-1 rounded-full border-[2.5px] border-[#0F172A] font-display font-black text-xs uppercase tracking-wide shadow-[2px_2px_0_#0F172A] cursor-pointer transition-colors ${
                active ? 'bg-[#FACC15] text-[#0F172A]' : 'bg-white text-[#0F172A] hover:bg-[#E0F2FE]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Horizontal Sound Tile Bar */}
      <div className="shrink-0 flex items-center gap-1.5 overflow-x-auto pb-1">
        {filteredPhonemes.map((item) => {
          const selected = item.id === phoneme.id;
          const done = practicedPhonemes.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              data-testid={`sound-tile-${item.id}`}
              onClick={() => handleSelectPhoneme(item)}
              className={`relative shrink-0 min-w-[44px] h-10 px-2.5 rounded-xl border-[3px] border-[#0F172A] font-display font-black text-sm shadow-[2px_3px_0_#0F172A] cursor-pointer flex items-center justify-center transition-transform active:translate-y-[2px] ${
                selected ? 'bg-[#22D3EE] text-[#0F172A] scale-[1.03]' : 'bg-white text-[#0F172A]'
              }`}
            >
              <span>{item.symbol}</span>
              {done && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#A3E635] border-[2px] border-[#0F172A] flex items-center justify-center">
                  <CheckIcon className="w-2.5 h-2.5" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Split Stage */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Top / Left Sagittal Diagram Card */}
        <ComicPanel variant="white" className="md:col-span-7 flex flex-col min-h-0 p-2 gap-1.5">
          <div className="shrink-0 flex items-center justify-between gap-1.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                data-testid="lab-phoneme-badge"
                className="px-2.5 py-0.5 rounded-xl bg-[#FACC15] border-[2.5px] border-[#0F172A] font-display font-black text-base sm:text-lg leading-tight"
              >
                {phoneme.symbol} {phoneme.ipa}
              </span>
              <span className="px-2 py-0.5 rounded-lg bg-[#E0F2FE] border-[2px] border-[#0F172A] font-display font-extrabold text-[10px] uppercase">
                {phoneme.nasal ? 'NASAL' : phoneme.voiced ? 'VOICED' : phoneme.airflow.toUpperCase()}
              </span>
              {isPracticed && (
                <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg bg-[#A3E635] border-[2px] border-[#0F172A] font-display font-black text-[10px] uppercase">
                  <CheckIcon className="w-3 h-3" /> MASTERED
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => void playPhonemeDemo(phoneme)}
              className="shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-xl bg-[#FFFDF5] border-[2.5px] border-[#0F172A] shadow-[2px_2px_0_#0F172A] cursor-pointer active:translate-y-[1px]"
            >
              <img
                src={phoneme.wordImageUrl}
                alt={phoneme.exampleWord}
                className="w-6 h-6 object-contain"
                draggable={false}
              />
              <span className="font-display font-black text-xs uppercase text-[#0F172A]">
                {phoneme.exampleWord}
              </span>
              <SpeakerIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex-1 min-h-[165px]">
            <SagittalMouthSvg
              phoneme={phoneme}
              isActive={isPlayingAudio || isListening}
              onReplay={() => void playPhonemeDemo(phoneme)}
            />
          </div>

          <div className="shrink-0 rounded-xl bg-[#FEF9C3] border-[2.5px] border-[#0F172A] px-2.5 py-1 text-[11px] sm:text-xs font-bold text-[#0F172A] leading-snug line-clamp-2">
            {phoneme.tipVi}
          </div>
        </ComicPanel>

        {/* Right / Bottom Coach & Controls */}
        <div className="md:col-span-5 flex flex-col justify-between gap-1.5 min-h-0">
          {/* Active Hero Mini Comic Coach Box */}
          <ComicPanel variant="cyan" className="shrink-0 md:flex-1 flex items-center justify-between gap-2 p-2">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-xl bg-white border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] p-1 flex items-center justify-center">
                <img
                  src={phoneme.wordImageUrl}
                  alt={phoneme.exampleWord}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>

              <div className="min-w-0 flex flex-col gap-0.5">
                <span className="font-display font-black text-lg sm:text-2xl uppercase text-[#0F172A] leading-none truncate">
                  {phoneme.exampleWord}
                </span>
                <span
                  data-testid="lab-accuracy"
                  className={`inline-flex items-center self-start px-2 py-0.5 rounded-lg border-[2px] border-[#0F172A] font-mono font-black text-xs ${
                    lastResult
                      ? lastResult.passed
                        ? 'bg-[#A3E635] text-[#0F172A]'
                        : 'bg-[#FDE047] text-[#0F172A]'
                      : 'bg-white text-[#0F172A]'
                  }`}
                >
                  {lastResult ? `${lastResult.accuracy}% ${lastResult.messageEn}` : `SOUND ${phoneme.ipa}`}
                </span>
              </div>
            </div>

            <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 flex items-end justify-center">
              <img
                src={hero.sprites[coachPose]}
                alt={hero.nameEn}
                className={`w-full h-full object-contain drop-shadow-[0_3px_0_rgba(15,23,42,0.3)] ${
                  !hero.lockHorizontalSymmetry ? '-scale-x-100' : ''
                }`}
                draggable={false}
              />
            </div>
          </ComicPanel>

          {/* Live 16-Bar Waveform Orb */}
          <MicWaveformOrb
            bars={bars}
            volume={volume}
            isListening={isListening}
            statusLabel={orbStatus}
            tone={orbTone}
            compact
            testId="lab-waveform-orb"
          />

          {/* Giant Hear It & Say It Buttons */}
          <div className="shrink-0 grid grid-cols-2 gap-2">
            <ComicActionButton
              data-testid="btn-lab-hear"
              variant="yellow"
              size="md"
              onClick={() => void playPhonemeDemo(phoneme)}
              className="h-12 sm:h-14 text-sm sm:text-lg"
            >
              <SpeakerIcon className="w-5 h-5" />
              <span>Hear It</span>
            </ComicActionButton>

            <ComicActionButton
              data-testid="btn-lab-mic"
              variant={isListening ? 'crimson' : 'lime'}
              size="md"
              onClick={() => void handleSayIt()}
              className="h-12 sm:h-14 text-sm sm:text-lg"
            >
              <MicIcon className="w-5 h-5" />
              <span>{isListening ? 'Stop' : 'Say It'}</span>
            </ComicActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};
