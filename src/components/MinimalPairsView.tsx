import React, { useState } from 'react';
import { MINIMAL_PAIRS_DRILLS } from '../data/minimalPairs';
import { MinimalPairDrill } from './MinimalPairDrill';
import { Headphones, ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';
import { audioService } from '../services/audioService';

interface MinimalPairsViewProps {
  onAddStars: (amount: number) => void;
}

export const MinimalPairsView: React.FC<MinimalPairsViewProps> = ({ onAddStars }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentDrill = MINIMAL_PAIRS_DRILLS[currentIndex];

  const handleNext = () => {
    audioService.playPopSound(500);
    setCurrentIndex((prev) => (prev + 1) % MINIMAL_PAIRS_DRILLS.length);
  };

  const handlePrev = () => {
    audioService.playPopSound(450);
    setCurrentIndex((prev) => (prev - 1 + MINIMAL_PAIRS_DRILLS.length) % MINIMAL_PAIRS_DRILLS.length);
  };

  const handleSuccess = () => {
    onAddStars(2);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-purple-200/80 px-4 py-1.5 rounded-full border border-purple-300 text-purple-950 font-black text-sm mb-2">
          <Headphones className="w-5 h-5 text-purple-700" />
          <span>Trò Chơi Lắng Nghe Phân Biệt Âm (Listening Games)</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight">
          Tai Tinh Mắt Sáng 🎧
        </h2>
        <p className="text-base font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          Trò chơi phân biệt âm thanh tinh tế (/p/ & /b/, /s/ & /sh/) — Giúp não bộ nhận diện âm chuẩn trước khi học nói!
        </p>
      </div>

      {/* Drill Carousel Controls */}
      <div className="flex items-center justify-between max-w-xl mx-auto mb-4">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-1 text-purple-800 hover:text-purple-950 bg-white/90 px-3 py-1.5 rounded-xl border border-purple-200 font-bold text-sm shadow-xs active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Bài Trước</span>
        </button>

        <span className="text-xs font-black text-purple-900 bg-purple-200 px-3 py-1 rounded-full">
          Bài {currentIndex + 1} / {MINIMAL_PAIRS_DRILLS.length}
        </span>

        <button
          onClick={handleNext}
          className="flex items-center space-x-1 text-purple-800 hover:text-purple-950 bg-white/90 px-3 py-1.5 rounded-xl border border-purple-200 font-bold text-sm shadow-xs active:scale-95"
        >
          <span>Bài Kế Tiếp</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Drill Component */}
      <MinimalPairDrill drill={currentDrill} onSuccess={handleSuccess} />

      {/* Skip button for gentle no-pressure flow */}
      <div className="text-center mt-4">
        <button
          onClick={handleNext}
          className="inline-flex items-center space-x-1 text-xs font-bold text-purple-700 hover:text-purple-900 bg-purple-100/60 hover:bg-purple-200/80 px-4 py-1.5 rounded-full border border-purple-200"
        >
          <SkipForward className="w-3.5 h-3.5" />
          <span>Bỏ qua bài này và thử bài khác</span>
        </button>
      </div>

      {/* Pedagogical Note for parents */}
      <div className="mt-6 max-w-xl mx-auto bg-amber-100/80 rounded-2xl p-4 border border-amber-200 text-center">
        <p className="text-xs font-bold text-amber-900 leading-relaxed">
          💡 <span className="font-black">Lưu ý sư phạm:</span> Đây là trò chơi rèn luyện sự nhạy bén của đôi tai trẻ, không dùng làm bài kiểm tra hay chẩn đoán ngôn ngữ. Trẻ 3 tuổi có thể chỉ nghe mà không cần chọn đúng ngay lập tức.
        </p>
      </div>
    </div>
  );
};
