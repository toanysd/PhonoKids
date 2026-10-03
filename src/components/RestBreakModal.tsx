import React from 'react';
import { KidButton } from './KidButton';
import { Moon, Sparkles, Sun } from 'lucide-react';
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
      <div className="bg-amber-50 rounded-3xl p-6 md:p-8 max-w-lg w-full border-8 border-amber-300 shadow-2xl text-center">
        
        <div className="w-24 h-24 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <Sun className="w-14 h-14 text-amber-600" />
        </div>

        <span className="text-xs font-black text-amber-800 bg-amber-200 px-3 py-1 rounded-full uppercase tracking-wider">
          Giờ Cho Mắt Nghỉ Ngơi (Screen Time Break)
        </span>

        <h3 className="text-2xl md:text-3xl font-black text-amber-950 mt-2 mb-2">
          Mắt Bé Sáng Tinh Anh Cần Nghỉ Chút Xíu! 👀✨
        </h3>

        <p className="text-sm font-bold text-amber-800 mb-6">
          Bé đã học tập rất chăm chỉ! Hãy nhìn ra xa ngoài cửa sổ, chớp mắt nhẹ nhàng và cùng vươn vai hít thở sâu nhé.
        </p>

        {/* TPR Rest Exercise */}
        <div className="bg-white rounded-2xl p-4 border-2 border-amber-200 mb-6 text-left flex items-center space-x-4">
          <span className="text-5xl">🦒</span>
          <div>
            <h4 className="font-black text-amber-950 text-sm">Động tác Vươn Cao Hươu Cao Cổ (TPR)</h4>
            <p className="text-xs font-bold text-gray-600 mt-0.5">
              Đứng thẳng người, giơ hai tay lên cao qua đầu và nhón chân 3 lần: "Stretch high like a giraffe!"
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <KidButton
            variant="warning"
            size="md"
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
            size="md"
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
