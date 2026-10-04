import { PhonemeInfo, PhonicsGroup } from '../types/phonics';

export const PHONICS_GROUPS: PhonicsGroup[] = [
  {
    groupNumber: 1,
    stage: 1,
    stageName: "Stage 1: Mầm non bé",
    ageBand: "3 – 4 Tuổi",
    name: "Nhóm 1: Những âm đầu tiên",
    islandTheme: "Đảo Mặt Trời & Rừng Rậm",
    themeColor: "from-amber-400 to-orange-500",
    islandEmoji: "🏝️",
    phonemes: ['s', 'a', 't', 'i', 'p', 'n'],
    decodableWords: ['sat', 'pat', 'tap', 'pin', 'tin', 'sit', 'pan', 'tan', 'ant']
  },
  {
    groupNumber: 2,
    stage: 1,
    stageName: "Stage 1: Mầm non bé",
    ageBand: "3 – 4 Tuổi",
    name: "Nhóm 2: Động vật thân quen",
    islandTheme: "Đảo Nông Trại Vui Vẻ",
    themeColor: "from-emerald-400 to-teal-600",
    islandEmoji: "🚜",
    phonemes: ['c', 'e', 'h', 'r', 'm', 'd'],
    decodableWords: ['cat', 'hen', 'rat', 'man', 'dog', 'kid', 'red', 'hat', 'cup']
  },
  {
    groupNumber: 3,
    stage: 2,
    stageName: "Stage 2: Mầm non lớn",
    ageBand: "4 – 5 Tuổi",
    name: "Nhóm 3: Biển xanh phiêu lưu",
    islandTheme: "Đảo Hải Tặc Thân Thiện",
    themeColor: "from-sky-400 to-blue-600",
    islandEmoji: "🐬",
    phonemes: ['g', 'o', 'u', 'l', 'f', 'b'],
    decodableWords: ['sun', 'bus', 'fog', 'leg', 'box', 'frog', 'log', 'bed', 'pig']
  },
  {
    groupNumber: 4,
    stage: 2,
    stageName: "Stage 2: Mầm non lớn",
    ageBand: "4 – 5 Tuổi",
    name: "Nhóm 4: Cầu vồng nguyên âm đôi",
    islandTheme: "Đảo Cầu Vồng Thần Tiên",
    themeColor: "from-fuchsia-400 to-pink-600",
    islandEmoji: "🌈",
    phonemes: ['ai', 'j', 'oa', 'ie', 'ee', 'or'],
    decodableWords: ['rain', 'boat', 'pie', 'tree', 'fork', 'jam', 'snail', 'coat']
  },
  {
    groupNumber: 5,
    stage: 3,
    stageName: "Stage 3: Tiền tiểu học",
    ageBand: "5 – 6 Tuổi",
    name: "Nhóm 5: Gió lốc & Sấm chớp",
    islandTheme: "Đảo Rừng Nhiệt Đới",
    themeColor: "from-purple-400 to-indigo-600",
    islandEmoji: "⚡",
    phonemes: ['z', 'w', 'ng', 'v', 'oo_short', 'oo_long'],
    decodableWords: ['zoo', 'wind', 'ring', 'van', 'book', 'moon', 'sing', 'king']
  },
  {
    groupNumber: 6,
    stage: 3,
    stageName: "Stage 3: Tiền tiểu học",
    ageBand: "5 – 6 Tuổi",
    name: "Nhóm 6: Bí mật đầm lầy",
    islandTheme: "Đảo Phép Thuật",
    themeColor: "from-rose-400 to-red-600",
    islandEmoji: "🪄",
    phonemes: ['y', 'x', 'ch', 'sh', 'th_unvoiced', 'th_voiced'],
    decodableWords: ['yes', 'box', 'chip', 'ship', 'thin', 'this', 'that', 'fish']
  },
  {
    groupNumber: 7,
    stage: 4,
    stageName: "Stage 4: Tiểu học Lớp 1-2",
    ageBand: "6 – 8 Tuổi",
    name: "Nhóm 7: Vương quốc Kho Báu",
    islandTheme: "Đảo Vương Quốc Vàng",
    themeColor: "from-yellow-400 to-amber-600",
    islandEmoji: "👑",
    phonemes: ['qu', 'ou', 'oi', 'ue', 'er', 'ar'],
    decodableWords: ['queen', 'cloud', 'coin', 'blue', 'star', 'park', 'sister', 'clown']
  }
];

