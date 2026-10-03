import React, { useState } from 'react';
import { MinimalPairItem } from '../types/phonics';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { KidButton } from './KidButton';
import { Volume2, HelpCircle, CheckCircle2, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MinimalPairDrillProps {
  drill: MinimalPairItem;
  onSuccess?: () => void;
}

export const MinimalPairDrill: React.FC<MinimalPairDrillProps> = ({ drill, onSuccess }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleHearTargetWord = () => {
    audioService.speakEnglish(drill.targetWord, 0.85);
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
      <div className="relative w-full h-48 sm:h-60 rounded-2xl overflow-hidden mb-3 border-2 border-purple-200 shadow-md bg-purple-50 group">
        <img
          src={visual.url}
          alt={visual.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow">
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
          className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-extrabold px-6 py-3 rounded-2xl shadow-lg active:scale-95 transition-transform cursor-pointer text-base"
        >
          <Volume2 className="w-6 h-6 animate-pulse" />
          <span>Nghe Mẫu Âm Cần Tìm</span>
        </button>
      </div>

      {/* Option Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Option 1: Target */}
        <button
          onClick={() => handleSelectOption(drill.targetWord)}
          className={`p-5 rounded-3xl border-4 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer shadow-xl transform active:scale-95 ${
            isAnswered && isCorrect
              ? 'bg-emerald-100 border-emerald-500 ring-6 ring-emerald-300 scale-102'
              : 'bg-white border-purple-200 hover:border-purple-400'
          }`}
        >
          {renderVisualCard(drill.targetWord)}
          <span className="text-3xl md:text-4xl font-black text-purple-950 uppercase tracking-wide">
            {drill.targetWord}
          </span>
          {isAnswered && isCorrect && (
            <span className="mt-2 text-sm font-black text-emerald-700 flex items-center space-x-1.5">
              <CheckCircle2 className="w-5 h-5" />
              <span>Chính xác tuyệt đối!</span>
            </span>
          )}
        </button>

        {/* Option 2: Distractor */}
        <button
          onClick={() => handleSelectOption(drill.distractorWord)}
          className={`p-5 rounded-3xl border-4 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer shadow-xl transform active:scale-95 ${
            isAnswered && selectedWord === drill.distractorWord
              ? 'bg-amber-100 border-amber-400 scale-98'
              : 'bg-white border-purple-200 hover:border-purple-400'
          }`}
        >
          {renderVisualCard(drill.distractorWord)}
          <span className="text-3xl md:text-4xl font-black text-purple-950 uppercase tracking-wide">
            {drill.distractorWord}
          </span>
          {isAnswered && selectedWord === drill.distractorWord && (
            <span className="mt-2 text-sm font-bold text-amber-800">
              Gần đúng rồi! Bé thử nghe lại xem âm bật khác nhau thế nào nhé.
            </span>
          )}
        </button>
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <div className="py-2">
          {isCorrect ? (
            <div className="space-y-4">
              <div className="text-emerald-800 font-black text-xl flex items-center justify-center space-x-2">
                <Award className="w-7 h-7 text-emerald-600 animate-bounce" />
                <span>Tuyệt vời! Bé phân biệt âm chuẩn 100%! +2 ⭐</span>
              </div>
              <KidButton variant="success" size="lg" onClick={handleNext}>
                Chơi Thử Thách Tiếp Theo 🚀
              </KidButton>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-base font-bold text-purple-900">
                Hãy nghe lại xem âm phân biệt luồng gió khác nhau ra sao nhé!
              </p>
              <KidButton variant="secondary" size="lg" onClick={handleHearTargetWord}>
                🔊 Nghe Lại Mẫu Âm
              </KidButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
