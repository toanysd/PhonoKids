import React, { useState } from 'react';
import { ROCKET_UPGRADES } from '../../data/comicGameData';
import { audioService } from '../../services/audioService';
import { ComicHero, RocketUpgradeItem } from '../../types/comicGame';
import {
  CheckIcon,
  ComicActionButton,
  ComicPanel,
  GemIcon,
  StarIcon,
} from './ComicUiPrimitives';

export interface StarZoneScreenProps {
  hero: ComicHero;
  stars: number;
  gems: number;
  ownedUpgradeIds: string[];
  equippedUpgradeIds: string[];
  onBuyOrToggleUpgrade: (upgradeId: string) => { ok: boolean; reason?: string };
}

function RocketGadgetSvg({ id, accent }: { id: string; accent: string }) {
  switch (id) {
    case 'plasma_thruster':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <rect x="8" y="8" width="24" height="14" rx="4" fill={accent} stroke="#0F172A" strokeWidth="2.5" />
          <path d="M12 22l4 13 4-7 4 7 4-13" fill="#FACC15" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
      );
    case 'star_radar':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="14" fill="#0F172A" stroke="#22D3EE" strokeWidth="3" />
          <circle cx="20" cy="20" r="8" stroke="#22D3EE" strokeWidth="1.8" />
          <path d="M20 20l9-8" stroke="#A3E635" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="25" cy="14" r="2.2" fill="#FACC15" />
        </svg>
      );
    case 'lion_shield':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M20 4l12 5v10c0 8-5.2 13.5-12 17-6.8-3.5-12-9-12-17V9l12-5z" fill={accent} stroke="#0F172A" strokeWidth="2.6" />
          <path d="M20 11v15M13 18h14" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );
    case 'holo_console':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M6 27l5-10h18l5 10H6z" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="15" cy="12" r="4" fill="#22D3EE" stroke="#0F172A" strokeWidth="2" />
          <circle cx="25" cy="10" r="3" fill="#FACC15" stroke="#0F172A" strokeWidth="2" />
          <rect x="9" y="27" width="22" height="6" rx="2" fill={accent} stroke="#0F172A" strokeWidth="2.2" />
        </svg>
      );
    case 'mini_drone':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <circle cx="20" cy="21" r="10" fill={accent} stroke="#0F172A" strokeWidth="2.5" />
          <circle cx="16" cy="20" r="2.2" fill="#FFF" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="24" cy="20" r="2.2" fill="#FFF" stroke="#0F172A" strokeWidth="1.5" />
          <path d="M20 6v5M14 6h12" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'neon_banner':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M6 8h28v16l-14 8-14-8V8z" fill={accent} stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M20 12l2 4 4.5.6-3.2 3.1.8 4.4L20 22l-4.1 2.1.8-4.4-3.2-3.1 4.5-.6 2-4z" fill="#FACC15" stroke="#0F172A" strokeWidth="1.8" />
        </svg>
      );
    case 'warp_window':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <circle cx="20" cy="20" r="14" fill="#1E1B4B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="15" cy="15" r="2.5" fill="#FACC15" />
          <circle cx="26" cy="22" r="3" fill={accent} />
          <path d="M12 27c5-4 11-4 17-2" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" aria-hidden="true">
          <path d="M10 12a12 12 0 0020 16L10 12z" fill={accent} stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M22 18l8-8M26 8a6 6 0 016 6" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
}

const STAGE_SLOTS: Record<string, string> = {
  neon_banner: 'top-2 left-3',
  warp_window: 'top-2 left-1/2 -translate-x-1/2',
  turbo_antenna: 'top-2 right-3',
  star_radar: 'top-14 left-3',
  lion_shield: 'top-14 right-3',
  holo_console: 'bottom-3 left-3',
  plasma_thruster: 'bottom-3 left-14 sm:left-24',
  mini_drone: 'bottom-6 right-4 sm:right-10 animate-float',
};

