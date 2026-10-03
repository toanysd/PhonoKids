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
    <div className="max-w-6xl mx-auto px-4 py-4">
      {/* Title */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-sky-200/80 px-4 py-1.5 rounded-full border border-sky-300 text-sky-950 font-black text-sm mb-2">
          <Wand2 className="w-5 h-5 text-sky-700" />
          <span>Ghép Vần Âm Thanh Tự Nhiên (Synthetic Phonics Blending)</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight">
          Cỗ Máy Ghép Chữ Ma Thuật 🔮
        </h2>
        <p className="text-base font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          Hợp nhất từng bong bóng âm thanh đơn lẻ thành một từ hoàn chỉnh có nghĩa!
        </p>
      </div>

      {/* Word Switcher */}
      <div className="flex items-center justify-between max-w-xl mx-auto mb-4">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-1 text-sky-800 hover:text-sky-950 bg-white/90 px-3 py-1.5 rounded-xl border border-sky-200 font-bold text-sm shadow-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Từ Trước</span>
        </button>

        <span className="text-xs font-black text-sky-900 bg-sky-200 px-3 py-1 rounded-full">
          Từ {currentIndex + 1} / {SAMPLE_BLENDS.length}
        </span>

        <button
          onClick={handleNext}
          className="flex items-center space-x-1 text-sky-800 hover:text-sky-950 bg-white/90 px-3 py-1.5 rounded-xl border border-sky-200 font-bold text-sm shadow-xs"
        >
          <span>Từ Sau</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bubble Blender Component */}
      <BubbleBlender
        activity={currentActivity}
        onCompleted={() => {
          onAddStars(2);
        }}
      />
    </div>
  );
};
