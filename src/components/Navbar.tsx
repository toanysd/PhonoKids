import React from 'react';
import { Volume2, VolumeX, Shield, Star, BookOpen, Map, Sparkles, Wand2 } from 'lucide-react';
import { audioService } from '../services/audioService';

interface NavbarProps {
  currentView: 'island_map' | 'stories' | 'minimal_pairs' | 'blending' | 'lesson';
  onNavigate: (view: 'island_map' | 'stories' | 'minimal_pairs' | 'blending') => void;
  stars: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenParentGate: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  stars,
  soundEnabled,
  onToggleSound,
  onOpenParentGate,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b-4 border-amber-300 shadow-md px-4 py-2.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('island_map')}
          className="flex items-center space-x-2 cursor-pointer select-none group"
        >
          <span className="text-3xl md:text-4xl filter drop-shadow group-hover:scale-110 transition-transform">
            🌟
          </span>
          <div>
            <h1 className="text-xl md:text-2xl font-black text-amber-950 tracking-tight leading-none">
              Little<span className="text-amber-500">Lingo</span>
            </h1>
            <p className="text-[10px] font-extrabold text-amber-700 tracking-wider">
              PLAYGROUND 3–5 TUỔI
            </p>
          </div>
        </div>

        {/* Center Main Nav Tabs */}
        <nav className="hidden md:flex items-center space-x-1.5 bg-amber-100 p-1.5 rounded-2xl border border-amber-200">
          <button
            onClick={() => onNavigate('island_map')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-sm transition-all ${
              currentView === 'island_map' || currentView === 'lesson'
                ? 'bg-amber-400 text-amber-950 shadow'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Map className="w-4 h-4 text-amber-800" />
            <span>Đảo Phonics</span>
          </button>

          <button
            onClick={() => onNavigate('stories')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-sm transition-all ${
              currentView === 'stories'
                ? 'bg-amber-400 text-amber-950 shadow'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-800" />
            <span>Truyện Decodable</span>
          </button>

          <button
            onClick={() => onNavigate('minimal_pairs')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-sm transition-all ${
              currentView === 'minimal_pairs'
                ? 'bg-amber-400 text-amber-950 shadow'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-800" />
            <span>Luyện Phát Âm</span>
          </button>

          <button
            onClick={() => onNavigate('blending')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl font-black text-sm transition-all ${
              currentView === 'blending'
                ? 'bg-amber-400 text-amber-950 shadow'
                : 'text-amber-900 hover:bg-amber-200/60'
            }`}
          >
            <Wand2 className="w-4 h-4 text-amber-800" />
            <span>Ghép Vần Bong Bóng</span>
          </button>
        </nav>

        {/* Right Status Actions */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Star Counter */}
          <div className="flex items-center space-x-1 bg-amber-100 border-2 border-amber-300 px-3 py-1 rounded-2xl shadow-xs">
            <Star className="w-5 h-5 fill-amber-400 text-amber-500 animate-bounce" />
            <span className="font-black text-amber-950 text-base">{stars}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              audioService.playPopSound(480);
              onToggleSound();
            }}
            className="p-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-2xl border border-amber-300 active:scale-95 transition-transform"
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-gray-400" />}
          </button>

          {/* Parent Gate Button */}
          <button
            onClick={onOpenParentGate}
            className="flex items-center space-x-1 bg-white hover:bg-amber-50 text-amber-900 font-extrabold px-3 py-1.5 rounded-2xl border-2 border-amber-300 shadow-xs active:scale-95 transition-transform"
            title="Khu vực dành cho phụ huynh"
          >
            <Shield className="w-4 h-4 text-amber-600" />
            <span className="text-xs hidden sm:inline">Phụ Huynh</span>
          </button>
        </div>

      </div>

      {/* Mobile Bottom Subnav */}
      <div className="flex md:hidden items-center justify-around pt-2 mt-1 border-t border-amber-200">
        <button
          onClick={() => onNavigate('island_map')}
          className={`px-2 py-1 text-xs font-black rounded-lg ${currentView === 'island_map' ? 'bg-amber-400 text-amber-950' : 'text-amber-800'}`}
        >
          🏝️ Đảo Âm
        </button>
        <button
          onClick={() => onNavigate('stories')}
          className={`px-2 py-1 text-xs font-black rounded-lg ${currentView === 'stories' ? 'bg-amber-400 text-amber-950' : 'text-amber-800'}`}
        >
          📖 Đọc Truyện
        </button>
        <button
          onClick={() => onNavigate('minimal_pairs')}
          className={`px-2 py-1 text-xs font-black rounded-lg ${currentView === 'minimal_pairs' ? 'bg-amber-400 text-amber-950' : 'text-amber-800'}`}
        >
          🎯 Phát Âm
        </button>
        <button
          onClick={() => onNavigate('blending')}
          className={`px-2 py-1 text-xs font-black rounded-lg ${currentView === 'blending' ? 'bg-amber-400 text-amber-950' : 'text-amber-800'}`}
        >
          🔮 Ghép Vần
        </button>
      </div>
    </header>
  );
};
