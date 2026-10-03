import React, { useState } from 'react';
import { DECODABLE_STORIES } from '../data/stories';
import { DecodableStory } from '../types/story';
import { BookOpen, Sparkles, CheckCircle2, Filter } from 'lucide-react';
import { audioService } from '../services/audioService';

interface StoryLibraryProps {
  completedStories: string[];
  onSelectStory: (story: DecodableStory) => void;
}

export const StoryLibrary: React.FC<StoryLibraryProps> = ({
  completedStories,
  onSelectStory,
}) => {
  const [selectedStage, setSelectedStage] = useState<number | 'all'>('all');

  const filteredStories = selectedStage === 'all'
    ? DECODABLE_STORIES
    : DECODABLE_STORIES.filter(s => s.stage === selectedStage);

  const handleStoryClick = (story: DecodableStory) => {
    audioService.playPopSound(500);
    onSelectStory(story);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-3">
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-amber-200/80 px-4 py-1.5 rounded-full border border-amber-300 text-amber-950 font-black text-xs md:text-sm mb-2">
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>Thư Viện Tranh Truyện Đọc Giải Mã (Decodable Readers)</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-amber-950 tracking-tight">
          Cùng Khám Phá Thư Viện Truyện! 📚
        </h2>
        <p className="text-xs md:text-sm font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          Truyện tranh tương tác đa tầng theo lộ trình 4 cấp độ: Từ từ vựng 3 chữ cái đơn giản (CVC) đến vần phức tiểu học!
        </p>

        {/* Stage Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 bg-white/80 p-2 rounded-2xl border-2 border-amber-200 shadow-xs max-w-3xl mx-auto">
          <span className="text-xs font-black text-amber-900 flex items-center space-x-1 px-2">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span>Cấp độ:</span>
          </span>

          <button
            onClick={() => setSelectedStage('all')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 'all'
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Tất Cả Cấp Độ
          </button>

          <button
            onClick={() => setSelectedStage(1)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 1
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 1 (3–4t)
          </button>

          <button
            onClick={() => setSelectedStage(2)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 2
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 2 (4–5t)
          </button>

          <button
            onClick={() => setSelectedStage(3)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 3
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 3 (5–6t Tiền tiểu học)
          </button>

          <button
            onClick={() => setSelectedStage(4)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 4
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 4 (6–8t Tiểu học Lớp 1-2)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => {
          const isCompleted = completedStories.includes(story.id);
          return (
            <div
              key={story.id}
              onClick={() => handleStoryClick(story)}
              className="bg-white rounded-3xl p-6 border-6 border-amber-300 hover:border-amber-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Level badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[11px] font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full uppercase tracking-wider">
                      Level {story.level}
                    </span>
                    <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
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

                {/* Big Cover Emoji */}
                <div className="text-center py-5">
                  <span className="text-7xl md:text-8xl block filter drop-shadow hover:scale-110 transition-transform">
                    {story.coverEmoji}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-amber-950 text-center mb-1">
                  {story.title}
                </h3>
                <p className="text-xs font-bold text-amber-800 text-center mb-4 leading-relaxed">
                  {story.summaryVi}
                </p>
              </div>

              {/* Target Phonics badges */}
              <div className="pt-3 border-t-2 border-amber-100">
                <div className="text-[10px] font-black text-amber-700 uppercase mb-1.5">
                  Âm vị rèn luyện trong bài:
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {story.targetPhonics.map((ph) => (
                    <span
                      key={ph}
                      className="bg-amber-100 text-amber-950 font-black text-xs px-2.5 py-0.5 rounded-xl border border-amber-200"
                    >
                      /{ph}/
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-2xl shadow-md border-b-4 border-amber-500 flex items-center justify-center space-x-2 active:translate-y-0.5">
                  <Sparkles className="w-4 h-4 text-amber-800" />
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
