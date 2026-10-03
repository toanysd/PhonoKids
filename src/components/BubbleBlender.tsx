import React, { useState } from 'react';
import { BlendActivity } from '../types/phonics';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { KidButton } from './KidButton';
import { Sparkles, Wand2, RefreshCw, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BubbleBlenderProps {
  activity: BlendActivity;
  onCompleted?: () => void;
}

export const BubbleBlender: React.FC<BubbleBlenderProps> = ({ activity, onCompleted }) => {
  const [activeBubbles, setActiveBubbles] = useState<number[]>([]);
  const [isBlended, setIsBlended] = useState<boolean>(false);

  const visual = getWordVisual(activity.word);

  const handleTapBubble = (index: number, phoneme: string) => {
    audioService.speakEnglish(phoneme, 0.8);
    if (!activeBubbles.includes(index)) {
      setActiveBubbles([...activeBubbles, index]);
    }
  };

  const handleBlendTogether = async () => {
    audioService.playMagicChime();
    setIsBlended(true);

    // Speak phonemes in rapid sequence then the whole word
    for (const p of activity.phonemes) {
      await audioService.speakEnglish(p, 0.9);
      await new Promise(r => setTimeout(r, 120));
    }

    // Blend complete word
    await audioService.speakEnglish(activity.word, 0.85);
    audioService.playSuccessJingle();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignore
    }

    onCompleted?.();
  };

  const handleReset = () => {
    setIsBlended(false);
    setActiveBubbles([]);
  };

  return (
    <div className="bg-gradient-to-b from-sky-100 to-indigo-50 rounded-3xl p-3 sm:p-5 border-4 border-sky-300 shadow-xl flex-1 min-h-0 flex flex-col justify-between overflow-hidden text-center">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between shrink-0 mb-1">
        <span className="text-xs sm:text-sm font-black text-sky-900 bg-sky-200/90 px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1.5 shadow-xs">
          <Wand2 className="w-4 h-4 text-sky-700" />
          <span>Ghép âm thần kỳ (Sound Blending)</span>
        </span>

        {isBlended && (
          <button
            onClick={handleReset}
            className="p-1.5 text-sky-700 hover:text-sky-900 bg-white rounded-full shadow-xs active:rotate-180 transition-transform cursor-pointer border border-sky-200"
            title="Thử lại từ này"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bubble Stage */}
      {!isBlended ? (
        <div className="flex-1 min-h-0 flex flex-col justify-around py-2">
          <p className="text-xs sm:text-sm md:text-base font-bold text-sky-950 shrink-0">
            Chạm từng bong bóng âm thanh rồi ấn nút để ghép thành bức tranh hoàn chỉnh nhé!
          </p>

          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-6 my-auto">
            {activity.phonemes.map((phoneme, idx) => {
              const isTapped = activeBubbles.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => handleTapBubble(idx, phoneme)}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center font-black text-3xl sm:text-4xl md:text-5xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg border-4 ${
                    isTapped
                      ? 'bg-amber-300 border-amber-400 text-amber-950 scale-105 ring-4 ring-amber-200 bubble-glow animate-bounce'
                      : 'bg-white border-sky-300 text-sky-800 hover:scale-105'
                  }`}
                >
                  <span>{phoneme}</span>
                  <span className="text-[10px] font-black text-sky-600">Chạm nghe</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center shrink-0">
            <KidButton
              variant="warning"
              size="md"
              onClick={handleBlendTogether}
              className="w-full max-w-sm text-sm sm:text-base py-2.5 shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2 animate-spin" />
              <span>Ghép Lại Thành Bức Tranh!</span>
            </KidButton>
          </div>
        </div>
      ) : (
        /* Blended Result Stage with Compact Hero Ehon Artwork Plate */
        <div className="flex-1 min-h-0 flex flex-col items-center justify-around py-1 animate-pulse-glow">
          
          {/* Hero Ehon Artwork Plate */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-xl bg-white group shrink-0">
            <img
              src={visual.url}
              alt={visual.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
              {visual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Ảnh Thật'}
            </div>
            <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-lg border border-amber-300 shadow">
              {visual.alt}
            </div>
          </div>

          {/* Big Word Badge */}
          <div className="inline-block bg-white border-3 border-amber-400 rounded-2xl px-6 py-1.5 sm:px-8 sm:py-2 shadow-md shrink-0">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 tracking-wider">
              {activity.word.toUpperCase()}
            </span>
          </div>

          <p className="text-sm sm:text-base font-extrabold text-amber-900 shrink-0">
            Ý nghĩa: <span className="text-amber-700 underline decoration-amber-400">{activity.meaningVi}</span> 🌟
          </p>

          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <KidButton
              variant="secondary"
              size="md"
              onClick={() => audioService.speakEnglish(activity.word, 0.85)}
              className="py-2 text-xs sm:text-sm"
            >
              <Volume2 className="w-4 h-4 mr-1.5" />
              <span>Nghe Lại Phát Âm</span>
            </KidButton>
            <KidButton
              variant="success"
              size="md"
              onClick={handleReset}
              className="py-2 text-xs sm:text-sm"
            >
              <RefreshCw className="w-4 h-4 mr-1.5" />
              <span>Chơi Từ Khác Nào!</span>
            </KidButton>
          </div>
        </div>
      )}
    </div>
  );
};
