import {
  CurriculumUnit,
  DialogueChallenge,
  LetterTraceChallenge,
  MysteryChestChallenge,
  QaChoiceOption,
  SoundForgeChallenge,
  StageNodeType,
} from '../types/heroGame';
import { PHONICS_WORD_BANK } from './phonicsWordBank';
import { LETTER_TRACE_BY_UNIT } from './curriculumInteractiveData';

const VALID_PHONEME_IDS = new Set([
  's', 'a', 't', 'i', 'p', 'n', 'c', 'k', 'e', 'h', 'r', 'm', 'd',
  'g', 'o', 'u', 'l', 'f', 'b', 'ai', 'j', 'oa', 'ie', 'ee', 'or',
  'z', 'w', 'ng', 'v', 'oo_short', 'oo_long', 'y', 'x', 'ch', 'sh',
  'th_unvoiced', 'th_voiced', 'qu', 'ou', 'oi', 'ue', 'er', 'ar',
  'th', 'oo',
]);

const NODE_CADENCE: Record<number, StageNodeType> = {
  1: 'hunt',
  2: 'forge',
  3: 'mystery_chest',
  4: 'boss_raid',
  5: 'rune_trace',
  6: 'forge',
  7: 'mystery_chest',
  8: 'boss_raid',
};

function ltExp(
  unitId: string,
  phonemeId: string,
  displayChar: string,
  exampleWordEn: string,
  meaningVi: string,
  instructionVi: string,
  emoji: string
): LetterTraceChallenge {
  return {
    id: `lt_${unitId}`,
    phonemeId,
    displayChar,
    soundPromptEn: `${phonemeId}, ${exampleWordEn}!`,
    exampleWordEn,
    meaningVi,
    instructionVi,
    emoji,
  };
}

function qaExp(
  id: string,
  speakerPromptEn: string,
  questionMeaningVi: string,
  childTargetEn: string,
  visualWordKey: string,
  emoji: string,
  acceptableKeywords: string[],
  choices: Array<[string, string, string, boolean]>
): DialogueChallenge {
  const qaChoices: QaChoiceOption[] = choices.map(([answerEn, answerVi, cEmoji, isCorrect], i) => ({
    id: `${id}_c${i + 1}`,
    answerEn,
    answerVi,
    emoji: cEmoji,
    isCorrect,
  }));
  return {
    id,
    speakerPromptEn,
    questionMeaningVi,
    childTargetEn,
    meaningVi: `Chọn đáp án đúng rồi nói: "${childTargetEn}"`,
    interactionType: 'qa',
    qaChoices,
    visualWordKey,
    emoji,
    acceptableKeywords,
  };
}

