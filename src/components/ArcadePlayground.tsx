import React, { useState, useEffect } from 'react';
import { KidButton } from './KidButton';
import { audioService } from '../services/audioService';
import { Sparkles, Gamepad2, ChevronLeft, Volume2, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArcadePlaygroundProps {
  onAddStars: (amount: number) => void;
  onBackToHome: () => void;
}

type ActiveGame = null | 'phonics_ninja' | 'ehon_claw';

export const ArcadePlayground: React.FC<ArcadePlaygroundProps> = ({
  onAddStars,
  onBackToHome,
}) => {
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [targetPhoneme, setTargetPhoneme] = useState<string>('s');

  // Handle postMessage communication from sandboxed game iframes
  useEffect(() => {
    const handleGameMessage = (event: MessageEvent) => {
      if (!event.data) return;

      if (event.data.type === 'ADD_STARS') {
        const amount = event.data.amount || 1;
        onAddStars(amount);
        audioService.playPopSound(560);
        try {
          confetti({
            particleCount: 25,
            spread: 60,
            origin: { y: 0.7 }
          });
        } catch {
          // ignore
        }
      } else if (event.data.type === 'EXIT_GAME') {
        audioService.playPopSound(440);
        setActiveGame(null);
      }
    };

    window.addEventListener('message', handleGameMessage);
    return () => window.removeEventListener('message', handleGameMessage);
  }, [onAddStars]);

  const handleLaunchGame = (gameId: 'phonics_ninja' | 'ehon_claw') => {
    audioService.playMagicChime();
    setActiveGame(gameId);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden p-2 sm:p-4">
      {/* If a game is active: Render the sandboxed iframe view */}
      {activeGame !== null ? (
        <div className="w-full h-full flex flex-col rounded-3xl border-4 md:border-6 border-amber-300 shadow-2xl overflow-hidden bg-amber-50">
          {/* In-Game Top Control Bar */}
          <div className="bg-amber-100/95 border-b-2 border-amber-300 px-4 py-2 flex items-center justify-between shrink-0">
            <button
              onClick={() => {
                audioService.playPopSound(440);
                setActiveGame(null);
              }}
              className="flex items-center space-x-1.5 bg-white hover:bg-amber-50 text-amber-950 font-black px-4 py-1.5 rounded-2xl border-2 border-amber-300 shadow-xs cursor-pointer active:scale-95 text-xs sm:text-sm"
            >
              <ChevronLeft className="w-4 h-4 text-amber-700" />
              <span>Thoát Trò Chơi</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm font-black text-amber-900 bg-white/90 px-3 py-1 rounded-full border border-amber-200">
                {activeGame === 'phonics_ninja' ? '🍎🗡️ Phonics Ninja' : '🧸🎯 Máy Gắp Thú Ehon'}
              </span>
            </div>
          </div>

          {/* Iframe Viewport */}
          <div className="flex-1 min-h-0 w-full relative">
            <iframe
              src={
                activeGame === 'phonics_ninja'
                  ? '/games/phonics-ninja/index.html'
                  : '/games/ehon-claw/index.html'
              }
              title="Ehon Arcade Game"
              sandbox="allow-scripts allow-same-origin allow-pointer-lock"
              className="w-full h-full border-0 absolute inset-0"
            />
          </div>
        </div>
      ) : (
        /* Game Selection Portal Menu (Fits Viewport, Zero-Scroll) */
        <div className="w-full max-w-6xl mx-auto flex-1 min-h-0 flex flex-col justify-between py-1">
          {/* Header Banner */}
          <div className="text-center shrink-0 mb-2">
            <div className="inline-flex items-center space-x-1.5 bg-amber-200/90 px-3.5 py-1 rounded-full border border-amber-300 text-amber-950 font-black text-xs mb-1 shadow-xs">
              <Gamepad2 className="w-4 h-4 text-amber-700 animate-bounce" />
              <span>Khu Vui Chơi Tương Tác Cử Chỉ & Thể Thao Phonics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-950 tracking-tight">
              Đấu Trường Vui Nhộn Ehon Arcade 🎮
            </h2>
            <p className="text-xs md:text-sm font-bold text-amber-800 mt-0.5 max-w-xl mx-auto">
              Chơi game vận động camera AI hoặc chạm vuốt màn hình để ôn tập âm vị và nhận thật nhiều Sao ⭐ nhé!
            </p>
          </div>

          {/* 2 Flagship Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 min-h-0 items-center max-w-4xl mx-auto w-full my-1">
            {/* Game 1: Phonics Ninja */}
            <div
              onClick={() => handleLaunchGame('phonics_ninja')}
              className="bg-white rounded-3xl p-4 md:p-5 border-4 md:border-5 border-amber-300 shadow-xl hover:border-amber-400 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 cursor-pointer flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-0.5 rounded-full uppercase">
                    📷 Camera AI & Vuốt Tay
                  </span>
                  <span className="text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Thưởng Sao ⭐</span>
                  </span>
                </div>

                {/* Cover Plate (Authentic Ehon Collage) */}
                <div className="w-full h-36 sm:h-40 md:h-44 rounded-2xl overflow-hidden mb-3 border-2 border-amber-200 relative bg-amber-50 shadow-inner">
                  <img
                    src="/assets/ehon/sun.jpg"
                    alt="Phonics Ninja"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white font-black text-lg md:text-xl drop-shadow-md">
                      Phonics Ninja: Chém Âm Vị 🍎🗡️
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm font-bold text-amber-900 leading-relaxed">
                  Đứng trước Camera múa tay như Ninja hoặc vuốt màn hình để chém các bức tranh Ehon có chứa âm vị đang học!
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-amber-100">
                <KidButton
                  variant="success"
                  size="md"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchGame('phonics_ninja');
                  }}
                  className="w-full py-2.5 shadow-md"
                >
                  <span>Chém Âm Vị Ngay! 🗡️</span>
                </KidButton>
              </div>
            </div>

            {/* Game 2: Ehon Sticker Claw Machine */}
            <div
              onClick={() => handleLaunchGame('ehon_claw')}
              className="bg-white rounded-3xl p-4 md:p-5 border-4 md:border-5 border-amber-300 shadow-xl hover:border-amber-400 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 cursor-pointer flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black bg-purple-100 text-purple-900 border border-purple-300 px-3 py-0.5 rounded-full uppercase">
                    🕹️ Cần Gắp Thú Phonics
                  </span>
                  <span className="text-xs font-black text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                    <Trophy className="w-3 h-3 text-amber-600" />
                    <span>Mở Khóa Quà 🎁</span>
                  </span>
                </div>

                {/* Cover Plate (Authentic Ehon Collage) */}
                <div className="w-full h-36 sm:h-40 md:h-44 rounded-2xl overflow-hidden mb-3 border-2 border-amber-200 relative bg-amber-50 shadow-inner">
                  <img
                    src="/assets/ehon/leo.jpg"
                    alt="Ehon Claw Machine"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white font-black text-lg md:text-xl drop-shadow-md">
                      Máy Gắp Thú Cưng Ehon 🧸🎯
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm font-bold text-amber-900 leading-relaxed">
                  Lái càng gắp bắt các nhân vật Ehon đáng yêu (Sư tử Leo, Gà Henny, Heo hồng, Táo đỏ), nghe đọc tên tiếng Anh và tích lũy sao mở Sticker!
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-amber-100">
                <KidButton
                  variant="warning"
                  size="md"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchGame('ehon_claw');
                  }}
                  className="w-full py-2.5 shadow-md"
                >
                  <span>Gắp Thú Cưng Ngay! 🧸</span>
                </KidButton>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center pt-2 shrink-0">
            <KidButton
              variant="secondary"
              size="md"
              onClick={onBackToHome}
              className="py-2 px-6 text-xs sm:text-sm shadow-md"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Quay Lại Bản Đồ Đảo</span>
            </KidButton>
          </div>
        </div>
      )}
    </div>
  );
};
