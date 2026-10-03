import React, { useState } from 'react';
import { BlendActivity } from '../types/phonics';
import { audioService } from '../services/audioService';
import { KidButton } from './KidButton';
import { Sparkles, Wand2, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BubbleBlenderProps {
  activity: BlendActivity;
  onCompleted?: () => void;
}

export const BubbleBlender: React.FC<BubbleBlenderProps> = ({ activity, onCompleted }) => {
  const [activeBubbles, setActiveBubbles] = useState<number[]>([]);
  const [isBlended, setIsBlended] = useState<boolean>(false);

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
    <div className="bg-gradient-to-b from-sky-100 to-indigo-50 rounded-3xl p-6 border-4 border-sky-300 shadow-xl max-w-xl mx-auto text-center">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-black text-sky-900 bg-sky-200 px-3 py-1 rounded-full uppercase tracking-wider flex items-center space-x-1">
          <Wand2 className="w-4 h-4 text-sky-700" />
          <span>Ghép âm thần kỳ (Sound Blending)</span>
        </span>

        {isBlended && (
          <button
            onClick={handleReset}
            className="p-2 text-sky-700 hover:text-sky-900 bg-white rounded-full shadow-md active:rotate-180 transition-transform"
            title="Thử lại"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        )}
      </div>

      <p className="text-base font-bold text-sky-950 mb-6">
        Chạm từng bong bóng âm thanh rồi ấn nút để ghép thành từ hoàn chỉnh nhé!
      </p>

      {/* Bubble Stage */}
      {!isBlended ? (
        <div className="py-8">
          <div className="flex items-center justify-center space-x-4 md:space-x-6 mb-8">
            {activity.phonemes.map((phoneme, idx) => {
              const isTapped = activeBubbles.includes(idx);
              return (
                <button
                  key={idx}
                  onClick={() => handleTapBubble(idx, phoneme)}
                  className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center font-black text-3xl md:text-4xl transition-all duration-300 transform active:scale-95 cursor-pointer shadow-lg border-4 ${
                    isTapped
                      ? 'bg-amber-300 border-amber-400 text-amber-950 scale-110 ring-4 ring-amber-200 bubble-glow animate-bounce'
                      : 'bg-white border-sky-300 text-sky-800 hover:scale-105'
                  }`}
                >
                  <span>{phoneme}</span>
                  <span className="text-[10px] font-bold text-sky-600 mt-0.5">Chạm để nghe</span>
                </button>
              );
            })}
          </div>

          <KidButton
            variant="warning"
            size="lg"
            onClick={handleBlendTogether}
            className="w-full max-w-sm"
          >
            <Sparkles className="w-6 h-6 mr-2 animate-spin" />
            <span>Ghép Lại Nào!</span>
          </KidButton>
        </div>
      ) : (
        /* Blended Result Stage */
        <div className="py-6 animate-pulse-glow">
          <div className="text-7xl mb-4 animate-bounce">{activity.emoji}</div>
          <div className="inline-block bg-white border-4 border-amber-400 rounded-3xl px-8 py-4 shadow-xl mb-4">
            <span className="text-5xl md:text-6xl font-black text-amber-950 tracking-wider">
              {activity.word.toUpperCase()}
            </span>
          </div>
          <p className="text-lg font-extrabold text-amber-800 mb-6">
            Ý nghĩa: {activity.meaningVi} 🌟
          </p>

          <div className="flex justify-center space-x-4">
            <KidButton
              variant="secondary"
              size="md"
              onClick={() => audioService.speakEnglish(activity.word, 0.85)}
            >
              🔊 Nghe Lại
            </KidButton>
            <KidButton
              variant="success"
              size="md"
              onClick={handleReset}
            >
              🔄 Chơi Tiếp
            </KidButton>
          </div>
        </div>
      )}
    </div>
  );
};
