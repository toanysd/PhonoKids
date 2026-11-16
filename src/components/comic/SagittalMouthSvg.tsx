import React from 'react';
import { PhonemeArticulation, TongueMode } from '../../types/comicGame';

export interface SagittalMouthSvgProps {
  phoneme: PhonemeArticulation;
  isActive?: boolean;
  onReplay?: () => void;
  className?: string;
}

const TONGUE_PATHS: Record<TongueMode, string> = {
  alveolar_tip: 'M98,168 C108,136 142,126 176,118 C186,115 191,119 186,125 C166,133 152,150 144,168 Z',
  postalveolar_dome: 'M98,168 C110,126 146,108 175,113 C184,116 184,126 172,130 C152,135 148,150 144,168 Z',
  interdental: 'M98,168 C112,136 154,124 198,123 C207,123 209,129 200,132 C170,135 150,150 144,168 Z',
  velar_back: 'M98,168 C106,116 132,101 154,118 C168,130 182,136 188,139 C174,148 152,152 144,168 Z',
  bilabial_flat: 'M98,168 C110,145 144,141 182,143 C190,144 190,150 180,152 C158,154 148,158 144,168 Z',
  retroflex: 'M98,168 C108,136 142,124 166,115 C175,111 178,118 168,125 C154,135 150,150 144,168 Z',
  high_front: 'M98,168 C112,132 146,114 178,118 C186,120 186,128 176,132 C158,138 148,152 144,168 Z',
  low_open: 'M98,168 C112,152 148,149 184,150 C192,151 190,157 178,159 C158,160 148,163 144,168 Z',
  mid_back: 'M98,168 C104,128 128,120 152,129 C168,136 180,144 184,147 C168,153 150,156 144,168 Z',
};

function renderLips(phoneme: PhonemeArticulation, jawDrop: number) {
  const { lipMode } = phoneme;
  const lowY = 129 + jawDrop * 0.72;

  if (lipMode === 'closed') {
    return (
      <g data-testid="sagittal-lips" className="transition-all duration-300">
        <path d="M198,112 Q212,116 211,126 Q204,128 198,124 Z" fill="#FB7185" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M198,126 Q211,126 211,134 Q204,140 196,136 Z" fill="#F43F5E" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
      </g>
    );
  }
  if (lipMode === 'teeth_lip') {
    return (
      <g data-testid="sagittal-lips" className="transition-all duration-300">
        <path d="M198,108 Q211,111 208,119 Q202,120 197,117 Z" fill="#FB7185" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M193,124 Q204,122 206,131 Q199,138 192,135 Z" fill="#F43F5E" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
      </g>
    );
  }
  const protrude = lipMode === 'rounded' ? 8 : lipMode === 'spread' ? -2 : 2;
  const topLipY = lipMode === 'rounded' ? 116 : 119;
  const botLipY = Math.max(topLipY + 6, lowY);
  return (
    <g data-testid="sagittal-lips" className="transition-all duration-300">
      <path d={`M197,108 Q${210 + protrude},110 ${209 + protrude},${topLipY} Q${202 + protrude * 0.5},${topLipY + 2} 196,116 Z`} fill="#FB7185" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
      <path d={`M196,${botLipY - 2} Q${209 + protrude},${botLipY - 2} ${208 + protrude},${botLipY + 7} Q${200 + protrude * 0.4},${botLipY + 11} 194,${botLipY + 6} Z`} fill="#F43F5E" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
    </g>
  );
}

