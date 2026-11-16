import React, { useEffect, useRef, useState } from 'react';
import { HeroCharacter } from '../../types/heroGame';
import { HERO_COMM_MISSIONS, HERO_COMM_WELCOME, HeroCommMission } from '../../data/heroCommMissions';
import { CharacterRigSvg } from '../hero/CharacterRigSvg';
import { audioService } from '../../services/audioService';
import { geminiService } from '../../services/geminiService';
import { childSpeechService } from '../../services/speechRecognition';
import { storageService } from '../../services/storageService';
import { ChevronLeft, Mic, Radio, ShieldCheck, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroCommunicatorModalProps {
  hero: HeroCharacter;
  onAddStars: (amount: number) => void;
  onBackToMap: () => void;
  onOpenParentSettings: () => void;
}

export const HeroCommunicatorModal: React.FC<HeroCommunicatorModalProps> = ({
  hero,
  onAddStars,
  onBackToMap,
  onOpenParentSettings,
}) => {
  const [lineEn, setLineEn] = useState(HERO_COMM_WELCOME.en);
  const [lineVi, setLineVi] = useState(HERO_COMM_WELCOME.vi);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [micNote, setMicNote] = useState<string | null>(null);
  const [rewardedIds, setRewardedIds] = useState<string[]>([]);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    audioService.preloadVoiceClips(
      [HERO_COMM_WELCOME.en, ...HERO_COMM_MISSIONS.map((m) => m.replyEn)],
      'hero'
    );
    setIsSpeaking(true);
    audioService.speakEnglish(HERO_COMM_WELCOME.en, 1.0, 'kid').finally(() => {
      if (mountedRef.current) setIsSpeaking(false);
    });
    return () => {
      mountedRef.current = false;
      audioService.stopSpeaking();
      childSpeechService.stopListening();
    };
  }, []);

  const speakHeroReply = async (enText: string, viText: string, missionId?: string) => {
    if (!mountedRef.current) return;
    setLineEn(enText);
    setLineVi(viText);
    setIsSpeaking(true);
    await audioService.speakEnglish(enText, 1.0, 'hero');
    if (mountedRef.current) setIsSpeaking(false);

    if (missionId && !rewardedIds.includes(missionId)) {
      setRewardedIds((prev) => [...prev, missionId]);
      onAddStars(1);
      try {
        confetti({ particleCount: 25, spread: 55, origin: { y: 0.5 } });
      } catch {
        // Ignore confetti errors
      }
    }
  };

  const handleSelectMission = async (mission: HeroCommMission) => {
    setMicNote(null);
    audioService.playPopSound(540);
    setIsSpeaking(true);
    await audioService.speakEnglish(mission.promptEn, 1.0, 'kid');
    if (!mountedRef.current) return;
    await speakHeroReply(mission.replyEn, mission.replyVi, mission.id);
  };

  const handleTalkOnWalkie = () => {
    if (isListening) {
      childSpeechService.stopListening();
      setIsListening(false);
      return;
    }
    audioService.stopSpeaking();
    audioService.playPopSound(600);
    setMicNote('Đang thu tín hiệu giọng nói của bé...');
    setIsListening(true);

    childSpeechService.startListening(
      'hello',
      async (res) => {
        if (!mountedRef.current) return;
        setIsListening(false);
        const spoken = (res.transcript || '').trim();
        if (!spoken) {
          setMicNote('Chưa nghe rõ tiếng bé, thử nói lại "Hello" nhé!');
          return;
        }
        setMicNote(`Bé vừa nói: "${spoken}"`);
        const settings = storageService.getSettings();
        if (settings.geminiApiKey) {
          const aiRes = await geminiService.chatWithLeo(spoken, [], 'en');
          await speakHeroReply(aiRes.text, aiRes.vietnameseMeaning || '', `voice_${Date.now()}`);
          return;
        }
        const matched =
          HERO_COMM_MISSIONS.find((m) =>
            spoken.toLowerCase().includes(m.id.split('_')[0])
          ) || HERO_COMM_MISSIONS[0];
        await speakHeroReply(matched.replyEn, matched.replyVi, `voice_${matched.id}`);
      },
      (err) => {
        if (!mountedRef.current) return;
        setIsListening(false);
        setMicNote(err || 'Micro chưa sẵn sàng, bé bấm chọn thẻ bên dưới để nói chuyện nhé!');
      }
    );
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white flex flex-col overflow-hidden">
      {/* Top Radio Channel Header */}
      <div className="shrink-0 px-3 sm:px-6 py-2.5 bg-slate-950/75 border-b border-cyan-400/30 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => {
            audioService.stopSpeaking();
            audioService.playPopSound(440);
            onBackToMap();
          }}
          className="shrink-0 min-h-[42px] px-3 py-1.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-black text-xs sm:text-sm inline-flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Bản Đồ</span>
        </button>

        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <Radio className="w-4 h-4 text-cyan-300 shrink-0" />
          <span className="font-display text-sm sm:text-lg font-bold truncate">
            Bộ Đàm {hero.nameVi}
          </span>
        </div>

        <button
          type="button"
          onClick={onOpenParentSettings}
          title="Cấu hình Gemini AI cho Bộ đàm"
          className="min-h-[42px] px-2.5 py-1.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-cyan-200 font-bold text-xs inline-flex items-center gap-1 cursor-pointer shrink-0"
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="hidden sm:inline">AI Key</span>
        </button>
      </div>

      {/* Main Video-Call Viewport (Zero Scroll) */}
      <div className="flex-1 min-h-0 max-w-4xl w-full mx-auto px-3 sm:px-6 py-2.5 flex flex-col justify-between gap-2.5 overflow-hidden">
        {/* Animated Hero Call Monitor + Speech Subtitle */}
        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 bg-slate-900/80 border-2 border-cyan-400/50 rounded-3xl p-3 sm:p-4 shadow-2xl">
          <div className="relative shrink-0 flex items-center justify-center">
            {isSpeaking && (
              <span className="absolute inset-0 rounded-full border-4 border-cyan-400/70 animate-ping" />
            )}
            <CharacterRigSvg
              template={hero.template}
              primaryColor={hero.primaryColor}
              secondaryColor={hero.secondaryColor}
              accentColor={hero.accentColor}
              pose="idle"
              isSpeaking={isSpeaking}
              customAvatarUrl={hero.customAvatarUrl}
              className="w-24 h-24 sm:w-32 sm:h-32"
            />
          </div>

          <div className="flex-1 min-w-0 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-between gap-2">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40">
                US Native Voice
              </span>
              <button
                type="button"
                onClick={() => audioService.speakEnglish(lineEn, 1.0, 'hero')}
                className="min-h-[34px] px-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/35 border border-cyan-300/50 text-cyan-200 text-xs font-black inline-flex items-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Nghe Lại</span>
              </button>
            </div>
            <p className="font-display text-base sm:text-xl font-bold text-amber-300 mt-1.5 leading-snug">
              “{lineEn}”
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5 line-clamp-2">
              {lineVi}
            </p>
            {micNote && (
              <p className="mt-1 text-[11px] font-bold text-cyan-300 truncate">{micNote}</p>
            )}
          </div>
        </div>

        {/* 6 Interactive Conversation Signal Cards */}
        <div className="flex-1 min-h-0 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {HERO_COMM_MISSIONS.map((m) => {
            const done = rewardedIds.includes(m.id);
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => handleSelectMission(m)}
                className={`rounded-2xl border-2 p-2.5 flex flex-col items-center justify-center text-center gap-1 transition-all cursor-pointer active:scale-95 ${
                  done
                    ? 'bg-emerald-950/60 border-emerald-400/70 text-emerald-100'
                    : 'bg-white/10 hover:bg-white/15 border-cyan-300/40 text-white'
                }`}
              >
                <span className="text-2xl sm:text-3xl leading-none">{m.emoji}</span>
                <span className="font-display text-xs sm:text-sm font-bold leading-tight line-clamp-2">
                  {m.labelVi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Push-to-Talk Radio Button */}
        <button
          type="button"
          onClick={handleTalkOnWalkie}
          className={`shrink-0 w-full min-h-[54px] rounded-2xl font-black text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-xl cursor-pointer active:scale-98 transition-all ${
            isListening
              ? 'bg-rose-500 hover:bg-rose-400 text-white animate-pulse'
              : 'bg-gradient-to-r from-cyan-400 to-amber-400 hover:brightness-105 text-slate-950'
          }`}
        >
          <Mic className="w-5 h-5 shrink-0" />
          <span>{isListening ? 'Đang nghe... Bấm để dừng' : 'Bấm Bộ Đàm Nói Tiếng Anh'}</span>
        </button>
      </div>
    </div>
  );
};
