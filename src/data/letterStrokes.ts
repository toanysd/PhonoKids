// Multisensory Letter Formation Data based on Orton-Gillingham & Jolly Phonics Letter Formation Standards
export interface StrokePoint {
  x: number; // 0-200 coordinate space
  y: number;
}

export interface StrokeGuide {
  id: number; // 1, 2, 3
  startPoint: StrokePoint;
  endPoint: StrokePoint;
  pathD: string; // SVG path definition
  arrowAngleDeg?: number; // Arrow angle at start
  instructionVi: string;
  checkpoints: StrokePoint[];
}

export interface LetterStrokeData {
  id: string; // phoneme id (e.g. 's', 'a', 'p', 'b', 'd', 'sh')
  char: string;
  phonemeId: string;
  viewBox: string;
  baselineY: number; // typically 150
  midlineY: number;  // typically 90
  headlineY: number; // typically 30
  descenderY: number;// typically 185
  strokes: StrokeGuide[];
  tipVi: string;
  mnemonicEn: string;
  confusionPair?: {
    confusedWith: string;
    distinctionHintVi: string;
    mnemonicVisual: string;
  };
}

// Coordinate grid: 200x200
// headline: y=30, midline: y=90, baseline: y=150, descender: y=185
export const LETTER_STROKES_DATA: Record<string, LetterStrokeData> = {
  s: {
    id: 's',
    char: 's',
    phonemeId: 's',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Snake in the grass: slither around!',
    tipVi: 'Bé uốn lượn như chú rắn trườn trong bãi cỏ!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 135, y: 105 },
        endPoint: { x: 65, y: 145 },
        pathD: 'M 135 105 C 130 90, 80 85, 75 108 C 70 125, 135 125, 130 142 C 125 158, 70 155, 65 145',
        arrowAngleDeg: 210,
        instructionVi: 'Uốn cong sang trái, lượn qua phải rồi lượn về trái',
        checkpoints: [
          { x: 135, y: 105 },
          { x: 100, y: 92 },
          { x: 75, y: 108 },
          { x: 100, y: 122 },
          { x: 130, y: 135 },
          { x: 100, y: 152 },
          { x: 65, y: 145 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'c',
      distinctionHintVi: 'Chữ s uốn lượn 2 lần như rắn con, chữ c chỉ mở miệng 1 lần sang phải!',
      mnemonicVisual: '🐍'
    }
  },

  a: {
    id: 'a',
    char: 'a',
    phonemeId: 'a',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Ant on the apple: round the apple, down the leaf!',
    tipVi: 'Vẽ quả táo tròn xoe, rồi kéo cuống lá thẳng xuống!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 135, y: 110 },
        endPoint: { x: 135, y: 110 },
        pathD: 'M 135 110 C 130 92, 70 92, 65 120 C 60 148, 125 154, 135 120',
        arrowAngleDeg: 190,
        instructionVi: 'Vẽ hình tròn quả táo từ phải sang trái',
        checkpoints: [
          { x: 135, y: 110 },
          { x: 100, y: 93 },
          { x: 65, y: 120 },
          { x: 100, y: 150 },
          { x: 135, y: 120 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 135, y: 95 },
        endPoint: { x: 140, y: 150 },
        pathD: 'M 135 95 L 135 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo một nét thẳng từ trên xuống làm cuống lá',
        checkpoints: [
          { x: 135, y: 95 },
          { x: 135, y: 122 },
          { x: 135, y: 150 }
        ]
      }
    ]
  },

  t: {
    id: 't',
    char: 't',
    phonemeId: 't',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the tall tower, lift and cross!',
    tipVi: 'Kéo từ ngọn tháp cao xuống có móc nhẹ, rồi gạch ngang qua!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 95, y: 45 },
        endPoint: { x: 130, y: 148 },
        pathD: 'M 95 45 L 95 138 C 95 150, 115 152, 130 148',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo thẳng từ trên cao xuống và móc nhẹ sang phải',
        checkpoints: [
          { x: 95, y: 45 },
          { x: 95, y: 95 },
          { x: 95, y: 135 },
          { x: 115, y: 148 },
          { x: 130, y: 148 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 65, y: 90 },
        endPoint: { x: 130, y: 90 },
        pathD: 'M 65 90 L 130 90',
        arrowAngleDeg: 0,
        instructionVi: 'Gạch một đường ngang ngắn ở giữa',
        checkpoints: [
          { x: 65, y: 90 },
          { x: 95, y: 90 },
          { x: 130, y: 90 }
        ]
      }
    ]
  },

  i: {
    id: 'i',
    char: 'i',
    phonemeId: 'i',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the insect body, dot the head!',
    tipVi: 'Kéo một nét thân chú kiến nhỏ, rồi chấm một chấm trên đầu!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 100, y: 95 },
        endPoint: { x: 100, y: 150 },
        pathD: 'M 100 95 L 100 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo thẳng ngắn từ vạch giữa xuống vạch đáy',
        checkpoints: [
          { x: 100, y: 95 },
          { x: 100, y: 122 },
          { x: 100, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 100, y: 65 },
        endPoint: { x: 100, y: 65 },
        pathD: 'M 100 65 A 4 4 0 1 1 99.9 65',
        arrowAngleDeg: 0,
        instructionVi: 'Chấm một chấm tròn trên đầu',
        checkpoints: [
          { x: 100, y: 65 }
        ]
      }
    ]
  },

  p: {
    id: 'p',
    char: 'p',
    phonemeId: 'p',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the pirate plank, up and around his eye patch!',
    tipVi: 'Kéo que dài thò xuống biển sâu, rồi vòng bụng tròn sang bên phải!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 75, y: 92 },
        endPoint: { x: 75, y: 185 },
        pathD: 'M 75 92 L 75 185',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo một que dài thẳng từ vạch giữa thò xuống đáy sâu',
        checkpoints: [
          { x: 75, y: 92 },
          { x: 75, y: 135 },
          { x: 75, y: 160 },
          { x: 75, y: 185 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 75, y: 95 },
        endPoint: { x: 75, y: 145 },
        pathD: 'M 75 95 C 105 92, 145 100, 140 120 C 135 142, 105 148, 75 145',
        arrowAngleDeg: 20,
        instructionVi: 'Từ đỉnh que, vòng một chiếc bụng tròn sang bên phải',
        checkpoints: [
          { x: 75, y: 95 },
          { x: 115, y: 95 },
          { x: 140, y: 120 },
          { x: 115, y: 145 },
          { x: 75, y: 145 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'q',
      distinctionHintVi: 'Chữ p có bụng tròn bên PHẢI (bóng bay phập phồng), còn chữ q có bụng bên TRÁI!',
      mnemonicVisual: '🎈'
    }
  },

  n: {
    id: 'n',
    char: 'n',
    phonemeId: 'n',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down Nobby, over his net!',
    tipVi: 'Kéo que xuống rồi vòng qua lưới tạo thành chiếc hầm chui!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 65, y: 95 },
        endPoint: { x: 65, y: 150 },
        pathD: 'M 65 95 L 65 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo một đường thẳng ngắn từ vạch giữa xuống đáy',
        checkpoints: [
          { x: 65, y: 95 },
          { x: 65, y: 125 },
          { x: 65, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 65, y: 110 },
        endPoint: { x: 135, y: 150 },
        pathD: 'M 65 110 C 75 92, 125 90, 135 115 L 135 150',
        arrowAngleDeg: 45,
        instructionVi: 'Lượn vòm lên tạo chiếc cầu vòm rồi kéo thẳng xuống đáy',
        checkpoints: [
          { x: 65, y: 110 },
          { x: 100, y: 92 },
          { x: 135, y: 115 },
          { x: 135, y: 150 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'u',
      distinctionHintVi: 'Chữ n là cái hầm chui (vòm úp lên), chữ u là cái cốc đựng nước (miệng ngửa lên)!',
      mnemonicVisual: '🚇'
    }
  },

  b: {
    id: 'b',
    char: 'b',
    phonemeId: 'b',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the tall bat, around the ball!',
    tipVi: 'Gậy bóng chày dài cao từ trên xuống, rồi vòng bụng tròn quả bóng bên phải!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 70, y: 35 },
        endPoint: { x: 70, y: 150 },
        pathD: 'M 70 35 L 70 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo cây gậy bóng chày cao từ vạch đỉnh xuống vạch đáy',
        checkpoints: [
          { x: 70, y: 35 },
          { x: 70, y: 75 },
          { x: 70, y: 115 },
          { x: 70, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 70, y: 100 },
        endPoint: { x: 70, y: 150 },
        pathD: 'M 70 100 C 110 95, 145 105, 140 125 C 135 145, 105 152, 70 150',
        arrowAngleDeg: 30,
        instructionVi: 'Vòng chiếc bụng quả bóng tròn sang bên PHẢI',
        checkpoints: [
          { x: 70, y: 100 },
          { x: 115, y: 98 },
          { x: 140, y: 125 },
          { x: 115, y: 150 },
          { x: 70, y: 150 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'd',
      distinctionHintVi: 'Chữ b: GẬY trước rồi BÓNG sau (bụng bên phải). Chữ d: TRỐNG trước rồi DÙI sau (bụng bên trái)!',
      mnemonicVisual: '🏏⚾'
    }
  },

  d: {
    id: 'd',
    char: 'd',
    phonemeId: 'd',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Around the drum, down the drumstick!',
    tipVi: 'Vẽ chiếc trống tròn bên trái trước, rồi kéo dùi trống cao từ trên xuống!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 130, y: 105 },
        endPoint: { x: 130, y: 145 },
        pathD: 'M 130 105 C 120 92, 60 95, 60 120 C 60 148, 120 152, 130 145',
        arrowAngleDeg: 190,
        instructionVi: 'Vẽ chiếc trống tròn ở bên TRÁI trước',
        checkpoints: [
          { x: 130, y: 105 },
          { x: 95, y: 94 },
          { x: 60, y: 120 },
          { x: 95, y: 150 },
          { x: 130, y: 145 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 130, y: 35 },
        endPoint: { x: 130, y: 150 },
        pathD: 'M 130 35 L 130 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo cây dùi trống cao từ đỉnh xuống chạm đáy',
        checkpoints: [
          { x: 130, y: 35 },
          { x: 130, y: 80 },
          { x: 130, y: 120 },
          { x: 130, y: 150 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'b',
      distinctionHintVi: 'Chữ d có chiếc trống tròn ở TRÁI rồi dùi ở PHẢI (bàn tay trái chỉ dấu like d)!',
      mnemonicVisual: '🥁🥢'
    }
  },

  c: {
    id: 'c',
    char: 'c',
    phonemeId: 'c',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Curl around the caterpillar!',
    tipVi: 'Bé uốn cong lưng chú sâu bướm dễ thương!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 135, y: 105 },
        endPoint: { x: 135, y: 140 },
        pathD: 'M 135 105 C 120 90, 65 92, 65 120 C 65 150, 120 152, 135 140',
        arrowAngleDeg: 200,
        instructionVi: 'Uốn cong tròn từ trên lượn sang trái rồi mở miệng ở dưới',
        checkpoints: [
          { x: 135, y: 105 },
          { x: 95, y: 92 },
          { x: 65, y: 120 },
          { x: 95, y: 150 },
          { x: 135, y: 140 }
        ]
      }
    ]
  },

  k: {
    id: 'k',
    char: 'k',
    phonemeId: 'k',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the kangaroo, kick in, kick out!',
    tipVi: 'Kéo lưng chú chuột túi cao, rồi đá chân vào trong và đá ra ngoài!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 75, y: 35 },
        endPoint: { x: 75, y: 150 },
        pathD: 'M 75 35 L 75 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo thẳng từ trên đỉnh xuống vạch đáy',
        checkpoints: [
          { x: 75, y: 35 },
          { x: 75, y: 90 },
          { x: 75, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 135, y: 95 },
        endPoint: { x: 75, y: 125 },
        pathD: 'M 135 95 L 75 125',
        arrowAngleDeg: 150,
        instructionVi: 'Đá chéo từ ngoài vào giữa',
        checkpoints: [
          { x: 135, y: 95 },
          { x: 105, y: 110 },
          { x: 75, y: 125 }
        ]
      },
      {
        id: 3,
        startPoint: { x: 90, y: 118 },
        endPoint: { x: 140, y: 150 },
        pathD: 'M 90 118 L 140 150',
        arrowAngleDeg: 40,
        instructionVi: 'Đá chéo chân xuống đất',
        checkpoints: [
          { x: 90, y: 118 },
          { x: 115, y: 134 },
          { x: 140, y: 150 }
        ]
      }
    ]
  },

  e: {
    id: 'e',
    char: 'e',
    phonemeId: 'e',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Slice the egg, scoop around!',
    tipVi: 'Gạch ngang cắt đôi quả trứng, rồi vòng tròn qua vỏ!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 65, y: 120 },
        endPoint: { x: 135, y: 142 },
        pathD: 'M 65 120 L 135 120 C 135 95, 65 92, 65 120 C 65 148, 125 152, 135 142',
        arrowAngleDeg: 0,
        instructionVi: 'Gạch ngang giữa, rồi lượn cong tròn lên trên và vòng xuống dưới',
        checkpoints: [
          { x: 65, y: 120 },
          { x: 135, y: 120 },
          { x: 100, y: 92 },
          { x: 65, y: 120 },
          { x: 100, y: 150 },
          { x: 135, y: 142 }
        ]
      }
    ]
  },

  h: {
    id: 'h',
    char: 'h',
    phonemeId: 'h',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the horse leg, over his back!',
    tipVi: 'Kéo chân chú ngựa cao từ đỉnh, rồi vòng qua lưng cong xuống!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 70, y: 35 },
        endPoint: { x: 70, y: 150 },
        pathD: 'M 70 35 L 70 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo chân ngựa cao thẳng từ đỉnh xuống đáy',
        checkpoints: [
          { x: 70, y: 35 },
          { x: 70, y: 90 },
          { x: 70, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 70, y: 110 },
        endPoint: { x: 135, y: 150 },
        pathD: 'M 70 110 C 80 92, 125 90, 135 115 L 135 150',
        arrowAngleDeg: 35,
        instructionVi: 'Vòng cong qua lưng ngựa rồi kéo thẳng xuống đất',
        checkpoints: [
          { x: 70, y: 110 },
          { x: 100, y: 92 },
          { x: 135, y: 115 },
          { x: 135, y: 150 }
        ]
      }
    ]
  },

  r: {
    id: 'r',
    char: 'r',
    phonemeId: 'r',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the robot, over his arm!',
    tipVi: 'Kéo thân chú robot xuống, rồi vươn cánh tay sang phải!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 75, y: 95 },
        endPoint: { x: 75, y: 150 },
        pathD: 'M 75 95 L 75 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo thẳng thân robot xuống vạch đáy',
        checkpoints: [
          { x: 75, y: 95 },
          { x: 75, y: 125 },
          { x: 75, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 75, y: 115 },
        endPoint: { x: 135, y: 95 },
        pathD: 'M 75 115 C 85 95, 115 92, 135 95',
        arrowAngleDeg: 45,
        instructionVi: 'Lượn tay robot cong sang bên phải',
        checkpoints: [
          { x: 75, y: 115 },
          { x: 105, y: 95 },
          { x: 135, y: 95 }
        ]
      }
    ]
  },

  m: {
    id: 'm',
    char: 'm',
    phonemeId: 'm',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Maisie, mountain, mountain!',
    tipVi: 'Kéo que xuống, rồi nhảy qua hai ngọn núi cao!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 50, y: 95 },
        endPoint: { x: 50, y: 150 },
        pathD: 'M 50 95 L 50 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo que đầu tiên thẳng xuống đáy',
        checkpoints: [
          { x: 50, y: 95 },
          { x: 50, y: 125 },
          { x: 50, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 50, y: 115 },
        endPoint: { x: 105, y: 150 },
        pathD: 'M 50 115 C 60 92, 95 92, 105 115 L 105 150',
        arrowAngleDeg: 45,
        instructionVi: 'Lượn qua ngọn núi thứ nhất',
        checkpoints: [
          { x: 50, y: 115 },
          { x: 78, y: 92 },
          { x: 105, y: 115 },
          { x: 105, y: 150 }
        ]
      },
      {
        id: 3,
        startPoint: { x: 105, y: 115 },
        endPoint: { x: 160, y: 150 },
        pathD: 'M 105 115 C 115 92, 150 92, 160 115 L 160 150',
        arrowAngleDeg: 45,
        instructionVi: 'Lượn qua ngọn núi thứ hai',
        checkpoints: [
          { x: 105, y: 115 },
          { x: 133, y: 92 },
          { x: 160, y: 115 },
          { x: 160, y: 150 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'w',
      distinctionHintVi: 'Chữ m là hai đỉnh núi chọc lên trời ⛰️, chữ w là hai con sóng nước chìm xuống dưới 🌊!',
      mnemonicVisual: '⛰️'
    }
  },

  g: {
    id: 'g',
    char: 'g',
    phonemeId: 'g',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Around her girl face, down her braid, curl!',
    tipVi: 'Vẽ khuôn mặt tròn của bạn gái, rồi kéo đuôi sam dài xuống biển móc ngược!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 135, y: 110 },
        endPoint: { x: 135, y: 110 },
        pathD: 'M 135 110 C 130 92, 65 92, 65 120 C 65 148, 125 152, 135 120',
        arrowAngleDeg: 190,
        instructionVi: 'Vẽ khuôn mặt tròn xinh xắn',
        checkpoints: [
          { x: 135, y: 110 },
          { x: 100, y: 92 },
          { x: 65, y: 120 },
          { x: 100, y: 150 },
          { x: 135, y: 120 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 135, y: 95 },
        endPoint: { x: 65, y: 175 },
        pathD: 'M 135 95 L 135 165 C 135 185, 80 188, 65 175',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo đuôi sam thẳng xuống biển rồi móc cong sang trái',
        checkpoints: [
          { x: 135, y: 95 },
          { x: 135, y: 140 },
          { x: 135, y: 165 },
          { x: 100, y: 185 },
          { x: 65, y: 175 }
        ]
      }
    ]
  },

  o: {
    id: 'o',
    char: 'o',
    phonemeId: 'o',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'All around the orange!',
    tipVi: 'Vòng tròn xoe một nét như quả cam mọng nước!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 100, y: 90 },
        endPoint: { x: 100, y: 90 },
        pathD: 'M 100 90 C 60 90, 60 150, 100 150 C 140 150, 140 90, 100 90',
        arrowAngleDeg: 180,
        instructionVi: 'Lượn một vòng tròn khép kín từ đỉnh sang trái rồi vòng lại',
        checkpoints: [
          { x: 100, y: 90 },
          { x: 65, y: 120 },
          { x: 100, y: 150 },
          { x: 135, y: 120 },
          { x: 100, y: 90 }
        ]
      }
    ]
  },

  u: {
    id: 'u',
    char: 'u',
    phonemeId: 'u',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down and under the umbrella, up and down to the puddle!',
    tipVi: 'Lượn cong dưới chiếc ô như chiếc cốc hứng nước, rồi kéo cuống xuống!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 65, y: 95 },
        endPoint: { x: 135, y: 150 },
        pathD: 'M 65 95 L 65 130 C 65 152, 135 152, 135 130 L 135 95 L 135 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo xuống, lượn đáy cốc cong lên, rồi kéo thẳng xuống chân',
        checkpoints: [
          { x: 65, y: 95 },
          { x: 65, y: 130 },
          { x: 100, y: 150 },
          { x: 135, y: 130 },
          { x: 135, y: 95 },
          { x: 135, y: 150 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'n',
      distinctionHintVi: 'Chữ u là chiếc cốc mở miệng lên trời hứng mưa 🥛, chữ n là mái hầm úp xuống 🚇!',
      mnemonicVisual: '🥛'
    }
  },

  l: {
    id: 'l',
    char: 'l',
    phonemeId: 'l',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the tall leg!',
    tipVi: 'Một chiếc chân cao kều thẳng tắp từ đỉnh xuống đáy!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 100, y: 35 },
        endPoint: { x: 100, y: 150 },
        pathD: 'M 100 35 L 100 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo một nét thẳng dài từ vạch đỉnh cao xuống đáy',
        checkpoints: [
          { x: 100, y: 35 },
          { x: 100, y: 75 },
          { x: 100, y: 115 },
          { x: 100, y: 150 }
        ]
      }
    ]
  },

  f: {
    id: 'f',
    char: 'f',
    phonemeId: 'f',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down the flower stem, and draw the leaves!',
    tipVi: 'Uốn cong cành hoa từ trên cao xuống, rồi gạch ngang cành lá!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 125, y: 45 },
        endPoint: { x: 95, y: 150 },
        pathD: 'M 125 45 C 115 32, 95 32, 95 50 L 95 150',
        arrowAngleDeg: 180,
        instructionVi: 'Uốn cong từ phải sang trái rồi kéo thẳng thân hoa xuống đáy',
        checkpoints: [
          { x: 125, y: 45 },
          { x: 105, y: 32 },
          { x: 95, y: 55 },
          { x: 95, y: 105 },
          { x: 95, y: 150 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 75, y: 90 },
        endPoint: { x: 125, y: 90 },
        pathD: 'M 75 90 L 125 90',
        arrowAngleDeg: 0,
        instructionVi: 'Gạch một đường ngang ngắn ngang thân',
        checkpoints: [
          { x: 75, y: 90 },
          { x: 100, y: 90 },
          { x: 125, y: 90 }
        ]
      }
    ]
  },

  // Confusion pair helper: q
  q: {
    id: 'q',
    char: 'q',
    phonemeId: 'qu',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Round her head, up past her earrings, down her ponytail with a flick!',
    tipVi: 'Vẽ đầu tròn bên TRÁI, kéo đuôi tóc dài xuống biển rồi móc sang phải!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 130, y: 105 },
        endPoint: { x: 130, y: 145 },
        pathD: 'M 130 105 C 120 92, 60 95, 60 120 C 60 148, 120 152, 130 145',
        arrowAngleDeg: 190,
        instructionVi: 'Vẽ khuôn mặt tròn bên TRÁI trước',
        checkpoints: [
          { x: 130, y: 105 },
          { x: 95, y: 94 },
          { x: 60, y: 120 },
          { x: 95, y: 150 },
          { x: 130, y: 145 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 130, y: 95 },
        endPoint: { x: 145, y: 175 },
        pathD: 'M 130 95 L 130 185 L 145 175',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo đuôi tóc dài xuống đáy rồi hất nhẹ sang phải',
        checkpoints: [
          { x: 130, y: 95 },
          { x: 130, y: 140 },
          { x: 130, y: 185 },
          { x: 145, y: 175 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'p',
      distinctionHintVi: 'Chữ q có bụng tròn bên TRÁI và móc đuôi sang phải, chữ p có bụng bên PHẢI!',
      mnemonicVisual: '👑'
    }
  },

  // Confusion pair helper: w
  w: {
    id: 'w',
    char: 'w',
    phonemeId: 'w',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Down, up, down, up the big ocean wave!',
    tipVi: 'Bé lướt sóng nhấp nhô: xuống, lên, xuống, lên!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 45, y: 95 },
        endPoint: { x: 155, y: 95 },
        pathD: 'M 45 95 L 75 150 L 100 110 L 125 150 L 155 95',
        arrowAngleDeg: 60,
        instructionVi: 'Lượn chéo xuống, chéo lên, chéo xuống rồi chéo lên như sóng biển',
        checkpoints: [
          { x: 45, y: 95 },
          { x: 75, y: 150 },
          { x: 100, y: 110 },
          { x: 125, y: 150 },
          { x: 155, y: 95 }
        ]
      }
    ],
    confusionPair: {
      confusedWith: 'm',
      distinctionHintVi: 'Chữ w nhấp nhô sóng nước dưới biển 🌊, còn chữ m là 2 ngọn núi cao ⛰️!',
      mnemonicVisual: '🌊'
    }
  },

  // Major Digraph: sh
  sh: {
    id: 'sh',
    char: 'sh',
    phonemeId: 'sh',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Hush! Snake meets Horse!',
    tipVi: 'Âm suỵt khẽ /ʃ/: Chú Rắn /s/ đứng cạnh Chú Ngựa /h/!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 80, y: 105 },
        endPoint: { x: 35, y: 145 },
        pathD: 'M 80 105 C 75 90, 45 88, 42 108 C 40 125, 80 125, 78 142 C 75 155, 40 155, 35 145',
        arrowAngleDeg: 210,
        instructionVi: 'Tô chữ s uốn lượn ở bên trái',
        checkpoints: [
          { x: 80, y: 105 },
          { x: 55, y: 92 },
          { x: 42, y: 115 },
          { x: 78, y: 135 },
          { x: 35, y: 145 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 110, y: 35 },
        endPoint: { x: 110, y: 150 },
        pathD: 'M 110 35 L 110 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo chân chú ngựa h cao thẳng xuống',
        checkpoints: [
          { x: 110, y: 35 },
          { x: 110, y: 90 },
          { x: 110, y: 150 }
        ]
      },
      {
        id: 3,
        startPoint: { x: 110, y: 110 },
        endPoint: { x: 165, y: 150 },
        pathD: 'M 110 110 C 120 92, 155 90, 165 115 L 165 150',
        arrowAngleDeg: 35,
        instructionVi: 'Vòng cong qua lưng ngựa h rồi kéo xuống đáy',
        checkpoints: [
          { x: 110, y: 110 },
          { x: 138, y: 92 },
          { x: 165, y: 115 },
          { x: 165, y: 150 }
        ]
      }
    ]
  },

  // Major Digraph: ch
  ch: {
    id: 'ch',
    char: 'ch',
    phonemeId: 'ch',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Choo choo train: Cat meets Horse!',
    tipVi: 'Âm xình xịch đoàn tàu /tʃ/: Chú Mèo /c/ đi cùng Chú Ngựa /h/!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 80, y: 105 },
        endPoint: { x: 80, y: 140 },
        pathD: 'M 80 105 C 70 90, 35 92, 35 120 C 35 150, 70 152, 80 140',
        arrowAngleDeg: 200,
        instructionVi: 'Uốn cong chữ c ở bên trái',
        checkpoints: [
          { x: 80, y: 105 },
          { x: 55, y: 92 },
          { x: 35, y: 120 },
          { x: 55, y: 150 },
          { x: 80, y: 140 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 110, y: 35 },
        endPoint: { x: 110, y: 150 },
        pathD: 'M 110 35 L 110 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo chân chú ngựa h cao thẳng xuống',
        checkpoints: [
          { x: 110, y: 35 },
          { x: 110, y: 90 },
          { x: 110, y: 150 }
        ]
      },
      {
        id: 3,
        startPoint: { x: 110, y: 110 },
        endPoint: { x: 165, y: 150 },
        pathD: 'M 110 110 C 120 92, 155 90, 165 115 L 165 150',
        arrowAngleDeg: 35,
        instructionVi: 'Vòng cong qua lưng ngựa h rồi kéo xuống đáy',
        checkpoints: [
          { x: 110, y: 110 },
          { x: 138, y: 92 },
          { x: 165, y: 115 },
          { x: 165, y: 150 }
        ]
      }
    ]
  },

  // Major Digraph: th
  th: {
    id: 'th',
    char: 'th',
    phonemeId: 'th_unvoiced',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Clown sticking tongue: Tower meets Horse!',
    tipVi: 'Ngọn tháp t đứng cạnh Chú ngựa h!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 55, y: 55 },
        endPoint: { x: 80, y: 148 },
        pathD: 'M 55 55 L 55 138 C 55 150, 70 152, 80 148',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo tháp t xuống có móc nhẹ',
        checkpoints: [
          { x: 55, y: 55 },
          { x: 55, y: 100 },
          { x: 55, y: 138 },
          { x: 80, y: 148 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 35, y: 95 },
        endPoint: { x: 75, y: 95 },
        pathD: 'M 35 95 L 75 95',
        arrowAngleDeg: 0,
        instructionVi: 'Gạch ngang chữ t',
        checkpoints: [{ x: 35, y: 95 }, { x: 75, y: 95 }]
      },
      {
        id: 3,
        startPoint: { x: 110, y: 35 },
        endPoint: { x: 110, y: 150 },
        pathD: 'M 110 35 L 110 150',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo chân chú ngựa h cao thẳng xuống',
        checkpoints: [
          { x: 110, y: 35 },
          { x: 110, y: 90 },
          { x: 110, y: 150 }
        ]
      },
      {
        id: 4,
        startPoint: { x: 110, y: 110 },
        endPoint: { x: 165, y: 150 },
        pathD: 'M 110 110 C 120 92, 155 90, 165 115 L 165 150',
        arrowAngleDeg: 35,
        instructionVi: 'Vòng cong qua lưng ngựa h rồi kéo xuống đáy',
        checkpoints: [
          { x: 110, y: 110 },
          { x: 138, y: 92 },
          { x: 165, y: 115 },
          { x: 165, y: 150 }
        ]
      }
    ]
  },

  // Major Digraph: ee
  ee: {
    id: 'ee',
    char: 'ee',
    phonemeId: 'ee',
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: 'Two twin eggs smiling: /i:/!',
    tipVi: 'Hai quả trứng sinh đôi cùng cười tươi!',
    strokes: [
      {
        id: 1,
        startPoint: { x: 35, y: 120 },
        endPoint: { x: 90, y: 142 },
        pathD: 'M 35 120 L 90 120 C 90 95, 35 92, 35 120 C 35 148, 85 152, 90 142',
        arrowAngleDeg: 0,
        instructionVi: 'Tô quả trứng e thứ nhất',
        checkpoints: [
          { x: 35, y: 120 },
          { x: 90, y: 120 },
          { x: 62, y: 92 },
          { x: 35, y: 120 },
          { x: 62, y: 150 },
          { x: 90, y: 142 }
        ]
      },
      {
        id: 2,
        startPoint: { x: 110, y: 120 },
        endPoint: { x: 165, y: 142 },
        pathD: 'M 110 120 L 165 120 C 165 95, 110 92, 110 120 C 110 148, 160 152, 165 142',
        arrowAngleDeg: 0,
        instructionVi: 'Tô quả trứng e thứ hai',
        checkpoints: [
          { x: 110, y: 120 },
          { x: 165, y: 120 },
          { x: 137, y: 92 },
          { x: 110, y: 120 },
          { x: 137, y: 150 },
          { x: 165, y: 142 }
        ]
      }
    ]
  }
};

