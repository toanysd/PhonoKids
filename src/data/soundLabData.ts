import {
  FrontMouthMode,
  LipMode,
  PhonemeArticulation,
  PhonemeCategory,
  TongueMode,
} from '../types/comicGame';

interface PhonemeTuple {
  id: string;
  symbol: string;
  ipa: string;
  category: PhonemeCategory;
  exampleWord: string;
  imageWord: string;
  audioFile: string;
  voiced: boolean;
  nasal: boolean;
  airflow: 'stream' | 'puff' | 'vowel';
  jawOpen: number;
  lipMode: LipMode;
  tongueMode: TongueMode;
  frontMouthMode: FrontMouthMode;
  tipVi: string;
}

function mkPhoneme(t: PhonemeTuple): PhonemeArticulation {
  return {
    id: t.id,
    symbol: t.symbol,
    ipa: t.ipa,
    category: t.category,
    exampleWord: t.exampleWord,
    wordImageUrl: `/assets/comic/words/${t.imageWord}.webp`,
    phonemeAudioUrl: `/assets/audio/phonemes/${t.audioFile}.mp3`,
    voiced: t.voiced,
    nasal: t.nasal,
    airflow: t.airflow,
    jawOpen: t.jawOpen,
    lipMode: t.lipMode,
    tongueMode: t.tongueMode,
    frontMouthMode: t.frontMouthMode,
    tipVi: t.tipVi,
  };
}

