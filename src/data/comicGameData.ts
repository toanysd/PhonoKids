import {
  ComicHero,
  ComicVillain,
  DailyQuestItem,
  HeroId,
  RocketUpgradeItem,
  SpritePose,
  StoryStage,
  StoryWorld,
  VillainId,
} from '../types/comicGame';

function makeSprites(tpl: string): Record<SpritePose, string> {
  return {
    idle: `/assets/comic/sprites/${tpl}/idle.webp`,
    speaking: `/assets/comic/sprites/${tpl}/speaking.webp`,
    attack: `/assets/comic/sprites/${tpl}/attack.webp`,
    hit: `/assets/comic/sprites/${tpl}/hit.webp`,
    victory: `/assets/comic/sprites/${tpl}/victory.webp`,
  };
}

export const COMIC_HEROES: ComicHero[] = [
  {
    id: 'hesman',
    nameEn: 'Hesman (ゴライオン)',
    jpTitle: 'ゴライオン',
    taglineVi: 'Hợp thể 5 sư tử thép Golion, vung Gươm Ánh Sáng chinh phục phát âm chuẩn.',
    attackCalloutEn: 'Blazing Sword!',
    greetingEn: 'I am Hesman! Let us speak English!',
    accentColor: '#FACC15',
    arenaScene: '/assets/comic/scenes/arena_galra.webp',
    lockHorizontalSymmetry: true,
    sprites: makeSprites('mecha_lion'),
    mangaCutinUrl: '/assets/comic/manga/cutin_hesman.webp',
    mangaSplashUrl: '/assets/comic/manga/splash_hesman.webp',
    mangaSfxEn: 'SLASH!!',
    mangaKatakana: 'ズバァン!',
  },
  {
    id: 'anpanman',
    nameEn: 'Anpanman',
    jpTitle: 'アンパンマン',
    taglineVi: 'Siêu nhân bánh đậu ấm áp thân thiện, cổ vũ bé tập đọc to và rõ chữ.',
    attackCalloutEn: 'An Punch!',
    greetingEn: 'Hi friend! Anpanman is here!',
    accentColor: '#FB923C',
    arenaScene: '/assets/comic/scenes/arena_city.webp',
    lockHorizontalSymmetry: false,
    sprites: makeSprites('bread_hero'),
    mangaCutinUrl: '/assets/comic/manga/cutin_anpanman.webp',
    mangaSplashUrl: '/assets/comic/manga/splash_anpanman.webp',
    mangaSfxEn: 'POW!!',
    mangaKatakana: 'ドカーン!',
  },
  {
    id: 'spiderman',
    nameEn: 'Spider-Man',
    jpTitle: 'スパイダーマン',
    taglineVi: 'Chiến binh bắn tơ nhanh nhẹn vượt nóc thành phố khi bé nói đúng từ khóa.',
    attackCalloutEn: 'Web Blast!',
    greetingEn: 'Hey buddy! Ready to swing and speak?',
    accentColor: '#EF4444',
    arenaScene: '/assets/comic/scenes/arena_city.webp',
    lockHorizontalSymmetry: false,
    sprites: makeSprites('spider_hero'),
    mangaCutinUrl: '/assets/comic/manga/cutin_spiderman.webp',
    mangaSplashUrl: '/assets/comic/manga/splash_spiderman.webp',
    mangaSfxEn: 'THWIP!!',
    mangaKatakana: 'ビュッ!',
  },
  {
    id: 'ultraman',
    nameEn: 'Ultraman Zero',
    jpTitle: 'ウルトラマン',
    taglineVi: 'Người khổng lồ ánh sáng ngân hà truyền tia Specium theo giọng đọc của bé.',
    attackCalloutEn: 'Specium Ray!',
    greetingEn: 'Ultraman ready! Shine bright!',
    accentColor: '#38BDF8',
    arenaScene: '/assets/comic/scenes/arena_cosmos.webp',
    lockHorizontalSymmetry: false,
    sprites: makeSprites('cosmic_ultra'),
    mangaCutinUrl: '/assets/comic/manga/cutin_ultraman.webp',
    mangaSplashUrl: '/assets/comic/manga/splash_ultraman.webp',
    mangaSfxEn: 'ZAP!!',
    mangaKatakana: 'ジュワァ!',
  },
];

