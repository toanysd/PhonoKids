import React, { useEffect } from 'react';
import { audioService } from '../services/audioService';

interface RestBreakModalProps {
  onContinue: () => void;
  onFinishSession: () => void;
}

export const RestBreakModal: React.FC<RestBreakModalProps> = ({
  onContinue,
  onFinishSession,
}) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onFinishSession();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onFinishSession]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Giờ nghỉ ngơi cho mắt"
      data-testid="rest-break-modal"
      className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
    >
      <div className="relative bg-[#FFFDF5] comic-halftone rounded-[28px] p-4 sm:p-7 max-w-lg w-full border-[4px] border-[#0F172A] shadow-[6px_8px_0_#0F172A] text-center flex flex-col gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(480);
            onFinishSession();
          }}
          aria-label="Đóng màn hình nghỉ ngơi"
          className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-[#FFE4E6] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] flex items-center justify-center cursor-pointer active:translate-y-[2px]"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="#0F172A" strokeWidth="3.2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="w-24 h-24 rounded-full border-[4px] border-[#0F172A] bg-[#FACC15] shadow-[4px_5px_0_#0F172A] mx-auto p-1.5 animate-starburst-pulse">
          <img
            src="/assets/comic/words/sun.webp"
            alt="Sunny Star"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        <div>
          <span className="inline-block text-xs font-display font-black text-[#0F172A] bg-[#FACC15] border-[2.5px] border-[#0F172A] px-3 py-1 rounded-full uppercase">
            Giờ Cho Mắt Nghỉ Ngơi
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] mt-2 leading-tight">
            Mắt Bé Cần Nghỉ Chút Xíu!
          </h3>
          <p className="text-xs sm:text-sm font-bold text-slate-700 mt-1">
            Nhìn ra xa 20 giây và vươn vai thật cao cùng các anh hùng nhé.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => {
              audioService.playPopSound(480);
              onFinishSession();
            }}
            className="w-full h-14 rounded-2xl bg-[#EF4444] hover:bg-[#F87171] text-white border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] active:translate-y-[2px] font-display font-black text-base cursor-pointer"
          >
            Nghỉ Ngơi Hôm Nay
          </button>

          <button
            type="button"
            onClick={() => {
              audioService.playPopSound(560);
              onContinue();
            }}
            className="w-full h-14 rounded-2xl bg-[#A3E635] hover:bg-[#BEF264] text-[#0F172A] border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] active:translate-y-[2px] font-display font-black text-base cursor-pointer"
          >
            Chơi Thêm 3 Phút Nữa
          </button>
        </div>
      </div>
    </div>
  );
};
