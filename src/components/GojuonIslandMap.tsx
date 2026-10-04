import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Lock, 
  Star, 
  ArrowRight, 
  ChevronRight, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { KanaItem, KanaRowGroup } from '../types/japanese';
import { JAPANESE_GOJUON_ROWS, ALL_KANA_CHARACTERS } from '../data/japanese/gojuonData';
import { storageService } from '../services/storageService';
import { audioService } from '../services/audioService';
import { KanaWordBankModal } from './KanaWordBankModal';

export interface GojuonIslandMapProps {
  unlockedGroups?: number[];
  masteredKana?: string[];
  onSelectKana: (kana: KanaItem) => void;
  onAddStars?: (amount: number) => void;
}

const ISLAND_EMOJIS = ['🌸', '🪲', '🍃', '🌊', '🥕', '🌺', '🌳', '⛰️', '🦁', '🐊', '⚡', '✨'];

export const GojuonIslandMap: React.FC<GojuonIslandMapProps> = ({
  unlockedGroups,
  masteredKana,
  onSelectKana,
  onAddStars
}) => {
  const [selectedStage, setSelectedStage] = useState<number | 'all'>('all');
  const [isWordBankOpen, setIsWordBankOpen] = useState(false);
  const [wordBankTargetRow, setWordBankTargetRow] = useState<any>(undefined);
  const [wordBankTargetKana, setWordBankTargetKana] = useState<string | undefined>(undefined);
  const [wordBankInitialMode, setWordBankInitialMode] = useState<'grid' | 'flashcard'>('grid');

  const effectiveMastered = masteredKana || storageService.getJapaneseMasteredKana();
  const effectiveUnlocked = unlockedGroups || storageService.getJapaneseUnlockedGroups();

  // Find next recommended kana
  const nextRecommendedKana: KanaItem | null = useMemoKana(() => {
    for (let i = 0; i < JAPANESE_GOJUON_ROWS.length; i++) {
      const row = JAPANESE_GOJUON_ROWS[i];
      const unmastered = row.characters.find(c => !effectiveMastered.includes(c.id));
      if (unmastered) return unmastered;
    }
    return ALL_KANA_CHARACTERS[0] || null;
  }, [effectiveMastered]);

  const activeIslandGroup = nextRecommendedKana
    ? JAPANESE_GOJUON_ROWS.find(r => r.characters.some(c => c.id === nextRecommendedKana.id)) || JAPANESE_GOJUON_ROWS[0]
    : JAPANESE_GOJUON_ROWS[0];

  const handleKanaClick = (e: React.MouseEvent, item: KanaItem, isUnlocked: boolean) => {
    e.stopPropagation();
    if (isUnlocked) {
      audioService.playPopSound(540);
      onSelectKana(item);
    } else {
      audioService.playGentleTryAgain();
    }
  };

  const handleIslandClick = (groupIndex: number, isUnlocked: boolean) => {
    if (isUnlocked) {
      const row = JAPANESE_GOJUON_ROWS[groupIndex];
      if (row) {
        const target = row.characters.find(c => !effectiveMastered.includes(c.id)) || row.characters[0];
        if (target) {
          audioService.playPopSound(520);
          onSelectKana(target);
        }
      }
    } else {
      audioService.playGentleTryAgain();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 select-none">
      
      {/* Title Header */}
      <div className="text-center mb-3">
        <div className="inline-flex items-center space-x-1.5 bg-rose-200/90 px-3.5 py-1 rounded-full border border-rose-300 text-rose-950 font-black text-xs mb-1 shadow-xs">
          <Compass className="w-4 h-4 text-rose-700 animate-spin" />
          <span>Lộ Trình Toàn Diện 71 Âm Kana Gojūon • Chuẩn Sư Phạm Benesse & Kumon</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-amber-950 tracking-tight">
          Bản Đồ Thám Hiểm 12 Quần Đảo Kana Nhật Bản 🌸
        </h2>
        <p className="text-xs md:text-sm font-bold text-amber-800 mt-0.5 max-w-xl mx-auto">
          Khám phá trọn vẹn 46 chữ cơ bản cùng biến âm Đục & Bán Đục: Hoàn thành từng đảo để mở khóa đảo mới tiếp theo!
        </p>

        {/* HERO CARD: NEXT STOP FOR THE CHILD */}
        {nextRecommendedKana && activeIslandGroup ? (
          <div className="w-full mt-3 bg-gradient-to-r from-rose-400 via-amber-400 to-orange-400 rounded-3xl p-3.5 sm:p-5 border-4 border-rose-300 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 text-amber-950">
            {/* Left: Info */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-left w-full md:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 border-2 border-rose-300 flex items-center justify-center text-3xl sm:text-4xl shadow-md shrink-0">
                {ISLAND_EMOJIS[JAPANESE_GOJUON_ROWS.findIndex(r => r.rowKey === activeIslandGroup.rowKey)] || '🌸'}
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 mb-0.5">
                  <span className="bg-rose-950 text-rose-100 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    🎯 Điểm Dừng Tiếp Theo
                  </span>
                  <span className="text-xs font-black text-amber-950">
                    {activeIslandGroup.rowNameJa} • {activeIslandGroup.rowNameVi}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-amber-950 truncate">
                  Đảo {activeIslandGroup.rowNameVi}
                </h3>
                <div className="text-xs font-bold text-amber-900 flex items-center space-x-2 mt-0.5">
                  <span>Chữ: <strong className="text-base text-rose-700">{nextRecommendedKana.hiragana}</strong> [{nextRecommendedKana.romaji}]</span>
                  <span>•</span>
                  <span>Từ mẫu: <strong className="font-black text-amber-950">{nextRecommendedKana.sampleWords[0]?.word} ({nextRecommendedKana.sampleWords[0]?.meaningVi})</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Big CTA Button */}
            <div className="w-full md:w-auto shrink-0">
              <button
                onClick={() => {
                  audioService.playPopSound(540);
                  onSelectKana(nextRecommendedKana);
                }}
                className="w-full md:w-auto py-3 sm:py-3.5 px-6 sm:px-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl border-3 border-emerald-200 transform active:scale-95 transition-all flex items-center justify-center space-x-2.5 cursor-pointer animate-pulse"
              >
                <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
                <span>BẤM VÀO ĐÂY ĐỂ HỌC CHỮ {nextRecommendedKana.hiragana} 🚀</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full mt-3 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 rounded-3xl p-4 border-4 border-yellow-200 shadow-xl flex items-center justify-center space-x-3 text-amber-950 font-black text-base sm:text-lg">
            <Award className="w-8 h-8 text-amber-900 animate-bounce" />
            <span>🎉 CHÚC MỪNG KANA MASTER! BÉ ĐÃ CHINH PHỤC CẢ 12 QUẦN ĐẢO! 🏆</span>
          </div>
        )}

        {/* SEQUENTIAL STEPPING STONES TRAIL ACROSS 12 ISLANDS */}
        <div className="mt-3 bg-white/95 rounded-2xl p-2 sm:p-3 border-2 border-amber-200 shadow-xs">
          <div className="text-[11px] font-black uppercase text-amber-900 mb-1.5 flex items-center justify-between px-1">
            <span>🌈 Hành Trình Nối Nhịp 12 Quần Đảo Kana:</span>
            <span className="text-rose-700 font-extrabold">{effectiveMastered.length}/71 Chữ Đã Học</span>
          </div>
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none">
            {JAPANESE_GOJUON_ROWS.map((g, idx) => {
              const groupIndex = idx + 1;
              const isUnlocked = effectiveUnlocked.includes(groupIndex) || groupIndex === 1;
              const masteredInGroup = g.characters.filter(c => effectiveMastered.includes(c.id)).length;
              const isComplete = masteredInGroup >= g.characters.length;
              const isActive = activeIslandGroup.rowKey === g.rowKey;

              return (
                <React.Fragment key={g.rowKey}>
                  <button
                    onClick={() => handleIslandClick(idx, isUnlocked)}
                    className={`flex-1 min-w-[70px] sm:min-w-[85px] py-1.5 px-1 rounded-xl text-center transition-all cursor-pointer border-2 ${
                      isComplete
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-950 font-black shadow-2xs'
                        : isActive
                        ? 'bg-rose-400 border-rose-600 text-white font-black shadow-md ring-2 ring-rose-300 animate-pulse'
                        : isUnlocked
                        ? 'bg-rose-50 border-rose-200 text-rose-900 font-bold'
                        : 'bg-gray-100 border-gray-200 text-gray-400 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-black truncate">
                      {ISLAND_EMOJIS[idx]} {g.rowNameJa.slice(0, 2)}
                    </div>
                    <div className="text-[9px] font-extrabold">
                      {masteredInGroup}/{g.characters.length} ⭐
                    </div>
                  </button>
                  {idx < JAPANESE_GOJUON_ROWS.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Hero Panoramic Ehon Archipelago Painting */}
        <div className="relative w-full h-28 sm:h-36 md:h-44 mt-3 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md bg-amber-100 group">
          <img
            src="/assets/ehon/archipelago.jpg"
            alt="Toàn cảnh quần đảo Kana Nhật Bản nối nhịp cầu vồng tranh Ehon"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center space-x-1 shadow">
            <span>🎨 Tranh Ehon Toàn Cảnh 12 Quần Đảo Kana</span>
          </div>
          <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-xs text-amber-950 text-[11px] font-black px-2.5 py-0.5 rounded-lg shadow border border-amber-300 hidden sm:block">
            Cầu vồng kết nối 12 vùng đất âm điệu Tokyo kỳ diệu 🌈
          </div>
        </div>

        {/* Master Word Bank & Continuous Flashcard Dual Triggers (Identical to English!) */}
        <div className="flex flex-wrap items-center justify-center mt-2.5 gap-2.5">
          <button
            onClick={() => {
              audioService.playPopSound(540);
              setWordBankTargetRow(undefined);
              setWordBankTargetKana(undefined);
              setWordBankInitialMode('grid');
              setIsWordBankOpen(true);
            }}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-600 text-amber-950 font-black px-4 sm:px-5 py-2 rounded-2xl shadow-md border-2 border-amber-300 transform active:scale-95 transition-all cursor-pointer text-xs md:text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-950 animate-spin" />
            <span>Kho Bảng Chữ Cái & Từ Vựng Toàn Diện (Grid) 🗂️</span>
          </button>

          <button
            onClick={() => {
              audioService.playPopSound(560);
              setWordBankTargetRow(undefined);
              setWordBankTargetKana(undefined);
              setWordBankInitialMode('flashcard');
              setIsWordBankOpen(true);
            }}
            className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-700 text-white font-black px-4 sm:px-5 py-2 rounded-2xl shadow-md border-2 border-rose-300 transform active:scale-95 transition-all cursor-pointer text-xs md:text-sm"
          >
            <BookOpen className="w-4 h-4 text-white" />
            <span>Học Flashcard Bảng Chữ Cái (Chạm Lật Tự Động) 🎴</span>
          </button>
        </div>

      </div>

      {/* 12 ISLANDS DETAILED EXPLORATION SECTION */}
      <div className="space-y-6 mt-4">
        {JAPANESE_GOJUON_ROWS.map((group, idx) => {
          const groupIndex = idx + 1;
          const isUnlocked = effectiveUnlocked.includes(groupIndex) || groupIndex === 1;
          const masteredInGroup = group.characters.filter(c => effectiveMastered.includes(c.id)).length;
          const isComplete = masteredInGroup >= group.characters.length;

          return (
            <div
              key={group.rowKey}
              className={`rounded-3xl border-4 transition-all duration-300 overflow-hidden shadow-lg ${
                isUnlocked
                  ? 'bg-gradient-to-b from-white via-rose-50/30 to-amber-50/50 border-amber-300'
                  : 'bg-gray-100/80 border-gray-300 opacity-70'
              }`}
            >
              {/* Island Header Banner */}
              <div className="p-3 sm:p-4 bg-white/90 border-b-2 border-amber-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-2xl sm:text-3xl shadow-xs">
                    {ISLAND_EMOJIS[idx]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base sm:text-lg font-black text-amber-950">
                        Đảo {groupIndex}: {group.rowNameVi}
                      </h4>
                      <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-lg border border-rose-200">
                        {group.rowNameJa}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-amber-800">
                      {isComplete ? '🎉 Đã hoàn thành toàn bộ chữ trên đảo' : `Đã thuộc ${masteredInGroup}/${group.characters.length} chữ`}
                    </p>
                  </div>
                </div>

                {/* Island Actions */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      audioService.playPopSound(500);
                      setWordBankTargetRow(group.rowKey);
                      setWordBankInitialMode('flashcard');
                      setIsWordBankOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-950 text-xs font-black flex items-center space-x-1 border border-rose-300 cursor-pointer shadow-2xs"
                  >
                    <span>🎴 Thẻ Hàng {group.rowNameJa.slice(0, 2)}</span>
                  </button>
                </div>
              </div>

              {/* Kana Circular Nodes Grid */}
              <div className="p-3 sm:p-5">
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 justify-items-center">
                  {group.characters.map((kana) => {
                    const isMastered = effectiveMastered.includes(kana.id);
                    const isNodeUnlocked = isUnlocked;

                    return (
                      <div
                        key={kana.id}
                        onClick={(e) => handleKanaClick(e, kana, isNodeUnlocked)}
                        className={`relative flex flex-col items-center justify-center w-20 h-24 sm:w-24 sm:h-28 rounded-2xl border-3 transition-all duration-300 cursor-pointer group active:scale-95 ${
                          isNodeUnlocked
                            ? isMastered
                              ? 'bg-amber-100/90 border-amber-400 text-amber-950 shadow-md hover:scale-105 hover:shadow-xl'
                              : 'bg-white border-rose-300 text-rose-950 shadow-xs hover:border-rose-500 hover:scale-105 hover:shadow-md'
                            : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {/* Lock Overlay if locked */}
                        {!isNodeUnlocked && (
                          <div className="absolute inset-0 bg-gray-200/70 backdrop-blur-2xs rounded-xl flex items-center justify-center">
                            <Lock className="w-5 h-5 text-gray-500" />
                          </div>
                        )}

                        {/* Top Romaji & Mastered Badge */}
                        <div className="absolute top-1.5 inset-x-2 flex items-center justify-between text-[10px] font-black">
                          <span className="uppercase text-amber-800">/{kana.romaji}/</span>
                          {isMastered && (
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          )}
                        </div>

                        {/* Center Big Kana Glyph */}
                        <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none mt-2 group-hover:scale-110 transition-transform">
                          {kana.hiragana}
                        </span>

                        {/* Bottom Sample Word Preview */}
                        <div className="absolute bottom-1.5 inset-x-1.5 text-center">
                          <span className="text-[10px] font-bold text-amber-900 block truncate">
                            {kana.sampleWords[0]?.word}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Kana Word Bank & Flashcard Modal */}
      <KanaWordBankModal
        isOpen={isWordBankOpen}
        onClose={() => setIsWordBankOpen(false)}
        initialRowKey={wordBankTargetRow}
        initialKanaId={wordBankTargetKana}
        initialViewMode={wordBankInitialMode}
        onAddStars={onAddStars}
      />

    </div>
  );
};

// Helper hook
function useMemoKana<T>(factory: () => T, deps: React.DependencyList): T {
  return React.useMemo(factory, deps);
}

export default GojuonIslandMap;
