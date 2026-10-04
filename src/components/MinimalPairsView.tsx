import React, { useState } from 'react';
import { MINIMAL_PAIRS_DRILLS } from '../data/minimalPairs';
import { MinimalPairDrill } from './MinimalPairDrill';
import { Headphones, ChevronLeft, ChevronRight, SkipForward } from 'lucide-react';
import { audioService } from '../services/audioService';

interface MinimalPairsViewProps {
  onAddStars: (amount: number) => void;
  drills?: typeof MINIMAL_PAIRS_DRILLS;
  language?: 'en' | 'ja';
}

export const MinimalPairsView: React.FC<MinimalPairsViewProps> = ({
  onAddStars,
  drills = MINIMAL_PAIRS_DRILLS,
  language = 'en'
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentDrill = drills[currentIndex] || drills[0];

  const handleNext = () => {
    audioService.playPopSound(500);
    setCurrentIndex((prev) => (prev + 1) % drills.length);
  };

  const handlePrev = () => {
    audioService.playPopSound(450);
    setCurrentIndex((prev) => (prev - 1 + drills.length) % drills.length);
  };

  const handleSuccess = () => {
    onAddStars(2);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden">
      {/* Sleek Single-Line Header Bar */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <div className="flex items-center space-x-2 bg-purple-200/90 px-3.5 py-1.5 rounded-full border border-purple-300 text-purple-950 font-black text-xs md:text-sm shadow-xs">
          <Headphones className="w-4 h-4 text-purple-700" />
          <span>
            {language === 'ja'
              ? 'Tai Tinh Mắt Sáng • Luyện Âm Chuẩn Tiếng Nhật (はつおん れんしゅう)'
              : 'Tai Tinh Mắt Sáng • Phân Biệt Âm (Minimal Pairs)'}
          </span>
        </div>

        {/* Drill Carousel Controls */}
        <div className="flex items-center space-x-2 bg-white/95 px-2.5 py-1 rounded-2xl border-2 border-purple-200 shadow-xs">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 flex items-center justify-center font-black active:scale-90 transition-transform cursor-pointer border border-purple-300"
            title="Bài trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-black text-purple-900 bg-purple-200/90 px-3 py-1 rounded-full">
            {currentIndex + 1} / {drills.length}
          </span>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 flex items-center justify-center font-black active:scale-90 transition-transform cursor-pointer border border-purple-300"
            title="Bài tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
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