const LETTER_TRACE_EXPANSION: Record<string, LetterTraceChallenge> = {
  u1_5: ltExp('u1_5', 'b', 'b', 'Ball', 'Chữ b trong từ Ball (Quả bóng)', 'Kéo cột dọc rồi vẽ bụng tròn bên phải tạo chữ b!', '⚽'),
  u1_6: ltExp('u1_6', 't', 't', 'Three', 'Chữ t trong từ Three (Số 3)', 'Kéo thẳng từ trên xuống rồi gạch ngang tạo chữ t!', '🔢'),
  u1_7: ltExp('u1_7', 'p', 'p', 'Pig', 'Chữ p trong từ Pig (Chú heo)', 'Kéo chân thẳng xuống rồi vẽ bụng tròn bên phải tạo chữ p!', '🐷'),
  u1_8: ltExp('u1_8', 's', 's', 'Star', 'Chữ s trong từ Star (Ngôi sao)', 'Uốn lượn 2 nhịp như rắn con tạo chữ s!', '⭐'),
  u2_5: ltExp('u2_5', 'n', 'n', 'Nest', 'Chữ n trong từ Nest (Tổ chim)', 'Kéo thẳng xuống rồi uốn 1 cổng vòm tạo chữ n!', '🪺'),
  u2_6: ltExp('u2_6', 'f', 'f', 'Fox', 'Chữ f trong từ Fox (Chú cáo)', 'Uốn móc câu từ trên kéo xuống rồi gạch ngang tạo chữ f!', '🦊'),
  u2_7: ltExp('u2_7', 'k', 'k', 'Kite', 'Chữ k trong từ Kite (Cánh diều)', 'Kéo lưng cao rồi đá 2 nét chéo tạo chữ k!', '🪁'),
  u2_8: ltExp('u2_8', 'l', 'l', 'Lime', 'Chữ l trong từ Lime (Quả chanh)', 'Kéo 1 nét thẳng đứng thật gọn tạo chữ l!', '🍋'),
  u3_5: ltExp('u3_5', 'o', 'o', 'Hop', 'Nguyên âm ngắn /ɒ/ trong Hop', 'Vẽ vòng tròn khép kín tạo chữ o!', '🐸'),
  u3_6: ltExp('u3_6', 'i', 'i', 'Sit', 'Nguyên âm ngắn /ɪ/ trong Sit', 'Kéo thẳng xuống rồi chấm tròn trên đầu tạo chữ i!', '🪑'),
  u3_7: ltExp('u3_7', 'u', 'u', 'Bug', 'Nguyên âm ngắn /ʌ/ trong Bug', 'Uốn chiếc cốc ngửa miệng lên tạo chữ u!', '🐞'),
  u3_8: ltExp('u3_8', 'c', 'c', 'Cat', 'Âm /k/ trong Cat nap', 'Vẽ nét cong mở miệng sang phải tạo chữ c!', '🐱'),
  u4_5: ltExp('u4_5', 'c', 'c', 'Carrot', 'Chữ c trong từ Carrot (Cà rốt)', 'Uốn vòng cong mở sang phải tạo chữ c!', '🥕'),
  u4_6: ltExp('u4_6', 'w', 'w', 'Swing', 'Chữ w trong từ Swing (Xích đu)', 'Zíc-zắc 4 nhịp sóng biển tạo chữ w!', '🎠'),
  u4_7: ltExp('u4_7', 'r', 'r', 'Ruler', 'Chữ r trong từ Ruler (Thước kẻ)', 'Kéo thẳng xuống rồi uốn nhẹ nhánh nhỏ tạo chữ r!', '📏'),
  u4_8: ltExp('u4_8', 'g', 'g', 'Giraffe', 'Chữ g trong từ Giraffe (Hươu cao cổ)', 'Vẽ đầu tròn rồi kéo móc câu xuống tạo chữ g!', '🦒'),
  u5_5: ltExp('u5_5', 'b', 'b', 'Boat', 'Chữ b trong từ Boat (Con thuyền)', 'Kéo lưng thẳng rồi vẽ bụng phải tạo chữ b!', '⛵'),
  u5_6: ltExp('u5_6', 'm', 'm', 'Moon', 'Chữ m trong từ Moon (Mặt trăng)', 'Kéo thẳng rồi uốn 2 đỉnh núi tạo chữ m!', '🌙'),
  u5_7: ltExp('u5_7', 'sh', 'sh', 'Shells', 'Tổ hợp /ʃ/ — sh (Shells)', 'Tô nối chữ s và chữ h tạo âm sh!', '🐚'),
  u5_8: ltExp('u5_8', 'th', 'th', 'Three', 'Tổ hợp /θ/ — th (Three moths)', 'Tô chữ t nối chữ h luyện âm th!', '🦋'),
  u6_5: ltExp('u6_5', 'f', 'f', 'Farmer', 'Chữ f trong từ Farmer (Nông dân)', 'Uốn móc câu kéo thẳng rồi gạch ngang tạo chữ f!', '🚜'),
  u6_6: ltExp('u6_6', 'q', 'q', 'Queen', 'Chữ q trong từ Queen coin', 'Vẽ bụng tròn bên trái rồi kéo chân thẳng tạo chữ q!', '🪙'),
  u6_7: ltExp('u6_7', 'd', 'd', 'Day', 'Chữ d trong từ Day (Mỗi ngày)', 'Vẽ bụng tròn trái trước rồi kéo lưng cao tạo chữ d!', '📖'),
  u6_8: ltExp('u6_8', 'ch', 'ch', 'Champion', 'Tổ hợp /tʃ/ — ch (Champion)', 'Tô cặp chữ ch vinh danh nhà vô địch!', '👑'),
};

