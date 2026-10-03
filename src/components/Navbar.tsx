import React from 'react';
import { Volume2, VolumeX, Shield, Star, BookOpen, Map, Sparkles, Wand2, Bot, Gamepad2 } from 'lucide-react';
import { audioService } from '../services/audioService';

interface NavbarProps {
  currentView: 'island_map' | 'stories' | 'minimal_pairs' | 'blending' | 'lesson' | 'story_reader' | 'ai_chat' | 'arcade';
  onNavigate: (view: 'island_map' | 'stories' | 'minimal_pairs' | 'blending' | 'ai_chat' | 'arcade') => void;
  stars: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenParentGate: () => void;
  onOpenStickerAlbum?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  stars,
  soundEnabled,
  onToggleSound,
  onOpenParentGate,
  onOpenStickerAlbum,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-300 shadow-md px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo with Mini Ehon Star Badge */}
        <div 
          onClick={() => onNavigate('island_map')}
          className="flex items-center space-x-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-amber-400 shadow-md group-hover:scale-105 transition-transform bg-amber-100 shrink-0">
            <img
              src="/assets/ehon/star.jpg"
              alt="Biểu trưng LittleLingo Ehon"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-amber-950 tracking-tight leading-none group-hover:text-amber-700 transition-colors">
              Little<span className="text-amber-500">Lingo</span>
            </h1>
            <p className="text-[10px] font-black text-amber-700 tracking-wider">
              EHON PHONICS • 3–8 TUỔI
            </p>
          </div>
        </div>

        {/* Center Main Nav Tabs */}
        <nav className="hidden md:flex items-center space-x-1.5 bg-amber-100/80 p-1.5 rounded-2xl border border-amber-200">
          <button
            onClick={() => onNavigate('island_map')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
              currentView === 'island_map' || currentView === 'lesson'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Map className="w-4 h-4 text-amber-800" />
            <span>Đảo Phonics</span>
          </button>

          <button
            onClick={() => onNavigate('stories')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
              currentView === 'stories'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span>Tranh Truyện Ehon</span>
          </button>

          <button
            onClick={() => onNavigate('minimal_pairs')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
              currentView === 'minimal_pairs'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-800" />
            <span>Luyện Phát Âm</span>
          </button>

          <button
            onClick={() => onNavigate('blending')}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
              currentView === 'blending'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Wand2 className="w-4 h-4 text-amber-800" />
            <span>Ghép Vần Tranh Vẽ</span>
          </button>

          <button
            onClick={() => onNavigate('arcade')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
              currentView === 'arcade'
                ? 'bg-amber-400 text-amber-950 shadow-sm'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Gamepad2 className="w-4 h-4 text-amber-800" />
            <span>Khu Vui Chơi 🎮</span>
          </button>

          <button
            onClick={() => onNavigate('ai_chat')}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
              currentView === 'ai_chat'
                ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-300'
                : 'bg-purple-100 text-purple-900 hover:bg-purple-200/80 border border-purple-300'
            }`}
          >
            <Bot className="w-4 h-4 text-purple-700" />
            <span>Bạn Leo AI 🦁</span>
          </button>
        </nav>

        {/* Right Status Actions */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Star Counter & Sticker Album Trigger */}
          <button
            onClick={() => {
              audioService.playMagicChime();
              onOpenStickerAlbum?.();
            }}
            className="flex items-center space-x-1.5 bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 px-3.5 py-1 rounded-2xl shadow-xs active:scale-95 transition-transform cursor-pointer group"
            title="Mở Sổ Dán Sticker Thưởng Của Bé"
          >
            <Star className="w-5 h-5 fill-amber-400 text-amber-500 animate-bounce group-hover:rotate-12 transition-transform" />
            <span className="font-black text-amber-950 text-base">{stars}</span>
            <span className="text-[10px] bg-amber-400 text-amber-950 font-black px-1.5 py-0.5 rounded-full hidden sm:inline shadow-xs">
              Sticker 🎨
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              audioService.playPopSound(480);
              onToggleSound();
            }}
            className="p-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-2xl border border-amber-300 active:scale-95 transition-transform cursor-pointer"
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-gray-400" />}
          </button>

          {/* Parent Gate Button */}
          <button
            onClick={onOpenParentGate}
            className="flex items-center space-x-1.5 bg-white hover:bg-amber-50 text-amber-900 font-extrabold px-3.5 py-2 rounded-2xl border-2 border-amber-300 shadow-xs active:scale-95 transition-transform cursor-pointer"
            title="Khu vực dành cho phụ huynh"
          >
            <Shield className="w-4 h-4 text-amber-600" />
            <span className="text-xs hidden sm:inline font-black">Phụ Huynh</span>
          </button>
        </div>

      </div>

      {/* Mobile Bottom Subnav */}
      <div className="flex md:hidden items-center justify-around pt-2 mt-2 border-t border-amber-200">
        <button
          onClick={() => onNavigate('island_map')}
          className={`px-3 py-1.5 text-xs font-black rounded-xl transition-colors ${
            currentView === 'island_map' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-amber-800'
          }`}
        >
          Đảo Âm
        </button>
        <button
          onClick={() => onNavigate('stories')}
          className={`px-3 py-1.5 text-xs font-black rounded-xl transition-colors ${
            currentView === 'stories' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-amber-800'
          }`}
        >
          Truyện Ehon
        </button>
        <button
          onClick={() => onNavigate('minimal_pairs')}
          className={`px-3 py-1.5 text-xs font-black rounded-xl transition-colors ${
            currentView === 'minimal_pairs' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-amber-800'
          }`}
        >
          Phát Âm
        </button>
        <button
          onClick={() => onNavigate('blending')}
          className={`px-3 py-1.5 text-xs font-black rounded-xl transition-colors ${
            currentView === 'blending' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-amber-800'
          }`}
        >
          Ghép Vần
        </button>
        <button
          onClick={() => onNavigate('arcade')}
          className={`px-3 py-1.5 text-xs font-black rounded-xl transition-colors ${
            currentView === 'arcade' ? 'bg-amber-400 text-amber-950 shadow-xs' : 'text-amber-800'
          }`}
        >
          Vui Chơi 🎮
        </button>
        <button
          onClick={() => onNavigate('ai_chat')}
          className={`px-3 py-1.5 text-xs font-black rounded-xl transition-colors ${
            currentView === 'ai_chat' ? 'bg-purple-600 text-white shadow-xs' : 'text-purple-800 font-bold bg-purple-100'
          }`}
        >
          Leo AI 🦁
        </button>
      </div>
    </header>
  );
};
