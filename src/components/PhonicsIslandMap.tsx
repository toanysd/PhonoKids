import React, { useRef, useState } from 'react';
import { PHONICS_GROUPS, PHONEMES_DATA } from '../data/phonicsGroups';
import { PhonicsGroup, PhonemeInfo } from '../types/phonics';
import { ChildProfile } from '../types/user';
import { storageService } from '../services/storageService';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Lock,
  Sparkles,
  Star,
} from 'lucide-react';
import { audioService } from '../services/audioService';
import { getIslandVisual } from '../services/imageService';
import { PhonicsWordBankModal } from './PhonicsWordBankModal';

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
  const effectiveProfile = profile || storageService.getProfile();
  const effectiveMastered = masteredPhonemes || effectiveProfile.masteredPhonemes || [];
  const nextRecommended = storageService.getNextRecommendedPhoneme(effectiveProfile);
  const activeIslandGroup = nextRecommended
    ? PHONICS_GROUPS.find((g) => g.groupNumber === nextRecommended.group) || PHONICS_GROUPS[0]
    : PHONICS_GROUPS[0];

  const [islandIdx, setIslandIdx] = useState<number>(() =>
    Math.max(
      0,
      PHONICS_GROUPS.findIndex((g) => g.groupNumber === activeIslandGroup.groupNumber)
    )
  );
  const [isWordBankOpen, setIsWordBankOpen] = useState(false);
  const [wordBankTargetGroup, setWordBankTargetGroup] = useState<number | undefined>(undefined);
  const [wordBankInitialMode, setWordBankInitialMode] = useState<'grid' | 'flashcard'>('grid');
  const touchStartXRef = useRef<number | null>(null);

  const safeIdx = Math.min(islandIdx, PHONICS_GROUPS.length - 1);
  const group: PhonicsGroup = PHONICS_GROUPS[safeIdx] || PHONICS_GROUPS[0];
  const isUnlocked = unlockedGroups.includes(group.groupNumber);
  const islandVisual = getIslandVisual(group.groupNumber);
  const prog = storageService.getIslandProgress(group.groupNumber, effectiveMastered);
  const targetPhonemeId =
    group.phonemes.find((ph) => !effectiveMastered.includes(ph)) || group.phonemes[0];
  const targetPhInfo = PHONEMES_DATA[targetPhonemeId];

  const stepIsland = (delta: number) => {
    audioService.playPopSound(delta > 0 ? 520 : 460);
    setIslandIdx((prev) => (prev + delta + PHONICS_GROUPS.length) % PHONICS_GROUPS.length);
  };

  const handlePhonemeClick = (phonemeId: string) => {
    if (!isUnlocked) {
      audioService.playGentleTryAgain();
      return;
    }
    const phInfo = PHONEMES_DATA[phonemeId];
    if (phInfo) {
      audioService.playPopSound(540);
      onSelectPhoneme(phInfo);
    }
  };

  return (
    <div className="w-full h-full max-w-5xl mx-auto px-2.5 sm:px-5 py-2 flex flex-col gap-2 overflow-hidden">
      {/* 1. Compact Top Strip: 7 Island Pills + Flashcard Shortcut */}
      <div className="shrink-0 flex items-center gap-1.5 overflow-x-auto pb-0.5">
        {PHONICS_GROUPS.map((g, idx) => {
          const gProg = storageService.getIslandProgress(g.groupNumber, effectiveMastered);
          const gUnlocked = unlockedGroups.includes(g.groupNumber);
          const active = idx === safeIdx;
          return (
            <button
              key={g.groupNumber}
              type="button"
              onClick={() => {
                audioService.playPopSound(500);
                setIslandIdx(idx);
              }}
              className={`min-h-[42px] px-3 py-1.5 rounded-2xl border-2 font-black text-xs whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer transition-all ${
                active
                  ? 'bg-slate-900 text-amber-300 border-amber-400 shadow-sm'
                  : gUnlocked
                  ? 'bg-white text-amber-950 border-amber-200 hover:border-amber-400'
                  : 'bg-gray-100 text-gray-500 border-gray-200'
              }`}
            >
              <span>{gProg.isComplete ? '🏆' : gUnlocked ? g.islandEmoji : '🔒'}</span>
              <span>Đảo {g.groupNumber}</span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(540);
            setWordBankTargetGroup(isUnlocked ? group.groupNumber : undefined);
            setWordBankInitialMode('flashcard');
            setIsWordBankOpen(true);
          }}
          className="min-h-[42px] px-3 py-1.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer shadow-sm ml-auto"
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span>Thẻ Từ</span>
        </button>
      </div>

      {/* 2. Center Paged Island Card (1 Island Per Screen, Swipeable) */}
      <div
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartXRef.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartXRef.current;
          touchStartXRef.current = null;
          if (Math.abs(dx) > 40) {
            stepIsland(dx < 0 ? 1 : -1);
          }
        }}
        className="flex-1 min-h-0 bg-white rounded-3xl border-4 border-amber-300 shadow-xl p-2.5 sm:p-4 flex flex-col gap-2.5 overflow-hidden"
      >
        {/* Island Visual Header with Prev/Next Arrows */}
        <div className="relative h-20 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-200 bg-amber-100 shrink-0">
          <img
            src={islandVisual.url}
            alt={islandVisual.alt}
            className={`w-full h-full object-cover ${!isUnlocked ? 'grayscale opacity-70' : ''}`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/assets/ehon/archipelago.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/75 flex items-center justify-between px-2 sm:px-3 gap-2">
            <button
              type="button"
              onClick={() => stepIsland(-1)}
              aria-label="Đảo trước"
              className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-amber-100 text-slate-950 flex items-center justify-center shadow cursor-pointer active:scale-90 shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="text-center text-white min-w-0 flex-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-black bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                <span>Đảo {group.groupNumber}/7</span>
                <span>•</span>
                <span>{group.ageBand}</span>
                <span>•</span>
                <span className="tabular-nums">
                  {prog.masteredCount}/{prog.totalPhonemes}⭐
                </span>
              </div>
              <h3 className="font-display text-base sm:text-2xl font-bold leading-tight truncate mt-1">
                {group.islandEmoji} {group.name}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => stepIsland(1)}
              aria-label="Đảo tiếp theo"
              className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-amber-100 text-slate-950 flex items-center justify-center shadow cursor-pointer active:scale-90 shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 6 Giant Tactile Phoneme Tiles (3x2 Grid filling screen cleanly) */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-2 sm:gap-3 items-stretch">
          {group.phonemes.map((phId) => {
            const ph = PHONEMES_DATA[phId];
            const label = ph ? ph.grapheme : phId;
            const sample = ph?.sampleWords[0];
            const isMastered = effectiveMastered.includes(phId);
            const isTarget = nextRecommended?.id === phId;

            return (
              <button
                key={phId}
                type="button"
                onClick={() => handlePhonemeClick(phId)}
                className={`relative rounded-2xl border-3 p-2 flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
                  !isUnlocked
                    ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                    : isMastered
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 hover:bg-emerald-100 cursor-pointer shadow-sm'
                    : isTarget
                    ? 'bg-gradient-to-br from-amber-300 to-orange-300 border-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400 cursor-pointer'
                    : 'bg-amber-50/70 border-amber-200 text-slate-950 hover:border-amber-400 cursor-pointer shadow-xs'
                }`}
              >
                {isMastered && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 absolute top-1.5 right-1.5" />
                )}
                {!isMastered && isTarget && (
                  <Sparkles className="w-4 h-4 text-amber-900 absolute top-1.5 right-1.5 animate-pulse" />
                )}
                <span className="text-2xl sm:text-3xl leading-none">
                  {sample?.emoji || '🎵'}
                </span>
                <span className="font-display text-2xl sm:text-4xl font-black leading-none">
                  {label}
                </span>
                {sample?.word && (
                  <span className="text-[11px] sm:text-xs font-extrabold opacity-80 truncate max-w-full">
                    {sample.word}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Giant Action Bar */}
        <div className="shrink-0 flex gap-2">
          {isUnlocked && targetPhInfo ? (
            <>
              <button
                type="button"
                onClick={() => {
                  audioService.playPopSound(540);
                  onSelectPhoneme(targetPhInfo);
                }}
                className="flex-1 min-h-[50px] px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-105 text-white font-black text-sm sm:text-base shadow-md inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-200 shrink-0" />
                <span>HỌC NGAY ÂM /{targetPhInfo.id}/</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  audioService.playPopSound(520);
                  setWordBankTargetGroup(group.groupNumber);
                  setWordBankInitialMode('grid');
                  setIsWordBankOpen(true);
                }}
                className="min-h-[50px] px-3.5 py-2.5 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 border-2 border-amber-300 font-black text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Kho Từ</span>
              </button>
            </>
          ) : (
            <div className="w-full min-h-[50px] px-4 py-2.5 rounded-2xl bg-gray-100 border-2 border-gray-200 text-gray-600 font-black text-xs sm:text-sm flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 shrink-0" />
              <span>Hoàn thành Đảo {group.groupNumber - 1} trước nhé!</span>
            </div>
          )}
        </div>
      </div>

      <PhonicsWordBankModal
        isOpen={isWordBankOpen}
        onClose={() => setIsWordBankOpen(false)}
        initialGroupNumber={wordBankTargetGroup}
        initialViewMode={wordBankInitialMode}
      />
    </div>
  );
};
