import { DecodableStory } from '../types/story';

export const DECODABLE_STORIES: DecodableStory[] = [
  // ================= STAGE 1: 3-4 Tuổi (Level 1) =================
  {
    id: 'story_cat_sat',
    title: 'The Cat Sat',
    level: 1,
    levelName: 'Level 1: Nhóm âm 1 & 2',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐱',
    summaryVi: 'Câu chuyện chú mèo mướp lười biếng ngồi sưởi nắng trên chiếc thảm êm.',
    targetPhonics: ['s', 'a', 't', 'c', 'p'],
    sightWords: ['the', 'on'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'The cat sat.',
        vietnameseMeaning: 'Chú mèo ngồi yên.',
        backgroundTheme: 'bg-amber-100',
        sceneryEmoji: '🏡',
        wordsTiming: [
          { word: 'The', cleanWord: 'the', startMs: 0, endMs: 400 },
          { word: 'cat', cleanWord: 'cat', startMs: 420, endMs: 900 },
          { word: 'sat.', cleanWord: 'sat', startMs: 950, endMs: 1500 }
        ],
        hotspots: [
          {
            id: 'hs_cat',
            label: 'Cat',
            xPercent: 45,
            yPercent: 48,
            emoji: '🐱',
            soundName: 'meow',
            speechText: 'Cat! Meow!',
            animationType: 'jump'
          },
          {
            id: 'hs_flower',
            label: 'Flower',
            xPercent: 80,
            yPercent: 65,
            emoji: '🌸',
            soundName: 'sparkle',
            speechText: 'A pink flower!',
            animationType: 'spin'
          }
        ],
        speakingTargetWord: 'cat',
        comprehension: {
          questionText: 'Who sat down?',
          questionAudioText: 'Who sat down? Can you tap the right friend?',
          options: [
            { id: 'opt_cat', text: 'Cat', emoji: '🐱', isCorrect: true },
            { id: 'opt_dog', text: 'Dog', emoji: '🐶', isCorrect: false }
          ]
        }
      },
      {
        pageNumber: 2,
        sentence: 'The cat sat on a mat.',
        vietnameseMeaning: 'Chú mèo ngồi trên một chiếc thảm.',
        backgroundTheme: 'bg-emerald-100',
        sceneryEmoji: '🛋️',
        wordsTiming: [
          { word: 'The', cleanWord: 'the', startMs: 0, endMs: 350 },
          { word: 'cat', cleanWord: 'cat', startMs: 380, endMs: 780 },
          { word: 'sat', cleanWord: 'sat', startMs: 820, endMs: 1200 },
          { word: 'on', cleanWord: 'on', startMs: 1250, endMs: 1500 },
          { word: 'a', cleanWord: 'a', startMs: 1520, endMs: 1700 },
          { word: 'mat.', cleanWord: 'mat', startMs: 1750, endMs: 2300 }
        ],
        hotspots: [
          {
            id: 'hs_mat',
            label: 'Mat',
            xPercent: 50,
            yPercent: 75,
            emoji: '🧶',
            soundName: 'pop',
            speechText: 'A soft mat!',
            animationType: 'shake'
          },
          {
            id: 'hs_sun',
            label: 'Sun',
            xPercent: 15,
            yPercent: 20,
            emoji: '☀️',
            soundName: 'sun_chime',
            speechText: 'Warm sunny day!',
            animationType: 'spin'
          }
        ],
        speakingTargetWord: 'mat',
        comprehension: {
          questionText: 'Where is the cat sitting?',
          questionAudioText: 'Where is the cat sitting?',
          options: [
            { id: 'opt_mat', text: 'On a mat', emoji: '🧶', isCorrect: true },
            { id: 'opt_box', text: 'In a box', emoji: '📦', isCorrect: false }
          ]
        }
      },
      {
        pageNumber: 3,
        sentence: 'The cat has a nap.',
        vietnameseMeaning: 'Chú mèo đánh một giấc ngủ trưa thật ngon.',
        backgroundTheme: 'bg-indigo-100',
        sceneryEmoji: '🌙',
        wordsTiming: [
          { word: 'The', cleanWord: 'the', startMs: 0, endMs: 350 },
          { word: 'cat', cleanWord: 'cat', startMs: 380, endMs: 750 },
          { word: 'has', cleanWord: 'has', startMs: 800, endMs: 1150 },
          { word: 'a', cleanWord: 'a', startMs: 1200, endMs: 1380 },
          { word: 'nap.', cleanWord: 'nap', startMs: 1420, endMs: 2000 }
        ],
        hotspots: [
          {
            id: 'hs_cat_sleep',
            label: 'Sleeping Cat',
            xPercent: 50,
            yPercent: 50,
            emoji: '😴',
            soundName: 'snore_cute',
            speechText: 'Shhh... cat is sleeping!',
            animationType: 'heart'
          }
        ],
        speakingTargetWord: 'nap'
      }
    ]
  },
  {
    id: 'story_sam_ant',
    title: 'Sam and the Ant',
    level: 1,
    levelName: 'Level 1: Nhóm âm 1 (s, a, t, i, p, n)',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐜',
    summaryVi: 'Bạn Sam gặp một chú kiến nhỏ đang đi dạo trên chảo rán.',
    targetPhonics: ['s', 'a', 't', 'p', 'n'],
    sightWords: ['and', 'in'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'Sam has a pan.',
        vietnameseMeaning: 'Bạn Sam có một chiếc chảo.',
        backgroundTheme: 'bg-rose-100',
        sceneryEmoji: '🍳',
        wordsTiming: [
          { word: 'Sam', cleanWord: 'sam', startMs: 0, endMs: 450 },
          { word: 'has', cleanWord: 'has', startMs: 500, endMs: 850 },
          { word: 'a', cleanWord: 'a', startMs: 900, endMs: 1050 },
          { word: 'pan.', cleanWord: 'pan', startMs: 1100, endMs: 1650 }
        ],
        hotspots: [
          {
            id: 'hs_sam',
            label: 'Sam',
            xPercent: 30,
            yPercent: 45,
            emoji: '👦',
            soundName: 'hello',
            speechText: 'Hi, I am Sam!',
            animationType: 'jump'
          },
          {
            id: 'hs_pan',
            label: 'Pan',
            xPercent: 65,
            yPercent: 55,
            emoji: '🍳',
            soundName: 'ting',
            speechText: 'A shiny pan!',
            animationType: 'spin'
          }
        ],
        speakingTargetWord: 'pan'
      },
      {
        pageNumber: 2,
        sentence: 'An ant is in the pan!',
        vietnameseMeaning: 'Một chú kiến nhỏ đang ở trong chảo kìa!',
        backgroundTheme: 'bg-yellow-100',
        sceneryEmoji: '🐜',
        wordsTiming: [
          { word: 'An', cleanWord: 'an', startMs: 0, endMs: 300 },
          { word: 'ant', cleanWord: 'ant', startMs: 330, endMs: 700 },
          { word: 'is', cleanWord: 'is', startMs: 730, endMs: 950 },
          { word: 'in', cleanWord: 'in', startMs: 980, endMs: 1200 },
          { word: 'the', cleanWord: 'the', startMs: 1230, endMs: 1450 },
          { word: 'pan!', cleanWord: 'pan', startMs: 1500, endMs: 2100 }
        ],
        hotspots: [
          {
            id: 'hs_ant',
            label: 'Tiny Ant',
            xPercent: 60,
            yPercent: 50,
            emoji: '🐜',
            soundName: 'chirp',
            speechText: 'Hello Sam!',
            animationType: 'jump'
          }
        ],
        speakingTargetWord: 'ant',
        comprehension: {
          questionText: 'Who is in the pan?',
          questionAudioText: 'Who is in the pan? Tap the little bug!',
          options: [
            { id: 'opt_ant', text: 'An Ant', emoji: '🐜', isCorrect: true },
            { id: 'opt_fish', text: 'A Fish', emoji: '🐟', isCorrect: false }
          ]
        }
      },
      {
        pageNumber: 3,
        sentence: 'Tap, tap! Run, ant, run!',
        vietnameseMeaning: 'Gõ nhẹ gõ nhẹ! Chạy đi chú kiến nhỏ ơi!',
        backgroundTheme: 'bg-sky-100',
        sceneryEmoji: '🏃',
        wordsTiming: [
          { word: 'Tap,', cleanWord: 'tap', startMs: 0, endMs: 400 },
          { word: 'tap!', cleanWord: 'tap', startMs: 450, endMs: 850 },
          { word: 'Run,', cleanWord: 'run', startMs: 900, endMs: 1300 },
          { word: 'ant,', cleanWord: 'ant', startMs: 1350, endMs: 1750 },
          { word: 'run!', cleanWord: 'run', startMs: 1800, endMs: 2300 }
        ],
        hotspots: [
          {
            id: 'hs_ant_run',
            label: 'Running Ant',
            xPercent: 70,
            yPercent: 60,
            emoji: '🐜💨',
            soundName: 'run_steps',
            speechText: 'Bye bye Sam!',
            animationType: 'jump'
          }
        ],
        speakingTargetWord: 'tap'
      }
    ]
  },

  // ================= STAGE 2: 4-5 Tuổi (Level 2) =================
  {
    id: 'story_red_hen',
    title: 'The Red Hen',
    level: 2,
    levelName: 'Level 2: Nhóm âm 2 & 3',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🐔',
    summaryVi: 'Cô gà mái đỏ đi dạo tìm hạt ngô ngon lành trên nông trại.',
    targetPhonics: ['h', 'e', 'n', 'r', 'd', 'b', 'o'],
    sightWords: ['the', 'is', 'big'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'The hen is red.',
        vietnameseMeaning: 'Cô gà mái có màu lông đỏ thắm.',
        backgroundTheme: 'bg-orange-100',
        sceneryEmoji: '🌾',
        wordsTiming: [
          { word: 'The', cleanWord: 'the', startMs: 0, endMs: 350 },
          { word: 'hen', cleanWord: 'hen', startMs: 380, endMs: 800 },
          { word: 'is', cleanWord: 'is', startMs: 850, endMs: 1100 },
          { word: 'red.', cleanWord: 'red', startMs: 1150, endMs: 1700 }
        ],
        hotspots: [
          {
            id: 'hs_hen',
            label: 'Hen',
            xPercent: 45,
            yPercent: 50,
            emoji: '🐔',
            soundName: 'cluck',
            speechText: 'Cluck cluck! I am red!',
            animationType: 'jump'
          }
        ],
        speakingTargetWord: 'hen'
      },
      {
        pageNumber: 2,
        sentence: 'The big dog ran to the hen.',
        vietnameseMeaning: 'Chú chó to lớn chạy lại gần cô gà mái.',
        backgroundTheme: 'bg-lime-100',
        sceneryEmoji: '🐕',
        wordsTiming: [
          { word: 'The', cleanWord: 'the', startMs: 0, endMs: 300 },
          { word: 'big', cleanWord: 'big', startMs: 320, endMs: 650 },
          { word: 'dog', cleanWord: 'dog', startMs: 700, endMs: 1100 },
          { word: 'ran', cleanWord: 'ran', startMs: 1150, endMs: 1500 },
          { word: 'to', cleanWord: 'to', startMs: 1530, endMs: 1750 },
          { word: 'the', cleanWord: 'the', startMs: 1780, endMs: 2000 },
          { word: 'hen.', cleanWord: 'hen', startMs: 2050, endMs: 2600 }
        ],
        hotspots: [
          {
            id: 'hs_dog',
            label: 'Dog',
            xPercent: 30,
            yPercent: 50,
            emoji: '🐶',
            soundName: 'bark',
            speechText: 'Woof woof! Let us play!',
            animationType: 'jump'
          }
        ],
        speakingTargetWord: 'dog'
      }
    ]
  },

  // ================= STAGE 3: 5-6 Tuổi (Level 3 - Tiền Tiểu Học) =================
  {
    id: 'story_ship_fog',
    title: 'The Big Ship in the Fog',
    level: 3,
    levelName: 'Level 3: Phụ âm ghép & Nguyên âm đôi (sh, ch, th, ee, oa)',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '🚢',
    summaryVi: 'Chuyến hải trình phiêu lưu của con tàu lớn vượt qua màn sương mù mờ ảo.',
    targetPhonics: ['sh', 'ch', 'th', 'ee', 'oa', 'ng'],
    sightWords: ['see', 'with', 'they'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'A big ship sails in the sea.',
        vietnameseMeaning: 'Một con tàu lớn giương buồm trên biển xanh.',
        backgroundTheme: 'bg-cyan-100',
        sceneryEmoji: '🌊',
        wordsTiming: [
          { word: 'A', cleanWord: 'a', startMs: 0, endMs: 250 },
          { word: 'big', cleanWord: 'big', startMs: 280, endMs: 650 },
          { word: 'ship', cleanWord: 'ship', startMs: 700, endMs: 1100 },
          { word: 'sails', cleanWord: 'sails', startMs: 1150, endMs: 1600 },
          { word: 'in', cleanWord: 'in', startMs: 1650, endMs: 1850 },
          { word: 'the', cleanWord: 'the', startMs: 1900, endMs: 2100 },
          { word: 'sea.', cleanWord: 'sea', startMs: 2150, endMs: 2700 }
        ],
        hotspots: [
          {
            id: 'hs_ship',
            label: 'Ship',
            xPercent: 50,
            yPercent: 50,
            emoji: '🚢',
            soundName: 'ship_horn',
            speechText: 'Toot toot! Big ship sailing!',
            animationType: 'jump'
          }
        ],
        speakingTargetWord: 'ship',
        comprehension: {
          questionText: 'What is sailing on the sea?',
          questionAudioText: 'What is sailing on the sea?',
          options: [
            { id: 'opt_ship', text: 'A big ship', emoji: '🚢', isCorrect: true },
            { id: 'opt_car', text: 'A car', emoji: '🚗', isCorrect: false }
          ]
        }
      },
      {
        pageNumber: 2,
        sentence: 'They see three fish flash and swim.',
        vietnameseMeaning: 'Họ nhìn thấy ba chú cá lấp lánh tung tăng bơi lội.',
        backgroundTheme: 'bg-teal-100',
        sceneryEmoji: '🐠',
        wordsTiming: [
          { word: 'They', cleanWord: 'they', startMs: 0, endMs: 350 },
          { word: 'see', cleanWord: 'see', startMs: 380, endMs: 750 },
          { word: 'three', cleanWord: 'three', startMs: 800, endMs: 1200 },
          { word: 'fish', cleanWord: 'fish', startMs: 1250, endMs: 1650 },
          { word: 'flash', cleanWord: 'flash', startMs: 1700, endMs: 2100 },
          { word: 'and', cleanWord: 'and', startMs: 2150, endMs: 2350 },
          { word: 'swim.', cleanWord: 'swim', startMs: 2400, endMs: 2900 }
        ],
        hotspots: [
          {
            id: 'hs_fish',
            label: 'Three Fish',
            xPercent: 60,
            yPercent: 60,
            emoji: '🐠🐟🐡',
            soundName: 'splash',
            speechText: 'Splash! Three shiny fish!',
            animationType: 'spin'
          }
        ],
        speakingTargetWord: 'three'
      }
    ]
  },

  // ================= STAGE 4: 6-8 Tuổi (Level 4 - Tiểu Học Lớp 1-2) =================
  {
    id: 'story_queen_star',
    title: 'The Queen and the Star Coin',
    level: 4,
    levelName: 'Level 4: Vần phức & Luyện đọc lưu loát (qu, oi, ou, ar, er)',
    stage: 4,
    ageBand: '6 – 8 Tuổi (Tiểu học Lớp 1-2)',
    coverEmoji: '👑',
    summaryVi: 'Nữ hoàng tìm thấy đồng tiền ngôi sao lấp lánh trong khu vườn cổ tích.',
    targetPhonics: ['qu', 'oi', 'ou', 'ar', 'er', 'ue'],
    sightWords: ['found', 'under', 'shining'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'The queen went to the green park.',
        vietnameseMeaning: 'Nữ hoàng đi dạo vào công viên rợp bóng cây xanh.',
        backgroundTheme: 'bg-emerald-100',
        sceneryEmoji: '🏰',
        wordsTiming: [
          { word: 'The', cleanWord: 'the', startMs: 0, endMs: 250 },
          { word: 'queen', cleanWord: 'queen', startMs: 280, endMs: 750 },
          { word: 'went', cleanWord: 'went', startMs: 800, endMs: 1100 },
          { word: 'to', cleanWord: 'to', startMs: 1150, endMs: 1300 },
          { word: 'the', cleanWord: 'the', startMs: 1350, endMs: 1550 },
          { word: 'green', cleanWord: 'green', startMs: 1600, endMs: 2000 },
          { word: 'park.', cleanWord: 'park', startMs: 2050, endMs: 2600 }
        ],
        hotspots: [
          {
            id: 'hs_queen',
            label: 'Queen',
            xPercent: 40,
            yPercent: 45,
            emoji: '👑',
            soundName: 'fanfare',
            speechText: 'Greetings from the Queen!',
            animationType: 'jump'
          }
        ],
        speakingTargetWord: 'queen'
      },
      {
        pageNumber: 2,
        sentence: 'She found a bright star coin on the ground.',
        vietnameseMeaning: 'Bà tìm thấy một đồng xu ngôi sao sáng rực trên mặt đất.',
        backgroundTheme: 'bg-amber-100',
        sceneryEmoji: '🪙',
        wordsTiming: [
          { word: 'She', cleanWord: 'she', startMs: 0, endMs: 300 },
          { word: 'found', cleanWord: 'found', startMs: 320, endMs: 750 },
          { word: 'a', cleanWord: 'a', startMs: 800, endMs: 950 },
          { word: 'bright', cleanWord: 'bright', startMs: 1000, endMs: 1400 },
          { word: 'star', cleanWord: 'star', startMs: 1450, endMs: 1850 },
          { word: 'coin', cleanWord: 'coin', startMs: 1900, endMs: 2300 },
          { word: 'on', cleanWord: 'on', startMs: 2350, endMs: 2550 },
          { word: 'the', cleanWord: 'the', startMs: 2600, endMs: 2800 },
          { word: 'ground.', cleanWord: 'ground', startMs: 2850, endMs: 3500 }
        ],
        hotspots: [
          {
            id: 'hs_coin',
            label: 'Star Coin',
            xPercent: 65,
            yPercent: 65,
            emoji: '🪙✨',
            soundName: 'sparkle',
            speechText: 'A magic shiny coin!',
            animationType: 'spin'
          }
        ],
        speakingTargetWord: 'coin',
        comprehension: {
          questionText: 'What did the queen find on the ground?',
          questionAudioText: 'What did the queen find on the ground?',
          options: [
            { id: 'opt_coin', text: 'A star coin', emoji: '🪙', isCorrect: true },
            { id: 'opt_rock', text: 'A gray rock', emoji: '🪨', isCorrect: false }
          ]
        }
      }
    ]
  }
];
