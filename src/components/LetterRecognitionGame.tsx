import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { audioService } from '../services/audioService';
import { CONFUSION_PAIRS_CATALOG, ConfusionPairItem } from '../data/letterStrokes';
import { Volume2, Sparkles, Trophy, CheckCircle2, RotateCcw, ArrowRight, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LetterRecognitionGameProps {
  initialPhonemeId?: string;
  mode?: 'bubble_sound' | 'confusion_detective';
  onComplete?: () => void;
  onAddStars?: (amount: number) => void;
}

interface BubbleItem {
  id: string;
  char: string;
  phonemeId: string;
  isCorrect: boolean;
  color: string;
  size: number;
}

const BUBBLE_COLORS = [
  'from-amber-400 to-orange-500 border-amber-300 text-amber-950',
  'from-emerald-400 to-teal-500 border-emerald-300 text-emerald-950',
  'from-sky-400 to-blue-500 border-sky-300 text-sky-950',
  'from-fuchsia-400 to-pink-500 border-fuchsia-300 text-fuchsia-950',
  'from-purple-400 to-indigo-500 border-purple-300 text-purple-950'
];

export const LetterRecognitionGame: React.FC<LetterRecognitionGameProps> = ({
  initialPhonemeId = 'p',
  mode = 'bubble_sound',
  onComplete,
  onAddStars
}) => {
  const [activeMode, setActiveMode] = useState<'bubble_sound' | 'confusion_detective'>(mode);
  const [targetPhoneme, setTargetPhoneme] = useState<string>(initialPhonemeId);
  const [round, setRound] = useState<number>(1);
  const totalRounds = 3;

  // Bubble sound mode state
  const [bubbles, setBubbles] = useState<BubbleItem[]>([]);
  const [poppedBubbleId, setPoppedBubbleId] = useState<string | null>(null);
  const [shakingBubbleId, setShakingBubbleId] = useState<string | null>(null);
  const [isRoundWon, setIsRoundWon] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // Confusion detective mode state
  const [selectedPairIndex, setSelectedPairIndex] = useState<number>(0);
  const activePair: ConfusionPairItem = CONFUSION_PAIRS_CATALOG[selectedPairIndex] || CONFUSION_PAIRS_CATALOG[0];
  const [activeTargetInPair, setActiveTargetInPair] = useState<'A' | 'B'>('A');

  // Intelligent distractor selection based on phonetics and visual similarity
  const getDistractorsFor = useCallback((target: string): string[] => {
    const confusionMap: Record<string, string[]> = {
      p: ['b', 'd', 'q', 't'],
      b: ['d', 'p', 'q', 'v'],
      d: ['b', 'p', 'q', 't'],
      q: ['p', 'g', 'd', 'b'],
      s: ['c', 'z', 'f', 'a'],
      a: ['o', 'u', 'e', 'd'],
      t: ['f', 'l', 'i', 'd'],
      i: ['l', 'j', 't', 'e'],
      n: ['u', 'm', 'h', 'r'],
      m: ['w', 'n', 'u', 'v'],
      w: ['m', 'v', 'u', 'n'],
      u: ['n', 'v', 'w', 'a'],
      c: ['s', 'k', 'o', 'e'],
      k: ['c', 't', 'l', 'x'],
      e: ['a', 'o', 'c', 'i'],
      h: ['n', 'b', 'k', 'l'],
      r: ['n', 'v', 'p', 'f'],
      g: ['q', 'j', 'y', 'p'],
      o: ['a', 'u', 'c', 'e'],
      l: ['i', 't', '1', 'f'],
      f: ['t', 'l', 'v', 's'],
      sh: ['ch', 'th', 's', 'h'],
      ch: ['sh', 'th', 'c', 'h'],
      th: ['ch', 'sh', 't', 'f'],
      ee: ['ea', 'e', 'i', 'ai']
    };

    const specific = confusionMap[target.toLowerCase()];
    if (specific && specific.length >= 3) {
      return specific.slice(0, 3);
    }
    // Generic fallback
    const all = ['s', 'a', 't', 'i', 'p', 'n', 'b', 'd', 'm', 'c'].filter((x) => x !== target);
    return all.slice(0, 3);
  }, []);

  // Generate a round of bubbles
  const generateBubbles = useCallback((target: string) => {
    const distractors = getDistractorsFor(target);
    const pool = [
      { char: target, phonemeId: target, isCorrect: true },
      ...distractors.map((d) => ({ char: d, phonemeId: d, isCorrect: false }))
    ];

    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    const generated: BubbleItem[] = shuffled.map((item, idx) => ({
      id: `bubble_${item.char}_${idx}_${Date.now()}`,
      char: item.char,
      phonemeId: item.phonemeId,
      isCorrect: item.isCorrect,
      color: BUBBLE_COLORS[idx % BUBBLE_COLORS.length],
      size: 80 + Math.floor(Math.random() * 15) // 80-95px touch target
    }));

    setBubbles(generated);
    setIsRoundWon(false);
    setPoppedBubbleId(null);
    setShakingBubbleId(null);
  }, [getDistractorsFor]);

  // Start new round
  const startNewRound = useCallback((roundNum: number) => {
    setRound(roundNum);
    generateBubbles(targetPhoneme);

    // Audio cue: play pure target phoneme sound
    setTimeout(() => {
      audioService.playPhoneme(targetPhoneme);
    }, 300);
  }, [generateBubbles, targetPhoneme]);

  // Reset or initialize on mount / phoneme change
  useEffect(() => {
    setTargetPhoneme(initialPhonemeId);
    setRound(1);
    setIsGameOver(false);
    startNewRound(1);
  }, [initialPhonemeId, startNewRound]);

  // Handle Bubble Tap in Mode 1
  const handleTapBubble = (bubble: BubbleItem) => {
    if (isRoundWon || isGameOver) return;

    if (bubble.isCorrect) {
      // Correct answer!
      setPoppedBubbleId(bubble.id);
      audioService.playPopSound(600);
      setIsRoundWon(true);

      setTimeout(() => {
        audioService.playPhoneme(targetPhoneme);
      }, 250);

      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }

      if (onAddStars) {
        onAddStars(1);
      }

      // Progress to next round or victory
      setTimeout(() => {
        if (round < totalRounds) {
          startNewRound(round + 1);
        } else {
          // Game Over / Victory
          setIsGameOver(true);
          audioService.playSuccessJingle();
          if (onComplete) {
            onComplete();
          }
        }
      }, 1400);
    } else {
      // Distractor tapped: gentle feedback
      setShakingBubbleId(bubble.id);
      audioService.playGentleTryAgain();

      // Play the sound of what child actually tapped, then remind of target sound!
      setTimeout(() => {
        audioService.playPhoneme(bubble.phonemeId);
      }, 200);

      setTimeout(() => {
        setShakingBubbleId(null);
      }, 500);
    }
  };

  // Replay prompt audio
  const handlePlayPromptAudio = () => {
    audioService.playPopSound(520);
    if (activeMode === 'bubble_sound') {
      audioService.playPhoneme(targetPhoneme);
    } else {
      const soundId = activeTargetInPair === 'A' ? activePair.phonemeIdA : activePair.phonemeIdB;
      audioService.playPhoneme(soundId);
    }
  };

  // Mode 2: Handle pair choice tap
  const handleSelectPairChoice = (choice: 'A' | 'B') => {
    if (choice === activeTargetInPair) {
      // Correct!
      audioService.playPopSound(600);
      const soundId = choice === 'A' ? activePair.phonemeIdA : activePair.phonemeIdB;
      setTimeout(() => {
        audioService.playPhoneme(soundId);
      }, 200);

      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }

      if (onAddStars) {
        onAddStars(1);
      }

      // Switch to other letter of pair or next pair
      setTimeout(() => {
        if (activeTargetInPair === 'A') {
          setActiveTargetInPair('B');
          audioService.playPhoneme(activePair.phonemeIdB);
        } else {
          // Next pair
          const nextIdx = (selectedPairIndex + 1) % CONFUSION_PAIRS_CATALOG.length;
          setSelectedPairIndex(nextIdx);
          setActiveTargetInPair('A');
          audioService.playPhoneme(CONFUSION_PAIRS_CATALOG[nextIdx].phonemeIdA);
        }
      }, 1200);
    } else {
      // Incorrect choice
      audioService.playGentleTryAgain();
      const soundId = choice === 'A' ? activePair.phonemeIdA : activePair.phonemeIdB;
      setTimeout(() => {
        audioService.playPhoneme(soundId);
      }, 200);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      {/* Top Bar Mode Switcher & Round Progress */}
      <div className="flex items-center justify-between px-2 py-1.5 bg-amber-50/90 rounded-2xl border border-amber-200 shadow-xs mb-2 shrink-0">
        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => {
              setActiveMode('bubble_sound');
              startNewRound(1);
            }}
            className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeMode === 'bubble_sound'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white text-amber-900 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            🫧 Bắt Bong Bóng Âm
          </button>

          <button
            onClick={() => {
              setActiveMode('confusion_detective');
              audioService.playPhoneme(activePair.phonemeIdA);
            }}
            className={`px-3 py-1 rounded-xl text-xs font-black transition-all cursor-pointer ${
              activeMode === 'confusion_detective'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white text-purple-900 hover:bg-purple-100 border border-purple-200'
            }`}
          >
            🔍 Cặp Chữ Dễ Nhầm (b/d, p/q)
          </button>
        </div>

        {/* Round Progress Stars */}
        <div className="flex items-center space-x-1.5 bg-white/90 px-2.5 py-1 rounded-xl border border-amber-200 shadow-xs">
          <span className="text-xs font-black text-amber-900">Vòng {round}/{totalRounds}</span>
          <div className="flex space-x-0.5">
            {Array.from({ length: totalRounds }).map((_, i) => (
              <span
                key={i}
                className={`text-sm ${i < round ? 'text-amber-500' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interactive Arena */}
      <div className="flex-1 min-h-0 relative flex flex-col items-center justify-center p-2">
        {activeMode === 'bubble_sound' ? (
          /* MODE 1: BUBBLE SOUND CATCH */
          <div className="w-full max-w-xl h-full flex flex-col justify-between items-center bg-radial from-amber-50 to-orange-100/50 rounded-3xl border-4 md:border-6 border-amber-300 shadow-xl p-4 relative overflow-hidden">
            
            {/* Audio Prompt Button Banner */}
            <div className="shrink-0 flex flex-col items-center mb-2 z-10">
              <button
                onClick={handlePlayPromptAudio}
                className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black px-6 py-3 rounded-full shadow-lg border-2 border-amber-200 active:scale-95 transition-transform cursor-pointer animate-bounce"
              >
                <Volume2 className="w-6 h-6" />
                <span className="text-base sm:text-lg">Bấm để nghe âm thanh 🔊</span>
              </button>
              <p className="text-xs sm:text-sm font-bold text-amber-900 mt-1">
                Bé hãy chạm vào bong bóng có âm vừa nghe nhé!
              </p>
            </div>

            {/* Floating Bubbles Field (Grid layout for responsive child-friendly touch) */}
            <div className="w-full flex-1 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-sm place-items-center">
                {bubbles.map((b) => {
                  const isPopped = poppedBubbleId === b.id;
                  const isShaking = shakingBubbleId === b.id;

                  return (
                    <button
                      key={b.id}
                      onClick={() => handleTapBubble(b)}
                      disabled={isPopped || isRoundWon}
                      className={`relative rounded-full flex items-center justify-center font-black shadow-lg border-4 transition-all duration-300 cursor-pointer select-none active:scale-90 ${
                        b.color
                      } ${
                        isPopped
                          ? 'scale-125 opacity-0 duration-300'
                          : isShaking
                          ? 'animate-wiggle scale-95 ring-4 ring-rose-400'
                          : 'hover:scale-105 hover:shadow-xl'
                      }`}
                      style={{
                        width: `${b.size}px`,
                        height: `${b.size}px`
                      }}
                    >
                      {/* Bubble highlight sheen */}
                      <div className="absolute top-2 left-3 w-5 h-2.5 bg-white/60 rounded-full rotate-[-30deg] pointer-events-none" />

                      <span className="text-3xl sm:text-4xl drop-shadow-xs">
                        {b.char}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Round Feedback / Win Banner */}
            {isRoundWon && (
              <div className="absolute inset-0 bg-emerald-500/80 backdrop-blur-xs flex flex-col items-center justify-center text-white z-20 animate-fadeIn">
                <div className="text-4xl sm:text-5xl mb-1 animate-bounce">🎯🎉</div>
                <h3 className="text-xl sm:text-2xl font-black">Chính Xác!</h3>
                <p className="text-sm font-bold text-emerald-100">Bé tìm đúng chữ /{targetPhoneme}/ rồi!</p>
              </div>
            )}

            {/* Victory Modal */}
            {isGameOver && (
              <div className="absolute inset-0 bg-amber-500/95 backdrop-blur-xs flex flex-col items-center justify-center text-white z-30 p-4 animate-fadeIn">
                <Trophy className="w-16 h-16 text-yellow-300 animate-bounce mb-2" />
                <h2 className="text-2xl sm:text-3xl font-black mb-1">Xuất Sắc Hoàn Thành! 🏆</h2>
                <p className="text-sm font-bold text-amber-100 mb-4 text-center">
                  Bé đã nhận diện cực kỳ chuẩn xác âm /{targetPhoneme}/!
                </p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      setIsGameOver(false);
                      startNewRound(1);
                    }}
                    className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-2 rounded-2xl border border-white/40 cursor-pointer text-xs sm:text-sm active:scale-95 flex items-center space-x-1"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Chơi Lại</span>
                  </button>
                  {onComplete && (
                    <button
                      onClick={onComplete}
                      className="bg-white hover:bg-amber-100 text-amber-900 font-black px-6 py-2.5 rounded-2xl shadow-lg cursor-pointer text-xs sm:text-sm active:scale-95 flex items-center space-x-1.5"
                    >
                      <span>Bước Kế Tiếp</span>
                      <ArrowRight className="w-4 h-4 text-amber-600" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* MODE 2: CONFUSION PAIR DETECTIVE */
          <div className="w-full max-w-xl h-full flex flex-col justify-between items-center bg-purple-50/70 rounded-3xl border-4 md:border-6 border-purple-300 shadow-xl p-4 relative overflow-hidden">
            
            {/* Header: Distinction Rule Banner */}
            <div className="shrink-0 w-full text-center mb-2">
              <div className="inline-flex items-center space-x-2 bg-purple-200/90 px-4 py-1.5 rounded-full border border-purple-300 text-purple-950 font-black text-xs sm:text-sm shadow-xs mb-1">
                <span>{activePair.titleVi}</span>
              </div>
              <p className="text-xs font-bold text-purple-900 max-w-md mx-auto leading-relaxed">
                {activePair.distinctionRuleVi}
              </p>
            </div>

            {/* Audio Challenge Button */}
            <div className="shrink-0 mb-3">
              <button
                onClick={handlePlayPromptAudio}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black px-5 py-2.5 rounded-full shadow-md border-2 border-purple-200 active:scale-95 transition-transform cursor-pointer animate-pulse"
              >
                <Volume2 className="w-5 h-5" />
                <span className="text-sm sm:text-base">
                  Nghe âm: &quot;{activeTargetInPair === 'A' ? activePair.soundA : activePair.soundB}&quot; (Bấm nghe 🔊)
                </span>
              </button>
            </div>

            {/* Two Side-by-Side Target Cards (Bat vs Ball / Drum vs Stick) */}
            <div className="w-full flex-1 flex items-center justify-center space-x-4 sm:space-x-8 px-2">
              {/* Option A */}
              <button
                onClick={() => handleSelectPairChoice('A')}
                className="flex-1 max-w-[170px] h-[190px] bg-white hover:bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-lg flex flex-col items-center justify-between p-3 active:scale-95 transition-transform cursor-pointer group"
              >
                <span className="text-3xl sm:text-4xl">{activePair.mnemonicVisualA}</span>
                <span className="text-5xl sm:text-6xl font-black text-amber-900 group-hover:scale-110 transition-transform">
                  {activePair.charA}
                </span>
                <span className="text-[11px] font-bold text-amber-800 text-center leading-tight">
                  {activePair.mnemonicTextA}
                </span>
              </button>

              {/* VS Divider Badge */}
              <div className="w-10 h-10 rounded-full bg-purple-200 text-purple-900 font-black flex items-center justify-center border-2 border-purple-300 text-xs shadow-xs shrink-0">
                VS
              </div>

              {/* Option B */}
              <button
                onClick={() => handleSelectPairChoice('B')}
                className="flex-1 max-w-[170px] h-[190px] bg-white hover:bg-sky-50 rounded-3xl border-4 border-sky-300 shadow-lg flex flex-col items-center justify-between p-3 active:scale-95 transition-transform cursor-pointer group"
              >
                <span className="text-3xl sm:text-4xl">{activePair.mnemonicVisualB}</span>
                <span className="text-5xl sm:text-6xl font-black text-sky-900 group-hover:scale-110 transition-transform">
                  {activePair.charB}
                </span>
                <span className="text-[11px] font-bold text-sky-800 text-center leading-tight">
                  {activePair.mnemonicTextB}
                </span>
              </button>
            </div>

            {/* Pair Switcher Footer */}
            <div className="flex items-center space-x-2 pt-2 border-t border-purple-200 w-full justify-center shrink-0">
              {CONFUSION_PAIRS_CATALOG.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedPairIndex(idx);
                    setActiveTargetInPair('A');
                    audioService.playPhoneme(p.phonemeIdA);
                  }}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedPairIndex === idx
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'bg-white text-purple-900 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  {p.charA} / {p.charB}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pedagogical Safety Guidance */}
      <div className="text-center text-[11px] font-bold text-amber-800/80 py-1 shrink-0">
        💡 Giáo trình UFLI Foundations: Luyện phân biệt âm - chữ qua thính giác và thị giác giúp bé không bao giờ bị nhầm lẫn mặt chữ!
      </div>
    </div>
  );
};
