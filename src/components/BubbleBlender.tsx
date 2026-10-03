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
    <div className="bg-gradient-to-b from-sky-100 to-indigo-50 rounded-3xl p-6 md:p-8 border-4 border-sky-300 shadow-xl max-w-4xl mx-auto text-center">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm md:text-base font-black text-sky-900 bg-sky-200 px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center space-x-2 shadow-xs">
          <Wand2 className="w-5 h-5 text-sky-700" />
          <span>Ghép âm thần kỳ (Sound Blending)</span>
        </span>

        {isBlended && (
          <button
            onClick={handleReset}
            className="p-2.5 text-sky-700 hover:text-sky-900 bg-white rounded-full shadow-md active:rotate-180 transition-transform cursor-pointer border border-sky-200"
            title="Thử lại"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        )}
      </div>

      <p className="text-base md:text-lg font-bold text-sky-950 mb-8">
        Chạm từng bong bóng âm thanh rồi ấn nút để ghép thành bức tranh hoàn chỉnh nhé!
      </p>

      {/* Bubble Stage */}
      {!isBlended ? (
        <div className="py-8">
          <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 mb-10">
            {activity.phonemes.map((phoneme, idx) => {
              const isTapped = activeBubbles.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => handleTapBubble(idx, phoneme)}
                  className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center font-black text-4xl md:text-6xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-xl border-4 ${
                    isTapped
                      ? 'bg-amber-300 border-amber-400 text-amber-950 scale-110 ring-6 ring-amber-200 bubble-glow animate-bounce'
                      : 'bg-white border-sky-300 text-sky-800 hover:scale-105'
                  }`}
                >
                  <span>{phoneme}</span>
                  <span className="text-[11px] font-black text-sky-600 mt-1">Chạm để nghe</span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <KidButton
              variant="warning"
              size="lg"
              onClick={handleBlendTogether}
              className="w-full max-w-md text-lg md:text-xl py-4 shadow-xl"
            >
              <Sparkles className="w-6 h-6 mr-2 animate-spin" />
              <span>Ghép Lại Thành Bức Tranh!</span>
            </KidButton>
          </div>
        </div>
      ) : (
        /* Blended Result Stage with Large Ehon Picture Plate */
        <div className="py-6 animate-pulse-glow flex flex-col items-center">
          
          {/* Large Hero Ehon Artwork Plate */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border-6 border-amber-400 shadow-2xl mb-6 bg-white group">
            <img
              src={visual.url}
              alt={visual.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs font-black px-3 py-1 rounded-full shadow">
              {visual.type === 'ehon' ? '🎨 Tranh Ehon Sơn Dầu Cắt Dán' : '📷 Ảnh Thật Sắc Nét'}
            </div>
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-amber-950 text-xs font-black px-3 py-1 rounded-xl border border-amber-300 shadow">
              {visual.alt}
            </div>
          </div>

          {/* Big Word Badge */}
          <div className="inline-block bg-white border-4 border-amber-400 rounded-3xl px-10 py-4 shadow-xl mb-3">
            <span className="text-5xl md:text-7xl font-black text-amber-950 tracking-wider">
              {activity.word.toUpperCase()}
            </span>
          </div>

          <p className="text-xl md:text-2xl font-extrabold text-amber-900 mb-8">
            Ý nghĩa: <span className="text-amber-700 underline decoration-amber-400">{activity.meaningVi}</span> 🌟
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <KidButton
              variant="secondary"
              size="lg"
              onClick={() => audioService.speakEnglish(activity.word, 0.85)}
            >
              <Volume2 className="w-6 h-6 mr-2" />
              <span>Nghe Lại Phát Âm</span>
            </KidButton>
            <KidButton
              variant="success"
              size="lg"
              onClick={handleReset}
            >
              <RefreshCw className="w-6 h-6 mr-2" />
              <span>Chơi Từ Khác Nào!</span>
            </KidButton>
          </div>
        </div>
      )}
    </div>
  );
};
