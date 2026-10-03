import React, { useState } from 'react';
import { PhonemeInfo } from '../types/phonics';
import { SoundVisemeGuide } from './SoundVisemeGuide';
import { BubbleBlender } from './BubbleBlender';
import { KidButton } from './KidButton';
import { audioService } from '../services/audioService';
import { 
  CartoonSnake, 
  CartoonApple, 
  CartoonCat, 
  CartoonDog, 
  CartoonSun,
  LeoCartoonMascot 
} from './illustrations/KidIllustrations';
import { 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft,
  Trophy,
  Sparkles
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

  // Safe dynamic font sizing for grapheme letters (No text overflowing or breaking outside circles)
  const getGraphemeFontClass = (text: string) => {
    const len = text.length;
    if (len <= 1) return 'text-6xl md:text-7xl';
    if (len <= 2) return 'text-4xl md:text-5xl';
    if (len <= 4) return 'text-3xl md:text-4xl';
    return 'text-xl md:text-2xl font-bold tracking-tight';
  };

  // Helper to render cute cartoon illustration if available
  const renderFeaturedIllustration = () => {
    switch (phoneme.id) {
      case 's': return <CartoonSnake size={90} className="animate-float" />;
      case 'a': return <CartoonApple size={90} className="animate-bounce-gentle" />;
      case 'c': return <CartoonCat size={90} className="animate-float" />;
      case 'd': return <CartoonDog size={90} className="animate-bounce-gentle" />;
      case 'o': return <CartoonSun size={90} className="animate-spin" />;
      default: return <LeoCartoonMascot size={90} className="animate-float" />;
    }
  };

  const stepsTitle = [
    'Làm Quen Âm Thanh',
    'Khẩu Hình Miệng Chuẩn',
    'Vận Động Toàn Thân (TPR)',
    'Từ Vựng Tương Ứng',
    'Thử Thách Ghép Vần',
    'Chiến Thắng!'
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-3">
      {/* Top Breadcrumb & Back */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 bg-white/90 hover:bg-white text-amber-950 font-black px-4 py-2 rounded-2xl shadow border-2 border-amber-200 active:scale-95 transition-transform cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-amber-600" />
          <span>Quay Lại</span>
        </button>

        {/* Step Progress Pills */}
        <div className="flex items-center space-x-2">
          {stepsTitle.map((title, idx) => (
            <div
              key={idx}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                idx === currentStep
                  ? 'bg-amber-500 scale-125 ring-2 ring-amber-300'
                  : idx < currentStep
                  ? 'bg-emerald-400'
                  : 'bg-amber-200'
              }`}
              title={title}
            />
          ))}
        </div>

        <span className="text-xs font-black text-amber-800 bg-amber-200 px-3 py-1 rounded-full">
          Bước {currentStep + 1} / 6
        </span>
      </div>

      {/* Main Step Canvas */}
      <div className="bg-white/95 rounded-3xl p-6 md:p-8 border-6 border-amber-300 shadow-2xl min-h-[480px] flex flex-col justify-between">
        
        {/* Step 0: Sound Introduction */}
        {currentStep === 0 && (
          <div className="text-center py-2 animate-fadeIn flex flex-col items-center">
            <span className="text-xs md:text-sm font-black text-amber-700 bg-amber-100 px-4 py-1 rounded-full uppercase tracking-wider mb-2">
              {stepsTitle[0]} • Stage {phoneme.stage}
            </span>

            {/* Header Titles with guaranteed spacing */}
            <h2 className="text-2xl md:text-4xl font-black text-amber-950 mb-1">
              Chào Mừng Đến Với Âm /{phoneme.id}/!
            </h2>
            <p className="text-sm md:text-base font-bold text-amber-800 max-w-md mx-auto mb-6">
              {phoneme.soundDescription}
            </p>

            {/* Center Area: Chunky Letter Circle + Accompanying Cartoon Artwork */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4">
              {/* Giant Chunky Letter Circle (Controlled Dimensions & Clamped Font) */}
              <button
                onClick={() => audioService.speakPhoneme(phoneme.id, phoneme.ipa)}
                className={`w-44 h-44 md:w-52 md:h-52 rounded-full border-8 border-white shadow-2xl flex flex-col items-center justify-center transform hover:scale-105 active:scale-95 transition-all cursor-pointer ${phoneme.color} text-amber-950 p-4 overflow-hidden relative`}
              >
                <span className={`${getGraphemeFontClass(phoneme.grapheme)} font-black leading-none text-center block w-full px-2`}>
                  {phoneme.grapheme.toUpperCase()}
                </span>
                <span className="text-xl md:text-2xl font-black mt-2 font-mono bg-white/40 px-3 py-0.5 rounded-full">
                  {phoneme.ipa}
                </span>
                <span className="text-[11px] font-black mt-2 bg-white/90 px-3 py-1 rounded-full flex items-center space-x-1 shadow-xs">
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Chạm nghe âm</span>
                </span>
              </button>

              {/* Accompanying Featured Cartoon Drawing */}
              <div className="bg-amber-50 p-4 rounded-3xl border-3 border-amber-200 flex flex-col items-center justify-center shadow-md">
                {renderFeaturedIllustration()}
                <span className="text-xs font-black text-amber-900 mt-2">
                  {phoneme.sampleWords[0]?.word.toUpperCase()} ({phoneme.sampleWords[0]?.meaningVi})
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm font-extrabold text-amber-900 mt-4">
              Chạm vào chữ cái to để nghe giọng phát âm chuẩn nhé!
            </p>
          </div>
        )}

        {/* Step 1: Mouth Viseme Guide */}
        {currentStep === 1 && (
          <div className="py-2 animate-fadeIn">
            <div className="text-center mb-4">
              <span className="text-xs md:text-sm font-black text-amber-700 bg-amber-100 px-4 py-1 rounded-full uppercase tracking-wider">
                {stepsTitle[1]}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-amber-950 mt-1">
                Bé Xem Miệng Chuyển Động Thế Nào Nhé! 👄
              </h2>
            </div>
            <SoundVisemeGuide phoneme={phoneme} />
          </div>
        )}

        {/* Step 2: TPR Action */}
        {currentStep === 2 && (
          <div className="text-center py-4 animate-fadeIn">
            <span className="text-xs md:text-sm font-black text-orange-700 bg-orange-100 px-4 py-1 rounded-full uppercase tracking-wider">
              {stepsTitle[2]}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-amber-950 mt-2 mb-2">
              Cùng Vận Động: {phoneme.tprAction.title}
            </h2>
            <p className="text-sm font-bold text-amber-800 mb-6 max-w-lg mx-auto">
              Phương pháp TPR (Total Physical Response) giúp tạo phản xạ thần kinh tự nhiên thông qua chuyển động cơ thể!
            </p>

            <div className="max-w-md mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 border-4 border-amber-300 shadow-lg mb-4">
              <div className="text-7xl md:text-8xl mb-4 animate-bounce">
                {phoneme.tprAction.icon}
              </div>
              <div className="bg-white/95 rounded-2xl p-4 border border-amber-200 text-base md:text-lg font-black text-amber-950 mb-4 shadow-xs">
                "{phoneme.tprAction.actionPrompt}"
              </div>
              <KidButton
                variant="warning"
                size="md"
                onClick={() => audioService.speakEnglish(phoneme.tprAction.actionPrompt, 0.9)}
              >
                🔊 Nghe Hướng Dẫn Vận Động
              </KidButton>
            </div>
          </div>
        )}

        {/* Step 3: Vocabulary & Sound Discrimination */}
        {currentStep === 3 && (
          <div className="py-2 animate-fadeIn text-center">
            <span className="text-xs md:text-sm font-black text-emerald-700 bg-emerald-100 px-4 py-1 rounded-full uppercase tracking-wider">
              {stepsTitle[3]}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-amber-950 mt-1 mb-2">
              Các Từ Chứa Âm /{phoneme.id}/ 🌟
            </h2>
            <p className="text-xs md:text-sm font-bold text-amber-800 mb-6">
              Chạm vào từng tấm thẻ hình ảnh để nghe phát âm chuẩn nhé!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
              {phoneme.sampleWords.map((item) => {
                const isSelected = selectedCards.includes(item.word);
                return (
                  <button
                    key={item.word}
                    onClick={() => handleTapSampleWord(item.word)}
                    className={`p-6 rounded-3xl border-4 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer shadow-md transform active:scale-95 ${
                      isSelected
                        ? 'bg-amber-100 border-amber-400 ring-4 ring-amber-200 scale-105'
                        : 'bg-white border-amber-200 hover:border-amber-400'
                    }`}
                  >
                    <span className="text-6xl mb-2">{item.emoji}</span>
                    <span className="text-2xl font-black text-amber-950 uppercase">{item.word}</span>
                    <span className="text-xs font-bold text-amber-700 mt-1">{item.meaningVi}</span>
                    {isSelected && (
                      <span className="mt-2 text-xs font-bold text-emerald-600 flex items-center space-x-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Đã nghe!</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 4: Blending Challenge */}
        {currentStep === 4 && (
          <div className="py-2 animate-fadeIn">
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

        {/* Step 5: Victory & Mastery */}
        {currentStep === 5 && (
          <div className="text-center py-6 animate-fadeIn">
            <div className="inline-flex p-4 bg-yellow-100 rounded-full mb-3 animate-bounce">
              <Trophy className="w-14 h-14 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-amber-950 mb-2">
              Hoan Hô Bé Yêu! 🎉
            </h2>
            <p className="text-lg md:text-xl font-extrabold text-amber-800 mb-6">
              Bé đã làm quen âm <span className="font-mono text-amber-600">/{phoneme.id}/</span> và nhận được <span className="text-amber-500 font-black">+3 ⭐</span>!
            </p>

            <div className="max-w-sm mx-auto bg-amber-50 rounded-3xl p-5 border-2 border-amber-200 mb-6 flex items-center space-x-4">
              <LeoCartoonMascot size={70} mood="wink" />
              <p className="text-xs md:text-sm font-bold text-amber-950 text-left">
                "Bé phát âm rất tự tin! Hãy tiếp tục phiêu lưu sang các hòn đảo âm thanh mới nhé!"
              </p>
            </div>
          </div>
        )}

        {/* Navigation Bottom Controls */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-amber-100 mt-2">
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
