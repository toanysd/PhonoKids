import React, { useState } from 'react';
import { PhonemeInfo } from '../types/phonics';
import { SoundVisemeGuide } from './SoundVisemeGuide';
import { BubbleBlender } from './BubbleBlender';
import { KidButton } from './KidButton';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft,
  Trophy,
  Sparkles,
  Palette
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonPlayerProps {
  phoneme: PhonemeInfo;
  onFinishLesson: (phonemeId: string) => void;
  onBack: () => void;
}

export const LessonPlayer: React.FC<LessonPlayerProps> = ({
  phoneme,
  onFinishLesson,
  onBack,
}) => {
  // Steps: 0: Intro -> 1: Viseme Mouth -> 2: TPR Action -> 3: Discrimination -> 4: Blending -> 5: Victory
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);

  const handleNextStep = () => {
    audioService.playPopSound(520);
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      audioService.playSuccessJingle();
      try {
        confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
      } catch {
        // Ignore
      }
      onFinishLesson(phoneme.id);
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

  // Safe dynamic font sizing for grapheme letters
  const getGraphemeFontClass = (text: string) => {
    const len = text.length;
    if (len <= 1) return 'text-6xl md:text-7xl';
    if (len <= 2) return 'text-4xl md:text-5xl';
    if (len <= 4) return 'text-3xl md:text-4xl';
    return 'text-xl md:text-2xl font-bold tracking-tight';
  };

  const primaryWord = phoneme.sampleWords[0]?.word || 'cat';
  const primaryVisual = getWordVisual(primaryWord);

  const stepsTitle = [
    'Làm Quen Âm Thanh',
    'Khẩu Hình Miệng Chuẩn',
    'Vận Động Toàn Thân (TPR)',
    'Từ Vựng Tương Ứng (Tranh Ehon)',
    'Thử Thách Ghép Vần',
    'Chiến Thắng!'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-3">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex items-center justify-between mb-3 px-2">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 bg-white/95 hover:bg-white text-amber-950 font-black px-4 py-2.5 rounded-2xl shadow-md border-2 border-amber-200 active:scale-95 transition-transform cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-amber-600" />
          <span className="text-sm md:text-base">Quay Lại Đảo</span>
        </button>

        {/* Step Progress Pills */}
        <div className="flex items-center space-x-2 md:space-x-3 bg-white/80 px-4 py-2 rounded-2xl border border-amber-200 shadow-xs">
          {stepsTitle.map((title, idx) => (
            <div
              key={idx}
              className={`w-3 md:w-3.5 h-3 md:h-3.5 rounded-full transition-all duration-300 ${
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

        <span className="text-xs md:text-sm font-black text-amber-900 bg-amber-200/90 px-3.5 py-1.5 rounded-full shadow-xs">
          Bước {currentStep + 1} / 6
        </span>
      </div>

      {/* Main Full-Bleed Storybook Canvas (Expanded to fill screen comfortably) */}
      <div className="bg-[#FFFDF9] rounded-3xl p-5 md:p-8 border-6 md:border-8 border-amber-300 shadow-2xl min-h-[580px] md:min-h-[660px] flex flex-col justify-between relative overflow-hidden">
        
        {/* Subtle background paper texture hint */}
        <div className="absolute top-2 right-4 text-xs font-bold text-amber-800/40 select-none flex items-center space-x-1">
          <Palette className="w-3.5 h-3.5" />
          <span>Ehon Storybook Canvas</span>
        </div>

        {/* ================= STEP 0: SOUND INTRODUCTION ================= */}
        {currentStep === 0 && (
          <div className="text-center py-2 animate-fadeIn flex flex-col items-center">
            <span className="text-xs md:text-sm font-black text-amber-800 bg-amber-100 px-4 py-1.5 rounded-full uppercase tracking-wider mb-2">
              {stepsTitle[0]} • Stage {phoneme.stage}
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-amber-950 mb-1">
              Chào Mừng Đến Với Âm /{phoneme.id}/!
            </h2>
            <p className="text-sm md:text-lg font-bold text-amber-800 max-w-xl mx-auto mb-6">
              {phoneme.soundDescription}
            </p>

            {/* Wide Hero Presentation: Grapheme Circle + Big Ehon Painted Plate */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 my-2 w-full max-w-4xl">
              
              {/* Clamped Chunky Letter Circle */}
              <button
                onClick={() => audioService.speakPhoneme(phoneme.id, phoneme.ipa)}
                className={`w-48 h-48 md:w-60 md:h-60 rounded-full border-8 border-white shadow-2xl flex flex-col items-center justify-center transform hover:scale-105 active:scale-95 transition-all cursor-pointer ${phoneme.color} text-amber-950 p-4 overflow-hidden relative shrink-0`}
              >
                <span className={`${getGraphemeFontClass(phoneme.grapheme)} font-black leading-none text-center block w-full px-2`}>
                  {phoneme.grapheme.toUpperCase()}
                </span>
                <span className="text-xl md:text-2xl font-black mt-2 font-mono bg-white/40 px-4 py-0.5 rounded-full">
                  {phoneme.ipa}
                </span>
                <span className="text-xs font-black mt-2 bg-white/95 px-3 py-1 rounded-full flex items-center space-x-1 shadow-xs">
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Chạm nghe âm</span>
                </span>
              </button>

              {/* Big Ehon Art Plate */}
              <div 
                onClick={() => audioService.speakEnglish(primaryWord, 0.85)}
                className="w-full max-w-sm md:max-w-md bg-white rounded-3xl p-4 border-4 border-amber-300 shadow-xl flex flex-col items-center cursor-pointer hover:border-amber-400 transition-all transform hover:-translate-y-1"
              >
                <div className="w-full h-52 md:h-60 rounded-2xl overflow-hidden bg-amber-50 relative border-2 border-amber-200">
                  <img
                    src={primaryVisual.url}
                    alt={primaryVisual.alt}
                    className="w-full h-full object-cover rounded-2xl filter drop-shadow hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    🎨 Tranh Sơn Dầu Ehon
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-3xl font-black text-amber-950 uppercase tracking-wide">
                    {primaryWord}
                  </div>
                  <div className="text-sm font-bold text-amber-700">
                    {phoneme.sampleWords[0]?.meaningVi} • <span className="underline">Chạm để nghe đọc</span> 🔊
                  </div>
                </div>
              </div>

            </div>

            <p className="text-xs md:text-sm font-extrabold text-amber-900 mt-4">
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
          <div className="text-center py-4 animate-fadeIn flex flex-col items-center">
            <span className="text-xs md:text-sm font-black text-orange-800 bg-orange-100 px-4 py-1.5 rounded-full uppercase tracking-wider">
              {stepsTitle[2]}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-amber-950 mt-2 mb-2">
              Cùng Vận Động: {phoneme.tprAction.title}
            </h2>
            <p className="text-sm md:text-base font-bold text-amber-800 mb-6 max-w-xl mx-auto">
              Phương pháp TPR (Total Physical Response) giúp tạo phản xạ thần kinh tự nhiên thông qua chuyển động cơ thể!
            </p>

            <div className="w-full max-w-xl bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 border-4 border-amber-300 shadow-xl mb-4 text-center">
              <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-lg mb-4 bg-amber-50">
                <img
                  src={primaryVisual.url}
                  alt={primaryVisual.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                  🎨 {phoneme.tprAction.title}
                </div>
              </div>
              <div className="bg-white/95 rounded-2xl p-4 border border-amber-200 text-lg md:text-xl font-black text-amber-950 mb-6 shadow-xs">
                "{phoneme.tprAction.actionPrompt}"
              </div>
              <KidButton
                variant="warning"
                size="lg"
                onClick={() => audioService.speakEnglish(phoneme.tprAction.actionPrompt, 0.9)}
              >
                🔊 Nghe Hướng Dẫn Vận Động
              </KidButton>
            </div>
          </div>
        )}

        {/* ================= STEP 3: VOCABULARY (BIG EHON GALLERY) ================= */}
        {currentStep === 3 && (
          <div className="py-2 animate-fadeIn text-center flex flex-col items-center w-full">
            <span className="text-xs md:text-sm font-black text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full uppercase tracking-wider">
              {stepsTitle[3]}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-amber-950 mt-1 mb-1">
              Tranh Truyện Ehon Chứa Âm /{phoneme.id}/ 🎨
            </h2>
            <p className="text-sm md:text-base font-bold text-amber-800 mb-4">
              Chạm vào từng bức tranh lớn để nghe từ vựng và chiêm ngưỡng màu vẽ nghệ thuật!
            </p>

            {/* Widescreen 3-Column Large Art Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto my-2">
              {phoneme.sampleWords.map((item) => {
                const visual = getWordVisual(item.word);
                const isSelected = selectedCards.includes(item.word);
                return (
                  <div
                    key={item.word}
                    onClick={() => handleTapSampleWord(item.word)}
                    className={`rounded-3xl border-5 md:border-6 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl transform active:scale-95 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400 ring-4 ring-amber-200 scale-102 shadow-2xl'
                        : 'bg-white border-amber-200 hover:border-amber-300 hover:shadow-2xl'
                    }`}
                  >
                    {/* Big Painting Area (Occupies 70% of Card) */}
                    <div className="w-full h-56 md:h-64 relative overflow-hidden bg-amber-50 flex items-center justify-center p-2 border-b-2 border-amber-100">
                      <img
                        src={visual.url}
                        alt={visual.alt}
                        className="w-full h-full object-cover rounded-2xl filter drop-shadow hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      
                      {/* Badge Style */}
                      <div className="absolute top-3 left-3 bg-amber-400/90 text-amber-950 text-[11px] font-black px-3 py-1 rounded-full shadow-md backdrop-blur-xs">
                        {visual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Hình Chân Thực'}
                      </div>

                      {/* Speaker icon hint */}
                      <div className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full shadow-md text-amber-900">
                        <Volume2 className="w-5 h-5 animate-pulse" />
                      </div>
                    </div>

                    {/* Word Details (Bottom 30%) */}
                    <div className="p-4 text-center bg-white flex flex-col items-center justify-center">
                      <div className="text-3xl md:text-4xl font-black text-amber-950 uppercase tracking-wide">
                        {item.word}
                      </div>
                      <div className="text-sm md:text-base font-bold text-amber-700 mt-0.5">
                        {item.meaningVi}
                      </div>
                      {isSelected && (
                        <div className="mt-2 text-xs font-black text-emerald-600 flex items-center space-x-1 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Đã phát âm!</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= STEP 4: BLENDING CHALLENGE ================= */}
        {currentStep === 4 && (
          <div className="py-2 animate-fadeIn w-full">
            <BubbleBlender
              activity={{
                word: phoneme.sampleWords[0]?.word || 'sun',
                emoji: phoneme.sampleWords[0]?.emoji || '☀️',
                meaningVi: phoneme.sampleWords[0]?.meaningVi || 'mặt trời',
                phonemes: phoneme.sampleWords[0]?.word.split('') || ['s', 'u', 'n']
              }}
              onCompleted={() => {
                audioService.playMagicChime();
              }}
            />
          </div>
        )}

        {/* ================= STEP 5: VICTORY & MASTERY ================= */}
        {currentStep === 5 && (
          <div className="text-center py-6 animate-fadeIn flex flex-col items-center">
            <div className="inline-flex p-4 bg-yellow-100 rounded-full mb-3 animate-bounce">
              <Trophy className="w-16 h-16 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-amber-950 mb-2">
              Hoan Hô Bé Yêu! 🎉
            </h2>
            <p className="text-lg md:text-2xl font-extrabold text-amber-800 mb-6">
              Bé đã làm quen âm <span className="font-mono text-amber-600">/{phoneme.id}/</span> và nhận được <span className="text-amber-500 font-black">+3 ⭐</span>!
            </p>

            <div className="max-w-md mx-auto bg-amber-50 rounded-3xl p-6 border-3 border-amber-200 mb-6 flex items-center space-x-4 shadow-md">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-lg bg-amber-100 shrink-0">
                <img src="/assets/ehon/leo.jpg" alt="Leo Sư Tử" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm md:text-base font-bold text-amber-950 text-left">
                "Bé phát âm rất tự tin! Hãy tiếp tục phiêu lưu sang các bức tranh Ehon mới nhé!"
              </p>
            </div>
          </div>
        )}

        {/* Navigation Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-amber-100 mt-4 px-2">
          <KidButton
            variant="secondary"
            size="md"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
          >
            Quay Lại
          </KidButton>

          <KidButton
            variant="primary"
            size="lg"
            onClick={handleNextStep}
          >
            <span>{currentStep === 5 ? 'Lưu Tiến Độ & Khám Phá Tiếp' : 'Bước Kế Tiếp'}</span>
            <ArrowRight className="w-5 h-5 ml-1.5" />
          </KidButton>
        </div>

      </div>
    </div>
  );
};
