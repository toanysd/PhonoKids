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
}

export const MinimalPairDrill: React.FC<MinimalPairDrillProps> = ({ drill, onSuccess }) => {
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
  };

  const isCorrect = selectedWord === drill.targetWord;

  const renderVisualCard = (word: string) => {
    const visual = getWordVisual(word);

    return (
      <div className="relative w-full h-36 sm:h-44 rounded-2xl overflow-hidden mb-2.5 border-2 border-purple-200 shadow-md bg-purple-50 group">
        <img
          src={visual.url}
          alt={visual.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
          {visual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Ảnh Thật Sắc Nét'}
        </div>
        <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs text-purple-950 text-[10px] font-bold px-2 py-0.5 rounded-lg border border-purple-200">
          {visual.alt}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-50 rounded-3xl p-6 md:p-8 border-4 border-purple-300 shadow-xl max-w-5xl mx-auto text-center">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs md:text-sm font-black text-purple-900 bg-purple-200 px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
          Phòng Lỗi Phát Âm • {drill.pairName}
        </span>
        <button
          onClick={() => setShowHint(!showHint)}
          className="p-2 bg-white text-purple-700 hover:text-purple-900 rounded-full shadow border border-purple-200 cursor-pointer"
          title="Xem bí quyết phụ huynh"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>

      {showHint && (
        <div className="mb-6 p-4 bg-purple-200/90 rounded-2xl text-xs md:text-sm font-bold text-purple-950 text-left border-2 border-purple-300 animate-fadeIn">
          💡 <span className="font-black">Bí kíp phát âm cho bé:</span> {drill.hintVi}
        </div>
      )}

      {/* Main Prompt */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-black text-purple-950 mb-3">
          {drill.questionPrompt}
        </h3>
        <button
          onClick={handleHearTargetWord}
          className={`inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-extrabold px-6 py-3 rounded-2xl shadow-lg active:scale-95 transition-all cursor-pointer text-base ${
            isPlayingTarget ? 'ring-4 ring-purple-300 scale-105' : ''
          }`}
        >
          <Volume2 className={`w-6 h-6 ${isPlayingTarget ? 'animate-bounce' : 'animate-pulse'}`} />
          <span>{isPlayingTarget ? 'Đang đọc mẫu...' : 'Nghe Mẫu Âm Cần Tìm'}</span>
        </button>
      </div>

      {/* Option Cards (Position randomized) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {options.map((word) => {
          const isTarget = word === drill.targetWord;
          const isSelected = selectedWord === word;

          return (
            <div
              key={word}
              onClick={() => handleSelectOption(word)}
              className={`p-5 rounded-3xl border-4 transition-all duration-200 flex flex-col items-center justify-between cursor-pointer shadow-xl transform active:scale-95 ${
                isAnswered && isSelected && isTarget
                  ? 'bg-emerald-100 border-emerald-500 ring-6 ring-emerald-300 scale-102'
                  : isAnswered && isSelected && !isTarget
                  ? 'bg-amber-100 border-amber-400 scale-98'
                  : 'bg-white border-purple-200 hover:border-purple-400'
              }`}
            >
              <div className="w-full">
                {renderVisualCard(word)}
                <span className="text-3xl md:text-4xl font-black text-purple-950 uppercase tracking-wide block mb-2">
                  {word}
                </span>
              </div>

              {/* Direct individual listen button */}
              <div className="w-full flex items-center justify-between pt-2 border-t border-purple-100">
                <button
                  onClick={(e) => handleHearOption(e, word)}
                  className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                  title={`Nghe phát âm ${word}`}
                >
                  <Volume2 className="w-4 h-4 text-purple-700" />
                  <span>Nghe thử thẻ này</span>
                </button>

                {isAnswered && isSelected && isTarget && (
                  <span className="text-sm font-black text-emerald-700 flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Chính xác!</span>
                  </span>
                )}

                {isAnswered && isSelected && !isTarget && (
                  <span className="text-xs font-bold text-amber-700">
                    Bé nghe lại nhé!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <div className="py-2">
          {isCorrect ? (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-100/90 border-2 border-emerald-400 rounded-2xl max-w-xl mx-auto text-emerald-950">
                <div className="font-black text-lg md:text-xl flex items-center justify-center space-x-2">
                  <Award className="w-6 h-6 text-emerald-600 animate-bounce" />
                  <span>Bé phân biệt âm siêu đỉnh! +2 ⭐</span>
                </div>
                <p className="text-xs md:text-sm font-bold mt-1 text-emerald-800">
                  {drill.hintVi}
                </p>
              </div>
              <KidButton variant="success" size="lg" onClick={handleNext}>
                <Sparkles className="w-5 h-5 mr-2" />
                <span>Chơi Thử Thách Tiếp Theo 🚀</span>
              </KidButton>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-base font-bold text-purple-900">
                Bé ấn nút "Nghe thử thẻ này" trên từng hình để cảm nhận luồng hơi gió khác nhau nhé!
              </p>
              <KidButton variant="secondary" size="lg" onClick={handleHearTargetWord}>
                🔊 Nghe Lại Mẫu Âm Mục Tiêu
              </KidButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