export const PHONEMES_DATA: Record<string, PhonemeInfo> = {
  // ===================== NHÓM 1 (STAGE 1: 3-4 Tuổi) =====================
  's': {
    id: 's',
    grapheme: 's',
    ipa: '/s/',
    group: 1,
    stage: 1,
    soundDescription: 'Âm xì hơi nhẹ nhàng như chú rắn trườn',
    sampleWords: [
      { word: 'sun', meaningVi: 'mặt trời', emoji: '☀️' },
      { word: 'snake', meaningVi: 'con rắn', emoji: '🐍' },
      { word: 'sock', meaningVi: 'đôi tất', emoji: '🧦' }
    ],
    tprAction: {
      title: 'Uốn lượn như rắn',
      titleEn: 'Weave like a snake',
      chantEn: 'The snake is in the grass!',
      descriptionVi: 'Uốn lượn bàn tay theo hình chữ S như chú rắn trườn và xì hơi nhẹ nhàng: sssss!',
      actionPrompt: 'The snake is in the grass!',
      icon: '🐍'
    },
    mouthGuide: {
      mouthShape: 'teeth_together',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'continuous',
      instructionsVi: 'Khép hai hàm răng lại gần nhau, mỉm cười nhẹ và thổi luồng hơi mát qua kẽ răng không rung cổ họng!'
    },
    color: 'bg-yellow-400'
  },
  'a': {
    id: 'a',
    grapheme: 'a',
    ipa: '/æ/',
    group: 1,
    stage: 1,
    soundDescription: 'Âm a ngắn, há miệng rộng như cắn quả táo',
    sampleWords: [
      { word: 'ant', meaningVi: 'con kiến', emoji: '🐜' },
      { word: 'apple', meaningVi: 'quả táo', emoji: '🍎' },
      { word: 'axe', meaningVi: 'cái rìu', emoji: '🪓' }
    ],
    tprAction: {
      title: 'Đàn kiến bò trên tay',
      titleEn: 'Ants on my arm',
      chantEn: 'Ants on my arm, brushing them away!',
      descriptionVi: 'Dùng các đầu ngón tay nhón nhẹ trên cánh tay như đàn kiến nhỏ bò: a, a, a!',
      actionPrompt: 'Ants on my arm, brushing them away!',
      icon: '🐜'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Há miệng thật to hình bầu dục đứng, lưỡi hạ thấp phẳng và phát âm dứt khoát /æ/!'
    },
    color: 'bg-red-400'
  },
  't': {
    id: 't',
    grapheme: 't',
    ipa: '/t/',
    group: 1,
    stage: 1,
    soundDescription: 'Âm gõ dứt khoát như đồng hồ tích tắc',
    sampleWords: [
      { word: 'tennis', meaningVi: 'quần vợt', emoji: '🎾' },
      { word: 'tiger', meaningVi: 'con hổ', emoji: '🐯' },
      { word: 'tap', meaningVi: 'vòi nước', emoji: '🚰' }
    ],
    tprAction: {
      title: 'Xem trận đấu quần vợt',
      titleEn: 'Watch the tennis game',
      chantEn: 'Turn your head and watch the tennis game!',
      descriptionVi: 'Nghiêng đầu qua lại theo dõi quả bóng tennis nảy: t, t, t!',
      actionPrompt: 'Turn your head and watch the tennis game!',
      icon: '🎾'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'puff',
      instructionsVi: 'Đầu lưỡi chạm nướu răng trên, bật nhẹ một luồng hơi ra mà không rung dây thanh quản!'
    },
    color: 'bg-blue-400'
  },
  'i': {
    id: 'i',
    grapheme: 'i',
    ipa: '/ɪ/',
    group: 1,
    stage: 1,
    soundDescription: 'Âm i ngắn, nhẹ và bật nhanh',
    sampleWords: [
      { word: 'ink', meaningVi: 'lọ mực', emoji: '🖋️' },
      { word: 'iguana', meaningVi: 'kỳ nhông', emoji: '🦎' },
      { word: 'igloo', meaningVi: 'lều tuyết', emoji: '🏕️' }
    ],
    tprAction: {
      title: 'Chú chuột nhỏ chùi râu',
      titleEn: 'Inky the little mouse',
      chantEn: 'Inky the mouse is squeaking in her house!',
      descriptionVi: 'Dùng hai ngón tay vuốt nhẹ hai bên má làm râu chuột kêu: i, i, i!',
      actionPrompt: 'Inky the mouse is squeaking in her house!',
      icon: '🐭'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Môi hơi hé sang hai bên nhẹ nhàng, phát âm âm /i/ rất ngắn và nhẹ!'
    },
    color: 'bg-emerald-400'
  },
  'p': {
    id: 'p',
    grapheme: 'p',
    ipa: '/p/',
    group: 1,
    stage: 1,
    soundDescription: 'Âm bật môi thổi nến sinh nhật',
    sampleWords: [
      { word: 'pan', meaningVi: 'cái chảo', emoji: '🍳' },
      { word: 'pig', meaningVi: 'chú lợn', emoji: '🐷' },
      { word: 'popcorn', meaningVi: 'bắp rang bơ', emoji: '🍿' }
    ],
    tprAction: {
      title: 'Thổi nến sinh nhật',
      titleEn: 'Puff out the candles',
      chantEn: 'Puff out the candles on the pink pig cake!',
      descriptionVi: 'Giơ một ngón tay làm ngọn nến sinh nhật và thổi phù nhẹ: p, p, p!',
      actionPrompt: 'Puff out the candles on the pink pig cake!',
      icon: '🕯️'
    },
    mouthGuide: {
      mouthShape: 'closed',
      tonguePosition: 'flat',
      airFlow: 'puff',
      instructionsVi: 'Mím chặt hai môi lại rồi bật luồng hơi gió ra ngoài dứt khoát! Đặt bàn tay trước miệng sẽ thấy làn gió mát.'
    },
    color: 'bg-pink-400'
  },
  'n': {
    id: 'n',
    grapheme: 'n',
    ipa: '/n/',
    group: 1,
    stage: 1,
    soundDescription: 'Âm mũi ngân vang như tiếng máy bay',
    sampleWords: [
      { word: 'net', meaningVi: 'cái lưới', emoji: '🥅' },
      { word: 'nest', meaningVi: 'tổ chim', emoji: '🪺' },
      { word: 'nut', meaningVi: 'hạt dẻ', emoji: '🌰' }
    ],
    tprAction: {
      title: 'Máy bay sải cánh',
      titleEn: 'Aeroplane in the sky',
      chantEn: 'Hear the aeroplane flying high in the sky!',
      descriptionVi: 'Dang hai tay sang ngang nghiêng người như máy bay sải cánh: nnnnn!',
      actionPrompt: 'Hear the aeroplane flying high in the sky!',
      icon: '✈️'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'nasal',
      instructionsVi: 'Áp toàn bộ đầu lưỡi lên vòm họng trên, mở miệng nhẹ và để âm thanh rung thoát ra đường mũi: nnnn!'
    },
    color: 'bg-purple-400'
  },

  // ===================== NHÓM 2 (STAGE 1: 3-4 Tuổi) =====================
  'c': {
    id: 'c',
    grapheme: 'c • k',
    ipa: '/k/',
    group: 2,
    stage: 1,
    soundDescription: 'Âm khấc bật sâu từ cuống họng',
    sampleWords: [
      { word: 'cat', meaningVi: 'con mèo', emoji: '🐱' },
      { word: 'cup', meaningVi: 'cái cốc', emoji: '☕' },
      { word: 'kite', meaningVi: 'con diều', emoji: '🪁' }
    ],
    tprAction: {
      title: 'Gõ phách castanet',
      titleEn: 'Click the castanets',
      chantEn: 'Clicking castanets, click and clap!',
      descriptionVi: 'Gõ nhẹ các đầu ngón tay như gõ phách castanet rộn rã: c, c, c!',
      actionPrompt: 'Clicking castanets, click and clap!',
      icon: '🪘'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'up_back',
      airFlow: 'puff',
      instructionsVi: 'Nâng cuống lưỡi chạm vòm miệng mềm phía trong rồi bật hơi giòn tan: /k/!'
    },
    color: 'bg-amber-500'
  },
  'e': {
    id: 'e',
    grapheme: 'e',
    ipa: '/e/',
    group: 2,
    stage: 1,
    soundDescription: 'Âm e ngắn gọn, đập vỏ trứng',
    sampleWords: [
      { word: 'egg', meaningVi: 'quả trứng', emoji: '🥚' },
      { word: 'elephant', meaningVi: 'con voi', emoji: '🐘' },
      { word: 'elbow', meaningVi: 'khuỷu tay', emoji: '💪' }
    ],
    tprAction: {
      title: 'Đập vỏ trứng vào chảo',
      titleEn: 'Crack the egg',
      chantEn: 'Crack the egg into the pan!',
      descriptionVi: 'Hai tay làm động tác gõ nhẹ quả trứng vào chảo rồi tách đôi: e, e, e!',
      actionPrompt: 'Crack the egg into the pan!',
      icon: '🥚'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Khóe miệng mở vừa sang hai bên, lưỡi nằm tự nhiên và phát âm ngắn gọn /e/.'
    },
    color: 'bg-lime-400'
  },
  'h': {
    id: 'h',
    grapheme: 'h',
    ipa: '/h/',
    group: 2,
    stage: 1,
    soundDescription: 'Âm thở hổn hển như vừa chạy bộ mệt',
    sampleWords: [
      { word: 'hat', meaningVi: 'cái mũ', emoji: '🎩' },
      { word: 'hen', meaningVi: 'gà mái', emoji: '🐔' },
      { word: 'heart', meaningVi: 'trái tim', emoji: '❤️' }
    ],
    tprAction: {
      title: 'Nhảy nhót thở dốc',
      titleEn: 'Hop and pant',
      chantEn: 'Hop and hop, breathing out so fast!',
      descriptionVi: 'Nhảy chân sáo rồi đặt tay trước miệng thở dốc nhẹ: h, h, h!',
      actionPrompt: 'Hop and hop, breathing out so fast!',
      icon: '🏃'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'flat',
      airFlow: 'continuous',
      instructionsVi: 'Mở họng tự nhiên, đẩy luồng hơi ấm từ sâu trong phổi ra ngoài miệng: hhhhh.'
    },
    color: 'bg-teal-400'
  },
  'r': {
    id: 'r',
    grapheme: 'r',
    ipa: '/r/',
    group: 2,
    stage: 1,
    soundDescription: 'Âm gầm gừ như chú cún ngậm giẻ kéo',
    sampleWords: [
      { word: 'rat', meaningVi: 'chuột cống', emoji: '🐀' },
      { word: 'red', meaningVi: 'màu đỏ', emoji: '🔴' },
      { word: 'rabbit', meaningVi: 'chú thỏ', emoji: '🐰' }
    ],
    tprAction: {
      title: 'Chú cún vờn giẻ',
      titleEn: 'Puppy with a rag',
      chantEn: 'See the puppy rip the rag!',
      descriptionVi: 'Lắc nhẹ đầu sang hai bên như chú cún ngậm giẻ chơi đùa: rrrrr!',
      actionPrompt: 'See the puppy rip the rag!',
      icon: '🐶'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'curled',
      airFlow: 'voiced_hum',
      instructionsVi: 'Môi hơi chu tròn ra trước, đầu lưỡi cong lên hướng về vòm miệng nhưng không chạm: rrrrr.'
    },
    color: 'bg-rose-400'
  },
  'm': {
    id: 'm',
    grapheme: 'm',
    ipa: '/m/',
    group: 2,
    stage: 1,
    soundDescription: 'Âm mím môi khen món ăn ngon tuyệt',
    sampleWords: [
      { word: 'man', meaningVi: 'người đàn ông', emoji: '👨' },
      { word: 'moon', meaningVi: 'mặt trăng', emoji: '🌙' },
      { word: 'mango', meaningVi: 'quả xoài', emoji: '🥭' }
    ],
    tprAction: {
      title: 'Xoa bụng khen ngon',
      titleEn: 'Rub tummy for yummy food',
      chantEn: 'Rub your tummy, yummy food in my tummy!',
      descriptionVi: 'Xoa xoa bụng vòng tròn khen đồ ăn ngon miệng: mmmmm!',
      actionPrompt: 'Rub your tummy, yummy food in my tummy!',
      icon: '😋'
    },
    mouthGuide: {
      mouthShape: 'closed',
      tonguePosition: 'flat',
      airFlow: 'nasal',
      instructionsVi: 'Khép chặt hai môi lại với nhau, giữ luồng hơi rung qua mũi và cổ họng: mmmmm!'
    },
    color: 'bg-cyan-400'
  },
  'd': {
    id: 'd',
    grapheme: 'd',
    ipa: '/d/',
    group: 2,
    stage: 1,
    soundDescription: 'Âm gõ dùi trống trầm ấm có rung',
    sampleWords: [
      { word: 'dog', meaningVi: 'chú chó', emoji: '🐶' },
      { word: 'drum', meaningVi: 'cái trống', emoji: '🥁' },
      { word: 'duck', meaningVi: 'chú vịt', emoji: '🦆' }
    ],
    tprAction: {
      title: 'Đánh trống rộn ràng',
      titleEn: 'Play the drum',
      chantEn: 'Beat the drum, play and drum all day!',
      descriptionVi: 'Hai tay cầm dùi gõ trống nhịp nhàng: d, d, d!',
      actionPrompt: 'Beat the drum, play and drum all day!',
      icon: '🥁'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'puff',
      instructionsVi: 'Đầu lưỡi chạm nướu trên và bật mạnh ra kèm theo độ rung trầm ở cổ họng: /d/.'
    },
    color: 'bg-indigo-400'
  },

  // ===================== NHÓM 3 (STAGE 2: 4-5 Tuổi) =====================
  'g': {
    id: 'g',
    grapheme: 'g',
    ipa: '/ɡ/',
    group: 3,
    stage: 2,
    soundDescription: 'Âm nước trôi ùng ục xuống cống',
    sampleWords: [
      { word: 'girl', meaningVi: 'bé gái', emoji: '👧' },
      { word: 'gift', meaningVi: 'hộp quà', emoji: '🎁' },
      { word: 'guitar', meaningVi: 'đàn ghita', emoji: '🎸' }
    ],
    tprAction: {
      title: 'Xoáy nước cuốn trôi',
      titleEn: 'Water down the drain',
      chantEn: 'Water gurgles down the drain, glug glug glug!',
      descriptionVi: 'Xoay xoay bàn tay theo hình xoáy nước thoát xuống cống: g, g, g!',
      actionPrompt: 'Water gurgles down the drain, glug glug glug!',
      icon: '🌀'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'up_back',
      airFlow: 'voiced_hum',
      instructionsVi: 'Nâng cuống lưỡi lên chạm vòm họng mềm, bật hơi nhẹ có độ rung ở dây thanh quản: /ɡ/.'
    },
    color: 'bg-sky-400'
  },
  'o': {
    id: 'o',
    grapheme: 'o',
    ipa: '/ɒ/',
    group: 3,
    stage: 2,
    soundDescription: 'Âm o ngắn, bật tắt công tắc đèn',
    sampleWords: [
      { word: 'octopus', meaningVi: 'bạch tuộc', emoji: '🐙' },
      { word: 'orange', meaningVi: 'quả cam', emoji: '🍊' },
      { word: 'ox', meaningVi: 'con bò tót', emoji: '🐂' }
    ],
    tprAction: {
      title: 'Bật tắt công tắc đèn',
      titleEn: 'Switch on the light',
      chantEn: 'Time for bed, flick the switch on and off!',
      descriptionVi: 'Bấm ngón tay như bật công tắc đèn phòng: o, o, o!',
      actionPrompt: 'Time for bed, flick the switch on and off!',
      icon: '💡'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Chu nhẹ môi thành hình tròn nhỏ, phát âm ngắn gọn /ɒ/.'
    },
    color: 'bg-orange-400'
  },
  'u': {
    id: 'u',
    grapheme: 'u',
    ipa: '/ʌ/',
    group: 3,
    stage: 2,
    soundDescription: 'Âm u ngắn, giương ô che mưa',
    sampleWords: [
      { word: 'umbrella', meaningVi: 'cái ô che mưa', emoji: '☂️' },
      { word: 'up', meaningVi: 'lên cao', emoji: '⬆️' },
      { word: 'under', meaningVi: 'ở dưới', emoji: '👇' }
    ],
    tprAction: {
      title: 'Giương ô che mưa',
      titleEn: 'Open the umbrella',
      chantEn: 'Open up your umbrella in the rain!',
      descriptionVi: 'Hai tay đưa lên cao mở chiếc ô xinh xắn che mưa: u, u, u!',
      actionPrompt: 'Open up your umbrella in the rain!',
      icon: '☂️'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Mở họng tự nhiên, lưỡi nằm thư giãn ở đáy miệng, bật âm /ʌ/ dứt khoát.'
    },
    color: 'bg-blue-500'
  },
  'l': {
    id: 'l',
    grapheme: 'l',
    ipa: '/l/',
    group: 3,
    stage: 2,
    soundDescription: 'Âm đầu lưỡi liếm kẹo mút ngon lành',
    sampleWords: [
      { word: 'lollipop', meaningVi: 'kẹo mút', emoji: '🍭' },
      { word: 'lion', meaningVi: 'chú sư tử', emoji: '🦁' },
      { word: 'leaf', meaningVi: 'chiếc lá', emoji: '🍃' }
    ],
    tprAction: {
      title: 'Liếm kẹo mút ngọt ngào',
      titleEn: 'Lick the lollipop',
      chantEn: 'Licking a sweet and juicy lollipop!',
      descriptionVi: 'Giơ bàn tay cầm que kẹo mút và giả vờ liếm: l, l, l!',
      actionPrompt: 'Licking a sweet and juicy lollipop!',
      icon: '🍭'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'continuous',
      instructionsVi: 'Áp đầu lưỡi sát sau răng cửa trên, giữ hơi thoát ra hai bên cạnh lưỡi: lllll.'
    },
    color: 'bg-emerald-500'
  },
  'f': {
    id: 'f',
    grapheme: 'f',
    ipa: '/f/',
    group: 3,
    stage: 2,
    soundDescription: 'Âm xì hơi phao bơi xì lốp',
    sampleWords: [
      { word: 'fish', meaningVi: 'con cá', emoji: '🐟' },
      { word: 'fan', meaningVi: 'cái quạt', emoji: '🪭' },
      { word: 'frog', meaningVi: 'chú ếch', emoji: '🐸' }
    ],
    tprAction: {
      title: 'Xì hơi bóng bay cá',
      titleEn: 'Deflate the fish balloon',
      chantEn: 'Floating fish balloon is deflating softly!',
      descriptionVi: 'Hai lòng bàn tay từ từ chụm lại như quả bóng cá đang xì hơi: fffff!',
      actionPrompt: 'Floating fish balloon is deflating softly!',
      icon: '🎈'
    },
    mouthGuide: {
      mouthShape: 'lip_bite',
      tonguePosition: 'flat',
      airFlow: 'continuous',
      instructionsVi: 'Răng cửa trên chạm nhẹ vào môi dưới, thổi luồng hơi gió mát ra ngoài không rung cổ.'
    },
    color: 'bg-teal-500'
  },
  'b': {
    id: 'b',
    grapheme: 'b',
    ipa: '/b/',
    group: 3,
    stage: 2,
    soundDescription: 'Âm đập bóng bập bùng có rung cổ',
    sampleWords: [
      { word: 'ball', meaningVi: 'quả bóng', emoji: '⚽' },
      { word: 'bat', meaningVi: 'gậy bóng chày', emoji: '🏏' },
      { word: 'bear', meaningVi: 'chú gấu', emoji: '🐻' }
    ],
    tprAction: {
      title: 'Vung gậy đánh bóng chày',
      titleEn: 'Hit the baseball',
      chantEn: 'Swing the bat and hit the ball!',
      descriptionVi: 'Hai tay cầm gậy bóng chày vung mạnh đón bóng: b, b, b!',
      actionPrompt: 'Swing the bat and hit the ball!',
      icon: '⚾'
    },
    mouthGuide: {
      mouthShape: 'closed',
      tonguePosition: 'flat',
      airFlow: 'puff',
      instructionsVi: 'Mím chặt hai môi lại rồi bật nhẹ kèm theo rung giọng ở cổ họng: /b/.'
    },
    color: 'bg-indigo-500'
  },

  // ===================== NHÓM 4 (STAGE 2: 4-5 Tuổi) =====================
  'ai': {
    id: 'ai',
    grapheme: 'ai',
    ipa: '/eɪ/',
    group: 4,
    stage: 2,
    soundDescription: 'Âm ghé tai lắng nghe: Ai? Ai thế?',
    sampleWords: [
      { word: 'rain', meaningVi: 'cơn mưa', emoji: '🌧️' },
      { word: 'snail', meaningVi: 'chú ốc sên', emoji: '🐌' },
      { word: 'train', meaningVi: 'đoàn tàu', emoji: '🚂' }
    ],
    tprAction: {
      title: 'Khum tay lắng nghe',
      titleEn: 'Cup hand to ear',
      chantEn: 'Cup your ear, what did you say?',
      descriptionVi: 'Khum bàn tay áp vào vành tai lắng nghe bạn nói: ai? ai?',
      actionPrompt: 'Cup your ear, what did you say?',
      icon: '👂'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Mở miệng vừa phải rồi lướt nhẹ sang cười mỉm: eiii.'
    },
    color: 'bg-fuchsia-400'
  },
  'j': {
    id: 'j',
    grapheme: 'j',
    ipa: '/dʒ/',
    group: 4,
    stage: 2,
    soundDescription: 'Âm thạch rau câu lắc lư rung rinh',
    sampleWords: [
      { word: 'jam', meaningVi: 'mứt dâu', emoji: '🍓' },
      { word: 'jelly', meaningVi: 'thạch rau câu', emoji: '🍮' },
      { word: 'jug', meaningVi: 'cái bình nước', emoji: '🏺' }
    ],
    tprAction: {
      title: 'Lắc lư đĩa thạch',
      titleEn: 'Jelly on a plate',
      chantEn: 'Jelly on a plate, wobble and shake!',
      descriptionVi: 'Lắc lư đôi vai bập bùng như miếng thạch rau câu: j, j, j!',
      actionPrompt: 'Jelly on a plate, wobble and shake!',
      icon: '🍮'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'puff',
      instructionsVi: 'Chu môi nhẹ ra trước, đầu lưỡi chạm nướu trên và bật mạnh ra có rung: /dʒ/.'
    },
    color: 'bg-pink-500'
  },
  'oa': {
    id: 'oa',
    grapheme: 'oa',
    ipa: '/əʊ/',
    group: 4,
    stage: 2,
    soundDescription: 'Âm ngạc nhiên khi thấy con dê lái thuyền',
    sampleWords: [
      { word: 'boat', meaningVi: 'chiếc thuyền', emoji: '⛵' },
      { word: 'goat', meaningVi: 'chú dê', emoji: '🐐' },
      { word: 'coat', meaningVi: 'áo khoác ấm', emoji: '🧥' }
    ],
    tprAction: {
      title: 'Ngạc nhiên nhìn thuyền trôi',
      titleEn: 'Look at the goat in a boat',
      chantEn: 'Oh, look at the goat in a floating boat!',
      descriptionVi: 'Đưa tay ôm miệng ngạc nhiên thốt lên: oa! oa!',
      actionPrompt: 'Oh, look at the goat in a floating boat!',
      icon: '⛵'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Khởi đầu từ miệng mở tròn nhẹ rồi thu nhỏ môi lại thành chữ O tròn xoe.'
    },
    color: 'bg-purple-500'
  },
  'ie': {
    id: 'ie',
    grapheme: 'ie',
    ipa: '/aɪ/',
    group: 4,
    stage: 2,
    soundDescription: 'Âm chào chú thuyền trưởng: Aye aye, captain!',
    sampleWords: [
      { word: 'pie', meaningVi: 'chiếc bánh nướng', emoji: '🥧' },
      { word: 'tie', meaningVi: 'cà vạt', emoji: '👔' },
      { word: 'lie', meaningVi: 'nằm nghỉ', emoji: '🛏️' }
    ],
    tprAction: {
      title: 'Chào kiểu thuyền trưởng',
      titleEn: 'Salute the captain',
      chantEn: 'Stand up straight and salute the captain: Aye-aye, Captain!',
      descriptionVi: 'Đứng nghiêm giơ tay chào kiểu hải quân: ie, ie!',
      actionPrompt: 'Stand up straight and salute the captain: Aye-aye, Captain!',
      icon: '🫡'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Mở rộng miệng âm /a/ rồi thu nhẹ sang nụ cười mỉm /i/.'
    },
    color: 'bg-rose-500'
  },
  'ee': {
    id: 'ee',
    grapheme: 'ee',
    ipa: '/iː/',
    group: 4,
    stage: 2,
    soundDescription: 'Âm cười tít mắt kéo dài như chú lừa kêu',
    sampleWords: [
      { word: 'tree', meaningVi: 'cây xanh', emoji: '🌳' },
      { word: 'bee', meaningVi: 'chú ong vàng', emoji: '🐝' },
      { word: 'feet', meaningVi: 'đôi bàn chân', emoji: '🦶' }
    ],
    tprAction: {
      title: 'Vẫy tai chú lừa',
      titleEn: 'Donkey ears',
      chantEn: 'See the donkey flap his ears: Eeyore, eeyore!',
      descriptionVi: 'Đặt hai bàn tay lên đầu vẫy như tai chú lừa: ee, or, ee, or!',
      actionPrompt: 'See the donkey flap his ears: Eeyore, eeyore!',
      icon: '🐴'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Mỉm cười thật rộng sang hai bên khóe miệng, kéo dài âm /iː/ ngọt ngào.'
    },
    color: 'bg-amber-600'
  },
  'or': {
    id: 'or',
    grapheme: 'or',
    ipa: '/ɔː/',
    group: 4,
    stage: 2,
    soundDescription: 'Âm chú lừa vẫy tai xuống',
    sampleWords: [
      { word: 'fork', meaningVi: 'cái dĩa ăn', emoji: '🍴' },
      { word: 'corn', meaningVi: 'bắp ngô vàng', emoji: '🌽' },
      { word: 'horse', meaningVi: 'chú ngựa phi', emoji: '🐎' }
    ],
    tprAction: {
      title: 'Tiếng lừa gọi bạn',
      titleEn: 'Donkey calls across the meadow',
      chantEn: 'Hear the little donkey call across the meadow!',
      descriptionVi: 'Cụp xòe hai tay vẫy làm tai lừa kêu: or, or, or!',
      actionPrompt: 'Hear the little donkey call across the meadow!',
      icon: '🌾'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'voiced_hum',
      instructionsVi: 'Môi chu tròn hướng ra phía trước, lưỡi hơi rút về phía sau cuống họng: /ɔː/.'
    },
    color: 'bg-orange-600'
  },

  // ===================== NHÓM 5 (STAGE 3: 5-6 Tuổi Tiền Tiểu Học) =====================
  'z': {
    id: 'z',
    grapheme: 'z',
    ipa: '/z/',
    group: 5,
    stage: 3,
    soundDescription: 'Âm chú ong bay vo ve râm ran',
    sampleWords: [
      { word: 'zebra', meaningVi: 'ngựa vằn', emoji: '🦓' },
      { word: 'zoo', meaningVi: 'sở thú', emoji: '🦒' },
      { word: 'zip', meaningVi: 'khóa kéo', emoji: '🤐' }
    ],
    tprAction: {
      title: 'Chú ong chăm chỉ bay',
      titleEn: 'Buzz like a bee',
      chantEn: 'Busy buzzing bee, buzzing in the garden!',
      descriptionVi: 'Đưa hai cánh tay vỗ nhẹ như ong thợ bay lượn: zzzzz!',
      actionPrompt: 'Busy buzzing bee, buzzing in the garden!',
      icon: '🐝'
    },
    mouthGuide: {
      mouthShape: 'teeth_together',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'continuous',
      instructionsVi: 'Răng khép nhẹ như âm /s/, nhưng phải rung mạnh dây thanh quản ở cổ họng: zzzzz.'
    },
    color: 'bg-purple-600'
  },
  'w': {
    id: 'w',
    grapheme: 'w',
    ipa: '/w/',
    group: 5,
    stage: 3,
    soundDescription: 'Âm gió thổi qua ngọn cây',
    sampleWords: [
      { word: 'wind', meaningVi: 'ngọn gió', emoji: '🌬️' },
      { word: 'water', meaningVi: 'ly nước mát', emoji: '💧' },
      { word: 'web', meaningVi: 'mạng nhện', emoji: '🕸️' }
    ],
    tprAction: {
      title: 'Cơn gió đông thổi',
      titleEn: 'Blowing wind',
      chantEn: 'Blowing wind, hear the wind blow through the trees!',
      descriptionVi: 'Thổi hơi qua đôi môi chu tròn như gió đông: w, w, w!',
      actionPrompt: 'Blowing wind, hear the wind blow through the trees!',
      icon: '💨'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'voiced_hum',
      instructionsVi: 'Chu môi nhỏ tròn như huýt sáo rồi mở bung nhẹ ra: wwww.'
    },
    color: 'bg-sky-600'
  },
  'ng': {
    id: 'ng',
    grapheme: 'ng',
    ipa: '/ŋ/',
    group: 5,
    stage: 3,
    soundDescription: 'Âm lực sĩ nâng tạ nặng: ng-ng-ng',
    sampleWords: [
      { word: 'ring', meaningVi: 'chiếc nhẫn', emoji: '💍' },
      { word: 'king', meaningVi: 'nhà vua', emoji: '👑' },
      { word: 'wing', meaningVi: 'đôi cánh chim', emoji: '🪽' }
    ],
    tprAction: {
      title: 'Lực sĩ nâng tạ nặng',
      titleEn: 'Lift the heavy weight',
      chantEn: 'Lift the heavy barbell with all your might!',
      descriptionVi: 'Gồng hai cánh tay giả nâng quả tạ nặng lên: nnnnng!',
      actionPrompt: 'Lift the heavy barbell with all your might!',
      icon: '🏋️'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'up_back',
      airFlow: 'nasal',
      instructionsVi: 'Nâng cuống lưỡi bịt kín vòm họng mềm, để âm rung thoát hoàn toàn qua khoang mũi: nggg.'
    },
    color: 'bg-emerald-600'
  },
  'v': {
    id: 'v',
    grapheme: 'v',
    ipa: '/v/',
    group: 5,
    stage: 3,
    soundDescription: 'Âm lái xe van rồ ga rung rinh',
    sampleWords: [
      { word: 'van', meaningVi: 'xe tải nhỏ', emoji: '🚐' },
      { word: 'vest', meaningVi: 'áo gile', emoji: '🦺' },
      { word: 'vase', meaningVi: 'bình cắm hoa', emoji: '🏺' }
    ],
    tprAction: {
      title: 'Lái xe van bon bon',
      titleEn: 'Drive the van',
      chantEn: 'Hold the wheel and drive the van around the town!',
      descriptionVi: 'Hai tay cầm vô lăng lái xe van bon bon: vvvvv!',
      actionPrompt: 'Hold the wheel and drive the van around the town!',
      icon: '🚐'
    },
    mouthGuide: {
      mouthShape: 'lip_bite',
      tonguePosition: 'flat',
      airFlow: 'continuous',
      instructionsVi: 'Răng cửa trên chạm nhẹ môi dưới, phát âm xì hơi kèm độ rung cực mạnh ở cổ họng: vvvvv.'
    },
    color: 'bg-indigo-600'
  },
  'oo_short': {
    id: 'oo_short',
    grapheme: 'oo (ngắn)',
    ipa: '/ʊ/',
    group: 5,
    stage: 3,
    soundDescription: 'Âm đồng hồ cúc cu gật đầu',
    sampleWords: [
      { word: 'book', meaningVi: 'quyển sách', emoji: '📖' },
      { word: 'foot', meaningVi: 'bàn chân', emoji: '🦶' },
      { word: 'look', meaningVi: 'nhìn ngắm', emoji: '👀' }
    ],
    tprAction: {
      title: 'Chim cúc cu gật đầu',
      titleEn: 'Cuckoo clock',
      chantEn: 'Cuckoo clock, nodding head right on time!',
      descriptionVi: 'Gật đầu ngắn dứt khoát như chú chim cúc cu nhô ra: oo, oo!',
      actionPrompt: 'Cuckoo clock, nodding head right on time!',
      icon: '🕰️'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'voiced_hum',
      instructionsVi: 'Môi hơi chu tròn nhưng thả lỏng, phát âm rất ngắn và nhẹ: /ʊ/.'
    },
    color: 'bg-amber-500'
  },
  'oo_long': {
    id: 'oo_long',
    grapheme: 'oo (dài)',
    ipa: '/uː/',
    group: 5,
    stage: 3,
    soundDescription: 'Âm mặt trăng đêm ngân vang',
    sampleWords: [
      { word: 'moon', meaningVi: 'mặt trăng tròn', emoji: '🌕' },
      { word: 'spoon', meaningVi: 'chiếc thìa', emoji: '🥄' },
      { word: 'zoo', meaningVi: 'vườn bách thú', emoji: '🦁' }
    ],
    tprAction: {
      title: 'Ngắm vầng trăng sáng',
      titleEn: 'Wolf howling at the moon',
      chantEn: 'Howling at the big silver moon up in the sky!',
      descriptionVi: 'Ngửa cổ ngắm vầng trăng tròn ngân dài: ooooo!',
      actionPrompt: 'Howling at the big silver moon up in the sky!',
      icon: '🌕'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'voiced_hum',
      instructionsVi: 'Chu môi tròn thật nhỏ về phía trước, giữ luồng hơi ngân dài mượt mà: /uː/.'
    },
    color: 'bg-blue-600'
  },

  // ===================== NHÓM 6 (STAGE 3: 5-6 Tuổi Tiền Tiểu Học) =====================
  'y': {
    id: 'y',
    grapheme: 'y',
    ipa: '/j/',
    group: 6,
    stage: 3,
    soundDescription: 'Âm ăn sữa chua yaourt ngon tuyệt',
    sampleWords: [
      { word: 'yellow', meaningVi: 'màu vàng', emoji: '💛' },
      { word: 'yogurt', meaningVi: 'sữa chua', emoji: '🥛' },
      { word: 'yo-yo', meaningVi: 'con quay yo-yo', emoji: '🪀' }
    ],
    tprAction: {
      title: 'Múc sữa chua ăn',
      titleEn: 'Yummy yogurt',
      chantEn: 'Eat your yummy yogurt, so delicious!',
      descriptionVi: 'Cầm thìa múc sữa chua ăn ngon lành: y, y, y!',
      actionPrompt: 'Eat your yummy yogurt, so delicious!',
      icon: '🥛'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Nâng thân lưỡi sát vòm miệng cứng, bật âm /j/ dứt khoát rồi chuyển sang nguyên âm kế tiếp.'
    },
    color: 'bg-yellow-500'
  },
  'x': {
    id: 'x',
    grapheme: 'x',
    ipa: '/ks/',
    group: 6,
    stage: 3,
    soundDescription: 'Âm chụp ảnh tách tách: ks, ks',
    sampleWords: [
      { word: 'box', meaningVi: 'chiếc hộp', emoji: '📦' },
      { word: 'fox', meaningVi: 'chú cáo đỏ', emoji: '🦊' },
      { word: 'six', meaningVi: 'số 6', emoji: '6️⃣' }
    ],
    tprAction: {
      title: 'Bấm máy ảnh chụp hình',
      titleEn: 'Take a picture',
      chantEn: 'Click the camera, take a lovely photo!',
      descriptionVi: 'Giơ hai tay giả làm máy ảnh bấm tách tách: ks, ks, ks!',
      actionPrompt: 'Click the camera, take a lovely photo!',
      icon: '📸'
    },
    mouthGuide: {
      mouthShape: 'teeth_together',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'puff',
      instructionsVi: 'Khấc âm /k/ từ cuống họng rồi xì ngay âm /s/ qua kẽ răng: /ks/.'
    },
    color: 'bg-orange-500'
  },
  'ch': {
    id: 'ch',
    grapheme: 'ch',
    ipa: '/tʃ/',
    group: 6,
    stage: 3,
    soundDescription: 'Âm đoàn tàu hỏa xình xịch',
    sampleWords: [
      { word: 'chip', meaningVi: 'khoai tây chiên', emoji: '🍟' },
      { word: 'chair', meaningVi: 'cái ghế ngồi', emoji: '🪑' },
      { word: 'cheese', meaningVi: 'miếng phô mai', emoji: '🧀' }
    ],
    tprAction: {
      title: 'Đoàn tàu lăn bánh',
      titleEn: 'Choo-choo train',
      chantEn: 'Choo-choo goes the train down the track!',
      descriptionVi: 'Hai tay quay vòng tròn quanh sườn như bánh xe lửa: ch, ch, ch!',
      actionPrompt: 'Choo-choo goes the train down the track!',
      icon: '🚂'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'puff',
      instructionsVi: 'Chu môi tròn nhẹ, chạm đầu lưỡi lên nướu trên và bật hơi dứt khoát không rung cổ: /tʃ/.'
    },
    color: 'bg-red-500'
  },
  'sh': {
    id: 'sh',
    grapheme: 'sh',
    ipa: '/ʃ/',
    group: 6,
    stage: 3,
    soundDescription: 'Âm suỵt khẽ giữ trật tự bé ngủ',
    sampleWords: [
      { word: 'ship', meaningVi: 'con tàu thủy', emoji: '🚢' },
      { word: 'shell', meaningVi: 'vỏ sò biển', emoji: '🐚' },
      { word: 'fish', meaningVi: 'chú cá bơi', emoji: '🐟' }
    ],
    tprAction: {
      title: 'Suỵt ngón tay khẽ',
      titleEn: 'Shh, baby is asleep',
      chantEn: 'Shh, be very quiet, sweet baby is asleep!',
      descriptionVi: 'Đặt một ngón tay lên trước môi suỵt khẽ: shhhhh!',
      actionPrompt: 'Shh, be very quiet, sweet baby is asleep!',
      icon: '🤫'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'continuous',
      instructionsVi: 'Chu tròn môi về phía trước như mỏ vịt, thổi luồng hơi êm dịu liên tục không rung cổ: shhhhh.'
    },
    color: 'bg-pink-600'
  },
  'th_unvoiced': {
    id: 'th_unvoiced',
    grapheme: 'th (nhẹ)',
    ipa: '/θ/',
    group: 6,
    stage: 3,
    soundDescription: 'Âm đầu lưỡi kẹp giữa hai răng thổi gió nhẹ',
    sampleWords: [
      { word: 'thin', meaningVi: 'mảnh khảnh', emoji: '🪡' },
      { word: 'thumb', meaningVi: 'ngón tay cái', emoji: '👍' },
      { word: 'three', meaningVi: 'số 3', emoji: '3️⃣' }
    ],
    tprAction: {
      title: 'Chú hề lè lưỡi tinh nghịch',
      titleEn: 'Funny clown breathing out',
      chantEn: 'Funny clowns, sticking out tongues and breathing out!',
      descriptionVi: 'Đặt nhẹ đầu lưỡi giữa răng thổi hơi gió vô thanh: th, th, th!',
      actionPrompt: 'Funny clowns, sticking out tongues and breathing out!',
      icon: '👅'
    },
    mouthGuide: {
      mouthShape: 'teeth_together',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'continuous',
      instructionsVi: 'Đặt nhẹ đầu lưỡi thò ra giữa hai hàm răng cửa, thổi luồng hơi gió mát êm dịu không rung cổ họng.'
    },
    color: 'bg-teal-600'
  },
  'th_voiced': {
    id: 'th_voiced',
    grapheme: 'th (rung)',
    ipa: '/ð/',
    group: 6,
    stage: 3,
    soundDescription: 'Âm đầu lưỡi kẹp giữa hai răng rung râm ran',
    sampleWords: [
      { word: 'this', meaningVi: 'cái này', emoji: '👉' },
      { word: 'that', meaningVi: 'cái kia', emoji: '👈' },
      { word: 'mother', meaningVi: 'người mẹ hiền', emoji: '👩' }
    ],
    tprAction: {
      title: 'Đầu lưỡi rung ve ve',
      titleEn: 'Buzzing tongue',
      chantEn: 'This and that, feel the gentle buzz on your tongue!',
      descriptionVi: 'Đặt đầu lưỡi giữa răng và rung thanh quản nhẹ: th, th, th!',
      actionPrompt: 'This and that, feel the gentle buzz on your tongue!',
      icon: '👉'
    },
    mouthGuide: {
      mouthShape: 'teeth_together',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'voiced_hum',
      instructionsVi: 'Đặt đầu lưỡi giữa hai hàm răng cửa, đẩy hơi kèm rung mạnh thanh quản: /ð/.'
    },
    color: 'bg-cyan-600'
  },

  // ===================== NHÓM 7 (STAGE 4: 6-8 Tuổi Tiểu Học Lớp 1-2) =====================
  'qu': {
    id: 'qu',
    grapheme: 'qu',
    ipa: '/kw/',
    group: 7,
    stage: 4,
    soundDescription: 'Âm chú vịt cạp cạp kiêu hãnh',
    sampleWords: [
      { word: 'queen', meaningVi: 'nữ hoàng', emoji: '👑' },
      { word: 'quick', meaningVi: 'nhanh nhẹn', emoji: '⚡' },
      { word: 'quiet', meaningVi: 'yên tĩnh', emoji: '🤫' }
    ],
    tprAction: {
      title: 'Mỏ vịt quàng quạc',
      titleEn: 'Quack like a duck',
      chantEn: 'Quack, quack goes the happy duck in the pond!',
      descriptionVi: 'Chụm các ngón tay đóng mở như mỏ vịt kêu: qu, qu, qu!',
      actionPrompt: 'Quack, quack goes the happy duck in the pond!',
      icon: '🦆'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'puff',
      instructionsVi: 'Khấc nhẹ âm /k/ từ cuống họng rồi chu môi mượt mà sang âm /w/: /kw/.'
    },
    color: 'bg-yellow-600'
  },
  'ou': {
    id: 'ou',
    grapheme: 'ou',
    ipa: '/aʊ/',
    group: 7,
    stage: 4,
    soundDescription: 'Âm đau khi bị gai châm: Ouch!',
    sampleWords: [
      { word: 'cloud', meaningVi: 'đám mây trắng', emoji: '☁️' },
      { word: 'mouse', meaningVi: 'chú chuột nhắt', emoji: '🐭' },
      { word: 'house', meaningVi: 'ngôi nhà xinh', emoji: '🏡' }
    ],
    tprAction: {
      title: 'Bị kim châm kêu ouch',
      titleEn: 'Ouch, pricked my finger',
      chantEn: 'Ouch, ouch, prick your finger on a sewing needle!',
      descriptionVi: 'Giơ ngón tay nhỏ xíu bị kim châm kêu: ou, ou, ouch!',
      actionPrompt: 'Ouch, ouch, prick your finger on a sewing needle!',
      icon: '🪡'
    },
    mouthGuide: {
      mouthShape: 'wide',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Há miệng to âm /a/ rồi thu môi nhỏ tròn lại thành chữ U: auuu.'
    },
    color: 'bg-emerald-700'
  },
  'oi': {
    id: 'oi',
    grapheme: 'oi',
    ipa: '/ɔɪ/',
    group: 7,
    stage: 4,
    soundDescription: 'Âm thủy thủ gọi nhau: Oy, shipmate!',
    sampleWords: [
      { word: 'coin', meaningVi: 'đồng tiền vàng', emoji: '🪙' },
      { word: 'oil', meaningVi: 'dầu ăn', emoji: '🛢️' },
      { word: 'point', meaningVi: 'chỉ tay', emoji: '☝️' }
    ],
    tprAction: {
      title: 'Thủy thủ vẫy gọi tàu',
      titleEn: 'Ship ahoy',
      chantEn: 'Ship ahoy, sailors waving at the ship!',
      descriptionVi: 'Khum hai tay quanh miệng gọi to: oi! oi! ship ahoy!',
      actionPrompt: 'Ship ahoy, sailors waving at the ship!',
      icon: '🪙'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Môi chu tròn âm /ɔ/ rồi mỉm cười nhẹ chuyển sang /ɪ/: oiii.'
    },
    color: 'bg-amber-700'
  },
  'ue': {
    id: 'ue',
    grapheme: 'ue',
    ipa: '/juː/',
    group: 7,
    stage: 4,
    soundDescription: 'Âm chỉ tay lịch sự: You! You are welcome!',
    sampleWords: [
      { word: 'blue', meaningVi: 'màu xanh da trời', emoji: '💙' },
      { word: 'glue', meaningVi: 'lọ hồ dán', emoji: '🧴' },
      { word: 'cue', meaningVi: 'gợi ý', emoji: '🎬' }
    ],
    tprAction: {
      title: 'Chỉ tay khen bạn',
      titleEn: 'Point to you',
      chantEn: 'Pointing at my friend, yes, it was you!',
      descriptionVi: 'Chỉ tay về phía trước khen bạn: ue, ue, you!',
      actionPrompt: 'Pointing at my friend, yes, it was you!',
      icon: '👉'
    },
    mouthGuide: {
      mouthShape: 'round',
      tonguePosition: 'up_back',
      airFlow: 'voiced_hum',
      instructionsVi: 'Bắt đầu từ âm /j/ lướt nhẹ sang âm /uː/ tròn môi kéo dài: yuuu.'
    },
    color: 'bg-sky-700'
  },
  'er': {
    id: 'er',
    grapheme: 'er',
    ipa: '/ɜː/',
    group: 7,
    stage: 4,
    soundDescription: 'Âm máy xay sinh tố quay đều',
    sampleWords: [
      { word: 'sister', meaningVi: 'chị gái', emoji: '👧' },
      { word: 'water', meaningVi: 'dòng nước', emoji: '💧' },
      { word: 'winter', meaningVi: 'mùa đông', emoji: '❄️' }
    ],
    tprAction: {
      title: 'Máy trộn bột quay',
      titleEn: 'Mixer spinning',
      chantEn: 'Mixer spins around and blends the cake!',
      descriptionVi: 'Hai bàn tay xoay tròn trước bụng như que trộn bột: er, er, er!',
      actionPrompt: 'Mixer spins around and blends the cake!',
      icon: '🌪️'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'curled',
      airFlow: 'voiced_hum',
      instructionsVi: 'Mở họng tự nhiên, thân lưỡi nâng nhẹ ở giữa miệng, rung ấm ở cổ họng: /ɜː/.'
    },
    color: 'bg-indigo-700'
  },
  'ar': {
    id: 'ar',
    grapheme: 'ar',
    ipa: '/ɑː/',
    group: 7,
    stage: 4,
    soundDescription: 'Âm há miệng khi bác sĩ khám họng: Aaaaa!',
    sampleWords: [
      { word: 'star', meaningVi: 'ngôi sao lấp lánh', emoji: '⭐' },
      { word: 'car', meaningVi: 'xe ô tô', emoji: '🚗' },
      { word: 'park', meaningVi: 'công viên xanh', emoji: '🌳' }
    ],
    tprAction: {
      title: 'Há to miệng khám họng',
      titleEn: 'Open wide for the doctor',
      chantEn: 'Open your mouth wide for the kind doctor: Ahh!',
      descriptionVi: 'Há miệng thật to cho bác sĩ xem họng: aarrrr!',
      actionPrompt: 'Open your mouth wide for the kind doctor: Ahh!',
      icon: '🩺'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'flat',
      airFlow: 'voiced_hum',
      instructionsVi: 'Hạ thấp hàm dưới tối đa, lưỡi nằm phẳng sâu trong đáy miệng, phát âm /ɑː/ trầm sâu.'
    },
    color: 'bg-rose-700'
  }
};
