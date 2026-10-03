import React from 'react';
import { KidButton } from './KidButton';
import { Moon, Sparkles } from 'lucide-react';
import { audioService } from '../services/audioService';

interface RestBreakModalProps {
  onContinue: () => void;
  onFinishSession: () => void;
}

export const RestBreakModal: React.FC<RestBreakModalProps> = ({
  onContinue,
  onFinishSession,
}) => {
  return (
    <div className="fixed inset-0 bg-amber-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-amber-50 rounded-3xl p-6 md:p-8 max-w-xl w-full border-8 border-amber-300 shadow-2xl text-center">
        
        {/* Ehon Sun Painting Emblem */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl mx-auto mb-4 animate-bounce bg-amber-100">
          <img
            src="/assets/ehon/sun.jpg"
            alt="Mặt trời tranh Ehon"
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-xs font-black text-amber-900 bg-amber-200 px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
          Giờ Cho Mắt Nghỉ Ngơi (Screen Time Break)
        </span>

        <h3 className="text-2xl md:text-3xl font-black text-amber-950 mt-3 mb-2">
          Mắt Bé Sáng Tinh Anh Cần Nghỉ Chút Xíu! 👀✨
        </h3>

        <p className="text-sm font-bold text-amber-800 mb-6 leading-relaxed">
          Bé đã học tập rất chăm chỉ! Hãy nhìn ra xa ngoài cửa sổ ngắm cây xanh, chớp mắt nhẹ nhàng và cùng vươn vai thư giãn nhé.
        </p>

        {/* TPR Rest Exercise with Ehon Giraffe Art Plate */}
        <div className="bg-white rounded-2xl p-4 border-2 border-amber-200 mb-6 text-left flex items-center space-x-4 shadow-sm">
          <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-amber-300 shrink-0 shadow">
            <img
              src="/assets/ehon/giraffe.jpg"
              alt="Hươu cao cổ tranh Ehon vươn cổ ngắm sao"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-black text-amber-950 text-sm md:text-base">
              Động tác Vươn Cao Hươu Cao Cổ (TPR Stretch)
            </h4>
            <p className="text-xs md:text-sm font-bold text-gray-700 mt-1">
              Đứng thẳng người, giơ hai tay lên cao qua đầu và nhón chân 3 lần: <span className="text-amber-700 italic">"Stretch high like a giraffe!"</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <KidButton
            variant="warning"
            size="lg"
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
