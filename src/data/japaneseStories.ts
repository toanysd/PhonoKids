import { DecodableStory } from '../types/story';

export const JAPANESE_STORIES: DecodableStory[] = [
  {
    id: 'ja_story_neko',
    title: 'ねこ が すわった',
    level: 1,
    levelName: 'Cấp 1: Bảng Hiragana Khởi Đầu',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐱',
    coverVisual: {
      url: '/assets/ehon/cat_mat.jpg',
      alt: 'Tranh Ehon chú mèo lười biếng ngồi sưởi nắng trên thảm êm'
    },
    summaryVi: 'Câu chuyện chú mèo mướp lười biếng ngồi sưởi nắng và chợp mắt trên chiếc thảm len êm ái.',
    targetPhonics: ['ね', 'こ', 'す', 'わ', 'る'],
    sightWords: ['が', 'は', 'の'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'ねこ が すわった。',
        vietnameseMeaning: 'Chú mèo ngồi yên trên thảm.',
        backgroundTheme: 'bg-amber-100',
        sceneryEmoji: '🐱',
        visual: {
          url: '/assets/ehon/cat_mat.jpg',
          alt: 'Tranh Ehon chú mèo ngồi yên'
        },
        wordsTiming: [
          { word: 'ねこ', cleanWord: 'ねこ', startMs: 0, endMs: 350 },
          { word: 'が', cleanWord: 'が', startMs: 400, endMs: 650 },
          { word: 'すわった。', cleanWord: 'すわった', startMs: 700, endMs: 1200 }
        ],
        hotspots: [
          {
            id: 'h_neko_1',
            label: 'Chú Mèo (ねこ)',
            xPercent: 50,
            yPercent: 50,
            emoji: '🐱',
            soundName: 'purr',
            speechText: 'ねこ (Neko)',
            animationType: 'jump'
          }
        ],
        comprehension: {
          questionText: 'Trong câu này, con vật nào đang ngồi?',
          questionAudioText: 'Con vật nào đang ngồi trên thảm?',
          options: [
            { id: 'opt_neko', text: 'ねこ (Chú mèo)', emoji: '🐱', isCorrect: true },
            { id: 'opt_inu', text: 'いぬ (Chú chó)', emoji: '🐶', isCorrect: false },
            { id: 'opt_tori', text: 'とり (Chú chim)', emoji: '🐦', isCorrect: false }
          ]
        }
      },
      {
        pageNumber: 2,
        sentence: 'ねこ は ねむい。',
        vietnameseMeaning: 'Chú mèo buồn ngủ rồi.',
        backgroundTheme: 'bg-orange-100',
        sceneryEmoji: '😴',
        visual: {
          url: '/assets/ehon/cat_bed.jpg',
          alt: 'Tranh Ehon chú mèo ngái ngủ'
        },
        wordsTiming: [
          { word: 'ねこ', cleanWord: 'ねこ', startMs: 0, endMs: 350 },
          { word: 'は', cleanWord: 'は', startMs: 400, endMs: 650 },
          { word: 'ねむい。', cleanWord: 'ねむい', startMs: 700, endMs: 1100 }
        ],
        hotspots: [
          {
            id: 'h_neko_sleepy',
            label: 'Buồn ngủ (ねむい)',
            xPercent: 50,
            yPercent: 45,
            emoji: '💤',
            soundName: 'gentle_pop',
            speechText: 'ねむい (Nemui)',
            animationType: 'bounce'
          }
        ]
      },
      {
        pageNumber: 3,
        sentence: 'ねこ は おやすみ。',
        vietnameseMeaning: 'Chúc chú mèo ngủ ngon nhé.',
        backgroundTheme: 'bg-indigo-100',
        sceneryEmoji: '🌙',
        visual: {
          url: '/assets/ehon/cat_sun.jpg',
          alt: 'Tranh Ehon chú mèo say giấc nồng'
        },
        wordsTiming: [
          { word: 'ねこ', cleanWord: 'ねこ', startMs: 0, endMs: 350 },
          { word: 'は', cleanWord: 'は', startMs: 400, endMs: 650 },
          { word: 'おやすみ。', cleanWord: 'おやすみ', startMs: 700, endMs: 1250 }
        ],
        hotspots: [
          {
            id: 'h_moon',
            label: 'Mặt trăng (つき)',
            xPercent: 75,
            yPercent: 20,
            emoji: '🌙',
            soundName: 'sparkle',
            speechText: 'おやすみ (Oyasumi)',
            animationType: 'spin'
          }
        ],
        comprehension: {
          questionText: 'Bé hãy chúc chú mèo ngủ ngoan thế nào nhỉ?',
          questionAudioText: 'Chúc ngủ ngon tiếng Nhật là gì bé ơi?',
          options: [
            { id: 'opt_oyasumi', text: 'おやすみ (Oyasumi - Ngủ ngon nhé)', emoji: '😴', isCorrect: true },
            { id: 'opt_konnichiwa', text: 'こんにちは (Konnichiwa - Xin chào)', emoji: '👋', isCorrect: false },
            { id: 'opt_arigatou', text: 'ありがとう (Arigatou - Cảm ơn)', emoji: '🙏', isCorrect: false }
          ]
        }
      }
    ]
  },
  {
    id: 'ja_story_inu',
    title: 'いぬ と ボール',
    level: 1,
    levelName: 'Cấp 1: Bảng Hiragana Khởi Đầu',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐶',
    coverVisual: {
      url: '/assets/ehon/dog_sun.jpg',
      alt: 'Tranh Ehon chú chó vui đùa ngoài sân nắng'
    },
    summaryVi: 'Chú cún con vui vẻ chạy nhảy trong vườn và tìm thấy một quả bóng tròn xoe.',
    targetPhonics: ['い', 'ぬ', 'ぼ', 'る'],
    sightWords: ['と', 'を', 'が'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'いぬ が はしる。',
        vietnameseMeaning: 'Chú chó chạy tung tăng.',
        backgroundTheme: 'bg-emerald-100',
        sceneryEmoji: '🐶',
        visual: {
          url: '/assets/ehon/dog_sun.jpg',
          alt: 'Tranh chú chó chạy nhảy'
        },
        wordsTiming: [
          { word: 'いぬ', cleanWord: 'いぬ', startMs: 0, endMs: 350 },
          { word: 'が', cleanWord: 'が', startMs: 400, endMs: 650 },
          { word: 'はしる。', cleanWord: 'はしる', startMs: 700, endMs: 1150 }
        ],
        hotspots: [
          {
            id: 'h_inu_1',
            label: 'Chú chó (いぬ)',
            xPercent: 50,
            yPercent: 55,
            emoji: '🐶',
            soundName: 'bark',
            speechText: 'いぬ (Inu)',
            animationType: 'jump'
          }
        ]
      },
      {
        pageNumber: 2,
        sentence: 'あかい ボール を みつけた。',
        vietnameseMeaning: 'Chú thấy một quả bóng màu đỏ.',
        backgroundTheme: 'bg-rose-100',
        sceneryEmoji: '⚽',
        visual: {
          url: '/assets/ehon/ball.jpg',
          alt: 'Tranh quả bóng đỏ tròn xoe'
        },
        wordsTiming: [
          { word: 'あかい', cleanWord: 'あかい', startMs: 0, endMs: 400 },
          { word: 'ボール', cleanWord: 'ボール', startMs: 450, endMs: 850 },
          { word: 'を', cleanWord: 'を', startMs: 900, endMs: 1100 },
          { word: 'みつけた。', cleanWord: 'みつけた', startMs: 1150, endMs: 1650 }
        ],
        hotspots: [
          {
            id: 'h_ball_1',
            label: 'Quả bóng (ボール)',
            xPercent: 60,
            yPercent: 60,
            emoji: '⚽',
            soundName: 'gentle_pop',
            speechText: 'ボール (Booru)',
            animationType: 'bounce'
          }
        ]
      },
      {
        pageNumber: 3,
        sentence: 'わんわん！ たのしいな。',
        vietnameseMeaning: 'Gâu gâu! Thật là vui biết bao.',
        backgroundTheme: 'bg-amber-100',
        sceneryEmoji: '🎉',
        visual: {
          url: '/assets/ehon/dog_mat.jpg',
          alt: 'Tranh chú chó vẫy đuôi vui sướng'
        },
        wordsTiming: [
          { word: 'わんわん！', cleanWord: 'わんわん', startMs: 0, endMs: 500 },
          { word: 'たのしいな。', cleanWord: 'たのしいな', startMs: 550, endMs: 1200 }
        ],
        hotspots: [
          {
            id: 'h_bark_cheer',
            label: 'Gâu gâu (わんわん)',
            xPercent: 45,
            yPercent: 50,
            emoji: '🐶',
            soundName: 'bark',
            speechText: 'わんわん！',
            animationType: 'heart'
          }
        ],
        comprehension: {
          questionText: 'Chú chó kêu tiếng như thế nào trong tiếng Nhật?',
          questionAudioText: 'Tiếng sủa của chú chó là gì?',
          options: [
            { id: 'opt_wanwan', text: 'わんわん (Wanwan - Gâu gâu)', emoji: '🐶', isCorrect: true },
            { id: 'opt_nyaa', text: 'にゃーにゃー (Nyaa nyaa - Meo meo)', emoji: '🐱', isCorrect: false },
            { id: 'opt_piyo', text: 'ぴよぴよ (Piyopiyo - Chíp chíp)', emoji: '🐤', isCorrect: false }
          ]
        }
      }
    ]
  },
  {
    id: 'ja_story_sakura',
    title: 'さくら が さいた',
    level: 2,
    levelName: 'Cấp 2: Ghép Mora & Thiên Nhiên',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🌸',
    coverVisual: {
      url: '/assets/ehon/tree_bird.jpg',
      alt: 'Tranh Ehon cây hoa anh đào rực rỡ dưới nắng xuân'
    },
    summaryVi: 'Mùa xuân ấm áp gõ cửa, những cánh hoa anh đào nở hồng khắp lối đi.',
    targetPhonics: ['さ', 'く', 'ら', 'は', 'る'],
    sightWords: ['が', 'の', 'だね'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'はる が きた。',
        vietnameseMeaning: 'Mùa xuân đã về rồi.',
        backgroundTheme: 'bg-green-100',
        sceneryEmoji: '🌱',
        visual: {
          url: '/assets/ehon/tree_bird.jpg',
          alt: 'Cây cối đâm chồi nảy lộc'
        },
        wordsTiming: [
          { word: 'はる', cleanWord: 'はる', startMs: 0, endMs: 350 },
          { word: 'が', cleanWord: 'が', startMs: 400, endMs: 600 },
          { word: 'きた。', cleanWord: 'きた', startMs: 650, endMs: 1050 }
        ],
        hotspots: [
          {
            id: 'h_haru',
            label: 'Mùa xuân (はる)',
            xPercent: 50,
            yPercent: 40,
            emoji: '🌸',
            soundName: 'sparkle',
            speechText: 'はる (Haru)',
            animationType: 'bounce'
          }
        ]
      },
      {
        pageNumber: 2,
        sentence: 'さくら の はな が さいた。',
        vietnameseMeaning: 'Hoa anh đào đã nở rộ.',
        backgroundTheme: 'bg-pink-100',
        sceneryEmoji: '🌸',
        visual: {
          url: '/assets/ehon/tree_bird.jpg',
          alt: 'Hoa anh đào nở hồng tươi'
        },
        wordsTiming: [
          { word: 'さくら', cleanWord: 'さくら', startMs: 0, endMs: 400 },
          { word: 'の', cleanWord: 'の', startMs: 450, endMs: 650 },
          { word: 'はな', cleanWord: 'はな', startMs: 700, endMs: 950 },
          { word: 'が', cleanWord: 'が', startMs: 1000, endMs: 1200 },
          { word: 'さいた。', cleanWord: 'さいた', startMs: 1250, endMs: 1700 }
        ],
        hotspots: [
          {
            id: 'h_sakura_flower',
            label: 'Hoa Sakura (さくら)',
            xPercent: 55,
            yPercent: 30,
            emoji: '🌸',
            soundName: 'sparkle',
            speechText: 'さくら (Sakura)',
            animationType: 'spin'
          }
        ]
      },
      {
        pageNumber: 3,
        sentence: 'きれいな ピンクいろ だね。',
        vietnameseMeaning: 'Sắc hoa màu hồng thật là xinh xắn.',
        backgroundTheme: 'bg-rose-100',
        sceneryEmoji: '💖',
        visual: {
          url: '/assets/ehon/tree_bird.jpg',
          alt: 'Cánh hoa hồng rơi nhẹ'
        },
        wordsTiming: [
          { word: 'きれいな', cleanWord: 'きれいな', startMs: 0, endMs: 500 },
          { word: 'ピンクいろ', cleanWord: 'ピンクいろ', startMs: 550, endMs: 1100 },
          { word: 'だね。', cleanWord: 'だね', startMs: 1150, endMs: 1550 }
        ],
        hotspots: [
          {
            id: 'h_pink',
            label: 'Màu hồng (ピンクいろ)',
            xPercent: 50,
            yPercent: 60,
            emoji: '🌸',
            soundName: 'gentle_pop',
            speechText: 'きれい！',
            animationType: 'heart'
          }
        ],
        comprehension: {
          questionText: 'Hoa anh đào (Sakura) có màu sắc gì?',
          questionAudioText: 'Hoa Sakura màu gì bé ơi?',
          options: [
            { id: 'opt_pink', text: 'ピンク (Màu hồng)', emoji: '🌸', isCorrect: true },
            { id: 'opt_ao', text: 'あお (Màu xanh)', emoji: '💙', isCorrect: false },
            { id: 'opt_kuro', text: 'くろ (Màu đen)', emoji: '🖤', isCorrect: false }
          ]
        }
      }
    ]
  },
  {
    id: 'ja_story_ringo',
    title: 'あかい りんご',
    level: 2,
    levelName: 'Cấp 2: Ghép Mora & Trái Cây',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🍎',
    coverVisual: {
      url: '/assets/ehon/ten_apples.jpg',
      alt: 'Tranh Ehon những quả táo đỏ mọng trên cành'
    },
    summaryVi: 'Cùng hái và thưởng thức những quả táo ngọt lịm đỏ thắm trên cành cây cao.',
    targetPhonics: ['あ', 'か', 'い', 'り', 'ん', 'ご'],
    sightWords: ['の', 'に', 'は'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'き の うえ に りんご。',
        vietnameseMeaning: 'Trên cây có những quả táo.',
        backgroundTheme: 'bg-emerald-100',
        sceneryEmoji: '🌳',
        visual: {
          url: '/assets/ehon/ten_apples.jpg',
          alt: 'Cây táo trĩu quả'
        },
        wordsTiming: [
          { word: 'き', cleanWord: 'き', startMs: 0, endMs: 250 },
          { word: 'の', cleanWord: 'の', startMs: 300, endMs: 500 },
          { word: 'うえ', cleanWord: 'うえ', startMs: 550, endMs: 800 },
          { word: 'に', cleanWord: 'に', startMs: 850, endMs: 1050 },
          { word: 'りんご。', cleanWord: 'りんご', startMs: 1100, endMs: 1550 }
        ],
        hotspots: [
          {
            id: 'h_ringo_tree',
            label: 'Quả táo (りんご)',
            xPercent: 50,
            yPercent: 40,
            emoji: '🍎',
            soundName: 'gentle_pop',
            speechText: 'りんご (Ringo)',
            animationType: 'jump'
          }
        ]
      },
      {
        pageNumber: 2,
        sentence: 'あかくて おおきい りんご。',
        vietnameseMeaning: 'Quả táo vừa đỏ thắm lại to tròn.',
        backgroundTheme: 'bg-rose-100',
        sceneryEmoji: '🍎',
        visual: {
          url: '/assets/ehon/ten_apples.jpg',
          alt: 'Quả táo đỏ mọng nước'
        },
        wordsTiming: [
          { word: 'あかくて', cleanWord: 'あかくて', startMs: 0, endMs: 550 },
          { word: 'おおきい', cleanWord: 'おおきい', startMs: 600, endMs: 1100 },
          { word: 'りんご。', cleanWord: 'りんご', startMs: 1150, endMs: 1650 }
        ],
        hotspots: [
          {
            id: 'h_big_apple',
            label: 'To lớn (おおきい)',
            xPercent: 55,
            yPercent: 50,
            emoji: '🍎',
            soundName: 'sparkle',
            speechText: 'おおきい りんご！',
            animationType: 'bounce'
          }
        ]
      },
      {
        pageNumber: 3,
        sentence: 'いただきまーす！ おいしいな。',
        vietnameseMeaning: 'Chúng mình cùng ăn nhé! Ngon quá đi thôi.',
        backgroundTheme: 'bg-amber-100',
        sceneryEmoji: '😋',
        visual: {
          url: '/assets/ehon/ten_apples.jpg',
          alt: 'Thưởng thức táo ngọt ngào'
        },
        wordsTiming: [
          { word: 'いただきまーす！', cleanWord: 'いただきます', startMs: 0, endMs: 900 },
          { word: 'おいしいな。', cleanWord: 'おいしいな', startMs: 950, endMs: 1600 }
        ],
        hotspots: [
          {
            id: 'h_yummy',
            label: 'Ngon lành (おいしい)',
            xPercent: 50,
            yPercent: 50,
            emoji: '😋',
            soundName: 'magic_chime',
            speechText: 'おいしい！',
            animationType: 'heart'
          }
        ],
        comprehension: {
          questionText: 'Quả táo trong tiếng Nhật gọi là gì?',
          questionAudioText: 'Quả táo tiếng Nhật đọc là gì nhỉ?',
          options: [
            { id: 'opt_ringo', text: 'りんご (Ringo - Quả táo)', emoji: '🍎', isCorrect: true },
            { id: 'opt_mikan', text: 'みかん (Mikan - Quả quýt)', emoji: '🍊', isCorrect: false },
            { id: 'opt_banana', text: 'ばなな (Banana - Quả chuối)', emoji: '🍌', isCorrect: false }
          ]
        }
      }
    ]
  },
  {
    id: 'ja_story_kuruma',
    title: 'あおい くるま',
    level: 3,
    levelName: 'Cấp 3: Từ Vựng & Âm Đục',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '🚗',
    coverVisual: {
      url: '/assets/ehon/blue_car.jpg',
      alt: 'Tranh Ehon chiếc xe hơi màu xanh bon bon trên đường'
    },
    summaryVi: 'Chiếc ô tô nhỏ màu xanh bon bon lướt trên con đường thênh thang.',
    targetPhonics: ['く', 'る', 'ま', 'あ', 'お', 'し', 'ん', 'ご', 'う'],
    sightWords: ['が', 'を', 'は'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'あおい くるま が ぶーん。',
        vietnameseMeaning: 'Chiếc xe hơi màu xanh vùn vụt chạy.',
        backgroundTheme: 'bg-sky-100',
        sceneryEmoji: '🚗',
        visual: {
          url: '/assets/ehon/blue_car.jpg',
          alt: 'Chiếc ô tô màu xanh'
        },
        wordsTiming: [
          { word: 'あおい', cleanWord: 'あおい', startMs: 0, endMs: 350 },
          { word: 'くるま', cleanWord: 'くるま', startMs: 400, endMs: 750 },
          { word: 'が', cleanWord: 'が', startMs: 800, endMs: 1000 },
          { word: 'ぶーん。', cleanWord: 'ぶーん', startMs: 1050, endMs: 1550 }
        ],
        hotspots: [
          {
            id: 'h_car',
            label: 'Xe hơi (くるま)',
            xPercent: 50,
            yPercent: 55,
            emoji: '🚗',
            soundName: 'gentle_pop',
            speechText: 'くるま (Kuruma)',
            animationType: 'jump'
          }
        ]
      },
      {
        pageNumber: 2,
        sentence: 'みち を まっすぐ はしる。',
        vietnameseMeaning: 'Xe chạy thẳng tắp trên đường.',
        backgroundTheme: 'bg-emerald-100',
        sceneryEmoji: '🛣️',
        visual: {
          url: '/assets/ehon/blue_car.jpg',
          alt: 'Con đường trải dài'
        },
        wordsTiming: [
          { word: 'みち', cleanWord: 'みち', startMs: 0, endMs: 300 },
          { word: 'を', cleanWord: 'を', startMs: 350, endMs: 550 },
          { word: 'まっすぐ', cleanWord: 'まっすぐ', startMs: 600, endMs: 1100 },
          { word: 'はしる。', cleanWord: 'はしる', startMs: 1150, endMs: 1600 }
        ],
        hotspots: [
          {
            id: 'h_road',
            label: 'Con đường (みち)',
            xPercent: 50,
            yPercent: 70,
            emoji: '🛣️',
            soundName: 'gentle_pop',
            speechText: 'まっすぐ！',
            animationType: 'bounce'
          }
        ]
      },
      {
        pageNumber: 3,
        sentence: 'しんごう は あお、 すすもう！',
        vietnameseMeaning: 'Đèn tín hiệu xanh rồi, tiến lên nào!',
        backgroundTheme: 'bg-teal-100',
        sceneryEmoji: '🚦',
        visual: {
          url: '/assets/ehon/blue_car.jpg',
          alt: 'Đèn giao thông màu xanh'
        },
        wordsTiming: [
          { word: 'しんごう', cleanWord: 'しんごう', startMs: 0, endMs: 450 },
          { word: 'は', cleanWord: 'は', startMs: 500, endMs: 700 },
          { word: 'あお、', cleanWord: 'あお', startMs: 750, endMs: 1050 },
          { word: 'すすもう！', cleanWord: 'すすもう', startMs: 1100, endMs: 1650 }
        ],
        hotspots: [
          {
            id: 'h_traffic_light',
            label: 'Đèn giao thông (しんごう)',
            xPercent: 75,
            yPercent: 30,
            emoji: '🚦',
            soundName: 'sparkle',
            speechText: 'しんごう (Shingou)',
            animationType: 'spin'
          }
        ],
        comprehension: {
          questionText: 'Chiếc xe hơi trong tiếng Nhật gọi là gì?',
          questionAudioText: 'Xe ô tô tiếng Nhật là gì bé ơi?',
          options: [
            { id: 'opt_kuruma', text: 'くるま (Kuruma - Xe hơi)', emoji: '🚗', isCorrect: true },
            { id: 'opt_densha', text: 'でんしゃ (Densha - Tàu điện)', emoji: '🚆', isCorrect: false },
            { id: 'opt_hikouki', text: 'ひこうき (Hikouki - Máy bay)', emoji: '✈️', isCorrect: false }
          ]
        }
      }
    ]
  },
  {
    id: 'ja_story_tori',
    title: 'ことり の うた',
    level: 3,
    levelName: 'Cấp 3: Từ Vựng & Âm Ghép',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '🐦',
    coverVisual: {
      url: '/assets/ehon/bird_song.jpg',
      alt: 'Tranh Ehon chú chim nhỏ líu lo đón ban mai'
    },
    summaryVi: 'Chú chim non líu lo cất tiếng hót chào đón ánh nắng ban mai rực rỡ.',
    targetPhonics: ['こ', 'と', 'り', 'う', 'た', 'あ', 'さ'],
    sightWords: ['の', 'と', 'も'],
    pages: [
      {
        pageNumber: 1,
        sentence: 'ことり が ちゅんちゅん。',
        vietnameseMeaning: 'Chú chim nhỏ líu lo hót.',
        backgroundTheme: 'bg-yellow-100',
        sceneryEmoji: '🐦',
        visual: {
          url: '/assets/ehon/bird_song.jpg',
          alt: 'Chú chim nhỏ hót líu lo'
        },
        wordsTiming: [
          { word: 'ことり', cleanWord: 'ことり', startMs: 0, endMs: 350 },
          { word: 'が', cleanWord: 'が', startMs: 400, endMs: 600 },
          { word: 'ちゅんちゅん。', cleanWord: 'ちゅんちゅん', startMs: 650, endMs: 1300 }
        ],
        hotspots: [
          {
            id: 'h_bird',
            label: 'Chú chim (ことり)',
            xPercent: 50,
            yPercent: 45,
            emoji: '🐦',
            soundName: 'sparkle',
            speechText: 'ことり (Kotori)',
            animationType: 'jump'
          }
        ]
      },
      {
        pageNumber: 2,
        sentence: 'あさ の ひかり と うたう。',
        vietnameseMeaning: 'Cùng hát với ánh ban mai chan hòa.',
        backgroundTheme: 'bg-amber-100',
        sceneryEmoji: '☀️',
        visual: {
          url: '/assets/ehon/bird_song.jpg',
          alt: 'Ánh nắng bình minh chan hòa'
        },
        wordsTiming: [
          { word: 'あさ', cleanWord: 'あさ', startMs: 0, endMs: 250 },
          { word: 'の', cleanWord: 'の', startMs: 300, endMs: 500 },
          { word: 'ひかり', cleanWord: 'ひかり', startMs: 550, endMs: 900 },
          { word: 'と', cleanWord: 'と', startMs: 950, endMs: 1150 },
          { word: 'うたう。', cleanWord: 'うたう', startMs: 1200, endMs: 1650 }
        ],
        hotspots: [
          {
            id: 'h_sun_light',
            label: 'Ánh nắng (ひかり)',
            xPercent: 70,
            yPercent: 20,
            emoji: '☀️',
            soundName: 'sparkle',
            speechText: 'うたおう！',
            animationType: 'spin'
          }
        ]
      },
      {
        pageNumber: 3,
        sentence: 'きょう も いい ひ に なるよ。',
        vietnameseMeaning: 'Hôm nay nhất định sẽ là một ngày thật vui.',
        backgroundTheme: 'bg-sky-100',
        sceneryEmoji: '🌈',
        visual: {
          url: '/assets/ehon/bird_song.jpg',
          alt: 'Cầu vồng và bầu trời tươi sáng'
        },
        wordsTiming: [
          { word: 'きょう', cleanWord: 'きょう', startMs: 0, endMs: 350 },
          { word: 'も', cleanWord: 'も', startMs: 400, endMs: 600 },
          { word: 'いい', cleanWord: 'いい', startMs: 650, endMs: 900 },
          { word: 'ひ', cleanWord: 'ひ', startMs: 950, endMs: 1100 },
          { word: 'に', cleanWord: 'に', startMs: 1150, endMs: 1300 },
          { word: 'なるよ。', cleanWord: 'なるよ', startMs: 1350, endMs: 1750 }
        ],
        hotspots: [
          {
            id: 'h_rainbow',
            label: 'Cầu vồng (にじ)',
            xPercent: 50,
            yPercent: 30,
            emoji: '🌈',
            soundName: 'magic_chime',
            speechText: 'いい ひ だね！',
            animationType: 'heart'
          }
        ],
        comprehension: {
          questionText: 'Con chim hót tiếng kêu líu lo thế nào?',
          questionAudioText: 'Chim hót tiếng gì vậy bé?',
          options: [
            { id: 'opt_chun', text: 'ちゅんちゅん (Chunchun - Líu lo)', emoji: '🐦', isCorrect: true },
            { id: 'opt_kokeko', text: 'コケコッコー (Kokekokkoo - Ò ó o)', emoji: '🐓', isCorrect: false },
            { id: 'opt_gao', text: 'ガオー (Gaoo - Gầm gừ)', emoji: '🦁', isCorrect: false }
          ]
        }
      }
    ]
  }
];
