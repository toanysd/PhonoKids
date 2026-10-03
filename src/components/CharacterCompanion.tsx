import React, { useState } from 'react';
import { audioService } from '../services/audioService';

export const CharacterCompanion: React.FC = () => {
  const [speechBubble, setSpeechBubble] = useState<string>('Chào bé yêu! Cùng Leo khám phá thế giới tranh Ehon nhé!');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const cheerQuotes = [
    'Bé giỏi lắm! Cứ từ từ lắng nghe tranh nhé! 🎨',
    'Phát âm to rõ nào: sss-sun! Mặt trời cười vui!',
    'Con là một nhà thám hiểm tuyệt vời của Leo! 🦁',
    'Chạm vào các bức tranh để cùng phiêu lưu nào!',
    'Mỗi ngày một chút xíu, con sẽ nói hay như người bản xứ! 🌟',
  ];

  const handleTapCompanion = () => {
    setIsAnimating(true);
    audioService.playAnimalSound('bark');

    const randomQuote = cheerQuotes[Math.floor(Math.random() * cheerQuotes.length)];
    setSpeechBubble(randomQuote);

    setTimeout(() => {
      audioService.speakEnglish('You are doing great!', 0.9);
      setIsAnimating(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-end space-x-2 pointer-events-auto select-none">
      {/* Speech Bubble with picture-book torn paper feel */}
      <div className="bg-amber-50/95 backdrop-blur-xs border-3 border-amber-400 p-3.5 rounded-2xl rounded-br-none shadow-2xl max-w-xs text-xs md:text-sm font-black text-amber-950 animate-fadeIn hidden sm:block">
        <p className="leading-snug">{speechBubble}</p>
        <span className="text-[10px] text-amber-700 font-bold block mt-1">~ Bạn sư tử Leo</span>
      </div>

      {/* Mascot Avatar using Authentic Ehon Painting */}
      <button
        onClick={handleTapCompanion}
        className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-amber-300 shadow-2xl overflow-hidden cursor-pointer transform active:scale-90 transition-transform bg-amber-100 group ${
          isAnimating ? 'animate-bounce' : 'animate-float ring-4 ring-amber-200'
        }`}
        title="Chạm vào chú sư tử Leo để nghe bạn trò chuyện"
      >
        <img
          src="/assets/ehon/leo.jpg"
          alt="Chú sư tử Leo tranh Ehon"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </button>
    </div>
  );
};
