import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  RotateCw, 
  Shuffle, 
  Play, 
  Pause, 
  Star, 
  Heart, 
  Music, 
  CheckCircle2, 
  HelpCircle,
  Eye,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KanaItem, KanaRowKey } from '../types/japanese';
import { ALL_KANA_CHARACTERS, JAPANESE_GOJUON_ROWS, KANA_ROW_METADATA } from '../data/japanese/gojuonData';
import { audioService } from '../services/audioService';
import { KidButton } from './KidButton';

interface KanaFlashcardStudioProps {
  onAddStars?: (amount: number) => void;
  onNavigateToBoard?: (rowKey?: KanaRowKey, kanaId?: string) => void;
}

type AudioMode = 'kana_only' | 'kana_word' | 'tpr_chant';
type AutoAdvanceSpeed = 'off' | 'slow' | 'normal' | 'fast';

const AUTO_ADVANCE_DELAYS: Record<Exclude<AutoAdvanceSpeed, 'off'>, number> = {
  slow: 5000,
  normal: 3500,
  fast: 2200
};

export const KanaFlashcardStudio: React.FC<KanaFlashcardStudioProps> = ({
  onAddStars,
  onNavigateToBoard
}) => {
  // Filters & Order state
  const [selectedRowKey, setSelectedRowKey] = useState<KanaRowKey | 'all'>('all');
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [shuffledSeed, setShuffledSeed] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Audio & Playback settings
  const [audioMode, setAudioMode] = useState<AudioMode>(() => {
    try {
      const saved = localStorage.getItem('kana_flashcard_audio_mode') as AudioMode;
      if (saved && ['kana_only', 'kana_word', 'tpr_chant'].includes(saved)) return saved;
    } catch {}
    return 'kana_word';
  });

  const [isAutoRead, setIsAutoRead] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('kana_flashcard_auto_read');
      if (saved !== null) return saved === 'true';
    } catch {}
    return true;
  });

  const [autoAdvanceSpeed, setAutoAdvanceSpeed] = useState<AutoAdvanceSpeed>(() => {
    try {
      const saved = localStorage.getItem('kana_flashcard_auto_advance') as AutoAdvanceSpeed;
      if (saved && ['off', 'slow', 'normal', 'fast'].includes(saved)) return saved;
    } catch {}
    return 'off';
  });

  // Learned / Mastered tracking
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('phonokids_mastered_kana');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // References
  const abortRef = useRef<{ cancelled: boolean }>({ cancelled: false });
  const autoPlayTimeoutRef = useRef<any>(null);
  const autoAdvanceTimeoutRef = useRef<any>(null);

  // Filtered dataset
  const activeDeck = useMemo(() => {
    let items = selectedRowKey === 'all' 
      ? [...ALL_KANA_CHARACTERS]
      : ALL_KANA_CHARACTERS.filter(item => item.row === selectedRowKey);

    if (isShuffled) {
      // Deterministic shuffle based on shuffledSeed
      const arr = [...items];
      let m = arr.length;
      let t: KanaItem;
      let i: number;
      let s = shuffledSeed;
      const pseudoRandom = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
      };
      while (m) {
        i = Math.floor(pseudoRandom() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }
      return arr;
    }

    return items;
  }, [selectedRowKey, isShuffled, shuffledSeed]);

  // Keep index within bounds
  useEffect(() => {
    if (currentIndex >= activeDeck.length) {
      setCurrentIndex(0);
    }
  }, [activeDeck.length, currentIndex]);

  const currentKana: KanaItem | undefined = activeDeck[currentIndex] || activeDeck[0];

  // Play audio sequence according to audioMode
  const playKanaAudio = useCallback(async (mode: AudioMode = audioMode, targetKana = currentKana) => {
    if (!targetKana) return;

    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);

    abortRef.current.cancelled = true;
    audioService.stopSpeaking();

    const token = { cancelled: false };
    abortRef.current = token;
    setIsPlayingAudio(true);

    try {
      if (mode === 'kana_only') {
        await audioService.speakJapanese(targetKana.hiragana, 0.85);
      } else if (mode === 'kana_word') {
        // Step 1: Speak Kana letter
        await audioService.speakJapanese(targetKana.hiragana, 0.85);
        if (token.cancelled) return;
        await new Promise((r) => setTimeout(r, 260));
        if (token.cancelled) return;
        // Step 2: Speak first sample word
        if (targetKana.sampleWords.length > 0) {
          await audioService.speakJapanese(targetKana.sampleWords[0].word, 0.85);
        }
      } else if (mode === 'tpr_chant') {
        await audioService.playJapaneseTprAction(
          targetKana.tprAction.chantJa,
          targetKana.sampleWords[0]?.word || targetKana.hiragana
        );
      }
    } catch {
      // speech interrupted
    } finally {
      if (!token.cancelled) {
        setIsPlayingAudio(false);

        // If Auto-Advance is active, schedule next card transition
        if (autoAdvanceSpeed !== 'off') {
          const delay = AUTO_ADVANCE_DELAYS[autoAdvanceSpeed];
          autoAdvanceTimeoutRef.current = setTimeout(() => {
            handleNextCard();
          }, delay);
        }
      }
    }
  }, [audioMode, currentKana, autoAdvanceSpeed]);

  // Handle card change side-effects (Reset flip, trigger Auto-Read)
  useEffect(() => {
    setIsFlipped(false);

    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);

    if (isAutoRead && currentKana) {
      autoPlayTimeoutRef.current = setTimeout(() => {
        playKanaAudio(audioMode, currentKana);
      }, 250);
    } else if (autoAdvanceSpeed !== 'off') {
      // If Auto-Read is off but Auto-Advance is on, advance on timer
      const delay = AUTO_ADVANCE_DELAYS[autoAdvanceSpeed];
      autoAdvanceTimeoutRef.current = setTimeout(() => {
        handleNextCard();
      }, delay);
    }

    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
      if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
    };
  }, [currentKana?.id, isAutoRead, autoAdvanceSpeed]);

  // Next / Previous Card Handlers
  const handleNextCard = () => {
    audioService.playPopSound(520);
    setCurrentIndex((prev) => (prev + 1) % activeDeck.length);
  };

  const handlePrevCard = () => {
    audioService.playPopSound(460);
    setCurrentIndex((prev) => (prev - 1 + activeDeck.length) % activeDeck.length);
  };

  const handleFlipCard = () => {
    audioService.playPopSound(580);
    setIsFlipped((prev) => !prev);
  };

  const handleToggleShuffle = () => {
    audioService.playPopSound(550);
    setIsShuffled((prev) => !prev);
    setShuffledSeed(Date.now());
    setCurrentIndex(0);
  };

  const handleToggleAutoRead = () => {
    const next = !isAutoRead;
    setIsAutoRead(next);
    try {
      localStorage.setItem('kana_flashcard_auto_read', String(next));
    } catch {}
    if (!next) {
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
      setIsPlayingAudio(false);
    }
  };

  const handleAudioModeChange = (newMode: AudioMode) => {
    setAudioMode(newMode);
    try {
      localStorage.setItem('kana_flashcard_audio_mode', newMode);
    } catch {}
    playKanaAudio(newMode);
  };

  const handleToggleMastered = (kanaId: string) => {
    const isAlready = masteredIds.includes(kanaId);
    let updated: string[];
    if (isAlready) {
      updated = masteredIds.filter(id => id !== kanaId);
    } else {
      updated = [...masteredIds, kanaId];
      audioService.playSuccessJingle();
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
      onAddStars?.(2);
    }
    setMasteredIds(updated);
    try {
      localStorage.setItem('phonokids_mastered_kana', JSON.stringify(updated));
    } catch {}
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevCard();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleFlipCard();
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        playKanaAudio();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDeck.length, playKanaAudio]);

  if (!currentKana) return null;

  const isCurrentMastered = masteredIds.includes(currentKana.id);
  const progressPercent = Math.round(((currentIndex + 1) / activeDeck.length) * 100);

  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 py-1.5 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden select-none">
      
      {/* Top Bar: Progress, Row Filters & Auto-Advance */}
      <div className="shrink-0 bg-white/95 backdrop-blur-xs p-2 sm:p-2.5 rounded-2xl border-2 border-rose-200 shadow-xs mb-1.5 flex flex-col gap-1.5">
        
        {/* Row 1: Header Titles, Stats & Shuffle */}
        <div className="flex items-center justify-between gap-2">
          
          <div className="flex items-center space-x-2">
            <span className="text-base sm:text-lg font-black text-rose-950 flex items-center gap-1.5">
              <span>🎴</span>
              <span>Thẻ Flashcard Bảng Chữ Cái</span>
            </span>
            <span className="text-xs font-black text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
              {currentIndex + 1} / {activeDeck.length}
            </span>
            {masteredIds.length > 0 && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>Đã thuộc {masteredIds.length}/71</span>
              </span>
            )}
          </div>

          {/* Quick Actions (Shuffle & Jump to Explorer) */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleToggleShuffle}
              className={`px-2.5 py-1 rounded-xl text-xs font-black flex items-center space-x-1 transition-all cursor-pointer border ${
                isShuffled
                  ? 'bg-amber-500 text-white border-amber-600 shadow-xs ring-2 ring-amber-300'
                  : 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100'
              }`}
              title="Xáo trộn thứ tự các thẻ học ngẫu nhiên"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">{isShuffled ? 'Đã Xáo Trộn' : 'Xáo Trộn'}</span>
            </button>

            {onNavigateToBoard && (
              <button
                onClick={() => onNavigateToBoard(currentKana.row, currentKana.id)}
                className="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-500 text-white hover:bg-rose-600 transition-all cursor-pointer shadow-xs flex items-center space-x-1"
                title="Mở bảng khám phá 50 âm và xưởng tập tô chữ"
              >
                <span>✍️ Tập Tô Nét</span>
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Scrollable Row Filter Pills */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 scrollbar-none text-xs">
          <button
            onClick={() => {
              audioService.playPopSound(500);
              setSelectedRowKey('all');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-xl font-black shrink-0 transition-all cursor-pointer border ${
              selectedRowKey === 'all'
                ? 'bg-rose-500 text-white border-rose-600 shadow-xs'
                : 'bg-rose-50/80 text-rose-900 border-rose-200 hover:bg-rose-100'
            }`}
          >
            Tất Cả (71)
          </button>

          {(Object.keys(KANA_ROW_METADATA) as KanaRowKey[]).map((key) => {
            const meta = KANA_ROW_METADATA[key];
            const isSelected = selectedRowKey === key;
            return (
              <button
                key={key}
                onClick={() => {
                  audioService.playPopSound(510);
                  setSelectedRowKey(key);
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1 rounded-xl font-black shrink-0 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-rose-500 text-white border-rose-600 shadow-xs scale-102'
                    : 'bg-rose-50/70 text-rose-900 border-rose-200 hover:bg-rose-100'
                }`}
              >
                {meta.nameJa} • {meta.nameVi}
              </button>
            );
          })}
        </div>

        {/* Row 3: Audio Modes & Auto-Advance Selector */}
        <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1 border-t border-rose-100 text-xs">
          
          {/* Audio Modes */}
          <div className="flex items-center space-x-1 bg-rose-50/80 p-0.5 rounded-xl border border-rose-200">
            <button
              onClick={handleToggleAutoRead}
              className={`px-2 py-0.5 rounded-lg font-black flex items-center space-x-1 transition-all cursor-pointer border ${
                isAutoRead ? 'bg-rose-600 text-white border-rose-700' : 'bg-gray-100 text-gray-500 border-gray-300'
              }`}
              title="Tự động đọc âm khi sang thẻ mới"
            >
              {isAutoRead ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{isAutoRead ? 'Tự Đọc: BẬT' : 'Tắt'}</span>
            </button>

            <div className="w-[1px] h-3 bg-rose-200" />

            <button
              onClick={() => handleAudioModeChange('kana_only')}
              className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer border ${
                audioMode === 'kana_only'
                  ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                  : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
              }`}
            >
              🔊 Chỉ Chữ
            </button>
            <button
              onClick={() => handleAudioModeChange('kana_word')}
              className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer border ${
                audioMode === 'kana_word'
                  ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                  : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
              }`}
            >
              🔤 Chữ + Từ
            </button>
            <button
              onClick={() => handleAudioModeChange('tpr_chant')}
              className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer border ${
                audioMode === 'tpr_chant'
                  ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                  : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
              }`}
            >
              🎶 Đồng Dao
            </button>
          </div>

          {/* Auto-Advance Speed Pills */}
          <div className="flex items-center space-x-1">
            <span className="text-[11px] font-bold text-rose-900 hidden sm:inline">Tự Chuyển Thẻ:</span>
            <div className="flex items-center bg-rose-50/80 p-0.5 rounded-xl border border-rose-200">
              <button
                onClick={() => {
                  setAutoAdvanceSpeed('off');
                  try { localStorage.setItem('kana_flashcard_auto_advance', 'off'); } catch {}
                }}
                className={`px-2 py-0.5 rounded-lg font-black text-[11px] transition-all cursor-pointer ${
                  autoAdvanceSpeed === 'off' ? 'bg-white text-rose-950 shadow-xs font-black' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Tắt
              </button>
              <button
                onClick={() => {
                  setAutoAdvanceSpeed('slow');
                  try { localStorage.setItem('kana_flashcard_auto_advance', 'slow'); } catch {}
                }}
                className={`px-2 py-0.5 rounded-lg font-black text-[11px] transition-all cursor-pointer ${
                  autoAdvanceSpeed === 'slow' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-rose-800 hover:text-rose-950'
                }`}
                title="Tự chuyển sau 5.0 giây (Tốc độ rùa thong thả)"
              >
                🐢 5s
              </button>
              <button
                onClick={() => {
                  setAutoAdvanceSpeed('normal');
                  try { localStorage.setItem('kana_flashcard_auto_advance', 'normal'); } catch {}
                }}
                className={`px-2 py-0.5 rounded-lg font-black text-[11px] transition-all cursor-pointer ${
                  autoAdvanceSpeed === 'normal' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-rose-800 hover:text-rose-950'
                }`}
                title="Tự chuyển sau 3.5 giây (Tốc độ thỏ vừa vặn)"
              >
                🐇 3.5s
              </button>
              <button
                onClick={() => {
                  setAutoAdvanceSpeed('fast');
                  try { localStorage.setItem('kana_flashcard_auto_advance', 'fast'); } catch {}
                }}
                className={`px-2 py-0.5 rounded-lg font-black text-[11px] transition-all cursor-pointer ${
                  autoAdvanceSpeed === 'fast' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-rose-800 hover:text-rose-950'
                }`}
                title="Tự chuyển sau 2.2 giây (Tốc độ tia chớp)"
              >
                ⚡ 2.2s
              </button>
            </div>
          </div>
        </div>

        {/* Thin Cheerful Progress Line */}
        <div className="w-full bg-rose-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Flashcard Viewport (Centered 3D Tactile Card) */}
      <div className="flex-1 min-h-0 flex items-center justify-center py-1">
        
        {/* 3D Flip Card Container */}
        <div 
          onClick={handleFlipCard}
          className="relative w-full max-w-xl h-full max-h-[460px] cursor-pointer group perspective-1000"
        >
          <div 
            className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            
            {/* ========================================= */}
            {/* FRONT SIDE (MẶT TRƯỚC: CHỮ HIRAGANA LỚN) */}
            {/* ========================================= */}
            <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-white via-rose-50/40 to-amber-50/60 rounded-3xl border-4 border-rose-300 shadow-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black bg-rose-500 text-white px-3 py-1 rounded-xl shadow-xs">
                    {KANA_ROW_METADATA[currentKana.row]?.nameJa} • {KANA_ROW_METADATA[currentKana.row]?.nameVi}
                  </span>
                  <span className="text-xs font-bold text-rose-800 bg-white px-2 py-0.5 rounded-lg border border-rose-200">
                    Nét bút: {currentKana.strokeOrder.strokeCount}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleMastered(currentKana.id);
                    }}
                    className={`p-1.5 rounded-xl border-2 transition-all cursor-pointer ${
                      isCurrentMastered
                        ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-sm'
                        : 'bg-white text-gray-400 border-gray-200 hover:text-amber-500 hover:border-amber-300'
                    }`}
                    title={isCurrentMastered ? 'Đã đánh dấu thuộc' : 'Đánh dấu đã thuộc (+2 sao)'}
                  >
                    <Star className={`w-4 h-4 ${isCurrentMastered ? 'fill-amber-950 text-amber-950' : ''}`} />
                  </button>
                  <span className="text-xs font-bold text-gray-400 bg-white/80 px-2 py-1 rounded-lg border border-gray-200">
                    Mặt trước
                  </span>
                </div>
              </div>

              {/* Center Giant Glyph & Badges */}
              <div className="flex flex-col items-center justify-center my-auto text-center">
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <span className="text-7xl sm:text-8xl md:text-9xl font-black text-rose-600 tracking-tight leading-none drop-shadow-sm select-none">
                    {currentKana.hiragana}
                  </span>
                  {isPlayingAudio && (
                    <div className="absolute -inset-3 rounded-full border-4 border-rose-400 animate-ping opacity-30 pointer-events-none" />
                  )}
                </div>

                {/* Sub Badges: Katakana & Romaji */}
                <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                  <span className="text-xs sm:text-sm font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-xl border border-amber-200">
                    Katakana: <strong className="text-base text-amber-700">{currentKana.katakana}</strong>
                  </span>
                  <span className="text-xs sm:text-sm font-black text-rose-900 bg-rose-100 px-3 py-1 rounded-xl border border-rose-200">
                    Romaji: <strong className="text-base text-rose-600">/{currentKana.romaji}/</strong>
                  </span>
                </div>

                {/* Preview Mini Word Pill */}
                {currentKana.sampleWords.length > 0 && (
                  <div className="mt-2 text-xs font-bold text-rose-900/80 bg-white/90 px-3 py-1 rounded-full border border-rose-200/80 shadow-2xs inline-flex items-center gap-1.5">
                    <span>✨</span>
                    <span>Từ mẫu: <strong>{currentKana.sampleWords[0].word}</strong> ({currentKana.sampleWords[0].meaningVi})</span>
                  </div>
                )}
              </div>

              {/* Bottom Card Prompts */}
              <div className="flex items-center justify-between shrink-0 pt-2 border-t border-rose-100">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playKanaAudio(audioMode);
                  }}
                  className={`px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md flex items-center space-x-1.5 cursor-pointer active:scale-95 transition-all ${
                    isPlayingAudio ? 'ring-4 ring-purple-300 animate-pulse' : ''
                  }`}
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                  <span>
                    {isPlayingAudio ? 'Đang đọc...' : 'Nghe Phát Âm 🔊'}
                  </span>
                </button>

                <div className="text-right text-[11px] font-black text-rose-700 flex items-center space-x-1 group-hover:text-rose-950 transition-colors">
                  <span>Chạm để lật mặt sau</span>
                  <RotateCw className="w-3.5 h-3.5 inline animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* BACK SIDE (MẶT SAU: TRANH EHON, TỪ VỰNG & ĐỒNG DAO TPR) */}
            {/* ======================================================== */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-white via-amber-50/50 to-orange-50/60 rounded-3xl border-4 border-amber-300 shadow-xl p-3 sm:p-5 flex flex-col justify-between overflow-hidden">
              
              {/* Back Header */}
              <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black bg-amber-500 text-amber-950 px-3 py-1 rounded-xl shadow-xs">
                    🎨 Tranh Vẽ Ehon & Từ Vựng
                  </span>
                  <span className="text-xs font-black text-rose-600 bg-white px-2 py-0.5 rounded-lg border border-amber-200">
                    {currentKana.hiragana} • {currentKana.katakana}
                  </span>
                </div>

                <div className="flex items-center space-x-1 text-xs font-black text-amber-800">
                  <span>Lật lại</span>
                  <RotateCw className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Main Artwork & Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto items-center">
                
                {/* Left: Ehon Artwork Image Frame */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md bg-amber-100 aspect-4/3 max-h-44 sm:max-h-52 w-full mx-auto group-hover:scale-102 transition-transform">
                  <img
                    src={currentKana.sampleWords[0]?.visualUrl || '/assets/ehon/theme_nature.jpg'}
                    alt={currentKana.sampleWords[0]?.visualAlt || 'Tranh Ehon'}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                    Ehon Art
                  </div>
                </div>

                {/* Right: Target Word & TPR Chant */}
                <div className="flex flex-col justify-center space-y-2 text-left">
                  
                  {/* Primary Sample Word */}
                  {currentKana.sampleWords[0] && (
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        audioService.speakJapanese(currentKana.sampleWords[0].word, 0.85);
                      }}
                      className="bg-white/95 p-2.5 rounded-2xl border-2 border-amber-200 shadow-xs hover:border-amber-400 transition-all cursor-pointer group/word"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="text-xl sm:text-2xl font-black text-amber-950">
                            {currentKana.sampleWords[0].word}
                          </span>
                          {currentKana.sampleWords[0].kanji && (
                            <span className="text-sm font-bold text-gray-500">
                              ({currentKana.sampleWords[0].kanji})
                            </span>
                          )}
                        </div>
                        <Volume2 className="w-4 h-4 text-amber-600 group-hover/word:scale-110 transition-transform" />
                      </div>

                      <p className="text-xs font-bold text-amber-700">
                        /{currentKana.sampleWords[0].romaji}/ • {currentKana.sampleWords[0].meaningVi}
                      </p>
                    </div>
                  )}

                  {/* TPR Chant Box */}
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      playKanaAudio('tpr_chant');
                    }}
                    className="bg-rose-50 p-2.5 rounded-2xl border-2 border-rose-200 shadow-xs hover:border-rose-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-base">{currentKana.tprAction.icon}</span>
                      <span className="text-xs font-black text-rose-950">
                        Đồng dao: {currentKana.tprAction.chantJa}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium text-rose-900 leading-tight">
                      {currentKana.tprAction.descriptionVi}
                    </p>
                  </div>
                </div>
              </div>

              {/* Back Card Footer: Sound Action */}
              <div className="flex items-center justify-between shrink-0 pt-1.5 border-t border-amber-200">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playKanaAudio('tpr_chant');
                  }}
                  className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow-xs flex items-center space-x-1 cursor-pointer active:scale-95"
                >
                  <Music className="w-3.5 h-3.5" />
                  <span>Hát Đồng Dao TPR</span>
                </button>

                <span className="text-[11px] font-bold text-amber-800">
                  Nhấn [Space] hoặc chạm để lật lại
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Sticky Action Footer (Prev, Flip, Mastered, Next) */}
      <div className="shrink-0 bg-white/95 backdrop-blur-xs p-2 rounded-2xl border-2 border-rose-200 shadow-sm flex items-center justify-between gap-2">
        
        {/* Prev Button */}
        <button
          onClick={handlePrevCard}
          className="px-3 sm:px-4 py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs sm:text-sm flex items-center space-x-1 border border-amber-300 cursor-pointer active:scale-95 transition-all shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Thẻ Trước</span>
          <kbd className="hidden sm:inline text-[10px] bg-white/70 px-1 py-0.5 rounded text-amber-900 ml-1">←</kbd>
        </button>

        {/* Center Main Flip Button */}
        <KidButton
          variant="warning"
          size="md"
          onClick={handleFlipCard}
          className="py-2 px-4 sm:px-6 text-xs sm:text-sm font-black shadow-md flex items-center space-x-1.5"
        >
          <RotateCw className="w-4 h-4" />
          <span>{isFlipped ? 'Lật Mặt Trước' : 'Lật Mặt Sau'}</span>
          <kbd className="hidden sm:inline text-[10px] bg-amber-100/90 text-amber-950 px-1.5 py-0.5 rounded ml-1 font-mono">Space</kbd>
        </KidButton>

        {/* Mastered Star Button */}
        <button
          onClick={() => handleToggleMastered(currentKana.id)}
          className={`px-3 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center space-x-1.5 transition-all cursor-pointer border ${
            isCurrentMastered
              ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-sm ring-2 ring-amber-200'
              : 'bg-white text-gray-700 border-gray-300 hover:border-amber-400 hover:text-amber-800'
          }`}
          title="Đánh dấu đã thuộc chữ này để nhận sao thưởng"
        >
          <Star className={`w-4 h-4 ${isCurrentMastered ? 'fill-amber-950 text-amber-950' : 'text-gray-400'}`} />
          <span className="hidden md:inline">{isCurrentMastered ? 'Đã Thuộc ⭐' : 'Chưa Thuộc'}</span>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextCard}
          className="px-3 sm:px-4 py-2 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs sm:text-sm flex items-center space-x-1 border border-rose-600 cursor-pointer active:scale-95 transition-all shadow-xs"
        >
          <span className="hidden xs:inline">Thẻ Tiếp</span>
          <kbd className="hidden sm:inline text-[10px] bg-rose-600 px-1 py-0.5 rounded text-white ml-1">→</kbd>
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};

export default KanaFlashcardStudio;