/**
 * Fallback generator for letters not explicitly hardcoded in the lookup table:
 * Provides a standard lowercase cursive/print guide.
 */
export function getLetterStrokeData(phonemeId: string): LetterStrokeData {
  const cleanId = phonemeId.toLowerCase().replace(/[\/\[\]]/g, '').trim();
  if (LETTER_STROKES_DATA[cleanId]) {
    return LETTER_STROKES_DATA[cleanId];
  }

  // Look for single char match
  const firstChar = cleanId.charAt(0);
  if (LETTER_STROKES_DATA[firstChar]) {
    return {
      ...LETTER_STROKES_DATA[firstChar],
      id: cleanId,
      phonemeId: cleanId,
      char: cleanId
    };
  }

  // Default fallback for any grapheme
  return {
    id: cleanId,
    char: cleanId,
    phonemeId: cleanId,
    viewBox: '0 0 200 200',
    headlineY: 30,
    midlineY: 90,
    baselineY: 150,
    descenderY: 185,
    mnemonicEn: `Trace the letter ${cleanId}!`,
    tipVi: `Bé hãy tô theo nét chữ ${cleanId} thật đẹp nhé!`,
    strokes: [
      {
        id: 1,
        startPoint: { x: 60, y: 95 },
        endPoint: { x: 140, y: 150 },
        pathD: 'M 60 95 L 60 150 L 140 150 L 140 95',
        arrowAngleDeg: 90,
        instructionVi: 'Kéo theo đường nét chấm',
        checkpoints: [
          { x: 60, y: 95 },
          { x: 60, y: 150 },
          { x: 140, y: 150 },
          { x: 140, y: 95 }
        ]
      }
    ]
  };
}

