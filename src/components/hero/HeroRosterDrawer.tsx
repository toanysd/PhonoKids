import React, { useState } from 'react';
import { HeroCharacter, HeroSaveState, RivalCharacter } from '../../types/heroGame';
import { getAllHeroes, getAllRivals, resolveActiveHero, resolveActiveRival } from '../../data/heroRoster';
import { CharacterRigSvg } from './CharacterRigSvg';
import { CustomCharacterStudioModal } from './CustomCharacterStudioModal';
import { audioService } from '../../services/audioService';
import { Plus, Swords, Trash2, Volume2, X, Sparkles } from 'lucide-react';

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
  const [studioOpen, setStudioOpen] = useState(false);
  const [demoAttacking, setDemoAttacking] = useState(false);

  const heroes = getAllHeroes(saveState);
  const rivals = getAllRivals(saveState);
  const activeHero = resolveActiveHero(saveState);
  const activeRival = resolveActiveRival(saveState, activeHero);

  const handleTestAttack = async () => {
    setDemoAttacking(true);
    audioService.playMagicChime();
    await audioService.speakEnglish(activeHero.greetingEn, 1.0);
    await audioService.speakEnglish(activeHero.attackCalloutEn, 1.05);
    setTimeout(() => setDemoAttacking(false), 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-amber-50 rounded-3xl border-4 border-amber-300 shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b-2 border-amber-200 px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl">🦸</span>
            <div>
              <h2 className="font-display text-xl font-bold text-slate-900 leading-tight">
                Thư Viện Nhân Vật & Đối Thủ Của Bé
              </h2>
              <p className="text-xs font-semibold text-amber-800">
                Chọn Hesman (ゴライオン), Anpanman, Spider-Man... hoặc tự thêm nhân vật yêu thích
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setStudioOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-black cursor-pointer shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Thêm Nhân Vật Mới</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 cursor-pointer"
              aria-label="Đóng chọn nhân vật"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body Split: Asymmetric Hero Matchup Preview + Roster Grid */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left: Live Matchup Preview */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-4 border-4 border-amber-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-3">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  ĐỘI HÌNH ĐANG CHỌN
                </span>
                <span className="font-mono bg-white/10 px-2 py-0.5 rounded-full">
                  {saveState.rivalSelectionMode === 'story_match' ? 'Đúng Bộ Truyện' : 'Tự Chọn Đối Thủ'}
                </span>
              </div>

              <div className="relative h-52 rounded-2xl bg-gradient-to-b from-sky-900/60 to-indigo-950/90 border border-white/15 flex items-center justify-around px-3 pt-4 overflow-hidden">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-amber-200/90 bg-white/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                  ✨ Nhân Vật 2D AI • Kéo nghiêng 2.5D
                </span>
                <div className="flex flex-col items-center">
                  <CharacterRigSvg
                    template={activeHero.template}
                    primaryColor={activeHero.primaryColor}
                    secondaryColor={activeHero.secondaryColor}
                    accentColor={activeHero.accentColor}
                    pose={demoAttacking ? 'attack' : 'idle'}
                    isSpeaking={demoAttacking}
                    customAvatarUrl={activeHero.customAvatarUrl}
                    interactiveOrbit
                    className="w-32 h-32"
                  />
                  <span className="text-xs font-bold text-amber-300 mt-1 text-center">{activeHero.nameVi}</span>
                </div>

                <div className="flex flex-col items-center">
                  <Swords className="w-7 h-7 text-rose-400 animate-pulse" />
                  <span className="font-display text-xs font-bold text-white/70 mt-1">VS</span>
                </div>

                <div className="flex flex-col items-center">
                  <CharacterRigSvg
                    template={activeRival.template}
                    primaryColor={activeRival.primaryColor}
                    secondaryColor={activeRival.secondaryColor}
                    accentColor={activeRival.accentColor}
                    pose={demoAttacking ? 'hit' : 'idle'}
                    facing="left"
                    customAvatarUrl={activeRival.customAvatarUrl}
                    interactiveOrbit
                    className="w-28 h-28"
                  />
                  <span className="text-xs font-bold text-rose-300 mt-1 text-center">{activeRival.nameVi}</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-200 leading-relaxed bg-white/5 p-3 rounded-2xl border border-white/10">
                {activeHero.taglineVi}
              </p>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={handleTestAttack}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <Volume2 className="w-4 h-4" />
                <span>Thử Tuyệt Kỹ & Giọng Nói</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm cursor-pointer active:scale-95"
              >
                Xong ✓
              </button>
            </div>
          </div>

          {/* Right: Hero Selection & Rival Selection */}
          <div className="lg:col-span-7 space-y-4">
            <section>
              <h3 className="font-display text-sm font-bold text-slate-900 mb-2">
                1. Chọn Nhân Vật Chính Của Bé
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {heroes.map((h) => {
                  const isSelected = activeHero.id === h.id;
                  return (
                    <div
                      key={h.id}
                      onClick={() => {
                        audioService.playPopSound(560);
                        onSelectHero(h.id);
                      }}
                      className={`relative p-2.5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                        isSelected
                          ? 'bg-amber-100 border-amber-500 shadow-md scale-[1.02]'
                          : 'bg-white border-amber-200 hover:border-amber-400'
                      }`}
                    >
                      {h.isCustom && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveCustom('hero', h.id);
                          }}
                          className="absolute top-1.5 right-1.5 p-1 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-200"
                          title="Xóa nhân vật tự tạo"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                      <CharacterRigSvg
                        template={h.template}
                        primaryColor={h.primaryColor}
                        secondaryColor={h.secondaryColor}
                        accentColor={h.accentColor}
                        customAvatarUrl={h.customAvatarUrl}
                        live={false}
                        className="w-20 h-20"
                      />
                      <span className="font-display font-bold text-xs text-slate-900 mt-1 line-clamp-1">
                        {h.nameVi}
                      </span>
                      {h.japaneseTitle && (
                        <span className="text-[10px] font-bold text-amber-700">{h.japaneseTitle}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-display text-sm font-bold text-slate-900">
                  2. Chọn Đối Thủ Trên Sân Khấu
                </h3>
                <div className="flex bg-white rounded-xl border border-amber-300 p-0.5 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => onSelectRivalMode('story_match')}
                    className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                      saveState.rivalSelectionMode === 'story_match'
                        ? 'bg-amber-400 text-slate-950'
                        : 'text-slate-600'
                    }`}
                  >
                    Theo Bộ Truyện
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectRivalMode('manual', activeRival.id)}
                    className={`px-2.5 py-1 rounded-lg cursor-pointer ${
                      saveState.rivalSelectionMode === 'manual'
                        ? 'bg-purple-600 text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    Tự Chọn Tự Do
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {rivals.map((r) => {
                  const isChosen = activeRival.id === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => {
                        audioService.playPopSound(480);
                        onSelectRivalMode('manual', r.id);
                      }}
                      className={`relative p-2 rounded-2xl border-2 cursor-pointer transition-all flex flex-col items-center text-center ${
                        isChosen
                          ? 'bg-purple-100 border-purple-500 shadow-sm'
                          : 'bg-white border-slate-200 hover:border-purple-300'
                      }`}
                    >
                      {r.isCustom && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveCustom('rival', r.id);
                          }}
                          className="absolute top-1 right-1 p-1 rounded-full bg-rose-100 text-rose-600"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                      <CharacterRigSvg
                        template={r.template}
                        primaryColor={r.primaryColor}
                        secondaryColor={r.secondaryColor}
                        accentColor={r.accentColor}
                        facing="left"
                        customAvatarUrl={r.customAvatarUrl}
                        live={false}
                        className="w-16 h-16"
                      />
                      <span className="font-bold text-[11px] text-slate-900 mt-1 line-clamp-1">{r.nameVi}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
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
