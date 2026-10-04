import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { 
  X, 
  Volume2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Search, 
  RotateCw, 
  Shuffle, 
  Play, 
  Pause, 
  Star, 
  Music, 
  Layers, 
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KanaItem, KanaRowKey } from '../types/japanese';
import { ALL_KANA_CHARACTERS, JAPANESE_GOJUON_ROWS, KANA_ROW_METADATA } from '../data/japanese/gojuonData';
import { audioService } from '../services/audioService';
import { KidButton } from './KidButton';

export interface KanaWordBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRowKey?: KanaRowKey;
  initialKanaId?: string;
  initialViewMode?: 'grid' | 'flashcard';
  onAddStars?: (amount: number) => void;
}

type AudioMode = 'kana_only' | 'kana_word' | 'tpr_chant';
type AutoAdvanceSpeed = 'off' | 'slow' | 'normal' | 'fast';

const AUTO_ADVANCE_DELAYS: Record<Exclude<AutoAdvanceSpeed, 'off'>, number> = {
  slow: 5000,
  normal: 3500,
  fast: 2200
};

export const KanaWordBankModal: React.FC<KanaWordBankModalProps> = ({
  isOpen,
  onClose,
  initialRowKey,
  initialKanaId,
  initialViewMode = 'grid',
  onAddStars
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'flashcard'>(initialViewMode);
  const [selectedRowKey, setSelectedRowKey] = useState<KanaRowKey | 'all'>(initialRowKey || 'all');
  const [selectedScript, setSelectedScript] = useState<'all' | 'hiragana' | 'katakana'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);

  // Flashcard states
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledSeed, setShuffledSeed] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

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

  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('phonokids_mastered_kana');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  const PAGE_SIZE = 8;
  const abortRef = useRef<{ cancelled: boolean }>({ cancelled: false });
  const autoPlayTimeoutRef = useRef<any>(null);
  const autoAdvanceTimeoutRef = useRef<any>(null);

  // Sync initial props
  useEffect(() => {
    if (isOpen) {
      if (initialViewMode) setViewMode(initialViewMode);
      if (initialRowKey) setSelectedRowKey(initialRowKey);
      if (initialKanaId) {
        const idx = ALL_KANA_CHARACTERS.findIndex(k => k.id === initialKanaId);
        if (idx !== -1) setFlashcardIndex(idx);
      }
    } else {
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
    }
  }, [isOpen, initialViewMode, initialRowKey, initialKanaId]);

  // Filtered Kana Items
  const filteredKana = useMemo(() => {
    return ALL_KANA_CHARACTERS.filter((item) => {
      // Row filter
      if (selectedRowKey !== 'all' && item.row !== selectedRowKey) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchKana = item.hiragana.includes(q) || item.katakana.includes(q);
        const matchRomaji = item.romaji.toLowerCase().includes(q);
        const matchWord = item.sampleWords.some(
          w => w.word.toLowerCase().includes(q) || 
               w.romaji.toLowerCase().includes(q) || 
               w.meaningVi.toLowerCase().includes(q)
        );
        if (!matchKana && !matchRomaji && !matchWord) return false;
      }

      return true;
    });
  }, [selectedRowKey, searchQuery]);

  // Shuffled or standard order
  const displayDeck = useMemo(() => {
    if (!isShuffled) return filteredKana;
    const arr = [...filteredKana];
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
  }, [filteredKana, isShuffled, shuffledSeed]);

  useEffect(() => {
    setPage(0);
    setFlashcardIndex(0);
  }, [selectedRowKey, searchQuery, isShuffled]);

  const totalPages = Math.max(1, Math.ceil(filteredKana.length / PAGE_SIZE));
  const currentPageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return filteredKana.slice(start, start + PAGE_SIZE);
  }, [filteredKana, page]);

  const currentFlashcard = displayDeck[flashcardIndex] || displayDeck[0] || null;

  // Play card audio sequence
  const playFlashcardAudio = useCallback(async (mode: AudioMode = audioMode, targetKana = currentFlashcard) => {
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

        if (autoAdvanceSpeed !== 'off') {
          const delay = AUTO_ADVANCE_DELAYS[autoAdvanceSpeed];
          autoAdvanceTimeoutRef.current = setTimeout(() => {
            setFlashcardIndex((prev) => (prev + 1) % displayDeck.length);
          }, delay);
        }
      }
    }
  }, [audioMode, currentFlashcard, autoAdvanceSpeed, displayDeck.length]);

  // Handle card change side-effects
  useEffect(() => {
    setIsFlipped(false);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);

    if (viewMode === 'flashcard' && isAutoRead && currentFlashcard) {
      autoPlayTimeoutRef.current = setTimeout(() => {
        playFlashcardAudio(audioMode, currentFlashcard);
      }, 250);
    } else if (viewMode === 'flashcard' && autoAdvanceSpeed !== 'off') {
      const delay = AUTO_ADVANCE_DELAYS[autoAdvanceSpeed];
      autoAdvanceTimeoutRef.current = setTimeout(() => {
        setFlashcardIndex((prev) => (prev + 1) % displayDeck.length);
      }, delay);
    }

    return () => {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
      if (autoAdvanceTimeoutRef.current) clearTimeout(autoAdvanceTimeoutRef.current);
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
    };
  }, [currentFlashcard?.id, viewMode, isAutoRead, autoAdvanceSpeed, displayDeck.length]);

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

  // Keyboard navigation for flashcard
  useEffect(() => {
    if (!isOpen || viewMode !== 'flashcard') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        audioService.playPopSound(520);
        setFlashcardIndex((prev) => (prev + 1) % displayDeck.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        audioService.playPopSound(460);
        setFlashcardIndex((prev) => (prev - 1 + displayDeck.length) % displayDeck.length);
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        audioService.playPopSound(580);
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        playFlashcardAudio();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, viewMode, displayDeck.length, playFlashcardAudio, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 select-none animate-fade-in">
      <div className="bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50 w-full max-w-5xl h-[94vh] max-h-[780px] rounded-3xl border-4 border-amber-300 shadow-2xl flex flex-col overflow-hidden">
        
        {/* ========================================= */}
        {/* 1. TOP HEADER & VIEW MODE SWITCHER       */}
        {/* ========================================= */}
        <div className="bg-white/95 border-b-2 border-amber-200 px-4 py-2.5 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
              🎴
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-black text-amber-950 leading-tight">
                  Kho Bảng Chữ Cái & Từ Vựng Tiếng Nhật
                </h3>
                <span className="text-xs font-black text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-200">
                  {filteredKana.length} Ký Tự Kana
                </span>
              </div>
              <p className="text-[11px] font-bold text-amber-800 hidden sm:block">
                Hệ thống 71 âm Gojūon, Dakuon & Handakuon tranh Ehon màu nước
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Mode Toggle: Grid ⇄ Flashcard */}
            <div className="flex items-center bg-amber-100 p-1 rounded-2xl border border-amber-300">
              <button
                onClick={() => {
                  audioService.playPopSound(500);
                  setViewMode('grid');
                }}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-amber-950 shadow-xs'
                    : 'text-amber-900 hover:bg-amber-200/60'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Dạng Lưới (Grid)</span>
              </button>

              <button
                onClick={() => {
                  audioService.playPopSound(520);
                  setViewMode('flashcard');
                }}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
                  viewMode === 'flashcard'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-rose-900 hover:bg-rose-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Thẻ Flashcard 3D</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                audioService.playPopSound(420);
                onClose();
              }}
              className="w-9 h-9 rounded-2xl bg-amber-100 hover:bg-rose-100 hover:text-rose-600 text-amber-900 flex items-center justify-center transition-all cursor-pointer border border-amber-300 shadow-xs active:scale-90"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* 2. FILTER RIBBON & SEARCH                */}
        {/* ========================================= */}
        <div className="bg-amber-50/90 border-b border-amber-200 px-3 sm:px-4 py-2 shrink-0 flex flex-col gap-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] max-w-md">
              <Search className="w-4 h-4 text-amber-700 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm chữ, romaji, từ vựng hoặc nghĩa (vd: a, ame, mưa)..."
                className="w-full pl-9 pr-3 py-1.5 bg-white rounded-xl border border-amber-300 text-xs font-bold text-amber-950 placeholder-amber-600/70 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Script Filter: Hiragana / Katakana */}
            <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-amber-200 text-xs">
              <button
                onClick={() => {
                  audioService.playPopSound(500);
                  setSelectedScript('all');
                }}
                className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer ${
                  selectedScript === 'all' ? 'bg-amber-400 text-amber-950' : 'text-amber-900 hover:bg-amber-50'
                }`}
              >
                Cả hai
              </button>
              <button
                onClick={() => {
                  audioService.playPopSound(500);
                  setSelectedScript('hiragana');
                }}
                className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer ${
                  selectedScript === 'hiragana' ? 'bg-rose-500 text-white' : 'text-rose-900 hover:bg-rose-50'
                }`}
              >
                Hiragana
              </button>
              <button
                onClick={() => {
                  audioService.playPopSound(500);
                  setSelectedScript('katakana');
                }}
                className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer ${
                  selectedScript === 'katakana' ? 'bg-rose-500 text-white' : 'text-rose-900 hover:bg-rose-50'
                }`}
              >
                Katakana
              </button>
            </div>
          </div>

          {/* Row Filter Pills (Scrollable) */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-0.5 scrollbar-none text-xs">
            <button
              onClick={() => {
                audioService.playPopSound(500);
                setSelectedRowKey('all');
              }}
              className={`px-2.5 py-1 rounded-xl font-black shrink-0 transition-all cursor-pointer border ${
                selectedRowKey === 'all'
                  ? 'bg-rose-500 text-white border-rose-600 shadow-xs'
                  : 'bg-white text-rose-900 border-rose-200 hover:bg-rose-100'
              }`}
            >
              Tất Cả ({ALL_KANA_CHARACTERS.length})
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
                  }}
                  className={`px-2.5 py-1 rounded-xl font-black shrink-0 transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-rose-500 text-white border-rose-600 shadow-xs scale-102'
                      : 'bg-white/80 text-rose-900 border-rose-200 hover:bg-rose-100'
                  }`}
                >
                  {meta.nameJa} • {meta.nameVi}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================= */}
        {/* 3. MAIN CONTENT: GRID OR FLASHCARD       */}
        {/* ========================================= */}
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col p-2 sm:p-4">
          
          {/* ------------------------------------- */}
          {/* VIEW A: GRID MODE                     */}
          {/* ------------------------------------- */}
          {viewMode === 'grid' && (
            <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 overflow-y-auto pr-1 my-auto max-h-full">
                {currentPageItems.map((item) => {
                  const isMastered = masteredIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        audioService.playPopSound(540);
                        audioService.speakJapanese(item.hiragana, 0.85);
                      }}
                      className="bg-white rounded-2xl p-2.5 sm:p-3 border-2 border-amber-200 hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group active:scale-98"
                    >
                      {/* Card Top: Glyphs & Mastered Badge */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-baseline space-x-1.5">
                          <span className="text-3xl sm:text-4xl font-black text-rose-600 group-hover:scale-105 transition-transform">
                            {selectedScript === 'katakana' ? item.katakana : item.hiragana}
                          </span>
                          <span className="text-xs font-bold text-gray-500">
                            {selectedScript === 'katakana' ? item.hiragana : item.katakana}
                          </span>
                        </div>

                        <div className="flex items-center space-x-1">
                          {isMastered && (
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          )}
                          <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded-md">
                            /{item.romaji}/
                          </span>
                        </div>
                      </div>

                      {/* Card Mid: Sample Word Box */}
                      {item.sampleWords.length > 0 && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            audioService.playPopSound(520);
                            audioService.speakJapanese(item.sampleWords[0].word, 0.85);
                          }}
                          className="mt-2 bg-amber-50/70 p-1.5 rounded-xl border border-amber-200 flex items-center space-x-2 hover:bg-amber-100 transition-colors"
                        >
                          <img
                            src={item.sampleWords[0].visualUrl}
                            alt={item.sampleWords[0].visualAlt}
                            className="w-8 h-8 rounded-lg object-cover shrink-0 border border-amber-200"
                          />
                          <div className="min-w-0 flex-1 text-left">
                            <span className="text-xs font-black text-amber-950 block truncate">
                              {item.sampleWords[0].word}
                            </span>
                            <span className="text-[10px] font-bold text-amber-800 block truncate">
                              {item.sampleWords[0].meaningVi}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Card Bottom: Quick Actions */}
                      <div className="mt-2 pt-1 border-t border-amber-100 flex items-center justify-between text-[11px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const idx = displayDeck.findIndex(k => k.id === item.id);
                            if (idx !== -1) setFlashcardIndex(idx);
                            setViewMode('flashcard');
                          }}
                          className="text-rose-600 hover:text-rose-800 font-bold flex items-center gap-0.5"
                        >
                          <span>Lật Flashcard 🎴</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            audioService.speakJapanese(item.hiragana, 0.85);
                          }}
                          className="text-amber-700 hover:text-amber-950"
                          title="Nghe phát âm"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Grid Pagination Footer */}
              <div className="mt-2 pt-2 border-t border-amber-200 flex items-center justify-between shrink-0">
                <span className="text-xs font-bold text-amber-900">
                  Trang {page + 1} / {totalPages} • ({filteredKana.length} chữ)
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    disabled={page === 0}
                    onClick={() => {
                      audioService.playPopSound(460);
                      setPage((prev) => Math.max(0, prev - 1));
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-black border transition-all ${
                      page === 0
                        ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200'
                        : 'bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200 cursor-pointer'
                    }`}
                  >
                    ← Trang Trước
                  </button>

                  <button
                    disabled={page >= totalPages - 1}
                    onClick={() => {
                      audioService.playPopSound(520);
                      setPage((prev) => Math.min(totalPages - 1, prev + 1));
                    }}
                    className={`px-3 py-1 rounded-xl text-xs font-black border transition-all ${
                      page >= totalPages - 1
                        ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200'
                        : 'bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200 cursor-pointer'
                    }`}
                  >
                    Trang Sau →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------- */}
          {/* VIEW B: FLASHCARD 3D MODE             */}
          {/* ------------------------------------- */}
          {viewMode === 'flashcard' && currentFlashcard && (
            <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
              
              {/* Flashcard Header Controls */}
              <div className="shrink-0 flex flex-wrap items-center justify-between gap-1.5 bg-white/90 p-2 rounded-2xl border border-amber-200 shadow-2xs mb-1.5 text-xs">
                
                {/* Audio Mode Ribbon */}
                <div className="flex items-center space-x-1 bg-rose-50/80 p-0.5 rounded-xl border border-rose-200">
                  <button
                    onClick={() => setIsAutoRead(!isAutoRead)}
                    className={`px-2 py-0.5 rounded-lg font-black flex items-center space-x-1 transition-all cursor-pointer border ${
                      isAutoRead ? 'bg-rose-600 text-white border-rose-700' : 'bg-gray-100 text-gray-500 border-gray-300'
                    }`}
                    title="Tự động đọc âm khi đổi thẻ"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isAutoRead ? 'Tự Đọc: BẬT' : 'Tắt'}</span>
                  </button>

                  <div className="w-[1px] h-3 bg-rose-200" />

                  <button
                    onClick={() => setAudioMode('kana_only')}
                    className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer border ${
                      audioMode === 'kana_only'
                        ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                        : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
                    }`}
                  >
                    🔊 Chỉ Chữ
                  </button>
                  <button
                    onClick={() => setAudioMode('kana_word')}
                    className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer border ${
                      audioMode === 'kana_word'
                        ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                        : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
                    }`}
                  >
                    🔤 Chữ + Từ
                  </button>
                  <button
                    onClick={() => setAudioMode('tpr_chant')}
                    className={`px-2 py-0.5 rounded-lg font-black transition-all cursor-pointer border ${
                      audioMode === 'tpr_chant'
                        ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                        : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
                    }`}
                  >
                    🎶 Đồng Dao
                  </button>
                </div>

                {/* Counter & Shuffle */}
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                    {flashcardIndex + 1} / {displayDeck.length}
                  </span>

                  <button
                    onClick={() => {
                      audioService.playPopSound(550);
                      setIsShuffled(!isShuffled);
                      setShuffledSeed(Date.now());
                      setFlashcardIndex(0);
                    }}
                    className={`px-2.5 py-1 rounded-xl text-xs font-black flex items-center space-x-1 transition-all cursor-pointer border ${
                      isShuffled
                        ? 'bg-amber-500 text-white border-amber-600 shadow-xs ring-2 ring-amber-300'
                        : 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100'
                    }`}
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>{isShuffled ? 'Đã Xáo Trộn' : 'Xáo Trộn'}</span>
                  </button>

                  {/* Auto-Advance Speed */}
                  <div className="flex items-center bg-rose-50/80 p-0.5 rounded-xl border border-rose-200">
                    <button
                      onClick={() => setAutoAdvanceSpeed('off')}
                      className={`px-1.5 py-0.5 rounded-lg font-black text-[10px] ${
                        autoAdvanceSpeed === 'off' ? 'bg-white text-rose-950 shadow-xs' : 'text-gray-500'
                      }`}
                    >
                      Tắt Hẹn Giờ
                    </button>
                    <button
                      onClick={() => setAutoAdvanceSpeed('normal')}
                      className={`px-1.5 py-0.5 rounded-lg font-black text-[10px] ${
                        autoAdvanceSpeed === 'normal' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-rose-800'
                      }`}
                    >
                      🐇 3.5s
                    </button>
                    <button
                      onClick={() => setAutoAdvanceSpeed('slow')}
                      className={`px-1.5 py-0.5 rounded-lg font-black text-[10px] ${
                        autoAdvanceSpeed === 'slow' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-rose-800'
                      }`}
                    >
                      🐢 5s
                    </button>
                  </div>
                </div>
              </div>

              {/* 3D Tactile Card Viewport */}
              <div className="flex-1 min-h-0 flex items-center justify-center py-1">
                <div 
                  onClick={() => {
                    audioService.playPopSound(580);
                    setIsFlipped(!isFlipped);
                  }}
                  className="relative w-full max-w-xl h-full max-h-[440px] cursor-pointer group perspective-1000"
                >
                  <div 
                    className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    
                    {/* FRONT SIDE (MẶT TRƯỚC: CHỮ LỚN) */}
                    <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-white via-rose-50/40 to-amber-50/60 rounded-3xl border-4 border-rose-300 shadow-xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center justify-between shrink-0">
                        <span className="text-xs font-black bg-rose-500 text-white px-3 py-1 rounded-xl shadow-xs">
                          {KANA_ROW_METADATA[currentFlashcard.row]?.nameJa} • {KANA_ROW_METADATA[currentFlashcard.row]?.nameVi}
                        </span>

                        <div className="flex items-center space-x-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleMastered(currentFlashcard.id);
                            }}
                            className={`p-1.5 rounded-xl border-2 transition-all cursor-pointer ${
                              masteredIds.includes(currentFlashcard.id)
                                ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-sm'
                                : 'bg-white text-gray-400 border-gray-200 hover:text-amber-500'
                            }`}
                          >
                            <Star className={`w-4 h-4 ${masteredIds.includes(currentFlashcard.id) ? 'fill-amber-950 text-amber-950' : ''}`} />
                          </button>
                          <span className="text-xs font-bold text-gray-400 bg-white/80 px-2 py-0.5 rounded-lg border border-gray-200">
                            Mặt trước
                          </span>
                        </div>
                      </div>

                      {/* Giant Glyph */}
                      <div className="flex flex-col items-center justify-center my-auto text-center">
                        <div className="relative group-hover:scale-105 transition-transform duration-300">
                          <span className="text-7xl sm:text-8xl md:text-9xl font-black text-rose-600 tracking-tight leading-none drop-shadow-sm select-none">
                            {currentFlashcard.hiragana}
                          </span>
                          {isPlayingAudio && (
                            <div className="absolute -inset-3 rounded-full border-4 border-rose-400 animate-ping opacity-30 pointer-events-none" />
                          )}
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-2">
                          <span className="text-xs sm:text-sm font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-xl border border-amber-200">
                            Katakana: <strong className="text-base text-amber-700">{currentFlashcard.katakana}</strong>
                          </span>
                          <span className="text-xs sm:text-sm font-black text-rose-900 bg-rose-100 px-3 py-1 rounded-xl border border-rose-200">
                            Romaji: <strong className="text-base text-rose-600">/{currentFlashcard.romaji}/</strong>
                          </span>
                        </div>

                        {currentFlashcard.sampleWords[0] && (
                          <div className="mt-2 text-xs font-bold text-rose-900/80 bg-white/90 px-3 py-1 rounded-full border border-rose-200/80 shadow-2xs inline-flex items-center gap-1.5">
                            <span>✨</span>
                            <span>{currentFlashcard.sampleWords[0].word} ({currentFlashcard.sampleWords[0].meaningVi})</span>
                          </div>
                        )}
                      </div>

                      {/* Front Bottom */}
                      <div className="flex items-center justify-between shrink-0 pt-2 border-t border-rose-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playFlashcardAudio(audioMode);
                          }}
                          className={`px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center space-x-1.5 cursor-pointer active:scale-95 transition-all ${
                            isPlayingAudio ? 'ring-4 ring-purple-300 animate-pulse' : ''
                          }`}
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>{isPlayingAudio ? 'Đang đọc...' : 'Nghe Phát Âm 🔊'}</span>
                        </button>

                        <span className="text-[11px] font-black text-rose-700 flex items-center space-x-1">
                          <span>Chạm để lật mặt sau</span>
                          <RotateCw className="w-3.5 h-3.5 inline" />
                        </span>
                      </div>
                    </div>

                    {/* BACK SIDE (MẶT SAU: TRANH EHON & TỪ VỰNG) */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-white via-amber-50/50 to-orange-50/60 rounded-3xl border-4 border-amber-300 shadow-xl p-3 sm:p-5 flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center justify-between shrink-0">
                        <span className="text-xs font-black bg-amber-500 text-amber-950 px-3 py-1 rounded-xl shadow-xs">
                          🎨 Tranh Vẽ Ehon & Từ Vựng
                        </span>
                        <div className="flex items-center space-x-1 text-xs font-black text-amber-800">
                          <span>Lật lại</span>
                          <RotateCw className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Main Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto items-center">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md bg-amber-100 aspect-4/3 max-h-44 sm:max-h-48 w-full mx-auto">
                          <img
                            src={currentFlashcard.sampleWords[0]?.visualUrl || '/assets/ehon/theme_nature.jpg'}
                            alt={currentFlashcard.sampleWords[0]?.visualAlt || 'Tranh Ehon'}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex flex-col justify-center space-y-2 text-left">
                          {currentFlashcard.sampleWords[0] && (
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                audioService.speakJapanese(currentFlashcard.sampleWords[0].word, 0.85);
                              }}
                              className="bg-white/95 p-2.5 rounded-2xl border-2 border-amber-200 shadow-xs hover:border-amber-400 transition-all cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xl sm:text-2xl font-black text-amber-950">
                                  {currentFlashcard.sampleWords[0].word}
                                </span>
                                <Volume2 className="w-4 h-4 text-amber-600" />
                              </div>
                              <p className="text-xs font-bold text-amber-700">
                                /{currentFlashcard.sampleWords[0].romaji}/ • {currentFlashcard.sampleWords[0].meaningVi}
                              </p>
                            </div>
                          )}

                          <div 
                            onClick={(e) => {
                              e.stopPropagation();
                              playFlashcardAudio('tpr_chant');
                            }}
                            className="bg-rose-50 p-2.5 rounded-2xl border-2 border-rose-200 shadow-xs hover:border-rose-300 transition-all cursor-pointer"
                          >
                            <div className="flex items-center space-x-1 mb-1">
                              <span>{currentFlashcard.tprAction.icon}</span>
                              <span className="text-xs font-black text-rose-950">
                                {currentFlashcard.tprAction.chantJa}
                              </span>
                            </div>
                            <p className="text-[11px] font-medium text-rose-900 leading-tight">
                              {currentFlashcard.tprAction.descriptionVi}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Back Bottom */}
                      <div className="flex items-center justify-between shrink-0 pt-1.5 border-t border-amber-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playFlashcardAudio('tpr_chant');
                          }}
                          className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs rounded-xl shadow-xs flex items-center space-x-1 cursor-pointer active:scale-95"
                        >
                          <Music className="w-3.5 h-3.5" />
                          <span>Hát Đồng Dao</span>
                        </button>

                        <span className="text-[11px] font-bold text-amber-800">
                          Nhấn [Space] hoặc chạm để lật lại
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Flashcard Bottom Controls */}
              <div className="shrink-0 bg-white/95 p-2 rounded-2xl border-2 border-rose-200 shadow-sm flex items-center justify-between gap-2 mt-1">
                <button
                  onClick={() => {
                    audioService.playPopSound(460);
                    setFlashcardIndex((prev) => (prev - 1 + displayDeck.length) % displayDeck.length);
                  }}
                  className="px-3 sm:px-4 py-1.5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs sm:text-sm flex items-center space-x-1 border border-amber-300 cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Thẻ Trước</span>
                </button>

                <KidButton
                  variant="warning"
                  size="md"
                  onClick={() => {
                    audioService.playPopSound(580);
                    setIsFlipped(!isFlipped);
                  }}
                  className="py-1.5 px-4 sm:px-6 text-xs sm:text-sm font-black shadow-md flex items-center space-x-1.5"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>{isFlipped ? 'Lật Mặt Trước' : 'Lật Mặt Sau'}</span>
                  <kbd className="hidden sm:inline text-[10px] bg-amber-100/90 text-amber-950 px-1 py-0.5 rounded ml-1 font-mono">Space</kbd>
                </KidButton>

                <button
                  onClick={() => handleToggleMastered(currentFlashcard.id)}
                  className={`px-3 py-1.5 rounded-2xl font-black text-xs sm:text-sm flex items-center space-x-1.5 transition-all cursor-pointer border ${
                    masteredIds.includes(currentFlashcard.id)
                      ? 'bg-amber-400 text-amber-950 border-amber-500 shadow-sm'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-amber-400'
                  }`}
                >
                  <Star className={`w-4 h-4 ${masteredIds.includes(currentFlashcard.id) ? 'fill-amber-950 text-amber-950' : 'text-gray-400'}`} />
                  <span className="hidden sm:inline">
                    {masteredIds.includes(currentFlashcard.id) ? 'Đã Thuộc ⭐' : 'Đánh Dấu Thuộc'}
                  </span>
                </button>

                <button
                  onClick={() => {
                    audioService.playPopSound(520);
                    setFlashcardIndex((prev) => (prev + 1) % displayDeck.length);
                  }}
                  className="px-3 sm:px-4 py-1.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-xs sm:text-sm flex items-center space-x-1 border border-rose-600 cursor-pointer active:scale-95"
                >
                  <span>Thẻ Tiếp</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default KanaWordBankModal;
