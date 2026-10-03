import React, { useState } from 'react';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { PhonicsGroup, PhonemeInfo } from '../types/phonics';
import { Lock, Star, Sparkles, Compass, Filter, BookOpen } from 'lucide-react';
import { audioService } from '../services/audioService';
import { getIslandVisual } from '../services/imageService';
import { getVocabularyByGroup } from '../data/phonicsVocabulary';

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
    <div className="max-w-7xl mx-auto px-4 py-4">
      {/* Title Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center space-x-1.5 bg-amber-200/90 px-3.5 py-1 rounded-full border border-amber-300 text-amber-950 font-black text-xs mb-1.5 shadow-xs">
          <Compass className="w-4 h-4 text-amber-700 animate-spin" />
          <span>Lộ Trình Toàn Diện 42 Âm Vị • Mầm Non Đến Tiểu Học Lớp 1-2</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-amber-950 tracking-tight">
          Bản Đồ Thám Hiểm 7 Quần Đảo Phonics 🎨
        </h2>
        <p className="text-xs md:text-sm font-bold text-amber-800 mt-1 max-w-xl mx-auto">
          Phương pháp Synthetic Phonics chuẩn Anh/Mỹ: Học từ âm đơn giản đến vần phức qua tranh Ehon cắt dán cuốn hút!
        </p>

        {/* Hero Panoramic Ehon Archipelago Painting */}
        <div className="relative w-full h-32 sm:h-44 md:h-52 mt-3 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-lg bg-amber-100 group">
          <img
            src="/assets/ehon/archipelago.jpg"
            alt="Toàn cảnh 7 quần đảo Phonics tranh Ehon nối nhịp cầu vồng"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center space-x-1 shadow">
            <span>🎨 Tranh Ehon Toàn Cảnh 7 Quần Đảo</span>
          </div>
          <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-xs text-amber-950 text-[11px] font-black px-2.5 py-0.5 rounded-lg shadow border border-amber-300 hidden sm:block">
            Cầu vồng kết nối 7 vùng đất âm thanh kỳ diệu 🌈
          </div>
        </div>

        {/* 4 Developmental Stages Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 bg-white/95 p-1.5 rounded-xl border border-amber-200 shadow-xs max-w-3xl mx-auto">
          <span className="text-xs font-black text-amber-900 flex items-center space-x-1 px-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span>Độ tuổi:</span>
          </span>

          <button
            onClick={() => setSelectedStage('all')}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 'all'
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Tất Cả 7 Đảo
          </button>

          <button
            onClick={() => setSelectedStage(1)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 1
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 1: 3–4t
          </button>

          <button
            onClick={() => setSelectedStage(2)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 2
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 2: 4–5t
          </button>

          <button
            onClick={() => setSelectedStage(3)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 3
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 3: 5–6t
          </button>

          <button
            onClick={() => setSelectedStage(4)}
            className={`px-3 py-1 rounded-lg font-black text-xs transition-all cursor-pointer ${
              selectedStage === 4
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-gray-600 hover:bg-amber-100'
            }`}
          >
            Stage 4: 6–8t
          </button>
        </div>
      </div>

      {/* Islands Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => {
          const isUnlocked = unlockedGroups.includes(group.groupNumber);
          const islandVisual = getIslandVisual(group.groupNumber);
          const islandVocab = getVocabularyByGroup(group.groupNumber);

          return (
            <div
              key={group.groupNumber}
              onClick={() => handleIslandClick(group, isUnlocked)}
              className={`relative rounded-3xl p-5 border-4 transition-all duration-300 transform active:scale-95 cursor-pointer shadow-xl flex flex-col justify-between group overflow-hidden ${
                isUnlocked
                  ? 'bg-white border-amber-300 hover:border-amber-500 hover:shadow-2xl hover:-translate-y-1'
                  : 'bg-gray-100 border-gray-300 opacity-80 cursor-not-allowed'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                    <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                      isUnlocked ? 'bg-amber-100 text-amber-950 border border-amber-200' : 'bg-gray-200 text-gray-600'
                    }`}>
                      Đảo {group.groupNumber}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                      {group.ageBand}
                    </span>
                    <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 flex items-center space-x-1">
                      <BookOpen className="w-3 h-3 text-amber-700" />
                      <span>{islandVocab.length} từ</span>
                    </span>
                  </div>

                  {isUnlocked ? (
                    <div className="flex items-center space-x-1 bg-amber-100 px-2.5 py-0.5 rounded-full text-amber-900 border border-amber-200 shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span className="text-[11px] font-black">Sẵn sàng</span>
                    </div>
                  ) : (
                    <div className="p-1 bg-gray-200 rounded-full text-gray-600 shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Ehon Painted Island Scene Plate */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-3 border-2 border-amber-200 shadow-md bg-amber-50">
                  <img
                    src={islandVisual.url}
                    alt={islandVisual.alt}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      !isUnlocked ? 'grayscale' : ''
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
                    🎨 Tranh Ehon
                  </div>
                </div>

                <h3 className="text-2xl font-black text-amber-950 leading-tight group-hover:text-amber-700 transition-colors">
                  {group.name}
                </h3>
                <p className="text-xs md:text-sm font-bold mt-1 text-amber-800">
                  {group.islandTheme}
                </p>
              </div>

              {/* Phonemes in Island (Clickable buttons per sound!) */}
              <div className="mt-4 pt-3 border-t border-amber-100">
                <div className="text-[10px] font-extrabold uppercase text-center mb-2 text-amber-800 tracking-wider">
                  Chạm vào từng âm để học:
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.phonemes.map((phId) => {
                    const ph = PHONEMES_DATA[phId];
                    const label = ph ? ph.grapheme : phId;
                    return (
                      <button
                        key={phId}
                        onClick={(e) => handlePhonemeClick(e, phId, isUnlocked)}
                        className={`text-sm font-black px-3 py-1.5 rounded-xl shadow-xs transition-transform transform active:scale-90 cursor-pointer ${
                          isUnlocked
                            ? 'bg-amber-100 text-amber-950 hover:bg-amber-300 border border-amber-200'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
                <div className="absolute top-3 right-3 text-amber-400 pointer-events-none">
                  <Sparkles className="w-5 h-5 animate-spin" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
