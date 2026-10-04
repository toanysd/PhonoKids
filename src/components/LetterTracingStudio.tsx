import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { LetterStrokeData, StrokeGuide, getLetterStrokeData } from '../data/letterStrokes';
import { audioService } from '../services/audioService';
import { Sparkles, RotateCcw, Eye, Volume2, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LetterTracingStudioProps {
  phonemeId: string;
  onComplete?: () => void;
  onAddStars?: (amount: number) => void;
  showNextButton?: boolean;
}

interface PathCheckpoint {
  x: number;
  y: number;
  length: number;
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
  const [targetLength, setTargetLength] = useState<number>(0);
  const [targetIndex, setTargetIndex] = useState<number>(0);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isDemonstrating, setIsDemonstrating] = useState<boolean>(false);
  const [demoPoint, setDemoPoint] = useState<{ x: number; y: number } | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const [guideHint, setGuideHint] = useState<string | null>(null);

  const currentStroke: StrokeGuide | undefined = strokeData.strokes[currentStrokeIndex];
  const totalStrokes = strokeData.strokes.length;

  // Precompute dense, ordered path checkpoints directly from SVG geometry
  const strokeGeometry = useMemo(() => {
    if (!currentStroke) return null;
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', currentStroke.pathD);
    const totalLength = pathEl.getTotalLength();
    
    // Sample 32 dense points along the curve
    const count = 32;
    const checkpoints: PathCheckpoint[] = [];
    for (let i = 0; i <= count; i++) {
      const len = (i / count) * totalLength;
      const pt = pathEl.getPointAtLength(len);
      checkpoints.push({ x: pt.x, y: pt.y, length: len });
    }

    return {
      totalLength,
      checkpoints,
      startPoint: checkpoints[0],
      endPoint: checkpoints[checkpoints.length - 1],
      pathEl
    };
  }, [currentStroke]);

  // Clear canvas and reset progress
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCurrentStrokeIndex(0);
    setTargetLength(0);
    setTargetIndex(0);
    setIsCompleted(false);
    setGuideHint(null);
  }, []);

  // When switching phoneme
  useEffect(() => {
    clearCanvas();
    audioService.playPhoneme(phonemeId);
  }, [phonemeId, clearCanvas]);

  // Adjust canvas size to match container resolution with high DPI
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
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

    const svgX = (pxX / rect.width) * 200;
    const svgY = (pxY / rect.height) * 200;

    return { svgX, svgY, pxX, pxY };
  };

  // Sparkles under finger
  const triggerSparkle = (x: number, y: number) => {
    const colors = ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'];
    const newSparkle = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setSparkles((prev) => [...prev.slice(-10), newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 500);
  };

  // Pointer Down: Must start near startPoint (or resume from current progress point)
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isCompleted || isDemonstrating || !strokeGeometry) return;
    const coords = getCoordinates(e);
    if (!coords) return;

    // 1. Check distance to initial start point
    const distToStart = Math.hypot(
      coords.svgX - strokeGeometry.startPoint.x,
      coords.svgY - strokeGeometry.startPoint.y
    );

    // 2. Or check distance to current front point if resuming midway
    let canStart = distToStart <= 30;
    if (!canStart && targetLength > 0) {
      const currentFront = strokeGeometry.pathEl.getPointAtLength(targetLength);
      const distToFront = Math.hypot(coords.svgX - currentFront.x, coords.svgY - currentFront.y);
      if (distToFront <= 32) {
        canStart = true;
      }
    }

    if (canStart) {
      setIsDrawing(true);
      setGuideHint(null);
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
          ctx.strokeStyle = '#F59E0B';
        }
      }

      audioService.playPopSound(500);
      triggerSparkle(coords.pxX, coords.pxY);
    } else {
      // Child touched somewhere far from the start dot
      audioService.playGentleTryAgain();
      setGuideHint('Bé hãy đặt ngón tay vào chấm tròn màu xanh để bắt đầu nhé!');
    }
  };

  // Pointer Move: Segment Projection & Sequential Path Length Progress Engine
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !strokeGeometry || isCompleted) return;
    const coords = getCoordinates(e);
    if (!coords) return;

    // Inking on canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineTo(coords.pxX, coords.pxY);
        ctx.stroke();
      }
    }

    triggerSparkle(coords.pxX, coords.pxY);

    // Sequential tracking: Scan lookahead window of 3 segments ahead
    const cp = strokeGeometry.checkpoints;
    const lookahead = 3;
    let advanced = false;
    let newLength = targetLength;
    let newIndex = targetIndex;

    const maxSearchIndex = Math.min(targetIndex + lookahead + 1, cp.length - 1);
    for (let i = targetIndex; i < maxSearchIndex; i++) {
      const a = cp[i];
      const b = cp[i + 1];

      const vx = b.x - a.x;
      const vy = b.y - a.y;
      const wx = coords.svgX - a.x;
      const wy = coords.svgY - a.y;
      const vLenSq = vx * vx + vy * vy;
      if (vLenSq === 0) continue;

      // Project onto segment [a, b] with clamped t in [0, 1]
      const t = Math.max(0, Math.min(1, (wx * vx + wy * vy) / vLenSq));
      const projX = a.x + t * vx;
      const projY = a.y + t * vy;
      const dist = Math.hypot(coords.svgX - projX, coords.svgY - projY);

      // Child friendly gross motor tolerance (28 SVG units)
      if (dist <= 28) {
        const candidateLen = a.length + t * (b.length - a.length);
        if (candidateLen > newLength) {
          newLength = candidateLen;
          newIndex = i;
          advanced = true;
        }
      }
    }

    if (advanced) {
      setTargetLength(newLength);
      setTargetIndex(newIndex);

      // PROGRESS CALCULATION
      const progress = newLength / strokeGeometry.totalLength;
      const distToEnd = Math.hypot(
        coords.svgX - strokeGeometry.endPoint.x,
        coords.svgY - strokeGeometry.endPoint.y
      );

      // STRICT PEDAGOGICAL COMPLETION:
      // Must cover at least 90% of entire path length AND be within endpoint tolerance!
      if (progress >= 0.90 && distToEnd <= 30) {
        finishCurrentStroke();
      }
    }
  };

  // Pointer Up
  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (!strokeGeometry || isCompleted) return;

    const progress = targetLength / strokeGeometry.totalLength;
    if (progress < 0.90) {
      audioService.playGentleTryAgain();
      const percent = Math.round(progress * 100);
      setGuideHint(`Bé đã tô được ${percent}%! Hãy chạm lại vào vệt vàng để tô hết chữ nhé! ✨`);
    }
  };

  // Finish current stroke
  const finishCurrentStroke = () => {
    setIsDrawing(false);
    audioService.playPopSound(620);

    const nextIndex = currentStrokeIndex + 1;
    if (nextIndex < totalStrokes) {
      // Advance to next stroke of the letter
      setCurrentStrokeIndex(nextIndex);
      setTargetLength(0);
      setTargetIndex(0);
      setGuideHint(null);
    } else {
      // Entire letter is successfully completed!
      setIsCompleted(true);
      setGuideHint(null);
      audioService.playSuccessJingle();
      setTimeout(() => {
        audioService.playPhoneme(phonemeId);
      }, 500);

      try {
        confetti({
          particleCount: 60,
          spread: 75,
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
    if (isDemonstrating || !strokeGeometry) return;
    setIsDemonstrating(true);
    setGuideHint(null);
    audioService.playMagicChime();

    const duration = 2200; // 2.2s smooth trace
    const startTime = performance.now();
    const totalLength = strokeGeometry.totalLength;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      const point = strokeGeometry.pathEl.getPointAtLength(progress * totalLength);

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

  // Active guide beacon: shows where child needs to move next
  const activeBeacon = useMemo(() => {
    if (!strokeGeometry) return null;
    if (targetLength <= 5) {
      return strokeGeometry.startPoint;
    }
    // Ahead by 15 units or next checkpoint
    const previewLen = Math.min(targetLength + 15, strokeGeometry.totalLength);
    const pt = strokeGeometry.pathEl.getPointAtLength(previewLen);
    return pt;
  }, [strokeGeometry, targetLength]);

  const currentProgressPercent = strokeGeometry
    ? Math.min(100, Math.round((targetLength / strokeGeometry.totalLength) * 100))
    : 0;

  return (
    <div className="w-full h-full flex flex-col justify-between select-none">
      {/* Top Studio Controls Bar */}
      <div className="flex items-center justify-between px-2 py-1 bg-amber-50/90 rounded-2xl border border-amber-200 shadow-xs mb-2 shrink-0">
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

          {/* Real-time Progressive Coverage Pill */}
          <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-300">
            Tiến độ: {currentProgressPercent}%
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

      {/* Gentle Guidance Hint (when child needs direction) */}
      {guideHint && (
        <div className="mx-2 mb-1 px-3 py-1.5 bg-amber-100 border border-amber-300 rounded-xl text-xs font-black text-amber-950 text-center animate-fadeIn shadow-2xs shrink-0">
          💡 {guideHint}
        </div>
      )}

      {/* Main Tracing Canvas Viewport (Zero Scroll, Large Child-Friendly Ratio) */}
      <div className="flex-1 min-h-0 relative flex items-center justify-center p-1 sm:p-2">
        <div
          ref={containerRef}
          className="relative w-full max-w-[420px] aspect-square bg-white rounded-3xl border-4 md:border-6 border-amber-300 shadow-xl overflow-hidden touch-none"
        >
          {/* Kindergarten Ruling Guidelines (Top, Midline, Baseline, Descender) */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
          >
            {/* Headline */}
            <line
              x1="10"
              y1={strokeData.headlineY}
              x2="190"
              y2={strokeData.headlineY}
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Midline */}
            <line
              x1="10"
              y1={strokeData.midlineY}
              x2="190"
              y2={strokeData.midlineY}
              stroke="#94A3B8"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
            {/* Baseline */}
            <line
              x1="10"
              y1={strokeData.baselineY}
              x2="190"
              y2={strokeData.baselineY}
              stroke="#F87171"
              strokeWidth="3"
            />
            {/* Descender line */}
            <line
              x1="10"
              y1={strokeData.descenderY}
              x2="190"
              y2={strokeData.descenderY}
              stroke="#E2E8F0"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />

            {/* Ghost outline of the letter (Mẫu mờ xám) */}
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

            {/* Active stroke highlight guide (Vệt vàng nhạt hướng dẫn) */}
            {currentStroke && !isCompleted && (
              <path
                d={currentStroke.pathD}
                fill="none"
                stroke="#FEF3C7"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* PROGRESSIVE TRACE FILL: Fills with glowing emerald/amber as child traces sequentially */}
            {currentStroke && strokeGeometry && targetLength > 0 && !isCompleted && (
              <path
                d={currentStroke.pathD}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="26"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={`${targetLength} ${strokeGeometry.totalLength}`}
                className="opacity-90"
              />
            )}

            {/* Start Dot (Chấm tròn phát sáng xuất phát nét) */}
            {currentStroke && strokeGeometry && !isCompleted && targetLength < 10 && (
              <g>
                <circle
                  cx={strokeGeometry.startPoint.x}
                  cy={strokeGeometry.startPoint.y}
                  r="16"
                  fill="#10B981"
                  opacity="0.35"
                  className="animate-ping origin-center"
                />
                <circle
                  cx={strokeGeometry.startPoint.x}
                  cy={strokeGeometry.startPoint.y}
                  r="13"
                  fill="#10B981"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
                <text
                  x={strokeGeometry.startPoint.x}
                  y={strokeGeometry.startPoint.y + 4}
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {currentStroke.id}
                </text>
              </g>
            )}

            {/* Dynamic Target Beacon: points to where child needs to go next */}
            {activeBeacon && targetLength >= 10 && !isCompleted && (
              <g transform={`translate(${activeBeacon.x}, ${activeBeacon.y})`}>
                <circle r="12" fill="#F59E0B" opacity="0.3" className="animate-ping" />
                <circle r="7" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
              </g>
            )}

            {/* End Point Gate Indicator */}
            {currentStroke && strokeGeometry && !isCompleted && (
              <circle
                cx={strokeGeometry.endPoint.x}
                cy={strokeGeometry.endPoint.y}
                r="8"
                fill={currentProgressPercent >= 85 ? '#10B981' : '#F59E0B'}
                stroke="#FFFFFF"
                strokeWidth="2"
                opacity={currentProgressPercent >= 75 ? '1' : '0.5'}
                className={currentProgressPercent >= 85 ? 'animate-bounce' : ''}
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
                Đã tô đủ 100% nét chữ /{phonemeId}/ xuất sắc!
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
