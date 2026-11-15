import React, { useEffect, useRef, useState } from 'react';
import { storageService } from '../services/storageService';
import { audioService } from '../services/audioService';
import { Award, CheckCircle2, ChevronLeft, ChevronRight, Lock, Sparkles, Star, Volume2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface StickerInfo {
  id: string;
  name: string;
  enTitle: string;
  cost: number;
  imageUrl: string;
  sayingEn: string;
  sayingVi: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const STICKERS: StickerInfo[] = [
  { id: 'leo', name: 'Sư Tử Leo Vui Vẻ', enTitle: 'Leo the Lion', cost: 0, imageUrl: '/assets/ehon/leo.jpg', sayingEn: 'Roar! I am Leo! You are doing awesome today!', sayingVi: 'Tớ là Sư tử Leo!', rarity: 'common' },
  { id: 'sam', name: 'Mèo Cam Sam', enTitle: 'Sam the Cat', cost: 0, imageUrl: '/assets/ehon/cat.jpg', sayingEn: 'Meow! The cat sat on the soft mat!', sayingVi: 'Mèo Sam nằm thảm êm!', rarity: 'common' },
  { id: 'ben', name: 'Chú Kiến Bé Ben', enTitle: 'Ben the Little Ant', cost: 5, imageUrl: '/assets/ehon/ant.jpg', sayingEn: 'An ant on a warm sunny leaf!', sayingVi: 'Kiến Ben chăm chỉ!', rarity: 'common' },
  { id: 'pip', name: 'Chú Cún Nâu Pip', enTitle: 'Pip the Puppy', cost: 5, imageUrl: '/assets/ehon/dog.jpg', sayingEn: 'Woof woof! I love running in green grass!', sayingVi: 'Cún Pip chạy trên cỏ!', rarity: 'common' },
  { id: 'henny', name: 'Cô Gà Mái Đỏ', enTitle: 'Henny the Red Hen', cost: 5, imageUrl: '/assets/ehon/hen.jpg', sayingEn: 'Cluck cluck! The red hen pecks sweet corn!', sayingVi: 'Gà mái đỏ nhặt bắp!', rarity: 'common' },
  { id: 'fish', name: 'Ba Chú Cá Cầu Vồng', enTitle: 'Three Rainbow Fish', cost: 10, imageUrl: '/assets/ehon/three_fish.jpg', sayingEn: 'Splish splash! Swim together in blue sea!', sayingVi: 'Ba chú cá bơi lội!', rarity: 'rare' },
  { id: 'queenie', name: 'Nữ Hoàng Queenie', enTitle: 'Queenie the Gentle Queen', cost: 10, imageUrl: '/assets/ehon/queen_park.jpg', sayingEn: 'Welcome to the royal garden of books!', sayingVi: 'Khu vườn truyện tranh!', rarity: 'rare' },
  { id: 'sunny', name: 'Mặt Trời Sunny', enTitle: 'Sunny the Golden Sun', cost: 10, imageUrl: '/assets/ehon/sun.jpg', sayingEn: 'Rise and shine! S is for sweet warm Sun!', sayingVi: 'Mặt trời ban mai!', rarity: 'rare' },
  { id: 'ship', name: 'Tàu Đại Dương Ship', enTitle: 'The Brave Ocean Ship', cost: 15, imageUrl: '/assets/ehon/ship.jpg', sayingEn: 'Sail the ocean to the seven Phonics islands!', sayingVi: 'Con tàu ra khơi!', rarity: 'epic' },
  { id: 'kite', name: 'Cánh Diều Kite', enTitle: 'The Soaring Windy Kite', cost: 15, imageUrl: '/assets/ehon/kite.jpg', sayingEn: 'Fly high in the sky with cool breeze!', sayingVi: 'Cánh diều bay cao!', rarity: 'epic' },
  { id: 'apple', name: 'Quả Táo Đỏ Apple', enTitle: 'Sweet Red Apple', cost: 20, imageUrl: '/assets/ehon/apple.jpg', sayingEn: 'Crunchy sweet red apple, full of vitamins!', sayingVi: 'Quả táo đỏ giòn ngọt!', rarity: 'epic' },
  { id: 'rainbow', name: 'Cầu Vồng 7 Đảo', enTitle: 'Grand Phonics Archipelago', cost: 25, imageUrl: '/assets/ehon/archipelago.jpg', sayingEn: 'You are a true Phonics Master of all 42 sounds!', sayingVi: 'Chinh phục 42 âm vị!', rarity: 'legendary' },
];

interface StickerAlbumModalProps {
  onClose: () => void;
  onStarsUpdated?: () => void;
}

export const StickerAlbumModal: React.FC<StickerAlbumModalProps> = ({ onClose, onStarsUpdated }) => {
  const [profile, setProfile] = useState(() => storageService.getProfile());
  const [stickerIdx, setStickerIdx] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const unlockedList = profile.unlockedStickers || ['leo', 'sam'];
  const current = STICKERS[stickerIdx] || STICKERS[0];
  const isUnlocked = unlockedList.includes(current.id);
  const canAfford = profile.stars >= current.cost;

  const stepSticker = (delta: number) => {
    audioService.playPopSound(delta > 0 ? 520 : 460);
    setStickerIdx((prev) => (prev + delta + STICKERS.length) % STICKERS.length);
  };

  const handleUnlock = (sticker: StickerInfo) => {
    if (profile.stars < sticker.cost) {
      audioService.playGentleTryAgain();
      return;
    }
    if (storageService.unlockSticker(sticker.id, sticker.cost)) {
      audioService.playSuccessJingle();
      try {
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
      } catch {
        // Ignore
      }
      setProfile(storageService.getProfile());
      audioService.speakEnglish(sticker.sayingEn, 0.85);
      onStarsUpdated?.();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sổ dán Sticker thưởng"
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 animate-fadeIn"
    >
      <div className="bg-[#FFFDF9] rounded-3xl border-4 border-amber-300 shadow-2xl max-w-2xl w-full h-[90dvh] max-h-[680px] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 border-b-2 border-amber-300 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 bg-amber-400 rounded-xl text-amber-950 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-xl font-black text-amber-950 truncate">
              Sổ Dán Sticker ({stickerIdx + 1}/{STICKERS.length})
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-2xl border-2 border-amber-300">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span className="font-mono font-black text-amber-950 text-sm tabular-nums">{profile.stars}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng sổ dán"
              className="w-10 h-10 rounded-full bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center cursor-pointer active:scale-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Paged Sticker Spotlight */}
        <div
          onTouchStart={(e) => {
            touchStartXRef.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartXRef.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStartXRef.current;
            touchStartXRef.current = null;
            if (Math.abs(dx) > 40) stepSticker(dx < 0 ? 1 : -1);
          }}
          className="flex-1 min-h-0 p-3 sm:p-5 flex flex-col justify-between gap-2.5 overflow-hidden"
        >
          <div className="flex-1 min-h-0 flex items-center justify-between gap-2 sm:gap-4">
            <button
              type="button"
              onClick={() => stepSticker(-1)}
              aria-label="Sticker trước"
              className="w-11 h-11 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-950 flex items-center justify-center shrink-0 cursor-pointer active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 min-w-0 h-full flex flex-col items-center justify-center text-center gap-2">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-lg bg-amber-100 shrink-0">
                <img
                  src={current.imageUrl}
                  alt={current.name}
                  className={`w-full h-full object-cover ${!isUnlocked ? 'grayscale opacity-40' : ''}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/ehon/star.jpg';
                  }}
                />
                {!isUnlocked ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-950/35">
                    <div className="p-2.5 bg-white/95 rounded-full shadow text-amber-900 mb-1">
                      <Lock className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-white bg-amber-950/85 px-3 py-0.5 rounded-full">
                      {current.cost} ⭐
                    </span>
                  </div>
                ) : (
                  <div className="absolute top-2 right-2 p-1.5 bg-amber-400 rounded-full text-amber-950 shadow">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black text-amber-950 leading-tight">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-sky-800 italic truncate max-w-full">
                &ldquo;{current.sayingEn}&rdquo;
              </p>
            </div>

            <button
              type="button"
              onClick={() => stepSticker(1)}
              aria-label="Sticker tiếp theo"
              className="w-11 h-11 rounded-2xl bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-950 flex items-center justify-center shrink-0 cursor-pointer active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnail Quick-Jump Strip */}
          <div className="shrink-0 overflow-x-auto py-0.5">
            <div className="w-max mx-auto flex items-center gap-1.5 px-1">
              {STICKERS.map((s, idx) => {
                const sUnlocked = unlockedList.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      audioService.playPopSound(500);
                      setStickerIdx(idx);
                    }}
                    aria-label={s.name}
                    className={`w-11 h-11 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer ${
                      idx === stickerIdx ? 'border-amber-500 ring-2 ring-amber-400 scale-105' : 'border-amber-200 opacity-75'
                    }`}
                  >
                    <img
                      src={s.imageUrl}
                      alt={s.name}
                      className={`w-full h-full object-cover ${!sUnlocked ? 'grayscale opacity-50' : ''}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Giant Action CTA */}
          {isUnlocked ? (
            <button
              type="button"
              onClick={() => audioService.speakEnglish(current.sayingEn, 0.85)}
              className="w-full min-h-[52px] rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-black text-base inline-flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0 shadow-md"
            >
              <Volume2 className="w-5 h-5" />
              <span>Nghe Câu Nói</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handleUnlock(current)}
              disabled={!canAfford}
              className={`w-full min-h-[52px] rounded-2xl font-black text-base inline-flex items-center justify-center gap-2 shrink-0 shadow-md ${
                canAfford
                  ? 'bg-amber-400 hover:bg-amber-300 text-amber-950 cursor-pointer active:scale-95'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>Đổi {current.cost} Sao ⭐</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