const QA_EXPANSION: Record<string, DialogueChallenge> = {
  u1_5: qaExp('qa_u1_5', 'What toy do you like?', 'Bạn thích món đồ chơi nào?', 'I like a ball!', 'ball', '⚽', ['ball', 'kite', 'doll'], [
    ['I am sleepy!', 'Tớ buồn ngủ!', '😴', false],
    ['I like a ball!', 'Tớ thích quả bóng!', '⚽', true],
    ['Red apple!', 'Quả táo đỏ!', '🍎', false],
  ]),
  u1_6: qaExp('qa_u1_6', 'How many fish can you see?', 'Bạn nhìn thấy mấy chú cá?', 'Three fish!', 'three_fish', '🐟', ['three', 'three fish'], [
    ['Three fish!', 'Ba chú cá!', '🐟', true],
    ['Good night!', 'Chúc ngủ ngon!', '🌙', false],
    ['Blue sky!', 'Bầu trời xanh!', '☁️', false],
  ]),
  u1_7: qaExp('qa_u1_7', 'Which animal goes oink oink?', 'Bạn nào kêu ủn ỉn vậy nhỉ?', 'A pink pig!', 'pig', '🐷', ['pig', 'pink pig'], [
    ['A red book!', 'Quyển sách đỏ!', '📘', false],
    ['A green tree!', 'Cây xanh lá!', '🌳', false],
    ['A pink pig!', 'Bạn heo hồng!', '🐷', true],
  ]),
  u1_8: qaExp('qa_u1_8', 'What shines at night?', 'Cái gì tỏa sáng trên trời đêm?', 'The moon and stars!', 'moon_spoon', '🌙', ['moon', 'star', 'stars'], [
    ['The moon and stars!', 'Trăng và những ngôi sao!', '🌙', true],
    ['A brown dog!', 'Chú chó nâu!', '🐶', false],
    ['Yellow banana!', 'Quả chuối vàng!', '🍌', false],
  ]),
  u2_5: qaExp('qa_u2_5', 'What starts with the sound p?', 'Vật nào bắt đầu bằng âm /p/?', 'A pink pen!', 'pen', '🖊️', ['pen', 'pig', 'pink pen'], [
    ['A red sun!', 'Ông mặt trời!', '☀️', false],
    ['A pink pen!', 'Cây bút hồng!', '🖊️', true],
    ['A big cat!', 'Chú mèo to!', '🐱', false],
  ]),
  u2_6: qaExp('qa_u2_6', 'Who can run super fast?', 'Bạn nào chạy siêu nhanh với âm /f/?', 'A fast red fox!', 'fox_box', '🦊', ['fox', 'red fox', 'fast'], [
    ['A fast red fox!', 'Chú cáo đỏ nhanh nhẹn!', '🦊', true],
    ['A cozy bed!', 'Chiếc giường êm!', '🛏️', false],
    ['A round cup!', 'Chiếc cốc tròn!', '🥛', false],
  ]),
  u2_7: qaExp('qa_u2_7', 'What flies high in the wind?', 'Vật gì bay cao trong gió với âm /k/?', 'A colorful kite!', 'kite', '🪁', ['kite', 'colorful kite'], [
    ['A tiny ant!', 'Chú kiến nhỏ!', '🐜', false],
    ['A colorful kite!', 'Cánh diều rực rỡ!', '🪁', true],
    ['A heavy box!', 'Cái hộp nặng!', '📦', false],
  ]),
  u2_8: qaExp('qa_u2_8', 'Who flies to the stars?', 'Ai bay vút lên các vì sao với âm /r/?', 'A red rocket!', 'rocket', '🚀', ['rocket', 'red rocket'], [
    ['A red rocket!', 'Tên lửa đỏ!', '🚀', true],
    ['A green lime!', 'Quả chanh xanh!', '🍋', false],
    ['A brown mug!', 'Chiếc cốc nâu!', '☕', false],
  ]),
  u3_5: qaExp('qa_u3_5', 'What can a little frog do?', 'Chú ếch nhỏ biết làm gì?', 'A frog can hop!', 'frog_log', '🐸', ['hop', 'jump', 'frog can hop'], [
    ['Drive a train!', 'Lái tàu hỏa!', '🚆', false],
    ['A frog can hop!', 'Ếch biết nhảy bật!', '🐸', true],
    ['Read a pen!', 'Đọc cây bút!', '🖊️', false],
  ]),
  u3_6: qaExp('qa_u3_6', 'Where do you sit neatly?', 'Bé ngồi ngay ngắn ở đâu?', 'Sit in the sun!', 'sit', '🪑', ['sit', 'mat', 'sun'], [
    ['Sit in the sun!', 'Ngồi ngoài nắng ấm!', '☀️', true],
    ['Fly on a fork!', 'Bay trên cái nĩa!', '🍴', false],
    ['Swim in a hat!', 'Bơi trong cái mũ!', '🎩', false],
  ]),
  u3_7: qaExp('qa_u3_7', 'Where is the little bug?', 'Chú bọ nhỏ đang ở đâu?', 'On the soft rug!', 'bug_rug', '🐞', ['rug', 'on the rug', 'bug'], [
    ['In my coffee!', 'Trong cốc cà phê!', '☕', false],
    ['Under a rocket!', 'Dưới tên lửa!', '🚀', false],
    ['On the soft rug!', 'Trên tấm thảm êm!', '🧶', true],
  ]),
  u3_8: qaExp('qa_u3_8', 'What is the cat doing?', 'Chú mèo cam đang làm gì đấy?', 'Taking a cat nap!', 'cat_nap', '😴', ['nap', 'cat nap', 'sleep'], [
    ['Taking a cat nap!', 'Đang ngủ trưa say giấc!', '😴', true],
    ['Driving a ship!', 'Đang lái tàu thủy!', '🚢', false],
    ['Eating a ruler!', 'Đang ăn thước kẻ!', '📏', false],
  ]),
  u4_5: qaExp('qa_u4_5', 'What do you want for lunch?', 'Trưa nay bé muốn ăn gì nào?', 'I want an apple!', 'apple', '🍎', ['apple', 'carrot', 'i want'], [
    ['I want soap!', 'Tớ muốn ăn xà phòng!', '🧼', false],
    ['I want an apple!', 'Tớ muốn một quả táo!', '🍎', true],
    ['It is Monday!', 'Hôm nay là thứ Hai!', '📅', false],
  ]),
  u4_6: qaExp('qa_u4_6', 'What do you like at the park?', 'Ở công viên bé thích chơi trò gì?', 'I can swing high!', 'swing', '🎠', ['swing', 'play', 'run'], [
    ['I can swing high!', 'Tớ đánh đu thật cao!', '🎠', true],
    ['Wash the dishes!', 'Đi rửa bát đĩa!', '🍽️', false],
    ['Time for sleep!', 'Đến giờ đi ngủ!', '🌙', false],
  ]),
  u4_7: qaExp('qa_u4_7', 'What is inside your school bag?', 'Trong cặp đi học của bé có gì?', 'A ruler and book!', 'ruler', '📏', ['ruler', 'book', 'pen'], [
    ['A sleeping pig!', 'Chú heo đang ngủ!', '🐷', false],
    ['A spiky hedgehog!', 'Chú nhím đầy gai!', '🦔', false],
    ['A ruler and book!', 'Thước kẻ và sách!', '📏', true],
  ]),
  u4_8: qaExp('qa_u4_8', 'Which animal has a long neck?', 'Bạn thú nào có chiếc cổ dài nhất?', 'A tall giraffe!', 'giraffe', '🦒', ['giraffe', 'tall'], [
    ['A tall giraffe!', 'Bạn hươu cao cổ!', '🦒', true],
    ['A tiny ant!', 'Chú kiến tí hon!', '🐜', false],
    ['A round ball!', 'Quả bóng tròn!', '⚽', false],
  ]),
  u5_5: qaExp('qa_u5_5', 'Who is sailing the yellow boat?', 'Ai đang chèo chiếc thuyền vàng?', 'A goat in a boat!', 'goat_boat', '⛵', ['goat', 'boat'], [
    ['A fox in a pan!', 'Cáo ở trong chảo!', '🦊', false],
    ['A goat in a boat!', 'Chú dê trên thuyền!', '⛵', true],
    ['A frog on a book!', 'Ếch trên quyển sách!', '🐸', false],
  ]),
  u5_6: qaExp('qa_u5_6', 'What shines beside the spoon?', 'Vật gì tỏa sáng bên chiếc thìa bạc?', 'The bright round moon!', 'moon_spoon', '🌙', ['moon', 'bright moon'], [
    ['The bright round moon!', 'Vầng trăng tròn sáng!', '🌙', true],
    ['A heavy brown box!', 'Chiếc hộp nâu nặng!', '📦', false],
    ['Ten sour limes!', 'Mười quả chanh chua!', '🍋', false],
  ]),
  u5_7: qaExp('qa_u5_7', 'Where does the fast train go?', 'Đoàn tàu nhanh đang chạy đi đâu?', 'Train in the rain!', 'train_rain', '🚆', ['rain', 'train', 'in the rain'], [
    ['Inside an eraser!', 'Trong cục tẩy!', '🧽', false],
    ['Under a carrot!', 'Dưới củ cà rốt!', '🥕', false],
    ['Train in the rain!', 'Tàu chạy dưới mưa!', '🚆', true],
  ]),
  u5_8: qaExp('qa_u5_8', 'How many moths are flying?', 'Có mấy chú bướm đang bay quanh đèn?', 'Three little moths!', 'three_moths', '🦋', ['three', 'three moths', 'moths'], [
    ['Three little moths!', 'Ba chú bướm nhỏ!', '🦋', true],
    ['Blue rubber soap!', 'Xà phòng cao su!', '🧼', false],
    ['One pink pen!', 'Một cây bút hồng!', '🖊️', false],
  ]),
  u6_5: qaExp('qa_u6_5', 'Where does the friendly farmer work?', 'Bác nông dân làm việc ở đâu?', 'In the red barn!', 'farmer_barn', '🚜', ['barn', 'farm', 'farmer'], [
    ['In the blue sea!', 'Dưới biển xanh!', '🌊', false],
    ['In the red barn!', 'Trong nhà kho đỏ!', '🚜', true],
    ['On the rainbow cloud!', 'Trên mây cầu vồng!', '☁️', false],
  ]),
  u6_6: qaExp('qa_u6_6', 'What shiny treasure did the Queen find?', 'Nữ hoàng đã tìm thấy báu vật gì?', 'A shiny gold coin!', 'queen_coin', '🪙', ['coin', 'gold coin'], [
    ['A shiny gold coin!', 'Đồng xu vàng lấp lánh!', '🪙', true],
    ['A sleepy cat nap!', 'Giấc ngủ trưa của mèo!', '😴', false],
    ['A wet red rug!', 'Tấm thảm đỏ ướt!', '🧶', false],
  ]),
  u6_7: qaExp('qa_u6_7', 'What does a smart hero do every day?', 'Siêu anh hùng chăm chỉ làm gì mỗi ngày?', 'I read a book!', 'good_book', '📖', ['read', 'book', 'read a book'], [
    ['Sleep all morning!', 'Ngủ suốt buổi sáng!', '😴', false],
    ['Hide the homework!', 'Giấu vở bài tập!', '🙈', false],
    ['I read a book!', 'Mình đọc một cuốn sách!', '📖', true],
  ]),
  u6_8: qaExp('qa_u6_8', 'Can you speak English with heroes?', 'Bé có tự tin nói tiếng Anh cùng các anh hùng không?', 'Yes, I can!', 'archipelago', '🏆', ['yes', 'yes i can', 'can'], [
    ['Yes, I can!', 'Có ạ, con làm được!', '🏆', true],
    ['No, I am sad!', 'Không, tớ buồn lắm!', '😢', false],
    ['Look at the mud!', 'Nhìn vũng bùn kìa!', '💧', false],
  ]),
};

