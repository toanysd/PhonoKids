// Service providing rich Ehon painted artwork and high-res educational photography
// Eliminating flat icons/vectors in favor of rich oil/gouache/acrylic painted textures

export interface WordVisual {
  url: string;
  type: 'ehon' | 'photo';
  alt: string;
}

const EHON_MAP: Record<string, WordVisual> = {
  // Core generated Ehon illustrations (Eric Carle collage & gouache style)
  'cat': {
    url: '/assets/ehon/cat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cắt dán chú mèo cam sọc rực rỡ'
  },
  'cup': {
    url: '/assets/ehon/cup.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon tách trà rực rỡ bốc khói ấm áp'
  },
  'kite': {
    url: '/assets/ehon/kite.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cánh diều rực rỡ bay trên bầu trời xanh'
  },
  'sun': {
    url: '/assets/ehon/sun.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon mặt trời rạng rỡ tỏa tia nắng muôn màu'
  },
  'apple': {
    url: '/assets/ehon/apple.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả táo đỏ mọng cắt dán giấy màu'
  },
  'dog': {
    url: '/assets/ehon/dog.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú cún cưng nô đùa trên đồng cỏ nắng vàng'
  },
  'hen': {
    url: '/assets/ehon/hen.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cô gà mái đỏ mổ thóc trên sân nông trại'
  },
  'ship': {
    url: '/assets/ehon/ship.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon con tàu rẽ sóng đại dương rực rỡ sắc màu'
  },
  'ant': {
    url: '/assets/ehon/ant.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú kiến bé nhỏ vui vẻ vác miếng dâu tây'
  },
  'pig': {
    url: '/assets/ehon/pig.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú heo hồng tinh nghịch tung tăng vũng nước hoa'
  },
  'star': {
    url: '/assets/ehon/star.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon ngôi sao vàng khổng lồ tỏa sáng đêm thanh bình'
  },
  'leo': {
    url: '/assets/ehon/leo.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon Chú sư tử con Leo thân thiện vẫy tay chào bé'
  },
  'giraffe': {
    url: '/assets/ehon/giraffe.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon Chú hươu cao cổ vươn cổ ngắm những vì sao đêm'
  },
  'archipelago': {
    url: '/assets/ehon/archipelago.jpg',
    type: 'ehon',
    alt: 'Tranh toàn cảnh 7 quần đảo Phonics thần tiên nối nhịp cầu vồng'
  },

  // High-definition rich real photographic assets for vocabulary & drills
  'snake': {
    url: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chú rắn xanh uốn lượn hiền lành'
  },
  'pan': {
    url: 'https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chiếc chảo chiên rán sáng bóng'
  },
  'tennis': {
    url: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Quả bóng tennis màu vàng sáng'
  },
  'tree': {
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Cây cổ thụ xanh tươi trong nắng'
  },
  'moon': {
    url: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Mặt trăng tròn vằng vặc đêm rằm'
  },
  'umbrella': {
    url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chiếc ô nhiều màu rực rỡ che mưa'
  },
  'egg': {
    url: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Quả trứng gà sạch màu nâu bóng'
  },
  'pen': {
    url: 'https://images.unsplash.com/photo-1585336261026-4180718399b3?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chiếc bút mực viết chữ đẹp'
  },
  'fan': {
    url: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chiếc quạt giấy xòe mát rượi'
  },
  'van': {
    url: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chiếc xe van dã ngoại xinh xắn'
  },
  'tap': {
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Vòi nước sạch trong vắt'
  },
  'pin': {
    url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Cây ghim an toàn bằng kim loại sáng'
  },
  'tin': {
    url: 'https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Hộp thiếc đựng bánh kẹo'
  },
  'fish': {
    url: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chú cá nhỏ bơi lội trong làn nước xanh'
  },
  'mat': {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chiếc thảm dệt ấm áp'
  },
  'sat': {
    url: '/assets/ehon/cat.jpg',
    type: 'ehon',
    alt: 'Chú mèo ngồi yên trên thảm'
  },
  'pat': {
    url: '/assets/ehon/dog.jpg',
    type: 'ehon',
    alt: 'Bé vỗ về chú cún con'
  },
  'big': {
    url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chú voi khổng lồ'
  },
  'ben': {
    url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Bạn nhỏ tên Ben'
  },
  'shun': {
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Tránh né'
  },
  'sip': {
    url: '/assets/ehon/cup.jpg',
    type: 'ehon',
    alt: 'Nhấp từng ngụm nước ấm'
  },
  'dab': {
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80',
    type: 'photo',
    alt: 'Chấm nhẹ'
  }
};

