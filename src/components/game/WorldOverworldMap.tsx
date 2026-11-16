import React, { useMemo, useState } from 'react';
import {
  CurriculumUnit,
  HeroCharacter,
  HeroSaveState,
  RivalCharacter,
  StageNodeType,
} from '../../types/heroGame';
import {
  ALL_CURRICULUM_UNITS,
  CURRICULUM_WORLDS,
  getNextRecommendedUnit,
  getUnitsByWorld,
} from '../../data/curriculumWorlds';
import { WORLD_BACKDROP_ASSETS } from '../../data/characterSpriteManifest';
import { CharacterRigSvg } from '../hero/CharacterRigSvg';
import { audioService } from '../../services/audioService';
import { Check, Play, Star, Swords, Volume2 } from 'lucide-react';

interface WorldOverworldMapProps {
  saveState: HeroSaveState;
  hero: HeroCharacter;
  rival: RivalCharacter;
  onStartUnitCutscene: (unit: CurriculumUnit) => void;
  onStartUnitBattle: (unit: CurriculumUnit) => void;
  onOpenPortal: (portal: 'dojo' | 'stories' | 'ai_chat') => void;
}

const NODE_BADGE: Record<StageNodeType, { icon: string; label: string }> = {
  hunt: { icon: '🎯', label: 'Săn Mục Tiêu' },
  forge: { icon: '⚒️', label: 'Lò Rèn Âm' },
  mystery_chest: { icon: '🧰', label: 'Rương Thính Âm' },
  rune_trace: { icon: '✍️', label: 'Vẽ Tuyệt Kỹ' },
  boss_raid: { icon: '👑', label: 'Đấu Trùm' },
};