function renderAirflow(phoneme: PhonemeArticulation, isActive: boolean) {
  const pulseCls = isActive ? 'animate-pulse opacity-100' : 'opacity-90';
  if (phoneme.nasal) {
    return (
      <g data-testid="sagittal-airflow" className={pulseCls}>
        <path d="M104,148 C102,116 112,78 148,74 C178,70 202,77 224,84" fill="none" stroke="#22D3EE" strokeWidth="4.5" strokeDasharray="8 5" strokeLinecap="round" />
        <polygon points="222,76 238,87 219,91" fill="#22D3EE" stroke="#0F172A" strokeWidth="1.8" />
        <path d="M242,84 L264,86" stroke="#67E8F9" strokeWidth="3" strokeLinecap="round" />
      </g>
    );
  }
  if (phoneme.airflow === 'puff') {
    return (
      <g data-testid="sagittal-airflow" className={pulseCls}>
        <path d="M126,136 Q165,126 218,126" fill="none" stroke="#22D3EE" strokeWidth="4" strokeDasharray="7 5" strokeLinecap="round" />
        <path d="M222,126 L244,116 L239,124 L262,126 L239,130 L245,139 L222,129 Z" fill="#22D3EE" stroke="#0F172A" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="268" cy="118" r="3" fill="#FACC15" stroke="#0F172A" strokeWidth="1.5" />
        <circle cx="272" cy="133" r="2.5" fill="#67E8F9" stroke="#0F172A" strokeWidth="1.5" />
      </g>
    );
  }
  if (phoneme.airflow === 'vowel') {
    return (
      <g data-testid="sagittal-airflow" className={pulseCls}>
        <path d="M118,142 Q165,132 216,130" fill="none" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" />
        <path d="M225,116 Q238,130 225,144" fill="none" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" />
        <path d="M239,108 Q256,130 239,152" fill="none" stroke="#67E8F9" strokeWidth="4" strokeLinecap="round" />
        <path d="M254,102 Q274,130 254,158" fill="none" stroke="#FACC15" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <g data-testid="sagittal-airflow" className={pulseCls}>
      <path d="M106,154 C112,130 144,122 192,123 C218,123 236,125 256,126" fill="none" stroke="#22D3EE" strokeWidth="4.5" strokeDasharray="9 5" strokeLinecap="round" />
      <polygon points="252,118 272,126 252,134" fill="#22D3EE" stroke="#0F172A" strokeWidth="1.8" />
      <path d="M224,114 L244,112 M224,138 L244,140" stroke="#67E8F9" strokeWidth="2.8" strokeLinecap="round" />
    </g>
  );
}

const MouthCamFrontView: React.FC<{ phoneme: PhonemeArticulation }> = ({ phoneme }) => {
  const { frontMouthMode, lipMode, tongueMode, jawOpen } = phoneme;
  const openY = Math.round(6 + jawOpen * 18);

  const renderInnerShape = () => {
    if (frontMouthMode === 'closed_mm') {
      return (
        <g data-testid="mouth-cam-shape">
          <path d="M16,42 Q40,34 64,42 Q40,48 16,42 Z" fill="#F43F5E" stroke="#0F172A" strokeWidth="2.8" />
          <path d="M16,42 Q40,45 64,42" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      );
    }
    if (frontMouthMode === 'teeth_th' && lipMode === 'teeth_lip') {
      return (
        <g data-testid="mouth-cam-shape">
          <path d="M18,36 Q40,30 62,36 L58,47 Q40,56 22,47 Z" fill="#4C0519" stroke="#0F172A" strokeWidth="2.6" />
          <rect x="24" y="34" width="32" height="9" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <path d="M17,45 Q40,41 63,45 Q52,58 40,58 Q28,58 17,45 Z" fill="#FB7185" stroke="#0F172A" strokeWidth="2.5" />
        </g>
      );
    }
    if (frontMouthMode === 'teeth_th' || tongueMode === 'interdental') {
      return (
        <g data-testid="mouth-cam-shape">
          <ellipse cx="40" cy="41" rx="21" ry="12" fill="#4C0519" stroke="#FB7185" strokeWidth="5" />
          <ellipse cx="40" cy="41" rx="23.5" ry="14.5" fill="none" stroke="#0F172A" strokeWidth="2.5" />
          <rect x="26" y="30" width="28" height="7" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
          <path d="M27,41 Q40,36 53,41 Q49,51 40,51 Q31,51 27,41 Z" fill="#F43F5E" stroke="#0F172A" strokeWidth="2.2" />
        </g>
      );
    }
    if (frontMouthMode === 'round_o' || frontMouthMode === 'pucker_sh') {
      const rx = frontMouthMode === 'pucker_sh' ? 11 : 13;
      const ry = frontMouthMode === 'pucker_sh' ? 9 : 13;
      return (
        <g data-testid="mouth-cam-shape">
          <ellipse cx="40" cy="42" rx={rx + 7} ry={ry + 6} fill="#FB7185" stroke="#0F172A" strokeWidth="2.6" />
          <ellipse cx="40" cy="42" rx={rx} ry={ry} fill="#3B0764" stroke="#0F172A" strokeWidth="2.5" />
          <ellipse cx="40" cy="49" rx={rx - 3} ry="4" fill="#F43F5E" />
        </g>
      );
    }
    if (frontMouthMode === 'smile') {
      return (
        <g data-testid="mouth-cam-shape">
          <path d="M13,37 Q40,31 67,37 Q62,53 40,54 Q18,53 13,37 Z" fill="#4C0519" stroke="#FB7185" strokeWidth="4.5" />
          <path d="M11,37 Q40,29 69,37 Q63,56 40,56 Q17,56 11,37 Z" fill="none" stroke="#0F172A" strokeWidth="2.5" />
          <path d="M20,36 Q40,33 60,36 L58,43 Q40,41 22,43 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
          <path d="M22,44 Q40,43 58,44 L55,49 Q40,51 25,49 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
        </g>
      );
    }
    return (
      <g data-testid="mouth-cam-shape">
        <ellipse cx="40" cy="41" rx="22" ry={openY} fill="#4C0519" stroke="#FB7185" strokeWidth="5" />
        <ellipse cx="40" cy="41" rx="24.5" ry={openY + 2.5} fill="none" stroke="#0F172A" strokeWidth="2.5" />
        <path d={`M23,${41 - openY + 3} Q40,${41 - openY} 57,${41 - openY + 3} L55,${41 - openY + 9} Q40,${41 - openY + 7} 25,${41 - openY + 9} Z`} fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.6" />
        <ellipse cx="40" cy={41 + openY - 5} rx="13" ry="6" fill="#F43F5E" stroke="#0F172A" strokeWidth="1.8" />
      </g>
    );
  };

  return (
    <div data-testid="mouth-cam" className="absolute right-1.5 bottom-1.5 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full bg-[#FFFDF5] border-[3px] border-[#0F172A] shadow-[3px_3px_0_#0F172A] flex flex-col items-center justify-center overflow-hidden pointer-events-none">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="40" cy="40" r="36" fill="#FFE4C4" />
        <circle cx="22" cy="46" r="5" fill="#FDA4AF" opacity="0.55" />
        <circle cx="58" cy="46" r="5" fill="#FDA4AF" opacity="0.55" />
        {renderInnerShape()}
      </svg>
      <span className="absolute bottom-1 px-1.5 py-[1px] rounded-full bg-[#0F172A] text-[#FACC15] font-display font-black text-[7px] sm:text-[8px] tracking-wider uppercase leading-none">
        MOUTH CAM
      </span>
    </div>
  );
};

export const SagittalMouthSvg: React.FC<SagittalMouthSvgProps> = ({
  phoneme,
  isActive = false,
  onReplay,
  className = '',
}) => {
  const jawDrop = Math.round(phoneme.jawOpen * 22);
  const velumPath = phoneme.nasal
    ? 'M136,99 Q124,109 116,123 Q123,125 130,114 Q138,105 142,100 Z'
    : 'M136,99 Q118,98 100,104 Q103,111 118,107 Q130,105 139,102 Z';

  return (
    <div
      onClick={onReplay}
      role={onReplay ? 'button' : undefined}
      tabIndex={onReplay ? 0 : undefined}
      onKeyDown={onReplay ? (e) => { if (e.key === 'Enter' || e.key === ' ') onReplay(); } : undefined}
      className={`relative w-full h-full rounded-xl bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#FEF9C3] border-[3px] border-[#0F172A] overflow-hidden select-none ${onReplay ? 'cursor-pointer' : ''} ${className}`}
    >
      <svg data-testid="sagittal-svg" viewBox="0 0 320 212" className="w-full h-full">
        <defs>
          <pattern id="lab-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#0F172A" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="320" height="212" fill="url(#lab-grid)" />

        <path d="M52,205 L52,145 C42,115 44,54 88,28 C128,6 178,16 196,46 L216,84 C218,89 213,94 204,95 L204,114 L192,165 C185,178 164,180 144,179 L142,205 Z" fill="#FFE4C4" stroke="#0F172A" strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M42,126 L34,92 L48,74 L42,46 L72,30 L92,10 L124,20 L156,8 L174,28 L200,32 L182,52 C142,42 94,48 76,82 C64,104 68,128 52,142 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="3" strokeLinejoin="round" />
        <path d="M98,26 L126,31 L148,20" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M144,54 Q160,46 174,54" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" fill="none" />
        <ellipse cx="159" cy="64" rx="10" ry="7" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
        <circle cx="162" cy="64" r="4.5" fill="#0F172A" />
        <circle cx="164" cy="62" r="1.6" fill="#FFFFFF" />

        <path d="M96,196 L96,102 C98,74 128,58 172,62 C192,64 204,76 206,86 L194,88 L194,97 L136,99 L142,174 L142,196 Z" fill="#3B0764" stroke="#0F172A" strokeWidth="2.5" />
        <path d="M136,99 C154,96 178,100 192,114 L199,114 L199,98 C178,90 154,90 136,99 Z" fill="#FDA4AF" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
        <path data-testid="sagittal-velum" d={velumPath} fill={phoneme.nasal ? '#67E8F9' : '#FB7185'} stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" className="transition-all duration-300" />
        <rect x="191" y="112" width="8" height="13" rx="2.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />

        <g data-testid="sagittal-jaw" style={{ transform: `translateY(${jawDrop}px)` }} className="transition-all duration-300">
          <path d="M138,166 L190,164 C199,163 205,155 204,136 L190,136 L188,150 L138,154 Z" fill="#FFD7AE" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" />
          <rect x="190" y="128" width="8" height="12" rx="2.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
        </g>

        <path data-testid="sagittal-tongue" d={TONGUE_PATHS[phoneme.tongueMode]} style={{ transform: `translateY(${Math.round(jawDrop * 0.25)}px)` }} fill="#F43F5E" stroke="#0F172A" strokeWidth="2.6" strokeLinejoin="round" className="transition-all duration-300" />
        {renderLips(phoneme, jawDrop)}

        <g data-testid="sagittal-throat" className="transition-all duration-300">
          {phoneme.voiced ? (
            <>
              <circle cx="106" cy="182" r="14" fill="none" stroke="#FACC15" strokeWidth="3" className="animate-ping" opacity="0.55" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
              <circle cx="106" cy="182" r="9" fill="#FACC15" stroke="#0F172A" strokeWidth="2.2" />
              <path d="M98,182 L102,177 L106,187 L110,177 L114,182" stroke="#0F172A" strokeWidth="2" fill="none" strokeLinecap="round" />
              <rect x="16" y="172" width="68" height="20" rx="10" fill="#FACC15" stroke="#0F172A" strokeWidth="2.4" />
              <text x="50" y="185" textAnchor="middle" fill="#0F172A" fontSize="9" fontWeight="900">VOICE ON</text>
            </>
          ) : (
            <>
              <circle cx="106" cy="182" r="7" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2" />
              <line x1="100" y1="182" x2="112" y2="182" stroke="#0F172A" strokeWidth="2" strokeDasharray="2 2" />
              <rect x="16" y="172" width="68" height="20" rx="10" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2.2" />
              <text x="50" y="185" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="800">BREATH</text>
            </>
          )}
        </g>

        {renderAirflow(phoneme, isActive)}
      </svg>
      <MouthCamFrontView phoneme={phoneme} />
    </div>
  );
};