export const COMIC_VILLAINS: ComicVillain[] = [
  { id: 'galra_boss', nameEn: 'Emperor Galra', tauntEn: 'Repeat my words if you can!', sprites: makeSprites('galra_boss'), mangaMenaceUrl: '/assets/comic/manga/menace_galra_boss.webp', accentColor: '#A855F7', taglineVi: 'Chúa tể Galra thách thức giọng đọc dũng mãnh của Hesman.' },
  { id: 'robeast_mech', nameEn: 'Robeast Mech', tauntEn: 'Beep boop! Say the secret word!', sprites: makeSprites('robeast_mech'), mangaMenaceUrl: '/assets/comic/manga/menace_robeast_mech.webp', accentColor: '#EF4444', taglineVi: 'Robot khổng lồ thử thách phát âm phụ âm bật hơi.' },
  { id: 'germ_ufo', nameEn: 'Baikinman UFO', tauntEn: 'Hahiha! Tell me the magic word!', sprites: makeSprites('germ_ufo'), mangaMenaceUrl: '/assets/comic/manga/menace_germ_ufo.webp', accentColor: '#A3E635', taglineVi: 'Phi thuyền tinh nghịch thách thức bé nói rõ từng âm.' },
  { id: 'goblin_glider', nameEn: 'Green Goblin', tauntEn: 'Catch my glider and speak loud!', sprites: makeSprites('goblin_glider'), mangaMenaceUrl: '/assets/comic/manga/menace_goblin_glider.webp', accentColor: '#22C55E', taglineVi: 'Yêu tinh ván lượn giữa bầu trời thành phố truyện tranh.' },
  { id: 'octo_mech', nameEn: 'Doc Ock Mech', tauntEn: 'Four steel arms test your voice!', sprites: makeSprites('octo_mech'), mangaMenaceUrl: '/assets/comic/manga/menace_octo_mech.webp', accentColor: '#F59E0B', taglineVi: 'Tiến sĩ bốn cánh tay cơ khí kiểm tra độ chính xác của bé.' },
  { id: 'alien_baltan', nameEn: 'Alien Baltan', tauntEn: 'Ho ho ho! Answer my space quiz!', sprites: makeSprites('alien_baltan'), mangaMenaceUrl: '/assets/comic/manga/menace_alien_baltan.webp', accentColor: '#22D3EE', taglineVi: 'Chiến binh ngoài hành tinh đối đầu Ultraman Zero.' },
];

function mkStage(
  worldId: number,
  stageNumber: number,
  wordId: string,
  displayWord: string,
  phonemeId: string,
  imageWord: string,
  villainId: VillainId,
  hintVi: string,
  isBoss = false
): StoryStage {
  return {
    id: `w${worldId}_s${stageNumber}`,
    worldId,
    stageNumber,
    isBoss,
    wordId,
    displayWord,
    phonemeId,
    imageUrl: `/assets/comic/words/${imageWord}.webp`,
    villainId,
    hintVi,
  };
}

