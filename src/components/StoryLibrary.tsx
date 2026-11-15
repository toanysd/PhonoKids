import React, { useRef, useState } from 'react';
import { DECODABLE_STORIES } from '../data/stories';
import { DecodableStory } from '../types/story';
import { BookOpen, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { audioService } from '../services/audioService';
import { getStoryCoverVisual } from '../services/imageService';

interface StoryLibraryProps {
  completedStories: string[];
  onSelectStory: (story: DecodableStory) => void;
  stories?: DecodableStory[];
  language?: 'en' | 'ja';
}

const STAGE_FILTERS: { id: number | 'all'; label: string }[] = [
  { id: 'all', label: 'Tất Cả' },
  { id: 1, label: '3–4t' },
  { id: 2, label: '4–5t' },
  { id: 3, label: '5–6t' },
  { id: 4, label: '6–8t' },
];

export const StoryLibrary: React.FC<StoryLibraryProps> = ({
  completedStories,
  onSelectStory,
  stories = DECODABLE_STORIES,
}) => {
  const [selectedStage, setSelectedStage] = useState<number | 'all'>('all');
  const [storyIdx, setStoryIdx] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  const filteredStories =
    selectedStage === 'all' ? stories : stories.filter((s) => s.stage === selectedStage);
  const safeList = filteredStories.length > 0 ? filteredStories : stories;
  const safeIdx = Math.min(storyIdx, safeList.length - 1);
  const currentStory = safeList[safeIdx] || stories[0];
  const isCompleted = completedStories.includes(currentStory.id);
  const visual = getStoryCoverVisual(currentStory.id, currentStory);

  const stepStory = (delta: number) => {
    audioService.playPopSound(delta > 0 ? 520 : 460);
    setStoryIdx((prev) => (prev + delta + safeList.length) % safeList.length);
  };

  return (
    <div className="w-full h-full max-w-4xl mx-auto px-2.5 sm:px-5 py-2 flex flex-col gap-2 overflow-hidden">
      {/* 1. Compact Stage Filter Pills + Pager Count */}
      <div className="shrink-0 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 flex-1 min-w-0">
          {STAGE_FILTERS.map((f) => {
            const active = selectedStage === f.id;
            return (
              <button
                key={String(f.id)}
                type="button"
                onClick={() => {
                  audioService.playPopSound(500);
                  setSelectedStage(f.id);
                  setStoryIdx(0);
                }}
                className={`min-h-[40px] px-3 py-1 rounded-2xl font-black text-xs whitespace-nowrap shrink-0 border-2 cursor-pointer transition-all ${
                  active
                    ? 'bg-slate-900 text-amber-300 border-amber-400 shadow-sm'
                    : 'bg-white text-amber-950 border-amber-200'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <span className="shrink-0 font-mono text-xs font-black bg-amber-200 text-amber-950 px-3 py-1.5 rounded-2xl border border-amber-300 tabular-nums">
          {safeIdx + 1}/{safeList.length}
        </span>
      </div>

      {/* 2. Full-Screen Paged Storybook Spotlight Card */}
      <div
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartXRef.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartXRef.current;
          touchStartXRef.current = null;
          if (Math.abs(dx) > 40) stepStory(dx < 0 ? 1 : -1);
        }}
        className="flex-1 min-h-0 bg-white rounded-3xl border-4 border-amber-300 shadow-xl p-2.5 sm:p-5 flex flex-col justify-between gap-2.5 overflow-hidden"
      >
        {/* Badges Top */}
        <div className="shrink-0 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-black bg-amber-100 text-amber-950 px-3 py-1 rounded-full">
              Level {currentStory.level}
            </span>
            <span className="text-xs font-bold bg-indigo-50 text-indigo-800 px-2.5 py-1 rounded-full">
              {currentStory.ageBand}
            </span>
          </div>
          {isCompleted && (
            <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Đã đọc</span>
            </span>
          )}
        </div>

        {/* Center Cover Art + Title + Phonics Chips with Side Arrows */}
        <div className="flex-1 min-h-0 flex items-center justify-between gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => stepStory(-1)}
            aria-label="Truyện trước"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-950 flex items-center justify-center shrink-0 cursor-pointer active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={() => {
              audioService.playPopSound(520);
              onSelectStory(currentStory);
            }}
            className="flex-1 min-w-0 h-full flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer"
          >
            <div className="relative w-full max-w-md flex-1 min-h-[140px] rounded-2xl overflow-hidden border-2 border-amber-200 bg-amber-50 shadow-md">
              <img
                src={visual.url}
                alt={visual.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/ehon/archipelago.jpg';
                }}
              />
              <span className="absolute top-2 right-2 bg-black/60 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full">
                <BookOpen className="w-3 h-3 inline mr-1" />
                Ehon
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-3xl font-black text-amber-950 text-center leading-tight line-clamp-2">
              {currentStory.title}
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-1.5 shrink-0">
              {currentStory.targetPhonics.slice(0, 5).map((ph) => (
                <span
                  key={ph}
                  className="bg-amber-100 text-amber-950 font-black text-xs px-2.5 py-1 rounded-xl border border-amber-200"
                >
                  /{ph}/
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => stepStory(1)}
            aria-label="Truyện tiếp theo"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-950 flex items-center justify-center shrink-0 cursor-pointer active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Giant Read CTA */}
        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(520);
            onSelectStory(currentStory);
          }}
          className="w-full min-h-[54px] py-3 bg-amber-400 hover:bg-amber-300 text-amber-950 font-black text-base sm:text-lg rounded-2xl shadow-lg border-b-4 border-amber-500 flex items-center justify-center gap-2 active:translate-y-0.5 cursor-pointer shrink-0"
        >
          <Sparkles className="w-5 h-5 text-amber-800" />
          <span>MỞ SÁCH RA ĐỌC</span>
        </button>
      </div>
    </div>
  );
};
