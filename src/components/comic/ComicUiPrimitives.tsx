import React from 'react';
import { ComicHero, PortalId } from '../../types/comicGame';
import { audioService } from '../../services/audioService';

interface IconProps {
  className?: string;
  muted?: boolean;
}

export const StarIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M16 2.6l4.1 8.3 9.2 1.3-6.6 6.5 1.5 9.1L16 23.5l-8.2 4.3 1.5-9.1-6.6-6.5 9.2-1.3L16 2.6z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
    <path d="M13 8.5l2.5-3.8 1.4 3.8" stroke="#FEF9C3" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const GemIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M8.5 5h15l5.5 7.5L16 28 3 12.5 8.5 5z" fill="#22D3EE" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
    <path d="M3 12.5h26M11 5l-2 7.5L16 28l7-15.5L21 5" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M11.5 7.5h4.5l-1 4h-4.5l1-4z" fill="#ECFEFF" />
  </svg>
);

export const BoltIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M18.5 2.5L6.5 17.5h8.2l-2.2 12 13-15.5h-8.5l1.5-11.5z" fill="#A3E635" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
  </svg>
);

export const SpeakerIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', muted = false }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M5 12h6l7.5-6v20L11 20H5a2 2 0 01-2-2v-4a2 2 0 012-2z" fill={muted ? '#94A3B8' : '#22D3EE'} stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
    {muted ? (
      <path d="M22 11l7 10M29 11l-7 10" stroke="#EF4444" strokeWidth="3.2" strokeLinecap="round" />
    ) : (
      <>
        <path d="M22 11.5c2 2.2 2 6.8 0 9" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M25.8 8c3.4 4.2 3.4 11.8 0 16" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
      </>
    )}
  </svg>
);

export const MicIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <rect x="11" y="3" width="10" height="16" rx="5" fill="#FACC15" stroke="#0F172A" strokeWidth="2.8" />
    <path d="M7.5 15.5a8.5 8.5 0 0017 0" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M16 24v5M11 29h10" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

export const BackIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M19.5 6L8.5 16l11 10v-6.2h7v-7.6h-7V6z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
  </svg>
);

export const HelpIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M11.5 11.2a4.8 4.8 0 019.4 1.3c0 2.7-2.6 3.7-4.1 4.9-.8.6-1 1.4-1 2.4" stroke="#0F172A" strokeWidth="3.4" strokeLinecap="round" />
    <circle cx="16" cy="25" r="2.2" fill="#0F172A" />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M4.5 15L16 5l11.5 10v12a1.5 1.5 0 01-1.5 1.5H19v-7.5h-6v7.5H6A1.5 1.5 0 014.5 27V15z" fill="#FFFDF7" stroke="#0F172A" strokeWidth="2.8" strokeLinejoin="round" />
  </svg>
);

export const SwapIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
    <path d="M6 11h19l-4.5-4.5" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 21H7l4.5 4.5" stroke="#0F172A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M4.5 12.5l5 5 10-11" stroke="#0F172A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M6 4.5l14 7.5-14 7.5V4.5z" fill="#0F172A" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

type PanelVariant = 'white' | 'cream' | 'yellow' | 'cyan' | 'crimson' | 'lime' | 'navy';

const PANEL_VARIANTS: Record<PanelVariant, string> = {
  white: 'bg-white text-[#0F172A]',
  cream: 'bg-[#FFFDF5] text-[#0F172A]',
  yellow: 'bg-[#FEF08A] text-[#0F172A]',
  cyan: 'bg-[#CFFAFE] text-[#0F172A]',
  crimson: 'bg-[#FFE4E6] text-[#0F172A]',
  lime: 'bg-[#ECFCCB] text-[#0F172A]',
  navy: 'bg-[#0F172A] text-white',
};

export interface ComicPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: PanelVariant;
  halftone?: boolean;
}

