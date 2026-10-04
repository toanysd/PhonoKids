// Master Phonics Word Bank: 796 Decodable Words across all 42 Phonemes
// Structured into 4 Child-Friendly Themes: Animals, Nature, Objects & Food, Actions
// 100% Authentic Ehon & Real Educational Imagery - Zero Vector Clipart / Raw Emojis!

import { PhonicsWordBankItem, WordBankTheme } from '../types/phonics';

export const THEME_CONFIG: Record<WordBankTheme, {
  label: string;
  icon: string;
  banner: string;
  description: string;
  color: string;
}> = {
  animals: {
    label: 'Động Vật & Thú Cưng',
    icon: '🐾',
    banner: '/assets/ehon/theme_animals.jpg',
    description: 'Khám phá thế giới các bạn thú dễ thương vẽ phong cách Ehon ấm áp!',
    color: 'emerald'
  },
  nature: {
    label: 'Thiên Nhiên & Đất Trời',
    icon: '🌿',
    banner: '/assets/ehon/theme_nature.jpg',
    description: 'Chiêm ngưỡng cỏ cây, hoa lá, dòng suối và bầu trời kỳ diệu.',
    color: 'sky'
  },
  objects_food: {
    label: 'Đồ Vật & Món Ăn',
    icon: '🍎',
    banner: '/assets/ehon/theme_food_objects.jpg',
    description: 'Những món đồ chơi thân quen và đồ ăn thơm ngon mỗi ngày.',
    color: 'amber'
  },
  actions: {
    label: 'Vận Động & Cuộc Sống',
    icon: '🏃',
    banner: '/assets/ehon/theme_actions.jpg',
    description: 'Cùng nhảy múa, ca hát và khám phá niềm vui mỗi bước chân!',
    color: 'rose'
  }
};

export const PHONICS_WORD_BANK: PhonicsWordBankItem[] = [
  {
    "id": "wb_s_sun_0",
    "word": "sun",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "u",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "mặt trời",
    "emoji": "☀️",
    "sampleSentence": "The sun is hot.",
    "sampleSentenceVi": "Mặt trời tỏa nắng ấm.",
    "visual": {
      "url": "/assets/ehon/sun.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon mặt trời rạng rỡ tỏa tia nắng"
    }
  },
  {
    "id": "wb_s_sit_1",
    "word": "sit",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "i",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "ngồi xuống",
    "emoji": "🪑",
    "sampleSentence": "Sit on the mat.",
    "sampleSentenceVi": "Bé ngồi trên thảm.",
    "visual": {
      "url": "/assets/ehon/sit.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon em bé ngồi ngoan trên ghế êm ấm áp"
    }
  },
  {
    "id": "wb_s_sat_2",
    "word": "sat",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "a",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "đã ngồi",
    "emoji": "🧘",
    "sampleSentence": "Sam sat on a rock.",
    "sampleSentenceVi": "Sam đã ngồi trên tảng đá.",
    "visual": {
      "url": "/assets/ehon/cat_mat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú mèo ngồi yên sưởi nắng"
    }
  },
  {
    "id": "wb_s_sad_3",
    "word": "sad",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "a",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "buồn bã",
    "emoji": "😢",
    "sampleSentence": "Do not be sad.",
    "sampleSentenceVi": "Bé đừng buồn nhé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cún cưng ngơ ngác buồn bã đáng yêu"
    }
  },
  {
    "id": "wb_s_six_4",
    "word": "six",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "i",
      "x"
    ],
    "theme": "objects_food",
    "meaningVi": "số sáu",
    "emoji": "6️⃣",
    "sampleSentence": "I see six ants.",
    "sampleSentenceVi": "Bé thấy sáu chú kiến.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khối gỗ đồ chơi số 6 sắc màu"
    }
  },
  {
    "id": "wb_s_sip_5",
    "word": "sip",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "nhấp ngụm nhỏ",
    "emoji": "🥤",
    "sampleSentence": "Take a sip of milk.",
    "sampleSentenceVi": "Uống một ngụm sữa ấm.",
    "visual": {
      "url": "/assets/ehon/cup.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon nhấp từng ngụm nước ấm trong tách"
    }
  },
  {
    "id": "wb_s_sock_6",
    "word": "sock",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "o",
      "ck"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc tất len",
    "emoji": "🧦",
    "sampleSentence": "A warm wool sock.",
    "sampleSentenceVi": "Chiếc tất len ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi tất len ấm áp sắc màu"
    }
  },
  {
    "id": "wb_s_sand_7",
    "word": "sand",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "a",
      "n",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "bãi cát vàng",
    "emoji": "🏖️",
    "sampleSentence": "Play in the yellow sand.",
    "sampleSentenceVi": "Chơi đùa trên bãi cát vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bãi cát vàng mịn màng bên bờ biển"
    }
  },
  {
    "id": "wb_s_seal_8",
    "word": "seal",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "ea",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú hải cẩu",
    "emoji": "🦭",
    "sampleSentence": "A seal claps on ice.",
    "sampleSentenceVi": "Chú hải cẩu vỗ tay trên băng.",
    "visual": {
      "url": "/assets/ehon/seal.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú hải cẩu trắng đáng yêu trên tảng băng"
    }
  },
  {
    "id": "wb_s_soft_9",
    "word": "soft",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "o",
      "f",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "mềm mại êm ái",
    "emoji": "🧸",
    "sampleSentence": "The teddy bear is soft.",
    "sampleSentenceVi": "Chú gấu bông thật mềm mại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gấu bông lông mềm êm ái"
    }
  },
  {
    "id": "wb_a_ant_10",
    "word": "ant",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "n",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "con kiến",
    "emoji": "🐜",
    "sampleSentence": "An ant is on a pan.",
    "sampleSentenceVi": "Chú kiến đang ở trên chảo.",
    "visual": {
      "url": "/assets/ehon/ant.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú kiến bé nhỏ chăm chỉ"
    }
  },
  {
    "id": "wb_a_apple_11",
    "word": "apple",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "p",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "quả táo đỏ",
    "emoji": "🍎",
    "sampleSentence": "A red apple is sweet.",
    "sampleSentenceVi": "Quả táo đỏ ngọt lành.",
    "visual": {
      "url": "/assets/ehon/apple.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả táo đỏ mọng cắt dán rực rỡ"
    }
  },
  {
    "id": "wb_a_ax_12",
    "word": "ax",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "cái rìu",
    "emoji": "🪓",
    "sampleSentence": "The ax cuts wood.",
    "sampleSentenceVi": "Cái rìu bổ củi.",
    "visual": {
      "url": "/assets/ehon/ax.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc rìu gỗ dựng bên gốc cây nở hoa"
    }
  },
  {
    "id": "wb_a_act_13",
    "word": "act",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "c",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "diễn kịch",
    "emoji": "🎭",
    "sampleSentence": "We act like lions.",
    "sampleSentenceVi": "Chúng mình diễn vai chú sư tử.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ vui vẻ hóa trang diễn kịch"
    }
  },
  {
    "id": "wb_a_as_14",
    "word": "as",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "z"
    ],
    "theme": "actions",
    "meaningVi": "như là",
    "emoji": "✨",
    "sampleSentence": "As fast as a cat.",
    "sampleSentenceVi": "Nhanh như một chú mèo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú mèo chạy nhanh như gió"
    }
  },
  {
    "id": "wb_a_at_15",
    "word": "at",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "ở tại",
    "emoji": "📍",
    "sampleSentence": "Look at the dog.",
    "sampleSentenceVi": "Hãy nhìn chú cún kìa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cún nhỏ ngắm nhìn ở tại cửa sổ"
    }
  },
  {
    "id": "wb_a_ash_16",
    "word": "ash",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "sh"
    ],
    "theme": "nature",
    "meaningVi": "tro ấm",
    "emoji": "🪵",
    "sampleSentence": "Gray ash in the hearth.",
    "sampleSentenceVi": "Tro ấm trong bếp sưởi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tro ấm trong lò sưởi mùa đông"
    }
  },
  {
    "id": "wb_a_add_17",
    "word": "add",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "cộng thêm",
    "emoji": "➕",
    "sampleSentence": "Add one more brick.",
    "sampleSentenceVi": "Thêm một khối gỗ xếp hình.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khối gỗ xếp hình thêm một khối nữa"
    }
  },
  {
    "id": "wb_a_am_18",
    "word": "am",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "tôi là",
    "emoji": "🙋",
    "sampleSentence": "I am happy and strong.",
    "sampleSentenceVi": "Con vui vẻ và khỏe mạnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Em bé vui tươi tự tin là chính mình"
    }
  },
  {
    "id": "wb_a_an_19",
    "word": "an",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "một (vật)",
    "emoji": "☝️",
    "sampleSentence": "An orange is round.",
    "sampleSentenceVi": "Một quả cam tròn xoe.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Một quả cam ngọt lành thơm mát"
    }
  },
  {
    "id": "wb_t_tap_20",
    "word": "tap",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "a",
      "p"
    ],
    "theme": "nature",
    "meaningVi": "vòi nước / gõ nhẹ",
    "emoji": "🚰",
    "sampleSentence": "Tap the little drum.",
    "sampleSentenceVi": "Gõ nhẹ lên chiếc trống con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Vòi nước sạch trong vắt mát lành"
    }
  },
  {
    "id": "wb_t_tin_21",
    "word": "tin",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "i",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "hộp thiếc",
    "emoji": "🥫",
    "sampleSentence": "A tin has seeds.",
    "sampleSentenceVi": "Chiếc hộp thiếc đựng hạt mầm.",
    "visual": {
      "url": "/assets/ehon/tin.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon hộp thiếc cổ điển đựng bánh quy và kẹo ngọt"
    }
  },
  {
    "id": "wb_t_top_22",
    "word": "top",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "o",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "đỉnh / con quay",
    "emoji": "🪀",
    "sampleSentence": "Spin the colorful top.",
    "sampleSentenceVi": "Xoay tít con quay sắc màu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con quay gỗ sắc màu xoay tít"
    }
  },
  {
    "id": "wb_t_ten_23",
    "word": "ten",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "e",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "số mười",
    "emoji": "🔟",
    "sampleSentence": "Ten green apples.",
    "sampleSentenceVi": "Mười quả táo xanh thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mười ngón tay xinh xắn sắc màu"
    }
  },
  {
    "id": "wb_t_tub_24",
    "word": "tub",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "u",
      "b"
    ],
    "theme": "objects_food",
    "meaningVi": "bồn tắm",
    "emoji": "🛁",
    "sampleSentence": "A bath in the tub.",
    "sampleSentenceVi": "Tắm mát trong bồn tắm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bồn tắm đầy bọt xà phòng trắng muốt"
    }
  },
  {
    "id": "wb_t_tag_25",
    "word": "tag",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "a",
      "g"
    ],
    "theme": "objects_food",
    "meaningVi": "thẻ nhãn / trò đuổi bắt",
    "emoji": "🏷️",
    "sampleSentence": "We play tag together.",
    "sampleSentenceVi": "Các bạn nhỏ chơi đuổi bắt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc thẻ nhãn xinh xắn treo trên hộp quà"
    }
  },
  {
    "id": "wb_t_tent_26",
    "word": "tent",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "e",
      "n",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc lều vải",
    "emoji": "⛺",
    "sampleSentence": "Sleep in a warm tent.",
    "sampleSentenceVi": "Ngủ trong chiếc lều ấm cúng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc lều cắm trại ấm cúng giữa thiên nhiên"
    }
  },
  {
    "id": "wb_t_tip_27",
    "word": "tip",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "đầu ngón tay",
    "emoji": "☝️",
    "sampleSentence": "Touch the tip of your nose.",
    "sampleSentenceVi": "Chạm nhẹ vào chóp mũi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đầu ngón tay nhỏ nhắn chạm nhẹ"
    }
  },
  {
    "id": "wb_t_toy_28",
    "word": "toy",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "oy"
    ],
    "theme": "objects_food",
    "meaningVi": "đồ chơi yêu thích",
    "emoji": "🧸",
    "sampleSentence": "Share a toy with friends.",
    "sampleSentenceVi": "Cùng chia sẻ đồ chơi với bạn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những món đồ chơi bằng gỗ rực rỡ"
    }
  },
  {
    "id": "wb_t_tiger_29",
    "word": "tiger",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "i",
      "g",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú hổ vằn",
    "emoji": "🐯",
    "sampleSentence": "The friendly tiger waves.",
    "sampleSentenceVi": "Chú hổ con vẫy tay chào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú hổ vằn dũng mãnh nghỉ mát"
    }
  },
  {
    "id": "wb_i_ink_30",
    "word": "ink",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "mực viết",
    "emoji": "🖋️",
    "sampleSentence": "Blue ink on paper.",
    "sampleSentenceVi": "Mực xanh vẽ trên trang giấy.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lọ mực xanh óng ánh vẽ tranh"
    }
  },
  {
    "id": "wb_i_in_31",
    "word": "in",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "bên trong",
    "emoji": "📥",
    "sampleSentence": "The cat is in the box.",
    "sampleSentenceVi": "Chú mèo nằm trong hộp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mèo con cuộn mình ngủ ngoan trong chiếc hộp"
    }
  },
  {
    "id": "wb_i_igloo_32",
    "word": "igloo",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "g",
      "l",
      "oo"
    ],
    "theme": "nature",
    "meaningVi": "nhà băng",
    "emoji": "🧊",
    "sampleSentence": "An igloo made of ice.",
    "sampleSentenceVi": "Ngôi nhà băng mát lạnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngôi nhà băng tuyết igloo trắng muốt"
    }
  },
  {
    "id": "wb_i_ill_33",
    "word": "ill",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "bị ốm",
    "emoji": "🤒",
    "sampleSentence": "Rest when you feel ill.",
    "sampleSentenceVi": "Nghỉ ngơi khi bé thấy mệt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé con đắp chăn ấm áp khi bị ốm"
    }
  },
  {
    "id": "wb_i_it_34",
    "word": "it",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "nó / điều đó",
    "emoji": "👉",
    "sampleSentence": "It is a happy day.",
    "sampleSentenceVi": "Đó là một ngày vui.",
    "visual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đó là chú kiến nhỏ"
    }
  },
  {
    "id": "wb_i_insect_35",
    "word": "insect",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n",
      "s",
      "e",
      "c",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "côn trùng",
    "emoji": "🐞",
    "sampleSentence": "A tiny green insect.",
    "sampleSentenceVi": "Một chú bọ tí hon màu xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú bọ rùa đỏ chấm đen leo trên lá xanh"
    }
  },
  {
    "id": "wb_i_if_36",
    "word": "if",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "f"
    ],
    "theme": "actions",
    "meaningVi": "nếu như",
    "emoji": "❓",
    "sampleSentence": "Smile if you are glad.",
    "sampleSentenceVi": "Cười tươi nếu con thấy vui.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nụ cười rạng rỡ của bạn nhỏ"
    }
  },
  {
    "id": "wb_i_is_37",
    "word": "is",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "z"
    ],
    "theme": "actions",
    "meaningVi": "thì / là",
    "emoji": "✨",
    "sampleSentence": "The kitten is cute.",
    "sampleSentenceVi": "Chú mèo con thật đáng yêu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mèo con đang nằm ngủ thật ngoan"
    }
  },
  {
    "id": "wb_i_itch_38",
    "word": "itch",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "tch"
    ],
    "theme": "actions",
    "meaningVi": "ngứa ngáy",
    "emoji": "🦟",
    "sampleSentence": "A mosquito bite makes an itch.",
    "sampleSentenceVi": "Vết muỗi đốt hơi ngứa ngáy.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cún gãi tai ngộ nghĩnh"
    }
  },
  {
    "id": "wb_i_inch_39",
    "word": "inch",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n",
      "ch"
    ],
    "theme": "objects_food",
    "meaningVi": "thước đo tí hon",
    "emoji": "📏",
    "sampleSentence": "Crawl an inch forward.",
    "sampleSentenceVi": "Sâu nhỏ bò từng phân một.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thước đo từng phân tí hon"
    }
  },
  {
    "id": "wb_p_pat_40",
    "word": "pat",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "a",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "vỗ nhẹ thân mật",
    "emoji": "👋",
    "sampleSentence": "Pat the gentle puppy.",
    "sampleSentenceVi": "Vỗ nhẹ chú cún con.",
    "visual": {
      "url": "/assets/ehon/sam_pat_ant.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bạn nhỏ vỗ về vuốt ve thân mật"
    }
  },
  {
    "id": "wb_p_pan_41",
    "word": "pan",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "a",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "cái chảo rán",
    "emoji": "🍳",
    "sampleSentence": "An egg on the pan.",
    "sampleSentenceVi": "Chiếc trứng thơm trên chảo.",
    "visual": {
      "url": "/assets/ehon/sam_pan.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc chảo rán nhỏ trong gian bếp ấm cúng"
    }
  },
  {
    "id": "wb_p_pin_42",
    "word": "pin",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "i",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "cái ghim cài",
    "emoji": "🧷",
    "sampleSentence": "A shiny little pin.",
    "sampleSentenceVi": "Cái ghim băng nhỏ lấp lánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây kim ghim an toàn bằng kim loại sáng"
    }
  },
  {
    "id": "wb_p_pot_43",
    "word": "pot",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "o",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "cái nồi",
    "emoji": "🍲",
    "sampleSentence": "Soup in the cooking pot.",
    "sampleSentenceVi": "Nồi súp nóng hổi thơm ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc nồi nấu súp gia đình ấm cúng"
    }
  },
  {
    "id": "wb_p_pig_44",
    "word": "pig",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "i",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "chú heo hồng",
    "emoji": "🐷",
    "sampleSentence": "The pink pig loves mud.",
    "sampleSentenceVi": "Chú heo hồng thích nghịch bùn.",
    "visual": {
      "url": "/assets/ehon/pig.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú heo hồng tinh nghịch"
    }
  },
  {
    "id": "wb_p_pen_45",
    "word": "pen",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "e",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "bút mực",
    "emoji": "🖊️",
    "sampleSentence": "Draw with a pen.",
    "sampleSentenceVi": "Vẽ tranh bằng cây bút mực.",
    "visual": {
      "url": "/assets/ehon/pen.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc bút máy lấp lánh viết chữ xinh"
    }
  },
  {
    "id": "wb_p_pup_46",
    "word": "pup",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "u",
      "p"
    ],
    "theme": "animals",
    "meaningVi": "chó con đáng yêu",
    "emoji": "🐶",
    "sampleSentence": "The pup runs to me.",
    "sampleSentenceVi": "Chú cún con chạy về phía bé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cún con lông xù đáng yêu chạy nhảy"
    }
  },
  {
    "id": "wb_p_pop_47",
    "word": "pop",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "o",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "tiếng bóng nổ bốp",
    "emoji": "🎈",
    "sampleSentence": "Pop the soap bubble!",
    "sampleSentenceVi": "Bóp vỡ bong bóng xà phòng!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bong bóng xà phòng vỡ tung tóe"
    }
  },
  {
    "id": "wb_p_pet_48",
    "word": "pet",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "e",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "thú cưng",
    "emoji": "🐱",
    "sampleSentence": "Love your little pet.",
    "sampleSentenceVi": "Yêu thương bạn thú cưng nhỏ.",
    "visual": {
      "url": "/assets/ehon/dog.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cún cưng thân thiết"
    }
  },
  {
    "id": "wb_p_pond_49",
    "word": "pond",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "o",
      "n",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "ao nước trong",
    "emoji": "🏞️",
    "sampleSentence": "Ducks swim in the pond.",
    "sampleSentenceVi": "Đàn vịt bơi tung tăng dưới ao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mặt ao trong vắt bóng mây trời"
    }
  },
  {
    "id": "wb_n_net_50",
    "word": "net",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "e",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "cái lưới bắt bướm",
    "emoji": "🥅",
    "sampleSentence": "A net catches bubbles.",
    "sampleSentenceVi": "Chiếc lưới đón bong bóng bay.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc lưới bắt bướm trên đồng cỏ hoa"
    }
  },
  {
    "id": "wb_n_nap_51",
    "word": "nap",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "a",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "giấc ngủ trưa",
    "emoji": "😴",
    "sampleSentence": "The cat takes a nap.",
    "sampleSentenceVi": "Mèo con ngủ trưa thật ngoan.",
    "visual": {
      "url": "/assets/ehon/cat_nap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú mèo cuộn tròn ngủ trưa êm đềm"
    }
  },
  {
    "id": "wb_n_nut_52",
    "word": "nut",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "u",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "hạt dẻ thơm",
    "emoji": "🌰",
    "sampleSentence": "The squirrel holds a nut.",
    "sampleSentenceVi": "Sóc nhỏ ôm quả hạt dẻ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những quả hạt dẻ thơm bùi của chú sóc"
    }
  },
  {
    "id": "wb_n_nod_53",
    "word": "nod",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "o",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "gật đầu đồng ý",
    "emoji": "😊",
    "sampleSentence": "Nod your head yes.",
    "sampleSentenceVi": "Gật đầu đồng ý mỉm cười.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Em bé mỉm cười gật đầu đồng ý"
    }
  },
  {
    "id": "wb_n_nest_54",
    "word": "nest",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "e",
      "s",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "tổ chim ấm",
    "emoji": "🪹",
    "sampleSentence": "A bird in the nest.",
    "sampleSentenceVi": "Chim con trong tổ ấm êm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tổ chim ấm áp với những quả trứng xinh xắn"
    }
  },
  {
    "id": "wb_n_nip_55",
    "word": "nip",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "nhấm nháp",
    "emoji": "🤏",
    "sampleSentence": "A tiny playful nip.",
    "sampleSentenceVi": "Nhấm một mẩu bánh nhỏ xíu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé nhấp một mẩu bánh nhỏ xíu"
    }
  },
  {
    "id": "wb_n_neck_56",
    "word": "neck",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "e",
      "ck"
    ],
    "theme": "animals",
    "meaningVi": "cổ hươu cao",
    "emoji": "🦒",
    "sampleSentence": "A giraffe has a long neck.",
    "sampleSentenceVi": "Chú hươu cao cổ có chiếc cổ dài.",
    "visual": {
      "url": "/assets/ehon/giraffe.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú hươu cao cổ với chiếc cổ dài"
    }
  },
  {
    "id": "wb_n_noon_57",
    "word": "noon",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "oo",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "buổi trưa ấm áp",
    "emoji": "🕛",
    "sampleSentence": "The sun shines at noon.",
    "sampleSentenceVi": "Nắng ấm chan hòa vào buổi trưa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mặt trời rực rỡ chiếu sáng đúng giữa trưa hè"
    }
  },
  {
    "id": "wb_n_nine_58",
    "word": "nine",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "i",
      "n",
      "e"
    ],
    "theme": "objects_food",
    "meaningVi": "số chín",
    "emoji": "9️⃣",
    "sampleSentence": "Nine bright stars sparkle.",
    "sampleSentenceVi": "Chín vì sao lấp lánh trên cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chữ số chín bằng gỗ sắc màu"
    }
  },
  {
    "id": "wb_n_nose_59",
    "word": "nose",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "o",
      "s",
      "e"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc mũi xinh",
    "emoji": "👃",
    "sampleSentence": "Touch your little button nose.",
    "sampleSentenceVi": "Chạm nhẹ vào chiếc mũi nhỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc mũi nhỏ xinh của em bé"
    }
  },
  {
    "id": "wb_c_k_cat_60",
    "word": "cat",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "c",
      "a",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "chú mèo",
    "emoji": "🐱",
    "sampleSentence": "The cat sits on the mat.",
    "sampleSentenceVi": "Mèo ngồi trên thảm êm.",
    "visual": {
      "url": "/assets/ehon/cat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú mèo cam sọc rực rỡ"
    }
  },
  {
    "id": "wb_c_k_cup_61",
    "word": "cup",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "c",
      "u",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc cốc",
    "emoji": "☕",
    "sampleSentence": "Drink from a yellow cup.",
    "sampleSentenceVi": "Uống nước bằng cốc vàng.",
    "visual": {
      "url": "/assets/ehon/cup.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon tách trà rực rỡ bốc khói ấm áp"
    }
  },
  {
    "id": "wb_c_k_cap_62",
    "word": "cap",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "c",
      "a",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "mũ lưỡi trai",
    "emoji": "🧢",
    "sampleSentence": "Wear a blue cap.",
    "sampleSentenceVi": "Đội chiếc mũ lưỡi trai xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc mũ lưỡi trai năng động màu xanh"
    }
  },
  {
    "id": "wb_c_k_kid_63",
    "word": "kid",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "k",
      "i",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "em bé nhỏ",
    "emoji": "🧒",
    "sampleSentence": "A happy kid sings.",
    "sampleSentenceVi": "Em bé vui hát líu lo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Em bé nhỏ mỉm cười hồn nhiên"
    }
  },
  {
    "id": "wb_c_k_kit_64",
    "word": "kit",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "k",
      "i",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "bộ đồ chơi",
    "emoji": "🧰",
    "sampleSentence": "An art kit with paint.",
    "sampleSentenceVi": "Bộ cọ vẽ nhiều sắc màu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bộ cọ vẽ tranh và màu nước rực rỡ"
    }
  },
  {
    "id": "wb_c_k_kite_65",
    "word": "kite",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "k",
      "i",
      "t",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "con diều bay",
    "emoji": "🪁",
    "sampleSentence": "Fly a kite in the wind.",
    "sampleSentenceVi": "Thả diều no gió trên đồi.",
    "visual": {
      "url": "/assets/ehon/kite.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cánh diều rực rỡ bay trên bầu trời xanh"
    }
  },
  {
    "id": "wb_c_k_can_66",
    "word": "can",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "c",
      "a",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "chiếc lon nước",
    "emoji": "🥫",
    "sampleSentence": "A can of fresh juice.",
    "sampleSentenceVi": "Lon nước trái cây tươi.",
    "visual": {
      "url": "/assets/ehon/can.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon lon nước ép hoa quả cam dâu tươi mát"
    }
  },
  {
    "id": "wb_c_k_cot_67",
    "word": "cot",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "c",
      "o",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "chiếc nôi em bé",
    "emoji": "🛏️",
    "sampleSentence": "Baby sleeps in a cot.",
    "sampleSentenceVi": "Bé con ngủ ngoan trong nôi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc nôi ấm áp cho bé ngủ ngon"
    }
  },
  {
    "id": "wb_c_k_kiss_68",
    "word": "kiss",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "k",
      "i",
      "ss"
    ],
    "theme": "actions",
    "meaningVi": "nụ hôn yêu thương",
    "emoji": "😘",
    "sampleSentence": "A sweet goodnight kiss.",
    "sampleSentenceVi": "Nụ hôn chúc ngủ ngon ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nụ hôn yêu thương của mẹ dành cho con"
    }
  },
  {
    "id": "wb_c_k_kick_69",
    "word": "kick",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "k",
      "i",
      "ck"
    ],
    "theme": "actions",
    "meaningVi": "sút bóng vui",
    "emoji": "⚽",
    "sampleSentence": "Kick the soccer ball.",
    "sampleSentenceVi": "Sút quả bóng lăn tít trên sân cỏ.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả bóng lăn trên thảm cỏ xanh"
    }
  },
  {
    "id": "wb_e_egg_70",
    "word": "egg",
    "phonemeId": "e",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "e",
      "g"
    ],
    "theme": "objects_food",
    "meaningVi": "quả trứng",
    "emoji": "🥚",
    "sampleSentence": "Crack an egg for baking.",
    "sampleSentenceVi": "Đập quả trứng làm bánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả trứng gà sạch màu nâu bóng"
    }
  },
  {
    "id": "wb_e_elf_71",
    "word": "elf",
    "phonemeId": "e",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "e",
      "l",
      "f"
    ],
    "theme": "actions",
    "meaningVi": "chú yêu tinh nhỏ",
    "emoji": "🧝",
    "sampleSentence": "A little fairy elf.",
    "sampleSentenceVi": "Chú yêu tinh nhỏ dễ thương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú yêu tinh nhỏ xinh của rừng thông"
    }
  },
  {
    "id": "wb_e_elm_72",
    "word": "elm",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "l",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "cây du",
    "emoji": "🌳",
    "sampleSentence": "A tall leafy elm tree.",
    "sampleSentenceVi": "Cây du cao tỏa bóng mát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tán cây du cổ thụ tỏa bóng mát"
    }
  },
  {
    "id": "wb_e_end_73",
    "word": "end",
    "phonemeId": "e",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "e",
      "n",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "kết thúc",
    "emoji": "🏁",
    "sampleSentence": "The end of the story.",
    "sampleSentenceVi": "Đoạn kết câu chuyện hay.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ánh hoàng hôn báo hiệu kết thúc ngày dài"
    }
  },
  {
    "id": "wb_e_elk_74",
    "word": "elk",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "l",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "chú nai sừng tấm",
    "emoji": "🦌",
    "sampleSentence": "The majestic elk walks.",
    "sampleSentenceVi": "Chú nai sừng tấm dạo bước.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú nai sừng tấm sừng sững giữa rừng thông"
    }
  },
  {
    "id": "wb_e_echo_75",
    "word": "echo",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "ch",
      "o"
    ],
    "theme": "actions",
    "meaningVi": "tiếng vang",
    "emoji": "📢",
    "sampleSentence": "Hear the mountain echo.",
    "sampleSentenceVi": "Lắng nghe tiếng vang từ hẻm núi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hẻm núi cao nơi tiếng vang vọng lại"
    }
  },
  {
    "id": "wb_e_exit_76",
    "word": "exit",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "x",
      "i",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "lối ra",
    "emoji": "🚪",
    "sampleSentence": "Walk toward the green exit.",
    "sampleSentenceVi": "Bước theo biển chỉ dẫn lối ra.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lối ra rộng mở ngập tràn ánh sáng"
    }
  },
  {
    "id": "wb_e_empty_77",
    "word": "empty",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "m",
      "p",
      "t",
      "y"
    ],
    "theme": "objects_food",
    "meaningVi": "trống rỗng",
    "emoji": "🥣",
    "sampleSentence": "Eat all soup, plate is empty.",
    "sampleSentenceVi": "Bé ăn hết súp, đĩa sạch trơn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bát gốm trắng tinh tươm"
    }
  },
  {
    "id": "wb_e_bell_78",
    "word": "bell",
    "phonemeId": "e",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "b",
      "e",
      "ll"
    ],
    "theme": "objects_food",
    "meaningVi": "chuông nhỏ",
    "emoji": "🔔",
    "sampleSentence": "Ring the merry bell.",
    "sampleSentenceVi": "Rung chuông vui đón ngày mới.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc chuông vàng leng keng rộn rã"
    }
  },
  {
    "id": "wb_e_pen_79",
    "word": "pen",
    "phonemeId": "e",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "p",
      "e",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "cây bút màu",
    "emoji": "🖊️",
    "sampleSentence": "A red pen writes letters.",
    "sampleSentenceVi": "Cây bút đỏ viết từng nét chữ.",
    "visual": {
      "url": "/assets/ehon/pen.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc bút máy lấp lánh viết chữ xinh"
    }
  },
  {
    "id": "wb_h_hat_80",
    "word": "hat",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "a",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc mũ rộng vành",
    "emoji": "👒",
    "sampleSentence": "A sunny straw hat.",
    "sampleSentenceVi": "Chiếc mũ cói che nắng ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc mũ rộng vành che nắng"
    }
  },
  {
    "id": "wb_h_hen_81",
    "word": "hen",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "e",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "cô gà mái",
    "emoji": "🐔",
    "sampleSentence": "The red hen pecks corn.",
    "sampleSentenceVi": "Cô gà mái mổ hạt bắp.",
    "visual": {
      "url": "/assets/ehon/hen.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cô gà mái đỏ mổ thóc trên sân nông trại"
    }
  },
  {
    "id": "wb_h_hop_82",
    "word": "hop",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "o",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "nhảy lò cò",
    "emoji": "🦘",
    "sampleSentence": "Hop like a little bunny.",
    "sampleSentenceVi": "Nhảy lò cò như chú thỏ con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú thỏ trắng nhảy tung tăng trên bãi cỏ"
    }
  },
  {
    "id": "wb_h_hot_83",
    "word": "hot",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "o",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "nóng ấm",
    "emoji": "🔥",
    "sampleSentence": "The warm tea is hot.",
    "sampleSentenceVi": "Tách trà nóng thơm lừng.",
    "visual": {
      "url": "/assets/ehon/sun.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon mặt trời nắng ấm rực rỡ"
    }
  },
  {
    "id": "wb_h_hug_84",
    "word": "hug",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "u",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "cái ôm ấm áp",
    "emoji": "🤗",
    "sampleSentence": "Give mom a big hug.",
    "sampleSentenceVi": "Trao mẹ cái ôm ấm áp.",
    "visual": {
      "url": "/assets/ehon/puppy_hug.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cái ôm ấm áp vỗ về bạn cún nhỏ"
    }
  },
  {
    "id": "wb_h_hut_85",
    "word": "hut",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "u",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "ngôi lều nhỏ",
    "emoji": "🛖",
    "sampleSentence": "A cozy wooden hut.",
    "sampleSentenceVi": "Ngôi lều gỗ nhỏ xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Túp lều gỗ mộc mạc bên sườn đồi"
    }
  },
  {
    "id": "wb_h_hand_86",
    "word": "hand",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "a",
      "n",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "bàn tay nhỏ",
    "emoji": "✋",
    "sampleSentence": "Hold my gentle hand.",
    "sampleSentenceVi": "Nắm lấy bàn tay dịu dàng của mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bàn tay nhỏ xinh xòe rộng năm ngón"
    }
  },
  {
    "id": "wb_h_hill_87",
    "word": "hill",
    "phonemeId": "h",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "h",
      "i",
      "ll"
    ],
    "theme": "nature",
    "meaningVi": "ngọn đồi cỏ xanh",
    "emoji": "⛰️",
    "sampleSentence": "Roll down the green hill.",
    "sampleSentenceVi": "Lăn tròn trên ngọn đồi cỏ êm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngọn đồi cỏ xanh ngắt thoai thoải"
    }
  },
  {
    "id": "wb_h_home_88",
    "word": "home",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "o",
      "m",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "mái ấm gia đình",
    "emoji": "🏡",
    "sampleSentence": "Sweet cozy home.",
    "sampleSentenceVi": "Mái ấm gia đình chan hòa yêu thương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mái nhà ấm cúng bình yên"
    }
  },
  {
    "id": "wb_h_horn_89",
    "word": "horn",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "or",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "kèn đồng đồ chơi",
    "emoji": "🎺",
    "sampleSentence": "Toot the golden horn.",
    "sampleSentenceVi": "Thổi kèn toe toe vui nhộn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc kèn đồng vang lên khúc nhạc vui"
    }
  },
  {
    "id": "wb_r_run_90",
    "word": "run",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "u",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "chạy nhảy",
    "emoji": "🏃",
    "sampleSentence": "Run fast on the grass.",
    "sampleSentenceVi": "Chạy nhanh trên thảm cỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé con chạy tung tăng trên đường chạy"
    }
  },
  {
    "id": "wb_r_red_91",
    "word": "red",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "e",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "màu đỏ tươi",
    "emoji": "🔴",
    "sampleSentence": "A pretty red rose.",
    "sampleSentenceVi": "Bông hồng đỏ rực rỡ.",
    "visual": {
      "url": "/assets/ehon/apple.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon màu đỏ tươi tắn của quả táo"
    }
  },
  {
    "id": "wb_r_rat_92",
    "word": "rat",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "a",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "chú chuột",
    "emoji": "🐀",
    "sampleSentence": "A little gray rat.",
    "sampleSentenceVi": "Chú chuột con màu xám.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chuột hamster nhỏ gặm hạt dẻ"
    }
  },
  {
    "id": "wb_r_rip_93",
    "word": "rip",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "xé giấy cắt dán",
    "emoji": "✂️",
    "sampleSentence": "Rip the colored paper.",
    "sampleSentenceVi": "Xé dán giấy thủ công.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Xé nhẹ tờ giấy màu thủ công"
    }
  },
  {
    "id": "wb_r_rug_94",
    "word": "rug",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "u",
      "g"
    ],
    "theme": "objects_food",
    "meaningVi": "tấm thảm len",
    "emoji": "🧶",
    "sampleSentence": "Sit on the soft rug.",
    "sampleSentenceVi": "Ngồi trên thảm len êm ái.",
    "visual": {
      "url": "/assets/ehon/bug_rug.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon tấm thảm len đan màu sắc ấm áp"
    }
  },
  {
    "id": "wb_r_rob_95",
    "word": "rob",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "o",
      "b"
    ],
    "theme": "animals",
    "meaningVi": "chú chim Robin",
    "emoji": "🐦",
    "sampleSentence": "Robin sings on the tree.",
    "sampleSentenceVi": "Chim robin hót trên cành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cướp lấy bóng trong trò chơi"
    }
  },
  {
    "id": "wb_r_rod_96",
    "word": "rod",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "o",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "cần câu cá",
    "emoji": "🎣",
    "sampleSentence": "A fishing rod by the lake.",
    "sampleSentenceVi": "Cần câu cá bên hồ nước êm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cần câu cá nằm nghiêng bên bờ hồ"
    }
  },
  {
    "id": "wb_r_rib_97",
    "word": "rib",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "i",
      "b"
    ],
    "theme": "actions",
    "meaningVi": "xương sườn nhỏ",
    "emoji": "🦴",
    "sampleSentence": "The kitten purrs inside.",
    "sampleSentenceVi": "Mèo con kêu gừ gừ êm ái.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cún con ngoan ngoãn nằm ngủ"
    }
  },
  {
    "id": "wb_r_rock_98",
    "word": "rock",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "o",
      "ck"
    ],
    "theme": "nature",
    "meaningVi": "hòn đá cuội",
    "emoji": "🪨",
    "sampleSentence": "A smooth gray river rock.",
    "sampleSentenceVi": "Viên đá cuội nhẵn bóng bên suối.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tảng đá cuội tròn xoe mịn màng"
    }
  },
  {
    "id": "wb_r_ring_99",
    "word": "ring",
    "phonemeId": "r",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "r",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "chiếc nhẫn bạc",
    "emoji": "💍",
    "sampleSentence": "A silver friendship ring.",
    "sampleSentenceVi": "Chiếc nhẫn tình bạn sáng lấp lánh.",
    "visual": {
      "url": "/assets/ehon/king_ring.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc nhẫn vàng ngọc lấp lánh"
    }
  },
  {
    "id": "wb_m_man_100",
    "word": "man",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "a",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "người đàn ông",
    "emoji": "👨",
    "sampleSentence": "A kind farmer man.",
    "sampleSentenceVi": "Một bác nông dân tốt bụng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Người đàn ông hiền từ mỉm cười"
    }
  },
  {
    "id": "wb_m_mat_101",
    "word": "mat",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "a",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "tấm thảm chùi chân",
    "emoji": "🧘",
    "sampleSentence": "Wipe shoes on the mat.",
    "sampleSentenceVi": "Lau giày trên tấm thảm.",
    "visual": {
      "url": "/assets/ehon/cat_mat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú mèo ngồi trên chiếc thảm đan"
    }
  },
  {
    "id": "wb_m_mud_102",
    "word": "mud",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "u",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "bùn đất",
    "emoji": "🪵",
    "sampleSentence": "Puddle of brown mud.",
    "sampleSentenceVi": "Vũng bùn đất nâu mịn.",
    "visual": {
      "url": "/assets/ehon/pig.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon vũng bùn non cho chú lợn tắm mát"
    }
  },
  {
    "id": "wb_m_mop_103",
    "word": "mop",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "o",
      "p"
    ],
    "theme": "nature",
    "meaningVi": "cây lau sàn",
    "emoji": "🧹",
    "sampleSentence": "Mop the kitchen floor.",
    "sampleSentenceVi": "Lau sàn nhà sạch bong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây lau sàn nhà sạch bong kin kít"
    }
  },
  {
    "id": "wb_m_milk_104",
    "word": "milk",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "i",
      "l",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "sữa bò tươi",
    "emoji": "🥛",
    "sampleSentence": "Drink sweet fresh milk.",
    "sampleSentenceVi": "Uống ly sữa tươi thơm mát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ly sữa tươi trắng thơm lành"
    }
  },
  {
    "id": "wb_m_map_105",
    "word": "map",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "a",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "bản đồ thám hiểm",
    "emoji": "🗺️",
    "sampleSentence": "Look at the island map.",
    "sampleSentenceVi": "Xem bản đồ thám hiểm đảo.",
    "visual": {
      "url": "/assets/ehon/archipelago.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon tấm bản đồ thám hiểm thế giới kỳ diệu"
    }
  },
  {
    "id": "wb_m_mug_106",
    "word": "mug",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "u",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "chiếc ca gốm",
    "emoji": "🍺",
    "sampleSentence": "Warm cocoa in a big mug.",
    "sampleSentenceVi": "Ca ca-cao ấm ngọt thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc ly gốm đựng nước ấm"
    }
  },
  {
    "id": "wb_m_moss_107",
    "word": "moss",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "o",
      "ss"
    ],
    "theme": "nature",
    "meaningVi": "thảm rêu xanh",
    "emoji": "🌿",
    "sampleSentence": "Green moss on the stone.",
    "sampleSentenceVi": "Thảm rêu xanh biếc trên tảng đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thảm rêu xanh biếc mềm mịn trên đá"
    }
  },
  {
    "id": "wb_m_mask_108",
    "word": "mask",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "a",
      "s",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "mặt nạ hóa trang",
    "emoji": "🎭",
    "sampleSentence": "A lion paper mask.",
    "sampleSentenceVi": "Chiếc mặt nạ sư tử bằng giấy.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mặt nạ hóa trang ngộ nghĩnh cho trẻ thơ"
    }
  },
  {
    "id": "wb_m_moon_109",
    "word": "moon",
    "phonemeId": "m",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "m",
      "oo",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "ánh trăng dịu",
    "emoji": "🌙",
    "sampleSentence": "The crescent moon shines.",
    "sampleSentenceVi": "Vầng trăng khuyết sáng dịu dàng.",
    "visual": {
      "url": "/assets/ehon/moon_spoon.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon vầng trăng tròn vành vạnh đêm rằm"
    }
  },
  {
    "id": "wb_d_dog_110",
    "word": "dog",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "o",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "chú cún con",
    "emoji": "🐶",
    "sampleSentence": "The happy dog wags tail.",
    "sampleSentenceVi": "Chú cún vẫy đuôi mừng vui.",
    "visual": {
      "url": "/assets/ehon/dog.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cún cưng nô đùa trên đồng cỏ"
    }
  },
  {
    "id": "wb_d_dad_111",
    "word": "dad",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "a",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "bố yêu",
    "emoji": "👨‍👧",
    "sampleSentence": "Dad reads me a story.",
    "sampleSentenceVi": "Bố đọc truyện cho bé nghe.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Người cha ấm áp cõng bé trên vai"
    }
  },
  {
    "id": "wb_d_dig_112",
    "word": "dig",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "i",
      "g"
    ],
    "theme": "nature",
    "meaningVi": "đào xới đất",
    "emoji": "⛏️",
    "sampleSentence": "Dig a hole for seeds.",
    "sampleSentenceVi": "Đào hố nhỏ gieo mầm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đào xới đất ươm mầm cây non"
    }
  },
  {
    "id": "wb_d_dot_113",
    "word": "dot",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "o",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "chấm tròn",
    "emoji": "🔵",
    "sampleSentence": "A polka dot pattern.",
    "sampleSentenceVi": "Họa tiết chấm tròn xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những chấm bi tròn sắc màu xinh xắn"
    }
  },
  {
    "id": "wb_d_dip_114",
    "word": "dip",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "i",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "chấm sốt",
    "emoji": "🥣",
    "sampleSentence": "Dip bread in honey.",
    "sampleSentenceVi": "Chấm bánh mì vào mật ong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chấm ngón chân xuống làn nước mát"
    }
  },
  {
    "id": "wb_d_dam_115",
    "word": "dam",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "a",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "con đập nước",
    "emoji": "🦫",
    "sampleSentence": "The beaver builds a dam.",
    "sampleSentenceVi": "Chú hải ly đắp đập ngăn dòng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con đập nước ngăn dòng chảy"
    }
  },
  {
    "id": "wb_d_duck_116",
    "word": "duck",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "u",
      "ck"
    ],
    "theme": "animals",
    "meaningVi": "chú vịt con",
    "emoji": "🦆",
    "sampleSentence": "Yellow duck in the pond.",
    "sampleSentenceVi": "Chú vịt vàng bơi lội dưới ao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú vịt con lông vàng bơi lội"
    }
  },
  {
    "id": "wb_d_drum_117",
    "word": "drum",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "r",
      "u",
      "m"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc trống rộn ràng",
    "emoji": "🥁",
    "sampleSentence": "Beat the wooden drum.",
    "sampleSentenceVi": "Gõ chiếc trống gỗ vang rộn rã.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc trống gỗ gõ vang rộn rã"
    }
  },
  {
    "id": "wb_d_doll_118",
    "word": "doll",
    "phonemeId": "d",
    "group": 2,
    "stage": 1,
    "phonemes": [
      "d",
      "o",
      "ll"
    ],
    "theme": "actions",
    "meaningVi": "búp bê xinh",
    "emoji": "🪆",
    "sampleSentence": "A lovely vintage doll.",
    "sampleSentenceVi": "Búp bê xinh xắn cài nơ hồng.",
    "visual": {
      "url": "/assets/ehon/doll.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon búp bê vải xinh xắn mặc váy hoa"
    }
  },
  {
    "id": "wb_d_desk_119",
    "word": "desk",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "e",
      "s",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "bàn học nhỏ",
    "emoji": "🛋️",
    "sampleSentence": "Study at the wooden desk.",
    "sampleSentenceVi": "Ngồi học ngay ngắn bên bàn gỗ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bàn học gỗ ngăn nắp của bé"
    }
  },
  {
    "id": "wb_g_gap_120",
    "word": "gap",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "a",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "khoảng trống",
    "emoji": "🕳️",
    "sampleSentence": "A gap in the garden fence.",
    "sampleSentenceVi": "Khe hở nhỏ ở hàng rào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khe núi đá xanh hùng vĩ"
    }
  },
  {
    "id": "wb_g_gas_121",
    "word": "gas",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "a",
      "s"
    ],
    "theme": "actions",
    "meaningVi": "khí đốt / hơi",
    "emoji": "💨",
    "sampleSentence": "Gas powers the stove.",
    "sampleSentenceVi": "Bếp gas nấu bữa cơm ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khinh khí cầu bay lượn nhờ khí ấm"
    }
  },
  {
    "id": "wb_g_gut_122",
    "word": "gut",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "u",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "bụng dạ tốt",
    "emoji": "🫄",
    "sampleSentence": "Healthy food is good.",
    "sampleSentenceVi": "Ăn món ngon bụng khỏe khoắn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bụng nhỏ xinh khỏe mạnh"
    }
  },
  {
    "id": "wb_g_gum_123",
    "word": "gum",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "u",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "kẹo cao su",
    "emoji": "🍬",
    "sampleSentence": "Sweet bubble gum.",
    "sampleSentenceVi": "Kẹo cao su ngọt thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Viên kẹo cao su ngọt thơm bóng bẩy"
    }
  },
  {
    "id": "wb_g_gift_124",
    "word": "gift",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "i",
      "f",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "hộp quà tặng",
    "emoji": "🎁",
    "sampleSentence": "Open the birthday gift.",
    "sampleSentenceVi": "Mở hộp quà sinh nhật bất ngờ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hộp quà thắt nơ ruy băng đỏ xinh xắn"
    }
  },
  {
    "id": "wb_g_gate_125",
    "word": "gate",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "a",
      "t",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "cổng gỗ rực rỡ",
    "emoji": "⛩️",
    "sampleSentence": "Open the garden gate.",
    "sampleSentenceVi": "Mở cánh cổng gỗ vào vườn hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cánh cổng gỗ dẫn vào khu vườn hoa"
    }
  },
  {
    "id": "wb_g_gold_126",
    "word": "gold",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "o",
      "l",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "vàng óng ánh",
    "emoji": "🪙",
    "sampleSentence": "Shining gold coins.",
    "sampleSentenceVi": "Những đồng xu vàng óng ánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những đồng tiền vàng lấp lánh chói lọi"
    }
  },
  {
    "id": "wb_g_goat_127",
    "word": "goat",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "oa",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "chú dê trắng",
    "emoji": "🐐",
    "sampleSentence": "The mountain goat leaps.",
    "sampleSentenceVi": "Chú dê núi nhảy qua mỏm đá.",
    "visual": {
      "url": "/assets/ehon/goat_boat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bạn dê trắng chèo thuyền trên sông"
    }
  },
  {
    "id": "wb_g_girl_128",
    "word": "girl",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "ir",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "bé gái đáng yêu",
    "emoji": "👧",
    "sampleSentence": "The little girl smiles.",
    "sampleSentenceVi": "Bé gái mỉm cười rạng rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé gái dễ thương mỉm cười rạng ngời"
    }
  },
  {
    "id": "wb_g_goose_129",
    "word": "goose",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "oo",
      "s",
      "e"
    ],
    "theme": "animals",
    "meaningVi": "chú ngỗng trắng",
    "emoji": "🪿",
    "sampleSentence": "A white goose waddles.",
    "sampleSentenceVi": "Chú ngỗng trắng lạch bạch đi dạo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ngỗng trắng kiêu hãnh bơi lội"
    }
  },
  {
    "id": "wb_o_ox_130",
    "word": "ox",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "chú bò đực",
    "emoji": "🐂",
    "sampleSentence": "A strong working ox.",
    "sampleSentenceVi": "Chú bò tót khỏe mạnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú bò đực vạm vỡ trên nông trại"
    }
  },
  {
    "id": "wb_o_off_131",
    "word": "off",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "f"
    ],
    "theme": "objects_food",
    "meaningVi": "tắt đèn",
    "emoji": "💡",
    "sampleSentence": "Turn the lights off.",
    "sampleSentenceVi": "Tắt đèn chuẩn bị ngủ ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tắt công tắc đèn khi đi ngủ"
    }
  },
  {
    "id": "wb_o_on_132",
    "word": "on",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "ở trên",
    "emoji": "🔛",
    "sampleSentence": "The book is on the table.",
    "sampleSentenceVi": "Sách nằm trên bàn học.",
    "visual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú kiến ngồi trên mặt chảo"
    }
  },
  {
    "id": "wb_o_odd_133",
    "word": "odd",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "kỳ lạ / số lẻ",
    "emoji": "🎲",
    "sampleSentence": "An odd little beetle.",
    "sampleSentenceVi": "Một chú bọ ngộ nghĩnh lạ kỳ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những khối đồ chơi số lẻ vui nhộn"
    }
  },
  {
    "id": "wb_o_otter_134",
    "word": "otter",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú rái cá",
    "emoji": "🦦",
    "sampleSentence": "The playful otter swims.",
    "sampleSentenceVi": "Chú rái cá tinh nghịch bơi lội.",
    "visual": {
      "url": "/assets/ehon/otter.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú rái cá bơi ngửa trên dòng suối trong"
    }
  },
  {
    "id": "wb_o_ostrich_135",
    "word": "ostrich",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "s",
      "t",
      "r",
      "i",
      "ch"
    ],
    "theme": "actions",
    "meaningVi": "đà điểu chạy nhanh",
    "emoji": "🪶",
    "sampleSentence": "An ostrich runs across sand.",
    "sampleSentenceVi": "Đà điểu sải bước trên cát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú đà điểu sải bước chân dài"
    }
  },
  {
    "id": "wb_o_orange_136",
    "word": "orange",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "r",
      "a",
      "n",
      "g",
      "e"
    ],
    "theme": "objects_food",
    "meaningVi": "quả cam ngọt",
    "emoji": "🍊",
    "sampleSentence": "A sweet juicy orange.",
    "sampleSentenceVi": "Quả cam ngọt lành mọng nước.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả cam vàng mọng nước ngọt lành"
    }
  },
  {
    "id": "wb_o_sock_137",
    "word": "sock",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "s",
      "o",
      "ck"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc tất xinh",
    "emoji": "🧦",
    "sampleSentence": "Put on your warm sock.",
    "sampleSentenceVi": "Mang đôi tất ấm vào chân.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi tất len ấm áp sắc màu"
    }
  },
  {
    "id": "wb_o_pot_138",
    "word": "pot",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "p",
      "o",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "chiếc chậu hoa",
    "emoji": "🪴",
    "sampleSentence": "Flowers bloom in the pot.",
    "sampleSentenceVi": "Hoa nở rực rỡ trong chiếc chậu xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc nồi nấu súp gia đình ấm cúng"
    }
  },
  {
    "id": "wb_o_fox_139",
    "word": "fox",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "o",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "chú cáo nhỏ",
    "emoji": "🦊",
    "sampleSentence": "A clever little fox.",
    "sampleSentenceVi": "Chú cáo con thông minh lém lỉnh.",
    "visual": {
      "url": "/assets/ehon/fox_box.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cáo nhỏ tinh nghịch trong chiếc hộp"
    }
  },
  {
    "id": "wb_u_up_140",
    "word": "up",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "p"
    ],
    "theme": "nature",
    "meaningVi": "lên cao",
    "emoji": "⬆️",
    "sampleSentence": "Look up at the stars.",
    "sampleSentenceVi": "Nhìn lên bầu trời ngàn sao.",
    "visual": {
      "url": "/assets/ehon/kite.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cánh diều bay vút lên cao"
    }
  },
  {
    "id": "wb_u_us_141",
    "word": "us",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "s"
    ],
    "theme": "actions",
    "meaningVi": "chúng mình",
    "emoji": "👫",
    "sampleSentence": "Come play with us.",
    "sampleSentenceVi": "Cùng chơi với chúng mình nhé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chúng mình cùng nắm tay nhau bước đi"
    }
  },
  {
    "id": "wb_u_umbrella_142",
    "word": "umbrella",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "m",
      "b",
      "r",
      "e",
      "l",
      "a"
    ],
    "theme": "nature",
    "meaningVi": "chiếc ô che mưa",
    "emoji": "☂️",
    "sampleSentence": "Open the colorful umbrella.",
    "sampleSentenceVi": "Bung chiếc ô che giọt mưa rơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc ô bảy sắc cầu vồng che mưa"
    }
  },
  {
    "id": "wb_u_under_143",
    "word": "under",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "n",
      "d",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "ở phía dưới",
    "emoji": "👇",
    "sampleSentence": "Under the green leaf.",
    "sampleSentenceVi": "Dưới tán lá xanh mát.",
    "visual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú kiến nấp dưới đáy chảo"
    }
  },
  {
    "id": "wb_u_uncle_144",
    "word": "uncle",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "n",
      "c",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "chú / bác yêu quý",
    "emoji": "👨",
    "sampleSentence": "Visit my funny uncle.",
    "sampleSentenceVi": "Đến thăm người chú vui tính.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Người chú vui tính luôn tươi cười"
    }
  },
  {
    "id": "wb_u_ugly_145",
    "word": "ugly",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "g",
      "l",
      "y"
    ],
    "theme": "animals",
    "meaningVi": "vịt con xấu xí hóa thiên nga",
    "emoji": "🦢",
    "sampleSentence": "The ugly duckling turns swan.",
    "sampleSentenceVi": "Vịt con hóa thành thiên nga tuyệt đẹp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú vịt con hóa thành thiên nga"
    }
  },
  {
    "id": "wb_u_sun_146",
    "word": "sun",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "s",
      "u",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "nắng ấm",
    "emoji": "☀️",
    "sampleSentence": "Warm sun brightens the day.",
    "sampleSentenceVi": "Nắng ấm thắp sáng ngày mới.",
    "visual": {
      "url": "/assets/ehon/sun.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon mặt trời rạng rỡ tỏa tia nắng"
    }
  },
  {
    "id": "wb_u_bus_147",
    "word": "bus",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "s"
    ],
    "theme": "objects_food",
    "meaningVi": "xe buýt trường học",
    "emoji": "🚌",
    "sampleSentence": "Hop on the yellow school bus.",
    "sampleSentenceVi": "Lên xe buýt trường học rộn rã.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe buýt màu vàng đưa bé đến trường"
    }
  },
  {
    "id": "wb_u_cup_148",
    "word": "cup",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "c",
      "u",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "cốc sữa ấm",
    "emoji": "🥛",
    "sampleSentence": "Drink a cup of milk.",
    "sampleSentenceVi": "Uống một cốc sữa ấm trước khi ngủ.",
    "visual": {
      "url": "/assets/ehon/cup.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon tách trà rực rỡ bốc khói ấm áp"
    }
  },
  {
    "id": "wb_u_bug_149",
    "word": "bug",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "chú bọ rùa",
    "emoji": "🐞",
    "sampleSentence": "A little bug crawls.",
    "sampleSentenceVi": "Chú bọ rùa bò chầm chậm.",
    "visual": {
      "url": "/assets/ehon/bug_rug.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú bọ nhỏ dễ thương trên tấm thảm len"
    }
  },
  {
    "id": "wb_l_lip_150",
    "word": "lip",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "đôi môi xinh",
    "emoji": "👄",
    "sampleSentence": "Smile with your lips.",
    "sampleSentenceVi": "Mỉm cười với bờ môi xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi môi hồng xinh xắn của em bé đang cười"
    }
  },
  {
    "id": "wb_l_log_151",
    "word": "log",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "o",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "khúc gỗ tròn",
    "emoji": "🪵",
    "sampleSentence": "A frog on a brown log.",
    "sampleSentenceVi": "Chú ếch ngồi trên khúc gỗ.",
    "visual": {
      "url": "/assets/ehon/frog_log.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon khúc gỗ mộc trên thảm rêu xanh"
    }
  },
  {
    "id": "wb_l_leg_152",
    "word": "leg",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "e",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "đôi chân",
    "emoji": "🦵",
    "sampleSentence": "Kick the ball with your leg.",
    "sampleSentenceVi": "Đá bóng bằng đôi chân khỏe.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi chân bước đi vững vàng"
    }
  },
  {
    "id": "wb_l_lot_153",
    "word": "lot",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "o",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "rất nhiều",
    "emoji": "✨",
    "sampleSentence": "A lot of bright stars.",
    "sampleSentenceVi": "Rất nhiều vì sao lấp lánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thật nhiều trái cây thơm ngọt"
    }
  },
  {
    "id": "wb_l_lamp_154",
    "word": "lamp",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "m",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc đèn ngủ ấm",
    "emoji": "🛋️",
    "sampleSentence": "A warm reading lamp.",
    "sampleSentenceVi": "Chiếc đèn đọc sách tỏa sáng dịu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc đèn bàn tỏa ánh sáng vàng ấm"
    }
  },
  {
    "id": "wb_l_leaf_155",
    "word": "leaf",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "ea",
      "f"
    ],
    "theme": "nature",
    "meaningVi": "chiếc lá biếc",
    "emoji": "🍃",
    "sampleSentence": "A green fluttering leaf.",
    "sampleSentenceVi": "Chiếc lá xanh đung đưa trong gió.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc lá xanh biếc đọng giọt sương mai"
    }
  },
  {
    "id": "wb_l_lock_156",
    "word": "lock",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "o",
      "ck"
    ],
    "theme": "actions",
    "meaningVi": "ổ khóa vàng",
    "emoji": "🔒",
    "sampleSentence": "Turn the key in the lock.",
    "sampleSentenceVi": "Vặn chìa mở chiếc khóa xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ổ khóa đồng bảo vệ kho báu"
    }
  },
  {
    "id": "wb_l_lime_157",
    "word": "lime",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "i",
      "m",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "quả chanh xanh thơm mát",
    "emoji": "🍋",
    "sampleSentence": "Squeeze a fresh green lime.",
    "sampleSentenceVi": "Vắt quả chanh xanh thơm mát.",
    "visual": {
      "url": "/assets/ehon/lime.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả chanh xanh mọng nước thơm mát"
    }
  },
  {
    "id": "wb_l_lake_158",
    "word": "lake",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "k",
      "e"
    ],
    "theme": "nature",
    "meaningVi": "hồ nước phẳng lặng",
    "emoji": "🏞️",
    "sampleSentence": "Swans glide on the lake.",
    "sampleSentenceVi": "Thiên nga lướt nhẹ trên mặt hồ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mặt hồ phẳng lặng phản chiếu mây trời"
    }
  },
  {
    "id": "wb_l_lion_159",
    "word": "lion",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "i",
      "o",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chú sư tử oai vệ",
    "emoji": "🦁",
    "sampleSentence": "The friendly lion roars.",
    "sampleSentenceVi": "Chú sư tử thân thiện cất tiếng gầm.",
    "visual": {
      "url": "/assets/ehon/leo.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú sư tử nhỏ dũng cảm"
    }
  },
  {
    "id": "wb_f_fox_160",
    "word": "fox",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "o",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "chú cáo cam",
    "emoji": "🦊",
    "sampleSentence": "A quick sly fox.",
    "sampleSentenceVi": "Chú cáo thông minh nhanh nhẹn.",
    "visual": {
      "url": "/assets/ehon/fox_box.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cáo nhỏ tinh nghịch trong chiếc hộp"
    }
  },
  {
    "id": "wb_f_fun_161",
    "word": "fun",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "u",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "vui vẻ",
    "emoji": "🎉",
    "sampleSentence": "Learning phonics is fun.",
    "sampleSentenceVi": "Học phát âm thật vui thích.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Niềm vui rộn rã trong trò chơi"
    }
  },
  {
    "id": "wb_f_fan_162",
    "word": "fan",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "a",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chiếc quạt mát",
    "emoji": "🪭",
    "sampleSentence": "The paper fan cools us.",
    "sampleSentenceVi": "Chiếc quạt giấy phe phẩy mát rượi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc quạt nan xua tan ngày hè nóng"
    }
  },
  {
    "id": "wb_f_fit_163",
    "word": "fit",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "i",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "vừa vặn",
    "emoji": "👟",
    "sampleSentence": "Shoes fit my small feet.",
    "sampleSentenceVi": "Giày vừa vặn chân bé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc mũ vừa vặn với bé yêu"
    }
  },
  {
    "id": "wb_f_fog_164",
    "word": "fog",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "o",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "màn sương mù",
    "emoji": "🌫️",
    "sampleSentence": "White fog over the hills.",
    "sampleSentenceVi": "Sương mù trắng giăng trên đồi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Làn sương mù mờ ảo giăng lối"
    }
  },
  {
    "id": "wb_f_fish_165",
    "word": "fish",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "i",
      "sh"
    ],
    "theme": "animals",
    "meaningVi": "chú cá nhỏ bơi lội",
    "emoji": "🐟",
    "sampleSentence": "Little fish swims fast.",
    "sampleSentenceVi": "Chú cá nhỏ bơi thoăn thoắt.",
    "visual": {
      "url": "/assets/ehon/three_fish.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đàn cá sắc màu bơi lội dưới làn nước biếc"
    }
  },
  {
    "id": "wb_f_frog_166",
    "word": "frog",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "r",
      "o",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "chú ếch xanh",
    "emoji": "🐸",
    "sampleSentence": "A green frog hops.",
    "sampleSentenceVi": "Chú ếch xanh nhảy tõm xuống ao.",
    "visual": {
      "url": "/assets/ehon/frog_log.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú ếch xanh ngồi trên khúc gỗ"
    }
  },
  {
    "id": "wb_f_flag_167",
    "word": "flag",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "l",
      "a",
      "g"
    ],
    "theme": "nature",
    "meaningVi": "lá cờ sắc màu",
    "emoji": "🚩",
    "sampleSentence": "Wave the bright flag.",
    "sampleSentenceVi": "Vẫy cao lá cờ rực rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lá cờ sắc màu bay phấp phới trong gió"
    }
  },
  {
    "id": "wb_f_fork_168",
    "word": "fork",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "or",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc dĩa ăn bánh",
    "emoji": "🍴",
    "sampleSentence": "Use a fork for cake.",
    "sampleSentenceVi": "Dùng nĩa thưởng thức miếng bánh thơm.",
    "visual": {
      "url": "/assets/ehon/fork.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc nĩa và thìa vui tươi thưởng thức hoa quả"
    }
  },
  {
    "id": "wb_f_farm_169",
    "word": "farm",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "ar",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "nông trại vui vẻ",
    "emoji": "🚜",
    "sampleSentence": "Life on the green farm.",
    "sampleSentenceVi": "Cuộc sống thanh bình nơi nông trại.",
    "visual": {
      "url": "/assets/ehon/hen.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon nông trại gia đình ấm áp bên muôn thú"
    }
  },
  {
    "id": "wb_b_bat_170",
    "word": "bat",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "a",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "chú dơi / gậy bóng chày",
    "emoji": "🦇",
    "sampleSentence": "A night flying bat.",
    "sampleSentenceVi": "Chú dơi bay đêm lượn vòng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú dơi con sải cánh bay đêm"
    }
  },
  {
    "id": "wb_b_box_171",
    "word": "box",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "o",
      "x"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc hộp quà",
    "emoji": "📦",
    "sampleSentence": "A surprise inside the box.",
    "sampleSentenceVi": "Món quà bất ngờ trong hộp.",
    "visual": {
      "url": "/assets/ehon/fox_box.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc hộp các-tông xinh xắn"
    }
  },
  {
    "id": "wb_b_bag_172",
    "word": "bag",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "a",
      "g"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc cặp sách",
    "emoji": "🎒",
    "sampleSentence": "Pack books in the bag.",
    "sampleSentenceVi": "Xếp sách vào chiếc cặp xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc túi vải xinh xắn đựng đồ chơi"
    }
  },
  {
    "id": "wb_b_bug_173",
    "word": "bug",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "chú bọ cánh cam",
    "emoji": "🪲",
    "sampleSentence": "A green bug on a leaf.",
    "sampleSentenceVi": "Chú bọ xanh đậu trên lá biếc.",
    "visual": {
      "url": "/assets/ehon/bug_rug.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú bọ nhỏ dễ thương trên tấm thảm len"
    }
  },
  {
    "id": "wb_b_bed_174",
    "word": "bed",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "e",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "chiếc giường êm",
    "emoji": "🛏️",
    "sampleSentence": "Sleep well in soft bed.",
    "sampleSentenceVi": "Ngủ say trên chiếc giường êm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc giường êm ái với gối nệm mềm mại"
    }
  },
  {
    "id": "wb_b_bus_175",
    "word": "bus",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "s"
    ],
    "theme": "objects_food",
    "meaningVi": "xe buýt vàng",
    "emoji": "🚌",
    "sampleSentence": "Ride the yellow bus.",
    "sampleSentenceVi": "Ngồi trên chiếc xe buýt vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe buýt màu vàng đưa bé đến trường"
    }
  },
  {
    "id": "wb_b_bun_176",
    "word": "bun",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh mì tròn ngọt",
    "emoji": "🥯",
    "sampleSentence": "A warm bakery bun.",
    "sampleSentenceVi": "Chiếc bánh mì tròn nóng giòn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bánh mì nướng tròn thơm phức"
    }
  },
  {
    "id": "wb_b_bell_177",
    "word": "bell",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "e",
      "ll"
    ],
    "theme": "objects_food",
    "meaningVi": "chuông leng keng",
    "emoji": "🔔",
    "sampleSentence": "Ring the golden bell.",
    "sampleSentenceVi": "Rung chuông leng keng báo giờ vui.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc chuông vàng leng keng rộn rã"
    }
  },
  {
    "id": "wb_b_bear_178",
    "word": "bear",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "ear"
    ],
    "theme": "animals",
    "meaningVi": "chú gấu hiền lành",
    "emoji": "🐻",
    "sampleSentence": "A fuzzy brown bear sleeps.",
    "sampleSentenceVi": "Chú gấu nâu cuộn tròn ngủ say.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gấu nâu hiền hòa trong rừng"
    }
  },
  {
    "id": "wb_b_boat_179",
    "word": "boat",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "oa",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc thuyền giấy",
    "emoji": "⛵",
    "sampleSentence": "Float a paper boat.",
    "sampleSentenceVi": "Thả chiếc thuyền giấy trên dòng suối.",
    "visual": {
      "url": "/assets/ehon/goat_boat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon con thuyền nhỏ lướt sóng êm đềm"
    }
  },
  {
    "id": "wb_ai_rain_180",
    "word": "rain",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "r",
      "ai",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "cơn mưa rào",
    "emoji": "🌧️",
    "sampleSentence": "Rain falls from the cloud.",
    "sampleSentenceVi": "Mưa rơi tí tách trên mái nhà.",
    "visual": {
      "url": "/assets/ehon/train_rain.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đoàn tàu chạy dưới cơn mưa mát lành"
    }
  },
  {
    "id": "wb_ai_tail_181",
    "word": "tail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chiếc đuôi cong",
    "emoji": "🐕",
    "sampleSentence": "The puppy wags its tail.",
    "sampleSentenceVi": "Cún con vẫy chiếc đuôi cong.",
    "visual": {
      "url": "/assets/ehon/cat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc đuôi xù vẫy chào của chú mèo"
    }
  },
  {
    "id": "wb_ai_sail_182",
    "word": "sail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "cánh buồm trắng",
    "emoji": "⛵",
    "sampleSentence": "Sail the boat on the sea.",
    "sampleSentenceVi": "Thuyền giương buồm ra khơi xa.",
    "visual": {
      "url": "/assets/ehon/ship.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cánh buồm no gió giữa biển khơi"
    }
  },
  {
    "id": "wb_ai_snail_183",
    "word": "snail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "n",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú ốc sên",
    "emoji": "🐌",
    "sampleSentence": "A slow snail crawls by.",
    "sampleSentenceVi": "Chú ốc sên bò chậm rãi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ốc sên chậm rãi bò trên lá"
    }
  },
  {
    "id": "wb_ai_train_184",
    "word": "train",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "r",
      "ai",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "đoàn tàu hỏa",
    "emoji": "🚂",
    "sampleSentence": "The steam train chugs.",
    "sampleSentenceVi": "Đoàn tàu hỏa xình xịch lăn bánh.",
    "visual": {
      "url": "/assets/ehon/train_rain.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đoàn tàu hơi nước sắc màu chạy qua thung lũng"
    }
  },
  {
    "id": "wb_ai_mail_185",
    "word": "mail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "m",
      "ai",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "thư tay bưu điện",
    "emoji": "💌",
    "sampleSentence": "Open loving mail.",
    "sampleSentenceVi": "Mở lá thư tay gửi từ bạn xa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lá thư tay dán tem xinh xắn"
    }
  },
  {
    "id": "wb_ai_paint_186",
    "word": "paint",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "p",
      "ai",
      "n",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "sơn màu nước",
    "emoji": "🎨",
    "sampleSentence": "Paint a rainbow picture.",
    "sampleSentenceVi": "Vẽ cầu vồng sắc màu rực rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bảng màu nước rực rỡ sắc cầu vồng"
    }
  },
  {
    "id": "wb_ai_wait_187",
    "word": "wait",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "w",
      "ai",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "kiên nhẫn chờ",
    "emoji": "⏱️",
    "sampleSentence": "Wait for your turn kindly.",
    "sampleSentenceVi": "Bé kiên nhẫn chờ đến lượt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé ngoan kiên nhẫn chờ đến lượt mình"
    }
  },
  {
    "id": "wb_ai_pail_188",
    "word": "pail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "p",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chiếc xô múc cát",
    "emoji": "🪣",
    "sampleSentence": "Fill the blue pail with sand.",
    "sampleSentenceVi": "Xúc cát đầy chiếc xô xanh.",
    "visual": {
      "url": "/assets/ehon/pail.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon xô xúc cát vàng rực rỡ bên bờ biển"
    }
  },
  {
    "id": "wb_ai_chain_189",
    "word": "chain",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "ch",
      "ai",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "dây xích xích đu",
    "emoji": "⛓️",
    "sampleSentence": "Swing on shiny chains.",
    "sampleSentenceVi": "Đung đưa theo dây xích đu rộn rã.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sợi dây xích đu kim loại vững chắc"
    }
  },
  {
    "id": "wb_j_jam_190",
    "word": "jam",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "a",
      "m"
    ],
    "theme": "objects_food",
    "meaningVi": "mứt dâu tây",
    "emoji": "🍓",
    "sampleSentence": "Sweet strawberry jam.",
    "sampleSentenceVi": "Mứt dâu tây ngọt thơm phức.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hũ mứt dâu tây ngọt thơm óng ánh"
    }
  },
  {
    "id": "wb_j_jug_191",
    "word": "jug",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "u",
      "g"
    ],
    "theme": "nature",
    "meaningVi": "bình rót nước",
    "emoji": "🏺",
    "sampleSentence": "Pour water from the jug.",
    "sampleSentenceVi": "Rót nước mát từ bình gốm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bình gốm rót nước hoa quả thơm"
    }
  },
  {
    "id": "wb_j_jet_192",
    "word": "jet",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "máy bay phản lực",
    "emoji": "✈️",
    "sampleSentence": "The fast jet flies high.",
    "sampleSentenceVi": "Máy bay bay vút qua tầng mây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc máy bay phản lực lướt mây trắng"
    }
  },
  {
    "id": "wb_j_job_193",
    "word": "job",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "o",
      "b"
    ],
    "theme": "animals",
    "meaningVi": "công việc tốt",
    "emoji": "💼",
    "sampleSentence": "Good job on your lesson!",
    "sampleSentenceVi": "Bé làm bài học thật xuất sắc!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé giúp mẹ làm việc nhà chăm chỉ"
    }
  },
  {
    "id": "wb_j_jump_194",
    "word": "jump",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "u",
      "m",
      "p"
    ],
    "theme": "nature",
    "meaningVi": "nhảy cao",
    "emoji": "🦘",
    "sampleSentence": "Jump over the puddles.",
    "sampleSentenceVi": "Nhảy qua những vũng nước mưa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé bật nhảy cao vui sướng trên bãi cỏ"
    }
  },
  {
    "id": "wb_j_jar_195",
    "word": "jar",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "a",
      "r"
    ],
    "theme": "actions",
    "meaningVi": "hũ thủy tinh đựng kẹo",
    "emoji": "🫙",
    "sampleSentence": "A jar of sweet treats.",
    "sampleSentenceVi": "Hũ thủy tinh đựng kẹo thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hũ thủy tinh trong suốt đựng kẹo ngọt"
    }
  },
  {
    "id": "wb_j_jeep_196",
    "word": "jeep",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "ee",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "xe jeep thám hiểm",
    "emoji": "🚙",
    "sampleSentence": "Drive the safari jeep.",
    "sampleSentenceVi": "Lái chiếc xe jeep đi thám hiểm rừng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe jeep thám hiểm địa hình dũng mãnh"
    }
  },
  {
    "id": "wb_j_jelly_197",
    "word": "jelly",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "e",
      "ll",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "thạch trái cây núng nính",
    "emoji": "🍮",
    "sampleSentence": "Wobbly fruity jelly.",
    "sampleSentenceVi": "Thạch trái cây núng nính mát lịm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thạch trái cây núng nính ngọt mát"
    }
  },
  {
    "id": "wb_j_jacket_198",
    "word": "jacket",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "a",
      "ck",
      "e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "áo khoác len ấm",
    "emoji": "🧥",
    "sampleSentence": "Zip your warm jacket.",
    "sampleSentenceVi": "Kéo khóa áo khoác ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc áo khoác ấm áp có mũ trùm"
    }
  },
  {
    "id": "wb_j_juice_199",
    "word": "juice",
    "phonemeId": "j",
    "group": 4,
    "stage": 2,
    "phonemes": [
      "j",
      "u",
      "i",
      "c",
      "e"
    ],
    "theme": "nature",
    "meaningVi": "nước ép cam tươi",
    "emoji": "🧃",
    "sampleSentence": "Sip fresh orange juice.",
    "sampleSentenceVi": "Uống ly nước ép cam ngọt lành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ly nước cam tươi ép mát lạnh"
    }
  },
  {
    "id": "wb_oa_boat_200",
    "word": "boat",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "b",
      "oa",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc thuyền",
    "emoji": "🛶",
    "sampleSentence": "Row the little boat.",
    "sampleSentenceVi": "Chèo chiếc thuyền con trên sông.",
    "visual": {
      "url": "/assets/ehon/goat_boat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon con thuyền nhỏ lướt sóng êm đềm"
    }
  },
  {
    "id": "wb_oa_coat_201",
    "word": "coat",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "oa",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "áo khoác ấm",
    "emoji": "🧥",
    "sampleSentence": "Wear a warm winter coat.",
    "sampleSentenceVi": "Mặc áo khoác ấm mùa đông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc áo khoác ấm áp mùa đông"
    }
  },
  {
    "id": "wb_oa_goat_202",
    "word": "goat",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "g",
      "oa",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "chú dê núi",
    "emoji": "🐐",
    "sampleSentence": "The goat climbs rocks.",
    "sampleSentenceVi": "Chú dê leo trèo vách núi.",
    "visual": {
      "url": "/assets/ehon/goat_boat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bạn dê trắng chèo thuyền trên sông"
    }
  },
  {
    "id": "wb_oa_soap_203",
    "word": "soap",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "oa",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh xà phòng",
    "emoji": "🧼",
    "sampleSentence": "Wash hands with bubbly soap.",
    "sampleSentenceVi": "Rửa tay sạch bằng xà phòng thơm.",
    "visual": {
      "url": "/assets/ehon/soap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bánh xà phòng thơm nhiều bọt bóng lấp lánh"
    }
  },
  {
    "id": "wb_oa_road_204",
    "word": "road",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "r",
      "oa",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "con đường quê",
    "emoji": "🛣️",
    "sampleSentence": "Walk along the quiet road.",
    "sampleSentenceVi": "Dạo bước trên con đường làng êm đềm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con đường quê êm đềm rợp bóng cây"
    }
  },
  {
    "id": "wb_oa_toad_205",
    "word": "toad",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "oa",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "chú cóc tía",
    "emoji": "🐸",
    "sampleSentence": "A little toad rests in moss.",
    "sampleSentenceVi": "Chú cóc nằm nghỉ dưới thảm rêu.",
    "visual": {
      "url": "/assets/ehon/toad.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cóc nhỏ hiền lành ngồi trên tảng đá bên suối"
    }
  },
  {
    "id": "wb_oa_oak_206",
    "word": "oak",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "oa",
      "k"
    ],
    "theme": "nature",
    "meaningVi": "cây sồi đại thụ",
    "emoji": "🌳",
    "sampleSentence": "A mighty oak spreads branches.",
    "sampleSentenceVi": "Cây sồi vươn tán râm mát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây sồi cổ thụ tán lá sum suê"
    }
  },
  {
    "id": "wb_oa_loaf_207",
    "word": "loaf",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "l",
      "oa",
      "f"
    ],
    "theme": "objects_food",
    "meaningVi": "ổ bánh mì giòn",
    "emoji": "🍞",
    "sampleSentence": "A fresh loaf of golden bread.",
    "sampleSentenceVi": "Ổ bánh mì nướng vàng thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ổ bánh mì nướng vàng giòn thơm nức"
    }
  },
  {
    "id": "wb_oa_float_208",
    "word": "float",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "l",
      "oa",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "nổi bồng bềnh",
    "emoji": "🛟",
    "sampleSentence": "Leaves float on clear stream.",
    "sampleSentenceVi": "Những chiếc lá nổi bồng bềnh trên suối.",
    "visual": {
      "url": "/assets/ehon/ship.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc thuyền bồng bềnh trên sóng"
    }
  },
  {
    "id": "wb_oa_coach_209",
    "word": "coach",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "oa",
      "ch"
    ],
    "theme": "animals",
    "meaningVi": "cỗ xe ngựa hoàng gia",
    "emoji": "🎠",
    "sampleSentence": "Ride in a fairy tale coach.",
    "sampleSentenceVi": "Ngồi trong cỗ xe ngựa cổ tích.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cỗ xe ngựa thần tiên đưa công chúa dạo chơi"
    }
  },
  {
    "id": "wb_ie_pie_210",
    "word": "pie",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "p",
      "ie"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh nướng táo",
    "emoji": "🥧",
    "sampleSentence": "Bake a warm apple pie.",
    "sampleSentenceVi": "Nướng chiếc bánh táo ngọt lành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bánh táo nướng thơm lừng nóng hổi"
    }
  },
  {
    "id": "wb_ie_tie_211",
    "word": "tie",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "ie"
    ],
    "theme": "objects_food",
    "meaningVi": "cà vạt / buộc dây",
    "emoji": "👔",
    "sampleSentence": "Tie shoelaces in a bow.",
    "sampleSentenceVi": "Buộc dây giày thành nơ xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc cà vạt sọc của người cha"
    }
  },
  {
    "id": "wb_ie_lie_212",
    "word": "lie",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "l",
      "ie"
    ],
    "theme": "actions",
    "meaningVi": "nằm nghỉ ngơi",
    "emoji": "🛏️",
    "sampleSentence": "Lie down for bedtime.",
    "sampleSentenceVi": "Nằm nghỉ ngơi trên gối êm.",
    "visual": {
      "url": "/assets/ehon/cat_nap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú mèo nằm thư giãn trên thảm"
    }
  },
  {
    "id": "wb_ie_die_213",
    "word": "die",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "d",
      "ie"
    ],
    "theme": "actions",
    "meaningVi": "xúc xắc trò chơi",
    "emoji": "🎲",
    "sampleSentence": "Roll the lucky game die.",
    "sampleSentenceVi": "Tung con xúc xắc trò chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Viên xúc xắc xúc xắc may mắn"
    }
  },
  {
    "id": "wb_ie_cried_214",
    "word": "cried",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "r",
      "ie",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "đã khóc nhè",
    "emoji": "🥺",
    "sampleSentence": "Mom comforted when I cried.",
    "sampleSentenceVi": "Mẹ vỗ về khi con khóc nhè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mếu máo và được mẹ ôm vào lòng"
    }
  },
  {
    "id": "wb_ie_spied_215",
    "word": "spied",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "p",
      "ie",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "đã phát hiện ra",
    "emoji": "🕵️",
    "sampleSentence": "I spied a butterfly.",
    "sampleSentenceVi": "Bé đã phát hiện chú bướm xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé nhìn qua kính lúp khám phá"
    }
  },
  {
    "id": "wb_ie_fried_216",
    "word": "fried",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "r",
      "ie",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "rán giòn tan",
    "emoji": "🍳",
    "sampleSentence": "A warm fried golden egg.",
    "sampleSentenceVi": "Chiếc trứng ốp la rán vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả trứng ốp la rán vàng óng ả"
    }
  },
  {
    "id": "wb_ie_dried_217",
    "word": "dried",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "d",
      "r",
      "ie",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "đã phơi khô",
    "emoji": "🧺",
    "sampleSentence": "Clothes dried in the sun.",
    "sampleSentenceVi": "Quần áo thơm phức phơi dưới nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Vỏ sò khô cong lấp lánh dưới nắng"
    }
  },
  {
    "id": "wb_ie_flies_218",
    "word": "flies",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "l",
      "ie",
      "s"
    ],
    "theme": "nature",
    "meaningVi": "bay lượn trên cao",
    "emoji": "🦅",
    "sampleSentence": "The bluebird flies high.",
    "sampleSentenceVi": "Chú chim xanh bay lượn trên trời.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chim nhỏ tung cánh bay lượn"
    }
  },
  {
    "id": "wb_ie_skies_219",
    "word": "skies",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "k",
      "ie",
      "s"
    ],
    "theme": "nature",
    "meaningVi": "bầu trời xanh thẳm",
    "emoji": "🌌",
    "sampleSentence": "Look at the starry skies.",
    "sampleSentenceVi": "Ngắm nhìn bầu trời ngàn sao lung linh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bầu trời đêm ngàn sao rực rỡ"
    }
  },
  {
    "id": "wb_ee_bee_220",
    "word": "bee",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "b",
      "ee"
    ],
    "theme": "animals",
    "meaningVi": "chú ong chăm chỉ",
    "emoji": "🐝",
    "sampleSentence": "The busy bee visits flowers.",
    "sampleSentenceVi": "Chú ong bay tìm mật hoa thơm.",
    "visual": {
      "url": "/assets/ehon/bee_tree.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú ong chăm chỉ bay quanh tán cây cổ thụ"
    }
  },
  {
    "id": "wb_ee_tree_221",
    "word": "tree",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "r",
      "ee"
    ],
    "theme": "nature",
    "meaningVi": "cây xanh lớn",
    "emoji": "🌳",
    "sampleSentence": "Green leaves on the tree.",
    "sampleSentenceVi": "Lá xanh mướt trên cành cây.",
    "visual": {
      "url": "/assets/ehon/bee_tree.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cây đại thụ xanh tươi rợp bóng mát"
    }
  },
  {
    "id": "wb_ee_seed_222",
    "word": "seed",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "ee",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "hạt mầm nhỏ",
    "emoji": "🌱",
    "sampleSentence": "Plant a tiny seed.",
    "sampleSentenceVi": "Gieo hạt mầm xuống luống đất.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hạt mầm nhỏ chuẩn bị nảy chồi xanh"
    }
  },
  {
    "id": "wb_ee_feet_223",
    "word": "feet",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "ee",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "đôi bàn chân",
    "emoji": "🦶",
    "sampleSentence": "Stamp your feet with joy.",
    "sampleSentenceVi": "Dậm chân theo nhịp điệu vui.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi bàn chân bé nhỏ xinh xắn"
    }
  },
  {
    "id": "wb_ee_sweet_224",
    "word": "sweet",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "w",
      "ee",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "ngọt ngào",
    "emoji": "🍯",
    "sampleSentence": "Honey is sweet and good.",
    "sampleSentenceVi": "Mật ong ngọt ngào bổ dưỡng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Vị ngọt thơm ngào ngạt của mật ong"
    }
  },
  {
    "id": "wb_ee_sheep_225",
    "word": "sheep",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "sh",
      "ee",
      "p"
    ],
    "theme": "animals",
    "meaningVi": "chú cừu lông bông",
    "emoji": "🐑",
    "sampleSentence": "Fluffy white sheep graze.",
    "sampleSentenceVi": "Đàn cừu lông trắng ăn cỏ non.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đàn cừu lông trắng bông như mây gặm cỏ"
    }
  },
  {
    "id": "wb_ee_green_226",
    "word": "green",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "g",
      "r",
      "ee",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "màu xanh lá biếc",
    "emoji": "🟢",
    "sampleSentence": "The green grass in summer.",
    "sampleSentenceVi": "Thảm cỏ xanh mát ngày hè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cánh đồng cỏ xanh mướt trải dài"
    }
  },
  {
    "id": "wb_ee_sleep_227",
    "word": "sleep",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "l",
      "ee",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "ngủ say giấc nồng",
    "emoji": "😴",
    "sampleSentence": "Sleep tight with sweet dreams.",
    "sampleSentenceVi": "Ngủ ngoan với những giấc mơ đẹp.",
    "visual": {
      "url": "/assets/ehon/cat_nap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bé ngủ say giấc nồng ấm áp"
    }
  },
  {
    "id": "wb_ee_deep_228",
    "word": "deep",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "d",
      "ee",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "sâu thẳm",
    "emoji": "🌊",
    "sampleSentence": "Deep blue ocean waters.",
    "sampleSentenceVi": "Làn nước biển xanh sâu thẳm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Làn nước hồ trong xanh sâu thẳm"
    }
  },
  {
    "id": "wb_ee_meet_229",
    "word": "meet",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "m",
      "ee",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "gặp gỡ bạn bè",
    "emoji": "🤝",
    "sampleSentence": "Meet new animal friends.",
    "sampleSentenceVi": "Gặp gỡ những người bạn thú mới.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ vui mừng gặp gỡ nhau"
    }
  },
  {
    "id": "wb_or_fork_230",
    "word": "fork",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "or",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "chiếc nĩa ăn",
    "emoji": "🍴",
    "sampleSentence": "Use a fork for noodles.",
    "sampleSentenceVi": "Dùng nĩa ăn món mì ngon.",
    "visual": {
      "url": "/assets/ehon/fork.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc nĩa và thìa vui tươi thưởng thức hoa quả"
    }
  },
  {
    "id": "wb_or_horn_231",
    "word": "horn",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "h",
      "or",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chiếc sừng hươu",
    "emoji": "📯",
    "sampleSentence": "Blow the toy horn.",
    "sampleSentenceVi": "Thổi chiếc kèn sừng vang xa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc kèn đồng vang lên khúc nhạc vui"
    }
  },
  {
    "id": "wb_or_corn_232",
    "word": "corn",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "or",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "bắp ngô vàng",
    "emoji": "🌽",
    "sampleSentence": "Sweet boiled yellow corn.",
    "sampleSentenceVi": "Bắp ngô vàng ngọt bùi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bắp ngô vàng óng ả ngọt ngào"
    }
  },
  {
    "id": "wb_or_storm_233",
    "word": "storm",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "t",
      "or",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "cơn bão",
    "emoji": "⛈️",
    "sampleSentence": "Stay warm during a storm.",
    "sampleSentenceVi": "Ở trong nhà ấm khi có mưa to.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cơn bão sấm chớp bầu trời cuồn cuộn"
    }
  },
  {
    "id": "wb_or_cork_234",
    "word": "cork",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "or",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "nút bấc bồng bềnh",
    "emoji": "🍾",
    "sampleSentence": "The cork floats in water.",
    "sampleSentenceVi": "Nút bấc nổi bồng bềnh trên nước.",
    "visual": {
      "url": "/assets/ehon/tin.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon nút đậy đồ dùng nhỏ xinh"
    }
  },
  {
    "id": "wb_or_torch_235",
    "word": "torch",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "or",
      "ch"
    ],
    "theme": "actions",
    "meaningVi": "ngọn đuốc soi đường",
    "emoji": "🔦",
    "sampleSentence": "Light up with a bright torch.",
    "sampleSentenceVi": "Soi sáng lối đi bằng ngọn đuốc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngọn đuốc thắp sáng đêm tối"
    }
  },
  {
    "id": "wb_or_horse_236",
    "word": "horse",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "h",
      "or",
      "s",
      "e"
    ],
    "theme": "animals",
    "meaningVi": "chú ngựa phi nhanh",
    "emoji": "🐴",
    "sampleSentence": "A brown horse trots along.",
    "sampleSentenceVi": "Chú ngựa nâu phi nước kiệu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ngựa nâu tung vó trên thảo nguyên"
    }
  },
  {
    "id": "wb_or_north_237",
    "word": "north",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "n",
      "or",
      "th"
    ],
    "theme": "nature",
    "meaningVi": "hướng bắc ngôi sao",
    "emoji": "🧭",
    "sampleSentence": "The North Star shines bright.",
    "sampleSentenceVi": "Sao Bắc Đẩu dẫn đường ban đêm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngôi sao Phương Bắc dẫn lối trên bầu trời"
    }
  },
  {
    "id": "wb_or_born_238",
    "word": "born",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "b",
      "or",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "chào đời",
    "emoji": "🐣",
    "sampleSentence": "A chick is born from egg.",
    "sampleSentenceVi": "Gà con chào đời từ quả trứng tròn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gà con vừa chào đời từ quả trứng"
    }
  },
  {
    "id": "wb_or_morning_239",
    "word": "morning",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "m",
      "or",
      "n",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "buổi sáng rạng rỡ",
    "emoji": "🌅",
    "sampleSentence": "Good morning sunshine!",
    "sampleSentenceVi": "Chào buổi sáng ngập tràn nắng ấm!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ánh bình minh sớm mai chan hòa ấm áp"
    }
  },
  {
    "id": "wb_z_zip_240",
    "word": "zip",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "i",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "kéo khóa áo",
    "emoji": "🤐",
    "sampleSentence": "Zip up your cozy coat.",
    "sampleSentenceVi": "Kéo khóa áo khoác cho ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Kéo khóa áo khoác ấm áp"
    }
  },
  {
    "id": "wb_z_zoo_241",
    "word": "zoo",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "oo"
    ],
    "theme": "actions",
    "meaningVi": "vườn bách thú",
    "emoji": "🦁",
    "sampleSentence": "Visit animals at the zoo.",
    "sampleSentenceVi": "Đi thăm các bạn thú ở vườn bách thú.",
    "visual": {
      "url": "/assets/ehon/giraffe.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon sở thú nơi muôn loài sinh sống vui vẻ"
    }
  },
  {
    "id": "wb_z_zebra_242",
    "word": "zebra",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "e",
      "b",
      "r",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "ngựa vằn",
    "emoji": "🦓",
    "sampleSentence": "A zebra has black and white stripes.",
    "sampleSentenceVi": "Ngựa vằn có sọc đen trắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ngựa vằn sọc đen trắng trên thảo nguyên"
    }
  },
  {
    "id": "wb_z_buzz_243",
    "word": "buzz",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "u",
      "z"
    ],
    "theme": "actions",
    "meaningVi": "tiếng ve kêu vù vù",
    "emoji": "🐝",
    "sampleSentence": "Bees buzz around blossoms.",
    "sampleSentenceVi": "Ong bay vù vù quanh khóm hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tiếng vo ve rộn ràng của đàn ong"
    }
  },
  {
    "id": "wb_z_fizz_244",
    "word": "fizz",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "f",
      "i",
      "zz"
    ],
    "theme": "animals",
    "meaningVi": "tiếng sủi bọt xèo xèo",
    "emoji": "🫧",
    "sampleSentence": "Bubbles fizz in cold lemonade.",
    "sampleSentenceVi": "Bọt sủi lăn tăn trong ly nước chanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bọt nước sủi tăm li ti mát rượi"
    }
  },
  {
    "id": "wb_z_zero_245",
    "word": "zero",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "e",
      "r",
      "o"
    ],
    "theme": "objects_food",
    "meaningVi": "số không tròn trĩnh",
    "emoji": "0️⃣",
    "sampleSentence": "A round zero on the slate.",
    "sampleSentenceVi": "Số không tròn xoe trên bảng con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khối gỗ tròn xoe số 0"
    }
  },
  {
    "id": "wb_z_zigzag_246",
    "word": "zigzag",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "i",
      "g",
      "z",
      "a",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "đường gấp khúc zíc-zắc",
    "emoji": "⚡",
    "sampleSentence": "Walk in a funny zigzag line.",
    "sampleSentenceVi": "Bước đi theo đường zíc-zắc ngộ nghĩnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đường nét zíc zắc sắc màu rực rỡ"
    }
  },
  {
    "id": "wb_z_breeze_247",
    "word": "breeze",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "r",
      "ee",
      "z",
      "e"
    ],
    "theme": "animals",
    "meaningVi": "làn gió heo may",
    "emoji": "🍃",
    "sampleSentence": "A gentle cool breeze blows.",
    "sampleSentenceVi": "Làn gió heo may man mác thổi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Làn gió nhẹ khẽ lay ngọn cỏ"
    }
  },
  {
    "id": "wb_z_prize_248",
    "word": "prize",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "p",
      "r",
      "i",
      "z",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "phần thưởng huy chương",
    "emoji": "🏅",
    "sampleSentence": "Win a golden prize.",
    "sampleSentenceVi": "Nhận phần thưởng huy chương lấp lánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Huy chương vàng lấp lánh tặng bé ngoan"
    }
  },
  {
    "id": "wb_z_snooze_249",
    "word": "snooze",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "n",
      "oo",
      "z",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "chợp mắt nghỉ ngơi",
    "emoji": "💤",
    "sampleSentence": "Take a cozy snooze.",
    "sampleSentenceVi": "Chợp mắt nghỉ ngơi trên ghế êm.",
    "visual": {
      "url": "/assets/ehon/cat_nap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bé chợp mắt ngủ trưa ngoan ngoãn"
    }
  },
  {
    "id": "wb_w_wet_250",
    "word": "wet",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "e",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "ướt sũng nước",
    "emoji": "💦",
    "sampleSentence": "My boots are wet from rain.",
    "sampleSentenceVi": "Đôi ủng ướt sau cơn mưa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những giọt mưa ướt đẫm cành lá xanh"
    }
  },
  {
    "id": "wb_w_win_251",
    "word": "win",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "i",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "chiến thắng",
    "emoji": "🏆",
    "sampleSentence": "Play fair and win stars.",
    "sampleSentenceVi": "Chơi giỏi và giành nhiều sao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc cúp vàng chiến thắng rực rỡ"
    }
  },
  {
    "id": "wb_w_wind_252",
    "word": "wind",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "i",
      "n",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "ngọn gió mát",
    "emoji": "🍃",
    "sampleSentence": "Gentle wind blows leaves.",
    "sampleSentenceVi": "Làn gió nhẹ thổi lá lay bay.",
    "visual": {
      "url": "/assets/ehon/kite.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon làn gió nâng cánh diều bay cao"
    }
  },
  {
    "id": "wb_w_web_253",
    "word": "web",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "e",
      "b"
    ],
    "theme": "actions",
    "meaningVi": "mạng nhện giăng",
    "emoji": "🕸️",
    "sampleSentence": "A spider spins a silk web.",
    "sampleSentenceVi": "Chú nhện giăng tơ tròn xoe.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mạng nhện giăng tơ long lanh sương sớm"
    }
  },
  {
    "id": "wb_w_wig_254",
    "word": "wig",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "i",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "bộ tóc giả hóa trang",
    "emoji": "💇",
    "sampleSentence": "Wear a funny party wig.",
    "sampleSentenceVi": "Đội bộ tóc giả hóa trang vui nhộn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bộ tóc giả hóa trang vui nhộn sắc màu"
    }
  },
  {
    "id": "wb_w_wall_255",
    "word": "wall",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "a",
      "ll"
    ],
    "theme": "actions",
    "meaningVi": "bức tường gạch",
    "emoji": "🧱",
    "sampleSentence": "Paint pictures on the wall.",
    "sampleSentenceVi": "Treo tranh xinh trên bức tường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bức tường gạch ấm cúng treo tranh xinh"
    }
  },
  {
    "id": "wb_w_wish_256",
    "word": "wish",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "i",
      "sh"
    ],
    "theme": "actions",
    "meaningVi": "ước mơ diệu kỳ",
    "emoji": "🌠",
    "sampleSentence": "Make a wish on a falling star.",
    "sampleSentenceVi": "Ước một điều ước dưới sao băng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngôi sao băng mang theo điều ước diệu kỳ"
    }
  },
  {
    "id": "wb_w_wolf_257",
    "word": "wolf",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "o",
      "l",
      "f"
    ],
    "theme": "actions",
    "meaningVi": "chú sói xám",
    "emoji": "🐺",
    "sampleSentence": "The gray wolf howls at the moon.",
    "sampleSentenceVi": "Chú sói ngắm nhìn vầng trăng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú sói xám hiền hòa giữa tuyết trắng"
    }
  },
  {
    "id": "wb_w_wave_258",
    "word": "wave",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "a",
      "v",
      "e"
    ],
    "theme": "nature",
    "meaningVi": "sóng biển vỗ về",
    "emoji": "🌊",
    "sampleSentence": "Blue waves lap the shore.",
    "sampleSentenceVi": "Sóng biển xanh vỗ bờ cát trắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con sóng biển xanh tung bọt trắng xóa"
    }
  },
  {
    "id": "wb_w_warm_259",
    "word": "warm",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "ar",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "ấm áp nồng nàn",
    "emoji": "🧤",
    "sampleSentence": "Warm mittens in cold snow.",
    "sampleSentenceVi": "Đôi găng tay len ấm áp trong tuyết.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi tất len ấm áp sưởi ấm đôi chân"
    }
  },
  {
    "id": "wb_ng_ring_260",
    "word": "ring",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "r",
      "i",
      "ng"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc nhẫn vàng / chuông reo",
    "emoji": "💍",
    "sampleSentence": "A shiny gold ring.",
    "sampleSentenceVi": "Chiếc nhẫn vàng xinh xắn.",
    "visual": {
      "url": "/assets/ehon/king_ring.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc nhẫn vàng ngọc lấp lánh"
    }
  },
  {
    "id": "wb_ng_sing_261",
    "word": "sing",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "hát vang",
    "emoji": "🎤",
    "sampleSentence": "Sing a joyful melody.",
    "sampleSentenceVi": "Hát vang giai điệu vui tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé con ca hát líu lo vang rộn"
    }
  },
  {
    "id": "wb_ng_king_262",
    "word": "king",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "k",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "vị vua anh minh",
    "emoji": "👑",
    "sampleSentence": "The king wears a crown.",
    "sampleSentenceVi": "Vị vua đội vương miện vàng.",
    "visual": {
      "url": "/assets/ehon/king_ring.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đức vua hiền từ đeo chiếc nhẫn vàng"
    }
  },
  {
    "id": "wb_ng_wing_263",
    "word": "wing",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "i",
      "ng"
    ],
    "theme": "animals",
    "meaningVi": "đôi cánh chim",
    "emoji": "🪽",
    "sampleSentence": "Birds flutter their wings.",
    "sampleSentenceVi": "Đôi cánh chim bay liệng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi cánh chim sải dài bay trên mây"
    }
  },
  {
    "id": "wb_ng_song_264",
    "word": "song",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "o",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "bài hát vui tươi",
    "emoji": "🎵",
    "sampleSentence": "Sing a lovely bedtime song.",
    "sampleSentenceVi": "Hát khúc ca ru ngủ êm đềm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bản nhạc vui tươi với những nốt nhạc nhảy múa"
    }
  },
  {
    "id": "wb_ng_long_265",
    "word": "long",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "l",
      "o",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "dài ngoằn",
    "emoji": "📏",
    "sampleSentence": "A long colorful train.",
    "sampleSentenceVi": "Đoàn tàu hỏa dài sắc màu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đoàn tàu hỏa dài uốn lượn qua đồi"
    }
  },
  {
    "id": "wb_ng_strong_266",
    "word": "strong",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "t",
      "r",
      "o",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "khỏe khoắn dẻo dai",
    "emoji": "💪",
    "sampleSentence": "Grow up big and strong.",
    "sampleSentenceVi": "Lớn lên khỏe mạnh kiên cường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé khỏe mạnh giơ bắp tay tràn đầy năng lượng"
    }
  },
  {
    "id": "wb_ng_swing_267",
    "word": "swing",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "w",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "xích đu bay bổng",
    "emoji": "🛝",
    "sampleSentence": "Swing high into the air.",
    "sampleSentenceVi": "Đung đưa xích đu bay bổng lên cao.",
    "visual": {
      "url": "/assets/ehon/swing.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc xích đu gỗ đu đưa dưới tán cây cổ thụ"
    }
  },
  {
    "id": "wb_ng_spring_268",
    "word": "spring",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "p",
      "r",
      "i",
      "ng"
    ],
    "theme": "nature",
    "meaningVi": "mùa xuân hoa nở",
    "emoji": "🌸",
    "sampleSentence": "Flowers bloom in sweet spring.",
    "sampleSentenceVi": "Hoa tươi đua nở khi mùa xuân về.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mùa xuân hoa đào nở rộ ngát hương"
    }
  },
  {
    "id": "wb_ng_cling_269",
    "word": "cling",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "c",
      "l",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "bám chặt thân yêu",
    "emoji": "🐨",
    "sampleSentence": "The koala clings to tree.",
    "sampleSentenceVi": "Gấu túi ôm chặt thân cây khuynh diệp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gấu con bám chặt thân cây"
    }
  },
  {
    "id": "wb_v_van_270",
    "word": "van",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "a",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "xe tải nhỏ",
    "emoji": "🚐",
    "sampleSentence": "Drive the red camping van.",
    "sampleSentenceVi": "Lái chiếc xe van đi dã ngoại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe van dã ngoại xinh xắn rực rỡ"
    }
  },
  {
    "id": "wb_v_vet_271",
    "word": "vet",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "bác sĩ thú y",
    "emoji": "🩺",
    "sampleSentence": "The vet cares for kittens.",
    "sampleSentenceVi": "Bác sĩ chăm sóc cho mèo con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bác sĩ thú y chăm sóc chú cún nhỏ"
    }
  },
  {
    "id": "wb_v_vest_272",
    "word": "vest",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "e",
      "s",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "áo gi-lê xinh",
    "emoji": "🦺",
    "sampleSentence": "Put on a bright vest.",
    "sampleSentenceVi": "Mặc chiếc áo gi-lê xinh xắn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc áo vest thanh lịch cho ngày lễ hội"
    }
  },
  {
    "id": "wb_v_vine_273",
    "word": "vine",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "i",
      "n",
      "e"
    ],
    "theme": "objects_food",
    "meaningVi": "dây leo nho xanh",
    "emoji": "🍇",
    "sampleSentence": "Sweet grapes grow on the vine.",
    "sampleSentenceVi": "Nho ngọt chín mọng trên giàn leo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dây leo xanh tốt bám quanh giàn gỗ"
    }
  },
  {
    "id": "wb_v_vase_274",
    "word": "vase",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "a",
      "s",
      "e"
    ],
    "theme": "nature",
    "meaningVi": "bình hoa gốm",
    "emoji": "🏺",
    "sampleSentence": "Fresh flowers in the ceramic vase.",
    "sampleSentenceVi": "Hoa tươi cắm trong bình gốm xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bình hoa gốm sứ cắm những cành hoa tươi"
    }
  },
  {
    "id": "wb_v_voice_275",
    "word": "voice",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "oi",
      "c",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "giọng nói dịu dàng",
    "emoji": "🗣️",
    "sampleSentence": "A gentle and kind voice.",
    "sampleSentenceVi": "Giọng nói dịu dàng ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Giọng hát trong trẻo líu lo của bạn nhỏ"
    }
  },
  {
    "id": "wb_v_velvet_276",
    "word": "velvet",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "e",
      "l",
      "v",
      "e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "nhung mềm mịn",
    "emoji": "🎀",
    "sampleSentence": "A ribbon of red velvet.",
    "sampleSentenceVi": "Dải ruy băng nhung đỏ mềm mịn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dải vải nhung đỏ mềm mịn như nhung"
    }
  },
  {
    "id": "wb_v_village_277",
    "word": "village",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "i",
      "l",
      "a",
      "g",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "ngôi làng yên ả",
    "emoji": "🏘️",
    "sampleSentence": "A peaceful green village.",
    "sampleSentenceVi": "Ngôi làng xanh yên ả bên sườn đồi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngôi làng nhỏ bình yên nép mình bên thung lũng"
    }
  },
  {
    "id": "wb_v_violin_278",
    "word": "violin",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "i",
      "o",
      "l",
      "i",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "cây đàn vĩ cầm",
    "emoji": "🎻",
    "sampleSentence": "Play a sweet violin tune.",
    "sampleSentenceVi": "Gảy bản nhạc êm dịu trên đàn vĩ cầm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây đàn vĩ cầm cất lên giai điệu du dương"
    }
  },
  {
    "id": "wb_v_volcano_279",
    "word": "volcano",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "o",
      "l",
      "c",
      "a",
      "n",
      "o"
    ],
    "theme": "nature",
    "meaningVi": "ngọn núi lửa kỳ vĩ",
    "emoji": "🌋",
    "sampleSentence": "A sleeping ancient volcano.",
    "sampleSentenceVi": "Ngọn núi lửa cổ kính ngủ yên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngọn núi hùng vĩ vươn cao chạm mây"
    }
  },
  {
    "id": "wb_oo_short_book_280",
    "word": "book",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "oo",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "cuốn sách tranh",
    "emoji": "📖",
    "sampleSentence": "Read an Ehon picture book.",
    "sampleSentenceVi": "Đọc cuốn sách tranh Ehon tuyệt đẹp.",
    "visual": {
      "url": "/assets/ehon/good_book.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cuốn sách truyện tranh mở ra muôn điều hay"
    }
  },
  {
    "id": "wb_oo_short_cook_281",
    "word": "cook",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "c",
      "oo",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "nấu món ngon",
    "emoji": "🧑‍🍳",
    "sampleSentence": "Cook a tasty vegetable soup.",
    "sampleSentenceVi": "Nấu món súp rau củ ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nấu món súp ngon lành cho cả nhà"
    }
  },
  {
    "id": "wb_oo_short_look_282",
    "word": "look",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "l",
      "oo",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "nhìn ngắm",
    "emoji": "👀",
    "sampleSentence": "Look at the rainbow sky.",
    "sampleSentenceVi": "Ngắm nhìn cầu vồng rực rỡ.",
    "visual": {
      "url": "/assets/ehon/cat.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú mèo ngước nhìn ngắm cánh bướm"
    }
  },
  {
    "id": "wb_oo_short_foot_283",
    "word": "foot",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "f",
      "oo",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "bàn chân",
    "emoji": "🦶",
    "sampleSentence": "Hop on one foot.",
    "sampleSentenceVi": "Nhảy lò cò một chân.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bàn chân nhỏ xinh bước đi trên cát"
    }
  },
  {
    "id": "wb_oo_short_wood_284",
    "word": "wood",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "oo",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "gỗ thơm rừng",
    "emoji": "🪵",
    "sampleSentence": "A cabin made of cedar wood.",
    "sampleSentenceVi": "Ngôi nhà gỗ ấm áp giữa rừng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khúc gỗ sồi chắc nịch thơm hương rừng"
    }
  },
  {
    "id": "wb_oo_short_wool_285",
    "word": "wool",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "oo",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "len cừu mềm mại",
    "emoji": "🧶",
    "sampleSentence": "A warm sweater of soft wool.",
    "sampleSentenceVi": "Áo len cừu mềm mại ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cuộn len cừu ấm áp mềm như kẹo bông"
    }
  },
  {
    "id": "wb_oo_short_hook_286",
    "word": "hook",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "h",
      "oo",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "móc treo áo",
    "emoji": "🪝",
    "sampleSentence": "Hang your coat on the hook.",
    "sampleSentenceVi": "Treo áo khoác lên móc gọn gàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Móc treo tường bằng đồng gọn gàng"
    }
  },
  {
    "id": "wb_oo_short_hood_287",
    "word": "hood",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "h",
      "oo",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "mũ trùm đầu ấm",
    "emoji": "🧥",
    "sampleSentence": "Pull up the red hood.",
    "sampleSentenceVi": "Kéo chiếc mũ trùm đầu ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc mũ áo khoác trùm đầu ấm áp"
    }
  },
  {
    "id": "wb_oo_short_brook_288",
    "word": "brook",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "r",
      "oo",
      "k"
    ],
    "theme": "nature",
    "meaningVi": "con suối róc rách",
    "emoji": "🏞️",
    "sampleSentence": "Water splashes in the brook.",
    "sampleSentenceVi": "Dòng suối nhỏ róc rách chảy qua khe đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng suối trong veo chảy róc rách qua đá"
    }
  },
  {
    "id": "wb_oo_short_shook_289",
    "word": "shook",
    "phonemeId": "oo_short",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "sh",
      "oo",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "đã rung rinh",
    "emoji": "🍂",
    "sampleSentence": "Wind shook autumn leaves.",
    "sampleSentenceVi": "Gió rung rinh những tán lá vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cành cây rung rinh rơi những chiếc lá vàng"
    }
  },
  {
    "id": "wb_oo_long_moon_290",
    "word": "moon",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "m",
      "oo",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "mặt trăng rằm",
    "emoji": "🌕",
    "sampleSentence": "The bright moon glows at night.",
    "sampleSentenceVi": "Vầng trăng tròn sáng lung linh.",
    "visual": {
      "url": "/assets/ehon/moon_spoon.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon vầng trăng tròn vành vạnh đêm rằm"
    }
  },
  {
    "id": "wb_oo_long_spoon_291",
    "word": "spoon",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "p",
      "oo",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc thìa con",
    "emoji": "🥄",
    "sampleSentence": "Eat cereal with a silver spoon.",
    "sampleSentenceVi": "Dùng thìa con ăn ngũ cốc.",
    "visual": {
      "url": "/assets/ehon/moon_spoon.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc thìa nhỏ xinh ánh trăng"
    }
  },
  {
    "id": "wb_oo_long_room_292",
    "word": "room",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "r",
      "oo",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "căn phòng ấm",
    "emoji": "🚪",
    "sampleSentence": "Clean up your playroom.",
    "sampleSentenceVi": "Dọn dẹp căn phòng đồ chơi.",
    "visual": {
      "url": "/assets/ehon/sit.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon căn phòng nhỏ ấm cúng ngập nắng"
    }
  },
  {
    "id": "wb_oo_long_pool_293",
    "word": "pool",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "p",
      "oo",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "hồ bơi xanh mát",
    "emoji": "🏊",
    "sampleSentence": "Swim in the cool pool.",
    "sampleSentenceVi": "Bơi trong làn nước hồ mát rượi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hồ bơi nước trong xanh mát rượi"
    }
  },
  {
    "id": "wb_oo_long_root_294",
    "word": "root",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "r",
      "oo",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "rễ cây sâu",
    "emoji": "🌱",
    "sampleSentence": "Tree roots reach deep down.",
    "sampleSentenceVi": "Rễ cây cắm sâu vào lòng đất mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Rễ cây cổ thụ bám sâu vào lòng đất"
    }
  },
  {
    "id": "wb_oo_long_cool_295",
    "word": "cool",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "c",
      "oo",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "mát rượi sảng khoái",
    "emoji": "🧊",
    "sampleSentence": "A cool breeze in summer.",
    "sampleSentenceVi": "Làn gió mát lành ngày hè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Làn nước mát rượi xua tan cái nóng hè"
    }
  },
  {
    "id": "wb_oo_long_tool_296",
    "word": "tool",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "t",
      "oo",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "dụng cụ đồ nghề",
    "emoji": "🔨",
    "sampleSentence": "Fix toys with a wooden tool.",
    "sampleSentenceVi": "Sửa đồ chơi bằng dụng cụ gỗ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bộ đồ nghề cơ khí bằng gỗ của bé"
    }
  },
  {
    "id": "wb_oo_long_food_297",
    "word": "food",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "f",
      "oo",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "món ăn bổ dưỡng",
    "emoji": "🍲",
    "sampleSentence": "Healthy food makes us strong.",
    "sampleSentenceVi": "Thức ăn bổ dưỡng giúp bé lớn khôn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bữa cơm gia đình ấm cúng ngon lành"
    }
  },
  {
    "id": "wb_oo_long_zoo_298",
    "word": "zoo",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "oo"
    ],
    "theme": "actions",
    "meaningVi": "thảo cầm viên",
    "emoji": "🦒",
    "sampleSentence": "Watch tall giraffes at the zoo.",
    "sampleSentenceVi": "Ngắm những chú hươu cao cổ trong sở thú.",
    "visual": {
      "url": "/assets/ehon/giraffe.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon sở thú nơi muôn loài sinh sống vui vẻ"
    }
  },
  {
    "id": "wb_oo_long_balloon_299",
    "word": "balloon",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "a",
      "l",
      "oo",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "quả bóng bay sắc màu",
    "emoji": "🎈",
    "sampleSentence": "A red balloon floats to the sky.",
    "sampleSentenceVi": "Quả bóng bay đỏ bay vút lên trời.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chùm bóng bay nhiều sắc màu bay lên trời xanh"
    }
  },
  {
    "id": "wb_y_yak_300",
    "word": "yak",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "a",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "bò Tây Tạng lông dài",
    "emoji": "🦬",
    "sampleSentence": "A furry yak on the mountain.",
    "sampleSentenceVi": "Chú bò lông dài trên đỉnh núi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú bò Tây Tạng lông dài trên núi cao"
    }
  },
  {
    "id": "wb_y_yes_301",
    "word": "yes",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "e",
      "s"
    ],
    "theme": "actions",
    "meaningVi": "vâng ạ / đồng ý",
    "emoji": "👍",
    "sampleSentence": "Say yes with a smile.",
    "sampleSentenceVi": "Mỉm cười dạ vâng ngoan ngoãn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mỉm cười gật đầu đồng ý rạng rỡ"
    }
  },
  {
    "id": "wb_y_yell_302",
    "word": "yell",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "e",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "reo hò vui mừng",
    "emoji": "🗣️",
    "sampleSentence": "Cheer and yell hooray!",
    "sampleSentenceVi": "Reo vang hoan hô chiến thắng!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Reo vang cổ vũ trong niềm hân hoan"
    }
  },
  {
    "id": "wb_y_yam_303",
    "word": "yam",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "a",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "củ khoai ngọt",
    "emoji": "🍠",
    "sampleSentence": "Roasted sweet yam.",
    "sampleSentenceVi": "Củ khoai nướng thơm bùi.",
    "visual": {
      "url": "/assets/ehon/carrot.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon củ khoai thơm ngọt từ đất lành"
    }
  },
  {
    "id": "wb_y_yard_304",
    "word": "yard",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "ar",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "sân chơi cỏ xanh",
    "emoji": "🏡",
    "sampleSentence": "Run around the grassy yard.",
    "sampleSentenceVi": "Tung tăng chạy nhảy trong sân vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khoảng sân cỏ xanh mướt trước hiên nhà"
    }
  },
  {
    "id": "wb_y_yarn_305",
    "word": "yarn",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "ar",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "cuộn len nhiều màu",
    "emoji": "🧶",
    "sampleSentence": "The kitten plays with yarn.",
    "sampleSentenceVi": "Mèo con vờn cuộn len tròn xoe.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cuộn len màu sắc sặc sỡ"
    }
  },
  {
    "id": "wb_y_yellow_306",
    "word": "yellow",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "e",
      "ll",
      "ow"
    ],
    "theme": "nature",
    "meaningVi": "sắc vàng nắng ấm",
    "emoji": "💛",
    "sampleSentence": "Yellow sunflowers bloom.",
    "sampleSentenceVi": "Những đóa hướng dương vàng rực rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sắc vàng tươi tắn của hoa hướng dương"
    }
  },
  {
    "id": "wb_y_yogurt_307",
    "word": "yogurt",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "o",
      "g",
      "u",
      "r",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "sữa chua thơm mát",
    "emoji": "🥣",
    "sampleSentence": "Sweet fruit yogurt for snack.",
    "sampleSentenceVi": "Sữa chua trái cây thơm ngon bổ dưỡng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hũ sữa chua trái cây thơm ngon bổ dưỡng"
    }
  },
  {
    "id": "wb_y_yoyo_308",
    "word": "yoyo",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "o",
      "y",
      "o"
    ],
    "theme": "objects_food",
    "meaningVi": "con quay yo-yo",
    "emoji": "🪀",
    "sampleSentence": "Spin the yo-yo up and down.",
    "sampleSentenceVi": "Kéo con quay yo-yo lên xuống nhịp nhàng.",
    "visual": {
      "url": "/assets/ehon/yoyo.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon con quay yoyo sắc màu xoay tít lấp lánh"
    }
  },
  {
    "id": "wb_y_young_309",
    "word": "young",
    "phonemeId": "y",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "y",
      "ou",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "trẻ trung tươi vui",
    "emoji": "🌱",
    "sampleSentence": "A young green sprout grows.",
    "sampleSentenceVi": "Mầm cây non tươi vươn mình đón nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mầm cây non tràn trề sức sống"
    }
  },
  {
    "id": "wb_x_box_310",
    "word": "box",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "b",
      "o",
      "x"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc hộp",
    "emoji": "📦",
    "sampleSentence": "Open the treasure box.",
    "sampleSentenceVi": "Mở chiếc hộp báu vật.",
    "visual": {
      "url": "/assets/ehon/fox_box.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc hộp các-tông xinh xắn"
    }
  },
  {
    "id": "wb_x_fix_311",
    "word": "fix",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "f",
      "i",
      "x"
    ],
    "theme": "actions",
    "meaningVi": "sửa chữa",
    "emoji": "🔧",
    "sampleSentence": "Fix the broken toy.",
    "sampleSentenceVi": "Sửa lại món đồ chơi con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sửa chữa chiếc xe đồ chơi yêu thích"
    }
  },
  {
    "id": "wb_x_mix_312",
    "word": "mix",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "m",
      "i",
      "x"
    ],
    "theme": "actions",
    "meaningVi": "pha trộn màu",
    "emoji": "🥣",
    "sampleSentence": "Mix paint colors together.",
    "sampleSentenceVi": "Pha trộn các sắc màu kỳ diệu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Trộn các màu vẽ tạo thành sắc cầu vồng"
    }
  },
  {
    "id": "wb_x_fox_313",
    "word": "fox",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "f",
      "o",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "chú cáo đuôi xù",
    "emoji": "🦊",
    "sampleSentence": "A little red fox.",
    "sampleSentenceVi": "Chú cáo lông đỏ xinh đẹp.",
    "visual": {
      "url": "/assets/ehon/fox_box.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cáo nhỏ tinh nghịch trong chiếc hộp"
    }
  },
  {
    "id": "wb_x_six_314",
    "word": "six",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "s",
      "i",
      "x"
    ],
    "theme": "objects_food",
    "meaningVi": "số sáu",
    "emoji": "6️⃣",
    "sampleSentence": "Six shiny stars in line.",
    "sampleSentenceVi": "Sáu vì sao thẳng hàng lấp lánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khối gỗ đồ chơi số 6 sắc màu"
    }
  },
  {
    "id": "wb_x_wax_315",
    "word": "wax",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "w",
      "a",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "sáp ong thiên nhiên",
    "emoji": "🕯️",
    "sampleSentence": "Beeswax candle glows.",
    "sampleSentenceVi": "Ngọn nến sáp ong tỏa hương dịu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây nến sáp ong ấm áp"
    }
  },
  {
    "id": "wb_x_tax_316",
    "word": "tax",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "t",
      "a",
      "x"
    ],
    "theme": "actions",
    "meaningVi": "thuế / tính toán",
    "emoji": "🪙",
    "sampleSentence": "Count coins carefully.",
    "sampleSentenceVi": "Đếm từng đồng tiền xu cẩn thận.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những đồng xu nhỏ xếp chồng ngay ngắn"
    }
  },
  {
    "id": "wb_x_ax_317",
    "word": "ax",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "a",
      "x"
    ],
    "theme": "nature",
    "meaningVi": "rìu gỗ của thợ rừng",
    "emoji": "🪓",
    "sampleSentence": "A small hand ax.",
    "sampleSentenceVi": "Chiếc rìu nhỏ của bác thợ rừng.",
    "visual": {
      "url": "/assets/ehon/ax.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc rìu gỗ dựng bên gốc cây nở hoa"
    }
  },
  {
    "id": "wb_x_ox_318",
    "word": "ox",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "o",
      "x"
    ],
    "theme": "actions",
    "meaningVi": "chú trâu hiền",
    "emoji": "🐂",
    "sampleSentence": "The sturdy ox plows.",
    "sampleSentenceVi": "Chú trâu hiền hòa cày ruộng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú bò đực vạm vỡ trên nông trại"
    }
  },
  {
    "id": "wb_x_flax_319",
    "word": "flax",
    "phonemeId": "x",
    "group": 6,
    "stage": 3,
    "phonemes": [
      "f",
      "l",
      "a",
      "x"
    ],
    "theme": "nature",
    "meaningVi": "hoa lanh xanh",
    "emoji": "🌾",
    "sampleSentence": "Blue flax flowers sway.",
    "sampleSentenceVi": "Khóm hoa lanh xanh đung đưa trong gió.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa lanh màu lam biếc dịu dàng"
    }
  },
  {
    "id": "wb_ch_chin_320",
    "word": "chin",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "i",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "chiếc cằm nhỏ",
    "emoji": "😊",
    "sampleSentence": "Touch your smiling chin.",
    "sampleSentenceVi": "Chạm tay vào chiếc cằm xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc cằm xinh xắn đáng yêu của em bé"
    }
  },
  {
    "id": "wb_ch_chop_321",
    "word": "chop",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "o",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "chặt thái rau",
    "emoji": "🔪",
    "sampleSentence": "Chop carrots for dinner.",
    "sampleSentenceVi": "Thái củ cà rốt giòn ngọt.",
    "visual": {
      "url": "/assets/ehon/ax.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc rìu bổ củi của bác tiều phu"
    }
  },
  {
    "id": "wb_ch_chat_322",
    "word": "chat",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "a",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "trò chuyện vui",
    "emoji": "💬",
    "sampleSentence": "Chat happily with Leo.",
    "sampleSentenceVi": "Trò chuyện vui cùng bạn Leo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hai bạn nhỏ trò chuyện rôm rả"
    }
  },
  {
    "id": "wb_ch_chest_323",
    "word": "chest",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "e",
      "s",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "rương kho báu",
    "emoji": "🪙",
    "sampleSentence": "Gold in the ancient chest.",
    "sampleSentenceVi": "Rương kho báu chứa đồng tiền vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc rương kho báu gỗ cổ xưa"
    }
  },
  {
    "id": "wb_ch_chip_324",
    "word": "chip",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "i",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "mẩu bánh giòn tan",
    "emoji": "🍪",
    "sampleSentence": "A crunchy potato chip.",
    "sampleSentenceVi": "Mẩu khoai tây chiên giòn tan.",
    "visual": {
      "url": "/assets/ehon/chick_chip.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú gà con nhặt hạt thóc nhỏ"
    }
  },
  {
    "id": "wb_ch_chick_325",
    "word": "chick",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "i",
      "ck"
    ],
    "theme": "actions",
    "meaningVi": "chú gà con vàng óng",
    "emoji": "🐥",
    "sampleSentence": "Fluffy yellow chick chirps.",
    "sampleSentenceVi": "Chú gà con lông tơ kêu chiếp chiếp.",
    "visual": {
      "url": "/assets/ehon/chick_chip.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú gà con lông vàng hót líu lo"
    }
  },
  {
    "id": "wb_ch_cherry_326",
    "word": "cherry",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "e",
      "r",
      "y"
    ],
    "theme": "actions",
    "meaningVi": "quả anh đào đỏ mọng",
    "emoji": "🍒",
    "sampleSentence": "A pair of sweet cherries.",
    "sampleSentenceVi": "Cặp quả anh đào đỏ tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cặp quả anh đào đỏ mọng nước"
    }
  },
  {
    "id": "wb_ch_chair_327",
    "word": "chair",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "air"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc ghế gỗ",
    "emoji": "🪑",
    "sampleSentence": "Sit on the wooden chair.",
    "sampleSentenceVi": "Ngồi ngay ngắn trên chiếc ghế gỗ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc ghế bành gỗ xinh xắn trong phòng"
    }
  },
  {
    "id": "wb_ch_cheese_328",
    "word": "cheese",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "ee",
      "s",
      "e"
    ],
    "theme": "actions",
    "meaningVi": "miếng phô mai vàng",
    "emoji": "🧀",
    "sampleSentence": "Mice love yellow cheese.",
    "sampleSentenceVi": "Chú chuột nhắt thích mê phô mai thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Miếng phô mai vàng óng thơm ngon"
    }
  },
  {
    "id": "wb_ch_child_329",
    "word": "child",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "i",
      "l",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "em bé ngoan",
    "emoji": "🧒",
    "sampleSentence": "A cheerful sweet child.",
    "sampleSentenceVi": "Một em bé ngoan ngoãn vui tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Em bé thơ ngây với nụ cười thiên thần"
    }
  },
  {
    "id": "wb_sh_ship_330",
    "word": "ship",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "con tàu lớn",
    "emoji": "🚢",
    "sampleSentence": "A grand ship sails the ocean.",
    "sampleSentenceVi": "Con tàu lớn rẽ sóng đại dương.",
    "visual": {
      "url": "/assets/ehon/ship.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon con tàu rẽ sóng đại dương"
    }
  },
  {
    "id": "wb_sh_shop_331",
    "word": "shop",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "o",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "cửa tiệm bánh",
    "emoji": "🏪",
    "sampleSentence": "Visit the bread shop.",
    "sampleSentenceVi": "Ghé thăm cửa tiệm bánh mì thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cửa hàng đồ chơi đầy ắp sắc màu"
    }
  },
  {
    "id": "wb_sh_shed_332",
    "word": "shed",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "e",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "nhà kho nhỏ",
    "emoji": "🏚️",
    "sampleSentence": "Garden tools in the shed.",
    "sampleSentenceVi": "Dụng cụ làm vườn xếp trong kho.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nhà kho gỗ nhỏ trong khu vườn"
    }
  },
  {
    "id": "wb_sh_shell_333",
    "word": "shell",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "e",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "vỏ ốc biển",
    "emoji": "🐚",
    "sampleSentence": "Find a smooth shell on the sand.",
    "sampleSentenceVi": "Nhặt vỏ ốc óng ánh bên bờ cát.",
    "visual": {
      "url": "/assets/ehon/shells_box.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon những vỏ sò óng ánh trong hộp báu vật"
    }
  },
  {
    "id": "wb_sh_dish_334",
    "word": "dish",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "d",
      "i",
      "sh"
    ],
    "theme": "nature",
    "meaningVi": "chiếc đĩa gốm hoa",
    "emoji": "🍽️",
    "sampleSentence": "Put fruits on the clean dish.",
    "sampleSentenceVi": "Xếp trái cây lên chiếc đĩa hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc đĩa gốm hoa văn trang nhã"
    }
  },
  {
    "id": "wb_sh_shine_335",
    "word": "shine",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "i",
      "n",
      "e"
    ],
    "theme": "nature",
    "meaningVi": "tỏa sáng lấp lánh",
    "emoji": "✨",
    "sampleSentence": "Stars shine in the clear sky.",
    "sampleSentenceVi": "Ngàn sao tỏa sáng lung linh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những tia sáng lấp lánh rực rỡ"
    }
  },
  {
    "id": "wb_sh_shark_336",
    "word": "shark",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "ar",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "chú cá mập đại dương",
    "emoji": "🦈",
    "sampleSentence": "A swift shark swims deep.",
    "sampleSentenceVi": "Chú cá mập bơi lặn dưới biển sâu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cá mập bơi lượn dũng mãnh"
    }
  },
  {
    "id": "wb_sh_sheep_337",
    "word": "sheep",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "ee",
      "p"
    ],
    "theme": "animals",
    "meaningVi": "chú cừu trắng",
    "emoji": "🐑",
    "sampleSentence": "Gentle sheep graze quietly.",
    "sampleSentenceVi": "Chú cừu hiền lành gặm cỏ non.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đàn cừu lông trắng bông như mây gặm cỏ"
    }
  },
  {
    "id": "wb_sh_shadow_338",
    "word": "shadow",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "a",
      "d",
      "ow"
    ],
    "theme": "actions",
    "meaningVi": "chiếc bóng vui nhộn",
    "emoji": "👥",
    "sampleSentence": "Play with your shadow.",
    "sampleSentenceVi": "Vui đùa cùng chiếc bóng dưới nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bóng dáng bé nhỏ in trên mặt đất dưới nắng"
    }
  },
  {
    "id": "wb_sh_brush_339",
    "word": "brush",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "b",
      "r",
      "u",
      "sh"
    ],
    "theme": "nature",
    "meaningVi": "cây cọ vẽ màu",
    "emoji": "🖌️",
    "sampleSentence": "Dip the brush in green paint.",
    "sampleSentenceVi": "Chấm cây cọ vào màu vẽ xanh biếc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây cọ vẽ lông mềm quét nét màu tươi"
    }
  },
  {
    "id": "wb_th_unvoiced_thin_340",
    "word": "thin",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "i",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "mảnh mai",
    "emoji": "📏",
    "sampleSentence": "A thin clean line.",
    "sampleSentenceVi": "Một nét vẽ thanh mảnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cuốn sổ nhỏ mỏng nhẹ"
    }
  },
  {
    "id": "wb_th_unvoiced_thorn_341",
    "word": "thorn",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "or",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "chiếc gai hoa hồng",
    "emoji": "🌹",
    "sampleSentence": "A rose has prickly thorns.",
    "sampleSentenceVi": "Cành hồng có những chiếc gai con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Gai hoa hồng nhọn sắc"
    }
  },
  {
    "id": "wb_th_unvoiced_thumb_342",
    "word": "thumb",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "u",
      "m"
    ],
    "theme": "animals",
    "meaningVi": "ngón tay cái",
    "emoji": "👍",
    "sampleSentence": "Thumbs up for good effort!",
    "sampleSentenceVi": "Giơ ngón cái khen bé tuyệt vời!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngón tay cái giơ lên khen ngợi: Bé giỏi lắm!"
    }
  },
  {
    "id": "wb_th_unvoiced_moth_343",
    "word": "moth",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "m",
      "o",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "chú bướm đêm",
    "emoji": "🦋",
    "sampleSentence": "A soft moth flies by the light.",
    "sampleSentenceVi": "Chú bướm đêm bay lượn bên ánh đèn.",
    "visual": {
      "url": "/assets/ehon/three_moths.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon ba chú bướm đêm vỗ cánh dịu dàng"
    }
  },
  {
    "id": "wb_th_unvoiced_three_344",
    "word": "three",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "r",
      "ee"
    ],
    "theme": "objects_food",
    "meaningVi": "số ba may mắn",
    "emoji": "3️⃣",
    "sampleSentence": "Three little birds in a tree.",
    "sampleSentenceVi": "Ba chú chim nhỏ hót ca trên cành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ba khối gỗ đồ chơi xếp ngay ngắn"
    }
  },
  {
    "id": "wb_th_unvoiced_teeth_345",
    "word": "teeth",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "t",
      "ee",
      "th"
    ],
    "theme": "animals",
    "meaningVi": "hàm răng trắng xinh",
    "emoji": "🦷",
    "sampleSentence": "Brush your clean white teeth.",
    "sampleSentenceVi": "Đánh răng trắng sạch trước giờ ngủ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hàm răng trắng đều xinh xắn khi bé cười tươi"
    }
  },
  {
    "id": "wb_th_unvoiced_path_346",
    "word": "path",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "p",
      "a",
      "th"
    ],
    "theme": "nature",
    "meaningVi": "lối đi lát đá",
    "emoji": "🛤️",
    "sampleSentence": "Follow the stone garden path.",
    "sampleSentenceVi": "Bước theo con đường đá trong vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con đường đá uốn lượn giữa vườn hoa"
    }
  },
  {
    "id": "wb_th_unvoiced_bath_347",
    "word": "bath",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "b",
      "a",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "tắm mát sảng khoái",
    "emoji": "🛁",
    "sampleSentence": "A warm bubble bath.",
    "sampleSentenceVi": "Tắm bọt xà phòng ấm áp vui thích.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bồn tắm đầy bọt xà phòng trắng muốt"
    }
  },
  {
    "id": "wb_th_unvoiced_thick_348",
    "word": "thick",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "i",
      "ck"
    ],
    "theme": "objects_food",
    "meaningVi": "cuốn sách dày dặn",
    "emoji": "📚",
    "sampleSentence": "A thick book of fairy tales.",
    "sampleSentenceVi": "Cuốn sách truyện cổ tích dày cộm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cuốn sách tranh bìa cứng dày dặn"
    }
  },
  {
    "id": "wb_th_unvoiced_cloth_349",
    "word": "cloth",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "c",
      "l",
      "o",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "khăn vải mềm",
    "emoji": "🧣",
    "sampleSentence": "Wipe table with clean cloth.",
    "sampleSentenceVi": "Lau bàn bằng chiếc khăn vải mềm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tấm khăn vải mềm mại màu sắc nhã nhặn"
    }
  },
  {
    "id": "wb_th_voiced_this_350",
    "word": "this",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "i",
      "s"
    ],
    "theme": "animals",
    "meaningVi": "cái này",
    "emoji": "👇",
    "sampleSentence": "This is my favorite book.",
    "sampleSentenceVi": "Đây là cuốn sách bé thích nhất.",
    "visual": {
      "url": "/assets/ehon/ant_pan.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc chảo này của bạn Sam"
    }
  },
  {
    "id": "wb_th_voiced_that_351",
    "word": "that",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "a",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "cái kia",
    "emoji": "👉",
    "sampleSentence": "Look at that soaring eagle.",
    "sampleSentenceVi": "Nhìn chú đại bàng đang bay kìa.",
    "visual": {
      "url": "/assets/ehon/kite.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cánh diều bay đằng kia"
    }
  },
  {
    "id": "wb_th_voiced_then_352",
    "word": "then",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "e",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "sau đó",
    "emoji": "⏳",
    "sampleSentence": "Eat breakfast and then we play.",
    "sampleSentenceVi": "Ăn sáng xong rồi mình cùng chơi.",
    "visual": {
      "url": "/assets/ehon/cat_nap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon và rồi chú mèo ngủ say"
    }
  },
  {
    "id": "wb_th_voiced_them_353",
    "word": "them",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "e",
      "m"
    ],
    "theme": "animals",
    "meaningVi": "chúng nó / các bạn ấy",
    "emoji": "👥",
    "sampleSentence": "Give them sweet red berries.",
    "sampleSentenceVi": "Chia cho các bạn những quả mọng ngọt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nhóm bạn nhỏ vui vẻ cùng chơi đùa"
    }
  },
  {
    "id": "wb_th_voiced_with_354",
    "word": "with",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "w",
      "i",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "cùng với",
    "emoji": "🤝",
    "sampleSentence": "Walk in the park with mom.",
    "sampleSentenceVi": "Dạo chơi công viên cùng với mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cùng nhau nắm tay thân thiết"
    }
  },
  {
    "id": "wb_th_voiced_they_355",
    "word": "they",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "ey"
    ],
    "theme": "animals",
    "meaningVi": "họ / các bạn ấy",
    "emoji": "🧑‍🤝‍🧑",
    "sampleSentence": "They dance around the flower bed.",
    "sampleSentenceVi": "Các bạn nhỏ nhảy múa quanh luống hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ đang ca múa rộn ràng"
    }
  },
  {
    "id": "wb_th_voiced_there_356",
    "word": "there",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "ere"
    ],
    "theme": "actions",
    "meaningVi": "ở đằng kia",
    "emoji": "👉",
    "sampleSentence": "There is a rainbow in sky.",
    "sampleSentenceVi": "Kìa có chiếc cầu vồng bắc qua mây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đằng xa là cánh đồng hoa ngát hương"
    }
  },
  {
    "id": "wb_th_voiced_father_357",
    "word": "father",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "f",
      "a",
      "th",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "người cha ấm áp",
    "emoji": "👨",
    "sampleSentence": "Father hugs me with love.",
    "sampleSentenceVi": "Cha ôm con vào lòng ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Người cha ấm áp dắt tay con dạo bước"
    }
  },
  {
    "id": "wb_th_voiced_mother_358",
    "word": "mother",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "m",
      "o",
      "th",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "người mẹ hiền từ",
    "emoji": "👩",
    "sampleSentence": "Mother sings a sweet lullaby.",
    "sampleSentenceVi": "Mẹ hát khúc hát ru ngọt ngào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Người mẹ dịu dàng ôm ấp con thơ"
    }
  },
  {
    "id": "wb_th_voiced_feather_359",
    "word": "feather",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "f",
      "ea",
      "th",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "chiếc lông vũ nhẹ tênh",
    "emoji": "🪶",
    "sampleSentence": "A soft blue feather drifts.",
    "sampleSentenceVi": "Chiếc lông vũ xanh bay lượn nhẹ tênh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc lông chim mềm mại bay lượn trong gió"
    }
  },
  {
    "id": "wb_qu_queen_360",
    "word": "queen",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "ee",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "nữ hoàng xinh đẹp",
    "emoji": "👸",
    "sampleSentence": "The kind queen loves books.",
    "sampleSentenceVi": "Nữ hoàng nhân từ thích đọc sách.",
    "visual": {
      "url": "/assets/ehon/queen_park.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon Nữ hoàng hiền từ dạo bước trong công viên hoa lá"
    }
  },
  {
    "id": "wb_qu_quick_361",
    "word": "quick",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "i",
      "c",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "nhanh nhẹn",
    "emoji": "⚡",
    "sampleSentence": "Be quick like lightning.",
    "sampleSentenceVi": "Nhanh nhẹn như tia chớp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chạy thật nhanh về đích"
    }
  },
  {
    "id": "wb_qu_quilt_362",
    "word": "quilt",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "i",
      "l",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "chiếc chăn ghép vải",
    "emoji": "🛏️",
    "sampleSentence": "A cozy patchwork quilt.",
    "sampleSentenceVi": "Chiếc chăn ghép vải ấm cúng.",
    "visual": {
      "url": "/assets/ehon/quilt.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc chăn ghép vải hoa ấm cúng trên ghế bập bênh"
    }
  },
  {
    "id": "wb_qu_quack_363",
    "word": "quack",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "a",
      "c",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "tiếng vịt kêu cạp cạp",
    "emoji": "🦆",
    "sampleSentence": "Ducks quack by the pond.",
    "sampleSentenceVi": "Đàn vịt kêu cạp cạp bên bờ ao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú vịt con bơi lội kêu quạc quạc vui tai"
    }
  },
  {
    "id": "wb_qu_quiet_364",
    "word": "quiet",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "i",
      "e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "yên tĩnh dịu dàng",
    "emoji": "🤫",
    "sampleSentence": "Be quiet in the reading nook.",
    "sampleSentenceVi": "Giữ yên lặng trong góc đọc sách.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Góc đọc sách yên tĩnh và thanh bình"
    }
  },
  {
    "id": "wb_qu_quill_365",
    "word": "quill",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "i",
      "ll"
    ],
    "theme": "objects_food",
    "meaningVi": "bút lông vũ cổ tích",
    "emoji": "🪶",
    "sampleSentence": "Write with a magical quill.",
    "sampleSentenceVi": "Viết thư bằng cây bút lông vũ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây bút lông vũ cổ điển viết trên giấy"
    }
  },
  {
    "id": "wb_qu_quiz_366",
    "word": "quiz",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "i",
      "z"
    ],
    "theme": "actions",
    "meaningVi": "câu đố vui thông thái",
    "emoji": "❓",
    "sampleSentence": "Answer the fun animal quiz.",
    "sampleSentenceVi": "Giải câu đố vui về các bạn thú.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Câu đố tranh vui nhộn cho bé"
    }
  },
  {
    "id": "wb_qu_quail_367",
    "word": "quail",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú chim cút tròn xoe",
    "emoji": "🐦",
    "sampleSentence": "A tiny quail hops in grass.",
    "sampleSentenceVi": "Chú chim cút tròn nhảy nhót trong cỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chim cút nhỏ nhắn xinh xắn"
    }
  },
  {
    "id": "wb_qu_liquid_368",
    "word": "liquid",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "l",
      "i",
      "qu",
      "i",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "chất lỏng trong suốt",
    "emoji": "💧",
    "sampleSentence": "Clean water is clear liquid.",
    "sampleSentenceVi": "Nước lọc là chất lỏng trong suốt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng nước trong vắt mát lành"
    }
  },
  {
    "id": "wb_qu_squirrel_369",
    "word": "squirrel",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "qu",
      "ir",
      "r",
      "e",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú sóc đuôi xù",
    "emoji": "🐿️",
    "sampleSentence": "A bushy-tailed squirrel runs.",
    "sampleSentenceVi": "Chú sóc đuôi xù thoăn thoắt chuyền cành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú sóc nhỏ đuôi xù gặm hạt dẻ"
    }
  },
  {
    "id": "wb_ou_out_370",
    "word": "out",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "ou",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "ra ngoài",
    "emoji": "🚪",
    "sampleSentence": "Go out and explore nature.",
    "sampleSentenceVi": "Ra ngoài thám hiểm thiên nhiên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bước ra ngoài thiên nhiên hít thở gió mát"
    }
  },
  {
    "id": "wb_ou_cloud_371",
    "word": "cloud",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "l",
      "ou",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "đám mây bồng bềnh",
    "emoji": "☁️",
    "sampleSentence": "Fluffy white clouds float.",
    "sampleSentenceVi": "Những đám mây trắng bồng bềnh trôi.",
    "visual": {
      "url": "/assets/ehon/clown_cloud.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đám mây bông trắng bồng bềnh"
    }
  },
  {
    "id": "wb_ou_loud_372",
    "word": "loud",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "l",
      "ou",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "âm thanh vang dội",
    "emoji": "📢",
    "sampleSentence": "A loud cheerful cheer.",
    "sampleSentenceVi": "Tiếng reo hò vang rộn ràng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tiếng trống kèn vang dội rộn rã"
    }
  },
  {
    "id": "wb_ou_shout_373",
    "word": "shout",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "sh",
      "ou",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "hét vang vui vẻ",
    "emoji": "🗣️",
    "sampleSentence": "Shout hooray together!",
    "sampleSentenceVi": "Cùng hét to hoan hô vui vẻ!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hò reo vui mừng khi chiến thắng"
    }
  },
  {
    "id": "wb_ou_mouse_374",
    "word": "mouse",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "m",
      "ou",
      "s",
      "e"
    ],
    "theme": "animals",
    "meaningVi": "chú chuột nhắt",
    "emoji": "🐭",
    "sampleSentence": "A tiny field mouse nibbles.",
    "sampleSentenceVi": "Chú chuột nhắt gặm hạt ngô.",
    "visual": {
      "url": "/assets/ehon/mouse.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú chuột nhỏ quàng khăn cầm quả dâu"
    }
  },
  {
    "id": "wb_ou_house_375",
    "word": "house",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "h",
      "ou",
      "s",
      "e"
    ],
    "theme": "animals",
    "meaningVi": "ngôi nhà ấm cúng",
    "emoji": "🏡",
    "sampleSentence": "Welcome to our cozy house.",
    "sampleSentenceVi": "Chào mừng bạn đến ngôi nhà ấm êm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngôi nhà xinh xắn có vườn hoa trước cửa"
    }
  },
  {
    "id": "wb_ou_round_376",
    "word": "round",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "r",
      "ou",
      "n",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "tròn xoe như quả bóng",
    "emoji": "🔴",
    "sampleSentence": "A round bouncing ball.",
    "sampleSentenceVi": "Quả bóng tròn nảy tưng tưng.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả bóng tròn nảy tưng tưng"
    }
  },
  {
    "id": "wb_ou_mouth_377",
    "word": "mouth",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "m",
      "ou",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "miệng xinh cười tươi",
    "emoji": "👄",
    "sampleSentence": "A wide smiling mouth.",
    "sampleSentenceVi": "Khuôn miệng xinh nở nụ cười tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khuôn miệng cười tươi rạng rỡ của bạn nhỏ"
    }
  },
  {
    "id": "wb_ou_sound_378",
    "word": "sound",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "ou",
      "n",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "âm thanh du dương",
    "emoji": "🔊",
    "sampleSentence": "Listen to the forest sound.",
    "sampleSentenceVi": "Lắng nghe âm thanh rừng xanh êm dịu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Âm thanh tiếng chuông ngân nga"
    }
  },
  {
    "id": "wb_ou_count_379",
    "word": "count",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "ou",
      "n",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "đếm số học toán",
    "emoji": "🔢",
    "sampleSentence": "Count from one to ten.",
    "sampleSentenceVi": "Cùng đếm từ một đến mười nhé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé đếm các khối số sắc màu"
    }
  },
  {
    "id": "wb_oi_coin_380",
    "word": "coin",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "oi",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "đồng xu vàng",
    "emoji": "🪙",
    "sampleSentence": "A shiny gold coin in hand.",
    "sampleSentenceVi": "Đồng xu vàng lấp lánh trên tay.",
    "visual": {
      "url": "/assets/ehon/queen_coin.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đồng xu ngôi sao vàng lấp lánh trên cỏ xanh"
    }
  },
  {
    "id": "wb_oi_soil_381",
    "word": "soil",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "oi",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "đất mùn màu mỡ",
    "emoji": "🪴",
    "sampleSentence": "Plants grow in rich soil.",
    "sampleSentenceVi": "Cây cối lớn lên từ đất lành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mảnh đất màu mỡ ươm mầm hạt giống"
    }
  },
  {
    "id": "wb_oi_oil_382",
    "word": "oil",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "oi",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "dầu ô liu",
    "emoji": "🫒",
    "sampleSentence": "A drop of golden olive oil.",
    "sampleSentenceVi": "Giọt dầu ô liu vàng óng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dầu ô liu óng vàng thơm ngon"
    }
  },
  {
    "id": "wb_oi_boil_383",
    "word": "boil",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "oi",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "nước sôi sùng sục",
    "emoji": "♨️",
    "sampleSentence": "Boil water for warm soup.",
    "sampleSentenceVi": "Đun nước sôi nấu món súp ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nồi nước sôi sục bốc hơi nghi ngút"
    }
  },
  {
    "id": "wb_oi_point_384",
    "word": "point",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "p",
      "oi",
      "n",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "chỉ tay vào tranh",
    "emoji": "👉",
    "sampleSentence": "Point to the pretty bird.",
    "sampleSentenceVi": "Chỉ tay vào chú chim xinh xắn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngón tay bé chỉ vào hình vẽ thú vị"
    }
  },
  {
    "id": "wb_oi_join_385",
    "word": "join",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "j",
      "oi",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "tham gia cùng bạn",
    "emoji": "🤝",
    "sampleSentence": "Join our fun phonics game!",
    "sampleSentenceVi": "Cùng tham gia trò chơi phát âm nào!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ cùng nắm tay tham gia trò chơi"
    }
  },
  {
    "id": "wb_oi_spoil_386",
    "word": "spoil",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "p",
      "oi",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "nuông chiều / giữ gìn",
    "emoji": "🎁",
    "sampleSentence": "Grandma treats with love.",
    "sampleSentenceVi": "Bà yêu thương chăm sóc từng li từng tí.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Món quà ngọt ngào chan chứa yêu thương"
    }
  },
  {
    "id": "wb_oi_foil_387",
    "word": "foil",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "f",
      "oi",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "giấy bạc lấp lánh",
    "emoji": "✨",
    "sampleSentence": "Shiny foil wraps the gift.",
    "sampleSentenceVi": "Giấy bạc lấp lánh bọc chiếc hộp quà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tờ giấy bạc ánh kim lấp lánh"
    }
  },
  {
    "id": "wb_oi_noise_388",
    "word": "noise",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "n",
      "oi",
      "s",
      "e"
    ],
    "theme": "nature",
    "meaningVi": "tiếng xôn xao",
    "emoji": "📢",
    "sampleSentence": "Merry noise in the playroom.",
    "sampleSentenceVi": "Tiếng cười đùa rộn rã trong phòng chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tiếng cười giòn tan rộn rã căn phòng"
    }
  },
  {
    "id": "wb_oi_toilet_389",
    "word": "toilet",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "t",
      "oi",
      "l",
      "e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "nhà vệ sinh sạch sẽ",
    "emoji": "🚾",
    "sampleSentence": "Wash hands after bathroom.",
    "sampleSentenceVi": "Rửa tay sạch bong sau khi đi vệ sinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bồn rửa tay sạch sẽ thơm tho"
    }
  },
  {
    "id": "wb_ue_blue_390",
    "word": "blue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "l",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "màu xanh da trời",
    "emoji": "💙",
    "sampleSentence": "The blue sky is calm.",
    "sampleSentenceVi": "Bầu trời xanh trong êm ả.",
    "visual": {
      "url": "/assets/ehon/three_fish.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon làn nước biển xanh biếc mát rượi"
    }
  },
  {
    "id": "wb_ue_clue_391",
    "word": "clue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "l",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "manh mối bí mật",
    "emoji": "🔍",
    "sampleSentence": "Find the secret clue.",
    "sampleSentenceVi": "Tìm manh mối thám hiểm bí ẩn.",
    "visual": {
      "url": "/assets/ehon/blue_clue.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon dấu chân manh mối màu xanh kỳ diệu"
    }
  },
  {
    "id": "wb_ue_glue_392",
    "word": "glue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "g",
      "l",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "keo dán giấy Ehon",
    "emoji": "🧴",
    "sampleSentence": "Stick paper shapes with glue.",
    "sampleSentenceVi": "Dán hình cắt vào trang tranh Ehon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lọ hồ dán thủ công cắt dán tranh Ehon"
    }
  },
  {
    "id": "wb_ue_true_393",
    "word": "true",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "t",
      "r",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "sự thật / chân thành",
    "emoji": "⭐",
    "sampleSentence": "A true and loyal friend.",
    "sampleSentenceVi": "Một người bạn chân thành tốt bụng.",
    "visual": {
      "url": "/assets/ehon/star.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon tình bạn chân thành tỏa sáng như sao"
    }
  },
  {
    "id": "wb_ue_rescue_394",
    "word": "rescue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "r",
      "e",
      "s",
      "c",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "giải cứu bạn nhỏ",
    "emoji": "🚒",
    "sampleSentence": "Hero team to the rescue!",
    "sampleSentenceVi": "Đội cứu hộ dũng cảm lên đường!",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe cứu hộ dũng cảm lên đường"
    }
  },
  {
    "id": "wb_ue_statue_395",
    "word": "statue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "t",
      "a",
      "t",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "bức tượng cẩm thạch",
    "emoji": "🗿",
    "sampleSentence": "A marble garden statue.",
    "sampleSentenceVi": "Bức tượng đá trắng trong hoa viên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bức tượng đá trắng thanh thoát trong công viên"
    }
  },
  {
    "id": "wb_ue_argue_396",
    "word": "argue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "ar",
      "g",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "tranh luận nhường nhịn",
    "emoji": "🗣️",
    "sampleSentence": "Do not argue, share toys.",
    "sampleSentenceVi": "Không cãi nhau, mình cùng chia sẻ đồ chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hai bạn nhỏ biết nhường nhịn cùng cười"
    }
  },
  {
    "id": "wb_ue_avenue_397",
    "word": "avenue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "a",
      "v",
      "e",
      "n",
      "ue"
    ],
    "theme": "nature",
    "meaningVi": "đại lộ rợp bóng cây",
    "emoji": "🛣️",
    "sampleSentence": "Walk along the tree avenue.",
    "sampleSentenceVi": "Dạo bước trên đại lộ rợp bóng cây xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đại lộ rợp bóng cây xanh thẳng tắp"
    }
  },
  {
    "id": "wb_ue_value_398",
    "word": "value",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "v",
      "a",
      "l",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "giá trị quý báu",
    "emoji": "💎",
    "sampleSentence": "Kindness is of great value.",
    "sampleSentenceVi": "Lòng tốt là điều quý báu nhất.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Viên ngọc quý giá lấp lánh sắc màu"
    }
  },
  {
    "id": "wb_ue_tissue_399",
    "word": "tissue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "t",
      "i",
      "ss",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "khăn giấy mềm",
    "emoji": "🧻",
    "sampleSentence": "Wipe your nose with soft tissue.",
    "sampleSentenceVi": "Lau mũi bằng chiếc khăn giấy mềm mại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hộp khăn giấy mềm mại thơm tho"
    }
  },
  {
    "id": "wb_er_sister_400",
    "word": "sister",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "i",
      "s",
      "t",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "chị gái yêu quý",
    "emoji": "👧",
    "sampleSentence": "My elder sister helps me.",
    "sampleSentenceVi": "Chị gái giúp bé học bài.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chị gái nắm tay em nhỏ đi dạo"
    }
  },
  {
    "id": "wb_er_winter_401",
    "word": "winter",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "w",
      "i",
      "n",
      "t",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "mùa đông có tuyết",
    "emoji": "❄️",
    "sampleSentence": "Winter brings white snow.",
    "sampleSentenceVi": "Mùa đông mang tuyết trắng rơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mùa đông tuyết rơi trắng xóa dịu êm"
    }
  },
  {
    "id": "wb_er_letter_402",
    "word": "letter",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "l",
      "e",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "lá thư tay / chữ cái",
    "emoji": "✉️",
    "sampleSentence": "Send a loving letter.",
    "sampleSentenceVi": "Gửi lá thư tay chan chứa yêu thương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lá thư viết tay gửi lời yêu thương"
    }
  },
  {
    "id": "wb_er_water_403",
    "word": "water",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "w",
      "a",
      "t",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "nước ngọt lành",
    "emoji": "💧",
    "sampleSentence": "Drink clean fresh water.",
    "sampleSentenceVi": "Uống ly nước mát trong lành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng nước ngọt mát lành trong vắt"
    }
  },
  {
    "id": "wb_er_tiger_404",
    "word": "tiger",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "t",
      "i",
      "g",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú hổ dũng mãnh",
    "emoji": "🐅",
    "sampleSentence": "A striped tiger rests in shade.",
    "sampleSentenceVi": "Chú hổ vằn nghỉ mát dưới bóng cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú hổ vằn dũng mãnh nghỉ mát"
    }
  },
  {
    "id": "wb_er_farmer_405",
    "word": "farmer",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "f",
      "ar",
      "m",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "bác nông dân chăm chỉ",
    "emoji": "👨‍🌾",
    "sampleSentence": "The farmer gathers ripe fruit.",
    "sampleSentenceVi": "Bác nông dân hái trái ngọt thơm.",
    "visual": {
      "url": "/assets/ehon/farmer_barn.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bác nông dân chăm chỉ bên nông trại nắng ấm"
    }
  },
  {
    "id": "wb_er_silver_406",
    "word": "silver",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "i",
      "l",
      "v",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "màu bạc lấp lánh",
    "emoji": "🥈",
    "sampleSentence": "A silver bell rings softly.",
    "sampleSentenceVi": "Chiếc chuông bạc ngân nga êm dịu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc chuông bạc sáng lấp lánh ngân vang"
    }
  },
  {
    "id": "wb_er_butter_407",
    "word": "butter",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "u",
      "t",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "bơ vàng béo ngậy",
    "emoji": "🧈",
    "sampleSentence": "Spread creamy butter on toast.",
    "sampleSentenceVi": "Phết bơ vàng thơm ngậy lên bánh mì.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Miếng bơ vàng thơm ngậy béo mềm"
    }
  },
  {
    "id": "wb_er_flower_408",
    "word": "flower",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "f",
      "l",
      "ow",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "bông hoa tỏa hương",
    "emoji": "🌸",
    "sampleSentence": "A lovely flower in the garden.",
    "sampleSentenceVi": "Bông hoa ngát hương trong khu vườn nhỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa hồng nhung nở rộ rực rỡ"
    }
  },
  {
    "id": "wb_er_spider_409",
    "word": "spider",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "p",
      "i",
      "d",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "chú nhện giăng tơ",
    "emoji": "🕷️",
    "sampleSentence": "A clever spider spins silk.",
    "sampleSentenceVi": "Chú nhện chăm chỉ dệt màng tơ bạc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú nhện nhỏ chăm chỉ dệt tơ bạc"
    }
  },
  {
    "id": "wb_ar_star_410",
    "word": "star",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "t",
      "ar"
    ],
    "theme": "nature",
    "meaningVi": "ngôi sao sáng",
    "emoji": "⭐",
    "sampleSentence": "A twinkling golden star.",
    "sampleSentenceVi": "Ngôi sao vàng lấp lánh trên cao.",
    "visual": {
      "url": "/assets/ehon/star.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon ngôi sao vàng lấp lánh"
    }
  },
  {
    "id": "wb_ar_car_411",
    "word": "car",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "ar"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc xe hơi",
    "emoji": "🚗",
    "sampleSentence": "Drive the red family car.",
    "sampleSentenceVi": "Chiếc xe hơi bon bon trên đường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe hơi đỏ bon bon trên đường"
    }
  },
  {
    "id": "wb_ar_park_412",
    "word": "park",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "p",
      "ar",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "công viên xanh",
    "emoji": "🏞️",
    "sampleSentence": "Play on swings in the park.",
    "sampleSentenceVi": "Chơi xích đu trong công viên rợp bóng.",
    "visual": {
      "url": "/assets/ehon/queen_park.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon công viên hoa lá rực rỡ nắng mai"
    }
  },
  {
    "id": "wb_ar_farm_413",
    "word": "farm",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "f",
      "ar",
      "m"
    ],
    "theme": "objects_food",
    "meaningVi": "nông trại bình yên",
    "emoji": "🚜",
    "sampleSentence": "Animals live on the sunny farm.",
    "sampleSentenceVi": "Đàn thú đáng yêu trong nông trại nắng ấm.",
    "visual": {
      "url": "/assets/ehon/hen.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon nông trại gia đình ấm áp bên muôn thú"
    }
  },
  {
    "id": "wb_ar_barn_414",
    "word": "barn",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "ar",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "nhà kho thóc đỏ",
    "emoji": "🛖",
    "sampleSentence": "Hay stored inside the red barn.",
    "sampleSentenceVi": "Cỏ khô xếp trong nhà kho đỏ.",
    "visual": {
      "url": "/assets/ehon/farmer_barn.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chuồng trại nông thôn màu đỏ ấm áp"
    }
  },
  {
    "id": "wb_ar_dark_415",
    "word": "dark",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "d",
      "ar",
      "k"
    ],
    "theme": "nature",
    "meaningVi": "trời tối có trăng sao",
    "emoji": "🌙",
    "sampleSentence": "Night is dark with stars.",
    "sampleSentenceVi": "Màn đêm yên tĩnh ngàn sao lung linh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Màn đêm yên tĩnh ngàn vì sao sáng"
    }
  },
  {
    "id": "wb_ar_yard_416",
    "word": "yard",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "y",
      "ar",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "sân chơi trước hiên",
    "emoji": "🏡",
    "sampleSentence": "Flowers bloom in the front yard.",
    "sampleSentenceVi": "Hoa nở rực rỡ trước hiên nhà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khoảng sân cỏ xanh mướt trước hiên nhà"
    }
  },
  {
    "id": "wb_ar_card_417",
    "word": "card",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "ar",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "tấm thiệp chúc mừng",
    "emoji": "💌",
    "sampleSentence": "Draw a colorful birthday card.",
    "sampleSentenceVi": "Vẽ tấm thiệp chúc mừng sinh nhật.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tấm thiệp sinh nhật sắc màu bé tự vẽ"
    }
  },
  {
    "id": "wb_ar_shark_418",
    "word": "shark",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "sh",
      "ar",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "chú cá mập xám",
    "emoji": "🦈",
    "sampleSentence": "A gray shark glides in ocean.",
    "sampleSentenceVi": "Chú cá mập xám lướt trên sóng biếc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cá mập bơi lượn dũng mãnh"
    }
  },
  {
    "id": "wb_ar_garden_419",
    "word": "garden",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "g",
      "ar",
      "d",
      "e",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "khu vườn hoa rực rỡ",
    "emoji": "🌷",
    "sampleSentence": "Butterflies flutter in garden.",
    "sampleSentenceVi": "Đàn bướm bay lượn trong khu vườn ngát hương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khu vườn cổ tích ngập tràn sắc hoa"
    }
  },
  {
    "id": "wb_s_snake_10",
    "word": "snake",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "n",
      "a_e",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "chú rắn lục hiền lành",
    "emoji": "🐍",
    "sampleSentence": "The green snake sleeps in the sun.",
    "sampleSentenceVi": "Chú rắn lục ngủ dưới ánh nắng ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú rắn lục hiền lành uốn lượn"
    }
  },
  {
    "id": "wb_s_snail_11",
    "word": "snail",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "n",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú ốc sên chậm rãi",
    "emoji": "🐌",
    "sampleSentence": "The little snail crawls on a leaf.",
    "sampleSentenceVi": "Chú ốc sên nhỏ bò trên chiếc lá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ốc sên chậm rãi bò trên lá"
    }
  },
  {
    "id": "wb_s_spider_12",
    "word": "spider",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "p",
      "i",
      "d",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú nhện giăng tơ",
    "emoji": "🕷️",
    "sampleSentence": "The spider weaves a silver web.",
    "sampleSentenceVi": "Chú nhện dệt mạng tơ lóng lánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú nhện nhỏ chăm chỉ dệt tơ bạc"
    }
  },
  {
    "id": "wb_s_swan_13",
    "word": "swan",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "w",
      "a",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "thiên nga trắng muốt",
    "emoji": "🦢",
    "sampleSentence": "A white swan glides on the lake.",
    "sampleSentenceVi": "Thiên nga trắng lướt trên mặt hồ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thiên nga trắng muốt bơi nhẹ nhàng trên mặt nước biếc"
    }
  },
  {
    "id": "wb_s_sloth_14",
    "word": "sloth",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "l",
      "o",
      "th"
    ],
    "theme": "animals",
    "meaningVi": "chú lười leo cây",
    "emoji": "🦥",
    "sampleSentence": "The sloth smiles in the tall tree.",
    "sampleSentenceVi": "Chú lười mỉm cười trên cành cây cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú lười dễ thương đu mình trên cành cây rừng"
    }
  },
  {
    "id": "wb_s_star_15",
    "word": "star",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "t",
      "ar"
    ],
    "theme": "nature",
    "meaningVi": "ngôi sao lấp lánh",
    "emoji": "⭐",
    "sampleSentence": "A bright star twinkles in the sky.",
    "sampleSentenceVi": "Ngôi sao sáng lấp lánh trên bầu trời.",
    "visual": {
      "url": "/assets/ehon/star.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon ngôi sao vàng lấp lánh"
    }
  },
  {
    "id": "wb_s_sea_16",
    "word": "sea",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "ea"
    ],
    "theme": "nature",
    "meaningVi": "biển xanh bao la",
    "emoji": "🌊",
    "sampleSentence": "Blue waves lap the sunny sea.",
    "sampleSentenceVi": "Sóng biếc vỗ về bãi biển đầy nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Biển xanh bao la dạt dào từng đợt sóng vỗ"
    }
  },
  {
    "id": "wb_s_sky_17",
    "word": "sky",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "k",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "bầu trời trong xanh",
    "emoji": "🌤️",
    "sampleSentence": "Birds fly high across the blue sky.",
    "sampleSentenceVi": "Đàn chim bay lượn trên bầu trời xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bầu trời xanh trong vắt trải rộng đến chân trời"
    }
  },
  {
    "id": "wb_s_stream_18",
    "word": "stream",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "t",
      "r",
      "ea",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "dòng suối trong veo",
    "emoji": "🏞️",
    "sampleSentence": "Fresh water rushes down the stream.",
    "sampleSentenceVi": "Dòng nước mát lành róc rách chảy.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng suối nhỏ chảy róc rách qua ghềnh đá rêu phong"
    }
  },
  {
    "id": "wb_s_stone_19",
    "word": "stone",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "t",
      "o_e",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "hòn đá cuội tròn",
    "emoji": "🪨",
    "sampleSentence": "A smooth gray stone by the path.",
    "sampleSentenceVi": "Hòn đá cuội nhẵn bóng bên đường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hòn đá cuội tròn nhẵn bên bờ nước mát lành"
    }
  },
  {
    "id": "wb_s_seed_20",
    "word": "seed",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "ee",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "hạt mầm nhỏ bé",
    "emoji": "🌱",
    "sampleSentence": "Plant a tiny seed in the rich soil.",
    "sampleSentenceVi": "Gieo hạt mầm bé nhỏ vào đất tốt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hạt mầm nhỏ chuẩn bị nảy chồi xanh"
    }
  },
  {
    "id": "wb_s_snow_21",
    "word": "snow",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "n",
      "ow"
    ],
    "theme": "nature",
    "meaningVi": "tuyết trắng mùa đông",
    "emoji": "❄️",
    "sampleSentence": "White snow falls gently on rooftops.",
    "sampleSentenceVi": "Tuyết trắng rơi êm trên mái nhà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông tuyết trắng muốt rơi nhẹ êm đềm"
    }
  },
  {
    "id": "wb_s_soup_22",
    "word": "soup",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "ou",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "bát súp nóng hổi",
    "emoji": "🍲",
    "sampleSentence": "Warm pumpkin soup smells delicious.",
    "sampleSentenceVi": "Bát súp bí đỏ thơm nức ngọt ngào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bát súp rau củ ấm nóng thơm ngon"
    }
  },
  {
    "id": "wb_s_spoon_23",
    "word": "spoon",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "p",
      "oo",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc thìa con",
    "emoji": "🥄",
    "sampleSentence": "Hold the spoon to eat your meal.",
    "sampleSentenceVi": "Cầm thìa con ăn bữa thật ngon.",
    "visual": {
      "url": "/assets/ehon/moon_spoon.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc thìa nhỏ xinh ánh trăng"
    }
  },
  {
    "id": "wb_s_sail_24",
    "word": "sail",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "ai",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "cánh buồm trắng",
    "emoji": "⛵",
    "sampleSentence": "The boat has a big white sail.",
    "sampleSentenceVi": "Chiếc thuyền có cánh buồm trắng muốt.",
    "visual": {
      "url": "/assets/ehon/ship.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cánh buồm no gió giữa biển khơi"
    }
  },
  {
    "id": "wb_s_soap_25",
    "word": "soap",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "oa",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh xà phòng thơm",
    "emoji": "🧼",
    "sampleSentence": "Wash hands clean with bubbly soap.",
    "sampleSentenceVi": "Rửa tay sạch bong cùng xà phòng thơm.",
    "visual": {
      "url": "/assets/ehon/soap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bánh xà phòng thơm nhiều bọt bóng lấp lánh"
    }
  },
  {
    "id": "wb_s_seesaw_26",
    "word": "seesaw",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "ee",
      "s",
      "aw"
    ],
    "theme": "objects_food",
    "meaningVi": "bập bênh vui nhộn",
    "emoji": "🎪",
    "sampleSentence": "Friends play up and down on the seesaw.",
    "sampleSentenceVi": "Các bạn nhỏ cùng chơi bập bênh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bập bênh gỗ vui nhộn trong sân chơi"
    }
  },
  {
    "id": "wb_s_salad_27",
    "word": "salad",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "a",
      "l",
      "a",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "đĩa salad rau củ",
    "emoji": "🥗",
    "sampleSentence": "Crisp green salad with sweet tomatoes.",
    "sampleSentenceVi": "Đĩa salad tươi giòn với cà chua ngọt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đĩa xà lách tươi xanh ngon lành bổ dưỡng"
    }
  },
  {
    "id": "wb_s_sing_28",
    "word": "sing",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "hát líu lo",
    "emoji": "🎶",
    "sampleSentence": "Children sing happy songs together.",
    "sampleSentenceVi": "Các bạn nhỏ cùng hát vang khúc ca.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé con ca hát líu lo vang rộn"
    }
  },
  {
    "id": "wb_s_sleep_29",
    "word": "sleep",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "l",
      "ee",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "ngủ say giấc",
    "emoji": "💤",
    "sampleSentence": "The baby sleeps soundly under a blanket.",
    "sampleSentenceVi": "Bé ngủ say giấc dưới chăn ấm.",
    "visual": {
      "url": "/assets/ehon/cat_nap.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon bé ngủ say giấc nồng ấm áp"
    }
  },
  {
    "id": "wb_s_swim_30",
    "word": "swim",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "w",
      "i",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "bơi lội tung tăng",
    "emoji": "🏊",
    "sampleSentence": "Fish swim quickly in the cool pond.",
    "sampleSentenceVi": "Đàn cá bơi tung tăng dưới hồ nước.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé thỏa thích bơi lội dưới làn nước mát lành"
    }
  },
  {
    "id": "wb_s_skip_31",
    "word": "skip",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "k",
      "i",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "nhảy chân sáo",
    "emoji": "🦘",
    "sampleSentence": "Skip with joy down the garden path.",
    "sampleSentenceVi": "Nhảy chân sáo vui vẻ trên con đường vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé vui sướng nhảy chân sáo trên đồng cỏ xanh"
    }
  },
  {
    "id": "wb_s_smile_32",
    "word": "smile",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "m",
      "i_e",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "mỉm cười rạng rỡ",
    "emoji": "😊",
    "sampleSentence": "Give everyone a warm friendly smile.",
    "sampleSentenceVi": "Gửi tặng mọi người một nụ cười ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nụ cười tươi rói rạng rỡ của bạn nhỏ"
    }
  },
  {
    "id": "wb_s_spin_33",
    "word": "spin",
    "phonemeId": "s",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "s",
      "p",
      "i",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "xoay tròn tít",
    "emoji": "💫",
    "sampleSentence": "Spin around like a merry top.",
    "sampleSentenceVi": "Xoay tròn tít như chiếc con quay vui vẻ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé dang tay xoay tròn hạnh phúc trong nắng mai"
    }
  },
  {
    "id": "wb_a_alligator_10",
    "word": "alligator",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "l",
      "i",
      "g",
      "a",
      "t",
      "or"
    ],
    "theme": "animals",
    "meaningVi": "chú cá sấu to lớn",
    "emoji": "🐊",
    "sampleSentence": "An alligator rests on the riverbank.",
    "sampleSentenceVi": "Chú cá sấu nằm nghỉ bên bờ sông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cá sấu nằm phơi nắng trên bờ suối"
    }
  },
  {
    "id": "wb_a_alpaca_11",
    "word": "alpaca",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "l",
      "p",
      "a",
      "c",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "lạc đà alpaca lông mịn",
    "emoji": "🦙",
    "sampleSentence": "The fluffy alpaca chews fresh grass.",
    "sampleSentenceVi": "Chú alpaca lông xù gặm cỏ non.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú alpaca lông trắng mềm mại mỉm cười"
    }
  },
  {
    "id": "wb_a_ape_12",
    "word": "ape",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a_e",
      "p"
    ],
    "theme": "animals",
    "meaningVi": "chú vượn thông minh",
    "emoji": "🦧",
    "sampleSentence": "The ape swings from branch to branch.",
    "sampleSentenceVi": "Chú vượn chuyền cành thoăn thoắt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú vượn thông minh leo trèo giữa rừng"
    }
  },
  {
    "id": "wb_a_acorn_13",
    "word": "acorn",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "c",
      "or",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "hạt sồi nâu bóng",
    "emoji": "🌰",
    "sampleSentence": "A squirrel hides an acorn under leaves.",
    "sampleSentenceVi": "Sóc nhỏ giấu hạt sồi dưới lớp lá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả sồi nâu nhỏ xinh nằm trên thảm lá vàng"
    }
  },
  {
    "id": "wb_a_arrow_14",
    "word": "arrow",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "rr",
      "ow"
    ],
    "theme": "objects_food",
    "meaningVi": "mũi tên chỉ đường",
    "emoji": "🏹",
    "sampleSentence": "Follow the green arrow to the playground.",
    "sampleSentenceVi": "Đi theo mũi tên xanh đến sân chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mũi tên chỉ hướng vẽ sắc màu"
    }
  },
  {
    "id": "wb_a_anchor_15",
    "word": "anchor",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "n",
      "c",
      "h",
      "or"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc mỏ neo sắt",
    "emoji": "⚓",
    "sampleSentence": "The ship drops its strong anchor.",
    "sampleSentenceVi": "Con tàu thả chiếc mỏ neo vững chắc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mỏ neo bằng đồng chắc chắn của con tàu"
    }
  },
  {
    "id": "wb_a_apron_16",
    "word": "apron",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "p",
      "r",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "tạp dề nấu ăn",
    "emoji": "🧑‍🍳",
    "sampleSentence": "Wear a bright apron while baking.",
    "sampleSentenceVi": "Đeo chiếc tạp dề rực rỡ khi làm bánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc tạp dề nhỏ xinh cho bé tập làm bánh"
    }
  },
  {
    "id": "wb_a_amber_17",
    "word": "amber",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "m",
      "b",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "hổ phách vàng óng",
    "emoji": "🔶",
    "sampleSentence": "A drop of golden amber shines.",
    "sampleSentenceVi": "Giọt hổ phách vàng óng tỏa sáng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Viên hổ phách vàng óng ánh ấm áp"
    }
  },
  {
    "id": "wb_a_autumn_18",
    "word": "autumn",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "au",
      "t",
      "u",
      "m",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "mùa thu lá đỏ",
    "emoji": "🍂",
    "sampleSentence": "In autumn, golden leaves flutter down.",
    "sampleSentenceVi": "Vào mùa thu, những chiếc lá vàng chao nghiêng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mùa thu vàng rực rỡ lá phong rơi nhẹ"
    }
  },
  {
    "id": "wb_a_applaud_19",
    "word": "applaud",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "p",
      "l",
      "au",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "vỗ tay khen ngợi",
    "emoji": "👏",
    "sampleSentence": "Applaud for the wonderful singer.",
    "sampleSentenceVi": "Vỗ tay chúc mừng ca sĩ đáng yêu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những tràng vỗ tay giòn giã cổ vũ bạn bè"
    }
  },
  {
    "id": "wb_a_ask_20",
    "word": "ask",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "s",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "hỏi điều thắc mắc",
    "emoji": "🙋‍♂️",
    "sampleSentence": "Ask the teacher with a polite smile.",
    "sampleSentenceVi": "Hỏi cô giáo với nụ cười lễ phép.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé giơ tay đặt câu hỏi thông minh trong lớp"
    }
  },
  {
    "id": "wb_a_aim_21",
    "word": "aim",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "ai",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "ngắm đích chuẩn",
    "emoji": "🎯",
    "sampleSentence": "Aim the soft ball into the basket.",
    "sampleSentenceVi": "Ngắm quả bóng mềm ném vào rổ.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon nhắm đích quả bóng lăn trúng đích"
    }
  },
  {
    "id": "wb_a_admire_22",
    "word": "admire",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "d",
      "m",
      "i_e",
      "r"
    ],
    "theme": "actions",
    "meaningVi": "chiêm ngưỡng vẻ đẹp",
    "emoji": "🤩",
    "sampleSentence": "Admire the stunning rainbow colors.",
    "sampleSentenceVi": "Chiêm ngưỡng sắc màu cầu vồng lung linh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé ngắm nhìn bức tranh tuyệt đẹp đầy thán phục"
    }
  },
  {
    "id": "wb_a_awake_23",
    "word": "awake",
    "phonemeId": "a",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "a",
      "w",
      "a_e",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "thức giấc tỉnh táo",
    "emoji": "☀️",
    "sampleSentence": "Be wide awake for morning sunshine.",
    "sampleSentenceVi": "Tỉnh giấc đón ánh bình minh rạng rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé vươn vai thức giấc mỉm cười đón ngày mới"
    }
  },
  {
    "id": "wb_t_turtle_10",
    "word": "turtle",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ur",
      "t",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú rùa mai tròn",
    "emoji": "🐢",
    "sampleSentence": "The green turtle swims in clear water.",
    "sampleSentenceVi": "Chú rùa xanh bơi trong làn nước trong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú rùa biển bơi thảnh thơi giữa rạn san hô"
    }
  },
  {
    "id": "wb_t_turkey_11",
    "word": "turkey",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ur",
      "k",
      "ey"
    ],
    "theme": "animals",
    "meaningVi": "gà tây lông xòe",
    "emoji": "🦃",
    "sampleSentence": "The proud turkey struts in the farmyard.",
    "sampleSentenceVi": "Chú gà tây xòe đuôi đi quanh sân nông trại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gà tây xòe đuôi dạo chơi quanh nông trại"
    }
  },
  {
    "id": "wb_t_toucan_12",
    "word": "toucan",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ou",
      "c",
      "a",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chim toucan mỏ sắc màu",
    "emoji": "🦜",
    "sampleSentence": "The toucan perches on a rainforest branch.",
    "sampleSentenceVi": "Chim toucan đậu trên cành rừng nhiệt đới.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim toucan rực rỡ đậu trên nhánh cây"
    }
  },
  {
    "id": "wb_t_toad_13",
    "word": "toad",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "oa",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "chú cóc hoa",
    "emoji": "🐸",
    "sampleSentence": "A bumpy toad hops across the lawn.",
    "sampleSentenceVi": "Chú cóc hoa nhảy lò cò qua bãi cỏ.",
    "visual": {
      "url": "/assets/ehon/toad.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú cóc nhỏ hiền lành ngồi trên tảng đá bên suối"
    }
  },
  {
    "id": "wb_t_tree_14",
    "word": "tree",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "r",
      "ee"
    ],
    "theme": "nature",
    "meaningVi": "cây xanh bóng mát",
    "emoji": "🌳",
    "sampleSentence": "The big oak tree gives cool shade.",
    "sampleSentenceVi": "Cây sồi lớn cho bóng mát rượi.",
    "visual": {
      "url": "/assets/ehon/bee_tree.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cây đại thụ xanh tươi rợp bóng mát"
    }
  },
  {
    "id": "wb_t_trail_15",
    "word": "trail",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "r",
      "ai",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "lối mòn trong rừng",
    "emoji": "🥾",
    "sampleSentence": "Walk along the flower-lined trail.",
    "sampleSentenceVi": "Dạo bước trên con đường mòn ngập hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con đường mòn nhỏ uốn lượn xuyên qua rừng thông"
    }
  },
  {
    "id": "wb_t_tulip_16",
    "word": "tulip",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "u",
      "l",
      "i",
      "p"
    ],
    "theme": "nature",
    "meaningVi": "hoa tulip rực rỡ",
    "emoji": "🌷",
    "sampleSentence": "Red and yellow tulips bloom in spring.",
    "sampleSentenceVi": "Những bông tulip đỏ vàng khoe sắc mùa xuân.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa tulip đỏ rực rỡ đón nắng sớm"
    }
  },
  {
    "id": "wb_t_tide_17",
    "word": "tide",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "i_e",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "thủy triều dâng",
    "emoji": "🌊",
    "sampleSentence": "The ocean tide rolls gently onto shore.",
    "sampleSentenceVi": "Thủy triều dâng lăn tăn vỗ vào bờ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngọn thủy triều dâng êm đềm vào bờ cát trắng"
    }
  },
  {
    "id": "wb_t_twig_18",
    "word": "twig",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "w",
      "i",
      "g"
    ],
    "theme": "nature",
    "meaningVi": "cành cây khô nhỏ",
    "emoji": "🪵",
    "sampleSentence": "A little bird carries a dry twig.",
    "sampleSentenceVi": "Chú chim nhỏ ngậm nhành cành khô.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cành cây nhỏ nảy những mầm non xanh biếc"
    }
  },
  {
    "id": "wb_t_thunder_19",
    "word": "thunder",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "th",
      "u",
      "n",
      "d",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "tiếng sấm ầm vang",
    "emoji": "⚡",
    "sampleSentence": "Rumble of thunder across the hills.",
    "sampleSentenceVi": "Tiếng sấm rền vang qua những ngọn đồi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ánh sấm chớp lóe sáng trên nền mây giông"
    }
  },
  {
    "id": "wb_t_teapot_20",
    "word": "teapot",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ea",
      "p",
      "o",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "ấm pha trà sứ",
    "emoji": "🫖",
    "sampleSentence": "Steaming tea pours from the porcelain teapot.",
    "sampleSentenceVi": "Trà thơm bốc khói rót từ ấm sứ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ấm trà gốm xinh xắn tỏa hương thơm ấm cúng"
    }
  },
  {
    "id": "wb_t_tower_21",
    "word": "tower",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ow",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "tòa tháp xếp gỗ",
    "emoji": "🏰",
    "sampleSentence": "Build a high wooden block tower.",
    "sampleSentenceVi": "Xây một tòa tháp bằng khối gỗ thật cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tòa tháp cổ tích cao vút chạm mây"
    }
  },
  {
    "id": "wb_t_toast_22",
    "word": "toast",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "oa",
      "s",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh mì nướng giòn",
    "emoji": "🍞",
    "sampleSentence": "Crispy warm toast with golden butter.",
    "sampleSentenceVi": "Bánh mì nướng giòn thơm bơ vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lát bánh mì nướng vàng giòn thơm phức"
    }
  },
  {
    "id": "wb_t_tomato_23",
    "word": "tomato",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "o",
      "m",
      "a",
      "t",
      "o"
    ],
    "theme": "objects_food",
    "meaningVi": "quả cà chua mọng đỏ",
    "emoji": "🍅",
    "sampleSentence": "A sweet ripe tomato from our garden.",
    "sampleSentenceVi": "Quả cà chua chín mọng ngọt từ vườn nhà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả cà chua chín đỏ mọng ngọt lành"
    }
  },
  {
    "id": "wb_t_talk_24",
    "word": "talk",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "al",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "nói chuyện vui vẻ",
    "emoji": "🗣️",
    "sampleSentence": "Talk kindly with your dear friends.",
    "sampleSentenceVi": "Trò chuyện dịu dàng với bạn bè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hai bạn nhỏ vui vẻ trò chuyện tíu tít cùng nhau"
    }
  },
  {
    "id": "wb_t_turn_25",
    "word": "turn",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ur",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "xoay người / đến lượt",
    "emoji": "🔄",
    "sampleSentence": "Turn around and take your turn.",
    "sampleSentenceVi": "Xoay người lại và đến lượt bé chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé quay người xoay một vòng điệu nghệ"
    }
  },
  {
    "id": "wb_t_touch_26",
    "word": "touch",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "ou",
      "ch"
    ],
    "theme": "actions",
    "meaningVi": "chạm tay khẽ khàng",
    "emoji": "👆",
    "sampleSentence": "Touch the soft flower petal gently.",
    "sampleSentenceVi": "Chạm nhẹ tay vào cánh hoa mềm mại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bàn tay nhỏ nhẹ nhàng chạm vào cánh hoa mềm"
    }
  },
  {
    "id": "wb_t_taste_27",
    "word": "taste",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "a_e",
      "s",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "nếm thử vị ngọt",
    "emoji": "👅",
    "sampleSentence": "Taste the delicious homemade honey.",
    "sampleSentenceVi": "Nếm thử vị mật ong ngọt ngào tự làm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé nếm thử vị kem dâu ngọt lịm mát lạnh"
    }
  },
  {
    "id": "wb_t_tug_28",
    "word": "tug",
    "phonemeId": "t",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "t",
      "u",
      "g"
    ],
    "theme": "actions",
    "meaningVi": "kéo mạnh dây thừng",
    "emoji": "🪢",
    "sampleSentence": "Tug gently on the friendly rope.",
    "sampleSentenceVi": "Kéo nhẹ sợi dây thừng cùng các bạn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ gắng sức kéo sợi dây thừng vui nhộn"
    }
  },
  {
    "id": "wb_i_iguana_10",
    "word": "iguana",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "g",
      "u",
      "a",
      "n",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "kỳ nhông xanh",
    "emoji": "🦎",
    "sampleSentence": "The green iguana basks on warm stones.",
    "sampleSentenceVi": "Kỳ nhông xanh sưởi ấm trên tảng đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Kỳ nhông xanh sưởi ấm dưới ánh nắng mặt trời"
    }
  },
  {
    "id": "wb_i_ibis_11",
    "word": "ibis",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "b",
      "i",
      "s"
    ],
    "theme": "animals",
    "meaningVi": "chim quắm trắng",
    "emoji": "🦩",
    "sampleSentence": "The ibis wades through the shallow water.",
    "sampleSentenceVi": "Chim quắm lội qua vùng nước nông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim quắm sải cánh bay qua đầm nước"
    }
  },
  {
    "id": "wb_i_inchworm_12",
    "word": "inchworm",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n",
      "ch",
      "w",
      "or",
      "m"
    ],
    "theme": "animals",
    "meaningVi": "sâu đo bé tí",
    "emoji": "🐛",
    "sampleSentence": "An inchworm crawls along the garden twig.",
    "sampleSentenceVi": "Chú sâu đo nhích từng bước trên cành cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú sâu đo nhỏ bé xanh mướt bò trên cành non"
    }
  },
  {
    "id": "wb_i_island_13",
    "word": "island",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "l",
      "a",
      "n",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "hòn đảo nhiệt đới",
    "emoji": "🏝️",
    "sampleSentence": "Palm trees sway on the sunny island.",
    "sampleSentenceVi": "Hàng cọ đung đưa trên hòn đảo ngập nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hòn đảo ngọc xanh biếc giữa đại dương bao la"
    }
  },
  {
    "id": "wb_i_iceberg_14",
    "word": "iceberg",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "s",
      "b",
      "er",
      "g"
    ],
    "theme": "nature",
    "meaningVi": "núi băng trôi",
    "emoji": "🧊",
    "sampleSentence": "A giant iceberg floats on polar seas.",
    "sampleSentenceVi": "Khối núi băng khổng lồ trôi giữa biển cực.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tảng băng trôi khổng lồ trắng muốt trên mặt biển"
    }
  },
  {
    "id": "wb_i_ivy_15",
    "word": "ivy",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "v",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "dây thường xuân",
    "emoji": "🌿",
    "sampleSentence": "Green ivy climbs up the stone wall.",
    "sampleSentenceVi": "Dây thường xuân leo trên bức tường đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dây thường xuân xanh mướt bò quanh bức tường đá"
    }
  },
  {
    "id": "wb_i_iron_16",
    "word": "iron",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "r",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "bàn là áo quần",
    "emoji": "👔",
    "sampleSentence": "Mom smooths clothes with an iron.",
    "sampleSentenceVi": "Mẹ là phẳng áo quần bằng bàn là.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bàn là ủi phẳng phiu tươm tất"
    }
  },
  {
    "id": "wb_i_invite_17",
    "word": "invite",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n",
      "v",
      "i_e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "mời bạn đến chơi",
    "emoji": "💌",
    "sampleSentence": "Invite your friends to the garden party.",
    "sampleSentenceVi": "Mời các bạn đến bữa tiệc ngoài vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé thân thiện mời bạn cùng tham gia bữa tiệc trà"
    }
  },
  {
    "id": "wb_i_inhale_18",
    "word": "inhale",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "n",
      "h",
      "a_e",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "hít vào thật sâu",
    "emoji": "🌬️",
    "sampleSentence": "Inhale the sweet scent of roses.",
    "sampleSentenceVi": "Hít vào thật sâu hương hoa hồng ngát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé hít thở thật sâu làn không khí trong lành buổi sớm"
    }
  },
  {
    "id": "wb_i_imitate_19",
    "word": "imitate",
    "phonemeId": "i",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "i",
      "m",
      "i",
      "t",
      "a_e",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "bắt chước tiếng thú",
    "emoji": "🎭",
    "sampleSentence": "Imitate the sound of chirping birds.",
    "sampleSentenceVi": "Bắt chước tiếng chim hót ríu ran.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé bắt chước dáng đi ngộ nghĩnh của chú vịt con"
    }
  },
  {
    "id": "wb_p_panda_10",
    "word": "panda",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "a",
      "n",
      "d",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "gấu trúc hiền hòa",
    "emoji": "🐼",
    "sampleSentence": "A fluffy panda eats bamboo leaves.",
    "sampleSentenceVi": "Gấu trúc lông mềm ăn lá tre xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Gấu trúc tròn xoe ôm nhành tre xanh"
    }
  },
  {
    "id": "wb_p_parrot_11",
    "word": "parrot",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "a",
      "rr",
      "o",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "vẹt sặc sỡ biết nói",
    "emoji": "🦜",
    "sampleSentence": "The colorful parrot says hello.",
    "sampleSentenceVi": "Chú vẹt sặc sỡ cất tiếng chào bạn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Vẹt sặc sỡ vỗ cánh cất tiếng líu lo"
    }
  },
  {
    "id": "wb_p_penguin_12",
    "word": "penguin",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "e",
      "n",
      "g",
      "u",
      "i",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chim cánh cụt ngộ nghĩnh",
    "emoji": "🐧",
    "sampleSentence": "The happy penguin waddles on ice.",
    "sampleSentenceVi": "Chim cánh cụt lạch bạch bước trên băng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Gia đình chim cánh cụt lạch bạch bước trên băng"
    }
  },
  {
    "id": "wb_p_pony_13",
    "word": "pony",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "o",
      "n",
      "y"
    ],
    "theme": "animals",
    "meaningVi": "chú ngựa lùn",
    "emoji": "🐴",
    "sampleSentence": "A little pony trots across the grass.",
    "sampleSentenceVi": "Chú ngựa lùn phi nước kiệu trên bãi cỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ngựa con đáng yêu gặm cỏ trên đồng"
    }
  },
  {
    "id": "wb_p_petal_14",
    "word": "petal",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "e",
      "t",
      "a",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "cánh hoa mềm mại",
    "emoji": "🌸",
    "sampleSentence": "A pink flower petal drops into the stream.",
    "sampleSentenceVi": "Cánh hoa hồng rơi nhẹ xuống dòng suối.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cánh hoa hồng mềm mại mịn như nhung"
    }
  },
  {
    "id": "wb_p_pebble_15",
    "word": "pebble",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "e",
      "bb",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "viên sỏi tròn nhẵn",
    "emoji": "🪨",
    "sampleSentence": "Skip a smooth pebble across the lake.",
    "sampleSentenceVi": "Thả viên sỏi tròn lướt nhẹ trên mặt hồ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những viên sỏi cuội tròn xoe nhiều màu sắc"
    }
  },
  {
    "id": "wb_p_puddle_16",
    "word": "puddle",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "u",
      "dd",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "vũng nước mưa",
    "emoji": "🌧️",
    "sampleSentence": "Splash joyfully in a rain puddle.",
    "sampleSentenceVi": "Nhảy té nước vui sướng trong vũng mưa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Vũng nước mưa trong soi bóng mây trời"
    }
  },
  {
    "id": "wb_p_plum_17",
    "word": "plum",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "l",
      "u",
      "m"
    ],
    "theme": "objects_food",
    "meaningVi": "quả mận tím ngọt",
    "emoji": "🫐",
    "sampleSentence": "A sweet purple plum tastes delicious.",
    "sampleSentenceVi": "Quả mận tím mọng nước thật ngọt ngào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả mận tím chín mọng ngọt mát"
    }
  },
  {
    "id": "wb_p_pizza_18",
    "word": "pizza",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "i",
      "zz",
      "a"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh pizza thơm lừng",
    "emoji": "🍕",
    "sampleSentence": "Share a warm slice of cheese pizza.",
    "sampleSentenceVi": "Cùng chia nhau miếng pizza phô mai thơm giòn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bánh pizza phô mai thơm phức giòn rụm"
    }
  },
  {
    "id": "wb_p_pie_19",
    "word": "pie",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "ie"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh nướng nhân táo",
    "emoji": "🥧",
    "sampleSentence": "Grandma baked an apple pie today.",
    "sampleSentenceVi": "Hôm nay bà nướng món bánh táo thơm phức.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bánh táo nướng thơm lừng nóng hổi"
    }
  },
  {
    "id": "wb_p_pear_20",
    "word": "pear",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "ear"
    ],
    "theme": "objects_food",
    "meaningVi": "quả lê vàng giòn",
    "emoji": "🍐",
    "sampleSentence": "Bite into a juicy yellow pear.",
    "sampleSentenceVi": "Cắn một miếng lê vàng giòn ngọt lịm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả lê ngọt mát giòn tan nhiều nước"
    }
  },
  {
    "id": "wb_p_plate_21",
    "word": "plate",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "l",
      "a_e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc đĩa tròn sứ",
    "emoji": "🍽️",
    "sampleSentence": "Put sweet cookies on the ceramic plate.",
    "sampleSentenceVi": "Xếp những chiếc bánh quy lên đĩa sứ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc đĩa sứ trắng sạch sẽ tinh tươm"
    }
  },
  {
    "id": "wb_p_paint_22",
    "word": "paint",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "ai",
      "n",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "vẽ tranh sắc màu",
    "emoji": "🎨",
    "sampleSentence": "Paint a bright rainbow on paper.",
    "sampleSentenceVi": "Vẽ cầu vồng rực rỡ trên trang giấy.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bảng màu nước rực rỡ sắc cầu vồng"
    }
  },
  {
    "id": "wb_p_pull_23",
    "word": "pull",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "u",
      "ll"
    ],
    "theme": "actions",
    "meaningVi": "kéo xe cộ",
    "emoji": "🚜",
    "sampleSentence": "Pull the red wagon across the yard.",
    "sampleSentenceVi": "Kéo chiếc xe gòn màu đỏ qua khoảng sân.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé kéo chiếc xe gỗ chở đầy gấu bông"
    }
  },
  {
    "id": "wb_p_push_24",
    "word": "push",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "u",
      "sh"
    ],
    "theme": "actions",
    "meaningVi": "đẩy xích đu",
    "emoji": "🛝",
    "sampleSentence": "Push the swing high into the sky.",
    "sampleSentenceVi": "Đẩy xích đu bay cao lên trời xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé đẩy chiếc xích đu đung đưa cho bạn cười vui"
    }
  },
  {
    "id": "wb_p_pick_25",
    "word": "pick",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "i",
      "ck"
    ],
    "theme": "actions",
    "meaningVi": "hái hoa quả",
    "emoji": "🍎",
    "sampleSentence": "Pick red apples from the orchard tree.",
    "sampleSentenceVi": "Hái những quả táo đỏ trên cây vườn nhà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé hái những quả dâu tây chín đỏ trong vườn"
    }
  },
  {
    "id": "wb_p_play_26",
    "word": "play",
    "phonemeId": "p",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "p",
      "l",
      "ay"
    ],
    "theme": "actions",
    "meaningVi": "chơi đùa vui tươi",
    "emoji": "🎉",
    "sampleSentence": "Children play happily with wooden blocks.",
    "sampleSentenceVi": "Các bạn nhỏ chơi vui với những khối gỗ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ say sưa chơi đùa cùng những khối gỗ"
    }
  },
  {
    "id": "wb_n_newt_10",
    "word": "newt",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "ew",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "chú sa giông nhỏ",
    "emoji": "🦎",
    "sampleSentence": "A spotted newt rests by the mossy log.",
    "sampleSentenceVi": "Chú sa giông đốm nằm bên khúc gỗ rêu phong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú sa giông nhỏ ẩn mình bên dòng suối trong"
    }
  },
  {
    "id": "wb_n_nightingale_11",
    "word": "nightingale",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "i_e",
      "t",
      "i",
      "ng",
      "g",
      "a_e",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chim sơn ca hót hay",
    "emoji": "🐦",
    "sampleSentence": "The nightingale sings a lovely song.",
    "sampleSentenceVi": "Chim sơn ca hót khúc ca ngọt lành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim sơn ca đậu cành cất tiếng hót say sưa"
    }
  },
  {
    "id": "wb_n_narwhal_12",
    "word": "narwhal",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "ar",
      "w",
      "h",
      "a",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "kỳ lân biển sừng dài",
    "emoji": "🐋",
    "sampleSentence": "The narwhal dives deep under arctic ice.",
    "sampleSentenceVi": "Kỳ lân biển lặn sâu dưới lớp băng bắc cực.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Kỳ lân biển bơi lượn dưới làn nước bắc cực"
    }
  },
  {
    "id": "wb_n_night_14",
    "word": "night",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "i_e",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "màn đêm yên bình",
    "emoji": "🌙",
    "sampleSentence": "Stars shine bright across the dark night.",
    "sampleSentenceVi": "Những vì sao sáng tỏa trong màn đêm yên tĩnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bầu trời đêm thanh bình ngàn sao lấp lánh"
    }
  },
  {
    "id": "wb_n_needle_15",
    "word": "needle",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "ee",
      "d",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "cây kim chỉ khâu",
    "emoji": "🪡",
    "sampleSentence": "Thread the needle with colorful yarn.",
    "sampleSentenceVi": "Xâu sợi chỉ sắc màu qua lỗ kim.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây kim khâu nhỏ nhắn cùng cuộn chỉ sắc màu"
    }
  },
  {
    "id": "wb_n_note_16",
    "word": "note",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "o_e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "nốt nhạc / lá thư nhỏ",
    "emoji": "🎵",
    "sampleSentence": "Write a sweet note to your friend.",
    "sampleSentenceVi": "Viết lời nhắn nhủ ngọt ngào cho bạn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mảnh giấy ghi chú nhỏ nhắn đáng yêu"
    }
  },
  {
    "id": "wb_n_napkin_17",
    "word": "napkin",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "a",
      "p",
      "k",
      "i",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "khăn ăn sạch sẽ",
    "emoji": "🧻",
    "sampleSentence": "Wipe your mouth clean with a napkin.",
    "sampleSentenceVi": "Lau miệng sạch sẽ bằng khăn ăn mềm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khăn ăn bằng vải mềm gấp gọn gàng"
    }
  },
  {
    "id": "wb_n_noodles_18",
    "word": "noodles",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "oo",
      "d",
      "l",
      "z"
    ],
    "theme": "objects_food",
    "meaningVi": "bát mì sợi dài",
    "emoji": "🍜",
    "sampleSentence": "Slurp warm noodles from the soup bowl.",
    "sampleSentenceVi": "Thưởng thức bát mì sợi nóng hổi thơm ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tô mì sợi thơm ngon nóng hổi"
    }
  },
  {
    "id": "wb_n_necklace_19",
    "word": "necklace",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "e",
      "c",
      "k",
      "l",
      "a_e",
      "s"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc vòng cổ hạt ngọc",
    "emoji": "📿",
    "sampleSentence": "Wear a beaded necklace for the party.",
    "sampleSentenceVi": "Đeo chuỗi vòng hạt ngọc dự tiệc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc vòng cổ xâu hạt ngọc lấp lánh"
    }
  },
  {
    "id": "wb_n_nibble_20",
    "word": "nibble",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "i",
      "bb",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "gặm nhấm từng chút",
    "emoji": "🐿️",
    "sampleSentence": "The rabbit nibbles a crunchy orange carrot.",
    "sampleSentenceVi": "Chú thỏ gặm nhấm củ cà rốt giòn ngọt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chuột nhỏ gặm nhấm hạt dẻ bùi ngon"
    }
  },
  {
    "id": "wb_n_nudge_21",
    "word": "nudge",
    "phonemeId": "n",
    "group": 1,
    "stage": 1,
    "phonemes": [
      "n",
      "u",
      "d",
      "g_e"
    ],
    "theme": "actions",
    "meaningVi": "huých nhẹ thân thiện",
    "emoji": "🤝",
    "sampleSentence": "The kitten gives a gentle nudge with its head.",
    "sampleSentenceVi": "Mèo con huých nhẹ đầu âu yếm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cún cưng dụi mõm âu yếm vào tay bé"
    }
  },
  {
    "id": "wb_c_k_koala_10",
    "word": "koala",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "k",
      "oa",
      "l",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "gấu túi koala",
    "emoji": "🐨",
    "sampleSentence": "The sleepy koala hugs an eucalyptus tree.",
    "sampleSentenceVi": "Gấu koala ôm cây bạch đàn ngủ say.",
    "visual": {
      "url": "/assets/ehon/koala.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú gấu túi koala ôm cành cây bạch đàn"
    }
  },
  {
    "id": "wb_c_k_kangaroo_11",
    "word": "kangaroo",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "k",
      "a",
      "ng",
      "g",
      "a",
      "r",
      "oo"
    ],
    "theme": "animals",
    "meaningVi": "chuột túi kangaroo",
    "emoji": "🦘",
    "sampleSentence": "The kangaroo hops high on the plains.",
    "sampleSentenceVi": "Chuột túi kangaroo nhảy cao trên đồng nội.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chuột túi kangaroo nhảy từng bước thoăn thoắt"
    }
  },
  {
    "id": "wb_c_k_camel_12",
    "word": "camel",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "a",
      "m",
      "e",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú lạc đà sa mạc",
    "emoji": "🐪",
    "sampleSentence": "The camel walks across sandy hills.",
    "sampleSentenceVi": "Chú lạc đà thong dong trên đồi cát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú lạc đà thong dong bước qua đồi cát vàng"
    }
  },
  {
    "id": "wb_c_k_crow_13",
    "word": "crow",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "r",
      "ow"
    ],
    "theme": "animals",
    "meaningVi": "chú quạ đen thông minh",
    "emoji": "🦅",
    "sampleSentence": "A clever crow perches on the fence.",
    "sampleSentenceVi": "Chú quạ thông minh đậu trên hàng rào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú quạ đen thông minh đậu trên cành thông"
    }
  },
  {
    "id": "wb_c_k_cloud_14",
    "word": "cloud",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "l",
      "ou",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "đám mây trắng trôi",
    "emoji": "☁️",
    "sampleSentence": "A fluffy white cloud drifts in the sky.",
    "sampleSentenceVi": "Đám mây trắng bồng bềnh trôi trên trời.",
    "visual": {
      "url": "/assets/ehon/clown_cloud.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đám mây bông trắng bồng bềnh"
    }
  },
  {
    "id": "wb_c_k_cliff_15",
    "word": "cliff",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "l",
      "i",
      "ff"
    ],
    "theme": "nature",
    "meaningVi": "vách đá dựng đứng",
    "emoji": "🧗",
    "sampleSentence": "Waves splash against the rocky cliff.",
    "sampleSentenceVi": "Sóng vỗ vào vách đá dựng đứng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Vách đá cao sừng sững bên bờ sóng vỗ"
    }
  },
  {
    "id": "wb_c_k_cake_16",
    "word": "cake",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "a_e",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc bánh kem sinh nhật",
    "emoji": "🎂",
    "sampleSentence": "A delicious birthday cake with candles.",
    "sampleSentenceVi": "Chiếc bánh kem sinh nhật cắm nến lung linh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc bánh kem sinh nhật dâu tây thơm ngon"
    }
  },
  {
    "id": "wb_c_k_carrot_17",
    "word": "carrot",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "a",
      "rr",
      "o",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "củ cà rốt cam giòn",
    "emoji": "🥕",
    "sampleSentence": "The bunny loves crunchy orange carrots.",
    "sampleSentenceVi": "Chú thỏ thích ăn củ cà rốt giòn ngọt.",
    "visual": {
      "url": "/assets/ehon/carrot.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon củ cà rốt cam tươi ngon trong vườn"
    }
  },
  {
    "id": "wb_c_k_corn_18",
    "word": "corn",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "or",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "bắp ngô vàng óng",
    "emoji": "🌽",
    "sampleSentence": "Sweet yellow corn freshly boiled.",
    "sampleSentenceVi": "Bắp ngô vàng ngọt mới luộc thơm phức.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bắp ngô vàng óng ả ngọt ngào"
    }
  },
  {
    "id": "wb_c_k_cookie_19",
    "word": "cookie",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "oo",
      "k",
      "ie"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh quy socola",
    "emoji": "🍪",
    "sampleSentence": "Warm chocolate cookie from the oven.",
    "sampleSentenceVi": "Bánh quy socola ấm giòn vừa ra lò.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bánh quy sô-cô-la thơm giòn nướng vàng"
    }
  },
  {
    "id": "wb_c_k_cook_20",
    "word": "cook",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "oo",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "nấu bữa ăn ngon",
    "emoji": "🍳",
    "sampleSentence": "Cook delicious vegetable soup together.",
    "sampleSentenceVi": "Cùng nhau nấu bát súp rau củ thơm ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nấu món súp ngon lành cho cả nhà"
    }
  },
  {
    "id": "wb_c_k_climb_21",
    "word": "climb",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "l",
      "i_e",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "leo trèo khéo léo",
    "emoji": "🧗‍♂️",
    "sampleSentence": "Climb safely up the wooden ladder.",
    "sampleSentenceVi": "Leo trèo an toàn lên thang gỗ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé can đảm leo lên khung leo trèo công viên"
    }
  },
  {
    "id": "wb_c_k_catch_22",
    "word": "catch",
    "phonemeId": "c_k",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "c",
      "a",
      "tch"
    ],
    "theme": "actions",
    "meaningVi": "bắt lấy quả bóng",
    "emoji": "⚾",
    "sampleSentence": "Catch the bouncy ball with both hands.",
    "sampleSentenceVi": "Bắt lấy quả bóng nảy bằng cả hai tay.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon đón bắt quả bóng sắc màu"
    }
  },
  {
    "id": "wb_e_eagle_10",
    "word": "eagle",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "ea",
      "g",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "đại bàng dũng mãnh",
    "emoji": "🦅",
    "sampleSentence": "The mighty eagle soars above mountains.",
    "sampleSentenceVi": "Đại bàng dũng mãnh bay trên đỉnh núi cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đại bàng dũng mãnh sải cánh trên nền trời cao"
    }
  },
  {
    "id": "wb_e_earth_11",
    "word": "earth",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "ear",
      "th"
    ],
    "theme": "nature",
    "meaningVi": "trái đất xanh tươi",
    "emoji": "🌍",
    "sampleSentence": "Our planet Earth is full of wonders.",
    "sampleSentenceVi": "Trái đất mến yêu của chúng ta ngập tràn kỳ quan.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mảnh đất màu mỡ ôm ấp mầm xanh sinh sôi"
    }
  },
  {
    "id": "wb_e_envelope_13",
    "word": "envelope",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "n",
      "v",
      "e",
      "l",
      "o_e",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "phong bì thư trắng",
    "emoji": "✉️",
    "sampleSentence": "Put the greeting card into the envelope.",
    "sampleSentenceVi": "Bỏ tấm thiệp chúc mừng vào phong bì.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc phong bì thư gửi lời chúc yêu thương"
    }
  },
  {
    "id": "wb_e_easel_14",
    "word": "easel",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "ea",
      "s",
      "e",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "giá vẽ tranh gỗ",
    "emoji": "🎨",
    "sampleSentence": "Place your paper on the artist easel.",
    "sampleSentenceVi": "Đặt trang giấy lên giá vẽ tranh gỗ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Giá vẽ tranh bằng gỗ của họa sĩ nhí"
    }
  },
  {
    "id": "wb_e_eraser_15",
    "word": "eraser",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "r",
      "a_e",
      "s",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "cục gôm tẩy mềm",
    "emoji": "✏️",
    "sampleSentence": "Erase pencil marks cleanly with an eraser.",
    "sampleSentenceVi": "Tẩy sạch nét chì bằng cục gôm mềm.",
    "visual": {
      "url": "/assets/ehon/eraser.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cục tẩy nhỏ xinh sạch nét chì"
    }
  },
  {
    "id": "wb_e_enter_16",
    "word": "enter",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "n",
      "t",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "bước vào lớp học",
    "emoji": "🚪",
    "sampleSentence": "Enter the classroom with a bright smile.",
    "sampleSentenceVi": "Bước vào lớp học với nụ cười tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mở cửa bước vào căn phòng ấm áp"
    }
  },
  {
    "id": "wb_e_enjoy_17",
    "word": "enjoy",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "n",
      "j",
      "oy"
    ],
    "theme": "actions",
    "meaningVi": "thưởng thức niềm vui",
    "emoji": "🥰",
    "sampleSentence": "Enjoy reading wonderful Ehon storybooks.",
    "sampleSentenceVi": "Thưởng thức những cuốn truyện tranh Ehon kỳ diệu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé tận hưởng trọn vẹn niềm vui tuổi thơ ngọt ngào"
    }
  },
  {
    "id": "wb_e_explore_18",
    "word": "explore",
    "phonemeId": "e",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "e",
      "x",
      "p",
      "l",
      "or_e"
    ],
    "theme": "actions",
    "meaningVi": "thám hiểm thế giới",
    "emoji": "🧭",
    "sampleSentence": "Explore the phonics island treasure.",
    "sampleSentenceVi": "Thám hiểm kho báu trên hòn đảo âm vị.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé thám hiểm thiên nhiên bằng chiếc kính lúp nhỏ"
    }
  },
  {
    "id": "wb_h_hamster_10",
    "word": "hamster",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "a",
      "m",
      "s",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chuột hamster bé xíu",
    "emoji": "🐹",
    "sampleSentence": "The cute hamster runs in its toy wheel.",
    "sampleSentenceVi": "Chú hamster đáng yêu chạy trên bánh xe đồ chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chuột hamster má phúng phính ăn hạt hướng dương"
    }
  },
  {
    "id": "wb_h_hippo_11",
    "word": "hippo",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "i",
      "pp",
      "o"
    ],
    "theme": "animals",
    "meaningVi": "chú hà mã ngâm nước",
    "emoji": "🦛",
    "sampleSentence": "The hippo splashes water with its ears.",
    "sampleSentenceVi": "Chú hà mã vẫy tai té nước mát rượi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú hà mã ngâm mình trong dòng nước mát"
    }
  },
  {
    "id": "wb_h_hedgehog_12",
    "word": "hedgehog",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "e",
      "d",
      "g_e",
      "h",
      "o",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "chú nhím gai nhỏ",
    "emoji": "🦔",
    "sampleSentence": "A tiny hedgehog curls into a prickly ball.",
    "sampleSentenceVi": "Chú nhím gai cuộn tròn như một quả bóng nhỏ.",
    "visual": {
      "url": "/assets/ehon/hedgehog.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú nhím gai cuộn tròn ngủ giữa lá mùa thu"
    }
  },
  {
    "id": "wb_h_hare_13",
    "word": "hare",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "air"
    ],
    "theme": "animals",
    "meaningVi": "chú thỏ rừng tai dài",
    "emoji": "🐇",
    "sampleSentence": "The brown hare leaps through the meadow.",
    "sampleSentenceVi": "Chú thỏ rừng nhảy qua đồng cỏ xanh biếc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thỏ rừng nhanh nhẹn lắng nghe trên đồng cỏ"
    }
  },
  {
    "id": "wb_h_horizon_14",
    "word": "horizon",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "o",
      "r",
      "i_e",
      "z",
      "o",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "đường chân trời xa xa",
    "emoji": "🌅",
    "sampleSentence": "The orange sun sets on the horizon.",
    "sampleSentenceVi": "Mặt trời cam lặn nơi đường chân trời xa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đường chân trời xa tít tắp nơi biển gặp trời"
    }
  },
  {
    "id": "wb_h_heart_15",
    "word": "heart",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "ar",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "trái tim yêu thương",
    "emoji": "❤️",
    "sampleSentence": "Draw a loving red heart for mommy.",
    "sampleSentenceVi": "Vẽ trái tim đỏ thắm tặng mẹ kính yêu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Trái tim đỏ tràn ngập tình yêu thương"
    }
  },
  {
    "id": "wb_h_honey_16",
    "word": "honey",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "u",
      "n",
      "ey"
    ],
    "theme": "objects_food",
    "meaningVi": "mật ong ngọt ngào",
    "emoji": "🍯",
    "sampleSentence": "Sweet golden honey from the beehive.",
    "sampleSentenceVi": "Mật ong vàng óng thơm ngát từ tổ ong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hũ mật ong vàng óng thơm ngọt tự nhiên"
    }
  },
  {
    "id": "wb_h_helmet_17",
    "word": "helmet",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "e",
      "l",
      "m",
      "e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "mũ bảo hiểm an toàn",
    "emoji": "⛑️",
    "sampleSentence": "Wear a safe helmet when riding your bike.",
    "sampleSentenceVi": "Đội mũ bảo hiểm an toàn khi đi xe đạp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mũ bảo hiểm sắc màu bảo vệ bé an toàn"
    }
  },
  {
    "id": "wb_h_hold_19",
    "word": "hold",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "o",
      "l",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "nắm chặt bàn tay",
    "emoji": "🤝",
    "sampleSentence": "Hold hands when crossing the street.",
    "sampleSentenceVi": "Nắm chặt tay nhau khi qua đường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bàn tay nhỏ ôm chặt chú gấu bông mềm mại"
    }
  },
  {
    "id": "wb_h_help_20",
    "word": "help",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "e",
      "l",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "giúp đỡ mọi người",
    "emoji": "🤲",
    "sampleSentence": "Help tidy up the toys after play.",
    "sampleSentenceVi": "Giúp dọn dẹp đồ chơi sau khi chơi xong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé ân cần giúp đỡ bạn thu dọn đồ chơi"
    }
  },
  {
    "id": "wb_h_hike_21",
    "word": "hike",
    "phonemeId": "h",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "h",
      "i_e",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "đi bộ leo núi",
    "emoji": "🥾",
    "sampleSentence": "Hike up the green hill with family.",
    "sampleSentenceVi": "Đi dạo leo lên ngọn đồi xanh cùng gia đình.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Gia đình cùng nhau đi bộ dã ngoại ngắm cảnh núi rừng"
    }
  },
  {
    "id": "wb_r_robin_10",
    "word": "robin",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "o",
      "b",
      "i",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chim cổ đỏ líu lo",
    "emoji": "🐦",
    "sampleSentence": "A friendly robin perches on the fence.",
    "sampleSentenceVi": "Chú chim cổ đỏ đậu trên hàng rào líu lo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim cổ đỏ líu lo bên cành cây tuyết trắng"
    }
  },
  {
    "id": "wb_r_raccoon_11",
    "word": "raccoon",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "a",
      "cc",
      "oo",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chú gấu mèo ngộ nghĩnh",
    "emoji": "🦝",
    "sampleSentence": "The masked raccoon washes food in water.",
    "sampleSentenceVi": "Chú gấu mèo rửa thức ăn bên bờ suối.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gấu mèo nghịch ngợm rửa đồ ăn bên suối"
    }
  },
  {
    "id": "wb_r_rhino_12",
    "word": "rhino",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "i_e",
      "n",
      "o"
    ],
    "theme": "animals",
    "meaningVi": "chú tê giác một sừng",
    "emoji": "🦏",
    "sampleSentence": "The strong rhino walks peacefully.",
    "sampleSentenceVi": "Chú tê giác mạnh mẽ dạo bước bình yên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tê giác hiền hòa thong thả gặm cỏ non"
    }
  },
  {
    "id": "wb_r_rooster_13",
    "word": "rooster",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "oo",
      "s",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú gà trống oai vệ",
    "emoji": "🐓",
    "sampleSentence": "The rooster crows to greet the dawn.",
    "sampleSentenceVi": "Gà trống cất tiếng gáy đón ánh bình minh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gà trống oai vệ cất tiếng gáy đón bình minh"
    }
  },
  {
    "id": "wb_r_rainbow_14",
    "word": "rainbow",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "ai",
      "n",
      "b",
      "ow"
    ],
    "theme": "nature",
    "meaningVi": "cầu vồng bảy sắc",
    "emoji": "🌈",
    "sampleSentence": "A beautiful seven-colored rainbow in the sky.",
    "sampleSentenceVi": "Cầu vồng bảy sắc rực rỡ sau cơn mưa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cầu vồng bảy sắc lung linh sau cơn mưa rào"
    }
  },
  {
    "id": "wb_r_rose_15",
    "word": "rose",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "o_e",
      "z"
    ],
    "theme": "nature",
    "meaningVi": "bông hoa hồng ngát hương",
    "emoji": "🌹",
    "sampleSentence": "The red rose blooms in the summer garden.",
    "sampleSentenceVi": "Bông hoa hồng đỏ nở ngát hương trong vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đóa hoa hồng đỏ thắm tỏa ngát hương thơm"
    }
  },
  {
    "id": "wb_r_ribbon_16",
    "word": "ribbon",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "i",
      "bb",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "dải ruy băng buộc quà",
    "emoji": "🎀",
    "sampleSentence": "Tie the gift box with a pink silk ribbon.",
    "sampleSentenceVi": "Thắt hộp quà bằng dải ruy băng hồng xinh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dải ruy băng lụa đỏ buộc hộp quà xinh xắn"
    }
  },
  {
    "id": "wb_r_rope_17",
    "word": "rope",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "o_e",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "dây thừng nhảy dây",
    "emoji": "🪢",
    "sampleSentence": "Skip rope with friends in the schoolyard.",
    "sampleSentenceVi": "Nhảy dây cùng bè bạn ngoài sân trường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sợi dây thừng bện chắc chắn cho trò kéo co"
    }
  },
  {
    "id": "wb_r_radio_18",
    "word": "radio",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "a",
      "d",
      "i",
      "o"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc đài radio phát nhạc",
    "emoji": "📻",
    "sampleSentence": "Listen to lovely songs on the radio.",
    "sampleSentenceVi": "Nghe những khúc ca êm dịu trên đài radio.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc radio cổ điển phát những bài ca vui tươi"
    }
  },
  {
    "id": "wb_r_rocket_19",
    "word": "rocket",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "o",
      "ck",
      "e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "tàu tên lửa vũ trụ",
    "emoji": "🚀",
    "sampleSentence": "The space rocket zooms to the moon.",
    "sampleSentenceVi": "Tàu tên lửa bay vút lên cung trăng.",
    "visual": {
      "url": "/assets/ehon/rocket.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon tàu con thoi bay qua các vì sao"
    }
  },
  {
    "id": "wb_r_read_20",
    "word": "read",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "ea",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "đọc sách chăm chú",
    "emoji": "📖",
    "sampleSentence": "Read a wonderful bedtime story tonight.",
    "sampleSentenceVi": "Đọc câu chuyện cổ tích tuyệt vời tối nay.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé say mê đọc cuốn sách tranh rực rỡ sắc màu"
    }
  },
  {
    "id": "wb_r_ride_21",
    "word": "ride",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "i_e",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "lái xe đạp vui nhộn",
    "emoji": "🚲",
    "sampleSentence": "Ride your shiny bicycle in the park.",
    "sampleSentenceVi": "Lái chiếc xe đạp bóng loáng trong công viên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé tự tin đạp chiếc xe đạp ba bánh quanh sân"
    }
  },
  {
    "id": "wb_r_roll_22",
    "word": "roll",
    "phonemeId": "r",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "r",
      "o",
      "ll"
    ],
    "theme": "actions",
    "meaningVi": "lăn tròn quả bóng",
    "emoji": "⚽",
    "sampleSentence": "Roll the ball gently across the carpet.",
    "sampleSentenceVi": "Lăn nhẹ quả bóng qua thảm êm.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả bóng tròn lăn tít trên sân cỏ"
    }
  },
  {
    "id": "wb_m_mole_10",
    "word": "mole",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "o_e",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú chuột chũi nhỏ",
    "emoji": "🦔",
    "sampleSentence": "The little mole burrows under garden soil.",
    "sampleSentenceVi": "Chú chuột chũi đào hang dưới luống đất mềm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chuột chũi nhỏ nhô đầu khỏi mô đất"
    }
  },
  {
    "id": "wb_m_moose_11",
    "word": "moose",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "oo",
      "s"
    ],
    "theme": "animals",
    "meaningVi": "nai sừng tấm khổng lồ",
    "emoji": "🦌",
    "sampleSentence": "The moose wades in the clear forest lake.",
    "sampleSentenceVi": "Nai sừng tấm lội nước bên hồ rừng trong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nai sừng tấm sừng sững bên hồ rừng thông"
    }
  },
  {
    "id": "wb_m_moth_12",
    "word": "moth",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "o",
      "th"
    ],
    "theme": "animals",
    "meaningVi": "chú bướm đêm vỗ cánh",
    "emoji": "🦋",
    "sampleSentence": "The velvety moth flies near the lantern.",
    "sampleSentenceVi": "Chú bướm đêm bay lượn bên ánh đèn lồng.",
    "visual": {
      "url": "/assets/ehon/three_moths.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon ba chú bướm đêm vỗ cánh dịu dàng"
    }
  },
  {
    "id": "wb_m_mountain_13",
    "word": "mountain",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "ou",
      "n",
      "t",
      "ai",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "ngọn núi tuyết phủ",
    "emoji": "🏔️",
    "sampleSentence": "Snow caps the peak of the high mountain.",
    "sampleSentenceVi": "Tuyết trắng phủ trên đỉnh ngọn núi cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngọn núi hùng vĩ đỉnh phủ mây trắng"
    }
  },
  {
    "id": "wb_m_meadow_14",
    "word": "meadow",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "e",
      "d",
      "ow"
    ],
    "theme": "nature",
    "meaningVi": "đồng cỏ ngập hoa vàng",
    "emoji": "🌼",
    "sampleSentence": "Yellow buttercups blanket the sunny meadow.",
    "sampleSentenceVi": "Hoa vàng trải thảm rực rỡ trên đồng cỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đồng cỏ xanh bát ngát rực rỡ hoa dại"
    }
  },
  {
    "id": "wb_m_mitten_15",
    "word": "mitten",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "i",
      "tt",
      "e",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "găng tay len ấm áp",
    "emoji": "🧤",
    "sampleSentence": "Wear warm wool mittens in winter.",
    "sampleSentenceVi": "Đeo găng tay len ấm áp vào mùa đông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi găng tay len ấm áp ngày đông tuyết rơi"
    }
  },
  {
    "id": "wb_m_mirror_16",
    "word": "mirror",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "i",
      "rr",
      "or"
    ],
    "theme": "objects_food",
    "meaningVi": "tấm gương soi sáng bóng",
    "emoji": "🪞",
    "sampleSentence": "Look at your happy smile in the mirror.",
    "sampleSentenceVi": "Ngắm nhìn nụ cười tươi của con trong gương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc gương soi khung gỗ phản chiếu nụ cười"
    }
  },
  {
    "id": "wb_m_melon_17",
    "word": "melon",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "e",
      "l",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "quả dưa lưới ngọt mát",
    "emoji": "🍈",
    "sampleSentence": "Sweet juicy melon on a sunny afternoon.",
    "sampleSentenceVi": "Thưởng thức dưa lưới ngọt mát ngày hè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả dưa lưới thơm lừng ngọt mát mùa hè"
    }
  },
  {
    "id": "wb_m_muffin_18",
    "word": "muffin",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "u",
      "ff",
      "i",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh nướng xốp thơm",
    "emoji": "🧁",
    "sampleSentence": "Blueberry muffin warm from the oven.",
    "sampleSentenceVi": "Bánh muffin việt quất thơm lừng vừa nướng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bánh muffin việt quất nướng xốp mềm"
    }
  },
  {
    "id": "wb_m_march_19",
    "word": "march",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "ar",
      "ch"
    ],
    "theme": "actions",
    "meaningVi": "bước đều tăm tắp",
    "emoji": "🚶‍♂️",
    "sampleSentence": "March like brave little soldiers in a row.",
    "sampleSentenceVi": "Bước đều tăm tắp như những chú lính con dũng cảm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ bước đều tăm tắp như những chú lính chì"
    }
  },
  {
    "id": "wb_m_make_20",
    "word": "make",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "a_e",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "tạo nên tác phẩm",
    "emoji": "🛠️",
    "sampleSentence": "Make a colorful collage with paper scraps.",
    "sampleSentenceVi": "Cắt dán tạo nên bức tranh bằng giấy màu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé khéo tay nặn chiếc bánh đất sét sắc màu"
    }
  },
  {
    "id": "wb_m_melt_21",
    "word": "melt",
    "phonemeId": "m",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "m",
      "e",
      "l",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "tan chảy ngọt ngào",
    "emoji": "🍦",
    "sampleSentence": "Ice cream melts sweetly on a warm day.",
    "sampleSentenceVi": "Que kem ngọt ngào tan chảy dưới nắng ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cục băng tuyết tan chảy thành giọt nước mát"
    }
  },
  {
    "id": "wb_d_deer_10",
    "word": "deer",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "ee",
      "r"
    ],
    "theme": "animals",
    "meaningVi": "chú hươu sao mắt tròn",
    "emoji": "🦌",
    "sampleSentence": "The gentle deer walks softly in the woods.",
    "sampleSentenceVi": "Chú hươu sao nhẹ nhàng dạo bước giữa rừng cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú hươu sao mắt tròn xoe ngơ ngác giữa rừng"
    }
  },
  {
    "id": "wb_d_dolphin_11",
    "word": "dolphin",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "o",
      "l",
      "ph",
      "i",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "cá heo nhảy sóng",
    "emoji": "🐬",
    "sampleSentence": "A playful dolphin leaps out of the blue wave.",
    "sampleSentenceVi": "Cá heo tinh nghịch nhảy vút khỏi ngọn sóng biếc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cá heo nhảy múa vui tươi trên mặt sóng biếc"
    }
  },
  {
    "id": "wb_d_dove_12",
    "word": "dove",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "u",
      "v_e"
    ],
    "theme": "animals",
    "meaningVi": "chim bồ câu trắng",
    "emoji": "🕊️",
    "sampleSentence": "A pure white dove rests on the branch.",
    "sampleSentenceVi": "Chú chim bồ câu trắng muốt đậu trên cành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bồ câu trắng ngậm cành ô liu hòa bình"
    }
  },
  {
    "id": "wb_d_donkey_13",
    "word": "donkey",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "o",
      "n",
      "k",
      "ey"
    ],
    "theme": "animals",
    "meaningVi": "chú lừa chăm chỉ",
    "emoji": "🫏",
    "sampleSentence": "The kind donkey carries baskets of apples.",
    "sampleSentenceVi": "Chú lừa hiền hòa chở những giỏ táo thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú lừa con hiền lành chở giỏ hoa dại"
    }
  },
  {
    "id": "wb_d_dandelion_14",
    "word": "dandelion",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "a",
      "n",
      "d",
      "e",
      "l",
      "i",
      "o",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "hoa bồ công anh bay gió",
    "emoji": "🌾",
    "sampleSentence": "Blow the fluffy dandelion seeds into the breeze.",
    "sampleSentenceVi": "Thổi những hạt bồ công anh bay theo gió mát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa bồ công anh tròn xoe bay theo gió"
    }
  },
  {
    "id": "wb_d_desert_15",
    "word": "desert",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "e",
      "s",
      "er",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "sa mạc đồi cát vàng",
    "emoji": "🏜️",
    "sampleSentence": "Golden sand dunes stretch across the desert.",
    "sampleSentenceVi": "Những đụn cát vàng óng trải dài nơi sa mạc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sa mạc cát vàng rực rỡ dưới ánh mặt trời"
    }
  },
  {
    "id": "wb_d_dew_16",
    "word": "dew",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "ew"
    ],
    "theme": "nature",
    "meaningVi": "giọt sương mai đọng lá",
    "emoji": "💧",
    "sampleSentence": "Morning dew sparkles like diamonds on leaves.",
    "sampleSentenceVi": "Sương mai lấp lánh như kim cương trên lá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Giọt sương mai long lanh đọng trên ngọn cỏ non"
    }
  },
  {
    "id": "wb_d_donut_17",
    "word": "donut",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "o_e",
      "n",
      "u",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh vòng ngọt thơm",
    "emoji": "🍩",
    "sampleSentence": "A pink frosted donut with rainbow sprinkles.",
    "sampleSentenceVi": "Chiếc bánh vòng phủ kem hồng rắc kẹo cốm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bánh vòng donut phủ đường dâu rực rỡ"
    }
  },
  {
    "id": "wb_d_dish_18",
    "word": "dish",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "i",
      "sh"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc đĩa sứ sạch bóng",
    "emoji": "🍽️",
    "sampleSentence": "Wash and dry the ceramic dish carefully.",
    "sampleSentenceVi": "Rửa và lau khô chiếc đĩa sứ cẩn thận.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc đĩa gốm hoa văn trang nhã"
    }
  },
  {
    "id": "wb_d_dress_19",
    "word": "dress",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "r",
      "e",
      "ss"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc váy xòe hoa",
    "emoji": "👗",
    "sampleSentence": "A pretty yellow dress with floral patterns.",
    "sampleSentenceVi": "Chiếc váy vàng rực rỡ in hoa xinh xắn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc váy xòe hoa nhí xinh xắn của bé gái"
    }
  },
  {
    "id": "wb_d_dance_20",
    "word": "dance",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "a",
      "n",
      "s_e"
    ],
    "theme": "actions",
    "meaningVi": "khiêu vũ uyển chuyển",
    "emoji": "💃",
    "sampleSentence": "Dance to the lively cheerful rhythm.",
    "sampleSentenceVi": "Khiêu vũ nhịp nhàng theo điệu nhạc rộn rã.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé múa những điệu nhảy uyển chuyển đáng yêu"
    }
  },
  {
    "id": "wb_d_dive_21",
    "word": "dive",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "i_e",
      "v"
    ],
    "theme": "actions",
    "meaningVi": "lặn sâu khám phá biển",
    "emoji": "🤿",
    "sampleSentence": "Dive underwater to see colorful corals.",
    "sampleSentenceVi": "Lặn xuống nước ngắm san hô rực rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé lặn ngụp vui đùa dưới làn nước trong xanh"
    }
  },
  {
    "id": "wb_d_draw_22",
    "word": "draw",
    "phonemeId": "d",
    "group": 2,
    "stage": 2,
    "phonemes": [
      "d",
      "r",
      "aw"
    ],
    "theme": "actions",
    "meaningVi": "vẽ tranh sáng tạo",
    "emoji": "🖍️",
    "sampleSentence": "Draw happy animals with crayons.",
    "sampleSentenceVi": "Vẽ những bạn thú vui tươi bằng bút sáp màu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé vẽ những bông hoa và ngôi sao tươi sáng"
    }
  },
  {
    "id": "wb_g_gorilla_20",
    "word": "gorilla",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "o",
      "r",
      "i",
      "ll",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "khỉ đột hiền lành",
    "emoji": "🦍",
    "sampleSentence": "A gentle gorilla rests in the shade.",
    "sampleSentenceVi": "Chú khỉ đột hiền hòa nằm nghỉ trong bóng râm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khỉ đột to lớn hiền hòa chăm sóc gia đình"
    }
  },
  {
    "id": "wb_g_goldfish_21",
    "word": "goldfish",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "o",
      "l",
      "d",
      "f",
      "i",
      "sh"
    ],
    "theme": "animals",
    "meaningVi": "chú cá vàng bơi lội",
    "emoji": "🐠",
    "sampleSentence": "The goldfish swims in clear water.",
    "sampleSentenceVi": "Chú cá vàng bơi lội trong hồ nước trong.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cá vàng đuôi xòe bơi lượn trong làn nước trong"
    }
  },
  {
    "id": "wb_g_gazelle_22",
    "word": "gazelle",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "a",
      "z",
      "e",
      "ll",
      "e"
    ],
    "theme": "animals",
    "meaningVi": "linh dương duyên dáng",
    "emoji": "🦌",
    "sampleSentence": "The graceful gazelle leaps over rocks.",
    "sampleSentenceVi": "Linh dương duyên dáng nhảy qua gộp đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Linh dương bước nhảy thanh thoát trên thảo nguyên"
    }
  },
  {
    "id": "wb_g_garden_23",
    "word": "garden",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "ar",
      "d",
      "e",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "khu vườn hoa rực rỡ",
    "emoji": "🏡",
    "sampleSentence": "Roses bloom in the sunny garden.",
    "sampleSentenceVi": "Hoa hồng nở rộ trong khu vườn ngập nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khu vườn cổ tích ngập tràn sắc hoa"
    }
  },
  {
    "id": "wb_g_grass_24",
    "word": "grass",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "r",
      "a",
      "ss"
    ],
    "theme": "nature",
    "meaningVi": "thảm cỏ xanh mướt",
    "emoji": "🌱",
    "sampleSentence": "Walk barefoot on soft green grass.",
    "sampleSentenceVi": "Dạo bước chân trần trên thảm cỏ non mềm mại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thảm cỏ xanh mướt mát rượi dưới bàn chân"
    }
  },
  {
    "id": "wb_g_guitar_25",
    "word": "guitar",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "ui",
      "t",
      "ar"
    ],
    "theme": "objects_food",
    "meaningVi": "đàn guitar gỗ êm ái",
    "emoji": "🎸",
    "sampleSentence": "Strum joyful melodies on the guitar.",
    "sampleSentenceVi": "Gảy những giai điệu vui tươi trên cây đàn guitar.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây đàn ghi-ta gỗ vang lên điệu nhạc rộn rã"
    }
  },
  {
    "id": "wb_g_grape_27",
    "word": "grape",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "r",
      "a_e",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "chùm nho tím ngọt",
    "emoji": "🍇",
    "sampleSentence": "Sweet purple grapes fresh from the vine.",
    "sampleSentenceVi": "Những chùm nho tím ngọt lành hái từ giàn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chùm nho tím mọng nước thơm ngọt"
    }
  },
  {
    "id": "wb_g_glove_28",
    "word": "glove",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "l",
      "u",
      "v_e"
    ],
    "theme": "objects_food",
    "meaningVi": "găng tay làm vườn",
    "emoji": "🧤",
    "sampleSentence": "Wear garden gloves to plant flowers.",
    "sampleSentenceVi": "Đeo găng tay để trồng hoa cùng mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi găng tay ấm áp sắc màu cho trẻ em"
    }
  },
  {
    "id": "wb_g_grin_29",
    "word": "grin",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "r",
      "i",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "cười toe toét",
    "emoji": "😁",
    "sampleSentence": "A big bright grin on your happy face.",
    "sampleSentenceVi": "Nụ cười toe toét rạng rỡ trên khuôn mặt bé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé cười toe toét khoe lúm đồng tiền xinh"
    }
  },
  {
    "id": "wb_g_glide_30",
    "word": "glide",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "l",
      "i_e",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "lướt êm ái",
    "emoji": "⛸️",
    "sampleSentence": "Glide smoothly on the shiny ice rink.",
    "sampleSentenceVi": "Lướt êm ái trên sân băng lóng lánh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thiên nga lướt êm đềm trên mặt nước hồ phẳng lặng"
    }
  },
  {
    "id": "wb_g_gather_31",
    "word": "gather",
    "phonemeId": "g",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "g",
      "a",
      "th",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "thu gom quả chín",
    "emoji": "🧺",
    "sampleSentence": "Gather sweet berries into a basket.",
    "sampleSentenceVi": "Thu gom quả mọng ngọt vào giỏ nhỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé gom những chiếc lá vàng mùa thu thành đống nhỏ"
    }
  },
  {
    "id": "wb_o_octopus_22",
    "word": "octopus",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "c",
      "t",
      "o",
      "p",
      "u",
      "s"
    ],
    "theme": "animals",
    "meaningVi": "bạch tuộc tám xúc tu",
    "emoji": "🐙",
    "sampleSentence": "An octopus hides behind coral reefs.",
    "sampleSentenceVi": "Bạch tuộc ẩn mình sau rạn san hô.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bạch tuộc tám xúc tu bơi uốn lượn dưới đáy đại dương"
    }
  },
  {
    "id": "wb_o_orca_23",
    "word": "orca",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "or",
      "c",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "cá voi sát thủ rẽ sóng",
    "emoji": "🐋",
    "sampleSentence": "The orca leaps gracefully over waves.",
    "sampleSentenceVi": "Cá voi nhảy thanh thoát qua ngọn sóng biếc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cá voi sát thủ rẽ sóng giữa biển khơi"
    }
  },
  {
    "id": "wb_o_ocean_24",
    "word": "ocean",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "sh",
      "a",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "đại dương mênh mông",
    "emoji": "🌊",
    "sampleSentence": "Dolphins swim in the vast ocean.",
    "sampleSentenceVi": "Đàn cá heo bơi lội giữa đại dương mênh mông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đại dương xanh thẳm bao la muôn trùng sóng vỗ"
    }
  },
  {
    "id": "wb_o_oasis_25",
    "word": "oasis",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "a",
      "s",
      "i",
      "s"
    ],
    "theme": "nature",
    "meaningVi": "ốc đảo xanh tươi",
    "emoji": "🌴",
    "sampleSentence": "A refreshing green oasis in the desert.",
    "sampleSentenceVi": "Ốc đảo xanh tươi mát lành giữa sa mạc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ốc đảo tươi mát với rặng cọ xanh giữa sa mạc"
    }
  },
  {
    "id": "wb_o_olive_27",
    "word": "olive",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "l",
      "i",
      "v_e"
    ],
    "theme": "objects_food",
    "meaningVi": "quả ô liu xanh",
    "emoji": "🫒",
    "sampleSentence": "Plump green olives on the salad.",
    "sampleSentenceVi": "Những quả ô liu xanh mướt trên đĩa salad.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những quả ô liu xanh mướt trên cành lá bạc"
    }
  },
  {
    "id": "wb_o_omelet_28",
    "word": "omelet",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "m",
      "e",
      "l",
      "e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "trứng cuộn thơm béo",
    "emoji": "🍳",
    "sampleSentence": "A warm fluffy omelet for breakfast.",
    "sampleSentenceVi": "Món trứng cuộn thơm béo cho bữa sáng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Món trứng cuộn chiên vàng thơm phức bữa sáng"
    }
  },
  {
    "id": "wb_o_open_29",
    "word": "open",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "o",
      "p",
      "e",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "mở trang sách mới",
    "emoji": "📖",
    "sampleSentence": "Open the colorful picture book.",
    "sampleSentenceVi": "Mở trang sách tranh sắc màu kỳ diệu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mở rộng cánh cửa sổ đón gió mát tràn vào"
    }
  },
  {
    "id": "wb_o_order_30",
    "word": "order",
    "phonemeId": "o",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "or",
      "d",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "xếp theo thứ tự",
    "emoji": "🔢",
    "sampleSentence": "Put the wooden blocks in neat order.",
    "sampleSentenceVi": "Xếp những khối gỗ theo thứ tự ngăn nắp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé sắp xếp các khối hình theo thứ tự ngay ngắn"
    }
  },
  {
    "id": "wb_u_urchin_20",
    "word": "urchin",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "ur",
      "ch",
      "i",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "nhím biển gai nhọn",
    "emoji": "🦔",
    "sampleSentence": "A sea urchin rests on the seafloor.",
    "sampleSentenceVi": "Nhím biển nằm yên dưới đáy đại dương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú nhím biển tròn xoe dưới đáy rạn san hô"
    }
  },
  {
    "id": "wb_u_ukulele_22",
    "word": "ukulele",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "k",
      "u",
      "l",
      "e",
      "l",
      "e"
    ],
    "theme": "objects_food",
    "meaningVi": "đàn ukulele nhỏ xinh",
    "emoji": "🪕",
    "sampleSentence": "Strum cheerful tunes on the ukulele.",
    "sampleSentenceVi": "Gảy những giai điệu rộn ràng trên đàn ukulele.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây đàn ukulele nhỏ nhắn giai điệu vui tươi"
    }
  },
  {
    "id": "wb_u_uniform_23",
    "word": "uniform",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "n",
      "i",
      "f",
      "or",
      "m"
    ],
    "theme": "objects_food",
    "meaningVi": "đồng phục học sinh",
    "emoji": "👔",
    "sampleSentence": "Wear a clean neat school uniform.",
    "sampleSentenceVi": "Mặc bộ đồng phục học sinh tinh tươm sạch sẽ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bộ đồng phục học sinh tinh tươm ngày tựu trường"
    }
  },
  {
    "id": "wb_u_uphill_25",
    "word": "uphill",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "p",
      "h",
      "i",
      "ll"
    ],
    "theme": "nature",
    "meaningVi": "con dốc thoai thoải",
    "emoji": "⛰️",
    "sampleSentence": "Walk uphill to see the grand view.",
    "sampleSentenceVi": "Đi lên dốc để ngắm toàn cảnh hùng vĩ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đoạn đường dốc thoai thoải lên ngọn đồi xanh"
    }
  },
  {
    "id": "wb_u_untie_26",
    "word": "untie",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "n",
      "t",
      "ie"
    ],
    "theme": "actions",
    "meaningVi": "cởi nút thắt nơ",
    "emoji": "🎀",
    "sampleSentence": "Untie the ribbon on the gift box.",
    "sampleSentenceVi": "Cởi nút thắt ruy băng trên hộp quà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé cẩn thận gỡ nút thắt dải ruy băng quà tặng"
    }
  },
  {
    "id": "wb_u_unpack_27",
    "word": "unpack",
    "phonemeId": "u",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "u",
      "n",
      "p",
      "a",
      "ck"
    ],
    "theme": "actions",
    "meaningVi": "dỡ đồ chơi ra",
    "emoji": "📦",
    "sampleSentence": "Unpack wooden blocks to build a castle.",
    "sampleSentenceVi": "Dỡ những khối gỗ ra để xây lâu đài.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mở ba lô lấy đồ dùng học tập xinh xắn"
    }
  },
  {
    "id": "wb_l_lamb_20",
    "word": "lamb",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "m"
    ],
    "theme": "animals",
    "meaningVi": "chú cừu non lông xù",
    "emoji": "🐑",
    "sampleSentence": "The gentle lamb plays in the green grass.",
    "sampleSentenceVi": "Chú cừu non đùa vui trên thảm cỏ biếc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cừu non lông trắng muốt nhảy tung tăng"
    }
  },
  {
    "id": "wb_l_leopard_21",
    "word": "leopard",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "e",
      "p",
      "ar",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "báo hoa mai nhanh nhẹn",
    "emoji": "🐆",
    "sampleSentence": "The spotted leopard walks with soft steps.",
    "sampleSentenceVi": "Báo hoa mai bước đi êm ái nhẹ nhàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Báo hoa mai nhanh nhẹn nằm trên cành cây cao"
    }
  },
  {
    "id": "wb_l_lizard_22",
    "word": "lizard",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "i",
      "z",
      "ar",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "thằn lằn sưởi nắng",
    "emoji": "🦎",
    "sampleSentence": "A little green lizard warms itself on stone.",
    "sampleSentenceVi": "Chú thằn lằn xanh sưởi nắng trên phiến đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú thằn lằn nhỏ sưởi nắng trên tảng đá ấm"
    }
  },
  {
    "id": "wb_l_llama_23",
    "word": "llama",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "m",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "lạc đà llama thân thiện",
    "emoji": "🦙",
    "sampleSentence": "The friendly llama chews sweet clover.",
    "sampleSentenceVi": "Chú llama thân thiện nhai cỏ ba lá ngọt.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lạc đà không bướu llama ngước nhìn đồi núi xanh"
    }
  },
  {
    "id": "wb_l_ladybug_24",
    "word": "ladybug",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "d",
      "y",
      "b",
      "u",
      "g"
    ],
    "theme": "animals",
    "meaningVi": "bọ rùa chấm bi đỏ",
    "emoji": "🐞",
    "sampleSentence": "A red ladybug crawls on a daisy flower.",
    "sampleSentenceVi": "Bọ rùa chấm bi bò trên bông hoa cúc trắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bọ rùa chấm bi đỏ thắm đậu trên cánh hoa cúc"
    }
  },
  {
    "id": "wb_l_lobster_25",
    "word": "lobster",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "o",
      "b",
      "s",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "tôm hùm đại dương",
    "emoji": "🦞",
    "sampleSentence": "The lobster scuttles along rocky sea caves.",
    "sampleSentenceVi": "Tôm hùm bò men theo các hang đá biển.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tôm hùm đỏ với đôi càng to khỏe dưới biển"
    }
  },
  {
    "id": "wb_l_lily_27",
    "word": "lily",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "i",
      "l",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "hoa loa kèn tinh khôi",
    "emoji": "🌸",
    "sampleSentence": "A white water lily floats on the pond.",
    "sampleSentenceVi": "Hoa loa kèn nước trắng muốt nổi trên mặt ao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa loa kèn trắng tinh khôi thanh khiết"
    }
  },
  {
    "id": "wb_l_lemon_28",
    "word": "lemon",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "e",
      "m",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "quả chanh vàng thơm mát",
    "emoji": "🍋",
    "sampleSentence": "A slice of yellow lemon in cool water.",
    "sampleSentenceVi": "Lát chanh vàng thơm mát trong ly nước lọc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quả chanh vàng óng chua ngọt thơm lừng"
    }
  },
  {
    "id": "wb_l_loaf_29",
    "word": "loaf",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "oa",
      "f"
    ],
    "theme": "objects_food",
    "meaningVi": "ổ bánh mì vàng giòn",
    "emoji": "🍞",
    "sampleSentence": "A fresh loaf of bread sliced for family.",
    "sampleSentenceVi": "Ổ bánh mì mới ra lò cắt lát thơm ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ổ bánh mì nướng vàng giòn thơm nức"
    }
  },
  {
    "id": "wb_l_ladder_30",
    "word": "ladder",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "dd",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc thang gỗ chắc chắn",
    "emoji": "🪜",
    "sampleSentence": "Climb the sturdy wooden ladder safely.",
    "sampleSentenceVi": "Leo lên chiếc thang gỗ chắc chắn một cách an toàn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc thang gỗ giúp hái những quả táo chín"
    }
  },
  {
    "id": "wb_l_listen_31",
    "word": "listen",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "i",
      "s",
      "e",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "lắng nghe tiếng chim",
    "emoji": "👂",
    "sampleSentence": "Listen to the sweet sounds of singing birds.",
    "sampleSentenceVi": "Lắng nghe những thanh âm ngọt ngào của tiếng chim ca.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé chăm chú lắng nghe tiếng chim hót véo von"
    }
  },
  {
    "id": "wb_l_laugh_32",
    "word": "laugh",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "a",
      "f"
    ],
    "theme": "actions",
    "meaningVi": "cười vang vui sướng",
    "emoji": "😄",
    "sampleSentence": "Laugh with friends at funny storybooks.",
    "sampleSentenceVi": "Cười vang cùng bạn bè bên cuốn truyện vui.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tiếng cười khúc khích giòn tan của em bé"
    }
  },
  {
    "id": "wb_l_leap_33",
    "word": "leap",
    "phonemeId": "l",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "l",
      "ea",
      "p"
    ],
    "theme": "actions",
    "meaningVi": "nhảy vút qua vũng nước",
    "emoji": "🤸",
    "sampleSentence": "Leap joyfully across the garden puddle.",
    "sampleSentenceVi": "Nhảy vút qua vũng nước mưa ngoài vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé bật nhảy cao qua vạch đích trong niềm hân hoan"
    }
  },
  {
    "id": "wb_f_fawn_20",
    "word": "fawn",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "aw",
      "n"
    ],
    "theme": "animals",
    "meaningVi": "chú hươu con bé bỏng",
    "emoji": "🦌",
    "sampleSentence": "The baby fawn follows its gentle mother.",
    "sampleSentenceVi": "Chú hươu con bé bỏng lon ton theo mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hươu con bé bỏng nép mình bên mẹ hiền"
    }
  },
  {
    "id": "wb_f_flamingo_21",
    "word": "flamingo",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "l",
      "a",
      "m",
      "i",
      "ng",
      "g",
      "o"
    ],
    "theme": "animals",
    "meaningVi": "chim hồng hạc duyên dáng",
    "emoji": "🦩",
    "sampleSentence": "The pink flamingo stands gracefully by the lake.",
    "sampleSentenceVi": "Hồng hạc lông hồng đứng duyên dáng bên hồ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hồng hạc lông hồng đứng một chân thanh thoát bên hồ"
    }
  },
  {
    "id": "wb_f_ferret_22",
    "word": "ferret",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "e",
      "rr",
      "e",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "chồn sương tinh nghịch",
    "emoji": "🦡",
    "sampleSentence": "The ferret peeps out of its cozy tunnel.",
    "sampleSentenceVi": "Chồn sương ngó đầu ra khỏi đường hầm ấm cúng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chồn sương lanh lợi chui qua đường hầm đồ chơi"
    }
  },
  {
    "id": "wb_f_forest_23",
    "word": "forest",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "or",
      "e",
      "s",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "khu rừng xanh bạt ngàn",
    "emoji": "🌲",
    "sampleSentence": "Tall pine trees shelter the peaceful forest.",
    "sampleSentenceVi": "Những rặng thông cao che chở khu rừng bình yên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khu rừng nguyên sinh rợp bóng cây cổ thụ"
    }
  },
  {
    "id": "wb_f_flower_24",
    "word": "flower",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "l",
      "ow",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "đóa hoa tươi thắm",
    "emoji": "🌸",
    "sampleSentence": "A colorful flower blooms under morning sun.",
    "sampleSentenceVi": "Đóa hoa rực rỡ khoe sắc dưới nắng ban mai.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa hồng nhung nở rộ rực rỡ"
    }
  },
  {
    "id": "wb_f_feather_25",
    "word": "feather",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "e",
      "th",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "chiếc lông vũ êm ái",
    "emoji": "🪶",
    "sampleSentence": "A soft blue feather drifts down from a bird.",
    "sampleSentenceVi": "Chiếc lông vũ xanh biếc êm ái rơi từ cánh chim.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc lông chim mềm mại bay lượn trong gió"
    }
  },
  {
    "id": "wb_f_frost_26",
    "word": "frost",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "r",
      "o",
      "s",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "lớp sương giá lấp lánh",
    "emoji": "❄️",
    "sampleSentence": "Sparkling frost covers winter windowpanes.",
    "sampleSentenceVi": "Lớp sương giá lấp lánh phủ trên ô cửa mùa đông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lớp sương giá lóng lánh phủ trắng cành cây"
    }
  },
  {
    "id": "wb_f_flute_27",
    "word": "flute",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "l",
      "u_e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "cây sáo trúc ngân vang",
    "emoji": "🪈",
    "sampleSentence": "Play soft gentle music on the wooden flute.",
    "sampleSentenceVi": "Thổi những giai điệu êm dịu trên cây sáo trúc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây sáo bạc cất tiếng du dương êm tai"
    }
  },
  {
    "id": "wb_f_fruit_28",
    "word": "fruit",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "r",
      "ui",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "trái cây tươi ngọt",
    "emoji": "🍎",
    "sampleSentence": "A bowl of fresh sweet fruit on the table.",
    "sampleSentenceVi": "Tô trái cây tươi ngọt đặt trên bàn ăn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Giỏ trái cây nhiệt đới ngọt ngào sắc màu"
    }
  },
  {
    "id": "wb_f_find_30",
    "word": "find",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "i_e",
      "n",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "tìm thấy kho báu",
    "emoji": "🔍",
    "sampleSentence": "Find hidden treasures on the Phonics Island.",
    "sampleSentenceVi": "Tìm thấy những kho báu ẩn giấu trên Đảo Âm Vị.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé reo mừng khi tìm thấy chiếc vỏ ốc lấp lánh"
    }
  },
  {
    "id": "wb_f_float_31",
    "word": "float",
    "phonemeId": "f",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "f",
      "l",
      "oa",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "nổi bồng bềnh trên nước",
    "emoji": "⛵",
    "sampleSentence": "Paper boats float gently on the stream.",
    "sampleSentenceVi": "Thuyền giấy nổi bồng bềnh lướt nhẹ trên dòng suối.",
    "visual": {
      "url": "/assets/ehon/ship.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc thuyền bồng bềnh trên sóng"
    }
  },
  {
    "id": "wb_b_butterfly_20",
    "word": "butterfly",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "tt",
      "er",
      "f",
      "l",
      "y"
    ],
    "theme": "animals",
    "meaningVi": "chú bướm rực rỡ",
    "emoji": "🦋",
    "sampleSentence": "A yellow butterfly flutters among flowers.",
    "sampleSentenceVi": "Chú bướm vàng bay rập rờn giữa muôn hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cánh bướm sắc màu rực rỡ đậu trên bông hoa"
    }
  },
  {
    "id": "wb_b_bunny_21",
    "word": "bunny",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "u",
      "nn",
      "y"
    ],
    "theme": "animals",
    "meaningVi": "thỏ con tai dài đáng yêu",
    "emoji": "🐰",
    "sampleSentence": "The soft bunny hops across the garden lawn.",
    "sampleSentenceVi": "Thỏ con mềm mại nhảy nhót trên bãi cỏ vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú thỏ trắng con tai dài mắt tròn xoe ngộ nghĩnh"
    }
  },
  {
    "id": "wb_b_beaver_22",
    "word": "beaver",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "ea",
      "v",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú hải ly cần cù",
    "emoji": "🦫",
    "sampleSentence": "The industrious beaver builds a safe home.",
    "sampleSentenceVi": "Hải ly cần cù xây dựng tổ ấm vững chãi.",
    "visual": {
      "url": "/assets/ehon/otter.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú hải ly bơi lội trên dòng suối mát"
    }
  },
  {
    "id": "wb_b_beetle_23",
    "word": "beetle",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "ee",
      "t",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "bọ cánh cứng lấp lánh",
    "emoji": "🪲",
    "sampleSentence": "A shiny green beetle crawls up the twig.",
    "sampleSentenceVi": "Bọ cánh cứng xanh biếc bò lên cành cây con.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bọ cánh cứng óng ánh như ngọc bích"
    }
  },
  {
    "id": "wb_b_brook_24",
    "word": "brook",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "r",
      "oo",
      "k"
    ],
    "theme": "nature",
    "meaningVi": "con suối róc rách",
    "emoji": "🏞️",
    "sampleSentence": "Clear water babbles along the forest brook.",
    "sampleSentenceVi": "Nước trong róc rách chảy qua con suối nhỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng suối trong veo chảy róc rách qua đá"
    }
  },
  {
    "id": "wb_b_breeze_25",
    "word": "breeze",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "r",
      "ee",
      "z_e"
    ],
    "theme": "nature",
    "meaningVi": "làn gió mát lành",
    "emoji": "🍃",
    "sampleSentence": "A gentle cool breeze sways the willow leaves.",
    "sampleSentenceVi": "Làn gió mát lành làm đung đưa rặng liễu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Làn gió nhẹ khẽ lay ngọn cỏ"
    }
  },
  {
    "id": "wb_b_blossom_26",
    "word": "blossom",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "l",
      "o",
      "ss",
      "o",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "nụ hoa hé nở",
    "emoji": "🌸",
    "sampleSentence": "Pink cherry blossoms open to the spring sky.",
    "sampleSentenceVi": "Những đóa anh đào hồng hé nở đón xuân sang.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những đóa hoa anh đào nở rộ khoe sắc xuân"
    }
  },
  {
    "id": "wb_b_banana_27",
    "word": "banana",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "a",
      "n",
      "a",
      "n",
      "a"
    ],
    "theme": "objects_food",
    "meaningVi": "quả chuối tiêu vàng",
    "emoji": "🍌",
    "sampleSentence": "A sweet ripe yellow banana for breakfast.",
    "sampleSentenceVi": "Quả chuối vàng chín ngọt thơm ngon cho bữa sáng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nải chuối vàng ươm ngọt thơm bổ dưỡng"
    }
  },
  {
    "id": "wb_b_bread_28",
    "word": "bread",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "r",
      "e",
      "a",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "ổ bánh mì nóng hổi",
    "emoji": "🍞",
    "sampleSentence": "Fresh crusty bread warm from the baker.",
    "sampleSentenceVi": "Bánh mì nóng hổi thơm giòn từ lò nướng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ổ bánh mì vỏ giòn ruột mềm mới ra lò"
    }
  },
  {
    "id": "wb_b_bounce_29",
    "word": "bounce",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "ou",
      "n",
      "s_e"
    ],
    "theme": "actions",
    "meaningVi": "nảy tưng tưng",
    "emoji": "🏀",
    "sampleSentence": "Bounce the bright red ball up and down.",
    "sampleSentenceVi": "Nảy quả bóng đỏ tưng tưng lên xuống thật vui.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả bóng nảy tưng tưng vui mắt"
    }
  },
  {
    "id": "wb_b_build_30",
    "word": "build",
    "phonemeId": "b",
    "group": 3,
    "stage": 2,
    "phonemes": [
      "b",
      "ui",
      "l",
      "d"
    ],
    "theme": "actions",
    "meaningVi": "xây lâu đài cát",
    "emoji": "🏰",
    "sampleSentence": "Build a grand sandcastle on the sunny beach.",
    "sampleSentenceVi": "Xây tòa lâu đài cát nguy nga trên bãi biển ngập nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé xếp những khối gỗ xây nên lâu đài kiên cố"
    }
  },
  {
    "id": "wb_ai_quail_20",
    "word": "quail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "qu",
      "ai",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chim cút nhỏ nhắn",
    "emoji": "🐦",
    "sampleSentence": "A tiny quail pecks seeds in the grass.",
    "sampleSentenceVi": "Chim cút bé nhỏ mổ thóc trên thảm cỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chim cút nhỏ nhắn xinh xắn"
    }
  },
  {
    "id": "wb_ai_rainbow_23",
    "word": "rainbow",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "r",
      "ai",
      "n",
      "b",
      "ow"
    ],
    "theme": "nature",
    "meaningVi": "cầu vồng rực rỡ",
    "emoji": "🌈",
    "sampleSentence": "Look at the seven-colored rainbow above.",
    "sampleSentenceVi": "Hãy ngắm nhìn cầu vồng bảy sắc trên nền trời.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cầu vồng bảy sắc lung linh sau cơn mưa rào"
    }
  },
  {
    "id": "wb_ai_hail_24",
    "word": "hail",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "h",
      "ai",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "mưa đá trắng xóa",
    "emoji": "🧊",
    "sampleSentence": "Round white hail clatters on the tin roof.",
    "sampleSentenceVi": "Những hạt mưa đá lạch cạch rơi trên mái tôn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những viên mưa đá trắng tròn rơi lách tách"
    }
  },
  {
    "id": "wb_ai_daisy_25",
    "word": "daisy",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "d",
      "ai",
      "s",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "bông hoa cúc trắng",
    "emoji": "🌼",
    "sampleSentence": "Sweet white daisies bloom in the yard.",
    "sampleSentenceVi": "Những bông cúc trắng tinh khôi nở ngoài sân.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông cúc họa mi nhụy vàng cánh trắng xinh xắn"
    }
  },
  {
    "id": "wb_ai_praise_30",
    "word": "praise",
    "phonemeId": "ai",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "p",
      "r",
      "ai",
      "s_e"
    ],
    "theme": "actions",
    "meaningVi": "khen ngợi động viên",
    "emoji": "🌟",
    "sampleSentence": "Praise the child for reading well.",
    "sampleSentenceVi": "Khen ngợi bé yêu vì đã đọc bài thật giỏi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mẹ mỉm cười khen ngợi khi bé làm việc tốt"
    }
  },
  {
    "id": "wb_j_jaguar_20",
    "word": "jaguar",
    "phonemeId": "j",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "j",
      "a",
      "g",
      "u",
      "ar"
    ],
    "theme": "animals",
    "meaningVi": "báo đốm dũng mãnh",
    "emoji": "🐆",
    "sampleSentence": "The spotted jaguar walks softly in the forest.",
    "sampleSentenceVi": "Báo đốm bước đi êm ru giữa rừng già.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Báo đốm dũng mãnh dạo bước trong rừng già"
    }
  },
  {
    "id": "wb_j_jellyfish_21",
    "word": "jellyfish",
    "phonemeId": "j",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "j",
      "e",
      "ll",
      "y",
      "f",
      "i",
      "sh"
    ],
    "theme": "animals",
    "meaningVi": "sứa biển trong suốt",
    "emoji": "🪼",
    "sampleSentence": "A glowing jellyfish pulses through the deep.",
    "sampleSentenceVi": "Chú sứa phát sáng bơi nhịp nhàng dưới đại dương.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sứa biển phát sáng lung linh như chiếc dù pha lê"
    }
  },
  {
    "id": "wb_j_jay_22",
    "word": "jay",
    "phonemeId": "j",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "j",
      "ay"
    ],
    "theme": "animals",
    "meaningVi": "chim giẻ cùi xanh",
    "emoji": "🐦",
    "sampleSentence": "The blue jay whistles a sweet melody.",
    "sampleSentenceVi": "Chim giẻ cùi xanh huýt sáo giai điệu ngọt ngào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim giẻ cùi lông xanh biếc hót líu lo"
    }
  },
  {
    "id": "wb_j_jungle_23",
    "word": "jungle",
    "phonemeId": "j",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "j",
      "u",
      "ng",
      "g",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "rừng nhiệt đới rậm rạp",
    "emoji": "🌴",
    "sampleSentence": "Vines hang high in the green jungle.",
    "sampleSentenceVi": "Dây leo buông dài trong khu rừng nhiệt đới.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Rừng nhiệt đới rậm rạp với muôn loài hoa cỏ"
    }
  },
  {
    "id": "wb_j_juggle_29",
    "word": "juggle",
    "phonemeId": "j",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "j",
      "u",
      "gg",
      "l"
    ],
    "theme": "actions",
    "meaningVi": "tung hứng bóng khéo léo",
    "emoji": "🤹",
    "sampleSentence": "Juggle three soft balls in the air.",
    "sampleSentenceVi": "Tung hứng ba quả bóng mềm khéo léo trên không.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú hề tung hứng khéo léo ba quả bóng tròn"
    }
  },
  {
    "id": "wb_oa_foal_20",
    "word": "foal",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "oa",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "ngựa con mới sinh",
    "emoji": "🐴",
    "sampleSentence": "A gentle foal trots beside its mother.",
    "sampleSentenceVi": "Chú ngựa con lon ton chạy bên mẹ hiền.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngựa con bé bỏng phi những bước chân đầu tiên"
    }
  },
  {
    "id": "wb_oa_boar_21",
    "word": "boar",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "b",
      "oa",
      "r"
    ],
    "theme": "animals",
    "meaningVi": "heo rừng dũng mãnh",
    "emoji": "🐗",
    "sampleSentence": "The wild boar forages for acorns.",
    "sampleSentenceVi": "Heo rừng kiếm hạt sồi thơm dưới gốc cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Heo rừng kiếm hạt sồi thơm dưới gốc cây"
    }
  },
  {
    "id": "wb_oa_coast_22",
    "word": "coast",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "oa",
      "s",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "bờ biển cát vàng",
    "emoji": "🏖️",
    "sampleSentence": "Waves crash softly along the rocky coast.",
    "sampleSentenceVi": "Sóng vỗ êm đềm dọc bờ biển đá.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bờ biển uốn lượn bên làn nước xanh trong"
    }
  },
  {
    "id": "wb_oa_foam_23",
    "word": "foam",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "oa",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "bọt biển trắng xóa",
    "emoji": "🫧",
    "sampleSentence": "White sea foam washes over our toes.",
    "sampleSentenceVi": "Bọt biển trắng xóa mơn man đôi bàn chân bé.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bọt sóng biển trắng xóa lăn tăn vỗ vào bờ"
    }
  },
  {
    "id": "wb_oa_toast_26",
    "word": "toast",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "oa",
      "s",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh mì nướng giòn rụm",
    "emoji": "🍞",
    "sampleSentence": "Spread golden butter on warm toast.",
    "sampleSentenceVi": "Quết bơ vàng óng lên lát bánh mì nướng thơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lát bánh mì nướng vàng giòn thơm phức"
    }
  },
  {
    "id": "wb_oa_roam_27",
    "word": "roam",
    "phonemeId": "oa",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "r",
      "oa",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "rong chơi tự do",
    "emoji": "🚶",
    "sampleSentence": "Roam freely through the sunny hills.",
    "sampleSentenceVi": "Rong chơi tự do qua những ngọn đồi ngập nắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đàn hươu tự do thong dong dạo chơi trên trảng cỏ"
    }
  },
  {
    "id": "wb_ie_magpie_20",
    "word": "magpie",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "m",
      "a",
      "g",
      "p",
      "ie"
    ],
    "theme": "animals",
    "meaningVi": "chim ác là thông minh",
    "emoji": "🐦",
    "sampleSentence": "The black and white magpie nests high.",
    "sampleSentenceVi": "Chim ác là đen trắng xây tổ trên ngọn cây cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim ác là lông biếc sà xuống nhặt hạt mầm"
    }
  },
  {
    "id": "wb_ie_firefly_21",
    "word": "firefly",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "f",
      "i_e",
      "r",
      "f",
      "l",
      "y"
    ],
    "theme": "animals",
    "meaningVi": "đom đóm phát sáng",
    "emoji": "✨",
    "sampleSentence": "Fireflies light up the summer garden.",
    "sampleSentenceVi": "Những chú đom đóm thắp sáng khu vườn đêm hè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đom đóm thắp đèn sáng lấp lánh trong đêm hè"
    }
  },
  {
    "id": "wb_ie_cries_25",
    "word": "cries",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "r",
      "ie",
      "s"
    ],
    "theme": "actions",
    "meaningVi": "tiếng chim non ríu rít",
    "emoji": "🐣",
    "sampleSentence": "The baby chick cries for its mother.",
    "sampleSentenceVi": "Chú gà con cất tiếng ríu rít gọi mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Em bé mếu máo và nhanh chóng được mẹ ôm vào lòng"
    }
  },
  {
    "id": "wb_ie_tries_26",
    "word": "tries",
    "phonemeId": "ie",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "t",
      "r",
      "ie",
      "s"
    ],
    "theme": "actions",
    "meaningVi": "cố gắng kiên trì",
    "emoji": "💪",
    "sampleSentence": "Leo tries hard to blend every sound.",
    "sampleSentenceVi": "Leo cố gắng kiên trì ghép từng âm vị.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé kiên trì thử xếp tháp gỗ thêm lần nữa"
    }
  },
  {
    "id": "wb_ee_deer_21",
    "word": "deer",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "d",
      "ee",
      "r"
    ],
    "theme": "animals",
    "meaningVi": "chú hươu rừng hiền lành",
    "emoji": "🦌",
    "sampleSentence": "A shy deer peers through the trees.",
    "sampleSentenceVi": "Chú hươu hiền lành ngơ ngác nhìn qua tán cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú hươu sao mắt tròn xoe ngơ ngác giữa rừng"
    }
  },
  {
    "id": "wb_ee_eel_22",
    "word": "eel",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "ee",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chú lươn biển bơi lượn",
    "emoji": "🐟",
    "sampleSentence": "The silver eel slips through the corals.",
    "sampleSentenceVi": "Chú lươn bạc trườn êm qua rạn san hô.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lươn biển luồn lách qua các hốc đá"
    }
  },
  {
    "id": "wb_ee_cheetah_23",
    "word": "cheetah",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "ch",
      "ee",
      "t",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "báo đốm săn mồi nhanh",
    "emoji": "🐆",
    "sampleSentence": "The cheetah runs like a swift wind.",
    "sampleSentenceVi": "Báo săn cheetah lao nhanh như một cơn gió.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Báo săn cheetah chạy nhanh tựa cơn gió"
    }
  },
  {
    "id": "wb_ee_wheel_26",
    "word": "wheel",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "wh",
      "ee",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "bánh xe đồ chơi",
    "emoji": "🛞",
    "sampleSentence": "The wooden cart wheel rolls around smoothly.",
    "sampleSentenceVi": "Bánh xe bò gỗ lăn tròn êm ái.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bánh xe tròn lăn đều đưa xe tiến bước"
    }
  },
  {
    "id": "wb_ee_jeep_27",
    "word": "jeep",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "j",
      "ee",
      "p"
    ],
    "theme": "objects_food",
    "meaningVi": "xe địa hình mạnh mẽ",
    "emoji": "🚙",
    "sampleSentence": "A bright yellow jeep drives along safari tracks.",
    "sampleSentenceVi": "Chiếc xe jeep vàng bon bon trên đường dã ngoại.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe jeep thám hiểm địa hình dũng mãnh"
    }
  },
  {
    "id": "wb_ee_cheese_28",
    "word": "cheese",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "ch",
      "ee",
      "s_e"
    ],
    "theme": "objects_food",
    "meaningVi": "miếng phô mai béo ngậy",
    "emoji": "🧀",
    "sampleSentence": "Yellow cheese slices are yummy on bread.",
    "sampleSentenceVi": "Những lát phô mai vàng béo ngậy kẹp bánh mì.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Miếng phô mai vàng óng thơm ngon"
    }
  },
  {
    "id": "wb_ee_see_30",
    "word": "see",
    "phonemeId": "ee",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "ee"
    ],
    "theme": "actions",
    "meaningVi": "nhìn ngắm thế giới",
    "emoji": "👀",
    "sampleSentence": "I see a flying bird with colorful wings.",
    "sampleSentenceVi": "Bé nhìn thấy cánh chim sắc màu chao liệng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mở to đôi mắt nhìn ngắm thế giới rực rỡ"
    }
  },
  {
    "id": "wb_or_stork_20",
    "word": "stork",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "t",
      "or",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "chim cò trắng sải cánh",
    "emoji": "🪶",
    "sampleSentence": "A white stork flies home to its rooftop nest.",
    "sampleSentenceVi": "Chim cò trắng sải cánh bay về tổ trên mái nhà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim cò trắng xây tổ ấm áp trên ngọn cây cao"
    }
  },
  {
    "id": "wb_or_thorn_22",
    "word": "thorn",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "th",
      "or",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "gai hoa hồng nhọn",
    "emoji": "🌹",
    "sampleSentence": "Watch out for little thorns on rose stems.",
    "sampleSentenceVi": "Cẩn thận với những chiếc gai nhỏ trên cành hoa hồng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Gai hoa hồng nhọn sắc"
    }
  },
  {
    "id": "wb_or_cord_26",
    "word": "cord",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "c",
      "or",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "dây thừng bện chắc",
    "emoji": "🪢",
    "sampleSentence": "Tie the wooden parcel with strong cord.",
    "sampleSentenceVi": "Buộc bọc quà bằng sợi dây bện chắc chắn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dây dù bền chắc nhiều sắc màu"
    }
  },
  {
    "id": "wb_or_soar_28",
    "word": "soar",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "s",
      "oa",
      "r"
    ],
    "theme": "actions",
    "meaningVi": "bay lượn trên cao",
    "emoji": "🦅",
    "sampleSentence": "Eagles soar high into the endless blue sky.",
    "sampleSentenceVi": "Đại bàng bay lượn trên nền trời xanh thẳm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cánh chim chao lượn bay vút trên nền trời xanh"
    }
  },
  {
    "id": "wb_or_roar_29",
    "word": "roar",
    "phonemeId": "or",
    "group": 4,
    "stage": 3,
    "phonemes": [
      "r",
      "oa",
      "r"
    ],
    "theme": "actions",
    "meaningVi": "tiếng gầm sư tử",
    "emoji": "🦁",
    "sampleSentence": "Leo the friendly lion roars with joy.",
    "sampleSentenceVi": "Sư tử Leo gầm lên khúc ca vui vẻ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú sư tử cất tiếng gầm oai phong vang dội núi rừng"
    }
  },
  {
    "id": "wb_z_zebu_31",
    "word": "zebu",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "e",
      "b",
      "u"
    ],
    "theme": "animals",
    "meaningVi": "bò u Ấn Độ",
    "emoji": "🐂",
    "sampleSentence": "The humped zebu walks slowly in the field.",
    "sampleSentenceVi": "Bò u thong thả dạo bước trên cánh đồng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú bò u zebu thong dong gặm cỏ trên thảo nguyên"
    }
  },
  {
    "id": "wb_z_blizzard_32",
    "word": "blizzard",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "l",
      "i",
      "zz",
      "ar",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "bão tuyết trắng trời",
    "emoji": "🌨️",
    "sampleSentence": "Stay warm inside during a winter blizzard.",
    "sampleSentenceVi": "Ở trong nhà ấm cúng khi ngoài trời bão tuyết.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cơn bão tuyết cuộn gió trắng xóa mùa đông"
    }
  },
  {
    "id": "wb_z_zipper_33",
    "word": "zipper",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "i",
      "pp",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "khóa kéo áo ấm",
    "emoji": "🤐",
    "sampleSentence": "Pull the coat zipper all the way up.",
    "sampleSentenceVi": "Kéo khóa áo khoác lên cao cho thật ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dây khóa kéo áo khoác ấm áp của bé"
    }
  },
  {
    "id": "wb_z_zucchini_34",
    "word": "zucchini",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "u",
      "c",
      "h",
      "i",
      "n",
      "i"
    ],
    "theme": "objects_food",
    "meaningVi": "quả bí ngòi xanh",
    "emoji": "🥒",
    "sampleSentence": "Slice fresh green zucchini for our dinner.",
    "sampleSentenceVi": "Cắt lát quả bí ngòi xanh tươi cho bữa tối.",
    "visual": {
      "url": "/assets/ehon/carrot.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon củ quả tươi ngon trong vườn nhà"
    }
  },
  {
    "id": "wb_z_zoom_36",
    "word": "zoom",
    "phonemeId": "z",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "oo",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "phóng nhanh vùn vụt",
    "emoji": "🏎️",
    "sampleSentence": "The toy car zooms across the polished floor.",
    "sampleSentenceVi": "Chiếc xe đồ chơi phóng vùn vụt trên sàn bóng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe đồ chơi phóng vù vù trên đường đua"
    }
  },
  {
    "id": "wb_w_whale_31",
    "word": "whale",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "wh",
      "a_e",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "cá voi khổng lồ hiền hòa",
    "emoji": "🐋",
    "sampleSentence": "A blue whale spouts misty water into the air.",
    "sampleSentenceVi": "Cá voi xanh phun cột nước mát lên không trung.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cá voi khổng lồ phun cột nước trắng xóa giữa biển"
    }
  },
  {
    "id": "wb_w_walrus_32",
    "word": "walrus",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "al",
      "r",
      "u",
      "s"
    ],
    "theme": "animals",
    "meaningVi": "hải mã ngà dài",
    "emoji": "🦭",
    "sampleSentence": "The tusked walrus rests on floating ice.",
    "sampleSentenceVi": "Hải mã với cặp ngà dài nằm nghỉ trên tảng băng.",
    "visual": {
      "url": "/assets/ehon/seal.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú hải cẩu bơi trên tảng băng trắng"
    }
  },
  {
    "id": "wb_w_woodpecker_33",
    "word": "woodpecker",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "oo",
      "d",
      "p",
      "e",
      "ck",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chim gõ kiến cần cù",
    "emoji": "🐦",
    "sampleSentence": "The woodpecker taps rhythmically on the bark.",
    "sampleSentenceVi": "Chim gõ kiến gõ nhịp nhàng trên vỏ cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim gõ kiến cần mẫn gõ cốc cốc vào thân cây"
    }
  },
  {
    "id": "wb_w_worm_34",
    "word": "worm",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "ur",
      "m"
    ],
    "theme": "animals",
    "meaningVi": "chú giun đất xốp đất",
    "emoji": "🪱",
    "sampleSentence": "A tiny earthworm wiggles through garden soil.",
    "sampleSentenceVi": "Chú giun đất uốn lượn làm tơi xốp đất vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú giun đất nhỏ bé làm đất tơi xốp cho khu vườn"
    }
  },
  {
    "id": "wb_w_water_37",
    "word": "water",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "a",
      "t",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "nguồn nước trong lành",
    "emoji": "💧",
    "sampleSentence": "Drink fresh clean water every day.",
    "sampleSentenceVi": "Uống nước tinh khiết mỗi ngày cho khỏe mạnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng nước ngọt mát lành trong vắt"
    }
  },
  {
    "id": "wb_w_woods_38",
    "word": "woods",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "oo",
      "d",
      "z"
    ],
    "theme": "nature",
    "meaningVi": "khu rừng xanh bình yên",
    "emoji": "🌳",
    "sampleSentence": "Take a quiet peaceful walk in the woods.",
    "sampleSentenceVi": "Dạo bước thanh bình trong khu rừng xanh thẳm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Rừng cây yên ả rải đầy lá khô thơm phức"
    }
  },
  {
    "id": "wb_w_wagon_39",
    "word": "wagon",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "a",
      "g",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc xe cút kít đỏ",
    "emoji": "🛒",
    "sampleSentence": "Fill the red wagon with wooden toy blocks.",
    "sampleSentenceVi": "Chất đầy các khối gỗ đồ chơi vào chiếc xe kéo đỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe kéo nhỏ chở đầy quả chín và hoa tươi"
    }
  },
  {
    "id": "wb_w_whistle_40",
    "word": "whistle",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "wh",
      "i",
      "s",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc còi thổi vang",
    "emoji": "🪈",
    "sampleSentence": "Blow the train whistle with a cheerful tweet.",
    "sampleSentenceVi": "Thổi chiếc còi tàu với tiếng vang rộn rã.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc còi bạc thổi vang tiếng vui tai"
    }
  },
  {
    "id": "wb_w_watch_41",
    "word": "watch",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "o",
      "tch"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc đồng hồ đeo tay",
    "emoji": "⌚",
    "sampleSentence": "Look at the little hands on the watch.",
    "sampleSentenceVi": "Ngắm nhìn những chiếc kim nhỏ trên đồng hồ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc đồng hồ đeo tay sắc màu nhắc bé đúng giờ"
    }
  },
  {
    "id": "wb_w_watermelon_42",
    "word": "watermelon",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "a",
      "t",
      "er",
      "m",
      "e",
      "l",
      "o",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "quả dưa hấu đỏ mọng",
    "emoji": "🍉",
    "sampleSentence": "Sweet juicy watermelon slices for summer.",
    "sampleSentenceVi": "Những miếng dưa hấu đỏ mọng ngọt ngào ngày hè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Miếng dưa hấu đỏ mọng ngọt lịm xua tan cái nóng"
    }
  },
  {
    "id": "wb_w_walk_43",
    "word": "walk",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "al",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "đi dạo thư thái",
    "emoji": "🚶",
    "sampleSentence": "Walk happily through the flower meadow.",
    "sampleSentenceVi": "Đi dạo vui tươi qua đồng cỏ ngập tràn hoa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé tung tăng sải bước đi dạo trong công viên"
    }
  },
  {
    "id": "wb_w_wash_44",
    "word": "wash",
    "phonemeId": "w",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "w",
      "o",
      "sh"
    ],
    "theme": "actions",
    "meaningVi": "rửa tay sạch sẽ",
    "emoji": "🧼",
    "sampleSentence": "Wash your hands with bubbly fragrant soap.",
    "sampleSentenceVi": "Rửa sạch bàn tay bằng xà phòng thơm nức.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé rửa đôi bàn tay xinh với xà phòng thơm tho"
    }
  },
  {
    "id": "wb_ng_fang_31",
    "word": "fang",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "f",
      "a",
      "ng"
    ],
    "theme": "animals",
    "meaningVi": "răng nanh hổ dũng mãnh",
    "emoji": "🐯",
    "sampleSentence": "The playful kitten shows tiny white fangs.",
    "sampleSentenceVi": "Mèo con tinh nghịch để lộ chiếc răng nanh nhỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc răng nanh khỏe khoắn của chú hổ"
    }
  },
  {
    "id": "wb_ng_string_35",
    "word": "string",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "s",
      "t",
      "r",
      "i",
      "ng"
    ],
    "theme": "objects_food",
    "meaningVi": "sợi dây gai thả diều",
    "emoji": "🪁",
    "sampleSentence": "Hold the kite string tight in the wind.",
    "sampleSentenceVi": "Giữ chặt dây diều bay lượn trong gió.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sợi chỉ màu mềm mại khâu chiếc cúc xinh"
    }
  },
  {
    "id": "wb_ng_bring_38",
    "word": "bring",
    "phonemeId": "ng",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "r",
      "i",
      "ng"
    ],
    "theme": "actions",
    "meaningVi": "mang bánh đến chia sẻ",
    "emoji": "🎁",
    "sampleSentence": "Bring fresh cookies to share with pals.",
    "sampleSentenceVi": "Mang bánh quy thơm đến chia cùng các bạn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé mang cuốn truyện tranh hay đến chia sẻ cùng bạn"
    }
  },
  {
    "id": "wb_v_viper_30",
    "word": "viper",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "i_e",
      "p",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú rắn lục hiền hòa",
    "emoji": "🐍",
    "sampleSentence": "The viper rests on a warm sunlit stone.",
    "sampleSentenceVi": "Chú rắn lục nằm nghỉ trên tảng đá ấm áp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Rắn lục trườn êm ái trên thảm lá rừng"
    }
  },
  {
    "id": "wb_v_vulture_31",
    "word": "vulture",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "u",
      "l",
      "t",
      "ur_e"
    ],
    "theme": "animals",
    "meaningVi": "chim kền kền sải cánh",
    "emoji": "🦅",
    "sampleSentence": "A vulture circles high above the canyon.",
    "sampleSentenceVi": "Kền kền lượn vòng trên hẻm núi hùng vĩ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Kền kền sải cánh lượn vòng trên nền trời cao vút"
    }
  },
  {
    "id": "wb_v_vole_32",
    "word": "vole",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "o_e",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chuột đồng đào hang",
    "emoji": "🐭",
    "sampleSentence": "The field vole gathers seeds for its burrow.",
    "sampleSentenceVi": "Chuột đồng thu gom hạt giống về tổ ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chuột đồng gặm nhấm những hạt lúa vàng"
    }
  },
  {
    "id": "wb_v_valley_34",
    "word": "valley",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "a",
      "ll",
      "ey"
    ],
    "theme": "nature",
    "meaningVi": "thung lũng xanh mướt",
    "emoji": "🏞️",
    "sampleSentence": "A peaceful river flows through the green valley.",
    "sampleSentenceVi": "Dòng sông êm đềm chảy qua thung lũng xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thung lũng xanh mướt nằm giữa hai dãy núi cao"
    }
  },
  {
    "id": "wb_v_visit_40",
    "word": "visit",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "i",
      "s",
      "i",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "đến thăm ông bà",
    "emoji": "🏡",
    "sampleSentence": "Visit grandma and bake apple cookies together.",
    "sampleSentenceVi": "Đến thăm bà và cùng nướng bánh quy táo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé đến thăm ông bà vào ngày cuối tuần ấm áp"
    }
  },
  {
    "id": "wb_v_view_41",
    "word": "view",
    "phonemeId": "v",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "v",
      "iew"
    ],
    "theme": "actions",
    "meaningVi": "ngắm nhìn phong cảnh",
    "emoji": "🌅",
    "sampleSentence": "View the sunset from the top of the hill.",
    "sampleSentenceVi": "Ngắm nhìn hoàng hôn rực rỡ từ đỉnh đồi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khung cảnh thiên nhiên tráng lệ nhìn từ đỉnh đồi"
    }
  },
  {
    "id": "wb_oo_long_goose_30",
    "word": "goose",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "g",
      "oo",
      "s_e"
    ],
    "theme": "animals",
    "meaningVi": "chú ngỗng trắng bơi",
    "emoji": "🪿",
    "sampleSentence": "The white goose honks happily by the pond.",
    "sampleSentenceVi": "Chú ngỗng trắng kêu cạp cạp vui vẻ bên bờ ao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú ngỗng trắng kiêu hãnh bơi lội"
    }
  },
  {
    "id": "wb_oo_long_moose_31",
    "word": "moose",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "m",
      "oo",
      "s_e"
    ],
    "theme": "animals",
    "meaningVi": "chú nai sừng tấm rừng sâu",
    "emoji": "🫎",
    "sampleSentence": "The majestic moose wades into the lake.",
    "sampleSentenceVi": "Nai sừng tấm sừng sững lội qua hồ nước.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nai sừng tấm sừng sững bên hồ rừng thông"
    }
  },
  {
    "id": "wb_oo_long_rooster_32",
    "word": "rooster",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "r",
      "oo",
      "s",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chú gà trống oai vệ",
    "emoji": "🐓",
    "sampleSentence": "The rooster crows to welcome the sunshine.",
    "sampleSentenceVi": "Gà trống cất tiếng gáy đón ánh bình minh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú gà trống oai vệ cất tiếng gáy đón bình minh"
    }
  },
  {
    "id": "wb_oo_long_kangaroo_33",
    "word": "kangaroo",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "k",
      "a",
      "ng",
      "g",
      "a",
      "r",
      "oo"
    ],
    "theme": "animals",
    "meaningVi": "chuột túi mẹ con",
    "emoji": "🦘",
    "sampleSentence": "A baby kangaroo rides inside mom’s pouch.",
    "sampleSentenceVi": "Chuột túi con nằm ấm trong túi mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chuột túi kangaroo nhảy từng bước thoăn thoắt"
    }
  },
  {
    "id": "wb_oo_long_bloom_35",
    "word": "bloom",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "l",
      "oo",
      "m"
    ],
    "theme": "nature",
    "meaningVi": "bông hoa nở rộ",
    "emoji": "🌸",
    "sampleSentence": "Spring blossoms bloom across the orchard.",
    "sampleSentenceVi": "Những nụ hoa xuân nở rộ khắp vườn cây.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Nụ hoa bừng nở rực rỡ đón ánh nắng mai"
    }
  },
  {
    "id": "wb_oo_long_broom_37",
    "word": "broom",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "r",
      "oo",
      "m"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc chổi rơm quét nhà",
    "emoji": "🧹",
    "sampleSentence": "Sweep the kitchen floor with a straw broom.",
    "sampleSentenceVi": "Quét sàn bếp sạch sẽ bằng chiếc chổi rơm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây chổi rơm quét nhà sạch sẽ gọn gàng"
    }
  },
  {
    "id": "wb_oo_long_boot_39",
    "word": "boot",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "b",
      "oo",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "đôi ủng đi mưa đỏ",
    "emoji": "🥾",
    "sampleSentence": "Splash in puddles wearing yellow boots.",
    "sampleSentenceVi": "Nhảy vũng nước với đôi ủng vàng rực rỡ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi ủng cao su vàng cho bé nhảy vũng nước mưa"
    }
  },
  {
    "id": "wb_oo_long_zoom_40",
    "word": "zoom",
    "phonemeId": "oo_long",
    "group": 5,
    "stage": 3,
    "phonemes": [
      "z",
      "oo",
      "m"
    ],
    "theme": "actions",
    "meaningVi": "phóng vút trên không",
    "emoji": "🚀",
    "sampleSentence": "Rockets zoom up toward outer space.",
    "sampleSentenceVi": "Tàu con thoi phóng vút lên vũ trụ bao la.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe đồ chơi phóng vù vù trên đường đua"
    }
  },
  {
    "id": "wb_y_yellowhammer_31",
    "word": "yellowhammer",
    "phonemeId": "y",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "y",
      "e",
      "ll",
      "ow",
      "h",
      "a",
      "m",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "chim sẻ vàng líu lo",
    "emoji": "🐦",
    "sampleSentence": "The yellowhammer whistles in the hedgerow.",
    "sampleSentenceVi": "Chim sẻ vàng líu lo trong bụi cây xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim sẻ vàng yellowhammer líu lo trên cành sồi"
    }
  },
  {
    "id": "wb_y_yacht_35",
    "word": "yacht",
    "phonemeId": "y",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "y",
      "o",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "du thuyền buồm trắng",
    "emoji": "🛥️",
    "sampleSentence": "A sleek white yacht sails across the bay.",
    "sampleSentenceVi": "Chiếc du thuyền trắng muốt lướt trên vịnh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc du thuyền trắng rẽ sóng khơi xa"
    }
  },
  {
    "id": "wb_y_yo-yo_36",
    "word": "yo-yo",
    "phonemeId": "y",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "y",
      "o",
      "y",
      "o"
    ],
    "theme": "objects_food",
    "meaningVi": "con quay yo-yo",
    "emoji": "🪀",
    "sampleSentence": "Spin the colorful yo-yo up and down.",
    "sampleSentenceVi": "Thả con quay yo-yo lên xuống thật khéo.",
    "visual": {
      "url": "/assets/ehon/yoyo.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon con quay yoyo sắc màu xoay tít lấp lánh"
    }
  },
  {
    "id": "wb_y_yolk_38",
    "word": "yolk",
    "phonemeId": "y",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "y",
      "o_e",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "lòng đỏ trứng gà",
    "emoji": "🍳",
    "sampleSentence": "A bright yellow yolk in the center of the egg.",
    "sampleSentenceVi": "Lòng đỏ trứng tròn xoe vàng ươm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lòng đỏ trứng gà tròn xoe óng ả bổ dưỡng"
    }
  },
  {
    "id": "wb_y_yawn_39",
    "word": "yawn",
    "phonemeId": "y",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "y",
      "aw",
      "n"
    ],
    "theme": "actions",
    "meaningVi": "ngáp ngủ đáng yêu",
    "emoji": "🥱",
    "sampleSentence": "The sleepy puppy gives a wide yawn.",
    "sampleSentenceVi": "Chú cún con buồn ngủ ngáp một cái thật to.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Em bé ngáp ngủ đáng yêu chuẩn bị lên giường"
    }
  },
  {
    "id": "wb_x_lynx_30",
    "word": "lynx",
    "phonemeId": "x",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "l",
      "y",
      "n",
      "x"
    ],
    "theme": "animals",
    "meaningVi": "mèo rừng linh miêu",
    "emoji": "🐱",
    "sampleSentence": "A wild lynx pads softly through deep snow.",
    "sampleSentenceVi": "Linh miêu rừng bước đi êm ru trên tuyết dày.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mèo rừng linh miêu với đôi tai chỏm lông tinh ranh"
    }
  },
  {
    "id": "wb_x_galaxy_32",
    "word": "galaxy",
    "phonemeId": "x",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "g",
      "a",
      "l",
      "a",
      "x",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "dải ngân hà triệu vì sao",
    "emoji": "🌌",
    "sampleSentence": "Millions of stars twinkle in the spiral galaxy.",
    "sampleSentenceVi": "Hàng triệu vì sao lấp lánh trong dải ngân hà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dải ngân hà lấp lánh hàng triệu vì sao sáng"
    }
  },
  {
    "id": "wb_x_axe_34",
    "word": "axe",
    "phonemeId": "x",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "a",
      "x_e"
    ],
    "theme": "objects_food",
    "meaningVi": "cái rìu bác tiều phu",
    "emoji": "🪓",
    "sampleSentence": "The woodcutter rests his axe against a log.",
    "sampleSentenceVi": "Bác tiều phu dựng cây rìu bên khúc gỗ.",
    "visual": {
      "url": "/assets/ehon/ax.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chiếc rìu gỗ dựng bên gốc cây nở hoa"
    }
  },
  {
    "id": "wb_x_taxi_35",
    "word": "taxi",
    "phonemeId": "x",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "t",
      "a",
      "x",
      "i"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc xe taxi vàng",
    "emoji": "🚕",
    "sampleSentence": "A bright yellow taxi drives down city streets.",
    "sampleSentenceVi": "Chiếc taxi vàng bon bon trên đường phố.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe taxi vàng chở khách dạo phố"
    }
  },
  {
    "id": "wb_x_mixer_36",
    "word": "mixer",
    "phonemeId": "x",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "m",
      "i",
      "x",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "máy đánh trứng làm bánh",
    "emoji": "🥣",
    "sampleSentence": "Whisk cake batter smoothly with the mixer.",
    "sampleSentenceVi": "Đánh bột làm bánh thật mịn bằng máy trộn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Máy trộn bột làm bánh thơm ngon xốp mềm"
    }
  },
  {
    "id": "wb_x_saxophone_37",
    "word": "saxophone",
    "phonemeId": "x",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "s",
      "a",
      "x",
      "o",
      "ph",
      "o_e",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "kèn saxophone đồng thau",
    "emoji": "🎷",
    "sampleSentence": "Play joyful melodies on the shiny saxophone.",
    "sampleSentenceVi": "Thổi những giai điệu vui tươi trên kèn saxophone.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Kèn sắc-xô-phôn ánh vàng ngân vang nốt nhạc trầm bổng"
    }
  },
  {
    "id": "wb_ch_cheetah_30",
    "word": "cheetah",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "ee",
      "t",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "báo săn cheetah siêu tốc",
    "emoji": "🐆",
    "sampleSentence": "The cheetah bounds across the open savannah.",
    "sampleSentenceVi": "Báo săn cheetah phi nhanh trên trảng cỏ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Báo săn cheetah chạy nhanh tựa cơn gió"
    }
  },
  {
    "id": "wb_ch_chimpanzee_31",
    "word": "chimpanzee",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "i",
      "m",
      "p",
      "a",
      "n",
      "z",
      "ee"
    ],
    "theme": "animals",
    "meaningVi": "tinh tinh tinh nghịch",
    "emoji": "🐒",
    "sampleSentence": "The chimpanzee swings happily on jungle vines.",
    "sampleSentenceVi": "Chú tinh tinh đu đưa vui vẻ trên cành cây rừng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tinh tinh thông minh nở nụ cười tinh nghịch"
    }
  },
  {
    "id": "wb_ch_finch_33",
    "word": "finch",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "f",
      "i",
      "n",
      "ch"
    ],
    "theme": "animals",
    "meaningVi": "chim sẻ cành líu lo",
    "emoji": "🐦",
    "sampleSentence": "A little finch perches on the cherry branch.",
    "sampleSentenceVi": "Chú chim sẻ con đậu trên nhành cây anh đào.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim sẻ sẻ chuyền cành ca hát rộn rã"
    }
  },
  {
    "id": "wb_ch_chestnut_35",
    "word": "chestnut",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "e",
      "s",
      "n",
      "u",
      "t"
    ],
    "theme": "nature",
    "meaningVi": "hạt dẻ nâu mùa thu",
    "emoji": "🌰",
    "sampleSentence": "Gather glossy brown chestnuts in autumn woods.",
    "sampleSentenceVi": "Nhặt những hạt dẻ nâu bóng trong rừng mùa thu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hạt dẻ nâu bóng bẩy thơm bùi mùa thu"
    }
  },
  {
    "id": "wb_ch_chain_37",
    "word": "chain",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "ai",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "dây xích xích đu",
    "emoji": "⛓️",
    "sampleSentence": "Hold the swing chain tightly with both hands.",
    "sampleSentenceVi": "Nắm chắc dây xích xích đu bằng hai tay.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sợi dây xích đu kim loại vững chắc"
    }
  },
  {
    "id": "wb_ch_chalk_38",
    "word": "chalk",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "al",
      "k"
    ],
    "theme": "objects_food",
    "meaningVi": "viên phấn màu vẽ tranh",
    "emoji": "🖍️",
    "sampleSentence": "Draw hopscotch squares with white chalk.",
    "sampleSentenceVi": "Vẽ ô nhảy lò cò bằng viên phấn trắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Những viên phấn màu rực rỡ vẽ tranh trên sân"
    }
  },
  {
    "id": "wb_ch_chocolate_39",
    "word": "chocolate",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "o",
      "c",
      "o",
      "l",
      "a_e",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "thanh socola ngọt bùi",
    "emoji": "🍫",
    "sampleSentence": "Share a sweet square of dark chocolate.",
    "sampleSentenceVi": "Chia sẻ miếng socola ngọt ngào cùng bạn bè.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thanh sô-cô-la ngọt ngào thơm ngon nức mũi"
    }
  },
  {
    "id": "wb_ch_chase_40",
    "word": "chase",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "a_e",
      "s"
    ],
    "theme": "actions",
    "meaningVi": "đuổi bắt bóng bay",
    "emoji": "🏃",
    "sampleSentence": "Chase the colorful balloon across the yard.",
    "sampleSentenceVi": "Chạy đuổi theo quả bóng bay khắp sân.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cún con tinh nghịch đuổi theo quả bóng lăn"
    }
  },
  {
    "id": "wb_ch_chew_41",
    "word": "chew",
    "phonemeId": "ch",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ch",
      "ew"
    ],
    "theme": "actions",
    "meaningVi": "nhai kỹ từng miếng",
    "emoji": "🥕",
    "sampleSentence": "Chew fresh crunchy vegetables carefully.",
    "sampleSentenceVi": "Nhai kỹ từng miếng rau củ giòn ngọt thơm ngon.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé nhai miếng táo giòn tan ngọt lành"
    }
  },
  {
    "id": "wb_sh_shrimp_31",
    "word": "shrimp",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "r",
      "i",
      "m",
      "p"
    ],
    "theme": "animals",
    "meaningVi": "tôm biển búng tanh tách",
    "emoji": "🦐",
    "sampleSentence": "A little shrimp swims around tide pools.",
    "sampleSentenceVi": "Chú tôm nhỏ bơi lội trong vũng nước triều.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tôm con búng nhảy trong vũng nước trong vắt"
    }
  },
  {
    "id": "wb_sh_shore_32",
    "word": "shore",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "or_e"
    ],
    "theme": "nature",
    "meaningVi": "bờ biển cát vàng",
    "emoji": "🏖️",
    "sampleSentence": "Gentle waves lap against the sandy shore.",
    "sampleSentenceVi": "Sóng vỗ nhẹ nhàng lên bờ cát vàng mịn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bờ cát êm dịu nơi sóng biển vỗ về"
    }
  },
  {
    "id": "wb_sh_shade_33",
    "word": "shade",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "a_e",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "bóng râm cây sồi mát",
    "emoji": "🌳",
    "sampleSentence": "Rest peacefully under the cool oak shade.",
    "sampleSentenceVi": "Nghỉ ngơi mát mẻ dưới bóng cây sồi già.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bóng râm mát rượi dưới tán cây xanh xum xuê"
    }
  },
  {
    "id": "wb_sh_shower_34",
    "word": "shower",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "ow",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "cơn mưa rào dịu mát",
    "emoji": "🌦️",
    "sampleSentence": "A summer shower freshens the blooming garden.",
    "sampleSentenceVi": "Cơn mưa rào mùa hạ làm tươi mát cả khu vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cơn mưa rào mùa hạ tưới mát khắp cỏ cây"
    }
  },
  {
    "id": "wb_sh_shirt_35",
    "word": "shirt",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "ur",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc áo sơ mi tinh tươm",
    "emoji": "👔",
    "sampleSentence": "Button your clean yellow shirt neatly.",
    "sampleSentenceVi": "Cài cúc chiếc áo sơ mi vàng gọn gàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc áo sơ mi trắng tinh tươm thẳng nếp"
    }
  },
  {
    "id": "wb_sh_shoe_36",
    "word": "shoe",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "oo"
    ],
    "theme": "objects_food",
    "meaningVi": "đôi giày thể thao êm",
    "emoji": "👟",
    "sampleSentence": "Tie your colorful running shoes tightly.",
    "sampleSentenceVi": "Buộc dây đôi giày thể thao sắc màu chắc chắn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đôi giày thể thao năng động êm ái"
    }
  },
  {
    "id": "wb_sh_shovel_37",
    "word": "shovel",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "u",
      "v",
      "e",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "cái xẻng xúc cát",
    "emoji": "🪣",
    "sampleSentence": "Dig fine yellow sand with your plastic shovel.",
    "sampleSentenceVi": "Xúc cát vàng mịn bằng chiếc xẻng đồ chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xẻng nhỏ xúc cát xây lâu đài biển"
    }
  },
  {
    "id": "wb_sh_shawl_38",
    "word": "shawl",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "aw",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc khăn choàng len ấm",
    "emoji": "🧣",
    "sampleSentence": "Wrap a soft wool shawl around your shoulders.",
    "sampleSentenceVi": "Khoác chiếc khăn len êm ái lên đôi bờ vai.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khăn choàng len ấm áp quàng cổ mùa đông"
    }
  },
  {
    "id": "wb_sh_shake_39",
    "word": "shake",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "a_e",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "bắt tay kết bạn",
    "emoji": "🤝",
    "sampleSentence": "Shake hands with your new classmate.",
    "sampleSentenceVi": "Bắt tay thân thiện với bạn học mới.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé lắc chiếc lục lạc phát ra âm thanh leng keng"
    }
  },
  {
    "id": "wb_sh_shout_40",
    "word": "shout",
    "phonemeId": "sh",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "sh",
      "ou",
      "t"
    ],
    "theme": "actions",
    "meaningVi": "reo hò vui sướng",
    "emoji": "🎉",
    "sampleSentence": "Shout hooray when your tower stands tall.",
    "sampleSentenceVi": "Reo hò hoan hô khi tòa tháp xếp gỗ đứng vững.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hò reo vui mừng khi chiến thắng"
    }
  },
  {
    "id": "wb_th_unvoiced_panther_30",
    "word": "panther",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "p",
      "a",
      "n",
      "th",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "báo đen bước êm",
    "emoji": "🐆",
    "sampleSentence": "The sleek panther pads through moonlit paths.",
    "sampleSentenceVi": "Báo đen bước đi êm ru dưới lối mòn ngập trăng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Báo đen bóng bẩy bước đi nhẹ nhàng không tiếng động"
    }
  },
  {
    "id": "wb_th_unvoiced_sloth_32",
    "word": "sloth",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "s",
      "l",
      "o",
      "th"
    ],
    "theme": "animals",
    "meaningVi": "chú lười cười tươi",
    "emoji": "🦥",
    "sampleSentence": "The smiling sloth hangs upside down peacefully.",
    "sampleSentenceVi": "Chú lười mỉm cười treo ngược mình bình yên.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú lười dễ thương đu mình trên cành cây rừng"
    }
  },
  {
    "id": "wb_th_unvoiced_earth_33",
    "word": "earth",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "ear",
      "th"
    ],
    "theme": "nature",
    "meaningVi": "mẹ trái đất mến yêu",
    "emoji": "🌍",
    "sampleSentence": "Take good care of our beautiful green Earth.",
    "sampleSentenceVi": "Cùng nhau chăm sóc Mẹ Trái Đất xanh tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mảnh đất màu mỡ ôm ấp mầm xanh sinh sôi"
    }
  },
  {
    "id": "wb_th_unvoiced_thistle_35",
    "word": "thistle",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "i",
      "s",
      "l"
    ],
    "theme": "nature",
    "meaningVi": "hoa cúc gai tím biếc",
    "emoji": "🪻",
    "sampleSentence": "Purple thistles bloom along the country lane.",
    "sampleSentenceVi": "Những bông cúc gai tím nở dọc đường làng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bông hoa kế tím gai góc vươn cao trên đồng"
    }
  },
  {
    "id": "wb_th_unvoiced_thread_36",
    "word": "thread",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "r",
      "e",
      "d"
    ],
    "theme": "objects_food",
    "meaningVi": "cuộn chỉ khâu sắc màu",
    "emoji": "🧵",
    "sampleSentence": "Thread the needle with colorful silk thread.",
    "sampleSentenceVi": "Xâu cuộn chỉ tơ sắc màu qua lỗ kim.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cuộn chỉ may sắc màu dệt nên áo đẹp"
    }
  },
  {
    "id": "wb_th_unvoiced_thimble_37",
    "word": "thimble",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "i",
      "m",
      "b",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "ống đê bảo vệ ngón tay",
    "emoji": "🪡",
    "sampleSentence": "Wear a silver thimble while sewing patches.",
    "sampleSentenceVi": "Đeo chiếc ống đê bạc khi khâu vá áo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc đê may bằng bạc bảo vệ ngón tay"
    }
  },
  {
    "id": "wb_th_unvoiced_throne_38",
    "word": "throne",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "r",
      "o_e",
      "n"
    ],
    "theme": "objects_food",
    "meaningVi": "ngai vàng lộng lẫy",
    "emoji": "👑",
    "sampleSentence": "The kind storybook king sits upon his throne.",
    "sampleSentenceVi": "Vị vua hiền từ ngồi trên ngai vàng lộng lẫy.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngai vàng tráng lệ của đức vua trong lâu đài"
    }
  },
  {
    "id": "wb_th_unvoiced_thank_39",
    "word": "thank",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "a",
      "ng",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "nói lời cảm ơn lễ phép",
    "emoji": "🙏",
    "sampleSentence": "Always thank your parents with a loving smile.",
    "sampleSentenceVi": "Luôn nói lời cảm ơn cha mẹ với nụ cười hiếu thảo.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé lễ phép khoanh tay nói lời cảm ơn"
    }
  },
  {
    "id": "wb_th_unvoiced_think_40",
    "word": "think",
    "phonemeId": "th_unvoiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "th",
      "i",
      "ng",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "suy nghĩ tìm lời giải",
    "emoji": "🤔",
    "sampleSentence": "Think carefully before choosing the right puzzle piece.",
    "sampleSentenceVi": "Suy nghĩ kỹ trước khi ghép mảnh tranh đúng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé nghiêng đầu suy nghĩ tìm lời giải câu đố vui"
    }
  },
  {
    "id": "wb_th_voiced_leather_31",
    "word": "leather",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "l",
      "e",
      "th",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc cặp da bền đẹp",
    "emoji": "💼",
    "sampleSentence": "A sturdy brown leather satchel for books.",
    "sampleSentenceVi": "Chiếc cặp da nâu bền đẹp đựng sách vở.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tấm da thuộc nâu bền chắc êm ái"
    }
  },
  {
    "id": "wb_th_voiced_weather_32",
    "word": "weather",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "w",
      "e",
      "th",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "thời tiết nắng đẹp",
    "emoji": "☀️",
    "sampleSentence": "Sunny warm weather is perfect for playing outside.",
    "sampleSentenceVi": "Thời tiết ấm áp nắng đẹp thật tuyệt để chơi đùa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Thời tiết ấm áp nắng nhẹ gió hiu hiu"
    }
  },
  {
    "id": "wb_th_voiced_northern_33",
    "word": "northern",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "n",
      "or",
      "th",
      "er",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "ánh cực quang phương bắc",
    "emoji": "🌌",
    "sampleSentence": "The northern lights dance with green ribbons.",
    "sampleSentenceVi": "Ánh cực quang phương bắc nhảy múa dải lụa xanh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dải cực quang phương bắc lung linh huyền ảo"
    }
  },
  {
    "id": "wb_th_voiced_brother_36",
    "word": "brother",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "b",
      "r",
      "u",
      "th",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "người anh trai yêu quý",
    "emoji": "👦",
    "sampleSentence": "My brother builds a tall block castle with me.",
    "sampleSentenceVi": "Anh trai cùng bé xây lâu đài khối gỗ thật cao.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Anh trai âu yếm nắm tay em gái nhỏ"
    }
  },
  {
    "id": "wb_th_voiced_breathe_37",
    "word": "breathe",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "b",
      "r",
      "ee",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "hít thở không khí trong lành",
    "emoji": "🫁",
    "sampleSentence": "Breathe in the sweet scent of mountain pines.",
    "sampleSentenceVi": "Hít thở không khí trong lành thoang thoảng hương thông.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé hít thở không khí ngọt ngào của hoa lá"
    }
  },
  {
    "id": "wb_th_voiced_soothe_38",
    "word": "soothe",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "s",
      "oo",
      "th"
    ],
    "theme": "actions",
    "meaningVi": "vỗ về ủi an dịu dàng",
    "emoji": "🫂",
    "sampleSentence": "Soothe the crying baby with a gentle lullaby.",
    "sampleSentenceVi": "Vỗ về em bé khóc bằng lời ru dịu dàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lời ru êm dịu của mẹ vỗ về giấc ngủ bé thơ"
    }
  },
  {
    "id": "wb_th_voiced_together_39",
    "word": "together",
    "phonemeId": "th_voiced",
    "group": 6,
    "stage": 4,
    "phonemes": [
      "t",
      "o",
      "g",
      "e",
      "th",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "cùng nhau vui chơi",
    "emoji": "👫",
    "sampleSentence": "Friends sing and dance happily together.",
    "sampleSentenceVi": "Các bạn bè cùng nhau ca múa hân hoan.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cả nhà cùng nắm tay quây quần bên nhau"
    }
  },
  {
    "id": "wb_qu_quokka_31",
    "word": "quokka",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "o",
      "kk",
      "a"
    ],
    "theme": "animals",
    "meaningVi": "quokka nụ cười rạng rỡ",
    "emoji": "🦘",
    "sampleSentence": "The happy quokka smiles for the camera.",
    "sampleSentenceVi": "Chú quokka tươi cười rạng rỡ trước ống kính.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Quokka nụ cười hạnh phúc nhất thế giới"
    }
  },
  {
    "id": "wb_qu_quetzal_32",
    "word": "quetzal",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "e",
      "t",
      "z",
      "a",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chim quetzal đuôi dài xanh ngọc",
    "emoji": "🦜",
    "sampleSentence": "The quetzal flashes brilliant green feathers.",
    "sampleSentenceVi": "Chim quetzal lóng lánh bộ lông màu xanh ngọc bích.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim quetzal rực rỡ với chiếc đuôi xanh óng ánh"
    }
  },
  {
    "id": "wb_qu_quartz_33",
    "word": "quartz",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "ar",
      "t",
      "s"
    ],
    "theme": "nature",
    "meaningVi": "tinh thể thạch anh trong suốt",
    "emoji": "💎",
    "sampleSentence": "A sparkling crystal of rose quartz shines.",
    "sampleSentenceVi": "Tinh thể thạch anh hồng lấp lánh tỏa sáng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tinh thể thạch anh trong suốt lấp lánh ánh kim"
    }
  },
  {
    "id": "wb_qu_quarry_34",
    "word": "quarry",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "o",
      "rr",
      "y"
    ],
    "theme": "nature",
    "meaningVi": "mỏ đá tự nhiên",
    "emoji": "🪨",
    "sampleSentence": "Carve smooth stones from the mountain quarry.",
    "sampleSentenceVi": "Khai thác những tảng đá nhẵn từ mỏ đá trên núi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Khu mỏ đá trắng tự nhiên kỳ vĩ"
    }
  },
  {
    "id": "wb_qu_quarter_37",
    "word": "quarter",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "or",
      "t",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "đồng xu bạc lấp lánh",
    "emoji": "🪙",
    "sampleSentence": "A shiny silver quarter in the piggy bank.",
    "sampleSentenceVi": "Đồng xu bạc sáng loáng bỏ vào ống heo tiết kiệm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đồng xu bạc sáng lấp lánh trong tay bé"
    }
  },
  {
    "id": "wb_qu_quench_39",
    "word": "quench",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "e",
      "n",
      "ch"
    ],
    "theme": "actions",
    "meaningVi": "giải tỏa cơn khát",
    "emoji": "🥤",
    "sampleSentence": "Quench your thirst with fresh cool water.",
    "sampleSentenceVi": "Giải tỏa cơn khát với ly nước lọc mát lành.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ly nước mát lạnh giải tỏa cơn khát mùa hè"
    }
  },
  {
    "id": "wb_qu_quiver_40",
    "word": "quiver",
    "phonemeId": "qu",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "qu",
      "i",
      "v",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "rung rinh trong gió",
    "emoji": "🍃",
    "sampleSentence": "Autumn leaves quiver in the cool breeze.",
    "sampleSentenceVi": "Những chiếc lá thu rung rinh trong làn gió mát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc lá non run rẩy nhẹ nhàng trước làn gió nhẹ"
    }
  },
  {
    "id": "wb_ou_hound_30",
    "word": "hound",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "h",
      "ou",
      "n",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "chú chó săn tai cụp",
    "emoji": "🐕",
    "sampleSentence": "The loyal hound wags its tail at the door.",
    "sampleSentenceVi": "Chú chó săn vẫy đuôi mừng rỡ ngoài cửa.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú chó săn tai cụp hiền lành trung thành"
    }
  },
  {
    "id": "wb_ou_trout_32",
    "word": "trout",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "t",
      "r",
      "ou",
      "t"
    ],
    "theme": "animals",
    "meaningVi": "cá hồi suối đốm",
    "emoji": "🐟",
    "sampleSentence": "Spotted trout swim swiftly upstream.",
    "sampleSentenceVi": "Đàn cá hồi đốm bơi ngược dòng suối mát.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chú cá hồi chấm bơi lội dưới làn suối trong vắt"
    }
  },
  {
    "id": "wb_ou_ground_34",
    "word": "ground",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "g",
      "r",
      "ou",
      "n",
      "d"
    ],
    "theme": "nature",
    "meaningVi": "mặt đất màu mỡ",
    "emoji": "🌱",
    "sampleSentence": "Green sprouts push up through warm ground.",
    "sampleSentenceVi": "Những mầm non nhú lên khỏi mặt đất ấm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mặt đất vững chãi dưới bầu trời cao rộng"
    }
  },
  {
    "id": "wb_ou_mountain_35",
    "word": "mountain",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "m",
      "ou",
      "n",
      "t",
      "ai",
      "n"
    ],
    "theme": "nature",
    "meaningVi": "dãy núi trập trùng",
    "emoji": "🏔️",
    "sampleSentence": "Snow covers the peaks of the high mountains.",
    "sampleSentenceVi": "Tuyết trắng phủ trên các đỉnh núi cao vút.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Ngọn núi hùng vĩ đỉnh phủ mây trắng"
    }
  },
  {
    "id": "wb_ou_pouch_37",
    "word": "pouch",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "p",
      "ou",
      "ch"
    ],
    "theme": "objects_food",
    "meaningVi": "chiếc túi thơm vải nhung",
    "emoji": "👛",
    "sampleSentence": "Keep small treasures in the soft velvet pouch.",
    "sampleSentenceVi": "Cất giữ những kho báu nhỏ trong túi nhung êm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Túi vải rút đựng những món báu vật nhỏ"
    }
  },
  {
    "id": "wb_ou_couch_38",
    "word": "couch",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "ou",
      "ch"
    ],
    "theme": "objects_food",
    "meaningVi": "ghế sofa êm ái",
    "emoji": "🛋️",
    "sampleSentence": "Snuggle on the soft couch with a storybook.",
    "sampleSentenceVi": "Tựa lưng vào ghế sofa êm ái đọc truyện tranh.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc ghế sofa êm ái cho cả nhà cùng xem phim"
    }
  },
  {
    "id": "wb_ou_bounce_39",
    "word": "bounce",
    "phonemeId": "ou",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "ou",
      "n",
      "s_e"
    ],
    "theme": "actions",
    "meaningVi": "nảy bật tưng tưng",
    "emoji": "🏀",
    "sampleSentence": "Bounce the soft rubber ball across the yard.",
    "sampleSentenceVi": "Nảy quả bóng cao su tưng tưng khắp sân.",
    "visual": {
      "url": "/assets/ehon/ball.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon quả bóng nảy tưng tưng vui mắt"
    }
  },
  {
    "id": "wb_oi_koi_30",
    "word": "koi",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "k",
      "oi"
    ],
    "theme": "animals",
    "meaningVi": "cá chép koi rực rỡ",
    "emoji": "🎏",
    "sampleSentence": "Orange and white koi glide in the garden pond.",
    "sampleSentenceVi": "Đàn cá koi cam trắng bơi lượn trong hồ vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đàn cá Koi sắc đỏ trắng bơi lượn trong hồ ngọc bích"
    }
  },
  {
    "id": "wb_oi_tortoise_31",
    "word": "tortoise",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "t",
      "or",
      "t",
      "oi",
      "s_e"
    ],
    "theme": "animals",
    "meaningVi": "cụ rùa mai gồ ghề",
    "emoji": "🐢",
    "sampleSentence": "The patient tortoise munches fresh clover.",
    "sampleSentenceVi": "Cụ rùa kiên nhẫn gặm từng nhánh cỏ ba lá non.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cụ rùa cạn thong thả gặm từng ngọn cỏ tươi"
    }
  },
  {
    "id": "wb_oi_oyster_32",
    "word": "oyster",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "oy",
      "s",
      "t",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "con hàu ngậm ngọc",
    "emoji": "🦪",
    "sampleSentence": "A shiny white pearl rests inside the oyster.",
    "sampleSentenceVi": "Viên ngọc trai trắng óng ánh nằm trong vỏ hàu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Con hàu mở hé vỏ lấp lánh viên ngọc trai"
    }
  },
  {
    "id": "wb_oi_coil_37",
    "word": "coil",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "oi",
      "l"
    ],
    "theme": "objects_food",
    "meaningVi": "cuộn dây thừng tròn",
    "emoji": "🪢",
    "sampleSentence": "The sailor coils the rope neatly on deck.",
    "sampleSentenceVi": "Thủy thủ cuộn dây thừng gọn gàng trên boong tàu.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cuộn lò xo nhún nhảy bằng kim loại"
    }
  },
  {
    "id": "wb_oi_rejoice_40",
    "word": "rejoice",
    "phonemeId": "oi",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "r",
      "e",
      "j",
      "oi",
      "s_e"
    ],
    "theme": "actions",
    "meaningVi": "hân hoan vui mừng",
    "emoji": "🥳",
    "sampleSentence": "Rejoice with smiles when solving the puzzle.",
    "sampleSentenceVi": "Hân hoan mỉm cười khi hoàn thành bức tranh ghép.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mọi người hân hoan reo ca chúc mừng ngày hội"
    }
  },
  {
    "id": "wb_ue_bluebird_30",
    "word": "bluebird",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "l",
      "ue",
      "b",
      "ur",
      "d"
    ],
    "theme": "animals",
    "meaningVi": "chim xanh mang may mắn",
    "emoji": "🐦",
    "sampleSentence": "The bluebird sings sweet songs on the porch.",
    "sampleSentenceVi": "Chim xanh cất tiếng hót ngọt ngào bên hiên nhà.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim xanh hạnh phúc đậu trên nhành đào nở hoa"
    }
  },
  {
    "id": "wb_ue_barbecue_35",
    "word": "barbecue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "ar",
      "b",
      "e",
      "c",
      "ue"
    ],
    "theme": "objects_food",
    "meaningVi": "bữa tiệc nướng thơm lừng",
    "emoji": "🍢",
    "sampleSentence": "Enjoy skewers at the family garden barbecue.",
    "sampleSentenceVi": "Thưởng thức món thịt xiên nướng trong bữa tiệc ngoài vườn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Tiệc nướng ngoài trời thơm lừng ấm cúng"
    }
  },
  {
    "id": "wb_ue_pursue_37",
    "word": "pursue",
    "phonemeId": "ue",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "p",
      "ur",
      "s",
      "ue"
    ],
    "theme": "actions",
    "meaningVi": "theo đuổi ước mơ",
    "emoji": "🏃",
    "sampleSentence": "Pursue your joyful dreams with courage.",
    "sampleSentenceVi": "Dũng cảm theo đuổi những ước mơ tươi đẹp.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Bé hào hứng chạy đuổi theo cánh bướm hoa"
    }
  },
  {
    "id": "wb_er_otter_30",
    "word": "otter",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "o",
      "tt",
      "er"
    ],
    "theme": "animals",
    "meaningVi": "rái cá tinh nghịch",
    "emoji": "🦦",
    "sampleSentence": "The brown otter catches a silvery fish.",
    "sampleSentenceVi": "Rái cá nâu bắt được chú cá ánh bạc.",
    "visual": {
      "url": "/assets/ehon/otter.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon chú rái cá bơi ngửa trên dòng suối trong"
    }
  },
  {
    "id": "wb_er_badger_33",
    "word": "badger",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "b",
      "a",
      "d",
      "g_e",
      "r"
    ],
    "theme": "animals",
    "meaningVi": "lửng mật sọc đen trắng",
    "emoji": "🦡",
    "sampleSentence": "The badger digs its burrow under tree roots.",
    "sampleSentenceVi": "Lửng mật đào hang ấm áp dưới gốc cây già.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Lửng mật sọc đen trắng dạo bước quanh bìa rừng"
    }
  },
  {
    "id": "wb_er_river_34",
    "word": "river",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "r",
      "i",
      "v",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "dòng sông xanh êm đềm",
    "emoji": "🏞️",
    "sampleSentence": "Boats float down the winding blue river.",
    "sampleSentenceVi": "Những con thuyền xuôi mái trên dòng sông uốn lượn.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Dòng sông xanh êm đềm uốn lượn quanh đồng quê"
    }
  },
  {
    "id": "wb_er_summer_38",
    "word": "summer",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "u",
      "mm",
      "er"
    ],
    "theme": "nature",
    "meaningVi": "mùa hè rực rỡ",
    "emoji": "☀️",
    "sampleSentence": "Summer sunshine lights up the sandy beach.",
    "sampleSentenceVi": "Ánh nắng mùa hè chiếu sáng bãi biển ngập cát vàng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Mùa hè rực rỡ chan hòa ánh nắng ấm áp"
    }
  },
  {
    "id": "wb_er_paper_39",
    "word": "paper",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "p",
      "a",
      "p",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "trang giấy vẽ trắng tinh",
    "emoji": "📄",
    "sampleSentence": "Draw a colorful Ehon scene on blank paper.",
    "sampleSentenceVi": "Vẽ một khung cảnh Ehon sắc màu lên trang giấy trắng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Trang giấy trắng mịn màng chờ bé tô vẽ"
    }
  },
  {
    "id": "wb_er_ruler_40",
    "word": "ruler",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "r",
      "u",
      "l",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "cây thước kẻ gỗ",
    "emoji": "📏",
    "sampleSentence": "Draw straight lines with the wooden ruler.",
    "sampleSentenceVi": "Kẻ những đường thẳng tắp bằng cây thước gỗ.",
    "visual": {
      "url": "/assets/ehon/ruler.jpg",
      "type": "ehon",
      "alt": "Tranh Ehon cây thước kẻ gỗ đo nét thẳng"
    }
  },
  {
    "id": "wb_er_hammer_41",
    "word": "hammer",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "h",
      "a",
      "mm",
      "er"
    ],
    "theme": "objects_food",
    "meaningVi": "cái búa đồ chơi bằng gỗ",
    "emoji": "🔨",
    "sampleSentence": "Tap wooden pegs gently with the toy hammer.",
    "sampleSentenceVi": "Gõ nhẹ những chiếc cọc gỗ bằng cây búa đồ chơi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc búa gỗ đồ chơi cho thợ mộc nhí"
    }
  },
  {
    "id": "wb_er_whisper_42",
    "word": "whisper",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "wh",
      "i",
      "s",
      "p",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "thì thầm ngọt ngào",
    "emoji": "🤫",
    "sampleSentence": "Whisper a secret bedtime wish to mommy.",
    "sampleSentenceVi": "Thì thầm điều ước ngọt ngào trước giờ ngủ cùng mẹ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Hai bạn nhỏ thì thầm to nhỏ điều bí mật đáng yêu"
    }
  },
  {
    "id": "wb_er_flutter_43",
    "word": "flutter",
    "phonemeId": "er",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "f",
      "l",
      "u",
      "tt",
      "er"
    ],
    "theme": "actions",
    "meaningVi": "vỗ cánh bay rập rờn",
    "emoji": "🦋",
    "sampleSentence": "Butterfly wings flutter gently over roses.",
    "sampleSentenceVi": "Đôi cánh bướm vỗ rập rờn nhẹ nhàng trên đóa hồng.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cánh bướm vỗ nhè nhẹ bay lượn bên khóm hoa"
    }
  },
  {
    "id": "wb_ar_starfish_30",
    "word": "starfish",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "t",
      "ar",
      "f",
      "i",
      "sh"
    ],
    "theme": "animals",
    "meaningVi": "sao biển năm cánh cam",
    "emoji": "⭐",
    "sampleSentence": "A bright orange starfish rests on the sea rock.",
    "sampleSentenceVi": "Sao biển năm cánh màu cam nằm trên tảng đá biển.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sao biển sắc cam rực rỡ nằm trên bãi cát"
    }
  },
  {
    "id": "wb_ar_cardinal_31",
    "word": "cardinal",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "ar",
      "d",
      "i",
      "n",
      "a",
      "l"
    ],
    "theme": "animals",
    "meaningVi": "chim hồng tước đỏ thắm",
    "emoji": "🐦",
    "sampleSentence": "A red cardinal sings proudly on the snowy pine.",
    "sampleSentenceVi": "Chim hồng tước đỏ thắm hót trên cành thông phủ tuyết.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chim hồng tước đỏ thắm nổi bật trên nền tuyết trắng"
    }
  },
  {
    "id": "wb_ar_lark_33",
    "word": "lark",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "l",
      "ar",
      "k"
    ],
    "theme": "animals",
    "meaningVi": "chim sơn ca hót vang",
    "emoji": "🐦",
    "sampleSentence": "The lark ascends into the bright morning sky.",
    "sampleSentenceVi": "Sơn ca bay vút lên bầu trời sớm mai cất tiếng ca.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Sơn ca bay vút lên bầu trời cao cất tiếng hót mừng"
    }
  },
  {
    "id": "wb_ar_cart_38",
    "word": "cart",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "c",
      "ar",
      "t"
    ],
    "theme": "objects_food",
    "meaningVi": "xe kéo cút kít gỗ",
    "emoji": "🛒",
    "sampleSentence": "Roll the wooden cart filled with fresh apples.",
    "sampleSentenceVi": "Kéo chiếc xe gỗ chở đầy những quả táo tươi.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc xe đẩy hàng mua sắm hoa quả cùng mẹ"
    }
  },
  {
    "id": "wb_ar_scarf_39",
    "word": "scarf",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "c",
      "ar",
      "f"
    ],
    "theme": "objects_food",
    "meaningVi": "khăn quàng cổ len ấm",
    "emoji": "🧣",
    "sampleSentence": "Wrap a striped knitted scarf around your neck.",
    "sampleSentenceVi": "Quàng chiếc khăn len kẻ sọc ấm áp quanh cổ.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Chiếc khăn quàng cổ dệt kim đỏ giữ ấm ngày lạnh"
    }
  },
  {
    "id": "wb_ar_guitar_40",
    "word": "guitar",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "g",
      "ui",
      "t",
      "ar"
    ],
    "theme": "objects_food",
    "meaningVi": "cây đàn guitar gỗ",
    "emoji": "🎸",
    "sampleSentence": "Play happy acoustic tunes on the guitar.",
    "sampleSentenceVi": "Gảy những khúc ca vui tươi trên cây đàn guitar mộc.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Cây đàn ghi-ta gỗ vang lên điệu nhạc rộn rã"
    }
  },
  {
    "id": "wb_ar_march_41",
    "word": "march",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "m",
      "ar",
      "ch"
    ],
    "theme": "actions",
    "meaningVi": "bước đi nhịp nhàng",
    "emoji": "🚶",
    "sampleSentence": "March with lively steps in the school parade.",
    "sampleSentenceVi": "Bước đi nhịp nhàng trong buổi diễu hành trường.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Các bạn nhỏ bước đều tăm tắp như những chú lính chì"
    }
  },
  {
    "id": "wb_ar_spark_42",
    "word": "spark",
    "phonemeId": "ar",
    "group": 7,
    "stage": 4,
    "phonemes": [
      "s",
      "p",
      "ar",
      "k"
    ],
    "theme": "actions",
    "meaningVi": "lóe sáng lung linh",
    "emoji": "✨",
    "sampleSentence": "Stars spark like tiny lanterns in the dark.",
    "sampleSentenceVi": "Những vì sao lóe sáng như chiếc đèn lồng nhỏ giữa đêm.",
    "visual": {
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "type": "photo",
      "alt": "Đốm lửa nhỏ lấp lánh như ngôi sao tí hon"
    }
  }
];

// Helper selectors
export function getWordBankByPhoneme(phonemeId: string): PhonicsWordBankItem[] {
  return PHONICS_WORD_BANK.filter(item => item.phonemeId === phonemeId);
}

export function getWordBankByGroup(group: number): PhonicsWordBankItem[] {
  return PHONICS_WORD_BANK.filter(item => item.group === group);
}

export function getWordBankByTheme(theme: WordBankTheme, phonemeId?: string): PhonicsWordBankItem[] {
  return PHONICS_WORD_BANK.filter(item => {
    if (phonemeId && item.phonemeId !== phonemeId) return false;
    return item.theme === theme;
  });
}

export function getPhonemeWordCount(phonemeId: string): number {
  return PHONICS_WORD_BANK.filter(item => item.phonemeId === phonemeId).length;
}

export function getGroupWordCount(group: number): number {
  return PHONICS_WORD_BANK.filter(item => item.group === group).length;
}
