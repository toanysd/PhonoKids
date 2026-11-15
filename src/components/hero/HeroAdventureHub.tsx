import React, { useState } from 'react';
import {
  AgeBandFilter,
  CurriculumUnit,
  HeroCharacter,
  HeroSaveState,
  RivalCharacter,
} from '../../types/heroGame';
import {
  CURRICULUM_WORLDS,
  getNextRecommendedUnit,
  getUnitsByWorld,
} from '../../data/curriculumWorlds';
import { CharacterRigSvg } from './CharacterRigSvg';
import { CheckCircle2, Play, Sparkles, Star, Swords, Users } from 'lucide-react';
import { audioService } from '../../services/audioService';

interface HeroAdventureHubProps {
  saveState: HeroSaveState;
  hero: HeroCharacter;
  rival: RivalCharacter;
  onAgeFilterChange: (age: AgeBandFilter) => void;
  onOpenRoster: () => void;
  onStartUnitCutscene: (unit: CurriculumUnit) => void;
  onStartUnitBattle: (unit: CurriculumUnit) => void;
}

const AGE_FILTERS: { id: AgeBandFilter; label: string }[] = [
  { id: 'all', label: 'Tất Cả (3–8 Tuổi)' },
  { id: '3–4 Tuổi', label: '3–4 Tuổi (Mầm Nhỏ)' },
  { id: '3.5–4.5 Tuổi', label: '3.5–4.5 Tuổi (Phonics L1)' },
  { id: '4–5 Tuổi', label: '4–5 Tuổi (Ghép Vần CVC)' },
  { id: '5–6 Tuổi', label: '5–6 Tuổi (Giao Tiếp)' },
  { id: '5.5–7 Tuổi', label: '5.5–7 Tuổi (Âm Dài & Ghép)' },
  { id: '6–8 Tuổi', label: '6–8 Tuổi (Starters)' },
];

