import React, { useRef, useState, useEffect, useCallback } from 'react';
import { LetterStrokeData, StrokeGuide, getLetterStrokeData } from '../data/letterStrokes';
import { audioService } from '../services/audioService';
import { Sparkles, RotateCcw, Eye, Volume2, CheckCircle2, Star, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LetterTracingStudioProps {
  phonemeId: string;
  onComplete?: () => void;
  onAddStars?: (amount: number) => void;
  showNextButton?: boolean;
}

export const LetterTracingStudio: React.FC<LetterTracingStudioProps> = ({
  phonemeId,
  onComplete,
  onAddStars,
  showNextButton = true
}) => {
  const strokeData: LetterStrokeData = getLetterStrokeData(phonemeId);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentStrokeIndex, setCurrentStrokeIndex] = useState<number>(0);
  const [visitedCheckpoints, setVisitedCheckpoints] = useState<Set<number>>(new Set());
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isDemonstrating, setIsDemonstrating] = useState<boolean>(false);
  const [demoPoint, setDemoPoint] = useState<{ x: number; y: number } | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  const currentStroke: StrokeGuide | undefined = strokeData.strokes[currentStrokeIndex];
  const totalStrokes = strokeData.strokes.length;

  // Initialize and clear canvas when phoneme changes
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCurrentStrokeIndex(0);
    setVisitedCheckpoints(new Set());
    setIsCompleted(false);
  }, []);

  useEffect(() => {
    clearCanvas();
    // Play the pure phoneme sound when studio opens
    audioService.playPhoneme(phonemeId);
  }, [phonemeId, clearCanvas]);

  // Adjust canvas size to match container resolution
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      // Use higher pixel density for crisp retina display
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convert client pointer event (screen px) into SVG 200x200 coordinate space
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>): { svgX: number; svgY: number; pxX: number; pxY: number } | null => {
    const container = containerRef.current;
    if (!container) return null;
    const rect = container.getBoundingClientRect();
    const pxX = e.clientX - rect.left;
    const pxY = e.clientY - rect.top;

    // Map to 200x200 SVG coordinates
    const svgX = (pxX / rect.width) * 200;
    const svgY = (pxY / rect.height) * 200;

    return { svgX, svgY, pxX, pxY };
  };

  // Add fun sparkles under child's finger
  const triggerSparkle = (x: number, y: number) => {
    const colors = ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'];
    const newSparkle = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 600);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isCompleted || isDemonstrating || !currentStroke) return;
    const coords = getCoordinates(e);
    if (!coords) return;

    // Check distance to StartDot (tolerance of 38 coordinate units for gross motor skills)
    const distToStart = Math.hypot(
      coords.svgX - currentStroke.startPoint.x,
      coords.svgY - currentStroke.startPoint.y
    );

    if (distToStart <= 38) {
      setIsDrawing(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.beginPath();
          ctx.moveTo(coords.pxX, coords.pxY);
          ctx.lineWidth = 26;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = '#F59E0B'; // Warm amber crayon
        }
      }

      audioService.playPopSound(500);
      triggerSparkle(coords.pxX, coords.pxY);

      // Check off the first checkpoint if near
      setVisitedCheckpoints(new Set([0]));
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke || isCompleted) return;
    const coords = getCoordinates(e);
    if (!coords) return;

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineTo(coords.pxX, coords.pxY);
        ctx.stroke();
      }
    }

    triggerSparkle(coords.pxX, coords.pxY);

    // Validate progress along checkpoints
    currentStroke.checkpoints.forEach((cp, idx) => {
      const dist = Math.hypot(coords.svgX - cp.x, coords.svgY - cp.y);
      if (dist <= 32) {
        setVisitedCheckpoints((prev) => {
          const updated = new Set(prev);
          updated.add(idx);
          return updated;
        });
      }
    });

    // Check if reached end point and visited enough checkpoints (>= 60% coverage)
    const distToEnd = Math.hypot(
      coords.svgX - currentStroke.endPoint.x,
      coords.svgY - currentStroke.endPoint.y
    );

    const requiredCheckpoints = Math.max(1, Math.floor(currentStroke.checkpoints.length * 0.6));
    if (distToEnd <= 35 && visitedCheckpoints.size >= requiredCheckpoints) {
      // Stroke successfully completed!
      finishCurrentStroke();
    }
  };

  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    // If stroke wasn't completed, child lifted finger early
    if (currentStroke && visitedCheckpoints.size < Math.max(1, Math.floor(currentStroke.checkpoints.length * 0.6))) {
      audioService.playGentleTryAgain();
    }
  };

  const finishCurrentStroke = () => {
    setIsDrawing(false);
    audioService.playPopSound(620);

    const nextIndex = currentStrokeIndex + 1;
    if (nextIndex < totalStrokes) {
      // Advance to next stroke
      setCurrentStrokeIndex(nextIndex);
      setVisitedCheckpoints(new Set());
    } else {
      // All strokes completed! Mastered the letter!
      setIsCompleted(true);
      audioService.playSuccessJingle();
      setTimeout(() => {
        // Pure phoneme reinforcement
        audioService.playPhoneme(phonemeId);
      }, 500);

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }

      if (onAddStars) {
        onAddStars(2);
      }
      if (onComplete) {
        onComplete();
      }
    }
  };

  // Automated Animated Demonstration ("Xem Mẫu")
  const handleDemonstration = () => {
    if (isDemonstrating || !currentStroke) return;
    setIsDemonstrating(true);
    audioService.playMagicChime();

    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', currentStroke.pathD);
    const totalLength = pathEl.getTotalLength();

    const duration = 2200; // 2.2 seconds smooth trace
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const point = pathEl.getPointAtLength(progress * totalLength);

      setDemoPoint({ x: point.x, y: point.y });

      if (progress < 1.0) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setDemoPoint(null);
          setIsDemonstrating(false);
          audioService.playPopSound(540);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      {/* Top Studio Controls */}
      <div className="flex items-center justify-between px-2 py-1 bg-amber-50/90 rounded-2xl border border-amber-200 shadow-xs mb-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => audioService.playPhoneme(phonemeId)}
            className="flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-white font-black px-3 py-1.5 rounded-xl shadow-xs active:scale-95 transition-transform cursor-pointer text-xs sm:text-sm"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe Âm /{phonemeId}/</span>
          </button>

          <span className="text-xs font-bold text-amber-900 bg-white/80 px-2.5 py-1 rounded-lg border border-amber-200">
            Nét {Math.min(currentStrokeIndex + 1, totalStrokes)} / {totalStrokes}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleDemonstration}
            disabled={isDemonstrating || isCompleted}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold border transition-transform cursor-pointer ${
              isDemonstrating
                ? 'bg-purple-200 text-purple-700 border-purple-300 animate-pulse'
                : 'bg-white hover:bg-purple-50 text-purple-900 border-purple-200 shadow-xs active:scale-95'
            }`}
          >
            <Eye className="w-4 h-4 text-purple-600" />
            <span>{isDemonstrating ? 'Đang viết mẫu...' : 'Xem Mẫu 👁️'}</span>
          </button>

          <button
            onClick={clearCanvas}
            className="flex items-center space-x-1 bg-white hover:bg-amber-100 text-amber-900 font-bold px-3 py-1.5 rounded-xl border border-amber-200 shadow-xs active:scale-95 transition-transform cursor-pointer text-xs sm:text-sm"
          >
            <RotateCcw className="w-4 h-4 text-amber-600" />
            <span>Tô Lại 🔄</span>
          </button>
        </div>
      </div>

      {/* Main Tracing Canvas Viewport (Zero Scroll, Large Child-Friendly Ratio) */}
      <div className="flex-1 min-h-0 relative flex items-center justify-center p-2">
        <div
          ref={containerRef}
          className="relative w-full max-w-[420px] aspect-square bg-white rounded-3xl border-4 md:border-6 border-amber-300 shadow-xl overflow-hidden touch-none"
        >
          {/* Kindergarten Ruling Guidelines (Top, Midline, Baseline, Descender) */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
          >
            {/* Headline (Dòng đỉnh) */}
            <line
              x1="10"
              y1={strokeData.headlineY}
              x2="190"
              y2={strokeData.headlineY}
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Midline (Dòng giữa phân cách) */}
            <line
              x1="10"
              y1={strokeData.midlineY}
              x2="190"
              y2={strokeData.midlineY}
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
            {/* Baseline (Dòng đáy - đường chuẩn đỏ) */}
            <line
              x1="10"
              y1={strokeData.baselineY}
              x2="190"
              y2={strokeData.baselineY}
              stroke="#F87171"
              strokeWidth="3"
            />
            {/* Descender (Dòng thò chân xuống) */}
            <line
              x1="10"
              y1={strokeData.descenderY}
              x2="190"
              y2={strokeData.descenderY}
              stroke="#E2E8F0"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Ghost outline of the letter (Mẫu mờ) */}
            {strokeData.strokes.map((stroke, idx) => (
              <path
                key={`ghost_${idx}`}
                d={stroke.pathD}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="26"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Active stroke highlight guide (Đường dẫn nét hiện tại) */}
            {currentStroke && !isCompleted && (
              <path
                d={currentStroke.pathD}
                fill="none"
                stroke="#FDE68A"
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse opacity-80"
              />
            )}

            {/* Start Dot (Chấm tròn phát sáng xuất phát nét) */}
            {currentStroke && !isCompleted && (
              <g>
                {/* Glowing pulse ring */}
                <circle
                  cx={currentStroke.startPoint.x}
                  cy={currentStroke.startPoint.y}
                  r="16"
                  fill="#10B981"
                  opacity="0.3"
                  className="animate-ping origin-center"
                />
                {/* Solid start dot */}
                <circle
                  cx={currentStroke.startPoint.x}
                  cy={currentStroke.startPoint.y}
                  r="14"
                  fill="#10B981"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                {/* Stroke number icon */}
                <text
                  x={currentStroke.startPoint.x}
                  y={currentStroke.startPoint.y + 4}
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {currentStroke.id}
                </text>
              </g>
            )}

            {/* End Point Indicator */}
            {currentStroke && !isCompleted && (
              <circle
                cx={currentStroke.endPoint.x}
                cy={currentStroke.endPoint.y}
                r="7"
                fill="#F59E0B"
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity="0.7"
              />
            )}

            {/* Animated Demo Fairy Cursor */}
            {demoPoint && (
              <g transform={`translate(${demoPoint.x}, ${demoPoint.y})`}>
                <circle r="12" fill="#8B5CF6" opacity="0.4" className="animate-ping" />
                <circle r="8" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2" />
                <text x="10" y="-10" fontSize="16">✨</text>
              </g>
            )}
          </svg>

          {/* Interactive HTML5 Ink Layer */}
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
          />

          {/* Floating Sparkles Under Pointer */}
          {sparkles.map((sp) => (
            <div
              key={sp.id}
              className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-ping"
              style={{
                left: sp.x,
                top: sp.y,
                color: sp.color,
                fontSize: '18px'
              }}
            >
              ✦
            </div>
          ))}

          {/* Mastered / Completed Overlay Modal */}
          {isCompleted && (
            <div className="absolute inset-0 bg-emerald-500/90 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-white animate-fadeIn z-20">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-2 shadow-lg animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-1 drop-shadow-sm">Bé Viết Rất Đẹp! 🎉</h3>
              <p className="text-sm font-bold text-emerald-100 mb-3 text-center">
                Âm /{phonemeId}/ viết thật xuất sắc!
              </p>

              <div className="flex items-center space-x-2">
                <button
                  onClick={clearCanvas}
                  className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-2 rounded-2xl border border-white/40 cursor-pointer text-xs sm:text-sm active:scale-95"
                >
                  Tô lại 🔄
                </button>
                {showNextButton && onComplete && (
                  <button
                    onClick={onComplete}
                    className="bg-white hover:bg-amber-100 text-emerald-800 font-black px-5 py-2 rounded-2xl shadow-lg cursor-pointer text-xs sm:text-sm active:scale-95 flex items-center space-x-1"
                  >
                    <span>Tiếp Tục</span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pedagogical Hint & Mnemonic Footer */}
      <div className="bg-amber-100/90 rounded-2xl p-2.5 border-2 border-amber-300 shadow-xs flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center font-black text-sm shrink-0">
            ✍️
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-amber-950">
              {currentStroke?.instructionVi || strokeData.tipVi}
            </div>
            <div className="text-[11px] font-bold text-amber-800 italic">
              Mẹo nhớ: &quot;{strokeData.mnemonicEn}&quot;
            </div>
          </div>
        </div>

        {strokeData.confusionPair && (
          <div className="hidden sm:flex items-center space-x-1.5 bg-white/90 px-3 py-1 rounded-xl border border-amber-200 text-xs font-bold text-amber-900 shrink-0">
            <span>{strokeData.confusionPair.mnemonicVisual}</span>
            <span>{strokeData.confusionPair.distinctionHintVi}</span>
          </div>
        )}
      </div>
    </div>
  );
};
