import React, { useRef, useState } from 'react';
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
import { WORLD_BACKDROP_ASSETS } from '../../data/characterSpriteManifest';
import { CharacterRigSvg } from './CharacterRigSvg';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
  Swords,
  Users,
  Volume2,
} from 'lucide-react';
import { audioService } from '../../services/audioService';

interface HeroAdventureHubProps {
  saveState: HeroSaveState;
  hero: HeroCharacter;
  rival: RivalCharacter;
  onAgeFilterChange?: (age: AgeBandFilter) => void;
  onOpenRoster: () => void;
  onStartUnitCutscene: (unit: CurriculumUnit) => void;
  onStartUnitBattle: (unit: CurriculumUnit) => void;
}

export const HeroAdventureHub: React.FC<HeroAdventureHubProps> = ({
  saveState,
  hero,
  rival,
  onOpenRoster,
  onStartUnitCutscene,
  onStartUnitBattle,
}) => {
  const recommendedUnit = getNextRecommendedUnit(saveState.completedUnitIds);
  const [selectedWorldId, setSelectedWorldId] = useState<number>(recommendedUnit.worldId);
  const initialWorldUnits = getUnitsByWorld(recommendedUnit.worldId);
  const initialUnitIdx = Math.max(
    0,
    initialWorldUnits.findIndex((u) => u.id === recommendedUnit.id)
  );
  const [unitIdx, setUnitIdx] = useState<number>(initialUnitIdx);
  const touchStartXRef = useRef<number | null>(null);

  const activeWorld =
    CURRICULUM_WORLDS.find((w) => w.id === selectedWorldId) || CURRICULUM_WORLDS[0];
  const worldUnits = getUnitsByWorld(activeWorld.id);
  const safeUnitIdx = Math.min(unitIdx, Math.max(0, worldUnits.length - 1));
  const currentUnit = worldUnits[safeUnitIdx] || recommendedUnit;

  const totalStarsInHero = Object.values(saveState.unitStars).reduce((a, b) => a + b, 0);
  const isDone = saveState.completedUnitIds.includes(currentUnit.id);
  const bestStars = saveState.unitStars[currentUnit.id] || 0;
  const backdropUrl = WORLD_BACKDROP_ASSETS[activeWorld.id] || WORLD_BACKDROP_ASSETS[1];

  const handleSelectWorld = (worldId: number) => {
    audioService.playPopSound(480);
    setSelectedWorldId(worldId);
    const units = getUnitsByWorld(worldId);
    const firstPending = units.findIndex((u) => !saveState.completedUnitIds.includes(u.id));
    setUnitIdx(firstPending !== -1 ? firstPending : 0);
  };

  const handleStepUnit = (delta: number) => {
    audioService.playPopSound(delta > 0 ? 520 : 460);
    setUnitIdx((prev) => (prev + delta + worldUnits.length) % worldUnits.length);
  };

  return (
    <div className="w-full h-full max-w-6xl mx-auto px-2.5 sm:px-5 py-2 sm:py-3 flex flex-col gap-2 sm:gap-2.5 overflow-hidden">
      {/* 1. Compact Hero vs Rival Matchup Strip */}
      <section className="shrink-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-amber-300 shadow-lg px-2.5 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between gap-2 overflow-hidden">
        <div
          onClick={onOpenRoster}
          className="flex items-center gap-1.5 sm:gap-3 cursor-pointer shrink-0"
          title="Bấm để đổi nhân vật"
        >
          <CharacterRigSvg
            template={hero.template}
            primaryColor={hero.primaryColor}
            secondaryColor={hero.secondaryColor}
            accentColor={hero.accentColor}
            pose="attack"
            customAvatarUrl={hero.customAvatarUrl}
            live={false}
            className="w-12 h-12 sm:w-20 sm:h-20"
          />
          <Swords className="w-4 h-4 sm:w-6 sm:h-6 text-rose-400 shrink-0 animate-pulse" />
          <CharacterRigSvg
            template={rival.template}
            primaryColor={rival.primaryColor}
            secondaryColor={rival.secondaryColor}
            accentColor={rival.accentColor}
            facing="left"
            customAvatarUrl={rival.customAvatarUrl}
            live={false}
            className="w-11 h-11 sm:w-16 sm:h-16"
          />
        </div>

        <div className="min-w-0 flex-1 px-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-mono text-[10px] sm:text-xs font-extrabold bg-white/15 border border-white/20 px-2 py-0.5 rounded-full tabular-nums whitespace-nowrap">
              {saveState.completedUnitIds.length}/24<span className="hidden sm:inline"> chặng</span> • {totalStarsInHero}⭐
            </span>
          </div>
          <h2 className="font-display text-sm sm:text-xl font-bold leading-tight truncate mt-0.5">
            {hero.nameEn} <span className="text-amber-300">vs</span>{' '}
            <span className="text-rose-300">{rival.nameEn}</span>
          </h2>
        </div>

        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(520);
            onOpenRoster();
          }}
          className="shrink-0 min-h-[44px] px-3 sm:px-4 py-2 rounded-2xl bg-white/15 hover:bg-white/25 border-2 border-amber-300/70 text-white font-black text-xs sm:text-sm inline-flex items-center gap-1.5 cursor-pointer active:scale-95"
        >
          <Users className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="sm:hidden">Đổi</span>
          <span className="hidden sm:inline">Đổi Nhân Vật</span>
        </button>
      </section>

      {/* 2. 6-World Icon Tabs */}
      <section className="shrink-0 flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-0.5">
        {CURRICULUM_WORLDS.map((world) => {
          const isSelected = activeWorld.id === world.id;
          return (
            <button
              key={world.id}
              type="button"
              onClick={() => handleSelectWorld(world.id)}
              className={`min-h-[44px] px-3 sm:px-3.5 py-1.5 rounded-2xl border-2 flex items-center gap-1.5 whitespace-nowrap shrink-0 font-black text-xs sm:text-sm cursor-pointer transition-all active:scale-95 ${
                isSelected
                  ? 'bg-slate-900 text-amber-300 border-amber-400 shadow-md'
                  : 'bg-white text-slate-800 border-amber-200 hover:border-amber-400'
              }`}
            >
              <span className="text-base sm:text-lg leading-none">{world.badgeEmoji}</span>
              <span>Đảo {world.id}</span>
              <span className="hidden md:inline text-[11px] opacity-80">• {world.ageBand}</span>
            </button>
          );
        })}
      </section>

      {/* 3. Full-Screen Paged Mission Stage Card (1 Unit Per Screen, Swipeable) */}
      <section
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartXRef.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartXRef.current;
          touchStartXRef.current = null;
          if (Math.abs(dx) > 40) {
            handleStepUnit(dx < 0 ? 1 : -1);
          }
        }}
        className="relative flex-1 min-h-0 rounded-3xl border-4 border-amber-300 shadow-xl overflow-hidden flex flex-col justify-between bg-amber-50"
      >
        <img
          src={backdropUrl}
          alt={activeWorld.titleVi}
          className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none"
        />
        <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-between p-2.5 sm:p-4 bg-gradient-to-b from-white/45 via-amber-50/35 to-white/70">
          {/* Card Top Bar: World Pill + 4 Unit Pager Dots */}
          <div className="shrink-0 flex items-center justify-between gap-2 flex-wrap bg-white/85 backdrop-blur-[2px] px-2.5 py-1.5 rounded-2xl border border-amber-200/80 shadow-sm">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="px-2.5 py-1 rounded-full bg-amber-200 text-amber-950 font-black text-xs shrink-0">
                {activeWorld.badgeEmoji} {activeWorld.ageBand}
              </span>
              <span className="font-display font-bold text-xs sm:text-base text-slate-900 truncate">
                {activeWorld.titleVi}
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {worldUnits.map((u, idx) => {
                const active = idx === safeUnitIdx;
                const uDone = saveState.completedUnitIds.includes(u.id);
                return (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => {
                      audioService.playPopSound(500);
                      setUnitIdx(idx);
                    }}
                    className={`min-w-[40px] min-h-[38px] px-2.5 rounded-xl font-black text-xs border-2 cursor-pointer transition-all inline-flex items-center justify-center gap-1 ${
                      active
                        ? 'bg-slate-900 text-amber-300 border-slate-900 shadow-sm'
                        : uDone
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                        : 'bg-white text-slate-700 border-amber-200'
                    }`}
                  >
                    <span>{u.unitNumber}</span>
                    {uDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card Center: Unit Title + 3 Visual Preview Tiles with Prev/Next Arrows */}
          <div className="flex-1 min-h-0 flex items-center justify-between gap-1.5 sm:gap-4 py-1">
            <button
              type="button"
              onClick={() => handleStepUnit(-1)}
              aria-label="Bài trước"
              className="shrink-0 min-w-[44px] min-h-[44px] sm:min-w-[52px] sm:min-h-[52px] rounded-2xl bg-white/95 hover:bg-amber-100 border-2 border-amber-300 text-slate-900 flex items-center justify-center shadow-md cursor-pointer active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 min-w-0 h-full flex flex-col items-center justify-center text-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <span className="font-mono text-xs sm:text-sm font-black px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200">
                  Bài {currentUnit.worldId}.{currentUnit.unitNumber}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-amber-300 text-xs sm:text-sm font-mono font-bold text-amber-800 tabular-nums">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  {bestStars}/3 {isDone ? '✓' : ''}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-3xl font-extrabold text-slate-950 leading-tight line-clamp-2 max-w-2xl bg-white/85 backdrop-blur-[2px] px-3.5 py-1.5 rounded-2xl border border-amber-200/70 shadow-sm">
                {currentUnit.titleVi}
              </h3>

              <div className="w-full max-w-2xl grid grid-cols-3 gap-2 sm:gap-3">
                {currentUnit.cutsceneSlides.slice(0, 3).map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => audioService.speakEnglish(s.wordOrPhraseEn, 0.9)}
                    className="min-h-[82px] sm:min-h-[112px] rounded-2xl bg-white/95 hover:bg-amber-50 border-2 border-amber-300 shadow-sm p-2 flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95 transition-transform"
                  >
                    <span className="text-3xl sm:text-5xl leading-none">{s.emoji}</span>
                    <span className="font-display text-xs sm:text-base font-black text-slate-950 truncate w-full text-center flex items-center justify-center gap-1">
                      <Volume2 className="w-3 h-3 text-amber-600 shrink-0 hidden sm:inline" />
                      <span className="truncate">{s.wordOrPhraseEn}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleStepUnit(1)}
              aria-label="Bài tiếp theo"
              className="shrink-0 min-w-[44px] min-h-[44px] sm:min-w-[52px] sm:min-h-[52px] rounded-2xl bg-white/95 hover:bg-amber-100 border-2 border-amber-300 text-slate-900 flex items-center justify-center shadow-md cursor-pointer active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Card Bottom Action CTAs */}
          <div className="shrink-0 flex gap-2 sm:gap-3 pt-1">
            <button
              type="button"
              onClick={() => {
                audioService.playMagicChime();
                onStartUnitCutscene(currentUnit);
              }}
              className="flex-1 min-h-[54px] px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:brightness-105 text-slate-950 font-black text-sm sm:text-lg shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Play className="w-5 h-5 fill-current shrink-0" />
              <span>CHƠI NGAY</span>
            </button>

            <button
              type="button"
              onClick={() => {
                audioService.playPopSound(560);
                onStartUnitBattle(currentUnit);
              }}
              className="min-h-[54px] px-4 sm:px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-black text-sm sm:text-base shadow-lg inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
              title="Vào thẳng Sân Khấu Chiến Đấu"
            >
              <Swords className="w-5 h-5 shrink-0" />
              <span>Đấu Ngay</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
