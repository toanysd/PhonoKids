import React, { useState } from 'react';
import { MINIMAL_PAIRS_DRILLS } from '../data/minimalPairs';
import { MinimalPairDrill } from './MinimalPairDrill';
import { Sparkles, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { KidButton } from './KidButton';
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
          <Sparkles className="w-5 h-5 text-purple-700" />
          <span>Phòng Tránh Lỗi Phát Âm • Cặp Âm Tối Thiểu (Minimal Pairs)</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight">
          Tai Tinh Mắt Sáng 🎧
        </h2>
        <p className="text-base font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          Lắng nghe sự khác biệt vi mô giữa các âm dễ nhầm lẫn như /p/ & /b/, /s/ & /sh/ để phát âm chuẩn ngay từ nhỏ!
        </p>
      </div>

      {/* Drill Carousel Controls */}
      <div className="flex items-center justify-between max-w-xl mx-auto mb-4">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-1 text-purple-800 hover:text-purple-950 bg-white/90 px-3 py-1.5 rounded-xl border border-purple-200 font-bold text-sm shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Bài Trước</span>
        </button>

        <span className="text-xs font-black text-purple-900 bg-purple-200 px-3 py-1 rounded-full">
          Bài {currentIndex + 1} / {MINIMAL_PAIRS_DRILLS.length}
        </span>

        <button
          onClick={handleNext}
          className="flex items-center space-x-1 text-purple-800 hover:text-purple-950 bg-white/90 px-3 py-1.5 rounded-xl border border-purple-200 font-bold text-sm shadow-xs"
        >
          <span>Bài Sau</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Drill Component */}
      <MinimalPairDrill drill={currentDrill} onSuccess={handleSuccess} />

      {/* Pedagogical Note for parents */}
      <div className="mt-8 max-w-xl mx-auto bg-amber-100/80 rounded-2xl p-4 border border-amber-200 text-center">
        <p className="text-xs font-bold text-amber-900 leading-relaxed">
          💡 <span className="font-black">Lợi ích sư phạm:</span> Trẻ 3-5 tuổi học tiếng Anh thường mắc lỗi nuốt âm cuối hoặc nhầm lẫn phụ âm hữu thanh/vô thanh. Bài tập này rèn luyện nhận thức âm vị (Phonemic Awareness) trước khi não bộ hình thành thói quen phát âm sai khó sửa.
        </p>
      </div>
    </div>
  );
};
