import { AgeBandFilter, CurriculumUnit, CutsceneSlide, DialogueChallenge, TargetHuntRound } from '../types/heroGame';

interface CompactStageSeed46 {
  id: string;
  worldId: 4 | 5 | 6;
  unitNumber: number;
  titleEn: string;
  titleVi: string;
  ageBand: Exclude<AgeBandFilter, 'all'>;
  methodologyTag: string;
  summaryVi: string;
  slides: Array<[string, string, string, string, string]>;
  hunts: Array<[string, string, string, Array<[string, string, string, string, boolean]>]>;
  echoes: Array<[string, string, string, string, string[]]>;
  boss: [string, string, string, string, string[]];
  rewardPhonemeIds?: string[];
}

function buildStage46(s: CompactStageSeed46): CurriculumUnit {
  const cutsceneSlides: CutsceneSlide[] = s.slides.map(([word, vi, line, key, emoji], idx) => ({
    id: `s${idx + 1}`,
    wordOrPhraseEn: word,
    meaningVi: vi,
    heroActionLineEn: line,
    visualWordKey: key,
    emoji,
  }));

  const targetHuntRounds: TargetHuntRound[] = s.hunts.map(([vi, promptEn, badge, opts], idx) => ({
    id: `th_${s.id}_${idx === 0 ? 'a' : 'b'}`,
    instructionVi: vi,
    promptAudioEn: promptEn,
    targetBadge: badge,
    options: opts.map(([labelEn, subLabelVi, visualKey, emoji, isCorrect], oi) => ({
      id: `o${oi + 1}`,
      labelEn,
      subLabelVi,
      phonemeOrWord: labelEn.toLowerCase(),
      speakTextEn: labelEn,
      emoji,
      visualWordKey: visualKey,
      isCorrect,
    })),
  }));

  const echoDuelRounds: DialogueChallenge[] = s.echoes.map(([prompt, vi, key, emoji, kw], idx) => ({
    id: `ed_${s.id}_${idx === 0 ? 'a' : 'b'}`,
    speakerPromptEn: prompt,
    childTargetEn: prompt,
    meaningVi: vi,
    visualWordKey: key,
    emoji,
    acceptableKeywords: kw,
  }));

  const [bPrompt, bVi, bKey, bEmoji, bKw] = s.boss;
  return {
    id: s.id,
    worldId: s.worldId,
    unitNumber: s.unitNumber,
    titleEn: s.titleEn,
    titleVi: s.titleVi,
    ageBand: s.ageBand,
    methodologyTag: s.methodologyTag,
    summaryVi: s.summaryVi,
    cutsceneSlides,
    targetHuntRounds,
    echoDuelRounds,
    bossRounds: [
      {
        id: `bs_${s.id}`,
        speakerPromptEn: bPrompt,
        childTargetEn: bPrompt,
        meaningVi: bVi,
        visualWordKey: bKey,
        emoji: bEmoji,
        acceptableKeywords: bKw,
      },
    ],
    rewardPhonemeIds: s.rewardPhonemeIds,
  };
}

