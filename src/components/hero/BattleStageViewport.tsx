import React from 'react';
import {
  CombatMode,
  CurriculumUnit,
  DialogueChallenge,
  HeroCharacter,
  QaChoiceOption,
  RivalCharacter,
  StageTargetOption,
  TargetHuntRound,
} from '../../types/heroGame';
import { VoiceDirectorPhase } from '../../hooks/useVoiceDirector';
import { WORLD_BACKDROP_ASSETS } from '../../data/characterSpriteManifest';
import { CharacterRigSvg } from './CharacterRigSvg';
import { BattleLetterTraceOverlay } from './BattleLetterTraceOverlay';
import { QaDuelStageCard } from './QaDuelStageCard';
import { getWordVisual } from '../../services/imageService';
import { Pause, RotateCcw, Sparkles, Trophy, Volume2 } from 'lucide-react';

export const LANDSCAPE_TARGET_SLOTS = [
  { x: 74, y: 26 },
  { x: 78, y: 53 },
  { x: 74, y: 79 },
];

export const PORTRAIT_TARGET_SLOTS = [
  { x: 18, y: 27 },
  { x: 50, y: 44 },
  { x: 82, y: 27 },
];

export const STAGE_TARGET_SLOTS = LANDSCAPE_TARGET_SLOTS;

export function getStageLayoutCoords(isPortrait: boolean) {
  return {
    heroHome: isPortrait ? { x: 50, y: 74 } : { x: 22, y: 58 },
    bossPos: isPortrait ? { x: 50, y: 31 } : { x: 74, y: 55 },
    targetSlots: isPortrait ? PORTRAIT_TARGET_SLOTS : LANDSCAPE_TARGET_SLOTS,
  };
}

const WORLD_STAGE_THEMES: Record<number, { sky: string; ground: string; badge: string }> = {
  1: { sky: 'from-sky-400 via-sky-200 to-amber-100', ground: 'from-emerald-500/40 to-transparent', badge: '🌈 Thảo Nguyên Nắng Ấm' },
  2: { sky: 'from-emerald-400 via-teal-200 to-lime-100', ground: 'from-teal-700/35 to-transparent', badge: '🌲 Rừng Âm Vị A–Z' },
  3: { sky: 'from-amber-400 via-orange-200 to-yellow-100', ground: 'from-orange-700/35 to-transparent', badge: '🏔️ Hẻm Núi Ghép Vần' },
  4: { sky: 'from-indigo-400 via-sky-200 to-emerald-100', ground: 'from-emerald-600/35 to-transparent', badge: '🏙️ Công Viên Thành Phố' },
  5: { sky: 'from-rose-400 via-amber-200 to-sky-100', ground: 'from-cyan-700/35 to-transparent', badge: '⛵ Cảng Bầu Trời' },
  6: { sky: 'from-slate-900 via-indigo-900 to-violet-800', ground: 'from-cyan-500/25 to-transparent', badge: '🌌 Đấu Trường Ngân Hà' },
};

interface BattleStageViewportProps {
  stageRef: React.RefObject<HTMLDivElement>;
  unit: CurriculumUnit;
  hero: HeroCharacter;
  rival: RivalCharacter;
  mode: CombatMode;
  isPortrait: boolean;
  heroPos: { x: number; y: number };
  beamTargetPos: { x: number; y: number };
  heroPose: 'idle' | 'move' | 'attack' | 'victory';
  rivalPose: 'idle' | 'hit';
  directorPhase: VoiceDirectorPhase;
  showGuidingHand: boolean;
  isListening: boolean;
  micVolume: number;
  beamActive: boolean;
  calloutBanner: string;
  earnedStars: number;
  victoryCountdownSec: number | null;
  currentHunt?: TargetHuntRound;
  currentEcho?: DialogueChallenge;
  selectedQaChoiceId: string | null;
  wrongQaChoiceId: string | null;
  onStageTap: (e: React.PointerEvent<HTMLDivElement>) => void;
  onTapTargetOption: (slot: { x: number; y: number }, opt: StageTargetOption) => void;
  onSelectQaChoice: (choice: QaChoiceOption) => void;
  onTraceComplete: () => void;
  onTapRival: () => void;
  onReplay: () => void;
  onNextUnit: () => void;
  onCancelVictoryCountdown: () => void;
}

