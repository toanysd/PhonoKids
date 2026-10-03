// Decodable Ehon Storybooks Dataset (28 Stories covering Groups 1 - 7 across Levels 1 - 4)

function generateWordTimings(sentence) {
  const words = sentence.trim().split(/\s+/);
  let currentMs = 0;
  return words.map(w => {
    const cleanWord = w.toLowerCase().replace(/[^a-z0-9]/g, '');
    const duration = Math.max(300, cleanWord.length * 90);
    const timing = {
      word: w,
      cleanWord,
      startMs: currentMs,
      endMs: currentMs + duration
    };
    currentMs += duration + 70;
    return timing;
  });
}

function makePage(pageNumber, sentence, vietnameseMeaning, backgroundTheme, sceneryEmoji, visual, hotspots, speakingTargetWord, comprehension) {
  return {
    pageNumber,
    sentence,
    vietnameseMeaning,
    backgroundTheme,
    sceneryEmoji,
    visual,
    wordsTiming: generateWordTimings(sentence),
    hotspots: hotspots || [],
    speakingTargetWord: speakingTargetWord || (sentence.split(/\s+/)[1] || 'cat').toLowerCase().replace(/[^a-z0-9]/g, ''),
    comprehension: comprehension || null
  };
}

const STORIES = [
  // ================= GROUP 1 (STAGE 1: 3-4 Tuổi - Level 1) =================
  {
    id: 'story_cat_sat',
    title: 'The Cat Sat',
    level: 1,
    levelName: 'Level 1: Nhóm âm 1 & 2',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐱',
    coverVisual: { url: '/assets/ehon/cat_mat.jpg', alt: 'Tranh Ehon chú mèo cam ngồi sưởi nắng trên tấm thảm len' },
    summaryVi: 'Câu chuyện chú mèo mướp lười biếng ngồi sưởi nắng trên chiếc thảm êm.',
    targetPhonics: ['s', 'a', 't', 'c', 'p'],
    sightWords: ['the', 'on'],
    pages: [
      makePage(1, 'The cat sat.', 'Chú mèo ngồi yên.', 'bg-amber-100', '🏡',
        { url: '/assets/ehon/cat_mat.jpg', alt: 'Tranh Ehon chú mèo ngồi yên trên thảm' },
        [
          { id: 'hs_cat', label: 'Cat', xPercent: 45, yPercent: 48, emoji: '🐱', soundName: 'meow', speechText: 'Cat! Meow!', animationType: 'jump' },
          { id: 'hs_flower', label: 'Flower', xPercent: 80, yPercent: 65, emoji: '🌸', soundName: 'sparkle', speechText: 'A pink flower!', animationType: 'spin' }
        ],
        'cat',
        { questionText: 'Who sat down?', questionAudioText: 'Who sat down? Can you tap the right friend?', options: [{ id: 'opt_cat', text: 'Cat', emoji: '🐱', isCorrect: true }, { id: 'opt_dog', text: 'Dog', emoji: '🐶', isCorrect: false }] }
      ),
      makePage(2, 'The cat sat on a mat.', 'Chú mèo ngồi trên chiếc thảm êm.', 'bg-rose-100', '🧶',
        { url: '/assets/ehon/cat_mat.jpg', alt: 'Tranh Ehon chú mèo cuộn tròn trên thảm đỏ' },
        [
          { id: 'hs_mat', label: 'Mat', xPercent: 50, yPercent: 75, emoji: '🧶', soundName: 'pop', speechText: 'A soft warm mat!', animationType: 'bounce' }
        ],
        'mat',
        { questionText: 'Where did the cat sit?', questionAudioText: 'Where did the cat sit?', options: [{ id: 'opt_mat', text: 'On a mat', emoji: '🧶', isCorrect: true }, { id: 'opt_pan', text: 'On a pan', emoji: '🍳', isCorrect: false }] }
      ),
      makePage(3, 'The cat takes a sweet nap.', 'Mèo con ngủ trưa thật ngoan.', 'bg-indigo-100', '😴',
        { url: '/assets/ehon/cat_nap.jpg', alt: 'Tranh Ehon mèo con chợp mắt ngủ trưa' },
        [
          { id: 'hs_nap', label: 'Nap', xPercent: 55, yPercent: 55, emoji: '💤', soundName: 'magic', speechText: 'Sweet dreams little cat!', animationType: 'spin' }
        ],
        'nap',
        { questionText: 'What is the cat doing?', questionAudioText: 'What is the cat doing?', options: [{ id: 'opt_nap', text: 'Taking a nap', emoji: '😴', isCorrect: true }, { id: 'opt_run', text: 'Running fast', emoji: '🏃', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_sam_ant',
    title: 'Sam and the Ant',
    level: 1,
    levelName: 'Level 1: Nhóm âm 1',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐜',
    coverVisual: { url: '/assets/ehon/sam_pat_ant.jpg', alt: 'Tranh Ehon bạn Sam cúi chào chú kiến nhỏ' },
    summaryVi: 'Bạn Sam gặp chú kiến bé nhỏ trên chiếc chảo rán và cùng kết bạn.',
    targetPhonics: ['s', 'a', 't', 'p', 'n'],
    sightWords: ['see', 'in', 'the'],
    pages: [
      makePage(1, 'Sam sees an ant in the pan.', 'Sam nhìn thấy một chú kiến nhỏ trên chảo.', 'bg-emerald-100', '🍳',
        { url: '/assets/ehon/sam_pan.jpg', alt: 'Tranh Ehon bạn Sam nhìn chú kiến trên chảo' },
        [
          { id: 'hs_ant', label: 'Ant', xPercent: 52, yPercent: 62, emoji: '🐜', soundName: 'pop', speechText: 'Tiny ant!', animationType: 'bounce' }
        ],
        'ant',
        { questionText: 'What does Sam see?', questionAudioText: 'What does Sam see in the pan?', options: [{ id: 'opt_ant', text: 'An ant', emoji: '🐜', isCorrect: true }, { id: 'opt_pig', text: 'A pig', emoji: '🐷', isCorrect: false }] }
      ),
      makePage(2, 'Sam pats the gentle ant.', 'Sam vỗ về chú kiến nhỏ thân thương.', 'bg-teal-100', '👋',
        { url: '/assets/ehon/sam_pat_ant.jpg', alt: 'Tranh Ehon bạn Sam nhẹ nhàng vuốt ve chú kiến' },
        [
          { id: 'hs_pat', label: 'Pat', xPercent: 48, yPercent: 50, emoji: '👋', soundName: 'sparkle', speechText: 'Pat pat!', animationType: 'jump' }
        ],
        'pat',
        { questionText: 'Does Sam like the ant?', questionAudioText: 'Does Sam like the ant?', options: [{ id: 'opt_yes', text: 'Yes, he pats it', emoji: '😊', isCorrect: true }, { id: 'opt_no', text: 'No, he runs', emoji: '🏃', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_sun_pig',
    title: 'The Sun and the Pink Pig',
    level: 1,
    levelName: 'Level 1: Nhóm âm 1 (s, p, t, n)',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🐷',
    coverVisual: { url: '/assets/ehon/pig.jpg', alt: 'Tranh Ehon chú heo hồng tung tăng dưới nắng ấm' },
    summaryVi: 'Chú heo hồng tắm nắng ấm và đùa vui bên bãi cỏ xanh.',
    targetPhonics: ['s', 'p', 't', 'n', 'i'],
    sightWords: ['the', 'is', 'in'],
    pages: [
      makePage(1, 'The warm sun is in the sky.', 'Mặt trời ấm áp tỏa sáng trên bầu trời cao.', 'bg-amber-100', '☀️',
        { url: '/assets/ehon/sun.jpg', alt: 'Tranh Ehon mặt trời rạng ngời tỏa tia nắng' },
        [
          { id: 'hs_sun', label: 'Sun', xPercent: 50, yPercent: 35, emoji: '☀️', soundName: 'sparkle', speechText: 'Warm golden sun!', animationType: 'spin' }
        ],
        'sun',
        { questionText: 'What shines in the sky?', questionAudioText: 'What shines in the sky?', options: [{ id: 'opt_sun', text: 'The sun', emoji: '☀️', isCorrect: true }, { id: 'opt_moon', text: 'The moon', emoji: '🌙', isCorrect: false }] }
      ),
      makePage(2, 'The happy pink pig sits in the sun.', 'Chú heo hồng vui sướng ngồi sưởi nắng ấm.', 'bg-rose-100', '🐷',
        { url: '/assets/ehon/pig.jpg', alt: 'Tranh Ehon chú heo hồng mỉm cười sưởi nắng' },
        [
          { id: 'hs_pig', label: 'Pig', xPercent: 50, yPercent: 60, emoji: '🐷', soundName: 'pop', speechText: 'Oink oink! Happy pig!', animationType: 'jump' }
        ],
        'pig',
        { questionText: 'Who sits in the warm sun?', questionAudioText: 'Who sits in the warm sun?', options: [{ id: 'opt_pig', text: 'The pink pig', emoji: '🐷', isCorrect: true }, { id: 'opt_fox', text: 'The fox', emoji: '🦊', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_tin_pan',
    title: 'The Tin Pan Band',
    level: 1,
    levelName: 'Level 1: Nhóm âm 1 (t, p, n, i)',
    stage: 1,
    ageBand: '3 – 4 Tuổi (Mầm non)',
    coverEmoji: '🥁',
    coverVisual: { url: '/assets/ehon/ant_pan.jpg', alt: 'Tranh Ehon chiếc chảo thiếc gõ nhịp rộn rã' },
    summaryVi: 'Các bạn nhỏ gõ nắp hộp thiếc và chảo nhỏ tạo thành ban nhạc tí hon.',
    targetPhonics: ['t', 'p', 'n', 'i', 'a'],
    sightWords: ['tap', 'the', 'on'],
    pages: [
      makePage(1, 'Tap the tin pan, tap tap tap!', 'Gõ vào chảo thiếc, gõ cắc cùm cum!', 'bg-yellow-100', '🥫',
        { url: '/assets/ehon/ant_pan.jpg', alt: 'Tranh Ehon chiếc chảo thiếc phát ra tiếng vui tai' },
        [
          { id: 'hs_tin', label: 'Tin', xPercent: 45, yPercent: 55, emoji: '🥫', soundName: 'pop', speechText: 'Tap tap tap!', animationType: 'bounce' }
        ],
        'tap',
        { questionText: 'What sound does the pan make?', questionAudioText: 'What sound does the pan make?', options: [{ id: 'opt_tap', text: 'Tap tap tap', emoji: '🎵', isCorrect: true }, { id: 'opt_quack', text: 'Quack quack', emoji: '🦆', isCorrect: false }] }
      ),
      makePage(2, 'Sit and tap the tin top.', 'Ngồi xuống và cùng gõ nắp hộp thiếc vui ca.', 'bg-sky-100', '🪑',
        { url: '/assets/ehon/sit.jpg', alt: 'Tranh Ehon em bé ngồi ngoan gõ nhịp điệu' },
        [
          { id: 'hs_sit', label: 'Sit', xPercent: 50, yPercent: 60, emoji: '🪑', soundName: 'magic', speechText: 'Sit and play music!', animationType: 'spin' }
        ],
        'sit',
        { questionText: 'What do the friends do?', questionAudioText: 'What do the friends do?', options: [{ id: 'opt_sit', text: 'Sit and play', emoji: '🎶', isCorrect: true }, { id: 'opt_cry', text: 'Cry sad tears', emoji: '😢', isCorrect: false }] }
      )
    ]
  },

  // ================= GROUP 2 (STAGE 1 & 2: 3-5 Tuổi - Level 1) =================
  {
    id: 'story_red_hat',
    title: 'The Red Hat',
    level: 1,
    levelName: 'Level 1: Nhóm âm 2 (c, h, r, m, d)',
    stage: 1,
    ageBand: '3 – 5 Tuổi',
    coverEmoji: '👒',
    coverVisual: { url: '/assets/ehon/cat.jpg', alt: 'Tranh Ehon chú mèo đội chiếc mũ đỏ xinh' },
    summaryVi: 'Chú mèo tìm thấy chiếc mũ đỏ rộng vành và thử đội lên đầu.',
    targetPhonics: ['r', 'e', 'd', 'h', 'a', 't'],
    sightWords: ['a', 'has', 'the'],
    pages: [
      makePage(1, 'The cat has a red hat.', 'Chú mèo có một chiếc mũ màu đỏ.', 'bg-rose-100', '👒',
        { url: '/assets/ehon/cat.jpg', alt: 'Tranh Ehon chú mèo ngắm nhìn chiếc mũ đỏ' },
        [
          { id: 'hs_hat', label: 'Hat', xPercent: 50, yPercent: 30, emoji: '👒', soundName: 'magic', speechText: 'A pretty red hat!', animationType: 'spin' }
        ],
        'hat',
        { questionText: 'What color is the hat?', questionAudioText: 'What color is the hat?', options: [{ id: 'opt_red', text: 'Red', emoji: '🔴', isCorrect: true }, { id: 'opt_blue', text: 'Blue', emoji: '🔵', isCorrect: false }] }
      ),
      makePage(2, 'The cat and dog run in the sun.', 'Mèo và cún cùng chạy nhảy dưới nắng ấm.', 'bg-amber-100', '🏃',
        { url: '/assets/ehon/hen_dog.jpg', alt: 'Tranh Ehon cún và các bạn cùng chạy nhảy' },
        [
          { id: 'hs_run', label: 'Run', xPercent: 45, yPercent: 65, emoji: '🏃', soundName: 'pop', speechText: 'Run fast!', animationType: 'jump' }
        ],
        'run',
        { questionText: 'Who runs in the sun?', questionAudioText: 'Who runs in the sun?', options: [{ id: 'opt_both', text: 'Cat and dog', emoji: '🐱🐶', isCorrect: true }, { id: 'opt_fish', text: 'Only fish', emoji: '🐟', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_dog_mud',
    title: 'Dog in the Mud',
    level: 1,
    levelName: 'Level 1: Nhóm âm 2 (d, o, g, m, u)',
    stage: 1,
    ageBand: '3 – 5 Tuổi',
    coverEmoji: '🐶',
    coverVisual: { url: '/assets/ehon/dog.jpg', alt: 'Tranh Ehon chú cún tinh nghịch vẫy đuôi' },
    summaryVi: 'Chú cún nghịch đất bùn rồi được mẹ tắm sạch thơm tho.',
    targetPhonics: ['d', 'o', 'g', 'm', 'u'],
    sightWords: ['in', 'the', 'and'],
    pages: [
      makePage(1, 'The dog digs in the wet mud.', 'Chú cún đào bới trong vũng bùn ướt.', 'bg-amber-100', '🪵',
        { url: '/assets/ehon/dog.jpg', alt: 'Tranh Ehon chú cún nghịch đất bùn' },
        [
          { id: 'hs_dig', label: 'Dig', xPercent: 50, yPercent: 70, emoji: '⛏️', soundName: 'pop', speechText: 'Dig dig dig!', animationType: 'bounce' }
        ],
        'dig',
        { questionText: 'Where does the dog dig?', questionAudioText: 'Where does the dog dig?', options: [{ id: 'opt_mud', text: 'In the mud', emoji: '🪵', isCorrect: true }, { id: 'opt_bed', text: 'On the bed', emoji: '🛏️', isCorrect: false }] }
      ),
      makePage(2, 'Dad gives the puppy a warm hug.', 'Bố trao cho chú cún một cái ôm ấm áp.', 'bg-emerald-100', '🤗',
        { url: '/assets/ehon/puppy_hug.jpg', alt: 'Tranh Ehon vòng tay ôm ấm áp yêu thương của bố dành cho chú cún' },
        [
          { id: 'hs_hug', label: 'Hug', xPercent: 50, yPercent: 50, emoji: '🤗', soundName: 'sparkle', speechText: 'A big warm hug!', animationType: 'jump' }
        ],
        'hug',
        { questionText: 'Who gives a warm hug?', questionAudioText: 'Who gives a warm hug?', options: [{ id: 'opt_dad', text: 'Dad', emoji: '👨', isCorrect: true }, { id: 'opt_fox', text: 'A fox', emoji: '🦊', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_hen_egg',
    title: 'Hen and Her Warm Egg',
    level: 1,
    levelName: 'Level 1: Nhóm âm 2 (h, e, n, g)',
    stage: 1,
    ageBand: '3 – 5 Tuổi',
    coverEmoji: '🐔',
    coverVisual: { url: '/assets/ehon/hen.jpg', alt: 'Tranh Ehon cô gà mái ấp quả trứng tròn' },
    summaryVi: 'Cô gà mái đỏ chăm sóc quả trứng nhỏ trong tổ rơm ấm.',
    targetPhonics: ['h', 'e', 'n', 'e', 'g'],
    sightWords: ['the', 'has', 'in'],
    pages: [
      makePage(1, 'The red hen has a warm egg.', 'Cô gà mái đỏ có một quả trứng ấm.', 'bg-orange-100', '🥚',
        { url: '/assets/ehon/hen.jpg', alt: 'Tranh Ehon cô gà mái bên quả trứng' },
        [
          { id: 'hs_egg', label: 'Egg', xPercent: 55, yPercent: 65, emoji: '🥚', soundName: 'sparkle', speechText: 'A precious egg!', animationType: 'spin' }
        ],
        'egg',
        { questionText: 'What does the hen have?', questionAudioText: 'What does the hen have in her nest?', options: [{ id: 'opt_egg', text: 'An egg', emoji: '🥚', isCorrect: true }, { id: 'opt_hat', text: 'A hat', emoji: '👒', isCorrect: false }] }
      ),
      makePage(2, 'The hen sits in her cozy nest.', 'Cô gà mái ngồi ấp trong tổ ấm êm.', 'bg-amber-100', '🪹',
        { url: '/assets/ehon/hen.jpg', alt: 'Tranh Ehon gà mái trong tổ rơm' },
        [
          { id: 'hs_nest', label: 'Nest', xPercent: 50, yPercent: 60, emoji: '🪹', soundName: 'magic', speechText: 'Warm cozy nest!', animationType: 'bounce' }
        ],
        'hen',
        { questionText: 'Where does the hen sit?', questionAudioText: 'Where does the hen sit?', options: [{ id: 'opt_nest', text: 'In her nest', emoji: '🪹', isCorrect: true }, { id: 'opt_car', text: 'In a car', emoji: '🚗', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_kid_kit',
    title: 'The Kid and the Art Kit',
    level: 1,
    levelName: 'Level 1: Nhóm âm 2 (k, i, d, t)',
    stage: 1,
    ageBand: '3 – 5 Tuổi',
    coverEmoji: '🎨',
    coverVisual: { url: '/assets/ehon/sit.jpg', alt: 'Tranh Ehon bạn nhỏ ngồi vẽ tranh sắc màu' },
    summaryVi: 'Em bé dùng bộ cọ vẽ tô màu những bức tranh rực rỡ.',
    targetPhonics: ['k', 'i', 'd', 't', 'p'],
    sightWords: ['a', 'has', 'with'],
    pages: [
      makePage(1, 'A happy kid has an art kit.', 'Em bé vui vẻ có một bộ cọ vẽ.', 'bg-sky-100', '🧰',
        { url: '/assets/ehon/sit.jpg', alt: 'Tranh Ehon bạn nhỏ bên bộ vẽ tranh' },
        [
          { id: 'hs_kit', label: 'Kit', xPercent: 60, yPercent: 65, emoji: '🧰', soundName: 'sparkle', speechText: 'Colorful art kit!', animationType: 'bounce' }
        ],
        'kid',
        { questionText: 'Who has an art kit?', questionAudioText: 'Who has an art kit?', options: [{ id: 'opt_kid', text: 'A happy kid', emoji: '🧒', isCorrect: true }, { id: 'opt_rat', text: 'A rat', emoji: '🐀', isCorrect: false }] }
      ),
      makePage(2, 'Dip the pen and draw a red star.', 'Chấm bút mực và vẽ một ngôi sao đỏ.', 'bg-rose-100', '⭐',
        { url: '/assets/ehon/star.jpg', alt: 'Tranh Ehon ngôi sao vẽ sắc màu' },
        [
          { id: 'hs_star', label: 'Star', xPercent: 50, yPercent: 40, emoji: '⭐', soundName: 'magic', speechText: 'Twinkle twinkle star!', animationType: 'spin' }
        ],
        'dip',
        { questionText: 'What did the kid draw?', questionAudioText: 'What did the kid draw?', options: [{ id: 'opt_star', text: 'A red star', emoji: '⭐', isCorrect: true }, { id: 'opt_mud', text: 'Mud', emoji: '🪵', isCorrect: false }] }
      )
    ]
  },

  // ================= GROUP 3 (STAGE 2: 4-5 Tuổi - Level 2) =================
  {
    id: 'story_frog_log',
    title: 'The Green Frog on a Log',
    level: 2,
    levelName: 'Level 2: Nhóm âm 3 (g, o, u, l, f, b)',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🐸',
    coverVisual: { url: '/assets/ehon/frog_log.jpg', alt: 'Tranh Ehon chú ếch xanh ngồi trên khúc gỗ bên ao' },
    summaryVi: 'Chú ếch xanh ngồi trên khúc gỗ ngắm sương mù rồi nhảy tõm xuống ao.',
    targetPhonics: ['f', 'r', 'o', 'g', 'l'],
    sightWords: ['on', 'the', 'into'],
    pages: [
      makePage(1, 'A green frog sat on a brown log.', 'Chú ếch xanh ngồi trên khúc gỗ nâu.', 'bg-emerald-100', '🪵',
        { url: '/assets/ehon/frog_log.jpg', alt: 'Tranh Ehon chú ếch ngồi trên khúc gỗ tròn' },
        [
          { id: 'hs_frog', label: 'Frog', xPercent: 45, yPercent: 50, emoji: '🐸', soundName: 'pop', speechText: 'Ribbit! Green frog!', animationType: 'jump' }
        ],
        'frog',
        { questionText: 'Where did the frog sit?', questionAudioText: 'Where did the frog sit?', options: [{ id: 'opt_log', text: 'On a log', emoji: '🪵', isCorrect: true }, { id: 'opt_bus', text: 'On a bus', emoji: '🚌', isCorrect: false }] }
      ),
      makePage(2, 'The frog hops into the clear pond.', 'Chú ếch nhảy tõm xuống làn nước ao trong vắt.', 'bg-teal-100', '🏞️',
        { url: '/assets/ehon/frog_log.jpg', alt: 'Tranh Ehon chú ếch nhảy tõm xuống ao biếc' },
        [
          { id: 'hs_hop', label: 'Hop', xPercent: 50, yPercent: 60, emoji: '💦', soundName: 'magic', speechText: 'Splash! Hop in!', animationType: 'bounce' }
        ],
        'hop',
        { questionText: 'Where does the frog hop?', questionAudioText: 'Where does the frog hop?', options: [{ id: 'opt_pond', text: 'Into the pond', emoji: '🌊', isCorrect: true }, { id: 'opt_bed', text: 'Into bed', emoji: '🛏️', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_big_bug',
    title: 'The Big Bug in the Rug',
    level: 2,
    levelName: 'Level 2: Nhóm âm 3 (b, u, g, r)',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🪲',
    coverVisual: { url: '/assets/ehon/bug_rug.jpg', alt: 'Tranh Ehon chú bọ rùa nhỏ nấp trên thảm len' },
    summaryVi: 'Chú bọ cánh cam tí hon trốn trong thảm len ấm áp.',
    targetPhonics: ['b', 'u', 'g', 'r', 'u'],
    sightWords: ['see', 'the', 'in'],
    pages: [
      makePage(1, 'I see a big green bug in the rug.', 'Bé nhìn thấy một chú bọ cánh cam trên thảm.', 'bg-amber-100', '🧶',
        { url: '/assets/ehon/bug_rug.jpg', alt: 'Tranh Ehon chú bọ trên tấm thảm' },
        [
          { id: 'hs_bug', label: 'Bug', xPercent: 55, yPercent: 65, emoji: '🪲', soundName: 'pop', speechText: 'Tiny cute bug!', animationType: 'spin' }
        ],
        'bug',
        { questionText: 'What is on the rug?', questionAudioText: 'What is on the rug?', options: [{ id: 'opt_bug', text: 'A big bug', emoji: '🪲', isCorrect: true }, { id: 'opt_fox', text: 'A fox', emoji: '🦊', isCorrect: false }] }
      ),
      makePage(2, 'The bug drinks from a yellow cup.', 'Chú bọ nhấp giọt sương từ chiếc cốc vàng.', 'bg-yellow-100', '☕',
        { url: '/assets/ehon/cup.jpg', alt: 'Tranh Ehon chiếc cốc vàng thơm mát' },
        [
          { id: 'hs_cup', label: 'Cup', xPercent: 50, yPercent: 50, emoji: '☕', soundName: 'sparkle', speechText: 'Sweet sip from a cup!', animationType: 'bounce' }
        ],
        'cup',
        { questionText: 'What does the bug drink from?', questionAudioText: 'What does the bug drink from?', options: [{ id: 'opt_cup', text: 'A yellow cup', emoji: '☕', isCorrect: true }, { id: 'opt_tin', text: 'A tin box', emoji: '🥫', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_fox_box',
    title: 'Fox in the Box',
    level: 2,
    levelName: 'Level 2: Nhóm âm 3 (f, o, x, b)',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🦊',
    coverVisual: { url: '/assets/ehon/fox_box.jpg', alt: 'Tranh Ehon chú cáo cam chui vào chiếc hộp gỗ' },
    summaryVi: 'Chú cáo tinh nghịch trốn trong chiếc hộp quà sắc màu.',
    targetPhonics: ['f', 'o', 'x', 'b', 's'],
    sightWords: ['the', 'is', 'in'],
    pages: [
      makePage(1, 'The clever fox is in the big box.', 'Chú cáo thông minh trốn trong chiếc hộp lớn.', 'bg-orange-100', '📦',
        { url: '/assets/ehon/fox_box.jpg', alt: 'Tranh Ehon chú cáo lấp ló trong hộp' },
        [
          { id: 'hs_fox', label: 'Fox', xPercent: 50, yPercent: 50, emoji: '🦊', soundName: 'pop', speechText: 'Peekaboo, friendly fox!', animationType: 'jump' }
        ],
        'fox',
        { questionText: 'Who is in the box?', questionAudioText: 'Who is in the box?', options: [{ id: 'opt_fox', text: 'The clever fox', emoji: '🦊', isCorrect: true }, { id: 'opt_hen', text: 'The red hen', emoji: '🐔', isCorrect: false }] }
      ),
      makePage(2, 'Six little birds look at the fox.', 'Sáu chú chim nhỏ ngắm nhìn chú cáo hiền lành.', 'bg-sky-100', '🐦',
        { url: '/assets/ehon/fox_box.jpg', alt: 'Tranh Ehon các bạn nhỏ ngắm nhìn chú cáo trong hộp' },
        [
          { id: 'hs_birds', label: 'Birds', xPercent: 55, yPercent: 30, emoji: '🐦', soundName: 'magic', speechText: 'Chirp chirp!', animationType: 'spin' }
        ],
        'six',
        { questionText: 'How many birds look at the fox?', questionAudioText: 'How many birds look at the fox?', options: [{ id: 'opt_six', text: 'Six birds', emoji: '6️⃣', isCorrect: true }, { id: 'opt_ten', text: 'Ten birds', emoji: '🔟', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_red_hen',
    title: 'Red Hen at the Farm',
    level: 2,
    levelName: 'Level 2: Nhóm âm 2 & 3 (h, e, n, f, b)',
    stage: 2,
    ageBand: '4 – 5 Tuổi (Mầm non lớn)',
    coverEmoji: '🐔',
    coverVisual: { url: '/assets/ehon/hen.jpg', alt: 'Tranh Ehon cô gà mái đỏ xinh xắn' },
    summaryVi: 'Cô gà mái đỏ chăm chỉ trồng lúa mạch và làm bánh thơm lừng.',
    targetPhonics: ['h', 'e', 'n', 'f', 'a', 'r', 'm'],
    sightWords: ['went', 'said', 'with'],
    pages: [
      makePage(1, 'The red hen met a kind brown dog.', 'Cô gà mái đỏ gặp bạn cún nâu tốt bụng.', 'bg-amber-100', '🌾',
        { url: '/assets/ehon/hen_dog.jpg', alt: 'Tranh Ehon gà mái đỏ trò chuyện cùng cún nâu' },
        [
          { id: 'hs_hen', label: 'Red Hen', xPercent: 35, yPercent: 50, emoji: '🐔', soundName: 'cluck', speechText: 'Cluck cluck! Hello Dog!', animationType: 'jump' },
          { id: 'hs_dog', label: 'Brown Dog', xPercent: 65, yPercent: 55, emoji: '🐶', soundName: 'bark', speechText: 'Woof! Hello Hen!', animationType: 'bounce' }
        ],
        'hen',
        { questionText: 'Who did the red hen meet?', questionAudioText: 'Who did the red hen meet on the farm?', options: [{ id: 'opt_dog', text: 'A brown dog', emoji: '🐶', isCorrect: true }, { id: 'opt_cat', text: 'A lazy cat', emoji: '🐱', isCorrect: false }] }
      ),
      makePage(2, 'They baked warm bread in the big pan.', 'Các bạn cùng nướng ổ bánh mì thơm phức.', 'bg-orange-100', '🍞',
        { url: '/assets/ehon/sam_pan.jpg', alt: 'Tranh Ehon chiếc bánh mì thơm trên chảo' },
        [
          { id: 'hs_bread', label: 'Bread', xPercent: 50, yPercent: 60, emoji: '🍞', soundName: 'sparkle', speechText: 'Yummy warm bread!', animationType: 'spin' }
        ],
        'pan',
        { questionText: 'What did they bake?', questionAudioText: 'What did they bake together?', options: [{ id: 'opt_bread', text: 'Warm bread', emoji: '🍞', isCorrect: true }, { id: 'opt_rock', text: 'A rock', emoji: '🪨', isCorrect: false }] }
      )
    ]
  },

  // ================= GROUP 4 (STAGE 2 & 3: 4-6 Tuổi - Level 2) =================
  {
    id: 'story_rain_train',
    title: 'Rain on the Little Train',
    level: 2,
    levelName: 'Level 2: Nhóm âm 4 (ai, j, oa, ee, or)',
    stage: 2,
    ageBand: '4 – 6 Tuổi',
    coverEmoji: '🚂',
    coverVisual: { url: '/assets/ehon/train_rain.jpg', alt: 'Tranh Ehon đoàn tàu nhỏ chạy dưới cơn mưa rào' },
    summaryVi: 'Đoàn tàu nhỏ bon bon vượt qua cánh đồng hoa dưới màn mưa mát lành.',
    targetPhonics: ['r', 'ai', 'n', 't', 'r'],
    sightWords: ['the', 'goes', 'through'],
    pages: [
      makePage(1, 'Rain falls on the little green train.', 'Cơn mưa rơi tí tách trên đoàn tàu nhỏ màu xanh.', 'bg-sky-100', '🌧️',
        { url: '/assets/ehon/train_rain.jpg', alt: 'Tranh Ehon đoàn tàu chạy qua thung lũng mưa' },
        [
          { id: 'hs_rain', label: 'Rain', xPercent: 50, yPercent: 30, emoji: '🌧️', soundName: 'magic', speechText: 'Pitter patter rain!', animationType: 'bounce' }
        ],
        'rain',
        { questionText: 'What falls on the train?', questionAudioText: 'What falls on the train?', options: [{ id: 'opt_rain', text: 'Rain', emoji: '🌧️', isCorrect: true }, { id: 'opt_snow', text: 'Hot sun', emoji: '☀️', isCorrect: false }] }
      ),
      makePage(2, 'The train waits by the tall oak tree.', 'Đoàn tàu dừng đón bạn bên gốc cây sồi cao vút.', 'bg-emerald-100', '🌳',
        { url: '/assets/ehon/train_rain.jpg', alt: 'Tranh Ehon cây sồi bên ga tàu' },
        [
          { id: 'hs_tree', label: 'Tree', xPercent: 45, yPercent: 45, emoji: '🌳', soundName: 'sparkle', speechText: 'Mighty tall oak tree!', animationType: 'spin' }
        ],
        'tree',
        { questionText: 'Where does the train wait?', questionAudioText: 'Where does the train wait?', options: [{ id: 'opt_tree', text: 'By the tall tree', emoji: '🌳', isCorrect: true }, { id: 'opt_bed', text: 'In bed', emoji: '🛏️', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_bee_tree',
    title: 'The Busy Bee in the Tree',
    level: 2,
    levelName: 'Level 2: Nhóm âm 4 (ee, b, t, r)',
    stage: 2,
    ageBand: '4 – 6 Tuổi',
    coverEmoji: '🐝',
    coverVisual: { url: '/assets/ehon/bee_tree.jpg', alt: 'Tranh Ehon chú ong chăm chỉ bay lượn bên cành cây hoa' },
    summaryVi: 'Chú ong chăm chỉ bay tìm mật ngọt ngào tặng các bạn nhỏ.',
    targetPhonics: ['b', 'ee', 't', 'r', 'ee'],
    sightWords: ['see', 'the', 'in'],
    pages: [
      makePage(1, 'A busy bee visits a big green tree.', 'Chú ong chăm chỉ bay đến thăm cây xanh rợp bóng.', 'bg-emerald-100', '🐝',
        { url: '/assets/ehon/bee_tree.jpg', alt: 'Tranh Ehon chú ong và cây xanh' },
        [
          { id: 'hs_bee', label: 'Bee', xPercent: 55, yPercent: 45, emoji: '🐝', soundName: 'sparkle', speechText: 'Buzzzz! Busy little bee!', animationType: 'jump' }
        ],
        'bee',
        { questionText: 'Who visits the green tree?', questionAudioText: 'Who visits the green tree?', options: [{ id: 'opt_bee', text: 'A busy bee', emoji: '🐝', isCorrect: true }, { id: 'opt_pig', text: 'A pink pig', emoji: '🐷', isCorrect: false }] }
      ),
      makePage(2, 'The bee finds sweet nectar in seeds.', 'Chú ong tìm thấy mật ngọt lành trong hoa thơm.', 'bg-yellow-100', '🍯',
        { url: '/assets/ehon/bee_tree.jpg', alt: 'Tranh Ehon hoa trái ngọt ngào' },
        [
          { id: 'hs_sweet', label: 'Sweet', xPercent: 50, yPercent: 55, emoji: '🍯', soundName: 'magic', speechText: 'Sweet and yummy honey!', animationType: 'spin' }
        ],
        'sweet',
        { questionText: 'What does the bee make?', questionAudioText: 'What does the bee make from flowers?', options: [{ id: 'opt_honey', text: 'Sweet honey', emoji: '🍯', isCorrect: true }, { id: 'opt_mud', text: 'Mud', emoji: '🪵', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_goat_boat',
    title: 'Goat in a Wooden Boat',
    level: 2,
    levelName: 'Level 2: Nhóm âm 4 (oa, g, b, t)',
    stage: 2,
    ageBand: '4 – 6 Tuổi',
    coverEmoji: '⛵',
    coverVisual: { url: '/assets/ehon/goat_boat.jpg', alt: 'Tranh Ehon chú dê chèo chiếc thuyền gỗ trên sông' },
    summaryVi: 'Chú dê mặc áo khoác ấm chèo thuyền ngắm phong cảnh bình minh.',
    targetPhonics: ['g', 'oa', 't', 'b', 'c'],
    sightWords: ['in', 'his', 'the'],
    pages: [
      makePage(1, 'The goat wears a coat in the boat.', 'Chú dê mặc áo khoác ấm ngồi trên chiếc thuyền.', 'bg-sky-100', '🛶',
        { url: '/assets/ehon/goat_boat.jpg', alt: 'Tranh Ehon chú dê trên thuyền gỗ' },
        [
          { id: 'hs_boat', label: 'Boat', xPercent: 50, yPercent: 65, emoji: '🛶', soundName: 'pop', speechText: 'Row row row the boat!', animationType: 'bounce' }
        ],
        'boat',
        { questionText: 'What does the goat wear?', questionAudioText: 'What does the goat wear in the boat?', options: [{ id: 'opt_coat', text: 'A warm coat', emoji: '🧥', isCorrect: true }, { id: 'opt_hat', text: 'A sun hat', emoji: '👒', isCorrect: false }] }
      ),
      makePage(2, 'The boat floats along the quiet road.', 'Thuyền trôi bồng bềnh bên con đường làng êm đềm.', 'bg-teal-100', '🌊',
        { url: '/assets/ehon/goat_boat.jpg', alt: 'Tranh Ehon dòng nước êm đềm thuyền trôi' },
        [
          { id: 'hs_float', label: 'Float', xPercent: 50, yPercent: 60, emoji: '🛟', soundName: 'magic', speechText: 'Float gently on water!', animationType: 'spin' }
        ],
        'goat',
        { questionText: 'Where does the boat float?', questionAudioText: 'Where does the boat float?', options: [{ id: 'opt_water', text: 'On water by the road', emoji: '🌊', isCorrect: true }, { id: 'opt_sky', text: 'Up in clouds', emoji: '☁️', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_pie_jam',
    title: 'Apple Pie and Sweet Jam',
    level: 2,
    levelName: 'Level 2: Nhóm âm 4 (ie, j, p, m)',
    stage: 2,
    ageBand: '4 – 6 Tuổi',
    coverEmoji: '🥧',
    coverVisual: { url: '/assets/ehon/apple.jpg', alt: 'Tranh Ehon chiếc bánh táo nướng và hũ mứt dâu' },
    summaryVi: 'Bà nướng bánh táo thơm lừng ăn kèm mứt dâu tây ngọt ngào.',
    targetPhonics: ['p', 'ie', 'j', 'a', 'm'],
    sightWords: ['eat', 'the', 'with'],
    pages: [
      makePage(1, 'We eat warm apple pie with red jam.', 'Cả nhà cùng ăn bánh táo ấm áp với mứt dâu đỏ.', 'bg-rose-100', '🥧',
        { url: '/assets/ehon/apple.jpg', alt: 'Tranh Ehon bánh táo và mứt ngọt' },
        [
          { id: 'hs_pie', label: 'Pie', xPercent: 45, yPercent: 55, emoji: '🥧', soundName: 'sparkle', speechText: 'Delicious apple pie!', animationType: 'jump' }
        ],
        'pie',
        { questionText: 'What do we eat with jam?', questionAudioText: 'What do we eat with sweet jam?', options: [{ id: 'opt_pie', text: 'Warm apple pie', emoji: '🥧', isCorrect: true }, { id: 'opt_mud', text: 'Mud', emoji: '🪵', isCorrect: false }] }
      ),
      makePage(2, 'The jam is in a shiny glass jar.', 'Mứt được đựng trong chiếc hũ thủy tinh sáng loáng.', 'bg-amber-100', '🫙',
        { url: '/assets/ehon/cup.jpg', alt: 'Tranh Ehon hũ mứt dâu tây' },
        [
          { id: 'hs_jam', label: 'Jam', xPercent: 55, yPercent: 50, emoji: '🍓', soundName: 'pop', speechText: 'Sweet strawberry jam!', animationType: 'bounce' }
        ],
        'jam',
        { questionText: 'Where is the jam kept?', questionAudioText: 'Where is the jam kept?', options: [{ id: 'opt_jar', text: 'In a jar', emoji: '🫙', isCorrect: true }, { id: 'opt_hat', text: 'In a hat', emoji: '👒', isCorrect: false }] }
      )
    ]
  },

  // ================= GROUP 5 (STAGE 3: 5-6 Tuổi - Level 3) =================
  {
    id: 'story_king_ring',
    title: 'The King and the Golden Ring',
    level: 3,
    levelName: 'Level 3: Nhóm âm 5 (ng, z, w, v, oo)',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '👑',
    coverVisual: { url: '/assets/ehon/king_ring.jpg', alt: 'Tranh Ehon đức vua đeo chiếc nhẫn vàng' },
    summaryVi: 'Vị vua nhân từ tìm thấy chiếc nhẫn vàng lấp lánh trong khu vườn hoàng gia.',
    targetPhonics: ['k', 'i', 'ng', 'r', 's'],
    sightWords: ['the', 'has', 'in'],
    pages: [
      makePage(1, 'The wise king sings a happy song.', 'Vị vua thông thái cất tiếng hát khúc ca vui.', 'bg-amber-100', '👑',
        { url: '/assets/ehon/king_ring.jpg', alt: 'Tranh Ehon vị vua hiền từ ca hát' },
        [
          { id: 'hs_king', label: 'King', xPercent: 45, yPercent: 45, emoji: '👑', soundName: 'magic', speechText: 'Long live the kind King!', animationType: 'jump' }
        ],
        'king',
        { questionText: 'Who sings a song?', questionAudioText: 'Who sings a happy song?', options: [{ id: 'opt_king', text: 'The wise king', emoji: '👑', isCorrect: true }, { id: 'opt_wolf', text: 'A gray wolf', emoji: '🐺', isCorrect: false }] }
      ),
      makePage(2, 'The king wears a shiny gold ring.', 'Vị vua đeo chiếc nhẫn vàng sáng lấp lánh.', 'bg-yellow-100', '💍',
        { url: '/assets/ehon/king_ring.jpg', alt: 'Tranh Ehon chiếc nhẫn vàng rực rỡ' },
        [
          { id: 'hs_ring', label: 'Ring', xPercent: 55, yPercent: 60, emoji: '💍', soundName: 'sparkle', speechText: 'Gleaming golden ring!', animationType: 'spin' }
        ],
        'ring',
        { questionText: 'What does the king wear?', questionAudioText: 'What does the king wear on his hand?', options: [{ id: 'opt_ring', text: 'A gold ring', emoji: '💍', isCorrect: true }, { id: 'opt_sock', text: 'A sock', emoji: '🧦', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_moon_spoon',
    title: 'The Moon and the Silver Spoon',
    level: 3,
    levelName: 'Level 3: Nhóm âm 5 (oo_long, m, s, p, n)',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '🌕',
    coverVisual: { url: '/assets/ehon/moon_spoon.jpg', alt: 'Tranh Ehon vầng trăng rằm sáng lung linh soi bóng chiếc thìa bạc' },
    summaryVi: 'Dưới ánh trăng rằm lung linh, em bé dùng chiếc thìa bạc ăn bữa tối ấm cúng.',
    targetPhonics: ['m', 'oo', 'n', 's', 'p'],
    sightWords: ['shines', 'in', 'the'],
    pages: [
      makePage(1, 'The round moon glows in the cool room.', 'Vầng trăng tròn tỏa ánh sáng trong căn phòng ấm.', 'bg-indigo-100', '🌕',
        { url: '/assets/ehon/moon_spoon.jpg', alt: 'Tranh Ehon ánh trăng soi sáng căn phòng' },
        [
          { id: 'hs_moon', label: 'Moon', xPercent: 50, yPercent: 30, emoji: '🌕', soundName: 'sparkle', speechText: 'Bright silver moon!', animationType: 'spin' }
        ],
        'moon',
        { questionText: 'What glows in the room?', questionAudioText: 'What glows brightly at night?', options: [{ id: 'opt_moon', text: 'The round moon', emoji: '🌕', isCorrect: true }, { id: 'opt_sun', text: 'The morning sun', emoji: '☀️', isCorrect: false }] }
      ),
      makePage(2, 'Eat sweet soup with a shiny spoon.', 'Bé ăn món súp ngon bằng chiếc thìa con sáng bóng.', 'bg-purple-100', '🥄',
        { url: '/assets/ehon/moon_spoon.jpg', alt: 'Tranh Ehon bữa ăn ấm cúng với thìa bạc và bát súp ngọt ngào' },
        [
          { id: 'hs_spoon', label: 'Spoon', xPercent: 50, yPercent: 60, emoji: '🥄', soundName: 'magic', speechText: 'Silver spoon for soup!', animationType: 'bounce' }
        ],
        'spoon',
        { questionText: 'What do we use to eat soup?', questionAudioText: 'What do we use to eat soup?', options: [{ id: 'opt_spoon', text: 'A shiny spoon', emoji: '🥄', isCorrect: true }, { id: 'opt_fork', text: 'A big hammer', emoji: '🔨', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_good_book',
    title: 'A Good Book by the Wood',
    level: 3,
    levelName: 'Level 3: Nhóm âm 5 (oo_short, b, k, w, d)',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '📖',
    coverVisual: { url: '/assets/ehon/good_book.jpg', alt: 'Tranh Ehon em bé say sưa đọc sách bên ngôi nhà gỗ' },
    summaryVi: 'Em bé ngồi đọc cuốn sách tranh Ehon tuyệt đẹp bên bìa rừng thanh bình.',
    targetPhonics: ['b', 'oo', 'k', 'w', 'l'],
    sightWords: ['read', 'look', 'at'],
    pages: [
      makePage(1, 'Look at the good book with bright art.', 'Hãy ngắm nhìn cuốn sách tranh đẹp với màu vẽ rực rỡ.', 'bg-emerald-100', '📖',
        { url: '/assets/ehon/good_book.jpg', alt: 'Tranh Ehon cuốn sách tranh mở ra' },
        [
          { id: 'hs_book', label: 'Book', xPercent: 50, yPercent: 55, emoji: '📖', soundName: 'sparkle', speechText: 'A magical storybook!', animationType: 'jump' }
        ],
        'book',
        { questionText: 'What are we looking at?', questionAudioText: 'What are we looking at?', options: [{ id: 'opt_book', text: 'A good book', emoji: '📖', isCorrect: true }, { id: 'opt_pan', text: 'A frying pan', emoji: '🍳', isCorrect: false }] }
      ),
      makePage(2, 'We sit on the wood and cook soup.', 'Chúng mình ngồi trên bậc gỗ và cùng nấu món súp ngon.', 'bg-amber-100', '🪵',
        { url: '/assets/ehon/good_book.jpg', alt: 'Tranh Ehon ngồi đọc sách và nấu súp ấm cúng bên nhà gỗ' },
        [
          { id: 'hs_cook', label: 'Cook', xPercent: 55, yPercent: 60, emoji: '🧑‍🍳', soundName: 'pop', speechText: 'Cook delicious food!', animationType: 'bounce' }
        ],
        'cook',
        { questionText: 'Where do the friends sit?', questionAudioText: 'Where do the friends sit?', options: [{ id: 'opt_wood', text: 'On the wood', emoji: '🪵', isCorrect: true }, { id: 'opt_river', text: 'In deep river', emoji: '🌊', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_wind_van',
    title: 'Gentle Wind and the Red Van',
    level: 3,
    levelName: 'Level 3: Nhóm âm 5 (w, v, z, n)',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '🚐',
    coverVisual: { url: '/assets/ehon/kite.jpg', alt: 'Tranh Ehon ngọn gió nhẹ nâng cánh diều bên chiếc xe dã ngoại' },
    summaryVi: 'Làn gió nhẹ thổi mát rượi khi cả nhà cùng đi dã ngoại trên chiếc xe van đỏ.',
    targetPhonics: ['w', 'i', 'n', 'd', 'v'],
    sightWords: ['blows', 'the', 'we'],
    pages: [
      makePage(1, 'Cool wind blows the red kite high.', 'Làn gió mát lành nâng cánh diều đỏ bay cao vút.', 'bg-sky-100', '🪁',
        { url: '/assets/ehon/kite.jpg', alt: 'Tranh Ehon cánh diều bay lượn trong gió' },
        [
          { id: 'hs_wind', label: 'Wind', xPercent: 50, yPercent: 35, emoji: '🍃', soundName: 'magic', speechText: 'Whoosh! Cool wind blows!', animationType: 'spin' }
        ],
        'wind',
        { questionText: 'What blows the kite high?', questionAudioText: 'What blows the kite high?', options: [{ id: 'opt_wind', text: 'Cool wind', emoji: '🍃', isCorrect: true }, { id: 'opt_car', text: 'A heavy rock', emoji: '🪨', isCorrect: false }] }
      ),
      makePage(2, 'We drive the red camping van to the zoo.', 'Cả nhà lái chiếc xe van đỏ đến thăm vườn thú.', 'bg-rose-100', '🚐',
        { url: '/assets/ehon/giraffe.jpg', alt: 'Tranh Ehon vườn thú với các bạn muôn loài' },
        [
          { id: 'hs_van', label: 'Van', xPercent: 45, yPercent: 65, emoji: '🚐', soundName: 'pop', speechText: 'Beep beep! Safe trip!', animationType: 'bounce' }
        ],
        'van',
        { questionText: 'Where does the family drive to?', questionAudioText: 'Where does the family drive to?', options: [{ id: 'opt_zoo', text: 'To the zoo', emoji: '🦁', isCorrect: true }, { id: 'opt_bed', text: 'To bed', emoji: '🛏️', isCorrect: false }] }
      )
    ]
  },

  // ================= GROUP 6 (STAGE 3 & 4: 5-8 Tuổi - Level 3) =================
  {
    id: 'story_ship_fog',
    title: 'Ship in the Silver Fog',
    level: 3,
    levelName: 'Level 3: Nhóm âm 6 (sh, ch, th, y, x)',
    stage: 3,
    ageBand: '5 – 6 Tuổi (Tiền tiểu học)',
    coverEmoji: '🚢',
    coverVisual: { url: '/assets/ehon/ship.jpg', alt: 'Tranh Ehon con tàu rẽ sóng ra khơi' },
    summaryVi: 'Chuyến hải trình kỳ thú của con tàu vượt qua làn sương mù khám phá vùng đất mới.',
    targetPhonics: ['sh', 'ch', 'th', 'f', 'o', 'g'],
    sightWords: ['into', 'went', 'saw'],
    pages: [
      makePage(1, 'The big ship went into thick white fog.', 'Con tàu lớn rẽ sóng tiến vào làn sương mù trắng xóa.', 'bg-slate-100', '🌫️',
        { url: '/assets/ehon/ship.jpg', alt: 'Tranh Ehon con tàu trong sương mù' },
        [
          { id: 'hs_ship', label: 'Ship', xPercent: 50, yPercent: 45, emoji: '🚢', soundName: 'ship_horn', speechText: 'Toot toot! The big ship!', animationType: 'bounce' },
          { id: 'hs_bell', label: 'Fog Bell', xPercent: 25, yPercent: 35, emoji: '🔔', soundName: 'chime', speechText: 'Ding dong! Watch out for fog!', animationType: 'spin' }
        ],
        'ship',
        { questionText: 'What went into the white fog?', questionAudioText: 'What went into the white fog?', options: [{ id: 'opt_ship', text: 'The big ship', emoji: '🚢', isCorrect: true }, { id: 'opt_bus', text: 'A yellow bus', emoji: '🚌', isCorrect: false }] }
      ),
      makePage(2, 'Three silver fish swim under the ship.', 'Ba chú cá bạc tung tăng bơi dưới thân tàu.', 'bg-sky-100', '🐟',
        { url: '/assets/ehon/three_fish.jpg', alt: 'Tranh Ehon ba chú cá bơi lội dưới biển xanh' },
        [
          { id: 'hs_fish', label: 'Three Fish', xPercent: 50, yPercent: 60, emoji: '🐟', soundName: 'bubble', speechText: 'Splish splash! Three friends!', animationType: 'jump' }
        ],
        'fish',
        { questionText: 'How many fish swim under the ship?', questionAudioText: 'How many fish swim under the ship?', options: [{ id: 'opt_three', text: 'Three fish', emoji: '🐟🐟🐟', isCorrect: true }, { id: 'opt_one', text: 'One frog', emoji: '🐸', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_chip_chat',
    title: 'Chip the Chick and His Chat',
    level: 3,
    levelName: 'Level 3: Nhóm âm 6 (ch, sh, th)',
    stage: 3,
    ageBand: '5 – 6 Tuổi',
    coverEmoji: '🐥',
    coverVisual: { url: '/assets/ehon/chick_chip.jpg', alt: 'Tranh Ehon chú gà con lông vàng trò chuyện ríu rít' },
    summaryVi: 'Chú gà con Chip trò chuyện vui vẻ cùng các bạn bên hàng rào hoa.',
    targetPhonics: ['ch', 'i', 'p', 'a', 't'],
    sightWords: ['with', 'his', 'said'],
    pages: [
      makePage(1, 'Chip the little yellow chick can chat.', 'Chú gà con Chip líu lo trò chuyện cả ngày.', 'bg-yellow-100', '🐥',
        { url: '/assets/ehon/chick_chip.jpg', alt: 'Tranh Ehon chú gà con líu lo' },
        [
          { id: 'hs_chick', label: 'Chick', xPercent: 50, yPercent: 50, emoji: '🐥', soundName: 'sparkle', speechText: 'Cheep cheep! I am Chip!', animationType: 'jump' }
        ],
        'chick',
        { questionText: 'Who can chat all day?', questionAudioText: 'Who can chat all day?', options: [{ id: 'opt_chick', text: 'Chip the chick', emoji: '🐥', isCorrect: true }, { id: 'opt_ox', text: 'An ox', emoji: '🐂', isCorrect: false }] }
      ),
      makePage(2, 'Touch your chin and chop the sweet carrots.', 'Chạm tay vào cằm và cùng thái củ cà rốt giòn ngọt.', 'bg-orange-100', '🥕',
        { url: '/assets/ehon/chick_chip.jpg', alt: 'Tranh Ehon chú gà con bên luống cà rốt giòn ngọt' },
        [
          { id: 'hs_chin', label: 'Chin', xPercent: 50, yPercent: 45, emoji: '😊', soundName: 'pop', speechText: 'Touch your smiling chin!', animationType: 'bounce' }
        ],
        'chin',
        { questionText: 'What does Chip touch?', questionAudioText: 'What does Chip touch with his wing?', options: [{ id: 'opt_chin', text: 'His chin', emoji: '😊', isCorrect: true }, { id: 'opt_feet', text: 'His feet', emoji: '🦶', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_three_moths',
    title: 'Three Little Moths in the Night',
    level: 3,
    levelName: 'Level 3: Nhóm âm 6 (th_unvoiced, th_voiced)',
    stage: 3,
    ageBand: '5 – 6 Tuổi',
    coverEmoji: '🦋',
    coverVisual: { url: '/assets/ehon/three_moths.jpg', alt: 'Tranh Ehon ba chú bướm đêm vỗ cánh nhẹ nhàng bên ánh đèn' },
    summaryVi: 'Ba chú bướm đêm vỗ cánh bay theo lối đi lát đá ngắm trăng sao.',
    targetPhonics: ['th', 'r', 'ee', 'm', 'o'],
    sightWords: ['fly', 'by', 'the'],
    pages: [
      makePage(1, 'Three soft moths fly along the garden path.', 'Ba chú bướm đêm bay lượn dọc theo lối đi trong vườn.', 'bg-indigo-100', '🛤️',
        { url: '/assets/ehon/three_moths.jpg', alt: 'Tranh Ehon ba chú bướm đêm bên con đường đá' },
        [
          { id: 'hs_three', label: 'Three', xPercent: 50, yPercent: 40, emoji: '🦋', soundName: 'magic', speechText: 'One, two, three little moths!', animationType: 'spin' }
        ],
        'three',
        { questionText: 'How many moths fly in the garden?', questionAudioText: 'How many moths fly in the garden?', options: [{ id: 'opt_three', text: 'Three moths', emoji: '3️⃣', isCorrect: true }, { id: 'opt_ten', text: 'Ten moths', emoji: '🔟', isCorrect: false }] }
      ),
      makePage(2, 'They have thin wings that shine in starlight.', 'Những đôi cánh mỏng manh lấp lánh dưới ánh ngàn sao.', 'bg-purple-100', '✨',
        { url: '/assets/ehon/three_moths.jpg', alt: 'Tranh Ehon cánh bướm lấp lánh ánh sao' },
        [
          { id: 'hs_thin', label: 'Thin Wings', xPercent: 50, yPercent: 55, emoji: '🪽', soundName: 'sparkle', speechText: 'Delicate glowing wings!', animationType: 'jump' }
        ],
        'thin',
        { questionText: 'What kind of wings do the moths have?', questionAudioText: 'What kind of wings do the moths have?', options: [{ id: 'opt_thin', text: 'Thin shiny wings', emoji: '✨', isCorrect: true }, { id: 'opt_heavy', text: 'Heavy iron wings', emoji: '🪨', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_this_that',
    title: 'This Little Box and That Big Star',
    level: 3,
    levelName: 'Level 3: Nhóm âm 6 (th_voiced, x)',
    stage: 3,
    ageBand: '5 – 6 Tuổi',
    coverEmoji: '📦',
    coverVisual: { url: '/assets/ehon/shells_box.jpg', alt: 'Tranh Ehon chiếc hộp báu vật nhỏ và ngôi sao trên cao' },
    summaryVi: 'Bé phân biệt đồ vật ở gần và ở xa qua chiếc hộp và ngôi sao lung linh.',
    targetPhonics: ['th', 'i', 's', 't', 'a'],
    sightWords: ['this', 'that', 'look'],
    pages: [
      makePage(1, 'This is a small box with six shells.', 'Đây là chiếc hộp nhỏ đựng sáu vỏ ốc xinh.', 'bg-teal-100', '📦',
        { url: '/assets/ehon/shells_box.jpg', alt: 'Tranh Ehon chiếc hộp đựng sáu vỏ ốc xinh' },
        [
          { id: 'hs_box', label: 'Box', xPercent: 50, yPercent: 60, emoji: '📦', soundName: 'pop', speechText: 'This is my treasure box!', animationType: 'bounce' }
        ],
        'this',
        { questionText: 'What is inside this box?', questionAudioText: 'What is inside this box?', options: [{ id: 'opt_shells', text: 'Six shiny shells', emoji: '🐚', isCorrect: true }, { id: 'opt_dirt', text: 'Cold water', emoji: '💧', isCorrect: false }] }
      ),
      makePage(2, 'Look at that soaring golden star above!', 'Hãy ngắm nhìn ngôi sao vàng lấp lánh đằng xa kia kìa!', 'bg-amber-100', '⭐',
        { url: '/assets/ehon/star.jpg', alt: 'Tranh Ehon ngôi sao vàng trên bầu trời' },
        [
          { id: 'hs_that', label: 'That Star', xPercent: 55, yPercent: 35, emoji: '⭐', soundName: 'sparkle', speechText: 'Look at that bright star!', animationType: 'spin' }
        ],
        'that',
        { questionText: 'Where is that bright star?', questionAudioText: 'Where is that bright star?', options: [{ id: 'opt_above', text: 'Up in the sky', emoji: '🌌', isCorrect: true }, { id: 'opt_under', text: 'Under the rug', emoji: '🧶', isCorrect: false }] }
      )
    ]
  },

  // ================= GROUP 7 (STAGE 4: 6-8 Tuổi Tiểu Học - Level 4) =================
  {
    id: 'story_queen_star',
    title: 'The Queen and the Star Coin',
    level: 4,
    levelName: 'Level 4: Vần phức & Luyện đọc lưu loát (qu, oi, ou, ar, er)',
    stage: 4,
    ageBand: '6 – 8 Tuổi (Tiểu học Lớp 1-2)',
    coverEmoji: '👑',
    coverVisual: { url: '/assets/ehon/queen_park.jpg', alt: 'Tranh Ehon nữ hoàng dạo bước trong công viên' },
    summaryVi: 'Nữ hoàng tìm thấy đồng tiền ngôi sao lấp lánh trong khu vườn cổ tích.',
    targetPhonics: ['qu', 'oi', 'ou', 'ar', 'er', 'ue'],
    sightWords: ['found', 'under', 'shining'],
    pages: [
      makePage(1, 'The queen went to the green park.', 'Nữ hoàng đi dạo vào công viên rợp bóng cây xanh.', 'bg-emerald-100', '🏰',
        { url: '/assets/ehon/queen_park.jpg', alt: 'Tranh Ehon nữ hoàng trong công viên xanh' },
        [
          { id: 'hs_queen', label: 'Queen', xPercent: 40, yPercent: 45, emoji: '👑', soundName: 'fanfare', speechText: 'Greetings from the Queen!', animationType: 'jump' }
        ],
        'queen',
        { questionText: 'Where did the queen go?', questionAudioText: 'Where did the queen go?', options: [{ id: 'opt_park', text: 'To the green park', emoji: '🏞️', isCorrect: true }, { id: 'opt_boat', text: 'To a boat', emoji: '🛶', isCorrect: false }] }
      ),
      makePage(2, 'She found a bright star coin on the ground.', 'Bà tìm thấy một đồng xu ngôi sao sáng rực trên mặt đất.', 'bg-amber-100', '🪙',
        { url: '/assets/ehon/queen_coin.jpg', alt: 'Tranh Ehon nữ hoàng nâng niu đồng tiền sao vàng' },
        [
          { id: 'hs_coin', label: 'Star Coin', xPercent: 65, yPercent: 65, emoji: '🪙', soundName: 'sparkle', speechText: 'A magic shiny coin!', animationType: 'spin' }
        ],
        'coin',
        { questionText: 'What did the queen find on the ground?', questionAudioText: 'What did the queen find on the ground?', options: [{ id: 'opt_coin', text: 'A star coin', emoji: '🪙', isCorrect: true }, { id: 'opt_rock', text: 'A gray rock', emoji: '🪨', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_clown_cloud',
    title: 'The Happy Clown on a Cloud',
    level: 4,
    levelName: 'Level 4: Nhóm âm 7 (ou, ar, er)',
    stage: 4,
    ageBand: '6 – 8 Tuổi (Tiểu học)',
    coverEmoji: '☁️',
    coverVisual: { url: '/assets/ehon/clown_cloud.jpg', alt: 'Tranh Ehon chú hề vui tính nhào lộn trên đám mây trắng' },
    summaryVi: 'Chú hề vui tính nhào lộn trên đám mây trắng và cất tiếng reo vui.',
    targetPhonics: ['c', 'l', 'ou', 'd', 's'],
    sightWords: ['shout', 'loud', 'over'],
    pages: [
      makePage(1, 'A fluffy white cloud floats over the town.', 'Đám mây trắng bồng bềnh trôi qua thị trấn nhỏ.', 'bg-sky-100', '☁️',
        { url: '/assets/ehon/clown_cloud.jpg', alt: 'Tranh Ehon chú hề vui vẻ bay trên đám mây trắng' },
        [
          { id: 'hs_cloud', label: 'Cloud', xPercent: 50, yPercent: 35, emoji: '☁️', soundName: 'magic', speechText: 'Fluffy floating cloud!', animationType: 'spin' }
        ],
        'cloud',
        { questionText: 'What floats over the town?', questionAudioText: 'What floats over the town?', options: [{ id: 'opt_cloud', text: 'A fluffy cloud', emoji: '☁️', isCorrect: true }, { id: 'opt_bed', text: 'A big bed', emoji: '🛏️', isCorrect: false }] }
      ),
      makePage(2, 'Shout loud with joy and count the stars!', 'Cùng reo to vui sướng và đếm những vì sao sáng!', 'bg-indigo-100', '⭐',
        { url: '/assets/ehon/star.jpg', alt: 'Tranh Ehon ngàn sao lấp lánh ban đêm' },
        [
          { id: 'hs_shout', label: 'Shout', xPercent: 50, yPercent: 55, emoji: '📢', soundName: 'sparkle', speechText: 'Hooray for reading stars!', animationType: 'jump' }
        ],
        'shout',
        { questionText: 'What do we count at night?', questionAudioText: 'What do we count in the night sky?', options: [{ id: 'opt_stars', text: 'Bright stars', emoji: '⭐', isCorrect: true }, { id: 'opt_pans', text: 'Hot pans', emoji: '🍳', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_blue_clue',
    title: 'The Blue Secret Clue',
    level: 4,
    levelName: 'Level 4: Nhóm âm 7 (ue, er, ar)',
    stage: 4,
    ageBand: '6 – 8 Tuổi (Tiểu học)',
    coverEmoji: '🔍',
    coverVisual: { url: '/assets/ehon/blue_clue.jpg', alt: 'Tranh Ehon chú thỏ tìm manh mối dấu chân màu xanh trong rừng' },
    summaryVi: 'Bé tìm thấy manh mối màu xanh dẫn lối đến kho báu tri thức trên đảo.',
    targetPhonics: ['b', 'l', 'ue', 'c', 'l'],
    sightWords: ['find', 'secret', 'under'],
    pages: [
      makePage(1, 'Follow the blue clue painted on the rock.', 'Lần theo manh mối màu xanh vẽ trên phiến đá.', 'bg-cyan-100', '🔍',
        { url: '/assets/ehon/blue_clue.jpg', alt: 'Tranh Ehon manh mối dấu chân màu xanh' },
        [
          { id: 'hs_clue', label: 'Clue', xPercent: 48, yPercent: 55, emoji: '🔍', soundName: 'magic', speechText: 'A secret blue clue!', animationType: 'jump' }
        ],
        'clue',
        { questionText: 'What color is the secret clue?', questionAudioText: 'What color is the secret clue?', options: [{ id: 'opt_blue', text: 'Bright blue', emoji: '💙', isCorrect: true }, { id: 'opt_black', text: 'Dark black', emoji: '⬛', isCorrect: false }] }
      ),
      makePage(2, 'Use sticky glue to seal the treasure letter.', 'Dùng hồ dán niêm phong lá thư kho báu bí mật.', 'bg-amber-100', '✉️',
        { url: '/assets/ehon/blue_clue.jpg', alt: 'Tranh Ehon lá thư và manh mối kho báu kỳ diệu' },
        [
          { id: 'hs_glue', label: 'Glue', xPercent: 55, yPercent: 60, emoji: '🧴', soundName: 'pop', speechText: 'Stick it with craft glue!', animationType: 'bounce' }
        ],
        'glue',
        { questionText: 'What do we use to seal the letter?', questionAudioText: 'What do we use to seal the letter?', options: [{ id: 'opt_glue', text: 'Craft glue', emoji: '🧴', isCorrect: true }, { id: 'opt_mud', text: 'Wet mud', emoji: '🪵', isCorrect: false }] }
      )
    ]
  },
  {
    id: 'story_farmer_barn',
    title: 'The Tiger and the Farmer Barn',
    level: 4,
    levelName: 'Level 4: Nhóm âm 7 (ar, er, tiger, barn)',
    stage: 4,
    ageBand: '6 – 8 Tuổi (Tiểu học)',
    coverEmoji: '🚜',
    coverVisual: { url: '/assets/ehon/farmer_barn.jpg', alt: 'Tranh Ehon nông trại của bác nông dân với nhà kho đỏ' },
    summaryVi: 'Bác nông dân và chị gái lái xe hơi đến nhà kho thóc chăm sóc các bạn thú.',
    targetPhonics: ['f', 'ar', 'm', 'e', 'r', 'b'],
    sightWords: ['drive', 'into', 'with'],
    pages: [
      makePage(1, 'The farmer drives a red car to the barn.', 'Bác nông dân lái chiếc xe hơi đỏ đến nhà kho thóc.', 'bg-amber-100', '🚜',
        { url: '/assets/ehon/farmer_barn.jpg', alt: 'Tranh Ehon bác nông dân lái xe đến nhà kho đỏ' },
        [
          { id: 'hs_farmer', label: 'Farmer', xPercent: 45, yPercent: 50, emoji: '👨‍🌾', soundName: 'pop', speechText: 'Welcome to the peaceful farm!', animationType: 'jump' }
        ],
        'farmer',
        { questionText: 'Where does the farmer drive to?', questionAudioText: 'Where does the farmer drive to?', options: [{ id: 'opt_barn', text: 'To the big barn', emoji: '🛖', isCorrect: true }, { id: 'opt_sea', text: 'To deep sea', emoji: '🌊', isCorrect: false }] }
      ),
      makePage(2, 'My sister drinks fresh water under the stars.', 'Chị gái uống ly nước mát lành dưới bầu trời đầy sao.', 'bg-indigo-100', '💧',
        { url: '/assets/ehon/farmer_barn.jpg', alt: 'Tranh Ehon trang trại bình yên lung linh ánh sao' },
        [
          { id: 'hs_water', label: 'Water', xPercent: 50, yPercent: 65, emoji: '💧', soundName: 'sparkle', speechText: 'Cool sweet water!', animationType: 'spin' }
        ],
        'sister',
        { questionText: 'Who drinks fresh water under stars?', questionAudioText: 'Who drinks fresh water under stars?', options: [{ id: 'opt_sister', text: 'My elder sister', emoji: '👧', isCorrect: true }, { id: 'opt_fox', text: 'A sly fox', emoji: '🦊', isCorrect: false }] }
      )
    ]
  },
];

module.exports = { STORIES };
