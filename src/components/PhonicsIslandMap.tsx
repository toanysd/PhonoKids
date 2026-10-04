import React, { useState } from 'react';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { PhonicsGroup, PhonemeInfo } from '../types/phonics';
import { ChildProfile } from '../types/user';
import { storageService } from '../services/storageService';
import { 
  Lock, 
  Star, 
  Sparkles, 
  Compass, 
  Filter, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Award,
  Layers
} from 'lucide-react';
import { audioService } from '../services/audioService';
import { getIslandVisual } from '../services/imageService';
import { getVocabularyByGroup } from '../data/phonicsVocabulary';
import { PhonicsWordBankModal } from './PhonicsWordBankModal';
import { getGroupWordCount, PHONICS_WORD_BANK } from '../data/phonicsWordBank';

interface PhonicsIslandMapProps {
  unlockedGroups: number[];
  masteredPhonemes?: string[];
  profile?: ChildProfile;
  onSelectPhoneme: (phoneme: PhonemeInfo) => void;
}

export const PhonicsIslandMap: React.FC<PhonicsIslandMapProps> = ({
  unlockedGroups,
  masteredPhonemes,
  profile,
  onSelectPhoneme,
}) => {
  const [selectedStage, setSelectedStage] = useState<number | 'all'>('all');
  const [isWordBankOpen, setIsWordBankOpen] = useState(false);
  const [wordBankTargetGroup, setWordBankTargetGroup] = useState<number | undefined>(undefined);
  const [wordBankTargetPhoneme, setWordBankTargetPhoneme] = useState<string | undefined>(undefined);
  const [wordBankInitialMode, setWordBankInitialMode] = useState<'grid' | 'flashcard'>('grid');

  const effectiveProfile = profile || storageService.getProfile();
  const effectiveMastered = masteredPhonemes || effectiveProfile.masteredPhonemes || [];
  const nextRecommended = storageService.getNextRecommendedPhoneme(effectiveProfile);
  const activeIslandGroup = nextRecommended
    ? PHONICS_GROUPS.find((g) => g.groupNumber === nextRecommended.group) || null
    : null;

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
      // Find the first unmastered phoneme on this island, or the first phoneme
      const targetPhonemeId = group.phonemes.find((ph) => !effectiveMastered.includes(ph)) || group.phonemes[0];
      const phInfo = PHONEMES_DATA[targetPhonemeId];
      if (phInfo) {
        audioService.playPopSound(520);
        onSelectPhoneme(phInfo);
      }
    } else {
      audioService.playGentleTryAgain();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
      {/* Title Header */}
      <div className="text-center mb-3">
        <div className="inline-flex items-center space-x-1.5 bg-amber-200/90 px-3.5 py-1 rounded-full border border-amber-300 text-amber-950 font-black text-xs mb-1 shadow-xs">
          <Compass className="w-4 h-4 text-amber-700 animate-spin" />
          <span>Lộ Trình Toàn Diện 42 Âm Vị • Mầm Non Đến Tiểu Học Lớp 1-2</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-amber-950 tracking-tight">
          Bản Đồ Thám Hiểm 7 Quần Đảo Phonics 🎨
        </h2>
        <p className="text-xs md:text-sm font-bold text-amber-800 mt-0.5 max-w-xl mx-auto">
          Phương pháp Synthetic Phonics chuẩn Anh/Mỹ: Hoàn thành từng đảo để mở khóa đảo mới tiếp theo!
        </p>

        {/* HERO CARD: NEXT STOP FOR THE CHILD */}
        {nextRecommended && activeIslandGroup ? (
          <div className="w-full mt-3 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl p-3.5 sm:p-5 border-4 border-amber-300 shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 text-amber-950">
            {/* Left: Info */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-left w-full md:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 border-2 border-amber-300 flex items-center justify-center text-3xl sm:text-4xl shadow-md shrink-0">
                {activeIslandGroup.islandEmoji}
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5 mb-0.5">
                  <span className="bg-amber-950 text-amber-100 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    🎯 Điểm Dừng Tiếp Theo
                  </span>
                  <span className="text-xs font-black text-amber-950">
                    Đảo {activeIslandGroup.groupNumber} ({activeIslandGroup.ageBand})
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-amber-950 truncate">
                  {activeIslandGroup.islandTheme}
                </h3>
                <div className="text-xs font-bold text-amber-900 flex items-center space-x-2 mt-0.5">
                  <span>Học âm: <strong className="font-mono text-base text-amber-950">/{nextRecommended.id}/</strong></span>
                  <span>•</span>
                  <span>Ví dụ: <strong className="font-black text-amber-950">{nextRecommended.sampleWords[0]?.word} {nextRecommended.sampleWords[0]?.emoji}</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Giant Pre-reader CTA Button */}
            <div className="w-full md:w-auto shrink-0">
              <button
                onClick={() => {
                  audioService.playPopSound(540);
                  onSelectPhoneme(nextRecommended);
                }}
                className="w-full md:w-auto py-3 sm:py-3.5 px-6 sm:px-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl border-3 border-emerald-200 transform active:scale-95 transition-all flex items-center justify-center space-x-2.5 cursor-pointer animate-pulse"
              >
                <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
                <span>BẤM VÀO ĐÂY ĐỂ HỌC ÂM /{nextRecommended.id}/ 🚀</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full mt-3 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 rounded-3xl p-4 border-4 border-yellow-200 shadow-xl flex items-center justify-center space-x-3 text-amber-950 font-black text-base sm:text-lg">
            <Award className="w-8 h-8 text-amber-900 animate-bounce" />
            <span>🎉 CHÚC MỪNG PHONICS MASTER! BÉ ĐÃ CHINH PHỤC CẢ 7 QUẦN ĐẢO! 🏆</span>
          </div>
        )}

        {/* SEQUENTIAL STEPPING STONES TRAIL ACROSS 7 ISLANDS */}
        <div className="mt-3 bg-white/95 rounded-2xl p-2 sm:p-3 border-2 border-amber-200 shadow-xs">
          <div className="text-[11px] font-black uppercase text-amber-900 mb-1.5 flex items-center justify-between px-1">
            <span>🌈 Hành Trình Nối Nhịp 7 Quần Đảo:</span>
            <span className="text-amber-700 font-extrabold">{effectiveMastered.length}/42 Âm Vị Đã Học</span>
          </div>
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1">
            {PHONICS_GROUPS.map((g, idx) => {
              const prog = storageService.getIslandProgress(g.groupNumber, effectiveMastered);
              const isUnlocked = unlockedGroups.includes(g.groupNumber);
              const isActive = activeIslandGroup?.groupNumber === g.groupNumber;

              return (
                <React.Fragment key={g.groupNumber}>
                  <button
                    onClick={() => handleIslandClick(g, isUnlocked)}
                    className={`flex-1 min-w-[70px] sm:min-w-[90px] py-1.5 px-1 rounded-xl text-center transition-all cursor-pointer border-2 ${
                      prog.isComplete
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-950 font-black shadow-2xs'
                        : isActive
                        ? 'bg-amber-300 border-amber-500 text-amber-950 font-black shadow-md ring-2 ring-amber-400 animate-pulse'
                        : isUnlocked
                        ? 'bg-amber-50 border-amber-200 text-amber-900 font-bold'
                        : 'bg-gray-100 border-gray-200 text-gray-400 opacity-60 cursor-not-allowed'
                    }`}
                    title={`Đảo ${g.groupNumber}: ${g.islandTheme} (${prog.masteredCount}/${prog.totalPhonemes} âm)`}
                  >
                    <div className="text-sm sm:text-base leading-none mb-0.5">
                      {prog.isComplete ? '🏆' : isUnlocked ? g.islandEmoji : '🔒'}
                    </div>
                    <div className="text-[10px] sm:text-xs font-black truncate">
                      Đảo {g.groupNumber}
                    </div>
                    <div className="text-[9px] font-extrabold">
                      {prog.masteredCount}/{prog.totalPhonemes} ⭐
                    </div>
                  </button>
                  {idx < PHONICS_GROUPS.length - 1 && (
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

        {/* Master Word Bank & Continuous Flashcard Dual Triggers */}
        <div className="flex flex-wrap items-center justify-center mt-2.5 gap-2.5">
          <button
            onClick={() => {
              audioService.playPopSound(540);
              setWordBankTargetGroup(undefined);
              setWordBankTargetPhoneme(undefined);
              setWordBankInitialMode('grid');
              setIsWordBankOpen(true);
            }}
            className="flex items-center space-x-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:to-orange-600 text-amber-950 font-black px-4 sm:px-5 py-2 rounded-2xl shadow-md border-2 border-amber-300 transform active:scale-95 transition-all cursor-pointer text-xs md:text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-950 animate-spin" />
            <span>Kho Báu Từ Vựng ({PHONICS_WORD_BANK.length} Từ) 💎</span>
          </button>

          <button
            onClick={() => {
              audioService.playPopSound(540);
              setWordBankTargetGroup(undefined);
              setWordBankTargetPhoneme(undefined);
              setWordBankInitialMode('flashcard');
              setIsWordBankOpen(true);
            }}
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black px-4 sm:px-5 py-2 rounded-2xl shadow-md border-2 border-emerald-300 transform active:scale-95 transition-all cursor-pointer text-xs md:text-sm shadow-emerald-400/30"
          >
            <Layers className="w-4 h-4 text-emerald-100 animate-pulse" />
            <span>🗂️ Học Thẻ Flashcard Liên Tục</span>
          </button>
        </div>

        {/* 4 Developmental Stages Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5 bg-white/95 p-1.5 rounded-xl border border-amber-200 shadow-xs max-w-3xl mx-auto">
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
          const prog = storageService.getIslandProgress(group.groupNumber, effectiveMastered);
          const isActiveIsland = activeIslandGroup?.groupNumber === group.groupNumber;

          return (
            <div
              key={group.groupNumber}
              onClick={() => handleIslandClick(group, isUnlocked)}
              className={`relative rounded-3xl p-5 border-4 transition-all duration-300 transform active:scale-95 cursor-pointer shadow-xl flex flex-col justify-between group overflow-hidden ${
                isActiveIsland
                  ? 'bg-white border-amber-500 ring-4 ring-amber-400 ring-offset-2 shadow-2xl scale-[1.02]'
                  : isUnlocked
                  ? prog.isComplete
                    ? 'bg-white border-emerald-400 hover:border-emerald-500 hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-white border-amber-300 hover:border-amber-500 hover:shadow-2xl hover:-translate-y-1'
                  : 'bg-gray-100 border-gray-300 opacity-80 cursor-not-allowed'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                    <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                      prog.isComplete 
                        ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                        : isActiveIsland
                        ? 'bg-amber-400 text-amber-950 border border-amber-500'
                        : isUnlocked 
                        ? 'bg-amber-100 text-amber-950 border border-amber-200' 
                        : 'bg-gray-200 text-gray-600'
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

                  {prog.isComplete ? (
                    <div className="flex items-center space-x-1 bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-0.5 rounded-full font-black text-xs shadow-xs shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chinh phục 6/6 ⭐</span>
                    </div>
                  ) : isActiveIsland ? (
                    <div className="flex items-center space-x-1 bg-amber-300 text-amber-950 border border-amber-400 px-2.5 py-0.5 rounded-full font-black text-xs shadow-xs animate-pulse shrink-0">
                      <Compass className="w-3.5 h-3.5 text-amber-900" />
                      <span>Đang học ({prog.masteredCount}/6 ⭐)</span>
                    </div>
                  ) : isUnlocked ? (
                    <div className="flex items-center space-x-1 bg-amber-100 px-2.5 py-0.5 rounded-full text-amber-900 border border-amber-200 shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span className="text-[11px] font-black">{prog.masteredCount}/6 ⭐</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 p-1 px-2.5 bg-gray-200 rounded-full text-gray-600 shrink-0 text-xs font-bold">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Khóa</span>
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
                  {isActiveIsland && (
                    <div className="absolute bottom-2 left-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-md shadow flex items-center space-x-1 border border-amber-500 animate-pulse">
                      <span>⛵ ĐẢO HIỆN TẠI CỦA BÉ</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-black text-amber-950 leading-tight group-hover:text-amber-700 transition-colors">
                  {group.name}
                </h3>
                <p className="text-xs md:text-sm font-bold mt-1 text-amber-800">
                  {group.islandTheme}
                </p>

                {/* Locked Guidance Helper */}
                {!isUnlocked && (
                  <div className="mt-2.5 p-2 bg-amber-50/80 rounded-xl border border-amber-200 text-center text-xs font-bold text-amber-900 flex items-center justify-center space-x-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Hoàn thành Đảo {group.groupNumber - 1} để mở khóa đảo này nhé! 🗝️</span>
                  </div>
                )}
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
                    const isMastered = effectiveMastered.includes(phId);
                    const isNextTarget = nextRecommended?.id === phId;

                    if (isMastered) {
                      return (
                        <button
                          key={phId}
                          onClick={(e) => handlePhonemeClick(e, phId, isUnlocked)}
                          className="text-sm font-black px-3 py-1.5 rounded-xl shadow-xs transition-transform transform active:scale-90 cursor-pointer bg-emerald-100 text-emerald-950 hover:bg-emerald-200 border-2 border-emerald-300 flex items-center space-x-1"
                          title={ph ? `Âm /${ph.id}/ - Đã thành thạo ⭐` : phId}
                        >
                          <span>{label}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        </button>
                      );
                    }

                    if (isNextTarget) {
                      return (
                        <button
                          key={phId}
                          onClick={(e) => handlePhonemeClick(e, phId, isUnlocked)}
                          className="text-sm font-black px-3.5 py-1.5 rounded-xl shadow-md transition-transform transform active:scale-90 cursor-pointer bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 hover:from-amber-500 hover:to-orange-500 border-2 border-amber-500 ring-2 ring-amber-400 animate-pulse flex items-center space-x-1"
                          title={ph ? `Âm /${ph.id}/ - Mục tiêu tiếp theo 🚀` : phId}
                        >
                          <span>{label}</span>
                          <Sparkles className="w-3.5 h-3.5 text-amber-950 shrink-0" />
                        </button>
                      );
                    }

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

                {/* Island Specific Word Bank Button */}
                {isUnlocked && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      audioService.playPopSound(520);
                      setWordBankTargetGroup(group.groupNumber);
                      setWordBankTargetPhoneme(undefined);
                      setIsWordBankOpen(true);
                    }}
                    className="mt-3 w-full py-1.5 px-3 bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs rounded-xl border border-amber-300 shadow-2xs flex items-center justify-center space-x-1.5 transition-transform transform active:scale-95 cursor-pointer"
                    title={`Mở kho báu từ vựng của Đảo ${group.groupNumber}`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                    <span>Kho Báu Đảo {group.groupNumber} ({getGroupWordCount(group.groupNumber)} từ) 💎</span>
                  </button>
                )}
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

      {/* Phonics Sound Word Bank Modal */}
      <PhonicsWordBankModal
        isOpen={isWordBankOpen}
        onClose={() => setIsWordBankOpen(false)}
        initialGroupNumber={wordBankTargetGroup}
        initialPhonemeId={wordBankTargetPhoneme}
        initialViewMode={wordBankInitialMode}
      />
    </div>
  );
};