const SEEDS_W4_TO_6: CompactStageSeed46[] = [
  // ---- WORLD 4 EXPANSION (UNITS 5..8) ----
  {
    id: 'u4_5',
    worldId: 4,
    unitNumber: 5,
    titleEn: 'Yummy Picnic Lunch',
    titleVi: 'Bữa Trưa Dã Ngoại Ngon Miệng',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'Wow English • Giao Tiếp Gọi Món I want...',
    summaryVi: 'Tập nói mẫu câu lịch sự: "I want an apple, please!" và mô tả món ăn.',
    slides: [
      ['Crunchy carrot!', 'Cà rốt cam giòn ngọt', 'I want a carrot, please!', 'carrot', '🥕'],
      ['Sweet apple!', 'Táo đỏ tươi mọng nước', 'One sweet red apple!', 'apple', '🍎'],
      ['Clean soap!', 'Rửa tay sạch bằng xà phòng', 'Wash hands with soap!', 'soap', '🧼'],
    ],
    hunts: [
      ['Chọn CỦ CÀ RỐT ("Carrot!") giòn ngọt cho bữa trưa!', 'Find Carrot!', '🥕 Carrot', [['Carrot', 'Cà rốt', 'carrot', '🥕', true], ['Soap', 'Xà phòng', 'soap', '🧼', false], ['Fork', 'Cái nĩa', 'fork', '🍴', false]]],
    ],
    echoes: [
      ['I want an apple!', 'Nói tròn câu: "I want an apple!"', 'apple', '🍎', ['want', 'apple', 'i want']],
      ['Carrots are yummy!', 'Khen món ngon: "Carrots are yummy!"', 'carrot', '🥕', ['carrot', 'carrots', 'yummy']],
    ],
    boss: ['Yes, please! Thank you!', 'Lịch sự cảm ơn Boss: "Yes, please! Thank you!"', 'star', '🍽️', ['please', 'thank you', 'yes']],
  },
  {
    id: 'u4_6',
    worldId: 4,
    unitNumber: 6,
    titleEn: 'Playground Action Hero',
    titleVi: 'Công Viên Vận Động Siêu Tốc',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'GrapeSEED Oral • Động Từ Vận Động',
    summaryVi: 'Mô tả hành động vui nhộn ở công viên: Swing, Slide, Run, Climb.',
    slides: [
      ['Swing high!', 'Đánh đu bay bổng lên trời', 'I love the big swing!', 'swing', '🎠'],
      ['Hedgehog friend!', 'Chú nhím con đáng yêu', 'Look at the little hedgehog!', 'hedgehog', '🦔'],
      ['Play together!', 'Cùng chơi vui ở công viên', 'Let us play in the park!', 'queen_park', '🌳'],
    ],
    hunts: [
      ['Tìm bạn đang chơi XÍCH ĐU ("Swing!") vui vẻ!', 'Find Swing!', '🎠 Swing', [['Swing', 'Chơi xích đu', 'swing', '🎠', true], ['Sleep', 'Ngủ gật', 'cat_nap', '😴', false], ['Book', 'Đọc sách', 'good_book', '📖', false]]],
    ],
    echoes: [
      ['I can swing high!', 'Hô vang: "I can swing high!"', 'swing', '🎠', ['swing', 'high', 'can swing']],
      ['Let us play together!', 'Mời bạn cùng chơi: "Let us play together!"', 'queen_park', '🤝', ['play', 'together']],
    ],
    boss: ['Active hero team!', 'Bùng nổ năng lượng: "Active hero team!"', 'star', '⚡', ['active', 'hero', 'team']],
  },
  {
    id: 'u4_7',
    worldId: 4,
    unitNumber: 7,
    titleEn: 'Backpack School Kit',
    titleVi: 'Balo Anh Hùng Tới Trường',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'Wow English • Đồ Dùng Học Tập',
    summaryVi: 'Giới thiệu đồ dùng học tập: Book, Pen, Ruler, Eraser.',
    slides: [
      ['Long ruler!', 'Chiếc thước kẻ thẳng tắp', 'I have a yellow ruler!', 'ruler', '📏'],
      ['Pink eraser!', 'Cục tẩy nhỏ xinh xắn', 'Pass me the eraser!', 'eraser', '🧽'],
      ['Good book!', 'Cuốn sách hay đầy sắc màu', 'Open my good book!', 'good_book', '📘'],
    ],
    hunts: [
      ['Chọn CHIẾC THƯỚC KẺ ("Ruler!") cất vào cặp sách!', 'Find Ruler!', '📏 Ruler', [['Ruler', 'Thước kẻ', 'ruler', '📏', true], ['Eraser', 'Cục tẩy', 'eraser', '🧽', false], ['Apple', 'Quả táo', 'apple', '🍎', false]]],
    ],
    echoes: [
      ['I have a ruler!', 'Khoe chiếc thước kẻ: "I have a ruler!"', 'ruler', '📏', ['ruler', 'i have']],
      ['Open my book!', 'Mở sách ra: "Open my book!"', 'good_book', '📘', ['open', 'book']],
    ],
    boss: ['Ready for school!', 'Xung phong tới lớp: "Ready for school!"', 'good_book', '🎒', ['ready', 'school']],
  },
  {
    id: 'u4_8',
    worldId: 4,
    unitNumber: 8,
    titleEn: 'Wild Island Explorer',
    titleVi: 'Thám Hiểm Muông Thú Hoang Dã',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'GrapeSEED • Quan Sát Thiên Nhiên',
    summaryVi: 'Khám phá muông thú: Seal, Giraffe, Koala, Turtle.',
    slides: [
      ['Playful seal!', 'Chú hải cẩu vỗ tay trên băng', 'See the playful seal!', 'seal', '🦭'],
      ['Tall giraffe!', 'Hươu cao cổ vươn cổ cao', 'Giraffe reaches the leaves!', 'giraffe', '🦒'],
      ['Seven islands!', 'Bảy hòn đảo thần tiên', 'Sail around seven islands!', 'archipelago', '🏝️'],
    ],
    hunts: [
      ['Tìm CHÚ HẢI CẨU ("Seal!") trên biển xanh!', 'Find Seal!', '🦭 Seal', [['Seal', 'Hải cẩu', 'seal', '🦭', true], ['Lion', 'Sư tử', 'leo', '🦁', false], ['Ant', 'Con kiến', 'ant', '🐜', false]]],
    ],
    echoes: [
      ['Look at the giraffe!', 'Đọc rõ ràng: "Look at the giraffe!"', 'giraffe', '🦒', ['giraffe', 'look']],
      ['I love wild animals!', 'Nói tự tin: "I love wild animals!"', 'archipelago', '🌍', ['love', 'animals', 'wild']],
    ],
    boss: ['Explorer of the world!', 'Danh hiệu thám hiểm: "Explorer of the world!"', 'archipelago', '🧭', ['explorer', 'world']],
  },

  // ---- WORLD 5 EXPANSION (UNITS 5..8) ----
  {
    id: 'u5_5',
    worldId: 5,
    unitNumber: 5,
    titleEn: 'Sailboat & Goat: oa & ow',
    titleVi: 'Cảng Thuyền Vần oa & ow',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics L3 • Nguyên Âm Dài /əʊ/',
    summaryVi: 'Luyện âm đôi oa trong Goat, Boat, Soap, Toad.',
    rewardPhonemeIds: ['oa'],
    slides: [
      ['Goat in a boat!', 'Chú dê chèo thuyền ra khơi', 'Look! A goat in a boat!', 'goat_boat', '⛵'],
      ['Green toad!', 'Chú cóc nâu bên hồ sen', 'Jump over, green toad!', 'toad', '🐸'],
      ['Bubbly soap!', 'Xà phòng tạo bọt cầu vồng', 'Soap washes clean!', 'soap', '🧼'],
    ],
    hunts: [
      ['Bắt cảnh CHÚ DÊ TRÊN THUYỀN ("Goat in a boat")!', 'Find Goat in a boat!', '⛵ Boat', [['Goat boat', 'Dê trên thuyền', 'goat_boat', '⛵', true], ['Moon spoon', 'Trăng và thìa', 'moon_spoon', '🌙', false], ['Train rain', 'Tàu trong mưa', 'train_rain', '🚆', false]]],
    ],
    echoes: [
      ['The goat has a boat!', 'Đọc chuẩn vần /oʊ/: "The goat has a boat!"', 'goat_boat', '⛵', ['goat', 'boat']],
      ['Soap floats on water!', 'Đọc trôi chảy: "Soap floats on water!"', 'soap', '🧼', ['soap', 'floats', 'water']],
    ],
    boss: ['Row the yellow boat!', 'Vượt sóng cảng biển: "Row the yellow boat!"', 'goat_boat', '🌊', ['row', 'boat', 'yellow']],
  },
  {
    id: 'u5_6',
    worldId: 5,
    unitNumber: 6,
    titleEn: 'Moon & Spoon Galaxy: oo',
    titleVi: 'Cung Trăng & Vần oo Ngắn/Dài',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics L3 • Phân Biệt /uː/ & /ʊ/',
    summaryVi: 'Phân biệt âm oo dài (Moon, Spoon) và âm oo ngắn (Book, Good, Look).',
    rewardPhonemeIds: ['oo_long', 'oo_short'],
    slides: [
      ['Moon & spoon!', 'Mặt trăng tròn và chiếc thìa bạc', 'The spoon flew to the moon!', 'moon_spoon', '🥄'],
      ['A good book!', 'Cuốn sách hay tuyệt vời', 'Read a very good book!', 'good_book', '📚'],
      ['Blue clue!', 'Dấu vết màu xanh kỳ bí', 'Follow the blue clue!', 'blue_clue', '🔎'],
    ],
    hunts: [
      ['Chọn CUỐN SÁCH HAY ("Good book") mang âm oo ngắn!', 'Find Good book!', '📚 Book', [['Good book', 'Sách hay', 'good_book', '📚', true], ['Clown', 'Chú hề', 'clown_cloud', '🤡', false], ['Ship', 'Con tàu', 'ship', '🚢', false]]],
    ],
    echoes: [
      ['Spoon under the moon!', 'Kéo dài âm /uː/: "Spoon under the moon!"', 'moon_spoon', '🌙', ['spoon', 'moon']],
      ['Look at this good book!', 'Bật gọn âm /ʊ/: "Look at this good book!"', 'good_book', '📚', ['look', 'good book', 'book']],
    ],
    boss: ['Fly to the moon!', 'Phóng tàu không gian: "Fly to the moon!"', 'rocket', '🚀', ['fly', 'moon']],
  },
  {
    id: 'u5_7',
    worldId: 5,
    unitNumber: 7,
    titleEn: 'Rain Train & Shells: ai & sh/ch',
    titleVi: 'Đoàn Tàu Mưa & Vỏ Sò ai / sh',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics L4 • Vần ai & Tổ Hợp sh/ch',
    summaryVi: 'Ghép vần trôi chảy với Train, Rain, Pail, Shells, Chip.',
    rewardPhonemeIds: ['ai', 'sh', 'ch'],
    slides: [
      ['Train in the rain!', 'Đoàn tàu chạy dưới mưa rào', 'Choo choo! Train in the rain!', 'train_rain', '🚆'],
      ['Pail of shells!', 'Xô vỏ sò lấp lánh bên biển', 'Shells in a shiny box!', 'shells_box', '🐚'],
      ['Chick & chip!', 'Chú gà con và miếng bánh giòn', 'Chick eats a crunchy chip!', 'chick_chip', '🐥'],
    ],
    hunts: [
      ['Tìm HỘP VỎ SÒ ("Shells!") lấp lánh âm /ʃ/!', 'Find Shells!', '🐚 Shells', [['Shells box', 'Hộp vỏ sò', 'shells_box', '🐚', true], ['Apple', 'Quả táo', 'apple', '🍎', false], ['Dog', 'Chú chó', 'dog', '🐶', false]]],
    ],
    echoes: [
      ['The train runs in rain!', 'Đọc chuẩn vần /eɪ/: "The train runs in rain!"', 'train_rain', '🚆', ['train', 'rain']],
      ['Shiny shells in a pail!', 'Đọc âm /ʃ/: "Shiny shells in a pail!"', 'pail', '🪣', ['shiny', 'shells', 'pail']],
    ],
    boss: ['Shiny champion train!', 'Chạm đích đường ray: "Shiny champion train!"', 'train_rain', '🏆', ['train', 'champion', 'shiny']],
  },
  {
    id: 'u5_8',
    worldId: 5,
    unitNumber: 8,
    titleEn: 'Blue Clue & Three Moths: ue & th',
    titleVi: 'Truy Tìm Dấu Vết ue & th',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics L4 • Nguyên Âm ue & Âm th',
    summaryVi: 'Thành thạo tổ hợp /θ/ (Three, Moths) và vần dài /uː/ (Blue, Clue).',
    rewardPhonemeIds: ['ue', 'th_unvoiced'],
    slides: [
      ['Blue clue!', 'Manh mối xanh trên bản đồ', 'I found a blue clue!', 'blue_clue', '💙'],
      ['Three moths!', 'Ba chú bướm đêm bay quanh đèn', 'Watch three little moths!', 'three_moths', '🦋'],
      ['Sweet quilt!', 'Tấm chăn ghép sắc màu', 'Soft colorful quilt!', 'quilt', '🛏️'],
    ],
    hunts: [
      ['Tìm bức tranh BA CHÚ BƯỚM ("Three moths!") mang âm th!', 'Find Three moths!', '🦋 Three moths', [['Three moths', 'Ba chú bướm', 'three_moths', '🦋', true], ['One ant', 'Một chú kiến', 'ant', '🐜', false], ['Two fish', 'Chú cá', 'three_fish', '🐟', false]]],
    ],
    echoes: [
      ['Follow the blue clue!', 'Đọc chuẩn âm /uː/: "Follow the blue clue!"', 'blue_clue', '🔎', ['blue', 'clue']],
      ['Three moths fly together!', 'Đọc chuẩn th: "Three moths fly together!"', 'three_moths', '🦋', ['three', 'moths', 'fly']],
    ],
    boss: ['True phonics master!', 'Mở khóa Thế Giới 6: "True phonics master!"', 'star', '🎓', ['master', 'true', 'phonics']],
  },

  // ---- WORLD 6 EXPANSION (UNITS 5..8) ----
  {
    id: 'u6_5',
    worldId: 6,
    unitNumber: 5,
    titleEn: 'Farmer Barn & Silver Fork: ar & or',
    titleVi: 'Nông Trại Ánh Sao ar & or',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Oxford Phonics L5 • Nguyên Âm R-Controlled ar / or',
    summaryVi: 'Luyện âm cuộn lưỡi chuẩn Mỹ: Farmer, Barn, Star, Fork.',
    rewardPhonemeIds: ['ar', 'or'],
    slides: [
      ['Farmer in the barn!', 'Bác nông dân ở nhà kho đỏ', 'The farmer paints the barn!', 'farmer_barn', '🚜'],
      ['Shining star!', 'Ngôi sao sáng dẫn đường', 'Reach for a golden star!', 'star', '⭐'],
      ['Dinner fork!', 'Chiếc nĩa ăn tối gọn gàng', 'Set the fork on the table!', 'fork', '🍴'],
    ],
    hunts: [
      ['Chọn NHÀ KHO NÔNG TRẠI ("Barn!") chứa vần /ɑːr/!', 'Find Farmer barn!', '🚜 Barn', [['Farmer barn', 'Nhà kho', 'farmer_barn', '🚜', true], ['Blue ship', 'Tàu biển', 'ship', '🚢', false], ['Cute doll', 'Búp bê', 'doll', '🪆', false]]],
    ],
    echoes: [
      ['The farmer cleans the barn!', 'Cuộn lưỡi chuẩn /ɑːr/: "The farmer cleans the barn!"', 'farmer_barn', '🚜', ['farmer', 'barn']],
      ['Look at the morning star!', 'Đọc rõ /ɔːr/ & /ɑːr/: "Look at the morning star!"', 'star', '⭐', ['morning', 'star']],
    ],
    boss: ['Bright stars on the farm!', 'Bắn tia sáng kết thúc ải: "Bright stars on the farm!"', 'farmer_barn', '🌟', ['stars', 'farm', 'bright']],
  },
  {
    id: 'u6_6',
    worldId: 6,
    unitNumber: 6,
    titleEn: 'Royal Coin & Cloud: oi & ou',
    titleVi: 'Kho Báu Đồng Xu oi & ou',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Oxford Phonics L5 • Nguyên Âm Trượt oi / ou',
    summaryVi: 'Chinh phục nguyên âm đôi oi/oy và ou/ow qua Coin, Clown, Cloud, Mouse.',
    rewardPhonemeIds: ['oi', 'ou'],
    slides: [
      ['Royal coin!', 'Đồng xu vàng của nữ hoàng', 'Queen drops a gold coin!', 'queen_coin', '🪙'],
      ['Clown on a cloud!', 'Chú hề cưỡi đám mây trắng', 'Clown waves from a cloud!', 'clown_cloud', '🤡'],
      ['Clever mouse!', 'Chú chuột nhỏ thông minh', 'Silent little mouse runs!', 'mouse', '🐭'],
    ],
    hunts: [
      ['Tìm ĐỒNG XU CỦA NỮ HOÀNG ("Queen coin!") mang âm /ɔɪ/!', 'Find Queen coin!', '🪙 Coin', [['Queen coin', 'Đồng xu vàng', 'queen_coin', '🪙', true], ['Red carrot', 'Cà rốt', 'carrot', '🥕', false], ['Green frog', 'Ếch xanh', 'frog_log', '🐸', false]]],
    ],
    echoes: [
      ['A shiny gold coin!', 'Luyến chuẩn âm /ɔɪ/: "A shiny gold coin!"', 'queen_coin', '🪙', ['gold', 'coin']],
      ['A clown on a cloud!', 'Đọc mượt /aʊ/: "A clown on a cloud!"', 'clown_cloud', '☁️', ['clown', 'cloud']],
    ],
    boss: ['Found the royal coin!', 'Chiếm lĩnh kho báu: "Found the royal coin!"', 'queen_coin', '👑', ['found', 'royal', 'coin']],
  },
  {
    id: 'u6_7',
    worldId: 6,
    unitNumber: 7,
    titleEn: 'Daily Hero Mission',
    titleVi: 'Nhật Ký Siêu Anh Hùng',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Cambridge Pre-A1 Starters • Thói Quen Hằng Ngày',
    summaryVi: 'Kể lịch trình mỗi ngày bằng câu hoàn chỉnh: Read a book, Help friends, Sleep early.',
    slides: [
      ['Read every day!', 'Đọc sách mở rộng tri thức', 'I read a book every day!', 'good_book', '📖'],
      ['Share and help!', 'Giúp đỡ bạn bè quanh ta', 'Heroes help their friends!', 'puppy_hug', '🤝'],
      ['Dream big tonight!', 'Ngủ sớm giữ đôi mắt tinh anh', 'I go to sleep early!', 'cat_nap', '🌙'],
    ],
    hunts: [
      ['Chọn hoạt động ĐỌC SÁCH ("Read a book!")!', 'Find Read a book!', '📖 Read', [['Read a book', 'Đọc sách', 'good_book', '📖', true], ['Wash fork', 'Rửa nĩa', 'fork', '🍴', false], ['Fly kite', 'Thả diều', 'kite', '🪁', false]]],
    ],
    echoes: [
      ['I read a book every day!', 'Kể thói quen tốt: "I read a book every day!"', 'good_book', '📖', ['read', 'book', 'every day']],
      ['I help my friends!', 'Hô khẩu hiệu đẹp: "I help my friends!"', 'puppy_hug', '🤝', ['help', 'friends']],
    ],
    boss: ['Healthy happy hero!', 'Hoàn tất nhật ký: "Healthy happy hero!"', 'star', '💪', ['healthy', 'happy', 'hero']],
  },
  {
    id: 'u6_8',
    worldId: 6,
    unitNumber: 8,
    titleEn: 'Star Galaxy Finale',
    titleVi: 'Đại Lễ Vinh Danh Siêu Anh Hùng',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Cambridge Starters • Thuyết Trình Tự Tin',
    summaryVi: 'Trận chiến cuối cùng tổng hợp toàn bộ phát âm, từ vựng và hội thoại tự nhiên!',
    slides: [
      ['We did it together!', 'Chúng mình đã cùng chiến thắng', 'Together we shine bright!', 'archipelago', '✨'],
      ['Speak with joy!', 'Nói tiếng Anh tự nhiên vui vẻ', 'I speak English with joy!', 'star', '🎙️'],
      ['Galaxy champion!', 'Nhà vô địch Bảy Đảo Âm Vị', 'You are a true champion!', 'king_ring', '👑'],
    ],
    hunts: [
      ['Chạm BIỂU TƯỢNG BẢY ĐẢO ÂM VỊ ("Archipelago") hoàn tất chiến dịch!', 'Find Archipelago!', '🏝️ Islands', [['Seven islands', 'Bảy Đảo Âm Vị', 'archipelago', '🏝️', true], ['Tiny ant', 'Chú kiến', 'ant', '🐜', false], ['Red apple', 'Quả táo', 'apple', '🍎', false]]],
    ],
    echoes: [
      ['I can speak English well!', 'Tuyên ngôn tự tin: "I can speak English well!"', 'star', '🎙️', ['speak', 'english', 'well']],
      ['We are true champions!', 'Hô vang chiến thắng: "We are true champions!"', 'king_ring', '👑', ['champions', 'true']],
    ],
    boss: ['Thank you, friends! Goodbye!', 'Lời chào Đại Tướng Quân Ngân Hà: "Thank you, friends! Goodbye!"', 'archipelago', '🎆', ['thank you', 'friends', 'goodbye']],
  },
];

export const CAMPAIGN_EXPANSION_W4_TO_6: CurriculumUnit[] = SEEDS_W4_TO_6.map(buildStage46);
