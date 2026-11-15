import React, { useEffect, useRef, useState } from 'react';
import { audioService } from '../services/audioService';
import { LetterTracingStudio } from './LetterTracingStudio';
import { LetterRecognitionGame } from './LetterRecognitionGame';
import { ChevronLeft, ChevronRight, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ArcadePlaygroundProps {
  onAddStars: (amount: number) => void;
  onBackToHome: () => void;
  language?: 'en' | 'ja';
}

type ActiveGame = null | 'letter_tracing' | 'letter_recognition' | 'phonics_ninja' | 'ehon_claw';
type GameId = Exclude<ActiveGame, null>;

interface ArcadeGameMeta {
  id: GameId;
  shortLabel: string;
  title: string;
  subtitle: string;
  badge: string;
  emoji?: string;
  imageUrl?: string;
  ctaLabel: string;
  borderClass: string;
  bgAccent: string;
  btnClass: string;
}

const PRACTICE_LETTERS = [
  's', 'a', 't', 'i', 'p', 'n',
  'c', 'e', 'h', 'r', 'm', 'd',
  'g', 'o', 'u', 'l', 'f', 'b',
  'sh', 'ch', 'th', 'ee',
];

const ARCADE_GAMES: ArcadeGameMeta[] = [
  {
    id: 'letter_tracing',
    shortLabel: '✍️ Tô Chữ',
    title: 'Tô Nét Chữ Diệu Kỳ ✍️',
    subtitle: 'Vẽ theo mũi tên & phát âm vị',
    badge: 'Đa Giác Quan',
    emoji: '✍️',
    ctaLabel: 'CHƠI NGAY',
    borderClass: 'border-amber-300',
    bgAccent: 'bg-amber-50 text-amber-600',
    btnClass: 'bg-amber-400 hover:bg-amber-300 text-slate-950',
  },
  {
    id: 'letter_recognition',
    shortLabel: '🎈 Bắt Bóng',
    title: 'Bắt Bong Bóng Âm Vị 🎯',
    subtitle: 'Nghe âm & chạm bong bóng đúng',
    badge: 'Luyện Phản Xạ',
    emoji: '🎈',
    ctaLabel: 'CHƠI NGAY',
    borderClass: 'border-purple-300',
    bgAccent: 'bg-purple-50 text-purple-600',
    btnClass: 'bg-purple-600 hover:bg-purple-500 text-white',
  },
  {
    id: 'phonics_ninja',
    shortLabel: '🍎 Chém Táo',
    title: 'Chém Âm Vị Ehon 🍎',
    subtitle: 'Vuốt tay chém quả táo âm thanh',
    badge: 'Vận Động',
    imageUrl: '/assets/ehon/sun.jpg',
    ctaLabel: 'CHƠI NGAY',
    borderClass: 'border-emerald-300',
    bgAccent: 'bg-emerald-50 text-emerald-700',
    btnClass: 'bg-emerald-500 hover:bg-emerald-400 text-white',
  },
  {
    id: 'ehon_claw',
    shortLabel: '🧸 Gắp Thú',
    title: 'Gắp Thú Cưng Ehon 🧸',
    subtitle: 'Gắp thú nhận sao & mở Sticker',
    badge: 'Thưởng Quà',
    imageUrl: '/assets/ehon/leo.jpg',
    ctaLabel: 'CHƠI NGAY',
    borderClass: 'border-rose-300',
    bgAccent: 'bg-rose-50 text-rose-700',
    btnClass: 'bg-rose-500 hover:bg-rose-400 text-white',
  },
];

export const ArcadePlayground: React.FC<ArcadePlaygroundProps> = ({
  onAddStars,
  onBackToHome,
}) => {
  const [activeGame, setActiveGame] = useState<ActiveGame>(null);
  const [selectedLetter, setSelectedLetter] = useState<string>('p');
  const [gameIdx, setGameIdx] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const handleGameMessage = (event: MessageEvent) => {
      if (!event.data) return;
      if (event.data.type === 'ADD_STARS') {
        onAddStars(event.data.amount || 1);
        audioService.playPopSound(560);
        try {
          confetti({ particleCount: 25, spread: 60, origin: { y: 0.7 } });
        } catch {
          // Ignore confetti errors
        }
      } else if (event.data.type === 'EXIT_GAME') {
        audioService.playPopSound(440);
        setActiveGame(null);
      }
    };
    window.addEventListener('message', handleGameMessage);
    return () => window.removeEventListener('message', handleGameMessage);
  }, [onAddStars]);

  const handleLaunchGame = (gameId: GameId) => {
    audioService.playMagicChime();
    setActiveGame(gameId);
  };

  if (activeGame !== null) {
    const curIdx = PRACTICE_LETTERS.indexOf(selectedLetter);
    const nextChar = PRACTICE_LETTERS[(curIdx + 1) % PRACTICE_LETTERS.length];
    const prevChar = PRACTICE_LETTERS[(curIdx - 1 + PRACTICE_LETTERS.length) % PRACTICE_LETTERS.length];
    const gameMeta = ARCADE_GAMES.find((g) => g.id === activeGame);

    return (
      <div className="w-full h-full flex flex-col overflow-hidden p-2 sm:p-4">
        <div className="w-full h-full flex flex-col rounded-3xl border-4 border-amber-300 shadow-2xl overflow-hidden bg-amber-50">
          <div className="bg-amber-100/95 border-b-2 border-amber-300 px-3 py-2 flex items-center justify-between gap-2 shrink-0">
            <button
              type="button"
              onClick={() => {
                audioService.playPopSound(440);
                setActiveGame(null);
              }}
              className="min-h-[40px] flex items-center gap-1 bg-white hover:bg-amber-50 text-amber-950 font-black px-3 py-1.5 rounded-2xl border-2 border-amber-300 shadow-xs cursor-pointer active:scale-95 text-xs sm:text-sm"
            >
              <ChevronLeft className="w-4 h-4 text-amber-700" />
              <span>Sảnh Trò Chơi</span>
            </button>
            <span className="text-xs sm:text-sm font-black text-amber-900 bg-white/90 px-3 py-1 rounded-full border border-amber-200 truncate">
              {gameMeta?.title}
            </span>
          </div>

          {activeGame === 'letter_tracing' && (
            <div className="bg-white/90 border-b border-amber-200 px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto shrink-0 select-none">
              <span className="text-xs font-black text-amber-900 shrink-0">Chữ:</span>
              {PRACTICE_LETTERS.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => {
                    setSelectedLetter(letter);
                    audioService.playPopSound(520);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-black uppercase shrink-0 cursor-pointer ${
                    selectedLetter === letter
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-amber-50 text-amber-900 border border-amber-200'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 min-h-0 w-full relative p-2 flex items-center justify-center">
            {activeGame === 'letter_tracing' && (
              <div className="w-full max-w-2xl h-full flex items-center justify-center">
                <LetterTracingStudio
                  phonemeId={selectedLetter}
                  onNextLetter={() => setSelectedLetter(nextChar)}
                  onPrevLetter={() => setSelectedLetter(prevChar)}
                  nextLetterChar={nextChar}
                  onAddStars={onAddStars}
                  showNextButton
                />
              </div>
            )}
            {activeGame === 'letter_recognition' && (
              <div className="w-full max-w-3xl h-full flex items-center justify-center">
                <LetterRecognitionGame
                  initialPhonemeId={selectedLetter}
                  onNextPhoneme={() => setSelectedLetter(nextChar)}
                  onPrevPhoneme={() => setSelectedLetter(prevChar)}
                  nextPhonemeChar={nextChar}
                  onAddStars={onAddStars}
                />
              </div>
            )}
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
      </div>
    );
  }

  const spotlight = ARCADE_GAMES[gameIdx] || ARCADE_GAMES[0];
  const stepGame = (delta: number) => {
    audioService.playPopSound(delta > 0 ? 520 : 460);
    setGameIdx((prev) => (prev + delta + ARCADE_GAMES.length) % ARCADE_GAMES.length);
  };

  return (
    <div className="w-full h-full max-w-6xl mx-auto px-2.5 sm:px-5 py-2 flex flex-col gap-2 overflow-hidden">
      {/* Top 4-Game Selector Bar + Back Shortcut */}
      <div className="shrink-0 flex items-center justify-between gap-2">
        <div className="grid grid-cols-4 gap-1 sm:flex sm:items-center sm:gap-1.5 flex-1 min-w-0">
          {ARCADE_GAMES.map((g, idx) => (
            <button
              key={g.id}
              type="button"
              onClick={() => {
                audioService.playPopSound(520);
                setGameIdx(idx);
              }}
              className={`min-h-[42px] px-1.5 sm:px-3 py-1.5 rounded-2xl border-2 font-black text-[11px] sm:text-xs whitespace-nowrap truncate cursor-pointer transition-all text-center ${
                gameIdx === idx
                  ? 'bg-slate-900 text-amber-300 border-amber-400 shadow-sm'
                  : 'bg-white text-slate-800 border-amber-200'
              }`}
            >
              {g.shortLabel}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onBackToHome}
          className="hidden md:inline-flex min-h-[42px] px-3 py-1.5 rounded-2xl bg-white border-2 border-amber-300 text-amber-950 font-black text-xs items-center gap-1 cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>7 Đảo Âm</span>
        </button>
      </div>

      {/* Mobile (< md): 1 Giant Paged Game Spotlight Screen */}
      <div
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartXRef.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartXRef.current;
          touchStartXRef.current = null;
          if (Math.abs(dx) > 40) stepGame(dx < 0 ? 1 : -1);
        }}
        className={`flex md:hidden flex-1 min-h-0 bg-white rounded-3xl border-4 ${spotlight.borderClass} shadow-xl p-3 flex-col justify-between gap-2 overflow-hidden`}
      >
        <div className="flex items-center justify-between shrink-0">
          <span className={`text-xs font-black px-3 py-1 rounded-full ${spotlight.bgAccent}`}>
            {spotlight.badge}
          </span>
          <span className="font-mono text-xs font-black text-slate-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
            {gameIdx + 1} / {ARCADE_GAMES.length}
          </span>
        </div>

        <div className="flex-1 min-h-0 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => stepGame(-1)}
            aria-label="Trò chơi trước"
            className="w-11 h-11 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-slate-900 flex items-center justify-center shrink-0 cursor-pointer active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={() => handleLaunchGame(spotlight.id)}
            className="flex-1 min-w-0 h-full flex flex-col items-center justify-center text-center gap-2 cursor-pointer"
          >
            <div
              className={`w-full max-w-[240px] flex-1 min-h-[120px] max-h-[210px] rounded-2xl overflow-hidden border-2 ${spotlight.borderClass} ${spotlight.bgAccent} flex items-center justify-center shadow-inner`}
            >
              {spotlight.imageUrl ? (
                <img
                  src={spotlight.imageUrl}
                  alt={spotlight.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-7xl leading-none">{spotlight.emoji}</span>
              )}
            </div>
            <h3 className="font-display text-xl font-black text-slate-950 leading-tight">
              {spotlight.title}
            </h3>
            <p className="text-xs font-bold text-slate-600">{spotlight.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={() => stepGame(1)}
            aria-label="Trò chơi tiếp theo"
            className="w-11 h-11 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-slate-900 flex items-center justify-center shrink-0 cursor-pointer active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => handleLaunchGame(spotlight.id)}
          className={`w-full min-h-[54px] rounded-2xl font-black text-base shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 ${spotlight.btnClass}`}
        >
          <Play className="w-5 h-5 fill-current" />
          <span>{spotlight.ctaLabel}</span>
        </button>
      </div>

      {/* Desktop (md+): Clean 4-Card Zero-Scroll Showcase */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 flex-1 min-h-0 items-stretch">
        {ARCADE_GAMES.map((game) => (
          <div
            key={game.id}
            onClick={() => handleLaunchGame(game.id)}
            className={`bg-white rounded-3xl p-4 border-4 ${game.borderClass} shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between gap-2`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${game.bgAccent}`}>
                {game.badge}
              </span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            <div
              className={`w-full flex-1 min-h-[120px] rounded-2xl overflow-hidden border-2 ${game.borderClass} ${game.bgAccent} flex items-center justify-center`}
            >
              {game.imageUrl ? (
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-7xl leading-none">{game.emoji}</span>
              )}
            </div>

            <div>
              <h3 className="font-display text-lg font-black text-slate-950">{game.title}</h3>
              <p className="text-xs font-bold text-slate-600 mt-0.5">{game.subtitle}</p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleLaunchGame(game.id);
              }}
              className={`w-full min-h-[48px] rounded-2xl font-black text-sm shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer ${game.btnClass}`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{game.ctaLabel}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