export const STORY_WORLDS: StoryWorld[] = [
  {
    id: 1,
    nameEn: 'Sunny Plaza',
    titleVi: 'Thế Giới 1: Quảng Trường Nắng Mai (/s/)',
    phonemeId: 's',
    phonemeLabel: '/s/',
    accentColor: '#FACC15',
    arenaScene: '/assets/comic/scenes/arena_city.webp',
    villainId: 'germ_ufo',
    mouthTipVi: 'Khép nhẹ răng và thổi luồng gió xì nhẹ: s-s-s.',
    stages: [
      mkStage(1, 1, 'sun', 'Sun', 's', 'sun', 'germ_ufo', 'Mặt Trời vàng rực rỡ'),
      mkStage(1, 2, 'star', 'Star', 's', 'star', 'germ_ufo', 'Ngôi Sao sáng trên trời'),
      mkStage(1, 3, 'sock', 'Sock', 's', 'sock', 'germ_ufo', 'Chiếc Tất kẻ sọc vui nhộn'),
      mkStage(1, 4, 'snake', 'Snake', 's', 'snake', 'germ_ufo', 'Chú Rắn xanh hiền lành'),
      mkStage(1, 5, 'super_sun', 'Super Sun', 's', 'sun', 'germ_ufo', 'Hô vang Super Sun để thắng Boss Thế Giới 1', true),
    ],
  },
  {
    id: 2,
    nameEn: 'Apple Canyon',
    titleVi: 'Thế Giới 2: Hẻm Núi Táo Đỏ (/a/)',
    phonemeId: 'a',
    phonemeLabel: '/æ/',
    accentColor: '#FB7185',
    arenaScene: '/assets/comic/scenes/arena_city.webp',
    villainId: 'goblin_glider',
    mouthTipVi: 'Mở rộng hàm dưới đọc vang âm A ngắn thật gọn.',
    stages: [
      mkStage(2, 1, 'apple', 'Apple', 'a', 'apple', 'goblin_glider', 'Quả Táo đỏ giòn tan'),
      mkStage(2, 2, 'ant', 'Ant', 'a', 'ant', 'goblin_glider', 'Chú Kiến nhỏ chăm chỉ'),
      mkStage(2, 3, 'cat', 'Cat', 'a', 'cat', 'goblin_glider', 'Chú Mèo cam đáng yêu'),
      mkStage(2, 4, 'hat', 'Hat', 'a', 'hat', 'goblin_glider', 'Chiếc Mũ vành tròn'),
      mkStage(2, 5, 'happy_cat', 'Happy Cat', 'a', 'cat', 'goblin_glider', 'Nói to Happy Cat đánh bại Green Goblin', true),
    ],
  },
  {
    id: 3,
    nameEn: 'Windy Peak',
    titleVi: 'Thế Giới 3: Đỉnh Gió Chóng Chóng (/p/)',
    phonemeId: 'p',
    phonemeLabel: '/p/',
    accentColor: '#F472B6',
    arenaScene: '/assets/comic/scenes/arena_galra.webp',
    villainId: 'robeast_mech',
    mouthTipVi: 'Mím nhẹ hai môi rồi bật hơi thật tròn âm /p/.',
    stages: [
      mkStage(3, 1, 'pig', 'Pig', 'p', 'pig', 'robeast_mech', 'Chú Heo hồng vui vẻ'),
      mkStage(3, 2, 'pan', 'Pan', 'p', 'pan', 'robeast_mech', 'Chiếc Chảo xanh nấu ăn'),
      mkStage(3, 3, 'pen', 'Pen', 'p', 'pen', 'robeast_mech', 'Cây Bút vẽ truyện tranh'),
      mkStage(3, 4, 'pup', 'Pup', 'p', 'pup', 'robeast_mech', 'Chú Cún con tinh nghịch'),
      mkStage(3, 5, 'pink_pig', 'Pink Pig', 'p', 'pig', 'robeast_mech', 'Đọc vang Pink Pig vượt ải Robeast Mech', true),
    ],
  },
  {
    id: 4,
    nameEn: 'Toy Station',
    titleVi: 'Thế Giới 4: Nhà Ga Đồ Chơi (/t/)',
    phonemeId: 't',
    phonemeLabel: '/t/',
    accentColor: '#34D399',
    arenaScene: '/assets/comic/scenes/arena_city.webp',
    villainId: 'octo_mech',
    mouthTipVi: 'Chạm đầu lưỡi lên lợi trên rồi bật nhanh âm /t/.',
    stages: [
      mkStage(4, 1, 'top', 'Top', 't', 'top', 'octo_mech', 'Con Quay sắc màu xoay tít'),
      mkStage(4, 2, 'ten', 'Ten', 't', 'ten', 'octo_mech', 'Số Mười năng lượng'),
      mkStage(4, 3, 'tent', 'Tent', 't', 'tent', 'octo_mech', 'Chiếc Lều dã ngoại ấm áp'),
      mkStage(4, 4, 'train', 'Train', 't', 'train', 'octo_mech', 'Đoàn Tàu siêu tốc'),
      mkStage(4, 5, 'toy_train', 'Toy Train', 't', 'train', 'octo_mech', 'Hô vang Toy Train hạ gục Doc Ock Mech', true),
    ],
  },
  {
    id: 5,
    nameEn: 'Moon Harbor',
    titleVi: 'Thế Giới 5: Cảng Ánh Trăng (/m/)',
    phonemeId: 'm',
    phonemeLabel: '/m/',
    accentColor: '#38BDF8',
    arenaScene: '/assets/comic/scenes/arena_cosmos.webp',
    villainId: 'alien_baltan',
    mouthTipVi: 'Khép nhẹ hai môi ngân vang âm /m/ qua mũi.',
    stages: [
      mkStage(5, 1, 'moon', 'Moon', 'm', 'moon', 'alien_baltan', 'Vầng Trăng vàng dịu êm'),
      mkStage(5, 2, 'milk', 'Milk', 'm', 'milk', 'alien_baltan', 'Hộp Sữa tăng lực siêu nhân'),
      mkStage(5, 3, 'map', 'Map', 'm', 'map', 'alien_baltan', 'Bản Đồ kho báu ngân hà'),
      mkStage(5, 4, 'mouse', 'Mouse', 'm', 'mouse', 'alien_baltan', 'Chú Chuột nhỏ thông minh'),
      mkStage(5, 5, 'magic_moon', 'Magic Moon', 'm', 'moon', 'alien_baltan', 'Đọc Magic Moon đánh bại Alien Baltan', true),
    ],
  },
  {
    id: 6,
    nameEn: 'Galra Citadel',
    titleVi: 'Thế Giới 6: Pháo Đài Galra (/sh/)',
    phonemeId: 'sh',
    phonemeLabel: '/ʃ/',
    accentColor: '#C084FC',
    arenaScene: '/assets/comic/scenes/arena_galra.webp',
    villainId: 'galra_boss',
    mouthTipVi: 'Chu nhẹ hai môi tròn và thổi gió kéo dài: sh-sh-sh.',
    stages: [
      mkStage(6, 1, 'ship', 'Ship', 'sh', 'ship', 'galra_boss', 'Chiến Hạm vũ trụ rực rỡ'),
      mkStage(6, 2, 'shell', 'Shell', 'sh', 'shell', 'galra_boss', 'Vỏ Sò lấp lánh ánh sao'),
      mkStage(6, 3, 'fish', 'Fish', 'sh', 'fish', 'galra_boss', 'Chú Cá đại dương xanh'),
      mkStage(6, 4, 'dish', 'Dish', 'sh', 'dish', 'galra_boss', 'Chiếc Đĩa pha lê ngôi sao'),
      mkStage(6, 5, 'shiny_ship', 'Shiny Ship', 'sh', 'ship', 'galra_boss', 'Hô to Shiny Ship chiến thắng Emperor Galra', true),
    ],
  },
];

