import React, { useEffect, useRef, useState } from 'react';
import { HeroCharacter, HeroSaveState, RivalCharacter } from '../../types/heroGame';
import {
  getAllHeroes,
  getAllRivals,
  resolveActiveHero,
  resolveActiveRival,
} from '../../data/heroRoster';
import { CharacterRigSvg } from './CharacterRigSvg';
import { CustomCharacterStudioModal } from './CustomCharacterStudioModal';
import { audioService } from '../../services/audioService';
import { Check, ChevronLeft, ChevronRight, Plus, Trash2, Volume2, X } from 'lucide-react';

interface HeroRosterDrawerProps {
  saveState: HeroSaveState;
  onUpdateSave: (next: HeroSaveState) => void;
  onSelectHero: (heroId: string) => void;
  onSelectRivalMode: (mode: 'story_match' | 'manual', rivalId?: string) => void;
  onAddCustomHero: (hero: HeroCharacter) => void;
  onAddCustomRival: (rival: RivalCharacter) => void;
  onRemoveCustom: (kind: 'hero' | 'rival', id: string) => void;
  onClose: () => void;
}

export const HeroRosterDrawer: React.FC<HeroRosterDrawerProps> = ({
  saveState,
  onUpdateSave,
  onSelectHero,
  onSelectRivalMode,
  onAddCustomHero,
  onAddCustomRival,
  onRemoveCustom,
  onClose,
}) => {
  const heroes = getAllHeroes(saveState);
  const rivals = getAllRivals(saveState);
  const activeHero = resolveActiveHero(saveState);
  const activeRival = resolveActiveRival(saveState, activeHero);

  const [tab, setTab] = useState<'hero' | 'rival'>('hero');
  const [heroIdx, setHeroIdx] = useState<number>(() =>
    Math.max(0, heroes.findIndex((h) => h.id === activeHero.id))
  );
  const [rivalIdx, setRivalIdx] = useState<number>(() =>
    Math.max(0, rivals.findIndex((r) => r.id === activeRival.id))
  );
  const [studioOpen, setStudioOpen] = useState(false);
  const [demoSpeaking, setDemoSpeaking] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (studioOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, studioOpen]);

  const list = tab === 'hero' ? heroes : rivals;
  const rawIdx = tab === 'hero' ? heroIdx : rivalIdx;
  const safeIdx = Math.min(rawIdx, Math.max(0, list.length - 1));
  const spotlightHero = heroes[Math.min(heroIdx, Math.max(0, heroes.length - 1))] || activeHero;
  const spotlightRival = rivals[Math.min(rivalIdx, Math.max(0, rivals.length - 1))] || activeRival;
  const currentItem = tab === 'hero' ? spotlightHero : spotlightRival;

  const isCurrentlyEquipped =
    tab === 'hero' ? activeHero.id === spotlightHero.id : activeRival.id === spotlightRival.id;

  const stepItem = (delta: number) => {
    audioService.playPopSound(delta > 0 ? 540 : 460);
    if (tab === 'hero') {
      setHeroIdx((prev) => (prev + delta + heroes.length) % heroes.length);
    } else {
      setRivalIdx((prev) => (prev + delta + rivals.length) % rivals.length);
    }
  };

  const handleTestVoice = async () => {
    setDemoSpeaking(true);
    audioService.playMagicChime();
    if (tab === 'hero') {
      await audioService.speakEnglish(spotlightHero.greetingEn, 1.0);
    } else {
      await audioService.speakEnglish(spotlightRival.tauntEn, 0.95);
    }
    setTimeout(() => setDemoSpeaking(false), 700);
  };

  const handleConfirmChoice = () => {
    audioService.playPopSound(580);
    if (tab === 'hero') {
      onSelectHero(spotlightHero.id);
    } else {
      onSelectRivalMode('manual', spotlightRival.id);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Chọn nhân vật và đối thủ"
    >
      <div className="bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-2xl max-w-3xl w-full h-[94dvh] max-h-[760px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b-2 border-amber-200 px-3.5 sm:px-5 py-2.5 flex items-center justify-between gap-2 shrink-0">
          <h2 className="font-display text-lg sm:text-xl font-bold text-slate-950 truncate">
            🦸 Đội Hình Của Bé
          </h2>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setStudioOpen(true)}
              className="min-h-[44px] flex items-center gap-1 px-3 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-black cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Tạo Mới</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng chọn nhân vật"
              className="min-w-[44px] min-h-[44px] rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2 Giant Segmented Tabs */}
        <div className="px-3 sm:px-4 pt-2.5 shrink-0 flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2 bg-white p-1 rounded-2xl border-2 border-amber-200">
            <button
              type="button"
              onClick={() => {
                audioService.playPopSound(520);
                setTab('hero');
              }}
              className={`min-h-[44px] rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
                tab === 'hero' ? 'bg-amber-400 text-slate-950 shadow-sm' : 'text-slate-600'
              }`}
            >
              🦸 Anh Hùng ({heroes.length})
            </button>
            <button
              type="button"
              onClick={() => {
                audioService.playPopSound(500);
                setTab('rival');
              }}
              className={`min-h-[44px] rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all ${
                tab === 'rival' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-600'
              }`}
            >
              👾 Đối Thủ ({rivals.length})
            </button>
          </div>

          {tab === 'rival' && (
            <div className="grid grid-cols-2 gap-2 bg-white/90 p-1 rounded-xl border border-purple-200 text-xs font-black">
              <button
                type="button"
                onClick={() => onSelectRivalMode('story_match')}
                className={`min-h-[38px] rounded-lg cursor-pointer ${
                  saveState.rivalSelectionMode === 'story_match'
                    ? 'bg-amber-400 text-slate-950'
                    : 'text-slate-600'
                }`}
              >
                Theo Bộ Truyện
              </button>
              <button
                type="button"
                onClick={() => onSelectRivalMode('manual', spotlightRival.id)}
                className={`min-h-[38px] rounded-lg cursor-pointer ${
                  saveState.rivalSelectionMode === 'manual'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-600'
                }`}
              >
                Tự Chọn Tự Do
              </button>
            </div>
          )}
        </div>

        {/* Center 1-Character-Per-Screen Spotlight Stage */}
        <div
          onTouchStart={(e) => {
            touchStartXRef.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartXRef.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartXRef.current;
            touchStartXRef.current = null;
            if (Math.abs(dx) > 40) {
              stepItem(dx < 0 ? 1 : -1);
            }
          }}
          className="flex-1 min-h-0 px-3 sm:px-4 py-2 flex flex-col gap-2 overflow-hidden"
        >
          <div className="relative flex-1 min-h-0 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-3 border-amber-300 text-white px-2.5 sm:px-5 py-3 flex items-center justify-between gap-2 overflow-hidden">
            <div className="absolute top-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="font-mono text-xs font-bold bg-white/15 px-2.5 py-0.5 rounded-full">
                {safeIdx + 1} / {list.length}
              </span>
              <div className="flex items-center gap-1.5 pointer-events-auto">
                {isCurrentlyEquipped && (
                  <span className="text-[11px] font-black bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full">
                    ✓ Đang Chọn
                  </span>
                )}
                {currentItem.isCustom && (
                  <button
                    type="button"
                    onClick={() => {
                      onRemoveCustom(tab, currentItem.id);
                      if (tab === 'hero') setHeroIdx(0);
                      else setRivalIdx(0);
                    }}
                    className="p-1.5 rounded-full bg-rose-500/80 hover:bg-rose-500 text-white cursor-pointer"
                    title="Xóa nhân vật tự tạo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => stepItem(-1)}
              aria-label="Nhân vật trước"
              className="shrink-0 min-w-[48px] min-h-[48px] rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center cursor-pointer active:scale-90 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 min-w-0 flex flex-col items-center justify-center text-center">
              <CharacterRigSvg
                template={currentItem.template}
                primaryColor={currentItem.primaryColor}
                secondaryColor={currentItem.secondaryColor}
                accentColor={currentItem.accentColor}
                pose={demoSpeaking ? 'attack' : 'idle'}
                isSpeaking={demoSpeaking}
                facing={tab === 'rival' ? 'left' : 'right'}
                customAvatarUrl={currentItem.customAvatarUrl}
                interactiveOrbit
                className="w-36 h-36 sm:w-48 sm:h-48"
              />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-amber-300 mt-1 truncate max-w-full">
                {currentItem.nameVi}
              </h3>
              {tab === 'hero' && spotlightHero.japaneseTitle && (
                <span className="text-xs font-extrabold text-sky-200 bg-white/10 px-2.5 py-0.5 rounded-full mt-0.5">
                  {spotlightHero.japaneseTitle}
                </span>
              )}
              {tab === 'rival' && (
                <span className="text-xs font-bold text-rose-200 bg-white/10 px-2.5 py-0.5 rounded-full mt-0.5">
                  &ldquo;{spotlightRival.tauntEn}&rdquo;
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => stepItem(1)}
              aria-label="Nhân vật tiếp theo"
              className="shrink-0 min-w-[48px] min-h-[48px] rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center cursor-pointer active:scale-90 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Horizontal Quick-Jump Thumbnail Strip */}
          <div className="shrink-0 overflow-x-auto py-0.5">
            <div className="w-max mx-auto flex items-center gap-1.5 px-1">
              {list.map((item, idx) => {
              const selected = idx === safeIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    audioService.playPopSound(520);
                    if (tab === 'hero') setHeroIdx(idx);
                    else setRivalIdx(idx);
                  }}
                  aria-label={item.nameVi}
                  className={`w-12 h-12 rounded-2xl border-2 p-1 shrink-0 flex items-center justify-center cursor-pointer transition-all ${
                    selected
                      ? 'bg-amber-200 border-amber-500 scale-105 shadow'
                      : 'bg-white border-amber-200 opacity-80 hover:opacity-100'
                  }`}
                >
                  <CharacterRigSvg
                    template={item.template}
                    primaryColor={item.primaryColor}
                    secondaryColor={item.secondaryColor}
                    accentColor={item.accentColor}
                    facing={tab === 'rival' ? 'left' : 'right'}
                    customAvatarUrl={item.customAvatarUrl}
                    live={false}
                    className="w-9 h-9"
                  />
                </button>
              );
            })}
            </div>
          </div>
        </div>

        {/* Sticky Bottom Action Bar */}
        <div className="shrink-0 px-3 sm:px-4 pb-3 pt-1 flex gap-2 bg-amber-50">
          <button
            type="button"
            onClick={handleTestVoice}
            className="min-h-[50px] px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe Giọng</span>
          </button>
          <button
            type="button"
            onClick={handleConfirmChoice}
            className="flex-1 min-h-[50px] px-4 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base inline-flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-md"
          >
            <Check className="w-5 h-5" />
            <span>Chọn {currentItem.nameVi}</span>
          </button>
        </div>
      </div>

      {studioOpen && (
        <CustomCharacterStudioModal
          initialBlur={saveState.studioPrivacyBlur}
          onToggleBlurPref={(blur) => onUpdateSave({ ...saveState, studioPrivacyBlur: blur })}
          onSaveHero={onAddCustomHero}
          onSaveRival={onAddCustomRival}
          onClose={() => setStudioOpen(false)}
        />
      )}
    </div>
  );
};