export const BattleStageViewport: React.FC<BattleStageViewportProps> = ({
  stageRef,
  unit,
  hero,
  rival,
  mode,
  isPortrait,
  heroPos,
  beamTargetPos,
  heroPose,
  rivalPose,
  directorPhase,
  showGuidingHand,
  isListening,
  micVolume,
  beamActive,
  calloutBanner,
  earnedStars,
  victoryCountdownSec,
  currentHunt,
  currentEcho,
  selectedQaChoiceId,
  wrongQaChoiceId,
  onStageTap,
  onTapTargetOption,
  onSelectQaChoice,
  onTraceComplete,
  onTapRival,
  onReplay,
  onNextUnit,
  onCancelVictoryCountdown,
}) => {
  const theme = WORLD_STAGE_THEMES[unit.worldId] || WORLD_STAGE_THEMES[1];
  const worldBackdropUrl = WORLD_BACKDROP_ASSETS[unit.worldId] || WORLD_BACKDROP_ASSETS[1];
  const { bossPos, targetSlots } = getStageLayoutCoords(isPortrait);
  const isQaRound = mode === 'echo_duel' && currentEcho?.interactionType === 'qa';

  return (
    <div
      ref={stageRef}
      onPointerDown={onStageTap}
      className={`relative flex-1 min-h-0 w-full overflow-hidden cursor-crosshair bg-gradient-to-b ${theme.sky}`}
    >
      {/* 2D AI Anime Scenic Backdrop per Curriculum World */}
      <img
        src={worldBackdropUrl}
        alt={theme.badge}
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none select-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-transparent to-slate-950/20 pointer-events-none" />

      {/* World Theme Chip */}
      <div className="hidden md:block absolute top-3 left-3 z-10 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-white/90 border border-amber-300 text-xs font-extrabold text-slate-900 shadow-sm">
          {theme.badge}
        </span>
      </div>

      {/* Top Objective Instruction */}
      <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-[94%] max-w-xl">
        <div className="bg-white/95 backdrop-blur-sm border-2 border-amber-400 rounded-2xl px-3 py-1 sm:px-4 sm:py-1.5 shadow-lg text-center">
          <span className="font-display text-xs sm:text-base font-bold text-slate-950 block truncate sm:whitespace-normal">
            {mode === 'target_hunt'
              ? `🔊 Nghe & nhắc lại: "${currentHunt?.promptAudioEn || ''}" — ${currentHunt?.instructionVi || ''}`
              : mode === 'letter_trace'
              ? `✍️ Tô nét chữ "${unit.letterTraceRound?.displayChar || ''}" theo chấm xanh để nạp năng lượng!`
              : isQaRound
              ? `💬 Chọn thẻ trả lời đúng hoặc nói to đáp án với ${rival.nameVi}!`
              : `Nói câu trên đầu ${rival.nameVi} để tung chiêu!`}
          </span>
        </div>
      </div>

      {/* Controllable Hero Character */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none transition-all duration-300 ease-out ${
          mode === 'letter_trace' && isPortrait ? 'hidden' : ''
        }`}
        style={{
          left: mode === 'letter_trace' ? '16%' : isQaRound && isPortrait ? '18%' : `${heroPos.x}%`,
          top: isQaRound && isPortrait ? '28%' : `${heroPos.y}%`,
        }}
      >
        {calloutBanner && (
          <div className="mb-1 px-3 py-0.5 rounded-full bg-amber-400 text-slate-950 font-display font-bold text-xs sm:text-sm shadow-lg whitespace-nowrap animate-speech-pop text-center">
            ⚡ {calloutBanner}
          </div>
        )}
        <div
          className="rounded-full transition-all"
          style={{
            boxShadow:
              isListening && micVolume > 10 ? `0 0 ${14 + micVolume / 3}px ${hero.accentColor}` : undefined,
          }}
        >
          <CharacterRigSvg
            template={hero.template}
            primaryColor={hero.primaryColor}
            secondaryColor={hero.secondaryColor}
            accentColor={hero.accentColor}
            pose={heroPose}
            isSpeaking={directorPhase === 'coop_assist' || (isListening && micVolume > 16)}
            customAvatarUrl={hero.customAvatarUrl}
            className="w-32 h-32 sm:w-44 sm:h-44"
          />
        </div>
      </div>

      {/* Omnidirectional Attack Beam Slash VFX (works in both Portrait & Landscape) */}
      {beamActive && (
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full z-30 pointer-events-none"
        >
          <line
            x1={heroPos.x}
            y1={heroPos.y}
            x2={beamTargetPos.x}
            y2={beamTargetPos.y}
            stroke={hero.accentColor}
            strokeWidth="4.2"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1={heroPos.x}
            y1={heroPos.y}
            x2={beamTargetPos.x}
            y2={beamTargetPos.y}
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* PHASE 1: Opponents Carrying Picture & Word Cards */}
      {mode === 'target_hunt' &&
        currentHunt?.options.map((opt, idx) => {
          const slot = targetSlots[idx % targetSlots.length];
          const vis = getWordVisual(opt.visualWordKey || opt.phonemeOrWord);
          const highlighted = showGuidingHand && opt.isCorrect;

          return (
            <div
              key={opt.id}
              style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 ${
                highlighted ? 'z-20' : 'z-10'
              }`}
            >
              <button
                type="button"
                onPointerDown={(e) => {
                  e.stopPropagation();
                  onTapTargetOption(slot, opt);
                }}
                className={`relative rounded-2xl border-2 shadow-xl cursor-pointer active:scale-95 transition-all ${
                  highlighted
                    ? 'bg-amber-50 border-amber-500 ring-4 ring-amber-400/80 scale-105'
                    : 'bg-white/95 hover:bg-amber-50 border-indigo-500 animate-float'
                } ${
                  isPortrait
                    ? 'w-[100px] min-h-[96px] p-1.5 flex flex-col items-center text-center gap-1'
                    : 'flex flex-row items-center gap-2.5 px-3 py-2 max-w-[260px]'
                }`}
              >
                {highlighted && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] whitespace-nowrap shadow-md animate-bounce">
                    👆 Nói / Chạm!
                  </span>
                )}

                <img
                  src={vis.url}
                  alt={vis.alt}
                  className={
                    isPortrait
                      ? 'w-11 h-11 rounded-xl object-cover border border-amber-200 shrink-0'
                      : 'w-12 h-12 rounded-xl object-cover border border-amber-200 shrink-0'
                  }
                />

                <div className={isPortrait ? 'w-full min-w-0' : 'text-left min-w-0'}>
                  <div className="font-display font-bold text-xs sm:text-base text-slate-950 leading-tight truncate">
                    {opt.emoji} {opt.labelEn}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-indigo-700 truncate">
                    {opt.subLabelVi}
                  </div>
                </div>

                {!isPortrait && (
                  <CharacterRigSvg
                    template={rival.template}
                    primaryColor={rival.primaryColor}
                    secondaryColor={rival.secondaryColor}
                    accentColor={rival.accentColor}
                    facing="left"
                    customAvatarUrl={rival.customAvatarUrl}
                    live={false}
                    className="w-14 h-14 shrink-0"
                  />
                )}
              </button>
            </div>
          );
        })}

      {/* ACT 2: Interactive Battle Letter Tracing */}
      {mode === 'letter_trace' && unit.letterTraceRound && (
        <div className="absolute inset-x-2 top-11 sm:top-14 bottom-2 z-30 flex items-center justify-center pointer-events-none">
          <BattleLetterTraceOverlay
            trace={unit.letterTraceRound}
            heroNameVi={hero.nameVi}
            onTraceComplete={onTraceComplete}
          />
        </div>
      )}

      {/* ACT 3: Same-Universe Boss (Standard 1:1 Echo OR Interactive 3-Choice Q&A) */}
      {mode === 'echo_duel' && currentEcho && isQaRound && (
        <>
          <div
            onPointerDown={(e) => {
              e.stopPropagation();
              onTapRival();
            }}
            style={isPortrait ? { left: '68%', top: '26%' } : { left: `${bossPos.x}%`, top: '31%' }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer"
          >
            <CharacterRigSvg
              template={rival.template}
              primaryColor={rival.primaryColor}
              secondaryColor={rival.secondaryColor}
              accentColor={rival.accentColor}
              pose={rivalPose}
              isSpeaking={directorPhase === 'model_speaking'}
              facing="left"
              customAvatarUrl={rival.customAvatarUrl}
              className={isPortrait ? 'w-24 h-24' : 'w-36 h-36'}
            />
          </div>
          <div className="absolute inset-x-0 bottom-2 sm:bottom-4 z-30 flex justify-center pointer-events-none">
            <QaDuelStageCard
              challenge={currentEcho}
              rivalNameVi={rival.nameVi}
              selectedChoiceId={selectedQaChoiceId}
              wrongChoiceId={wrongQaChoiceId}
              showGuidingHand={showGuidingHand}
              isListening={isListening}
              onSpeakQuestion={onTapRival}
              onSelectChoice={onSelectQaChoice}
            />
          </div>
        </>
      )}

      {mode === 'echo_duel' && currentEcho && !isQaRound && (
        <div
          onPointerDown={(e) => {
            e.stopPropagation();
            onTapRival();
          }}
          style={{ left: `${bossPos.x}%`, top: `${bossPos.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer w-[84vw] max-w-xs"
        >
          <div
            className={`mb-1.5 bg-white border-4 rounded-3xl px-3.5 py-2 shadow-2xl text-center animate-speech-pop transition-all ${
              showGuidingHand ? 'border-amber-500 ring-4 ring-amber-300/80' : 'border-rose-500'
            }`}
          >
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-xl sm:text-2xl">{currentEcho.emoji}</span>
              <p className="font-display text-sm sm:text-xl font-bold text-slate-950 leading-tight">
                “{currentEcho.speakerPromptEn}”
              </p>
              <Volume2 className="w-4 h-4 text-rose-500 shrink-0" />
            </div>
            <p className="text-[11px] sm:text-xs font-extrabold text-rose-700 mt-0.5">
              {showGuidingHand ? '👆 ' : ''}Bé nói: “{currentEcho.childTargetEn}”
            </p>
          </div>

          <CharacterRigSvg
            template={rival.template}
            primaryColor={rival.primaryColor}
            secondaryColor={rival.secondaryColor}
            accentColor={rival.accentColor}
            pose={rivalPose}
            isSpeaking={directorPhase === 'model_speaking'}
            facing="left"
            customAvatarUrl={rival.customAvatarUrl}
            className={isPortrait ? 'w-32 h-32' : 'w-48 h-48'}
          />
        </div>
      )}

      {/* VICTORY OVERLAY WITH AUTO-NEXT COUNTDOWN */}
      {mode === 'victory' && (
        <div
          className="absolute inset-0 z-40 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-3xl border-4 border-amber-400 p-5 sm:p-6 max-w-md w-full text-center space-y-3 shadow-2xl animate-speech-pop">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 border-4 border-amber-400 flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7 text-amber-500" />
              </div>
              <CharacterRigSvg
                template={hero.template}
                primaryColor={hero.primaryColor}
                secondaryColor={hero.secondaryColor}
                accentColor={hero.accentColor}
                pose="victory"
                customAvatarUrl={hero.customAvatarUrl}
                className="w-24 h-24"
              />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-950">
              Hoan Hô! {hero.nameVi} Chiến Thắng!
            </h3>
            <p className="text-sm font-bold text-slate-700">
              Bé đã hoàn thành “{unit.titleVi}” và nhận{' '}
              <span className="text-amber-600 font-black">+{Math.max(2, earnedStars)} ⭐</span>!
            </p>
            <div className="flex items-center justify-center gap-2 text-2xl">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>⭐⭐⭐</span>
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>

            {victoryCountdownSec !== null && (
              <button
                type="button"
                onClick={onCancelVictoryCountdown}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs font-extrabold cursor-pointer"
              >
                <Pause className="w-3.5 h-3.5" />
                <span>Tự sang bài mới sau {victoryCountdownSec}s (Chạm để dừng)</span>
              </button>
            )}

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                type="button"
                onClick={onReplay}
                className="flex-1 py-3 px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Chơi Lại</span>
              </button>
              <button
                type="button"
                onClick={onNextUnit}
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-sm shadow-md cursor-pointer"
              >
                Bài Tiếp Theo {victoryCountdownSec !== null ? `(${victoryCountdownSec}s) ` : ''}→
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
