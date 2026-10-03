import React, { useState } from 'react';
import { audioService } from '../services/audioService';

export const CharacterCompanion: React.FC = () => {
  const [speechBubble, setSpeechBubble] = useState<string>('Chào bé yêu! Cùng Leo khám phá tiếng Anh nhé!');
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
    audioService.playAnimalSound('bark');

    const randomQuote = cheerQuotes[Math.floor(Math.random() * cheerQuotes.length)];
    setSpeechBubble(randomQuote);

    setTimeout(() => {
      audioService.speakEnglish('You are doing great!', 0.9);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-end space-x-2 pointer-events-auto">
      {/* Speech Bubble */}
      <div className="bg-white/95 backdrop-blur-xs border-3 border-amber-400 p-3 rounded-2xl rounded-br-none shadow-xl max-w-xs text-xs font-black text-amber-950 animate-fadeIn hidden sm:block">
        <p>{speechBubble}</p>
      </div>

      {/* Mascot Avatar */}
      <button
        onClick={handleTapCompanion}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 border-4 border-white shadow-2xl flex items-center justify-center text-4xl md:text-5xl cursor-pointer transform active:scale-90 transition-transform ${
          isAnimating ? 'animate-bounce' : 'animate-float'
        }`}
        title="Chạm vào chú sư tử Leo"
      >
        🦁
      </button>
    </div>
  );
};
