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
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden">
      {/* Sleek Single-Line Header Bar */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <div className="flex items-center space-x-2 bg-purple-200/90 px-3.5 py-1.5 rounded-full border border-purple-300 text-purple-950 font-black text-xs md:text-sm shadow-xs">
          <Headphones className="w-4 h-4 text-purple-700" />
          <span>Tai Tinh Mắt Sáng • Phân Biệt Âm (Minimal Pairs)</span>
        </div>

        {/* Drill Carousel Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 bg-white/95 px-2 py-1 rounded-2xl border border-purple-200 shadow-xs">
          <button
            onClick={handlePrev}
            className="flex items-center space-x-1 text-purple-800 hover:text-purple-950 bg-purple-100 hover:bg-purple-200 px-2.5 py-1 rounded-xl font-bold text-xs cursor-pointer active:scale-95 transition-transform"
            title="Bài trước"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bài Trước</span>
          </button>

          <span className="text-xs font-black text-purple-900 bg-purple-200/80 px-2.5 py-0.5 rounded-full">
            {currentIndex + 1} / {MINIMAL_PAIRS_DRILLS.length}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center space-x-1 text-purple-800 hover:text-purple-950 bg-purple-100 hover:bg-purple-200 px-2.5 py-1 rounded-xl font-bold text-xs cursor-pointer active:scale-95 transition-transform"
            title="Bài tiếp theo"
          >
            <span className="hidden sm:inline">Bài Kế</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Interactive Drill Component */}
      <MinimalPairDrill 
        drill={currentDrill} 
        onSuccess={handleSuccess} 
        onNextDrill={handleNext} 
      />

      {/* Subtle Pedagogical Footer */}
      <div className="text-center py-0.5 shrink-0">
        <p className="text-[11px] font-bold text-purple-900/80">
          💡 Rèn luyện độ nhạy đôi tai để nhận diện âm chuẩn trước khi học nói — Không áp lực điểm số cho trẻ.
        </p>
      </div>
    </div>
  );
};
