import React, { useState } from 'react';
import { MinimalPairItem } from '../types/phonics';
import { audioService } from '../services/audioService';
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

  const handlePlayPrompt = () => {
    audioService.speakEnglish(drill.questionPrompt, 0.85);
  };

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

  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-50 rounded-3xl p-6 border-4 border-purple-300 shadow-xl max-w-xl mx-auto text-center">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black text-purple-900 bg-purple-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
          Phòng Lỗi Phát Âm • {drill.pairName}
        </span>
        <button
          onClick={() => setShowHint(!showHint)}
          className="p-1.5 bg-white text-purple-700 hover:text-purple-900 rounded-full shadow border border-purple-200"
          title="Xem bí quyết phụ huynh"
        >
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>

      {showHint && (
        <div className="mb-4 p-3 bg-purple-200/80 rounded-2xl text-xs font-bold text-purple-950 text-left border border-purple-300 animate-fadeIn">
          💡 <span className="font-black">Bí kíp cho bé:</span> {drill.hintVi}
        </div>
      )}

      {/* Main Prompt */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-black text-purple-950 mb-2">
          {drill.questionPrompt}
        </h3>
        <button
          onClick={handleHearTargetWord}
          className="inline-flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white font-extrabold px-5 py-2.5 rounded-2xl shadow-md active:scale-95 transition-transform"
        >
          <Volume2 className="w-5 h-5 animate-pulse" />
          <span>Nghe từ cần tìm</span>
        </button>
      </div>

      {/* Option Cards */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
        {/* Option 1: Target */}
        <button
          onClick={() => handleSelectOption(drill.targetWord)}
          className={`p-6 rounded-3xl border-4 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer shadow-lg transform active:scale-95 ${
            isAnswered && isCorrect
              ? 'bg-emerald-100 border-emerald-500 ring-4 ring-emerald-300 scale-105'
              : 'bg-white border-purple-200 hover:border-purple-400'
          }`}
        >
          <span className="text-6xl md:text-7xl mb-2">{drill.targetEmoji}</span>
          <span className="text-2xl font-black text-purple-950 uppercase">{drill.targetWord}</span>
          {isAnswered && isCorrect && (
            <span className="mt-2 text-xs font-bold text-emerald-700 flex items-center space-x-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Chính xác!</span>
            </span>
          )}
        </button>

        {/* Option 2: Distractor */}
        <button
          onClick={() => handleSelectOption(drill.distractorWord)}
          className={`p-6 rounded-3xl border-4 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer shadow-lg transform active:scale-95 ${
            isAnswered && selectedWord === drill.distractorWord
              ? 'bg-amber-100 border-amber-400 scale-95'
              : 'bg-white border-purple-200 hover:border-purple-400'
          }`}
        >
          <span className="text-6xl md:text-7xl mb-2">{drill.distractorEmoji}</span>
          <span className="text-2xl font-black text-purple-950 uppercase">{drill.distractorWord}</span>
          {isAnswered && selectedWord === drill.distractorWord && (
            <span className="mt-2 text-xs font-bold text-amber-700">
              Gần đúng rồi! Bé thử nghe lại nhé.
            </span>
          )}
        </button>
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <div className="py-2">
          {isCorrect ? (
            <div className="space-y-3">
              <div className="text-emerald-800 font-black text-lg flex items-center justify-center space-x-2">
                <Award className="w-6 h-6 text-emerald-600 animate-bounce" />
                <span>Tuyệt vời! Bé phân biệt âm chuẩn 100%! +2 ⭐</span>
              </div>
              <KidButton variant="success" size="md" onClick={handleNext}>
                Chơi Bài Tiếp Theo 🚀
              </KidButton>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-bold text-purple-900">
                Hãy nghe lại xem âm /p/ thổi hơi gió mát thế nào nhé!
              </p>
              <KidButton variant="secondary" size="md" onClick={handleHearTargetWord}>
                🔊 Nghe Lại Mẫu
              </KidButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
