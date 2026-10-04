// Master Gojūon (五十音) Dataset for PhonoKids Japanese Module
// Researched from Kodomo Challenge (Benesse), Kumon Kokugo, and Gakken Yoji Pedagogical Workbooks

import { KanaRowGroup } from '../../types/japanese';

export const JAPANESE_GOJUON_ROWS: KanaRowGroup[] = [
  {
    rowKey: 'a',
    rowNameVi: 'Hàng A (5 Nguyên Âm Cốt Lõi)',
    rowNameJa: 'あ行（あぎょう）',
    themeColor: 'amber',
    themeBanner: '/assets/ehon/theme_nature.jpg',
    characters: [
      {
        id: 'ja_a',
        hiragana: 'あ',
        katakana: 'ア',
        romaji: 'a',
        row: 'a',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Khẩu hình mở tự nhiên, phát âm "a" tròn trịa, trong trẻo, không gằn giọng.',
        mouthGuide: {
          mouthShape: 'open_wide',
          instructionsVi: 'Mở miệng vừa phải, thả lỏng đầu lưỡi dưới hàm, bật âm "a" nhẹ nhàng.'
        },
        sampleWords: [
          {
            word: 'あめ',
            kanji: '雨',
            furigana: 'あめ',
            romaji: 'ame',
            meaningVi: 'cơn mưa mát lành',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon cơn mưa mùa hạ tươi mát'
          },
          {
            word: 'あり',
            kanji: '蟻',
            furigana: 'あり',
            romaji: 'ari',
            meaningVi: 'chú kiến chăm chỉ',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/ant.jpg',
            visualAlt: 'Tranh Ehon chú kiến bé nhỏ chở lá'
          },
          {
            word: 'あさ',
            kanji: '朝',
            furigana: 'あさ',
            romaji: 'asa',
            meaningVi: 'buổi sáng rạng rỡ',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/sun.jpg',
            visualAlt: 'Tranh Ehon bình minh toả nắng mai'
          }
        ],
        tprAction: {
          titleVi: 'Bé vươn tay hứng mưa rơi',
          chantJa: 'あ・あ・あめ！',
          descriptionVi: 'Bé ngửa lòng bàn tay hướng lên trời, nhấp nháy ngón tay như những giọt mưa và cùng hô: "A - A - Ame!"',
          icon: '🌧️'
        },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ あ gồm 3 nét: Nét ngang ngắn, nét sổ hơi cong giữa, và nét lượn tròn bao quanh.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Kẻ ngang ngắn từ trái sang phải',
              pathD: 'M 25,35 L 75,35',
              guidePoint: { x: 25, y: 35 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Sổ dọc hơi uốn cong nhẹ từ trên xuống dưới',
              pathD: 'M 50,18 C 50,45 47,75 46,88',
              guidePoint: { x: 50, y: 18 }
            },
            {
              strokeNumber: 3,
              directionVi: 'Nét 3: Đặt bút bên trái, lượn vòng cung tròn sang phải tạo bụng bầu',
              pathD: 'M 35,50 C 45,35 75,40 75,65 C 75,85 45,88 36,70',
              guidePoint: { x: 35, y: 50 }
            }
          ]
        }
      },
      {
        id: 'ja_i',
        hiragana: 'い',
        katakana: 'イ',
        romaji: 'i',
        row: 'a',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Khoé miệng kéo nhẹ sang hai bên như mỉm cười, phát âm "i" êm dịu.',
        mouthGuide: {
          mouthShape: 'smile',
          instructionsVi: 'Mỉm cười hé răng, nâng phần giữa lưỡi lên vòm họng trên và phát âm "i".'
        },
        sampleWords: [
          {
            word: 'いぬ',
            kanji: '犬',
            furigana: 'いぬ',
            romaji: 'inu',
            meaningVi: 'chú cún con đáng yêu',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/dog.jpg',
            visualAlt: 'Tranh Ehon chú cún lông vàng vẫy đuôi'
          },
          {
            word: 'いちご',
            kanji: '苺',
            furigana: 'いちご',
            romaji: 'ichigo',
            meaningVi: 'quả dâu tây ngọt ngào',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/apple.jpg',
            visualAlt: 'Tranh Ehon quả dâu tây đỏ mọng'
          }
        ],
        tprAction: {
          titleVi: 'Bé mỉm cười vuốt ve cún con',
          chantJa: 'い・い・いぬ！',
          descriptionVi: 'Bé cười tươi hai má lúm đồng tiền, giơ hai tay làm tai cún vẫy vẫy và hô: "I - I - Inu!"',
          icon: '🐶'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ い gồm 2 nét song song: Nét trái cong có móc đuôi, nét phải ngắn hơn.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Cong từ trên xuống rồi hất nhẹ đuôi lên',
              pathD: 'M 35,25 C 33,50 35,70 42,78 C 44,75 47,68 49,65',
              guidePoint: { x: 35, y: 25 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Vòng cung ngắn ở bên phải từ trên xuống',
              pathD: 'M 68,35 C 72,50 70,62 65,70',
              guidePoint: { x: 68, y: 35 }
            }
          ]
        }
      },
      {
        id: 'ja_u',
        hiragana: 'う',
        katakana: 'ウ',
        romaji: 'u',
        row: 'a',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Khác với tiếng Việt, âm "u" tiếng Nhật không chu môi tròn về phía trước mà thả lỏng bờ môi phẳng.',
        mouthGuide: {
          mouthShape: 'round_mid',
          instructionsVi: 'Môi hơi hé mở tự nhiên, không chu nhọn, phát âm "u" nhẹ thoát qua khe môi.'
        },
        sampleWords: [
          {
            word: 'うさぎ',
            kanji: '兎',
            furigana: 'うさぎ',
            romaji: 'usagi',
            meaningVi: 'chú thỏ trắng tai dài',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_animals.jpg',
            visualAlt: 'Tranh Ehon chú thỏ nhảy nhót'
          },
          {
            word: 'うみ',
            kanji: '海',
            furigana: 'うみ',
            romaji: 'umi',
            meaningVi: 'biển xanh bao la',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/ship.jpg',
            visualAlt: 'Tranh Ehon sóng biển xanh biếc dập dờn'
          }
        ],
        tprAction: {
          titleVi: 'Bé nhảy thỏ tung tăng',
          chantJa: 'う・う・うさぎ！',
          descriptionVi: 'Bé đặt hai ngón tay lên đỉnh đầu làm tai thỏ bật nhảy 2 nhịp và cùng hát: "U - U - Usagi!"',
          icon: '🐰'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ う gồm nét phẩy trên đỉnh và nét cong vòm tròn mềm mại bên dưới.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Chấm phẩy ngắn nghiêng từ trái sang phải',
              pathD: 'M 45,22 L 55,27',
              guidePoint: { x: 45, y: 22 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Đặt bút phía dưới, lượn vòm tròn lớn sang phải rồi chúc xuống',
              pathD: 'M 35,42 C 45,36 72,45 70,65 C 68,78 52,85 40,82',
              guidePoint: { x: 35, y: 42 }
            }
          ]
        }
      },
      {
        id: 'ja_e',
        hiragana: 'え',
        katakana: 'エ',
        romaji: 'e',
        row: 'a',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Mở miệng vừa phải giữa âm "a" và "i", phát âm "ê" nhẹ nhàng, thanh thoát.',
        mouthGuide: {
          mouthShape: 'open_mid',
          instructionsVi: 'Mở miệng tự nhiên bằng bề dày 1 ngón tay, ngực thả lỏng, phát âm "e".'
        },
        sampleWords: [
          {
            word: 'えほん',
            kanji: '絵本',
            furigana: 'えほん',
            romaji: 'ehon',
            meaningVi: 'sách tranh Ehon kỳ diệu',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/good_book.jpg',
            visualAlt: 'Tranh Ehon cuốn sách tranh mở ra thế giới sắc màu'
          },
          {
            word: 'えんぴつ',
            kanji: '鉛筆',
            furigana: 'えんぴつ',
            romaji: 'enpitsu',
            meaningVi: 'chiếc bút chì xinh xắn',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/pen.jpg',
            visualAlt: 'Tranh Ehon chiếc bút chì vẽ tranh'
          }
        ],
        tprAction: {
          titleVi: 'Bé mở sách tranh đọc chuyện',
          chantJa: 'え・え・えほん！',
          descriptionVi: 'Bé mở hai bàn tay áp vào nhau như đang lật giở trang sách Ehon và cùng đọc: "E - E - Ehon!"',
          icon: '📖'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ え gồm nét phẩy trên và nét zic-zac uốn lượn như cánh chim lướt sóng.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Chấm phẩy ngắn nghiêng',
              pathD: 'M 48,20 L 56,26',
              guidePoint: { x: 48, y: 20 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Đi ngang, chéo xuống trái, rồi lượn sóng ngang sang phải',
              pathD: 'M 35,42 L 65,42 L 38,75 C 50,75 75,70 78,82',
              guidePoint: { x: 35, y: 42 }
            }
          ]
        }
      },
      {
        id: 'ja_o',
        hiragana: 'お',
        katakana: 'オ',
        romaji: 'o',
        row: 'a',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Miệng mở tròn tự nhiên, phát âm "ô" vang ấm trong khoang họng.',
        mouthGuide: {
          mouthShape: 'round_mid',
          instructionsVi: 'Tròn môi nhẹ nhàng, hạ lưỡi thấp và tạo âm "o" sâu lắng.'
        },
        sampleWords: [
          {
            word: 'おにぎり',
            kanji: 'お握り',
            furigana: 'おにぎり',
            romaji: 'onigiri',
            meaningVi: 'cơm nắm rong biển thơm ngon',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_food_objects.jpg',
            visualAlt: 'Tranh Ehon nắm cơm tam giác bọc rong biển'
          },
          {
            word: 'おもちゃ',
            kanji: '玩具',
            furigana: 'おもちゃ',
            romaji: 'omocha',
            meaningVi: 'món đồ chơi yêu thích',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/yoyo.jpg',
            visualAlt: 'Tranh Ehon chiếc yoyo đồ chơi rực rỡ'
          }
        ],
        tprAction: {
          titleVi: 'Bé nắm cơm Onigiri',
          chantJa: 'お・お・おにぎり！',
          descriptionVi: 'Bé khum hai bàn tay lại nén nén xoay xoay như đang nắm nắm cơm tam giác và hô: "O - O - Onigiri!"',
          icon: '🍙'
        },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ お gồm nét ngang, nét sổ uốn thắt nút xoay tròn và dấu chấm bên phải.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Nét ngang ngắn',
              pathD: 'M 28,38 L 60,38',
              guidePoint: { x: 28, y: 38 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Sổ dọc xuống, uốn vòng thắt nút sang trái rồi phồng tròn sang phải',
              pathD: 'M 46,22 L 46,65 C 46,75 35,75 35,65 C 35,52 65,55 72,70 C 75,78 70,88 58,88',
              guidePoint: { x: 46, y: 22 }
            },
            {
              strokeNumber: 3,
              directionVi: 'Nét 3: Dấu chấm phẩy góc trên bên phải',
              pathD: 'M 72,32 L 80,40',
              guidePoint: { x: 72, y: 32 }
            }
          ]
        }
      }
    ]
  },
  {
    rowKey: 'ka',
    rowNameVi: 'Hàng Ka (Tổ Hợp Phụ Âm K + 5 Nguyên Âm)',
    rowNameJa: 'か行（かぎょう）',
    themeColor: 'emerald',
    themeBanner: '/assets/ehon/theme_animals.jpg',
    characters: [
      {
        id: 'ja_ka',
        hiragana: 'か',
        katakana: 'カ',
        romaji: 'ka',
        row: 'ka',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Gốc lưỡi chạm ngạc mềm bật âm [k] dứt khoát rồi mở thành nguyên âm [a] vang nhẹ.',
        mouthGuide: {
          mouthShape: 'open_wide',
          instructionsVi: 'Nâng cuống lưỡi chạm trần họng, nén hơi rồi bật dứt khoát "ka".'
        },
        sampleWords: [
          {
            word: 'かめ',
            kanji: '亀',
            furigana: 'かめ',
            romaji: 'kame',
            meaningVi: 'chú rùa mai xanh hiền lành',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/theme_animals.jpg',
            visualAlt: 'Tranh Ehon chú rùa bơi lội ung dung'
          },
          {
            word: 'かさ',
            kanji: '傘',
            furigana: 'かさ',
            romaji: 'kasa',
            meaningVi: 'chiếc ô che mưa che nắng',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/umbrella.jpg',
            visualAlt: 'Tranh Ehon chiếc ô xòe tròn rực rỡ'
          }
        ],
        tprAction: {
          titleVi: 'Bé bò chậm rãi như chú rùa',
          chantJa: 'か・か・かめ！',
          descriptionVi: 'Bé chống hai tay bước chậm từng bước vững chãi và hô vang: "Ka - Ka - Kame!"',
          icon: '🐢'
        },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ か gồm nét cong có móc, nét xiên dọc bên trái và nét chấm phẩy bên phải.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Ngang sang rồi uốn cong xuống hất móc nhẹ',
              pathD: 'M 30,35 L 55,35 C 62,35 65,65 55,75 C 52,78 48,76 46,72',
              guidePoint: { x: 30, y: 35 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Sổ xiên từ trên cắt qua nét 1',
              pathD: 'M 42,20 L 32,82',
              guidePoint: { x: 42, y: 20 }
            },
            {
              strokeNumber: 3,
              directionVi: 'Nét 3: Chấm phẩy bên phải ngoài cùng',
              pathD: 'M 72,32 L 80,40',
              guidePoint: { x: 72, y: 32 }
            }
          ]
        }
      },
      {
        id: 'ja_ki',
        hiragana: 'き',
        katakana: 'キ',
        romaji: 'ki',
        row: 'ka',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Khẩu hình mỉm cười, gốc lưỡi nén hơi bật ra âm [ki] sắc nét.',
        mouthGuide: {
          mouthShape: 'smile',
          instructionsVi: 'Mỉm cười mở rộng khóe môi, bật âm [k] kết hợp nguyên âm [i].'
        },
        sampleWords: [
          {
            word: 'きりん',
            kanji: '麒麟',
            furigana: 'きりん',
            romaji: 'kirin',
            meaningVi: 'chú hươu cao cổ đốm xinh',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/giraffe.jpg',
            visualAlt: 'Tranh Ehon chú hươu cao cổ vươn cổ ăn lá cây'
          },
          {
            word: 'きのこ',
            kanji: '茸',
            furigana: 'きのこ',
            romaji: 'kinoko',
            meaningVi: 'cây nấm nhỏ xinh trong rừng',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon cây nấm mũ đỏ chấm bi'
          }
        ],
        tprAction: {
          titleVi: 'Bé vươn cổ cao như hươu Kirin',
          chantJa: 'き・き・きりん！',
          descriptionVi: 'Bé giơ một cánh tay thẳng đứng lên trời uốn cong cổ tay làm đầu hươu và hô: "Ki - Ki - Kirin!"',
          icon: '🦒'
        },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ き gồm 2 nét ngang song song, 1 nét sổ chéo và 1 nét vòm cung dưới đáy.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Ngang trên hơi chếch lên',
              pathD: 'M 32,35 L 68,35',
              guidePoint: { x: 32, y: 35 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Ngang dưới song song nét 1',
              pathD: 'M 28,50 L 72,50',
              guidePoint: { x: 28, y: 50 }
            },
            {
              strokeNumber: 3,
              directionVi: 'Nét 3: Sổ chéo qua 2 nét ngang rồi hất nhẹ sang trái',
              pathD: 'M 58,22 L 44,70 C 42,75 38,72 36,68',
              guidePoint: { x: 58, y: 22 }
            },
            {
              strokeNumber: 4,
              directionVi: 'Nét 4: Vòm cung tròn bên dưới',
              pathD: 'M 38,78 C 50,88 65,85 68,75',
              guidePoint: { x: 38, y: 78 }
            }
          ]
        }
      },
      {
        id: 'ja_ku',
        hiragana: 'く',
        katakana: 'ク',
        romaji: 'ku',
        row: 'ka',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Khẩu hình môi hé mở tự nhiên, bật âm [k] kết hợp âm [u] nhẹ nhàng.',
        mouthGuide: {
          mouthShape: 'round_mid',
          instructionsVi: 'Môi hơi hé, cuống lưỡi bật âm [k] và thoát âm "u" thanh thoát.'
        },
        sampleWords: [
          {
            word: 'くるま',
            kanji: '車',
            furigana: 'くるま',
            romaji: 'kuruma',
            meaningVi: 'chiếc xe ô tô bon bon',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_food_objects.jpg',
            visualAlt: 'Tranh Ehon chiếc ô tô bốn bánh lăn nhanh'
          },
          {
            word: 'くま',
            kanji: '熊',
            furigana: 'くま',
            romaji: 'kuma',
            meaningVi: 'chú gấu nâu hiền lành',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_animals.jpg',
            visualAlt: 'Tranh Ehon chú gấu nâu ôm mật ong'
          }
        ],
        tprAction: {
          titleVi: 'Bé cầm vô lăng lái xe ô tô',
          chantJa: 'く・く・くるま！',
          descriptionVi: 'Bé nắm hai tay xoay xoay như đang lái vô lăng xe ô tô và hào hứng kêu: "Ku - Ku - Kuruma!"',
          icon: '🚗'
        },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ く là 1 nét liền duy nhất: Gấp khúc nhọn như mỏ chim ngoặc sang trái.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Chéo xuống sang trái rồi gấp góc nhọn chéo xuống sang phải',
              pathD: 'M 65,25 L 35,52 L 65,82',
              guidePoint: { x: 65, y: 25 }
            }
          ]
        }
      },
      {
        id: 'ja_ke',
        hiragana: 'け',
        katakana: 'ケ',
        romaji: 'ke',
        row: 'ka',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Mở miệng vừa phải, bật âm [k] chuyển tiếp mượt mà sang nguyên âm [e].',
        mouthGuide: {
          mouthShape: 'open_mid',
          instructionsVi: 'Khoé miệng mở vừa tầm, bật âm "ke" thanh thản.'
        },
        sampleWords: [
          {
            word: 'けむし',
            kanji: '毛虫',
            furigana: 'けむし',
            romaji: 'kemushi',
            meaningVi: 'chú sâu róm lá cây ngộ nghĩnh',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon chú sâu xanh bò trên cành cây'
          },
          {
            word: 'けーき',
            kanji: 'ケーキ',
            furigana: 'けーき',
            romaji: 'kēki',
            meaningVi: 'bánh kem sinh nhật dâu tây',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/theme_food_objects.jpg',
            visualAlt: 'Tranh Ehon chiếc bánh kem phủ kem ngọt ngào'
          }
        ],
        tprAction: {
          titleVi: 'Bé mô phỏng chú sâu uốn mình',
          chantJa: 'け・け・けむし！',
          descriptionVi: 'Bé cong ngón trỏ uốn uốn bò bò trên cánh tay như chú sâu nhỏ và hô: "Ke - Ke - Kemushi!"',
          icon: '🐛'
        },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ け gồm nét sổ có móc bên trái, nét ngang và nét sổ cong bên phải.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Sổ dọc bên trái uốn móc hất lên',
              pathD: 'M 35,22 C 34,50 35,70 38,82 C 40,79 43,72 45,70',
              guidePoint: { x: 35, y: 22 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Ngang ngắn bên phải',
              pathD: 'M 52,38 L 80,38',
              guidePoint: { x: 52, y: 38 }
            },
            {
              strokeNumber: 3,
              directionVi: 'Nét 3: Sổ cong nhẹ từ trên cắt qua nét 2',
              pathD: 'M 68,22 C 68,55 65,75 58,85',
              guidePoint: { x: 68, y: 22 }
            }
          ]
        }
      },
      {
        id: 'ja_ko',
        hiragana: 'こ',
        katakana: 'コ',
        romaji: 'ko',
        row: 'ka',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Tròn môi nhẹ nhàng, cuống lưỡi bật âm [k] và hòa quyện cùng âm [o] ấm áp.',
        mouthGuide: {
          mouthShape: 'round_mid',
          instructionsVi: 'Tròn môi vừa phải, tạo âm [ko] vang vọng tự nhiên.'
        },
        sampleWords: [
          {
            word: 'ことり',
            kanji: '小鳥',
            furigana: 'ことり',
            romaji: 'kotori',
            meaningVi: 'chú chim non hót líu lo',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon chú chim nhỏ đậu trên cành hoa'
          },
          {
            word: 'こま',
            kanji: '独楽',
            furigana: 'こま',
            romaji: 'koma',
            meaningVi: 'con quay gỗ truyền thống',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/yoyo.jpg',
            visualAlt: 'Tranh Ehon con quay gỗ xoay tít'
          }
        ],
        tprAction: {
          titleVi: 'Bé vỗ cánh bay như chim Kotori',
          chantJa: 'こ・こ・ことり！',
          descriptionVi: 'Bé vẫy hai khuỷu tay nhịp nhàng như đôi cánh chim non và hân hoan hát: "Ko - Ko - Kotori!"',
          icon: '🐦'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ こ gồm 2 nét ngang uốn nhẹ trên và dưới như chiếc nôi ấm áp.',
          strokes: [
            {
              strokeNumber: 1,
              directionVi: 'Nét 1: Ngang trên uốn hơi cong rồi hất móc nhẹ',
              pathD: 'M 35,35 C 48,32 62,32 70,38 C 68,41 65,43 62,45',
              guidePoint: { x: 35, y: 35 }
            },
            {
              strokeNumber: 2,
              directionVi: 'Nét 2: Đáy dưới vòng cung từ trái sang phải',
              pathD: 'M 32,70 C 48,78 65,76 72,70',
              guidePoint: { x: 32, y: 70 }
            }
          ]
        }
      }
    ]
  }
];
