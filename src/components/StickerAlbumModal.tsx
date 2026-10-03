import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { audioService } from '../services/audioService';
import { KidButton } from './KidButton';
import { Star, Sparkles, X, Award, CheckCircle2, Lock, Volume2 } from 'lucide-react';
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
  {
    id: 'leo',
    name: 'Sư Tử Leo Vui Vẻ',
    enTitle: 'Leo the Lion',
    cost: 0,
    imageUrl: '/assets/ehon/leo.jpg',
    sayingEn: 'Roar! I am Leo! You are doing awesome today!',
    sayingVi: 'Tớ là Sư tử Leo! Bé học tiếng Anh siêu đỉnh luôn!',
    rarity: 'common'
  },
  {
    id: 'sam',
    name: 'Mèo Cam Sam Ẻo Lả',
    enTitle: 'Sam the Cat',
    cost: 0,
    imageUrl: '/assets/ehon/cat.jpg',
    sayingEn: 'Meow! The cat sat on the soft mat!',
    sayingVi: 'Meo meo! Mèo Sam thích nằm ngủ trưa trên thảm êm!',
    rarity: 'common'
  },
  {
    id: 'ben',
    name: 'Chú Kiến Bé Ben',
    enTitle: 'Ben the Little Ant',
    cost: 5,
    imageUrl: '/assets/ehon/ant.jpg',
    sayingEn: 'An ant on a warm sunny leaf!',
    sayingVi: 'Chú kiến Ben bé nhỏ nhưng rất chăm chỉ!',
    rarity: 'common'
  },
  {
    id: 'pip',
    name: 'Chú Cún Nâu Pip',
    enTitle: 'Pip the Puppy',
    cost: 5,
    imageUrl: '/assets/ehon/dog.jpg',
    sayingEn: 'Woof woof! I love running in green grass!',
    sayingVi: 'Gâu gâu! Cún Pip thích chạy nhảy trên thảm cỏ xanh!',
    rarity: 'common'
  },
  {
    id: 'henny',
    name: 'Cô Gà Mái Đỏ Henny',
    enTitle: 'Henny the Red Hen',
    cost: 5,
    imageUrl: '/assets/ehon/hen.jpg',
    sayingEn: 'Cluck cluck! The red hen pecks sweet corn!',
    sayingVi: 'Cục ta cục tác! Gà mái đỏ tìm hạt bắp vàng!',
    rarity: 'common'
  },
  {
    id: 'fish',
    name: 'Ba Chú Cá Cầu Vồng',
    enTitle: 'Three Rainbow Fish',
    cost: 10,
    imageUrl: '/assets/ehon/three_fish.jpg',
    sayingEn: 'Splish splash! Swim together in blue sea!',
    sayingVi: 'Ba chú cá bơi lội tung tăng dưới làn nước biếc!',
    rarity: 'rare'
  },
  {
    id: 'queenie',
    name: 'Nữ Hoàng Hiền Từ Queenie',
    enTitle: 'Queenie the Gentle Queen',
    cost: 10,
    imageUrl: '/assets/ehon/queen_park.jpg',
    sayingEn: 'Welcome to the royal garden of books!',
    sayingVi: 'Chào mừng bé đến với khu vườn truyện tranh diệu kỳ!',
    rarity: 'rare'
  },
  {
    id: 'sunny',
    name: 'Mặt Trời Ban Mai Sunny',
    enTitle: 'Sunny the Golden Sun',
    cost: 10,
    imageUrl: '/assets/ehon/sun.jpg',
    sayingEn: 'Rise and shine! S is for sweet warm Sun!',
    sayingVi: 'Mặt trời ban mai tỏa ánh nắng vàng ấm áp!',
    rarity: 'rare'
  },
  {
    id: 'ship',
    name: 'Con Tàu Đại Dương Ship',
    enTitle: 'The Brave Ocean Ship',
    cost: 15,
    imageUrl: '/assets/ehon/ship.jpg',
    sayingEn: 'Sail the ocean to the seven Phonics islands!',
    sayingVi: 'Căng buồm vượt sóng tới 7 quần đảo Phonics!',
    rarity: 'epic'
  },
  {
    id: 'kite',
    name: 'Cánh Diều No Gió Kite',
    enTitle: 'The Soaring Windy Kite',
    cost: 15,
    imageUrl: '/assets/ehon/kite.jpg',
    sayingEn: 'Fly high in the sky with cool breeze!',
    sayingVi: 'Cánh diều ngũ sắc bay vút lên bầu trời cao!',
    rarity: 'epic'
  },
  {
    id: 'apple',
    name: 'Quả Táo Đỏ Mọng Apple',
    enTitle: 'Sweet Red Apple',
    cost: 20,
    imageUrl: '/assets/ehon/apple.jpg',
    sayingEn: 'Crunchy sweet red apple, full of vitamins!',
    sayingVi: 'Quả táo đỏ giòn ngọt mát lành bổ dưỡng!',
    rarity: 'epic'
  },
  {
    id: 'rainbow',
    name: 'Cầu Vồng 7 Quần Đảo',
    enTitle: 'Grand Phonics Archipelago',
    cost: 25,
    imageUrl: '/assets/ehon/archipelago.jpg',
    sayingEn: 'You are a true Phonics Master of all 42 sounds!',
    sayingVi: 'Bé là Nhà Thám Hiểm xuất sắc chinh phục 42 âm vị!',
    rarity: 'legendary'
  },
];