export const getWordVisual = (word: string): WordVisual => {
  const clean = word.toLowerCase().trim();
  if (EHON_MAP[clean]) {
    return EHON_MAP[clean];
  }

  // Fallback to high-quality educational photo if not in custom map
  return {
    url: `https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80`,
    type: 'photo',
    alt: `Hình ảnh minh họa cho ${word}`
  };
};

export const getStoryCoverVisual = (storyId: string): WordVisual => {
  switch (storyId) {
    case 'story_cat_sat':
      return {
        url: '/assets/ehon/cat.jpg',
        type: 'ehon',
        alt: 'Tranh bìa Ehon Chú Mèo Lười Ngồi Sưởi Nắng'
      };
    case 'story_sam_ant':
      return {
        url: '/assets/ehon/ant.jpg',
        type: 'ehon',
        alt: 'Tranh bìa Ehon Sam và Bạn Kiến Chăm Chỉ'
      };
    case 'story_red_hen':
      return {
        url: '/assets/ehon/hen.jpg',
        type: 'ehon',
        alt: 'Tranh bìa Ehon Cô Gà Mái Đỏ Nông Trại'
      };
    case 'story_ship_fog':
      return {
        url: '/assets/ehon/ship.jpg',
        type: 'ehon',
        alt: 'Tranh bìa Ehon Con Tàu Khổng Lồ Giữa Đại Dương'
      };
    case 'story_queen_star':
      return {
        url: '/assets/ehon/star.jpg',
        type: 'ehon',
        alt: 'Tranh bìa Ehon Nữ Hoàng và Ngôi Sao Ước Nguyện'
      };
    default:
      return {
        url: '/assets/ehon/sun.jpg',
        type: 'ehon',
        alt: 'Tranh bìa Ehon câu chuyện khám phá thế giới'
      };
  }
};

export const getIslandVisual = (islandNumber: number): WordVisual => {
  switch (islandNumber) {
    case 1:
      return {
        url: '/assets/ehon/sun.jpg',
        type: 'ehon',
        alt: 'Đảo Nắng Ấm Rực Rỡ & Quả Táo'
      };
    case 2:
      return {
        url: '/assets/ehon/cat.jpg',
        type: 'ehon',
        alt: 'Đảo Chú Mèo Cam & Cánh Diều'
      };
    case 3:
      return {
        url: '/assets/ehon/hen.jpg',
        type: 'ehon',
        alt: 'Đảo Nông Trại Cô Gà Mái Đỏ & Chú Heo'
      };
    case 4:
      return {
        url: '/assets/ehon/ship.jpg',
        type: 'ehon',
        alt: 'Đảo Hải Trình Con Tàu Đại Dương'
      };
    case 5:
      return {
        url: '/assets/ehon/ant.jpg',
        type: 'ehon',
        alt: 'Đảo Rừng Xanh & Chú Kiến Bé Nhỏ'
      };
    case 6:
      return {
        url: '/assets/ehon/star.jpg',
        type: 'ehon',
        alt: 'Đảo Ngân Hà & Ngôi Sao Lấp Lánh'
      };
    case 7:
    default:
      return {
        url: '/assets/ehon/archipelago.jpg',
        type: 'ehon',
        alt: 'Đảo Lâu Đài Hoàng Gia Nối Nhịp Cầu Vồng'
      };
  }
};
