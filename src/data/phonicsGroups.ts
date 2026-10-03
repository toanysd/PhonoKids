import { PhonemeInfo, PhonicsGroup } from '../types/phonics';

export const PHONICS_GROUPS: PhonicsGroup[] = [
  {
    groupNumber: 1,
    name: "Nhóm 1: Những âm đầu tiên",
    islandTheme: "Đảo Mặt Trời & Rừng Rậm",
    themeColor: "from-amber-400 to-orange-500",
    islandEmoji: "🏝️",
    phonemes: ['s', 'a', 't', 'i', 'p', 'n'],
    decodableWords: ['sat', 'pat', 'tap', 'pin', 'tin', 'sit', 'pan', 'tan', 'ant']
  },
  {
    groupNumber: 2,
    name: "Nhóm 2: Động vật thân quen",
    islandTheme: "Đảo Nông Trại Vui Vẻ",
    themeColor: "from-emerald-400 to-teal-600",
    islandEmoji: "🚜",
    phonemes: ['c', 'k', 'e', 'h', 'r', 'm', 'd'],
    decodableWords: ['cat', 'hen', 'rat', 'man', 'dog', 'kid', 'red', 'hat', 'cup']
  },
  {
    groupNumber: 3,
    name: "Nhóm 3: Biển xanh phiêu lưu",
    islandTheme: "Đảo Hải Tặc Thân Thiện",
    themeColor: "from-sky-400 to-blue-600",
    islandEmoji: "🐬",
    phonemes: ['g', 'o', 'u', 'l', 'f', 'b'],
    decodableWords: ['sun', 'bus', 'fog', 'leg', 'box', 'frog', 'log', 'bed', 'pig']
  },
  {
    groupNumber: 4,
    name: "Nhóm 4: Cầu vồng âm dài",
    islandTheme: "Đảo Cầu Vồng Thần Tiên",
    themeColor: "from-fuchsia-400 to-pink-600",
    islandEmoji: "🌈",
    phonemes: ['ai', 'j', 'oa', 'ie', 'ee', 'or'],
    decodableWords: ['rain', 'boat', 'pie', 'tree', 'fork', 'jam', 'snail', 'coat']
  },
  {
    groupNumber: 5,
    name: "Nhóm 5: Gió & Sấm chớp",
    islandTheme: "Đảo Rừng Nhiệt Đới",
    themeColor: "from-purple-400 to-indigo-600",
    islandEmoji: "⚡",
    phonemes: ['z', 'w', 'ng', 'v', 'oo_short', 'oo_long'],
    decodableWords: ['zoo', 'wind', 'ring', 'van', 'book', 'moon', 'sing', 'king']
  },
  {
    groupNumber: 6,
    name: "Nhóm 6: Bí mật đầm lầy",
    islandTheme: "Đảo Phép Thuật",
    themeColor: "from-rose-400 to-red-600",
    islandEmoji: "🪄",
    phonemes: ['y', 'x', 'ch', 'sh', 'th_unvoiced', 'th_voiced'],
    decodableWords: ['yes', 'box', 'chip', 'ship', 'thin', 'this', 'that', 'fish']
  },
  {
    groupNumber: 7,
    name: "Nhóm 7: Vương quốc Kho Báu",
    islandTheme: "Đảo Vương Quốc Vàng",
    themeColor: "from-yellow-400 to-amber-600",
    islandEmoji: "👑",
    phonemes: ['qu', 'ou', 'oi', 'ue', 'er', 'ar'],
    decodableWords: ['queen', 'cloud', 'coin', 'blue', 'star', 'park', 'sister', 'clown']
  }
];

