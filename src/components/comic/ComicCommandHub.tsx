import React, { useState } from 'react';
import { COMIC_HEROES } from '../../data/comicGameData';
import { audioService } from '../../services/audioService';
import { ComicHero, HeroId, PortalId } from '../../types/comicGame';
import { SpeakerIcon } from './ComicUiPrimitives';

export interface ComicCommandHubProps {
  activeHero: ComicHero;
  selectedHeroId: HeroId;
  claimableQuestCount?: number;
  onSelectHero: (heroId: HeroId) => void;
  onNavigate: (portal: PortalId) => void;
}

interface PortalDef {
  id: PortalId;
  label: string;
  bgClass: string;
  badgeBg: string;
}

const LEFT_PORTALS: PortalDef[] = [
  { id: 'story_map', label: 'Story Map', bgClass: 'bg-[#FEF08A] hover:bg-[#FDE047]', badgeBg: 'bg-[#F97316]' },
  { id: 'sound_lab', label: 'Sound Lab', bgClass: 'bg-[#CFFAFE] hover:bg-[#A5F3FC]', badgeBg: 'bg-[#06B6D4]' },
  { id: 'battle_arena', label: 'Battle Arena', bgClass: 'bg-[#FFE4E6] hover:bg-[#FECDD3]', badgeBg: 'bg-[#EF4444]' },
  { id: 'mini_games', label: 'Mini Games', bgClass: 'bg-[#ECFCCB] hover:bg-[#D9F99D]', badgeBg: 'bg-[#84CC16]' },
];

const RIGHT_PORTALS: PortalDef[] = [
  { id: 'reading_planet', label: 'Reading Room', bgClass: 'bg-[#E0E7FF] hover:bg-[#C7D2FE]', badgeBg: 'bg-[#6366F1]' },
  { id: 'hero_squad', label: 'Hero Squad', bgClass: 'bg-[#FFEDD5] hover:bg-[#FED7AA]', badgeBg: 'bg-[#F59E0B]' },
  { id: 'star_zone', label: 'Star Zone', bgClass: 'bg-[#FAE8FF] hover:bg-[#F5D0FE]', badgeBg: 'bg-[#A855F7]' },
  { id: 'daily_quest', label: 'Daily Quest', bgClass: 'bg-[#DCFCE7] hover:bg-[#BBF7D0]', badgeBg: 'bg-[#10B981]' },
];

function PortalArtIcon({ id }: { id: PortalId }) {
  switch (id) {
    case 'story_map':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M4 8l8-3 8 3 8-3v19l-8 3-8-3-8 3V8z" fill="#FEF9C3" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M12 5v19M20 8v19" stroke="#0F172A" strokeWidth="2" />
          <circle cx="16" cy="14" r="3" fill="#EF4444" stroke="#0F172A" strokeWidth="2" />
        </svg>
      );
    case 'sound_lab':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M6 16c3-6 17-6 20 0-3 6-17 6-20 0z" fill="#FFF" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M11 16c2.5 2.5 7.5 2.5 10 0" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 9c2.5 2 2.5 12 0 14" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'battle_arena':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M7 25L23 7l2 2-16 16H7z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M25 25L9 7 7 9l16 16h2z" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M16 4l2.2 4.5 4.8.7-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8L9 9.2l4.8-.7L16 4z" fill="#FFF" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'mini_games':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <rect x="4" y="10" width="24" height="14" rx="7" fill="#FFF" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M10 14v6M7 17h6" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="21" cy="15.5" r="1.8" fill="#EF4444" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="24" cy="18.5" r="1.8" fill="#3B82F6" stroke="#0F172A" strokeWidth="1.5" />
        </svg>
      );
    case 'reading_planet':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M4 7h10a2 2 0 012 2v17s-3-2-12-2V7z" fill="#FFF" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M28 7H18a2 2 0 00-2 2v17s3-2 12-2V7z" fill="#FEF08A" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M7 12h5M7 16h5M20 12h5" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'hero_squad':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M16 4l10 4v7c0 6.5-4.3 10.7-10 13-5.7-2.3-10-6.5-10-13V8l10-4z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M16 10v11M11 15h10" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'star_zone':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M16 4c4.5 3.5 6.5 8.5 6.5 14l-6.5 3-6.5-3C9.5 12.5 11.5 7.5 16 4z" fill="#FFF" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="16" cy="13" r="2.8" fill="#22D3EE" stroke="#0F172A" strokeWidth="2" />
          <path d="M9.5 16l-4 4 4 1M22.5 16l4 4-4 1M14 22l2 6 2-6" fill="#F97316" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );
    case 'daily_quest':
    default:
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="20" height="21" rx="4" fill="#FFF" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M11 4h10v4H11z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M10.5 15l3 3 7.5-7" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 22h10" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
  }
}