export const HeroAdventureHub: React.FC<HeroAdventureHubProps> = ({
  saveState,
  hero,
  rival,
  onAgeFilterChange,
  onOpenRoster,
  onStartUnitCutscene,
  onStartUnitBattle,
}) => {
  const recommendedUnit = getNextRecommendedUnit(saveState.completedUnitIds);
  const [selectedWorldId, setSelectedWorldId] = useState<number>(recommendedUnit.worldId);

  const visibleWorlds =
    saveState.ageGroupFilter === 'all'
      ? CURRICULUM_WORLDS
      : CURRICULUM_WORLDS.filter((w) => w.ageBand === saveState.ageGroupFilter);

  const activeWorld =
    visibleWorlds.find((w) => w.id === selectedWorldId) || visibleWorlds[0] || CURRICULUM_WORLDS[0];
  const worldUnits = getUnitsByWorld(activeWorld.id);
  const totalStarsInHero = Object.values(saveState.unitStars).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-5 space-y-4 sm:space-y-5">
      {/* 1. Mobile-First Above-the-Fold Hangar & Desktop Hero Split */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl border-4 border-amber-300 shadow-xl p-3.5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center overflow-hidden">
        {/* Right 3D Matchup Showcase (renders cleanly & compactly above CTA or right side) */}
        <div
          onClick={onOpenRoster}
          className="order-1 lg:order-2 lg:col-span-5 relative bg-gradient-to-b from-sky-800/50 to-indigo-950/90 rounded-3xl border-2 border-white/15 px-3 py-3 pt-7 sm:p-4 sm:pt-8 flex items-center justify-around cursor-pointer hover:border-amber-300/80 transition-all"
          title="Bấm để đổi nhân vật hoặc kéo nghiêng 2.5D"
        >
          <span className="absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white/15 border border-amber-300/40 text-[10px] font-bold text-amber-200 whitespace-nowrap">
            ✨ Nhân Vật 2D AI Đa Tư Thế • Kéo Nghiêng 2.5D
          </span>
          <div className="flex flex-col items-center">
            <CharacterRigSvg
              template={hero.template}
              primaryColor={hero.primaryColor}
              secondaryColor={hero.secondaryColor}
              accentColor={hero.accentColor}
              pose="attack"
              customAvatarUrl={hero.customAvatarUrl}
              interactiveOrbit
              className="w-28 h-28 sm:w-40 sm:h-40"
            />
            <span className="mt-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[11px]">
              {hero.nameEn}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Swords className="w-6 h-6 sm:w-7 sm:h-7 text-rose-400 animate-pulse" />
            <span className="font-display text-[11px] font-bold text-slate-300 mt-0.5">VS</span>
          </div>

          <div className="flex flex-col items-center">
            <CharacterRigSvg
              template={rival.template}
              primaryColor={rival.primaryColor}
              secondaryColor={rival.secondaryColor}
              accentColor={rival.accentColor}
              facing="left"
              customAvatarUrl={rival.customAvatarUrl}
              interactiveOrbit
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
            <span className="mt-1 px-2.5 py-0.5 rounded-full bg-rose-500/80 text-white font-extrabold text-[11px]">
              {rival.nameEn}
            </span>
          </div>
        </div>

        {/* Left Info + Giant Play CTA */}
        <div className="order-2 lg:order-1 lg:col-span-7 space-y-2.5 sm:space-y-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[11px] sm:text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              CHỈ CẦN NÓI LÀ CHƠI ĐƯỢC
            </span>
            <span className="font-mono text-[11px] sm:text-xs bg-white/10 border border-white/20 px-2.5 py-0.5 rounded-full tabular-nums">
              {saveState.completedUnitIds.length}/24 chặng • {totalStarsInHero}⭐
            </span>
          </div>

          <h2 className="font-display text-xl sm:text-3xl font-bold leading-tight">
            {hero.nameVi}{' '}
            {hero.japaneseTitle && (
              <span className="text-amber-300 text-base sm:text-2xl">({hero.japaneseTitle})</span>
            )}{' '}
            đối đầu <span className="text-rose-300">{rival.nameVi}</span>!
          </h2>

          <p className="hidden sm:block text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
            Nhân vật tự dẫn dắt và mở Micro chờ bé đọc theo mẫu — chạm tay hay di chuyển hoàn toàn tự do mà không bao giờ bị kẹt màn chơi.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-0.5">
            <button
              type="button"
              onClick={() => {
                audioService.playMagicChime();
                onStartUnitCutscene(recommendedUnit);
              }}
              className="w-full sm:flex-1 min-h-[54px] px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:brightness-105 text-slate-950 font-black text-sm sm:text-base shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Play className="w-5 h-5 fill-current shrink-0" />
              <span className="truncate">CHƠI NGAY: {recommendedUnit.titleVi}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                audioService.playPopSound(520);
                onOpenRoster();
              }}
              className="min-h-[48px] sm:min-h-[54px] px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-amber-300/60 text-white font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Users className="w-4 h-4 text-amber-300" />
              <span>Đổi / Thêm Nhân Vật</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Age Filter Ribbon */}
      <section className="flex items-center gap-2 overflow-x-auto pb-1">
        {AGE_FILTERS.map((f) => {
          const active = saveState.ageGroupFilter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                audioService.playPopSound(500);
                onAgeFilterChange(f.id);
              }}
              className={`px-3.5 py-2 min-h-[40px] rounded-2xl text-xs font-extrabold whitespace-nowrap border-2 transition-all cursor-pointer shrink-0 ${
                active
                  ? 'bg-slate-900 text-amber-300 border-slate-900 shadow-sm'
                  : 'bg-white text-slate-800 border-amber-200 hover:border-amber-400'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </section>

      {/* 3. Mobile Swipeable World Strip + Desktop Master-Detail Grid */}
      <section className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-4 items-start">
        {/* Mobile Horizontal World Pills (< lg) */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-1.5 snap-x">
          {visibleWorlds.map((world) => {
            const wUnits = getUnitsByWorld(world.id);
            const doneCount = wUnits.filter((u) => saveState.completedUnitIds.includes(u.id)).length;
            const isSelected = activeWorld.id === world.id;
            return (
              <button
                key={world.id}
                type="button"
                onClick={() => {
                  audioService.playPopSound(480);
                  setSelectedWorldId(world.id);
                }}
                className={`snap-start px-3 py-2 rounded-2xl border-2 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-md text-slate-950'
                    : 'bg-white/85 border-amber-200 text-slate-700'
                }`}
              >
                <span className="text-lg">{world.badgeEmoji}</span>
                <div className="text-left">
                  <div className="text-[11px] font-black leading-none">
                    Thế Giới {world.id} • {world.ageBand}
                  </div>
                  <div className="text-[10px] font-bold text-amber-800 mt-0.5 tabular-nums">
                    {doneCount}/{wUnits.length} bài
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop Vertical World List (lg+) */}
        <div className="hidden lg:block lg:col-span-4 space-y-2.5">
          {visibleWorlds.map((world) => {
            const wUnits = getUnitsByWorld(world.id);
            const doneCount = wUnits.filter((u) => saveState.completedUnitIds.includes(u.id)).length;
            const isSelected = activeWorld.id === world.id;
            return (
              <button
                key={world.id}
                type="button"
                onClick={() => {
                  audioService.playPopSound(480);
                  setSelectedWorldId(world.id);
                }}
                className={`w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-white border-4 border-amber-500 shadow-lg scale-[1.01]'
                    : 'bg-white/90 border-2 border-amber-200 hover:border-amber-400'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${world.accentGradient} flex items-center justify-center text-2xl shrink-0 shadow-sm`}
                >
                  {world.badgeEmoji}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                      {world.ageBand}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-amber-800 tabular-nums">
                      {doneCount}/{wUnits.length} bài
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-950 truncate mt-0.5">
                    {world.titleVi}
                  </h3>
                  <p className="text-[11px] text-slate-600 truncate">{world.curriculumSource}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mission Cards Grid */}
        <div className="lg:col-span-8 bg-white rounded-3xl border-4 border-amber-300 shadow-xl p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
          <div className="border-b border-amber-200 pb-2.5 sm:pb-3">
            <span className="text-[11px] sm:text-xs font-black text-indigo-700 uppercase tracking-wide">
              {activeWorld.curriculumSource} • {activeWorld.ageBand}
            </span>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-slate-950">
              {activeWorld.badgeEmoji} {activeWorld.titleVi}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">{activeWorld.subtitleVi}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {worldUnits.map((unit) => {
              const isDone = saveState.completedUnitIds.includes(unit.id);
              const bestStars = saveState.unitStars[unit.id] || 0;
              return (
                <div
                  key={unit.id}
                  className={`rounded-2xl border-2 p-3.5 sm:p-4 flex flex-col justify-between transition-all ${
                    isDone
                      ? 'bg-emerald-50/70 border-emerald-400'
                      : 'bg-amber-50/50 border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-amber-200 text-amber-900">
                        Bài {unit.worldId}.{unit.unitNumber}
                      </span>
                      <div className="flex items-center gap-1">
                        {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                        <span className="inline-flex items-center gap-0.5 text-xs font-mono font-bold text-amber-700 tabular-nums">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          {bestStars}/3
                        </span>
                      </div>
                    </div>

                    <h4 className="font-display font-bold text-base sm:text-lg text-slate-950 leading-snug">
                      {unit.titleVi}
                    </h4>
                    <p className="text-[11px] font-bold text-indigo-700 mt-0.5">{unit.methodologyTag}</p>
                    <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">{unit.summaryVi}</p>

                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {unit.cutsceneSlides.map((s) => (
                        <span
                          key={s.id}
                          className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-white border border-amber-200 text-slate-800"
                        >
                          {s.emoji} {s.wordOrPhraseEn}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3.5 pt-3 border-t border-amber-200/70">
                    <button
                      type="button"
                      onClick={() => onStartUnitCutscene(unit)}
                      className="flex-1 py-2.5 min-h-[44px] px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Học Video & Đấu</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onStartUnitBattle(unit)}
                      className="py-2.5 min-h-[44px] px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-black text-xs inline-flex items-center justify-center gap-1 cursor-pointer"
                      title="Vào thẳng Sân Khấu Chiến Đấu"
                    >
                      <Swords className="w-3.5 h-3.5" />
                      <span>Đấu Ngay</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
