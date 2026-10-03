import React, { useState, useEffect } from 'react';
import { BlendActivity } from '../types/phonics';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { KidButton } from './KidButton';
import { Sparkles, Wand2, RefreshCw, Volume2, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BubbleBlenderProps {
  activity: BlendActivity;
  onCompleted?: () => void;
  onNextWord?: () => void;
  onPrevWord?: () => void;
}

export const BubbleBlender: React.FC<BubbleBlenderProps> = ({
  activity,
  onCompleted,
  onNextWord,
  onPrevWord,
}) => {
  const [activeBubbles, setActiveBubbles] = useState<number[]>([]);
  const [isBlended, setIsBlended] = useState<boolean>(false);

  // Auto-reset when word changes
  useEffect(() => {
    setIsBlended(false);
    setActiveBubbles([]);
  }, [activity.word]);

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
    audioService.playPopSound(460);
    setIsBlended(false);
    setActiveBubbles([]);
  };

  const handleNextWordClick = () => {
    if (onNextWord) {
      audioService.playPopSound(520);
      handleReset();
      onNextWord();
    }
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
            title="Làm lại từ này"
          >
            <RotateCcw className="w-4 h-4" />
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
                  <span className="text-[10px] font-black text-sky-600 flex items-center space-x-0.5">
                    <Volume2 className="w-3 h-3" />
                    <span>Nghe</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center shrink-0">
            <KidButton
              variant="warning"
              size="md"
              onClick={handleBlendTogether}
              className="w-full max-w-sm text-sm sm:text-base py-3 shadow-xl"
            >
              <Wand2 className="w-5 h-5 mr-2 animate-pulse" />
              <span>Ghép Lại Thành Bức Tranh! 🪄</span>
            </KidButton>
          </div>
        </div>
      ) : (
        /* Blended Result Stage with Compact Hero Ehon Artwork Plate */
        <div className="flex-1 min-h-0 flex flex-col items-center justify-around py-1 animate-pulse-glow">
          
          {/* Hero Ehon Artwork Plate - Clickable to Speak */}
          <div 
            onClick={() => audioService.speakEnglish(activity.word, 0.85)}
            className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-xl bg-white group shrink-0 cursor-pointer hover:border-amber-500 transition-all"
            title="Chạm vào tranh để nghe đọc"
          >
            <img
              src={visual.url}
              alt={visual.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">
              {visual.type === 'ehon' ? '🎨 Tranh Ehon' : '📷 Ảnh Thật'}
            </div>
            <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-lg border border-amber-300 shadow flex items-center space-x-1">
              <Volume2 className="w-3 h-3 text-amber-600" />
              <span>Chạm để nghe</span>
            </div>
          </div>

          {/* Big Word Badge */}
          <div 
            onClick={() => audioService.speakEnglish(activity.word, 0.85)}
            className="inline-block bg-white border-3 border-amber-400 rounded-2xl px-6 py-1 sm:px-8 sm:py-1.5 shadow-md shrink-0 cursor-pointer hover:bg-amber-50 transition-colors"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 tracking-wider">
              {activity.word.toUpperCase()}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-extrabold text-amber-900 shrink-0">
            Ý nghĩa: <span className="text-amber-700 underline decoration-amber-400">{activity.meaningVi}</span> 🌟
          </p>

          {/* Three Prominent Action Buttons: Hear Again, Repeat Blend, Next Word */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 shrink-0 mt-1">
            {/* Audio Replay Button */}
            <KidButton
              variant="secondary"
              size="sm"
              onClick={() => audioService.speakEnglish(activity.word, 0.85)}
              className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-black shadow-md"
              title="Nghe lại phát âm"
            >
              <Volume2 className="w-4 h-4 mr-1.5 animate-pulse" />
              <span>Nghe Lại 🔊</span>
            </KidButton>

            {/* Repeat Blending Button (Correctly labeled Repeat / Re-blend) */}
            <KidButton
              variant="purple"
              size="sm"
              onClick={handleReset}
              className="py-2 px-3 sm:px-4 text-xs sm:text-sm font-black shadow-md"
              title="Tách bóng bóng ghép lại"
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              <span>Ghép Lại 🔄</span>
            </KidButton>

            {/* Next Word Button - Prominent Green Forward Action */}
            {onNextWord && (
              <KidButton
                variant="success"
                size="sm"
                onClick={handleNextWordClick}
                className="py-2 px-4 sm:px-5 text-xs sm:text-sm font-black shadow-lg"
                title="Chuyển sang từ tiếp theo"
              >
                <span>Từ Tiếp Theo ➔</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </KidButton>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
