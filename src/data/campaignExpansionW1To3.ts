import { AgeBandFilter, CurriculumUnit, CutsceneSlide, DialogueChallenge, TargetHuntRound } from '../types/heroGame';

interface CompactStageSeed {
  id: string;
  worldId: 1 | 2 | 3;
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

function buildStage(s: CompactStageSeed): CurriculumUnit {
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

const SEEDS_W1_TO_3: CompactStageSeed[] = [
  // ---- WORLD 1 EXPANSION (UNITS 5..8) ----
  {
    id: 'u1_5',
    worldId: 1,
    unitNumber: 5,
    titleEn: 'Toys & Fun Treasures',
    titleVi: 'Kho Báu Đồ Chơi Kỳ Diệu',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Wow English • Đồ Chơi Thân Quen',
    summaryVi: 'Khám phá từ đồ chơi quen thuộc: Ball, Kite, Doll, Yoyo!',
    slides: [
      ['Ball!', 'Quả bóng tròn nảy tưng', 'Bounce the big ball!', 'ball', '⚽'],
      ['Kite!', 'Cánh diều bay cao', 'Fly the kite in the sky!', 'kite', '🪁'],
      ['Doll!', 'Bạn búp bê xinh xắn', 'Hug the cute doll!', 'doll', '🪆'],
    ],
    hunts: [
      ['Tìm quả BÓNG ("Ball!") đang nảy trên bãi cỏ!', 'Find Ball!', '⚽ Ball!', [['Ball!', 'Quả bóng', 'ball', '⚽', true], ['Kite!', 'Cánh diều', 'kite', '🪁', false], ['Sun!', 'Mặt trời', 'sun', '☀️', false]]],
      ['Chạm đúng CÁNH DIỀU ("Kite!") bay trên bầu trời!', 'Find Kite!', '🪁 Kite!', [['Kite!', 'Cánh diều', 'kite', '🪁', true], ['Doll!', 'Búp bê', 'doll', '🪆', false], ['Cup!', 'Cái cốc', 'cup', '🥛', false]]],
    ],
    echoes: [
      ['My red ball!', 'Hô vang: "My red ball!"', 'ball', '⚽', ['ball', 'red ball', 'my red ball']],
      ['Fly my kite!', 'Nói to: "Fly my kite!"', 'kite', '🪁', ['kite', 'fly', 'fly my kite']],
    ],
    boss: ['Look! A cool yoyo!', 'Tung tuyệt kỹ: "Look! A cool yoyo!"', 'yoyo', '🪀', ['yoyo', 'look', 'cool yoyo']],
  },
  {
    id: 'u1_6',
    worldId: 1,
    unitNumber: 6,
    titleEn: 'One, Two, Three Jump!',
    titleVi: 'Đếm 1–2–3 Cùng Nhảy Cao',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Super Simple • Vận Động Đếm Số TPR',
    summaryVi: 'Vừa đếm 1–2–3 vừa bật nhảy thật vui: One, Two, Three, Jump!',
    slides: [
      ['One, two, three!', 'Một, hai, ba cùng đếm nào', 'Count one, two, three!', 'ten_apples', '🔢'],
      ['Three fish!', 'Ba chú cá bơi lội', 'Swim, three little fish!', 'three_fish', '🐟'],
      ['Jump high!', 'Bật nhảy thật cao lên nào', 'One, two, three, jump high!', 'frog_log', '🦘'],
    ],
    hunts: [
      ['Bắt nhóm BA CHÚ CÁ ("Three fish!") bơi qua!', 'Find Three fish!', '🐟 Three fish!', [['Three fish!', 'Ba chú cá', 'three_fish', '🐟', true], ['One apple!', 'Một quả táo', 'apple', '🍎', false], ['Big dog!', 'Chú chó', 'dog', '🐶', false]]],
    ],
    echoes: [
      ['One, two, three!', 'Đếm to rõ ràng: "One, two, three!"', 'ten_apples', '🔢', ['one', 'two', 'three']],
      ['Jump up high!', 'Hô to: "Jump up high!"', 'star', '⬆️', ['jump', 'high', 'jump up']],
    ],
    boss: ['Count with me!', 'Rủ cả đội cùng đếm: "Count with me!"', 'star', '🎉', ['count', 'with me']],
  },
  {
    id: 'u1_7',
    worldId: 1,
    unitNumber: 7,
    titleEn: 'Farm Animals Chorus',
    titleVi: 'Dàn Đồng Ca Nông Trại',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Wow English • Tiếng Kêu Con Vật',
    summaryVi: 'Làm quen bạn thú nông trại dễ thương: Pig, Hen, Frog, Duck.',
    slides: [
      ['Pink pig!', 'Chú heo hồng mũi hếch', 'Hello little pink pig!', 'pig', '🐷'],
      ['Red hen!', 'Cô gà mái đỏ chăm chỉ', 'Look at the red hen!', 'hen', '🐔'],
      ['Green frog!', 'Chú ếch xanh nhảy trên khúc gỗ', 'Hop, green frog, hop!', 'frog_log', '🐸'],
    ],
    hunts: [
      ['Chạm bạn HEO HỒNG ("Pink pig!") đáng yêu!', 'Find Pig!', '🐷 Pig!', [['Pig!', 'Chú heo', 'pig', '🐷', true], ['Hen!', 'Gà mái', 'hen', '🐔', false], ['Cat!', 'Chú mèo', 'cat', '🐱', false]]],
      ['Tìm cô GÀ MÁI ("Hen!") ở nông trại!', 'Find Hen!', '🐔 Hen!', [['Hen!', 'Gà mái', 'hen', '🐔', true], ['Frog!', 'Chú ếch', 'frog_log', '🐸', false], ['Seal!', 'Hải cẩu', 'seal', '🦭', false]]],
    ],
    echoes: [
      ['Hello little pig!', 'Nói vui nhộn: "Hello little pig!"', 'pig', '🐷', ['pig', 'hello', 'little pig']],
      ['Hop, green frog!', 'Đọc nhịp nhàng: "Hop, green frog!"', 'frog_log', '🐸', ['frog', 'hop', 'green frog']],
    ],
    boss: ['Funny farm friends!', 'Khen các bạn thú: "Funny farm friends!"', 'hen_dog', '🏡', ['farm', 'friends', 'funny']],
  },
  {
    id: 'u1_8',
    worldId: 1,
    unitNumber: 8,
    titleEn: 'Sun, Moon & Starlight',
    titleVi: 'Vương Quốc Trăng Sao Rực Rỡ',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Super Simple • Ngày Và Đêm',
    summaryVi: 'Chào ngày mới rực rỡ và chúc ngủ ngon dịu dàng: Sun, Moon, Star, Good night!',
    slides: [
      ['Bright sun!', 'Ông mặt trời tỏa nắng ấm', 'Good morning, bright sun!', 'sun', '☀️'],
      ['Silver moon!', 'Vầng trăng bạc lung linh', 'Look at the silver moon!', 'moon_spoon', '🌙'],
      ['Shining star!', 'Ngôi sao vàng lấp lánh', 'Twinkle, bright star!', 'star', '⭐'],
    ],
    hunts: [
      ['Bắt lấy NGÔI SAO SÁNG ("Star!") trên bầu trời đêm!', 'Find Star!', '⭐ Star!', [['Star!', 'Ngôi sao', 'star', '⭐', true], ['Moon!', 'Mặt trăng', 'moon_spoon', '🌙', false], ['Sun!', 'Mặt trời', 'sun', '☀️', false]]],
    ],
    echoes: [
      ['Sunny morning!', 'Chào buổi sáng: "Sunny morning!"', 'sun', '☀️', ['sun', 'sunny', 'morning']],
      ['See the moon!', 'Đọc to: "See the moon!"', 'moon_spoon', '🌙', ['moon', 'see the moon']],
    ],
    boss: ['Good night, stars!', 'Chúc cả ngân hà: "Good night, stars!"', 'star', '🌟', ['good night', 'stars', 'night']],
  },

  // ---- WORLD 2 EXPANSION (UNITS 5..8) ----
  {
    id: 'u2_5',
    worldId: 2,
    unitNumber: 5,
    titleEn: 'Puffs & Nests: P, N, T',
    titleVi: 'Biệt Đội Âm Bật P, N, T',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics L1 • Âm Đầu /p/, /n/, /t/',
    summaryVi: 'Luyện âm bật hơi chuẩn không dính vần thừa với Pen, Pig, Net, Tin.',
    rewardPhonemeIds: ['p', 'n', 't'],
    slides: [
      ['Pen!', 'Chiếc bút viết nét xinh', 'Write with a blue pen!', 'pen', '🖊️'],
      ['Tin!', 'Chiếc hộp thiếc sáng bóng', 'Tap the little tin!', 'tin', '🥫'],
      ['Ant!', 'Chú kiến chăm chỉ', 'One tiny red ant!', 'ant', '🐜'],
    ],
    hunts: [
      ['Chọn CHIẾC BÚT ("Pen!") bắt đầu bằng âm /p/!', 'Find Pen!', '🖊️ Pen', [['Pen', 'Chiếc bút', 'pen', '🖊️', true], ['Sun', 'Mặt trời', 'sun', '☀️', false], ['Dog', 'Chú chó', 'dog', '🐶', false]]],
      ['Tìm hộp thiếc ("Tin!") bắt đầu bằng âm /t/!', 'Find Tin!', '🥫 Tin', [['Tin', 'Hộp thiếc', 'tin', '🥫', true], ['Pig', 'Chú heo', 'pig', '🐷', false], ['Cat', 'Chú mèo', 'cat', '🐱', false]]],
    ],
    echoes: [
      ['Pink pig!', 'Bật rõ âm /p/: "Pink pig!"', 'pig', '🐷', ['pink', 'pig']],
      ['Ten tin cans!', 'Đọc dứt khoát âm /t/: "Ten tin cans!"', 'tin', '🥫', ['ten', 'tin', 'cans']],
    ],
    boss: ['Pen in my hand!', 'Chốt hạ ải: "Pen in my hand!"', 'pen', '✨', ['pen', 'hand']],
  },
  {
    id: 'u2_6',
    worldId: 2,
    unitNumber: 6,
    titleEn: 'Flying Fox & Fish: F, V, J',
    titleVi: 'Khu Rừng Âm Gió F, V, J',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics L1 • Âm Gió /f/, /v/, /dʒ/',
    summaryVi: 'Phân biệt thổi hơi /f/ (Fox, Fork, Fish) và âm bật /dʒ/ (Jam, Jump).',
    rewardPhonemeIds: ['f', 'v', 'j'],
    slides: [
      ['Fox!', 'Chú cáo đỏ nhanh nhẹn', 'Run, clever fox!', 'fox_box', '🦊'],
      ['Fork!', 'Chiếc nĩa ăn trái cây', 'Eat with a silver fork!', 'fork', '🍴'],
      ['Fish!', 'Chú cá lấp lánh dưới suối', 'Five fast blue fish!', 'three_fish', '🐠'],
    ],
    hunts: [
      ['Tìm CHÚ CÁO ĐỎ ("Fox!") bắt đầu bằng âm /f/!', 'Find Fox!', '🦊 Fox', [['Fox', 'Chú cáo', 'fox_box', '🦊', true], ['Hen', 'Gà mái', 'hen', '🐔', false], ['Box', 'Cái hộp', 'fox_box', '📦', false]]],
    ],
    echoes: [
      ['Fast red fox!', 'Đọc chuẩn âm gió /f/: "Fast red fox!"', 'fox_box', '🦊', ['fast', 'fox', 'red fox']],
      ['Five little fish!', 'Hô vang: "Five little fish!"', 'three_fish', '🐠', ['five', 'fish']],
    ],
    boss: ['Jump for joy!', 'Đánh boss với khẩu hiệu: "Jump for joy!"', 'star', '🎊', ['jump', 'joy']],
  },
  {
    id: 'u2_7',
    worldId: 2,
    unitNumber: 7,
    titleEn: 'Windy Kite & Queen: K, W, Qu',
    titleVi: 'Thung Lũng Diều & Nữ Hoàng K, W, Qu',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics L1 • Âm /k/, /w/, /kw/',
    summaryVi: 'Nhận diện cặp chữ K, W và Qu trong Kite, Koala, Wind, Queen.',
    rewardPhonemeIds: ['k', 'w', 'qu'],
    slides: [
      ['Koala!', 'Chú gấu túi leo cây bạch đàn', 'Cute sleepy koala!', 'koala', '🐨'],
      ['Kite!', 'Cánh diều vút bay trong gió', 'Catch the windy kite!', 'kite', '🪁'],
      ['Queen!', 'Nữ hoàng nhân hậu trong vườn', 'Kind royal queen!', 'queen_park', '👸'],
    ],
    hunts: [
      ['Chọn GẤU TÚI ("Koala!") bắt đầu bằng /k/!', 'Find Koala!', '🐨 Koala', [['Koala', 'Gấu túi', 'koala', '🐨', true], ['Mouse', 'Chú chuột', 'mouse', '🐭', false], ['Apple', 'Quả táo', 'apple', '🍎', false]]],
      ['Bắt đúng NỮ HOÀNG ("Queen!") giữ âm /kw/!', 'Find Queen!', '👸 Queen', [['Queen', 'Nữ hoàng', 'queen_park', '👸', true], ['Seal', 'Hải cẩu', 'seal', '🦭', false], ['Cup', 'Cái cốc', 'cup', '🥛', false]]],
    ],
    echoes: [
      ['Kind koala!', 'Đọc to: "Kind koala!"', 'koala', '🐨', ['koala', 'kind']],
      ['Queen has a kite!', 'Phát âm rõ /kw/ & /k/: "Queen has a kite!"', 'queen_park', '🪁', ['queen', 'kite']],
    ],
    boss: ['Windy sky queen!', 'Hô to khẩu lệnh: "Windy sky queen!"', 'kite', '🌬️', ['windy', 'queen', 'sky']],
  },
  {
    id: 'u2_8',
    worldId: 2,
    unitNumber: 8,
    titleEn: 'Garden Picnic: G, L, R',
    titleVi: 'Đồi Dã Ngoại Âm G, L, R',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics L1 • Tổng Ôn A–Z Âm Đầu',
    summaryVi: 'Hoàn thiện âm đầu /g/, /l/, /r/ qua Lime, Leo Lion,Giraffe, Rocket.',
    rewardPhonemeIds: ['g', 'l', 'r'],
    slides: [
      ['Lime!', 'Quả chanh xanh thơm mát', 'Sour green lime!', 'lime', '🍋'],
      ['Giraffe!', 'Hươu cao cổ vươn mình ngắm sao', 'Tall spotted giraffe!', 'giraffe', '🦒'],
      ['Rocket!', 'Tên lửa bay vút vào không gian', 'Ready! Red rocket go!', 'rocket', '🚀'],
    ],
    hunts: [
      ['Tìm TÊN LỬA ("Rocket!") bắt đầu bằng âm /r/!', 'Find Rocket!', '🚀 Rocket', [['Rocket', 'Tên lửa', 'rocket', '🚀', true], ['Lime', 'Chanh xanh', 'lime', '🍋', false], ['Giraffe', 'Hươu cao cổ', 'giraffe', '🦒', false]]],
    ],
    echoes: [
      ['Green lime!', 'Đọc chuẩn âm /l/: "Green lime!"', 'lime', '🍋', ['green', 'lime']],
      ['Red rocket go!', 'Uốn nhẹ âm /r/: "Red rocket go!"', 'rocket', '🚀', ['rocket', 'red rocket', 'go']],
    ],
    boss: ['Great alphabet hero!', 'Vinh danh hoàn thành A–Z: "Great alphabet hero!"', 'archipelago', '🏆', ['hero', 'alphabet', 'great']],
  },

  // ---- WORLD 3 EXPANSION (UNITS 5..8) ----
  {
    id: 'u3_5',
    worldId: 3,
    unitNumber: 5,
    titleEn: '-ot & -op Hopper',
    titleVi: 'Nhịp Điệu Ghép Vần -ot & -op',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics L2 • Nguyên Âm Ngắn /ɒ/',
    summaryVi: 'Đánh vần trôi chảy các từ họ -ot và -op: Hot, Pot, Hop, Top.',
    slides: [
      ['Hop!', 'Bật nhảy tách bạch h-o-p', 'Hop like a frog!', 'frog_log', '🐸'],
      ['Hot!', 'Ánh nắng nóng ấm s-u-n', 'The sun is hot!', 'sun', '🔥'],
      ['Mop & top!', 'Xoay vòng trên đỉnh cao', 'Spin on the top!', 'ax', '🌀'],
    ],
    hunts: [
      ['Bắt từ diễn tả HÀNH ĐỘNG NHẢY ("Hop!")!', 'Find Hop!', '🐸 Hop!', [['Hop', 'Nhảy lên', 'frog_log', '🐸', true], ['Nap', 'Ngủ trưa', 'cat_nap', '😴', false], ['Pen', 'Cây bút', 'pen', '🖊️', false]]],
    ],
    echoes: [
      ['The sun is hot!', 'Đánh vần và đọc câu: "The sun is hot!"', 'sun', '☀️', ['sun', 'hot', 'is hot']],
      ['Hop to the top!', 'Đọc nhịp điệu vần -op: "Hop to the top!"', 'frog_log', '⬆️', ['hop', 'top']],
    ],
    boss: ['Hot sun, hop!', 'Đánh bay quái vật: "Hot sun, hop!"', 'sun', '⚡', ['hot', 'hop', 'sun']],
  },
  {
    id: 'u3_6',
    worldId: 3,
    unitNumber: 6,
    titleEn: '-in & -it Twins',
    titleVi: 'Thung Lũng Vần -in & -it',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics L2 • Nguyên Âm Ngắn /ɪ/',
    summaryVi: 'Ghép âm ngắn /ɪ/ dứt khoát: Tin, Pin, Sit, Hit, Kit.',
    slides: [
      ['Sit!', 'Ngồi ngay ngắn s-i-t', 'Sit on the soft mat!', 'sit', '🪑'],
      ['Tin!', 'Hộp thiếc t-i-n sáng loáng', 'Find the blue tin!', 'tin', '🥫'],
      ['Otter friend!', 'Bạn rái cá tinh nghịch', 'Swim in the river!', 'otter', '🦦'],
    ],
    hunts: [
      ['Chạm từ NGỒI XUỐNG ("Sit!") đúng vần -it!', 'Find Sit!', '🪑 Sit!', [['Sit', 'Ngồi xuống', 'sit', '🪑', true], ['Run', 'Chạy nhanh', 'dog', '🏃', false], ['Cup', 'Cái cốc', 'cup', '🥛', false]]],
    ],
    echoes: [
      ['Sit in the sun!', 'Ghép đọc mượt: "Sit in the sun!"', 'sit', '☀️', ['sit', 'sun']],
      ['A tiny tin!', 'Đọc chuẩn âm ngắn /ɪ/: "A tiny tin!"', 'tin', '🥫', ['tin', 'tiny']],
    ],
    boss: ['Sit and win!', 'Đọc câu chiến thắng: "Sit and win!"', 'star', '🏅', ['sit', 'win']],
  },
  {
    id: 'u3_7',
    worldId: 3,
    unitNumber: 7,
    titleEn: '-ug & -up Club',
    titleVi: 'Câu Lạc Bộ Vần -ug & -up',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics L2 • Nguyên Âm Ngắn /ʌ/',
    summaryVi: 'Thành thạo vần -ug và -up: Bug, Rug, Hug, Cup, Pup.',
    slides: [
      ['Bug on a rug!', 'Bọ cánh cứng trên tấm thảm', 'Look! A bug on a rug!', 'bug_rug', '🐞'],
      ['Pup hug!', 'Ôm bạn cún con ấm áp', 'Give the pup a hug!', 'puppy_hug', '🐶'],
      ['Warm cup!', 'Chiếc cốc xinh đầy sữa', 'Hold the warm cup!', 'cup', '🥤'],
    ],
    hunts: [
      ['Chọn CHÚ BỌ TRÊN THẢM ("Bug on a rug")!', 'Find Bug on a rug!', '🐞 Bug on a rug', [['Bug on a rug', 'Bọ trên thảm', 'bug_rug', '🐞', true], ['Fox in box', 'Cáo trong hộp', 'fox_box', '🦊', false], ['Cat on mat', 'Mèo trên thảm', 'cat_mat', '🐱', false]]],
    ],
    echoes: [
      ['A bug on a rug!', 'Nối vần -ug mượt mà: "A bug on a rug!"', 'bug_rug', '🐞', ['bug', 'rug']],
      ['Hug the pup!', 'Đọc tình cảm: "Hug the pup!"', 'puppy_hug', '🐶', ['hug', 'pup']],
    ],
    boss: ['Snug bug on rug!', 'Hô vang phá giải ma pháp: "Snug bug on rug!"', 'bug_rug', '💥', ['bug', 'rug', 'snug']],
  },
  {
    id: 'u3_8',
    worldId: 3,
    unitNumber: 8,
    titleEn: 'CVC Champion Sprint',
    titleVi: 'Đấu Trường Hợp Âm Ngắn CVC',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics L2 • Đọc Cụm Từ Nối Âm',
    summaryVi: 'Thử thách đọc nhanh câu ghép vần ngắn: Sam has a pan, Hen and dog, Cat nap!',
    slides: [
      ['Sam has a pan!', 'Bé Sam cầm chiếc chảo rán', 'Sam taps the pan!', 'sam_pan', '🍳'],
      ['Cat nap!', 'Chú mèo ngủ trưa say giấc', 'A cozy cat nap!', 'cat_nap', '😴'],
      ['Hen and dog!', 'Gà mái và chú chó thân thiết', 'Hen and dog play!', 'hen_dog', '🐔'],
    ],
    hunts: [
      ['Bắt tranh BÉ SAM CẦM CHẢO ("Sam has a pan")!', 'Find Sam and pan!', '🍳 Sam has a pan', [['Sam has a pan', 'Sam và chảo', 'sam_pan', '🍳', true], ['Goat in boat', 'Dê trên thuyền', 'goat_boat', '⛵', false], ['Moon spoon', 'Mặt trăng', 'moon_spoon', '🌙', false]]],
    ],
    echoes: [
      ['Sam has a pan!', 'Đọc trọn câu nối âm: "Sam has a pan!"', 'sam_pan', '🍳', ['sam', 'pan', 'has a pan']],
      ['A quick cat nap!', 'Đọc rõ ràng: "A quick cat nap!"', 'cat_nap', '😴', ['cat', 'nap']],
    ],
    boss: ['I can read CVC!', 'Hoàn thành Thế Giới 3: "I can read CVC!"', 'good_book', '🏆', ['read', 'cvc', 'i can read']],
  },
];

export const CAMPAIGN_EXPANSION_W1_TO_3: CurriculumUnit[] = SEEDS_W1_TO_3.map(buildStage);
