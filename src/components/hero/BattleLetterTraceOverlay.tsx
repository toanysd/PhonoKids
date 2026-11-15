import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Eraser, Eye, Sparkles, Volume2 } from 'lucide-react';
import { LetterTraceChallenge } from '../../types/heroGame';
import { getLetterStrokeData, StrokeGuide } from '../../data/letterStrokes';
import { audioService } from '../../services/audioService';

interface BattleLetterTraceOverlayProps {
  trace: LetterTraceChallenge;
  heroNameVi: string;
  onTraceComplete: () => void;
}

interface SampledStroke {
  guide: StrokeGuide;
  points: Array<{ x: number; y: number }>;
}

function sampleStrokePoints(guide: StrokeGuide): Array<{ x: number; y: number }> {
  try {
    if (typeof document !== 'undefined') {
      const svgNS = 'http://www.w3.org/2000/svg';
      const pathEl = document.createElementNS(svgNS, 'path');
      pathEl.setAttribute('d', guide.pathD);
      const total = pathEl.getTotalLength();
      if (total > 1) {
        const samples = 24;
        const pts: Array<{ x: number; y: number }> = [];
        for (let i = 0; i <= samples; i++) {
          const p = pathEl.getPointAtLength((total * i) / samples);
          pts.push({ x: p.x, y: p.y });
        }
        return pts;
      }
    }
  } catch {
    // Fallback to static checkpoints when SVG measurement is unavailable
  }
  return guide.checkpoints.map((c) => ({ x: c.x, y: c.y }));
}

