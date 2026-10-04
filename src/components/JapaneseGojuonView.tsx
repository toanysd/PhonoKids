import React, { useState, useEffect, useRef } from 'react';
import { JAPANESE_GOJUON_ROWS } from '../data/japanese/gojuonData';
import { KanaItem, KanaRowGroup } from '../types/japanese';
import { audioService } from '../services/audioService';
import { KidButton } from './KidButton';
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  PenTool, 
  BookOpen, 
  Smile, 
  Award,
  Music,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface JapaneseGojuonViewProps {
  onAddStars: (amount: number) => void;
}

type JapaneseAudioMode = 'kana_only' | 'kana_word' | 'tpr_chant';
type ActiveSubTab = 'vocabulary' | 'tracing' | 'mouth_guide';

export const JapaneseGojuonView: React.FC<JapaneseGojuonViewProps> = ({ onAddStars }) => {
  const [selectedRowKey, setSelectedRowKey] = useState<KanaRowGroup['rowKey']>('a');
  const [activeKanaIdx, setActiveKanaIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<ActiveSubTab>('vocabulary');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioMode, setAudioMode] = useState<JapaneseAudioMode>(() => {
    try {
      const saved = localStorage.getItem('japanese_audio_mode') as JapaneseAudioMode;
      if (saved && ['kana_only', 'kana_word', 'tpr_chant'].includes(saved)) return saved;
    } catch {}
    return 'kana_only';
  });
  const [isAutoRead, setIsAutoRead] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('japanese_auto_read');
      if (saved !== null) return saved === 'true';
    } catch {}
    return true;
  });

  // Tracing Canvas state
  const [isTracingCompleted, setIsTracingCompleted] = useState<boolean>(false);
  const [tracePoints, setTracePoints] = useState<{ x: number; y: number }[]>([]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const abortRef = useRef<{ cancelled: boolean }>({ cancelled: false });
  const autoPlayTimerRef = useRef<any>(null);

  const currentRow = JAPANESE_GOJUON_ROWS.find((r) => r.rowKey === selectedRowKey) || JAPANESE_GOJUON_ROWS[0];
  const activeKana: KanaItem = currentRow.characters[activeKanaIdx] || currentRow.characters[0];

  // Play audio sequence based on active mode
  const playKanaAudio = async (mode: JapaneseAudioMode = audioMode, targetKana = activeKana) => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }

    abortRef.current.cancelled = true;
    audioService.stopSpeaking();

    const token = { cancelled: false };
    abortRef.current = token;
    setIsPlayingAudio(true);

    try {
      if (mode === 'kana_only') {
        await audioService.speakJapanese(targetKana.hiragana, 0.85);
      } else if (mode === 'kana_word') {
        // 1. Speak Hiragana
        await audioService.speakJapanese(targetKana.hiragana, 0.85);
        if (token.cancelled) return;
        await new Promise((r) => setTimeout(r, 280));
        if (token.cancelled) return;
        // 2. Speak first sample word
        if (targetKana.sampleWords.length > 0) {
          await audioService.speakJapanese(targetKana.sampleWords[0].word, 0.85);
        }
      } else if (mode === 'tpr_chant') {
        await audioService.playJapaneseTprAction(
          targetKana.tprAction.chantJa,
          targetKana.sampleWords[0]?.word || targetKana.hiragana
        );
      }
    } catch {
      // Ignore interruption
    } finally {
      if (!token.cancelled) {
        setIsPlayingAudio(false);
      }
    }
  };

  // Trigger auto-read on kana change
  useEffect(() => {
    setIsTracingCompleted(false);
    setTracePoints([]);
    clearCanvas();

    if (!isAutoRead) return;

    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      playKanaAudio(audioMode, activeKana);
    }, 280);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
    };
  }, [activeKana.id, isAutoRead]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
    };
  }, []);

  // Keyboard navigation Left / Right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        handleNextKana();
      } else if (e.key === 'ArrowLeft') {
        handlePrevKana();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeKanaIdx, currentRow.characters.length]);

  const handleNextKana = () => {
    audioService.playPopSound(520);
    setActiveKanaIdx((prev) => (prev + 1) % currentRow.characters.length);
  };

  const handlePrevKana = () => {
    audioService.playPopSound(460);
    setActiveKanaIdx((prev) => (prev - 1 + currentRow.characters.length) % currentRow.characters.length);
  };

  const handleRowChange = (rowKey: KanaRowGroup['rowKey']) => {
    audioService.playPopSound(500);
    setSelectedRowKey(rowKey);
    setActiveKanaIdx(0);
  };

  const handleModeChange = (newMode: JapaneseAudioMode) => {
    setAudioMode(newMode);
    try {
      localStorage.setItem('japanese_audio_mode', newMode);
    } catch {}
    playKanaAudio(newMode);
  };

  const handleToggleAutoRead = () => {
    const next = !isAutoRead;
    setIsAutoRead(next);
    try {
      localStorage.setItem('japanese_auto_read', String(next));
    } catch {}
    if (!next) {
      abortRef.current.cancelled = true;
      audioService.stopSpeaking();
      setIsPlayingAudio(false);
    }
  };

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
      onAddStars(2);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 py-1.5 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden select-none">
      
      {/* Top Header Bar: Row Switcher & Audio Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5 shrink-0 bg-white/90 backdrop-blur-xs p-2 rounded-2xl border-2 border-rose-200 shadow-xs">
        
        {/* Row Selection Tabs */}
        <div className="flex items-center space-x-1.5">
          <span className="text-xs font-black text-rose-950 bg-rose-100 px-3 py-1 rounded-xl hidden sm:inline-flex items-center gap-1 border border-rose-200">
            <span>🌸</span>
            <span>Hàng Chữ Kana:</span>
          </span>
          {JAPANESE_GOJUON_ROWS.map((row) => (
            <button
              key={row.rowKey}
              onClick={() => handleRowChange(row.rowKey)}
              className={`px-3 py-1 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer border ${
                selectedRowKey === row.rowKey
                  ? 'bg-rose-500 text-white border-rose-600 shadow-sm scale-102'
                  : 'bg-rose-50 text-rose-900 border-rose-200 hover:bg-rose-100'
              }`}
            >
              {row.rowNameJa} • {row.rowNameVi.split(' ')[0]} {row.rowNameVi.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Audio Mode Ribbon */}
        <div className="flex items-center gap-1.5 bg-rose-50/80 p-1 rounded-xl border border-rose-200">
          <button
            onClick={handleToggleAutoRead}
            className={`px-2 py-0.5 rounded-lg text-xs font-black flex items-center space-x-1 transition-all cursor-pointer border ${
              isAutoRead ? 'bg-rose-600 text-white border-rose-700' : 'bg-gray-100 text-gray-500 border-gray-300'
            }`}
            title="Bật/Tắt tự động đọc âm khi đổi chữ"
          >
            {isAutoRead ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden xs:inline">{isAutoRead ? 'Tự Đọc: BẬT' : 'Tắt'}</span>
          </button>

          <div className="w-[1px] h-3.5 bg-rose-200" />

          <button
            onClick={() => handleModeChange('kana_only')}
            className={`px-2 py-0.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'kana_only'
                ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
            }`}
          >
            🔊 Chỉ Chữ
          </button>
          <button
            onClick={() => handleModeChange('kana_word')}
            className={`px-2 py-0.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'kana_word'
                ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
            }`}
          >
            🔤 Chữ + Từ
          </button>
          <button
            onClick={() => handleModeChange('tpr_chant')}
            className={`px-2 py-0.5 rounded-lg text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'tpr_chant'
                ? 'bg-white text-rose-950 border-rose-400 shadow-xs'
                : 'bg-transparent text-rose-800 border-transparent hover:bg-rose-100'
            }`}
          >
            🎶 Đồng Dao
          </button>
        </div>
      </div>

      {/* Main Workspace Layout (Two-Column on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 flex-1 min-h-0 overflow-hidden">
        
        {/* Left Column: 5-Character Row Selector (4 cols on lg) */}
        <div className="lg:col-span-4 bg-gradient-to-b from-rose-50 to-amber-50 rounded-2xl p-2.5 border-3 border-rose-200 shadow-sm flex flex-col justify-between overflow-hidden">
          <div className="text-center mb-1 shrink-0">
            <span className="text-[11px] font-black text-rose-900 bg-white/90 px-3 py-0.5 rounded-full border border-rose-200">
              {currentRow.rowNameJa} • {currentRow.rowNameVi}
            </span>
          </div>

          {/* 5 Kana Character Buttons */}
          <div className="grid grid-cols-5 lg:grid-cols-1 gap-1.5 my-auto">
            {currentRow.characters.map((item, idx) => {
              const isSelected = idx === activeKanaIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    audioService.playPopSound(540);
                    setActiveKanaIdx(idx);
                  }}
                  className={`p-1.5 sm:p-2.5 rounded-xl border-2 transition-all flex flex-col lg:flex-row items-center justify-between cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'bg-rose-500 text-white border-rose-600 ring-3 ring-rose-200 shadow-md scale-102'
                      : 'bg-white text-rose-950 border-rose-200 hover:border-rose-400 hover:bg-rose-50/60'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black leading-none tracking-tight">
                      {item.hiragana}
                    </span>
                    <div className="hidden lg:block text-left">
                      <span className={`text-xs font-bold block ${isSelected ? 'text-rose-100' : 'text-rose-700'}`}>
                        Katakana: {item.katakana}
                      </span>
                      <span className={`text-[11px] font-bold block ${isSelected ? 'text-white' : 'text-amber-700'}`}>
                        {item.sampleWords[0]?.word} ({item.sampleWords[0]?.meaningVi})
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-black uppercase px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-900'
                  }`}>
                    /{item.romaji}/
                  </span>
                </button>
              );
            })}
          </div>

          {/* Big Audio Sample Button */}
          <div className="mt-2 shrink-0 text-center">
            <KidButton
              variant="purple"
              size="md"
              onClick={() => playKanaAudio(audioMode)}
              className={`w-full py-2 shadow-md text-sm font-black ${
                isPlayingAudio ? 'ring-4 ring-rose-300 scale-102 animate-pulse' : ''
              }`}
            >
              <Volume2 className={`w-5 h-5 mr-1.5 ${isPlayingAudio ? 'animate-bounce' : 'animate-pulse'}`} />
              <span>
                {isPlayingAudio
                  ? audioMode === 'kana_only'
                    ? `Đang đọc "${activeKana.hiragana}"...`
                    : audioMode === 'kana_word'
                    ? `Đang đọc từ "${activeKana.sampleWords[0]?.word}"...`
                    : 'Đang hát đồng dao...'
                  : `Nghe Âm "${activeKana.hiragana}" [${activeKana.romaji}] 🔊`}
              </span>
            </KidButton>
          </div>
        </div>

        {/* Right Column: Deep-Dive Workspace (Vocabulary, Tracing, Mouth Guide) (8 cols on lg) */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-2.5 sm:p-3.5 border-3 border-rose-200 shadow-sm flex flex-col justify-between overflow-hidden">
          
          {/* Sub-Tab Navigation Header */}
          <div className="flex items-center justify-between border-b border-rose-100 pb-1.5 shrink-0">
            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => {
                  audioService.playPopSound(480);
                  setActiveTab('vocabulary');
                }}
                className={`px-3 py-1 rounded-xl text-xs font-black flex items-center space-x-1 transition-all cursor-pointer ${
                  activeTab === 'vocabulary'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-rose-900 hover:bg-rose-50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Từ Vựng Ehon</span>
              </button>

              <button
                onClick={() => {
                  audioService.playPopSound(490);
                  setActiveTab('tracing');
                }}
                className={`px-3 py-1 rounded-xl text-xs font-black flex items-center space-x-1 transition-all cursor-pointer ${
                  activeTab === 'tracing'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-rose-900 hover:bg-rose-50'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                <span>Tập Tô Chữ (筆順)</span>
              </button>

              <button
                onClick={() => {
                  audioService.playPopSound(500);
                  setActiveTab('mouth_guide');
                }}
                className={`px-3 py-1 rounded-xl text-xs font-black flex items-center space-x-1 transition-all cursor-pointer ${
                  activeTab === 'mouth_guide'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-rose-900 hover:bg-rose-50'
                }`}
              >
                <Smile className="w-3.5 h-3.5" />
                <span>Khẩu Hình Chuẩn</span>
              </button>
            </div>

            <div className="flex items-center space-x-1 text-xs font-black text-rose-900 bg-rose-50 px-2.5 py-0.5 rounded-lg border border-rose-200">
              <span>{activeKana.hiragana}</span>
              <span className="text-gray-400">/</span>
              <span>{activeKana.katakana}</span>
              <span className="text-gray-400">/</span>
              <span className="text-rose-600 font-bold">[{activeKana.romaji}]</span>
            </div>
          </div>

          {/* Tab 1: Vocabulary & TPR Chants */}
          {activeTab === 'vocabulary' && (
            <div className="flex-1 min-h-0 flex flex-col justify-between py-1.5 overflow-hidden">
              {/* Word Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-auto">
                {activeKana.sampleWords.map((item) => (
                  <div
                    key={item.word}
                    onClick={() => {
                      audioService.playPopSound(540);
                      audioService.speakJapanese(item.word, 0.85);
                    }}
                    className="p-2 bg-gradient-to-b from-rose-50/70 to-amber-50/50 rounded-xl border border-rose-200 shadow-xs hover:border-rose-400 hover:scale-102 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="relative w-full h-16 sm:h-20 rounded-lg overflow-hidden mb-1 border border-rose-100 bg-white">
                      <img
                        src={item.visualUrl}
                        alt={item.visualAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/assets/ehon/star.jpg';
                        }}
                      />
                      <div className="absolute top-1 right-1 bg-black/60 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full">
                        Ehon
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-base sm:text-lg font-black text-rose-950">
                          {item.word}
                        </span>
                        {item.kanji && (
                          <span className="text-xs font-bold text-gray-500">
                            ({item.kanji})
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] font-bold text-rose-700">
                        /{item.romaji}/ • {item.meaningVi}
                      </p>
                    </div>

                    <div className="mt-1 text-center">
                      <span className="text-[9px] font-black text-rose-800 bg-rose-200/80 px-2 py-0.5 rounded-full inline-flex items-center gap-0.5">
                        <Volume2 className="w-2.5 h-2.5" /> Chạm nghe
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Japanese TPR Action Chant Box */}
              <div className="p-2 sm:p-2.5 bg-rose-100/90 rounded-xl border border-rose-300 flex items-center justify-between gap-2 shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{activeKana.tprAction.icon}</span>
                  <div className="text-left">
                    <p className="text-xs font-black text-rose-950">
                      🎶 {activeKana.tprAction.titleVi} • <span className="text-rose-700 font-extrabold">{activeKana.tprAction.chantJa}</span>
                    </p>
                    <p className="text-[11px] font-medium text-rose-900 leading-tight">
                      {activeKana.tprAction.descriptionVi}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => playKanaAudio('tpr_chant')}
                  className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs rounded-xl flex items-center space-x-1 shrink-0 shadow-xs cursor-pointer active:scale-95"
                  title="Hát điệu đồng dao và làm động tác"
                >
                  <Music className="w-3.5 h-3.5" />
                  <span>Hát Chant</span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Tracing Studio with Stroke Order */}
          {activeTab === 'tracing' && (
            <div className="flex-1 min-h-0 flex flex-col lg:flex-row items-center justify-between gap-3 py-1 overflow-hidden">
              
              {/* Canvas Interactive Drawing Box */}
              <div className="relative w-52 sm:w-60 h-52 sm:h-60 bg-amber-50/70 rounded-2xl border-3 border-dashed border-rose-300 flex items-center justify-center overflow-hidden shadow-inner shrink-0">
                
                {/* SVG Stroke Order Ghost Guide */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full pointer-events-none p-3"
                >
                  {/* Grid Lines */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#fecdd3" strokeDasharray="3,3" strokeWidth="1" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#fecdd3" strokeDasharray="3,3" strokeWidth="1" />

                  {/* Character Ghost Path */}
                  {activeKana.strokeOrder.strokes.map((stroke) => (
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
                      {/* Number Dot */}
                      <circle
                        cx={stroke.guidePoint.x}
                        cy={stroke.guidePoint.y}
                        r="5"
                        fill="#be123c"
                      />
                      <text
                        x={stroke.guidePoint.x}
                        y={stroke.guidePoint.y + 2.5}
                        fontSize="6"
                        fill="white"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {stroke.strokeNumber}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Freehand Trace Canvas */}
                <canvas
                  ref={canvasRef}
                  width={240}
                  height={240}
                  onMouseDown={handleStartDraw}
                  onMouseMove={handleDraw}
                  onMouseUp={handleEndDraw}
                  onTouchStart={handleStartDraw}
                  onTouchMove={handleDraw}
                  onTouchEnd={handleEndDraw}
                  className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
                />

                {isTracingCompleted && (
                  <div className="absolute inset-0 bg-emerald-500/85 backdrop-blur-xs flex flex-col items-center justify-center text-white animate-fadeIn">
                    <Award className="w-10 h-10 animate-bounce mb-1" />
                    <span className="font-black text-sm">Tô chữ chuẩn đẹp! +2 ⭐</span>
                  </div>
                )}
              </div>

              {/* Stroke Order Instructions */}
              <div className="flex-1 text-left flex flex-col justify-between py-1">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-rose-950 mb-1 flex items-center gap-1">
                    <span>✍️ Thứ tự nét viết chuẩn Nhật (筆順):</span>
                    <span className="bg-rose-200 text-rose-950 text-xs px-2 py-0.5 rounded-full font-extrabold">
                      {activeKana.strokeOrder.strokeCount} nét
                    </span>
                  </h4>
                  <p className="text-xs text-rose-900 mb-2">
                    {activeKana.strokeOrder.descriptionVi}
                  </p>

                  <div className="space-y-1">
                    {activeKana.strokeOrder.strokes.map((stroke) => (
                      <div
                        key={stroke.strokeNumber}
                        className="p-1.5 bg-rose-50 rounded-lg border border-rose-200 text-xs font-bold text-rose-950 flex items-center space-x-2"
                      >
                        <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-black flex items-center justify-center text-[10px] shrink-0">
                          {stroke.strokeNumber}
                        </span>
                        <span>{stroke.directionVi}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <button
                    onClick={clearCanvas}
                    className="px-3 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-900 text-xs font-black rounded-xl border border-rose-300 transition-colors cursor-pointer"
                  >
                    Xóa tô lại
                  </button>
                  <button
                    onClick={() => audioService.speakJapanese(activeKana.hiragana, 0.85)}
                    className="px-3 py-1.5 bg-rose-500 hover:bg-rose-600 text-white text-xs font-black rounded-xl shadow-xs flex items-center space-x-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Nghe phát âm</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Mouth Shape & Phonetic Guide */}
          {activeTab === 'mouth_guide' && (
            <div className="flex-1 min-h-0 flex flex-col justify-between py-2 text-left overflow-hidden">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 mb-2">
                <h4 className="text-xs sm:text-sm font-black text-amber-950 mb-1 flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-amber-600" />
                  <span>Bí quyết phát âm chuẩn Tokyo (Hyōjungo):</span>
                </h4>
                <p className="text-xs font-bold text-amber-900 mb-2">
                  {activeKana.soundDescriptionVi}
                </p>
                <div className="p-2 bg-white/90 rounded-lg border border-amber-200 text-xs text-amber-950 font-medium">
                  👄 <span className="font-black">Khẩu hình:</span> {activeKana.mouthGuide.instructionsVi}
                </div>
              </div>

              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200">
                <h5 className="text-xs font-black text-rose-950 mb-1">
                  💡 Lời khuyên phụ huynh khi đồng hành cùng con:
                </h5>
                <ul className="text-xs font-medium text-rose-900 space-y-1 list-disc list-inside">
                  <li>Khuyến khích bé nghe đi nghe lại trước khi tập phát âm to.</li>
                  <li>Không gượng ép con phân tích ngữ pháp, hãy để bé học tự nhiên qua động tác cơ thể và bài hát.</li>
                  <li>Mỗi buổi học chỉ cần 1 đến 2 chữ cái, duy trì sự hứng thú và niềm vui khám phá.</li>
                </ul>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => audioService.speakJapanese(activeKana.hiragana, 0.85)}
                  className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-black rounded-xl shadow-sm inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Nghe lại phát âm mẫu chuẩn Tokyo</span>
                </button>
              </div>
            </div>
          )}

          {/* Bottom Navigation Toolbar */}
          <div className="flex items-center justify-between pt-1.5 border-t border-rose-100 shrink-0">
            <button
              onClick={handlePrevKana}
              className="px-3 py-1 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-900 text-xs font-black flex items-center space-x-1 border border-rose-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Chữ Trước</span>
            </button>

            <span className="text-xs font-black text-rose-950 bg-rose-100 px-3 py-0.5 rounded-full border border-rose-200">
              {activeKanaIdx + 1} / {currentRow.characters.length}
            </span>

            <button
              onClick={handleNextKana}
              className="px-3 py-1 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-black flex items-center space-x-1 shadow-xs cursor-pointer"
            >
              <span>Chữ Tiếp Theo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Pedagogical Footer */}
      <div className="text-center py-0.5 shrink-0">
        <p className="text-[10px] font-bold text-rose-950/70">
          🌸 Giáo dục sớm Nhật Bản: Tiếp cận đa giác quan (Thính giác ➔ Thị giác ➔ Xúc giác ➔ Vận động TPR) • Không tạo áp lực cho trẻ nhỏ.
        </p>
      </div>
    </div>
  );
};
