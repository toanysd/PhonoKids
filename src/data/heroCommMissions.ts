export interface HeroCommMission {
  id: string;
  emoji: string;
  labelVi: string;
  promptEn: string;
  replyEn: string;
  replyVi: string;
}

export const HERO_COMM_WELCOME = {
  en: 'Hello hero explorer! Tap the walkie-talkie and talk with me!',
  vi: 'Chào bạn nhỏ dũng cảm! Bấm bộ đàm nói chuyện cùng tớ nào!',
};

export const HERO_COMM_MISSIONS: HeroCommMission[] = [
  {
    id: 'greet',
    emoji: '👋',
    labelVi: 'Chào buổi sáng Anh Hùng',
    promptEn: 'Hello! I am ready to play!',
    replyEn: 'Awesome! Let us fly and learn together today!',
    replyVi: 'Tuyệt vời! Hôm nay chúng mình cùng bay đi khám phá tiếng Anh nhé!',
  },
  {
    id: 'phonics_a',
    emoji: '🍎',
    labelVi: 'Hỏi âm /a/ Quả Táo',
    promptEn: 'Can you teach me a cute apple word?',
    replyEn: 'A is for crunchy red apple! Say apple with me!',
    replyVi: 'Âm /æ/ là quả táo đỏ giòn tan! Bé đọc cùng tớ: Apple!',
  },
  {
    id: 'story_cat',
    emoji: '🐱',
    labelVi: 'Nghe kể chuyện Chú Mèo',
    promptEn: 'Tell me a short story about a cat!',
    replyEn: 'Once upon a time, a happy orange cat sat on a soft mat!',
    replyVi: 'Ngày xửa ngày xưa, có một chú mèo cam vui vẻ ngồi trên tấm thảm êm!',
  },
  {
    id: 'riddle_s',
    emoji: '☀️',
    labelVi: 'Đố vui Ông Mặt Trời',
    promptEn: 'Give me a fun sun riddle!',
    replyEn: 'What shines warm and bright starting with S? Yes, the sun!',
    replyVi: 'Cái gì tỏa nắng vàng rực bắt đầu bằng âm S? Đúng rồi, Ông Mặt Trời!',
  },
  {
    id: 'praise',
    emoji: '⭐',
    labelVi: 'Khen bé chăm ngoan',
    promptEn: 'I practiced English very hard today!',
    replyEn: 'Super job! You are my bravest star hero today!',
    replyVi: 'Quá đỉnh luôn! Hôm nay bé chính là siêu anh hùng dũng cảm nhất!',
  },
  {
    id: 'can_do',
    emoji: '🚀',
    labelVi: 'Khẩu hiệu Siêu Anh Hùng',
    promptEn: 'Can we win the next island?',
    replyEn: 'Yes, we can! Power up your voice and let us go!',
    replyVi: 'Chắc chắn rồi! Bật năng lượng giọng nói và lên đường thôi!',
  },
];
