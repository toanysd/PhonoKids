import React from 'react';
import {
  Volume2,
  VolumeX,
  Shield,
  Star,
  BookOpen,
  Bot,
  Swords,
  Users,
  Dumbbell,
} from 'lucide-react';
import { audioService } from '../services/audioService';

export type AppViewMode =
  | 'hero_hub'
  | 'hero_cutscene'
  | 'hero_battle'
  | 'dojo'
  | 'lesson'
  | 'stories'
  | 'story_reader'
  | 'ai_chat';

interface NavbarProps {
  currentView: AppViewMode;
  activeHeroName: string;
  onNavigate: (view: 'hero_hub' | 'dojo' | 'stories' | 'ai_chat') => void;
  onOpenRoster: () => void;
  stars: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenParentGate: () => void;
  onOpenStickerAlbum?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  activeHeroName,
  onNavigate,
  onOpenRoster,
  stars,
  soundEnabled,
  onToggleSound,
  onOpenParentGate,
  onOpenStickerAlbum,
}) => {
  const isHeroZone =
    currentView === 'hero_hub' || currentView === 'hero_cutscene' || currentView === 'hero_battle';
  const isDojoZone = currentView === 'dojo' || currentView === 'lesson';
  const isStoriesZone = currentView === 'stories' || currentView === 'story_reader';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 sm:border-b-4 border-amber-300 shadow-sm sm:shadow-md px-3 sm:px-4 py-1.5 sm:py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 h-10 sm:h-auto">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('hero_hub')}
          className="flex items-center space-x-2 cursor-pointer select-none group shrink-0"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-sm group-hover:scale-105 transition-transform bg-slate-900 flex items-center justify-center text-base md:text-lg shrink-0">
            🦸
          </div>
          <div>
            <h1 className="font-display text-base md:text-xl font-bold text-slate-950 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
              Hero<span className="text-amber-500">Speak</span> Kids
            </h1>
            <p className="text-[10px] font-extrabold text-amber-800 tracking-wide truncate max-w-[140px] sm:max-w-none">
              TIẾNG ANH 3–8 TUỔI • {activeHeroName}
            </p>
          </div>
        </div>

        {/* Desktop Nav Tabs */}
        <nav className="hidden lg:flex items-center space-x-1 bg-amber-100/85 p-1 rounded-2xl border border-amber-200">
          <button
            type="button"
            onClick={() => onNavigate('hero_hub')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs xl:text-sm transition-all cursor-pointer ${
              isHeroZone ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-amber-950 hover:bg-amber-200/60'
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>Sảnh Phiêu Lưu</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playPopSound(540);
              onOpenRoster();
            }}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs xl:text-sm text-indigo-950 bg-indigo-100 hover:bg-indigo-200 transition-all cursor-pointer"
          >
            <Users className="w-4 h-4 text-indigo-700" />
            <span>Chọn Nhân Vật</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('dojo')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs xl:text-sm transition-all cursor-pointer ${
              isDojoZone ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-amber-950 hover:bg-amber-200/60'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>Phòng Luyện Âm</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('stories')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs xl:text-sm transition-all cursor-pointer ${
              isStoriesZone ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-amber-950 hover:bg-amber-200/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Truyện Tranh</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('ai_chat')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-xs xl:text-sm transition-all cursor-pointer ${
              currentView === 'ai_chat'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-purple-100 text-purple-900 hover:bg-purple-200/80 border border-purple-300'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Hội Thoại AI</span>
          </button>
        </nav>

        {/* Right Status Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              audioService.playMagicChime();
              onOpenStickerAlbum?.();
            }}
            className="flex items-center space-x-1 bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 px-2.5 sm:px-3 py-1 rounded-2xl shadow-sm active:scale-95 transition-transform cursor-pointer"
            title="Mở Sổ Dán Sticker Thưởng Của Bé"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span className="font-mono font-bold text-amber-950 text-xs sm:text-sm tabular-nums">{stars}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playPopSound(480);
              onToggleSound();
            }}
            className="p-1.5 sm:p-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-2xl border border-amber-300 active:scale-95 transition-transform cursor-pointer"
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
          </button>

          <button
            type="button"
            onClick={onOpenParentGate}
            className="flex items-center space-x-1 bg-white hover:bg-amber-50 text-amber-900 font-extrabold px-2 sm:px-3 py-1.5 rounded-2xl border-2 border-amber-300 shadow-sm active:scale-95 transition-transform cursor-pointer"
            title="Khu vực dành cho phụ huynh"
          >
            <Shield className="w-4 h-4 text-amber-600" />
            <span className="text-xs hidden sm:inline font-black">Phụ Huynh</span>
          </button>
        </div>
      </div>
    </header>
  );
};

interface MobileBottomNavProps {
  currentView: AppViewMode;
  onNavigate: (view: 'hero_hub' | 'dojo' | 'stories' | 'ai_chat') => void;
  onOpenRoster: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onNavigate,
  onOpenRoster,
}) => {
  const isHeroZone =
    currentView === 'hero_hub' || currentView === 'hero_cutscene' || currentView === 'hero_battle';
  const isDojoZone = currentView === 'dojo' || currentView === 'lesson';
  const isStoriesZone = currentView === 'stories' || currentView === 'story_reader';

  const tabClass = (active: boolean, special?: 'ai' | 'roster') => {
    if (special === 'roster') return 'text-indigo-950 bg-indigo-50 hover:bg-indigo-100';
    if (special === 'ai') {
      return active ? 'bg-purple-600 text-white shadow-sm' : 'text-purple-900 bg-purple-50';
    }
    return active ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-700 hover:bg-amber-50';
  };

  return (
    <nav
      aria-label="Điều hướng chính trên di động"
      className="flex lg:hidden items-center justify-around gap-1 bg-white/95 backdrop-blur-md border-t-2 border-amber-300 px-1.5 py-1 pb-[max(0.25rem,env(safe-area-inset-bottom))] shrink-0 z-40 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <button
        type="button"
        onClick={() => onNavigate('hero_hub')}
        className={`flex-1 min-h-[52px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[11px] font-black cursor-pointer ${tabClass(isHeroZone)}`}
      >
        <Swords className="w-4 h-4" />
        <span>Phiêu Lưu</span>
      </button>

      <button
        type="button"
        onClick={() => {
          audioService.playPopSound(540);
          onOpenRoster();
        }}
        className={`flex-1 min-h-[52px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[11px] font-black cursor-pointer ${tabClass(false, 'roster')}`}
      >
        <Users className="w-4 h-4 text-indigo-700" />
        <span>Nhân Vật</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('dojo')}
        className={`flex-1 min-h-[52px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[11px] font-black cursor-pointer ${tabClass(isDojoZone)}`}
      >
        <Dumbbell className="w-4 h-4" />
        <span>Luyện Âm</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('stories')}
        className={`flex-1 min-h-[52px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[11px] font-black cursor-pointer ${tabClass(isStoriesZone)}`}
      >
        <BookOpen className="w-4 h-4" />
        <span>Truyện</span>
      </button>

      <button
        type="button"
        onClick={() => onNavigate('ai_chat')}
        className={`flex-1 min-h-[52px] rounded-xl flex flex-col items-center justify-center gap-0.5 text-[11px] font-black cursor-pointer ${tabClass(currentView === 'ai_chat', 'ai')}`}
      >
        <Bot className="w-4 h-4" />
        <span>Bạn AI</span>
      </button>
    </nav>
  );
};
