import React, { useState } from 'react';
import { DECODABLE_STORIES } from '../data/stories';
import { DecodableStory } from '../types/story';
import { BookOpen, Sparkles, CheckCircle2, Filter } from 'lucide-react';
import { audioService } from '../services/audioService';
import { getStoryCoverVisual } from '../services/imageService';

interface StoryLibraryProps {
  completedStories: string[];
  onSelectStory: (story: DecodableStory) => void;
  stories?: DecodableStory[];
  language?: 'en' | 'ja';
}

export const StoryLibrary: React.FC<StoryLibraryProps> = ({
  completedStories,
  onSelectStory,
  stories = DECODABLE_STORIES,
  language = 'en'
}) => {
  const [selectedStage, setSelectedStage] = useState<number | 'all'>('all');

  const filteredStories = selectedStage === 'all'
    ? stories
    : stories.filter(s => s.stage === selectedStage);

  const handleStoryClick = (story: DecodableStory) => {
    audioService.playPopSound(500);
    onSelectStory(story);
  };

  const isJa = language === 'ja';

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="text-center mb-4">
        <div className="inline-flex items-center space-x-1.5 bg-amber-200/90 px-3.5 py-1 rounded-full border border-amber-300 text-amber-950 font-black text-xs mb-1.5 shadow-xs">
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>
            {isJa
              ? 'Thư Viện Tranh Truyện Ehon Tiếng Nhật (絵本ライブラリー)'
              : 'Thư Viện Tranh Truyện Ehon Đọc Giải Mã (Decodable Picture Books)'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-amber-950 tracking-tight">
          {isJa ? 'Cùng Khám Phá Tranh Truyện Ehon Tiếng Nhật! 📚🌸' : 'Cùng Khám Phá Tranh Truyện Ehon! 📚'}
        </h2>
        <p className="text-xs md:text-sm font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          {isJa
            ? 'Tranh minh họa ấm áp phong cách Ehon Nhật Bản, câu từ ngắn gọn thuần Hiragana kèm dịch nghĩa giúp bé yêu thích tiếng Nhật tự nhiên.'
            : 'Tranh vẽ cắt dán nghệ thuật rực rỡ, tích hợp đọc giải mã từng từ theo 4 cấp độ từ mầm non đến tiểu học.'}
        </p>

        {/* Stage Filter */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 bg-white/95 p-1.5 rounded-xl border border-amber-200 shadow-xs max-w-2xl mx-auto">
          <span className="text-xs font-black text-amber-900 flex items-center space-x-1 px-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span>Cấp độ:</span>
          </span>

          <button
            onClick={() => setSelectedStage('all')}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 'all'
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Tất Cả
          </button>

          <button
            onClick={() => setSelectedStage(1)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 1
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 1 (3–4t)
          </button>

          <button
            onClick={() => setSelectedStage(2)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 2
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 2 (4–5t)
          </button>

          <button
            onClick={() => setSelectedStage(3)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 3
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 3 (5–6t Tiền tiểu học)
          </button>

          <button
            onClick={() => setSelectedStage(4)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 4
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 4 (6–8t Lớp 1-2)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((story) => {
          const isCompleted = completedStories.includes(story.id);
          const visual = getStoryCoverVisual(story.id, story);

          return (
            <div
              key={story.id}
              onClick={() => handleStoryClick(story)}
              className="bg-white rounded-3xl p-5 border-4 border-amber-300 hover:border-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Level badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      Level {story.level}
                    </span>
                    <span className="text-[11px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                      {story.ageBand}
                    </span>
                  </div>

                  {isCompleted && (
                    <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Đã đọc</span>
                    </span>
                  )}
                </div>

                {/* Big Ehon Painted Artwork Cover */}
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-200/90 shadow-md mb-4 bg-amber-50">
                  <img
                    src={visual.url}
                    alt={visual.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/ehon/archipelago.jpg';
                    }}
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-1 rounded-full flex items-center space-x-1 shadow">
                    <span>🎨 Tranh Ehon</span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-lg border border-amber-200">
                    {visual.alt}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-amber-950 text-center mb-1 group-hover:text-amber-700 transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs md:text-sm font-bold text-amber-800 text-center mb-4 leading-relaxed line-clamp-2">
                  {story.summaryVi}
                </p>
              </div>

              {/* Target Phonics badges */}
              <div className="pt-3 border-t-2 border-amber-100">
                <div className="text-[10px] font-black text-amber-700 uppercase mb-2">
                  Âm vị rèn luyện trong bài:
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {story.targetPhonics.map((ph) => (
                    <span
                      key={ph}
                      className="bg-amber-100 text-amber-950 font-black text-xs px-2.5 py-1 rounded-xl border border-amber-200"
                    >
                      /{ph}/
                    </span>
                  ))}
                </div>

                <button className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black text-base rounded-2xl shadow-md border-b-4 border-amber-500 flex items-center justify-center space-x-2 active:translate-y-0.5 transition-all cursor-pointer">
                  <Sparkles className="w-5 h-5 text-amber-800" />
                  <span>Mở Sách Ra Đọc</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