const CURATED_FORGE_BY_WORLD: Record<number, SoundForgeChallenge[]> = {
  1: [
    { id: 'fg_w1_a', targetWord: 'sun', meaningVi: 'Mặt trời tỏa nắng', phonemes: ['s', 'u', 'n'], exampleSentenceEn: 'The sun is hot.', exampleSentenceVi: 'Mặt trời tỏa nắng ấm.', visualWordKey: 'sun', emoji: '☀️' },
    { id: 'fg_w1_b', targetWord: 'cat', meaningVi: 'Chú mèo nhỏ', phonemes: ['c', 'a', 't'], exampleSentenceEn: 'The cat sat on the mat.', exampleSentenceVi: 'Chú mèo ngồi trên thảm.', visualWordKey: 'cat', emoji: '🐱' },
    { id: 'fg_w1_c', targetWord: 'dog', meaningVi: 'Chú chó dễ thương', phonemes: ['d', 'o', 'g'], exampleSentenceEn: 'The brown dog runs fast.', exampleSentenceVi: 'Chú chó nâu chạy nhanh.', visualWordKey: 'dog', emoji: '🐶' },
    { id: 'fg_w1_d', targetWord: 'cup', meaningVi: 'Chiếc cốc sữa', phonemes: ['c', 'u', 'p'], exampleSentenceEn: 'Hold the warm cup.', exampleSentenceVi: 'Cầm chiếc cốc ấm nhé.', visualWordKey: 'cup', emoji: '🥛' },
  ],
  2: [
    { id: 'fg_w2_a', targetWord: 'pen', meaningVi: 'Chiếc bút máy', phonemes: ['p', 'e', 'n'], exampleSentenceEn: 'I write with a pen.', exampleSentenceVi: 'Tớ viết bằng cây bút.', visualWordKey: 'pen', emoji: '🖊️' },
    { id: 'fg_w2_b', targetWord: 'pig', meaningVi: 'Chú heo hồng', phonemes: ['p', 'i', 'g'], exampleSentenceEn: 'The pink pig smiles.', exampleSentenceVi: 'Chú heo hồng mỉm cười.', visualWordKey: 'pig', emoji: '🐷' },
    { id: 'fg_w2_c', targetWord: 'tin', meaningVi: 'Hộp thiếc nhỏ', phonemes: ['t', 'i', 'n'], exampleSentenceEn: 'Look inside the shiny tin.', exampleSentenceVi: 'Nhìn vào hộp thiếc sáng bóng.', visualWordKey: 'tin', emoji: '🥫' },
    { id: 'fg_w2_d', targetWord: 'hen', meaningVi: 'Cô gà mái đỏ', phonemes: ['h', 'e', 'n'], exampleSentenceEn: 'The red hen pecks corn.', exampleSentenceVi: 'Gà mái đỏ nhặt bắp.', visualWordKey: 'hen', emoji: '🐔' },
  ],
  3: [
    { id: 'fg_w3_a', targetWord: 'bug', meaningVi: 'Chú bọ cánh cứng', phonemes: ['b', 'u', 'g'], exampleSentenceEn: 'A bug is on the rug.', exampleSentenceVi: 'Chú bọ ở trên thảm.', visualWordKey: 'bug_rug', emoji: '🐞' },
    { id: 'fg_w3_b', targetWord: 'fox', meaningVi: 'Chú cáo nhanh nhẹn', phonemes: ['f', 'o', 'x'], exampleSentenceEn: 'The red fox jumps in the box.', exampleSentenceVi: 'Chú cáo nhảy vào hộp.', visualWordKey: 'fox_box', emoji: '🦊' },
    { id: 'fg_w3_c', targetWord: 'sit', meaningVi: 'Ngồi ngay ngắn', phonemes: ['s', 'i', 't'], exampleSentenceEn: 'Sit down and read with me.', exampleSentenceVi: 'Ngồi xuống đọc cùng tớ nhé.', visualWordKey: 'sit', emoji: '🪑' },
    { id: 'fg_w3_d', targetWord: 'pan', meaningVi: 'Chiếc chảo rán', phonemes: ['p', 'a', 'n'], exampleSentenceEn: 'Sam holds a big pan.', exampleSentenceVi: 'Sam cầm chiếc chảo lớn.', visualWordKey: 'sam_pan', emoji: '🍳' },
  ],
  4: [
    { id: 'fg_w4_a', targetWord: 'ship', meaningVi: 'Tàu vượt đại dương', phonemes: ['sh', 'i', 'p'], exampleSentenceEn: 'Sail the big ocean ship.', exampleSentenceVi: 'Lái con tàu ra khơi.', visualWordKey: 'ship', emoji: '🚢' },
    { id: 'fg_w4_b', targetWord: 'star', meaningVi: 'Ngôi sao lấp lánh', phonemes: ['s', 't', 'ar'], exampleSentenceEn: 'Look at the bright star.', exampleSentenceVi: 'Ngắm ngôi sao sáng kìa.', visualWordKey: 'star', emoji: '⭐' },
    { id: 'fg_w4_c', targetWord: 'fork', meaningVi: 'Chiếc nĩa ăn cơm', phonemes: ['f', 'or', 'k'], exampleSentenceEn: 'Use a clean fork to eat.', exampleSentenceVi: 'Dùng nĩa sạch để ăn nhé.', visualWordKey: 'fork', emoji: '🍴' },
    { id: 'fg_w4_d', targetWord: 'tree', meaningVi: 'Cây xanh cao vút', phonemes: ['t', 'r', 'ee'], exampleSentenceEn: 'Green leaves grow on the tree.', exampleSentenceVi: 'Lá xanh mọc trên cây.', visualWordKey: 'bee_tree', emoji: '🌳' },
  ],
  5: [
    { id: 'fg_w5_a', targetWord: 'boat', meaningVi: 'Con thuyền buồm', phonemes: ['b', 'oa', 't'], exampleSentenceEn: 'The goat rows the yellow boat.', exampleSentenceVi: 'Chú dê chèo thuyền vàng.', visualWordKey: 'goat_boat', emoji: '⛵' },
    { id: 'fg_w5_b', targetWord: 'rain', meaningVi: 'Cơn mưa mát lành', phonemes: ['r', 'ai', 'n'], exampleSentenceEn: 'The train speeds through the rain.', exampleSentenceVi: 'Đoàn tàu chạy dưới mưa.', visualWordKey: 'train_rain', emoji: '🌧️' },
    { id: 'fg_w5_c', targetWord: 'moon', meaningVi: 'Mặt trăng tròn', phonemes: ['m', 'oo_long', 'n'], exampleSentenceEn: 'A silver spoon beside the moon.', exampleSentenceVi: 'Chiếc thìa bạc cạnh mặt trăng.', visualWordKey: 'moon_spoon', emoji: '🌙' },
    { id: 'fg_w5_d', targetWord: 'book', meaningVi: 'Quyển sách hay', phonemes: ['b', 'oo_short', 'k'], exampleSentenceEn: 'Open this good picture book.', exampleSentenceVi: 'Mở cuốn sách tranh hay này ra.', visualWordKey: 'good_book', emoji: '📘' },
  ],
  6: [
    { id: 'fg_w6_a', targetWord: 'coin', meaningVi: 'Đồng xu vàng', phonemes: ['c', 'oi', 'n'], exampleSentenceEn: 'Queen shares a golden coin.', exampleSentenceVi: 'Nữ hoàng tặng đồng xu vàng.', visualWordKey: 'queen_coin', emoji: '🪙' },
    { id: 'fg_w6_b', targetWord: 'king', meaningVi: 'Nhà vua dũng cảm', phonemes: ['k', 'i', 'ng'], exampleSentenceEn: 'The king wears a bright ring.', exampleSentenceVi: 'Nhà vua đeo chiếc nhẫn sáng.', visualWordKey: 'king_ring', emoji: '👑' },
    { id: 'fg_w6_c', targetWord: 'cloud', meaningVi: 'Đám mây trắng', phonemes: ['c', 'l', 'ou', 'd'], exampleSentenceEn: 'A clown waves from a cloud.', exampleSentenceVi: 'Chú hề vẫy tay trên đám mây.', visualWordKey: 'clown_cloud', emoji: '☁️' },
    { id: 'fg_w6_d', targetWord: 'queen', meaningVi: 'Nữ hoàng hiền hậu', phonemes: ['qu', 'ee', 'n'], exampleSentenceEn: 'The kind queen loves her garden.', exampleSentenceVi: 'Nữ hoàng yêu khu vườn của mình.', visualWordKey: 'queen_park', emoji: '👸' },
  ],
};

