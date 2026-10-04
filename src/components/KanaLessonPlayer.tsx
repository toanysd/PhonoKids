import React, { useState, useEffect, useRef } from 'react';
import { KanaItem } from '../types/japanese';
import { JAPANESE_GOJUON_ROWS, ALL_KANA_CHARACTERS } from '../data/japanese/gojuonData';
import { audioService } from '../services/audioService';
import { KidButton } from './KidButton';
import { 
  Volume2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  Sparkles, 
  PenTool, 
  Smile, 
  Music, 
  BookOpen, 
  RotateCcw,
  Star
} from 'lucide-react';
import confetti from 'canvas-confetti';

export interface KanaLessonPlayerProps {
  kana: KanaItem;
  onFinishLesson: (kanaId: string) => void;
  onNextKana?: (nextKana: KanaItem) => void;
  onBack: () => void;
}

const LESSON_STEPS = [
  { id: 'intro', titleVi: 'Làm Quen Chữ' },
  { id: 'mouth', titleVi: 'Khẩu Hình Chuẩn' },
  { id: 'tpr', titleVi: 'Đồng Dao TPR' },
  { id: 'tracing', titleVi: 'Tập Tô Nét Bút' },
  { id: 'quiz', titleVi: 'Từ Vựng & Đố Vui' },
  { id: 'victory', titleVi: 'Chiến Thắng' }
];

