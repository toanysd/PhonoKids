import React, { useState, useEffect, useRef } from 'react';
import { PhonemeInfo, PhonicsGroup } from '../types/phonics';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { SoundVisemeGuide } from './SoundVisemeGuide';
import { BubbleBlender } from './BubbleBlender';
import { LetterTracingStudio } from './LetterTracingStudio';
import { LetterRecognitionGame } from './LetterRecognitionGame';
import { KidButton } from './KidButton';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { geminiService } from '../services/geminiService';
import { getVocabularyByPhoneme } from '../data/phonicsVocabulary';
import { PhonicsWordBankModal } from './PhonicsWordBankModal';
import { getPhonemeWordCount } from '../data/phonicsWordBank';
import { 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  Trophy,
  Sparkles,
  Palette,
  BookOpen,
  Layers,
  LayoutGrid,
  Repeat,
  Play,
  Pause
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonPlayerProps {
  phoneme: PhonemeInfo;
  onFinishLesson: (phonemeId: string) => void;
  onNextPhoneme?: (nextPhoneme: PhonemeInfo) => void;
  onBack: () => void;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({
  phoneme,
  onFinishLesson,
  onNextPhoneme,
  onBack,
}) => {
  // Steps: 0: Intro -> 1: Viseme Mouth -> 2: TPR Action -> 3: Discrimination -> 4: Blending -> 5: Victory
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [showLeoTip, setShowLeoTip] = useState<boolean>(false);
  const [leoTipText, setLeoTipText] = useState<string>('');
  const [vocabPage, setVocabPage] = useState<number>(0);
  const [vocabViewMode, setVocabViewMode] = useState<'grid' | 'flashcard'>('flashcard');
  const [lessonFlashcardIdx, setLessonFlashcardIdx] = useState<number>(0);
  const [isLessonAutoPlay, setIsLessonAutoPlay] = useState<boolean>(false);
  const lessonAutoPlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [blendingWordIndex, setBlendingWordIndex] = useState<number>(0);
  const [isWordBankModalOpen, setIsWordBankModalOpen] = useState<boolean>(false);

  // Reset lesson progress when switching to next phoneme
  useEffect(() => {
    setCurrentStep(0);
    setSelectedCards([]);
    setVocabPage(0);
    setLessonFlashcardIdx(0);
    setIsLessonAutoPlay(false);
    if (lessonAutoPlayTimeoutRef.current) clearTimeout(lessonAutoPlayTimeoutRef.current);
    setBlendingWordIndex(0);
    setShowLeoTip(false);
  }, [phoneme.id]);

  // Determine sequential next phoneme & island conquest status
  const currentGroup = PHONICS_GROUPS.find((g) => g.groupNumber === phoneme.group);
  const currentIndex = currentGroup ? currentGroup.phonemes.indexOf(phoneme.id) : -1;
  let nextPhoneme: PhonemeInfo | null = null;
  let isConqueringIsland = false;
  let nextGroupInfo: PhonicsGroup | null = null;

  if (currentGroup && currentIndex !== -1) {
    if (currentIndex + 1 < currentGroup.phonemes.length) {
      // Next sound on current island
      const nextPhId = currentGroup.phonemes[currentIndex + 1];
      nextPhoneme = PHONEMES_DATA[nextPhId] || null;
    } else {
      // Final sound of current island -> unlocks next island!
      isConqueringIsland = true;
      const nextGroupNumber = currentGroup.groupNumber + 1;
      if (nextGroupNumber <= 7) {
        const nextG = PHONICS_GROUPS.find((g) => g.groupNumber === nextGroupNumber);
        if (nextG && nextG.phonemes.length > 0) {
          nextGroupInfo = nextG;
          nextPhoneme = PHONEMES_DATA[nextG.phonemes[0]] || null;
        }
      }
    }
  }


  // Load comprehensive vocabulary items for this phoneme
  const rawVocabItems = getVocabularyByPhoneme(phoneme.id);
  const vocabList = rawVocabItems.length > 0
    ? rawVocabItems
    : phoneme.sampleWords.map((s, idx) => ({
        id: `fb_${s.word}_${idx}`,
        word: s.word,
        phonemeId: phoneme.id,
        group: phoneme.stage,
        stage: phoneme.stage,
        phonemes: s.word.split(''),
        meaningVi: s.meaningVi,
        emoji: s.emoji,
        sampleSentence: undefined,
        sampleSentenceVi: undefined,
      }));

  const pageSize = 3;
  const totalVocabPages = Math.ceil(vocabList.length / pageSize);
  const currentVocabSlice = vocabList.slice(vocabPage * pageSize, (vocabPage + 1) * pageSize);

  const currentBlendItem = vocabList[blendingWordIndex] || vocabList[0];

  const handleAskLeo = () => {
    const tip = geminiService.getPhonicsTip(phoneme.id);
    setLeoTipText(tip);
    setShowLeoTip(!showLeoTip);
    audioService.playPopSound(550);
  };

  const handleNextStep = () => {
    audioService.playPopSound(520);
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      audioService.playSuccessJingle();
      try {
        confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
      } catch {
        // Ignore
      }
      if (nextPhoneme && onNextPhoneme) {
        onNextPhoneme(nextPhoneme);
      } else {
        onFinishLesson(phoneme.id);
      }
    }
  };

  const handlePrevStep = () => {
    audioService.playPopSound(440);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTapSampleWord = (word: string) => {
    audioService.speakEnglish(word, 0.85);
    if (!selectedCards.includes(word)) {
      setSelectedCards([...selectedCards, word]);
    }
  };

  // Step 5 Continuous Flashcard navigation
  const handleNextLessonFlashcard = () => {
    const currentItem = vocabList[lessonFlashcardIdx];
    if (currentItem && !selectedCards.includes(currentItem.word)) {
      setSelectedCards(prev => [...prev, currentItem.word]);
    }

    if (lessonFlashcardIdx < vocabList.length - 1) {
      const nextIdx = lessonFlashcardIdx + 1;
      setLessonFlashcardIdx(nextIdx);
      audioService.playPopSound(540);
      const nextItem = vocabList[nextIdx];
      if (nextItem) {
        audioService.speakEnglish(nextItem.word, 0.85);
      }
    } else {
      // Finished all cards in lesson -> advance to Step 6 (Blending)
      audioService.playSuccessJingle();
      handleNextStep();
    }
  };

  const handlePrevLessonFlashcard = () => {
    if (lessonFlashcardIdx > 0) {
      const prevIdx = lessonFlashcardIdx - 1;
      setLessonFlashcardIdx(prevIdx);
      audioService.playPopSound(480);
      const prevItem = vocabList[prevIdx];
      if (prevItem) {
        audioService.speakEnglish(prevItem.word, 0.85);
      }
    }
  };

  // Step 5 Auto-Play loop for hands-free learning
  useEffect(() => {
    if (currentStep !== 5 || vocabViewMode !== 'flashcard' || !isLessonAutoPlay || vocabList.length === 0) {
      if (lessonAutoPlayTimeoutRef.current) clearTimeout(lessonAutoPlayTimeoutRef.current);
      return;
    }

    const currentItem = vocabList[lessonFlashcardIdx];
    if (!currentItem) return;

    let cancelled = false;
    audioService.speakEnglish(currentItem.word, 0.85);
    if (!selectedCards.includes(currentItem.word)) {
      setSelectedCards(prev => [...prev, currentItem.word]);
    }

    lessonAutoPlayTimeoutRef.current = setTimeout(() => {
      if (cancelled) return;
      if (currentItem.sampleSentence) {
        audioService.speakEnglish(currentItem.sampleSentence, 0.85);
        lessonAutoPlayTimeoutRef.current = setTimeout(() => {
          if (cancelled) return;
          if (lessonFlashcardIdx < vocabList.length - 1) {
            setLessonFlashcardIdx(prev => prev + 1);
          } else {
            setIsLessonAutoPlay(false);
          }
        }, 2400);
      } else {
        lessonAutoPlayTimeoutRef.current = setTimeout(() => {
          if (cancelled) return;
          if (lessonFlashcardIdx < vocabList.length - 1) {
            setLessonFlashcardIdx(prev => prev + 1);
          } else {
            setIsLessonAutoPlay(false);
          }
        }, 1800);
      }
    }, 1600);

    return () => {
      cancelled = true;
      if (lessonAutoPlayTimeoutRef.current) clearTimeout(lessonAutoPlayTimeoutRef.current);
    };
  }, [currentStep, vocabViewMode, isLessonAutoPlay, lessonFlashcardIdx, vocabList, selectedCards]);

  // Safe dynamic font sizing for grapheme letters
  const getGraphemeFontClass = (text: string) => {
    const len = text.length;
    if (len <= 1) return 'text-6xl md:text-7xl';
    if (len <= 2) return 'text-4xl md:text-5xl';
    if (len <= 4) return 'text-3xl md:text-4xl';
    return 'text-xl md:text-2xl font-bold tracking-tight';
  };

  const primaryWord = vocabList[0]?.word || phoneme.sampleWords[0]?.word || 'cat';
  const primaryVisual = getWordVisual(primaryWord);

  const stepsTitle = [
    'Làm Quen Âm Thanh',
    'Khẩu Hình Miệng Chuẩn',
    'Vận Động Toàn Thân (TPR)',
    'Tô Nét Chữ Diệu Kỳ',
    'Bắt Bong Bóng Âm Vị',
    'Từ Vựng Tương Ứng (Tranh Ehon)',
    'Thử Thách Ghép Vần',
    'Chiến Thắng!'
  ];

  const handleReplayCurrentStepAudio = () => {
    audioService.playPopSound(520);
    if (currentStep === 0 || currentStep === 1) {
      audioService.speakPhoneme(phoneme.id, phoneme.ipa);
    } else if (currentStep === 2) {
      audioService.playTprAction(phoneme.id, phoneme.tprAction.chantEn);
    } else if (currentStep === 3) {
      audioService.playPhoneme(phoneme.id);
    } else if (currentStep === 4) {
      audioService.playPhoneme(phoneme.id);
    } else if (currentStep === 5) {
      const activeWord = currentVocabSlice[0]?.word || primaryWord;
      audioService.speakEnglish(activeWord, 0.85);
    } else if (currentStep === 6) {
      const blendWord = currentBlendItem?.word || primaryWord;
      audioService.speakEnglish(blendWord, 0.85);
    } else {
      audioService.playSuccessJingle();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 h-full flex flex-col justify-between overflow-hidden">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex items-center justify-between mb-2 px-2 shrink-0">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 bg-white/95 hover:bg-white text-amber-950 font-black px-3.5 py-2 rounded-2xl shadow-xs border-2 border-amber-200 active:scale-95 transition-transform cursor-pointer text-xs md:text-sm"
        >
          <ChevronLeft className="w-4 h-4 text-amber-600" />
          <span>Quay Lại Đảo</span>
        </button>

        {/* Step Progress Pills */}
        <div className="flex items-center space-x-2 md:space-x-3 bg-white/80 px-3.5 py-1.5 rounded-2xl border border-amber-200 shadow-xs">
          {stepsTitle.map((title, idx) => (
            <div
              key={idx}
              className={`w-2.5 md:w-3 h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                idx === currentStep
                  ? 'bg-amber-500 scale-125 ring-3 ring-amber-300'
                  : idx < currentStep
                  ? 'bg-emerald-400'
                  : 'bg-amber-200'
              }`}
              title={title}
            />
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleAskLeo}
            className="flex items-center space-x-1 bg-purple-100 hover:bg-purple-200 text-purple-950 font-black px-3 py-1 rounded-full border border-purple-300 shadow-xs active:scale-95 transition-transform cursor-pointer text-xs"
            title="Nhận gợi ý phát âm từ Bạn Sư Tử Leo"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Hỏi Leo 🦁</span>
          </button>

          <span className="text-xs font-black text-amber-900 bg-amber-200/90 px-3 py-1 rounded-full shadow-xs">
            Bước {currentStep + 1} / 8
          </span>
        </div>
      </div>

      {/* Leo AI Tip Floating Speech Bubble */}
      {showLeoTip && (
        <div className="mx-2 mb-2 p-3 bg-purple-50 rounded-2xl border-2 border-purple-300 shadow-md flex items-start space-x-3 animate-fadeIn shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400 shrink-0 bg-amber-100">
            <img src="/assets/ehon/leo.jpg" alt="Leo" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-black text-purple-950 flex items-center justify-between">
              <span>Bạn Sư Tử Leo mách nước cho bé:</span>
              <button onClick={() => setShowLeoTip(false)} className="text-gray-400 hover:text-gray-600 text-xs font-bold cursor-pointer">✕ Đóng</button>
            </div>
            <p className="text-xs md:text-sm font-bold text-purple-900 mt-0.5 leading-snug">{leoTipText}</p>
          </div>
        </div>
      )}

      {/* Main Full-Bleed Storybook Canvas (Fills Screen Without Scrolling) */}
      <div className="bg-[#FFFDF9] rounded-3xl p-3 md:p-5 border-6 md:border-8 border-amber-300 shadow-2xl flex-1 min-h-0 flex flex-col justify-between relative overflow-hidden">
        
        {/* Subtle background paper texture hint */}
        <div className="absolute top-2 right-4 text-xs font-bold text-amber-800/40 select-none flex items-center space-x-1">
          <Palette className="w-3.5 h-3.5" />
          <span>Ehon Storybook Canvas</span>
        </div>

        {/* Flexible Step Body (Fits Viewport, graceful scroll if needed) */}
        <div className="flex-1 min-h-0 overflow-y-auto px-1 py-1 flex flex-col justify-center">

        {/* ================= STEP 0: SOUND INTRODUCTION ================= */}
        {currentStep === 0 && (
          <div className="text-center py-1 animate-fadeIn flex flex-col items-center">
            <span className="text-xs font-black text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full uppercase tracking-wider mb-1.5">
              {stepsTitle[0]} • Stage {phoneme.stage}
            </span>

            <h2 className="text-2xl md:text-4xl font-black text-amber-950 mb-1">
              Chào Mừng Đến Với Âm /{phoneme.id}/!
            </h2>
            <p className="text-xs md:text-sm font-bold text-amber-800 max-w-xl mx-auto mb-3">
              {phoneme.soundDescription}
            </p>

            {/* Wide Hero Presentation: Grapheme Circle + Big Ehon Painted Plate */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-1 w-full max-w-3xl">
              
              {/* Clamped Chunky Letter Circle */}
              <button
                onClick={() => audioService.speakPhoneme(phoneme.id, phoneme.ipa)}
                className={`w-36 h-36 md:w-44 md:h-44 rounded-full border-6 md:border-8 border-white shadow-xl flex flex-col items-center justify-center transform hover:scale-105 active:scale-95 transition-all cursor-pointer ${phoneme.color} text-amber-950 p-3 overflow-hidden relative shrink-0`}
              >
                <span className={`${getGraphemeFontClass(phoneme.grapheme)} font-black leading-none text-center block w-full px-2`}>
                  {phoneme.grapheme.toUpperCase()}
                </span>
                <span className="text-lg md:text-xl font-black mt-1 font-mono bg-white/40 px-3 py-0.5 rounded-full">
                  {phoneme.ipa}
                </span>
                <span className="text-[10px] md:text-xs font-black mt-1.5 bg-white/95 px-2.5 py-0.5 rounded-full flex items-center space-x-1 shadow-xs">
                  <Volume2 className="w-3 h-3 text-amber-700" />
                  <span>Chạm nghe âm</span>
                </span>
              </button>

              {/* Big Ehon Art Plate */}
              <div 
                onClick={() => audioService.speakEnglish(primaryWord, 0.85)}
                className="w-full max-w-xs md:max-w-sm bg-white rounded-3xl p-3 border-4 border-amber-300 shadow-xl flex flex-col items-center cursor-pointer hover:border-amber-400 transition-all transform hover:-translate-y-1"
              >
                <div className="w-full h-36 md:h-44 rounded-2xl overflow-hidden bg-amber-50 relative border-2 border-amber-200">
                  <img
                    src={primaryVisual.url}
                    alt={primaryVisual.alt}
                    className="w-full h-full object-cover rounded-2xl filter drop-shadow hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/ehon/star.jpg';
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    🎨 Tranh Sơn Dầu Ehon
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <div className="text-2xl md:text-3xl font-black text-amber-950 uppercase tracking-wide">
                    {primaryWord}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-amber-700">
                    {phoneme.sampleWords[0]?.meaningVi} • <span className="underline">Chạm để nghe đọc</span> 🔊
                  </div>
                </div>
              </div>

            </div>

            <p className="text-[11px] md:text-xs font-extrabold text-amber-900 mt-2">
              Chạm vào chữ cái to hoặc tranh vẽ để nghe giọng phát âm chuẩn nhé!
            </p>
          </div>
        )}

        {/* ================= STEP 1: MOUTH VISEME GUIDE ================= */}
        {currentStep === 1 && (
          <div className="py-2 animate-fadeIn w-full">
            <div className="text-center mb-4">
              <span className="text-xs md:text-sm font-black text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full uppercase tracking-wider">
                {stepsTitle[1]}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-amber-950 mt-1">
                Bé Xem Miệng Chuyển Động Thế Nào Nhé! 👄
              </h2>
            </div>
            <SoundVisemeGuide phoneme={phoneme} />
          </div>
        )}

        {/* ================= STEP 2: TPR ACTION ================= */}
        {currentStep === 2 && (
          <div className="text-center py-1 sm:py-2 animate-fadeIn flex flex-col items-center">
            <span className="text-xs font-black text-orange-800 bg-orange-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
              {stepsTitle[2]}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-950 mt-1 mb-0.5">
              Cùng Vận Động: {phoneme.tprAction.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-amber-800 mb-2 max-w-xl mx-auto">
              Phương pháp TPR (Total Physical Response) giúp tạo phản xạ thần kinh tự nhiên thông qua chuyển động cơ thể!
            </p>

            <div className="w-full max-w-lg bg-gradient-to-br from-amber-100 via-orange-100 to-amber-100 rounded-3xl p-3.5 sm:p-5 border-4 border-amber-300 shadow-xl mb-1 text-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-md mb-2.5 bg-amber-50">
                <img
                  src={primaryVisual.url}
                  alt={primaryVisual.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/ehon/star.jpg';
                  }}
                />
                <div className="absolute top-2 right-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                  🎨 {phoneme.tprAction.title}
                </div>
              </div>

              {/* Native English Action Chant Box */}
              <div className="bg-white/95 rounded-2xl p-3 border-2 border-amber-300 shadow-sm mb-2.5">
                <div className="text-[10px] uppercase font-black tracking-wider text-amber-700 mb-0.5 flex items-center justify-center space-x-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>Action Chant (Tiếng Anh Bản Ngữ)</span>
                </div>
                <div className="text-base sm:text-lg font-black text-amber-950 mb-1.5">
                  "{phoneme.tprAction.chantEn}"
                </div>

                {/* 3 Pure Phoneme Sound Chips */}
                <div className="flex items-center justify-center space-x-2 pt-1 border-t border-amber-100">
                  <span className="text-[10px] font-extrabold text-amber-800 uppercase">Âm vị mục tiêu:</span>
                  {[1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => audioService.playPhoneme(phoneme.id)}
                      className="px-2.5 py-0.5 bg-amber-100 hover:bg-amber-200 border border-amber-400 rounded-lg text-amber-950 font-black text-xs active:scale-90 transition-transform cursor-pointer shadow-2xs flex items-center space-x-1"
                      title={`Bấm để nghe âm pure /${phoneme.id}/`}
                    >
                      <span>/{phoneme.id}/</span>
                      <Volume2 className="w-3 h-3 text-amber-700" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Action Button */}
              <KidButton
                variant="warning"
                size="md"
                onClick={() => audioService.playTprAction(phoneme.id, phoneme.tprAction.chantEn)}
                className="w-full py-3 text-sm sm:text-base font-black shadow-lg"
              >
                <Volume2 className="w-5 h-5 mr-1.5 animate-pulse" />
                <span>Nghe & Vận Động Cùng Bé 🔊</span>
              </KidButton>

              {/* Vietnamese Parent Guidance Box */}
              <div className="mt-2.5 bg-white/80 rounded-xl p-2.5 border border-amber-200 text-left text-xs font-bold text-amber-950 flex items-start space-x-2 shadow-2xs">
                <div className="text-xl shrink-0 mt-0.5">
                  {phoneme.tprAction.icon || '🏃'}
                </div>
                <div>
                  <div className="font-black text-amber-900 text-[10px] uppercase tracking-wider mb-0.5">
                    Hướng dẫn động tác cho bé:
                  </div>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-amber-900 font-semibold">
                    {phoneme.tprAction.descriptionVi}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: MULTISENSORY LETTER TRACING STUDIO ================= */}
        {currentStep === 3 && (
          <div className="py-1 animate-fadeIn w-full h-full flex flex-col justify-between">
            <div className="text-center shrink-0 mb-1">
              <span className="text-xs font-black text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
                {stepsTitle[3]} • Chữ cái &quot;{phoneme.grapheme}&quot;
              </span>
              <h2 className="text-xl md:text-2xl font-black text-amber-950 mt-0.5">
                Bé Hãy Tô Theo Nét Chữ /{phoneme.id}/ ✍️
              </h2>
            </div>

            <div className="flex-1 min-h-0 w-full flex items-center justify-center">
              <LetterTracingStudio
                phonemeId={phoneme.id}
                onComplete={handleNextStep}
                showNextButton={true}
                nextLabel="Bé Đã Tô Xong! Sang Bắt Bong Bóng 🎯"
              />
            </div>
          </div>
        )}

        {/* ================= STEP 4: LETTER RECOGNITION & DISCRIMINATION ================= */}
        {currentStep === 4 && (
          <div className="py-1 animate-fadeIn w-full h-full flex flex-col justify-between">
            <div className="text-center shrink-0 mb-1">
              <span className="text-xs font-black text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
                {stepsTitle[4]} • Phân Biệt Âm Vị
              </span>
              <h2 className="text-xl md:text-2xl font-black text-amber-950 mt-0.5">
                Bắt Bong Bóng & Nhận Diện Chữ /{phoneme.id}/ 🎯
              </h2>
            </div>

            <div className="flex-1 min-h-0 w-full flex items-center justify-center">
              <LetterRecognitionGame
                initialPhonemeId={phoneme.id}
                mode="bubble_sound"
                onComplete={handleNextStep}
                nextLabel="Chính Xác! Khám Phá Tranh Ehon 🎨"
              />
            </div>
          </div>
        )}

        {/* ================= STEP 5: VOCABULARY (FLASHCARD & EHON GALLERY) ================= */}
        {currentStep === 5 && (
          <div className="py-1 animate-fadeIn text-center flex flex-col items-center w-full">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between w-full max-w-5xl mb-1 px-1 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {stepsTitle[5]} • {vocabList.length} Từ Cốt Lõi
                </span>
                <button
                  onClick={() => {
                    audioService.playPopSound(540);
                    setIsWordBankModalOpen(true);
                  }}
                  className="flex items-center space-x-1.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black px-3 py-1 rounded-full shadow-xs border border-amber-300 transform active:scale-95 transition-all cursor-pointer text-xs"
                  title={`Mở kho báu khám phá ${getPhonemeWordCount(phoneme.id)} từ vựng của âm /${phoneme.id}/`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-950" />
                  <span>Kho Báu Mở Rộng ({getPhonemeWordCount(phoneme.id)} Từ) 💎</span>
                </button>
              </div>

              {/* View Switcher: Flashcard vs Grid */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-amber-100 p-0.5 rounded-xl border border-amber-300">
                  <button
                    onClick={() => {
                      audioService.playPopSound(480);
                      setVocabViewMode('flashcard');
                    }}
                    className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      vocabViewMode === 'flashcard'
                        ? 'bg-amber-400 text-amber-950 shadow-xs'
                        : 'text-amber-900 hover:bg-amber-200/60'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Thẻ Flashcard</span>
                  </button>
                  <button
                    onClick={() => {
                      audioService.playPopSound(460);
                      setVocabViewMode('grid');
                    }}
                    className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      vocabViewMode === 'grid'
                        ? 'bg-amber-400 text-amber-950 shadow-xs'
                        : 'text-amber-900 hover:bg-amber-200/60'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Lưới Tranh</span>
                  </button>
                </div>

                {vocabViewMode === 'grid' && totalVocabPages > 1 && (
                  <div className="flex items-center space-x-2 bg-white/95 px-3 py-1 rounded-full border border-amber-200 shadow-xs">
                    <button
                      onClick={() => {
                        audioService.playPopSound(440);
                        setVocabPage(prev => Math.max(0, prev - 1));
                      }}
                      disabled={vocabPage === 0}
                      className="p-1 rounded-full hover:bg-amber-100 disabled:opacity-30 cursor-pointer font-bold"
                      title="Trang từ vựng trước"
                    >
                      <ChevronLeft className="w-4 h-4 text-amber-900" />
                    </button>
                    <span className="text-xs font-black text-amber-900">
                      Trang {vocabPage + 1} / {totalVocabPages}
                    </span>
                    <button
                      onClick={() => {
                        audioService.playPopSound(440);
                        setVocabPage(prev => Math.min(totalVocabPages - 1, prev + 1));
                      }}
                      disabled={vocabPage === totalVocabPages - 1}
                      className="p-1 rounded-full hover:bg-amber-100 disabled:opacity-30 cursor-pointer font-bold"
                      title="Trang từ vựng tiếp theo"
                    >
                      <ChevronRight className="w-4 h-4 text-amber-900" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-xl md:text-3xl font-black text-amber-950 mb-0.5">
              Từ Vựng Chứa Âm /{phoneme.id}/ 🎨
            </h2>
            <p className="text-[11px] md:text-xs font-bold text-amber-800 mb-2">
              {vocabViewMode === 'flashcard' 
                ? 'Bấm sang thẻ tiếp theo để học liên tục từng từ với giọng bản xứ chuẩn xác!' 
                : 'Chạm vào từng tranh lớn để nghe từ vựng và chiêm ngưỡng màu vẽ Ehon sinh động!'}
            </p>

            {vocabViewMode === 'flashcard' ? (
              /* ================= FLASHCARD MODE ================= */
              (() => {
                const currentCard = vocabList[lessonFlashcardIdx] || vocabList[0];
                const cardVisual = getWordVisual(currentCard.word);
                const isCardSelected = selectedCards.includes(currentCard.word);
                const isLastCard = lessonFlashcardIdx === vocabList.length - 1;

                return (
                  <div className="w-full max-w-xl mx-auto bg-white rounded-3xl border-4 border-amber-300 shadow-2xl p-3 sm:p-5 flex flex-col justify-between my-1">
                    {/* Top Progress Bar & Auto-Play */}
                    <div className="flex items-center justify-between pb-2 border-b border-amber-100 gap-2 shrink-0">
                      <div className="flex items-center space-x-2">
                        <span className="bg-amber-400 text-amber-950 text-xs font-black px-2.5 py-0.5 rounded-xl shadow-xs">
                          Thẻ {lessonFlashcardIdx + 1} / {vocabList.length}
                        </span>
                        <div className="w-24 sm:w-36 bg-amber-100 h-2.5 rounded-full overflow-hidden border border-amber-200">
                          <div
                            className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                            style={{ width: `${((lessonFlashcardIdx + 1) / vocabList.length) * 100}%` }}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          audioService.playPopSound(520);
                          setIsLessonAutoPlay(prev => !prev);
                        }}
                        className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-black transition-all cursor-pointer shadow-xs ${
                          isLessonAutoPlay
                            ? 'bg-rose-500 text-white animate-pulse'
                            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                        }`}
                        title={isLessonAutoPlay ? 'Tạm dừng đọc tự động' : 'Tự động đọc lần lượt tất cả thẻ'}
                      >
                        {isLessonAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isLessonAutoPlay ? 'Tạm Dừng' : 'Tự Động Đọc'}</span>
                      </button>
                    </div>

                    {/* Artwork + Typography */}
                    <div className="flex flex-col items-center justify-center py-2">
                      <div
                        onClick={() => handleTapSampleWord(currentCard.word)}
                        className="relative w-full max-w-sm h-36 sm:h-44 md:h-48 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md bg-amber-50 group cursor-pointer shrink-0"
                      >
                        <img
                          src={cardVisual.url}
                          alt={cardVisual.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/assets/ehon/star.jpg';
                          }}
                        />
                        <div className="absolute top-2 left-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                          {cardVisual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Ảnh Thật'}
                        </div>
                        <div className="absolute bottom-2 left-2 bg-white/95 text-amber-800 p-1.5 rounded-full shadow">
                          <Volume2 className="w-4 h-4 animate-pulse" />
                        </div>
                        {isCardSelected && (
                          <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow flex items-center space-x-1">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Đã nghe</span>
                          </div>
                        )}
                      </div>

                      <div className="text-center mt-2.5 w-full max-w-md">
                        <div className="flex items-center justify-center space-x-2">
                          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 uppercase tracking-wider">
                            {currentCard.word}
                          </h3>
                          <button
                            onClick={() => handleTapSampleWord(currentCard.word)}
                            className="p-1.5 bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-full shadow-xs cursor-pointer active:scale-95 transition-transform"
                            title="Phát âm từ"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        </div>

                        <p className="text-sm sm:text-base font-bold text-amber-800 mt-0.5">
                          {currentCard.meaningVi}
                        </p>

                        {/* Phoneme breakdown chips */}
                        <div className="flex items-center justify-center gap-1.5 mt-2 flex-wrap">
                          {currentCard.phonemes.map((ph, idx) => (
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
                            onClick={async (e) => {
                              e.stopPropagation();
                              await audioService.blendPhonemes(currentCard.phonemes, 110);
                              audioService.speakEnglish(currentCard.word, 0.85);
                            }}
                            className="px-2.5 py-0.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-lg text-xs shadow-2xs cursor-pointer active:scale-90 transition-transform flex items-center space-x-1"
                            title="Đánh vần từng âm rồi đọc từ"
                          >
                            <Repeat className="w-3 h-3 text-amber-950" />
                            <span>Đánh Vần</span>
                          </button>
                        </div>

                        {/* Sample sentence */}
                        {currentCard.sampleSentence && (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              audioService.speakEnglish(currentCard.sampleSentence!, 0.85);
                            }}
                            className="mt-2 bg-amber-50/90 hover:bg-amber-100/90 border border-amber-200 rounded-xl px-3 py-1 text-center cursor-pointer transition-colors max-w-md mx-auto"
                            title="Chạm để nghe câu mẫu"
                          >
                            <div className="text-xs font-black text-amber-950 flex items-center justify-center space-x-1">
                              <Volume2 className="w-3 h-3 text-amber-700 shrink-0" />
                              <span className="italic truncate">&quot;{currentCard.sampleSentence}&quot;</span>
                            </div>
                            {currentCard.sampleSentenceVi && (
                              <div className="text-[11px] font-bold text-amber-700 truncate mt-0.5">
                                {currentCard.sampleSentenceVi}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Continuous Action Ribbon */}
                    <div className="pt-2 border-t border-amber-100 flex items-center justify-between gap-2 shrink-0">
                      <button
                        onClick={handlePrevLessonFlashcard}
                        disabled={lessonFlashcardIdx === 0}
                        className="flex-1 py-2 sm:py-2.5 px-3 bg-amber-100 hover:bg-amber-200 disabled:opacity-30 disabled:cursor-not-allowed text-amber-950 font-black rounded-2xl border border-amber-300 shadow-xs cursor-pointer flex items-center justify-center space-x-1.5 active:scale-95 transition-transform text-xs sm:text-sm"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Thẻ Trước</span>
                      </button>

                      <button
                        onClick={() => handleTapSampleWord(currentCard.word)}
                        className="p-2 sm:p-2.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-2xl border-2 border-amber-300 shadow-md cursor-pointer flex items-center justify-center active:scale-95 transition-transform shrink-0"
                        title="Nghe lại phát âm từ"
                      >
                        <Volume2 className="w-5 h-5 text-amber-950" />
                      </button>

                      <button
                        onClick={handleNextLessonFlashcard}
                        className={`flex-2 py-2 sm:py-2.5 px-4 font-black rounded-2xl shadow-lg border-2 cursor-pointer flex items-center justify-center space-x-2 active:scale-95 transition-transform text-xs sm:text-sm ${
                          isLastCard
                            ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-700 text-white border-amber-300 shadow-orange-400/40 animate-bounce'
                            : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white border-emerald-300 shadow-emerald-400/30'
                        }`}
                      >
                        <span>{isLastCard ? 'Hoàn Thành! Sang Ghép Vần ➔ 🚀' : 'Thẻ Kế Tiếp ➔'}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                );
              })()
            ) : (
              /* ================= GRID MODE ================= */
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full max-w-5xl mx-auto my-1">
                  {currentVocabSlice.map((item) => {
                    const visual = getWordVisual(item.word);
                    const isSelected = selectedCards.includes(item.word);
                    return (
                      <div
                        key={item.word}
                        onClick={() => handleTapSampleWord(item.word)}
                        className={`rounded-2xl border-4 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg transform active:scale-95 ${
                          isSelected
                            ? 'bg-amber-50 border-amber-400 ring-4 ring-amber-200 scale-102 shadow-xl'
                            : 'bg-white border-amber-200 hover:border-amber-300 hover:shadow-xl'
                        }`}
                      >
                        {/* Big Painting Area */}
                        <div className="w-full h-32 md:h-40 relative overflow-hidden bg-amber-50 flex items-center justify-center p-1.5 border-b border-amber-100">
                          <img
                            src={visual.url}
                            alt={visual.alt}
                            className="w-full h-full object-cover rounded-xl filter drop-shadow hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/assets/ehon/star.jpg';
                            }}
                          />
                          
                          <div className="absolute top-2 left-2 bg-amber-400/90 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-xs">
                            {visual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Hình Chân Thực'}
                          </div>

                          <div className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-full shadow-md text-amber-900">
                            <Volume2 className="w-4 h-4 animate-pulse" />
                          </div>
                        </div>

                        {/* Word Details */}
                        <div className="p-2.5 text-center bg-white flex flex-col items-center justify-center">
                          <div className="text-2xl md:text-3xl font-black text-amber-950 uppercase tracking-wide">
                            {item.word}
                          </div>
                          <div className="text-xs md:text-sm font-bold text-amber-700 mt-0.5">
                            {item.meaningVi}
                          </div>

                          {item.sampleSentence && (
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                audioService.speakEnglish(item.sampleSentence!, 0.85);
                              }}
                              className="mt-1.5 px-2 py-1 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 text-[11px] font-bold text-amber-900 flex items-center space-x-1 transition-colors cursor-pointer w-full justify-center"
                              title="Chạm để nghe đọc câu mẫu decodable"
                            >
                              <Volume2 className="w-3 h-3 text-amber-700 shrink-0" />
                              <span className="truncate italic">&quot;{item.sampleSentence}&quot;</span>
                            </div>
                          )}

                          {isSelected && (
                            <div className="mt-1 text-[11px] font-black text-emerald-600 flex items-center space-x-1 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Đã phát âm!</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Direct Continuous Next Step to Blending */}
                <div className="w-full flex justify-center mt-3 mb-1">
                  <button
                    onClick={handleNextStep}
                    className="py-3 px-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm md:text-base rounded-2xl shadow-xl border-2 border-white transform active:scale-95 transition-all flex items-center space-x-2 cursor-pointer animate-pulse"
                  >
                    <span>Bé Đã Nghe Xong! Sang Ghép Vần Phonics 🫧</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* ================= STEP 6: BLENDING CHALLENGE ================= */}
        {currentStep === 6 && (
          <div className="py-1 animate-fadeIn w-full flex flex-col justify-between">
            <BubbleBlender
              activity={{
                word: currentBlendItem.word,
                emoji: currentBlendItem.emoji,
                meaningVi: currentBlendItem.meaningVi,
                phonemes: currentBlendItem.phonemes
              }}
              onNextWord={() => {
                setBlendingWordIndex((prev) => (prev + 1) % vocabList.length);
              }}
              onPrevWord={() => {
                setBlendingWordIndex((prev) => (prev - 1 + vocabList.length) % vocabList.length);
              }}
              onCompleted={() => {
                audioService.playMagicChime();
              }}
            />

            {/* Direct Continuous Next Step to Victory */}
            <div className="w-full flex justify-center mt-3 mb-1">
              <button
                onClick={handleNextStep}
                className="py-3 px-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-600 text-amber-950 font-black text-xs sm:text-sm md:text-base rounded-2xl shadow-xl border-2 border-amber-200 transform active:scale-95 transition-all flex items-center space-x-2 cursor-pointer animate-pulse"
              >
                <span>Bé Đã Ghép Vần Xong! Nhận Thưởng 🏆</span>
                <ArrowRight className="w-5 h-5 text-amber-950" />
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 7: VICTORY & MASTERY ================= */}
        {currentStep === 7 && (
          <div className="text-center py-2 animate-fadeIn flex flex-col items-center max-w-xl mx-auto">
            <div className="inline-flex p-3 bg-yellow-100 rounded-full mb-1 animate-bounce">
              <Trophy className="w-10 sm:w-12 h-10 sm:h-12 text-yellow-500" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-amber-950 mb-1">
              Hoan Hô Bé Yêu! 🎉
            </h2>

            <p className="text-sm sm:text-base font-extrabold text-amber-800 mb-2">
              Bé đã làm quen âm <span className="font-mono text-amber-600 font-black">/{phoneme.id}/</span> và nhận được <span className="text-amber-500 font-black">+3 ⭐</span>!
            </p>

            {/* Special Celebration Card when an entire Island is conquered! */}
            {isConqueringIsland && nextGroupInfo && (
              <div className="w-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-amber-950 p-3 sm:p-4 rounded-2xl border-3 border-amber-300 shadow-lg mb-3">
                <div className="flex items-center justify-center space-x-2 text-sm sm:text-base font-black">
                  <span>🏝️ ĐÃ CHINH PHỤC ĐẢO {currentGroup?.groupNumber}: {currentGroup?.islandTheme} 🏆</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-amber-950 mt-1 flex items-center justify-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-950" />
                  <span>Đã mở khóa: <strong>Đảo {nextGroupInfo.groupNumber} - {nextGroupInfo.islandTheme} {nextGroupInfo.islandEmoji}</strong></span>
                </div>
              </div>
            )}

            {/* Pre-reader Giant Next Sound / Next Island Button */}
            <div className="w-full px-2 mt-1">
              {nextPhoneme ? (
                <button
                  onClick={() => {
                    audioService.playPopSound(540);
                    try {
                      confetti({ particleCount: 80, spread: 90, origin: { y: 0.5 } });
                    } catch {}
                    if (onNextPhoneme) {
                      onNextPhoneme(nextPhoneme);
                    } else {
                      onFinishLesson(phoneme.id);
                    }
                  }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg sm:text-xl rounded-2xl shadow-xl border-4 border-emerald-300 transform active:scale-95 transition-all flex items-center justify-center space-x-3 cursor-pointer animate-pulse"
                >
                  <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
                  <span className="truncate">
                    {isConqueringIsland && nextGroupInfo
                      ? `Khám Phá Đảo ${nextGroupInfo.groupNumber}: Học Âm /${nextPhoneme.id}/ 🏝️🚀`
                      : `Học Âm Tiếp Theo: /${nextPhoneme.id}/ 🚀`}
                  </span>
                  <ArrowRight className="w-6 h-6 text-white shrink-0" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    audioService.playSuccessJingle();
                    onFinishLesson(phoneme.id);
                  }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-400 to-orange-500 text-amber-950 font-black text-lg rounded-2xl shadow-xl border-3 border-amber-300 transform active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Trophy className="w-6 h-6 text-amber-950" />
                  <span>Hoàn Thành Xuất Sắc 42 Âm! Về Bản Đồ 🗺️</span>
                </button>
              )}
            </div>

            {/* Secondary Option: Return to Map */}
            <div className="flex items-center justify-center space-x-3 mt-2.5">
              <button
                onClick={() => {
                  audioService.playPopSound(460);
                  onFinishLesson(phoneme.id);
                }}
                className="text-xs sm:text-sm font-black text-amber-800 hover:text-amber-950 underline px-2 py-1 cursor-pointer flex items-center space-x-1"
              >
                <span>Về Bản Đồ Quần Đảo 🗺️</span>
              </button>

              <span className="text-amber-300">•</span>

              <button
                onClick={() => {
                  audioService.playPopSound(540);
                  setIsWordBankModalOpen(true);
                }}
                className="text-xs sm:text-sm font-black text-amber-800 hover:text-amber-950 underline px-2 py-1 cursor-pointer flex items-center space-x-1"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Xem {getPhonemeWordCount(phoneme.id)} Từ Của Âm /{phoneme.id}/ 💎</span>
              </button>
            </div>

            {/* Leo Companion Encouragement Bubble */}
            <div className="w-full max-w-md bg-amber-50/90 rounded-xl p-2.5 border border-amber-200 mt-2.5 flex items-center space-x-2.5 shadow-2xs">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-xs bg-amber-100 shrink-0">
                <img src="/assets/ehon/leo.jpg" alt="Leo Sư Tử" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-bold text-amber-950 text-left">
                "Bé phát âm rất siêu! Bấm nút xanh phía trên để học tiếp ngay nhé!"
              </p>
            </div>
          </div>
        )}

        </div> {/* End of flexible step body */}

        {/* Navigation Bottom Controls - Permanently Pinned */}
        <div className="flex items-center justify-between pt-2.5 border-t-2 border-amber-100 mt-2 px-2 shrink-0">
          <KidButton
            variant="secondary"
            size="md"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
            className="py-2.5 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-black shadow-md"
            title="Quay lại bước trước"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Quay Lại</span>
          </KidButton>

          {/* Central Repeat / Hear Sound Button */}
          <KidButton
            variant="warning"
            size="md"
            onClick={handleReplayCurrentStepAudio}
            className="py-2.5 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-black shadow-lg"
            title="Nghe lại âm thanh bước này"
          >
            <Volume2 className="w-5 h-5 mr-1.5 animate-pulse" />
            <span>Nghe Lại 🔊</span>
          </KidButton>

          {/* Forward Next Step Button */}
          <KidButton
            variant="success"
            size="md"
            onClick={handleNextStep}
            className="py-2.5 px-5 sm:px-8 text-xs sm:text-sm md:text-base font-black shadow-xl"
            title="Sang bước tiếp theo"
          >
            <span>{currentStep === 7 ? 'Lưu & Khám Phá Tiếp 🏆' : 'Bước Tiếp Theo'}</span>
            <ArrowRight className="w-5 h-5 ml-1.5" />
          </KidButton>
        </div>

      </div>

      {/* Phonics Sound Word Bank Modal for this phoneme */}
      <PhonicsWordBankModal
        isOpen={isWordBankModalOpen}
        onClose={() => setIsWordBankModalOpen(false)}
        initialPhonemeId={phoneme.id}
        initialGroupNumber={phoneme.group}
      />
    </div>
  );
};