const MYSTERY_CHEST_BANK: MysteryChestChallenge[] = [
  { id: 'mc_1', promptEn: 'Listen carefully! Open the chest for: pen!', targetWord: 'pen', distractorWord: 'ben', targetMeaningVi: 'Chiếc bút (/p/)', distractorMeaningVi: 'Tên bạn Ben (/b/)', targetEmoji: '🖊️', distractorEmoji: '👦', targetVisualKey: 'pen', distractorVisualKey: 'sam_pan', hintVi: 'Âm /p/ bật hơi mát không rung cổ họng nhé!' },
  { id: 'mc_2', promptEn: 'Listen carefully! Open the chest for: pig!', targetWord: 'pig', distractorWord: 'big', targetMeaningVi: 'Chú heo (/p/)', distractorMeaningVi: 'To lớn (/b/)', targetEmoji: '🐷', distractorEmoji: '🐘', targetVisualKey: 'pig', distractorVisualKey: 'leo', hintVi: 'Từ pig bắt đầu bằng âm bật hơi nhẹ /p/.' },
  { id: 'mc_3', promptEn: 'Listen carefully! Open the chest for: sun!', targetWord: 'sun', distractorWord: 'shun', targetMeaningVi: 'Mặt trời (/s/)', distractorMeaningVi: 'Tránh né (/ʃ/)', targetEmoji: '☀️', distractorEmoji: '🙈', targetVisualKey: 'sun', distractorVisualKey: 'clown_cloud', hintVi: 'Âm /s/ mỉm cười nhẹ xì hơi ssss, không chu môi!' },
  { id: 'mc_4', promptEn: 'Listen carefully! Open the chest for: ship!', targetWord: 'ship', distractorWord: 'sip', targetMeaningVi: 'Con tàu (/ʃ/)', distractorMeaningVi: 'Nhấp môi uống (/s/)', targetEmoji: '🚢', distractorEmoji: '🧃', targetVisualKey: 'ship', distractorVisualKey: 'cup', hintVi: 'Con tàu là ship — chu môi nhẹ phát âm /ʃ/.' },
  { id: 'mc_5', promptEn: 'Listen carefully! Open the chest for: fan!', targetWord: 'fan', distractorWord: 'van', targetMeaningVi: 'Cái quạt (/f/)', distractorMeaningVi: 'Xe tải nhỏ (/v/)', targetEmoji: '🪭', distractorEmoji: '🚐', targetVisualKey: 'kite', distractorVisualKey: 'bus', hintVi: 'Từ fan chỉ thổi hơi gió /f/ không rung cổ.' },
  { id: 'mc_6', promptEn: 'Listen carefully! Open the chest for: cat!', targetWord: 'cat', distractorWord: 'cut', targetMeaningVi: 'Chú mèo (/æ/)', distractorMeaningVi: 'Cắt giấy (/ʌ/)', targetEmoji: '🐱', distractorEmoji: '✂️', targetVisualKey: 'cat', distractorVisualKey: 'ax', hintVi: 'Âm /æ/ trong cat mở miệng ngang tươi vui.' },
  { id: 'mc_7', promptEn: 'Listen carefully! Open the chest for: kite!', targetWord: 'kite', distractorWord: 'kit', targetMeaningVi: 'Cánh diều (/aɪ/)', distractorMeaningVi: 'Bộ đồ nghề (/ɪ/)', targetEmoji: '🪁', distractorEmoji: '🧰', targetVisualKey: 'kite', distractorVisualKey: 'tin', hintVi: 'Có chữ e câm cuối từ nên đọc vần dài /aɪ/: kite!' },
  { id: 'mc_8', promptEn: 'Listen carefully! Open the chest for: tree!', targetWord: 'tree', distractorWord: 'three', targetMeaningVi: 'Cây xanh (/tr/)', distractorMeaningVi: 'Số ba (/θr/)', targetEmoji: '🌳', distractorEmoji: '3️⃣', targetVisualKey: 'bee_tree', distractorVisualKey: 'three_moths', hintVi: 'Tree (cây) bắt đầu bằng /tr/, không thè lưỡi như three!' },
  { id: 'mc_9', promptEn: 'Listen carefully! Open the chest for: boat!', targetWord: 'boat', distractorWord: 'goat', targetMeaningVi: 'Con thuyền (/b/)', distractorMeaningVi: 'Chú dê (/g/)', targetEmoji: '⛵', distractorEmoji: '🐐', targetVisualKey: 'goat_boat', distractorVisualKey: 'frog_log', hintVi: 'Boat (con thuyền) bắt đầu bằng âm môi /b/.' },
  { id: 'mc_10', promptEn: 'Listen carefully! Open the chest for: moon!', targetWord: 'moon', distractorWord: 'spoon', targetMeaningVi: 'Mặt trăng', distractorMeaningVi: 'Chiếc thìa', targetEmoji: '🌙', distractorEmoji: '🥄', targetVisualKey: 'moon_spoon', distractorVisualKey: 'fork', hintVi: 'Nghe kỹ phụ âm đầu /m/ trong moon!' },
  { id: 'mc_11', promptEn: 'Listen carefully! Open the chest for: star!', targetWord: 'star', distractorWord: 'car', targetMeaningVi: 'Ngôi sao', distractorMeaningVi: 'Xe hơi', targetEmoji: '⭐', distractorEmoji: '🏎️', targetVisualKey: 'star', distractorVisualKey: 'rocket', hintVi: 'Star bắt đầu bằng tổ hợp phụ âm /st/!' },
  { id: 'mc_12', promptEn: 'Listen carefully! Open the chest for: coin!', targetWord: 'coin', distractorWord: 'corn', targetMeaningVi: 'Đồng xu vàng (/ɔɪ/)', distractorMeaningVi: 'Bắp ngô (/ɔːr/)', targetEmoji: '🪙', distractorEmoji: '🌽', targetVisualKey: 'queen_coin', distractorVisualKey: 'farmer_barn', hintVi: 'Coin có âm trượt /ɔɪ/ luyến rõ từ o sang i!' },
];

