import React, { useState } from 'react';
import { BubbleBlender } from './BubbleBlender';
import { BlendActivity } from '../types/phonics';
import { Wand2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { audioService } from '../services/audioService';

const SAMPLE_BLENDS: BlendActivity[] = [
  { word: 'sat', emoji: '🐱', meaningVi: 'đã ngồi', phonemes: ['s', 'a', 't'] },
  { word: 'pat', emoji: '👋', meaningVi: 'vỗ nhẹ', phonemes: ['p', 'a', 't'] },
  { word: 'tap', emoji: '🚰', meaningVi: 'vòi nước / gõ nhẹ', phonemes: ['t', 'a', 'p'] },
  { word: 'pin', emoji: '🧷', meaningVi: 'cái ghim', phonemes: ['p', 'i', 'n'] },
  { word: 'tin', emoji: '🥫', meaningVi: 'hộp thiếc', phonemes: ['t', 'i', 'n'] },
  { word: 'cat', emoji: '🐱', meaningVi: 'con mèo', phonemes: ['c', 'a', 't'] },
  { word: 'dog', emoji: '🐶', meaningVi: 'chú chó', phonemes: ['d', 'o', 'g'] },
  { word: 'sun', emoji: '☀️', meaningVi: 'mặt trời', phonemes: ['s', 'u', 'n'] },
];

interface BlendingPlaygroundProps {
  onAddStars: (amount: number) => void;
}

export const BlendingPlayground: React.FC<BlendingPlaygroundProps> = ({ onAddStars }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentActivity = SAMPLE_BLENDS[currentIndex];

  const handleNext = () => {
    audioService.playPopSound(500);
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_BLENDS.length);
  };

  const handlePrev = () => {
    audioService.playPopSound(450);
    setCurrentIndex((prev) => (prev - 1 + SAMPLE_BLENDS.length) % SAMPLE_BLENDS.length);
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden">
      {/* Sleek Single-Line Header Bar */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <div className="flex items-center space-x-2 bg-sky-200/90 px-3.5 py-1.5 rounded-full border border-sky-300 text-sky-950 font-black text-xs md:text-sm shadow-xs">
          <Wand2 className="w-4 h-4 text-sky-700" />
          <span>Ghép Vần Phonics (C-V-C Blending)</span>
        </div>

        {/* Word Switcher & Pagination Controls */}
        <div className="flex items-center space-x-2 bg-white/95 px-2.5 py-1 rounded-2xl border-2 border-sky-200 shadow-xs">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 flex items-center justify-center font-black active:scale-90 transition-transform cursor-pointer border border-sky-300"
            title="Từ trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-black text-sky-900 bg-sky-200/90 px-3 py-1 rounded-full">
            Từ {currentIndex + 1} / {SAMPLE_BLENDS.length}
          </span>

          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 flex items-center justify-center font-black active:scale-90 transition-transform cursor-pointer border border-sky-300"
            title="Từ tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bubble Blender Component */}
      <BubbleBlender
        activity={currentActivity}
        onNextWord={handleNext}
        onPrevWord={handlePrev}
        onCompleted={() => {
          onAddStars(2);
        }}
      />
    </div>
  );
};
