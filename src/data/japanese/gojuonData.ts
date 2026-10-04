// Master Gojūon (五十音) Dataset for PhonoKids Japanese Module
// Grounded in Kodomo Challenge (Benesse), Kumon Kokugo, and Gakken Yoji Pedagogical Standards

import { KanaRowGroup, KanaItem, KanaRowKey } from '../../types/japanese';

export const JAPANESE_GOJUON_ROWS: KanaRowGroup[] = [
  // ==========================================
  // HÀNG A (5 Nguyên Âm Cốt Lõi)
  // ==========================================
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
            { strokeNumber: 1, directionVi: 'Nét 1: Kẻ ngang ngắn từ trái sang phải', pathD: 'M 25,35 L 75,35', guidePoint: { x: 25, y: 35 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ dọc hơi uốn cong nhẹ từ trên xuống dưới', pathD: 'M 50,18 C 50,45 47,75 46,88', guidePoint: { x: 50, y: 18 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Lượn vòng cung tròn sang phải tạo bụng bầu', pathD: 'M 35,50 C 45,35 75,40 75,65 C 75,85 45,88 36,70', guidePoint: { x: 35, y: 50 } }
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
          instructionsVi: 'Hai mép kéo sang hai bên như đang cười xinh, lưỡi nâng nhẹ sát vòm họng.'
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
            visualAlt: 'Tranh Ehon chú cún lông xù vui tươi'
          },
          {
            word: 'いちご',
            kanji: '苺',
            furigana: 'いちご',
            romaji: 'ichigo',
            meaningVi: 'quả dâu tây đỏ mọng',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/apple.jpg',
            visualAlt: 'Tranh Ehon quả dâu ngọt ngào'
          }
        ],
        tprAction: {
          titleVi: 'Bé làm tai cún vẫy vẫy',
          chantJa: 'い・い・いぬ！',
          descriptionVi: 'Bé đặt hai bàn tay khum khum lên trên đầu làm đôi tai cún con lắc lư và reo: "I - I - Inu!"',
          icon: '🐶'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ い gồm 2 nét song song đứng: Nét sổ có móc bên trái và nét cong ngắn bên phải.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Cong nhẹ từ trên xuống rồi hất móc lên', pathD: 'M 32,25 C 30,55 32,70 38,80 C 42,75 44,68 45,64', guidePoint: { x: 32, y: 25 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Nét ngắn bên phải hơi cong về tâm', pathD: 'M 68,35 C 72,50 70,65 65,75', guidePoint: { x: 68, y: 35 } }
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
        soundDescriptionVi: 'Môi khép hờ không chu nhọn như tiếng Việt, âm phát từ khoang miệng tự nhiên.',
        mouthGuide: {
          mouthShape: 'round_pucker',
          instructionsVi: 'Khép nhẹ môi, không chu tròn quá mức, phát âm [ɯ] êm nhẹ thư thái.'
        },
        sampleWords: [
          {
            word: 'うさぎ',
            kanji: '兎',
            furigana: 'うさぎ',
            romaji: 'usagi',
            meaningVi: 'chú thỏ trắng tai dài',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/cat.jpg',
            visualAlt: 'Tranh Ehon chú thỏ trắng nhảy tung tăng'
          },
          {
            word: 'うみ',
            kanji: '海',
            furigana: 'うみ',
            romaji: 'umi',
            meaningVi: 'biển xanh sóng vỗ',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/ship.jpg',
            visualAlt: 'Tranh Ehon bãi biển trong xanh'
          }
        ],
        tprAction: {
          titleVi: 'Bé nhảy như chú thỏ Usagi',
          chantJa: 'う・う・うさぎ！',
          descriptionVi: 'Hai ngón tay giơ chữ V làm tai thỏ trên đỉnh đầu, nhảy nhẹ 2 bước và hô vang: "U - U - Usagi!"',
          icon: '🐰'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ う gồm dấu phẩy nghiêng trên đầu và một đường cong uốn lượn lớn bên dưới.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Dấu chấm phẩy chéo nhẹ trên đầu', pathD: 'M 42,20 L 58,26', guidePoint: { x: 42, y: 20 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Cong uốn hình lưỡi câu tròn bên dưới', pathD: 'M 35,42 C 60,35 72,50 68,70 C 64,85 45,86 38,78', guidePoint: { x: 35, y: 42 } }
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
        soundDescriptionVi: 'Miệng mở trung bình giữa [a] và [i], âm thanh tươi sáng rõ ràng.',
        mouthGuide: {
          mouthShape: 'open_mid',
          instructionsVi: 'Mở miệng vừa phải, hai bên khoé môi thả lỏng, phát âm "e" thanh thoát.'
        },
        sampleWords: [
          {
            word: 'えんぴつ',
            kanji: '鉛筆',
            furigana: 'えんぴつ',
            romaji: 'enpitsu',
            meaningVi: 'chiếc bút chì màu',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/pen.jpg',
            visualAlt: 'Tranh Ehon chiếc bút chì gỗ'
          },
          {
            word: 'えほん',
            kanji: '絵本',
            furigana: 'えほん',
            romaji: 'ehon',
            meaningVi: 'cuốn truyện tranh Ehon',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/good_book.jpg',
            visualAlt: 'Tranh Ehon cuốn sách truyện rực rỡ sắc màu'
          }
        ],
        tprAction: {
          titleVi: 'Bé cầm bút chì vẽ tranh',
          chantJa: 'え・え・えんぴつ！',
          descriptionVi: 'Bé nắm ngón tay như đang cầm bút chì vẽ hình tròn lớn trong không trung và reo: "E - E - Enpitsu!"',
          icon: '✏️'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ え gồm nét chấm ngang trên và một nét lượn zíc-zắc có sóng chân.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chấm phẩy ngắn nghiêng', pathD: 'M 45,22 L 56,28', guidePoint: { x: 45, y: 22 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo, lượn ngang rồi uốn sóng chân', pathD: 'M 42,42 L 58,42 L 35,72 L 62,65 C 68,65 72,70 70,78 C 68,82 62,84 56,84', guidePoint: { x: 42, y: 42 } }
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
        soundDescriptionVi: 'Tròn môi nhẹ nhàng, không bạnh miệng, tạo âm "o" sâu và vang.',
        mouthGuide: {
          mouthShape: 'round_mid',
          instructionsVi: 'Tròn môi vừa phải, lưỡi thụt nhẹ về phía sau khoang miệng.'
        },
        sampleWords: [
          {
            word: 'おかね',
            kanji: 'お金',
            furigana: 'おかね',
            romaji: 'okane',
            meaningVi: 'đồng xu may mắn',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/queen_coin.jpg',
            visualAlt: 'Tranh Ehon đồng xu lấp lánh'
          },
          {
            word: 'おにぎり',
            kanji: 'お握り',
            furigana: 'おにぎり',
            romaji: 'onigiri',
            meaningVi: 'nắm cơm tam giác rong biển',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_food_objects.jpg',
            visualAlt: 'Tranh Ehon nắm cơm bọc rong biển thơm nức'
          }
        ],
        tprAction: {
          titleVi: 'Bé nắm cơm Onigiri',
          chantJa: 'お・お・おにぎり！',
          descriptionVi: 'Hai lòng bàn tay bé khum lại nắm nắm xoay đều như đang nặn nắm cơm dẻo và hô: "O - O - Onigiri!"',
          icon: '🍙'
        },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ お gồm nét ngang ngắn, nét sổ lượn thắt nút vòng tròn, và dấu chấm bên phải.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn', pathD: 'M 28,35 L 68,35', guidePoint: { x: 28, y: 35 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ dọc, vòng thắt nút rồi lượn vòng cung đáy', pathD: 'M 48,20 L 48,60 C 48,75 35,75 35,65 C 35,55 58,52 68,68 C 72,78 68,88 55,88 C 45,88 38,80 38,72', guidePoint: { x: 48, y: 20 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Dấu chấm phẩy bên phải góc trên', pathD: 'M 72,38 L 80,48', guidePoint: { x: 72, y: 38 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG KA (Âm Tắc Vòm Họng Thanh Mảnh)
  // ==========================================
  {
    rowKey: 'ka',
    rowNameVi: 'Hàng Ka (Âm Bật Gốc Lưỡi)',
    rowNameJa: 'か行（かぎょう）',
    themeColor: 'rose',
    themeBanner: '/assets/ehon/theme_actions.jpg',
    characters: [
      {
        id: 'ja_ka',
        hiragana: 'か',
        katakana: 'カ',
        romaji: 'ka',
        row: 'ka',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Cuống lưỡi nâng chạm ngạc mềm rồi bật âm [k] dứt khoát kết hợp nguyên âm [a].',
        mouthGuide: {
          mouthShape: 'open_wide',
          instructionsVi: 'Nâng gốc lưỡi chặn luồng hơi, mở miệng bật âm "ka" vui tươi.'
        },
        sampleWords: [
          {
            word: 'かぶとむし',
            kanji: '兜虫',
            furigana: 'かぶとむし',
            romaji: 'kabutomushi',
            meaningVi: 'chú bọ cánh cứng dũng cảm',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/bug_rug.jpg',
            visualAlt: 'Tranh Ehon bọ hung dũng mãnh'
          },
          {
            word: 'かさ',
            kanji: '傘',
            furigana: 'かさ',
            romaji: 'kasa',
            meaningVi: 'chiếc ô che mưa nắng',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon chiếc ô rực rỡ'
          }
        ],
        tprAction: {
          titleVi: 'Bé giơ sừng bọ dũng mãnh',
          chantJa: 'か・か・かぶとむし！',
          descriptionVi: 'Bé đặt hai ngón tay trỏ lên trán như đôi sừng chú bọ cánh cứng và hô: "Ka - Ka - Kabutomushi!"',
          icon: '🪲'
        },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ か gồm nét gãy có móc, nét sổ cong chéo và dấu chấm phẩy.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang sang rồi cong xuống có móc hất', pathD: 'M 28,38 L 55,38 C 65,38 68,52 64,68 C 62,75 58,78 54,75', guidePoint: { x: 28, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo cong qua thân', pathD: 'M 40,22 C 38,50 36,75 32,86', guidePoint: { x: 40, y: 22 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Dấu chấm phẩy bên phải', pathD: 'M 72,32 L 80,42', guidePoint: { x: 72, y: 32 } }
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
        soundDescriptionVi: 'Gốc lưỡi tiếp xúc mặt ngạc cứng rồi bật âm kết hợp mỉm cười [ki].',
        mouthGuide: {
          mouthShape: 'smile',
          instructionsVi: 'Mỉm cười kéo khoé môi, bật hơi "ki" thanh thoát.'
        },
        sampleWords: [
          {
            word: 'き',
            kanji: '木',
            furigana: 'き',
            romaji: 'ki',
            meaningVi: 'cây xanh toả bóng mát',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/bee_tree.jpg',
            visualAlt: 'Tranh Ehon cây cổ thụ xanh mát'
          },
          {
            word: 'きつね',
            kanji: '狐',
            furigana: 'きつね',
            romaji: 'kitsune',
            meaningVi: 'chú cáo lông vàng thông minh',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/fox_box.jpg',
            visualAlt: 'Tranh Ehon chú cáo vàng tinh nghịch'
          }
        ],
        tprAction: {
          titleVi: 'Bé vươn cành cây xanh Ki',
          chantJa: 'き・き・き！',
          descriptionVi: 'Bé giơ hai tay lên cao mở rộng bàn tay như tán lá cây và ngân vang: "Ki - Ki - Ki!"',
          icon: '🌳'
        },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ き gồm 2 nét ngang song song, nét sổ chéo có móc và cung tròn đáy.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang trên hơi dốc', pathD: 'M 32,32 L 68,32', guidePoint: { x: 32, y: 32 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang dưới song song dài hơn', pathD: 'M 28,48 L 74,48', guidePoint: { x: 28, y: 48 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ chéo qua hai nét ngang có móc hất', pathD: 'M 54,18 L 46,65 C 48,68 53,65 56,62', guidePoint: { x: 54, y: 18 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Cung tròn nâng đáy bên dưới', pathD: 'M 36,75 C 55,85 68,78 72,70', guidePoint: { x: 36, y: 75 } }
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
        soundDescriptionVi: 'Âm bật cuống lưỡi kết hợp môi khép hờ nhẹ nhàng tạo âm [ku].',
        mouthGuide: {
          mouthShape: 'round_pucker',
          instructionsVi: 'Môi khép nhẹ, đẩy hơi bật âm [ku] tự nhiên.'
        },
        sampleWords: [
          {
            word: 'くつ',
            kanji: '靴',
            furigana: 'くつ',
            romaji: 'kutsu',
            meaningVi: 'đôi giày xinh xắn',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_actions.jpg',
            visualAlt: 'Tranh Ehon đôi giày nhỏ'
          },
          {
            word: 'くも',
            kanji: '雲',
            furigana: 'くも',
            romaji: 'kumo',
            meaningVi: 'đám mây trắng bồng bềnh',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/clown_cloud.jpg',
            visualAlt: 'Tranh Ehon đám mây xốp trắng bay'
          }
        ],
        tprAction: {
          titleVi: 'Bé giậm đôi giày Kutsu',
          chantJa: 'く・く・くつ！',
          descriptionVi: 'Bé giậm giậm đôi chân nhỏ nhịp nhàng và hát: "Ku - Ku - Kutsu!"',
          icon: '👟'
        },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ く chỉ gồm 1 nét duy nhất gập góc nhọn tựa mỏ chim non.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chéo xuống rồi gập đổi hướng sang trái xuống dưới', pathD: 'M 65,25 L 35,50 L 65,78', guidePoint: { x: 65, y: 25 } }
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
            meaningVi: 'chú sâu róm ngộ nghĩnh',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon chú sâu xanh bò trên cành cây'
          },
          {
            word: 'けーき',
            kanji: 'ケーキ',
            furigana: 'けーき',
            romaji: 'kēki',
            meaningVi: 'bánh kem dâu tây',
            pitchPattern: 'HL',
            visualUrl: '/assets/ehon/theme_food_objects.jpg',
            visualAlt: 'Tranh Ehon bánh kem ngọt ngào'
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
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ dọc bên trái uốn móc hất lên', pathD: 'M 35,22 C 34,50 35,70 38,82 C 40,79 43,72 45,70', guidePoint: { x: 35, y: 22 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang ngắn bên phải', pathD: 'M 52,38 L 80,38', guidePoint: { x: 52, y: 38 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ cong nhẹ từ trên cắt qua nét 2', pathD: 'M 68,22 C 68,55 65,75 58,85', guidePoint: { x: 68, y: 22 } }
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
            meaningVi: 'chú chim non líu lo',
            pitchPattern: 'LH',
            visualUrl: '/assets/ehon/theme_nature.jpg',
            visualAlt: 'Tranh Ehon chú chim nhỏ'
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
          descriptionVi: 'Bé vẫy hai khuỷu tay nhịp nhàng như đôi cánh chim non và hát: "Ko - Ko - Kotori!"',
          icon: '🐦'
        },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ こ gồm 2 nét ngang uốn nhẹ trên và dưới như chiếc nôi ấm áp.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang trên uốn hơi cong rồi hất móc nhẹ', pathD: 'M 35,35 C 48,32 62,32 70,38 C 68,41 65,43 62,45', guidePoint: { x: 35, y: 35 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Đáy dưới vòng cung từ trái sang phải', pathD: 'M 32,70 C 48,78 65,76 72,70', guidePoint: { x: 32, y: 70 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG SA (Âm Xát Răng Đầu Lưỡi Thanh Dịu)
  // ==========================================
  {
    rowKey: 'sa',
    rowNameVi: 'Hàng Sa (Âm Gió Nhẹ Nhàng)',
    rowNameJa: 'さ行（さぎょう）',
    themeColor: 'yellow',
    themeBanner: '/assets/ehon/star.jpg',
    characters: [
      {
        id: 'ja_sa',
        hiragana: 'さ',
        katakana: 'サ',
        romaji: 'sa',
        row: 'sa',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Đầu lưỡi áp nhẹ sau răng cửa trên, đẩy luồng khí xát nhẹ ra ngoài tạo âm [sa].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Hé răng nhẹ, đẩy gió qua khe răng phát âm "sa" thanh thoát.' },
        sampleWords: [
          { word: 'さくら', kanji: '桜', furigana: 'さくら', romaji: 'sakura', meaningVi: 'hoa anh đào hồng thắm', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Hoa anh đào nở rộ' },
          { word: 'さかな', kanji: '魚', furigana: 'さかな', romaji: 'sakana', meaningVi: 'chú cá nhỏ tung tăng bơi', visualUrl: '/assets/ehon/three_fish.jpg', visualAlt: 'Chú cá bơi lội dưới làn nước' }
        ],
        tprAction: { titleVi: 'Bé rắc cánh hoa anh đào', chantJa: 'さ・さ・さくら！', descriptionVi: 'Bé tung nhẹ những ngón tay như cánh hoa anh đào rơi trong gió xuân: "Sa - Sa - Sakura!"', icon: '🌸' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ さ gồm nét ngang dốc, nét sổ chéo móc hất và cung tròn đáy.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang hơi chếch lên', pathD: 'M 30,38 L 70,38', guidePoint: { x: 30, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo cắt qua có móc hất', pathD: 'M 54,20 L 46,65 C 49,68 53,65 56,60', guidePoint: { x: 54, y: 20 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Cung tròn đỡ phía dưới', pathD: 'M 36,75 C 55,85 68,78 72,70', guidePoint: { x: 36, y: 75 } }
          ]
        }
      },
      {
        id: 'ja_shi',
        hiragana: 'し',
        katakana: 'シ',
        romaji: 'shi',
        row: 'sa',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Âm xát vòm cứng, đầu lưỡi sát chân răng, hơi thở êm như tiếng suối [ɕi].',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Môi mỉm cười nhẹ, luồng hơi lướt êm qua rãnh lưỡi tạo âm "shi".' },
        sampleWords: [
          { word: 'しんぶん', kanji: '新聞', furigana: 'しんぶん', romaji: 'shinbun', meaningVi: 'tờ báo tin tức buổi sớm', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Tờ báo tin tức' },
          { word: 'しま', kanji: '島', furigana: 'しま', romaji: 'shima', meaningVi: 'hòn đảo nhỏ giữa đại dương', visualUrl: '/assets/ehon/archipelago.jpg', visualAlt: 'Hòn đảo nhiệt đới xinh đẹp' }
        ],
        tprAction: { titleVi: 'Bé mở trang báo đọc tin', chantJa: 'し・し・しんぶん！', descriptionVi: 'Bé mở hai bàn tay ra như đang cầm tờ báo lớn xem tranh: "Shi - Shi - Shinbun!"', icon: '📰' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ し chỉ có 1 nét uốn hình lưỡi câu duyên dáng.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ thẳng từ trên xuống rồi uốn cong hất lên sang phải', pathD: 'M 40,25 L 40,65 C 40,82 58,85 68,72', guidePoint: { x: 40, y: 25 } }
          ]
        }
      },
      {
        id: 'ja_su',
        hiragana: 'す',
        katakana: 'ス',
        romaji: 'su',
        row: 'sa',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Âm xát nhẹ đầu lưỡi kết hợp nguyên âm [u] thư giãn thanh thoát.',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Môi khép hờ, luồng hơi luồn qua khe răng nhẹ tênh.' },
        sampleWords: [
          { word: 'すいか', kanji: '西瓜', furigana: 'すいか', romaji: 'suika', meaningVi: 'quả dưa hấu ngọt mát', visualUrl: '/assets/ehon/apple.jpg', visualAlt: 'Quả dưa hấu đỏ mọng ngọt lành' },
          { word: 'すずめ', kanji: '雀', furigana: 'すずめ', romaji: 'suzume', meaningVi: 'chú chim sẻ ríu rít', visualUrl: '/assets/ehon/theme_nature.jpg', visualAlt: 'Chim sẻ nhỏ ríu rít' }
        ],
        tprAction: { titleVi: 'Bé ôm quả dưa hấu bự', chantJa: 'す・す・すいか！', descriptionVi: 'Bé vòng hai tay tròn ôm quả dưa hấu tưởng tượng rồi vỗ nhẹ: "Su - Su - Suika!"', icon: '🍉' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ す gồm nét ngang dài và nét sổ thắt nút xoay tròn rồi thả dài.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang thẳng từ trái sang phải', pathD: 'M 25,36 L 75,36', guidePoint: { x: 25, y: 36 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ dọc, vòng thắt nút sang trái rồi kéo cong xuống', pathD: 'M 54,20 L 54,50 C 54,65 38,65 38,52 C 38,40 54,40 54,60 C 54,78 48,88 42,92', guidePoint: { x: 54, y: 20 } }
          ]
        }
      },
      {
        id: 'ja_se',
        hiragana: 'せ',
        katakana: 'セ',
        romaji: 'se',
        row: 'sa',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Âm xát kết hợp khẩu hình mở ngang [e], âm phát ra tươi vui tự tin.',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Mở miệng vừa phải, xát hơi nhẹ và bật âm "se".' },
        sampleWords: [
          { word: 'せんせい', kanji: '先生', furigana: 'せんせい', romaji: 'sensei', meaningVi: 'thầy cô giáo kính yêu', visualUrl: '/assets/ehon/farmer_barn.jpg', visualAlt: 'Thầy cô giáo dịu dàng dạy học' },
          { word: 'せみ', kanji: '蝉', furigana: 'せみ', romaji: 'semi', meaningVi: 'chú ve sầu ca hát', visualUrl: '/assets/ehon/bug_rug.jpg', visualAlt: 'Chú ve sầu ca vang mùa hạ' }
        ],
        tprAction: { titleVi: 'Bé cúi đầu chào Sensei', chantJa: 'せ・せ・せんせい！', descriptionVi: 'Bé đứng thẳng, hai tay khép bên hông cúi đầu chào ngoan ngoãn: "Se - Se - Sensei!"', icon: '👩‍🏫' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ せ gồm nét ngang, nét đứng gập đáy và nét sổ phải thẳng.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang thẳng hơi chếch nhẹ', pathD: 'M 25,40 L 75,40', guidePoint: { x: 25, y: 40 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Nét sổ phải gập ngang sang trái', pathD: 'M 66,24 L 66,68 L 32,68', guidePoint: { x: 66, y: 24 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Nét sổ trái uốn móc nhẹ', pathD: 'M 40,24 L 40,78 C 42,82 45,82 48,80', guidePoint: { x: 40, y: 24 } }
          ]
        }
      },
      {
        id: 'ja_so',
        hiragana: 'そ',
        katakana: 'ソ',
        romaji: 'so',
        row: 'sa',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Khẩu hình tròn nhẹ, bật âm xát hòa quyện cùng nguyên âm [o] ấm cúng.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi vừa tầm, đẩy luồng hơi xát nhẹ "so".' },
        sampleWords: [
          { word: 'そら', kanji: '空', furigana: 'そら', romaji: 'sora', meaningVi: 'bầu trời xanh cao rộng', visualUrl: '/assets/ehon/rocket.jpg', visualAlt: 'Bầu trời cao vút' },
          { word: 'そうじ', kanji: '掃除', furigana: 'そうじ', romaji: 'souji', meaningVi: 'dọn dẹp nhà cửa gọn gàng', visualUrl: '/assets/ehon/theme_actions.jpg', visualAlt: 'Bé chăm chỉ lau dọn' }
        ],
        tprAction: { titleVi: 'Bé ngước nhìn bầu trời Sora', chantJa: 'そ・そ・そら！', descriptionVi: 'Bé ngước mắt nhìn lên cao, hai tay mở rộng đón mây bay: "So - So - Sora!"', icon: '☁️' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ そ vẽ liên hoàn theo nét zíc-zắc tựa tia chớp rồi lượn vòng cung đáy.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn, chéo xuống, ngang lại rồi uốn vòng cung tròn', pathD: 'M 35,28 L 65,28 L 35,52 L 68,52 C 72,68 62,84 42,84 C 36,84 32,80 32,76', guidePoint: { x: 35, y: 28 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG TA (Âm Tắc - Chân Răng Mạnh Mẽ)
  // ==========================================
  {
    rowKey: 'ta',
    rowNameVi: 'Hàng Ta (Âm Đầu Lưỡi Rộn Ràng)',
    rowNameJa: 'た行（たぎょう）',
    themeColor: 'emerald',
    themeBanner: '/assets/ehon/theme_food_objects.jpg',
    characters: [
      {
        id: 'ja_ta',
        hiragana: 'た',
        katakana: 'タ',
        romaji: 'ta',
        row: 'ta',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Đầu lưỡi chạm mạnh chân răng trên, bật dứt khoát âm [t] rồi mở [a].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Chạm đầu lưỡi sau răng cửa trên, bật bung luồng hơi "ta".' },
        sampleWords: [
          { word: 'たまご', kanji: '卵', furigana: 'たまご', romaji: 'tamago', meaningVi: 'quả trứng gà tròn trịa', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Quả trứng thơm ngon' },
          { word: 'たいよう', kanji: '太陽', furigana: 'たいよう', romaji: 'taiyou', meaningVi: 'ông mặt trời toả nắng', visualUrl: '/assets/ehon/sun.jpg', visualAlt: 'Mặt trời buổi sáng tươi đẹp' }
        ],
        tprAction: { titleVi: 'Bé nâng niu quả trứng Tamago', chantJa: 'た・た・たまご！', descriptionVi: 'Bé chụm mười đầu ngón tay nâng quả trứng nhỏ thật khẽ khàng: "Ta - Ta - Tamago!"', icon: '🥚' },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ た gồm nét ngang, nét sổ chéo và 2 nét cong tựa chữ こ bên phải.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn', pathD: 'M 25,38 L 52,38', guidePoint: { x: 25, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo qua nét 1', pathD: 'M 40,24 L 32,75', guidePoint: { x: 40, y: 24 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Ngang trên bên phải', pathD: 'M 54,44 L 74,44', guidePoint: { x: 54, y: 44 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Cung cong dưới bên phải', pathD: 'M 52,65 C 62,72 72,70 76,64', guidePoint: { x: 52, y: 65 } }
          ]
        }
      },
      {
        id: 'ja_chi',
        hiragana: 'ち',
        katakana: 'チ',
        romaji: 'chi',
        row: 'ta',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Âm tắc xát vòm, đầu lưỡi bật khẽ phát âm [t͡ɕi] trong veo như tiếng chuông.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười xinh, đầu lưỡi bật hơi tạo âm "chi" sắc nét.' },
        sampleWords: [
          { word: 'ちず', kanji: '地図', furigana: 'ちず', romaji: 'chizu', meaningVi: 'bản đồ kho báu phiêu lưu', visualUrl: '/assets/ehon/archipelago.jpg', visualAlt: 'Bản đồ kho báu' },
          { word: 'ちょうちょ', kanji: '蝶々', furigana: 'ちょうちょ', romaji: 'choucho', meaningVi: 'bướm xinh bay dập dờn', visualUrl: '/assets/ehon/theme_nature.jpg', visualAlt: 'Cánh bướm sặc sỡ' }
        ],
        tprAction: { titleVi: 'Bé mở bản đồ thám hiểm', chantJa: 'ち・ち・ちず！', descriptionVi: 'Bé mở hai bàn tay như mở tấm bản đồ dẫn lối tới kho báu: "Chi - Chi - Chizu!"', icon: '🗺️' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ ち gồm nét ngang và nét sổ uốn vòng tròn bụng lớn bên phải.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang từ trái sang phải', pathD: 'M 25,35 L 75,35', guidePoint: { x: 25, y: 35 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo rồi uốn vòng cung tròn bên dưới', pathD: 'M 48,18 L 44,52 C 55,42 75,46 72,68 C 68,85 45,86 35,74', guidePoint: { x: 48, y: 18 } }
          ]
        }
      },
      {
        id: 'ja_tsu',
        hiragana: 'つ',
        katakana: 'ツ',
        romaji: 'tsu',
        row: 'ta',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Âm tắc xát đầu lưỡi sau răng, bật hơi bật dứt khoát thành luồng [tsɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Răng khép nhẹ, đầu lưỡi bật hơi dồn dập "tsu".' },
        sampleWords: [
          { word: 'つき', kanji: '月', furigana: 'つき', romaji: 'tsuki', meaningVi: 'mặt trăng tròn đêm rằm', visualUrl: '/assets/ehon/moon_spoon.jpg', visualAlt: 'Mặt trăng vàng sáng soi' },
          { word: 'つくえ', kanji: '机', furigana: 'つくえ', romaji: 'tsukue', meaningVi: 'chiếc bàn học xinh xắn', visualUrl: '/assets/ehon/word_bank_hero.jpg', visualAlt: 'Bàn học ngăn nắp' }
        ],
        tprAction: { titleVi: 'Bé làm vầng trăng khuyết Tsuki', chantJa: 'つ・つ・つき！', descriptionVi: 'Bé uốn cánh tay thành hình vầng trăng cong soi sáng đêm: "Tsu - Tsu - Tsuki!"', icon: '🌙' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ つ chỉ gồm 1 nét uốn vòng cung lớn tựa vầng trăng tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Lượn ngang nhẹ rồi uốn vòng cung tròn lớn sang trái', pathD: 'M 28,38 C 50,30 75,35 75,56 C 75,78 50,85 30,80', guidePoint: { x: 28, y: 38 } }
          ]
        }
      },
      {
        id: 'ja_te',
        hiragana: 'て',
        katakana: 'テ',
        romaji: 'te',
        row: 'ta',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Bật dứt khoát âm [t] kết hợp mở khẩu hình [e] vang khỏe.',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Chạm đầu lưỡi bật hơi "te" dứt khoát.' },
        sampleWords: [
          { word: 'て', kanji: '手', furigana: 'て', romaji: 'te', meaningVi: 'bàn tay nhỏ khéo léo', visualUrl: '/assets/ehon/puppy_hug.jpg', visualAlt: 'Đôi bàn tay nhỏ xinh' },
          { word: 'てがみ', kanji: '手紙', furigana: 'てがみ', romaji: 'tegami', meaningVi: 'bức thư gửi gắm yêu thương', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Lá thư thân thương' }
        ],
        tprAction: { titleVi: 'Bé vẫy bàn tay Te xinh', chantJa: 'て・て・て！', descriptionVi: 'Bé xoè rộng 5 ngón tay vẫy vẫy chào mọi người thật vui: "Te - Te - Te!"', icon: '✋' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ て chỉ có 1 nét: Kẻ ngang rồi uốn vòng cung mở rộng.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang sang phải rồi uốn vòng cung mềm sang trái', pathD: 'M 28,35 L 70,35 C 70,55 45,78 35,78', guidePoint: { x: 28, y: 35 } }
          ]
        }
      },
      {
        id: 'ja_to',
        hiragana: 'と',
        katakana: 'ト',
        romaji: 'to',
        row: 'ta',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Tròn môi, bật âm đầu lưỡi kết hợp nguyên âm [o] sâu sắc.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, đầu lưỡi gõ nhẹ chân răng bật âm "to".' },
        sampleWords: [
          { word: 'とり', kanji: '鳥', furigana: 'とり', romaji: 'tori', meaningVi: 'chú chim bay liệng trời cao', visualUrl: '/assets/ehon/theme_nature.jpg', visualAlt: 'Chú chim hót líu lo' },
          { word: 'とけい', kanji: '時計', furigana: 'とけい', romaji: 'tokei', meaningVi: 'đồng hồ tích tắc tích tắc', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Đồng hồ quả lắc điểm giờ' }
        ],
        tprAction: { titleVi: 'Bé dang cánh chim Tori bay', chantJa: 'と・と・とり！', descriptionVi: 'Bé vẫy hai cánh tay nhịp nhàng lượn vòng quanh phòng: "To - To - Tori!"', icon: '🕊️' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ と gồm nét sổ nghiêng ngắn và nét uốn bụng tròn bên dưới.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chéo xuống từ phải sang trái', pathD: 'M 42,24 L 42,48', guidePoint: { x: 42, y: 24 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Đặt bút giữa thân uốn vòng cung tròn lớn', pathD: 'M 36,42 C 65,42 75,60 70,78 C 64,88 42,88 35,78', guidePoint: { x: 36, y: 42 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG NA (Âm Mũi Êm Dịu)
  // ==========================================
  {
    rowKey: 'na',
    rowNameVi: 'Hàng Na (Âm Mũi Ấm Áp)',
    rowNameJa: 'な行（なぎょう）',
    themeColor: 'blue',
    themeBanner: '/assets/ehon/carrot.jpg',
    characters: [
      {
        id: 'ja_na',
        hiragana: 'な',
        katakana: 'ナ',
        romaji: 'na',
        row: 'na',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Âm mũi, đầu lưỡi chạm ngạc, luồng hơi qua khoang mũi rồi mở miệng [na].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Đầu lưỡi dán nhẹ vòm miệng, đẩy âm mũi ngân vang "na".' },
        sampleWords: [
          { word: 'なす', kanji: '茄子', furigana: 'なす', romaji: 'nasu', meaningVi: 'quả cà tím mọng nước', visualUrl: '/assets/ehon/carrot.jpg', visualAlt: 'Quả cà tím tím biếc' },
          { word: 'なつ', kanji: '夏', furigana: 'なつ', romaji: 'natsu', meaningVi: 'mùa hạ nắng vàng biển xanh', visualUrl: '/assets/ehon/sun.jpg', visualAlt: 'Mùa hè rực rỡ' }
        ],
        tprAction: { titleVi: 'Bé tạo hình quả cà tím Nasu', chantJa: 'な・な・なす！', descriptionVi: 'Bé nắm tay lại chỉ vào má cười tươi: "Na - Na - Nasu!"', icon: '🍆' },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ な gồm nét ngang, nét sổ chéo, dấu chấm phẩy và vòng thắt nút.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn', pathD: 'M 25,38 L 48,38', guidePoint: { x: 25, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo qua nét 1', pathD: 'M 38,24 L 30,72', guidePoint: { x: 38, y: 24 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Dấu chấm phẩy bên phải', pathD: 'M 58,32 L 66,40', guidePoint: { x: 58, y: 32 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Sổ vòng thắt nút bên phải', pathD: 'M 64,48 L 64,72 C 64,82 52,82 52,72 C 52,65 65,65 72,78', guidePoint: { x: 64, y: 48 } }
          ]
        }
      },
      {
        id: 'ja_ni',
        hiragana: 'に',
        katakana: 'ニ',
        romaji: 'ni',
        row: 'na',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Âm mũi kết hợp khóe miệng kéo rộng sang hai bên [ɲi] trong trẻo.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười, đầu lưỡi sát hàm trên đẩy âm qua mũi "ni".' },
        sampleWords: [
          { word: 'にわ', kanji: '庭', furigana: 'にわ', romaji: 'niwa', meaningVi: 'khu vườn hoa rực rỡ', visualUrl: '/assets/ehon/bee_tree.jpg', visualAlt: 'Khu vườn xanh hoa nở' },
          { word: 'にんじん', kanji: '人参', furigana: 'にんじん', romaji: 'ninjin', meaningVi: 'củ cà rốt giòn ngọt', visualUrl: '/assets/ehon/carrot.jpg', visualAlt: 'Củ cà rốt cam giòn ngọt' }
        ],
        tprAction: { titleVi: 'Bé tưới cây trong vườn Niwa', chantJa: 'に・に・にわ！', descriptionVi: 'Bé giả làm bình tưới nước tưới cho những bông hoa trong vườn: "Ni - Ni - Niwa!"', icon: '🏡' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ に gồm nét sổ có móc bên trái và 2 nét ngang nhỏ bên phải.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ dọc hơi cong có móc hất', pathD: 'M 35,24 L 35,78 C 38,76 42,70 44,66', guidePoint: { x: 35, y: 24 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang ngắn trên bên phải', pathD: 'M 54,38 L 74,38', guidePoint: { x: 54, y: 38 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Ngang hơi cong dưới bên phải', pathD: 'M 52,68 C 62,72 72,70 76,66', guidePoint: { x: 52, y: 68 } }
          ]
        }
      },
      {
        id: 'ja_nu',
        hiragana: 'ぬ',
        katakana: 'ヌ',
        romaji: 'nu',
        row: 'na',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Âm mũi kết hợp môi khép hờ, luồng hơi thoát êm [nɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép nhẹ môi, phát âm mũi "nu" ấm áp.' },
        sampleWords: [
          { word: 'ぬの', kanji: '布', furigana: 'ぬの', romaji: 'nuno', meaningVi: 'tấm vải mềm mại', visualUrl: '/assets/ehon/quilt.jpg', visualAlt: 'Tấm vải dệt mềm êm' },
          { word: 'ぬいぐるみ', kanji: 'ぬいぐるみ', furigana: 'ぬいぐるみ', romaji: 'nuigurumi', meaningVi: 'chú gấu bông ấm áp', visualUrl: '/assets/ehon/doll.jpg', visualAlt: 'Gấu bông dễ thương' }
        ],
        tprAction: { titleVi: 'Bé vuốt tấm vải mềm Nuno', chantJa: 'ぬ・ぬ・ぬの！', descriptionVi: 'Bé lấy tay vuốt ve cánh tay nhẹ nhàng như đang vuốt tấm chăn mềm: "Nu - Nu - Nuno!"', icon: '🧣' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ ぬ gồm nét sổ chéo và nét lượn thắt nút xoắn đuôi vòng tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ chéo từ trái sang phải', pathD: 'M 40,26 L 32,76', guidePoint: { x: 40, y: 26 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Lượn từ trên xuống, xoay vòng bụng to rồi thắt nút đuôi', pathD: 'M 30,42 C 55,20 75,40 68,68 C 64,80 48,82 45,68 C 45,55 68,52 74,74 C 76,82 72,88 66,86', guidePoint: { x: 30, y: 42 } }
          ]
        }
      },
      {
        id: 'ja_ne',
        hiragana: 'ね',
        katakana: 'ネ',
        romaji: 'ne',
        row: 'na',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Âm mũi kết hợp mở ngang [e], âm phát ra trong trẻo thân thương.',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa tầm, âm mũi "ne" vang êm.' },
        sampleWords: [
          { word: 'ねこ', kanji: '猫', furigana: 'ねこ', romaji: 'neko', meaningVi: 'chú mèo con kêu meo meo', visualUrl: '/assets/ehon/cat.jpg', visualAlt: 'Chú mèo con ngộ nghĩnh' },
          { word: 'ねずみ', kanji: '鼠', furigana: 'ねずみ', romaji: 'nezumi', meaningVi: 'chú chuột nhắt lém lỉnh', visualUrl: '/assets/ehon/mouse.jpg', visualAlt: 'Chú chuột nhắt tinh khôn' }
        ],
        tprAction: { titleVi: 'Bé làm mèo Neko vuốt râu', chantJa: 'ね・ね・ねこ！', descriptionVi: 'Bé lấy hai tay vuốt má như vuốt râu mèo rồi kêu "Meow": "Ne - Ne - Neko!"', icon: '🐱' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ ね gồm nét sổ thẳng và nét lượn zíc-zắc thắt nút đuôi tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ thẳng từ trên xuống', pathD: 'M 35,20 L 35,84', guidePoint: { x: 35, y: 20 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Zíc-zắc qua nét sổ rồi thắt nút tròn đuôi', pathD: 'M 25,44 L 54,44 L 30,70 L 65,58 C 72,68 68,82 58,82 C 50,82 50,72 58,72 C 66,72 72,82 70,88', guidePoint: { x: 25, y: 44 } }
          ]
        }
      },
      {
        id: 'ja_no',
        hiragana: 'の',
        katakana: 'ノ',
        romaji: 'no',
        row: 'na',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Âm mũi kết hợp tròn môi [o], âm sâu và mềm mại.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, dẫn hơi qua mũi phát âm "no" êm dịu.' },
        sampleWords: [
          { word: 'のり', kanji: '海苔', furigana: 'のり', romaji: 'nori', meaningVi: 'lá rong biển giòn thơm', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Lá rong biển cuộn cơm' },
          { word: 'のこぎり', kanji: '鋸', furigana: 'のこぎり', romaji: 'nokogiri', meaningVi: 'chiếc cưa gỗ của bác thợ', visualUrl: '/assets/ehon/ruler.jpg', visualAlt: 'Chiếc cưa gỗ' }
        ],
        tprAction: { titleVi: 'Bé cuộn lá rong biển Nori', chantJa: 'の・の・のり！', descriptionVi: 'Bé giả vờ cuộn cuộn hai tay lại như cuộn chiếc nem rong biển: "No - No - Nori!"', icon: '🍙' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ の chỉ có 1 nét uốn vòng xoắn ốc tuyệt đẹp tựa vỏ ốc biển.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chéo xuống rồi lượn vòng cung tròn bao quanh', pathD: 'M 54,32 L 38,68 C 42,50 68,35 74,58 C 78,78 52,86 36,74', guidePoint: { x: 54, y: 32 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG HA (Âm Thở Thanh Khiết)
  // ==========================================
  {
    rowKey: 'ha',
    rowNameVi: 'Hàng Ha (Âm Hơi Thở Êm Đềm)',
    rowNameJa: 'は行（はぎょう）',
    themeColor: 'purple',
    themeBanner: '/assets/ehon/bee_tree.jpg',
    characters: [
      {
        id: 'ja_ha',
        hiragana: 'は',
        katakana: 'ハ',
        romaji: 'ha',
        row: 'ha',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Hơi thở thoát êm qua thanh môn rồi mở miệng phát âm "ha" sảng khoái.',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Thở hơi nhẹ từ cuống họng, mở miệng "ha" thư thái.' },
        sampleWords: [
          { word: 'はな', kanji: '花', furigana: 'はな', romaji: 'hana', meaningVi: 'bông hoa xinh ngát hương', visualUrl: '/assets/ehon/bee_tree.jpg', visualAlt: 'Bông hoa khoe sắc' },
          { word: 'はち', kanji: '蜂', furigana: 'はち', romaji: 'hachi', meaningVi: 'chú ong chăm chỉ tìm mật', visualUrl: '/assets/ehon/bee_tree.jpg', visualAlt: 'Chú ong chăm chỉ' }
        ],
        tprAction: { titleVi: 'Bé ngửi bông hoa Hana', chantJa: 'は・は・はな！', descriptionVi: 'Bé đưa hai tay làm bông hoa trước mũi hít một hơi thật thơm: "Ha - Ha - Hana!"', icon: '🌸' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ は gồm nét sổ có móc bên trái, nét ngang và nét sổ thắt nút tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ dọc có móc hất', pathD: 'M 32,24 L 32,80 C 35,76 39,70 42,66', guidePoint: { x: 32, y: 24 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang ngắn bên phải', pathD: 'M 50,38 L 74,38', guidePoint: { x: 50, y: 38 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ thẳng cắt nét 2 rồi thắt nút tròn', pathD: 'M 62,24 L 62,65 C 62,80 48,80 48,70 C 48,60 62,60 74,74', guidePoint: { x: 62, y: 24 } }
          ]
        }
      },
      {
        id: 'ja_hi',
        hiragana: 'ひ',
        katakana: 'ヒ',
        romaji: 'hi',
        row: 'ha',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Âm xát ngạc mềm kết hợp mỉm cười [çi] thanh khiết tựa nụ cười bé.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười xinh, thở hơi êm nhẹ tạo âm "hi".' },
        sampleWords: [
          { word: 'ひこうき', kanji: '飛行機', furigana: 'ひこうき', romaji: 'hikouki', meaningVi: 'chiếc máy bay lượn trên mây', visualUrl: '/assets/ehon/rocket.jpg', visualAlt: 'Máy bay vút bay' },
          { word: 'ひまわり', kanji: '向日葵', furigana: 'ひまわり', romaji: 'himawari', meaningVi: 'hoa hướng dương đón nắng', visualUrl: '/assets/ehon/sun.jpg', visualAlt: 'Hoa hướng dương rực rỡ' }
        ],
        tprAction: { titleVi: 'Bé bay như phi cơ Hikouki', chantJa: 'ひ・ひ・ひこうき！', descriptionVi: 'Bé dang rộng hai tay làm cánh máy bay lượn vòng: "Hi - Hi - Hikouki!"', icon: '✈️' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ ひ chỉ có 1 nét uốn hình nụ cười mỉm xinh xắn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn, cong sâu xuống đáy rồi vươn lên thành nụ cười', pathD: 'M 25,38 L 42,32 C 40,65 60,82 72,55 C 74,50 78,42 78,35', guidePoint: { x: 25, y: 38 } }
          ]
        }
      },
      {
        id: 'ja_fu',
        hiragana: 'ふ',
        katakana: 'フ',
        romaji: 'fu',
        row: 'ha',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Thổi hơi nhẹ nhàng qua hai mép môi không khép chặt [ɸɯ] tựa thổi nến.',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Hai môi để hờ tự nhiên, thổi hơi nhẹ tạo âm "fu".' },
        sampleWords: [
          { word: 'ふね', kanji: '船', furigana: 'ふね', romaji: 'fune', meaningVi: 'chiếc thuyền rẽ sóng ra khơi', visualUrl: '/assets/ehon/goat_boat.jpg', visualAlt: 'Thuyền buồm lướt sóng' },
          { word: 'ふうせん', kanji: '風船', furigana: 'ふうせん', romaji: 'fuusen', meaningVi: 'quả bóng bay sắc màu', visualUrl: '/assets/ehon/ball.jpg', visualAlt: 'Bóng bay rực rỡ' }
        ],
        tprAction: { titleVi: 'Bé bồng bềnh như thuyền Fune', chantJa: 'ふ・ふ・ふね！', descriptionVi: 'Bé nghiêng người nhấp nhô nhịp nhàng như con thuyền trên biển: "Fu - Fu - Fune!"', icon: '⛵' },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ ふ gồm nét chấm trên, nét lượn giữa và hai dấu phẩy hai bên.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chấm phẩy trên đỉnh', pathD: 'M 48,20 L 54,28', guidePoint: { x: 48, y: 20 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ lượn bụng tròn giữa', pathD: 'M 50,38 C 50,55 42,75 52,82 C 55,80 55,75 52,70', guidePoint: { x: 50, y: 38 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Dấu phẩy bên trái', pathD: 'M 28,52 L 35,62', guidePoint: { x: 28, y: 52 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Dấu phẩy bên phải', pathD: 'M 68,52 L 75,62', guidePoint: { x: 68, y: 52 } }
          ]
        }
      },
      {
        id: 'ja_he',
        hiragana: 'へ',
        katakana: 'ヘ',
        romaji: 'he',
        row: 'ha',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Thở hơi nhẹ kết hợp mở ngang khẩu hình [he] tự nhiên.',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Mở miệng vừa tầm, thở hơi phát âm "he" êm dịu.' },
        sampleWords: [
          { word: 'へび', kanji: '蛇', furigana: 'へび', romaji: 'hebi', meaningVi: 'chú rắn con uốn lượn', visualUrl: '/assets/ehon/theme_animals.jpg', visualAlt: 'Chú rắn nhỏ hiền lành' },
          { word: 'へや', kanji: '部屋', furigana: 'へや', romaji: 'heya', meaningVi: 'căn phòng ấm cúng của em', visualUrl: '/assets/ehon/word_bank_hero.jpg', visualAlt: 'Căn phòng ấm áp' }
        ],
        tprAction: { titleVi: 'Bé làm chú rắn Hebi bò', chantJa: 'へ・へ・へび！', descriptionVi: 'Bé uốn lượn cánh tay như chú rắn nhỏ bò trên thảm cỏ: "He - He - Hebi!"', icon: '🐍' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ へ chỉ gồm 1 nét uốn hình mái nhà che chở.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Lên dốc ngắn rồi xuôi dốc dài sang phải', pathD: 'M 25,65 L 45,35 L 78,65', guidePoint: { x: 25, y: 65 } }
          ]
        }
      },
      {
        id: 'ja_ho',
        hiragana: 'ほ',
        katakana: 'ホ',
        romaji: 'ho',
        row: 'ha',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Thở hơi tròn môi nhẹ nhàng tạo âm [ho] ấm áp bao la.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi nhẹ, thở hơi êm đềm phát âm "ho".' },
        sampleWords: [
          { word: 'ほし', kanji: '星', furigana: 'ほし', romaji: 'hoshi', meaningVi: 'ngôi sao lấp lánh trên trời', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Ngôi sao đêm lấp lánh' },
          { word: 'ほん', kanji: '本', furigana: 'ほん', romaji: 'hon', meaningVi: 'cuốn sách hay chứa bao điều lạ', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Cuốn sách mở trang' }
        ],
        tprAction: { titleVi: 'Bé ngắm ngôi sao Hoshi', chantJa: 'ほ・ほ・ほし！', descriptionVi: 'Bé xoè các ngón tay nhấp nháy trên bầu trời đêm như sao sáng: "Ho - Ho - Hoshi!"', icon: '⭐' },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ ほ gồm nét sổ có móc bên trái, 2 nét ngang và nét sổ thắt nút tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ dọc có móc hất', pathD: 'M 30,24 L 30,80 C 33,76 37,70 40,66', guidePoint: { x: 30, y: 24 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang ngắn trên', pathD: 'M 48,34 L 74,34', guidePoint: { x: 48, y: 34 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Ngang ngắn dưới', pathD: 'M 48,50 L 74,50', guidePoint: { x: 48, y: 50 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Sổ cắt nét 3 rồi thắt nút tròn', pathD: 'M 62,38 L 62,65 C 62,80 48,80 48,70 C 48,60 62,60 74,74', guidePoint: { x: 62, y: 38 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG MA (Âm Môi Rung Ngân Vang)
  // ==========================================
  {
    rowKey: 'ma',
    rowNameVi: 'Hàng Ma (Âm Môi Mềm Mại)',
    rowNameJa: 'ま行（まぎょう）',
    themeColor: 'pink',
    themeBanner: '/assets/ehon/bee_tree.jpg',
    characters: [
      {
        id: 'ja_ma',
        hiragana: 'ま',
        katakana: 'マ',
        romaji: 'ma',
        row: 'ma',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Khép hai môi ngân âm mũi rồi mở bung tự nhiên [ma].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Mím môi nhẹ, mở miệng bật âm "ma" tươi vui.' },
        sampleWords: [
          { word: 'まど', kanji: '窓', furigana: 'まど', romaji: 'mado', meaningVi: 'ô cửa sổ đón ánh nắng mai', visualUrl: '/assets/ehon/theme_nature.jpg', visualAlt: 'Cửa sổ nhìn ra vườn' },
          { word: 'まち', kanji: '町', furigana: 'まち', romaji: 'machi', meaningVi: 'thị trấn rộn rã tiếng cười', visualUrl: '/assets/ehon/archipelago.jpg', visualAlt: 'Khu phố đông vui' }
        ],
        tprAction: { titleVi: 'Bé mở toang cánh cửa Mado', chantJa: 'ま・ま・まど！', descriptionVi: 'Bé dang rộng hai tay như đẩy hai cánh cửa sổ đón gió: "Ma - Ma - Mado!"', icon: '🪟' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ ま gồm 2 nét ngang và nét sổ thắt nút tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang trên', pathD: 'M 28,34 L 72,34', guidePoint: { x: 28, y: 34 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang dưới song song', pathD: 'M 30,50 L 70,50', guidePoint: { x: 30, y: 50 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ thẳng cắt 2 nét ngang rồi thắt nút tròn', pathD: 'M 52,20 L 52,65 C 52,80 38,80 38,70 C 38,60 52,60 66,74', guidePoint: { x: 52, y: 20 } }
          ]
        }
      },
      {
        id: 'ja_mi',
        hiragana: 'み',
        katakana: 'ミ',
        romaji: 'mi',
        row: 'ma',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Âm môi kết hợp nụ cười tươi tắn [mi] trong sáng.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mím môi rồi kéo khoé môi cười xinh "mi".' },
        sampleWords: [
          { word: 'みず', kanji: '水', furigana: 'みず', romaji: 'mizu', meaningVi: 'dòng nước trong lành mát rượi', visualUrl: '/assets/ehon/train_rain.jpg', visualAlt: 'Giọt nước trong vắt' },
          { word: 'みかん', kanji: '蜜柑', furigana: 'みかん', romaji: 'mikan', meaningVi: 'quả quýt vàng ngọt mọng', visualUrl: '/assets/ehon/lime.jpg', visualAlt: 'Quả quýt mọng ngọt' }
        ],
        tprAction: { titleVi: 'Bé vốc làn nước Mizu mát', chantJa: 'み・み・みず！', descriptionVi: 'Bé chụm hai lòng bàn tay vốc nước mát rửa mặt sảng khoái: "Mi - Mi - Mizu!"', icon: '💧' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ み gồm nét lượn thắt nút chéo và nét sổ phẩy cắt qua.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang nhẹ, sổ chéo thắt nút rồi kéo ngang đáy', pathD: 'M 28,34 L 52,34 L 32,65 C 28,75 42,78 48,70 L 74,70', guidePoint: { x: 28, y: 34 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo từ trên xuống', pathD: 'M 62,45 L 56,85', guidePoint: { x: 62, y: 45 } }
          ]
        }
      },
      {
        id: 'ja_mu',
        hiragana: 'む',
        katakana: 'ム',
        romaji: 'mu',
        row: 'ma',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Môi khép hờ, hơi thở đẩy qua khoang mũi ngân âm [mu].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép môi vừa tầm, ngân âm "mu" tròn trịa.' },
        sampleWords: [
          { word: 'むし', kanji: '虫', furigana: 'むし', romaji: 'mushi', meaningVi: 'chú bọ nhỏ bé đáng yêu', visualUrl: '/assets/ehon/bug_rug.jpg', visualAlt: 'Chú bọ rùa nhỏ' },
          { word: 'むら', kanji: '村', furigana: 'むら', romaji: 'mura', meaningVi: 'ngôi làng yên bình bên sườn đồi', visualUrl: '/assets/ehon/farmer_barn.jpg', visualAlt: 'Ngôi làng thanh bình' }
        ],
        tprAction: { titleVi: 'Bé tìm chú bọ Mushi', chantJa: 'む・む・むし！', descriptionVi: 'Bé cúi nhìn bãi cỏ, ngón tay nhấp nháy như chú bọ nhỏ bò: "Mu - Mu - Mushi!"', icon: '🐞' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ む gồm nét ngang, nét sổ thắt nút hất đuôi và dấu chấm.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn', pathD: 'M 25,38 L 48,38', guidePoint: { x: 25, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ thẳng, thắt nút tròn rồi hất đuôi cao sang phải', pathD: 'M 40,22 L 40,65 C 40,78 28,78 28,68 C 28,58 45,58 58,68 C 65,74 72,65 74,55', guidePoint: { x: 40, y: 22 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Dấu chấm phẩy góc trên bên phải', pathD: 'M 70,30 L 78,40', guidePoint: { x: 70, y: 30 } }
          ]
        }
      },
      {
        id: 'ja_me',
        hiragana: 'め',
        katakana: 'メ',
        romaji: 'me',
        row: 'ma',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Môi mở vừa tầm, phát âm [me] thanh thoát, tự nhiên.',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa tầm, ngân âm "me" êm dịu.' },
        sampleWords: [
          { word: 'め', kanji: '目', furigana: 'め', romaji: 'me', meaningVi: 'đôi mắt sáng tinh anh', visualUrl: '/assets/ehon/puppy_hug.jpg', visualAlt: 'Đôi mắt sáng lấp lánh' },
          { word: 'めがね', kanji: '眼鏡', furigana: 'めがね', romaji: 'megane', meaningVi: 'chiếc kính mắt tròn', visualUrl: '/assets/ehon/word_bank_hero.jpg', visualAlt: 'Cặp kính tròn dễ thương' }
        ],
        tprAction: { titleVi: 'Bé chớp đôi mắt Me sáng', chantJa: 'め・め・め！', descriptionVi: 'Bé chỉ hai ngón tay lên gần mắt rồi chớp chớp mí mắt thật tinh nghịch: "Me - Me - Me!"', icon: '👀' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ め gồm nét sổ chéo và nét lượn vòng cung tròn bao quanh (không thắt nút đuôi).',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ chéo từ trái sang phải', pathD: 'M 42,26 L 34,76', guidePoint: { x: 42, y: 26 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Lượn từ trên xuống bao vòng cung tròn', pathD: 'M 30,42 C 55,20 75,40 68,68 C 64,80 48,82 45,68 C 45,55 68,52 74,74', guidePoint: { x: 30, y: 42 } }
          ]
        }
      },
      {
        id: 'ja_mo',
        hiragana: 'も',
        katakana: 'モ',
        romaji: 'mo',
        row: 'ma',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Tròn môi, kết hợp âm môi sâu lắng [mo] ấm áp.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, phát âm "mo" tròn và ấm.' },
        sampleWords: [
          { word: 'もり', kanji: '森', furigana: 'もり', romaji: 'mori', meaningVi: 'khu rừng già râm mát', visualUrl: '/assets/ehon/bee_tree.jpg', visualAlt: 'Rừng cây xanh tốt' },
          { word: 'もも', kanji: '桃', furigana: 'もも', romaji: 'momo', meaningVi: 'quả đào tiên hồng ngọt ngào', visualUrl: '/assets/ehon/apple.jpg', visualAlt: 'Quả đào hồng mọng nước' }
        ],
        tprAction: { titleVi: 'Bé bước vào khu rừng Mori', chantJa: 'も・も・もり！', descriptionVi: 'Bé vươn tay hít thở không khí trong lành của rừng xanh: "Mo - Mo - Mori!"', icon: '🌲' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ も gồm nét sổ uốn lưỡi câu trước, sau đó là 2 nét ngang cắt qua.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ dọc rồi uốn móc tròn lớn sang phải', pathD: 'M 50,20 L 50,68 C 50,85 68,85 74,74', guidePoint: { x: 50, y: 20 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang trên cắt qua', pathD: 'M 32,38 L 68,38', guidePoint: { x: 32, y: 38 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Ngang dưới cắt qua', pathD: 'M 30,52 L 70,52', guidePoint: { x: 30, y: 52 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG YA (Bán Nguyên Âm Bay Bổng - 3 Chữ)
  // ==========================================
  {
    rowKey: 'ya',
    rowNameVi: 'Hàng Ya (Bán Nguyên Âm Bay Bổng)',
    rowNameJa: 'や行（やぎょう）',
    themeColor: 'amber',
    themeBanner: '/assets/ehon/archipelago.jpg',
    characters: [
      {
        id: 'ja_ya',
        hiragana: 'や',
        katakana: 'ヤ',
        romaji: 'ya',
        row: 'ya',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Lưỡi lướt nhanh từ vị trí âm [i] sang [a] tạo thành bán nguyên âm [ja].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Lướt nhẹ từ khoé cười sang mở rộng "ya" phóng khoáng.' },
        sampleWords: [
          { word: 'やま', kanji: '山', furigana: 'やま', romaji: 'yama', meaningVi: 'ngọn núi cao hùng vĩ', visualUrl: '/assets/ehon/archipelago.jpg', visualAlt: 'Đỉnh núi sừng sững' },
          { word: 'やさい', kanji: '野菜', furigana: 'やさい', romaji: 'yasai', meaningVi: 'rau củ quả tươi ngon', visualUrl: '/assets/ehon/carrot.jpg', visualAlt: 'Rau củ quả tươi sạch' }
        ],
        tprAction: { titleVi: 'Bé trèo lên ngọn núi Yama', chantJa: 'や・や・やま！', descriptionVi: 'Bé chụm hai bàn tay trên đầu làm hình chóp núi nhọn: "Ya - Ya - Yama!"', icon: '⛰️' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ や gồm nét uốn móc chính, dấu chấm phẩy và nét sổ chéo.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Lượn sang phải rồi móc hất vào trong', pathD: 'M 30,42 C 45,30 65,30 68,45 C 68,55 58,65 52,65', guidePoint: { x: 30, y: 42 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Dấu chấm phẩy góc trên bên phải', pathD: 'M 64,24 L 70,34', guidePoint: { x: 64, y: 24 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ chéo dài từ trên xuống', pathD: 'M 40,20 L 32,82', guidePoint: { x: 40, y: 20 } }
          ]
        }
      },
      {
        id: 'ja_yu',
        hiragana: 'ゆ',
        katakana: 'ユ',
        romaji: 'yu',
        row: 'ya',
        orderInRow: 2,
        vowel: 'u',
        soundDescriptionVi: 'Lướt nhanh từ [i] sang [u] mềm mại [jɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Lướt êm từ nụ cười sang khép môi nhẹ "yu".' },
        sampleWords: [
          { word: 'ゆき', kanji: '雪', furigana: 'ゆき', romaji: 'yuki', meaningVi: 'tuyết trắng rơi êm đềm', visualUrl: '/assets/ehon/soap.jpg', visualAlt: 'Bông tuyết trắng ngần' },
          { word: 'ゆめ', kanji: '夢', furigana: 'ゆめ', romaji: 'yume', meaningVi: 'giấc mơ thần tiên ngọt ngào', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Giấc mơ lung linh' }
        ],
        tprAction: { titleVi: 'Bé hứng hoa tuyết Yuki rơi', chantJa: 'ゆ・ゆ・ゆき！', descriptionVi: 'Bé xoè tay hứng từng hạt tuyết trắng rơi từ bầu trời: "Yu - Yu - Yuki!"', icon: '❄️' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ ゆ gồm nét uốn thắt vòng thân và nét sổ dọc cắt giữa.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ chéo, lượn vòng cung đáy rồi vươn lên', pathD: 'M 35,28 L 35,62 C 35,80 58,80 62,65 C 65,50 48,45 35,52', guidePoint: { x: 35, y: 28 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ dọc thẳng cắt qua nét 1', pathD: 'M 54,20 L 54,82', guidePoint: { x: 54, y: 20 } }
          ]
        }
      },
      {
        id: 'ja_yo',
        hiragana: 'よ',
        katakana: 'ヨ',
        romaji: 'yo',
        row: 'ya',
        orderInRow: 3,
        vowel: 'o',
        soundDescriptionVi: 'Lướt nhanh từ [i] sang [o] tròn trịa ấm áp [jo].',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Lướt nhẹ sang khẩu hình tròn môi "yo".' },
        sampleWords: [
          { word: 'よる', kanji: '夜', furigana: 'よる', romaji: 'yoru', meaningVi: 'màn đêm lung linh sao sáng', visualUrl: '/assets/ehon/moon_spoon.jpg', visualAlt: 'Màn đêm thanh tĩnh' },
          { word: 'よーよー', kanji: 'ヨーヨー', furigana: 'よーよー', romaji: 'yōyō', meaningVi: 'con quay yo-yo vui nhộn', visualUrl: '/assets/ehon/yoyo.jpg', visualAlt: 'Con quay yo-yo tung hứng' }
        ],
        tprAction: { titleVi: 'Bé chúc ngủ ngon đêm Yoru', chantJa: 'よ・よ・よる！', descriptionVi: 'Bé áp hai lòng bàn tay nghiêng đầu như đang ngủ say dưới trăng: "Yo - Yo - Yoru!"', icon: '🌙' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ よ gồm nét ngang ngắn và nét sổ thắt nút tròn.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn', pathD: 'M 28,38 L 52,38', guidePoint: { x: 28, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ dọc từ trên xuống, thắt nút tròn rồi kéo sang phải', pathD: 'M 52,22 L 52,65 C 52,80 38,80 38,70 C 38,60 52,60 70,68', guidePoint: { x: 52, y: 22 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG RA (Âm Vỗ Đầu Lưỡi Nhẹ Nhàng)
  // ==========================================
  {
    rowKey: 'ra',
    rowNameVi: 'Hàng Ra (Âm Vỗ Đầu Lưỡi Trong Trẻo)',
    rowNameJa: 'ら行（らぎょう）',
    themeColor: 'teal',
    themeBanner: '/assets/ehon/leo.jpg',
    characters: [
      {
        id: 'ja_ra',
        hiragana: 'ら',
        katakana: 'ラ',
        romaji: 'ra',
        row: 'ra',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Đầu lưỡi vỗ khẽ một lần vào ngạc cứng trên (giữa [l] và [r]), mở miệng "ra".',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Đầu lưỡi gõ nhẹ vòm họng trên, bật âm "ra" trong veo.' },
        sampleWords: [
          { word: 'らいおん', kanji: 'ライオン', furigana: 'らいおん', romaji: 'raion', meaningVi: 'chú sư tử dũng mãnh', visualUrl: '/assets/ehon/leo.jpg', visualAlt: 'Sư tử bờm vàng oai vệ' },
          { word: 'らじお', kanji: 'ラジオ', furigana: 'rajio', romaji: 'rajio', meaningVi: 'chiếc đài radio ca hát', visualUrl: '/assets/ehon/tin.jpg', visualAlt: 'Đài phát thanh cổ điển' }
        ],
        tprAction: { titleVi: 'Bé làm sư tử Raion gầm', chantJa: 'ら・ら・らいおん！', descriptionVi: 'Bé giơ hai tay vuốt bờm sư tử và gầm vang vui nhộn: "Ra - Ra - Raion!"', icon: '🦁' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ ら gồm nét phẩy trên đầu và nét uốn bụng cong bên dưới.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chấm phẩy ngắn ngang', pathD: 'M 42,24 L 56,30', guidePoint: { x: 42, y: 24 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ nhẹ rồi lượn vòng cung tròn lớn', pathD: 'M 42,42 L 42,55 C 55,42 75,48 72,70 C 68,85 45,86 35,76', guidePoint: { x: 42, y: 42 } }
          ]
        }
      },
      {
        id: 'ja_ri',
        hiragana: 'り',
        katakana: 'リ',
        romaji: 'ri',
        row: 'ra',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Đầu lưỡi vỗ khẽ kết hợp nụ cười tươi tắn [ɾi].',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười xinh xắn, đầu lưỡi chạm nhanh nhả âm "ri".' },
        sampleWords: [
          { word: 'りんご', kanji: '林檎', furigana: 'りんご', romaji: 'ringo', meaningVi: 'quả táo đỏ giòn ngọt', visualUrl: '/assets/ehon/apple.jpg', visualAlt: 'Quả táo đỏ mọng' },
          { word: 'りす', kanji: '栗鼠', furigana: 'りす', romaji: 'risu', meaningVi: 'chú sóc nhỏ gặm hạt dẻ', visualUrl: '/assets/ehon/hedgehog.jpg', visualAlt: 'Chú sóc đuôi xù' }
        ],
        tprAction: { titleVi: 'Bé cắn quả táo Ringo', chantJa: 'り・り・りんご！', descriptionVi: 'Bé cầm quả táo vô hình cắn một miếng giòn rụm: "Ri - Ri - Ringo!"', icon: '🍎' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ り gồm nét sổ ngắn có móc bên trái và nét sổ lượn dài bên phải.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ ngắn bên trái có móc hất', pathD: 'M 35,32 L 35,60 C 37,58 40,54 42,50', guidePoint: { x: 35, y: 32 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ dài uốn cong nhẹ sang trái', pathD: 'M 65,22 C 68,55 65,75 56,86', guidePoint: { x: 65, y: 22 } }
          ]
        }
      },
      {
        id: 'ja_ru',
        hiragana: 'る',
        katakana: 'ル',
        romaji: 'ru',
        row: 'ra',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Đầu lưỡi vỗ nhẹ kết hợp môi khép hờ tự nhiên [ɾɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Môi khép hờ, lưỡi vỗ nhẹ tạo âm "ru".' },
        sampleWords: [
          { word: 'るす', kanji: '留守', furigana: 'るす', romaji: 'rusu', meaningVi: 'trông nhà ngoan ngoãn', visualUrl: '/assets/ehon/theme_nature.jpg', visualAlt: 'Bé ngoan trông nhà' },
          { word: 'るびー', kanji: 'ルビー', furigana: 'るびー', romaji: 'rubī', meaningVi: 'viên ngọc hồng ngọc lấp lánh', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Viên ngọc hồng ngọc đỏ lóng lánh' }
        ],
        tprAction: { titleVi: 'Bé khoá cửa trông nhà Rusu', chantJa: 'る・る・るす！', descriptionVi: 'Bé làm động tác vặn chìa khoá khoá cửa cẩn thận: "Ru - Ru - Rusu!"', icon: '🔑' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ る vẽ 1 nét liền mạch có thắt nút vòng tròn nhỏ ở chân.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn, chéo xuống, lượn vòng cung rồi thắt nút tròn đuôi', pathD: 'M 35,28 L 65,28 L 35,52 L 68,52 C 72,68 62,82 48,82 C 42,82 42,74 48,74 C 54,74 58,82 54,86', guidePoint: { x: 35, y: 28 } }
          ]
        }
      },
      {
        id: 'ja_re',
        hiragana: 'れ',
        katakana: 'レ',
        romaji: 're',
        row: 'ra',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Đầu lưỡi gõ nhẹ kết hợp mở ngang khẩu hình [ɾe].',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa tầm, lưỡi gõ nhẹ "re".' },
        sampleWords: [
          { word: 'れきし', kanji: '歴史', furigana: 'れきし', romaji: 'rekishi', meaningVi: 'trang sử sách kỳ thú', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Quyển sách cổ xưa' },
          { word: 'れもん', kanji: '檸檬', furigana: 'れもん', romaji: 'remon', meaningVi: 'quả chanh vàng thơm mát', visualUrl: '/assets/ehon/lime.jpg', visualAlt: 'Quả chanh vàng chua dịu' }
        ],
        tprAction: { titleVi: 'Bé nếm chanh chua Remon', chantJa: 'れ・れ・れもん！', descriptionVi: 'Bé nhắm một bên mắt chun mũi vì quả chanh chua chua: "Re - Re - Remon!"', icon: '🍋' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ れ gồm nét sổ thẳng và nét lượn hất chân sang phải (không thắt nút).',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ thẳng từ trên xuống', pathD: 'M 35,20 L 35,84', guidePoint: { x: 35, y: 20 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Zíc-zắc qua thân rồi hất cong chân sang phải', pathD: 'M 25,44 L 54,44 L 30,70 L 65,58 C 72,68 70,82 78,82', guidePoint: { x: 25, y: 44 } }
          ]
        }
      },
      {
        id: 'ja_ro',
        hiragana: 'ろ',
        katakana: 'ロ',
        romaji: 'ro',
        row: 'ra',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Tròn môi, đầu lưỡi gõ nhẹ phát âm [ɾo] vang ấm.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, gõ nhẹ đầu lưỡi nhả âm "ro".' },
        sampleWords: [
          { word: 'ろうそく', kanji: '蝋燭', furigana: 'ろうそく', romaji: 'rousoku', meaningVi: 'cây nến thắp sáng lung linh', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Cây nến ấm áp' },
          { word: 'ろけっと', kanji: 'ロケット', furigana: 'ろけっと', romaji: 'roketto', meaningVi: 'tàu tên lửa bay lên sao hoả', visualUrl: '/assets/ehon/rocket.jpg', visualAlt: 'Tên lửa phóng lên không gian' }
        ],
        tprAction: { titleVi: 'Bé phóng tên lửa Roketto', chantJa: 'ろ・ろ・ろけっと！', descriptionVi: 'Bé chắp hai tay lại làm đầu tên lửa phóng vút lên cao: "Ro - Ro - Roketto!"', icon: '🚀' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ ろ vẽ 1 nét tương tự chữ る nhưng đáy mở rộng thanh thoát (không có nút tròn).',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang ngắn, chéo xuống, lượn cung tròn đáy rộng mở', pathD: 'M 35,28 L 65,28 L 35,52 L 68,52 C 72,68 62,84 42,84 C 36,84 32,80 32,76', guidePoint: { x: 35, y: 28 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // HÀNG WA & N (Nguyên Âm Cuối & Âm Mũi Độc Đáo)
  // ==========================================
  {
    rowKey: 'wa',
    rowNameVi: 'Hàng Wa & Âm Mũi N (Mảnh Ghép Hoàn Tất)',
    rowNameJa: 'わ行・ん（わぎょう・ん）',
    themeColor: 'cyan',
    themeBanner: '/assets/ehon/theme_animals.jpg',
    characters: [
      {
        id: 'ja_wa',
        hiragana: 'わ',
        katakana: 'ワ',
        romaji: 'wa',
        row: 'wa',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Môi hơi chu nhẹ rồi mở nhanh sang âm [a] tạo thành [wa].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Chu môi nhẹ rồi mở to phát âm "wa" rạng rỡ.' },
        sampleWords: [
          { word: 'わに', kanji: '鰐', furigana: 'わに', romaji: 'wani', meaningVi: 'chú cá sấu cười toe toét', visualUrl: '/assets/ehon/theme_animals.jpg', visualAlt: 'Cá sấu hiền lành' },
          { word: 'わたがし', kanji: '綿菓子', furigana: 'わたがし', romaji: 'watagashi', meaningVi: 'kẹo bông gòn ngọt xốp', visualUrl: '/assets/ehon/clown_cloud.jpg', visualAlt: 'Kẹo bông gòn xốp trắng' }
        ],
        tprAction: { titleVi: 'Bé làm miệng cá sấu Wani', chantJa: 'わ・わ・わに！', descriptionVi: 'Bé duỗi thẳng hai cánh tay mở to rồi vỗ lại như miệng chú cá sấu: "Wa - Wa - Wani!"', icon: '🐊' },
        strokeOrder: {
          strokeCount: 2,
          descriptionVi: 'Chữ わ gồm nét sổ thẳng và nét lượn tròn vòng cung mở.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ thẳng từ trên xuống', pathD: 'M 35,20 L 35,84', guidePoint: { x: 35, y: 20 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Chéo nhẹ rồi lượn vòng cung tròn to', pathD: 'M 25,44 L 52,44 L 30,70 C 55,50 78,60 72,78 C 68,88 50,88 42,80', guidePoint: { x: 25, y: 44 } }
          ]
        }
      },
      {
        id: 'ja_wo',
        hiragana: 'を',
        katakana: 'ヲ',
        romaji: 'o',
        row: 'wa',
        orderInRow: 2,
        vowel: 'o',
        soundDescriptionVi: 'Trợ từ "o" kết nối hành động trong câu, phát âm tương tự "o" thanh thoát.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi nhẹ, phát âm nhẹ tựa trợ từ "o".' },
        sampleWords: [
          { word: 'ほんをよむ', kanji: '本を読む', furigana: 'ほんをよむ', romaji: 'hon o yomu', meaningVi: 'bé chăm chú đọc sách', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Bé mở trang sách Ehon' },
          { word: 'てをあらう', kanji: '手を洗う', furigana: 'てをあらう', romaji: 'te o arau', meaningVi: 'bé rửa sạch đôi tay', visualUrl: '/assets/ehon/soap.jpg', visualAlt: 'Bé rửa tay sạch bóng xà phòng' }
        ],
        tprAction: { titleVi: 'Bé giở sách đọc Hon o yomu', chantJa: 'ほんを・よむ！', descriptionVi: 'Bé mở trang sách truyện rồi đọc to câu: "Hon o yomu!"', icon: '📖' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ を gồm nét ngang ngắn, nét sổ gập và nét móc cung bên dưới.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang từ trái sang phải', pathD: 'M 28,34 L 72,34', guidePoint: { x: 28, y: 34 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo rồi gập ngang sang phải', pathD: 'M 50,22 L 38,58 L 65,58', guidePoint: { x: 50, y: 22 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Nét móc cung tròn đáy', pathD: 'M 40,65 C 55,62 70,68 70,76 C 70,84 55,88 42,82', guidePoint: { x: 40, y: 65 } }
          ]
        }
      },
      {
        id: 'ja_n',
        hiragana: 'ん',
        katakana: 'ン',
        romaji: 'n',
        row: 'wa',
        orderInRow: 3,
        vowel: 'n',
        soundDescriptionVi: 'Âm mũi đặc biệt, khép họng hoặc khép môi ngân âm mũi "n/m/ng" tùy từ.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Khép khoang miệng, ngân luồng hơi rung qua mũi "n".' },
        sampleWords: [
          { word: 'ほん', kanji: '本', furigana: 'ほん', romaji: 'hon', meaningVi: 'cuốn truyện tranh Ehon', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Sách truyện Ehon' },
          { word: 'ぱん', kanji: 'パン', furigana: 'ぱん', romaji: 'pan', meaningVi: 'chiếc bánh mì thơm lừng', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Bánh mì nướng vàng thơm' }
        ],
        tprAction: { titleVi: 'Bé gật đầu đồng ý "Un!"', chantJa: 'ん・ん・ほん！', descriptionVi: 'Bé gật nhẹ đầu và ngân âm mũi ấm áp: "N - N - Hon!"', icon: '✨' },
        strokeOrder: {
          strokeCount: 1,
          descriptionVi: 'Chữ ん chỉ có 1 nét uốn lượn tựa chữ h nghiêng mềm mại.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ chéo xuống rồi lượn vòng cong vút lên sang phải', pathD: 'M 40,24 L 32,78 C 38,62 58,45 64,68 C 66,78 72,82 78,75', guidePoint: { x: 40, y: 24 } }
          ]
        }
      }
    ]
  },

  // ==========================================
  // DAKUON (20 Âm Đục: GA, ZA, DA, BA)
  // ==========================================
  {
    rowKey: 'dakuon',
    rowNameVi: 'Biến Âm Đục (Ga • Za • Da • Ba)',
    rowNameJa: '濁音（だくおん）',
    themeColor: 'indigo',
    themeBanner: '/assets/ehon/theme_food_objects.jpg',
    characters: [
      // Hàng GA
      {
        id: 'ja_ga',
        hiragana: 'が',
        katakana: 'ガ',
        romaji: 'ga',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Âm đục, thanh quản rung mạnh kết hợp cuống lưỡi bật âm [ga].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Rung thanh quản ở cuống họng, bật âm "ga" vang.' },
        sampleWords: [
          { word: 'がっこう', kanji: '学校', furigana: 'がっこう', romaji: 'gakkou', meaningVi: 'ngôi trường mầm non thân yêu', visualUrl: '/assets/ehon/farmer_barn.jpg', visualAlt: 'Ngôi trường rực rỡ' },
          { word: 'がいこく', kanji: '外国', furigana: 'がいこく', romaji: 'gaikoku', meaningVi: 'vùng đất xa xôi kỳ thú', visualUrl: '/assets/ehon/archipelago.jpg', visualAlt: 'Hòn đảo thám hiểm' }
        ],
        tprAction: { titleVi: 'Bé vui bước đến trường Gakkou', chantJa: 'が・が・がっこう！', descriptionVi: 'Bé đeo cặp vô hình nhảy chân sáo: "Ga - Ga - Gakkou!"', icon: '🏫' },
        strokeOrder: {
          strokeCount: 5,
          descriptionVi: 'Chữ が gồm chữ か thêm 2 dấu phẩy ten-ten bên trên.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Nét thân か', pathD: 'M 25,38 L 50,38 C 58,38 60,52 56,68', guidePoint: { x: 25, y: 38 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Sổ chéo', pathD: 'M 36,22 C 34,50 32,75 28,86', guidePoint: { x: 36, y: 22 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Chấm phẩy', pathD: 'M 65,32 L 72,42', guidePoint: { x: 65, y: 32 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } },
            { strokeNumber: 5, directionVi: 'Nét 5: Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }
          ]
        }
      },
      {
        id: 'ja_gi',
        hiragana: 'ぎ',
        katakana: 'ギ',
        romaji: 'gi',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Rung thanh quản phát âm [gi] khỏe khoắn.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười, rung dây thanh âm bật "gi".' },
        sampleWords: [
          { word: 'ぎんこう', kanji: '銀行', furigana: 'ぎんこう', romaji: 'ginkou', meaningVi: 'ngân hàng tiền xu', visualUrl: '/assets/ehon/queen_coin.jpg', visualAlt: 'Ngân hàng với đồng xu' },
          { word: 'おりがみ', kanji: '折り紙', furigana: 'おりがみ', romaji: 'origami', meaningVi: 'nghệ thuật gấp giấy hạc', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Con hạc giấy Origami' }
        ],
        tprAction: { titleVi: 'Bé gấp giấy Origami', chantJa: 'ぎ・ぎ・おりがみ！', descriptionVi: 'Bé làm động tác miết phẳng nếp gấp giấy hạc: "Gi - Gi - Origami!"', icon: '🕊️' },
        strokeOrder: {
          strokeCount: 6,
          descriptionVi: 'Chữ ぎ gồm chữ き thêm 2 dấu phẩy ten-ten.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang trên', pathD: 'M 30,32 L 62,32', guidePoint: { x: 30, y: 32 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang dưới', pathD: 'M 26,48 L 68,48', guidePoint: { x: 26, y: 48 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ chéo móc hất', pathD: 'M 50,18 L 44,65', guidePoint: { x: 50, y: 18 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Cung tròn đáy', pathD: 'M 34,75 C 50,85 64,78 68,70', guidePoint: { x: 34, y: 75 } },
            { strokeNumber: 5, directionVi: 'Nét 5: Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } },
            { strokeNumber: 6, directionVi: 'Nét 6: Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }
          ]
        }
      },
      {
        id: 'ja_gu',
        hiragana: 'ぐ',
        katakana: 'グ',
        romaji: 'gu',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Rung thanh quản cuống lưỡi kết hợp môi khép hờ [gɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép môi nhẹ, rung dây thanh âm "gu".' },
        sampleWords: [
          { word: 'ぐみ', kanji: 'グミ', furigana: 'ぐみ', romaji: 'gumi', meaningVi: 'kẹo dẻo hoa quả gấu', visualUrl: '/assets/ehon/apple.jpg', visualAlt: 'Kẹo thạch dẻo gấu xinh' },
          { word: 'ぐんて', kanji: '軍手', furigana: 'ぐんて', romaji: 'gunte', meaningVi: 'găng tay làm vườn', visualUrl: '/assets/ehon/puppy_hug.jpg', visualAlt: 'Găng tay vải trắng' }
        ],
        tprAction: { titleVi: 'Bé nhai kẹo dẻo Gumi', chantJa: 'ぐ・ぐ・ぐみ！', descriptionVi: 'Bé xoa má nhai kẹo dẻo ngọt ngào: "Gu - Gu - Gumi!"', icon: '🍬' },
        strokeOrder: {
          strokeCount: 3,
          descriptionVi: 'Chữ ぐ gồm chữ く thêm 2 dấu ten-ten.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Chữ く', pathD: 'M 58,25 L 32,50 L 58,78', guidePoint: { x: 58, y: 25 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ten-ten 1', pathD: 'M 66,22 L 72,28', guidePoint: { x: 66, y: 22 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Ten-ten 2', pathD: 'M 70,26 L 76,32', guidePoint: { x: 70, y: 26 } }
          ]
        }
      },
      {
        id: 'ja_ge',
        hiragana: 'げ',
        katakana: 'ゲ',
        romaji: 'ge',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Rung thanh quản mở rộng [ge] khoẻ khoắn.',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa tầm, rung thanh quản phát âm "ge".' },
        sampleWords: [
          { word: 'げんき', kanji: '元気', furigana: 'げんき', romaji: 'genki', meaningVi: 'khoẻ mạnh tràn đầy sức sống', visualUrl: '/assets/ehon/sun.jpg', visualAlt: 'Bé khoẻ mạnh rạng rỡ' },
          { word: 'げーむ', kanji: 'ゲーム', furigana: 'げーむ', romaji: 'gēmu', meaningVi: 'trò chơi điện tử vui nhộn', visualUrl: '/assets/ehon/yoyo.jpg', visualAlt: 'Máy chơi game màu sắc' }
        ],
        tprAction: { titleVi: 'Bé giơ nắm tay thật Genki', chantJa: 'げ・げ・げんき！', descriptionVi: 'Bé khoe cơ bắp cánh tay thật khoẻ mạnh: "Ge - Ge - Genki!"', icon: '💪' },
        strokeOrder: {
          strokeCount: 5,
          descriptionVi: 'Chữ げ gồm chữ け thêm 2 dấu ten-ten.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Sổ móc trái', pathD: 'M 32,22 C 31,50 32,70 35,82', guidePoint: { x: 32, y: 22 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Ngang ngắn', pathD: 'M 48,38 L 72,38', guidePoint: { x: 48, y: 38 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Sổ cong', pathD: 'M 62,22 C 62,55 60,75 54,85', guidePoint: { x: 62, y: 22 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } },
            { strokeNumber: 5, directionVi: 'Nét 5: Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }
          ]
        }
      },
      {
        id: 'ja_go',
        hiragana: 'ご',
        katakana: 'ゴ',
        romaji: 'go',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Rung thanh quản kết hợp tròn môi [go] ấm áp.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, rung dây thanh âm "go" vang ấm.' },
        sampleWords: [
          { word: 'ごはん', kanji: '御飯', furigana: 'ごはん', romaji: 'gohan', meaningVi: 'bát cơm trắng dẻo thơm', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Bát cơm trắng nghi ngút khói' },
          { word: 'ごま', kanji: '胡麻', furigana: 'ごま', romaji: 'goma', meaningVi: 'hạt vừng mè thơm bùi', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Hạt mè vừng' }
        ],
        tprAction: { titleVi: 'Bé xới bát cơm Gohan', chantJa: 'ご・ご・ごはん！', descriptionVi: 'Bé làm động tác và cơm dẻo ngon lành: "Go - Go - Gohan!"', icon: '🍚' },
        strokeOrder: {
          strokeCount: 4,
          descriptionVi: 'Chữ ご gồm chữ こ thêm 2 dấu ten-ten.',
          strokes: [
            { strokeNumber: 1, directionVi: 'Nét 1: Ngang trên', pathD: 'M 32,35 C 45,32 58,32 65,38', guidePoint: { x: 32, y: 35 } },
            { strokeNumber: 2, directionVi: 'Nét 2: Đáy dưới', pathD: 'M 30,70 C 45,78 60,76 68,70', guidePoint: { x: 30, y: 70 } },
            { strokeNumber: 3, directionVi: 'Nét 3: Ten-ten 1', pathD: 'M 70,22 L 76,28', guidePoint: { x: 70, y: 22 } },
            { strokeNumber: 4, directionVi: 'Nét 4: Ten-ten 2', pathD: 'M 74,26 L 80,32', guidePoint: { x: 74, y: 26 } }
          ]
        }
      },

      // Hàng ZA
      {
        id: 'ja_za',
        hiragana: 'ざ',
        katakana: 'ザ',
        romaji: 'za',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 6,
        vowel: 'a',
        soundDescriptionVi: 'Âm xát đục đầu lưỡi rung thanh quản [za].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Hé răng nhẹ, rung dây thanh âm "za".' },
        sampleWords: [
          { word: 'ざぶとん', kanji: '座布団', furigana: 'ざぶとん', romaji: 'zabuton', meaningVi: 'chiếc đệm ngồi êm ái', visualUrl: '/assets/ehon/quilt.jpg', visualAlt: 'Chiếc nệm ngồi êm ái' }
        ],
        tprAction: { titleVi: 'Bé ngồi khoanh chân Zabuton', chantJa: 'ざ・ざ・ざぶとん！', descriptionVi: 'Bé ngồi xếp bằng ngay ngắn trên thảm: "Za - Za - Zabuton!"', icon: '🧘' },
        strokeOrder: { strokeCount: 5, descriptionVi: 'Chữ さ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét', pathD: 'M 28,38 L 65,38', guidePoint: { x: 28, y: 38 } }, { strokeNumber: 2, directionVi: 'Nét', pathD: 'M 50,20 L 42,65', guidePoint: { x: 50, y: 20 } }, { strokeNumber: 3, directionVi: 'Nét', pathD: 'M 32,75 C 50,85 64,78 68,70', guidePoint: { x: 32, y: 75 } }, { strokeNumber: 4, directionVi: 'Ten-ten', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 5, directionVi: 'Ten-ten', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_ji',
        hiragana: 'じ',
        katakana: 'ジ',
        romaji: 'ji',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 7,
        vowel: 'i',
        soundDescriptionVi: 'Âm tắc xát đục rung vòm miệng [d͡ʑi].',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười, rung thanh quản phát âm "ji".' },
        sampleWords: [
          { word: 'じどうしゃ', kanji: '自動車', furigana: 'じどうしゃ', romaji: 'jidousha', meaningVi: 'chiếc ô tô con lăn bánh', visualUrl: '/assets/ehon/theme_actions.jpg', visualAlt: 'Ô tô bon bon' }
        ],
        tprAction: { titleVi: 'Bé lái ô tô Jidousha', chantJa: 'じ・じ・じどうしゃ！', descriptionVi: 'Bé xoay vô lăng ô tô bim bim: "Ji - Ji - Jidousha!"', icon: '🚗' },
        strokeOrder: { strokeCount: 3, descriptionVi: 'Chữ し thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét し', pathD: 'M 38,25 L 38,65 C 38,82 54,85 64,72', guidePoint: { x: 38, y: 25 } }, { strokeNumber: 2, directionVi: 'Ten-ten 1', pathD: 'M 68,22 L 74,28', guidePoint: { x: 68, y: 22 } }, { strokeNumber: 3, directionVi: 'Ten-ten 2', pathD: 'M 72,26 L 78,32', guidePoint: { x: 72, y: 26 } }] }
      },
      {
        id: 'ja_zu',
        hiragana: 'ず',
        katakana: 'ズ',
        romaji: 'zu',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 8,
        vowel: 'u',
        soundDescriptionVi: 'Âm xát đục đầu lưỡi kết hợp [u] [zɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép môi nhẹ, rung dây thanh âm "zu".' },
        sampleWords: [
          { word: 'ずぼん', kanji: 'ズボン', furigana: 'ずぼん', romaji: 'zubon', meaningVi: 'chiếc quần dài xinh xắn', visualUrl: '/assets/ehon/theme_actions.jpg', visualAlt: 'Chiếc quần' }
        ],
        tprAction: { titleVi: 'Bé kéo chiếc quần Zubon', chantJa: 'ず・ず・ずぼん！', descriptionVi: 'Bé làm động tác kéo ống quần lên gọn gàng: "Zu - Zu - Zubon!"', icon: '👖' },
        strokeOrder: { strokeCount: 4, descriptionVi: 'Chữ す thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 25,36 L 70,36', guidePoint: { x: 25, y: 36 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 50,20 L 50,50 C 50,65 35,65 35,52 C 35,40 50,40 50,60 C 50,78 44,88 38,92', guidePoint: { x: 50, y: 20 } }, { strokeNumber: 3, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 4, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_ze',
        hiragana: 'ぜ',
        katakana: 'ゼ',
        romaji: 'ze',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 9,
        vowel: 'e',
        soundDescriptionVi: 'Rung thanh quản mở ngang khẩu hình [ze].',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa, rung âm "ze".' },
        sampleWords: [
          { word: 'ぜんぶ', kanji: '全部', furigana: 'ぜんぶ', romaji: 'zenbu', meaningVi: 'tất cả mọi người cùng vui', visualUrl: '/assets/ehon/puppy_hug.jpg', visualAlt: 'Mọi người ôm nhau vui vẻ' }
        ],
        tprAction: { titleVi: 'Bé gom tất cả Zenbu', chantJa: 'ぜ・ぜ・ぜんぶ！', descriptionVi: 'Bé vòng hai tay gom hết mọi đồ chơi lại: "Ze - Ze - Zenbu!"', icon: '🎁' },
        strokeOrder: { strokeCount: 5, descriptionVi: 'Chữ せ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 25,40 L 70,40', guidePoint: { x: 25, y: 40 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 62,24 L 62,68 L 30,68', guidePoint: { x: 62, y: 24 } }, { strokeNumber: 3, directionVi: 'Nét 3', pathD: 'M 38,24 L 38,78', guidePoint: { x: 38, y: 24 } }, { strokeNumber: 4, directionVi: 'Ten-ten 1', pathD: 'M 74,18 L 80,24', guidePoint: { x: 74, y: 18 } }, { strokeNumber: 5, directionVi: 'Ten-ten 2', pathD: 'M 78,22 L 84,28', guidePoint: { x: 78, y: 22 } }] }
      },
      {
        id: 'ja_zo',
        hiragana: 'ぞ',
        katakana: 'ゾ',
        romaji: 'zo',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 10,
        vowel: 'o',
        soundDescriptionVi: 'Rung thanh quản tròn môi ấm [zo].',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, rung dây thanh âm "zo".' },
        sampleWords: [
          { word: 'ぞう', kanji: '象', furigana: 'ぞう', romaji: 'zou', meaningVi: 'chú voi khổng lồ vòi dài', visualUrl: '/assets/ehon/theme_animals.jpg', visualAlt: 'Chú voi vòi dài' }
        ],
        tprAction: { titleVi: 'Bé làm vòi voi Zou vung vẩy', chantJa: 'ぞ・ぞ・ぞう！', descriptionVi: 'Bé dùng một cánh tay làm chiếc vòi voi đung đưa: "Zo - Zo - Zou!"', icon: '🐘' },
        strokeOrder: { strokeCount: 3, descriptionVi: 'Chữ そ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 32,28 L 60,28 L 32,52 L 64,52 C 68,68 58,84 38,84', guidePoint: { x: 32, y: 28 } }, { strokeNumber: 2, directionVi: 'Ten-ten 1', pathD: 'M 68,18 L 74,24', guidePoint: { x: 68, y: 18 } }, { strokeNumber: 3, directionVi: 'Ten-ten 2', pathD: 'M 72,22 L 78,28', guidePoint: { x: 72, y: 22 } }] }
      },

      // Hàng DA
      {
        id: 'ja_da',
        hiragana: 'だ',
        katakana: 'ダ',
        romaji: 'da',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 11,
        vowel: 'a',
        soundDescriptionVi: 'Đầu lưỡi gõ mạnh sau răng, thanh quản rung mạnh bật [da].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Chạm đầu lưỡi sau răng, rung thanh quản bật âm "da".' },
        sampleWords: [
          { word: 'だいすき', kanji: '大好き', furigana: 'だいすき', romaji: 'daisuki', meaningVi: 'con yêu ba mẹ nhất', visualUrl: '/assets/ehon/puppy_hug.jpg', visualAlt: 'Bé ôm trái tim yêu thương' }
        ],
        tprAction: { titleVi: 'Bé ôm trái tim Daisuki', chantJa: 'だ・だ・だいすき！', descriptionVi: 'Bé đặt hai tay chéo ngực ôm chặt thể hiện tình yêu: "Da - Da - Daisuki!"', icon: '❤️' },
        strokeOrder: { strokeCount: 6, descriptionVi: 'Chữ た thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 22,38 L 48,38', guidePoint: { x: 22, y: 38 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 36,24 L 28,75', guidePoint: { x: 36, y: 24 } }, { strokeNumber: 3, directionVi: 'Nét 3', pathD: 'M 50,44 L 68,44', guidePoint: { x: 50, y: 44 } }, { strokeNumber: 4, directionVi: 'Nét 4', pathD: 'M 48,65 C 58,72 68,70 72,64', guidePoint: { x: 48, y: 65 } }, { strokeNumber: 5, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 6, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_dji',
        hiragana: 'ぢ',
        katakana: 'ヂ',
        romaji: 'ji',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 12,
        vowel: 'i',
        soundDescriptionVi: 'Biến âm đục của [chi], phát âm rung thanh quản đồng âm với [ji].',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười, rung thanh quản phát âm "ji".' },
        sampleWords: [
          { word: 'はなぢ', kanji: '鼻血', furigana: 'はなぢ', romaji: 'hanaji', meaningVi: 'chảy máu mũi khi ngã', visualUrl: '/assets/ehon/theme_actions.jpg', visualAlt: 'Bé lấy khăn lau mũi' }
        ],
        tprAction: { titleVi: 'Bé che mũi bảo vệ', chantJa: 'ぢ・ぢ・はなぢ！', descriptionVi: 'Bé chấm nhẹ ngón tay lên chóp mũi: "Ji - Ji - Hanaji!"', icon: '👃' },
        strokeOrder: { strokeCount: 4, descriptionVi: 'Chữ ち thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 22,35 L 68,35', guidePoint: { x: 22, y: 35 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 44,18 L 40,52 C 50,42 68,46 65,68 C 62,85 40,86 32,74', guidePoint: { x: 44, y: 18 } }, { strokeNumber: 3, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 4, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_dzu',
        hiragana: 'づ',
        katakana: 'ヅ',
        romaji: 'zu',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 13,
        vowel: 'u',
        soundDescriptionVi: 'Biến âm đục của [tsu], phát âm rung thanh quản đồng âm với [zu].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép môi nhẹ, rung dây thanh âm "zu".' },
        sampleWords: [
          { word: 'つづく', kanji: '続く', furigana: 'つづく', romaji: 'tsuzuku', meaningVi: 'tiếp tục câu chuyện hay', visualUrl: '/assets/ehon/good_book.jpg', visualAlt: 'Cuốn sách còn tiếp' }
        ],
        tprAction: { titleVi: 'Bé vỗ tay bài học tiếp tục', chantJa: 'づ・づ・つづく！', descriptionVi: 'Bé vỗ hai bàn tay động viên tiếp tục bài mới: "Zu - Zu - Tsuzuku!"', icon: '⏩' },
        strokeOrder: { strokeCount: 3, descriptionVi: 'Chữ つ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 25,38 C 45,30 68,35 68,56 C 68,78 45,85 28,80', guidePoint: { x: 25, y: 38 } }, { strokeNumber: 2, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 3, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_de',
        hiragana: 'で',
        katakana: 'デ',
        romaji: 'de',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 14,
        vowel: 'e',
        soundDescriptionVi: 'Rung thanh quản bật dứt khoát âm [de].',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa, rung thanh quản bật "de".' },
        sampleWords: [
          { word: 'でんしゃ', kanji: '電車', furigana: 'でんしゃ', romaji: 'densha', meaningVi: 'tàu điện xình xịch bon bon', visualUrl: '/assets/ehon/train_rain.jpg', visualAlt: 'Đoàn tàu điện bon bon trên đường ray' }
        ],
        tprAction: { titleVi: 'Bé làm đoàn tàu Densha xình xịch', chantJa: 'で・で・でんしゃ！', descriptionVi: 'Bé gập hai khuỷu tay xoay vòng như bánh xe tàu hỏa: "De - De - Densha!"', icon: '🚃' },
        strokeOrder: { strokeCount: 3, descriptionVi: 'Chữ て thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 25,35 L 65,35 C 65,55 42,78 32,78', guidePoint: { x: 25, y: 35 } }, { strokeNumber: 2, directionVi: 'Ten-ten 1', pathD: 'M 70,18 L 76,24', guidePoint: { x: 70, y: 18 } }, { strokeNumber: 3, directionVi: 'Ten-ten 2', pathD: 'M 74,22 L 80,28', guidePoint: { x: 74, y: 22 } }] }
      },
      {
        id: 'ja_do',
        hiragana: 'ど',
        katakana: 'ド',
        romaji: 'do',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 15,
        vowel: 'o',
        soundDescriptionVi: 'Tròn môi, rung thanh quản bật âm [do] trầm ấm.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, rung thanh quản bật "do" ấm áp.' },
        sampleWords: [
          { word: 'どんぐり', kanji: '団栗', furigana: 'どんぐり', romaji: 'donguri', meaningVi: 'hạt dẻ sồi rừng của chú sóc', visualUrl: '/assets/ehon/hedgehog.jpg', visualAlt: 'Quả sồi rừng nhỏ bé' }
        ],
        tprAction: { titleVi: 'Bé nhặt hạt dẻ sồi Donguri', chantJa: 'ど・ど・どんぐり！', descriptionVi: 'Bé cúi nhặt hạt dẻ sồi bỏ vào giỏ: "Do - Do - Donguri!"', icon: '🌰' },
        strokeOrder: { strokeCount: 4, descriptionVi: 'Chữ と thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 38,24 L 38,48', guidePoint: { x: 38, y: 24 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 32,42 C 60,42 70,60 65,78 C 60,88 38,88 32,78', guidePoint: { x: 32, y: 42 } }, { strokeNumber: 3, directionVi: 'Ten-ten 1', pathD: 'M 70,18 L 76,24', guidePoint: { x: 70, y: 18 } }, { strokeNumber: 4, directionVi: 'Ten-ten 2', pathD: 'M 74,22 L 80,28', guidePoint: { x: 74, y: 22 } }] }
      },

      // Hàng BA
      {
        id: 'ja_ba',
        hiragana: 'ば',
        katakana: 'バ',
        romaji: 'ba',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 16,
        vowel: 'a',
        soundDescriptionVi: 'Khép hai môi, rung dây thanh quản rồi mở bung [ba].',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Mím môi, rung dây thanh quản bật bung âm "ba".' },
        sampleWords: [
          { word: 'ばなな', kanji: 'バナナ', furigana: 'ばなな', romaji: 'banana', meaningVi: 'quả chuối vàng thơm dẻo', visualUrl: '/assets/ehon/apple.jpg', visualAlt: 'Nải chuối vàng ươm' }
        ],
        tprAction: { titleVi: 'Bé bóc vỏ chuối Banana', chantJa: 'ば・ば・ばなな！', descriptionVi: 'Bé lấy hai tay bóc vỏ quả chuối ăn ngon lành: "Ba - Ba - Banana!"', icon: '🍌' },
        strokeOrder: { strokeCount: 5, descriptionVi: 'Chữ は thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 30,24 L 30,80', guidePoint: { x: 30, y: 24 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 48,38 L 70,38', guidePoint: { x: 48, y: 38 } }, { strokeNumber: 3, directionVi: 'Nét 3', pathD: 'M 58,24 L 58,65 C 58,80 44,80 44,70 C 44,60 58,60 68,74', guidePoint: { x: 58, y: 24 } }, { strokeNumber: 4, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 5, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_bi',
        hiragana: 'び',
        katakana: 'ビ',
        romaji: 'bi',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 17,
        vowel: 'i',
        soundDescriptionVi: 'Khép hai môi, rung dây thanh quản phát âm cười [bi].',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mím môi rồi kéo khoé môi cười bật "bi".' },
        sampleWords: [
          { word: 'びーる', kanji: 'ビール', furigana: 'びーる', romaji: 'bīru', meaningVi: 'đồ uống sủi bọt của người lớn', visualUrl: '/assets/ehon/cup.jpg', visualAlt: 'Ly nước sủi bọt' }
        ],
        tprAction: { titleVi: 'Bé mỉm cười nâng ly Bi', chantJa: 'び・び・びーる！', descriptionVi: 'Bé nâng ly nước mát cụng ly vui vẻ: "Bi - Bi - Bi!"', icon: '🥤' },
        strokeOrder: { strokeCount: 3, descriptionVi: 'Chữ ひ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 25,38 L 40,32 C 38,65 58,82 68,55', guidePoint: { x: 25, y: 38 } }, { strokeNumber: 2, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 3, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_bu',
        hiragana: 'ぶ',
        katakana: 'ブ',
        romaji: 'bu',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 18,
        vowel: 'u',
        soundDescriptionVi: 'Khép hai môi rồi bật nhẹ rung âm [bu].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép môi nhẹ, bật hơi rung "bu".' },
        sampleWords: [
          { word: 'ぶた', kanji: '豚', furigana: 'ぶた', romaji: 'buta', meaningVi: 'chú lợn con ủn ỉn', visualUrl: '/assets/ehon/pig.jpg', visualAlt: 'Chú lợn con béo tròn' }
        ],
        tprAction: { titleVi: 'Bé làm chú heo Buta ủn ỉn', chantJa: 'ぶ・ぶ・ぶた！', descriptionVi: 'Bé đặt ngón tay ấn mũi hếch lên làm mũi heo: "Bu - Bu - Buta!"', icon: '🐷' },
        strokeOrder: { strokeCount: 6, descriptionVi: 'Chữ ふ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Chấm trên', pathD: 'M 45,20 L 50,28', guidePoint: { x: 45, y: 20 } }, { strokeNumber: 2, directionVi: 'Sổ lượn', pathD: 'M 48,38 C 48,55 40,75 50,82', guidePoint: { x: 48, y: 38 } }, { strokeNumber: 3, directionVi: 'Phẩy trái', pathD: 'M 25,52 L 32,62', guidePoint: { x: 25, y: 52 } }, { strokeNumber: 4, directionVi: 'Phẩy phải', pathD: 'M 64,52 L 70,62', guidePoint: { x: 64, y: 52 } }, { strokeNumber: 5, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 6, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      },
      {
        id: 'ja_be',
        hiragana: 'べ',
        katakana: 'ベ',
        romaji: 'be',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 19,
        vowel: 'e',
        soundDescriptionVi: 'Rung môi mở ngang khẩu hình [be].',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Mở miệng vừa tầm, mím môi bật rung "be".' },
        sampleWords: [
          { word: 'べんとう', kanji: '弁当', furigana: 'べんとう', romaji: 'bentou', meaningVi: 'hộp cơm bento ngon lành', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Hộp cơm Bento trang trí xinh đẹp' }
        ],
        tprAction: { titleVi: 'Bé mở hộp cơm Bentou', chantJa: 'べ・べ・べんとう！', descriptionVi: 'Bé mở nắp hộp cơm thưởng thức món ngon: "Be - Be - Bentou!"', icon: '🍱' },
        strokeOrder: { strokeCount: 3, descriptionVi: 'Chữ へ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét へ', pathD: 'M 22,65 L 42,35 L 72,65', guidePoint: { x: 22, y: 65 } }, { strokeNumber: 2, directionVi: 'Ten-ten 1', pathD: 'M 68,18 L 74,24', guidePoint: { x: 68, y: 18 } }, { strokeNumber: 3, directionVi: 'Ten-ten 2', pathD: 'M 72,22 L 78,28', guidePoint: { x: 72, y: 22 } }] }
      },
      {
        id: 'ja_bo',
        hiragana: 'ぼ',
        katakana: 'ボ',
        romaji: 'bo',
        row: 'dakuon',
        variant: 'dakuon',
        orderInRow: 20,
        vowel: 'o',
        soundDescriptionVi: 'Tròn môi, rung dây thanh quản bật [bo] ấm.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, mím môi bật rung "bo" tròn.' },
        sampleWords: [
          { word: 'ぼうし', kanji: '帽子', furigana: 'ぼうし', romaji: 'boushi', meaningVi: 'chiếc mũ rộng vành che nắng', visualUrl: '/assets/ehon/theme_actions.jpg', visualAlt: 'Chiếc mũ rộng vành' }
        ],
        tprAction: { titleVi: 'Bé đội chiếc mũ Boushi', chantJa: 'ぼ・ぼ・ぼうし！', descriptionVi: 'Bé làm động tác đội chiếc mũ lên đầu và chỉnh vành mũ: "Bo - Bo - Boushi!"', icon: '👒' },
        strokeOrder: { strokeCount: 6, descriptionVi: 'Chữ ほ thêm ten-ten', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 28,24 L 28,80', guidePoint: { x: 28, y: 24 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 44,34 L 68,34', guidePoint: { x: 44, y: 34 } }, { strokeNumber: 3, directionVi: 'Nét 3', pathD: 'M 44,50 L 68,50', guidePoint: { x: 44, y: 50 } }, { strokeNumber: 4, directionVi: 'Nét 4', pathD: 'M 58,38 L 58,65 C 58,80 44,80 44,70 C 44,60 58,60 68,74', guidePoint: { x: 58, y: 38 } }, { strokeNumber: 5, directionVi: 'Ten-ten 1', pathD: 'M 72,18 L 78,24', guidePoint: { x: 72, y: 18 } }, { strokeNumber: 6, directionVi: 'Ten-ten 2', pathD: 'M 76,22 L 82,28', guidePoint: { x: 76, y: 22 } }] }
      }
    ]
  },

  // ==========================================
  // HANDAKUON (5 Bán Âm Đục: PA, PI, PU, PE, PO)
  // ==========================================
  {
    rowKey: 'handakuon',
    rowNameVi: 'Bán Âm Đục Maru (Pa • Pi • Pu • Pe • Po)',
    rowNameJa: '半濁音（はんだくおん）',
    themeColor: 'rose',
    themeBanner: '/assets/ehon/theme_food_objects.jpg',
    characters: [
      {
        id: 'ja_pa',
        hiragana: 'ぱ',
        katakana: 'パ',
        romaji: 'pa',
        row: 'handakuon',
        variant: 'handakuon',
        orderInRow: 1,
        vowel: 'a',
        soundDescriptionVi: 'Âm bật hai môi dứt khoát giòn tan [pa], không rung thanh quản.',
        mouthGuide: { mouthShape: 'open_wide', instructionsVi: 'Mím chặt hai môi rồi bật bung luồng hơi "pa" giòn giã.' },
        sampleWords: [
          { word: 'ぱん', kanji: 'パン', furigana: 'ぱん', romaji: 'pan', meaningVi: 'chiếc bánh mì nóng giòn', visualUrl: '/assets/ehon/theme_food_objects.jpg', visualAlt: 'Chiếc bánh mì nướng thơm lừng' }
        ],
        tprAction: { titleVi: 'Bé vỗ bột làm bánh mì Pan', chantJa: 'ぱ・ぱ・ぱん！', descriptionVi: 'Bé vỗ hai bàn tay như nhào bột làm bánh mì thơm: "Pa - Pa - Pan!"', icon: '🍞' },
        strokeOrder: { strokeCount: 4, descriptionVi: 'Chữ は thêm vòng tròn nhỏ maru', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 30,24 L 30,80', guidePoint: { x: 30, y: 24 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 48,38 L 70,38', guidePoint: { x: 48, y: 38 } }, { strokeNumber: 3, directionVi: 'Nét 3', pathD: 'M 58,24 L 58,65 C 58,80 44,80 44,70 C 44,60 58,60 68,74', guidePoint: { x: 58, y: 24 } }, { strokeNumber: 4, directionVi: 'Vòng tròn Maru', pathD: 'M 74,20 C 78,20 80,24 80,28 C 80,32 78,36 74,36 C 70,36 68,32 68,28 C 68,24 70,20 74,20 Z', guidePoint: { x: 74, y: 20 } }] }
      },
      {
        id: 'ja_pi',
        hiragana: 'ぴ',
        katakana: 'ピ',
        romaji: 'pi',
        row: 'handakuon',
        variant: 'handakuon',
        orderInRow: 2,
        vowel: 'i',
        soundDescriptionVi: 'Âm bật hai môi dứt khoát kết hợp mỉm cười [pi] lanh lảnh.',
        mouthGuide: { mouthShape: 'smile', instructionsVi: 'Mỉm cười, mím môi bật hơi sắc nét "pi".' },
        sampleWords: [
          { word: 'ぴかぴか', kanji: 'ピカピカ', furigana: 'ぴかぴか', romaji: 'pikapika', meaningVi: 'lấp lánh sáng ngời ánh sao', visualUrl: '/assets/ehon/star.jpg', visualAlt: 'Ánh sao lấp lánh' }
        ],
        tprAction: { titleVi: 'Bé làm sao sáng Pikapika', chantJa: 'ぴ・か・ぴ・か！', descriptionVi: 'Bé xòe chụm ngón tay liên hồi như tia sáng chớp chớp: "Pi-ka-pi-ka!"', icon: '✨' },
        strokeOrder: { strokeCount: 2, descriptionVi: 'Chữ ひ thêm vòng tròn maru', strokes: [{ strokeNumber: 1, directionVi: 'Nét ひ', pathD: 'M 25,38 L 40,32 C 38,65 58,82 68,55', guidePoint: { x: 25, y: 38 } }, { strokeNumber: 2, directionVi: 'Vòng tròn Maru', pathD: 'M 74,20 C 78,20 80,24 80,28 C 80,32 78,36 74,36 C 70,36 68,32 68,28 C 68,24 70,20 74,20 Z', guidePoint: { x: 74, y: 20 } }] }
      },
      {
        id: 'ja_pu',
        hiragana: 'ぷ',
        katakana: 'プ',
        romaji: 'pu',
        row: 'handakuon',
        variant: 'handakuon',
        orderInRow: 3,
        vowel: 'u',
        soundDescriptionVi: 'Bật hai môi kết hợp nguyên âm [u] nhẹ nhàng [pɯ].',
        mouthGuide: { mouthShape: 'round_pucker', instructionsVi: 'Khép môi nhẹ, bật bung hơi "pu".' },
        sampleWords: [
          { word: 'ぷーる', kanji: 'プール', furigana: 'ぷーる', romaji: 'pūru', meaningVi: 'hồ bơi mùa hè mát rượi', visualUrl: '/assets/ehon/theme_nature.jpg', visualAlt: 'Làn nước hồ bơi trong xanh' }
        ],
        tprAction: { titleVi: 'Bé nhảy ùm vào hồ Pūru', chantJa: 'ぷ・ぷ・ぷーる！', descriptionVi: 'Bé bịt mũi nhảy nhẹ một bước như nhảy xuống nước: "Pu - Pu - Pūru!"', icon: '🏊' },
        strokeOrder: { strokeCount: 5, descriptionVi: 'Chữ ふ thêm vòng tròn maru', strokes: [{ strokeNumber: 1, directionVi: 'Chấm trên', pathD: 'M 45,20 L 50,28', guidePoint: { x: 45, y: 20 } }, { strokeNumber: 2, directionVi: 'Sổ lượn', pathD: 'M 48,38 C 48,55 40,75 50,82', guidePoint: { x: 48, y: 38 } }, { strokeNumber: 3, directionVi: 'Phẩy trái', pathD: 'M 25,52 L 32,62', guidePoint: { x: 25, y: 52 } }, { strokeNumber: 4, directionVi: 'Phẩy phải', pathD: 'M 64,52 L 70,62', guidePoint: { x: 64, y: 52 } }, { strokeNumber: 5, directionVi: 'Vòng tròn Maru', pathD: 'M 74,20 C 78,20 80,24 80,28 C 80,32 78,36 74,36 C 70,36 68,32 68,28 C 68,24 70,20 74,20 Z', guidePoint: { x: 74, y: 20 } }] }
      },
      {
        id: 'ja_pe',
        hiragana: 'ぺ',
        katakana: 'ペ',
        romaji: 'pe',
        row: 'handakuon',
        variant: 'handakuon',
        orderInRow: 4,
        vowel: 'e',
        soundDescriptionVi: 'Bật hai môi mở ngang khẩu hình [pe].',
        mouthGuide: { mouthShape: 'open_mid', instructionsVi: 'Khoé miệng mở vừa, mím môi bật hơi "pe".' },
        sampleWords: [
          { word: 'ぺん', kanji: 'ペン', furigana: 'ぺん', romaji: 'pen', meaningVi: 'chiếc bút vẽ rực rỡ sắc màu', visualUrl: '/assets/ehon/pen.jpg', visualAlt: 'Chiếc bút mực sắc màu' }
        ],
        tprAction: { titleVi: 'Bé cầm bút Pen tô màu', chantJa: 'ぺ・ぺ・ぺん！', descriptionVi: 'Bé làm động tác cầm bút tô vẽ bức tranh xinh xắn: "Pe - Pe - Pen!"', icon: '🖊️' },
        strokeOrder: { strokeCount: 2, descriptionVi: 'Chữ へ thêm vòng tròn maru', strokes: [{ strokeNumber: 1, directionVi: 'Nét へ', pathD: 'M 22,65 L 42,35 L 72,65', guidePoint: { x: 22, y: 65 } }, { strokeNumber: 2, directionVi: 'Vòng tròn Maru', pathD: 'M 74,20 C 78,20 80,24 80,28 C 80,32 78,36 74,36 C 70,36 68,32 68,28 C 68,24 70,20 74,20 Z', guidePoint: { x: 74, y: 20 } }] }
      },
      {
        id: 'ja_po',
        hiragana: 'ぽ',
        katakana: 'ポ',
        romaji: 'po',
        row: 'handakuon',
        variant: 'handakuon',
        orderInRow: 5,
        vowel: 'o',
        soundDescriptionVi: 'Bật hai môi tròn trịa [po] vui vẻ.',
        mouthGuide: { mouthShape: 'round_mid', instructionsVi: 'Tròn môi, mím môi bật bung hơi "po".' },
        sampleWords: [
          { word: 'ぽけっと', kanji: 'ポケット', furigana: 'ぽけっと', romaji: 'poketto', meaningVi: 'chiếc túi thần kỳ Doraemon', visualUrl: '/assets/ehon/word_bank_hero.jpg', visualAlt: 'Chiếc túi áo thần kỳ' }
        ],
        tprAction: { titleVi: 'Bé đút tay vào Poketto', chantJa: 'ぽ・ぽ・ぽけっと！', descriptionVi: 'Bé đút tay vào túi áo lấy ra một món quà bất ngờ: "Po - Po - Poketto!"', icon: '👝' },
        strokeOrder: { strokeCount: 5, descriptionVi: 'Chữ ほ thêm vòng tròn maru', strokes: [{ strokeNumber: 1, directionVi: 'Nét 1', pathD: 'M 28,24 L 28,80', guidePoint: { x: 28, y: 24 } }, { strokeNumber: 2, directionVi: 'Nét 2', pathD: 'M 44,34 L 68,34', guidePoint: { x: 44, y: 34 } }, { strokeNumber: 3, directionVi: 'Nét 3', pathD: 'M 44,50 L 68,50', guidePoint: { x: 44, y: 50 } }, { strokeNumber: 4, directionVi: 'Nét 4', pathD: 'M 58,38 L 58,65 C 58,80 44,80 44,70 C 44,60 58,60 68,74', guidePoint: { x: 58, y: 38 } }, { strokeNumber: 5, directionVi: 'Vòng tròn Maru', pathD: 'M 74,20 C 78,20 80,24 80,28 C 80,32 78,36 74,36 C 70,36 68,32 68,28 C 68,24 70,20 74,20 Z', guidePoint: { x: 74, y: 20 } }] }
      }
    ]
  }
];

// Flat array containing all 71 kana items for flashcards & quick lookup
export const ALL_KANA_CHARACTERS: KanaItem[] = JAPANESE_GOJUON_ROWS.flatMap(r => r.characters);

// Helper dictionary mapping Kana ID to KanaItem
export const KANA_BY_ID_MAP: Record<string, KanaItem> = ALL_KANA_CHARACTERS.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, KanaItem>);

// Helper metadata map for row labels & filters
export const KANA_ROW_METADATA: Record<KanaRowKey, { nameVi: string; nameJa: string; themeColor: string }> = {
  a: { nameVi: 'Hàng A', nameJa: 'あ行', themeColor: 'amber' },
  ka: { nameVi: 'Hàng Ka', nameJa: 'か行', themeColor: 'rose' },
  sa: { nameVi: 'Hàng Sa', nameJa: 'さ行', themeColor: 'yellow' },
  ta: { nameVi: 'Hàng Ta', nameJa: 'た行', themeColor: 'emerald' },
  na: { nameVi: 'Hàng Na', nameJa: 'な行', themeColor: 'blue' },
  ha: { nameVi: 'Hàng Ha', nameJa: 'は行', themeColor: 'purple' },
  ma: { nameVi: 'Hàng Ma', nameJa: 'ま行', themeColor: 'pink' },
  ya: { nameVi: 'Hàng Ya', nameJa: 'や行', themeColor: 'amber' },
  ra: { nameVi: 'Hàng Ra', nameJa: 'ら行', themeColor: 'teal' },
  wa: { nameVi: 'Hàng Wa/N', nameJa: 'わ行・ん', themeColor: 'cyan' },
  dakuon: { nameVi: 'Biến Âm Đục', nameJa: '濁音', themeColor: 'indigo' },
  handakuon: { nameVi: 'Bán Âm Maru', nameJa: '半濁音', themeColor: 'rose' }
};
