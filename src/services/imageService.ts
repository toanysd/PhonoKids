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
  'cat_mat': {
    url: '/assets/ehon/cat_mat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú mèo ngồi trên chiếc thảm đan rực rỡ'
  },
  'cat_nap': {
    url: '/assets/ehon/cat_nap.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú mèo cuộn tròn ngủ trưa êm đềm'
  },
  'sam_pan': {
    url: '/assets/ehon/sam_pan.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bạn Sam cầm chiếc chảo nhỏ trong bếp nắng'
  },
  'ant_pan': {
    url: '/assets/ehon/ant_pan.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú kiến bé nhỏ ngồi trong lòng chảo'
  },
  'sam_pat_ant': {
    url: '/assets/ehon/sam_pat_ant.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bạn Sam vỗ về vuốt ve chú kiến nhỏ trên lá'
  },
  'hen_dog': {
    url: '/assets/ehon/hen_dog.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cô gà mái đỏ gặp gỡ bạn cún lông xù vui tươi'
  },
  'three_fish': {
    url: '/assets/ehon/three_fish.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon ba chú cá sắc màu bơi lội lấp lánh dưới làn nước biếc'
  },
  'queen_park': {
    url: '/assets/ehon/queen_park.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon Nữ hoàng hiền từ đội vương miện dạo bước trong công viên hoa lá'
  },
  'queen_coin': {
    url: '/assets/ehon/queen_coin.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon Nữ hoàng nhặt đồng xu ngôi sao vàng lấp lánh trên cỏ xanh'
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
    url: '/assets/ehon/cat_mat.jpg',
    type: 'ehon',
    alt: 'Chiếc thảm dệt đan màu sắc ấm áp'
  },
  'sat': {
    url: '/assets/ehon/cat.jpg',
    type: 'ehon',
    alt: 'Chú mèo ngồi yên sưởi nắng'
  },
  'pat': {
    url: '/assets/ehon/sam_pat_ant.jpg',
    type: 'ehon',
    alt: 'Bé vỗ về vuốt ve thân mật'
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
        url: '/assets/ehon/sam_pan.jpg',
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
        url: '/assets/ehon/queen_park.jpg',
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

export const getStoryPageVisual = (storyId: string, pageNumber: number): WordVisual => {
  if (storyId === 'story_cat_sat') {
    switch (pageNumber) {
      case 1:
        return {
          url: '/assets/ehon/cat.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Chú mèo ngồi sưởi nắng (The cat sat)'
        };
      case 2:
        return {
          url: '/assets/ehon/cat_mat.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Chú mèo ngồi trên chiếc thảm đan (The cat sat on a mat)'
        };
      case 3:
      default:
        return {
          url: '/assets/ehon/cat_nap.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Chú mèo cuộn tròn ngủ trưa ấm áp (The cat has a nap)'
        };
    }
  }

  if (storyId === 'story_sam_ant') {
    switch (pageNumber) {
      case 1:
        return {
          url: '/assets/ehon/sam_pan.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Bạn Sam cầm chiếc chảo nhỏ (Sam had a pan)'
        };
      case 2:
        return {
          url: '/assets/ehon/ant_pan.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Chú kiến bé nhỏ ngồi trong chảo (An ant sat on the pan)'
        };
      case 3:
      default:
        return {
          url: '/assets/ehon/sam_pat_ant.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Sam vỗ về chú kiến trên chiếc lá (Sam pat the ant)'
        };
    }
  }

  if (storyId === 'story_red_hen') {
    switch (pageNumber) {
      case 1:
        return {
          url: '/assets/ehon/hen.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Cô gà mái đỏ trong sân nông trại'
        };
      case 2:
        return {
          url: '/assets/ehon/hen_dog.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Cô gà mái gặp gỡ bạn cún lông xù (The hen met a dog)'
        };
      case 3:
      default:
        return {
          url: '/assets/ehon/dog.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Bạn cún và cô gà cùng chạy tung tăng (The dog and hen run)'
        };
    }
  }

  if (storyId === 'story_ship_fog') {
    switch (pageNumber) {
      case 1:
        return {
          url: '/assets/ehon/ship.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Con tàu buồm rẽ sóng đại dương (A big ship sails in the sea)'
        };
      case 2:
      default:
        return {
          url: '/assets/ehon/three_fish.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Ba chú cá bơi lội lấp lánh (They see three fish flash and swim)'
        };
    }
  }

  if (storyId === 'story_queen_star') {
    switch (pageNumber) {
      case 1:
        return {
          url: '/assets/ehon/queen_park.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Nữ hoàng dạo bước trong công viên rợp bóng cây (The queen went to the green park)'
        };
      case 2:
      default:
        return {
          url: '/assets/ehon/queen_coin.jpg',
          type: 'ehon',
          alt: 'Tranh Ehon Nữ hoàng tìm thấy đồng xu ngôi sao trên cỏ hoa (She found a bright star coin on the ground)'
        };
    }
  }

  return getStoryCoverVisual(storyId);
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

export const getVisemePhoto = (mouthShape: string): { url: string; alt: string; labelVi: string } => {
  switch (mouthShape) {
    case 'teeth_together':
      return {
        url: '/assets/visemes/teeth_together.jpg',
        alt: 'Ảnh thật cận cảnh khẩu hình răng khép nhẹ, môi mỉm cười (/s/, /z/)',
        labelVi: 'Răng khép nhẹ xì luồng hơi mát qua kẽ răng'
      };
    case 'wide':
      return {
        url: '/assets/visemes/wide.jpg',
        alt: 'Ảnh thật cận cảnh khẩu hình miệng hé rộng mỉm cười (/a/, /æ/, /e/)',
        labelVi: 'Mỉm cười hé khóe miệng, thấy rõ răng'
      };
    case 'closed':
      return {
        url: '/assets/visemes/closed.jpg',
        alt: 'Ảnh thật cận cảnh hai cánh môi mím chặt (/p/, /b/, /m/)',
        labelVi: 'Hai môi mím chặt rồi bật luồng hơi'
      };
    case 'round':
      return {
        url: '/assets/visemes/round.jpg',
        alt: 'Ảnh thật cận cảnh môi chu tròn hình chữ O (/u/, /o/, /w/)',
        labelVi: 'Môi chu tròn hướng ra phía trước'
      };
    case 'open':
    default:
      return {
        url: '/assets/visemes/open.jpg',
        alt: 'Ảnh thật cận cảnh cằm hạ tự nhiên, khoang miệng mở (/ɑ/, /t/, /d/)',
        labelVi: 'Há rộng cằm, đầu lưỡi chạm nướu trên'
      };
  }
};

