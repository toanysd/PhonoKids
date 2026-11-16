import React from 'react';
import { HeroCharacter } from '../../types/heroGame';
import { CharacterRigSvg } from '../hero/CharacterRigSvg';
import { audioService } from '../../services/audioService';
import { Shield, Star, Users, Volume2, VolumeX } from 'lucide-react';

interface GameHudBarProps {
  hero: HeroCharacter;
  xp: number;
  stars: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenRoster: () => void;
  onOpenStickerAlbum: () => void;
  onOpenParentGate: () => void;
}

export const GameHudBar: React.FC<GameHudBarProps> = ({
  hero,
  xp,
  stars,
  soundEnabled,
  onToggleSound,
  onOpenRoster,
  onOpenStickerAlbum,
  onOpenParentGate,
}) => {
  const safeXp = Math.max(0, xp || 0);
  const level = Math.floor(safeXp / 100) + 1;
  const xpProgress = safeXp % 100;

  return (
    <div className="shrink-0 z-30 px-2.5 pt-2 sm:px-5 sm:pt-3 flex items-center justify-between gap-2 pointer-events-none">
      {/* Left Medallion: Hero Portrait + Level/XP + Switch Character */}
      <div className="pointer-events-auto flex items-center gap-2 bg-slate-950/85 backdrop-blur-md border-2 border-amber-400/90 rounded-2xl px-2 py-1 sm:px-3 sm:py-1.5 shadow-xl text-white min-w-0">
        <div
          onClick={() => {
            audioService.playPopSound(520);
            onOpenRoster();
          }}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-900 to-slate-900 border border-amber-300/60 flex items-center justify-center shrink-0 cursor-pointer overflow-hidden"
        >
          <CharacterRigSvg
            template={hero.template}
            primaryColor={hero.primaryColor}
            secondaryColor={hero.secondaryColor}
            accentColor={hero.accentColor}
            pose="idle"
            customAvatarUrl={hero.customAvatarUrl}
            live={false}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>

        <div className="min-w-0 pr-1">
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] sm:text-xs font-black bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded-md tabular-nums shrink-0">
              Lv.{level}
            </span>
            <span className="font-display text-xs sm:text-sm font-bold text-white truncate max-w-[96px] sm:max-w-[160px]">
              {hero.nameVi}
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <div className="w-11 sm:w-24 h-2 rounded-full bg-slate-800 border border-white/15 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(8, xpProgress)}%` }}
              />
            </div>
            <span className="hidden sm:inline font-mono text-[10px] font-bold text-amber-200 tabular-nums">
              {xpProgress}/100 XP
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(540);
            onOpenRoster();
          }}
          aria-label="Chọn nhân vật"
          className="min-h-[38px] px-2.5 sm:px-3 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs inline-flex items-center gap-1 shadow-sm cursor-pointer active:scale-95 shrink-0"
        >
          <Users className="w-3.5 h-3.5 shrink-0" />
          <span className="sm:hidden">Đổi</span>
          <span className="hidden sm:inline">Đổi Tướng</span>
        </button>
      </div>

      {/* Right Cluster: Stars + Sticker Treasure Chest + Sound + Parent Gate */}
      <div className="pointer-events-auto flex items-center gap-1.5 shrink-0">
        <div
          className="min-h-[40px] flex items-center gap-1 bg-slate-950/85 backdrop-blur-md border-2 border-amber-400 px-2.5 sm:px-3 py-1 rounded-2xl shadow-lg text-amber-300 font-mono font-black text-sm tabular-nums"
          title="Tổng số Sao của bé"
        >
          <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
          <span>{stars}</span>
        </div>

        <button
          type="button"
          onClick={() => {
            audioService.playMagicChime();
            onOpenStickerAlbum();
          }}
          title="Mở Sổ Dán Sticker Thưởng Của Bé"
          aria-label="Mở Sổ Dán Sticker Thưởng Của Bé"
          className="min-w-[40px] min-h-[40px] px-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border-2 border-pink-400/80 text-white hover:bg-slate-900 flex items-center justify-center gap-1 shadow-lg cursor-pointer active:scale-95 text-sm font-black"
        >
          <span>🎁</span>
          <span className="hidden md:inline text-xs">Rương Quà</span>
        </button>

        <button
          type="button"
          onClick={onToggleSound}
          aria-label={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          className={`min-w-[40px] min-h-[40px] rounded-2xl border-2 backdrop-blur-md flex items-center justify-center shadow-lg cursor-pointer active:scale-95 ${
            soundEnabled
              ? 'bg-slate-950/85 border-emerald-400/80 text-emerald-300'
              : 'bg-slate-950/85 border-rose-400/80 text-rose-300'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(480);
            onOpenParentGate();
          }}
          aria-label="Cài đặt Phụ huynh"
          title="Khu vực Phụ huynh"
          className="min-w-[40px] min-h-[40px] px-2 sm:px-2.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border-2 border-slate-500/80 text-slate-200 hover:border-amber-300 flex items-center justify-center gap-1 shadow-lg cursor-pointer active:scale-95 text-xs font-black"
        >
          <Shield className="w-4 h-4 text-amber-300 shrink-0" />
          <span className="hidden lg:inline">Phụ Huynh</span>
        </button>
      </div>
    </div>
  );
};
