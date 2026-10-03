import React from 'react';
import { PhonemeInfo } from '../types/phonics';
import { Volume2, Sparkles, Wind } from 'lucide-react';
import { audioService } from '../services/audioService';

interface SoundVisemeGuideProps {
  phoneme: PhonemeInfo;
}

export const SoundVisemeGuide: React.FC<SoundVisemeGuideProps> = ({ phoneme }) => {
  const { mouthGuide, tprAction } = phoneme;

  const handleHearPhoneme = () => {
    audioService.speakPhoneme(phoneme.id, phoneme.ipa);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-4 border-amber-300 shadow-xl max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4 border-b-2 border-amber-100 pb-3">
        <div className="flex items-center space-x-3">
          <span className="text-4xl p-2 bg-amber-100 rounded-2xl">👄</span>
          <div>
            <h3 className="text-2xl font-black text-amber-950">
              Khẩu hình chuẩn: <span className="text-amber-600">{phoneme.grapheme.toUpperCase()}</span> ({phoneme.ipa})
            </h3>
            <p className="text-sm font-bold text-amber-800">Bí quyết phát âm chuẩn như người bản xứ</p>
          </div>
        </div>

        <button
          onClick={handleHearPhoneme}
          className="p-3 bg-amber-400 hover:bg-amber-500 rounded-2xl active:scale-95 transition-transform flex items-center space-x-2 text-amber-950 font-bold"
          title="Nghe âm chuẩn"
        >
          <Volume2 className="w-6 h-6 animate-pulse" />
          <span>Nghe</span>
        </button>
      </div>

      {/* Viseme Graphic Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-4">
        {/* Animated Mouth Avatar */}
        <div className="relative bg-gradient-to-b from-rose-100 to-amber-100 rounded-2xl p-4 flex flex-col items-center justify-center border-2 border-rose-200 min-h-[170px]">
          <div className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mô phỏng cơ miệng</span>
          </div>

          {/* Dynamic 2D Mouth Articulation */}
          <div className="relative w-32 h-24 flex items-center justify-center">
            {/* Outer Lips */}
            <div className={`relative transition-all duration-300 border-4 border-rose-400 bg-rose-300 flex items-center justify-center ${
              mouthGuide.mouthShape === 'closed' ? 'w-24 h-4 rounded-full' :
              mouthGuide.mouthShape === 'round' ? 'w-16 h-16 rounded-full' :
              mouthGuide.mouthShape === 'wide' ? 'w-28 h-10 rounded-full' :
              mouthGuide.mouthShape === 'teeth_together' ? 'w-24 h-8 rounded-full' :
              'w-20 h-16 rounded-full'
            }`}>
              {/* Teeth */}
              {(mouthGuide.mouthShape === 'teeth_together' || mouthGuide.mouthShape === 'open' || mouthGuide.mouthShape === 'wide') && (
                <div className="absolute top-1 w-16 h-3 bg-white rounded-t-sm border-b border-rose-300" />
              )}
              {mouthGuide.mouthShape === 'teeth_together' && (
                <div className="absolute bottom-1 w-14 h-3 bg-white rounded-b-sm border-t border-rose-300" />
              )}

              {/* Tongue Position */}
              <div className={`transition-all duration-300 bg-rose-500 rounded-full ${
                mouthGuide.tonguePosition === 'behind_top_teeth' ? 'w-6 h-4 -translate-y-1' :
                mouthGuide.tonguePosition === 'up_back' ? 'w-8 h-4 translate-x-2' :
                mouthGuide.tonguePosition === 'curled' ? 'w-6 h-6 rounded-t-xl' :
                'w-10 h-3 translate-y-2'
              }`} />
            </div>

            {/* Airflow Wind indicator */}
            {mouthGuide.airFlow === 'puff' && (
              <div className="absolute -right-3 flex space-x-0.5 text-sky-500 animate-bounce">
                <Wind className="w-6 h-6" />
              </div>
            )}
            {mouthGuide.airFlow === 'continuous' && (
              <div className="absolute -right-3 text-emerald-500 animate-pulse">
                <span className="font-mono font-black text-sm tracking-tighter">💨💨</span>
              </div>
            )}
          </div>

          <div className="mt-2 text-center text-xs font-extrabold text-amber-900 bg-white/70 px-3 py-1 rounded-full">
            {mouthGuide.mouthShape === 'closed' && 'Mím chặt môi'}
            {mouthGuide.mouthShape === 'round' && 'Chu tròn môi'}
            {mouthGuide.mouthShape === 'wide' && 'Mỉm cười hé khóe miệng'}
            {mouthGuide.mouthShape === 'teeth_together' && 'Răng khép nhẹ xì hơi'}
            {mouthGuide.mouthShape === 'open' && 'Há rộng cằm tự nhiên'}
          </div>
        </div>

        {/* Guided instructions in Vietnamese */}
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-950 flex flex-col justify-center space-y-2">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Cách luyện tập cho bé:</div>
          <p className="text-sm font-semibold leading-relaxed">
            {mouthGuide.instructionsVi}
          </p>

          <div className="pt-2 border-t border-amber-200">
            <span className="text-xs font-black text-orange-700">Động tác TPR vui nhộn:</span>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-2xl">{tprAction.icon}</span>
              <p className="text-xs font-bold text-amber-900">{tprAction.descriptionVi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
