import { DecodableStory } from '../types/story';

export const DECODABLE_STORIES: DecodableStory[] = [
  {
    "id": "story_cat_sat",
    "title": "The Cat Sat",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 1 & 2",
    "stage": 1,
    "ageBand": "3 – 4 Tuổi (Mầm non)",
    "coverEmoji": "🐱",
    "coverVisual": {
      "url": "/assets/ehon/cat_mat.jpg",
      "alt": "Tranh Ehon chú mèo cam ngồi sưởi nắng trên tấm thảm len"
    },
    "summaryVi": "Câu chuyện chú mèo mướp lười biếng ngồi sưởi nắng trên chiếc thảm êm.",
    "targetPhonics": [
      "s",
      "a",
      "t",
      "c",
      "p"
    ],
    "sightWords": [
      "the",
      "on"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The cat sat.",
        "vietnameseMeaning": "Chú mèo ngồi yên.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🏡",
        "visual": {
          "url": "/assets/ehon/cat_mat.jpg",
          "alt": "Tranh Ehon chú mèo ngồi yên trên thảm"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "cat",
            "cleanWord": "cat",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "sat.",
            "cleanWord": "sat",
            "startMs": 740,
            "endMs": 1040
          }
        ],
        "hotspots": [
          {
            "id": "hs_cat",
            "label": "Cat",
            "xPercent": 45,
            "yPercent": 48,
            "emoji": "🐱",
            "soundName": "meow",
            "speechText": "Cat! Meow!",
            "animationType": "jump"
          },
          {
            "id": "hs_flower",
            "label": "Flower",
            "xPercent": 80,
            "yPercent": 65,
            "emoji": "🌸",
            "soundName": "sparkle",
            "speechText": "A pink flower!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "cat",
        "comprehension": {
          "questionText": "Who sat down?",
          "questionAudioText": "Who sat down? Can you tap the right friend?",
          "options": [
            {
              "id": "opt_cat",
              "text": "Cat",
              "emoji": "🐱",
              "isCorrect": true
            },
            {
              "id": "opt_dog",
              "text": "Dog",
              "emoji": "🐶",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The cat sat on a mat.",
        "vietnameseMeaning": "Chú mèo ngồi trên chiếc thảm êm.",
        "backgroundTheme": "bg-rose-100",
        "sceneryEmoji": "🧶",
        "visual": {
          "url": "/assets/ehon/cat_mat.jpg",
          "alt": "Tranh Ehon chú mèo cuộn tròn trên thảm đỏ"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "cat",
            "cleanWord": "cat",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "sat",
            "cleanWord": "sat",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "on",
            "cleanWord": "on",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "mat.",
            "cleanWord": "mat",
            "startMs": 1850,
            "endMs": 2150
          }
        ],
        "hotspots": [
          {
            "id": "hs_mat",
            "label": "Mat",
            "xPercent": 50,
            "yPercent": 75,
            "emoji": "🧶",
            "soundName": "pop",
            "speechText": "A soft warm mat!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "mat",
        "comprehension": {
          "questionText": "Where did the cat sit?",
          "questionAudioText": "Where did the cat sit?",
          "options": [
            {
              "id": "opt_mat",
              "text": "On a mat",
              "emoji": "🧶",
              "isCorrect": true
            },
            {
              "id": "opt_pan",
              "text": "On a pan",
              "emoji": "🍳",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 3,
        "sentence": "The cat takes a sweet nap.",
        "vietnameseMeaning": "Mèo con ngủ trưa thật ngoan.",
        "backgroundTheme": "bg-indigo-100",
        "sceneryEmoji": "😴",
        "visual": {
          "url": "/assets/ehon/cat_nap.jpg",
          "alt": "Tranh Ehon mèo con chợp mắt ngủ trưa"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "cat",
            "cleanWord": "cat",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "takes",
            "cleanWord": "takes",
            "startMs": 740,
            "endMs": 1190
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1260,
            "endMs": 1560
          },
          {
            "word": "sweet",
            "cleanWord": "sweet",
            "startMs": 1630,
            "endMs": 2080
          },
          {
            "word": "nap.",
            "cleanWord": "nap",
            "startMs": 2150,
            "endMs": 2450
          }
        ],
        "hotspots": [
          {
            "id": "hs_nap",
            "label": "Nap",
            "xPercent": 55,
            "yPercent": 55,
            "emoji": "💤",
            "soundName": "magic",
            "speechText": "Sweet dreams little cat!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "nap",
        "comprehension": {
          "questionText": "What is the cat doing?",
          "questionAudioText": "What is the cat doing?",
          "options": [
            {
              "id": "opt_nap",
              "text": "Taking a nap",
              "emoji": "😴",
              "isCorrect": true
            },
            {
              "id": "opt_run",
              "text": "Running fast",
              "emoji": "🏃",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_sam_ant",
    "title": "Sam and the Ant",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 1",
    "stage": 1,
    "ageBand": "3 – 4 Tuổi (Mầm non)",
    "coverEmoji": "🐜",
    "coverVisual": {
      "url": "/assets/ehon/sam_pat_ant.jpg",
      "alt": "Tranh Ehon bạn Sam cúi chào chú kiến nhỏ"
    },
    "summaryVi": "Bạn Sam gặp chú kiến bé nhỏ trên chiếc chảo rán và cùng kết bạn.",
    "targetPhonics": [
      "s",
      "a",
      "t",
      "p",
      "n"
    ],
    "sightWords": [
      "see",
      "in",
      "the"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Sam sees an ant in the pan.",
        "vietnameseMeaning": "Sam nhìn thấy một chú kiến nhỏ trên chảo.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "🍳",
        "visual": {
          "url": "/assets/ehon/sam_pan.jpg",
          "alt": "Tranh Ehon bạn Sam nhìn chú kiến trên chảo"
        },
        "wordsTiming": [
          {
            "word": "Sam",
            "cleanWord": "sam",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "sees",
            "cleanWord": "sees",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "an",
            "cleanWord": "an",
            "startMs": 800,
            "endMs": 1100
          },
          {
            "word": "ant",
            "cleanWord": "ant",
            "startMs": 1170,
            "endMs": 1470
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1540,
            "endMs": 1840
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1910,
            "endMs": 2210
          },
          {
            "word": "pan.",
            "cleanWord": "pan",
            "startMs": 2280,
            "endMs": 2580
          }
        ],
        "hotspots": [
          {
            "id": "hs_ant",
            "label": "Ant",
            "xPercent": 52,
            "yPercent": 62,
            "emoji": "🐜",
            "soundName": "pop",
            "speechText": "Tiny ant!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "ant",
        "comprehension": {
          "questionText": "What does Sam see?",
          "questionAudioText": "What does Sam see in the pan?",
          "options": [
            {
              "id": "opt_ant",
              "text": "An ant",
              "emoji": "🐜",
              "isCorrect": true
            },
            {
              "id": "opt_pig",
              "text": "A pig",
              "emoji": "🐷",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Sam pats the gentle ant.",
        "vietnameseMeaning": "Sam vỗ về chú kiến nhỏ thân thương.",
        "backgroundTheme": "bg-teal-100",
        "sceneryEmoji": "👋",
        "visual": {
          "url": "/assets/ehon/sam_pat_ant.jpg",
          "alt": "Tranh Ehon bạn Sam nhẹ nhàng vuốt ve chú kiến"
        },
        "wordsTiming": [
          {
            "word": "Sam",
            "cleanWord": "sam",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "pats",
            "cleanWord": "pats",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 800,
            "endMs": 1100
          },
          {
            "word": "gentle",
            "cleanWord": "gentle",
            "startMs": 1170,
            "endMs": 1710
          },
          {
            "word": "ant.",
            "cleanWord": "ant",
            "startMs": 1780,
            "endMs": 2080
          }
        ],
        "hotspots": [
          {
            "id": "hs_pat",
            "label": "Pat",
            "xPercent": 48,
            "yPercent": 50,
            "emoji": "👋",
            "soundName": "sparkle",
            "speechText": "Pat pat!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "pat",
        "comprehension": {
          "questionText": "Does Sam like the ant?",
          "questionAudioText": "Does Sam like the ant?",
          "options": [
            {
              "id": "opt_yes",
              "text": "Yes, he pats it",
              "emoji": "😊",
              "isCorrect": true
            },
            {
              "id": "opt_no",
              "text": "No, he runs",
              "emoji": "🏃",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_sun_pig",
    "title": "The Sun and the Pink Pig",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 1 (s, p, t, n)",
    "stage": 1,
    "ageBand": "3 – 4 Tuổi (Mầm non)",
    "coverEmoji": "🐷",
    "coverVisual": {
      "url": "/assets/ehon/pig.jpg",
      "alt": "Tranh Ehon chú heo hồng tung tăng dưới nắng ấm"
    },
    "summaryVi": "Chú heo hồng tắm nắng ấm và đùa vui bên bãi cỏ xanh.",
    "targetPhonics": [
      "s",
      "p",
      "t",
      "n",
      "i"
    ],
    "sightWords": [
      "the",
      "is",
      "in"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The warm sun is in the sky.",
        "vietnameseMeaning": "Mặt trời ấm áp tỏa sáng trên bầu trời cao.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "☀️",
        "visual": {
          "url": "/assets/ehon/sun.jpg",
          "alt": "Tranh Ehon mặt trời rạng ngời tỏa tia nắng"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "warm",
            "cleanWord": "warm",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "sun",
            "cleanWord": "sun",
            "startMs": 800,
            "endMs": 1100
          },
          {
            "word": "is",
            "cleanWord": "is",
            "startMs": 1170,
            "endMs": 1470
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1540,
            "endMs": 1840
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1910,
            "endMs": 2210
          },
          {
            "word": "sky.",
            "cleanWord": "sky",
            "startMs": 2280,
            "endMs": 2580
          }
        ],
        "hotspots": [
          {
            "id": "hs_sun",
            "label": "Sun",
            "xPercent": 50,
            "yPercent": 35,
            "emoji": "☀️",
            "soundName": "sparkle",
            "speechText": "Warm golden sun!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "sun",
        "comprehension": {
          "questionText": "What shines in the sky?",
          "questionAudioText": "What shines in the sky?",
          "options": [
            {
              "id": "opt_sun",
              "text": "The sun",
              "emoji": "☀️",
              "isCorrect": true
            },
            {
              "id": "opt_moon",
              "text": "The moon",
              "emoji": "🌙",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The happy pink pig sits in the sun.",
        "vietnameseMeaning": "Chú heo hồng vui sướng ngồi sưởi nắng ấm.",
        "backgroundTheme": "bg-rose-100",
        "sceneryEmoji": "🐷",
        "visual": {
          "url": "/assets/ehon/pig.jpg",
          "alt": "Tranh Ehon chú heo hồng mỉm cười sưởi nắng"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "happy",
            "cleanWord": "happy",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "pink",
            "cleanWord": "pink",
            "startMs": 890,
            "endMs": 1250
          },
          {
            "word": "pig",
            "cleanWord": "pig",
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "word": "sits",
            "cleanWord": "sits",
            "startMs": 1690,
            "endMs": 2050
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 2120,
            "endMs": 2420
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2490,
            "endMs": 2790
          },
          {
            "word": "sun.",
            "cleanWord": "sun",
            "startMs": 2860,
            "endMs": 3160
          }
        ],
        "hotspots": [
          {
            "id": "hs_pig",
            "label": "Pig",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🐷",
            "soundName": "pop",
            "speechText": "Oink oink! Happy pig!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "pig",
        "comprehension": {
          "questionText": "Who sits in the warm sun?",
          "questionAudioText": "Who sits in the warm sun?",
          "options": [
            {
              "id": "opt_pig",
              "text": "The pink pig",
              "emoji": "🐷",
              "isCorrect": true
            },
            {
              "id": "opt_fox",
              "text": "The fox",
              "emoji": "🦊",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_tin_pan",
    "title": "The Tin Pan Band",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 1 (t, p, n, i)",
    "stage": 1,
    "ageBand": "3 – 4 Tuổi (Mầm non)",
    "coverEmoji": "🥁",
    "coverVisual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "alt": "Tranh Ehon chiếc chảo thiếc gõ nhịp rộn rã"
    },
    "summaryVi": "Các bạn nhỏ gõ nắp hộp thiếc và chảo nhỏ tạo thành ban nhạc tí hon.",
    "targetPhonics": [
      "t",
      "p",
      "n",
      "i",
      "a"
    ],
    "sightWords": [
      "tap",
      "the",
      "on"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Tap the tin pan, tap tap tap!",
        "vietnameseMeaning": "Gõ vào chảo thiếc, gõ cắc cùm cum!",
        "backgroundTheme": "bg-yellow-100",
        "sceneryEmoji": "🥫",
        "visual": {
          "url": "/assets/ehon/ant_pan.jpg",
          "alt": "Tranh Ehon chiếc chảo thiếc phát ra tiếng vui tai"
        },
        "wordsTiming": [
          {
            "word": "Tap",
            "cleanWord": "tap",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "tin",
            "cleanWord": "tin",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "pan,",
            "cleanWord": "pan",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "tap",
            "cleanWord": "tap",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "tap",
            "cleanWord": "tap",
            "startMs": 1850,
            "endMs": 2150
          },
          {
            "word": "tap!",
            "cleanWord": "tap",
            "startMs": 2220,
            "endMs": 2520
          }
        ],
        "hotspots": [
          {
            "id": "hs_tin",
            "label": "Tin",
            "xPercent": 45,
            "yPercent": 55,
            "emoji": "🥫",
            "soundName": "pop",
            "speechText": "Tap tap tap!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "tap",
        "comprehension": {
          "questionText": "What sound does the pan make?",
          "questionAudioText": "What sound does the pan make?",
          "options": [
            {
              "id": "opt_tap",
              "text": "Tap tap tap",
              "emoji": "🎵",
              "isCorrect": true
            },
            {
              "id": "opt_quack",
              "text": "Quack quack",
              "emoji": "🦆",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Sit and tap the tin top.",
        "vietnameseMeaning": "Ngồi xuống và cùng gõ nắp hộp thiếc vui ca.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🪑",
        "visual": {
          "url": "/assets/ehon/sit.jpg",
          "alt": "Tranh Ehon em bé ngồi ngoan gõ nhịp điệu"
        },
        "wordsTiming": [
          {
            "word": "Sit",
            "cleanWord": "sit",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "and",
            "cleanWord": "and",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "tap",
            "cleanWord": "tap",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "tin",
            "cleanWord": "tin",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "top.",
            "cleanWord": "top",
            "startMs": 1850,
            "endMs": 2150
          }
        ],
        "hotspots": [
          {
            "id": "hs_sit",
            "label": "Sit",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🪑",
            "soundName": "magic",
            "speechText": "Sit and play music!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "sit",
        "comprehension": {
          "questionText": "What do the friends do?",
          "questionAudioText": "What do the friends do?",
          "options": [
            {
              "id": "opt_sit",
              "text": "Sit and play",
              "emoji": "🎶",
              "isCorrect": true
            },
            {
              "id": "opt_cry",
              "text": "Cry sad tears",
              "emoji": "😢",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_red_hat",
    "title": "The Red Hat",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 2 (c, h, r, m, d)",
    "stage": 1,
    "ageBand": "3 – 5 Tuổi",
    "coverEmoji": "👒",
    "coverVisual": {
      "url": "/assets/ehon/cat.jpg",
      "alt": "Tranh Ehon chú mèo đội chiếc mũ đỏ xinh"
    },
    "summaryVi": "Chú mèo tìm thấy chiếc mũ đỏ rộng vành và thử đội lên đầu.",
    "targetPhonics": [
      "r",
      "e",
      "d",
      "h",
      "a",
      "t"
    ],
    "sightWords": [
      "a",
      "has",
      "the"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The cat has a red hat.",
        "vietnameseMeaning": "Chú mèo có một chiếc mũ màu đỏ.",
        "backgroundTheme": "bg-rose-100",
        "sceneryEmoji": "👒",
        "visual": {
          "url": "/assets/ehon/cat.jpg",
          "alt": "Tranh Ehon chú mèo ngắm nhìn chiếc mũ đỏ"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "cat",
            "cleanWord": "cat",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "has",
            "cleanWord": "has",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "hat.",
            "cleanWord": "hat",
            "startMs": 1850,
            "endMs": 2150
          }
        ],
        "hotspots": [
          {
            "id": "hs_hat",
            "label": "Hat",
            "xPercent": 50,
            "yPercent": 30,
            "emoji": "👒",
            "soundName": "magic",
            "speechText": "A pretty red hat!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "hat",
        "comprehension": {
          "questionText": "What color is the hat?",
          "questionAudioText": "What color is the hat?",
          "options": [
            {
              "id": "opt_red",
              "text": "Red",
              "emoji": "🔴",
              "isCorrect": true
            },
            {
              "id": "opt_blue",
              "text": "Blue",
              "emoji": "🔵",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The cat and dog run in the sun.",
        "vietnameseMeaning": "Mèo và cún cùng chạy nhảy dưới nắng ấm.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🏃",
        "visual": {
          "url": "/assets/ehon/hen_dog.jpg",
          "alt": "Tranh Ehon cún và các bạn cùng chạy nhảy"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "cat",
            "cleanWord": "cat",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "and",
            "cleanWord": "and",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "dog",
            "cleanWord": "dog",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "run",
            "cleanWord": "run",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1850,
            "endMs": 2150
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2220,
            "endMs": 2520
          },
          {
            "word": "sun.",
            "cleanWord": "sun",
            "startMs": 2590,
            "endMs": 2890
          }
        ],
        "hotspots": [
          {
            "id": "hs_run",
            "label": "Run",
            "xPercent": 45,
            "yPercent": 65,
            "emoji": "🏃",
            "soundName": "pop",
            "speechText": "Run fast!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "run",
        "comprehension": {
          "questionText": "Who runs in the sun?",
          "questionAudioText": "Who runs in the sun?",
          "options": [
            {
              "id": "opt_both",
              "text": "Cat and dog",
              "emoji": "🐱🐶",
              "isCorrect": true
            },
            {
              "id": "opt_fish",
              "text": "Only fish",
              "emoji": "🐟",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_dog_mud",
    "title": "Dog in the Mud",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 2 (d, o, g, m, u)",
    "stage": 1,
    "ageBand": "3 – 5 Tuổi",
    "coverEmoji": "🐶",
    "coverVisual": {
      "url": "/assets/ehon/dog.jpg",
      "alt": "Tranh Ehon chú cún tinh nghịch vẫy đuôi"
    },
    "summaryVi": "Chú cún nghịch đất bùn rồi được mẹ tắm sạch thơm tho.",
    "targetPhonics": [
      "d",
      "o",
      "g",
      "m",
      "u"
    ],
    "sightWords": [
      "in",
      "the",
      "and"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The dog digs in the wet mud.",
        "vietnameseMeaning": "Chú cún đào bới trong vũng bùn ướt.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🪵",
        "visual": {
          "url": "/assets/ehon/dog.jpg",
          "alt": "Tranh Ehon chú cún nghịch đất bùn"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "dog",
            "cleanWord": "dog",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "digs",
            "cleanWord": "digs",
            "startMs": 740,
            "endMs": 1100
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1170,
            "endMs": 1470
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1540,
            "endMs": 1840
          },
          {
            "word": "wet",
            "cleanWord": "wet",
            "startMs": 1910,
            "endMs": 2210
          },
          {
            "word": "mud.",
            "cleanWord": "mud",
            "startMs": 2280,
            "endMs": 2580
          }
        ],
        "hotspots": [
          {
            "id": "hs_dig",
            "label": "Dig",
            "xPercent": 50,
            "yPercent": 70,
            "emoji": "⛏️",
            "soundName": "pop",
            "speechText": "Dig dig dig!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "dig",
        "comprehension": {
          "questionText": "Where does the dog dig?",
          "questionAudioText": "Where does the dog dig?",
          "options": [
            {
              "id": "opt_mud",
              "text": "In the mud",
              "emoji": "🪵",
              "isCorrect": true
            },
            {
              "id": "opt_bed",
              "text": "On the bed",
              "emoji": "🛏️",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Dad gives the puppy a warm hug.",
        "vietnameseMeaning": "Bố trao cho chú cún một cái ôm ấm áp.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "🤗",
        "visual": {
          "url": "/assets/ehon/sam_pat_ant.jpg",
          "alt": "Tranh Ehon vòng tay ôm ấm áp yêu thương"
        },
        "wordsTiming": [
          {
            "word": "Dad",
            "cleanWord": "dad",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "gives",
            "cleanWord": "gives",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 890,
            "endMs": 1190
          },
          {
            "word": "puppy",
            "cleanWord": "puppy",
            "startMs": 1260,
            "endMs": 1710
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1780,
            "endMs": 2080
          },
          {
            "word": "warm",
            "cleanWord": "warm",
            "startMs": 2150,
            "endMs": 2510
          },
          {
            "word": "hug.",
            "cleanWord": "hug",
            "startMs": 2580,
            "endMs": 2880
          }
        ],
        "hotspots": [
          {
            "id": "hs_hug",
            "label": "Hug",
            "xPercent": 50,
            "yPercent": 50,
            "emoji": "🤗",
            "soundName": "sparkle",
            "speechText": "A big warm hug!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "hug",
        "comprehension": {
          "questionText": "Who gives a warm hug?",
          "questionAudioText": "Who gives a warm hug?",
          "options": [
            {
              "id": "opt_dad",
              "text": "Dad",
              "emoji": "👨",
              "isCorrect": true
            },
            {
              "id": "opt_fox",
              "text": "A fox",
              "emoji": "🦊",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_hen_egg",
    "title": "Hen and Her Warm Egg",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 2 (h, e, n, g)",
    "stage": 1,
    "ageBand": "3 – 5 Tuổi",
    "coverEmoji": "🐔",
    "coverVisual": {
      "url": "/assets/ehon/hen.jpg",
      "alt": "Tranh Ehon cô gà mái ấp quả trứng tròn"
    },
    "summaryVi": "Cô gà mái đỏ chăm sóc quả trứng nhỏ trong tổ rơm ấm.",
    "targetPhonics": [
      "h",
      "e",
      "n",
      "e",
      "g"
    ],
    "sightWords": [
      "the",
      "has",
      "in"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The red hen has a warm egg.",
        "vietnameseMeaning": "Cô gà mái đỏ có một quả trứng ấm.",
        "backgroundTheme": "bg-orange-100",
        "sceneryEmoji": "🥚",
        "visual": {
          "url": "/assets/ehon/hen.jpg",
          "alt": "Tranh Ehon cô gà mái bên quả trứng"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "hen",
            "cleanWord": "hen",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "has",
            "cleanWord": "has",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "warm",
            "cleanWord": "warm",
            "startMs": 1850,
            "endMs": 2210
          },
          {
            "word": "egg.",
            "cleanWord": "egg",
            "startMs": 2280,
            "endMs": 2580
          }
        ],
        "hotspots": [
          {
            "id": "hs_egg",
            "label": "Egg",
            "xPercent": 55,
            "yPercent": 65,
            "emoji": "🥚",
            "soundName": "sparkle",
            "speechText": "A precious egg!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "egg",
        "comprehension": {
          "questionText": "What does the hen have?",
          "questionAudioText": "What does the hen have in her nest?",
          "options": [
            {
              "id": "opt_egg",
              "text": "An egg",
              "emoji": "🥚",
              "isCorrect": true
            },
            {
              "id": "opt_hat",
              "text": "A hat",
              "emoji": "👒",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The hen sits in her cozy nest.",
        "vietnameseMeaning": "Cô gà mái ngồi ấp trong tổ ấm êm.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🪹",
        "visual": {
          "url": "/assets/ehon/hen.jpg",
          "alt": "Tranh Ehon gà mái trong tổ rơm"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "hen",
            "cleanWord": "hen",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "sits",
            "cleanWord": "sits",
            "startMs": 740,
            "endMs": 1100
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1170,
            "endMs": 1470
          },
          {
            "word": "her",
            "cleanWord": "her",
            "startMs": 1540,
            "endMs": 1840
          },
          {
            "word": "cozy",
            "cleanWord": "cozy",
            "startMs": 1910,
            "endMs": 2270
          },
          {
            "word": "nest.",
            "cleanWord": "nest",
            "startMs": 2340,
            "endMs": 2700
          }
        ],
        "hotspots": [
          {
            "id": "hs_nest",
            "label": "Nest",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🪹",
            "soundName": "magic",
            "speechText": "Warm cozy nest!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "hen",
        "comprehension": {
          "questionText": "Where does the hen sit?",
          "questionAudioText": "Where does the hen sit?",
          "options": [
            {
              "id": "opt_nest",
              "text": "In her nest",
              "emoji": "🪹",
              "isCorrect": true
            },
            {
              "id": "opt_car",
              "text": "In a car",
              "emoji": "🚗",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_kid_kit",
    "title": "The Kid and the Art Kit",
    "level": 1,
    "levelName": "Level 1: Nhóm âm 2 (k, i, d, t)",
    "stage": 1,
    "ageBand": "3 – 5 Tuổi",
    "coverEmoji": "🎨",
    "coverVisual": {
      "url": "/assets/ehon/sit.jpg",
      "alt": "Tranh Ehon bạn nhỏ ngồi vẽ tranh sắc màu"
    },
    "summaryVi": "Em bé dùng bộ cọ vẽ tô màu những bức tranh rực rỡ.",
    "targetPhonics": [
      "k",
      "i",
      "d",
      "t",
      "p"
    ],
    "sightWords": [
      "a",
      "has",
      "with"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "A happy kid has an art kit.",
        "vietnameseMeaning": "Em bé vui vẻ có một bộ cọ vẽ.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🧰",
        "visual": {
          "url": "/assets/ehon/sit.jpg",
          "alt": "Tranh Ehon bạn nhỏ bên bộ vẽ tranh"
        },
        "wordsTiming": [
          {
            "word": "A",
            "cleanWord": "a",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "happy",
            "cleanWord": "happy",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "kid",
            "cleanWord": "kid",
            "startMs": 890,
            "endMs": 1190
          },
          {
            "word": "has",
            "cleanWord": "has",
            "startMs": 1260,
            "endMs": 1560
          },
          {
            "word": "an",
            "cleanWord": "an",
            "startMs": 1630,
            "endMs": 1930
          },
          {
            "word": "art",
            "cleanWord": "art",
            "startMs": 2000,
            "endMs": 2300
          },
          {
            "word": "kit.",
            "cleanWord": "kit",
            "startMs": 2370,
            "endMs": 2670
          }
        ],
        "hotspots": [
          {
            "id": "hs_kit",
            "label": "Kit",
            "xPercent": 60,
            "yPercent": 65,
            "emoji": "🧰",
            "soundName": "sparkle",
            "speechText": "Colorful art kit!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "kid",
        "comprehension": {
          "questionText": "Who has an art kit?",
          "questionAudioText": "Who has an art kit?",
          "options": [
            {
              "id": "opt_kid",
              "text": "A happy kid",
              "emoji": "🧒",
              "isCorrect": true
            },
            {
              "id": "opt_rat",
              "text": "A rat",
              "emoji": "🐀",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Dip the pen and draw a red star.",
        "vietnameseMeaning": "Chấm bút mực và vẽ một ngôi sao đỏ.",
        "backgroundTheme": "bg-rose-100",
        "sceneryEmoji": "⭐",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon ngôi sao vẽ sắc màu"
        },
        "wordsTiming": [
          {
            "word": "Dip",
            "cleanWord": "dip",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "pen",
            "cleanWord": "pen",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "and",
            "cleanWord": "and",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "draw",
            "cleanWord": "draw",
            "startMs": 1480,
            "endMs": 1840
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1910,
            "endMs": 2210
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 2280,
            "endMs": 2580
          },
          {
            "word": "star.",
            "cleanWord": "star",
            "startMs": 2650,
            "endMs": 3010
          }
        ],
        "hotspots": [
          {
            "id": "hs_star",
            "label": "Star",
            "xPercent": 50,
            "yPercent": 40,
            "emoji": "⭐",
            "soundName": "magic",
            "speechText": "Twinkle twinkle star!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "dip",
        "comprehension": {
          "questionText": "What did the kid draw?",
          "questionAudioText": "What did the kid draw?",
          "options": [
            {
              "id": "opt_star",
              "text": "A red star",
              "emoji": "⭐",
              "isCorrect": true
            },
            {
              "id": "opt_mud",
              "text": "Mud",
              "emoji": "🪵",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_frog_log",
    "title": "The Green Frog on a Log",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 3 (g, o, u, l, f, b)",
    "stage": 2,
    "ageBand": "4 – 5 Tuổi (Mầm non lớn)",
    "coverEmoji": "🐸",
    "coverVisual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "alt": "Tranh Ehon chú ếch xanh ngồi trên khúc gỗ bên ao"
    },
    "summaryVi": "Chú ếch xanh ngồi trên khúc gỗ ngắm sương mù rồi nhảy tõm xuống ao.",
    "targetPhonics": [
      "f",
      "r",
      "o",
      "g",
      "l"
    ],
    "sightWords": [
      "on",
      "the",
      "into"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "A green frog sat on a brown log.",
        "vietnameseMeaning": "Chú ếch xanh ngồi trên khúc gỗ nâu.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "🪵",
        "visual": {
          "url": "/assets/ehon/ant_pan.jpg",
          "alt": "Tranh Ehon chú ếch ngồi trên khúc gỗ tròn"
        },
        "wordsTiming": [
          {
            "word": "A",
            "cleanWord": "a",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "green",
            "cleanWord": "green",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "frog",
            "cleanWord": "frog",
            "startMs": 890,
            "endMs": 1250
          },
          {
            "word": "sat",
            "cleanWord": "sat",
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "word": "on",
            "cleanWord": "on",
            "startMs": 1690,
            "endMs": 1990
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 2060,
            "endMs": 2360
          },
          {
            "word": "brown",
            "cleanWord": "brown",
            "startMs": 2430,
            "endMs": 2880
          },
          {
            "word": "log.",
            "cleanWord": "log",
            "startMs": 2950,
            "endMs": 3250
          }
        ],
        "hotspots": [
          {
            "id": "hs_frog",
            "label": "Frog",
            "xPercent": 45,
            "yPercent": 50,
            "emoji": "🐸",
            "soundName": "pop",
            "speechText": "Ribbit! Green frog!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "frog",
        "comprehension": {
          "questionText": "Where did the frog sit?",
          "questionAudioText": "Where did the frog sit?",
          "options": [
            {
              "id": "opt_log",
              "text": "On a log",
              "emoji": "🪵",
              "isCorrect": true
            },
            {
              "id": "opt_bus",
              "text": "On a bus",
              "emoji": "🚌",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The frog hops into the clear pond.",
        "vietnameseMeaning": "Chú ếch nhảy tõm xuống làn nước ao trong vắt.",
        "backgroundTheme": "bg-teal-100",
        "sceneryEmoji": "🏞️",
        "visual": {
          "url": "/assets/ehon/three_fish.jpg",
          "alt": "Tranh Ehon chú ếch bơi lội dưới làn nước"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "frog",
            "cleanWord": "frog",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "hops",
            "cleanWord": "hops",
            "startMs": 800,
            "endMs": 1160
          },
          {
            "word": "into",
            "cleanWord": "into",
            "startMs": 1230,
            "endMs": 1590
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1660,
            "endMs": 1960
          },
          {
            "word": "clear",
            "cleanWord": "clear",
            "startMs": 2030,
            "endMs": 2480
          },
          {
            "word": "pond.",
            "cleanWord": "pond",
            "startMs": 2550,
            "endMs": 2910
          }
        ],
        "hotspots": [
          {
            "id": "hs_hop",
            "label": "Hop",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "💦",
            "soundName": "magic",
            "speechText": "Splash! Hop in!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "hop",
        "comprehension": {
          "questionText": "Where does the frog hop?",
          "questionAudioText": "Where does the frog hop?",
          "options": [
            {
              "id": "opt_pond",
              "text": "Into the pond",
              "emoji": "🌊",
              "isCorrect": true
            },
            {
              "id": "opt_bed",
              "text": "Into bed",
              "emoji": "🛏️",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_big_bug",
    "title": "The Big Bug in the Rug",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 3 (b, u, g, r)",
    "stage": 2,
    "ageBand": "4 – 5 Tuổi (Mầm non lớn)",
    "coverEmoji": "🪲",
    "coverVisual": {
      "url": "/assets/ehon/cat_mat.jpg",
      "alt": "Tranh Ehon chú bọ rùa nhỏ nấp trên thảm len"
    },
    "summaryVi": "Chú bọ cánh cam tí hon trốn trong thảm len ấm áp.",
    "targetPhonics": [
      "b",
      "u",
      "g",
      "r",
      "u"
    ],
    "sightWords": [
      "see",
      "the",
      "in"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "I see a big green bug in the rug.",
        "vietnameseMeaning": "Bé nhìn thấy một chú bọ cánh cam trên thảm.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🧶",
        "visual": {
          "url": "/assets/ehon/cat_mat.jpg",
          "alt": "Tranh Ehon chú bọ trên tấm thảm"
        },
        "wordsTiming": [
          {
            "word": "I",
            "cleanWord": "i",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "see",
            "cleanWord": "see",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "big",
            "cleanWord": "big",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "green",
            "cleanWord": "green",
            "startMs": 1480,
            "endMs": 1930
          },
          {
            "word": "bug",
            "cleanWord": "bug",
            "startMs": 2000,
            "endMs": 2300
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 2370,
            "endMs": 2670
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2740,
            "endMs": 3040
          },
          {
            "word": "rug.",
            "cleanWord": "rug",
            "startMs": 3110,
            "endMs": 3410
          }
        ],
        "hotspots": [
          {
            "id": "hs_bug",
            "label": "Bug",
            "xPercent": 55,
            "yPercent": 65,
            "emoji": "🪲",
            "soundName": "pop",
            "speechText": "Tiny cute bug!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "bug",
        "comprehension": {
          "questionText": "What is on the rug?",
          "questionAudioText": "What is on the rug?",
          "options": [
            {
              "id": "opt_bug",
              "text": "A big bug",
              "emoji": "🪲",
              "isCorrect": true
            },
            {
              "id": "opt_fox",
              "text": "A fox",
              "emoji": "🦊",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The bug drinks from a yellow cup.",
        "vietnameseMeaning": "Chú bọ nhấp giọt sương từ chiếc cốc vàng.",
        "backgroundTheme": "bg-yellow-100",
        "sceneryEmoji": "☕",
        "visual": {
          "url": "/assets/ehon/cup.jpg",
          "alt": "Tranh Ehon chiếc cốc vàng thơm mát"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "bug",
            "cleanWord": "bug",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "drinks",
            "cleanWord": "drinks",
            "startMs": 740,
            "endMs": 1280
          },
          {
            "word": "from",
            "cleanWord": "from",
            "startMs": 1350,
            "endMs": 1710
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1780,
            "endMs": 2080
          },
          {
            "word": "yellow",
            "cleanWord": "yellow",
            "startMs": 2150,
            "endMs": 2690
          },
          {
            "word": "cup.",
            "cleanWord": "cup",
            "startMs": 2760,
            "endMs": 3060
          }
        ],
        "hotspots": [
          {
            "id": "hs_cup",
            "label": "Cup",
            "xPercent": 50,
            "yPercent": 50,
            "emoji": "☕",
            "soundName": "sparkle",
            "speechText": "Sweet sip from a cup!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "cup",
        "comprehension": {
          "questionText": "What does the bug drink from?",
          "questionAudioText": "What does the bug drink from?",
          "options": [
            {
              "id": "opt_cup",
              "text": "A yellow cup",
              "emoji": "☕",
              "isCorrect": true
            },
            {
              "id": "opt_tin",
              "text": "A tin box",
              "emoji": "🥫",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_fox_box",
    "title": "Fox in the Box",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 3 (f, o, x, b)",
    "stage": 2,
    "ageBand": "4 – 5 Tuổi (Mầm non lớn)",
    "coverEmoji": "🦊",
    "coverVisual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "alt": "Tranh Ehon chú cáo cam chui vào chiếc hộp gỗ"
    },
    "summaryVi": "Chú cáo tinh nghịch trốn trong chiếc hộp quà sắc màu.",
    "targetPhonics": [
      "f",
      "o",
      "x",
      "b",
      "s"
    ],
    "sightWords": [
      "the",
      "is",
      "in"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The clever fox is in the big box.",
        "vietnameseMeaning": "Chú cáo thông minh trốn trong chiếc hộp lớn.",
        "backgroundTheme": "bg-orange-100",
        "sceneryEmoji": "📦",
        "visual": {
          "url": "/assets/ehon/ant_pan.jpg",
          "alt": "Tranh Ehon chú cáo lấp ló trong hộp"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "clever",
            "cleanWord": "clever",
            "startMs": 370,
            "endMs": 910
          },
          {
            "word": "fox",
            "cleanWord": "fox",
            "startMs": 980,
            "endMs": 1280
          },
          {
            "word": "is",
            "cleanWord": "is",
            "startMs": 1350,
            "endMs": 1650
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1720,
            "endMs": 2020
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2090,
            "endMs": 2390
          },
          {
            "word": "big",
            "cleanWord": "big",
            "startMs": 2460,
            "endMs": 2760
          },
          {
            "word": "box.",
            "cleanWord": "box",
            "startMs": 2830,
            "endMs": 3130
          }
        ],
        "hotspots": [
          {
            "id": "hs_fox",
            "label": "Fox",
            "xPercent": 50,
            "yPercent": 50,
            "emoji": "🦊",
            "soundName": "pop",
            "speechText": "Peekaboo, friendly fox!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "fox",
        "comprehension": {
          "questionText": "Who is in the box?",
          "questionAudioText": "Who is in the box?",
          "options": [
            {
              "id": "opt_fox",
              "text": "The clever fox",
              "emoji": "🦊",
              "isCorrect": true
            },
            {
              "id": "opt_hen",
              "text": "The red hen",
              "emoji": "🐔",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Six little birds look at the fox.",
        "vietnameseMeaning": "Sáu chú chim nhỏ ngắm nhìn chú cáo hiền lành.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🐦",
        "visual": {
          "url": "/assets/ehon/archipelago.jpg",
          "alt": "Tranh Ehon đàn chim bay lượn trên đảo"
        },
        "wordsTiming": [
          {
            "word": "Six",
            "cleanWord": "six",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "little",
            "cleanWord": "little",
            "startMs": 370,
            "endMs": 910
          },
          {
            "word": "birds",
            "cleanWord": "birds",
            "startMs": 980,
            "endMs": 1430
          },
          {
            "word": "look",
            "cleanWord": "look",
            "startMs": 1500,
            "endMs": 1860
          },
          {
            "word": "at",
            "cleanWord": "at",
            "startMs": 1930,
            "endMs": 2230
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2300,
            "endMs": 2600
          },
          {
            "word": "fox.",
            "cleanWord": "fox",
            "startMs": 2670,
            "endMs": 2970
          }
        ],
        "hotspots": [
          {
            "id": "hs_birds",
            "label": "Birds",
            "xPercent": 55,
            "yPercent": 30,
            "emoji": "🐦",
            "soundName": "magic",
            "speechText": "Chirp chirp!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "six",
        "comprehension": {
          "questionText": "How many birds look at the fox?",
          "questionAudioText": "How many birds look at the fox?",
          "options": [
            {
              "id": "opt_six",
              "text": "Six birds",
              "emoji": "6️⃣",
              "isCorrect": true
            },
            {
              "id": "opt_ten",
              "text": "Ten birds",
              "emoji": "🔟",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_red_hen",
    "title": "Red Hen at the Farm",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 2 & 3 (h, e, n, f, b)",
    "stage": 2,
    "ageBand": "4 – 5 Tuổi (Mầm non lớn)",
    "coverEmoji": "🐔",
    "coverVisual": {
      "url": "/assets/ehon/hen.jpg",
      "alt": "Tranh Ehon cô gà mái đỏ xinh xắn"
    },
    "summaryVi": "Cô gà mái đỏ chăm chỉ trồng lúa mạch và làm bánh thơm lừng.",
    "targetPhonics": [
      "h",
      "e",
      "n",
      "f",
      "a",
      "r",
      "m"
    ],
    "sightWords": [
      "went",
      "said",
      "with"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The red hen met a kind brown dog.",
        "vietnameseMeaning": "Cô gà mái đỏ gặp bạn cún nâu tốt bụng.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🌾",
        "visual": {
          "url": "/assets/ehon/hen_dog.jpg",
          "alt": "Tranh Ehon gà mái đỏ trò chuyện cùng cún nâu"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "hen",
            "cleanWord": "hen",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "met",
            "cleanWord": "met",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "kind",
            "cleanWord": "kind",
            "startMs": 1850,
            "endMs": 2210
          },
          {
            "word": "brown",
            "cleanWord": "brown",
            "startMs": 2280,
            "endMs": 2730
          },
          {
            "word": "dog.",
            "cleanWord": "dog",
            "startMs": 2800,
            "endMs": 3100
          }
        ],
        "hotspots": [
          {
            "id": "hs_hen",
            "label": "Red Hen",
            "xPercent": 35,
            "yPercent": 50,
            "emoji": "🐔",
            "soundName": "cluck",
            "speechText": "Cluck cluck! Hello Dog!",
            "animationType": "jump"
          },
          {
            "id": "hs_dog",
            "label": "Brown Dog",
            "xPercent": 65,
            "yPercent": 55,
            "emoji": "🐶",
            "soundName": "bark",
            "speechText": "Woof! Hello Hen!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "hen",
        "comprehension": {
          "questionText": "Who did the red hen meet?",
          "questionAudioText": "Who did the red hen meet on the farm?",
          "options": [
            {
              "id": "opt_dog",
              "text": "A brown dog",
              "emoji": "🐶",
              "isCorrect": true
            },
            {
              "id": "opt_cat",
              "text": "A lazy cat",
              "emoji": "🐱",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "They baked warm bread in the big pan.",
        "vietnameseMeaning": "Các bạn cùng nướng ổ bánh mì thơm phức.",
        "backgroundTheme": "bg-orange-100",
        "sceneryEmoji": "🍞",
        "visual": {
          "url": "/assets/ehon/sam_pan.jpg",
          "alt": "Tranh Ehon chiếc bánh mì thơm trên chảo"
        },
        "wordsTiming": [
          {
            "word": "They",
            "cleanWord": "they",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "baked",
            "cleanWord": "baked",
            "startMs": 430,
            "endMs": 880
          },
          {
            "word": "warm",
            "cleanWord": "warm",
            "startMs": 950,
            "endMs": 1310
          },
          {
            "word": "bread",
            "cleanWord": "bread",
            "startMs": 1380,
            "endMs": 1830
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1900,
            "endMs": 2200
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2270,
            "endMs": 2570
          },
          {
            "word": "big",
            "cleanWord": "big",
            "startMs": 2640,
            "endMs": 2940
          },
          {
            "word": "pan.",
            "cleanWord": "pan",
            "startMs": 3010,
            "endMs": 3310
          }
        ],
        "hotspots": [
          {
            "id": "hs_bread",
            "label": "Bread",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🍞",
            "soundName": "sparkle",
            "speechText": "Yummy warm bread!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "pan",
        "comprehension": {
          "questionText": "What did they bake?",
          "questionAudioText": "What did they bake together?",
          "options": [
            {
              "id": "opt_bread",
              "text": "Warm bread",
              "emoji": "🍞",
              "isCorrect": true
            },
            {
              "id": "opt_rock",
              "text": "A rock",
              "emoji": "🪨",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_rain_train",
    "title": "Rain on the Little Train",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 4 (ai, j, oa, ee, or)",
    "stage": 2,
    "ageBand": "4 – 6 Tuổi",
    "coverEmoji": "🚂",
    "coverVisual": {
      "url": "/assets/ehon/archipelago.jpg",
      "alt": "Tranh Ehon đoàn tàu nhỏ chạy dưới cơn mưa rào"
    },
    "summaryVi": "Đoàn tàu nhỏ bon bon vượt qua cánh đồng hoa dưới màn mưa mát lành.",
    "targetPhonics": [
      "r",
      "ai",
      "n",
      "t",
      "r"
    ],
    "sightWords": [
      "the",
      "goes",
      "through"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Rain falls on the little green train.",
        "vietnameseMeaning": "Cơn mưa rơi tí tách trên đoàn tàu nhỏ màu xanh.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🌧️",
        "visual": {
          "url": "/assets/ehon/archipelago.jpg",
          "alt": "Tranh Ehon đoàn tàu chạy qua thung lũng mưa"
        },
        "wordsTiming": [
          {
            "word": "Rain",
            "cleanWord": "rain",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "falls",
            "cleanWord": "falls",
            "startMs": 430,
            "endMs": 880
          },
          {
            "word": "on",
            "cleanWord": "on",
            "startMs": 950,
            "endMs": 1250
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "word": "little",
            "cleanWord": "little",
            "startMs": 1690,
            "endMs": 2230
          },
          {
            "word": "green",
            "cleanWord": "green",
            "startMs": 2300,
            "endMs": 2750
          },
          {
            "word": "train.",
            "cleanWord": "train",
            "startMs": 2820,
            "endMs": 3270
          }
        ],
        "hotspots": [
          {
            "id": "hs_rain",
            "label": "Rain",
            "xPercent": 50,
            "yPercent": 30,
            "emoji": "🌧️",
            "soundName": "magic",
            "speechText": "Pitter patter rain!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "rain",
        "comprehension": {
          "questionText": "What falls on the train?",
          "questionAudioText": "What falls on the train?",
          "options": [
            {
              "id": "opt_rain",
              "text": "Rain",
              "emoji": "🌧️",
              "isCorrect": true
            },
            {
              "id": "opt_snow",
              "text": "Hot sun",
              "emoji": "☀️",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The train waits by the tall oak tree.",
        "vietnameseMeaning": "Đoàn tàu dừng đón bạn bên gốc cây sồi cao vút.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "🌳",
        "visual": {
          "url": "/assets/ehon/archipelago.jpg",
          "alt": "Tranh Ehon cây sồi bên ga tàu"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "train",
            "cleanWord": "train",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "waits",
            "cleanWord": "waits",
            "startMs": 890,
            "endMs": 1340
          },
          {
            "word": "by",
            "cleanWord": "by",
            "startMs": 1410,
            "endMs": 1710
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1780,
            "endMs": 2080
          },
          {
            "word": "tall",
            "cleanWord": "tall",
            "startMs": 2150,
            "endMs": 2510
          },
          {
            "word": "oak",
            "cleanWord": "oak",
            "startMs": 2580,
            "endMs": 2880
          },
          {
            "word": "tree.",
            "cleanWord": "tree",
            "startMs": 2950,
            "endMs": 3310
          }
        ],
        "hotspots": [
          {
            "id": "hs_tree",
            "label": "Tree",
            "xPercent": 45,
            "yPercent": 45,
            "emoji": "🌳",
            "soundName": "sparkle",
            "speechText": "Mighty tall oak tree!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "tree",
        "comprehension": {
          "questionText": "Where does the train wait?",
          "questionAudioText": "Where does the train wait?",
          "options": [
            {
              "id": "opt_tree",
              "text": "By the tall tree",
              "emoji": "🌳",
              "isCorrect": true
            },
            {
              "id": "opt_bed",
              "text": "In bed",
              "emoji": "🛏️",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_bee_tree",
    "title": "The Busy Bee in the Tree",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 4 (ee, b, t, r)",
    "stage": 2,
    "ageBand": "4 – 6 Tuổi",
    "coverEmoji": "🐝",
    "coverVisual": {
      "url": "/assets/ehon/sun.jpg",
      "alt": "Tranh Ehon chú ong chăm chỉ bay lượn bên cành cây hoa"
    },
    "summaryVi": "Chú ong chăm chỉ bay tìm mật ngọt ngào tặng các bạn nhỏ.",
    "targetPhonics": [
      "b",
      "ee",
      "t",
      "r",
      "ee"
    ],
    "sightWords": [
      "see",
      "the",
      "in"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "A busy bee visits a big green tree.",
        "vietnameseMeaning": "Chú ong chăm chỉ bay đến thăm cây xanh rợp bóng.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "🐝",
        "visual": {
          "url": "/assets/ehon/sun.jpg",
          "alt": "Tranh Ehon chú ong và cây xanh"
        },
        "wordsTiming": [
          {
            "word": "A",
            "cleanWord": "a",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "busy",
            "cleanWord": "busy",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "bee",
            "cleanWord": "bee",
            "startMs": 800,
            "endMs": 1100
          },
          {
            "word": "visits",
            "cleanWord": "visits",
            "startMs": 1170,
            "endMs": 1710
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1780,
            "endMs": 2080
          },
          {
            "word": "big",
            "cleanWord": "big",
            "startMs": 2150,
            "endMs": 2450
          },
          {
            "word": "green",
            "cleanWord": "green",
            "startMs": 2520,
            "endMs": 2970
          },
          {
            "word": "tree.",
            "cleanWord": "tree",
            "startMs": 3040,
            "endMs": 3400
          }
        ],
        "hotspots": [
          {
            "id": "hs_bee",
            "label": "Bee",
            "xPercent": 55,
            "yPercent": 45,
            "emoji": "🐝",
            "soundName": "sparkle",
            "speechText": "Buzzzz! Busy little bee!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "bee",
        "comprehension": {
          "questionText": "Who visits the green tree?",
          "questionAudioText": "Who visits the green tree?",
          "options": [
            {
              "id": "opt_bee",
              "text": "A busy bee",
              "emoji": "🐝",
              "isCorrect": true
            },
            {
              "id": "opt_pig",
              "text": "A pink pig",
              "emoji": "🐷",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The bee finds sweet nectar in seeds.",
        "vietnameseMeaning": "Chú ong tìm thấy mật ngọt lành trong hoa thơm.",
        "backgroundTheme": "bg-yellow-100",
        "sceneryEmoji": "🍯",
        "visual": {
          "url": "/assets/ehon/apple.jpg",
          "alt": "Tranh Ehon hoa trái ngọt ngào"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "bee",
            "cleanWord": "bee",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "finds",
            "cleanWord": "finds",
            "startMs": 740,
            "endMs": 1190
          },
          {
            "word": "sweet",
            "cleanWord": "sweet",
            "startMs": 1260,
            "endMs": 1710
          },
          {
            "word": "nectar",
            "cleanWord": "nectar",
            "startMs": 1780,
            "endMs": 2320
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 2390,
            "endMs": 2690
          },
          {
            "word": "seeds.",
            "cleanWord": "seeds",
            "startMs": 2760,
            "endMs": 3210
          }
        ],
        "hotspots": [
          {
            "id": "hs_sweet",
            "label": "Sweet",
            "xPercent": 50,
            "yPercent": 55,
            "emoji": "🍯",
            "soundName": "magic",
            "speechText": "Sweet and yummy honey!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "sweet",
        "comprehension": {
          "questionText": "What does the bee make?",
          "questionAudioText": "What does the bee make from flowers?",
          "options": [
            {
              "id": "opt_honey",
              "text": "Sweet honey",
              "emoji": "🍯",
              "isCorrect": true
            },
            {
              "id": "opt_mud",
              "text": "Mud",
              "emoji": "🪵",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_goat_boat",
    "title": "Goat in a Wooden Boat",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 4 (oa, g, b, t)",
    "stage": 2,
    "ageBand": "4 – 6 Tuổi",
    "coverEmoji": "⛵",
    "coverVisual": {
      "url": "/assets/ehon/ship.jpg",
      "alt": "Tranh Ehon chú dê chèo chiếc thuyền gỗ trên sông"
    },
    "summaryVi": "Chú dê mặc áo khoác ấm chèo thuyền ngắm phong cảnh bình minh.",
    "targetPhonics": [
      "g",
      "oa",
      "t",
      "b",
      "c"
    ],
    "sightWords": [
      "in",
      "his",
      "the"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The goat wears a coat in the boat.",
        "vietnameseMeaning": "Chú dê mặc áo khoác ấm ngồi trên chiếc thuyền.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🛶",
        "visual": {
          "url": "/assets/ehon/ship.jpg",
          "alt": "Tranh Ehon chú dê trên thuyền gỗ"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "goat",
            "cleanWord": "goat",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "wears",
            "cleanWord": "wears",
            "startMs": 800,
            "endMs": 1250
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "word": "coat",
            "cleanWord": "coat",
            "startMs": 1690,
            "endMs": 2050
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 2120,
            "endMs": 2420
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2490,
            "endMs": 2790
          },
          {
            "word": "boat.",
            "cleanWord": "boat",
            "startMs": 2860,
            "endMs": 3220
          }
        ],
        "hotspots": [
          {
            "id": "hs_boat",
            "label": "Boat",
            "xPercent": 50,
            "yPercent": 65,
            "emoji": "🛶",
            "soundName": "pop",
            "speechText": "Row row row the boat!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "boat",
        "comprehension": {
          "questionText": "What does the goat wear?",
          "questionAudioText": "What does the goat wear in the boat?",
          "options": [
            {
              "id": "opt_coat",
              "text": "A warm coat",
              "emoji": "🧥",
              "isCorrect": true
            },
            {
              "id": "opt_hat",
              "text": "A sun hat",
              "emoji": "👒",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The boat floats along the quiet road.",
        "vietnameseMeaning": "Thuyền trôi bồng bềnh bên con đường làng êm đềm.",
        "backgroundTheme": "bg-teal-100",
        "sceneryEmoji": "🌊",
        "visual": {
          "url": "/assets/ehon/ship.jpg",
          "alt": "Tranh Ehon dòng nước êm đềm thuyền trôi"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "boat",
            "cleanWord": "boat",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "floats",
            "cleanWord": "floats",
            "startMs": 800,
            "endMs": 1340
          },
          {
            "word": "along",
            "cleanWord": "along",
            "startMs": 1410,
            "endMs": 1860
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1930,
            "endMs": 2230
          },
          {
            "word": "quiet",
            "cleanWord": "quiet",
            "startMs": 2300,
            "endMs": 2750
          },
          {
            "word": "road.",
            "cleanWord": "road",
            "startMs": 2820,
            "endMs": 3180
          }
        ],
        "hotspots": [
          {
            "id": "hs_float",
            "label": "Float",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🛟",
            "soundName": "magic",
            "speechText": "Float gently on water!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "goat",
        "comprehension": {
          "questionText": "Where does the boat float?",
          "questionAudioText": "Where does the boat float?",
          "options": [
            {
              "id": "opt_water",
              "text": "On water by the road",
              "emoji": "🌊",
              "isCorrect": true
            },
            {
              "id": "opt_sky",
              "text": "Up in clouds",
              "emoji": "☁️",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_pie_jam",
    "title": "Apple Pie and Sweet Jam",
    "level": 2,
    "levelName": "Level 2: Nhóm âm 4 (ie, j, p, m)",
    "stage": 2,
    "ageBand": "4 – 6 Tuổi",
    "coverEmoji": "🥧",
    "coverVisual": {
      "url": "/assets/ehon/apple.jpg",
      "alt": "Tranh Ehon chiếc bánh táo nướng và hũ mứt dâu"
    },
    "summaryVi": "Bà nướng bánh táo thơm lừng ăn kèm mứt dâu tây ngọt ngào.",
    "targetPhonics": [
      "p",
      "ie",
      "j",
      "a",
      "m"
    ],
    "sightWords": [
      "eat",
      "the",
      "with"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "We eat warm apple pie with red jam.",
        "vietnameseMeaning": "Cả nhà cùng ăn bánh táo ấm áp với mứt dâu đỏ.",
        "backgroundTheme": "bg-rose-100",
        "sceneryEmoji": "🥧",
        "visual": {
          "url": "/assets/ehon/apple.jpg",
          "alt": "Tranh Ehon bánh táo và mứt ngọt"
        },
        "wordsTiming": [
          {
            "word": "We",
            "cleanWord": "we",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "eat",
            "cleanWord": "eat",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "warm",
            "cleanWord": "warm",
            "startMs": 740,
            "endMs": 1100
          },
          {
            "word": "apple",
            "cleanWord": "apple",
            "startMs": 1170,
            "endMs": 1620
          },
          {
            "word": "pie",
            "cleanWord": "pie",
            "startMs": 1690,
            "endMs": 1990
          },
          {
            "word": "with",
            "cleanWord": "with",
            "startMs": 2060,
            "endMs": 2420
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 2490,
            "endMs": 2790
          },
          {
            "word": "jam.",
            "cleanWord": "jam",
            "startMs": 2860,
            "endMs": 3160
          }
        ],
        "hotspots": [
          {
            "id": "hs_pie",
            "label": "Pie",
            "xPercent": 45,
            "yPercent": 55,
            "emoji": "🥧",
            "soundName": "sparkle",
            "speechText": "Delicious apple pie!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "pie",
        "comprehension": {
          "questionText": "What do we eat with jam?",
          "questionAudioText": "What do we eat with sweet jam?",
          "options": [
            {
              "id": "opt_pie",
              "text": "Warm apple pie",
              "emoji": "🥧",
              "isCorrect": true
            },
            {
              "id": "opt_mud",
              "text": "Mud",
              "emoji": "🪵",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The jam is in a shiny glass jar.",
        "vietnameseMeaning": "Mứt được đựng trong chiếc hũ thủy tinh sáng loáng.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🫙",
        "visual": {
          "url": "/assets/ehon/cup.jpg",
          "alt": "Tranh Ehon hũ mứt dâu tây"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "jam",
            "cleanWord": "jam",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "is",
            "cleanWord": "is",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1480,
            "endMs": 1780
          },
          {
            "word": "shiny",
            "cleanWord": "shiny",
            "startMs": 1850,
            "endMs": 2300
          },
          {
            "word": "glass",
            "cleanWord": "glass",
            "startMs": 2370,
            "endMs": 2820
          },
          {
            "word": "jar.",
            "cleanWord": "jar",
            "startMs": 2890,
            "endMs": 3190
          }
        ],
        "hotspots": [
          {
            "id": "hs_jam",
            "label": "Jam",
            "xPercent": 55,
            "yPercent": 50,
            "emoji": "🍓",
            "soundName": "pop",
            "speechText": "Sweet strawberry jam!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "jam",
        "comprehension": {
          "questionText": "Where is the jam kept?",
          "questionAudioText": "Where is the jam kept?",
          "options": [
            {
              "id": "opt_jar",
              "text": "In a jar",
              "emoji": "🫙",
              "isCorrect": true
            },
            {
              "id": "opt_hat",
              "text": "In a hat",
              "emoji": "👒",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_king_ring",
    "title": "The King and the Golden Ring",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 5 (ng, z, w, v, oo)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi (Tiền tiểu học)",
    "coverEmoji": "👑",
    "coverVisual": {
      "url": "/assets/ehon/queen_park.jpg",
      "alt": "Tranh Ehon đức vua đeo chiếc nhẫn vàng"
    },
    "summaryVi": "Vị vua nhân từ tìm thấy chiếc nhẫn vàng lấp lánh trong khu vườn hoàng gia.",
    "targetPhonics": [
      "k",
      "i",
      "ng",
      "r",
      "s"
    ],
    "sightWords": [
      "the",
      "has",
      "in"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The wise king sings a happy song.",
        "vietnameseMeaning": "Vị vua thông thái cất tiếng hát khúc ca vui.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "👑",
        "visual": {
          "url": "/assets/ehon/queen_park.jpg",
          "alt": "Tranh Ehon vị vua hiền từ ca hát"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "wise",
            "cleanWord": "wise",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "king",
            "cleanWord": "king",
            "startMs": 800,
            "endMs": 1160
          },
          {
            "word": "sings",
            "cleanWord": "sings",
            "startMs": 1230,
            "endMs": 1680
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1750,
            "endMs": 2050
          },
          {
            "word": "happy",
            "cleanWord": "happy",
            "startMs": 2120,
            "endMs": 2570
          },
          {
            "word": "song.",
            "cleanWord": "song",
            "startMs": 2640,
            "endMs": 3000
          }
        ],
        "hotspots": [
          {
            "id": "hs_king",
            "label": "King",
            "xPercent": 45,
            "yPercent": 45,
            "emoji": "👑",
            "soundName": "magic",
            "speechText": "Long live the kind King!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "king",
        "comprehension": {
          "questionText": "Who sings a song?",
          "questionAudioText": "Who sings a happy song?",
          "options": [
            {
              "id": "opt_king",
              "text": "The wise king",
              "emoji": "👑",
              "isCorrect": true
            },
            {
              "id": "opt_wolf",
              "text": "A gray wolf",
              "emoji": "🐺",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "The king wears a shiny gold ring.",
        "vietnameseMeaning": "Vị vua đeo chiếc nhẫn vàng sáng lấp lánh.",
        "backgroundTheme": "bg-yellow-100",
        "sceneryEmoji": "💍",
        "visual": {
          "url": "/assets/ehon/queen_coin.jpg",
          "alt": "Tranh Ehon chiếc nhẫn vàng rực rỡ"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "king",
            "cleanWord": "king",
            "startMs": 370,
            "endMs": 730
          },
          {
            "word": "wears",
            "cleanWord": "wears",
            "startMs": 800,
            "endMs": 1250
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "word": "shiny",
            "cleanWord": "shiny",
            "startMs": 1690,
            "endMs": 2140
          },
          {
            "word": "gold",
            "cleanWord": "gold",
            "startMs": 2210,
            "endMs": 2570
          },
          {
            "word": "ring.",
            "cleanWord": "ring",
            "startMs": 2640,
            "endMs": 3000
          }
        ],
        "hotspots": [
          {
            "id": "hs_ring",
            "label": "Ring",
            "xPercent": 55,
            "yPercent": 60,
            "emoji": "💍",
            "soundName": "sparkle",
            "speechText": "Gleaming golden ring!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "ring",
        "comprehension": {
          "questionText": "What does the king wear?",
          "questionAudioText": "What does the king wear on his hand?",
          "options": [
            {
              "id": "opt_ring",
              "text": "A gold ring",
              "emoji": "💍",
              "isCorrect": true
            },
            {
              "id": "opt_sock",
              "text": "A sock",
              "emoji": "🧦",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_moon_spoon",
    "title": "The Moon and the Silver Spoon",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 5 (oo_long, m, s, p, n)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi (Tiền tiểu học)",
    "coverEmoji": "🌕",
    "coverVisual": {
      "url": "/assets/ehon/star.jpg",
      "alt": "Tranh Ehon vầng trăng rằm sáng lung linh soi bóng chiếc thìa bạc"
    },
    "summaryVi": "Dưới ánh trăng rằm lung linh, em bé dùng chiếc thìa bạc ăn bữa tối ấm cúng.",
    "targetPhonics": [
      "m",
      "oo",
      "n",
      "s",
      "p"
    ],
    "sightWords": [
      "shines",
      "in",
      "the"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The round moon glows in the cool room.",
        "vietnameseMeaning": "Vầng trăng tròn tỏa ánh sáng trong căn phòng ấm.",
        "backgroundTheme": "bg-indigo-100",
        "sceneryEmoji": "🌕",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon ánh trăng soi sáng căn phòng"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "round",
            "cleanWord": "round",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "moon",
            "cleanWord": "moon",
            "startMs": 890,
            "endMs": 1250
          },
          {
            "word": "glows",
            "cleanWord": "glows",
            "startMs": 1320,
            "endMs": 1770
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 1840,
            "endMs": 2140
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2210,
            "endMs": 2510
          },
          {
            "word": "cool",
            "cleanWord": "cool",
            "startMs": 2580,
            "endMs": 2940
          },
          {
            "word": "room.",
            "cleanWord": "room",
            "startMs": 3010,
            "endMs": 3370
          }
        ],
        "hotspots": [
          {
            "id": "hs_moon",
            "label": "Moon",
            "xPercent": 50,
            "yPercent": 30,
            "emoji": "🌕",
            "soundName": "sparkle",
            "speechText": "Bright silver moon!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "moon",
        "comprehension": {
          "questionText": "What glows in the room?",
          "questionAudioText": "What glows brightly at night?",
          "options": [
            {
              "id": "opt_moon",
              "text": "The round moon",
              "emoji": "🌕",
              "isCorrect": true
            },
            {
              "id": "opt_sun",
              "text": "The morning sun",
              "emoji": "☀️",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Eat sweet soup with a shiny spoon.",
        "vietnameseMeaning": "Bé ăn món súp ngon bằng chiếc thìa con sáng bóng.",
        "backgroundTheme": "bg-purple-100",
        "sceneryEmoji": "🥄",
        "visual": {
          "url": "/assets/ehon/cup.jpg",
          "alt": "Tranh Ehon bữa ăn ấm cúng với thìa bạc"
        },
        "wordsTiming": [
          {
            "word": "Eat",
            "cleanWord": "eat",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "sweet",
            "cleanWord": "sweet",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "soup",
            "cleanWord": "soup",
            "startMs": 890,
            "endMs": 1250
          },
          {
            "word": "with",
            "cleanWord": "with",
            "startMs": 1320,
            "endMs": 1680
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1750,
            "endMs": 2050
          },
          {
            "word": "shiny",
            "cleanWord": "shiny",
            "startMs": 2120,
            "endMs": 2570
          },
          {
            "word": "spoon.",
            "cleanWord": "spoon",
            "startMs": 2640,
            "endMs": 3090
          }
        ],
        "hotspots": [
          {
            "id": "hs_spoon",
            "label": "Spoon",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🥄",
            "soundName": "magic",
            "speechText": "Silver spoon for soup!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "spoon",
        "comprehension": {
          "questionText": "What do we use to eat soup?",
          "questionAudioText": "What do we use to eat soup?",
          "options": [
            {
              "id": "opt_spoon",
              "text": "A shiny spoon",
              "emoji": "🥄",
              "isCorrect": true
            },
            {
              "id": "opt_fork",
              "text": "A big hammer",
              "emoji": "🔨",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_good_book",
    "title": "A Good Book by the Wood",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 5 (oo_short, b, k, w, d)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi (Tiền tiểu học)",
    "coverEmoji": "📖",
    "coverVisual": {
      "url": "/assets/ehon/sit.jpg",
      "alt": "Tranh Ehon em bé say sưa đọc sách bên ngôi nhà gỗ"
    },
    "summaryVi": "Em bé ngồi đọc cuốn sách tranh Ehon tuyệt đẹp bên bìa rừng thanh bình.",
    "targetPhonics": [
      "b",
      "oo",
      "k",
      "w",
      "l"
    ],
    "sightWords": [
      "read",
      "look",
      "at"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Look at the good book with bright art.",
        "vietnameseMeaning": "Hãy ngắm nhìn cuốn sách tranh đẹp với màu vẽ rực rỡ.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "📖",
        "visual": {
          "url": "/assets/ehon/sit.jpg",
          "alt": "Tranh Ehon cuốn sách tranh mở ra"
        },
        "wordsTiming": [
          {
            "word": "Look",
            "cleanWord": "look",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "at",
            "cleanWord": "at",
            "startMs": 430,
            "endMs": 730
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 800,
            "endMs": 1100
          },
          {
            "word": "good",
            "cleanWord": "good",
            "startMs": 1170,
            "endMs": 1530
          },
          {
            "word": "book",
            "cleanWord": "book",
            "startMs": 1600,
            "endMs": 1960
          },
          {
            "word": "with",
            "cleanWord": "with",
            "startMs": 2030,
            "endMs": 2390
          },
          {
            "word": "bright",
            "cleanWord": "bright",
            "startMs": 2460,
            "endMs": 3000
          },
          {
            "word": "art.",
            "cleanWord": "art",
            "startMs": 3070,
            "endMs": 3370
          }
        ],
        "hotspots": [
          {
            "id": "hs_book",
            "label": "Book",
            "xPercent": 50,
            "yPercent": 55,
            "emoji": "📖",
            "soundName": "sparkle",
            "speechText": "A magical storybook!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "book",
        "comprehension": {
          "questionText": "What are we looking at?",
          "questionAudioText": "What are we looking at?",
          "options": [
            {
              "id": "opt_book",
              "text": "A good book",
              "emoji": "📖",
              "isCorrect": true
            },
            {
              "id": "opt_pan",
              "text": "A frying pan",
              "emoji": "🍳",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "We sit on the wood and cook soup.",
        "vietnameseMeaning": "Chúng mình ngồi trên bậc gỗ và cùng nấu món súp ngon.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🪵",
        "visual": {
          "url": "/assets/ehon/ant_pan.jpg",
          "alt": "Tranh Ehon nấu súp ấm cúng bên nhà gỗ"
        },
        "wordsTiming": [
          {
            "word": "We",
            "cleanWord": "we",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "sit",
            "cleanWord": "sit",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "on",
            "cleanWord": "on",
            "startMs": 740,
            "endMs": 1040
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1110,
            "endMs": 1410
          },
          {
            "word": "wood",
            "cleanWord": "wood",
            "startMs": 1480,
            "endMs": 1840
          },
          {
            "word": "and",
            "cleanWord": "and",
            "startMs": 1910,
            "endMs": 2210
          },
          {
            "word": "cook",
            "cleanWord": "cook",
            "startMs": 2280,
            "endMs": 2640
          },
          {
            "word": "soup.",
            "cleanWord": "soup",
            "startMs": 2710,
            "endMs": 3070
          }
        ],
        "hotspots": [
          {
            "id": "hs_cook",
            "label": "Cook",
            "xPercent": 55,
            "yPercent": 60,
            "emoji": "🧑‍🍳",
            "soundName": "pop",
            "speechText": "Cook delicious food!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "cook",
        "comprehension": {
          "questionText": "Where do the friends sit?",
          "questionAudioText": "Where do the friends sit?",
          "options": [
            {
              "id": "opt_wood",
              "text": "On the wood",
              "emoji": "🪵",
              "isCorrect": true
            },
            {
              "id": "opt_river",
              "text": "In deep river",
              "emoji": "🌊",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_wind_van",
    "title": "Gentle Wind and the Red Van",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 5 (w, v, z, n)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi (Tiền tiểu học)",
    "coverEmoji": "🚐",
    "coverVisual": {
      "url": "/assets/ehon/kite.jpg",
      "alt": "Tranh Ehon ngọn gió nhẹ nâng cánh diều bên chiếc xe dã ngoại"
    },
    "summaryVi": "Làn gió nhẹ thổi mát rượi khi cả nhà cùng đi dã ngoại trên chiếc xe van đỏ.",
    "targetPhonics": [
      "w",
      "i",
      "n",
      "d",
      "v"
    ],
    "sightWords": [
      "blows",
      "the",
      "we"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Cool wind blows the red kite high.",
        "vietnameseMeaning": "Làn gió mát lành nâng cánh diều đỏ bay cao vút.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🪁",
        "visual": {
          "url": "/assets/ehon/kite.jpg",
          "alt": "Tranh Ehon cánh diều bay lượn trong gió"
        },
        "wordsTiming": [
          {
            "word": "Cool",
            "cleanWord": "cool",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "wind",
            "cleanWord": "wind",
            "startMs": 430,
            "endMs": 790
          },
          {
            "word": "blows",
            "cleanWord": "blows",
            "startMs": 860,
            "endMs": 1310
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1380,
            "endMs": 1680
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 1750,
            "endMs": 2050
          },
          {
            "word": "kite",
            "cleanWord": "kite",
            "startMs": 2120,
            "endMs": 2480
          },
          {
            "word": "high.",
            "cleanWord": "high",
            "startMs": 2550,
            "endMs": 2910
          }
        ],
        "hotspots": [
          {
            "id": "hs_wind",
            "label": "Wind",
            "xPercent": 50,
            "yPercent": 35,
            "emoji": "🍃",
            "soundName": "magic",
            "speechText": "Whoosh! Cool wind blows!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "wind",
        "comprehension": {
          "questionText": "What blows the kite high?",
          "questionAudioText": "What blows the kite high?",
          "options": [
            {
              "id": "opt_wind",
              "text": "Cool wind",
              "emoji": "🍃",
              "isCorrect": true
            },
            {
              "id": "opt_car",
              "text": "A heavy rock",
              "emoji": "🪨",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "We drive the red camping van to the zoo.",
        "vietnameseMeaning": "Cả nhà lái chiếc xe van đỏ đến thăm vườn thú.",
        "backgroundTheme": "bg-rose-100",
        "sceneryEmoji": "🚐",
        "visual": {
          "url": "/assets/ehon/giraffe.jpg",
          "alt": "Tranh Ehon vườn thú với các bạn muôn loài"
        },
        "wordsTiming": [
          {
            "word": "We",
            "cleanWord": "we",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "drive",
            "cleanWord": "drive",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 890,
            "endMs": 1190
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 1260,
            "endMs": 1560
          },
          {
            "word": "camping",
            "cleanWord": "camping",
            "startMs": 1630,
            "endMs": 2260
          },
          {
            "word": "van",
            "cleanWord": "van",
            "startMs": 2330,
            "endMs": 2630
          },
          {
            "word": "to",
            "cleanWord": "to",
            "startMs": 2700,
            "endMs": 3000
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 3070,
            "endMs": 3370
          },
          {
            "word": "zoo.",
            "cleanWord": "zoo",
            "startMs": 3440,
            "endMs": 3740
          }
        ],
        "hotspots": [
          {
            "id": "hs_van",
            "label": "Van",
            "xPercent": 45,
            "yPercent": 65,
            "emoji": "🚐",
            "soundName": "pop",
            "speechText": "Beep beep! Safe trip!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "van",
        "comprehension": {
          "questionText": "Where does the family drive to?",
          "questionAudioText": "Where does the family drive to?",
          "options": [
            {
              "id": "opt_zoo",
              "text": "To the zoo",
              "emoji": "🦁",
              "isCorrect": true
            },
            {
              "id": "opt_bed",
              "text": "To bed",
              "emoji": "🛏️",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_ship_fog",
    "title": "Ship in the Silver Fog",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 6 (sh, ch, th, y, x)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi (Tiền tiểu học)",
    "coverEmoji": "🚢",
    "coverVisual": {
      "url": "/assets/ehon/ship.jpg",
      "alt": "Tranh Ehon con tàu rẽ sóng ra khơi"
    },
    "summaryVi": "Chuyến hải trình kỳ thú của con tàu vượt qua làn sương mù khám phá vùng đất mới.",
    "targetPhonics": [
      "sh",
      "ch",
      "th",
      "f",
      "o",
      "g"
    ],
    "sightWords": [
      "into",
      "went",
      "saw"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The big ship went into thick white fog.",
        "vietnameseMeaning": "Con tàu lớn rẽ sóng tiến vào làn sương mù trắng xóa.",
        "backgroundTheme": "bg-slate-100",
        "sceneryEmoji": "🌫️",
        "visual": {
          "url": "/assets/ehon/ship.jpg",
          "alt": "Tranh Ehon con tàu trong sương mù"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "big",
            "cleanWord": "big",
            "startMs": 370,
            "endMs": 670
          },
          {
            "word": "ship",
            "cleanWord": "ship",
            "startMs": 740,
            "endMs": 1100
          },
          {
            "word": "went",
            "cleanWord": "went",
            "startMs": 1170,
            "endMs": 1530
          },
          {
            "word": "into",
            "cleanWord": "into",
            "startMs": 1600,
            "endMs": 1960
          },
          {
            "word": "thick",
            "cleanWord": "thick",
            "startMs": 2030,
            "endMs": 2480
          },
          {
            "word": "white",
            "cleanWord": "white",
            "startMs": 2550,
            "endMs": 3000
          },
          {
            "word": "fog.",
            "cleanWord": "fog",
            "startMs": 3070,
            "endMs": 3370
          }
        ],
        "hotspots": [
          {
            "id": "hs_ship",
            "label": "Ship",
            "xPercent": 50,
            "yPercent": 45,
            "emoji": "🚢",
            "soundName": "ship_horn",
            "speechText": "Toot toot! The big ship!",
            "animationType": "bounce"
          },
          {
            "id": "hs_bell",
            "label": "Fog Bell",
            "xPercent": 25,
            "yPercent": 35,
            "emoji": "🔔",
            "soundName": "chime",
            "speechText": "Ding dong! Watch out for fog!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "ship",
        "comprehension": {
          "questionText": "What went into the white fog?",
          "questionAudioText": "What went into the white fog?",
          "options": [
            {
              "id": "opt_ship",
              "text": "The big ship",
              "emoji": "🚢",
              "isCorrect": true
            },
            {
              "id": "opt_bus",
              "text": "A yellow bus",
              "emoji": "🚌",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Three silver fish swim under the ship.",
        "vietnameseMeaning": "Ba chú cá bạc tung tăng bơi dưới thân tàu.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "🐟",
        "visual": {
          "url": "/assets/ehon/three_fish.jpg",
          "alt": "Tranh Ehon ba chú cá bơi lội dưới biển xanh"
        },
        "wordsTiming": [
          {
            "word": "Three",
            "cleanWord": "three",
            "startMs": 0,
            "endMs": 450
          },
          {
            "word": "silver",
            "cleanWord": "silver",
            "startMs": 520,
            "endMs": 1060
          },
          {
            "word": "fish",
            "cleanWord": "fish",
            "startMs": 1130,
            "endMs": 1490
          },
          {
            "word": "swim",
            "cleanWord": "swim",
            "startMs": 1560,
            "endMs": 1920
          },
          {
            "word": "under",
            "cleanWord": "under",
            "startMs": 1990,
            "endMs": 2440
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2510,
            "endMs": 2810
          },
          {
            "word": "ship.",
            "cleanWord": "ship",
            "startMs": 2880,
            "endMs": 3240
          }
        ],
        "hotspots": [
          {
            "id": "hs_fish",
            "label": "Three Fish",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "🐟",
            "soundName": "bubble",
            "speechText": "Splish splash! Three friends!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "fish",
        "comprehension": {
          "questionText": "How many fish swim under the ship?",
          "questionAudioText": "How many fish swim under the ship?",
          "options": [
            {
              "id": "opt_three",
              "text": "Three fish",
              "emoji": "🐟🐟🐟",
              "isCorrect": true
            },
            {
              "id": "opt_one",
              "text": "One frog",
              "emoji": "🐸",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_chip_chat",
    "title": "Chip the Chick and His Chat",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 6 (ch, sh, th)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi",
    "coverEmoji": "🐥",
    "coverVisual": {
      "url": "/assets/ehon/hen.jpg",
      "alt": "Tranh Ehon chú gà con lông vàng trò chuyện ríu rít"
    },
    "summaryVi": "Chú gà con Chip trò chuyện vui vẻ cùng các bạn bên hàng rào hoa.",
    "targetPhonics": [
      "ch",
      "i",
      "p",
      "a",
      "t"
    ],
    "sightWords": [
      "with",
      "his",
      "said"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Chip the little yellow chick can chat.",
        "vietnameseMeaning": "Chú gà con Chip líu lo trò chuyện cả ngày.",
        "backgroundTheme": "bg-yellow-100",
        "sceneryEmoji": "🐥",
        "visual": {
          "url": "/assets/ehon/hen.jpg",
          "alt": "Tranh Ehon chú gà con líu lo"
        },
        "wordsTiming": [
          {
            "word": "Chip",
            "cleanWord": "chip",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 430,
            "endMs": 730
          },
          {
            "word": "little",
            "cleanWord": "little",
            "startMs": 800,
            "endMs": 1340
          },
          {
            "word": "yellow",
            "cleanWord": "yellow",
            "startMs": 1410,
            "endMs": 1950
          },
          {
            "word": "chick",
            "cleanWord": "chick",
            "startMs": 2020,
            "endMs": 2470
          },
          {
            "word": "can",
            "cleanWord": "can",
            "startMs": 2540,
            "endMs": 2840
          },
          {
            "word": "chat.",
            "cleanWord": "chat",
            "startMs": 2910,
            "endMs": 3270
          }
        ],
        "hotspots": [
          {
            "id": "hs_chick",
            "label": "Chick",
            "xPercent": 50,
            "yPercent": 50,
            "emoji": "🐥",
            "soundName": "sparkle",
            "speechText": "Cheep cheep! I am Chip!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "chick",
        "comprehension": {
          "questionText": "Who can chat all day?",
          "questionAudioText": "Who can chat all day?",
          "options": [
            {
              "id": "opt_chick",
              "text": "Chip the chick",
              "emoji": "🐥",
              "isCorrect": true
            },
            {
              "id": "opt_ox",
              "text": "An ox",
              "emoji": "🐂",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Touch your chin and chop the sweet carrots.",
        "vietnameseMeaning": "Chạm tay vào cằm và cùng thái củ cà rốt giòn ngọt.",
        "backgroundTheme": "bg-orange-100",
        "sceneryEmoji": "🥕",
        "visual": {
          "url": "/assets/ehon/cup.jpg",
          "alt": "Tranh Ehon củ cà rốt ngon lành"
        },
        "wordsTiming": [
          {
            "word": "Touch",
            "cleanWord": "touch",
            "startMs": 0,
            "endMs": 450
          },
          {
            "word": "your",
            "cleanWord": "your",
            "startMs": 520,
            "endMs": 880
          },
          {
            "word": "chin",
            "cleanWord": "chin",
            "startMs": 950,
            "endMs": 1310
          },
          {
            "word": "and",
            "cleanWord": "and",
            "startMs": 1380,
            "endMs": 1680
          },
          {
            "word": "chop",
            "cleanWord": "chop",
            "startMs": 1750,
            "endMs": 2110
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2180,
            "endMs": 2480
          },
          {
            "word": "sweet",
            "cleanWord": "sweet",
            "startMs": 2550,
            "endMs": 3000
          },
          {
            "word": "carrots.",
            "cleanWord": "carrots",
            "startMs": 3070,
            "endMs": 3700
          }
        ],
        "hotspots": [
          {
            "id": "hs_chin",
            "label": "Chin",
            "xPercent": 50,
            "yPercent": 45,
            "emoji": "😊",
            "soundName": "pop",
            "speechText": "Touch your smiling chin!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "chin",
        "comprehension": {
          "questionText": "What does Chip touch?",
          "questionAudioText": "What does Chip touch with his wing?",
          "options": [
            {
              "id": "opt_chin",
              "text": "His chin",
              "emoji": "😊",
              "isCorrect": true
            },
            {
              "id": "opt_feet",
              "text": "His feet",
              "emoji": "🦶",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_three_moths",
    "title": "Three Little Moths in the Night",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 6 (th_unvoiced, th_voiced)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi",
    "coverEmoji": "🦋",
    "coverVisual": {
      "url": "/assets/ehon/star.jpg",
      "alt": "Tranh Ehon ba chú bướm đêm vỗ cánh nhẹ nhàng bên ánh đèn"
    },
    "summaryVi": "Ba chú bướm đêm vỗ cánh bay theo lối đi lát đá ngắm trăng sao.",
    "targetPhonics": [
      "th",
      "r",
      "ee",
      "m",
      "o"
    ],
    "sightWords": [
      "fly",
      "by",
      "the"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Three soft moths fly along the garden path.",
        "vietnameseMeaning": "Ba chú bướm đêm bay lượn dọc theo lối đi trong vườn.",
        "backgroundTheme": "bg-indigo-100",
        "sceneryEmoji": "🛤️",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon ba chú bướm đêm bên con đường đá"
        },
        "wordsTiming": [
          {
            "word": "Three",
            "cleanWord": "three",
            "startMs": 0,
            "endMs": 450
          },
          {
            "word": "soft",
            "cleanWord": "soft",
            "startMs": 520,
            "endMs": 880
          },
          {
            "word": "moths",
            "cleanWord": "moths",
            "startMs": 950,
            "endMs": 1400
          },
          {
            "word": "fly",
            "cleanWord": "fly",
            "startMs": 1470,
            "endMs": 1770
          },
          {
            "word": "along",
            "cleanWord": "along",
            "startMs": 1840,
            "endMs": 2290
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2360,
            "endMs": 2660
          },
          {
            "word": "garden",
            "cleanWord": "garden",
            "startMs": 2730,
            "endMs": 3270
          },
          {
            "word": "path.",
            "cleanWord": "path",
            "startMs": 3340,
            "endMs": 3700
          }
        ],
        "hotspots": [
          {
            "id": "hs_three",
            "label": "Three",
            "xPercent": 50,
            "yPercent": 40,
            "emoji": "🦋",
            "soundName": "magic",
            "speechText": "One, two, three little moths!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "three",
        "comprehension": {
          "questionText": "How many moths fly in the garden?",
          "questionAudioText": "How many moths fly in the garden?",
          "options": [
            {
              "id": "opt_three",
              "text": "Three moths",
              "emoji": "3️⃣",
              "isCorrect": true
            },
            {
              "id": "opt_ten",
              "text": "Ten moths",
              "emoji": "🔟",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "They have thin wings that shine in starlight.",
        "vietnameseMeaning": "Những đôi cánh mỏng manh lấp lánh dưới ánh ngàn sao.",
        "backgroundTheme": "bg-purple-100",
        "sceneryEmoji": "✨",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon cánh bướm lấp lánh ánh sao"
        },
        "wordsTiming": [
          {
            "word": "They",
            "cleanWord": "they",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "have",
            "cleanWord": "have",
            "startMs": 430,
            "endMs": 790
          },
          {
            "word": "thin",
            "cleanWord": "thin",
            "startMs": 860,
            "endMs": 1220
          },
          {
            "word": "wings",
            "cleanWord": "wings",
            "startMs": 1290,
            "endMs": 1740
          },
          {
            "word": "that",
            "cleanWord": "that",
            "startMs": 1810,
            "endMs": 2170
          },
          {
            "word": "shine",
            "cleanWord": "shine",
            "startMs": 2240,
            "endMs": 2690
          },
          {
            "word": "in",
            "cleanWord": "in",
            "startMs": 2760,
            "endMs": 3060
          },
          {
            "word": "starlight.",
            "cleanWord": "starlight",
            "startMs": 3130,
            "endMs": 3940
          }
        ],
        "hotspots": [
          {
            "id": "hs_thin",
            "label": "Thin Wings",
            "xPercent": 50,
            "yPercent": 55,
            "emoji": "🪽",
            "soundName": "sparkle",
            "speechText": "Delicate glowing wings!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "thin",
        "comprehension": {
          "questionText": "What kind of wings do the moths have?",
          "questionAudioText": "What kind of wings do the moths have?",
          "options": [
            {
              "id": "opt_thin",
              "text": "Thin shiny wings",
              "emoji": "✨",
              "isCorrect": true
            },
            {
              "id": "opt_heavy",
              "text": "Heavy iron wings",
              "emoji": "🪨",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_this_that",
    "title": "This Little Box and That Big Star",
    "level": 3,
    "levelName": "Level 3: Nhóm âm 6 (th_voiced, x)",
    "stage": 3,
    "ageBand": "5 – 6 Tuổi",
    "coverEmoji": "📦",
    "coverVisual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "alt": "Tranh Ehon chiếc hộp báu vật nhỏ và ngôi sao trên cao"
    },
    "summaryVi": "Bé phân biệt đồ vật ở gần và ở xa qua chiếc hộp và ngôi sao lung linh.",
    "targetPhonics": [
      "th",
      "i",
      "s",
      "t",
      "a"
    ],
    "sightWords": [
      "this",
      "that",
      "look"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "This is a small box with six shells.",
        "vietnameseMeaning": "Đây là chiếc hộp nhỏ đựng sáu vỏ ốc xinh.",
        "backgroundTheme": "bg-teal-100",
        "sceneryEmoji": "📦",
        "visual": {
          "url": "/assets/ehon/ant_pan.jpg",
          "alt": "Tranh Ehon chiếc hộp đựng vỏ ốc"
        },
        "wordsTiming": [
          {
            "word": "This",
            "cleanWord": "this",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "is",
            "cleanWord": "is",
            "startMs": 430,
            "endMs": 730
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 800,
            "endMs": 1100
          },
          {
            "word": "small",
            "cleanWord": "small",
            "startMs": 1170,
            "endMs": 1620
          },
          {
            "word": "box",
            "cleanWord": "box",
            "startMs": 1690,
            "endMs": 1990
          },
          {
            "word": "with",
            "cleanWord": "with",
            "startMs": 2060,
            "endMs": 2420
          },
          {
            "word": "six",
            "cleanWord": "six",
            "startMs": 2490,
            "endMs": 2790
          },
          {
            "word": "shells.",
            "cleanWord": "shells",
            "startMs": 2860,
            "endMs": 3400
          }
        ],
        "hotspots": [
          {
            "id": "hs_box",
            "label": "Box",
            "xPercent": 50,
            "yPercent": 60,
            "emoji": "📦",
            "soundName": "pop",
            "speechText": "This is my treasure box!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "this",
        "comprehension": {
          "questionText": "What is inside this box?",
          "questionAudioText": "What is inside this box?",
          "options": [
            {
              "id": "opt_shells",
              "text": "Six shiny shells",
              "emoji": "🐚",
              "isCorrect": true
            },
            {
              "id": "opt_dirt",
              "text": "Cold water",
              "emoji": "💧",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Look at that soaring golden star above!",
        "vietnameseMeaning": "Hãy ngắm nhìn ngôi sao vàng lấp lánh đằng xa kia kìa!",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "⭐",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon ngôi sao vàng trên bầu trời"
        },
        "wordsTiming": [
          {
            "word": "Look",
            "cleanWord": "look",
            "startMs": 0,
            "endMs": 360
          },
          {
            "word": "at",
            "cleanWord": "at",
            "startMs": 430,
            "endMs": 730
          },
          {
            "word": "that",
            "cleanWord": "that",
            "startMs": 800,
            "endMs": 1160
          },
          {
            "word": "soaring",
            "cleanWord": "soaring",
            "startMs": 1230,
            "endMs": 1860
          },
          {
            "word": "golden",
            "cleanWord": "golden",
            "startMs": 1930,
            "endMs": 2470
          },
          {
            "word": "star",
            "cleanWord": "star",
            "startMs": 2540,
            "endMs": 2900
          },
          {
            "word": "above!",
            "cleanWord": "above",
            "startMs": 2970,
            "endMs": 3420
          }
        ],
        "hotspots": [
          {
            "id": "hs_that",
            "label": "That Star",
            "xPercent": 55,
            "yPercent": 35,
            "emoji": "⭐",
            "soundName": "sparkle",
            "speechText": "Look at that bright star!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "that",
        "comprehension": {
          "questionText": "Where is that bright star?",
          "questionAudioText": "Where is that bright star?",
          "options": [
            {
              "id": "opt_above",
              "text": "Up in the sky",
              "emoji": "🌌",
              "isCorrect": true
            },
            {
              "id": "opt_under",
              "text": "Under the rug",
              "emoji": "🧶",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_queen_star",
    "title": "The Queen and the Star Coin",
    "level": 4,
    "levelName": "Level 4: Vần phức & Luyện đọc lưu loát (qu, oi, ou, ar, er)",
    "stage": 4,
    "ageBand": "6 – 8 Tuổi (Tiểu học Lớp 1-2)",
    "coverEmoji": "👑",
    "coverVisual": {
      "url": "/assets/ehon/queen_park.jpg",
      "alt": "Tranh Ehon nữ hoàng dạo bước trong công viên"
    },
    "summaryVi": "Nữ hoàng tìm thấy đồng tiền ngôi sao lấp lánh trong khu vườn cổ tích.",
    "targetPhonics": [
      "qu",
      "oi",
      "ou",
      "ar",
      "er",
      "ue"
    ],
    "sightWords": [
      "found",
      "under",
      "shining"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The queen went to the green park.",
        "vietnameseMeaning": "Nữ hoàng đi dạo vào công viên rợp bóng cây xanh.",
        "backgroundTheme": "bg-emerald-100",
        "sceneryEmoji": "🏰",
        "visual": {
          "url": "/assets/ehon/queen_park.jpg",
          "alt": "Tranh Ehon nữ hoàng trong công viên xanh"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "queen",
            "cleanWord": "queen",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "went",
            "cleanWord": "went",
            "startMs": 890,
            "endMs": 1250
          },
          {
            "word": "to",
            "cleanWord": "to",
            "startMs": 1320,
            "endMs": 1620
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 1690,
            "endMs": 1990
          },
          {
            "word": "green",
            "cleanWord": "green",
            "startMs": 2060,
            "endMs": 2510
          },
          {
            "word": "park.",
            "cleanWord": "park",
            "startMs": 2580,
            "endMs": 2940
          }
        ],
        "hotspots": [
          {
            "id": "hs_queen",
            "label": "Queen",
            "xPercent": 40,
            "yPercent": 45,
            "emoji": "👑",
            "soundName": "fanfare",
            "speechText": "Greetings from the Queen!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "queen",
        "comprehension": {
          "questionText": "Where did the queen go?",
          "questionAudioText": "Where did the queen go?",
          "options": [
            {
              "id": "opt_park",
              "text": "To the green park",
              "emoji": "🏞️",
              "isCorrect": true
            },
            {
              "id": "opt_boat",
              "text": "To a boat",
              "emoji": "🛶",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "She found a bright star coin on the ground.",
        "vietnameseMeaning": "Bà tìm thấy một đồng xu ngôi sao sáng rực trên mặt đất.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🪙",
        "visual": {
          "url": "/assets/ehon/queen_coin.jpg",
          "alt": "Tranh Ehon nữ hoàng nâng niu đồng tiền sao vàng"
        },
        "wordsTiming": [
          {
            "word": "She",
            "cleanWord": "she",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "found",
            "cleanWord": "found",
            "startMs": 370,
            "endMs": 820
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 890,
            "endMs": 1190
          },
          {
            "word": "bright",
            "cleanWord": "bright",
            "startMs": 1260,
            "endMs": 1800
          },
          {
            "word": "star",
            "cleanWord": "star",
            "startMs": 1870,
            "endMs": 2230
          },
          {
            "word": "coin",
            "cleanWord": "coin",
            "startMs": 2300,
            "endMs": 2660
          },
          {
            "word": "on",
            "cleanWord": "on",
            "startMs": 2730,
            "endMs": 3030
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 3100,
            "endMs": 3400
          },
          {
            "word": "ground.",
            "cleanWord": "ground",
            "startMs": 3470,
            "endMs": 4010
          }
        ],
        "hotspots": [
          {
            "id": "hs_coin",
            "label": "Star Coin",
            "xPercent": 65,
            "yPercent": 65,
            "emoji": "🪙",
            "soundName": "sparkle",
            "speechText": "A magic shiny coin!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "coin",
        "comprehension": {
          "questionText": "What did the queen find on the ground?",
          "questionAudioText": "What did the queen find on the ground?",
          "options": [
            {
              "id": "opt_coin",
              "text": "A star coin",
              "emoji": "🪙",
              "isCorrect": true
            },
            {
              "id": "opt_rock",
              "text": "A gray rock",
              "emoji": "🪨",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_clown_cloud",
    "title": "The Happy Clown on a Cloud",
    "level": 4,
    "levelName": "Level 4: Nhóm âm 7 (ou, ar, er)",
    "stage": 4,
    "ageBand": "6 – 8 Tuổi (Tiểu học)",
    "coverEmoji": "☁️",
    "coverVisual": {
      "url": "/assets/ehon/archipelago.jpg",
      "alt": "Tranh Ehon đám mây trắng bồng bềnh như kẹo bông"
    },
    "summaryVi": "Chú hề vui tính nhào lộn trên đám mây trắng và cất tiếng reo vui.",
    "targetPhonics": [
      "c",
      "l",
      "ou",
      "d",
      "s"
    ],
    "sightWords": [
      "shout",
      "loud",
      "over"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "A fluffy white cloud floats over the town.",
        "vietnameseMeaning": "Đám mây trắng bồng bềnh trôi qua thị trấn nhỏ.",
        "backgroundTheme": "bg-sky-100",
        "sceneryEmoji": "☁️",
        "visual": {
          "url": "/assets/ehon/archipelago.jpg",
          "alt": "Tranh Ehon mây trắng trên nền trời xanh"
        },
        "wordsTiming": [
          {
            "word": "A",
            "cleanWord": "a",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "fluffy",
            "cleanWord": "fluffy",
            "startMs": 370,
            "endMs": 910
          },
          {
            "word": "white",
            "cleanWord": "white",
            "startMs": 980,
            "endMs": 1430
          },
          {
            "word": "cloud",
            "cleanWord": "cloud",
            "startMs": 1500,
            "endMs": 1950
          },
          {
            "word": "floats",
            "cleanWord": "floats",
            "startMs": 2020,
            "endMs": 2560
          },
          {
            "word": "over",
            "cleanWord": "over",
            "startMs": 2630,
            "endMs": 2990
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 3060,
            "endMs": 3360
          },
          {
            "word": "town.",
            "cleanWord": "town",
            "startMs": 3430,
            "endMs": 3790
          }
        ],
        "hotspots": [
          {
            "id": "hs_cloud",
            "label": "Cloud",
            "xPercent": 50,
            "yPercent": 35,
            "emoji": "☁️",
            "soundName": "magic",
            "speechText": "Fluffy floating cloud!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "cloud",
        "comprehension": {
          "questionText": "What floats over the town?",
          "questionAudioText": "What floats over the town?",
          "options": [
            {
              "id": "opt_cloud",
              "text": "A fluffy cloud",
              "emoji": "☁️",
              "isCorrect": true
            },
            {
              "id": "opt_bed",
              "text": "A big bed",
              "emoji": "🛏️",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Shout loud with joy and count the stars!",
        "vietnameseMeaning": "Cùng reo to vui sướng và đếm những vì sao sáng!",
        "backgroundTheme": "bg-indigo-100",
        "sceneryEmoji": "⭐",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon ngàn sao lấp lánh ban đêm"
        },
        "wordsTiming": [
          {
            "word": "Shout",
            "cleanWord": "shout",
            "startMs": 0,
            "endMs": 450
          },
          {
            "word": "loud",
            "cleanWord": "loud",
            "startMs": 520,
            "endMs": 880
          },
          {
            "word": "with",
            "cleanWord": "with",
            "startMs": 950,
            "endMs": 1310
          },
          {
            "word": "joy",
            "cleanWord": "joy",
            "startMs": 1380,
            "endMs": 1680
          },
          {
            "word": "and",
            "cleanWord": "and",
            "startMs": 1750,
            "endMs": 2050
          },
          {
            "word": "count",
            "cleanWord": "count",
            "startMs": 2120,
            "endMs": 2570
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2640,
            "endMs": 2940
          },
          {
            "word": "stars!",
            "cleanWord": "stars",
            "startMs": 3010,
            "endMs": 3460
          }
        ],
        "hotspots": [
          {
            "id": "hs_shout",
            "label": "Shout",
            "xPercent": 50,
            "yPercent": 55,
            "emoji": "📢",
            "soundName": "sparkle",
            "speechText": "Hooray for reading stars!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "shout",
        "comprehension": {
          "questionText": "What do we count at night?",
          "questionAudioText": "What do we count in the night sky?",
          "options": [
            {
              "id": "opt_stars",
              "text": "Bright stars",
              "emoji": "⭐",
              "isCorrect": true
            },
            {
              "id": "opt_pans",
              "text": "Hot pans",
              "emoji": "🍳",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_blue_clue",
    "title": "The Blue Secret Clue",
    "level": 4,
    "levelName": "Level 4: Nhóm âm 7 (ue, er, ar)",
    "stage": 4,
    "ageBand": "6 – 8 Tuổi (Tiểu học)",
    "coverEmoji": "🔍",
    "coverVisual": {
      "url": "/assets/ehon/archipelago.jpg",
      "alt": "Tranh Ehon bản đồ thám hiểm với manh mối bí ẩn"
    },
    "summaryVi": "Bé tìm thấy manh mối màu xanh dẫn lối đến kho báu tri thức trên đảo.",
    "targetPhonics": [
      "b",
      "l",
      "ue",
      "c",
      "l"
    ],
    "sightWords": [
      "find",
      "secret",
      "under"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "Follow the blue clue painted on the rock.",
        "vietnameseMeaning": "Lần theo manh mối màu xanh vẽ trên phiến đá.",
        "backgroundTheme": "bg-cyan-100",
        "sceneryEmoji": "🔍",
        "visual": {
          "url": "/assets/ehon/archipelago.jpg",
          "alt": "Tranh Ehon manh mối trên phiến đá"
        },
        "wordsTiming": [
          {
            "word": "Follow",
            "cleanWord": "follow",
            "startMs": 0,
            "endMs": 540
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 610,
            "endMs": 910
          },
          {
            "word": "blue",
            "cleanWord": "blue",
            "startMs": 980,
            "endMs": 1340
          },
          {
            "word": "clue",
            "cleanWord": "clue",
            "startMs": 1410,
            "endMs": 1770
          },
          {
            "word": "painted",
            "cleanWord": "painted",
            "startMs": 1840,
            "endMs": 2470
          },
          {
            "word": "on",
            "cleanWord": "on",
            "startMs": 2540,
            "endMs": 2840
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2910,
            "endMs": 3210
          },
          {
            "word": "rock.",
            "cleanWord": "rock",
            "startMs": 3280,
            "endMs": 3640
          }
        ],
        "hotspots": [
          {
            "id": "hs_clue",
            "label": "Clue",
            "xPercent": 48,
            "yPercent": 55,
            "emoji": "🔍",
            "soundName": "magic",
            "speechText": "A secret blue clue!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "clue",
        "comprehension": {
          "questionText": "What color is the secret clue?",
          "questionAudioText": "What color is the secret clue?",
          "options": [
            {
              "id": "opt_blue",
              "text": "Bright blue",
              "emoji": "💙",
              "isCorrect": true
            },
            {
              "id": "opt_black",
              "text": "Dark black",
              "emoji": "⬛",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "Use sticky glue to seal the treasure letter.",
        "vietnameseMeaning": "Dùng hồ dán niêm phong lá thư kho báu bí mật.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "✉️",
        "visual": {
          "url": "/assets/ehon/cup.jpg",
          "alt": "Tranh Ehon dán phong bì thư báu vật"
        },
        "wordsTiming": [
          {
            "word": "Use",
            "cleanWord": "use",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "sticky",
            "cleanWord": "sticky",
            "startMs": 370,
            "endMs": 910
          },
          {
            "word": "glue",
            "cleanWord": "glue",
            "startMs": 980,
            "endMs": 1340
          },
          {
            "word": "to",
            "cleanWord": "to",
            "startMs": 1410,
            "endMs": 1710
          },
          {
            "word": "seal",
            "cleanWord": "seal",
            "startMs": 1780,
            "endMs": 2140
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 2210,
            "endMs": 2510
          },
          {
            "word": "treasure",
            "cleanWord": "treasure",
            "startMs": 2580,
            "endMs": 3300
          },
          {
            "word": "letter.",
            "cleanWord": "letter",
            "startMs": 3370,
            "endMs": 3910
          }
        ],
        "hotspots": [
          {
            "id": "hs_glue",
            "label": "Glue",
            "xPercent": 55,
            "yPercent": 60,
            "emoji": "🧴",
            "soundName": "pop",
            "speechText": "Stick it with craft glue!",
            "animationType": "bounce"
          }
        ],
        "speakingTargetWord": "glue",
        "comprehension": {
          "questionText": "What do we use to seal the letter?",
          "questionAudioText": "What do we use to seal the letter?",
          "options": [
            {
              "id": "opt_glue",
              "text": "Craft glue",
              "emoji": "🧴",
              "isCorrect": true
            },
            {
              "id": "opt_mud",
              "text": "Wet mud",
              "emoji": "🪵",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  },
  {
    "id": "story_farmer_barn",
    "title": "The Tiger and the Farmer Barn",
    "level": 4,
    "levelName": "Level 4: Nhóm âm 7 (ar, er, tiger, barn)",
    "stage": 4,
    "ageBand": "6 – 8 Tuổi (Tiểu học)",
    "coverEmoji": "🚜",
    "coverVisual": {
      "url": "/assets/ehon/hen_dog.jpg",
      "alt": "Tranh Ehon nông trại của bác nông dân với nhà kho đỏ"
    },
    "summaryVi": "Bác nông dân và chị gái lái xe hơi đến nhà kho thóc chăm sóc các bạn thú.",
    "targetPhonics": [
      "f",
      "ar",
      "m",
      "e",
      "r",
      "b"
    ],
    "sightWords": [
      "drive",
      "into",
      "with"
    ],
    "pages": [
      {
        "pageNumber": 1,
        "sentence": "The farmer drives a red car to the barn.",
        "vietnameseMeaning": "Bác nông dân lái chiếc xe hơi đỏ đến nhà kho thóc.",
        "backgroundTheme": "bg-amber-100",
        "sceneryEmoji": "🚜",
        "visual": {
          "url": "/assets/ehon/hen_dog.jpg",
          "alt": "Tranh Ehon bác nông dân bên nhà kho đỏ"
        },
        "wordsTiming": [
          {
            "word": "The",
            "cleanWord": "the",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "farmer",
            "cleanWord": "farmer",
            "startMs": 370,
            "endMs": 910
          },
          {
            "word": "drives",
            "cleanWord": "drives",
            "startMs": 980,
            "endMs": 1520
          },
          {
            "word": "a",
            "cleanWord": "a",
            "startMs": 1590,
            "endMs": 1890
          },
          {
            "word": "red",
            "cleanWord": "red",
            "startMs": 1960,
            "endMs": 2260
          },
          {
            "word": "car",
            "cleanWord": "car",
            "startMs": 2330,
            "endMs": 2630
          },
          {
            "word": "to",
            "cleanWord": "to",
            "startMs": 2700,
            "endMs": 3000
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 3070,
            "endMs": 3370
          },
          {
            "word": "barn.",
            "cleanWord": "barn",
            "startMs": 3440,
            "endMs": 3800
          }
        ],
        "hotspots": [
          {
            "id": "hs_farmer",
            "label": "Farmer",
            "xPercent": 45,
            "yPercent": 50,
            "emoji": "👨‍🌾",
            "soundName": "pop",
            "speechText": "Welcome to the peaceful farm!",
            "animationType": "jump"
          }
        ],
        "speakingTargetWord": "farmer",
        "comprehension": {
          "questionText": "Where does the farmer drive to?",
          "questionAudioText": "Where does the farmer drive to?",
          "options": [
            {
              "id": "opt_barn",
              "text": "To the big barn",
              "emoji": "🛖",
              "isCorrect": true
            },
            {
              "id": "opt_sea",
              "text": "To deep sea",
              "emoji": "🌊",
              "isCorrect": false
            }
          ]
        }
      },
      {
        "pageNumber": 2,
        "sentence": "My sister drinks fresh water under the stars.",
        "vietnameseMeaning": "Chị gái uống ly nước mát lành dưới bầu trời đầy sao.",
        "backgroundTheme": "bg-indigo-100",
        "sceneryEmoji": "💧",
        "visual": {
          "url": "/assets/ehon/star.jpg",
          "alt": "Tranh Ehon chị gái và em bé ngắm trời sao"
        },
        "wordsTiming": [
          {
            "word": "My",
            "cleanWord": "my",
            "startMs": 0,
            "endMs": 300
          },
          {
            "word": "sister",
            "cleanWord": "sister",
            "startMs": 370,
            "endMs": 910
          },
          {
            "word": "drinks",
            "cleanWord": "drinks",
            "startMs": 980,
            "endMs": 1520
          },
          {
            "word": "fresh",
            "cleanWord": "fresh",
            "startMs": 1590,
            "endMs": 2040
          },
          {
            "word": "water",
            "cleanWord": "water",
            "startMs": 2110,
            "endMs": 2560
          },
          {
            "word": "under",
            "cleanWord": "under",
            "startMs": 2630,
            "endMs": 3080
          },
          {
            "word": "the",
            "cleanWord": "the",
            "startMs": 3150,
            "endMs": 3450
          },
          {
            "word": "stars.",
            "cleanWord": "stars",
            "startMs": 3520,
            "endMs": 3970
          }
        ],
        "hotspots": [
          {
            "id": "hs_water",
            "label": "Water",
            "xPercent": 50,
            "yPercent": 65,
            "emoji": "💧",
            "soundName": "sparkle",
            "speechText": "Cool sweet water!",
            "animationType": "spin"
          }
        ],
        "speakingTargetWord": "sister",
        "comprehension": {
          "questionText": "Who drinks fresh water under stars?",
          "questionAudioText": "Who drinks fresh water under stars?",
          "options": [
            {
              "id": "opt_sister",
              "text": "My elder sister",
              "emoji": "👧",
              "isCorrect": true
            },
            {
              "id": "opt_fox",
              "text": "A sly fox",
              "emoji": "🦊",
              "isCorrect": false
            }
          ]
        }
      }
    ]
  }
];

/**
 * Helper to retrieve a story by its ID
 */
export const getStoryById = (id: string): DecodableStory | undefined => {
  return DECODABLE_STORIES.find(s => s.id === id);
};

/**
 * Helper to filter stories by educational stage (1 to 4)
 */
export const getStoriesByStage = (stage: 1 | 2 | 3 | 4): DecodableStory[] => {
  return DECODABLE_STORIES.filter(s => s.stage === stage);
};
