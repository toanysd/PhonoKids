import React, { useState } from 'react';
import { CombatMode, HeroCharacter, RivalCharacter } from '../../types/heroGame';
import { VoiceDirectorPhase } from '../../hooks/useVoiceDirector';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  Gamepad2,
  Heart,
  Mic,
  Users,
  Volume2,
  X,
  Zap,
} from 'lucide-react';

interface BattleTopBarProps {
  unitTitleVi: string;
  phaseLabelVi: string;
  hero: HeroCharacter;
  rival: RivalCharacter;
  heroHp: number;
  bossHp: number;
  starsEarned: number;
  toddlerMode: boolean;
  mode: CombatMode;
  hasLetterTrace: boolean;
  onSwitchMode: (mode: Exclude<CombatMode, 'victory'>) => void;
  onToggleToddlerMode: () => void;
  onOpenRoster: () => void;
  onBackToHub: () => void;
}

export const BattleTopBar: React.FC<BattleTopBarProps> = ({
  unitTitleVi,
  phaseLabelVi,
  hero,
  rival,
  heroHp,
  bossHp,
  starsEarned,
  toddlerMode,
  mode,
  hasLetterTrace,
  onSwitchMode,
  onToggleToddlerMode,
  onOpenRoster,
  onBackToHub,
}) => (
  <div className="bg-slate-900/95 text-white border-b-2 border-amber-400/60 shrink-0 z-20">
    <div className="px-2.5 sm:px-4 h-11 sm:h-12 flex items-center justify-between gap-2">
      {/* Left: Back & Desktop Unit Title */}
      <div className="flex items-center gap-2 shrink-0 min-w-0">
        <button
          type="button"
          onClick={onBackToHub}
          className="inline-flex items-center justify-center gap-1 min-w-[40px] min-h-[38px] px-2 sm:px-3 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold cursor-pointer"
          aria-label="Thoát về sảnh"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Thoát</span>
        </button>
        <div className="hidden md:block min-w-0">
          <div className="text-[10px] font-bold text-amber-300 leading-none truncate">{phaseLabelVi}</div>
          <div className="font-display text-sm font-bold text-white truncate max-w-[200px]">
            {unitTitleVi}
          </div>
        </div>
      </div>

      {/* Center: Compact Dual HP Strip */}
      <div className="flex items-center gap-2 sm:gap-3 flex-1 max-w-md justify-center min-w-0">
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-[10px] font-bold text-emerald-300 mb-0.5">
            <span className="truncate">{hero.nameEn}</span>
            <span className="font-mono tabular-nums ml-1">{heroHp}%</span>
          </div>
          <div className="h-2 sm:h-2.5 bg-slate-700 rounded-full overflow-hidden border border-emerald-400/50">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300"
              style={{ width: `${Math.max(0, Math.min(100, heroHp))}%` }}
            />
          </div>
        </div>

        <span className="font-display text-[11px] font-bold text-amber-400 shrink-0">VS</span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-[10px] font-bold text-rose-300 mb-0.5">
            <span className="truncate">{rival.nameEn}</span>
            <span className="font-mono tabular-nums ml-1">{bossHp}%</span>
          </div>
          <div className="h-2 sm:h-2.5 bg-slate-700 rounded-full overflow-hidden border border-rose-400/50">
            <div
              className="h-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-300"
              style={{ width: `${Math.max(0, Math.min(100, bossHp))}%` }}
            />
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <button
          type="button"
          onClick={onToggleToddlerMode}
          className={`px-2 py-1.5 rounded-xl text-[10px] font-extrabold border cursor-pointer hidden sm:inline-flex items-center ${
            toddlerMode
              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
              : 'bg-amber-500/20 border-amber-400 text-amber-200'
          }`}
          title="Chế độ Khích lệ bé 3 tuổi: nói gần đúng vẫn tung chiêu"
        >
          {toddlerMode ? '👶 Tự dẫn' : '🎯 Chuẩn'}
        </button>

        <button
          type="button"
          onClick={onOpenRoster}
          className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold cursor-pointer"
          aria-label="Đổi nhân vật"
        >
          <Users className="w-3.5 h-3.5" />
          <span className="hidden lg:inline">Đổi Tướng</span>
        </button>

        <div className="inline-flex items-center gap-0.5 px-2 py-1 rounded-xl bg-amber-400/20 border border-amber-300/40 font-mono text-[11px] font-bold text-amber-300 tabular-nums">
          <Heart className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span>+{starsEarned}⭐</span>
        </div>
      </div>
    </div>

    {/* Compact 3-Act Switcher Strip */}
    {mode !== 'victory' && (
      <div className="px-2 pb-1.5 flex items-center justify-center gap-1.5">
        <button
          type="button"
          data-testid="act-tab-target_hunt"
          onClick={() => onSwitchMode('target_hunt')}
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border transition-colors cursor-pointer whitespace-nowrap ${
            mode === 'target_hunt'
              ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
              : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
          }`}
        >
          1. Săn &amp; Nhắc
        </button>
        {hasLetterTrace && (
          <button
            type="button"
            data-testid="act-tab-letter_trace"
            onClick={() => onSwitchMode('letter_trace')}
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border transition-colors cursor-pointer whitespace-nowrap ${
              mode === 'letter_trace'
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
                : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
            }`}
          >
            2. Tô Chữ
          </button>
        )}
        <button
          type="button"
          data-testid="act-tab-echo_duel"
          onClick={() => onSwitchMode('echo_duel')}
          className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border transition-colors cursor-pointer whitespace-nowrap ${
            mode === 'echo_duel'
              ? 'bg-amber-400 text-slate-950 border-amber-300 shadow'
              : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
          }`}
        >
          {hasLetterTrace ? '3' : '2'}. Hỏi Đáp
        </button>
      </div>
    )}
  </div>
);

interface BattleBottomControlsProps {
  isListening: boolean;
  micVolume: number;
  directorPhase: VoiceDirectorPhase;
  targetSpeechEn: string;
  targetMeaningVi: string;
  interimText: string;
  feedbackText: string;
  visemeUrl?: string | null;
  onListenModel: () => void;
  onStartVoiceStrike: () => void;
  onTapBackupStrike: () => void;
  onDpadPress: (dx: number, dy: number) => void;
  onDpadRelease: () => void;
}

export const BattleBottomControls: React.FC<BattleBottomControlsProps> = ({
  isListening,
  micVolume,
  directorPhase,
  targetSpeechEn,
  targetMeaningVi,
  interimText,
  feedbackText,
  visemeUrl,
  onListenModel,
  onStartVoiceStrike,
  onTapBackupStrike,
  onDpadPress,
  onDpadRelease,
}) => {
  const [showMobileDpad, setShowMobileDpad] = useState(false);

  const bindMove = (dx: number, dy: number) => ({
    onPointerDown: (e: React.PointerEvent) => {
      e.preventDefault();
      onDpadPress(dx, dy);
    },
    onPointerUp: onDpadRelease,
    onPointerLeave: onDpadRelease,
    onPointerCancel: onDpadRelease,
  });

  const renderDpadGrid = (sizeClass: string) => (
    <div className="grid grid-cols-3 gap-1 w-28">
      <div />
      <button
        type="button"
        {...bindMove(0, -1)}
        className={`${sizeClass} rounded-lg bg-slate-700 hover:bg-slate-600 active:bg-amber-400 active:text-slate-950 flex items-center justify-center cursor-pointer`}
        aria-label="Đi lên"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
      <div />
      <button
        type="button"
        {...bindMove(-1, 0)}
        className={`${sizeClass} rounded-lg bg-slate-700 hover:bg-slate-600 active:bg-amber-400 active:text-slate-950 flex items-center justify-center cursor-pointer`}
        aria-label="Sang trái"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        {...bindMove(0, 1)}
        className={`${sizeClass} rounded-lg bg-slate-700 hover:bg-slate-600 active:bg-amber-400 active:text-slate-950 flex items-center justify-center cursor-pointer`}
        aria-label="Đi xuống"
      >
        <ArrowDown className="w-4 h-4" />
      </button>
      <button
        type="button"
        {...bindMove(1, 0)}
        className={`${sizeClass} rounded-lg bg-slate-700 hover:bg-slate-600 active:bg-amber-400 active:text-slate-950 flex items-center justify-center cursor-pointer`}
        aria-label="Sang phải"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="relative bg-slate-900/95 border-t-2 border-amber-400/60 px-2.5 sm:px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-2 sm:gap-3 shrink-0 z-20 text-white">
      {/* Floating Mobile D-Pad Popover when toggled */}
      {showMobileDpad && (
        <div className="md:hidden absolute bottom-20 left-3 z-30 bg-slate-900/95 border-2 border-amber-400 rounded-2xl p-2.5 shadow-2xl">
          <div className="flex items-center justify-between mb-1.5 text-[10px] font-bold text-amber-300">
            <span>Di chuyển tự do</span>
            <button
              type="button"
              onClick={() => setShowMobileDpad(false)}
              className="p-0.5 rounded bg-white/10"
              aria-label="Đóng phím di chuyển"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          {renderDpadGrid('h-9')}
        </div>
      )}

      {/* Left Zone: Desktop Full D-Pad + Keyboard Guide / Mobile Quick Listen & D-Pad Toggle */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <div className="hidden md:flex items-center gap-2.5">
          {renderDpadGrid('h-8')}
          <div className="hidden lg:block text-[10px] text-slate-300 max-w-[140px] leading-snug">
            <div>🕹️ WASD / Mũi tên • Chạm sân</div>
            <div>🎙️ Space: Bật Mic • R: Nghe</div>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={onListenModel}
            className="min-w-[46px] min-h-[48px] px-2.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs flex flex-col items-center justify-center cursor-pointer active:scale-95"
            aria-label="Nghe mẫu"
          >
            <Volume2 className="w-5 h-5" />
            <span className="text-[10px] leading-none mt-0.5">Nghe</span>
          </button>

          <button
            type="button"
            onClick={() => setShowMobileDpad((v) => !v)}
            className={`min-w-[42px] min-h-[48px] px-2 rounded-2xl border text-xs font-bold flex flex-col items-center justify-center cursor-pointer ${
              showMobileDpad
                ? 'bg-amber-400 text-slate-950 border-amber-300'
                : 'bg-slate-800 text-slate-200 border-slate-600'
            }`}
            aria-label="Bật phím di chuyển"
          >
            <Gamepad2 className="w-4 h-4" />
            <span className="text-[9px] leading-none mt-0.5">Đi</span>
          </button>
        </div>
      </div>

      {/* Center Heroic Voice Orb (ALWAYS visible & ready — zero deadlock) */}
      <div className="flex-1 flex flex-col items-center justify-center text-center min-w-0">
        <button
          type="button"
          onClick={onStartVoiceStrike}
          style={{
            boxShadow: isListening ? `0 0 ${16 + micVolume / 2}px rgba(244,63,94,0.8)` : undefined,
          }}
          className={`w-full max-w-sm min-h-[52px] sm:min-h-[56px] px-3 sm:px-5 py-1.5 rounded-full font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg ${
            isListening
              ? 'bg-gradient-to-r from-rose-500 to-orange-500 text-white ring-4 ring-rose-300/60 scale-[1.02]'
              : directorPhase === 'coop_assist'
              ? 'bg-gradient-to-r from-indigo-500 to-emerald-400 text-white'
              : 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 hover:brightness-105'
          }`}
        >
          {visemeUrl && (
            <img
              src={visemeUrl}
              alt="Khẩu hình miệng"
              className="w-9 h-9 rounded-full object-cover border-2 border-white/80 shrink-0 hidden sm:block"
            />
          )}
          <Mic className={`w-5 h-5 shrink-0 ${isListening ? 'animate-bounce' : ''}`} />
          <span className="truncate">
            {isListening
              ? `Đang nghe (${micVolume}%): "${targetSpeechEn}"`
              : `Nói Ngay: "${targetSpeechEn}"`}
          </span>
        </button>

        <div className="mt-1 text-[11px] font-bold truncate max-w-full px-1">
          {interimText ? (
            <span className="text-sky-300">🎙️ Nghe được: “{interimText}”</span>
          ) : feedbackText ? (
            <span className="text-emerald-300">{feedbackText}</span>
          ) : (
            <span className="text-slate-300">{targetMeaningVi}</span>
          )}
        </div>
      </div>

      {/* Right Zone: Desktop Model & Backup Strike / Mobile Instant Strike */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button
          type="button"
          onClick={onListenModel}
          className="hidden md:inline-flex items-center gap-1.5 px-3.5 min-h-[46px] rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span>Nghe Mẫu</span>
        </button>

        <button
          type="button"
          onClick={onTapBackupStrike}
          className="min-w-[48px] min-h-[48px] sm:min-h-[46px] px-2.5 sm:px-3.5 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 cursor-pointer active:scale-95"
          title="Chạm để tung chiêu ngay cùng anh hùng"
        >
          <Zap className="w-4 h-4" />
          <span className="text-[10px] sm:text-xs leading-none">Tung Chiêu</span>
        </button>
      </div>
    </div>
  );
};