interface StickerAlbumModalProps {
  onClose: () => void;
  onStarsUpdated?: () => void;
}

export const StickerAlbumModal: React.FC<StickerAlbumModalProps> = ({ onClose, onStarsUpdated }) => {
  const [profile, setProfile] = useState(() => storageService.getProfile());
  const [selectedSticker, setSelectedSticker] = useState<StickerInfo | null>(null);

  const unlockedList = profile.unlockedStickers || ['leo', 'sam'];

  const handleUnlock = (sticker: StickerInfo) => {
    if (profile.stars < sticker.cost) {
      audioService.playGentleTryAgain();
      return;
    }

    const success = storageService.unlockSticker(sticker.id, sticker.cost);
    if (success) {
      audioService.playSuccessJingle();
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore
      }
      setProfile(storageService.getProfile());
      setSelectedSticker(sticker);
      audioService.speakEnglish(sticker.sayingEn, 0.85);
      onStarsUpdated?.();
    }
  };

  const handleTapSticker = (sticker: StickerInfo, isUnlocked: boolean) => {
    audioService.playPopSound(500);
    setSelectedSticker(sticker);
    if (isUnlocked) {
      audioService.speakEnglish(sticker.sayingEn, 0.85);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 animate-fadeIn">
      <div className="bg-[#FFFDF9] rounded-3xl border-4 md:border-6 border-amber-300 shadow-2xl max-w-4xl w-full h-[90vh] max-h-[720px] flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 border-b-2 border-amber-300 shrink-0">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-amber-400 rounded-xl text-amber-950 shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-black text-amber-950 leading-tight">
                Sổ Dán Sticker Thưởng Của Bé 🎨
              </h2>
              <p className="text-[10px] sm:text-xs font-bold text-amber-800">
                Dùng sao ⭐ bé kiếm được để đổi các nhân vật Ehon đáng yêu nhé!
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Star Balance Chip */}
            <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-2xl border-2 border-amber-300 shadow-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500 animate-bounce" />
              <span className="font-black text-amber-950 text-sm">{profile.stars}</span>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-black active:scale-90 transition-transform cursor-pointer shadow-xs"
              title="Đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sticker Grid Area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {STICKERS.map((sticker) => {
              const isUnlocked = unlockedList.includes(sticker.id);
              const canAfford = profile.stars >= sticker.cost;

              return (
                <div
                  key={sticker.id}
                  onClick={() => handleTapSticker(sticker, isUnlocked)}
                  className={`relative rounded-2xl p-2.5 border-3 transition-all duration-300 flex flex-col items-center justify-between cursor-pointer shadow-md group ${
                    isUnlocked
                      ? 'bg-white border-amber-300 hover:border-amber-500 hover:scale-102 hover:shadow-lg'
                      : 'bg-amber-50/80 border-dashed border-amber-300 hover:bg-amber-100/70'
                  }`}
                >
                  {/* Sticker Picture / Silhouette */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2 bg-amber-100 flex items-center justify-center border border-amber-200">
                    <img
                      src={sticker.imageUrl}
                      alt={sticker.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isUnlocked
                          ? 'group-hover:scale-108'
                          : 'filter grayscale opacity-30 scale-95'
                      }`}
                    />

                    {/* Locked Overlay */}
                    {!isUnlocked && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-900/30 backdrop-blur-[1px]">
                        <div className="p-2 bg-white/90 rounded-full shadow-md text-amber-900 mb-1">
                          <Lock className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black text-white bg-amber-950/80 px-2 py-0.5 rounded-full shadow-xs">
                          {sticker.cost} ⭐
                        </span>
                      </div>
                    )}

                    {/* Unlocked Sparkle Badge */}
                    {isUnlocked && (
                      <div className="absolute top-1.5 right-1.5 p-1 bg-amber-400 rounded-full text-amber-950 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Title & Action */}
                  <div className="w-full text-center">
                    <span className="text-xs sm:text-sm font-black text-amber-950 block truncate">
                      {sticker.name}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 block truncate">
                      {sticker.enTitle}
                    </span>

                    {/* Action Button */}
                    {!isUnlocked ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUnlock(sticker);
                        }}
                        disabled={!canAfford}
                        className={`mt-1.5 w-full py-1 px-2 rounded-xl text-[11px] font-black flex items-center justify-center space-x-1 transition-all ${
                          canAfford
                            ? 'bg-amber-400 hover:bg-amber-500 text-amber-950 shadow-xs active:scale-95 cursor-pointer'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-60'
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Đổi {sticker.cost} ⭐</span>
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          audioService.speakEnglish(sticker.sayingEn, 0.85);
                        }}
                        className="mt-1.5 w-full py-1 px-2 rounded-xl text-[10px] font-black bg-sky-100 hover:bg-sky-200 text-sky-950 flex items-center justify-center space-x-1 cursor-pointer transition-colors shadow-xs"
                      >
                        <Volume2 className="w-3 h-3 text-sky-700" />
                        <span>Nghe Tiếng 🔊</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Sticker Detail Drawer */}
        {selectedSticker && (
          <div className="px-4 py-2.5 bg-amber-100/90 border-t-2 border-amber-300 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 bg-white shadow-xs">
                <img src={selectedSticker.imageUrl} alt={selectedSticker.name} className="w-full h-full object-cover" />
              </div>
              <div className="truncate">
                <div className="text-xs sm:text-sm font-black text-amber-950 flex items-center space-x-1.5 truncate">
                  <span>{selectedSticker.name}</span>
                  <span className="text-[10px] text-amber-700">({selectedSticker.enTitle})</span>
                </div>
                <p className="text-[11px] font-bold text-amber-800 truncate">
                  "{selectedSticker.sayingVi}"
                </p>
              </div>
            </div>

            <KidButton
              variant="secondary"
              size="sm"
              onClick={() => audioService.speakEnglish(selectedSticker.sayingEn, 0.85)}
              className="py-1.5 px-3 text-xs shrink-0"
              title="Nghe câu nói tiếng Anh"
            >
              <Volume2 className="w-3.5 h-3.5 mr-1" />
              <span>Nghe 🔊</span>
            </KidButton>
          </div>
        )}

      </div>
    </div>
  );
};
