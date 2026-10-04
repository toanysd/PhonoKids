import { MinimalPairItem } from '../types/phonics';

export const JAPANESE_MINIMAL_PAIRS: MinimalPairItem[] = [
  // 1. TRƯỜNG ÂM (CHOUON / 長音)
  {
    id: 'ja_mp_chouon_1',
    pairName: 'Trường âm: おばさん vs おばあさん (aa ngân dài)',
    phonemeA: 'おばあさん',
    phonemeB: 'おばさん',
    questionPrompt: 'Bé hãy lắng nghe và chọn đúng: おばあさん (Bà ngoại) nhé!',
    targetWord: 'おばあさん',
    distractorWord: 'おばさん',
    correctPhoneme: 'おばあさん',
    targetEmoji: '👵',
    distractorEmoji: '👩',
    hintVi: 'Âm "aa" kéo dài gấp đôi một nhịp: おばあさん (bà) vs おばさん (cô/dì).'
  },
  {
    id: 'ja_mp_chouon_2',
    pairName: 'Trường âm: ゆき (Tuyết) vs ゆうき (Dũng khí)',
    phonemeA: 'ゆうき',
    phonemeB: 'ゆき',
    questionPrompt: 'Bé hãy lắng nghe và tìm: ゆうき (Lòng dũng cảm) nhé!',
    targetWord: 'ゆうき',
    distractorWord: 'ゆき',
    correctPhoneme: 'ゆうき',
    targetEmoji: '🦁',
    distractorEmoji: '❄️',
    hintVi: 'Âm "uu" ngân dài 2 nhịp vỗ tay: ゆうき (dũng khí) vs ゆき (tuyết trắng).'
  },
  {
    id: 'ja_mp_chouon_3',
    pairName: 'Trường âm: おじさん (Chú) vs おじいさん (Ông)',
    phonemeA: 'おじいさん',
    phonemeB: 'おじさん',
    questionPrompt: 'Bé hãy nghe xem đâu là từ: おじいさん (Ông nội/ông ngoại)?',
    targetWord: 'おじいさん',
    distractorWord: 'おじさん',
    correctPhoneme: 'おじいさん',
    targetEmoji: '👴',
    distractorEmoji: '👨',
    hintVi: 'Âm "ii" kéo dài một nhịp hơi: おじいさん (ông) vs おじさん (chú/bác).'
  },
  {
    id: 'ja_mp_chouon_4',
    pairName: 'Trường âm: ここ (Ở đây) vs こうこう (Trường cấp 3)',
    phonemeA: 'こうこう',
    phonemeB: 'ここ',
    questionPrompt: 'Bé hãy chọn từ có trường âm "ou": こうこう nhé!',
    targetWord: 'こうこう',
    distractorWord: 'ここ',
    correctPhoneme: 'こうこう',
    targetEmoji: '🏫',
    distractorEmoji: '📍',
    hintVi: 'Âm "ou" ngân dài hai lần: kou-kou (trường học) vs ko-ko (ở đây).'
  },
  {
    id: 'ja_mp_chouon_5',
    pairName: 'Trường âm: ビル (Tòa nhà) vs ビール (Bia / Nước ngọt có ga)',
    phonemeA: 'ビール',
    phonemeB: 'ビル',
    questionPrompt: 'Bé hãy lắng nghe và chọn từ kéo dài: ビール nhé!',
    targetWord: 'ビール',
    distractorWord: 'ビル',
    correctPhoneme: 'ビール',
    targetEmoji: '🍺',
    distractorEmoji: '🏢',
    hintVi: 'Katakana có gạch ngang "ー" kéo dài âm: ビール (biiru) vs ビル (biru).'
  },

  // 2. ÂM NGẮT (SOKUON / 促音 - Chữ っ nhỏ ngắt nhịp)
  {
    id: 'ja_mp_sokuon_1',
    pairName: 'Âm ngắt: いて (Ở/Viết) vs いって (Đi/Nói)',
    phonemeA: 'いって',
    phonemeB: 'いて',
    questionPrompt: 'Bé nghe xem từ nào có khoảng dừng ngắt nhịp "tt": いって?',
    targetWord: 'いって',
    distractorWord: 'いて',
    correctPhoneme: 'いって',
    targetEmoji: '🚶',
    distractorEmoji: '✍️',
    hintVi: 'Chữ っ nhỏ tạo khoảng nín thở 1 nhịp: it-te (đi thôi) vs i-te (ở đây).'
  },
  {
    id: 'ja_mp_sokuon_2',
    pairName: 'Âm ngắt: かこ (Quá khứ) vs かっこ (Dấu ngoặc)',
    phonemeA: 'かっこ',
    phonemeB: 'かこ',
    questionPrompt: 'Bé hãy tìm từ có âm ngắt "kk": かっこ (Dấu ngoặc)!',
    targetWord: 'かっこ',
    distractorWord: 'かこ',
    correctPhoneme: 'かっこ',
    targetEmoji: '【】',
    distractorEmoji: '⏳',
    hintVi: 'Chữ っ nhỏ chặn hơi ở vòm họng: kak-ko (dấu ngoặc) vs ka-ko (quá khứ).'
  },
  {
    id: 'ja_mp_sokuon_3',
    pairName: 'Âm ngắt: おと (Âm thanh) vs おっと (Chồng/Bố)',
    phonemeA: 'おっと',
    phonemeB: 'おと',
    questionPrompt: 'Bé hãy lắng nghe và chọn: おっと nhé!',
    targetWord: 'おっと',
    distractorWord: 'おと',
    correctPhoneme: 'おっと',
    targetEmoji: '🤵',
    distractorEmoji: '🔔',
    hintVi: 'Âm ngắt giữ lại 1 phách: ot-to vs o-to (tiếng chuông reng).'
  },
  {
    id: 'ja_mp_sokuon_4',
    pairName: 'Âm ngắt: まち (Thị trấn) vs まっち (Que diêm)',
    phonemeA: 'まっち',
    phonemeB: 'まち',
    questionPrompt: 'Bé hãy chọn từ có âm ngắt "cchi": まっち (Que diêm)!',
    targetWord: 'まっち',
    distractorWord: 'まち',
    correctPhoneme: 'まっち',
    targetEmoji: '🔥',
    distractorEmoji: '🏘️',
    hintVi: 'Ngắt nhịp trước chi: mat-chi (que diêm) vs ma-chi (thị trấn phố xá).'
  },

  // 3. THANH ÂM VS ĐỤC ÂM (DAKUON / 清音・濁音)
  {
    id: 'ja_mp_dakuon_1',
    pairName: 'Đục âm: かき (Quả hồng) vs かぎ (Chìa khóa)',
    phonemeA: 'かぎ',
    phonemeB: 'かき',
    questionPrompt: 'Bé hãy nghe xem đâu là: かぎ (Chiếc chìa khóa)?',
    targetWord: 'かぎ',
    distractorWord: 'かき',
    correctPhoneme: 'かぎ',
    targetEmoji: '🔑',
    distractorEmoji: '🍊',
    hintVi: 'Âm /k/ nhẹ không rung cổ; âm /g/ có dấu ten-ten "゛" rung mạnh trong họng.'
  },
  {
    id: 'ja_mp_dakuon_2',
    pairName: 'Đục âm: さる (Con khỉ) vs ざる (Cái rổ)',
    phonemeA: 'ざる',
    phonemeB: 'さる',
    questionPrompt: 'Bé hãy lắng nghe và chọn: ざる (Cái rổ tre) nhé!',
    targetWord: 'ざる',
    distractorWord: 'さる',
    correctPhoneme: 'ざる',
    targetEmoji: '🧺',
    distractorEmoji: '🐒',
    hintVi: 'Chữ さ phát âm /s/ xì hơi; chữ ざ thêm ten-ten rung họng /z/.'
  },
  {
    id: 'ja_mp_dakuon_3',
    pairName: 'Đục âm: はな (Bông hoa) vs ばな (Quả chuối / Bana)',
    phonemeA: 'はな',
    phonemeB: 'ばな',
    questionPrompt: 'Bé hãy tìm từ: はな (Bông hoa xinh xắn) nhé!',
    targetWord: 'はな',
    distractorWord: 'ばな',
    correctPhoneme: 'はな',
    targetEmoji: '🌸',
    distractorEmoji: '🍌',
    hintVi: 'Âm /h/ thở nhẹ từ cuống họng; âm /b/ mím môi bật ra tiếng rung.'
  },

  // 4. CAO ĐỘ ÂM ĐIỆU (PITCH ACCENT)
  {
    id: 'ja_mp_pitch_1',
    pairName: 'Cao độ: はし (Cây cầu [Cao-Thấp]) vs はし (Đôi đũa [Thấp-Cao])',
    phonemeA: 'はし',
    phonemeB: 'はし',
    questionPrompt: 'Bé hãy lắng nghe cao độ: はし (Cây cầu bắc qua sông)!',
    targetWord: 'はし (Cầu)',
    distractorWord: 'はし (Đũa)',
    correctPhoneme: 'はし (Cầu)',
    targetEmoji: '🌉',
    distractorEmoji: '🥢',
    hintVi: 'Cây cầu 橋 đọc cao ở âm đầu (HA-shi); đôi đũa 箸 đọc cao ở âm sau (ha-SHI).'
  },
  {
    id: 'ja_mp_pitch_2',
    pairName: 'Cao độ: あめ (Cơn mưa [Cao-Thấp]) vs あめ (Viên kẹo [Thấp-Cao])',
    phonemeA: 'あめ',
    phonemeB: 'あめ',
    questionPrompt: 'Bé hãy nghe cao độ: あめ (Cơn mưa rơi tí tách)!',
    targetWord: 'あめ (Mưa)',
    distractorWord: 'あめ (Kẹo)',
    correctPhoneme: 'あめ (Mưa)',
    targetEmoji: '🌧️',
    distractorEmoji: '🍬',
    hintVi: 'Cơn mưa 雨 đọc cao ở âm đầu (A-me); viên kẹo 飴 đọc cao ở âm sau (a-ME).'
  }
];