export const ALL_STORY_STAGES: StoryStage[] = STORY_WORLDS.flatMap((w) => w.stages);

export const ROCKET_UPGRADES: RocketUpgradeItem[] = [
  { id: 'plasma_thruster', nameEn: 'Plasma Booster', nameVi: 'Động Cơ Plasma', slot: 'thruster', costStars: 15, costGems: 0, accentColor: '#F97316', descriptionVi: 'Gắn ống đẩy phản lực rực sáng cho khoang tàu Star Zone.' },
  { id: 'star_radar', nameEn: 'Galaxy Radar', nameVi: 'Ra-đa Ngân Hà', slot: 'radar', costStars: 20, costGems: 0, accentColor: '#38BDF8', descriptionVi: 'Quét tín hiệu sao vàng và từ vựng mới trên màn hình.' },
  { id: 'lion_shield', nameEn: 'Golion Shield', nameVi: 'Khiên Sư Tử Golion', slot: 'shield', costStars: 0, costGems: 8, accentColor: '#FACC15', descriptionVi: 'Khiên chữ thập bảo vệ phi thuyền theo biểu tượng Hesman.' },
  { id: 'holo_console', nameEn: 'Holo Command Deck', nameVi: 'Bảng Điều Khiển Holo', slot: 'cabin', costStars: 25, costGems: 0, accentColor: '#A855F7', descriptionVi: 'Màn hình 3D hiển thị bản đồ 6 thế giới trong buồng lái.' },
  { id: 'mini_drone', nameEn: 'Star Helper Bot', nameVi: 'Robot Đồng Hành', slot: 'companion', costStars: 0, costGems: 10, accentColor: '#22C55E', descriptionVi: 'Chú robot nhỏ bay lượn cổ vũ siêu nhân trong khoang tàu.' },
  { id: 'neon_banner', nameEn: 'Comic Star Banner', nameVi: 'Cờ Hiệu Siêu Nhân', slot: 'decor', costStars: 12, costGems: 0, accentColor: '#EC4899', descriptionVi: 'Trang trí cờ hiệu phong cách truyện tranh đầy sắc màu.' },
  { id: 'warp_window', nameEn: 'Nebula Viewport', nameVi: 'Cửa Sổ Tinh Vân', slot: 'cabin', costStars: 0, costGems: 12, accentColor: '#06B6D4', descriptionVi: 'Mở khung kính nhìn thẳng ra dải ngân hà lấp lánh.' },
  { id: 'turbo_antenna', nameEn: 'Echo Dish Antenna', nameVi: 'Ăng-ten Thu Âm', slot: 'radar', costStars: 18, costGems: 5, accentColor: '#FB7185', descriptionVi: 'Tăng cường bắt sóng âm thanh vui nhộn cho phòng chỉ huy.' },
];

