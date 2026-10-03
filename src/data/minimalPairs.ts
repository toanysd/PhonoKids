import { MinimalPairItem } from '../types/phonics';

export const MINIMAL_PAIRS_DRILLS: MinimalPairItem[] = [
  {
    id: 'mp_p_b_1',
    pairName: '/p/ (Thổi hơi nhẹ) vs /b/ (Rung cổ họng)',
    phonemeA: '/p/',
    phonemeB: '/b/',
    questionPrompt: 'Listen carefully: Which word starts with /p/?',
    targetWord: 'pen',
    distractorWord: 'ben',
    correctPhoneme: '/p/',
    targetEmoji: '🖊️',
    distractorEmoji: '👦',
    hintVi: '/p/ mím môi thổi hơi mát ra ngón tay, không rung cổ. /b/ có tiếng rung "bờ" trong cổ họng.'
  },
  {
    id: 'mp_p_b_2',
    pairName: '/p/ vs /b/',
    phonemeA: '/p/',
    phonemeB: '/b/',
    questionPrompt: 'Find the picture for: Pig /p-ɪ-g/',
    targetWord: 'pig',
    distractorWord: 'big',
    correctPhoneme: '/p/',
    targetEmoji: '🐷',
    distractorEmoji: '🐘',
    hintVi: 'Chú heo là "pig" bắt đầu bằng âm bật hơi /p/.'
  },
  {
    id: 'mp_s_sh_1',
    pairName: '/s/ (Cười hé răng) vs /ʃ/ (Chu môi giữ trật tự)',
    phonemeA: '/s/',
    phonemeB: '/ʃ/',
    questionPrompt: 'Listen: Which one is "sun" /s-ʌ-n/?',
    targetWord: 'sun',
    distractorWord: 'shun',
    correctPhoneme: '/s/',
    targetEmoji: '☀️',
    distractorEmoji: '🙈',
    hintVi: '/s/ mỉm cười nhẹ xì hơi sssss. /ʃ/ chu tròn môi như suỵt shhhh im lặng.'
  },
  {
    id: 'mp_s_sh_2',
    pairName: '/s/ vs /ʃ/',
    phonemeA: '/s/',
    phonemeB: '/ʃ/',
    questionPrompt: 'Listen: Find the "ship" /ʃ-ɪ-p/?',
    targetWord: 'ship',
    distractorWord: 'sip',
    correctPhoneme: '/ʃ/',
    targetEmoji: '🚢',
    distractorEmoji: '🧃',
    hintVi: 'Con tàu là "ship" chu môi phát âm /ʃ/.'
  },
  {
    id: 'mp_t_d_1',
    pairName: '/t/ (Gõ nhẹ không rung) vs /d/ (Gõ trầm có rung)',
    phonemeA: '/t/',
    phonemeB: '/d/',
    questionPrompt: 'Which one is "tap" /t-æ-p/?',
    targetWord: 'tap',
    distractorWord: 'dab',
    correctPhoneme: '/t/',
    targetEmoji: '🚰',
    distractorEmoji: '🕺',
    hintVi: '/t/ gõ đầu lưỡi tích tắc không rung cổ. /d/ có âm đục trầm rung cổ họng.'
  },
  {
    id: 'mp_f_v_1',
    pairName: '/f/ (Cắn môi thổi hơi) vs /v/ (Cắn môi rung kèn)',
    phonemeA: '/f/',
    phonemeB: '/v/',
    questionPrompt: 'Listen: Find "fan" /f-æ-n/?',
    targetWord: 'fan',
    distractorWord: 'van',
    correctPhoneme: '/f/',
    targetEmoji: '🪭',
    distractorEmoji: '🚐',
    hintVi: 'Răng trên chạm môi dưới. /f/ chỉ xì hơi gió, /v/ rung như còi xe buýt vvvvv.'
  }
];
