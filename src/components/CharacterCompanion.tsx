import React, { useState } from 'react';
import { audioService } from '../services/audioService';
import { LeoCartoonMascot } from './illustrations/KidIllustrations';

export const CharacterCompanion: React.FC = () => {
  const [speechBubble, setSpeechBubble] = useState<string>('Chào bé yêu! Cùng Leo khám phá tiếng Anh nhé!');
  const [mood, setMood] = useState<'happy' | 'cheer' | 'wink'>('happy');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const cheerQuotes = [
    'Bé giỏi lắm! Cứ từ từ lắng nghe nhé! 🌟',
    'Phát âm to rõ nào: sss-sun! ☀️',
    'Con là một nhà thám hiểm tuyệt vời! 🦁',
    'Hãy uốn tay như chú rắn cùng Leo nhé! 🐍',
    'Mỗi ngày một chút xíu, con sẽ nói hay như người bản xứ! 🚀',
  ];

  const handleTapCompanion = () => {
    setIsAnimating(true);
    setMood('wink');
    audioService.playAnimalSound('bark');

    const randomQuote = cheerQuotes[Math.floor(Math.random() * cheerQuotes.length)];
    setSpeechBubble(randomQuote);

    setTimeout(() => {
      audioService.speakEnglish('You are doing great!', 0.9);
      setIsAnimating(false);
      setMood('happy');
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-end space-x-2 pointer-events-auto select-none">
      {/* Speech Bubble */}
      <div className="bg-white/95 backdrop-blur-xs border-3 border-amber-400 p-3 rounded-2xl rounded-br-none shadow-2xl max-w-xs text-xs font-black text-amber-950 animate-fadeIn hidden sm:block">
        <p>{speechBubble}</p>
      </div>

      {/* Mascot Avatar using High-Quality Vector SVG */}
      <button
        onClick={handleTapCompanion}
        className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 border-4 border-white shadow-2xl flex items-center justify-center cursor-pointer transform active:scale-90 transition-transform ${
          isAnimating ? 'animate-bounce' : 'animate-float'
        }`}
        title="Chạm vào chú sư tử Leo"
      >
        <LeoCartoonMascot size={80} mood={mood} />
      </button>
    </div>
  );
};
