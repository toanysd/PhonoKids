// Service providing rich Ehon painted artwork and high-res educational photography
// Eliminating flat icons/vectors in favor of rich oil/gouache/acrylic painted textures
import { WORD_VISUALS_MAP } from '../data/wordVisuals';
import { PHONICS_WORD_BANK } from '../data/phonicsWordBank';
import { DecodableStory, StoryPage } from '../types/story';

export interface WordVisual {
  url: string;
  type: 'ehon' | 'photo';
  alt: string;
}

const EHON_MAP: Record<string, WordVisual> = {
  'pen': {
    url: '/assets/ehon/pen.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc bút máy lấp lánh viết chữ xinh'
  },
  'mouse': {
    url: '/assets/ehon/mouse.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú chuột nhỏ quàng khăn cầm quả dâu'
  },
  'doll': {
    url: '/assets/ehon/doll.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon búp bê vải xinh xắn mặc váy hoa'
  },
  'rocket': {
    url: '/assets/ehon/rocket.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon tàu con thoi bay qua các vì sao'
  },
  'carrot': {
    url: '/assets/ehon/carrot.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon củ cà rốt cam tươi ngon trong vườn'
  },
  'seal': {
    url: '/assets/ehon/seal.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú hải cẩu trắng đáng yêu trên tảng băng'
  },
  'fork': {
    url: '/assets/ehon/fork.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc nĩa và thìa vui tươi thưởng thức hoa quả'
  },
  'soap': {
    url: '/assets/ehon/soap.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bánh xà phòng thơm nhiều bọt bóng lấp lánh'
  },
  'ax': {
    url: '/assets/ehon/ax.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc rìu gỗ dựng bên gốc cây nở hoa'
  },
  'axe': {
    url: '/assets/ehon/ax.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc rìu gỗ dựng bên gốc cây nở hoa'
  },
  'chop': {
    url: '/assets/ehon/ax.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc rìu bổ củi của bác tiều phu'
  },
  'tin': {
    url: '/assets/ehon/tin.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon hộp thiếc cổ điển đựng bánh quy và kẹo ngọt'
  },
  'quilt': {
    url: '/assets/ehon/quilt.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc chăn ghép vải hoa ấm cúng trên ghế bập bênh'
  },
  'yoyo': {
    url: '/assets/ehon/yoyo.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon con quay yoyo sắc màu xoay tít lấp lánh'
  },
  'yo-yo': {
    url: '/assets/ehon/yoyo.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon con quay yoyo sắc màu xoay tít lấp lánh'
  },
  'swing': {
    url: '/assets/ehon/swing.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc xích đu gỗ đu đưa dưới tán cây cổ thụ'
  },
  'dab': {
    url: '/assets/ehon/dab.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bạn nhỏ nhảy điệu nhảy dab chiến thắng vui tươi'
  },
  'lime': {
    url: '/assets/ehon/lime.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả chanh xanh mọng nước thơm mát'
  },
  'ten': {
    url: '/assets/ehon/ten_apples.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon mười quả táo xanh thơm ngon trong giỏ dã ngoại'
  },
  'otter': {
    url: '/assets/ehon/otter.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú rái cá bơi ngửa trên dòng suối trong'
  },
  'beaver': {
    url: '/assets/ehon/otter.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú hải ly bơi lội trên dòng suối mát'
  },
  'walrus': {
    url: '/assets/ehon/seal.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú hải cẩu bơi trên tảng băng trắng'
  },
  'toad': {
    url: '/assets/ehon/toad.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú cóc nhỏ hiền lành ngồi trên tảng đá bên suối'
  },
  'koala': {
    url: '/assets/ehon/koala.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú gấu túi koala ôm cành cây bạch đàn'
  },
  'hedgehog': {
    url: '/assets/ehon/hedgehog.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú nhím gai cuộn tròn ngủ giữa lá mùa thu'
  },
  'can': {
    url: '/assets/ehon/can.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon lon nước ép hoa quả cam dâu tươi mát'
  },
  'pail': {
    url: '/assets/ehon/pail.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon xô xúc cát vàng rực rỡ bên bờ biển'
  },
  'ruler': {
    url: '/assets/ehon/ruler.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cây thước kẻ gỗ đo nét thẳng'
  },
  'eraser': {
    url: '/assets/ehon/eraser.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cục tẩy nhỏ xinh sạch nét chì'
  },
  'ball': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả bóng tròn nảy tưng tưng trên đồng cỏ'
  },
  'round': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả bóng tròn nảy tưng tưng'
  },
  'roll': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả bóng tròn lăn tít trên sân cỏ'
  },
  'bounce': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả bóng nảy tưng tưng vui mắt'
  },
  'kick': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả bóng lăn trên thảm cỏ xanh'
  },
  'catch': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đón bắt quả bóng sắc màu'
  },
  'aim': {
    url: '/assets/ehon/ball.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon nhắm đích quả bóng lăn trúng đích'
  },
  'zucchini': {
    url: '/assets/ehon/carrot.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon củ quả tươi ngon trong vườn nhà'
  },
  'yam': {
    url: '/assets/ehon/carrot.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon củ khoai thơm ngọt từ đất lành'
  },
  'cork': {
    url: '/assets/ehon/tin.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon nút đậy đồ dùng nhỏ xinh'
  },
  'pan': {
    url: '/assets/ehon/sam_pan.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc chảo rán nhỏ trong gian bếp ấm cúng'
  },
  'clue': {
    url: '/assets/ehon/blue_clue.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon dấu chân manh mối màu xanh kỳ diệu'
  },
  'spoon': {
    url: '/assets/ehon/moon_spoon.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc thìa nhỏ xinh ánh trăng'
  },
  'frog': {
    url: '/assets/ehon/frog_log.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú ếch xanh ngồi trên khúc gỗ'
  },
  'log': {
    url: '/assets/ehon/frog_log.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon khúc gỗ mộc trên thảm rêu xanh'
  },
  'fox': {
    url: '/assets/ehon/fox_box.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú cáo nhỏ tinh nghịch trong chiếc hộp'
  },
  'box': {
    url: '/assets/ehon/fox_box.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc hộp các-tông xinh xắn'
  },
  'book': {
    url: '/assets/ehon/good_book.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cuốn sách truyện tranh mở ra muôn điều hay'
  },
  'goat': {
    url: '/assets/ehon/goat_boat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bạn dê trắng chèo thuyền trên sông'
  },
  'boat': {
    url: '/assets/ehon/goat_boat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon con thuyền nhỏ lướt sóng êm đềm'
  },
  'king': {
    url: '/assets/ehon/king_ring.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đức vua hiền từ đeo chiếc nhẫn vàng'
  },
  'ring': {
    url: '/assets/ehon/king_ring.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chiếc nhẫn vàng ngọc lấp lánh'
  },
  'rain': {
    url: '/assets/ehon/train_rain.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đoàn tàu chạy dưới cơn mưa mát lành'
  },
  'train': {
    url: '/assets/ehon/train_rain.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đoàn tàu hơi nước sắc màu chạy qua thung lũng'
  },
  'bee': {
    url: '/assets/ehon/bee_tree.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú ong chăm chỉ bay quanh tán cây cổ thụ'
  },
  'tree': {
    url: '/assets/ehon/bee_tree.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cây đại thụ xanh tươi rợp bóng mát'
  },
  'bug': {
    url: '/assets/ehon/bug_rug.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú bọ nhỏ dễ thương trên tấm thảm len'
  },
  'rug': {
    url: '/assets/ehon/bug_rug.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon tấm thảm len đan màu sắc ấm áp'
  },
  'hug': {
    url: '/assets/ehon/puppy_hug.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cái ôm ấm áp vỗ về bạn cún nhỏ'
  },
  'puppy': {
    url: '/assets/ehon/puppy_hug.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bạn cún con lông mềm được ôm âu yếm'
  },
  'shell': {
    url: '/assets/ehon/shells_box.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon những vỏ sò óng ánh trong hộp báu vật'
  },
  'shells': {
    url: '/assets/ehon/shells_box.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon những vỏ sò óng ánh'
  },
  'chick': {
    url: '/assets/ehon/chick_chip.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú gà con lông vàng hót líu lo'
  },
  'chip': {
    url: '/assets/ehon/chick_chip.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú gà con nhặt hạt thóc nhỏ'
  },
  'clown': {
    url: '/assets/ehon/clown_cloud.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú hề tung hứng những đám mây ngũ sắc'
  },
  'cloud': {
    url: '/assets/ehon/clown_cloud.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đám mây bông trắng bồng bềnh'
  },
  'farmer': {
    url: '/assets/ehon/farmer_barn.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bác nông dân chăm chỉ bên nông trại nắng ấm'
  },
  'barn': {
    url: '/assets/ehon/farmer_barn.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chuồng trại nông thôn màu đỏ ấm áp'
  },
  'queen': {
    url: '/assets/ehon/queen_park.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon Nữ hoàng hiền từ dạo bước trong công viên hoa lá'
  },
  'park': {
    url: '/assets/ehon/queen_park.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon công viên hoa lá rực rỡ nắng mai'
  },
  'coin': {
    url: '/assets/ehon/queen_coin.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đồng xu ngôi sao vàng lấp lánh trên cỏ xanh'
  },
  'fish': {
    url: '/assets/ehon/three_fish.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon đàn cá sắc màu bơi lội dưới làn nước biếc'
  },
  'moth': {
    url: '/assets/ehon/three_moths.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon ba chú bướm đêm vỗ cánh dịu dàng'
  },
  'star': {
    url: '/assets/ehon/star.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon ngôi sao vàng lấp lánh'
  },
  'sun': {
    url: '/assets/ehon/sun.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon mặt trời rạng rỡ tỏa tia nắng'
  },
  'cat': {
    url: '/assets/ehon/cat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú mèo cam sọc rực rỡ'
  },
  'mat': {
    url: '/assets/ehon/cat_mat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú mèo ngồi trên chiếc thảm đan'
  },
  'sat': {
    url: '/assets/ehon/cat_mat.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú mèo ngồi yên sưởi nắng'
  },
  'nap': {
    url: '/assets/ehon/cat_nap.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú mèo cuộn tròn ngủ trưa êm đềm'
  },
  'cup': {
    url: '/assets/ehon/cup.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon tách trà rực rỡ bốc khói ấm áp'
  },
  'sip': {
    url: '/assets/ehon/cup.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon nhấp từng ngụm nước ấm trong tách'
  },
  'dog': {
    url: '/assets/ehon/dog.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú cún cưng nô đùa trên đồng cỏ'
  },
  'hen': {
    url: '/assets/ehon/hen.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cô gà mái đỏ mổ thóc trên sân nông trại'
  },
  'pig': {
    url: '/assets/ehon/pig.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú heo hồng tinh nghịch'
  },
  'ant': {
    url: '/assets/ehon/ant.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú kiến bé nhỏ chăm chỉ'
  },
  'apple': {
    url: '/assets/ehon/apple.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon quả táo đỏ mọng cắt dán rực rỡ'
  },
  'ship': {
    url: '/assets/ehon/ship.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon con tàu rẽ sóng đại dương'
  },
  'kite': {
    url: '/assets/ehon/kite.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon cánh diều rực rỡ bay trên bầu trời xanh'
  },
  'sit': {
    url: '/assets/ehon/sit.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon em bé ngồi ngoan trên ghế êm ấm áp'
  },
  'moon': {
    url: '/assets/ehon/moon_spoon.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon vầng trăng tròn vành vạnh đêm rằm'
  },
  'pat': {
    url: '/assets/ehon/sam_pat_ant.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon bạn nhỏ vỗ về vuốt ve thân mật'
  },
  'leo': {
    url: '/assets/ehon/leo.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon Chú sư tử con Leo thân thiện'
  },
  'lion': {
    url: '/assets/ehon/leo.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú sư tử nhỏ dũng cảm'
  },
  'giraffe': {
    url: '/assets/ehon/giraffe.jpg',
    type: 'ehon',
    alt: 'Tranh Ehon chú hươu cao cổ vươn cao ngắm sao'
  },
  'archipelago': {
    url: '/assets/ehon/archipelago.jpg',
    type: 'ehon',
    alt: 'Tranh toàn cảnh 7 quần đảo Phonics thần tiên'
  }
};