// Confusion pair definitions for visual/auditory discrimination drill
export interface ConfusionPairItem {
  id: string;
  charA: string;
  charB: string;
  phonemeIdA: string;
  phonemeIdB: string;
  soundA: string;
  soundB: string;
  titleVi: string;
  distinctionRuleVi: string;
  mnemonicVisualA: string;
  mnemonicVisualB: string;
  mnemonicTextA: string;
  mnemonicTextB: string;
}

export const CONFUSION_PAIRS_CATALOG: ConfusionPairItem[] = [
  {
    id: 'b_vs_d',
    charA: 'b',
    charB: 'd',
    phonemeIdA: 'b',
    phonemeIdB: 'd',
    soundA: '/b/',
    soundB: '/d/',
    titleVi: 'Phân Biệt Cặp Chữ b & d',
    distinctionRuleVi: 'Chữ b: Gậy bóng chày trước, bóng sau (bụng bên phải). Chữ d: Trống trước, dùi sau (bụng bên trái)!',
    mnemonicVisualA: '🏏⚾',
    mnemonicVisualB: '🥁🥢',
    mnemonicTextA: 'b = Bat then Ball (Gậy rồi Bóng)',
    mnemonicTextB: 'd = Drum then Drumstick (Trống rồi Dùi)'
  },
  {
    id: 'p_vs_q',
    charA: 'p',
    charB: 'q',
    phonemeIdA: 'p',
    phonemeIdB: 'qu',
    soundA: '/p/',
    soundB: '/kw/',
    titleVi: 'Phân Biệt Cặp Chữ p & q',
    distinctionRuleVi: 'Chữ p: Que dài thò xuống, bóng bay bên phải. Chữ q: Đầu tròn bên trái, tóc dài có móc!',
    mnemonicVisualA: '🎈',
    mnemonicVisualB: '👑',
    mnemonicTextA: 'p = Pop Balloon on Right (Bóng phập phồng bên phải)',
    mnemonicTextB: 'q = Queen with Ponytail on Left (Nữ hoàng búi tóc)'
  },
  {
    id: 'm_vs_w',
    charA: 'm',
    charB: 'w',
    phonemeIdA: 'm',
    phonemeIdB: 'w',
    soundA: '/m/',
    soundB: '/w/',
    titleVi: 'Phân Biệt Cặp Chữ m & w',
    distinctionRuleVi: 'Chữ m: Hai ngọn núi cao chọc lên trời. Chữ w: Hai con sóng nhấp nhô dưới nước!',
    mnemonicVisualA: '⛰️',
    mnemonicVisualB: '🌊',
    mnemonicTextA: 'm = Two Mountains high (Hai ngọn núi cao)',
    mnemonicTextB: 'w = Water Waves dip low (Sóng biển nhấp nhô)'
  },
  {
    id: 'n_vs_u',
    charA: 'n',
    charB: 'u',
    phonemeIdA: 'n',
    phonemeIdB: 'u',
    soundA: '/n/',
    soundB: '/ʌ/',
    titleVi: 'Phân Biệt Cặp Chữ n & u',
    distinctionRuleVi: 'Chữ n: Mái hầm chui úp xuống. Chữ u: Chiếc cốc ngửa miệng lên trời hứng nước!',
    mnemonicVisualA: '🚇',
    mnemonicVisualB: '🥛',
    mnemonicTextA: 'n = Net / Tunnel arch (Mái hầm chui)',
    mnemonicTextB: 'u = Umbrella / Cup smile (Cốc nước ngửa lên)'
  }
];