export const BattleLetterTraceOverlay: React.FC<BattleLetterTraceOverlayProps> = ({
  trace,
  heroNameVi,
  onTraceComplete,
}) => {
  const strokeData = useMemo(() => getLetterStrokeData(trace.phonemeId), [trace.phonemeId]);
  const sampledStrokes = useMemo<SampledStroke[]>(
    () => strokeData.strokes.map((guide) => ({ guide, points: sampleStrokePoints(guide) })),
    [strokeData]
  );

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const completedRef = useRef(false);

  const [strokeIdx, setStrokeIdx] = useState(0);
  const [progressIdx, setProgressIdx] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hintVi, setHintVi] = useState<string | null>(null);
  const [demoPt, setDemoPt] = useState<{ x: number; y: number } | null>(null);

  const activeSample = sampledStrokes[strokeIdx] || sampledStrokes[0];
  const progressRatio = activeSample?.points.length
    ? Math.min(1, progressIdx / Math.max(1, activeSample.points.length - 1))
    : 0;

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Reset and play phoneme + word cue with StrictMode mount guard
  useEffect(() => {
    completedRef.current = false;
    setStrokeIdx(0);
    setProgressIdx(0);
    setIsDrawing(false);
    setIsCompleted(false);
    setHintVi(null);
    setDemoPt(null);
    clearCanvas();

    let cancelled = false;
    const startTimer = window.setTimeout(async () => {
      if (cancelled) return;
      await audioService.speakPhoneme(trace.phonemeId);
      if (cancelled) return;
      await audioService.speakEnglish(trace.exampleWordEn, 0.88);
    }, 160);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
    };
  }, [trace.id, trace.phonemeId, trace.exampleWordEn, clearCanvas]);

  const handlePlaySound = async () => {
    await audioService.speakPhoneme(trace.phonemeId);
    await audioService.speakEnglish(trace.exampleWordEn, 0.88);
  };

  const handleResetStroke = () => {
    setProgressIdx(0);
    setIsDrawing(false);
    setHintVi(null);
    clearCanvas();
    audioService.playPopSound(480);
  };

  // Animated ghost hand demo sweeping current stroke
  useEffect(() => {
    if (!demoPt) return;
  }, [demoPt]);

  const runDemoAnimation = () => {
    if (!activeSample?.points.length) return;
    audioService.playPopSound(600);
    const pts = activeSample.points;
    let idx = 0;
    const timer = window.setInterval(() => {
      if (idx >= pts.length) {
        window.clearInterval(timer);
        setDemoPt(null);
        return;
      }
      setDemoPt(pts[idx]);
      idx += 1;
    }, 45);
  };

  const finishActiveStroke = useCallback(() => {
    if (completedRef.current) return;
    setIsDrawing(false);
    audioService.playPopSound(780);

    if (strokeIdx + 1 < sampledStrokes.length) {
      clearCanvas();
      setStrokeIdx((prev) => prev + 1);
      setProgressIdx(0);
      setHintVi('Tuyệt vời! Tô tiếp nét kế theo mũi tên nhé!');
      return;
    }

    completedRef.current = true;
    setIsCompleted(true);
    setProgressIdx(activeSample?.points.length ? activeSample.points.length - 1 : 0);
    audioService.playSuccessJingle();
    audioService.speakEnglish(trace.exampleWordEn, 0.92);
    window.setTimeout(() => {
      onTraceComplete();
    }, 680);
  }, [strokeIdx, sampledStrokes.length, activeSample, clearCanvas, trace.exampleWordEn, onTraceComplete]);

  const toCanvasAndSvg = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const normX = (e.clientX - rect.left) / rect.width;
    const normY = (e.clientY - rect.top) / rect.height;
    return {
      svgX: normX * 200,
      svgY: normY * 200,
      pxX: normX * canvas.width,
      pxY: normY * canvas.height,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    if (isCompleted || !activeSample?.points.length) return;
    const coords = toCanvasAndSvg(e);
    if (!coords) return;

    const frontPt = activeSample.points[progressIdx] || activeSample.guide.startPoint;
    const distStart = Math.hypot(
      coords.svgX - activeSample.guide.startPoint.x,
      coords.svgY - activeSample.guide.startPoint.y
    );
    const distFront = Math.hypot(coords.svgX - frontPt.x, coords.svgY - frontPt.y);

    if (distStart > 44 && distFront > 44) {
      audioService.playGentleTryAgain();
      setHintVi('Bé chạm vào chấm xanh lá để bắt đầu tô nhé!');
      return;
    }

    setIsDrawing(true);
    setHintVi(null);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore capture error on synthetic headless events
    }

    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(coords.pxX, coords.pxY);
      ctx.lineWidth = 28;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineTo(coords.pxX + 0.1, coords.pxY + 0.1);
      ctx.stroke();
    }
    audioService.playPopSound(520);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    if (!isDrawing || isCompleted || !activeSample?.points.length) return;
    const coords = toCanvasAndSvg(e);
    if (!coords) return;

    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      ctx.lineTo(coords.pxX, coords.pxY);
      ctx.stroke();
    }

    const pts = activeSample.points;
    const maxLook = Math.min(pts.length - 1, progressIdx + 6);
    let bestIdx = progressIdx;
    for (let i = progressIdx; i <= maxLook; i++) {
      const d = Math.hypot(coords.svgX - pts[i].x, coords.svgY - pts[i].y);
      if (d <= 38) {
        bestIdx = i;
      }
    }

    if (bestIdx > progressIdx) {
      setProgressIdx(bestIdx);
      const completionThreshold = Math.max(1, Math.floor((pts.length - 1) * 0.8));
      if (bestIdx >= completionThreshold) {
        finishActiveStroke();
      }
    }
  };

  const endDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.stopPropagation();
    if (isDrawing) setIsDrawing(false);
  };

  return (
    <div
      data-testid="battle-letter-trace-overlay"
      data-trace-char={trace.displayChar}
      data-stroke-idx={strokeIdx}
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className="pointer-events-auto relative z-30 w-full max-w-md mx-auto bg-white/95 backdrop-blur-md border-4 border-amber-400 rounded-3xl p-3 sm:p-4 shadow-2xl animate-speech-pop"
    >
      {/* Header badge */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-2xl sm:text-3xl leading-none">{trace.emoji}</span>
          <div className="min-w-0">
            <div className="text-[11px] font-extrabold text-amber-700 uppercase tracking-wide">
              Chặng 2 • Tô Chữ Nạp Năng Lượng ({strokeIdx + 1}/{sampledStrokes.length} nét)
            </div>
            <h3 className="font-display text-sm sm:text-base font-extrabold text-slate-950 truncate">
              {trace.meaningVi}
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePlaySound}
          className="shrink-0 px-2.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1 shadow cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Nghe Âm</span>
        </button>
      </div>

      {/* Ruled Notebook Canvas */}
      <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto rounded-2xl bg-amber-50/90 border-2 border-amber-300 shadow-inner overflow-hidden select-none touch-none">
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Primary-school horizontal guide lines */}
          <line x1="8" y1={strokeData.headlineY} x2="192" y2={strokeData.headlineY} stroke="#CBD5E1" strokeDasharray="4 4" strokeWidth="1.5" />
          <line x1="8" y1={strokeData.midlineY} x2="192" y2={strokeData.midlineY} stroke="#93C5FD" strokeDasharray="5 4" strokeWidth="1.8" />
          <line x1="8" y1={strokeData.baselineY} x2="192" y2={strokeData.baselineY} stroke="#FCA5A5" strokeWidth="2.2" />

          {/* Faint full template strokes */}
          {sampledStrokes.map((s, idx) => (
            <path
              key={s.guide.id}
              d={s.guide.pathD}
              fill="none"
              stroke={idx < strokeIdx || isCompleted ? '#10B981' : '#CBD5E1'}
              strokeWidth={idx < strokeIdx || isCompleted ? 20 : 22}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={idx < strokeIdx || isCompleted ? 0.9 : 0.65}
            />
          ))}

          {/* Active stroke dashed guide */}
          {!isCompleted && activeSample && (
            <>
              <path
                d={activeSample.guide.pathD}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="4"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              {/* Green glowing Start Dot */}
              <circle
                cx={activeSample.guide.startPoint.x}
                cy={activeSample.guide.startPoint.y}
                r="13"
                fill="#10B981"
                stroke="#FFFFFF"
                strokeWidth="3"
              />
              {/* Gold Target End Star Circle */}
              <circle
                cx={activeSample.guide.endPoint.x}
                cy={activeSample.guide.endPoint.y}
                r="9"
                fill="#F59E0B"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
            </>
          )}

          {/* Animated Ghost Demo Dot */}
          {demoPt && (
            <circle cx={demoPt.x} cy={demoPt.y} r="14" fill="#3B82F6" opacity="0.8" stroke="#FFF" strokeWidth="3" />
          )}
        </svg>

        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          data-testid="battle-letter-trace-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrawing}
          onPointerCancel={endDrawing}
          className="relative z-10 w-full h-full cursor-crosshair touch-none"
        />

        {isCompleted && (
          <div className="absolute inset-0 z-20 bg-emerald-500/20 flex items-center justify-center">
            <div className="px-4 py-2 rounded-2xl bg-emerald-600 text-white font-display font-bold text-sm shadow-xl flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span>⚡ Nạp Đủ Năng Lượng “{trace.displayChar}”!</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress bar & tip */}
      <div className="mt-2 space-y-1.5">
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-150"
            style={{ width: `${Math.round((isCompleted ? 1 : progressRatio) * 100)}%` }}
          />
        </div>
        <p className="text-center text-xs font-bold text-slate-700">
          {hintVi || activeSample?.guide.instructionVi || trace.instructionVi}
        </p>

        {/* Action controls */}
        <div className="flex items-center justify-center gap-2 pt-0.5">
          <button
            type="button"
            onClick={runDemoAnimation}
            className="px-3 py-1.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Xem Mẫu</span>
          </button>
          <button
            type="button"
            onClick={handleResetStroke}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            <Eraser className="w-3.5 h-3.5" />
            <span>Xóa Vẽ Lại</span>
          </button>
          <span className="text-[11px] font-bold text-emerald-700 hidden sm:inline">
            ✨ Vẽ xong {heroNameVi} sẽ tung chiêu!
          </span>
        </div>
      </div>
    </div>
  );
};