export const ComicCommandHub: React.FC<ComicCommandHubProps> = ({
  activeHero,
  selectedHeroId,
  claimableQuestCount = 0,
  onSelectHero,
  onNavigate,
}) => {
  const [speechLine, setSpeechLine] = useState<string>(activeHero.greetingEn);

  const handleHeroTap = (hero: ComicHero) => {
    audioService.playPopSound(560);
    onSelectHero(hero.id);
    setSpeechLine(hero.greetingEn);
    audioService.speakEnglish(hero.greetingEn, 0.95, 'hero');
  };

  const renderPortalButton = (portal: PortalDef, align: 'left' | 'right') => {
    const showQuestDot = portal.id === 'daily_quest' && claimableQuestCount > 0;
    return (
      <button
        key={portal.id}
        type="button"
        data-testid={`portal-${portal.id}`}
        onClick={() => {
          audioService.playPopSound(540);
          onNavigate(portal.id);
        }}
        className={`group relative w-full flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2 rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] active:translate-x-[2px] active:translate-y-[3px] active:shadow-[1px_2px_0_#0F172A] transition-transform duration-100 cursor-pointer ${portal.bgClass} ${
          align === 'right' ? 'flex-row-reverse text-right' : 'text-left'
        }`}
      >
        <span
          className={`shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl border-[2.8px] border-[#0F172A] flex items-center justify-center shadow-[2px_2px_0_#0F172A] ${portal.badgeBg}`}
        >
          <PortalArtIcon id={portal.id} />
        </span>
        <span className="flex-1 min-w-0 font-display font-black text-xs sm:text-sm md:text-base text-[#0F172A] leading-tight truncate">
          {portal.label}
        </span>
        {showQuestDot && (
          <span className="absolute -top-2 -right-1.5 px-1.5 py-0.5 rounded-full bg-[#EF4444] text-white border-[2px] border-[#0F172A] font-mono font-black text-[10px] leading-none animate-bounce">
            {claimableQuestCount}
          </span>
        )}
      </button>
    );
  };

  return (
    <section
      data-testid="comic-command-hub"
      className="relative flex-1 min-h-0 h-full w-full overflow-hidden flex flex-col justify-between"
    >
      <img
        src="/assets/comic/scenes/hub_space_city.webp"
        alt="Comic Space City Command Plaza"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/25 via-transparent to-[#0F172A]/80 pointer-events-none"
      />

      {/* Top Greeting Speech Strip */}
      <div className="relative z-10 shrink-0 px-2.5 pt-1 sm:px-6 sm:pt-2 flex flex-col items-center">
        <div className="w-full max-w-2xl flex items-center justify-between gap-2 bg-white/95 rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] px-3 py-1.5">
          <div className="min-w-0 flex items-center gap-2">
            <span className="shrink-0 px-2 py-0.5 rounded-lg bg-[#FACC15] border-[2px] border-[#0F172A] font-display font-black text-[11px] sm:text-xs text-[#0F172A]">
              {activeHero.nameEn}
            </span>
            <p className="truncate font-display font-extrabold text-xs sm:text-sm text-[#0F172A]">
              {speechLine}
            </p>
          </div>
          <button
            type="button"
            data-testid="btn-hub-hero-voice"
            onClick={() => audioService.speakEnglish(activeHero.greetingEn, 0.95, 'hero')}
            aria-label="Hear hero greeting"
            className="shrink-0 w-8 h-8 rounded-xl bg-[#22D3EE] border-[2.5px] border-[#0F172A] shadow-[2px_2px_0_#0F172A] active:translate-y-[1px] flex items-center justify-center cursor-pointer"
          >
            <SpeakerIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Middle Zone: 4 Left + 4 Right Unique Portals */}
      <div className="relative z-10 flex-1 min-h-0 px-2.5 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-6xl flex items-center justify-between gap-2.5 sm:gap-8">
          <div className="w-[48%] sm:w-[235px] md:w-[265px] flex flex-col gap-2 sm:gap-2.5">
            {LEFT_PORTALS.map((p) => renderPortalButton(p, 'left'))}
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-center px-4">
            <div className="px-5 py-2.5 rounded-3xl bg-[#FACC15]/95 border-[4px] border-[#0F172A] shadow-[5px_6px_0_#0F172A] rotate-[-2deg]">
              <div className="font-display font-black text-2xl tracking-tight text-[#0F172A] leading-none">
                PHONOKIDS
              </div>
              <div className="font-mono font-bold text-[11px] uppercase tracking-widest text-[#0F172A] mt-0.5">
                COMIC HERO COMMAND HUB
              </div>
            </div>
          </div>

          <div className="w-[48%] sm:w-[235px] md:w-[265px] flex flex-col gap-2 sm:gap-2.5">
            {RIGHT_PORTALS.map((p) => renderPortalButton(p, 'right'))}
          </div>
        </div>
      </div>

      {/* Foreground Command Deck: 4 Canonical Heroes */}
      <div className="relative z-10 shrink-0 px-2 pb-2 sm:px-6 sm:pb-3">
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0F172A]/85 border-[3.5px] border-[#0F172A] shadow-[0_-2px_0_#FACC15,4px_6px_0_#0F172A] px-2 pt-2 pb-2 sm:px-5 sm:pt-3 sm:pb-3 backdrop-blur-xs">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-4 items-end">
            {COMIC_HEROES.map((hero) => {
              const isSelected = hero.id === selectedHeroId;
              return (
                <button
                  key={hero.id}
                  type="button"
                  data-testid={`hub-hero-${hero.id}`}
                  onClick={() => handleHeroTap(hero)}
                  className={`relative flex flex-col items-center rounded-2xl border-[3px] px-1 pt-1.5 pb-1 transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FEF08A] border-[#0F172A] shadow-[0_0_0_2px_#FACC15,3px_4px_0_#0F172A] -translate-y-1.5'
                      : 'bg-white/90 border-[#0F172A] hover:bg-white shadow-[2px_3px_0_#0F172A]'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute -top-2.5 px-2 py-0.5 rounded-full bg-[#EF4444] text-white border-[2px] border-[#0F172A] font-display font-black text-[9px] sm:text-[10px] uppercase leading-none">
                      ACTIVE
                    </span>
                  )}
                  <div className="h-[88px] sm:h-[124px] md:h-[148px] w-full flex items-end justify-center overflow-hidden">
                    <img
                      src={hero.sprites.idle}
                      alt={hero.nameEn}
                      className={`max-h-full max-w-full object-contain transition-transform ${
                        isSelected ? 'scale-105 animate-hero-idle' : ''
                      }`}
                      draggable={false}
                    />
                  </div>
                  <div className="w-full mt-1 px-1 py-0.5 rounded-lg bg-[#0F172A] text-white font-display font-black text-[10px] sm:text-xs text-center truncate">
                    {hero.id === 'hesman' ? 'Hesman (ゴライオン)' : hero.nameEn}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
