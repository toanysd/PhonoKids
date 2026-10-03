import React from 'react';
import { audioService } from '../services/audioService';

interface KidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'purple';
  size?: 'sm' | 'md' | 'lg' | 'giant';
  soundPitch?: number;
  children: React.ReactNode;
}

export const KidButton: React.FC<KidButtonProps> = ({
  variant = 'primary',
  size = 'md',
  soundPitch = 480,
  children,
  onClick,
  className = '',
  disabled,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      audioService.playPopSound(soundPitch);
      onClick?.(e);
    }
  };

  const variantStyles = {
    primary: 'bg-amber-400 border-amber-500 text-amber-950 active:bg-amber-500',
    secondary: 'bg-sky-400 border-sky-500 text-sky-950 active:bg-sky-500',
    accent: 'bg-rose-400 border-rose-500 text-rose-950 active:bg-rose-500',
    success: 'bg-emerald-400 border-emerald-500 text-emerald-950 active:bg-emerald-500',
    warning: 'bg-orange-400 border-orange-500 text-orange-950 active:bg-orange-500',
    purple: 'bg-purple-400 border-purple-500 text-purple-950 active:bg-purple-500',
  }[variant];

  const sizeStyles = {
    sm: 'text-base py-2 px-4 rounded-2xl border-b-4',
    md: 'text-xl py-3 px-6 rounded-3xl border-b-6 font-bold',
    lg: 'text-2xl py-4 px-8 rounded-3xl border-b-8 font-extrabold',
    giant: 'text-3xl py-6 px-10 rounded-full border-b-8 font-black',
  }[size];

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center select-none cursor-pointer transition-all duration-100 ease-out transform active:translate-y-1 active:border-b-2 disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
