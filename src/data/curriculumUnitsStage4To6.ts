import { CurriculumUnit } from '../types/heroGame';

export const UNITS_STAGE_4_TO_6: CurriculumUnit[] = [
  // ================= WORLD 4: 5–6 TUỔI (WOW ENGLISH PRESCHOOL SITUATIONAL SPEAKING) =================
  {
    id: 'u4_1',
    worldId: 4,
    unitNumber: 1,
    titleEn: 'Body & Super Feelings',
    titleVi: 'Cơ Thể & Cảm Xúc Siêu Nhân',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'Wow English • Giao Tiếp Tình Huống',
    summaryVi: 'Nói tự tin về cơ thể và cảm xúc: eyes, ears, hands, happy, brave, strong.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Two eyes!', meaningVi: 'Hai đôi mắt tinh anh', heroActionLineEn: 'I have two bright eyes!', visualWordKey: 'leo', emoji: '👀' },
      { id: 's2', wordOrPhraseEn: 'Strong hands!', meaningVi: 'Đôi tay mạnh mẽ', heroActionLineEn: 'Clap your strong hands!', visualWordKey: 'star', emoji: '🙌' },
      { id: 's3', wordOrPhraseEn: 'I am brave!', meaningVi: 'Mình rất dũng cảm!', heroActionLineEn: 'I am brave and happy!', visualWordKey: 'leo', emoji: '🦁' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u4_1_a',
        instructionVi: 'Chọn thẻ năng lượng chỉ ĐÔI MẮT tinh anh ("Eyes")!',
        promptAudioEn: 'Find Eyes!',
        targetBadge: '👀 Eyes',
        options: [
          { id: 'o1', labelEn: 'Eyes', subLabelVi: 'Đôi mắt', phonemeOrWord: 'eyes', speakTextEn: 'Eyes', emoji: '👀', visualWordKey: 'leo', isCorrect: true },
          { id: 'o2', labelEn: 'Ears', subLabelVi: 'Đôi tai', phonemeOrWord: 'ears', speakTextEn: 'Ears', emoji: '👂', visualWordKey: 'mouse', isCorrect: false },
          { id: 'o3', labelEn: 'Nose', subLabelVi: 'Chiếc mũi', phonemeOrWord: 'nose', speakTextEn: 'Nose', emoji: '👃', visualWordKey: 'dog', isCorrect: false },
        ],
      },
      {
        id: 'th_u4_1_b',
        instructionVi: 'Tìm cảm xúc DŨNG CẢM ("Brave!") để tăng sức mạnh cho anh hùng!',
        promptAudioEn: 'Find Brave!',
        targetBadge: '🦁 Brave',
        options: [
          { id: 'o1', labelEn: 'Brave', subLabelVi: 'Dũng cảm', phonemeOrWord: 'brave', speakTextEn: 'Brave', emoji: '🦁', visualWordKey: 'leo', isCorrect: true },
          { id: 'o2', labelEn: 'Sleepy', subLabelVi: 'Buồn ngủ', phonemeOrWord: 'sleepy', speakTextEn: 'Sleepy', emoji: '😴', visualWordKey: 'cat_nap', isCorrect: false },
          { id: 'o3', labelEn: 'Hungry', subLabelVi: 'Đói bụng', phonemeOrWord: 'hungry', speakTextEn: 'Hungry', emoji: '🍽️', visualWordKey: 'apple', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u4_1_a', speakerPromptEn: 'My nose!', childTargetEn: 'My nose!', meaningVi: 'Chạm mũi và hô: "My nose!" hoặc "Touch your nose!"', visualWordKey: 'leo', emoji: '👃', acceptableKeywords: ['nose', 'my nose', 'touch'] },
      { id: 'ed_u4_1_b', speakerPromptEn: 'I am happy!', childTargetEn: 'I am happy!', meaningVi: 'Trả lời tự tin: "I am happy!"', visualWordKey: 'star', emoji: '😄', acceptableKeywords: ['happy', 'good', 'great', 'i am happy'] },
    ],
    bossRounds: [
      { id: 'bs_u4_1', speakerPromptEn: 'I am brave!', childTargetEn: 'I am brave!', meaningVi: 'Khẳng định trước Boss: "I am brave!"', visualWordKey: 'leo', emoji: '🛡️', acceptableKeywords: ['brave', 'strong', 'yes', 'i am brave'] },
    ],
  },
  {
    id: 'u4_2',
    worldId: 4,
    unitNumber: 2,
    titleEn: 'My Happy Family Team',
    titleVi: 'Gia Đình Siêu Anh Hùng',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'Wow English • Giới Thiệu Người Thân',
    summaryVi: 'Hội thoại ngắn giới thiệu ba mẹ, anh chị em: Mommy, Daddy, Sister, Brother.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Mommy & Daddy', meaningVi: 'Mẹ yêu và Bố yêu', heroActionLineEn: 'I love my Mommy and Daddy!', visualWordKey: 'puppy_hug', emoji: '👨‍👩‍👧' },
      { id: 's2', wordOrPhraseEn: 'My sister', meaningVi: 'Chị / Em gái của mình', heroActionLineEn: 'This is my sister!', visualWordKey: 'doll', emoji: '👧' },
      { id: 's3', wordOrPhraseEn: 'My brother', meaningVi: 'Anh / Em trai của mình', heroActionLineEn: 'This is my brother!', visualWordKey: 'kite', emoji: '👦' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u4_2_a',
        instructionVi: 'Tìm thẻ biểu tượng BỐ ("Daddy") cùng tham chiến!',
        promptAudioEn: 'Find Daddy!',
        targetBadge: '👨 Daddy',
        options: [
          { id: 'o1', labelEn: 'Daddy', subLabelVi: 'Bố yêu', phonemeOrWord: 'daddy', speakTextEn: 'Daddy', emoji: '👨', visualWordKey: 'leo', isCorrect: true },
          { id: 'o2', labelEn: 'Baby', subLabelVi: 'Em bé', phonemeOrWord: 'baby', speakTextEn: 'Baby', emoji: '👶', visualWordKey: 'puppy_hug', isCorrect: false },
          { id: 'o3', labelEn: 'Teacher', subLabelVi: 'Cô giáo', phonemeOrWord: 'teacher', speakTextEn: 'Teacher', emoji: '👩‍🏫', visualWordKey: 'good_book', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u4_2_a', speakerPromptEn: 'This is my mommy!', childTargetEn: 'This is my mommy!', meaningVi: 'Trả lời to: "This is my mommy!" hoặc "My mommy!"', visualWordKey: 'puppy_hug', emoji: '👩', acceptableKeywords: ['mommy', 'mom', 'mother', 'this is my'] },
      { id: 'ed_u4_2_b', speakerPromptEn: 'I love my family!', childTargetEn: 'I love my family!', meaningVi: 'Đọc câu ấm áp: "I love my family!"', visualWordKey: 'star', emoji: '❤️', acceptableKeywords: ['love', 'family', 'i love'] },
    ],
    bossRounds: [
      { id: 'bs_u4_2', speakerPromptEn: 'Happy family!', childTargetEn: 'Happy family!', meaningVi: 'Hợp lực chiến thắng: "Happy family!"', visualWordKey: 'puppy_hug', emoji: '🏡', acceptableKeywords: ['happy', 'family', 'we are'] },
    ],
  },
  {
    id: 'u4_3',
    worldId: 4,
    unitNumber: 3,
    titleEn: 'Fast Vehicles & Weather',
    titleVi: 'Siêu Xe, Tàu Vũ Trụ & Thời Tiết',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'Wow English • Phương Tiện & Thiên Nhiên',
    summaryVi: 'Mô tả xe cộ và thời tiết: Car, Boat, Train, Sunny, Rainy, Windy.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Fast car!', meaningVi: 'Chiếc xe chạy siêu nhanh', heroActionLineEn: 'Drive the fast red car!', visualWordKey: 'bus', emoji: '🏎️' },
      { id: 's2', wordOrPhraseEn: 'Big boat!', meaningVi: 'Con tàu vượt biển', heroActionLineEn: 'Sail the big boat!', visualWordKey: 'goat_boat', emoji: '⛵' },
      { id: 's3', wordOrPhraseEn: 'It is sunny!', meaningVi: 'Trời đang nắng đẹp!', heroActionLineEn: 'Look! It is sunny today!', visualWordKey: 'sun', emoji: '☀️' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u4_3_a',
        instructionVi: 'Chọn con THUYỀN ("Boat!") để vượt đại dương!',
        promptAudioEn: 'Find the Boat!',
        targetBadge: '⛵ Boat',
        options: [
          { id: 'o1', labelEn: 'Boat', subLabelVi: 'Con thuyền', phonemeOrWord: 'boat', speakTextEn: 'Boat', emoji: '⛵', visualWordKey: 'goat_boat', isCorrect: true },
          { id: 'o2', labelEn: 'Train', subLabelVi: 'Tàu hỏa', phonemeOrWord: 'train', speakTextEn: 'Train', emoji: '🚂', visualWordKey: 'bus', isCorrect: false },
          { id: 'o3', labelEn: 'Bike', subLabelVi: 'Xe đạp', phonemeOrWord: 'bike', speakTextEn: 'Bike', emoji: '🚲', visualWordKey: 'kite', isCorrect: false },
        ],
      },
      {
        id: 'th_u4_3_b',
        instructionVi: 'Tìm đám mây MƯA ("Rainy!") đang cản đường!',
        promptAudioEn: 'Find Rainy!',
        targetBadge: '🌧️ Rainy',
        options: [
          { id: 'o1', labelEn: 'Rainy', subLabelVi: 'Trời mưa', phonemeOrWord: 'rainy', speakTextEn: 'Rainy', emoji: '🌧️', visualWordKey: 'pail', isCorrect: true },
          { id: 'o2', labelEn: 'Sunny', subLabelVi: 'Trời nắng', phonemeOrWord: 'sunny', speakTextEn: 'Sunny', emoji: '☀️', visualWordKey: 'sun', isCorrect: false },
          { id: 'o3', labelEn: 'Moon', subLabelVi: 'Mặt trăng', phonemeOrWord: 'moon', speakTextEn: 'Moon', emoji: '🌙', visualWordKey: 'moon', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u4_3_a', speakerPromptEn: 'It is sunny!', childTargetEn: 'It is sunny!', meaningVi: 'Đáp lại: "It is sunny!"', visualWordKey: 'sun', emoji: '☀️', acceptableKeywords: ['sunny', 'sun', 'it is sunny'] },
      { id: 'ed_u4_3_b', speakerPromptEn: 'Go, fast car!', childTargetEn: 'Go, fast car!', meaningVi: 'Hô cổ vũ: "Go, fast car!"', visualWordKey: 'bus', emoji: '🏎️', acceptableKeywords: ['go', 'fast', 'car'] },
    ],
    bossRounds: [
      { id: 'bs_u4_3', speakerPromptEn: 'Sunny day!', childTargetEn: 'Sunny day!', meaningVi: 'Đọc câu gọi nắng chiến thắng: "Sunny day!"', visualWordKey: 'sun', emoji: '🌈', acceptableKeywords: ['sunny', 'day', 'sun'] },
    ],
  },
  {
    id: 'u4_4',
    worldId: 4,
    unitNumber: 4,
    titleEn: 'Numbers 1–5 & Big/Small',
    titleVi: 'Đếm Số 1–5 & So Sánh To / Nhỏ',
    ageBand: '5–6 Tuổi',
    methodologyTag: 'Wow English CLIL • Toán Học Tiếng Anh',
    summaryVi: 'Đếm 1–5 và phân biệt cặp đối lập Big / Small trong chiến đấu.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'One, two, three!', meaningVi: 'Đếm 1, 2, 3 chuẩn xác', heroActionLineEn: 'One, two, three, go!', visualWordKey: 'star', emoji: '🔢' },
      { id: 's2', wordOrPhraseEn: 'Five stars!', meaningVi: 'Năm ngôi sao lấp lánh', heroActionLineEn: 'Count five golden stars!', visualWordKey: 'star', emoji: '⭐' },
      { id: 's3', wordOrPhraseEn: 'Big and small!', meaningVi: 'To lớn và nhỏ bé', heroActionLineEn: 'Big lion, small mouse!', visualWordKey: 'mouse', emoji: '🐭' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u4_4_a',
        instructionVi: 'Chọn hộp năng lượng có NĂM ngôi sao ("Five!")!',
        promptAudioEn: 'Find Five stars!',
        targetBadge: '5️⃣ Five',
        options: [
          { id: 'o1', labelEn: 'Five (5)', subLabelVi: '5 ngôi sao', phonemeOrWord: 'five', speakTextEn: 'Five!', emoji: '⭐⭐⭐⭐⭐', visualWordKey: 'star', isCorrect: true },
          { id: 'o2', labelEn: 'Two (2)', subLabelVi: '2 ngôi sao', phonemeOrWord: 'two', speakTextEn: 'Two!', emoji: '⭐⭐', visualWordKey: 'star', isCorrect: false },
          { id: 'o3', labelEn: 'One (1)', subLabelVi: '1 ngôi sao', phonemeOrWord: 'one', speakTextEn: 'One!', emoji: '⭐', visualWordKey: 'star', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u4_4_a', speakerPromptEn: 'One, two, three!', childTargetEn: 'One, two, three!', meaningVi: 'Đếm to rõ: "One, two, three!"', visualWordKey: 'star', emoji: '3️⃣', acceptableKeywords: ['one', 'two', 'three'] },
      { id: 'ed_u4_4_b', speakerPromptEn: 'It is big!', childTargetEn: 'It is big!', meaningVi: 'Trả lời: "It is big!" hoặc "Big!"', visualWordKey: 'leo', emoji: '🤖', acceptableKeywords: ['big', 'it is big', 'small'] },
    ],
    bossRounds: [
      { id: 'bs_u4_4', speakerPromptEn: 'Five, blast off!', childTargetEn: 'Five, blast off!', meaningVi: 'Đếm ngược tung chiêu: "Five, blast off!"', visualWordKey: 'star', emoji: '🚀', acceptableKeywords: ['three', 'four', 'five', 'blast'] },
    ],
  },

  // ================= WORLD 5: 5.5–7 TUỔI (OXFORD PHONICS L3–L4 LONG VOWELS & BLENDS) =================
  {
    id: 'u5_1',
    worldId: 5,
    unitNumber: 1,
    titleEn: 'Magic E Transformation',
    titleVi: 'Phép Thuật Chữ E Thần Kỳ (Magic E)',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics World L3 • Long Vowels',
    summaryVi: 'Khám phá quy tắc E câm biến nguyên âm ngắn thành dài: cake, bike, kite, home.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Cake', highlightToken: 'a_e', meaningVi: 'Bánh kem sinh nhật (âm /eɪ/)', heroActionLineEn: 'Magic e makes a say A: Cake!', visualWordKey: 'apple', emoji: '🎂' },
      { id: 's2', wordOrPhraseEn: 'Kite', highlightToken: 'i_e', phonemeId: 'ie', meaningVi: 'Cánh diều bay cao (âm /aɪ/)', heroActionLineEn: 'Fly the high kite!', visualWordKey: 'kite', emoji: '🪁' },
      { id: 's3', wordOrPhraseEn: 'Bone', highlightToken: 'o_e', phonemeId: 'oa', meaningVi: 'Khúc xương của cún (âm /oʊ/)', heroActionLineEn: 'A bone for the dog!', visualWordKey: 'dog', emoji: '🦴' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u5_1_a',
        instructionVi: 'Tìm đối thủ mang từ Magic E: KITE (âm dài /aɪ/)!',
        promptAudioEn: 'Find Kite!',
        targetBadge: '🪁 Kite (i_e)',
        options: [
          { id: 'o1', labelEn: 'Kite', subLabelVi: 'k - i - t - e', phonemeOrWord: 'kite', speakTextEn: 'Kite', emoji: '🪁', visualWordKey: 'kite', isCorrect: true },
          { id: 'o2', labelEn: 'Kit', subLabelVi: 'k - i - t (ngắn)', phonemeOrWord: 'kit', speakTextEn: 'Kit', emoji: '🧰', visualWordKey: 'can', isCorrect: false },
          { id: 'o3', labelEn: 'Cat', subLabelVi: 'c - a - t', phonemeOrWord: 'cat', speakTextEn: 'Cat', emoji: '🐱', visualWordKey: 'cat', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u5_1_a', speakerPromptEn: 'Bake a cake!', childTargetEn: 'Bake a cake!', meaningVi: 'Đọc rõ nguyên âm dài: "Bake a cake!"', visualWordKey: 'apple', emoji: '🎂', acceptableKeywords: ['bake', 'cake', 'sweet'] },
      { id: 'ed_u5_1_b', speakerPromptEn: 'Fly a kite!', childTargetEn: 'Fly a kite!', meaningVi: 'Đọc mượt: "Fly a kite!"', visualWordKey: 'kite', emoji: '🪁', acceptableKeywords: ['fly', 'kite', 'sky'] },
    ],
    bossRounds: [
      { id: 'bs_u5_1', speakerPromptEn: 'Ride my bike!', childTargetEn: 'Ride my bike!', meaningVi: 'Đọc câu tốc độ cao: "Ride my bike!"', visualWordKey: 'kite', emoji: '🚲', acceptableKeywords: ['ride', 'bike', 'home'] },
    ],
  },
  {
    id: 'u5_2',
    worldId: 5,
    unitNumber: 2,
    titleEn: 'Vowel Teams (ee, oa, ai)',
    titleVi: 'Cặp Đôi Nguyên Âm (ee, oa, ai)',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics World L3 • Vowel Digraphs',
    summaryVi: 'Khi hai nguyên âm đi cùng nhau: Bee, Tree, Boat, Goat, Rain, Train.',
    rewardPhonemeIds: ['ee', 'oa', 'ai'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Tree', highlightToken: 'ee', phonemeId: 'ee', meaningVi: 'Âm /iː/ dài — Cây xanh', heroActionLineEn: 'Bee on a green tree!', visualWordKey: 'bee_tree', emoji: '🌳', visemeKey: 'ee' },
      { id: 's2', wordOrPhraseEn: 'Boat', highlightToken: 'oa', phonemeId: 'oa', meaningVi: 'Âm /oʊ/ — Con thuyền', heroActionLineEn: 'Goat in a yellow boat!', visualWordKey: 'goat_boat', emoji: '⛵', visemeKey: 'oa' },
      { id: 's3', wordOrPhraseEn: 'Rain', highlightToken: 'ai', phonemeId: 'ai', meaningVi: 'Âm /eɪ/ — Cơn mưa', heroActionLineEn: 'Snail in the rain!', visualWordKey: 'pail', emoji: '🌧️', visemeKey: 'ai' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u5_2_a',
        instructionVi: 'Chọn đối thủ mang âm đôi EE: GREEN TREE!',
        promptAudioEn: 'Find Tree!',
        targetBadge: 'Âm /iː/ • EE',
        hintPhonemeId: 'ee',
        options: [
          { id: 'o1', labelEn: 'Tree', subLabelVi: 't - r - ee', phonemeOrWord: 'tree', speakTextEn: 'Tree', emoji: '🌳', visualWordKey: 'bee_tree', isCorrect: true },
          { id: 'o2', labelEn: 'Boat', subLabelVi: 'b - oa - t', phonemeOrWord: 'boat', speakTextEn: 'Boat', emoji: '⛵', visualWordKey: 'goat_boat', isCorrect: false },
          { id: 'o3', labelEn: 'Rain', subLabelVi: 'r - ai - n', phonemeOrWord: 'rain', speakTextEn: 'Rain', emoji: '🌧️', visualWordKey: 'pail', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u5_2_a', speakerPromptEn: 'Bee on the tree!', childTargetEn: 'Bee on the tree!', meaningVi: 'Đọc rõ âm /iː/: "Bee on the tree!"', hintPhonemeId: 'ee', visualWordKey: 'bee_tree', emoji: '🐝', acceptableKeywords: ['bee', 'tree', 'on the tree'] },
      { id: 'ed_u5_2_b', speakerPromptEn: 'Goat on a boat!', childTargetEn: 'Goat on a boat!', meaningVi: 'Đọc mượt âm /oʊ/: "Goat on a boat!"', hintPhonemeId: 'oa', visualWordKey: 'goat_boat', emoji: '🐐', acceptableKeywords: ['goat', 'boat', 'row'] },
    ],
    bossRounds: [
      { id: 'bs_u5_2', speakerPromptEn: 'Green tree, blue rain!', childTargetEn: 'Green tree, blue rain!', meaningVi: 'Tổng công kích 3 cặp nguyên âm đôi!', hintPhonemeId: 'ai', visualWordKey: 'bee_tree', emoji: '⚡', acceptableKeywords: ['green', 'tree', 'boat', 'rain'] },
    ],
  },
  {
    id: 'u5_3',
    worldId: 5,
    unitNumber: 3,
    titleEn: 'Consonant Blends Squad',
    titleVi: 'Tổ Hợp Phụ Âm Tốc Độ (bl, cl, st, tr)',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics World L4 • Consonant Clusters',
    summaryVi: 'Luyện phát âm liền mạch hai phụ âm đứng cạnh nhau: Blue, Clown, Star, Frog.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Star', highlightToken: 'st', meaningVi: 'st - ar: Ngôi sao sáng', heroActionLineEn: 'Shine like a golden star!', visualWordKey: 'star', emoji: '⭐' },
      { id: 's2', wordOrPhraseEn: 'Clown', highlightToken: 'cl', meaningVi: 'cl - own: Chú hề vui tính', heroActionLineEn: 'Funny clown in the circus!', visualWordKey: 'clown_cloud', emoji: '🤡' },
      { id: 's3', wordOrPhraseEn: 'Frog', highlightToken: 'fr', meaningVi: 'fr - og: Chú ếch xanh', heroActionLineEn: 'Green frog jumps!', visualWordKey: 'frog_log', emoji: '🐸' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u5_3_a',
        instructionVi: 'Tìm đối thủ mang tổ hợp ST (STAR — Ngôi sao)!',
        promptAudioEn: 'Find Star!',
        targetBadge: 'Tổ hợp ST • Star',
        options: [
          { id: 'o1', labelEn: 'Star', subLabelVi: 'st - ar', phonemeOrWord: 'star', speakTextEn: 'Star', emoji: '⭐', visualWordKey: 'star', isCorrect: true },
          { id: 'o2', labelEn: 'Cloud', subLabelVi: 'cl - oud', phonemeOrWord: 'cloud', speakTextEn: 'Cloud', emoji: '☁️', visualWordKey: 'clown_cloud', isCorrect: false },
          { id: 'o3', labelEn: 'Frog', subLabelVi: 'fr - og', phonemeOrWord: 'frog', speakTextEn: 'Frog', emoji: '🐸', visualWordKey: 'frog_log', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u5_3_a', speakerPromptEn: 'Super star!', childTargetEn: 'Super star!', meaningVi: 'Hô vang cụm tổ hợp ST: "Super star!"', visualWordKey: 'star', emoji: '🌟', acceptableKeywords: ['super', 'star'] },
      { id: 'ed_u5_3_b', speakerPromptEn: 'Clown on a cloud!', childTargetEn: 'Clown on a cloud!', meaningVi: 'Đọc chuẩn tổ hợp CL: "Clown on a cloud!"', visualWordKey: 'clown_cloud', emoji: '☁️', acceptableKeywords: ['clown', 'cloud'] },
    ],
    bossRounds: [
      { id: 'bs_u5_3', speakerPromptEn: 'Catch the star!', childTargetEn: 'Catch the star!', meaningVi: 'Tung tuyệt kỹ: "Catch the star!"', visualWordKey: 'star', emoji: '💫', acceptableKeywords: ['stop', 'jump', 'catch', 'star'] },
    ],
  },
  {
    id: 'u5_4',
    worldId: 5,
    unitNumber: 4,
    titleEn: 'Digraph Heroes (sh, ch, th)',
    titleVi: 'Anh Hùng Âm Ghép (sh, ch, th)',
    ageBand: '5.5–7 Tuổi',
    methodologyTag: 'Oxford Phonics World L4 • Digraph Mastery',
    summaryVi: 'Làm chủ 3 âm ghép dễ nhầm nhất của người Việt: Ship /ʃ/, Chick /tʃ/, Three /θ/.',
    rewardPhonemeIds: ['sh', 'ch', 'th_unvoiced', 'th_voiced'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Ship', highlightToken: 'sh', phonemeId: 'sh', meaningVi: 'sh /ʃ/ chu môi — Con tàu', heroActionLineEn: 'Sh! Sail the big ship!', visualWordKey: 'goat_boat', emoji: '🚢', visemeKey: 'sh' },
      { id: 's2', wordOrPhraseEn: 'Chick', highlightToken: 'ch', phonemeId: 'ch', meaningVi: 'ch /tʃ/ bật mạnh — Gà con', heroActionLineEn: 'Chirp chirp little chick!', visualWordKey: 'chick_chip', emoji: '🐥', visemeKey: 'ch' },
      { id: 's3', wordOrPhraseEn: 'Three', highlightToken: 'th', phonemeId: 'th_unvoiced', meaningVi: 'th /θ/ đặt lưỡi giữa răng — Số ba', heroActionLineEn: 'One, two, three!', visualWordKey: 'star', emoji: '3️⃣', visemeKey: 'th_unvoiced' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u5_4_a',
        instructionVi: 'Chọn đối thủ mang âm ghép SH (/ʃ/ — Ship)!',
        promptAudioEn: 'Find Ship!',
        targetBadge: 'Âm /ʃ/ • SH',
        hintPhonemeId: 'sh',
        options: [
          { id: 'o1', labelEn: 'Ship', subLabelVi: 'sh - i - p', phonemeOrWord: 'ship', speakTextEn: 'Ship', emoji: '🚢', visualWordKey: 'goat_boat', isCorrect: true },
          { id: 'o2', labelEn: 'Chick', subLabelVi: 'ch - i - ck', phonemeOrWord: 'chick', speakTextEn: 'Chick', emoji: '🐥', visualWordKey: 'chick_chip', isCorrect: false },
          { id: 'o3', labelEn: 'Three', subLabelVi: 'th - r - ee', phonemeOrWord: 'three', speakTextEn: 'Three', emoji: '3️⃣', visualWordKey: 'star', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u5_4_a', speakerPromptEn: 'Fish in the ship!', childTargetEn: 'Fish in the ship!', meaningVi: 'Chu môi đọc chuẩn /ʃ/: "Fish in the ship!"', hintPhonemeId: 'sh', visualWordKey: 'goat_boat', emoji: '🐟', acceptableKeywords: ['fish', 'ship', 'in the ship'] },
      { id: 'ed_u5_4_b', speakerPromptEn: 'Three chicks!', childTargetEn: 'Three chicks!', meaningVi: 'Đọc rõ cả /θ/ và /tʃ/: "Three chicks!"', hintPhonemeId: 'ch', visualWordKey: 'chick_chip', emoji: '🐥', acceptableKeywords: ['three', 'chick', 'chicks'] },
    ],
    bossRounds: [
      { id: 'bs_u5_4', speakerPromptEn: 'This ship has three chicks!', childTargetEn: 'This ship has three chicks!', meaningVi: 'Khóa hạ đối thủ với: "This ship has three chicks!"', hintPhonemeId: 'th_voiced', visualWordKey: 'chick_chip', emoji: '⚔️', acceptableKeywords: ['this', 'ship', 'three', 'chick', 'chicks'] },
    ],
  },

  // ================= WORLD 6: 6–8 TUỔI (OXFORD L5 + CAMBRIDGE STARTERS BOSS) =================
  {
    id: 'u6_1',
    worldId: 6,
    unitNumber: 1,
    titleEn: 'Galaxy Diphthongs (ar, or, ou, oi)',
    titleVi: 'Âm R-Controlled & Nguyên Âm Trượt',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Oxford Phonics World L5 • Vần Nâng Cao',
    summaryVi: 'Chinh phục nhóm âm nâng cao cuối cùng: Star, Fork, Cloud, Coin, Moon.',
    rewardPhonemeIds: ['ar', 'or', 'ou', 'oi', 'oo_long'],
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Star', highlightToken: 'ar', phonemeId: 'ar', meaningVi: 'ar /ɑːr/ — Ngôi sao', heroActionLineEn: 'Look at the bright star!', visualWordKey: 'star', emoji: '⭐' },
      { id: 's2', wordOrPhraseEn: 'Coin', highlightToken: 'oi', phonemeId: 'oi', meaningVi: 'oi /ɔɪ/ — Đồng xu vàng', heroActionLineEn: 'Find the gold coin!', visualWordKey: 'star', emoji: '🪙' },
      { id: 's3', wordOrPhraseEn: 'Moon', highlightToken: 'oo', phonemeId: 'oo_long', meaningVi: 'oo /uː/ — Mặt trăng', heroActionLineEn: 'Fly to the moon!', visualWordKey: 'moon_spoon', emoji: '🌙' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u6_1_a',
        instructionVi: 'Tìm đối thủ mang vần OI ("Coin") để mở kho báu vũ trụ!',
        promptAudioEn: 'Find Coin!',
        targetBadge: 'Vần OI • Coin',
        hintPhonemeId: 'oi',
        options: [
          { id: 'o1', labelEn: 'Coin', subLabelVi: 'c - oi - n', phonemeOrWord: 'coin', speakTextEn: 'Coin', emoji: '🪙', visualWordKey: 'star', isCorrect: true },
          { id: 'o2', labelEn: 'Cloud', subLabelVi: 'cl - ou - d', phonemeOrWord: 'cloud', speakTextEn: 'Cloud', emoji: '☁️', visualWordKey: 'clown_cloud', isCorrect: false },
          { id: 'o3', labelEn: 'Fork', subLabelVi: 'f - or - k', phonemeOrWord: 'fork', speakTextEn: 'Fork', emoji: '🍴', visualWordKey: 'fork', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u6_1_a', speakerPromptEn: 'Fly to the moon!', childTargetEn: 'Fly to the moon!', meaningVi: 'Đọc tự tin: "Fly to the moon!"', visualWordKey: 'moon_spoon', emoji: '🌙', acceptableKeywords: ['fly', 'moon', 'to the moon'] },
      { id: 'ed_u6_1_b', speakerPromptEn: 'Gold coin!', childTargetEn: 'Gold coin!', meaningVi: 'Đọc rõ: "A golden coin in the park!"', visualWordKey: 'farmer_barn', emoji: '🪙', acceptableKeywords: ['coin', 'gold', 'golden', 'park'] },
    ],
    bossRounds: [
      { id: 'bs_u6_1', speakerPromptEn: 'Reach the star!', childTargetEn: 'Reach the star!', meaningVi: 'Tung chiêu: "Reach the star above the cloud!"', visualWordKey: 'clown_cloud', emoji: '🌠', acceptableKeywords: ['reach', 'star', 'cloud'] },
    ],
  },
  {
    id: 'u6_2',
    worldId: 6,
    unitNumber: 2,
    titleEn: 'Hero Powers: I Can...!',
    titleVi: 'Siêu Năng Lực: I Can Fly & Speak',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Cambridge Pre-A1 Starters • Động Từ Khuyết Thiếu Can',
    summaryVi: 'Hỏi và đáp năng lực bản thân: Can you fly? Yes, I can! I can read.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'I can fly!', meaningVi: 'Mình có thể bay cao!', heroActionLineEn: 'Watch me! I can fly!', visualWordKey: 'kite', emoji: '🦸' },
      { id: 's2', wordOrPhraseEn: 'I can read!', meaningVi: 'Mình có thể tự đọc sách!', heroActionLineEn: 'I can read English books!', visualWordKey: 'good_book', emoji: '📖' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u6_2_a',
        instructionVi: 'Chọn siêu năng lực ĐỌC SÁCH ("Read")!',
        promptAudioEn: 'Find Read!',
        targetBadge: '📖 Read',
        options: [
          { id: 'o1', labelEn: 'Read', subLabelVi: 'Đọc sách', phonemeOrWord: 'read', speakTextEn: 'Read', emoji: '📖', visualWordKey: 'good_book', isCorrect: true },
          { id: 'o2', labelEn: 'Swim', subLabelVi: 'Bơi lội', phonemeOrWord: 'swim', speakTextEn: 'Swim', emoji: '🏊', visualWordKey: 'goat_boat', isCorrect: false },
          { id: 'o3', labelEn: 'Draw', subLabelVi: 'Vẽ tranh', phonemeOrWord: 'draw', speakTextEn: 'Draw', emoji: '🎨', visualWordKey: 'pen', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u6_2_a', speakerPromptEn: 'Yes, I can jump!', childTargetEn: 'Yes, I can jump!', meaningVi: 'Trả lời chuẩn Cambridge Starters: "Yes, I can!"', visualWordKey: 'frog', emoji: '✅', acceptableKeywords: ['yes', 'can', 'i can', 'yes i can'] },
      { id: 'ed_u6_2_b', speakerPromptEn: 'I can fly high!', childTargetEn: 'I can fly high!', meaningVi: 'Nói dõng dạc: "I can fly!"', visualWordKey: 'star', emoji: '🚀', acceptableKeywords: ['fly', 'can fly', 'i can fly'] },
    ],
    bossRounds: [
      { id: 'bs_u6_2', speakerPromptEn: 'I can speak English!', childTargetEn: 'I can speak English!', meaningVi: 'Khẳng định bản lĩnh: "Yes, I can speak English!"', visualWordKey: 'leo', emoji: '🏆', acceptableKeywords: ['yes', 'can', 'speak', 'english'] },
    ],
  },
  {
    id: 'u6_3',
    worldId: 6,
    unitNumber: 3,
    titleEn: 'Where Is It? (In / On / Under)',
    titleVi: 'Truy Tìm Vị Trí (In / On / Under)',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Cambridge Pre-A1 Starters • Giới Từ Không Gian',
    summaryVi: 'Mô tả vị trí vật thể trên chiến trường bằng giới từ in, on, under.',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'In the box', meaningVi: 'Ở bên trong hộp', heroActionLineEn: 'The fox is in the box!', visualWordKey: 'fox_box', emoji: '📦' },
      { id: 's2', wordOrPhraseEn: 'On the log', meaningVi: 'Ở bên trên khúc gỗ', heroActionLineEn: 'The frog is on the log!', visualWordKey: 'frog_log', emoji: '🪵' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u6_3_a',
        instructionVi: 'Chọn đúng mô tả: Ở BÊN TRONG hộp ("In the box")!',
        promptAudioEn: 'Find In the box!',
        targetBadge: '📦 In the box',
        options: [
          { id: 'o1', labelEn: 'In the box', subLabelVi: 'Trong hộp', phonemeOrWord: 'in', speakTextEn: 'In the box', emoji: '📦', visualWordKey: 'fox_box', isCorrect: true },
          { id: 'o2', labelEn: 'On the rug', subLabelVi: 'Trên thảm', phonemeOrWord: 'on', speakTextEn: 'On the rug', emoji: '🧶', visualWordKey: 'bug_rug', isCorrect: false },
          { id: 'o3', labelEn: 'Under the tree', subLabelVi: 'Dưới gốc cây', phonemeOrWord: 'under', speakTextEn: 'Under the tree', emoji: '🌳', visualWordKey: 'bee_tree', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u6_3_a', speakerPromptEn: 'The cat is on the mat!', childTargetEn: 'The cat is on the mat!', meaningVi: 'Trả lời vị trí: "On the mat!"', visualWordKey: 'cat_mat', emoji: '🐱', acceptableKeywords: ['on', 'mat', 'on the mat'] },
      { id: 'ed_u6_3_b', speakerPromptEn: 'Under the moon!', childTargetEn: 'Under the moon!', meaningVi: 'Đáp nhanh: "Under the moon!"', visualWordKey: 'moon_spoon', emoji: '🥄', acceptableKeywords: ['under', 'moon', 'under the moon'] },
    ],
    bossRounds: [
      { id: 'bs_u6_3', speakerPromptEn: 'In the castle!', childTargetEn: 'In the castle!', meaningVi: 'Đọc câu chiến thắng: "In the castle!"', visualWordKey: 'king_ring', emoji: '🏰', acceptableKeywords: ['in', 'castle', 'king'] },
    ],
  },
  {
    id: 'u6_4',
    worldId: 6,
    unitNumber: 4,
    titleEn: 'Grand Galaxy Showdown',
    titleVi: 'Đại Chiến Ngân Hà Anh Hùng',
    ageBand: '6–8 Tuổi',
    methodologyTag: 'Grand Mastery • Hội Thoại Tổng Hợp Phản Xạ',
    summaryVi: 'Thử thách tổng hợp phát âm, từ vựng và phản xạ câu đầy đủ bảo vệ dải ngân hà!',
    cutsceneSlides: [
      { id: 's1', wordOrPhraseEn: 'Hello, I am ready!', meaningVi: 'Xin chào, mình đã sẵn sàng!', heroActionLineEn: 'Hello! I am ready to win!', visualWordKey: 'star', emoji: '⚡' },
      { id: 's2', wordOrPhraseEn: 'English is fun!', meaningVi: 'Học tiếng Anh thật vui!', heroActionLineEn: 'Speaking English is super fun!', visualWordKey: 'leo', emoji: '🎉' },
    ],
    targetHuntRounds: [
      {
        id: 'th_u6_4_a',
        instructionVi: 'Bắt lấy Vương Miện Chiến Thắng ("King Crown")!',
        promptAudioEn: 'Find the King!',
        targetBadge: '👑 King',
        options: [
          { id: 'o1', labelEn: 'King', subLabelVi: 'Nhà vua chiến thắng', phonemeOrWord: 'king', speakTextEn: 'King', emoji: '👑', visualWordKey: 'king_ring', isCorrect: true },
          { id: 'o2', labelEn: 'Cloud', subLabelVi: 'Đám mây', phonemeOrWord: 'cloud', speakTextEn: 'Cloud', emoji: '☁️', visualWordKey: 'clown_cloud', isCorrect: false },
          { id: 'o3', labelEn: 'Bug', subLabelVi: 'Chú bọ', phonemeOrWord: 'bug', speakTextEn: 'Bug', emoji: '🐞', visualWordKey: 'bug_rug', isCorrect: false },
        ],
      },
    ],
    echoDuelRounds: [
      { id: 'ed_u6_4_a', speakerPromptEn: 'I am brave and happy!', childTargetEn: 'I am brave and happy!', meaningVi: 'Khẩu hiệu anh hùng: "I am brave and happy!"', visualWordKey: 'star', emoji: '🦸', acceptableKeywords: ['brave', 'happy', 'i am'] },
      { id: 'ed_u6_4_b', speakerPromptEn: 'Yes, I can!', childTargetEn: 'Yes, I can!', meaningVi: 'Đáp dứt khoát: "Yes, I can!"', visualWordKey: 'leo', emoji: '🌍', acceptableKeywords: ['yes', 'can', 'i can'] },
    ],
    bossRounds: [
      { id: 'bs_u6_4', speakerPromptEn: 'English is fun!', childTargetEn: 'English is fun!', meaningVi: 'Hô vang khẩu hiệu cuối cùng: "English is fun!"', visualWordKey: 'star', emoji: '🏆', acceptableKeywords: ['english', 'fun', 'english is fun'] },
    ],
  },
];
