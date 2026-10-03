import React, { useState } from 'react';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { PhonicsGroup, PhonemeInfo } from '../types/phonics';
import { Lock, Star, Sparkles, Compass, Filter } from 'lucide-react';
import { audioService } from '../services/audioService';

interface PhonicsIslandMapProps {
  unlockedGroups: number[];
  onSelectPhoneme: (phoneme: PhonemeInfo) => void;
}

export const PhonicsIslandMap: React.FC<PhonicsIslandMapProps> = ({
  unlockedGroups,
  onSelectPhoneme,
}) => {
  const [selectedStage, setSelectedStage] = useState<number | 'all'>('all');

  const filteredGroups = selectedStage === 'all'
    ? PHONICS_GROUPS
    : PHONICS_GROUPS.filter(g => g.stage === selectedStage);

  const handlePhonemeClick = (e: React.MouseEvent, phonemeId: string, isUnlocked: boolean) => {
    e.stopPropagation();
    if (isUnlocked) {
      const phInfo = PHONEMES_DATA[phonemeId];
      if (phInfo) {
        audioService.playPopSound(540);
        onSelectPhoneme(phInfo);
      }
    } else {
      audioService.playGentleTryAgain();
    }
  };

  const handleIslandClick = (group: PhonicsGroup, isUnlocked: boolean) => {
    if (isUnlocked) {
      const firstPhoneme = PHONEMES_DATA[group.phonemes[0]];
      if (firstPhoneme) {
        audioService.playPopSound(520);
        onSelectPhoneme(firstPhoneme);
      }
    } else {
      audioService.playGentleTryAgain();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-3">
      {/* Title Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-amber-200/80 px-4 py-1.5 rounded-full border border-amber-300 text-amber-950 font-black text-xs md:text-sm mb-2 shadow-xs">
          <Compass className="w-4 h-4 text-amber-700 animate-spin" />
          <span>Lộ Trình Toàn Diện 42 Âm Vị • Mầm Non Đến Tiểu Học Lớp 1-2</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-amber-950 tracking-tight">
          Bản Đồ Thám Hiểm 7 Quần Đảo Phonics 🏝️
        </h2>
        <p className="text-xs md:text-sm font-bold text-amber-800 mt-1 max-w-2xl mx-auto">
          Phương pháp Synthetic Phonics chuẩn Anh/Mỹ: Học từ âm đơn giản đến vần phức, trang bị phản xạ đọc lưu loát, không lo mất gốc!
        </p>

        {/* 4 Developmental Stages Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 bg-white/80 p-2 rounded-2xl border-2 border-amber-200 shadow-sm max-w-3xl mx-auto">
          <span className="text-xs font-black text-amber-900 flex items-center space-x-1 px-2">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span>Độ tuổi:</span>
          </span>

          <button
            onClick={() => setSelectedStage('all')}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 'all'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Tất Cả 7 Đảo (42 Âm)
          </button>

          <button
            onClick={() => setSelectedStage(1)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 1
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 1: 3–4 Tuổi (Mầm non bé)
          </button>

          <button
            onClick={() => setSelectedStage(2)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 2
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 2: 4–5 Tuổi (Mầm non lớn)
          </button>

          <button
            onClick={() => setSelectedStage(3)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 3
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 3: 5–6 Tuổi (Tiền tiểu học)
          </button>

          <button
            onClick={() => setSelectedStage(4)}
            className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
              selectedStage === 4
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 4: 6–8 Tuổi (Tiểu học Lớp 1-2)
          </button>
        </div>
      </div>

      {/* Islands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredGroups.map((group) => {
          const isUnlocked = unlockedGroups.includes(group.groupNumber);
          return (
            <div
              key={group.groupNumber}
              onClick={() => handleIslandClick(group, isUnlocked)}
              className={`relative rounded-3xl p-5 border-6 transition-all duration-300 transform active:scale-95 cursor-pointer shadow-xl flex flex-col justify-between ${
                isUnlocked
                  ? `bg-gradient-to-br ${group.themeColor} border-white text-white hover:scale-102 hover:shadow-2xl`
                  : 'bg-gray-200 border-gray-300 text-gray-500 opacity-75'
              }`}
            >
              {/* Badge Island Number & Stage */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-1.5">
                  <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    isUnlocked ? 'bg-black/20 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    Đảo {group.groupNumber}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isUnlocked ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {group.ageBand}
                  </span>
                </div>

                {isUnlocked ? (
                  <div className="flex items-center space-x-1 bg-yellow-300/40 px-2 py-0.5 rounded-full text-yellow-100">
                    <Star className="w-3.5 h-3.5 fill-yellow-300 text-yellow-300" />
                    <span className="text-[10px] font-black">Mở khóa</span>
                  </div>
                ) : (
                  <div className="p-1 bg-gray-300 rounded-full text-gray-600">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              {/* Emoji & Island Name */}
              <div className="text-center my-2">
                <span className="text-5xl md:text-6xl block mb-1 filter drop-shadow hover:scale-110 transition-transform">
                  {group.islandEmoji}
                </span>
                <h3 className="text-xl font-black leading-tight">{group.name}</h3>
                <p className={`text-[11px] font-bold mt-0.5 ${isUnlocked ? 'text-white/90' : 'text-gray-500'}`}>
                  {group.islandTheme}
                </p>
              </div>

              {/* Phonemes in Island (Clickable buttons per sound!) */}
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="text-[10px] font-extrabold uppercase text-center mb-1.5 opacity-90">
                  Chạm vào từng âm để học:
                </div>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {group.phonemes.map((phId) => {
                    const ph = PHONEMES_DATA[phId];
                    const label = ph ? ph.grapheme : phId;
                    return (
                      <button
                        key={phId}
                        onClick={(e) => handlePhonemeClick(e, phId, isUnlocked)}
                        className={`text-xs font-black px-2.5 py-1 rounded-xl shadow-xs transition-transform transform active:scale-90 cursor-pointer ${
                          isUnlocked
                            ? 'bg-white text-amber-950 hover:bg-amber-100 ring-2 ring-white/60'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        title={ph ? `Học âm /${ph.id}/` : phId}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Floating Sparkle for Unlocked */}
              {isUnlocked && (
                <div className="absolute top-2 right-2 text-yellow-200 animate-spin">
                  <Sparkles className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
