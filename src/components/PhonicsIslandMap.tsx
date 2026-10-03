import React from 'react';
import { PHONICS_GROUPS } from '../data/phonicsGroups';
import { PhonicsGroup } from '../types/phonics';
import { Lock, Star, Sparkles, Compass } from 'lucide-react';
import { audioService } from '../services/audioService';

interface PhonicsIslandMapProps {
  unlockedGroups: number[];
  onSelectGroup: (group: PhonicsGroup) => void;
}

export const PhonicsIslandMap: React.FC<PhonicsIslandMapProps> = ({
  unlockedGroups,
  onSelectGroup,
}) => {
  const handleIslandClick = (group: PhonicsGroup, isUnlocked: boolean) => {
    if (isUnlocked) {
      audioService.playPopSound(520);
      onSelectGroup(group);
    } else {
      audioService.playGentleTryAgain();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      {/* Title Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-amber-200/80 px-4 py-1.5 rounded-full border border-amber-300 text-amber-950 font-black text-sm mb-2 shadow-xs">
          <Compass className="w-5 h-5 text-amber-700 animate-spin" />
          <span>Bản Đồ Thám Hiểm 7 Quần Đảo Âm Thanh</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight">
          Chọn Đảo Để Khám Phá! 🏝️
        </h2>
        <p className="text-base font-bold text-amber-800 mt-1">
          Học theo chuẩn 7 nhóm âm Jolly Phonics — Ghép vần siêu tốc, không lo mất gốc
        </p>
      </div>

      {/* Islands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHONICS_GROUPS.map((group) => {
          const isUnlocked = unlockedGroups.includes(group.groupNumber);
          return (
            <div
              key={group.groupNumber}
              onClick={() => handleIslandClick(group, isUnlocked)}
              className={`relative rounded-3xl p-6 border-6 transition-all duration-300 transform active:scale-95 cursor-pointer shadow-xl ${
                isUnlocked
                  ? `bg-gradient-to-br ${group.themeColor} border-white text-white hover:scale-105 hover:shadow-2xl`
                  : 'bg-gray-200 border-gray-300 text-gray-500 opacity-75'
              }`}
            >
              {/* Badge Island Number */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                  isUnlocked ? 'bg-black/20 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  Đảo Số {group.groupNumber}
                </span>

                {isUnlocked ? (
                  <div className="flex items-center space-x-1 bg-yellow-300/40 px-2 py-0.5 rounded-full text-yellow-100">
                    <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    <span className="text-xs font-black">Mở khóa</span>
                  </div>
                ) : (
                  <div className="p-1 bg-gray-300 rounded-full text-gray-600">
                    <Lock className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Emoji & Island Name */}
              <div className="text-center my-3">
                <span className="text-6xl md:text-7xl block mb-2 filter drop-shadow">
                  {group.islandEmoji}
                </span>
                <h3 className="text-2xl font-black">{group.name}</h3>
                <p className={`text-xs font-bold mt-1 ${isUnlocked ? 'text-white/90' : 'text-gray-500'}`}>
                  {group.islandTheme}
                </p>
              </div>

              {/* Phonemes in Island */}
              <div className="mt-4 pt-3 border-t border-white/20">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {group.phonemes.map((ph) => (
                    <span
                      key={ph}
                      className={`text-xs font-black px-2.5 py-1 rounded-xl shadow-xs ${
                        isUnlocked
                          ? 'bg-white text-amber-950 font-mono'
                          : 'bg-gray-300 text-gray-500'
                      }`}
                    >
                      /{ph}/
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Sparkle for Unlocked */}
              {isUnlocked && (
                <div className="absolute top-2 right-2 text-yellow-200 animate-spin">
                  <Sparkles className="w-5 h-5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
