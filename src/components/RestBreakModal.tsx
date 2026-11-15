import React, { useEffect } from 'react';
import { KidButton } from './KidButton';
import { Moon, Sparkles, X } from 'lucide-react';
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
      className="fixed inset-0 bg-amber-950/80 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
    >
      <div className="relative bg-amber-50 rounded-3xl p-4 sm:p-7 max-w-lg w-full max-h-[92dvh] overflow-y-auto border-4 sm:border-8 border-amber-300 shadow-2xl text-center flex flex-col gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => {
            audioService.playPopSound(480);
            onFinishSession();
          }}
          aria-label="Đóng màn hình nghỉ ngơi"
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-amber-200/90 hover:bg-amber-300 text-amber-950 flex items-center justify-center cursor-pointer active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ehon Sun Painting Emblem */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl mx-auto animate-bounce bg-amber-100 shrink-0">
          <img
            src="/assets/ehon/sun.jpg"
            alt="Mặt trời tranh Ehon"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <span className="text-[11px] font-black text-amber-900 bg-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
            Giờ Cho Mắt Nghỉ Ngơi
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-amber-950 mt-2 leading-tight">
            Mắt Bé Cần Nghỉ Chút Xíu! 👀
          </h3>
        </div>

        {/* TPR Rest Exercise with Ehon Giraffe Art Plate */}
        <div className="bg-white rounded-2xl p-3 border-2 border-amber-200 text-left flex items-center gap-3 shadow-sm">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-amber-300 shrink-0 shadow">
            <img
              src="/assets/ehon/giraffe.jpg"
              alt="Hươu cao cổ vươn vai"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-black text-amber-950 text-sm sm:text-base">
              Vươn Cao Hươu Cao Cổ
            </h4>
            <p className="text-xs sm:text-sm font-bold text-amber-800 mt-0.5 italic">
              &ldquo;Stretch high like a giraffe!&rdquo; 🦒
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <KidButton
            variant="warning"
            size="lg"
            className="w-full min-h-[52px]"
            onClick={() => {
              audioService.playPopSound(500);
              onFinishSession();
            }}
          >
            <Moon className="w-5 h-5 mr-1.5" />
            <span>Nghỉ Ngơi Hôm Nay</span>
          </KidButton>

          <KidButton
            variant="success"
            size="lg"
            className="w-full min-h-[52px]"
            onClick={() => {
              audioService.playPopSound(550);
              onContinue();
            }}
          >
            <Sparkles className="w-5 h-5 mr-1.5" />
            <span>Chơi Thêm 3 Phút Nữa</span>
          </KidButton>
        </div>
      </div>
    </div>
  );
};