export const PHONEMES_DATA: Record<string, PhonemeInfo> = {
  // === NHÓM 1 ===
  's': {
    id: 's',
    grapheme: 's',
    ipa: '/s/',
    group: 1,
    soundDescription: 'Âm xì hơi nhẹ nhàng như chú rắn trườn',
    sampleWords: [
      { word: 'sun', meaningVi: 'mặt trời', emoji: '☀️' },
      { word: 'snake', meaningVi: 'con rắn', emoji: '🐍' },
      { word: 'sock', meaningVi: 'đôi tất', emoji: '🧦' }
    ],
    tprAction: {
      title: 'Uốn lượn như rắn',
      descriptionVi: 'Đưa một bàn tay uốn lượn hình chữ S và xì hơi dài: sssss',
      actionPrompt: 'Uốn tay như chú rắn và xì sssss nào!',
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
    soundDescription: 'Âm a ngắn, há miệng rộng như cắn quả táo',
    sampleWords: [
      { word: 'ant', meaningVi: 'con kiến', emoji: '🐜' },
      { word: 'apple', meaningVi: 'quả táo', emoji: '🍎' },
      { word: 'axe', meaningVi: 'cái rìu', emoji: '🪓' }
    ],
    tprAction: {
      title: 'Kiến bò lên tay',
      descriptionVi: 'Dùng ngón tay nhón nhón bò từ mu bàn tay lên cổ tay và nói: /æ/, /æ/, ants on my arm!',
      actionPrompt: 'Giả vờ đàn kiến đang bò trên cánh tay nhé!',
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
    soundDescription: 'Âm gõ dứt khoát như đồng hồ tích tắc',
    sampleWords: [
      { word: 'tennis', meaningVi: 'quần vợt', emoji: '🎾' },
      { word: 'tiger', meaningVi: 'con hổ', emoji: '🐯' },
      { word: 'tap', meaningVi: 'vòi nước', emoji: '🚰' }
    ],
    tprAction: {
      title: 'Đầu lắc xem bóng',
      descriptionVi: 'Quay đầu sang trái rồi sang phải như theo dõi quả bóng tennis: t, t, t!',
      actionPrompt: 'Lắc đầu theo bóng tennis nào: t, t, t!',
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
    soundDescription: 'Âm i ngắn, nhẹ và bật nhanh',
    sampleWords: [
      { word: 'ink', meaningVi: 'lọ mực', emoji: '🖋️' },
      { word: 'iguana', meaningVi: 'kỳ nhông', emoji: '🦎' },
      { word: 'igloo', meaningVi: 'lều tuyết', emoji: '🏕️' }
    ],
    tprAction: {
      title: 'Chú chuột chùi râu',
      descriptionVi: 'Dùng hai ngón tay vuốt nhẹ hai bên má giả làm râu chuột và kêu: i, i, inky mouse!',
      actionPrompt: 'Vuốt râu chuột nhỏ nào: i, i, i!',
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
    soundDescription: 'Âm bật môi thổi nến sinh nhật',
    sampleWords: [
      { word: 'pan', meaningVi: 'cái chảo', emoji: '🍳' },
      { word: 'pig', meaningVi: 'chú lợn', emoji: '🐷' },
      { word: 'popcorn', meaningVi: 'bắp rang bơ', emoji: '🍿' }
    ],
    tprAction: {
      title: 'Thổi nến sinh nhật',
      descriptionVi: 'Giơ một ngón tay làm ngọn nến và thổi phù nhẹ: p, p, puff out the candle!',
      actionPrompt: 'Cùng thổi nến bánh sinh nhật nào: p, p, p!',
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
    soundDescription: 'Âm mũi ngân vang như tiếng máy bay',
    sampleWords: [
      { word: 'net', meaningVi: 'cái lưới', emoji: '🥅' },
      { word: 'nest', meaningVi: 'tổ chim', emoji: '🪺' },
      { word: 'nut', meaningVi: 'hạt dẻ', emoji: '🌰' }
    ],
    tprAction: {
      title: 'Máy bay sải cánh',
      descriptionVi: 'Dang hai tay sang ngang nghiêng người như máy bay lượn và ngân: nnnnnn!',
      actionPrompt: 'Dang cánh bay vút lên bầu trời nào: nnnnn!',
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

  // === NHÓM 2 ===
  'c': {
    id: 'c',
    grapheme: 'c / k',
    ipa: '/k/',
    group: 2,
    soundDescription: 'Âm khấc bật sâu từ cuống họng',
    sampleWords: [
      { word: 'cat', meaningVi: 'con mèo', emoji: '🐱' },
      { word: 'cup', meaningVi: 'cái cốc', emoji: '☕' },
      { word: 'kite', meaningVi: 'con diều', emoji: '🪁' }
    ],
    tprAction: {
      title: 'Gõ phách lách cách',
      descriptionVi: 'Hai tay gập mở ngón tay gõ lách cách như castanets: /k/, /k/, clicking castanets!',
      actionPrompt: 'Lách cách đôi tay gõ phách: k, k, k!',
      icon: '💃'
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
    soundDescription: 'Âm e ngắn gọn, đập vỏ trứng',
    sampleWords: [
      { word: 'egg', meaningVi: 'quả trứng', emoji: '🥚' },
      { word: 'elephant', meaningVi: 'con voi', emoji: '🐘' },
      { word: 'elbow', meaningVi: 'khuỷu tay', emoji: '💪' }
    ],
    tprAction: {
      title: 'Đập vỡ trứng rán',
      descriptionVi: 'Giả vờ cầm quả trứng đập vào mép chảo rồi tách ra: e, e, eggs in the pan!',
      actionPrompt: 'Cùng tách quả trứng vào chảo nào: e, e, e!',
      icon: '🍳'
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
    soundDescription: 'Âm thở hổn hển như vừa chạy bộ mệt',
    sampleWords: [
      { word: 'hat', meaningVi: 'cái mũ', emoji: '🎩' },
      { word: 'hen', meaningVi: 'gà mái', emoji: '🐔' },
      { word: 'heart', meaningVi: 'trái tim', emoji: '❤️' }
    ],
    tprAction: {
      title: 'Thở dốc sau khi chạy',
      descriptionVi: 'Đưa một bàn tay lên trước miệng và thở gấp như vừa chạy mệt: h, h, h!',
      actionPrompt: 'Thở hổn hển thật sâu nào: h, h, h!',
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
    soundDescription: 'Âm gầm gừ như chú cún ngậm giẻ kéo',
    sampleWords: [
      { word: 'rat', meaningVi: 'chuột cống', emoji: '🐀' },
      { word: 'red', meaningVi: 'màu đỏ', emoji: '🔴' },
      { word: 'rabbit', meaningVi: 'chú thỏ', emoji: '🐰' }
    ],
    tprAction: {
      title: 'Cún con lắc đầu',
      descriptionVi: 'Cắn chặt hai hàm và lắc đầu sang hai bên như cún kéo giẻ rách: rrrrrrr!',
      actionPrompt: 'Lắc đầu gầm gừ như cún con: rrrrr!',
      icon: '🐕'
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
    soundDescription: 'Âm mím môi khen món ăn ngon tuyệt',
    sampleWords: [
      { word: 'man', meaningVi: 'người đàn ông', emoji: '👨' },
      { word: 'moon', meaningVi: 'mặt trăng', emoji: '🌙' },
      { word: 'mango', meaningVi: 'quả xoài', emoji: '🥭' }
    ],
    tprAction: {
      title: 'Xoa bụng khen ngon',
      descriptionVi: 'Lấy tay xoa tròn quanh bụng và mỉm cười: mmmmm, yummy food!',
      actionPrompt: 'Xoa bụng khen món ăn ngon nào: mmmmm!',
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
    soundDescription: 'Âm gõ dùi trống trầm ấm có rung',
    sampleWords: [
      { word: 'dog', meaningVi: 'chú chó', emoji: '🐶' },
      { word: 'drum', meaningVi: 'cái trống', emoji: '🥁' },
      { word: 'duck', meaningVi: 'chú vịt', emoji: '🦆' }
    ],
    tprAction: {
      title: 'Đánh trống rộn ràng',
      descriptionVi: 'Hai tay cầm dùi trống tưởng tượng gõ bập bùng: d, d, beat the drum!',
      actionPrompt: 'Gõ trống tùng tùng tùng: d, d, d!',
      icon: '🥁'
    },
    mouthGuide: {
      mouthShape: 'open',
      tonguePosition: 'behind_top_teeth',
      airFlow: 'puff',
      instructionsVi: 'Đầu lưỡi chạm nướu trên và bật mạnh ra kèm theo độ rung trầm ở cổ họng: /d/.'
    },
    color: 'bg-indigo-400'
  }
};