const STORY_IDS_ORDERED = [
  'story_cat_sat', 'story_sam_ant', 'story_sun_pig', 'story_tin_pan', 'story_red_hat', 'story_dog_mud', 'story_hen_egg', 'story_kid_kit',
  'story_frog_log', 'story_big_bug', 'story_fox_box', 'story_red_hen', 'story_rain_train', 'story_bee_tree', 'story_goat_boat', 'story_pie_jam',
  'story_king_ring', 'story_moon_spoon', 'story_good_book', 'story_wind_van', 'story_ship_fog', 'story_chip_chat', 'story_three_moths', 'story_this_that',
  'story_queen_star', 'story_clown_cloud', 'story_blue_clue', 'story_farmer_barn',
];

function buildBankForgeForWorld(worldId: number): SoundForgeChallenge[] {
  const curated = CURATED_FORGE_BY_WORLD[worldId] || CURATED_FORGE_BY_WORLD[1];
  const fromBank = PHONICS_WORD_BANK.filter(
    (item) =>
      item.group <= Math.min(7, worldId + 1) &&
      item.word.length >= 2 &&
      item.word.length <= 6 &&
      item.phonemes.length >= 2 &&
      item.phonemes.length <= 4 &&
      item.phonemes.every((p) => VALID_PHONEME_IDS.has(p.toLowerCase())) &&
      item.visual?.url?.startsWith('/assets/ehon/')
  )
    .slice(0, 6)
    .map((item, i) => ({
      id: `fg_wb_w${worldId}_${i}`,
      targetWord: item.word,
      meaningVi: item.meaningVi,
      phonemes: item.phonemes.map((p) => (p === 'oo' ? 'oo_short' : p === 'th' ? 'th_unvoiced' : p)),
      exampleSentenceEn: item.sampleSentence,
      exampleSentenceVi: item.sampleSentenceVi,
      visualWordKey: item.word.toLowerCase(),
      emoji: item.emoji || '✨',
    }));
  const merged = [...curated];
  for (const extra of fromBank) {
    if (!merged.some((m) => m.targetWord.toLowerCase() === extra.targetWord.toLowerCase())) {
      merged.push(extra);
    }
  }
  return merged;
}