const RAW_PHONEMES: PhonemeTuple[] = [
  { id: 's', symbol: 's', ipa: '/s/', category: 'air', exampleWord: 'sun', imageWord: 'sun', audioFile: 's', voiced: false, nasal: false, airflow: 'stream', jawOpen: 0.2, lipMode: 'spread', tongueMode: 'alveolar_tip', frontMouthMode: 'smile', tipVi: 'Khép nhẹ răng, đầu lưỡi gần lợi trên và thổi hơi gió xì nhẹ: s-s-s.' },
  { id: 'z', symbol: 'z', ipa: '/z/', category: 'air', exampleWord: 'zoo', imageWord: 'snake', audioFile: 'z', voiced: true, nasal: false, airflow: 'stream', jawOpen: 0.2, lipMode: 'spread', tongueMode: 'alveolar_tip', frontMouthMode: 'smile', tipVi: 'Đặt lưỡi giống âm /s/ nhưng rung dây thanh ở cổ họng như tiếng ong: z-z-z.' },
  { id: 'sh', symbol: 'sh', ipa: '/ʃ/', category: 'air', exampleWord: 'ship', imageWord: 'ship', audioFile: 'sh', voiced: false, nasal: false, airflow: 'stream', jawOpen: 0.3, lipMode: 'rounded', tongueMode: 'postalveolar_dome', frontMouthMode: 'pucker_sh', tipVi: 'Chu nhẹ hai môi tròn ra phía trước và thổi luồng gió dài êm: sh-sh-sh.' },
  { id: 'ch', symbol: 'ch', ipa: '/tʃ/', category: 'air', exampleWord: 'chick', imageWord: 'pup', audioFile: 'ch', voiced: false, nasal: false, airflow: 'puff', jawOpen: 0.32, lipMode: 'rounded', tongueMode: 'postalveolar_dome', frontMouthMode: 'pucker_sh', tipVi: 'Ép lưỡi lên vòm miệng rồi bật hơi nhanh kèm chu môi tròn: ch!' },
  { id: 'th', symbol: 'th', ipa: '/θ/', category: 'air', exampleWord: 'think', imageWord: 'star', audioFile: 'th_unvoiced', voiced: false, nasal: false, airflow: 'stream', jawOpen: 0.34, lipMode: 'neutral', tongueMode: 'interdental', frontMouthMode: 'teeth_th', tipVi: 'Đặt nhẹ đầu lưỡi giữa hai hàm răng rồi thổi luồng hơi gió nhẹ ra ngoài.' },
  { id: 'f', symbol: 'f', ipa: '/f/', category: 'air', exampleWord: 'fish', imageWord: 'fish', audioFile: 'f', voiced: false, nasal: false, airflow: 'stream', jawOpen: 0.28, lipMode: 'teeth_lip', tongueMode: 'bilabial_flat', frontMouthMode: 'teeth_th', tipVi: 'Răng trên chạm nhẹ môi dưới và thổi luồng hơi gió mịn: f-f-f.' },
  { id: 'v', symbol: 'v', ipa: '/v/', category: 'air', exampleWord: 'van', imageWord: 'train', audioFile: 'v', voiced: true, nasal: false, airflow: 'stream', jawOpen: 0.28, lipMode: 'teeth_lip', tongueMode: 'bilabial_flat', frontMouthMode: 'teeth_th', tipVi: 'Răng trên chạm môi dưới giống /f/ nhưng làm rung cổ họng thật rõ: v-v-v.' },
  { id: 'p', symbol: 'p', ipa: '/p/', category: 'pop', exampleWord: 'pig', imageWord: 'pig', audioFile: 'p', voiced: false, nasal: false, airflow: 'puff', jawOpen: 0.1, lipMode: 'closed', tongueMode: 'bilabial_flat', frontMouthMode: 'closed_mm', tipVi: 'Mím chặt hai môi rồi bật mạnh một luồng hơi gió không rung cổ họng: p!' },
  { id: 'b', symbol: 'b', ipa: '/b/', category: 'pop', exampleWord: 'ball', imageWord: 'top', audioFile: 'b', voiced: true, nasal: false, airflow: 'puff', jawOpen: 0.12, lipMode: 'closed', tongueMode: 'bilabial_flat', frontMouthMode: 'closed_mm', tipVi: 'Mím nhẹ hai môi, rung cổ họng và bật dứt khoát âm /b/ tròn gọn.' },
  { id: 't', symbol: 't', ipa: '/t/', category: 'pop', exampleWord: 'top', imageWord: 'top', audioFile: 't', voiced: false, nasal: false, airflow: 'puff', jawOpen: 0.35, lipMode: 'neutral', tongueMode: 'alveolar_tip', frontMouthMode: 'open_ah', tipVi: 'Đặt đầu lưỡi chạm lợi trên rồi bật hơi nhanh dứt khoát: t!' },
  { id: 'd', symbol: 'd', ipa: '/d/', category: 'pop', exampleWord: 'dish', imageWord: 'dish', audioFile: 'd', voiced: true, nasal: false, airflow: 'puff', jawOpen: 0.36, lipMode: 'neutral', tongueMode: 'alveolar_tip', frontMouthMode: 'open_ah', tipVi: 'Đầu lưỡi chạm lợi trên như âm /t/ nhưng bật kèm tiếng rung ở cổ họng: d!' },
  { id: 'k', symbol: 'k', ipa: '/k/', category: 'pop', exampleWord: 'cat', imageWord: 'cat', audioFile: 'k', voiced: false, nasal: false, airflow: 'puff', jawOpen: 0.45, lipMode: 'neutral', tongueMode: 'velar_back', frontMouthMode: 'open_ah', tipVi: 'Nâng phần cuống lưỡi chạm vòm mềm phía sau rồi bật hơi gọn: k!' },
  { id: 'g', symbol: 'g', ipa: '/g/', category: 'pop', exampleWord: 'goat', imageWord: 'mouse', audioFile: 'g', voiced: true, nasal: false, airflow: 'puff', jawOpen: 0.46, lipMode: 'neutral', tongueMode: 'velar_back', frontMouthMode: 'open_ah', tipVi: 'Nâng cuống lưỡi phía sau, rung dây thanh và bật nhẹ: g!' },
  { id: 'm', symbol: 'm', ipa: '/m/', category: 'nasal_liquid', exampleWord: 'moon', imageWord: 'moon', audioFile: 'm', voiced: true, nasal: true, airflow: 'stream', jawOpen: 0.08, lipMode: 'closed', tongueMode: 'bilabial_flat', frontMouthMode: 'closed_mm', tipVi: 'Khép nhẹ hai môi và ngân âm ấm áp đi qua mũi: m-m-m.' },
  { id: 'n', symbol: 'n', ipa: '/n/', category: 'nasal_liquid', exampleWord: 'ten', imageWord: 'ten', audioFile: 'n', voiced: true, nasal: true, airflow: 'stream', jawOpen: 0.34, lipMode: 'neutral', tongueMode: 'alveolar_tip', frontMouthMode: 'open_ah', tipVi: 'Chạm đầu lưỡi lên lợi trên, mở hé miệng và ngân tiếng qua mũi: n-n-n.' },
  { id: 'l', symbol: 'l', ipa: '/l/', category: 'nasal_liquid', exampleWord: 'shell', imageWord: 'shell', audioFile: 'l', voiced: true, nasal: false, airflow: 'stream', jawOpen: 0.38, lipMode: 'neutral', tongueMode: 'alveolar_tip', frontMouthMode: 'open_ah', tipVi: 'Chạm đầu lưỡi vào sau răng cửa trên, để luồng âm chảy êm hai bên lưỡi.' },
  { id: 'r', symbol: 'r', ipa: '/r/', category: 'nasal_liquid', exampleWord: 'train', imageWord: 'train', audioFile: 'r', voiced: true, nasal: false, airflow: 'stream', jawOpen: 0.42, lipMode: 'rounded', tongueMode: 'retroflex', frontMouthMode: 'pucker_sh', tipVi: 'Cuộn nhẹ đầu lưỡi về sau không chạm vòm miệng, hơi chu tròn môi: r-r-r.' },
  { id: 'a', symbol: 'a', ipa: '/æ/', category: 'vowel', exampleWord: 'apple', imageWord: 'apple', audioFile: 'a', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.85, lipMode: 'spread', tongueMode: 'low_open', frontMouthMode: 'open_ah', tipVi: 'Mở rộng hàm dưới, kéo nhẹ khóe miệng sang hai bên và đọc gọn âm A ngắn.' },
  { id: 'e', symbol: 'e', ipa: '/ɛ/', category: 'vowel', exampleWord: 'pen', imageWord: 'pen', audioFile: 'e', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.55, lipMode: 'neutral', tongueMode: 'high_front', frontMouthMode: 'open_ah', tipVi: 'Mở miệng vừa phải, lưỡi nâng vừa phía trước và đọc ngắn gọn: e!' },
  { id: 'i', symbol: 'i', ipa: '/ɪ/', category: 'vowel', exampleWord: 'milk', imageWord: 'milk', audioFile: 'i', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.36, lipMode: 'spread', tongueMode: 'high_front', frontMouthMode: 'smile', tipVi: 'Thả lỏng môi hơi mỉm nhẹ, đọc nhanh và gọn âm /ɪ/ như trong milk.' },
  { id: 'o', symbol: 'o', ipa: '/ɒ/', category: 'vowel', exampleWord: 'sock', imageWord: 'sock', audioFile: 'o', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.88, lipMode: 'rounded', tongueMode: 'mid_back', frontMouthMode: 'round_o', tipVi: 'Hạ hàm sâu, mở tròn miệng vừa phải và vang âm O ngắn tròn trịa.' },
  { id: 'u', symbol: 'u', ipa: '/ʌ/', category: 'vowel', exampleWord: 'pup', imageWord: 'pup', audioFile: 'u', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.58, lipMode: 'neutral', tongueMode: 'low_open', frontMouthMode: 'open_ah', tipVi: 'Thả lỏng hoàn toàn môi và lưỡi ở giữa miệng, bật ngắn âm /ʌ/.' },
  { id: 'ee', symbol: 'ee', ipa: '/iː/', category: 'vowel', exampleWord: 'bee', imageWord: 'ant', audioFile: 'ee', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.24, lipMode: 'spread', tongueMode: 'high_front', frontMouthMode: 'smile', tipVi: 'Cười mỉm kéo căng hai khóe miệng, nâng lưỡi cao và kéo dài âm i-i.' },
  { id: 'oo', symbol: 'oo', ipa: '/uː/', category: 'vowel', exampleWord: 'moon', imageWord: 'moon', audioFile: 'oo_long', voiced: true, nasal: false, airflow: 'vowel', jawOpen: 0.34, lipMode: 'rounded', tongueMode: 'mid_back', frontMouthMode: 'round_o', tipVi: 'Chu môi thành vòng tròn nhỏ và kéo dài luồng âm u-u êm ái.' },
];

export const SOUND_LAB_PHONEMES: PhonemeArticulation[] = RAW_PHONEMES.map(mkPhoneme);

export function getPhonemeById(id: string): PhonemeArticulation {
  return SOUND_LAB_PHONEMES.find((p) => p.id === id) || SOUND_LAB_PHONEMES[0];
}
