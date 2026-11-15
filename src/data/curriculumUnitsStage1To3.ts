import { CurriculumUnit } from '../types/heroGame';

export const UNITS_STAGE_1_TO_3: CurriculumUnit[] = [
  // ================= WORLD 1: 3–4 TUỔI (WOW ENGLISH & SUPER SIMPLE ORAL) =================
  {
    id: 'u1_1',
    worldId: 1,
    unitNumber: 1,
    titleEn: 'Hello & Happy Friends',
    titleVi: 'Chào Hỏi & Kết Bạn Vui Nhộn',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Wow English • Giao Tiếp Phản Xạ TPR',
    summaryVi: 'Bé 3 tuổi làm quen câu chào ngắn nhất: Hello, Bye-bye, Yes, Happy!',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Hello!', meaningVi: 'Xin chào bạn!', heroActionLineEn: 'Wave your hand and say Hello!', visualWordKey: 'leo', emoji: '👋' },
      { id: 's2', wordOrPhraseEn: 'Happy!', meaningVi: 'Vui vẻ quá đi!', heroActionLineEn: 'Big smile! I am happy!', visualWordKey: 'star', emoji: '😄' },
      { id: 's3', wordOrPhraseEn: 'Bye-bye!', meaningVi: 'Tạm biệt nhé!', heroActionLineEn: 'Wave goodbye to the monster!', visualWordKey: 'cat', emoji: '🖐️' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u1_1_a',
        instructionVi: 'Điều khiển anh hùng tới chạm bạn đang vẫy tay nói "Hello!"',
        promptAudioEn: 'Find Hello!',
        targetBadge: '👋 Hello!',
        options: [
          { id: 'o1', labelEn: 'Hello!', subLabelVi: 'Vẫy tay chào', phonemeOrWord: 'hello', speakTextEn: 'Hello!', emoji: '👋', visualWordKey: 'leo', isCorrect: true },
          { id: 'o2', labelEn: 'Sleep', subLabelVi: 'Ngủ khò', phonemeOrWord: 'sleep', speakTextEn: 'Sleep', emoji: '😴', visualWordKey: 'cat', isCorrect: false },
          { id: 'o3', labelEn: 'Sad', subLabelVi: 'Buồn bã', phonemeOrWord: 'sad', speakTextEn: 'Sad', emoji: '😢', visualWordKey: 'dog', isCorrect: false },
        ],
      },
      {
        id: 'th_u1_1_b',
        instructionVi: 'Tìm bạn mặt cười rạng rỡ "Happy!" để tiếp sức mạnh!',
        promptAudioEn: 'Find Happy!',
        targetBadge: '😄 Happy!',
        options: [
          { id: 'o1', labelEn: 'Happy!', subLabelVi: 'Vui vẻ', phonemeOrWord: 'happy', speakTextEn: 'Happy!', emoji: '😄', visualWordKey: 'star', isCorrect: true },
          { id: 'o2', labelEn: 'Stop', subLabelVi: 'Dừng lại', phonemeOrWord: 'stop', speakTextEn: 'Stop', emoji: '🛑', visualWordKey: 'bus', isCorrect: false },
          { id: 'o3', labelEn: 'Cold', subLabelVi: 'Lạnh quá', phonemeOrWord: 'cold', speakTextEn: 'Cold', emoji: '🥶', visualWordKey: 'moon', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u1_1_a', speakerPromptEn: 'Hello friend!', childTargetEn: 'Hello friend!', meaningVi: 'Nói to: "Hello friend!" để đáp lời chào!', visualWordKey: 'leo', emoji: '👋', acceptableKeywords: ['hello friend', 'hello', 'hi', 'halo'] },
      { id: 'ed_u1_1_b', speakerPromptEn: 'Yes, I am happy!', childTargetEn: 'Yes, I am happy!', meaningVi: 'Đọc vui vẻ: "Yes, I am happy!"', visualWordKey: 'star', emoji: '😄', acceptableKeywords: ['happy', 'yes', 'yes i am happy'] },
    ],
    bossRounds: [
      { id: 'bs_u1_1', speakerPromptEn: 'Bye-bye monster!', childTargetEn: 'Bye-bye monster!', meaningVi: 'Đọc "Bye-bye monster!" tiễn đối thủ bay ra khỏi thành phố!', visualWordKey: 'star', emoji: '🚀', acceptableKeywords: ['bye bye monster', 'bye bye', 'goodbye'] },
    ],
  },
  {
    id: 'u1_2',
    worldId: 1,
    unitNumber: 2,
    titleEn: 'Rainbow Color Blast',
    titleVi: 'Sắc Màu Cầu Vồng Diệu Kỳ',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Wow English • Săn Màu Sắc Trên Sân Khấu',
    summaryVi: 'Nhận diện và hô to 4 màu sắc đầu đời: Red, Blue, Yellow, Green.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Red', meaningVi: 'Màu Đỏ rực rỡ', heroActionLineEn: 'Red like an apple!', visualWordKey: 'apple', emoji: '🍎' },
      { id: 's2', wordOrPhraseEn: 'Blue', meaningVi: 'Màu Xanh da trời', heroActionLineEn: 'Blue like the sky!', visualWordKey: 'boat', emoji: '📘' },
      { id: 's3', wordOrPhraseEn: 'Yellow', meaningVi: 'Màu Vàng ngôi sao', heroActionLineEn: 'Yellow like the sun!', visualWordKey: 'sun', emoji: '🌟' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u1_2_a',
        instructionVi: 'Lái nhân vật tìm khối năng lượng màu ĐỎ ("Red!")!',
        promptAudioEn: 'Find Red!',
        targetBadge: '🔴 Red',
        options: [
          { id: 'o1', labelEn: 'Red', subLabelVi: 'Màu đỏ', phonemeOrWord: 'red', speakTextEn: 'Red', emoji: '🔴', visualWordKey: 'apple', isCorrect: true },
          { id: 'o2', labelEn: 'Blue', subLabelVi: 'Màu xanh dương', phonemeOrWord: 'blue', speakTextEn: 'Blue', emoji: '🔵', visualWordKey: 'boat', isCorrect: false },
          { id: 'o3', labelEn: 'Yellow', subLabelVi: 'Màu vàng', phonemeOrWord: 'yellow', speakTextEn: 'Yellow', emoji: '🟡', visualWordKey: 'sun', isCorrect: false },
        ],
      },
      {
        id: 'th_u1_2_b',
        instructionVi: 'Bắt lấy viên ngọc màu XANH DƯƠNG ("Blue!") đang bay!',
        promptAudioEn: 'Find Blue!',
        targetBadge: '🔵 Blue',
        options: [
          { id: 'o1', labelEn: 'Blue', subLabelVi: 'Màu xanh dương', phonemeOrWord: 'blue', speakTextEn: 'Blue', emoji: '🔵', visualWordKey: 'boat', isCorrect: true },
          { id: 'o2', labelEn: 'Green', subLabelVi: 'Màu xanh lá', phonemeOrWord: 'green', speakTextEn: 'Green', emoji: '🟢', visualWordKey: 'tree', isCorrect: false },
          { id: 'o3', labelEn: 'Red', subLabelVi: 'Màu đỏ', phonemeOrWord: 'red', speakTextEn: 'Red', emoji: '🔴', visualWordKey: 'apple', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u1_2_a', speakerPromptEn: 'It is red!', childTargetEn: 'It is red!', meaningVi: 'Nhại lại câu trên đầu đối thủ: "It is red!"', visualWordKey: 'apple', emoji: '🔴', acceptableKeywords: ['red', 'it is red'] },
      { id: 'ed_u1_2_b', speakerPromptEn: 'It is yellow!', childTargetEn: 'It is yellow!', meaningVi: 'Đọc rõ: "It is yellow!"', visualWordKey: 'sun', emoji: '🟡', acceptableKeywords: ['yellow', 'it is yellow'] },
    ],
    bossRounds: [
      { id: 'bs_u1_2', speakerPromptEn: 'I like blue!', childTargetEn: 'I like blue!', meaningVi: 'Tung tuyệt kỹ bằng câu: "I like blue!"', visualWordKey: 'boat', emoji: '💙', acceptableKeywords: ['blue', 'like blue', 'i like blue'] },
    ],
  },
  {
    id: 'u1_3',
    worldId: 1,
    unitNumber: 3,
    titleEn: 'Yummy Fruit Party',
    titleVi: 'Bữa Tiệc Trái Cây Ngon Tuyệt',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Super Simple • Ngữ Cảnh Ăn Uống Hàng Ngày',
    summaryVi: 'Học từ và phản xạ khen ngon miệng: Apple, Banana, Milk, Yummy!',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Apple', meaningVi: 'Quả táo giòn', heroActionLineEn: 'One red apple!', visualWordKey: 'apple', emoji: '🍎' },
      { id: 's2', wordOrPhraseEn: 'Banana', meaningVi: 'Quả chuối vàng', heroActionLineEn: 'Sweet yellow banana!', visualWordKey: 'banana', emoji: '🍌' },
      { id: 's3', wordOrPhraseEn: 'Yummy!', meaningVi: 'Ngon quá!', heroActionLineEn: 'Mmm! Yummy milk!', visualWordKey: 'cup', emoji: '🥛' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u1_3_a',
        instructionVi: 'Bay tới lấy quả TÁO ("Apple!") trước khi đối thủ ăn mất!',
        promptAudioEn: 'Find the Apple!',
        targetBadge: '🍎 Apple',
        options: [
          { id: 'o1', labelEn: 'Apple', subLabelVi: 'Quả táo', phonemeOrWord: 'apple', speakTextEn: 'Apple', emoji: '🍎', visualWordKey: 'apple', isCorrect: true },
          { id: 'o2', labelEn: 'Banana', subLabelVi: 'Quả chuối', phonemeOrWord: 'banana', speakTextEn: 'Banana', emoji: '🍌', visualWordKey: 'banana', isCorrect: false },
          { id: 'o3', labelEn: 'Milk', subLabelVi: 'Ly sữa', phonemeOrWord: 'milk', speakTextEn: 'Milk', emoji: '🥛', visualWordKey: 'cup', isCorrect: false },
        ],
      },
      {
        id: 'th_u1_3_b',
        instructionVi: 'Chọn đúng quả CHUỐI ("Banana!") tiếp năng lượng cho anh hùng!',
        promptAudioEn: 'Find the Banana!',
        targetBadge: '🍌 Banana',
        options: [
          { id: 'o1', labelEn: 'Banana', subLabelVi: 'Quả chuối', phonemeOrWord: 'banana', speakTextEn: 'Banana', emoji: '🍌', visualWordKey: 'banana', isCorrect: true },
          { id: 'o2', labelEn: 'Carrot', subLabelVi: 'Củ cà rốt', phonemeOrWord: 'carrot', speakTextEn: 'Carrot', emoji: '🥕', visualWordKey: 'carrot', isCorrect: false },
          { id: 'o3', labelEn: 'Cup', subLabelVi: 'Cái cốc', phonemeOrWord: 'cup', speakTextEn: 'Cup', emoji: '🥤', visualWordKey: 'cup', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u1_3_a', speakerPromptEn: 'Yummy apple!', childTargetEn: 'Yummy apple!', meaningVi: 'Đọc ngon lành: "Yummy apple!"', visualWordKey: 'apple', emoji: '🍎', acceptableKeywords: ['yummy', 'apple', 'yummy apple'] },
      { id: 'ed_u1_3_b', speakerPromptEn: 'I like milk!', childTargetEn: 'I like milk!', meaningVi: 'Hô to: "I like milk!"', visualWordKey: 'cup', emoji: '🥛', acceptableKeywords: ['milk', 'like milk', 'i like milk'] },
    ],
    bossRounds: [
      { id: 'bs_u1_3', speakerPromptEn: 'Banana is yummy!', childTargetEn: 'Banana is yummy!', meaningVi: 'Nói to: "Banana is yummy!" để chiến thắng!', visualWordKey: 'banana', emoji: '🍌', acceptableKeywords: ['yummy', 'banana', 'banana is yummy'] },
    ],
  },
  {
    id: 'u1_4',
    worldId: 1,
    unitNumber: 4,
    titleEn: 'Animal Actions TPR',
    titleVi: 'Thú Cưng Vận Động (Chạy & Nhảy)',
    ageBand: '3–4 Tuổi',
    methodologyTag: 'Wow English • Phản Xạ Động Từ Hành Động',
    summaryVi: 'Vừa điều khiển nhân vật nhảy/chạy vừa nói Cat, Dog, Jump, Run!',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Cat', meaningVi: 'Chú mèo con', heroActionLineEn: 'Meow! Little cat!', visualWordKey: 'cat', emoji: '🐱' },
      { id: 's2', wordOrPhraseEn: 'Dog', meaningVi: 'Bạn cún dễ thương', heroActionLineEn: 'Woof! Happy dog!', visualWordKey: 'dog', emoji: '🐶' },
      { id: 's3', wordOrPhraseEn: 'Jump!', meaningVi: 'Nhảy cao lên!', heroActionLineEn: 'Jump up high!', visualWordKey: 'frog', emoji: '🦘' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u1_4_a',
        instructionVi: 'Giải cứu bạn MÈO ("Cat!") đang bị vây trên màn hình!',
        promptAudioEn: 'Help the Cat!',
        targetBadge: '🐱 Cat',
        options: [
          { id: 'o1', labelEn: 'Cat', subLabelVi: 'Chú mèo', phonemeOrWord: 'cat', speakTextEn: 'Cat', emoji: '🐱', visualWordKey: 'cat', isCorrect: true },
          { id: 'o2', labelEn: 'Dog', subLabelVi: 'Chú cún', phonemeOrWord: 'dog', speakTextEn: 'Dog', emoji: '🐶', visualWordKey: 'dog', isCorrect: false },
          { id: 'o3', labelEn: 'Pig', subLabelVi: 'Chú heo', phonemeOrWord: 'pig', speakTextEn: 'Pig', emoji: '🐷', visualWordKey: 'pig', isCorrect: false },
        ],
      },
      {
        id: 'th_u1_4_b',
        instructionVi: 'Tìm bạn Ếch đang bật nhảy ("Jump!") nào!',
        promptAudioEn: 'Find Jump!',
        targetBadge: '🐸 Jump!',
        options: [
          { id: 'o1', labelEn: 'Jump!', subLabelVi: 'Nhảy lên', phonemeOrWord: 'jump', speakTextEn: 'Jump!', emoji: '🐸', visualWordKey: 'frog', isCorrect: true },
          { id: 'o2', labelEn: 'Sit', subLabelVi: 'Ngồi xuống', phonemeOrWord: 'sit', speakTextEn: 'Sit', emoji: '🪑', visualWordKey: 'hen', isCorrect: false },
          { id: 'o3', labelEn: 'Nap', subLabelVi: 'Ngủ trưa', phonemeOrWord: 'nap', speakTextEn: 'Nap', emoji: '🛌', visualWordKey: 'cat', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u1_4_a', speakerPromptEn: 'Run, dog, run!', childTargetEn: 'Run, dog, run!', meaningVi: 'Cổ vũ thật to: "Run, dog, run!"', visualWordKey: 'dog', emoji: '🐶', acceptableKeywords: ['run', 'dog', 'run dog run'] },
      { id: 'ed_u1_4_b', speakerPromptEn: 'Jump, cat, jump!', childTargetEn: 'Jump, cat, jump!', meaningVi: 'Hô mạnh: "Jump, cat, jump!" để anh hùng bật cao!', visualWordKey: 'cat', emoji: '🐱', acceptableKeywords: ['jump', 'cat', 'jump cat jump'] },
    ],
    bossRounds: [
      { id: 'bs_u1_4', speakerPromptEn: 'I can jump!', childTargetEn: 'I can jump!', meaningVi: 'Đọc câu chiến thắng: "I can jump!"', visualWordKey: 'frog', emoji: '⚡', acceptableKeywords: ['jump', 'can jump', 'i can jump'] },
    ],
  },

  // ================= WORLD 2: 3.5–4.5 TUỔI (OXFORD PHONICS WORLD L1 ALPHABET) =================
  {
    id: 'u2_1',
    worldId: 2,
    unitNumber: 1,
    titleEn: 'Phonics Squad: S, A, T, P',
    titleVi: 'Biệt Đội Phụ Âm & Nguyên Âm Đầu (S, A, T, P)',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics World L1 • Tìm Âm Chiến Đấu',
    summaryVi: 'Tìm đúng đối thủ mang âm đầu /s/, /æ/, /t/, /p/ và bật hơi chuẩn.',
    rewardPhonemeIds: ['s', 'a', 't', 'p'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Sun', highlightToken: 'S', phonemeId: 's', meaningVi: 'Âm /s/ xì hơi — Mặt trời', heroActionLineEn: 'S says s-s-s, Sun!', visualWordKey: 'sun', emoji: '☀️', visemeKey: 's' },
      { id: 's2', wordOrPhraseEn: 'Ant', highlightToken: 'A', phonemeId: 'a', meaningVi: 'Âm /æ/ mở hàm — Chú kiến', heroActionLineEn: 'A says a-a-a, Ant!', visualWordKey: 'ant', emoji: '🐜', visemeKey: 'a' },
      { id: 's3', wordOrPhraseEn: 'Tap', highlightToken: 'T', phonemeId: 't', meaningVi: 'Âm /t/ bật lưỡi — Vòi nước', heroActionLineEn: 'T says t-t-t, Tap!', visualWordKey: 'tap', emoji: '🚰', visemeKey: 't' },
      { id: 's4', wordOrPhraseEn: 'Pig', highlightToken: 'P', phonemeId: 'p', meaningVi: 'Âm /p/ bật môi — Chú heo', heroActionLineEn: 'P says p-p-p, Pig!', visualWordKey: 'pig', emoji: '🐷', visemeKey: 'p' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u2_1_a',
        instructionVi: 'Tìm đối thủ mang phụ âm đầu /s/ (như từ Sun)!',
        promptAudioEn: 'Find Sun!',
        targetBadge: 'Âm /s/ • S',
        hintPhonemeId: 's',
        options: [
          { id: 'o1', labelEn: 'S - Sun', subLabelVi: 'Bắt đầu bằng S', phonemeOrWord: 'sun', speakTextEn: 'Sun', emoji: '☀️', visualWordKey: 'sun', isCorrect: true },
          { id: 'o2', labelEn: 'A - Ant', subLabelVi: 'Bắt đầu bằng A', phonemeOrWord: 'ant', speakTextEn: 'Ant', emoji: '🐜', visualWordKey: 'ant', isCorrect: false },
          { id: 'o3', labelEn: 'P - Pig', subLabelVi: 'Bắt đầu bằng P', phonemeOrWord: 'pig', speakTextEn: 'Pig', emoji: '🐷', visualWordKey: 'pig', isCorrect: false },
        ],
      },
      {
        id: 'th_u2_1_b',
        instructionVi: 'Tìm đối thủ mang phụ âm bật hơi /p/ (như từ Pig)!',
        promptAudioEn: 'Find Pig!',
        targetBadge: 'Âm /p/ • P',
        hintPhonemeId: 'p',
        options: [
          { id: 'o1', labelEn: 'P - Pig', subLabelVi: 'Bắt đầu bằng P', phonemeOrWord: 'pig', speakTextEn: 'Pig', emoji: '🐷', visualWordKey: 'pig', isCorrect: true },
          { id: 'o2', labelEn: 'T - Ten', subLabelVi: 'Bắt đầu bằng T', phonemeOrWord: 'ten', speakTextEn: 'Ten', emoji: '🔟', visualWordKey: 'hen', isCorrect: false },
          { id: 'o3', labelEn: 'S - Sat', subLabelVi: 'Bắt đầu bằng S', phonemeOrWord: 'sat', speakTextEn: 'Sat', emoji: '🪑', visualWordKey: 'cat', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u2_1_a', speakerPromptEn: 'Big sun!', childTargetEn: 'Big sun!', meaningVi: 'Mặt trời to! Bé nghe và nhắc lại: "Big sun!"', hintPhonemeId: 's', visualWordKey: 'sun', emoji: '☀️', acceptableKeywords: ['big sun', 'sun', 'son', 'san'] },
      { id: 'ed_u2_1_b', speakerPromptEn: 'Pink pig!', childTargetEn: 'Pink pig!', meaningVi: 'Chú heo hồng! Bé nghe và nhắc lại: "Pink pig!"', hintPhonemeId: 'p', visualWordKey: 'pig', emoji: '🐷', acceptableKeywords: ['pink pig', 'pig', 'big', 'peg'] },
    ],
    bossRounds: [
      { id: 'bs_u2_1', speakerPromptEn: 'Tap the pan!', childTargetEn: 'Tap the pan!', meaningVi: 'Đọc câu vần ghép âm: "Tap the pan!"', hintPhonemeId: 't', visualWordKey: 'ant_pan', emoji: '🍳', acceptableKeywords: ['tap', 'pan', 'tap the pan'] },
    ],
  },
  {
    id: 'u2_2',
    worldId: 2,
    unitNumber: 2,
    titleEn: 'Phonics Squad: I, N, C, K, E',
    titleVi: 'Biệt Đội Âm Giòn (I, N, C, K, E)',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics World L1 • Phân Biệt Phụ Âm Đầu',
    summaryVi: 'Săn mục tiêu mang âm /ɪ/, /n/, /k/, /e/ qua từ Cat, Kite, Egg, Net.',
    rewardPhonemeIds: ['i', 'n', 'c', 'k', 'e'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Cat', highlightToken: 'C', phonemeId: 'c', meaningVi: 'Âm /k/ giòn — Con mèo', heroActionLineEn: 'C says k-k-k, Cat!', visualWordKey: 'cat', emoji: '🐱', visemeKey: 'c' },
      { id: 's2', wordOrPhraseEn: 'Kite', highlightToken: 'K', phonemeId: 'k', meaningVi: 'Âm /k/ — Cánh diều bay', heroActionLineEn: 'K says k-k-k, Kite!', visualWordKey: 'kite', emoji: '🪁', visemeKey: 'k' },
      { id: 's3', wordOrPhraseEn: 'Egg', highlightToken: 'E', phonemeId: 'e', meaningVi: 'Âm /e/ — Quả trứng', heroActionLineEn: 'E says e-e-e, Egg!', visualWordKey: 'hen', emoji: '🥚', visemeKey: 'e' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u2_2_a',
        instructionVi: 'Tìm đối thủ mang phụ âm đầu /k/ (chữ C — Cat)!',
        promptAudioEn: 'Find Cat!',
        targetBadge: 'Âm /k/ • C',
        hintPhonemeId: 'c',
        options: [
          { id: 'o1', labelEn: 'C - Cat', subLabelVi: 'Chữ C — Cat', phonemeOrWord: 'cat', speakTextEn: 'Cat', emoji: '🐱', visualWordKey: 'cat', isCorrect: true },
          { id: 'o2', labelEn: 'E - Egg', subLabelVi: 'Chữ E — Egg', phonemeOrWord: 'egg', speakTextEn: 'Egg', emoji: '🥚', visualWordKey: 'hen', isCorrect: false },
          { id: 'o3', labelEn: 'N - Net', subLabelVi: 'Chữ N — Net', phonemeOrWord: 'net', speakTextEn: 'Net', emoji: '🥅', visualWordKey: 'pen', isCorrect: false },
        ],
      },
      {
        id: 'th_u2_2_b',
        instructionVi: 'Tìm đối thủ có chữ N (Net) trên sân khấu!',
        promptAudioEn: 'Find Net!',
        targetBadge: 'Âm /n/ • N',
        hintPhonemeId: 'n',
        options: [
          { id: 'o1', labelEn: 'N - Net', subLabelVi: 'Chữ N — Net', phonemeOrWord: 'net', speakTextEn: 'Net', emoji: '🥅', visualWordKey: 'pen', isCorrect: true },
          { id: 'o2', labelEn: 'K - Kite', subLabelVi: 'Chữ K — Kite', phonemeOrWord: 'kite', speakTextEn: 'Kite', emoji: '🪁', visualWordKey: 'kite', isCorrect: false },
          { id: 'o3', labelEn: 'I - Ink', subLabelVi: 'Chữ I — Ink', phonemeOrWord: 'ink', speakTextEn: 'Ink', emoji: '🖋️', visualWordKey: 'pig', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u2_2_a', speakerPromptEn: 'Blue kite!', childTargetEn: 'Blue kite!', meaningVi: 'Cánh diều xanh! Đọc rõ: "Blue kite!"', hintPhonemeId: 'k', visualWordKey: 'kite', emoji: '🪁', acceptableKeywords: ['blue kite', 'kite', 'cat', 'kai'] },
      { id: 'ed_u2_2_b', speakerPromptEn: 'Big egg!', childTargetEn: 'Big egg!', meaningVi: 'Quả trứng to! Đọc rõ: "Big egg!"', hintPhonemeId: 'e', visualWordKey: 'hen', emoji: '🥚', acceptableKeywords: ['big egg', 'egg', 'eg'] },
    ],
    bossRounds: [
      { id: 'bs_u2_2', speakerPromptEn: 'Cat and kite!', childTargetEn: 'Cat and kite!', meaningVi: 'Tung chiêu bằng cụm từ: "Cat and kite!"', hintPhonemeId: 'c', visualWordKey: 'cat', emoji: '🪁', acceptableKeywords: ['cat and kite', 'cat', 'kite'] },
    ],
  },
  {
    id: 'u2_3',
    worldId: 2,
    unitNumber: 3,
    titleEn: 'Phonics Squad: H, R, M, D, G',
    titleVi: 'Biệt Đội Gầm Vang (H, R, M, D, G)',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics World L1 • Âm Hơi & Âm Rung Cổ',
    summaryVi: 'Luyện âm /h/, /r/, /m/, /d/, /g/ qua Hat, Mouse, Dog, Goat.',
    rewardPhonemeIds: ['h', 'r', 'm', 'd', 'g'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Hat', highlightToken: 'H', phonemeId: 'h', meaningVi: 'Âm /h/ thở hơi ấm — Chiếc mũ', heroActionLineEn: 'H says h-h-h, Hat!', visualWordKey: 'hat', emoji: '🎩', visemeKey: 'h' },
      { id: 's2', wordOrPhraseEn: 'Mouse', highlightToken: 'M', phonemeId: 'm', meaningVi: 'Âm /m/ mím môi — Chú chuột', heroActionLineEn: 'M says m-m-m, Mouse!', visualWordKey: 'mouse', emoji: '🐭', visemeKey: 'm' },
      { id: 's3', wordOrPhraseEn: 'Dog', highlightToken: 'D', phonemeId: 'd', meaningVi: 'Âm /d/ rung — Chú chó', heroActionLineEn: 'D says d-d-d, Dog!', visualWordKey: 'dog', emoji: '🐶', visemeKey: 'd' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u2_3_a',
        instructionVi: 'Chọn đúng phụ âm H (Hat) để mở cổng kho báu!',
        promptAudioEn: 'Find Hat!',
        targetBadge: 'Âm /h/ • H',
        hintPhonemeId: 'h',
        options: [
          { id: 'o1', labelEn: 'H - Hat', subLabelVi: 'Chữ H — Chiếc mũ', phonemeOrWord: 'hat', speakTextEn: 'Hat', emoji: '🎩', visualWordKey: 'hat', isCorrect: true },
          { id: 'o2', labelEn: 'M - Moon', subLabelVi: 'Chữ M — Mặt trăng', phonemeOrWord: 'moon', speakTextEn: 'Moon', emoji: '🌙', visualWordKey: 'moon', isCorrect: false },
          { id: 'o3', labelEn: 'D - Dog', subLabelVi: 'Chữ D — Chú cún', phonemeOrWord: 'dog', speakTextEn: 'Dog', emoji: '🐶', visualWordKey: 'dog', isCorrect: false },
        ],
      },
      {
        id: 'th_u2_3_b',
        instructionVi: 'Tìm đối thủ mang phụ âm M (Mouse)!',
        promptAudioEn: 'Find Mouse!',
        targetBadge: 'Âm /m/ • M',
        hintPhonemeId: 'm',
        options: [
          { id: 'o1', labelEn: 'M - Mouse', subLabelVi: 'Chữ M — Chú chuột', phonemeOrWord: 'mouse', speakTextEn: 'Mouse', emoji: '🐭', visualWordKey: 'mouse', isCorrect: true },
          { id: 'o2', labelEn: 'R - Rat', subLabelVi: 'Chữ R — Chuột lớn', phonemeOrWord: 'rat', speakTextEn: 'Rat', emoji: '🐀', visualWordKey: 'mouse', isCorrect: false },
          { id: 'o3', labelEn: 'G - Goat', subLabelVi: 'Chữ G — Chú dê', phonemeOrWord: 'goat', speakTextEn: 'Goat', emoji: '🐐', visualWordKey: 'goat', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u2_3_a', speakerPromptEn: 'Red hat!', childTargetEn: 'Red hat!', meaningVi: 'Chiếc mũ đỏ! Bé đọc rõ: "Red hat!"', hintPhonemeId: 'h', visualWordKey: 'hat', emoji: '🎩', acceptableKeywords: ['red hat', 'hat', 'hot', 'ha'] },
      { id: 'ed_u2_3_b', speakerPromptEn: 'Good dog!', childTargetEn: 'Good dog!', meaningVi: 'Chú cún ngoan! Đọc giòn âm /d/: "Good dog!"', hintPhonemeId: 'd', visualWordKey: 'dog', emoji: '🐶', acceptableKeywords: ['good dog', 'dog', 'doll', 'do'] },
    ],
    bossRounds: [
      { id: 'bs_u2_3', speakerPromptEn: 'A red hat on a dog!', childTargetEn: 'A red hat on a dog!', meaningVi: 'Đọc to "A red hat on a dog!" đánh bại đối thủ!', hintPhonemeId: 'r', visualWordKey: 'dog', emoji: '🎩', acceptableKeywords: ['a red hat on a dog', 'red', 'hat', 'dog', 'red hat'] },
    ],
  },
  {
    id: 'u2_4',
    worldId: 2,
    unitNumber: 4,
    titleEn: 'Phonics Squad: O, U, L, F, B',
    titleVi: 'Biệt Đội Biển Xanh (O, U, L, F, B)',
    ageBand: '3.5–4.5 Tuổi',
    methodologyTag: 'Oxford Phonics World L1 • Khóa Sổ Âm Đơn A–Z',
    summaryVi: 'Hoàn thành bộ phụ âm & nguyên âm nền tảng: Fox, Frog, Ball, Lion, Bus.',
    rewardPhonemeIds: ['o', 'u', 'l', 'f', 'b'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Ball', highlightToken: 'B', phonemeId: 'b', meaningVi: 'Âm /b/ — Quả bóng', heroActionLineEn: 'B says b-b-b, Ball!', visualWordKey: 'ball', emoji: '⚽', visemeKey: 'b' },
      { id: 's2', wordOrPhraseEn: 'Frog', highlightToken: 'F', phonemeId: 'f', meaningVi: 'Âm /f/ thổi môi — Chú ếch', heroActionLineEn: 'F says f-f-f, Frog!', visualWordKey: 'frog', emoji: '🐸', visemeKey: 'f' },
      { id: 's3', wordOrPhraseEn: 'Lion', highlightToken: 'L', phonemeId: 'l', meaningVi: 'Âm /l/ uốn lưỡi — Sư tử', heroActionLineEn: 'L says l-l-l, Lion!', visualWordKey: 'leo', emoji: '🦁', visemeKey: 'l' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u2_4_a',
        instructionVi: 'Bắt lấy đối thủ mang phụ âm F (Frog)!',
        promptAudioEn: 'Find Frog!',
        targetBadge: 'Âm /f/ • F',
        hintPhonemeId: 'f',
        options: [
          { id: 'o1', labelEn: 'F - Frog', subLabelVi: 'Chữ F — Chú ếch', phonemeOrWord: 'frog', speakTextEn: 'Frog', emoji: '🐸', visualWordKey: 'frog', isCorrect: true },
          { id: 'o2', labelEn: 'B - Ball', subLabelVi: 'Chữ B — Quả bóng', phonemeOrWord: 'ball', speakTextEn: 'Ball', emoji: '⚽', visualWordKey: 'ball', isCorrect: false },
          { id: 'o3', labelEn: 'O - Otter', subLabelVi: 'Chữ O — Rái cá', phonemeOrWord: 'otter', speakTextEn: 'Otter', emoji: '🦦', visualWordKey: 'otter', isCorrect: false },
        ],
      },
      {
        id: 'th_u2_4_b',
        instructionVi: 'Chọn đối thủ mang phụ âm L (Lion — Dũng sĩ Sư tử)!',
        promptAudioEn: 'Find Lion!',
        targetBadge: 'Âm /l/ • L',
        hintPhonemeId: 'l',
        options: [
          { id: 'o1', labelEn: 'L - Lion', subLabelVi: 'Chữ L — Sư tử', phonemeOrWord: 'lion', speakTextEn: 'Lion', emoji: '🦁', visualWordKey: 'leo', isCorrect: true },
          { id: 'o2', labelEn: 'U - Umbrella', subLabelVi: 'Chữ U — Chiếc ô', phonemeOrWord: 'umbrella', speakTextEn: 'Umbrella', emoji: '☂️', visualWordKey: 'sun', isCorrect: false },
          { id: 'o3', labelEn: 'B - Bus', subLabelVi: 'Chữ B — Xe buýt', phonemeOrWord: 'bus', speakTextEn: 'Bus', emoji: '🚌', visualWordKey: 'bus', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u2_4_a', speakerPromptEn: 'Bouncy ball!', childTargetEn: 'Bouncy ball!', meaningVi: 'Quả bóng nảy! Bé đọc to: "Bouncy ball!"', hintPhonemeId: 'b', visualWordKey: 'ball', emoji: '⚽', acceptableKeywords: ['bouncy ball', 'ball', 'bo', 'ba'] },
      { id: 'ed_u2_4_b', speakerPromptEn: 'Brave lion!', childTargetEn: 'Brave lion!', meaningVi: 'Chú sư tử dũng cảm! Bé đọc to: "Brave lion!"', hintPhonemeId: 'l', visualWordKey: 'leo', emoji: '🦁', acceptableKeywords: ['brave lion', 'lion', 'laion', 'leo'] },
    ],
    bossRounds: [
      { id: 'bs_u2_4', speakerPromptEn: 'Big blue ball!', childTargetEn: 'Big blue ball!', meaningVi: 'Hô câu tổng kết: "Big blue ball!"', hintPhonemeId: 'b', visualWordKey: 'ball', emoji: '💥', acceptableKeywords: ['big', 'blue', 'ball', 'big blue ball'] },
    ],
  },

  // ================= WORLD 3: 4–5 TUỔI (OXFORD PHONICS WORLD L2 SHORT VOWELS CVC) =================
  {
    id: 'u3_1',
    worldId: 3,
    unitNumber: 1,
    titleEn: 'Short A Canyon (-at / -an)',
    titleVi: 'Hẻm Núi Nguyên Âm Ngắn A (-at / -an)',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics World L2 • Ghép Vần CVC',
    summaryVi: 'Ghép âm và chiến đấu với họ từ Short A: cat, hat, mat, pan, man.',
    rewardPhonemeIds: ['a'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'c - a - t = Cat', highlightToken: 'at', phonemeId: 'a', meaningVi: 'Ghép vần -at: Chú mèo', heroActionLineEn: 'c-a-t, Cat!', visualWordKey: 'cat', emoji: '🐱' },
      { id: 's2', wordOrPhraseEn: 'h - a - t = Hat', highlightToken: 'at', phonemeId: 'a', meaningVi: 'Ghép vần -at: Chiếc mũ', heroActionLineEn: 'h-a-t, Hat!', visualWordKey: 'hat', emoji: '🎩' },
      { id: 's3', wordOrPhraseEn: 'p - a - n = Pan', highlightToken: 'an', phonemeId: 'a', meaningVi: 'Ghép vần -an: Cái chảo', heroActionLineEn: 'p-a-n, Pan!', visualWordKey: 'ant_pan', emoji: '🍳' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u3_1_a',
        instructionVi: 'Tìm đối thủ mang từ vần "-at": CAT (c-a-t)!',
        promptAudioEn: 'Find Cat!',
        targetBadge: 'Vần -AT • Cat',
        hintPhonemeId: 'a',
        options: [
          { id: 'o1', labelEn: 'Cat', subLabelVi: 'c - a - t', phonemeOrWord: 'cat', speakTextEn: 'Cat', emoji: '🐱', visualWordKey: 'cat', isCorrect: true },
          { id: 'o2', labelEn: 'Pig', subLabelVi: 'p - i - g', phonemeOrWord: 'pig', speakTextEn: 'Pig', emoji: '🐷', visualWordKey: 'pig', isCorrect: false },
          { id: 'o3', labelEn: 'Bug', subLabelVi: 'b - u - g', phonemeOrWord: 'bug', speakTextEn: 'Bug', emoji: '🐞', visualWordKey: 'bug_rug', isCorrect: false },
        ],
      },
      {
        id: 'th_u3_1_b',
        instructionVi: 'Săn tìm đối thủ mang từ vần "-an": PAN (p-a-n)!',
        promptAudioEn: 'Find Pan!',
        targetBadge: 'Vần -AN • Pan',
        options: [
          { id: 'o1', labelEn: 'Pan', subLabelVi: 'p - a - n', phonemeOrWord: 'pan', speakTextEn: 'Pan', emoji: '🍳', visualWordKey: 'ant_pan', isCorrect: true },
          { id: 'o2', labelEn: 'Pen', subLabelVi: 'p - e - n', phonemeOrWord: 'pen', speakTextEn: 'Pen', emoji: '🖊️', visualWordKey: 'pen', isCorrect: false },
          { id: 'o3', labelEn: 'Pin', subLabelVi: 'p - i - n', phonemeOrWord: 'pin', speakTextEn: 'Pin', emoji: '📌', visualWordKey: 'pig', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u3_1_a', speakerPromptEn: 'Cat in a hat!', childTargetEn: 'Cat in a hat!', meaningVi: 'Đọc trôi chảy cụm: "Cat in a hat!"', visualWordKey: 'cat', emoji: '🐱', acceptableKeywords: ['cat', 'hat', 'cat in a hat'] },
      { id: 'ed_u3_1_b', speakerPromptEn: 'A fat cat sat!', childTargetEn: 'A fat cat sat!', meaningVi: 'Đọc nối âm: "A fat cat sat!"', visualWordKey: 'cat_mat', emoji: '🐈', acceptableKeywords: ['fat', 'cat', 'sat'] },
    ],
    bossRounds: [
      { id: 'bs_u3_1', speakerPromptEn: 'The cat sat on a mat!', childTargetEn: 'The cat sat on a mat!', meaningVi: 'Đọc trọn câu phá Boss: "The cat sat on a mat!"', visualWordKey: 'cat_mat', emoji: '👑', acceptableKeywords: ['cat', 'sat', 'mat'] },
    ],
  },
  {
    id: 'u3_2',
    worldId: 3,
    unitNumber: 2,
    titleEn: 'Short E & I Valley (-en / -ig)',
    titleVi: 'Thung Lũng Âm Ngắn E & I (-en / -ig)',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics World L2 • Phân Biệt Âm /e/ và /ɪ/',
    summaryVi: 'Phân biệt chính xác pen vs. pin, hen vs. pig trên sân khấu.',
    rewardPhonemeIds: ['e', 'i'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Pen', highlightToken: 'e', phonemeId: 'e', meaningVi: 'p - e - n: Cây bút mực', heroActionLineEn: 'p-e-n, Pen!', visualWordKey: 'pen', emoji: '🖊️' },
      { id: 's2', wordOrPhraseEn: 'Hen', highlightToken: 'e', phonemeId: 'e', meaningVi: 'h - e - n: Cô gà mái', heroActionLineEn: 'h-e-n, Red hen!', visualWordKey: 'hen', emoji: '🐔' },
      { id: 's3', wordOrPhraseEn: 'Pig', highlightToken: 'i', phonemeId: 'i', meaningVi: 'p - i - g: Chú heo hồng', heroActionLineEn: 'p-i-g, Big pig!', visualWordKey: 'pig', emoji: '🐷' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u3_2_a',
        instructionVi: 'Chọn đối thủ mang âm ngắn E: RED HEN!',
        promptAudioEn: 'Find Red Hen!',
        targetBadge: 'Vần -EN • Hen',
        hintPhonemeId: 'e',
        options: [
          { id: 'o1', labelEn: 'Hen', subLabelVi: 'h - e - n', phonemeOrWord: 'hen', speakTextEn: 'Hen', emoji: '🐔', visualWordKey: 'hen', isCorrect: true },
          { id: 'o2', labelEn: 'Pig', subLabelVi: 'p - i - g', phonemeOrWord: 'pig', speakTextEn: 'Pig', emoji: '🐷', visualWordKey: 'pig', isCorrect: false },
          { id: 'o3', labelEn: 'Fox', subLabelVi: 'f - o - x', phonemeOrWord: 'fox', speakTextEn: 'Fox', emoji: '🦊', visualWordKey: 'fox_box', isCorrect: false },
        ],
      },
      {
        id: 'th_u3_2_b',
        instructionVi: 'Tìm đối thủ mang âm ngắn I: BIG PIG!',
        promptAudioEn: 'Find Big Pig!',
        targetBadge: 'Vần -IG • Pig',
        hintPhonemeId: 'i',
        options: [
          { id: 'o1', labelEn: 'Pig', subLabelVi: 'p - i - g', phonemeOrWord: 'pig', speakTextEn: 'Pig', emoji: '🐷', visualWordKey: 'pig', isCorrect: true },
          { id: 'o2', labelEn: 'Pen', subLabelVi: 'p - e - n', phonemeOrWord: 'pen', speakTextEn: 'Pen', emoji: '🖊️', visualWordKey: 'pen', isCorrect: false },
          { id: 'o3', labelEn: 'Sun', subLabelVi: 's - u - n', phonemeOrWord: 'sun', speakTextEn: 'Sun', emoji: '☀️', visualWordKey: 'sun', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u3_2_a', speakerPromptEn: 'Ten red pens!', childTargetEn: 'Ten red pens!', meaningVi: 'Đọc rõ: "Ten red pens!"', visualWordKey: 'pen', emoji: '🖊️', acceptableKeywords: ['ten', 'red', 'pen', 'pens'] },
      { id: 'ed_u3_2_b', speakerPromptEn: 'Big pink pig!', childTargetEn: 'Big pink pig!', meaningVi: 'Đọc rõ: "Big pink pig!"', visualWordKey: 'pig', emoji: '🐷', acceptableKeywords: ['big', 'pink', 'pig'] },
    ],
    bossRounds: [
      { id: 'bs_u3_2', speakerPromptEn: 'The hen has a red pen!', childTargetEn: 'The hen has a red pen!', meaningVi: 'Đọc câu thử thách: "The hen has a red pen!"', visualWordKey: 'hen', emoji: '🐔', acceptableKeywords: ['hen', 'red', 'pen'] },
    ],
  },
  {
    id: 'u3_3',
    worldId: 3,
    unitNumber: 3,
    titleEn: 'Short O & U Peaks (-og / -un)',
    titleVi: 'Đỉnh Núi Âm Ngắn O & U (-og / -un)',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics World L2 • Giải Mã Từ CVC',
    summaryVi: 'Làm chủ dog, frog, fox, box, sun, bug, cup.',
    rewardPhonemeIds: ['o', 'u'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Fox', highlightToken: 'o', phonemeId: 'o', meaningVi: 'f - o - x: Chú cáo nhanh', heroActionLineEn: 'Fox in a box!', visualWordKey: 'fox_box', emoji: '🦊' },
      { id: 's2', wordOrPhraseEn: 'Frog', highlightToken: 'o', phonemeId: 'o', meaningVi: 'fr - o - g: Chú ếch xanh', heroActionLineEn: 'Frog on a log!', visualWordKey: 'frog_log', emoji: '🐸' },
      { id: 's3', wordOrPhraseEn: 'Bug', highlightToken: 'u', phonemeId: 'u', meaningVi: 'b - u - g: Bọ cánh cam', heroActionLineEn: 'Bug on a rug!', visualWordKey: 'bug_rug', emoji: '🐞' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u3_3_a',
        instructionVi: 'Săn tìm đối thủ mang vần "-ox": FOX!',
        promptAudioEn: 'Find the Fox!',
        targetBadge: 'Vần -OX • Fox',
        hintPhonemeId: 'o',
        options: [
          { id: 'o1', labelEn: 'Fox', subLabelVi: 'f - o - x', phonemeOrWord: 'fox', speakTextEn: 'Fox', emoji: '🦊', visualWordKey: 'fox_box', isCorrect: true },
          { id: 'o2', labelEn: 'Sun', subLabelVi: 's - u - n', phonemeOrWord: 'sun', speakTextEn: 'Sun', emoji: '☀️', visualWordKey: 'sun', isCorrect: false },
          { id: 'o3', labelEn: 'Cat', subLabelVi: 'c - a - t', phonemeOrWord: 'cat', speakTextEn: 'Cat', emoji: '🐱', visualWordKey: 'cat', isCorrect: false },
        ],
      },
      {
        id: 'th_u3_3_b',
        instructionVi: 'Chọn đúng chú bọ mang vần "-ug": BUG!',
        promptAudioEn: 'Find the Bug!',
        targetBadge: 'Vần -UG • Bug',
        hintPhonemeId: 'u',
        options: [
          { id: 'o1', labelEn: 'Bug', subLabelVi: 'b - u - g', phonemeOrWord: 'bug', speakTextEn: 'Bug', emoji: '🐞', visualWordKey: 'bug_rug', isCorrect: true },
          { id: 'o2', labelEn: 'Dog', subLabelVi: 'd - o - g', phonemeOrWord: 'dog', speakTextEn: 'Dog', emoji: '🐶', visualWordKey: 'dog', isCorrect: false },
          { id: 'o3', labelEn: 'Hat', subLabelVi: 'h - a - t', phonemeOrWord: 'hat', speakTextEn: 'Hat', emoji: '🎩', visualWordKey: 'hat', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u3_3_a', speakerPromptEn: 'Fox in a box!', childTargetEn: 'Fox in a box!', meaningVi: 'Đọc vần nhịp điệu: "Fox in a box!"', visualWordKey: 'fox_box', emoji: '🦊', acceptableKeywords: ['fox', 'box', 'fox in a box'] },
      { id: 'ed_u3_3_b', speakerPromptEn: 'Run in the sun!', childTargetEn: 'Run in the sun!', meaningVi: 'Đọc to: "Run in the sun!"', visualWordKey: 'sun', emoji: '☀️', acceptableKeywords: ['run', 'sun', 'in the sun'] },
    ],
    bossRounds: [
      { id: 'bs_u3_3', speakerPromptEn: 'A frog is on the log!', childTargetEn: 'A frog is on the log!', meaningVi: 'Hô câu kết liễu Boss: "A frog is on the log!"', visualWordKey: 'frog_log', emoji: '🐸', acceptableKeywords: ['frog', 'log', 'on the log'] },
    ],
  },
  {
    id: 'u3_4',
    worldId: 3,
    unitNumber: 4,
    titleEn: 'CVC Hero Story Duel',
    titleVi: 'Đấu Trường Đọc Câu Ghép Vần',
    ageBand: '4–5 Tuổi',
    methodologyTag: 'Oxford Phonics L2 + Decodable Fluency',
    summaryVi: 'Tổng hợp toàn bộ nguyên âm ngắn a, e, i, o, u thành câu giao tiếp thực tế.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Hot sun!', meaningVi: 'Mặt trời ấm nóng!', heroActionLineEn: 'The hot sun is up!', visualWordKey: 'sun', emoji: '☀️' },
      { id: 's2', wordOrPhraseEn: 'Fun bus!', meaningVi: 'Chuyến xe buýt vui nhộn!', heroActionLineEn: 'Get on the red bus!', visualWordKey: 'bus', emoji: '🚌' },
      { id: 's3', wordOrPhraseEn: 'Big hug!', meaningVi: 'Cái ôm thật to!', heroActionLineEn: 'Give a big hug!', visualWordKey: 'puppy_hug', emoji: '🤗' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u3_4_a',
        instructionVi: 'Tìm chiếc XE BUÝT (Bus) để chở cả đội anh hùng!',
        promptAudioEn: 'Find the Bus!',
        targetBadge: '🚌 Bus',
        options: [
          { id: 'o1', labelEn: 'Bus', subLabelVi: 'b - u - s', phonemeOrWord: 'bus', speakTextEn: 'Bus', emoji: '🚌', visualWordKey: 'bus', isCorrect: true },
          { id: 'o2', labelEn: 'Cup', subLabelVi: 'c - u - p', phonemeOrWord: 'cup', speakTextEn: 'Cup', emoji: '🥤', visualWordKey: 'cup', isCorrect: false },
          { id: 'o3', labelEn: 'Box', subLabelVi: 'b - o - x', phonemeOrWord: 'box', speakTextEn: 'Box', emoji: '📦', visualWordKey: 'fox_box', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u3_4_a', speakerPromptEn: 'The red bus is fast!', childTargetEn: 'The red bus is fast!', meaningVi: 'Đọc cụm: "The red bus is fast!"', visualWordKey: 'bus', emoji: '🚌', acceptableKeywords: ['red', 'bus', 'fast'] },
      { id: 'ed_u3_4_b', speakerPromptEn: 'Big hug!', childTargetEn: 'Big hug!', meaningVi: 'Nói ấm áp: "Big hug!"', visualWordKey: 'puppy_hug', emoji: '🤗', acceptableKeywords: ['big', 'hug', 'puppy'] },
    ],
    bossRounds: [
      { id: 'bs_u3_4', speakerPromptEn: 'Hot sun, fun bus, big hug!', childTargetEn: 'Hot sun, fun bus, big hug!', meaningVi: 'Tung tuyệt kỹ tổng kết World 3!', visualWordKey: 'puppy_hug', emoji: '🏆', acceptableKeywords: ['hot', 'sun', 'fun', 'bus', 'big', 'hug'] },
    ],
  },
];
