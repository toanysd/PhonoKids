import React, { useState, useEffect, useRef } from 'react';
import { MinimalPairItem } from '../types/phonics';
import { audioService } from '../services/audioService';
import { getWordVisual } from '../services/imageService';
import { PHONICS_WORD_BANK } from '../data/phonicsWordBank';
import { KidButton } from './KidButton';
import { Volume2, HelpCircle, CheckCircle2, Award, Sparkles, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';

export type DrillAudioMode = 'word_only' | 'phoneme_word' | 'spell_word' | 'all';

interface MinimalPairDrillProps {
  drill: MinimalPairItem;
  onSuccess?: () => void;
  onNextDrill?: () => void;
}

export const MinimalPairDrill: React.FC<MinimalPairDrillProps> = ({ drill, onSuccess, onNextDrill }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>([]);
  const [isPlayingTarget, setIsPlayingTarget] = useState<boolean>(false);
  const [shakingWord, setShakingWord] = useState<string | null>(null);
  const [gentleWrongNotice, setGentleWrongNotice] = useState<string | null>(null);

  // Audio Reading Mode preference (word_only | phoneme_word | spell_word | all)
  const [audioMode, setAudioMode] = useState<DrillAudioMode>(() => {
    try {
      const saved = localStorage.getItem('minimal_pairs_audio_mode') as DrillAudioMode;
      if (saved && ['word_only', 'phoneme_word', 'spell_word', 'all'].includes(saved)) {
        return saved;
      }
    } catch {}
    return 'word_only';
  });

  // Auto-read audio toggle (default: true)
  const [isAutoReadEnabled, setIsAutoReadEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('minimal_pairs_auto_read');
      if (saved !== null) {
        return saved === 'true';
      }
    } catch {}
    return true;
  });

  const autoNextTimerRef = useRef<any>(null);
  const wrongTimerRef = useRef<any>(null);
  const autoReadTimeoutRef = useRef<any>(null);
  const audioSequenceAbortRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  // Shuffle options on drill change to prevent positional bias
  useEffect(() => {
    if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
    if (wrongTimerRef.current) clearTimeout(wrongTimerRef.current);
    const shuffled = Math.random() > 0.5
      ? [drill.targetWord, drill.distractorWord]
      : [drill.distractorWord, drill.targetWord];
    setOptions(shuffled);
    setSelectedWord(null);
    setIsAnswered(false);
    setShowHint(false);
    setShakingWord(null);
    setGentleWrongNotice(null);
  }, [drill.id, drill.targetWord, drill.distractorWord]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (autoReadTimeoutRef.current) clearTimeout(autoReadTimeoutRef.current);
      if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
      if (wrongTimerRef.current) clearTimeout(wrongTimerRef.current);
      audioSequenceAbortRef.current.cancelled = true;
      audioService.stopSpeaking();
    };
  }, []);

  const playDrillAudio = async (modeToPlay: DrillAudioMode = audioMode): Promise<void> => {
    if (autoReadTimeoutRef.current) {
      clearTimeout(autoReadTimeoutRef.current);
      autoReadTimeoutRef.current = null;
    }

    // Abort previous sequence and stop speaking
    audioSequenceAbortRef.current.cancelled = true;
    audioService.stopSpeaking();

    const token = { cancelled: false };
    audioSequenceAbortRef.current = token;
    setIsPlayingTarget(true);

    const isJa = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(drill.targetWord);
    const cleanTarget = drill.targetWord.replace(/\s*\(.*?\)/, '').trim();

    try {
      if (isJa) {
        if (modeToPlay === 'word_only' || modeToPlay === 'phoneme_word') {
          await audioService.speakJapanese(cleanTarget, 0.85);
        } else if (modeToPlay === 'spell_word') {
          const chars = cleanTarget.split('');
          for (const ch of chars) {
            if (token.cancelled) return;
            await audioService.speakJapanese(ch, 0.9);
            await new Promise((r) => setTimeout(r, 180));
          }
          if (token.cancelled) return;
          await new Promise((r) => setTimeout(r, 220));
          if (token.cancelled) return;
          await audioService.speakJapanese(cleanTarget, 0.85);
        } else if (modeToPlay === 'all') {
          await audioService.speakJapanese(cleanTarget, 0.85);
          if (token.cancelled) return;
          await new Promise((r) => setTimeout(r, 350));
          if (token.cancelled) return;
          await audioService.speakJapanese(cleanTarget, 0.85);
        }
      } else {
        if (modeToPlay === 'word_only') {
          await audioService.speakEnglish(drill.targetWord, 0.85);
        } else if (modeToPlay === 'phoneme_word') {
          // 1. Play target phoneme sound (e.g. /s/)
          await audioService.playPhoneme(drill.correctPhoneme);
          if (token.cancelled) return;
          await new Promise((r) => setTimeout(r, 220));
          if (token.cancelled) return;
          // 2. Speak target word
          await audioService.speakEnglish(drill.targetWord, 0.85);
        } else if (modeToPlay === 'spell_word') {
          // Find phonemes from word bank or fallback to split letters
          const bankItem = PHONICS_WORD_BANK.find(
            (item) => item.word.toLowerCase() === drill.targetWord.toLowerCase()
          );
          const phonemesToPlay = bankItem?.phonemes || drill.targetWord.toLowerCase().split('');
          for (let i = 0; i < phonemesToPlay.length; i++) {
            if (token.cancelled) return;
            await audioService.playPhoneme(phonemesToPlay[i]);
            if (token.cancelled) return;
            await new Promise((r) => setTimeout(r, 130));
          }
          if (token.cancelled) return;
          await new Promise((r) => setTimeout(r, 220));
          if (token.cancelled) return;
          await audioService.speakEnglish(drill.targetWord, 0.85);
        } else if (modeToPlay === 'all') {
          // Clean prompt: remove phonetic slashes and quotes
          const cleanPrompt = drill.questionPrompt.replace(/\/[^\/]+\//g, '').replace(/["']/g, '').trim();
          await audioService.speakEnglish(cleanPrompt, 0.85);
          if (token.cancelled) return;
          await new Promise((r) => setTimeout(r, 320));
          if (token.cancelled) return;
          await audioService.playPhoneme(drill.correctPhoneme);
          if (token.cancelled) return;
          await new Promise((r) => setTimeout(r, 220));
          if (token.cancelled) return;
          await audioService.speakEnglish(drill.targetWord, 0.85);
        }
      }
    } catch {
      // Ignore interruption
    } finally {
      if (!token.cancelled) {
        setIsPlayingTarget(false);
      }
    }
  };

  // Auto-play audio when drill opens or changes (next, back, auto-advance)
  useEffect(() => {
    if (autoReadTimeoutRef.current) {
      clearTimeout(autoReadTimeoutRef.current);
      autoReadTimeoutRef.current = null;
    }
    audioSequenceAbortRef.current.cancelled = true;
    audioService.stopSpeaking();
    setIsPlayingTarget(false);

    if (!isAutoReadEnabled) return;

    // Small delay so card rendering and transitions are smooth before voice speaks
    autoReadTimeoutRef.current = setTimeout(() => {
      playDrillAudio(audioMode);
    }, 280);

    return () => {
      if (autoReadTimeoutRef.current) {
        clearTimeout(autoReadTimeoutRef.current);
        autoReadTimeoutRef.current = null;
      }
      audioSequenceAbortRef.current.cancelled = true;
      audioService.stopSpeaking();
    };
  }, [drill.id, isAutoReadEnabled]);

  const handleHearTargetWord = () => {
    playDrillAudio(audioMode);
  };

  const handleModeChange = (newMode: DrillAudioMode) => {
    setAudioMode(newMode);
    try {
      localStorage.setItem('minimal_pairs_audio_mode', newMode);
    } catch {}
    playDrillAudio(newMode);
  };

  const handleToggleAutoRead = () => {
    const nextVal = !isAutoReadEnabled;
    setIsAutoReadEnabled(nextVal);
    try {
      localStorage.setItem('minimal_pairs_auto_read', String(nextVal));
    } catch {}
    if (!nextVal) {
      if (autoReadTimeoutRef.current) {
        clearTimeout(autoReadTimeoutRef.current);
        autoReadTimeoutRef.current = null;
      }
      audioSequenceAbortRef.current.cancelled = true;
      audioService.stopSpeaking();
      setIsPlayingTarget(false);
    }
  };

  const getPlayingLabel = () => {
    if (!isPlayingTarget) return 'Chạm Nghe Âm Mẫu 🔊';
    switch (audioMode) {
      case 'word_only':
        return 'Đang đọc từ mẫu... 🔊';
      case 'phoneme_word':
        return 'Đang đọc âm vị & từ... 🎯';
      case 'spell_word':
        return 'Đang đánh vần & ghép từ... 🔤';
      case 'all':
        return 'Đang đọc toàn bộ... 🌟';
    }
  };

  const handleHearOption = (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    if (autoReadTimeoutRef.current) {
      clearTimeout(autoReadTimeoutRef.current);
      autoReadTimeoutRef.current = null;
    }
    audioSequenceAbortRef.current.cancelled = true;
    const isJaOpt = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/.test(word);
    const cleanWord = word.replace(/\s*\(.*?\)/, '').trim();
    if (isJaOpt) {
      audioService.speakJapanese(cleanWord, 0.85);
    } else {
      audioService.speakEnglish(word, 0.85);
    }
  };

  const handleSelectOption = (word: string) => {
    if (isAnswered && selectedWord === drill.targetWord) return; // Prevent clicking while advancing

    if (wrongTimerRef.current) clearTimeout(wrongTimerRef.current);
    setGentleWrongNotice(null);

    // Stop prompt audio when child interacts
    if (autoReadTimeoutRef.current) {
      clearTimeout(autoReadTimeoutRef.current);
      autoReadTimeoutRef.current = null;
    }
    audioSequenceAbortRef.current.cancelled = true;
    audioService.stopSpeaking();
    setIsPlayingTarget(false);

    if (word === drill.targetWord) {
      setSelectedWord(word);
      setIsAnswered(true);
      setShakingWord(null);

      audioService.playSuccessJingle();
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Ignore
      }
      onSuccess?.();

      // Automatically advance to next drill after 1400ms!
      if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = setTimeout(() => {
        handleNext();
      }, 1400);
    } else {
      // Gentle retry feedback: soft wiggle, supportive sound and friendly text, allowing reselection
      setShakingWord(word);
      audioService.playGentleTryAgain();
      setGentleWrongNotice('Chưa đúng rồi! Bé lắng nghe kỹ âm thanh và chạm chọn lại nhé! 🌸');

      wrongTimerRef.current = setTimeout(() => {
        setShakingWord(null);
      }, 700);

      setTimeout(() => {
        setGentleWrongNotice(null);
      }, 3500);
    }
  };

  const handleNext = () => {
    if (autoReadTimeoutRef.current) {
      clearTimeout(autoReadTimeoutRef.current);
      autoReadTimeoutRef.current = null;
    }
    if (autoNextTimerRef.current) {
      clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = null;
    }
    audioSequenceAbortRef.current.cancelled = true;
    audioService.stopSpeaking();
    setIsPlayingTarget(false);
    setSelectedWord(null);
    setIsAnswered(false);
    setShowHint(false);
    setShakingWord(null);
    setGentleWrongNotice(null);
    if (onNextDrill) {
      onNextDrill();
    }
  };

  const isCorrect = selectedWord === drill.targetWord;

  const renderVisualCard = (word: string) => {
    const visual = getWordVisual(word);

    return (
      <div className="relative w-full h-24 sm:h-28 md:h-32 rounded-xl overflow-hidden mb-1.5 border border-purple-200 shadow-sm bg-purple-50 group">
        <img
          src={visual.url}
          alt={visual.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/assets/ehon/star.jpg';
          }}
        />
        <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow">
          {visual.type === 'ehon' ? '🎨 Ehon' : '📷 Ảnh thật'}
        </div>
        <div className="absolute bottom-1.5 left-1.5 bg-white/95 backdrop-blur-xs text-purple-950 text-[9px] font-bold px-1.5 py-0.5 rounded-md border border-purple-200">
          {visual.alt}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-50 rounded-3xl p-3 sm:p-5 border-4 border-purple-300 shadow-xl flex-1 min-h-0 flex flex-col justify-between overflow-hidden text-center">
      {/* Drill Pair Header */}
      <div className="flex items-center justify-between shrink-0 mb-1">
        <span className="text-xs font-black text-purple-900 bg-purple-200/90 px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
          Phòng Lỗi Phát Âm • {drill.pairName}
        </span>
        <button
          onClick={() => setShowHint(!showHint)}
          className="p-1.5 bg-white text-purple-700 hover:text-purple-900 rounded-full shadow-xs border border-purple-200 cursor-pointer"
          title="Xem bí quyết phụ huynh"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {showHint && (
        <div className="mb-2 p-2.5 bg-purple-200/95 rounded-2xl text-xs font-bold text-purple-950 text-left border border-purple-300 animate-fadeIn shrink-0">
          💡 <span className="font-black">Bí kíp phát âm cho bé:</span> {drill.hintVi}
        </div>
      )}

      {/* Sleek Auto-Read & Mode Selector Ribbon */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 py-1 px-3 bg-white/85 backdrop-blur-xs rounded-2xl border-2 border-purple-200 shadow-xs max-w-xl mx-auto my-1 shrink-0">
        {/* Toggle Auto-Read */}
        <button
          onClick={handleToggleAutoRead}
          className={`px-2.5 py-1 rounded-xl text-xs font-black flex items-center space-x-1.5 transition-all cursor-pointer border ${
            isAutoReadEnabled
              ? 'bg-purple-600 text-white border-purple-700 shadow-xs'
              : 'bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200'
          }`}
          title={isAutoReadEnabled ? 'Tắt tự động đọc khi lật bài' : 'Bật tự động đọc khi lật bài'}
        >
          {isAutoReadEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span>{isAutoReadEnabled ? 'Tự Đọc: BẬT' : 'Tự Đọc: TẮT'}</span>
        </button>

        <div className="w-[1px] h-4 bg-purple-200 mx-0.5 hidden sm:block" />

        {/* Reading Mode Options */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => handleModeChange('word_only')}
            className={`px-2 py-1 rounded-xl text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'word_only'
                ? 'bg-purple-100 text-purple-900 border-purple-400 ring-2 ring-purple-300 shadow-xs'
                : 'bg-transparent text-purple-700/80 border-transparent hover:bg-purple-50'
            }`}
            title="Chỉ đọc từ mẫu mục tiêu"
          >
            🔊 Chỉ Từ
          </button>
          <button
            onClick={() => handleModeChange('phoneme_word')}
            className={`px-2 py-1 rounded-xl text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'phoneme_word'
                ? 'bg-purple-100 text-purple-900 border-purple-400 ring-2 ring-purple-300 shadow-xs'
                : 'bg-transparent text-purple-700/80 border-transparent hover:bg-purple-50'
            }`}
            title="Đọc âm vị mẫu rồi đọc từ"
          >
            🎯 Âm Vị & Từ
          </button>
          <button
            onClick={() => handleModeChange('spell_word')}
            className={`px-2 py-1 rounded-xl text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'spell_word'
                ? 'bg-purple-100 text-purple-900 border-purple-400 ring-2 ring-purple-300 shadow-xs'
                : 'bg-transparent text-purple-700/80 border-transparent hover:bg-purple-50'
            }`}
            title="Đánh vần từng âm rồi ghép thành từ"
          >
            🔤 Đánh Vần
          </button>
          <button
            onClick={() => handleModeChange('all')}
            className={`px-2 py-1 rounded-xl text-xs font-black transition-all cursor-pointer border ${
              audioMode === 'all'
                ? 'bg-purple-100 text-purple-900 border-purple-400 ring-2 ring-purple-300 shadow-xs'
                : 'bg-transparent text-purple-700/80 border-transparent hover:bg-purple-50'
            }`}
            title="Đọc toàn bộ câu hỏi và từ mục tiêu"
          >
            🌟 Toàn Bộ
          </button>
        </div>
      </div>

      {/* Prominent Target Sound Audio Button */}
      <div className="flex flex-col items-center justify-center my-1 shrink-0">
        <p className="text-xs sm:text-sm font-bold text-purple-900 mb-1">
          {drill.questionPrompt}
        </p>
        <KidButton
          variant="purple"
          size="md"
          onClick={handleHearTargetWord}
          className={`py-2 px-6 shadow-xl text-sm sm:text-base font-black ${
            isPlayingTarget ? 'ring-4 ring-purple-300 scale-105 animate-pulse' : ''
          }`}
          title="Chạm để nghe âm mẫu cần tìm theo chế độ đã chọn"
        >
          <Volume2 className={`w-6 h-6 mr-2 ${isPlayingTarget ? 'animate-bounce' : 'animate-pulse'}`} />
          <span>{getPlayingLabel()}</span>
        </KidButton>
      </div>

      {/* Option Cards (Grid 2 cols) */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 my-auto max-w-2xl mx-auto w-full">
        {options.map((word) => {
          const isTarget = word === drill.targetWord;
          const isSelected = selectedWord === word;
          const isShaking = shakingWord === word;

          return (
            <div
              key={word}
              onClick={() => handleSelectOption(word)}
              className={`p-3 sm:p-4 rounded-2xl border-3 transition-all duration-200 flex flex-col items-center justify-between cursor-pointer shadow-md transform active:scale-95 ${
                isAnswered && isSelected && isTarget
                  ? 'bg-emerald-100 border-emerald-500 ring-4 ring-emerald-300 scale-102'
                  : isShaking
                  ? 'bg-amber-50 border-amber-400 ring-4 ring-amber-200 scale-98 animate-wiggle'
                  : 'bg-white border-purple-200 hover:border-purple-400'
              }`}
            >
              <div className="w-full">
                {renderVisualCard(word)}
                <span className="text-2xl sm:text-3xl font-black text-purple-950 uppercase tracking-wide block mb-1">
                  {word}
                </span>
              </div>

              {/* Direct individual listen button */}
              <div className="w-full flex items-center justify-between pt-1.5 border-t border-purple-100">
                <button
                  onClick={(e) => handleHearOption(e, word)}
                  className="px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold rounded-lg text-xs flex items-center space-x-1.5 transition-colors cursor-pointer border border-purple-300 shadow-xs"
                  title={`Nghe phát âm ${word}`}
                >
                  <Volume2 className="w-4 h-4 text-purple-700 animate-pulse" />
                  <span>Nghe Thẻ Này 🔊</span>
                </button>

                {isAnswered && isSelected && isTarget && (
                  <span className="text-xs font-black text-emerald-700 flex items-center space-x-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Đúng!</span>
                  </span>
                )}

                {isShaking && (
                  <span className="text-[11px] font-bold text-amber-700">
                    Nghe lại nhé!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Gentle feedback notification when wrong */}
      {gentleWrongNotice && (
        <div className="shrink-0 my-1 p-2 bg-amber-100/95 border-2 border-amber-300 rounded-2xl text-xs sm:text-sm font-black text-amber-950 flex items-center justify-between gap-2 max-w-lg mx-auto animate-fadeIn shadow-sm">
          <div className="flex items-center space-x-1.5">
            <span className="text-lg">🌸</span>
            <span>{gentleWrongNotice}</span>
          </div>
          <button
            onClick={handleHearTargetWord}
            className="px-2.5 py-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-xl text-xs flex items-center space-x-1 shrink-0 cursor-pointer shadow-xs active:scale-95"
            title="Nghe lại âm mẫu cần tìm"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Nghe lại mẫu</span>
          </button>
        </div>
      )}

      {/* Feedback banner */}
      {isAnswered && isCorrect && (
        <div className="shrink-0 pt-1">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-emerald-100/90 border border-emerald-400 rounded-xl text-emerald-950 text-xs sm:text-sm font-black flex items-center space-x-1.5 animate-pulse">
              <Award className="w-5 h-5 text-emerald-600 animate-bounce" />
              <span>Chính xác! Đang tự chuyển tiếp... 🚀</span>
            </div>
            <KidButton 
              variant="success" 
              size="md" 
              onClick={handleNext} 
              className="py-2 px-5 text-xs sm:text-sm font-black shadow-lg"
              title="Sang bài luyện tiếp theo ngay"
            >
              <span>Bài Tiếp Theo ➔</span>
              <Sparkles className="w-4 h-4 ml-1" />
            </KidButton>
          </div>
        </div>
      )}
    </div>
  );
};
