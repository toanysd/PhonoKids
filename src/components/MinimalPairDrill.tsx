import React, { useState, useEffect } from 'react';
import { MinimalPairItem } from '../types/phonics';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { KidButton } from './KidButton';
import { Volume2, HelpCircle, CheckCircle2, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MinimalPairDrillProps {
  drill: MinimalPairItem;
  onSuccess?: () => void;
  onNextDrill?: () => void;
}

export const MinimalPairDrill: React.FC<MinimalPairDrillProps> = ({ drill, onSuccess, onNextDrill }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [isPlayingTarget, setIsPlayingTarget] = useState<boolean>(false);

  // Shuffle options on drill change to prevent positional bias
  useEffect(() => {
    const shuffled = Math.random() > 0.5
      ? [drill.targetWord, drill.distractorWord]
      : [drill.distractorWord, drill.targetWord];
    setOptions(shuffled);
    setSelectedWord(null);
    setIsAnswered(false);
    setShowHint(false);
  }, [drill.id, drill.targetWord, drill.distractorWord]);

  const handleHearTargetWord = async () => {
    setIsPlayingTarget(true);
    await audioService.speakEnglish(drill.targetWord, 0.85);
    setTimeout(() => setIsPlayingTarget(false), 800);
  };

  const handleHearOption = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    audioService.speakEnglish(word, 0.85);
  };

  const handleSelectOption = (word: string) => {
    setSelectedWord(word);
    setIsAnswered(true);

    if (word === drill.targetWord) {
      audioService.playSuccessJingle();
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Ignore
      }
      onSuccess?.();
    } else {
      audioService.playGentleTryAgain();
    }
  };

  const handleNext = () => {
    setSelectedWord(null);
    setIsAnswered(false);
    setShowHint(false);
    if (onNextDrill) {
      onNextDrill();
    }
  };

  const isCorrect = selectedWord === drill.targetWord;

  const renderVisualCard = (word: string) => {
    const visual = getWordVisual(word);

    return (
      <div className="relative w-full h-24 sm:h-28 md:h-32 rounded-xl overflow-hidden mb-1.5 border border-purple-200 shadow-sm bg-purple-50 group">
        <img
          src={visual.url}
          alt={visual.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow">
          {visual.type === 'ehon' ? '🎨 Ehon' : '📷 Ảnh thật'}
        </div>
        <div className="absolute bottom-1.5 left-1.5 bg-white/95 backdrop-blur-xs text-purple-950 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-purple-200">
          {visual.alt}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-50 rounded-3xl p-3 sm:p-5 border-4 border-purple-300 shadow-xl flex-1 min-h-0 flex flex-col justify-between overflow-hidden text-center">
      {/* Drill Pair Header */}
      <div className="flex items-center justify-between shrink-0 mb-1">
        <span className="text-xs font-black text-purple-900 bg-purple-200/90 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
          Phòng Lỗi Phát Âm • {drill.pairName}
        </span>
        <button
          onClick={() => setShowHint(!showHint)}
          className="p-1.5 bg-white text-purple-700 hover:text-purple-900 rounded-full shadow-xs border border-purple-200 cursor-pointer"
          title="Xem bí quyết phụ huynh"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {showHint && (
        <div className="mb-2 p-2.5 bg-purple-200/95 rounded-2xl text-xs font-bold text-purple-950 text-left border border-purple-300 animate-fadeIn shrink-0">
          💡 <span className="font-black">Bí kíp phát âm cho bé:</span> {drill.hintVi}
        </div>
      )}

      {/* Prominent Target Sound Audio Button */}
      <div className="flex flex-col items-center justify-center my-1 shrink-0">
        <p className="text-xs sm:text-sm font-bold text-purple-900 mb-1">
          {drill.questionPrompt}
        </p>
        <KidButton
          variant="purple"
          size="md"
          onClick={handleHearTargetWord}
          className={`py-2 px-6 shadow-xl text-sm sm:text-base font-black ${
            isPlayingTarget ? 'ring-4 ring-purple-300 scale-105 animate-pulse' : ''
          }`}
          title="Chạm để nghe âm mẫu cần tìm"
        >
          <Volume2 className={`w-6 h-6 mr-2 ${isPlayingTarget ? 'animate-bounce' : 'animate-pulse'}`} />
          <span>{isPlayingTarget ? 'Đang đọc mẫu...' : 'Chạm Nghe Âm Mẫu 🔊'}</span>
        </KidButton>
      </div>

      {/* Option Cards (Grid 2 cols) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 my-auto max-w-2xl mx-auto w-full">
        {options.map((word) => {
          const isTarget = word === drill.targetWord;
          const isSelected = selectedWord === word;

          return (
            <div
              key={word}
              onClick={() => handleSelectOption(word)}
              className={`p-3 sm:p-4 rounded-2xl border-3 transition-all duration-200 flex flex-col items-center justify-between cursor-pointer shadow-md transform active:scale-95 ${
                isAnswered && isSelected && isTarget
                  ? 'bg-emerald-100 border-emerald-500 ring-4 ring-emerald-300 scale-102'
                  : isAnswered && isSelected && !isTarget
                  ? 'bg-amber-100 border-amber-400 scale-98'
                  : 'bg-white border-purple-200 hover:border-purple-400'
              }`}
            >
              <div className="w-full">
                {renderVisualCard(word)}
                <span className="text-2xl sm:text-3xl font-black text-purple-950 uppercase tracking-wide block mb-1">
                  {word}
                </span>
              </div>

              {/* Direct individual listen button */}
              <div className="w-full flex items-center justify-between pt-1.5 border-t border-purple-100">
                <button
                  onClick={(e) => handleHearOption(e, word)}
                  className="px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg text-xs flex items-center space-x-1.5 transition-colors cursor-pointer border border-purple-300 shadow-xs"
                  title={`Nghe phát âm ${word}`}
                >
                  <Volume2 className="w-4 h-4 text-purple-700 animate-pulse" />
                  <span>Nghe Thẻ Này 🔊</span>
                </button>

                {isAnswered && isSelected && isTarget && (
                  <span className="text-xs font-black text-emerald-700 flex items-center space-x-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Đúng!</span>
                  </span>
                )}

                {isAnswered && isSelected && !isTarget && (
                  <span className="text-[11px] font-bold text-amber-700">
                    Nghe lại nhé!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <div className="shrink-0 pt-1">
          {isCorrect ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="p-2 bg-emerald-100/90 border border-emerald-400 rounded-xl text-emerald-950 text-xs sm:text-sm font-black flex items-center space-x-1.5">
                <Award className="w-5 h-5 text-emerald-600 animate-bounce" />
                <span>Bé chọn chuẩn xác! +2 ⭐</span>
              </div>
              <KidButton 
                variant="success" 
                size="md" 
                onClick={handleNext} 
                className="py-2 px-5 text-xs sm:text-sm font-black shadow-lg"
                title="Sang bài luyện tiếp theo"
              >
                <span>Bài Tiếp Theo ➔</span>
                <Sparkles className="w-4 h-4 ml-1" />
              </KidButton>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <p className="text-xs font-bold text-purple-900">
                Bé ấn "Nghe Thẻ Này 🔊" để cảm nhận luồng hơi nhé!
              </p>
              <KidButton 
                variant="secondary" 
                size="sm" 
                onClick={handleHearTargetWord} 
                className="py-1.5 px-3 text-xs font-bold"
              >
                <Volume2 className="w-4 h-4 mr-1" />
                <span>Nghe Lại Mẫu</span>
              </KidButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
