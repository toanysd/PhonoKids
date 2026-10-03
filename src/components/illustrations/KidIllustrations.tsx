import React from 'react';

interface SvgProps {
  className?: string;
  size?: number;
}

// 🦁 Adorable cartoon mascot Leo the Lion
export const LeoCartoonMascot: React.FC<SvgProps & { mood?: 'happy' | 'cheer' | 'wink' }> = ({
  className = '',
  size = 120,
  mood = 'happy'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-md select-none ${className}`}
  >
    {/* Mane fluffy cloud shapes */}
    <circle cx="100" cy="100" r="82" fill="#F59E0B" />
    <circle cx="48" cy="70" r="28" fill="#D97706" />
    <circle cx="152" cy="70" r="28" fill="#D97706" />
    <circle cx="42" cy="120" r="28" fill="#D97706" />
    <circle cx="158" cy="120" r="28" fill="#D97706" />
    <circle cx="70" cy="160" r="26" fill="#D97706" />
    <circle cx="130" cy="160" r="26" fill="#D97706" />
    <circle cx="100" cy="168" r="26" fill="#D97706" />
    <circle cx="100" cy="38" r="26" fill="#D97706" />
    <circle cx="68" cy="45" r="24" fill="#D97706" />
    <circle cx="132" cy="45" r="24" fill="#D97706" />

    {/* Ears */}
    <circle cx="56" cy="56" r="20" fill="#FBBF24" stroke="#D97706" strokeWidth="4" />
    <circle cx="56" cy="56" r="10" fill="#F472B6" />
    <circle cx="144" cy="56" r="20" fill="#FBBF24" stroke="#D97706" strokeWidth="4" />
    <circle cx="144" cy="56" r="10" fill="#F472B6" />

    {/* Face Base */}
    <circle cx="100" cy="106" r="62" fill="#FDE68A" stroke="#F59E0B" strokeWidth="5" />

    {/* Cheeks */}
    <circle cx="64" cy="122" r="12" fill="#FCA5A5" opacity="0.8" />
    <circle cx="136" cy="122" r="12" fill="#FCA5A5" opacity="0.8" />

    {/* Eyes */}
    {mood === 'wink' ? (
      <>
        <circle cx="74" cy="98" r="9" fill="#1E293B" />
        <circle cx="71" cy="95" r="3.5" fill="#FFFFFF" />
        <path d="M124 98 Q134 90 144 98" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" fill="none" />
      </>
    ) : (
      <>
        <circle cx="74" cy="98" r="9" fill="#1E293B" />
        <circle cx="71" cy="95" r="3.5" fill="#FFFFFF" />
        <circle cx="126" cy="98" r="9" fill="#1E293B" />
        <circle cx="123" cy="95" r="3.5" fill="#FFFFFF" />
      </>
    )}

    {/* Cute Muzzle */}
    <ellipse cx="100" cy="124" rx="20" ry="14" fill="#FEF3C7" />
    {/* Heart-shaped cute nose */}
    <path d="M94 116 C94 112, 100 112, 100 115 C100 112, 106 112, 106 116 C106 120, 100 124, 100 124 C100 124, 94 120, 94 116 Z" fill="#92400E" />

    {/* Smile */}
    <path d="M94 126 Q100 134 106 126" stroke="#92400E" strokeWidth="3.5" strokeLinecap="round" fill="none" />

    {/* Whisker dots */}
    <circle cx="86" cy="123" r="2" fill="#B45309" />
    <circle cx="83" cy="126" r="2" fill="#B45309" />
    <circle cx="114" cy="123" r="2" fill="#B45309" />
    <circle cx="117" cy="126" r="2" fill="#B45309" />
  </svg>
);

// 🐱 Cute Cartoon Cat
export const CartoonCat: React.FC<SvgProps> = ({ className = '', size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Body */}
    <ellipse cx="100" cy="140" rx="60" ry="46" fill="#FB923C" stroke="#EA580C" strokeWidth="4" />
    {/* Tail */}
    <path d="M150 145 C180 140, 190 110, 175 90 C165 80, 155 95, 160 110 C165 125, 145 135, 138 140" fill="#F97316" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" />
    {/* Head */}
    <circle cx="100" cy="85" r="50" fill="#FB923C" stroke="#EA580C" strokeWidth="4" />
    {/* Ears */}
    <polygon points="60,60 75,20 95,50" fill="#EA580C" />
    <polygon points="67,55 77,30 90,48" fill="#F472B6" />
    <polygon points="140,60 125,20 105,50" fill="#EA580C" />
    <polygon points="133,55 123,30 110,48" fill="#F472B6" />
    {/* Cheeks */}
    <circle cx="70" cy="100" r="10" fill="#FCA5A5" opacity="0.8" />
    <circle cx="130" cy="100" r="10" fill="#FCA5A5" opacity="0.8" />
    {/* Eyes */}
    <circle cx="80" cy="82" r="8" fill="#1E293B" />
    <circle cx="77" cy="79" r="3" fill="#FFFFFF" />
    <circle cx="120" cy="82" r="8" fill="#1E293B" />
    <circle cx="117" cy="79" r="3" fill="#FFFFFF" />
    {/* Nose & Mouth */}
    <polygon points="96,92 104,92 100,97" fill="#F43F5E" />
    <path d="M94 100 Q100 106 100 97 Q100 106 106 100" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Whiskers */}
    <line x1="50" y1="88" x2="70" y2="92" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="48" y1="98" x2="70" y2="98" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="150" y1="88" x2="130" y2="92" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="152" y1="98" x2="130" y2="98" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 🐶 Cute Cartoon Dog
export const CartoonDog: React.FC<SvgProps> = ({ className = '', size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="100" cy="140" rx="55" ry="42" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="4" />
    <circle cx="100" cy="88" r="50" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="4" />
    {/* Floppy Ears */}
    <ellipse cx="50" cy="85" rx="18" ry="36" transform="rotate(-15 50 85)" fill="#64748B" />
    <ellipse cx="150" cy="85" rx="18" ry="36" transform="rotate(15 150 85)" fill="#64748B" />
    {/* Spot on Eye */}
    <ellipse cx="120" cy="82" rx="18" ry="16" fill="#CBD5E1" opacity="0.6" />
    {/* Eyes */}
    <circle cx="80" cy="84" r="8" fill="#0F172A" />
    <circle cx="77" cy="81" r="3" fill="#FFFFFF" />
    <circle cx="120" cy="84" r="8" fill="#0F172A" />
    <circle cx="117" cy="81" r="3" fill="#FFFFFF" />
    {/* Big cute Dog Nose */}
    <ellipse cx="100" cy="100" rx="14" ry="10" fill="#1E293B" />
    <ellipse cx="98" cy="98" rx="4" ry="2.5" fill="#FFFFFF" />
    {/* Mouth with Pink Tongue */}
    <path d="M92 110 Q100 118 100 108 Q100 118 108 110" stroke="#475569" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M96 112 Q100 128 104 112 Z" fill="#F43F5E" />
  </svg>
);

// ☀️ Smiling Sunny Illustration
export const CartoonSun: React.FC<SvgProps> = ({ className = '', size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Rays */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <rect
        key={deg}
        x="93"
        y="12"
        width="14"
        height="32"
        rx="7"
        fill="#FBBF24"
        transform={`rotate(${deg} 100 100)`}
      />
    ))}
    {/* Sun Body */}
    <circle cx="100" cy="100" r="58" fill="#FDE047" stroke="#F59E0B" strokeWidth="5" />
    {/* Cheeks */}
    <circle cx="72" cy="115" r="10" fill="#FCA5A5" opacity="0.8" />
    <circle cx="128" cy="115" r="10" fill="#FCA5A5" opacity="0.8" />
    {/* Eyes */}
    <circle cx="80" cy="92" r="8" fill="#78350F" />
    <circle cx="77" cy="89" r="3" fill="#FFFFFF" />
    <circle cx="120" cy="92" r="8" fill="#78350F" />
    <circle cx="117" cy="89" r="3" fill="#FFFFFF" />
    {/* Big smile */}
    <path d="M84 108 Q100 128 116 108" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" fill="none" />
  </svg>
);

// 🐍 Cute Snake for Phonics /s/
export const CartoonSnake: React.FC<SvgProps> = ({ className = '', size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* S-shaped body */}
    <path
      d="M140 40 C170 50, 160 90, 120 95 C80 100, 60 130, 80 160 C100 180, 140 180, 160 165 C170 155, 175 140, 165 135"
      stroke="#10B981"
      strokeWidth="24"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M140 40 C170 50, 160 90, 120 95 C80 100, 60 130, 80 160 C100 180, 140 180, 160 165 C170 155, 175 140, 165 135"
      stroke="#34D399"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />
    {/* Head */}
    <ellipse cx="145" cy="40" rx="20" ry="16" fill="#059669" />
    {/* Cheeks & Eyes */}
    <circle cx="140" cy="36" r="4.5" fill="#FFFFFF" />
    <circle cx="141" cy="36" r="2.5" fill="#064E3B" />
    <circle cx="152" cy="36" r="4.5" fill="#FFFFFF" />
    <circle cx="153" cy="36" r="2.5" fill="#064E3B" />
    {/* Tongue */}
    <path d="M165 40 L180 40 L188 35 M180 40 L188 45" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 🍎 Cute Apple for Phonics /a/
export const CartoonApple: React.FC<SvgProps> = ({ className = '', size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Stem & Leaf */}
    <path d="M100 45 C102 25, 115 15, 125 15" stroke="#78350F" strokeWidth="6" strokeLinecap="round" fill="none" />
    <ellipse cx="130" cy="30" rx="18" ry="10" transform="rotate(-25 130 30)" fill="#10B981" />
    {/* Apple Body */}
    <path
      d="M100 55 C70 45, 45 65, 45 105 C45 150, 75 175, 95 180 C98 181, 102 181, 105 180 C125 175, 155 150, 155 105 C155 65, 130 45, 100 55 Z"
      fill="#EF4444"
      stroke="#B91C1C"
      strokeWidth="5"
    />
    {/* Gloss highlight */}
    <ellipse cx="75" cy="85" rx="8" ry="24" transform="rotate(-20 75 85)" fill="#F87171" opacity="0.6" />
    {/* Face */}
    <circle cx="85" cy="110" r="5" fill="#7F1D1D" />
    <circle cx="115" cy="110" r="5" fill="#7F1D1D" />
    <circle cx="75" cy="120" r="6" fill="#FCA5A5" />
    <circle cx="125" cy="120" r="6" fill="#FCA5A5" />
    <path d="M94 122 Q100 130 106 122" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);