export function enrichCampaignStages(units: CurriculumUnit[]): CurriculumUnit[] {
  return units.map((unit, idx) => {
    const nodeType: StageNodeType = NODE_CADENCE[unit.unitNumber] || 'hunt';
    const letterTraceRound =
      unit.letterTraceRound || LETTER_TRACE_BY_UNIT[unit.id] || LETTER_TRACE_EXPANSION[unit.id];

    const qaExtra = QA_EXPANSION[unit.id];
    const hasQa = unit.echoDuelRounds.some((e) => e.interactionType === 'qa');
    const mergedEcho =
      !hasQa && qaExtra
        ? unit.echoDuelRounds.length >= 2
          ? [unit.echoDuelRounds[0], qaExtra, ...unit.echoDuelRounds.slice(2)]
          : [...unit.echoDuelRounds, qaExtra]
        : unit.echoDuelRounds;

    const forgePool = buildBankForgeForWorld(unit.worldId);
    const forgePick = [
      forgePool[(unit.unitNumber - 1) % forgePool.length],
      forgePool[unit.unitNumber % forgePool.length],
    ];

    const chestBaseIdx = ((unit.worldId - 1) * 2 + (unit.unitNumber === 7 ? 1 : 0)) % MYSTERY_CHEST_BANK.length;
    const chestPick = [
      MYSTERY_CHEST_BANK[chestBaseIdx],
      MYSTERY_CHEST_BANK[(chestBaseIdx + 1) % MYSTERY_CHEST_BANK.length],
    ];

    const soundForgeRounds =
      nodeType === 'forge' || unit.unitNumber === 8 ? forgePick : undefined;
    const mysteryChestRounds =
      nodeType === 'mystery_chest' || unit.unitNumber === 8 ? chestPick : undefined;

    const unlockStoryId =
      idx % 2 === 1 || unit.unitNumber === 4 || unit.unitNumber === 8
        ? STORY_IDS_ORDERED[Math.min(STORY_IDS_ORDERED.length - 1, Math.floor(idx / 1.7))]
        : undefined;

    return {
      ...unit,
      nodeType,
      letterTraceRound,
      echoDuelRounds: mergedEcho,
      soundForgeRounds,
      mysteryChestRounds,
      unlockStoryId,
    };
  });
}