export const StarZoneScreen: React.FC<StarZoneScreenProps> = ({
  hero,
  stars,
  gems,
  ownedUpgradeIds,
  equippedUpgradeIds,
  onBuyOrToggleUpgrade,
}) => {
  const [notice, setNotice] = useState<string>('Decorate your Rocket Command Room!');

  const handleAction = (item: RocketUpgradeItem) => {
    const res = onBuyOrToggleUpgrade(item.id);
    if (res.ok) {
      audioService.playMagicChime();
      const willBeEquipped = !equippedUpgradeIds.includes(item.id);
      setNotice(willBeEquipped ? `Equipped: ${item.nameEn}!` : `Stored: ${item.nameEn}`);
    } else {
      audioService.playGentleTryAgain();
      setNotice(res.reason || 'Earn more Stars or Gems in Battle!');
    }
  };

  const equippedItems = ROCKET_UPGRADES.filter((u) => equippedUpgradeIds.includes(u.id));

  return (
    <section
      data-testid="star-zone-screen"
      className="flex-1 min-h-0 h-full w-full overflow-hidden flex flex-col gap-2 p-2 sm:p-4 max-w-5xl mx-auto"
    >
      {/* Rocket Command Room Stage */}
      <div className="relative h-[215px] sm:h-[300px] shrink-0 rounded-3xl border-[4px] border-[#0F172A] shadow-[5px_6px_0_#0F172A] overflow-hidden bg-[#0F172A]">
        <img
          src="/assets/comic/scenes/rocket_room.webp"
          alt="Star Zone Rocket Command Room"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          draggable={false}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-[#0F172A]/35 pointer-events-none" />

        {/* Room Title & Notice */}
        <div className="relative z-10 flex items-center justify-between px-3 pt-2 pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-xl bg-[#FACC15] border-[2.5px] border-[#0F172A] shadow-[2px_2px_0_#0F172A] font-display font-black text-xs sm:text-sm text-[#0F172A]">
            STAR ZONE ROCKET
          </span>
          <span className="px-2.5 py-0.5 rounded-xl bg-white/95 border-[2.5px] border-[#0F172A] font-mono font-black text-[11px] text-[#0F172A]">
            {equippedItems.length}/8 ONBOARD
          </span>
        </div>

        {/* Equipped Gadgets Placed On Room Stage */}
        {equippedItems.map((item) => (
          <div
            key={item.id}
            data-testid={`room-gadget-${item.id}`}
            title={item.nameEn}
            className={`absolute z-20 p-1 rounded-2xl bg-white/90 border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] flex flex-col items-center ${STAGE_SLOTS[item.id] || 'bottom-3 right-3'}`}
          >
            <RocketGadgetSvg id={item.id} accent={item.accentColor} />
            <span className="font-display font-black text-[9px] text-[#0F172A] leading-none mt-0.5">
              {item.nameEn.split(' ')[0]}
            </span>
          </div>
        ))}

        {/* Active Hero Standing Inside Rocket Room */}
        <div className="absolute inset-x-0 bottom-1 z-10 flex justify-center pointer-events-none">
          <img
            src={hero.sprites.idle}
            alt={hero.nameEn}
            className="h-[135px] sm:h-[205px] object-contain drop-shadow-[0_6px_0_rgba(15,23,42,0.55)] animate-hero-idle"
            draggable={false}
          />
        </div>
      </div>

      {/* Shop Deck */}
      <ComicPanel variant="cream" className="flex-1 min-h-0 flex flex-col p-2.5 sm:p-3.5 overflow-hidden">
        <div className="shrink-0 flex items-center justify-between gap-2 pb-2 border-b-[2.5px] border-[#0F172A]/15">
          <div>
            <h2 className="font-display font-black text-sm sm:text-base text-[#0F172A] leading-none">
              ROCKET SHOP DECK
            </h2>
            <p data-testid="star-zone-notice" className="font-sans font-bold text-[11px] sm:text-xs text-[#0F172A]/75 mt-0.5">
              {notice}
            </p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FEF08A] border-[2px] border-[#0F172A] font-mono font-black text-xs text-[#0F172A]">
              <StarIcon className="w-3.5 h-3.5" />
              {stars}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#CFFAFE] border-[2px] border-[#0F172A] font-mono font-black text-xs text-[#0F172A]">
              <GemIcon className="w-3.5 h-3.5" />
              {gems}
            </span>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto pt-2 pr-0.5 grid grid-cols-2 sm:grid-cols-4 gap-2 content-start">
          {ROCKET_UPGRADES.map((item) => {
            const owned = ownedUpgradeIds.includes(item.id);
            const equipped = equippedUpgradeIds.includes(item.id);
            const canAfford = stars >= item.costStars && gems >= item.costGems;

            return (
              <div
                key={item.id}
                data-testid={`upgrade-card-${item.id}`}
                className={`rounded-2xl border-[3px] border-[#0F172A] p-2 flex flex-col justify-between gap-1.5 shadow-[2px_3px_0_#0F172A] ${
                  equipped ? 'bg-[#ECFCCB]' : owned ? 'bg-[#E0F2FE]' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FFFDF5] border-[2px] border-[#0F172A] flex items-center justify-center">
                    <RocketGadgetSvg id={item.id} accent={item.accentColor} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-black text-xs text-[#0F172A] leading-tight truncate">
                      {item.nameEn}
                    </div>
                    <div className="font-sans font-bold text-[10px] text-slate-600 leading-tight truncate">
                      {item.nameVi}
                    </div>
                  </div>
                </div>

                <ComicActionButton
                  data-testid={`btn-buy-${item.id}`}
                  size="xs"
                  variant={equipped ? 'lime' : owned ? 'cyan' : canAfford ? 'yellow' : 'white'}
                  disabled={!owned && !canAfford}
                  onClick={() => handleAction(item)}
                  className="w-full"
                >
                  {equipped ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5" />
                      <span>EQUIPPED</span>
                    </>
                  ) : owned ? (
                    <span>EQUIP</span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      <span>BUY</span>
                      {item.costStars > 0 && (
                        <span className="inline-flex items-center gap-0.5 font-mono">
                          <StarIcon className="w-3 h-3" />
                          {item.costStars}
                        </span>
                      )}
                      {item.costGems > 0 && (
                        <span className="inline-flex items-center gap-0.5 font-mono">
                          <GemIcon className="w-3 h-3" />
                          {item.costGems}
                        </span>
                      )}
                    </span>
                  )}
                </ComicActionButton>
              </div>
            );
          })}
        </div>
      </ComicPanel>
    </section>
  );
};
