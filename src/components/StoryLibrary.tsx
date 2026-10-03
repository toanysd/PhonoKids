import React from 'react';
import { DECODABLE_STORIES } from '../data/stories';
import { DecodableStory } from '../types/story';
import { BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { audioService } from '../services/audioService';

interface StoryLibraryProps {
  completedStories: string[];
  onSelectStory: (story: DecodableStory) => void;
}

export const StoryLibrary: React.FC<StoryLibraryProps> = ({
  completedStories,
  onSelectStory,
}) => {
  const handleStoryClick = (story: DecodableStory) => {
    audioService.playPopSound(500);
    onSelectStory(story);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-amber-200/80 px-4 py-1.5 rounded-full border border-amber-300 text-amber-950 font-black text-sm mb-2">
          <BookOpen className="w-5 h-5 text-amber-700" />
          <span>Thư Viện Tranh Truyện Đọc Giải Mã (Decodable Readers)</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight">
          Cùng Đọc Truyện Thôi Nào! 📚
        </h2>
        <p className="text-base font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          Truyện tranh tương tác chuẩn Raz-Kids & PalFish: Chạm chữ phát âm, chạm nhân vật chuyển động, karaoke theo nhịp!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DECODABLE_STORIES.map((story) => {
          const isCompleted = completedStories.includes(story.id);
          return (
            <div
              key={story.id}
              onClick={() => handleStoryClick(story)}
              className="bg-white rounded-3xl p-6 border-6 border-amber-300 hover:border-amber-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 active:scale-95 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Level badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black bg-amber-100 text-amber-900 px-3 py-1 rounded-full uppercase tracking-wider">
                    {story.levelName}
                  </span>
                  {isCompleted && (
                    <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Đã đọc</span>
                    </span>
                  )}
                </div>

                {/* Big Cover Emoji */}
                <div className="text-center py-6">
                  <span className="text-7xl md:text-8xl block filter drop-shadow hover:scale-110 transition-transform">
                    {story.coverEmoji}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-amber-950 text-center mb-2">
                  {story.title}
                </h3>
                <p className="text-xs font-bold text-amber-800 text-center mb-4">
                  {story.summaryVi}
                </p>
              </div>

              {/* Target Phonics badges */}
              <div className="pt-4 border-t-2 border-amber-100">
                <div className="text-[11px] font-black text-amber-700 uppercase mb-2">
                  Âm vị cốt lõi trong truyện:
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

                <button className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-2xl shadow-md border-b-4 border-amber-500 flex items-center justify-center space-x-2">
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
