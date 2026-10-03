import React from 'react';
import { PhonemeInfo } from '../types/phonics';
import { Volume2, Sparkles, Wind, Smile } from 'lucide-react';
import { audioService } from '../services/audioService';
import { getVisemePhoto } from '../services/imageService';

interface SoundVisemeGuideProps {
  phoneme: PhonemeInfo;
}

export const SoundVisemeGuide: React.FC<SoundVisemeGuideProps> = ({ phoneme }) => {
  const { mouthGuide, tprAction } = phoneme;
  const visemePhoto = getVisemePhoto(mouthGuide.mouthShape, phoneme.id, mouthGuide.tonguePosition);

  const handleHearPhoneme = () => {
    audioService.speakPhoneme(phoneme.id, phoneme.ipa);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border-4 border-amber-300 shadow-xl max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4 border-b-2 border-amber-100 pb-3">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-amber-100 rounded-2xl border border-amber-300 text-amber-700 shadow-xs">
            <Smile className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-amber-950">
              Khẩu hình chuẩn: <span className="text-amber-600">{phoneme.grapheme.toUpperCase()}</span> ({phoneme.ipa})
            </h3>
            <p className="text-sm font-bold text-amber-800">Bí quyết phát âm chuẩn như người bản xứ</p>
          </div>
        </div>

        <button
          onClick={handleHearPhoneme}
          className="p-3 bg-amber-400 hover:bg-amber-500 rounded-2xl active:scale-95 transition-transform flex items-center space-x-2 text-amber-950 font-bold cursor-pointer shadow-xs"
          title="Nghe âm chuẩn"
        >
          <Volume2 className="w-6 h-6 animate-pulse" />
          <span>Nghe</span>
        </button>
      </div>

      {/* Viseme Real Photography Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-3">
        {/* Real Native Speaker Mouth Photography */}
        <div className="relative bg-amber-50 rounded-2xl p-2.5 flex flex-col items-center justify-center border-2 border-amber-300 shadow-sm">
          <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden relative shadow-inner bg-slate-900 border border-amber-200">
            <img
              src={visemePhoto.url}
              alt={visemePhoto.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            {/* Real photo badge */}
            <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] font-black px-2.5 py-0.5 rounded-full flex items-center space-x-1 shadow">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>📷 Ảnh Thật Khẩu Hình Chuẩn</span>
            </div>

            {/* Airflow Wind Indicator Overlay */}
            {mouthGuide.airFlow === 'puff' && (
              <div className="absolute bottom-2 right-2 bg-sky-500/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow flex items-center space-x-1 animate-bounce">
                <Wind className="w-3 h-3" />
                <span>Bật hơi mạnh</span>
              </div>
            )}
            {mouthGuide.airFlow === 'continuous' && (
              <div className="absolute bottom-2 right-2 bg-emerald-500/90 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow flex items-center space-x-1 animate-pulse">
                <Wind className="w-3 h-3" />
                <span>Luồng hơi đều</span>
              </div>
            )}
          </div>

          <div className="mt-2 text-center text-xs font-black text-amber-950 bg-white px-3 py-1 rounded-full border border-amber-300 shadow-xs">
            {visemePhoto.labelVi}
          </div>
        </div>

        {/* Guided instructions in Vietnamese */}
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-amber-950 flex flex-col justify-center space-y-2">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">Cách luyện tập cho bé:</div>
          <p className="text-sm font-semibold leading-relaxed">
            {mouthGuide.instructionsVi}
          </p>

          <div className="pt-2 border-t border-amber-200">
            <span className="text-xs font-black text-amber-900 uppercase">Động tác TPR vận động:</span>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xs font-black bg-amber-200 text-amber-950 px-2 py-0.5 rounded-md">
                TPR
              </span>
              <p className="text-xs font-bold text-amber-900">{tprAction.descriptionVi}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
