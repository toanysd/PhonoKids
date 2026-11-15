import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CurriculumUnit, HeroCharacter } from '../../types/heroGame';
import { WORLD_BACKDROP_ASSETS } from '../../data/characterSpriteManifest';
import { CharacterRigSvg } from './CharacterRigSvg';
import { getVisemePhoto, getWordVisual } from '../../services/imageService';
import { audioService } from '../../services/audioService';
import { voiceCombatService, VoiceStrikeResult } from '../../services/voiceCombatService';
import {
  ChevronLeft,
  ChevronRight,
  Mic,
  Pause,
  Play,
  Sparkles,
  Swords,
  Volume2,
} from 'lucide-react';

interface VideoLessonCutsceneProps {
  unit: CurriculumUnit;
  hero: HeroCharacter;
  toddlerForgivingMode: boolean;
  isOverlayPaused?: boolean;
  onStartBattle: () => void;
  onBackToHub: () => void;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function speakCutsceneAudio(
  phonemeId: string | undefined,
  lineEn: string,
  wordEn: string
): Promise<void> {
  if (phonemeId) {
    await Promise.race([audioService.playPhoneme(phonemeId), sleep(1500)]);
  }
  const cleanLine = lineEn.trim();
  const cleanWord = wordEn.trim();
  const combined =
    cleanLine && cleanLine.toLowerCase() !== cleanWord.toLowerCase()
      ? `${/[.!?]$/.test(cleanLine) ? cleanLine : `${cleanLine}.`} ${cleanWord}`
      : cleanWord || cleanLine;
  if (!combined) return;
  const maxMs = Math.min(9000, Math.max(2200, combined.length * 140));
  await Promise.race([
    audioService.speakEnglish(combined, 0.9),
    (async () => {
      await sleep(650);
      if (
        typeof window !== 'undefined' &&
        'speechSynthesis' in window &&
        !window.speechSynthesis.speaking &&
        !window.speechSynthesis.pending
      ) {
        await sleep(300);
        if (!window.speechSynthesis.speaking && !window.speechSynthesis.pending) {
          return;
        }
      }
      await sleep(maxMs - 650);
    })(),
  ]);
}

export const VideoLessonCutscene: React.FC<VideoLessonCutsceneProps> = ({
  unit,
  hero,
  toddlerForgivingMode,
  isOverlayPaused = false,
  onStartBattle,
  onBackToHub,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoFlow, setAutoFlow] = useState(true);
  const [enteringBattle, setEnteringBattle] = useState(false);
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [micTrying, setMicTrying] = useState(false);
  const [tryFeedback, setTryFeedback] = useState<string>('');
  const [interimText, setInterimText] = useState<string>('');
  const [micVolume, setMicVolume] = useState(0);

  const runIdRef = useRef(0);
  const autoFlowRef = useRef(autoFlow);
  autoFlowRef.current = autoFlow;

  const slides = unit.cutsceneSlides;
  const slide = slides[slideIndex] || slides[0];
  const wordVisual = getWordVisual(slide.visualWordKey);
  const viseme = slide.visemeKey ? getVisemePhoto('', slide.phonemeId || slide.visemeKey) : null;

  const latestRef = useRef({
    onStartBattle,
    slide,
    slidesLength: slides.length,
    heroNameVi: hero.nameVi,
    toddlerForgivingMode,
  });
  latestRef.current = {
    onStartBattle,
    slide,
    slidesLength: slides.length,
    heroNameVi: hero.nameVi,
    toddlerForgivingMode,
  };

  const playSlideAudio = useCallback(async () => {
    const manualRunId = ++runIdRef.current;
    voiceCombatService.stopListening();
    setMicTrying(false);
    setMicVolume(0);
    setIsSpeakingAudio(true);
    try {
      const curSlide = latestRef.current.slide;
      await speakCutsceneAudio(
        curSlide.phonemeId,
        curSlide.heroActionLineEn,
        curSlide.wordOrPhraseEn
      );
    } finally {
      if (runIdRef.current === manualRunId) {
        setIsSpeakingAudio(false);
      }
    }
  }, []);

  const advanceSlideOrBattle = useCallback(() => {
    if (slideIndex + 1 < slides.length) {
      setSlideIndex((i) => i + 1);
      return;
    }
    setEnteringBattle(true);
    setTimeout(() => {
      latestRef.current.onStartBattle();
    }, 1150);
  }, [slideIndex, slides.length]);

  const advanceRef = useRef(advanceSlideOrBattle);
  advanceRef.current = advanceSlideOrBattle;

  useEffect(() => {
    setSlideIndex(0);
    setEnteringBattle(false);
  }, [unit.id]);

  useEffect(() => {
    if (isOverlayPaused || enteringBattle) {
      runIdRef.current++;
      audioService.stopSpeaking();
      voiceCombatService.stopListening();
      setIsSpeakingAudio(false);
      setMicTrying(false);
      setMicVolume(0);
      return;
    }

    const myRunId = ++runIdRef.current;
    const isAlive = () => runIdRef.current === myRunId;

    const runEpisodeSlide = async () => {
      const curSlide = latestRef.current.slide;
      const curHeroNameVi = latestRef.current.heroNameVi;
      const curForgiving = latestRef.current.toddlerForgivingMode;

      audioService.stopSpeaking();
      voiceCombatService.stopListening();
      setTryFeedback('');
      setInterimText('');
      setMicTrying(false);
      setMicVolume(0);

      await sleep(220);
      if (!isAlive()) return;

      setIsSpeakingAudio(true);
      setTryFeedback(`🔊 Nghe ${curHeroNameVi} đọc mẫu nhé!`);
      await speakCutsceneAudio(
        curSlide.phonemeId,
        curSlide.heroActionLineEn,
        curSlide.wordOrPhraseEn
      );
      if (!isAlive()) return;
      setIsSpeakingAudio(false);

      if (!autoFlowRef.current) {
        setTryFeedback(`🎙️ Chạm nút "Bé Đọc Thử" để nói "${curSlide.wordOrPhraseEn}"!`);
        return;
      }

      await sleep(180);
      if (!isAlive() || !autoFlowRef.current) return;

      setMicTrying(true);
      setTryFeedback(`🎙️ Bé nói thử: "${curSlide.wordOrPhraseEn}"`);
      audioService.playPopSound(740);

      const coreWord = curSlide.wordOrPhraseEn.split('=').pop()?.trim() || curSlide.wordOrPhraseEn;
      const res = await new Promise<VoiceStrikeResult>((resolve) => {
        voiceCombatService.startVoiceStrike(
          curSlide.wordOrPhraseEn,
          [curSlide.wordOrPhraseEn, curSlide.heroActionLineEn],
          curForgiving,
          {
            onVolumeChange: (v) => isAlive() && setMicVolume(v),
            onInterimText: (txt) => isAlive() && setInterimText(txt),
            onStatusChange: () => {},
            onResult: resolve,
          },
          { coreKeywords: [coreWord], windowMs: 3800 }
        );
      });
      if (!isAlive()) return;
      setMicTrying(false);
      setMicVolume(0);
      setInterimText('');

      if (res.grade !== 'retry') {
        audioService.playSuccessJingle();
        setTryFeedback(res.feedbackVi);
        await sleep(950);
        if (isAlive() && autoFlowRef.current) advanceRef.current();
        return;
      }

      // Honest feedback when gibberish spoken + gentle zero-deadlock recap & progression
      setTryFeedback(
        res.transcript
          ? `${res.feedbackVi} 🌟 Nhớ từ "${curSlide.wordOrPhraseEn}" (${curSlide.meaningVi}) nhé!`
          : `🌟 Nhớ từ "${curSlide.wordOrPhraseEn}" (${curSlide.meaningVi}) nhé!`
      );
      await speakCutsceneAudio(undefined, '', curSlide.wordOrPhraseEn);
      if (!isAlive()) return;
      await sleep(850);
      if (isAlive() && autoFlowRef.current) advanceRef.current();
    };

    runEpisodeSlide();

    return () => {
      runIdRef.current++;
      audioService.stopSpeaking();
      voiceCombatService.stopListening();
    };
  }, [unit.id, slideIndex, autoFlow, isOverlayPaused, enteringBattle]);

  const handleQuickSpeakPractice = async () => {
    runIdRef.current++;
    audioService.stopSpeaking();
    if (micTrying) {
      voiceCombatService.stopListening();
      setMicTrying(false);
      setMicVolume(0);
      return;
    }
    setMicTrying(true);
    setInterimText('');
    setTryFeedback(`🎙️ Bé nói: "${slide.wordOrPhraseEn}"`);
    const coreWord = slide.wordOrPhraseEn.split('=').pop()?.trim() || slide.wordOrPhraseEn;
    await voiceCombatService.startVoiceStrike(
      slide.wordOrPhraseEn,
      [slide.wordOrPhraseEn, slide.heroActionLineEn],
      toddlerForgivingMode,
      {
        onVolumeChange: setMicVolume,
        onInterimText: setInterimText,
        onStatusChange: () => {},
        onResult: (res) => {
          setMicTrying(false);
          setMicVolume(0);
          if (res.grade !== 'retry') audioService.playSuccessJingle();
          setTryFeedback(res.feedbackVi);
        },
      },
      { coreKeywords: [coreWord], windowMs: 3800 }
    );
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-gradient-to-b from-sky-100 via-amber-50 to-orange-100 px-3 py-2.5 sm:p-5 overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-2 shrink-0 min-h-[44px]">
        <button
          type="button"
          onClick={() => {
            voiceCombatService.releaseSession();
            onBackToHub();
          }}
          className="inline-flex items-center gap-1 px-3 py-2 min-h-[42px] rounded-2xl bg-white border-2 border-amber-300 font-extrabold text-xs sm:text-sm text-slate-900 shadow-sm cursor-pointer hover:bg-amber-50 shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Về Sảnh</span>
        </button>

        <div className="text-center min-w-0 px-1">
          <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-600 text-white">
            {unit.methodologyTag}
          </span>
          <h2 className="font-display text-sm sm:text-xl font-bold text-slate-950 truncate">
            {unit.titleVi}
          </h2>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setAutoFlow((v) => !v)}
            className={`px-2.5 py-2 min-h-[42px] rounded-2xl font-extrabold text-xs border-2 inline-flex items-center gap-1 cursor-pointer ${
              autoFlow
                ? 'bg-emerald-100 border-emerald-400 text-emerald-900'
                : 'bg-white border-slate-300 text-slate-700'
            }`}
            title="Bật/tắt tự dẫn sang thẻ tiếp theo"
          >
            {autoFlow ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{autoFlow ? 'Tự dẫn' : 'Tạm dừng'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              runIdRef.current++;
              voiceCombatService.stopListening();
              audioService.stopSpeaking();
              onStartBattle();
            }}
            className="inline-flex items-center gap-1 px-3 sm:px-4 py-2 min-h-[42px] rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs sm:text-sm shadow-md cursor-pointer active:scale-95"
          >
            <Swords className="w-4 h-4" />
            <span>Đấu Ngay</span>
          </button>
        </div>
      </div>

      {/* Main Responsive Stage: Visual Card first on Mobile Portrait, Split on Desktop */}
      <div className="flex-1 min-h-0 my-2 flex flex-col lg:grid lg:grid-cols-12 gap-2.5 sm:gap-4 items-stretch max-w-6xl w-full mx-auto">
        {/* Ehon Picture + Word + Real Mouth Viseme */}
        <div
          onClick={playSlideAudio}
          className="order-1 lg:order-2 lg:col-span-7 flex-1 min-h-0 bg-white rounded-3xl border-4 border-amber-300 p-3 sm:p-5 flex flex-col justify-center shadow-xl overflow-hidden cursor-pointer hover:border-amber-400"
        >
          <div className="flex-1 min-h-0 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <div className="w-full sm:w-1/2 h-36 sm:h-full max-h-64 rounded-2xl overflow-hidden border-2 border-amber-200 bg-amber-50 relative shrink-0">
              <img src={wordVisual.url} alt={wordVisual.alt} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 text-2xl bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow">
                {slide.emoji}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2 min-w-0">
              {slide.highlightToken && (
                <span className="px-3 py-0.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 font-display font-bold text-sm sm:text-base">
                  Trọng tâm: {slide.highlightToken}
                </span>
              )}
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-none">
                {slide.wordOrPhraseEn}
              </h3>
              <p className="text-xs sm:text-base font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-2xl border border-amber-200">
                {slide.meaningVi}
              </p>

              {viseme && (
                <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-2xl p-1.5 sm:p-2 w-full max-w-xs">
                  <img
                    src={viseme.url}
                    alt={viseme.alt}
                    className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl object-cover border border-sky-300 shrink-0"
                  />
                  <span className="text-[11px] font-bold text-sky-950 text-left leading-snug">
                    Khẩu hình miệng chuẩn: {viseme.labelVi}
                  </span>
                </div>
              )}

              {(interimText || tryFeedback) && (
                <div className="w-full px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-extrabold truncate">
                  {interimText ? `🎙️ Nghe được: "${interimText}"` : tryFeedback}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Presenter + Voice Practice Controls */}
        <div className="order-2 lg:order-1 lg:col-span-5 shrink-0 lg:shrink relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-sky-900 rounded-3xl border-4 border-amber-300 p-3 sm:p-4 flex flex-row lg:flex-col items-center lg:items-stretch justify-between gap-3 text-white shadow-xl">
          <img
            src={WORLD_BACKDROP_ASSETS[unit.worldId] || WORLD_BACKDROP_ASSETS[1]}
            alt={unit.titleVi}
            className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none select-none"
            draggable={false}
          />
          <div className="relative z-10 shrink-0 flex flex-col items-center">
            <CharacterRigSvg
              template={hero.template}
              primaryColor={hero.primaryColor}
              secondaryColor={hero.secondaryColor}
              accentColor={hero.accentColor}
              pose="idle"
              isSpeaking={isSpeakingAudio}
              customAvatarUrl={hero.customAvatarUrl}
              interactiveOrbit
              className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            />
          </div>

          <div className="relative z-10 flex-1 min-w-0 flex flex-col justify-between gap-2">
            <div className="hidden lg:flex items-center justify-between text-xs font-bold text-amber-300">
              <span>🎬 HOẠT CẢNH ({slideIndex + 1}/{slides.length})</span>
              <span className="font-mono bg-white/10 px-2 py-0.5 rounded-full">{unit.ageBand}</span>
            </div>

            <div className="bg-white text-slate-950 rounded-2xl px-3 py-2 border-2 border-amber-300 shadow-sm">
              <p className="font-display text-sm sm:text-xl font-bold text-indigo-700 leading-snug line-clamp-2">
                “{slide.heroActionLineEn}”
              </p>
              <p className="hidden sm:block text-[11px] font-bold text-slate-600 mt-0.5">
                {slide.meaningVi}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={playSlideAudio}
                className="px-3 py-2.5 min-h-[44px] rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1 cursor-pointer shrink-0"
              >
                <Volume2 className="w-4 h-4" />
                <span>Nghe Mẫu</span>
              </button>
              <button
                type="button"
                onClick={handleQuickSpeakPractice}
                className={`flex-1 py-2.5 px-3 min-h-[44px] rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                  micTrying
                    ? 'bg-rose-500 text-white ring-2 ring-rose-300 animate-pulse'
                    : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950'
                }`}
              >
                <Mic className="w-4 h-4" />
                <span>{micTrying ? `Đang nghe (${micVolume}%)` : 'Bé Đọc Thử'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Slide Dots & Manual Override */}
      <div className="shrink-0 max-w-6xl w-full mx-auto flex items-center justify-between gap-2">
        <button
          type="button"
          disabled={slideIndex === 0}
          onClick={() => setSlideIndex((i) => Math.max(0, i - 1))}
          className="px-3.5 py-2 min-h-[44px] rounded-2xl bg-white border-2 border-amber-300 font-black text-xs sm:text-sm text-slate-900 disabled:opacity-40 cursor-pointer"
        >
          ← Trước
        </button>

        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSlideIndex(idx)}
              className={`h-3 rounded-full transition-all cursor-pointer ${
                idx === slideIndex ? 'w-8 bg-amber-500' : 'w-3 bg-amber-200'
              }`}
              aria-label={`Thẻ ${idx + 1}`}
            />
          ))}
        </div>

        {slideIndex < slides.length - 1 ? (
          <button
            type="button"
            onClick={() => setSlideIndex((i) => i + 1)}
            className="inline-flex items-center gap-1 px-4 py-2 min-h-[44px] rounded-2xl bg-amber-400 hover:bg-amber-300 border-2 border-amber-600 font-black text-xs sm:text-sm text-slate-950 shadow-sm cursor-pointer"
          >
            <span>Tiếp Theo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onStartBattle}
            className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2.5 min-h-[44px] rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 border-2 border-emerald-700 font-black text-xs sm:text-base text-slate-950 shadow-lg cursor-pointer"
          >
            <Swords className="w-4 h-4" />
            <span>Vào Chiến Đấu!</span>
          </button>
        )}
      </div>

      {/* Auto Battle Transition Overlay */}
      {enteringBattle && (
        <div className="absolute inset-0 z-40 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-amber-400 rounded-3xl px-8 py-6 text-center shadow-2xl animate-speech-pop">
            <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-2 animate-spin" />
            <p className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              ⚔️ 3... 2... 1... Xuất Kích!
            </p>
            <p className="text-sm font-bold text-indigo-700 mt-1">
              {hero.nameVi} đang tiến vào Đấu Trường Giọng Nói!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