export const ComicPanel: React.FC<ComicPanelProps> = ({
  variant = 'white',
  halftone = true,
  className = '',
  children,
  style,
  ...rest
}) => {
  const halftoneBg = halftone
    ? {
        backgroundImage:
          variant === 'navy'
            ? 'radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)'
            : 'radial-gradient(rgba(15,23,42,0.08) 1.4px, transparent 1.4px)',
        backgroundSize: '10px 10px',
        ...style,
      }
    : style;

  return (
    <div style={halftoneBg} className={`relative rounded-2xl border-[3.5px] border-[#0F172A] shadow-[4px_5px_0_#0F172A] ${PANEL_VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export type ComicButtonVariant = 'yellow' | 'cyan' | 'crimson' | 'lime' | 'white' | 'violet';

const BTN_VARIANTS: Record<ComicButtonVariant, string> = {
  yellow: 'bg-[#FACC15] hover:bg-[#FDE047] text-[#0F172A]',
  cyan: 'bg-[#22D3EE] hover:bg-[#67E8F9] text-[#0F172A]',
  crimson: 'bg-[#EF4444] hover:bg-[#F87171] text-white',
  lime: 'bg-[#A3E635] hover:bg-[#BEF264] text-[#0F172A]',
  white: 'bg-white hover:bg-[#F8FAFC] text-[#0F172A]',
  violet: 'bg-[#A855F7] hover:bg-[#C084FC] text-white',
};

const BTN_SIZES: Record<'xs' | 'sm' | 'md' | 'lg', string> = {
  xs: 'px-2.5 py-1 text-xs rounded-xl',
  sm: 'px-3 py-1.5 text-xs sm:text-sm rounded-xl',
  md: 'px-4 py-2 text-sm sm:text-base rounded-2xl',
  lg: 'px-5 py-3 text-base sm:text-lg rounded-2xl',
};

export interface ComicActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ComicButtonVariant;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  popPitch?: number;
  silent?: boolean;
}

export const ComicActionButton: React.FC<ComicActionButtonProps> = ({
  variant = 'yellow',
  size = 'md',
  popPitch = 520,
  silent = false,
  className = '',
  children,
  onClick,
  disabled,
  type = 'button',
  ...rest
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={(e) => {
      if (disabled) return;
      if (!silent) audioService.playPopSound(popPitch);
      onClick?.(e);
    }}
    className={`relative overflow-hidden border-[3.5px] border-[#0F172A] font-display font-black tracking-wide shadow-[4px_5px_0_#0F172A] active:translate-x-[2px] active:translate-y-[3px] active:shadow-[1px_2px_0_#0F172A] transition-transform duration-100 select-none cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed ${BTN_VARIANTS[variant]} ${BTN_SIZES[size]} ${className}`}
    {...rest}
  >
    <span aria-hidden="true" className="pointer-events-none absolute inset-x-2 top-0.5 h-1.5 rounded-full bg-white/40" />
    <span className="relative z-10 inline-flex items-center justify-center gap-1.5 w-full h-full">{children}</span>
  </button>
);

export interface ComicTopHudProps {
  hero: ComicHero;
  stars: number;
  gems: number;
  energy: number;
  soundEnabled: boolean;
  activePortal?: PortalId;
  onOpenSquad: () => void;
  onToggleSound: () => void;
  onOpenGuide: () => void;
  onGoHome?: () => void;
}

export const ComicTopHud: React.FC<ComicTopHudProps> = ({
  hero,
  stars,
  gems,
  energy,
  soundEnabled,
  activePortal = 'hub',
  onOpenSquad,
  onToggleSound,
  onOpenGuide,
  onGoHome,
}) => {
  const clampedEnergy = Math.max(0, Math.min(100, Math.round(energy)));
  const isOnHub = activePortal === 'hub';

  return (
    <header className="relative z-30 shrink-0 px-2 pt-1.5 pb-1 sm:px-4 sm:pt-2 flex items-center justify-between gap-1 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1.5 min-w-0">
        <button
          type="button"
          data-testid="btn-open-squad"
          onClick={() => { audioService.playPopSound(540); onOpenSquad(); }}
          aria-label={hero.nameEn}
          className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[3px_4px_0_#0F172A] active:translate-y-[2px] p-0.5 flex items-center justify-center cursor-pointer overflow-hidden"
        >
          <img src={hero.sprites.idle} alt={hero.nameEn} className="w-full h-full object-contain" draggable={false} />
        </button>

        <div data-testid="hud-stars" className="h-8 sm:h-9 px-2 rounded-full bg-white border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] flex items-center gap-1">
          <StarIcon className="w-4 h-4 shrink-0" />
          <span className="font-mono font-black text-xs sm:text-sm text-[#0F172A] tabular-nums">{stars}</span>
        </div>

        <div data-testid="hud-gems" className="h-8 sm:h-9 px-2 rounded-full bg-white border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] flex items-center gap-1">
          <GemIcon className="w-4 h-4 shrink-0" />
          <span className="font-mono font-black text-xs sm:text-sm text-[#0F172A] tabular-nums">{gems}</span>
        </div>

        <div data-testid="hud-energy" className="h-8 sm:h-9 px-2 rounded-full bg-white border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] flex items-center gap-1">
          <BoltIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <div className="hidden sm:block w-12 h-2.5 rounded-full bg-slate-200 border-[2px] border-[#0F172A] overflow-hidden">
            <div className="h-full bg-[#A3E635] transition-all duration-300" style={{ width: `${clampedEnergy}%` }} />
          </div>
          <span className="font-mono font-black text-[10px] sm:text-xs text-[#0F172A] tabular-nums">{clampedEnergy}/100</span>
        </div>
      </div>

      <div className="pointer-events-auto flex items-center gap-1 shrink-0">
        <button
          type="button"
          data-testid="btn-toggle-sound"
          onClick={onToggleSound}
          aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] active:translate-y-[2px] flex items-center justify-center cursor-pointer ${soundEnabled ? 'bg-[#A3E635]' : 'bg-slate-300'}`}
        >
          <SpeakerIcon className="w-4 h-4 sm:w-5 sm:h-5" muted={!soundEnabled} />
        </button>

        <button
          type="button"
          data-testid="btn-vi-hint"
          onClick={() => { audioService.playPopSound(600); onOpenGuide(); }}
          aria-label="Guide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FACC15] border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] active:translate-y-[2px] flex items-center justify-center cursor-pointer"
        >
          <HelpIcon className="w-5 h-5" />
        </button>

        {onGoHome && (
          <button
            type="button"
            data-testid="btn-hud-home"
            onClick={() => { audioService.playPopSound(500); onGoHome(); }}
            aria-label="Home Hub"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-[3px] border-[#0F172A] shadow-[2px_3px_0_#0F172A] active:translate-y-[2px] flex items-center justify-center cursor-pointer ${isOnHub ? 'bg-white/85 opacity-80' : 'bg-[#22D3EE]'}`}
          >
            <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </header>
  );
};

export interface MicWaveformOrbProps {
  bars: number[];
  volume?: number;
  isListening: boolean;
  statusLabel?: string;
  tone?: 'idle' | 'listening' | 'pass' | 'retry' | 'blocked';
  compact?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  testId?: string;
  className?: string;
}

const ORB_TONE_BG: Record<NonNullable<MicWaveformOrbProps['tone']>, string> = {
  idle: 'bg-white',
  listening: 'bg-[#CFFAFE]',
  pass: 'bg-[#ECFCCB]',
  retry: 'bg-[#FEF3C7]',
  blocked: 'bg-[#FFE4E6]',
};

const ORB_BADGE_STYLE: Record<NonNullable<MicWaveformOrbProps['tone']>, string> = {
  idle: 'bg-[#FACC15] text-[#0F172A]',
  listening: 'bg-[#22D3EE] text-[#0F172A] animate-pulse',
  pass: 'bg-[#A3E635] text-[#0F172A]',
  retry: 'bg-[#FB923C] text-[#0F172A]',
  blocked: 'bg-[#EF4444] text-white',
};

export const MicWaveformOrb: React.FC<MicWaveformOrbProps> = ({
  bars,
  volume = 0,
  isListening,
  statusLabel,
  tone,
  compact = false,
  onClick,
  disabled = false,
  testId,
  className = '',
}) => {
  const effectiveTone = tone || (isListening ? 'listening' : 'idle');
  const displayLabel = statusLabel || (isListening ? 'Listening...' : 'READY');
  const paddedBars = Array.from({ length: 16 }, (_, idx) => Math.max(12, Math.min(100, Math.round(bars[idx] ?? 8))));

  const content = (
    <div className={`w-full flex items-center gap-2.5 rounded-2xl border-[3px] border-[#0F172A] shadow-[3px_4px_0_#0F172A] ${compact ? 'px-2.5 py-1.5' : 'px-3 py-2'} ${ORB_TONE_BG[effectiveTone]} ${className}`}>
      <div className={`shrink-0 rounded-full border-[3px] border-[#0F172A] flex items-center justify-center ${compact ? 'w-9 h-9' : 'w-11 h-11'} ${isListening ? 'bg-[#EF4444] animate-pulse' : 'bg-[#FACC15]'}`}>
        <MicIcon className={compact ? 'w-4 h-4' : 'w-5 h-5'} />
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <span data-testid="mic-status-label" className={`inline-block px-2 py-0.5 rounded-lg border-[2px] border-[#0F172A] font-display font-black text-[11px] uppercase tracking-wider leading-none ${ORB_BADGE_STYLE[effectiveTone]}`}>
            {displayLabel}
          </span>
          <span className="font-mono font-bold text-[10px] text-[#0F172A]/75 tabular-nums">
            {isListening ? `LVL ${Math.round(volume)}` : '16-BAND'}
          </span>
        </div>

        <div className={`flex items-end gap-[3px] ${compact ? 'h-5' : 'h-7'}`} aria-hidden="true">
          {paddedBars.map((val, i) => (
            <div
              key={i}
              data-testid="mic-wave-bar"
              style={{ height: `${val}%` }}
              className={`flex-1 rounded-full border border-[#0F172A] transition-all duration-75 ${
                effectiveTone === 'pass'
                  ? 'bg-[#84CC16]'
                  : effectiveTone === 'blocked'
                  ? 'bg-[#EF4444]'
                  : isListening
                  ? i % 2 === 0
                    ? 'bg-[#06B6D4]'
                    : 'bg-[#FACC15]'
                  : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return (
      <button type="button" data-testid={testId} disabled={disabled} onClick={onClick} className="w-full text-left cursor-pointer disabled:opacity-50">
        {content}
      </button>
    );
  }
  return <div data-testid={testId} className="w-full">{content}</div>;
};
