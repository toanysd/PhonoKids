import React, { useState, useEffect } from 'react';
import { KidButton } from './KidButton';
import { audioService } from '../services/audioService';
import { LetterTracingStudio } from './LetterTracingStudio';
import { LetterRecognitionGame } from './LetterRecognitionGame';
import { Sparkles, Gamepad2, ChevronLeft, Volume2, Trophy, Pencil, Target, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArcadePlaygroundProps {
  onAddStars: (amount: number) => void;
  onBackToHome: () => void;
}

type ActiveGame = null | 'phonics_ninja' | 'ehon_claw' | 'letter_tracing' | 'letter_recognition';

const PRACTICE_LETTERS = [
  's', 'a', 't', 'i', 'p', 'n', 
  'c', 'e', 'h', 'r', 'm', 'd', 
  'g', 'o', 'u', 'l', 'f', 'b', 
  'sh', 'ch', 'th', 'ee'
];

export const ArcadePlayground: React.FC<ArcadePlaygroundProps> = ({
  onAddStars,
  onBackToHome,
}) => {
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [selectedLetter, setSelectedLetter] = useState<string>('p');

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

  const handleLaunchGame = (gameId: ActiveGame) => {
    audioService.playMagicChime();
    setActiveGame(gameId);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden p-2 sm:p-4">
      {/* If an iframe or interactive game is active */}
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
              <span>Quay Lại Sảnh Trò Chơi</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm font-black text-amber-900 bg-white/90 px-3 py-1 rounded-full border border-amber-200">
                {activeGame === 'phonics_ninja' && '🍎🗡️ Phonics Ninja'}
                {activeGame === 'ehon_claw' && '🧸🎯 Máy Gắp Thú Ehon'}
                {activeGame === 'letter_tracing' && '✍️ Tô Nét Chữ Diệu Kỳ (Orton-Gillingham)'}
                {activeGame === 'letter_recognition' && '🎯 Bắt Bong Bóng Âm Vị & Cặp Chữ'}
              </span>
            </div>
          </div>

          {/* Letter Selection Ribbon if in Letter Tracing Mode */}
          {activeGame === 'letter_tracing' && (
            <div className="bg-white/90 border-b border-amber-200 px-3 py-1.5 flex items-center space-x-1.5 overflow-x-auto shrink-0 select-none">
              <span className="text-xs font-black text-amber-900 shrink-0 mr-1">Chọn chữ cái:</span>
              {PRACTICE_LETTERS.map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    setSelectedLetter(letter);
                    audioService.playPopSound(520);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-black uppercase transition-all shrink-0 cursor-pointer ${
                    selectedLetter === letter
                      ? 'bg-amber-500 text-white shadow-xs scale-105'
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          )}

          {/* Game Viewport Container */}
          <div className="flex-1 min-h-0 w-full relative p-2 flex items-center justify-center">
            {activeGame === 'letter_tracing' && (() => {
              const curIdx = PRACTICE_LETTERS.indexOf(selectedLetter);
              const nextChar = PRACTICE_LETTERS[(curIdx + 1) % PRACTICE_LETTERS.length];
              const prevChar = PRACTICE_LETTERS[(curIdx - 1 + PRACTICE_LETTERS.length) % PRACTICE_LETTERS.length];
              return (
                <div className="w-full max-w-2xl h-full flex items-center justify-center">
                  <LetterTracingStudio
                    phonemeId={selectedLetter}
                    onNextLetter={() => {
                      setSelectedLetter(nextChar);
                      audioService.playPopSound(540);
                    }}
                    onPrevLetter={() => {
                      setSelectedLetter(prevChar);
                      audioService.playPopSound(440);
                    }}
                    nextLetterChar={nextChar}
                    onAddStars={onAddStars}
                    showNextButton={true}
                  />
                </div>
              );
            })()}

            {activeGame === 'letter_recognition' && (() => {
              const curIdx = PRACTICE_LETTERS.indexOf(selectedLetter);
              const nextChar = PRACTICE_LETTERS[(curIdx + 1) % PRACTICE_LETTERS.length];
              const prevChar = PRACTICE_LETTERS[(curIdx - 1 + PRACTICE_LETTERS.length) % PRACTICE_LETTERS.length];
              return (
                <div className="w-full max-w-3xl h-full flex items-center justify-center">
                  <LetterRecognitionGame
                    initialPhonemeId={selectedLetter}
                    onNextPhoneme={() => {
                      setSelectedLetter(nextChar);
                      audioService.playPopSound(540);
                    }}
                    onPrevPhoneme={() => {
                      setSelectedLetter(prevChar);
                      audioService.playPopSound(440);
                    }}
                    nextPhonemeChar={nextChar}
                    onAddStars={onAddStars}
                  />
                </div>
              );
            })()}

            {activeGame === 'phonics_ninja' && (
              <iframe
                src="/games/phonics-ninja/index.html"
                title="Phonics Ninja"
                sandbox="allow-scripts allow-same-origin allow-pointer-lock"
                className="w-full h-full border-0 absolute inset-0"
              />
            )}

            {activeGame === 'ehon_claw' && (
              <iframe
                src="/games/ehon-claw/index.html"
                title="Ehon Claw Machine"
                sandbox="allow-scripts allow-same-origin allow-pointer-lock"
                className="w-full h-full border-0 absolute inset-0"
              />
            )}
          </div>
        </div>
      ) : (
        /* Game Selection Portal Menu (Zero-Scroll 4-Card Responsive Grid) */
        <div className="w-full max-w-6xl mx-auto flex-1 min-h-0 flex flex-col justify-between py-1">
          {/* Header Banner */}
          <div className="text-center shrink-0 mb-1 sm:mb-2">
            <div className="inline-flex items-center space-x-1.5 bg-amber-200/90 px-3.5 py-1 rounded-full border border-amber-300 text-amber-950 font-black text-xs mb-1 shadow-xs">
              <Gamepad2 className="w-4 h-4 text-amber-700 animate-bounce" />
              <span>Đấu Trường Tương Tác Sư Phạm Chuẩn Quốc Tế</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-amber-950 tracking-tight">
              Khu Vui Chơi & Ôn Luyện Phonics 🎮
            </h2>
            <p className="text-xs sm:text-sm font-bold text-amber-800 mt-0.5 max-w-2xl mx-auto">
              Tô nét chữ đa giác quan, săn bắt âm vị, phân biệt cặp chữ dễ nhầm và múa tay vận động thể chất!
            </p>
          </div>

          {/* 4 Flagship Interactive Games (2x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 flex-1 min-h-0 items-stretch w-full my-1">
            
            {/* Game 1: Multisensory Letter Tracing Studio */}
            <div
              onClick={() => handleLaunchGame('letter_tracing')}
              className="bg-white rounded-3xl p-3.5 border-4 border-amber-300 shadow-xl hover:border-amber-400 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full uppercase">
                    ✍️ Đa Giác Quan
                  </span>
                  <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Thưởng Sao ⭐</span>
                  </span>
                </div>

                <div className="w-full h-28 sm:h-32 rounded-2xl overflow-hidden mb-2 border-2 border-amber-200 relative bg-amber-50 shadow-inner flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl font-black text-amber-500 drop-shadow group-hover:scale-110 transition-transform">
                    ✍️
                  </div>
                  <div className="absolute top-2 left-2 bg-amber-400 text-amber-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs">
                    Orton-Gillingham
                  </div>
                </div>

                <h3 className="text-base font-black text-amber-950 mb-0.5">
                  Tô Nét Chữ Diệu Kỳ ✍️
                </h3>
                <p className="text-[11px] font-bold text-amber-900 leading-snug">
                  Chấm xuất phát phát sáng, hướng mũi tên chuẩn và phát âm vị bản ngữ chuẩn khi chạm tay!
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-amber-100">
                <KidButton
                  variant="warning"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchGame('letter_tracing');
                  }}
                  className="w-full py-2 text-xs font-black shadow-md"
                >
                  <span>Vào Tập Tô ✍️</span>
                </KidButton>
              </div>
            </div>

            {/* Game 2: Letter Recognition & Discrimination Arcade */}
            <div
              onClick={() => handleLaunchGame('letter_recognition')}
              className="bg-white rounded-3xl p-3.5 border-4 border-purple-300 shadow-xl hover:border-purple-400 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black bg-purple-100 text-purple-900 border border-purple-300 px-2.5 py-0.5 rounded-full uppercase">
                    🎯 UFLI Foundations
                  </span>
                  <span className="text-[10px] font-black text-purple-900 bg-purple-100 px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <Trophy className="w-3 h-3 text-purple-600" />
                    <span>Luyện Phản Xạ</span>
                  </span>
                </div>

                <div className="w-full h-28 sm:h-32 rounded-2xl overflow-hidden mb-2 border-2 border-purple-200 relative bg-purple-50 shadow-inner flex items-center justify-center">
                  <div className="text-6xl sm:text-7xl font-black text-purple-600 drop-shadow group-hover:scale-110 transition-transform">
                    🫧🎯
                  </div>
                  <div className="absolute top-2 left-2 bg-purple-400 text-purple-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow-xs">
                    Cặp b/d & p/q
                  </div>
                </div>

                <h3 className="text-base font-black text-purple-950 mb-0.5">
                  Bắt Bong Bóng Âm Vị 🎯
                </h3>
                <p className="text-[11px] font-bold text-purple-900 leading-snug">
                  Nghe âm vị tinh khiết, bắt bong bóng tương ứng và giải mã phân biệt các cặp chữ dễ nhầm!
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-purple-100">
                <KidButton
                  variant="primary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchGame('letter_recognition');
                  }}
                  className="w-full py-2 text-xs font-black shadow-md"
                >
                  <span>Chơi Bắt Bóng 🎯</span>
                </KidButton>
              </div>
            </div>

            {/* Game 3: Phonics Ninja */}
            <div
              onClick={() => handleLaunchGame('phonics_ninja')}
              className="bg-white rounded-3xl p-3.5 border-4 border-emerald-300 shadow-xl hover:border-emerald-400 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black bg-emerald-100 text-emerald-900 border border-emerald-300 px-2.5 py-0.5 rounded-full uppercase">
                    📷 Camera AI & Vuốt
                  </span>
                  <span className="text-[10px] font-black text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>TPR Vận Động</span>
                  </span>
                </div>

                <div className="w-full h-28 sm:h-32 rounded-2xl overflow-hidden mb-2 border-2 border-emerald-200 relative bg-emerald-50 shadow-inner">
                  <img
                    src="/assets/ehon/sun.jpg"
                    alt="Phonics Ninja"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2">
                    <span className="text-white font-black text-sm drop-shadow-md">
                      Phonics Ninja 🍎🗡️
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-black text-emerald-950 mb-0.5">
                  Chém Âm Vị Ehon 🍎
                </h3>
                <p className="text-[11px] font-bold text-emerald-900 leading-snug">
                  Múa tay trước camera hoặc vuốt ngón tay để chém các quả táo Ehon phát ra âm đang học!
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-emerald-100">
                <KidButton
                  variant="success"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchGame('phonics_ninja');
                  }}
                  className="w-full py-2 text-xs font-black shadow-md"
                >
                  <span>Chém Âm Vị 🗡️</span>
                </KidButton>
              </div>
            </div>

            {/* Game 4: Ehon Claw Machine */}
            <div
              onClick={() => handleLaunchGame('ehon_claw')}
              className="bg-white rounded-3xl p-3.5 border-4 border-rose-300 shadow-xl hover:border-rose-400 hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-black bg-rose-100 text-rose-900 border border-rose-300 px-2.5 py-0.5 rounded-full uppercase">
                    🕹️ Gắp Thú Ehon
                  </span>
                  <span className="text-[10px] font-black text-rose-900 bg-rose-100 px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <Trophy className="w-3 h-3 text-rose-600" />
                    <span>Quà Sticker 🎁</span>
                  </span>
                </div>

                <div className="w-full h-28 sm:h-32 rounded-2xl overflow-hidden mb-2 border-2 border-rose-200 relative bg-rose-50 shadow-inner">
                  <img
                    src="/assets/ehon/leo.jpg"
                    alt="Ehon Claw Machine"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2">
                    <span className="text-white font-black text-sm drop-shadow-md">
                      Máy Gắp Thú 🧸🎯
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-black text-rose-950 mb-0.5">
                  Gắp Thú Cưng Ehon 🧸
                </h3>
                <p className="text-[11px] font-bold text-rose-900 leading-snug">
                  Lái cần cẩu gắp bạn Leo, Gà Henny, Heo hồng nghe phát âm từ vựng và mở khóa Sticker!
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-rose-100">
                <KidButton
                  variant="secondary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchGame('ehon_claw');
                  }}
                  className="w-full py-2 text-xs font-black shadow-md text-rose-900"
                >
                  <span>Gắp Thú Cưng 🧸</span>
                </KidButton>
              </div>
            </div>

          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center pt-1.5 shrink-0">
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
