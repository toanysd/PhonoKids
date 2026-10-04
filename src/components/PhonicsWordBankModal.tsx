import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  BookOpen, 
  Search,
  CheckCircle2,
  Layers,
  Repeat,
  LayoutGrid,
  Play,
  Pause,
  Shuffle,
  ArrowRight
} from 'lucide-react';
import { PhonicsWordBankItem, WordBankTheme } from '../types/phonics';
import { 
  PHONICS_WORD_BANK, 
  THEME_CONFIG, 
  getWordBankByPhoneme, 
  getWordBankByGroup 
} from '../data/phonicsWordBank';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { audioService } from '../services/audioService';

interface PhonicsWordBankModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhonemeId?: string;
  initialGroupNumber?: number;
  initialViewMode?: 'grid' | 'flashcard';
}

export const PhonicsWordBankModal: React.FC<PhonicsWordBankModalProps> = ({
  isOpen,
  onClose,
  initialPhonemeId,
  initialGroupNumber,
  initialViewMode = 'grid'
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'flashcard'>(initialViewMode);
  const [selectedTheme, setSelectedTheme] = useState<WordBankTheme | 'all'>('all');
  const [selectedPhonemeId, setSelectedPhonemeId] = useState<string | 'all'>(
    initialPhonemeId || 'all'
  );
  const [selectedGroup, setSelectedGroup] = useState<number | 'all'>(
    initialGroupNumber || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [activeWordId, setActiveWordId] = useState<string | null>(null);
  const [focusItem, setFocusItem] = useState<PhonicsWordBankItem | null>(null);

  // Flashcard mode states
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const autoPlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync props when opening
  useEffect(() => {
    if (isOpen) {
      if (initialViewMode) setViewMode(initialViewMode);
      if (initialPhonemeId) setSelectedPhonemeId(initialPhonemeId);
      if (initialGroupNumber) setSelectedGroup(initialGroupNumber);
    } else {
      setIsAutoPlaying(false);
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    }
  }, [isOpen, initialViewMode, initialPhonemeId, initialGroupNumber]);

  // Cards per page for grid mode (tailored for zero-scroll locked viewport)
  const PAGE_SIZE = 6;

  // Filtered dataset
  const filteredWords = useMemo(() => {
    return PHONICS_WORD_BANK.filter(item => {
      // Group filter
      if (selectedGroup !== 'all' && item.group !== selectedGroup) return false;
      // Phoneme filter
      if (selectedPhonemeId !== 'all' && item.phonemeId !== selectedPhonemeId) return false;
      // Theme filter
      if (selectedTheme !== 'all' && item.theme !== selectedTheme) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchMeaning = item.meaningVi.toLowerCase().includes(q);
        const matchSentence = item.sampleSentence.toLowerCase().includes(q);
        if (!matchWord && !matchMeaning && !matchSentence) return false;
      }
      return true;
    });
  }, [selectedGroup, selectedPhonemeId, selectedTheme, searchQuery]);

  // Shuffled or standard ordered list for flashcards
  const displayWords = useMemo(() => {
    if (!isShuffled) return filteredWords;
    const copy = [...filteredWords];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [filteredWords, isShuffled]);

  // Reset index when filter or shuffle changes
  useEffect(() => {
    setFlashcardIndex(0);
    setPage(0);
  }, [selectedGroup, selectedPhonemeId, selectedTheme, searchQuery, isShuffled]);

  const totalPages = Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE));
  const currentPageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return filteredWords.slice(start, start + PAGE_SIZE);
  }, [filteredWords, page, PAGE_SIZE]);

  const currentFlashcard = displayWords[flashcardIndex] || displayWords[0] || null;

  // Handle page reset on filter change
  const handleThemeChange = (theme: WordBankTheme | 'all') => {
    audioService.playPopSound(480);
    setSelectedTheme(theme);
    setPage(0);
    setFlashcardIndex(0);
  };

  const handlePhonemeChange = (phId: string | 'all') => {
    audioService.playPopSound(500);
    setSelectedPhonemeId(phId);
    setPage(0);
    setFlashcardIndex(0);
  };

  const handleGroupChange = (grp: number | 'all') => {
    audioService.playPopSound(460);
    setSelectedGroup(grp);
    if (grp !== 'all' && selectedPhonemeId !== 'all') {
      const g = PHONICS_GROUPS.find(item => item.groupNumber === grp);
      if (g && !g.phonemes.includes(selectedPhonemeId)) {
        setSelectedPhonemeId('all');
      }
    }
    setPage(0);
    setFlashcardIndex(0);
  };

  // Play audio for a word
  const handlePlayWord = (item: PhonicsWordBankItem) => {
    setActiveWordId(item.id);
    audioService.playPopSound(540);
    audioService.speakEnglish(item.word, 0.85);
  };

  // Blend audio: speak each phoneme sequentially then full word
  const handlePlayBlend = async (e: React.MouseEvent, item: PhonicsWordBankItem) => {
    e.stopPropagation();
    setActiveWordId(item.id);
    await audioService.blendPhonemes(item.phonemes, 110);
    audioService.speakEnglish(item.word, 0.85);
  };

  // Sentence audio
  const handlePlaySentence = (e: React.MouseEvent, sentence: string) => {
    e.stopPropagation();
    audioService.playPopSound(520);
    audioService.speakEnglish(sentence, 0.85);
  };

  // Continuous flashcard navigation with auto-pronunciation
  const handleNextFlashcard = () => {
    if (displayWords.length === 0) return;
    audioService.playPopSound(540);
    const nextIdx = (flashcardIndex + 1) % displayWords.length;
    setFlashcardIndex(nextIdx);
    const nextItem = displayWords[nextIdx];
    if (nextItem) {
      audioService.speakEnglish(nextItem.word, 0.85);
    }
  };

  const handlePrevFlashcard = () => {
    if (displayWords.length === 0) return;
    audioService.playPopSound(480);
    const prevIdx = (flashcardIndex - 1 + displayWords.length) % displayWords.length;
    setFlashcardIndex(prevIdx);
    const prevItem = displayWords[prevIdx];
    if (prevItem) {
      audioService.speakEnglish(prevItem.word, 0.85);
    }
  };

  // Auto-play loop for hands-free continuous flashcard learning
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'flashcard' || displayWords.length === 0) {
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
      return;
    }

    const currentItem = displayWords[flashcardIndex];
    if (!currentItem) return;

    let cancelled = false;

    // 1. Speak word
    audioService.speakEnglish(currentItem.word, 0.85);

    // 2. Speak sentence after 1.5s
    autoPlayTimeoutRef.current = setTimeout(() => {
      if (cancelled) return;
      if (currentItem.sampleSentence) {
        audioService.speakEnglish(currentItem.sampleSentence, 0.85);
        autoPlayTimeoutRef.current = setTimeout(() => {
          if (cancelled) return;
          setFlashcardIndex((prev) => (prev + 1) % displayWords.length);
        }, 2500);
      } else {
        autoPlayTimeoutRef.current = setTimeout(() => {
          if (cancelled) return;
          setFlashcardIndex((prev) => (prev + 1) % displayWords.length);
        }, 1800);
      }
    }, 1500);

    return () => {
      cancelled = true;
      if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    };
  }, [isAutoPlaying, flashcardIndex, viewMode, displayWords]);

  // Keyboard navigation for desktop: Left/Right arrow to flip, Space to speak
  useEffect(() => {
    if (!isOpen || viewMode !== 'flashcard') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextFlashcard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevFlashcard();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        if (currentFlashcard) {
          audioService.playPopSound(540);
          audioService.speakEnglish(currentFlashcard.word, 0.85);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, viewMode, flashcardIndex, displayWords, currentFlashcard]);

  // Safely close modal and clean up timers/speech
  const handleClose = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimeoutRef.current) clearTimeout(autoPlayTimeoutRef.current);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    audioService.playPopSound(420);
    onClose();
  };

  if (!isOpen) return null;

  // Active hero banner image
  const heroBannerUrl = selectedTheme === 'all'
    ? '/assets/ehon/word_bank_hero.jpg'
    : THEME_CONFIG[selectedTheme].banner;

  const currentGroupObj = selectedGroup !== 'all'
    ? PHONICS_GROUPS.find(g => g.groupNumber === selectedGroup)
    : null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      {/* Zero-Scroll Locked Modal Container */}
      <div className="bg-gradient-to-b from-amber-50 to-orange-50 w-full max-w-6xl h-[94vh] max-h-[820px] rounded-3xl border-4 border-amber-300 shadow-2xl flex flex-col justify-between overflow-hidden relative">
        
        {/* ================= HEADER SECTION WITH EHON BANNER ================= */}
        <div className="relative shrink-0 border-b-2 border-amber-200 overflow-hidden bg-amber-900">
          {/* Background Painting Banner */}
          <div className="h-20 sm:h-24 w-full relative overflow-hidden">
            <img 
              src={heroBannerUrl} 
              alt="Kho báu từ vựng âm vị Ehon" 
              className="w-full h-full object-cover opacity-85 hover:scale-102 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/ehon/archipelago.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-950/85 via-amber-950/60 to-transparent" />
          </div>

          {/* Banner Floating Controls & Title */}
          <div className="absolute inset-0 px-3 sm:px-5 flex items-center justify-between text-white pointer-events-none">
            <div className="flex items-center space-x-2 pointer-events-auto">
              <div className="p-2 bg-amber-400 rounded-2xl text-amber-950 shadow-md">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-base sm:text-xl font-black text-amber-100 tracking-tight drop-shadow-md">
                    Kho Báu Từ Vựng Âm Vị 💎
                  </h2>
                  <span className="text-[11px] font-black bg-amber-400 text-amber-950 px-2.5 py-0.5 rounded-full shadow-xs">
                    {filteredWords.length} Từ Vựng
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-amber-200/90 font-medium hidden sm:block">
                  Học liên tục dạng Thẻ Flashcard • Tranh vẽ màu nước Ehon & ảnh thực tế 100%
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all pointer-events-auto cursor-pointer shadow-lg active:scale-95"
              title="Đóng Kho Báu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= FILTER TOOLBAR & VIEW MODE SWITCHER ================= */}
        <div className="px-3 sm:px-5 py-2 bg-white/90 border-b border-amber-200 shrink-0 space-y-2">
          {/* Row 1: Themes, View Switcher & Search */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Theme Tabs */}
            <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button
                onClick={() => handleThemeChange('all')}
                className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                  selectedTheme === 'all'
                    ? 'bg-amber-400 text-amber-950 shadow-xs ring-2 ring-amber-300'
                    : 'bg-amber-100/70 text-amber-900 hover:bg-amber-200'
                }`}
              >
                🌈 Tất Cả Chủ Đề ({PHONICS_WORD_BANK.length})
              </button>
              {(Object.keys(THEME_CONFIG) as WordBankTheme[]).map((thm) => {
                const conf = THEME_CONFIG[thm];
                const count = PHONICS_WORD_BANK.filter(w => w.theme === thm).length;
                return (
                  <button
                    key={thm}
                    onClick={() => handleThemeChange(thm)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-black transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 ${
                      selectedTheme === thm
                        ? 'bg-amber-400 text-amber-950 shadow-xs ring-2 ring-amber-300'
                        : 'bg-amber-100/70 text-amber-900 hover:bg-amber-200'
                    }`}
                  >
                    <span>{conf.icon}</span>
                    <span>{conf.label}</span>
                    <span className="text-[10px] opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Switcher & Quick Search */}
            <div className="flex items-center space-x-2 shrink-0">
              {/* Mode Switcher */}
              <div className="flex items-center bg-amber-100 p-0.5 rounded-xl border border-amber-300">
                <button
                  onClick={() => {
                    audioService.playPopSound(460);
                    setViewMode('grid');
                  }}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-amber-400 text-amber-950 shadow-xs ring-1 ring-amber-300'
                      : 'text-amber-900 hover:bg-amber-200/60'
                  }`}
                  title="Chế độ xem lưới 6 ảnh"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Lưới Tranh</span>
                </button>
                <button
                  onClick={() => {
                    audioService.playPopSound(480);
                    setViewMode('flashcard');
                  }}
                  className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    viewMode === 'flashcard'
                      ? 'bg-amber-400 text-amber-950 shadow-xs ring-1 ring-amber-300'
                      : 'text-amber-900 hover:bg-amber-200/60'
                  }`}
                  title="Chế độ Thẻ Flashcard học liên tục"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Thẻ Flashcard</span>
                </button>
              </div>

              {/* Quick Search */}
              <div className="relative w-32 sm:w-44 shrink-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(0);
                    setFlashcardIndex(0);
                  }}
                  placeholder="Tìm từ vựng..."
                  className="w-full pl-7 pr-3 py-1 bg-amber-50 border border-amber-300 rounded-xl text-xs font-bold text-amber-950 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <Search className="w-3.5 h-3.5 text-amber-600 absolute left-2 top-2" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1.5 text-amber-600 hover:text-amber-900 text-xs font-black cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Row 2: Island & Phoneme Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar text-xs">
            <span className="font-extrabold text-amber-900 shrink-0 flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5 text-amber-700" />
              <span>Đảo:</span>
            </span>

            {/* Island selector pills */}
            <button
              onClick={() => handleGroupChange('all')}
              className={`px-2 py-0.5 rounded-lg font-black text-[11px] cursor-pointer whitespace-nowrap ${
                selectedGroup === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              }`}
            >
              Cả 7 Đảo
            </button>
            {PHONICS_GROUPS.map((g) => (
              <button
                key={g.groupNumber}
                onClick={() => handleGroupChange(g.groupNumber)}
                className={`px-2 py-0.5 rounded-lg font-black text-[11px] cursor-pointer whitespace-nowrap ${
                  selectedGroup === g.groupNumber
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                }`}
              >
                Đảo {g.groupNumber} ({g.phonemes.join(',')})
              </button>
            ))}

            {/* If a group is selected, show specific phonemes */}
            {currentGroupObj && (
              <>
                <span className="text-amber-400">|</span>
                <span className="font-extrabold text-amber-900 shrink-0">Âm:</span>
                <button
                  onClick={() => handlePhonemeChange('all')}
                  className={`px-2 py-0.5 rounded-lg font-black text-[11px] cursor-pointer ${
                    selectedPhonemeId === 'all'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-emerald-100 text-emerald-950 hover:bg-emerald-200'
                  }`}
                >
                  Tất cả âm
                </button>
                {currentGroupObj.phonemes.map((phId) => {
                  const ph = PHONEMES_DATA[phId];
                  return (
                    <button
                      key={phId}
                      onClick={() => handlePhonemeChange(phId)}
                      className={`px-2.5 py-0.5 rounded-lg font-black text-[11px] cursor-pointer ${
                        selectedPhonemeId === phId
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                          : 'bg-emerald-100 text-emerald-950 hover:bg-emerald-200'
                      }`}
                    >
                      /{ph ? ph.grapheme : phId}/
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* ================= MAIN CONTENT: FLASHCARD ARENA OR GRID VIEWPORT ================= */}
        <div className="flex-1 px-2 sm:px-5 py-2 overflow-hidden flex flex-col justify-center relative">
          {displayWords.length === 0 ? (
            <div className="text-center py-10 bg-white/70 rounded-3xl border-2 border-dashed border-amber-300 max-w-md mx-auto my-auto p-6">
              <span className="text-4xl">🔍</span>
              <h3 className="text-lg font-black text-amber-950 mt-2">Không tìm thấy từ vựng nào</h3>
              <p className="text-xs font-bold text-amber-800 mt-1">
                Hãy thử chọn chủ đề khác hoặc xóa từ khóa tìm kiếm nhé!
              </p>
              <button
                onClick={() => {
                  setSelectedTheme('all');
                  setSelectedPhonemeId('all');
                  setSelectedGroup('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-1.5 bg-amber-400 text-amber-950 font-black rounded-xl text-xs hover:bg-amber-500 cursor-pointer shadow-xs"
              >
                Xem lại toàn bộ kho báu
              </button>
            </div>
          ) : viewMode === 'flashcard' ? (
            /* ================= MODE: FLASHCARD ARENA (BẤM HỌC LIÊN TỤC) ================= */
            <div className="relative w-full max-w-3xl mx-auto h-full max-h-[520px] flex items-center justify-center">
              
              {/* Floating Side Arrow: Previous Card */}
              <button
                onClick={handlePrevFlashcard}
                className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/95 hover:bg-amber-100 text-amber-950 shadow-xl border-2 border-amber-300 items-center justify-center cursor-pointer transition-transform active:scale-90"
                title="Thẻ trước (Phím mũi tên trái)"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* Floating Side Arrow: Next Card */}
              <button
                onClick={handleNextFlashcard}
                className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl border-2 border-emerald-300 items-center justify-center cursor-pointer transition-transform active:scale-90 shadow-emerald-400/30 animate-pulse"
                title="Thẻ kế tiếp (Phím mũi tên phải)"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Big Interactive Single Flashcard Card */}
              {currentFlashcard && (
                <div className="w-full h-full bg-white rounded-3xl border-4 border-amber-300 shadow-2xl flex flex-col justify-between overflow-hidden relative p-3 sm:p-4 animate-scaleUp">
                  
                  {/* Card Top Progress & Quick Actions */}
                  <div className="flex items-center justify-between pb-2 border-b border-amber-100 gap-2 shrink-0">
                    <div className="flex items-center space-x-2">
                      <span className="bg-amber-400 text-amber-950 text-xs font-black px-2.5 py-0.5 rounded-xl shadow-xs">
                        Thẻ {flashcardIndex + 1} / {displayWords.length}
                      </span>
                      <div className="w-24 sm:w-36 bg-amber-100 h-2.5 rounded-full overflow-hidden border border-amber-200">
                        <div
                          className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${((flashcardIndex + 1) / displayWords.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {/* Auto Play Continuous Button */}
                      <button
                        onClick={() => {
                          audioService.playPopSound(520);
                          setIsAutoPlaying(prev => !prev);
                        }}
                        className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all cursor-pointer shadow-xs ${
                          isAutoPlaying
                            ? 'bg-rose-500 text-white animate-pulse'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                        title={isAutoPlaying ? 'Tạm dừng đọc tự động' : 'Tự động đọc lần lượt tất cả thẻ'}
                      >
                        {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span className="hidden sm:inline">{isAutoPlaying ? 'Tạm Dừng' : 'Tự Động Đọc'}</span>
                      </button>

                      {/* Shuffle Button */}
                      <button
                        onClick={() => {
                          audioService.playPopSound(460);
                          setIsShuffled(prev => !prev);
                        }}
                        className={`p-1.5 rounded-xl border text-xs font-black transition-all cursor-pointer ${
                          isShuffled
                            ? 'bg-purple-600 text-white border-purple-400 shadow-xs'
                            : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                        }`}
                        title={isShuffled ? 'Đang bật trộn ngẫu nhiên' : 'Bật trộn ngẫu nhiên'}
                      >
                        <Shuffle className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Card Center: Large Ehon Artwork & Word Details */}
                  <div className="flex-1 min-h-0 flex flex-col items-center justify-center py-1 sm:py-2">
                    
                    {/* Big Painting Area */}
                    <div
                      onClick={() => handlePlayWord(currentFlashcard)}
                      className="relative w-full max-w-sm h-36 sm:h-44 md:h-48 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md bg-amber-50 group cursor-pointer shrink-0"
                    >
                      <img
                        src={currentFlashcard.visual.url}
                        alt={currentFlashcard.visual.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/assets/ehon/star.jpg';
                        }}
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 flex items-center space-x-1">
                        <span className="bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                          {currentFlashcard.visual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Ảnh Thật'}
                        </span>
                        <span className="bg-white/95 text-amber-900 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                          /{currentFlashcard.phonemeId}/
                        </span>
                      </div>

                      <div className="absolute top-2 right-2 bg-white/90 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                        {THEME_CONFIG[currentFlashcard.theme]?.icon} {THEME_CONFIG[currentFlashcard.theme]?.label}
                      </div>

                      {/* Floating speaker indicator */}
                      <div className="absolute bottom-2 left-2 bg-white/95 text-amber-800 p-1.5 rounded-full shadow">
                        <Volume2 className="w-4 h-4 animate-pulse" />
                      </div>

                      {/* Zoom to Focus Sheet Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioService.playPopSound(500);
                          setFocusItem(currentFlashcard);
                        }}
                        className="absolute bottom-2 right-2 bg-amber-950/70 hover:bg-amber-950 text-white p-1.5 rounded-lg shadow cursor-pointer transition-colors"
                        title="Xem toàn màn hình chi tiết"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Word Details & Sound Breakdown */}
                    <div className="text-center mt-2 w-full max-w-md">
                      <div className="flex items-center justify-center space-x-2">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 uppercase tracking-wider">
                          {currentFlashcard.word}
                        </h3>
                        <button
                          onClick={() => handlePlayWord(currentFlashcard)}
                          className="p-1.5 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full shadow-xs cursor-pointer active:scale-95 transition-transform"
                          title="Phát âm từ"
                        >
                          <Volume2 className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-sm sm:text-base font-bold text-amber-800 mt-0.5">
                        {currentFlashcard.meaningVi}
                      </p>

                      {/* Clickable Phoneme Chips & Blend Button */}
                      <div className="flex items-center justify-center gap-1.5 mt-1.5 flex-wrap">
                        {currentFlashcard.phonemes.map((ph, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              audioService.speakPhoneme(ph);
                            }}
                            className="px-2.5 py-0.5 bg-amber-100 hover:bg-amber-200 text-amber-950 font-black rounded-lg border border-amber-300 text-xs shadow-2xs cursor-pointer active:scale-90 transition-transform"
                            title={`Nghe âm /${ph}/`}
                          >
                            /{ph}/
                          </button>
                        ))}
                        <button
                          onClick={(e) => handlePlayBlend(e, currentFlashcard)}
                          className="px-2.5 py-0.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-lg text-xs shadow-2xs cursor-pointer active:scale-90 transition-transform flex items-center space-x-1"
                          title="Đánh vần từng âm rồi đọc từ"
                        >
                          <Repeat className="w-3 h-3 text-amber-950" />
                          <span>Đánh Vần</span>
                        </button>
                      </div>

                      {/* Decodable Sample Sentence */}
                      {currentFlashcard.sampleSentence && (
                        <div
                          onClick={(e) => handlePlaySentence(e, currentFlashcard.sampleSentence)}
                          className="mt-2 bg-amber-50/90 hover:bg-amber-100/90 border border-amber-200 rounded-xl px-3 py-1 text-center cursor-pointer transition-colors max-w-md mx-auto"
                          title="Chạm để nghe đọc câu mẫu decodable"
                        >
                          <div className="text-xs font-black text-amber-950 flex items-center justify-center space-x-1">
                            <Volume2 className="w-3 h-3 text-amber-700 shrink-0" />
                            <span className="italic truncate">&quot;{currentFlashcard.sampleSentence}&quot;</span>
                          </div>
                          {currentFlashcard.sampleSentenceVi && (
                            <div className="text-[11px] font-bold text-amber-700 truncate mt-0.5">
                              {currentFlashcard.sampleSentenceVi}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Continuous Learning Action Ribbon */}
                  <div className="pt-2 border-t border-amber-100 flex items-center justify-between gap-2 shrink-0">
                    <button
                      onClick={handlePrevFlashcard}
                      className="flex-1 py-2 sm:py-2.5 px-3 bg-amber-100 hover:bg-amber-200 text-amber-950 font-black rounded-2xl border border-amber-300 shadow-xs cursor-pointer flex items-center justify-center space-x-1.5 active:scale-95 transition-transform text-xs sm:text-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Thẻ Trước</span>
                    </button>

                    <button
                      onClick={() => handlePlayWord(currentFlashcard)}
                      className="p-2 sm:p-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-2xl border-2 border-amber-300 shadow-md cursor-pointer flex items-center justify-center active:scale-95 transition-transform shrink-0"
                      title="Nghe lại phát âm từ"
                    >
                      <Volume2 className="w-5 h-5 text-amber-950" />
                    </button>

                    <button
                      onClick={handleNextFlashcard}
                      className="flex-2 py-2 sm:py-2.5 px-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black rounded-2xl shadow-lg border-2 border-emerald-300 cursor-pointer flex items-center justify-center space-x-2 active:scale-95 transition-transform text-xs sm:text-sm shadow-emerald-400/30"
                    >
                      <span>Thẻ Kế Tiếp ➔</span>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            /* ================= MODE: 6 CARDS ZERO-SCROLL GRID ================= */
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5 h-full max-h-[500px] items-stretch">
              {currentPageItems.map((item) => {
                const isActive = activeWordId === item.id;
                const themeConf = THEME_CONFIG[item.theme];

                return (
                  <div
                    key={item.id}
                    onClick={() => handlePlayWord(item)}
                    className={`rounded-2xl border-3 transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer shadow-md transform active:scale-95 group relative ${
                      isActive
                        ? 'bg-amber-100 border-amber-500 ring-3 ring-amber-300 scale-101 shadow-lg'
                        : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-lg'
                    }`}
                  >
                    {/* Big Painting Area */}
                    <div className="relative h-24 sm:h-32 md:h-36 bg-amber-50 overflow-hidden border-b border-amber-100 flex items-center justify-center">
                      <img
                        src={item.visual.url}
                        alt={item.visual.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/assets/ehon/star.jpg';
                        }}
                      />

                      {/* Top Badges */}
                      <div className="absolute top-1.5 left-1.5 flex items-center space-x-1">
                        <span className="bg-amber-400/95 text-amber-950 font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                          {item.visual.type === 'ehon' ? '🎨 Ehon' : '📷 Ảnh'}
                        </span>
                        <span className="bg-white/90 text-amber-900 font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                          /{item.phonemeId}/
                        </span>
                      </div>

                      {/* Theme icon badge */}
                      <div className="absolute top-1.5 right-1.5 bg-white/90 p-1 rounded-full shadow-xs" title={themeConf.label}>
                        <span className="text-xs">{themeConf.icon}</span>
                      </div>

                      {/* Zoom button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioService.playPopSound(500);
                          setFocusItem(item);
                        }}
                        className="absolute bottom-1.5 right-1.5 bg-amber-950/70 hover:bg-amber-950 text-white p-1 rounded-lg shadow-md transition-colors cursor-pointer"
                        title="Xem tranh to & chi tiết"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Audio Pulse Ring */}
                      <div className="absolute bottom-1.5 left-1.5 bg-white/95 p-1 rounded-full shadow text-amber-800">
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      </div>
                    </div>

                    {/* Word Details */}
                    <div className="p-2 sm:p-2.5 text-center flex flex-col justify-between flex-1 bg-white">
                      <div>
                        {/* Word Text */}
                        <div className="text-xl sm:text-2xl font-black text-amber-950 uppercase tracking-wide">
                          {item.word}
                        </div>
                        {/* Vietnamese Definition */}
                        <div className="text-[11px] sm:text-xs font-bold text-amber-700 truncate">
                          {item.meaningVi}
                        </div>
                      </div>

                      {/* Phoneme Blending Pills */}
                      <div className="mt-1 flex items-center justify-center space-x-1">
                        <button
                          onClick={(e) => handlePlayBlend(e, item)}
                          className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg text-[10px] font-black text-amber-900 flex items-center space-x-1 cursor-pointer transition-colors shadow-2xs"
                          title="Bấm nghe đánh vần từng âm"
                        >
                          <Repeat className="w-3 h-3 text-amber-700" />
                          <span>{item.phonemes.join(' • ')}</span>
                        </button>
                      </div>

                      {/* Decodable Sample Sentence */}
                      {item.sampleSentence && (
                        <div
                          onClick={(e) => handlePlaySentence(e, item.sampleSentence)}
                          className="mt-1 px-1.5 py-0.5 bg-amber-50/80 hover:bg-amber-100 rounded-md border border-amber-200 text-[10px] font-bold text-amber-900 truncate italic cursor-pointer flex items-center justify-center space-x-1"
                          title="Chạm để nghe đọc câu mẫu"
                        >
                          <Volume2 className="w-2.5 h-2.5 text-amber-700 shrink-0" />
                          <span className="truncate">&quot;{item.sampleSentence}&quot;</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= FOOTER CONTROLS & PAGINATION ================= */}
        <div className="px-3 sm:px-5 py-2.5 bg-white/95 border-t border-amber-200 shrink-0 flex items-center justify-between">
          <div className="text-xs font-black text-amber-900 flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
            <span>
              {viewMode === 'flashcard' ? (
                <>
                  Thẻ {displayWords.length > 0 ? flashcardIndex + 1 : 0} / {displayWords.length} • Phím ⬅️ ➔ hoặc Space để nghe
                </>
              ) : (
                <>Tổng số {filteredWords.length} từ vựng phong phú</>
              )}
            </span>
          </div>

          {/* Pagination Buttons (for grid) or Continuous buttons (for flashcard) */}
          {viewMode === 'grid' ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  audioService.playPopSound(440);
                  setPage(prev => Math.max(0, prev - 1));
                }}
                disabled={page === 0}
                className="flex items-center space-x-1 bg-amber-100 hover:bg-amber-200 disabled:opacity-30 disabled:cursor-not-allowed text-amber-950 font-black px-3 py-1.5 rounded-xl border border-amber-300 shadow-xs cursor-pointer text-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Trang Trước</span>
              </button>

              <span className="text-xs font-black text-amber-950 px-2.5 py-1 bg-amber-200/90 rounded-lg">
                Trang {page + 1} / {totalPages}
              </span>

              <button
                onClick={() => {
                  audioService.playPopSound(440);
                  setPage(prev => Math.min(totalPages - 1, prev + 1));
                }}
                disabled={page === totalPages - 1}
                className="flex items-center space-x-1 bg-amber-100 hover:bg-amber-200 disabled:opacity-30 disabled:cursor-not-allowed text-amber-950 font-black px-3 py-1.5 rounded-xl border border-amber-300 shadow-xs cursor-pointer text-xs"
              >
                <span className="hidden sm:inline">Trang Sau</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevFlashcard}
                disabled={displayWords.length === 0}
                className="flex items-center space-x-1 bg-amber-100 hover:bg-amber-200 disabled:opacity-30 text-amber-950 font-black px-3 py-1.5 rounded-xl border border-amber-300 shadow-xs cursor-pointer text-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Thẻ Trước</span>
              </button>
              <button
                onClick={handleNextFlashcard}
                disabled={displayWords.length === 0}
                className="flex items-center space-x-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black px-4 py-1.5 rounded-xl shadow-xs cursor-pointer text-xs"
              >
                <span>Thẻ Kế Tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* ================= ENLARGED WORD FOCUS SHEET (POPUP DETAIL) ================= */}
        {focusItem && (
          <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 animate-fadeIn">
            <div className="bg-gradient-to-b from-amber-50 to-orange-50 rounded-3xl border-4 border-amber-400 p-4 max-w-lg w-full shadow-2xl relative flex flex-col items-center text-center">
              
              <button
                onClick={() => {
                  audioService.playPopSound(420);
                  setFocusItem(null);
                }}
                className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-amber-950 rounded-full shadow-md cursor-pointer transition-transform active:scale-95"
                title="Đóng xem chi tiết"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Ehon Painting */}
              <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-lg bg-amber-50 mb-3">
                <img
                  src={focusItem.visual.url}
                  alt={focusItem.visual.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/ehon/star.jpg';
                  }}
                />
                <div className="absolute top-2 left-2 bg-amber-400 text-amber-950 text-xs font-black px-3 py-1 rounded-full shadow">
                  {focusItem.visual.type === 'ehon' ? '🎨 Tranh Ehon Minh Họa' : '📷 Hình Ảnh Thực Tế'}
                </div>
                <div className="absolute top-2 right-12 bg-white/90 text-amber-950 text-xs font-black px-2.5 py-1 rounded-full shadow">
                  {THEME_CONFIG[focusItem.theme].icon} {THEME_CONFIG[focusItem.theme].label}
                </div>
              </div>

              {/* Big Word & Sound */}
              <div className="text-4xl sm:text-5xl font-black text-amber-950 tracking-wider uppercase mb-1">
                {focusItem.word}
              </div>
              <div className="text-base sm:text-lg font-bold text-amber-800 mb-2">
                {focusItem.meaningVi}
              </div>

              {/* Phoneme Breakdown Buttons */}
              <div className="flex items-center justify-center gap-1.5 mb-3 flex-wrap">
                {focusItem.phonemes.map((ph, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      audioService.speakPhoneme(ph);
                    }}
                    className="px-3.5 py-1 bg-amber-200 hover:bg-amber-300 text-amber-950 font-black rounded-xl border border-amber-400 text-sm shadow-xs cursor-pointer active:scale-90 transition-transform"
                    title={`Nghe âm /${ph}/`}
                  >
                    /{ph}/
                  </button>
                ))}
              </div>

              {/* Sample Sentence Card */}
              {focusItem.sampleSentence && (
                <div 
                  onClick={() => audioService.speakEnglish(focusItem.sampleSentence, 0.85)}
                  className="w-full bg-white/95 p-3 rounded-2xl border border-amber-300 shadow-xs mb-3 cursor-pointer hover:bg-amber-50 transition-colors"
                  title="Chạm để nghe đọc câu mẫu"
                >
                  <div className="text-sm font-black text-amber-950 flex items-center justify-center space-x-1">
                    <Volume2 className="w-4 h-4 text-amber-700" />
                    <span>&quot;{focusItem.sampleSentence}&quot;</span>
                  </div>
                  {focusItem.sampleSentenceVi && (
                    <div className="text-xs font-bold text-amber-700 mt-0.5">
                      {focusItem.sampleSentenceVi}
                    </div>
                  )}
                </div>
              )}

              {/* Action Big Buttons */}
              <div className="flex items-center space-x-3 w-full">
                <button
                  onClick={() => {
                    audioService.playPopSound(560);
                    audioService.speakEnglish(focusItem.word, 0.85);
                  }}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-2.5 px-4 rounded-2xl border-b-4 border-amber-500 shadow-md cursor-pointer flex items-center justify-center space-x-2 active:scale-95 transition-transform text-sm sm:text-base"
                >
                  <Volume2 className="w-5 h-5 text-amber-950" />
                  <span>Phát Âm Lại Từ</span>
                </button>
                <button
                  onClick={() => setFocusItem(null)}
                  className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-2xl cursor-pointer text-sm"
                >
                  Đóng
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