export const DAILY_QUESTS: DailyQuestItem[] = [
  { id: 'dq_battle', titleEn: 'Win 2 Mic Battles', titleVi: 'Thắng 2 trận Đấu Trường Mic', goalType: 'battles_won', targetCount: 2, rewardStars: 15, rewardGems: 5 },
  { id: 'dq_lab', titleEn: 'Practice 3 Sound Lab Phonemes', titleVi: 'Luyện 3 âm trong Phòng Âm Thanh', goalType: 'sound_lab_practiced', targetCount: 3, rewardStars: 12, rewardGems: 4 },
  { id: 'dq_book', titleEn: 'Finish 1 Comic Book Quiz', titleVi: 'Hoàn thành 1 truyện Phòng Đọc', goalType: 'books_finished', targetCount: 1, rewardStars: 15, rewardGems: 6 },
];

export function getHeroById(id: HeroId): ComicHero {
  return COMIC_HEROES.find((h) => h.id === id) || COMIC_HEROES[0];
}

export function getVillainById(id: VillainId): ComicVillain {
  return COMIC_VILLAINS.find((v) => v.id === id) || COMIC_VILLAINS[0];
}

export function getWorldById(worldId: number): StoryWorld {
  return STORY_WORLDS.find((w) => w.id === worldId) || STORY_WORLDS[0];
}

export function getStageById(stageId: string): StoryStage {
  return ALL_STORY_STAGES.find((s) => s.id === stageId) || ALL_STORY_STAGES[0];
}

export function isStageUnlocked(): boolean {
  return true;
}