export const getWordVisual = (word: string): WordVisual => {
  const clean = word.toLowerCase().trim();
  // Prioritize 100% authentic, zero-latency local Ehon artwork first!
  if (EHON_MAP[clean]) {
    return EHON_MAP[clean];
  }
  if (WORD_VISUALS_MAP[clean]) {
    return WORD_VISUALS_MAP[clean];
  }
  const phMatch = PHONICS_WORD_BANK.find((item) => item.word.toLowerCase() === clean);
  if (phMatch && phMatch.visual) {
    return phMatch.visual;
  }
  // Safe graceful fallback using local Ehon asset
  return {
    url: '/assets/ehon/star.jpg',
    type: 'ehon',
    alt: `Hình minh họa từ vựng: ${word}`
  };
};

export const getStoryCoverVisual = (storyId: string, story?: DecodableStory): WordVisual => {
  if (story?.coverVisual) {
    return {
      url: story.coverVisual.url,
      type: 'ehon',
      alt: story.coverVisual.alt
    };
  }

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

export const getStoryPageVisual = (storyId: string, pageNumber: number, page?: StoryPage): WordVisual => {
  if (page?.visual) {
    return {
      url: page.visual.url,
      type: 'ehon',
      alt: page.visual.alt
    };
  }

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

  return getStoryCoverVisual(storyId, { id: storyId } as DecodableStory);
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

export const getVisemePhoto = (
  mouthShape: string,
  phonemeId?: string,
  tonguePosition?: string
): { url: string; alt: string; labelVi: string } => {
  // 1. Interdental / Dental sounds: th_unvoiced (/θ/), th_voiced (/ð/)
  if (phonemeId === 'th_unvoiced' || phonemeId === 'th_voiced' || mouthShape === 'tongue_teeth') {
    return {
      url: '/assets/visemes/tongue_teeth.jpg',
      alt: 'Ảnh thật cận cảnh đầu lưỡi đặt nhẹ giữa hai hàm răng (/θ/, /ð/)',
      labelVi: 'Đầu lưỡi khẽ đặt giữa hai hàm răng rồi đẩy luồng hơi'
    };
  }

  // 2. Labiodental sounds: f (/f/), v (/v/)
  if (phonemeId === 'f' || phonemeId === 'v' || mouthShape === 'lip_bite') {
    return {
      url: '/assets/visemes/lip_bite.jpg',
      alt: 'Ảnh thật cận cảnh răng cửa trên chạm nhẹ mép môi dưới (/f/, /v/)',
      labelVi: 'Răng cửa trên chạm nhẹ mép môi dưới'
    };
  }

  // 3. Velar plosives & nasals: c/k (/k/), g (/ɡ/), ng (/ŋ/)
  if (
    phonemeId === 'c' || 
    phonemeId === 'c_k' || 
    phonemeId === 'k' || 
    phonemeId === 'g' || 
    phonemeId === 'ng' || 
    mouthShape === 'velar' || 
    tonguePosition === 'up_back'
  ) {
    return {
      url: '/assets/visemes/open.jpg',
      alt: 'Ảnh thật khoang miệng mở, cuống lưỡi chạm vòm miệng trong (/k/, /g/, /ng/)',
      labelVi: 'Cuống lưỡi nâng chạm vòm họng trong, bật luồng hơi giòn'
    };
  }

  // 4. Alveolar plosives & nasals & liquids: t (/t/), d (/d/), n (/n/), l (/l/)
  if (
    phonemeId === 't' || 
    phonemeId === 'd' || 
    phonemeId === 'n' || 
    phonemeId === 'l' || 
    mouthShape === 'alveolar' || 
    tonguePosition === 'behind_top_teeth'
  ) {
    if (mouthShape === 'teeth_together') {
      return {
        url: '/assets/visemes/teeth_together.jpg',
        alt: 'Ảnh thật cận cảnh răng khép nhẹ, luồng hơi xì qua kẽ răng (/s/, /z/, /x/)',
        labelVi: 'Răng khép nhẹ xì luồng hơi mát qua kẽ răng'
      };
    }
    return {
      url: '/assets/visemes/open.jpg',
      alt: 'Ảnh thật đầu lưỡi chạm nướu hàm trên (/t/, /d/, /n/, /l/)',
      labelVi: 'Đầu lưỡi chạm nướu trên rồi bật hơi dứt khoát'
    };
  }

  // 5. Sibilant fricatives: s (/s/), z (/z/), x (/ks/)
  if (mouthShape === 'teeth_together' || phonemeId === 's' || phonemeId === 'z' || phonemeId === 'x') {
    return {
      url: '/assets/visemes/teeth_together.jpg',
      alt: 'Ảnh thật cận cảnh răng khép nhẹ, luồng hơi xì qua kẽ răng (/s/, /z/, /x/)',
      labelVi: 'Răng khép nhẹ xì luồng hơi mát qua kẽ răng'
    };
  }

  // 6. Bilabial plosives & nasals: p (/p/), b (/b/), m (/m/)
  if (mouthShape === 'closed' || phonemeId === 'p' || phonemeId === 'b' || phonemeId === 'm') {
    return {
      url: '/assets/visemes/closed.jpg',
      alt: 'Ảnh thật cận cảnh hai cánh môi mím chặt (/p/, /b/, /m/)',
      labelVi: 'Hai môi mím chặt rồi bật luồng hơi'
    };
  }

  // 7. Rounded lips vowels & glides: w, oo, oa, r, ch, sh, qu, oi, ue, or, o
  if (
    mouthShape === 'round' || 
    ['w', 'oo_short', 'oo_long', 'oa', 'r', 'ch', 'sh', 'qu', 'oi', 'ue', 'or', 'o'].includes(phonemeId || '')
  ) {
    return {
      url: '/assets/visemes/round.jpg',
      alt: 'Ảnh thật cận cảnh môi chu tròn hình chữ O (/w/, /oo/, /r/, /sh/)',
      labelVi: 'Môi chu tròn hướng ra phía trước'
    };
  }

  // 8. Spread lips vowels: i, e, ee, ai, ie, y
  if (
    mouthShape === 'wide' || 
    ['i', 'e', 'ee', 'ai', 'ie', 'y'].includes(phonemeId || '')
  ) {
    return {
      url: '/assets/visemes/wide.jpg',
      alt: 'Ảnh thật khóe môi hé mở mỉm cười (/i/, /e/, /ee/, /ai/)',
      labelVi: 'Khóe môi mở rộng như nụ cười'
    };
  }

  // 9. Open vowels & glottal: a, u, ar, er, h
  return {
    url: '/assets/visemes/open.jpg',
    alt: 'Ảnh thật hạ cằm tự nhiên, khoang miệng mở thư giãn (/a/, /u/, /ar/, /h/)',
    labelVi: 'Hạ cằm tự nhiên, khoang miệng mở thư giãn'
  };
};