export const KanaLessonPlayer: React.FC<KanaLessonPlayerProps> = ({
  kana,
  onFinishLesson,
  onNextKana,
  onBack
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Tracing Canvas state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tracePoints, setTracePoints] = useState<{ x: number; y: number }[]>([]);
  const [isTracingCompleted, setIsTracingCompleted] = useState(false);

  // Quiz state
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<string | null>(null);
  const [isQuizCorrect, setIsQuizCorrect] = useState<boolean | null>(null);

  // Determine next kana sequentially
  const currentIndex = ALL_KANA_CHARACTERS.findIndex(k => k.id === kana.id);
  const nextKana = currentIndex !== -1 && currentIndex + 1 < ALL_KANA_CHARACTERS.length
    ? ALL_KANA_CHARACTERS[currentIndex + 1]
    : ALL_KANA_CHARACTERS[0];

  // Distractors for Quiz
  const quizDistractors = React.useMemo(() => {
    const others = ALL_KANA_CHARACTERS.filter(k => k.id !== kana.id);
    const shuffled = [...others].sort(() => 0.5 - Math.random());
    const choices = [kana, shuffled[0], shuffled[1]].sort(() => 0.5 - Math.random());
    return choices;
  }, [kana.id]);

  useEffect(() => {
    setCurrentStep(0);
    setIsTracingCompleted(false);
    setTracePoints([]);
    clearCanvas();
    setSelectedQuizAnswer(null);
    setIsQuizCorrect(null);

    // Auto speak Kana sound on step 0
    const timer = setTimeout(() => {
      audioService.speakJapanese(kana.hiragana, 0.85);
    }, 350);

    return () => clearTimeout(timer);
  }, [kana.id]);

  // Canvas drawing handlers
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleStartDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    setTracePoints([{ x, y }]);
  };

  const handleDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const lastPoint = tracePoints[tracePoints.length - 1];
    if (lastPoint) {
      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    setTracePoints((prev) => [...prev, { x, y }]);
  };

  const handleEndDraw = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (tracePoints.length > 25 && !isTracingCompleted) {
      setIsTracingCompleted(true);
      audioService.playSuccessJingle();
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleNextStep = () => {
    audioService.playPopSound(520);
    if (currentStep < LESSON_STEPS.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      if (next === 5) {
        // Victory!
        audioService.playSuccessJingle();
        try {
          confetti({
            particleCount: 70,
            spread: 80,
            origin: { y: 0.5 }
          });
        } catch {}
      }
    } else {
      onFinishLesson(kana.id);
    }
  };

  const handlePrevStep = () => {
    audioService.playPopSound(460);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handleQuizChoice = (choice: KanaItem) => {
    setSelectedQuizAnswer(choice.id);
    if (choice.id === kana.id) {
      setIsQuizCorrect(true);
      audioService.playSuccessJingle();
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    } else {
      setIsQuizCorrect(false);
      audioService.playGentleTryAgain();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden select-none">
      
      {/* Top Navigation Bar: Back & Step Indicators */}
      <div className="bg-white/95 rounded-2xl p-2 sm:p-2.5 border-2 border-rose-200 shadow-xs flex items-center justify-between shrink-0 mb-2">
        <button
          onClick={handlePrevStep}
          className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs cursor-pointer border border-amber-300"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{currentStep === 0 ? 'Về Bản Đồ' : 'Bước Trước'}</span>
        </button>

        {/* Step Circles */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {LESSON_STEPS.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            return (
              <div
                key={step.id}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                  isCompleted
                    ? 'bg-emerald-500 text-white shadow-xs'
                    : isCurrent
                    ? 'bg-rose-500 text-white ring-3 ring-rose-200 shadow-sm scale-110'
                    : 'bg-rose-50 text-rose-800 border border-rose-200 opacity-60'
                }`}
                title={step.titleVi}
              >
                {isCompleted ? '✓' : idx + 1}
              </div>
            );
          })}
        </div>

        <span className="text-xs font-black text-rose-900 bg-rose-50 px-2.5 py-1 rounded-xl border border-rose-200 hidden sm:block">
          Chữ: <strong className="text-rose-600 text-sm">{kana.hiragana}</strong> [{kana.romaji}]
        </span>
      </div>

      {/* Main Workspace Frame */}
      <div className="flex-1 min-h-0 bg-white rounded-3xl border-4 border-rose-200 shadow-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
        
        {/* STEP 0: MEET THE KANA */}
        {currentStep === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mb-2">
              Bước 1: Làm Quen Chữ Cái Mới 🌸
            </span>

            <div className="relative my-2">
              <span className="text-8xl sm:text-9xl font-black text-rose-600 tracking-tight leading-none drop-shadow-md">
                {kana.hiragana}
              </span>
            </div>

            <div className="flex items-center space-x-3 mt-1">
              <span className="text-sm sm:text-base font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-xl border border-amber-200">
                Katakana: <strong className="text-amber-700">{kana.katakana}</strong>
              </span>
              <span className="text-sm sm:text-base font-black text-rose-900 bg-rose-100 px-3 py-1 rounded-xl border border-rose-200">
                Phiên âm: <strong className="text-rose-600">/{kana.romaji}/</strong>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-amber-900 mt-3 max-w-md">
              {kana.soundDescriptionVi}
            </p>

            <button
              onClick={() => audioService.speakJapanese(kana.hiragana, 0.85)}
              className="mt-4 px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-black text-sm rounded-2xl shadow-md flex items-center space-x-2 cursor-pointer active:scale-95 transition-all"
            >
              <Volume2 className="w-5 h-5 animate-pulse" />
              <span>Nghe Âm "{kana.hiragana}" 🔊</span>
            </button>
          </div>
        )}

        {/* STEP 1: MOUTH & SOUND */}
        {currentStep === 1 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mb-3">
              Bước 2: Hướng Dẫn Khẩu Hình Miệng Chuẩn 👄
            </span>

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-amber-100 border-3 border-amber-300 flex items-center justify-center text-5xl sm:text-6xl shadow-md mb-3">
              {kana.mouthGuide.mouthShape === 'smile' ? '😄' :
               kana.mouthGuide.mouthShape === 'open_wide' ? '🗣️' :
               kana.mouthGuide.mouthShape === 'round_pucker' ? '😗' :
               kana.mouthGuide.mouthShape === 'round_mid' ? '😮' : '😊'}
            </div>

            <h3 className="text-lg sm:text-xl font-black text-amber-950">
              Khẩu hình khi phát âm /{kana.romaji}/
            </h3>

            <div className="bg-amber-50 p-4 rounded-2xl border-2 border-amber-200 max-w-md mt-3 shadow-xs">
              <p className="text-xs sm:text-sm font-bold text-amber-900 leading-relaxed">
                {kana.mouthGuide.instructionsVi}
              </p>
            </div>

            <button
              onClick={() => audioService.speakJapanese(kana.hiragana, 0.85)}
              className="mt-4 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-black text-sm rounded-2xl shadow-md flex items-center space-x-2 cursor-pointer active:scale-95"
            >
              <Volume2 className="w-5 h-5" />
              <span>Lắng Nghe Lại Âm Chuẩn</span>
            </button>
          </div>
        )}

        {/* STEP 2: TPR ACTION CHANT */}
        {currentStep === 2 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mb-3">
              Bước 3: Thần Chú Cử Chỉ Vận Động TPR 🎶
            </span>

            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-rose-100 border-3 border-rose-300 flex items-center justify-center text-5xl sm:text-6xl shadow-md mb-3">
              {kana.tprAction.icon}
            </div>

            <div className="bg-rose-500 text-white px-5 py-2 rounded-2xl shadow-md mb-2">
              <span className="text-xl sm:text-2xl font-black">
                {kana.tprAction.chantJa}
              </span>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-2xl border-2 border-rose-200 max-w-md shadow-xs">
              <h4 className="text-sm font-black text-rose-950 mb-1">
                {kana.tprAction.titleVi}
              </h4>
              <p className="text-xs sm:text-sm font-medium text-rose-900 leading-relaxed">
                {kana.tprAction.descriptionVi}
              </p>
            </div>

            <button
              onClick={() => audioService.playJapaneseTprAction(kana.tprAction.chantJa, kana.sampleWords[0]?.word || kana.hiragana)}
              className="mt-4 px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white font-black text-sm rounded-2xl shadow-md flex items-center space-x-2 cursor-pointer active:scale-95"
            >
              <Music className="w-5 h-5" />
              <span>Hát Thần Chú TPR 🎶</span>
            </button>
          </div>
        )}

        {/* STEP 3: TRACING STUDIO */}
        {currentStep === 3 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mb-2">
              Bước 4: Xưởng Tập Tô Nét Chữ Hiragana ✍️
            </span>

            <p className="text-xs font-bold text-amber-900 mb-2">
              {kana.strokeOrder.descriptionVi}
            </p>

            {/* Tracing Canvas with Ghost SVG Guide */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 bg-amber-50/70 rounded-3xl border-3 border-dashed border-rose-300 flex items-center justify-center overflow-hidden shadow-inner my-2">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none p-3">
                <line x1="50" y1="0" x2="50" y2="100" stroke="#fecdd3" strokeDasharray="3,3" strokeWidth="1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#fecdd3" strokeDasharray="3,3" strokeWidth="1" />

                {kana.strokeOrder.strokes.map((stroke) => (
                  <g key={stroke.strokeNumber}>
                    <path
                      d={stroke.pathD}
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.35"
                    />
                    <circle cx={stroke.guidePoint.x} cy={stroke.guidePoint.y} r="5" fill="#be123c" />
                    <text x={stroke.guidePoint.x} y={stroke.guidePoint.y + 2.5} fontSize="6" fill="white" fontWeight="bold" textAnchor="middle">
                      {stroke.strokeNumber}
                    </text>
                  </g>
                ))}
              </svg>

              <canvas
                ref={canvasRef}
                width={240}
                height={240}
                className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                onMouseDown={handleStartDraw}
                onMouseMove={handleDraw}
                onMouseUp={handleEndDraw}
                onMouseLeave={handleEndDraw}
                onTouchStart={handleStartDraw}
                onTouchMove={handleDraw}
                onTouchEnd={handleEndDraw}
              />
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={() => {
                  clearCanvas();
                  setTracePoints([]);
                  setIsTracingCompleted(false);
                }}
                className="px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-black flex items-center space-x-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tô Lại</span>
              </button>

              {isTracingCompleted && (
                <span className="text-xs font-black text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Bé Tô Đẹp Lắm! (+2 Sao)</span>
                </span>
              )}
            </div>
          </div>
        )}

        {/* STEP 4: VOCABULARY & QUIZ */}
        {currentStep === 4 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <span className="text-xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 mb-2">
              Bước 5: Thử Thách Nhận Diện Chữ "{kana.hiragana}" 🎯
            </span>

            <p className="text-xs sm:text-sm font-bold text-amber-900 mb-3">
              Nghe âm thanh và chạm vào ô có chữ đúng nhé!
            </p>

            <button
              onClick={() => audioService.speakJapanese(kana.hiragana, 0.85)}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs sm:text-sm rounded-2xl shadow-md flex items-center space-x-2 cursor-pointer active:scale-95 mb-4"
            >
              <Volume2 className="w-4 h-4" />
              <span>Nghe Âm Thanh Câu Đố 🔊</span>
            </button>

            {/* Quiz Choices */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md">
              {quizDistractors.map((choice) => {
                const isSelected = selectedQuizAnswer === choice.id;
                const isCorrect = choice.id === kana.id;

                let cardBg = 'bg-white hover:bg-rose-50 border-amber-300 text-rose-950';
                if (isSelected) {
                  cardBg = isCorrect
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-md ring-4 ring-emerald-200'
                    : 'bg-rose-100 text-rose-950 border-rose-400';
                }

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleQuizChoice(choice)}
                    className={`p-4 rounded-3xl border-3 transition-all cursor-pointer flex flex-col items-center justify-center active:scale-95 ${cardBg}`}
                  >
                    <span className="text-4xl sm:text-5xl font-black leading-none mb-1">
                      {choice.hiragana}
                    </span>
                    <span className="text-xs font-bold opacity-80">
                      /{choice.romaji}/
                    </span>
                  </button>
                );
              })}
            </div>

            {isQuizCorrect === true && (
              <div className="mt-4 text-xs sm:text-sm font-black text-emerald-700 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Chính xác tuyệt đối! Bé thật thông minh! 🌟</span>
              </div>
            )}
            {isQuizCorrect === false && (
              <div className="mt-4 text-xs font-bold text-rose-700 bg-rose-100 px-4 py-1.5 rounded-full border border-rose-200">
                Chưa đúng rồi, bé hãy bấm nút nghe lại âm nhé!
              </div>
            )}
          </div>
        )}

        {/* STEP 5: VICTORY SCREEN */}
        {currentStep === 5 && (
          <div className="flex-1 flex flex-col items-center justify-center text-center my-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400 border-4 border-yellow-200 flex items-center justify-center text-4xl sm:text-5xl shadow-xl animate-bounce mb-3">
              🏆
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-amber-950">
              XUẤT SẮC! BÉ ĐÃ THUỘC CHỮ "{kana.hiragana}"!
            </h3>
            <p className="text-xs sm:text-sm font-bold text-amber-800 mt-1 max-w-md">
              Bé đã làm quen cách phát âm, tập tô nét bút và vượt qua câu đố nhận diện chữ xuất sắc!
            </p>

            <div className="flex items-center space-x-2 my-4 bg-amber-100 px-5 py-2 rounded-2xl border-2 border-amber-300 shadow-xs">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              <span className="text-sm font-black text-amber-950 ml-1">+3 SAO THƯỞNG! ⭐</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {nextKana && onNextKana && (
                <button
                  onClick={() => onNextKana(nextKana)}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl border-2 border-emerald-300 flex items-center space-x-2 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
                  <span>HỌC CHỮ TIẾP THEO "{nextKana.hiragana}" 🚀</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              )}

              <button
                onClick={() => onFinishLesson(kana.id)}
                className="px-5 py-3 bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-sm rounded-2xl border-2 border-amber-300 cursor-pointer shadow-xs"
              >
                <span>VỀ BẢN ĐỒ ĐẢO KANA 🏝️</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Sticky Action Footer */}
      <div className="bg-white/95 rounded-2xl p-2 sm:p-2.5 border-2 border-rose-200 shadow-sm flex items-center justify-between shrink-0 mt-2">
        <span className="text-xs font-bold text-amber-900">
          Bước {currentStep + 1} / {LESSON_STEPS.length}: {LESSON_STEPS[currentStep].titleVi}
        </span>

        {currentStep < 5 && (
          <KidButton
            variant="success"
            size="md"
            onClick={handleNextStep}
            className="py-1.5 px-6 text-xs sm:text-sm font-black shadow-md flex items-center space-x-1.5"
          >
            <span>Tiếp Tục</span>
            <ArrowRight className="w-4 h-4" />
          </KidButton>
        )}
      </div>

    </div>
  );
};

export default KanaLessonPlayer;
