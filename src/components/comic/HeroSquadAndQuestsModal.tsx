import React, { useEffect, useState } from 'react';
import { COMIC_HEROES, DAILY_QUESTS, getHeroById } from '../../data/comicGameData';
import { audioService } from '../../services/audioService';
import { getQuestProgressCount } from '../../services/comicStorage';
import { ComicSaveState, HeroId, SpritePose } from '../../types/comicGame';
import { CheckIcon, ComicActionButton, GemIcon, SpeakerIcon, StarIcon } from './ComicUiPrimitives';

function CloseSvg() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="#0F172A" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function useEscapeClose(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
}

export interface HeroSquadModalProps {
  selectedHeroId: HeroId;
  onSelectHero: (heroId: HeroId) => void;
  onClose: () => void;
}

const POSES: { id: SpritePose; label: string }[] = [
  { id: 'idle', label: 'IDLE' },
  { id: 'speaking', label: 'SPEAK' },
  { id: 'attack', label: 'ATTACK' },
  { id: 'hit', label: 'HIT' },
  { id: 'victory', label: 'WIN' },
];

export const HeroSquadModal: React.FC<HeroSquadModalProps> = ({ selectedHeroId, onSelectHero, onClose }) => {
  const [previewId, setPreviewId] = useState<HeroId>(selectedHeroId);
  const [pose, setPose] = useState<SpritePose>('idle');
  useEscapeClose(onClose);
  const hero = getHeroById(previewId);

  return (
    <div role="dialog" aria-modal="true" aria-label="Hero Squad" data-testid="hero-squad-modal" className="fixed inset-0 z-50 bg-[#0F172A]/80 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4" onClick={onClose}>
      <div className="w-full max-w-md max-h-[92dvh] overflow-y-auto bg-[#FFFDF5] rounded-3xl border-[4px] border-[#0F172A] shadow-[6px_8px_0_#0F172A] p-3.5 sm:p-4 flex flex-col gap-2.5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <h2 className="font-display font-black text-lg sm:text-xl text-[#0F172A] truncate">{hero.nameEn}</h2>
            <span data-testid="hero-jp-badge" className="shrink-0 px-2 py-0.5 rounded-full bg-[#FACC15] border-[2.5px] border-[#0F172A] font-display font-black text-xs text-[#0F172A]">{hero.jpTitle}</span>
          </div>
          <button type="button" data-testid="btn-close-squad" onClick={onClose} aria-label="Close Hero Squad" className="w-9 h-9 rounded-xl bg-[#FFE4E6] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] flex items-center justify-center cursor-pointer shrink-0">
            <CloseSvg />
          </button>
        </div>

        <div className="relative h-44 sm:h-52 rounded-2xl border-[3.5px] border-[#0F172A] overflow-hidden flex items-center justify-center bg-[#0F172A]">
          <img src={hero.arenaScene} alt={hero.nameEn} className="absolute inset-0 w-full h-full object-cover opacity-55 pointer-events-none" draggable={false} />
          <img data-testid="squad-preview-sprite" data-pose={pose} src={hero.sprites[pose]} alt={`${hero.nameEn} ${pose}`} className="relative z-10 max-h-[90%] max-w-[90%] object-contain drop-shadow-[0_6px_0_rgba(15,23,42,0.5)]" draggable={false} />
          <button type="button" data-testid="btn-squad-voice" onClick={() => audioService.speakEnglish(hero.greetingEn, 0.95, 'hero')} aria-label="Hear hero voice" className="absolute top-2.5 right-2.5 z-20 w-9 h-9 rounded-full bg-[#22D3EE] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] flex items-center justify-center cursor-pointer">
            <SpeakerIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-5 gap-1">
          {POSES.map((p) => (
            <button key={p.id} type="button" data-testid={`pose-btn-${p.id}`} onClick={() => { audioService.playPopSound(520); setPose(p.id); }} className={`py-1.5 rounded-xl border-[2.5px] border-[#0F172A] font-display font-black text-[10px] sm:text-xs cursor-pointer ${pose === p.id ? 'bg-[#FACC15] shadow-[2px_2px_0_#0F172A]' : 'bg-white'}`}>
              {p.label}
            </button>
          ))}
        </div>

        <p className="rounded-xl bg-[#E0F2FE] border-[2.5px] border-[#0F172A] px-2.5 py-1.5 font-sans font-bold text-xs text-[#0F172A]">{hero.taglineVi}</p>

        <div className="grid grid-cols-4 gap-1.5">
          {COMIC_HEROES.map((h) => {
            const isPreview = h.id === previewId;
            return (
              <button key={h.id} type="button" data-testid={`squad-hero-${h.id}`} onClick={() => { audioService.playPopSound(560); setPreviewId(h.id); setPose('idle'); audioService.speakEnglish(h.greetingEn, 0.95, 'hero'); }} className={`rounded-2xl border-[3px] border-[#0F172A] p-1 flex flex-col items-center cursor-pointer ${isPreview ? 'bg-[#FEF08A] shadow-[3px_3px_0_#0F172A]' : 'bg-white'}`}>
                <img src={h.sprites.idle} alt={h.nameEn} className="w-12 h-12 object-contain" draggable={false} />
                <span className="font-display font-black text-[10px] text-[#0F172A] truncate w-full text-center">{h.id === 'hesman' ? 'Hesman' : h.nameEn.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        <ComicActionButton data-testid="btn-confirm-hero" variant="lime" size="md" onClick={() => { onSelectHero(previewId); onClose(); }}>
          <CheckIcon className="w-4 h-4" />
          <span>{previewId === selectedHeroId ? 'KEEP HERO' : `SELECT ${hero.id === 'hesman' ? 'HESMAN' : hero.nameEn.toUpperCase()}`}</span>
        </ComicActionButton>
      </div>
    </div>
  );
};

export interface DailyQuestsModalProps {
  save: ComicSaveState;
  onClaimQuest: (questId: string) => void;
  onClose: () => void;
}

export const DailyQuestsModal: React.FC<DailyQuestsModalProps> = ({ save, onClaimQuest, onClose }) => {
  useEscapeClose(onClose);
  return (
    <div role="dialog" aria-modal="true" aria-label="Daily Quests" data-testid="daily-quests-modal" className="fixed inset-0 z-50 bg-[#0F172A]/80 backdrop-blur-xs flex items-center justify-center p-3" onClick={onClose}>
      <div className="w-full max-w-md bg-[#FFFDF5] rounded-3xl border-[4px] border-[#0F172A] shadow-[6px_8px_0_#0F172A] p-4 space-y-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="font-display font-black text-xl text-[#0F172A]">DAILY QUESTS</h2>
          <button type="button" onClick={onClose} aria-label="Close Daily Quests" className="w-9 h-9 rounded-xl bg-[#FFE4E6] border-[3px] border-[#0F172A] flex items-center justify-center cursor-pointer"><CloseSvg /></button>
        </div>
        <div className="space-y-2.5">
          {DAILY_QUESTS.map((q) => {
            const count = getQuestProgressCount(q, save);
            const pct = Math.min(100, Math.round((count / q.targetCount) * 100));
            const claimed = save.dailyProgress.claimedQuestIds.includes(q.id);
            const ready = count >= q.targetCount && !claimed;
            return (
              <div key={q.id} data-testid={`quest-card-${q.id}`} className={`rounded-2xl border-[3px] border-[#0F172A] p-3 space-y-2 ${claimed ? 'bg-[#ECFCCB]' : 'bg-white'}`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-display font-black text-sm text-[#0F172A]">{q.titleEn}</div>
                    <div className="font-sans font-bold text-xs text-slate-600">{q.titleVi}</div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 font-mono font-black text-xs">
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-lg bg-[#FEF08A] border-[2px] border-[#0F172A]"><StarIcon className="w-3 h-3" />+{q.rewardStars}</span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-lg bg-[#CFFAFE] border-[2px] border-[#0F172A]"><GemIcon className="w-3 h-3" />+{q.rewardGems}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 rounded-full bg-slate-200 border-[2px] border-[#0F172A] overflow-hidden">
                    <div className="h-full bg-[#22D3EE] transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="font-mono font-black text-xs text-[#0F172A] tabular-nums">{Math.min(count, q.targetCount)}/{q.targetCount}</span>
                  <ComicActionButton data-testid={`btn-claim-${q.id}`} size="xs" variant={claimed ? 'lime' : ready ? 'yellow' : 'white'} disabled={!ready} onClick={() => { audioService.playSuccessJingle(); onClaimQuest(q.id); }}>
                    {claimed ? 'CLAIMED' : ready ? 'CLAIM' : 'GO'}
                  </ComicActionButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export interface VietnameseGuideModalProps {
  save: ComicSaveState;
  onUpdateSave: (patch: Partial<ComicSaveState>) => void;
  onResetAll: () => void;
  onClose: () => void;
}

export const VietnameseGuideModal: React.FC<VietnameseGuideModalProps> = ({ save, onUpdateSave, onResetAll, onClose }) => {
  const [tab, setTab] = useState<'guide' | 'parent'>('guide');
  const [pin, setPin] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  useEscapeClose(onClose);
  const clearedCount = Object.values(save.stageStars).filter((s) => s > 0).length;

  return (
    <div role="dialog" aria-modal="true" aria-label="Hướng dẫn & Cài đặt Phụ huynh" data-testid="vietnamese-guide-modal" className="fixed inset-0 z-50 bg-[#0F172A]/80 backdrop-blur-xs flex items-center justify-center p-3" onClick={onClose}>
      <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto bg-[#FFFDF5] rounded-3xl border-[4px] border-[#0F172A] shadow-[6px_8px_0_#0F172A] p-4 space-y-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <ComicActionButton size="xs" variant={tab === 'guide' ? 'yellow' : 'white'} onClick={() => setTab('guide')}>Hướng Dẫn</ComicActionButton>
            <ComicActionButton size="xs" variant={tab === 'parent' ? 'cyan' : 'white'} onClick={() => setTab('parent')}>Phụ Huynh</ComicActionButton>
          </div>
          <button type="button" onClick={onClose} aria-label="Đóng hướng dẫn" className="w-9 h-9 rounded-xl bg-[#FFE4E6] border-[3px] border-[#0F172A] flex items-center justify-center cursor-pointer"><CloseSvg /></button>
        </div>

        {tab === 'guide' ? (
          <div className="space-y-2.5 text-xs font-bold text-[#0F172A]">
            <div className="rounded-2xl bg-[#E0F2FE] border-[3px] border-[#0F172A] p-3 space-y-1">
              <div className="font-display font-black text-sm">Mẹo Nói Micro &amp; Luyện Âm</div>
              <p>1. Bấm nút Micro màu vàng và đọc to, rõ từ tiếng Anh.</p>
              <p>2. Nếu mất mạng hoặc không có STT, chế độ Voice Wave tự động chấm điểm theo sóng âm giọng nói của bé.</p>
              <p>3. Nếu chơi ở nơi yên tĩnh, dùng nút Power Assist để bé vẫn chơi mượt mà.</p>
            </div>
            <div className="rounded-2xl bg-[#FEF08A] border-[3px] border-[#0F172A] p-3 space-y-1">
              <div className="font-display font-black text-sm">8 Cổng Phiêu Lưu Siêu Nhân</div>
              <p>Story Map: Mở sẵn toàn bộ 6 thế giới &amp; 30 chặng.</p>
              <p>Sound Lab: Khẩu hình cắt dọc Sayshape + MOUTH CAM 24 âm vị.</p>
              <p>Reading Room &amp; Star Zone: Đọc truyện cấp aa-C và trang trí khoang tàu vũ trụ.</p>
            </div>
            <ComicActionButton variant={save.toddlerFriendly ? 'lime' : 'white'} size="sm" className="w-full" onClick={() => onUpdateSave({ toddlerFriendly: !save.toddlerFriendly })}>
              {save.toddlerFriendly ? 'Chế độ Bé 3+ tuổi (Khích lệ): BẬT' : 'Chế độ Chấm Chuẩn: BẬT'}
            </ComicActionButton>
          </div>
        ) : !unlocked ? (
          <div className="space-y-2.5">
            <p className="text-xs font-bold text-[#0F172A]">Nhập mã PIN phụ huynh (mặc định: <span className="font-mono font-black">1234</span>):</p>
            <input data-testid="parent-pin-input" type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="1234" className="w-full h-11 px-3 rounded-2xl border-[3px] border-[#0F172A] bg-white font-mono text-base font-black text-center text-[#0F172A]" />
            <ComicActionButton data-testid="btn-unlock-parent" variant="yellow" size="md" className="w-full" onClick={() => { if (pin.trim() === save.parentPin) setUnlocked(true); }}>Mở Khóa Cài Đặt</ComicActionButton>
          </div>
        ) : (
          <div className="space-y-2.5 text-xs font-bold text-[#0F172A]">
            <div className="rounded-2xl bg-[#E0F2FE] border-[3px] border-[#0F172A] p-2.5">
              Tiến độ: <span className="font-mono font-black">{clearedCount}/30</span> chặng | <span className="font-mono font-black">{save.stars}</span> sao | <span className="font-mono font-black">{save.gems}</span> ngọc
            </div>
            <div className="rounded-2xl bg-[#FEF08A] border-[3px] border-[#0F172A] p-2.5 space-y-1.5">
              <div className="flex items-center justify-between"><span>Nhắc nghỉ mắt sau:</span><span className="font-mono font-black">{save.sessionMinutes} phút</span></div>
              <div className="grid grid-cols-3 gap-1.5">
                {[5, 10, 15].map((mins) => (
                  <button key={mins} type="button" onClick={() => onUpdateSave({ sessionMinutes: mins })} className={`py-1.5 rounded-xl border-[2.5px] border-[#0F172A] font-mono font-black cursor-pointer ${save.sessionMinutes === mins ? 'bg-[#A3E635]' : 'bg-white'}`}>{mins}p</button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <ComicActionButton size="sm" variant={save.reducedMotion ? 'lime' : 'white'} className="flex-1" onClick={() => onUpdateSave({ reducedMotion: !save.reducedMotion })}>
                {save.reducedMotion ? 'Giảm chuyển động: BẬT' : 'Hiệu ứng đầy đủ'}
              </ComicActionButton>
              <ComicActionButton data-testid="btn-reset-progress" size="sm" variant="crimson" onClick={() => { onResetAll(); onClose(); }}>
                Đặt Lại Tiến Độ
              </ComicActionButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