export const WorldOverworldMap: React.FC<WorldOverworldMapProps> = ({
  saveState,
  hero,
  rival,
  onStartUnitCutscene,
  onStartUnitBattle,
  onOpenPortal,
}) => {
  const recommended = useMemo(
    () => getNextRecommendedUnit(saveState.completedUnitIds),
    [saveState.completedUnitIds]
  );

  const [selectedWorldId, setSelectedWorldId] = useState<number>(recommended.worldId);
  const worldUnits = useMemo(() => getUnitsByWorld(selectedWorldId), [selectedWorldId]);
  const [selectedUnitId, setSelectedUnitId] = useState<string>(recommended.id);

  const activeWorld =
    CURRICULUM_WORLDS.find((w) => w.id === selectedWorldId) || CURRICULUM_WORLDS[0];
  const currentUnit =
    worldUnits.find((u) => u.id === selectedUnitId) ||
    worldUnits.find((u) => !saveState.completedUnitIds.includes(u.id)) ||
    worldUnits[0] ||
    ALL_CURRICULUM_UNITS[0];

  const handleSelectWorld = (worldId: number) => {
    audioService.playPopSound(520);
    setSelectedWorldId(worldId);
    const units = getUnitsByWorld(worldId);
    const nextIncomplete = units.find((u) => !saveState.completedUnitIds.includes(u.id)) || units[0];
    if (nextIncomplete) {
      setSelectedUnitId(nextIncomplete.id);
    }
  };

  const handleSelectNode = (u: CurriculumUnit) => {
    audioService.playPopSound(560);
    setSelectedUnitId(u.id);
    const previewEn = u.cutsceneSlides[0]?.wordOrPhraseEn;
    if (previewEn) {
      audioService.speakEnglish(previewEn, 1.0, 'teacher');
    }
  };

  const backdropUrl = WORLD_BACKDROP_ASSETS[activeWorld.id] || WORLD_BACKDROP_ASSETS[1];
  const rowTop = worldUnits.slice(0, 4);
  const rowBottomSnake = [...worldUnits.slice(4, 8)].reverse(); // 8 <- 7 <- 6 <- 5
  const currentBadge = NODE_BADGE[currentUnit.nodeType || 'hunt'];
  const currentStars = saveState.unitStars[currentUnit.id] || 0;
  const totalWorldStars = worldUnits.reduce((acc, u) => acc + (saveState.unitStars[u.id] || 0), 0);

  const renderNode = (u: CurriculumUnit) => {
    const selected = u.id === currentUnit.id;
    const stars = saveState.unitStars[u.id] || 0;
    const done = saveState.completedUnitIds.includes(u.id);
    const meta = NODE_BADGE[u.nodeType || 'hunt'];
    const isBossNode = u.unitNumber === 8;

    return (
      <div key={u.id} className="relative flex flex-col items-center justify-center">
        {/* Hero Avatar Standing on Selected Node */}
        {selected && (
          <div className="absolute -top-11 sm:-top-14 z-20 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] animate-bounce">
            <CharacterRigSvg
              template={hero.template}
              primaryColor={hero.primaryColor}
              secondaryColor={hero.secondaryColor}
              accentColor={hero.accentColor}
              pose="idle"
              customAvatarUrl={hero.customAvatarUrl}
              live={false}
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
          </div>
        )}

        {/* Boss Guard Badge on Node 8 when Hero is elsewhere */}
        {isBossNode && !selected && (
          <div className="absolute -top-8 sm:-top-10 z-10 pointer-events-none opacity-95">
            <CharacterRigSvg
              template={rival.template}
              primaryColor={rival.primaryColor}
              secondaryColor={rival.secondaryColor}
              accentColor={rival.accentColor}
              facing="left"
              customAvatarUrl={rival.customAvatarUrl}
              live={false}
              className="w-9 h-9 sm:w-12 sm:h-12"
            />
          </div>
        )}

        <button
          type="button"
          data-testid={`map-node-${u.id}`}
          onClick={() => handleSelectNode(u)}
          aria-label={`Chặng ${u.worldId}.${u.unitNumber}: ${u.titleVi}`}
          className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 flex flex-col items-center justify-center shadow-2xl transition-all cursor-pointer active:scale-90 ${
            selected
              ? 'bg-gradient-to-b from-amber-300 to-orange-500 text-slate-950 border-white ring-4 ring-amber-400/60 scale-110 z-10'
              : done
              ? 'bg-gradient-to-b from-emerald-400 to-teal-600 text-white border-emerald-200'
              : isBossNode
              ? 'bg-gradient-to-b from-rose-600 to-purple-800 text-white border-amber-300'
              : 'bg-slate-900/90 hover:bg-slate-800 text-white border-cyan-300/80'
          }`}
        >
          <span className="text-base sm:text-xl leading-none">{meta.icon}</span>
          <span className="font-mono text-[11px] sm:text-xs font-black leading-tight mt-0.5">
            {u.worldId}.{u.unitNumber}
          </span>
          {done && (
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-slate-950 text-slate-950 flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </span>
          )}
        </button>

        {/* Mini 3-Star Row under node */}
        <div className="mt-1 flex items-center gap-0.5 bg-slate-950/70 px-1.5 py-0.5 rounded-full">
          {[1, 2, 3].map((n) => (
            <Star
              key={n}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                n <= stars ? 'fill-amber-400 text-amber-400' : 'text-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex-1 min-h-0 flex flex-col justify-between overflow-hidden select-none">
      {/* Full-Bleed Animated World Canvas Backdrop */}
      <img
        src={backdropUrl}
        alt={activeWorld.titleVi}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/20 to-slate-950/85 pointer-events-none" />

      {/* 1. World Selector Medallions Strip (clears floating GameHudBar cleanly) */}
      <div className="relative z-10 shrink-0 px-2.5 sm:px-5 pt-[58px] sm:pt-[74px]">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {CURRICULUM_WORLDS.map((w) => {
            const wUnits = getUnitsByWorld(w.id);
            const wDone = wUnits.filter((u) => saveState.completedUnitIds.includes(u.id)).length;
            const active = w.id === activeWorld.id;
            return (
              <button
                key={w.id}
                type="button"
                onClick={() => handleSelectWorld(w.id)}
                className={`shrink-0 min-h-[42px] px-3 py-1.5 rounded-2xl border-2 text-xs font-black flex items-center gap-1.5 cursor-pointer transition-all backdrop-blur-md ${
                  active
                    ? 'bg-amber-400 text-slate-950 border-white shadow-lg scale-[1.03]'
                    : 'bg-slate-950/75 hover:bg-slate-900/90 text-white border-white/25'
                }`}
              >
                <span className="text-base leading-none">{w.badgeEmoji}</span>
                <span>Đảo {w.id}</span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full tabular-nums ${
                    active ? 'bg-slate-950/15 text-slate-950' : 'bg-white/15 text-amber-300'
                  }`}
                >
                  {wDone}/{wUnits.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Winding 8-Node Adventure Trail Stage (Zero Scroll) */}
      <div className="relative z-10 flex-1 min-h-0 max-w-4xl w-full mx-auto px-3 sm:px-8 flex flex-col justify-center">
        {/* Compact World Header Plaque */}
        <div className="self-center mb-3 sm:mb-4 px-3.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-amber-300/50 text-white flex items-center gap-2 shadow-lg max-w-full">
          <span className="text-sm">{activeWorld.badgeEmoji}</span>
          <span className="font-display text-xs sm:text-sm font-bold truncate">
            {activeWorld.titleVi}
          </span>
          <span className="font-mono text-[11px] font-black text-amber-300 shrink-0 tabular-nums">
            {totalWorldStars}/24 ⭐
          </span>
        </div>

        {/* 2-Row Winding S-Curve Grid with Glowing Path Connector */}
        <div className="relative py-4 sm:py-6 flex flex-col gap-7 sm:gap-10">
          <svg
            viewBox="0 0 800 220"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-75"
            aria-hidden="true"
          >
            <path
              d="M 100 45 L 700 45 C 770 45, 770 175, 700 175 L 100 175"
              fill="none"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 100 45 L 700 45 C 770 45, 770 175, 700 175 L 100 175"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="5"
              strokeDasharray="14 10"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-4 items-center">
            {rowTop.map(renderNode)}
          </div>
          <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-4 items-center">
            {rowBottomSnake.map(renderNode)}
          </div>
        </div>
      </div>

      {/* 3. Bottom Game Mission Launch Dock + 4 Building Portals */}
      <div className="relative z-20 shrink-0 px-2.5 sm:px-6 pb-2.5 sm:pb-4 max-w-4xl w-full mx-auto flex flex-col gap-2">
        {/* Selected Node Action Card */}
        <div className="bg-slate-950/90 backdrop-blur-md border-2 border-amber-400/90 rounded-3xl p-2.5 sm:p-3.5 text-white shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full bg-indigo-500 text-white">
                Chặng {currentUnit.worldId}.{currentUnit.unitNumber}
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-amber-300">
                {currentBadge.icon} {currentBadge.label}
              </span>
              {currentStars > 0 && (
                <span className="font-mono text-[11px] font-black text-amber-300 tabular-nums">
                  {currentStars}/3⭐
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <h2 className="font-display text-base sm:text-xl font-bold text-white truncate">
                {currentUnit.titleVi}
              </h2>
              {currentUnit.cutsceneSlides[0] && (
                <button
                  type="button"
                  onClick={() =>
                    audioService.speakEnglish(
                      currentUnit.cutsceneSlides[0].wordOrPhraseEn,
                      1.0,
                      'teacher'
                    )
                  }
                  aria-label="Nghe mẫu từ khóa"
                  className="shrink-0 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 text-amber-300 flex items-center justify-center cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                audioService.playMagicChime();
                onStartUnitCutscene(currentUnit);
              }}
              className="flex-1 sm:flex-initial min-h-[48px] px-4 sm:px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:brightness-105 text-slate-950 font-black text-sm sm:text-base shadow-lg inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Play className="w-4 h-4 fill-current shrink-0" />
              <span>CHƠI NGAY</span>
            </button>
            <button
              type="button"
              onClick={() => {
                audioService.playPopSound(560);
                onStartUnitBattle(currentUnit);
              }}
              className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 border border-cyan-300/60 text-white font-black text-sm inline-flex items-center justify-center gap-1.5 shadow-lg cursor-pointer active:scale-95 shrink-0"
            >
              <Swords className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Đấu Ngay</span>
            </button>
          </div>
        </div>

        {/* 4 Illustrated Game Building Portals */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
          <div className="min-h-[46px] rounded-2xl bg-amber-400 text-slate-950 font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-md border-2 border-white">
            <span className="text-base leading-none">🗺️</span>
            <span>Bản Đồ</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenPortal('dojo')}
            className="min-h-[46px] rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-md border-2 border-purple-400/70 cursor-pointer active:scale-95"
          >
            <span className="text-base leading-none">🏰</span>
            <span>Đấu Trường</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenPortal('stories')}
            className="min-h-[46px] rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-md border-2 border-sky-400/70 cursor-pointer active:scale-95"
          >
            <span className="text-base leading-none">🎬</span>
            <span>Rạp Truyện</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenPortal('ai_chat')}
            className="min-h-[46px] rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-black text-[11px] sm:text-xs flex items-center justify-center gap-1 shadow-md border-2 border-emerald-400/70 cursor-pointer active:scale-95"
          >
            <span className="text-base leading-none">📡</span>
            <span>Bộ Đàm</span>
          </button>
        </div>
      </div>
    </div>
  );
};
