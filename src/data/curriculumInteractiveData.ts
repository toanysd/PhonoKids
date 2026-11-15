import { DialogueChallenge, LetterTraceChallenge, QaChoiceOption } from '../types/heroGame';

function lt(
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

function qa(
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

export const LETTER_TRACE_BY_UNIT: Record<string, LetterTraceChallenge> = {
  u1_1: lt('u1_1', 'h', 'h', 'Hello', 'Chữ h trong từ Hello (Xin chào)', 'Tô từ trên xuống rồi uốn vòm tạo chữ h!', '👋'),
  u1_2: lt('u1_2', 'r', 'r', 'Red', 'Chữ r trong từ Red (Màu đỏ)', 'Kéo thẳng xuống rồi vòng nhẹ sang phải viết chữ r!', '🍎'),
  u1_3: lt('u1_3', 'a', 'a', 'Apple', 'Chữ a trong từ Apple (Quả táo)', 'Vẽ bụng tròn rồi kéo chân thẳng tạo chữ a!', '🍎'),
  u1_4: lt('u1_4', 'd', 'd', 'Dog', 'Chữ d trong từ Dog (Chú chó)', 'Vẽ bụng tròn bên trái trước rồi kéo lưng cao tạo chữ d!', '🐶'),
  u2_1: lt('u2_1', 's', 's', 'Sun', 'Âm /s/ — Mặt trời Sun', 'Uốn lượn như chú rắn nhỏ từ trên xuống tạo chữ s!', '☀️'),
  u2_2: lt('u2_2', 'c', 'c', 'Cat', 'Âm /k/ — Chú mèo Cat', 'Uốn vòng cong mở sang phải tạo chữ c!', '🐱'),
  u2_3: lt('u2_3', 'm', 'm', 'Mouse', 'Âm /m/ — Chú chuột Mouse', 'Kéo 1 nét thẳng rồi nhún 2 nhịp vòm tạo chữ m!', '🐭'),
  u2_4: lt('u2_4', 'b', 'b', 'Ball', 'Âm /b/ — Quả bóng Ball', 'Kéo cột dọc từ trên xuống rồi vẽ bụng tròn bên phải tạo chữ b!', '⚽'),
  u3_1: lt('u3_1', 'a', 'a', 'Cat', 'Nguyên âm ngắn /æ/ — Cat', 'Tô chữ a tròn đầy để ghép vần c-a-t!', '🐱'),
  u3_2: lt('u3_2', 'e', 'e', 'Pen', 'Nguyên âm ngắn /e/ — Pen', 'Đặt bút ở giữa, gạch ngang sang phải rồi vòng cong tạo chữ e!', '🖊️'),
  u3_3: lt('u3_3', 'o', 'o', 'Fox', 'Nguyên âm ngắn /ɒ/ — Fox', 'Vẽ một vòng tròn khép kín tạo chữ o!', '🦊'),
  u3_4: lt('u3_4', 'u', 'u', 'Bus', 'Nguyên âm ngắn /ʌ/ — Bus', 'Kéo xuống uốn đáy tròn rồi kéo xuống nhẹ chân chữ u!', '🚌'),
  u4_1: lt('u4_1', 'n', 'n', 'Nose', 'Chữ n trong từ Nose (Cái mũi)', 'Kéo xuống rồi vòng 1 cổng vòm tạo chữ n!', '👃'),
  u4_2: lt('u4_2', 'f', 'f', 'Family', 'Chữ f trong từ Family (Gia đình)', 'Uốn móc câu từ trên kéo xuống rồi gạch ngang tạo chữ f!', '👨‍👩‍👧'),
  u4_3: lt('u4_3', 'w', 'w', 'Weather', 'Chữ w trong từ Weather (Thời tiết)', 'Zíc-zắc 4 nhịp lên xuống tạo chữ w!', '🌤️'),
  u4_4: lt('u4_4', 't', 't', 'Three', 'Chữ t trong từ Three (Số 3)', 'Kéo thẳng xuống rồi gạch ngang ở trên tạo chữ t!', '3️⃣'),
  u5_1: lt('u5_1', 'k', 'k', 'Kite', 'Chữ k trong từ Kite (Cánh diều)', 'Kéo lưng cao rồi đá 2 nét chéo sang phải tạo chữ k!', '🪁'),
  u5_2: lt('u5_2', 'ee', 'ee', 'Tree', 'Nguyên âm dài /iː/ — ee (Tree)', 'Tô đôi chữ ee liền nhau để kéo dài âm /iː/!', '🌳'),
  u5_3: lt('u5_3', 'l', 'l', 'Cloud', 'Chữ l trong từ Cloud (Đám mây)', 'Kéo 1 nét thẳng mượt từ trên xuống tạo chữ l!', '☁️'),
  u5_4: lt('u5_4', 'sh', 'sh', 'Ship', 'Tổ hợp âm /ʃ/ — sh (Ship)', 'Tô chữ s nối tiếp chữ h để bật âm /ʃ/!', '🚢'),
  u6_1: lt('u6_1', 'g', 'g', 'Gold', 'Chữ g trong từ Gold (Vàng ròng)', 'Vẽ vòng tròn nhỏ rồi kéo móc câu xuống dưới tạo chữ g!', '🪙'),
  u6_2: lt('u6_2', 'th', 'th', 'Thank', 'Tổ hợp âm /θ/ — th (Thank)', 'Tô chữ t nối tiếp chữ h để luyện âm /θ/!', '🙌'),
  u6_3: lt('u6_3', 'q', 'q', 'Queen', 'Chữ q trong từ Queen (Nữ hoàng)', 'Vẽ vòng tròn rồi kéo chân thẳng có móc nhẹ tạo chữ q!', '👑'),
  u6_4: lt('u6_4', 'ch', 'ch', 'Champion', 'Tổ hợp âm /tʃ/ — ch (Champion)', 'Tô cặp chữ ch để hô vang nhà vô địch!', '🏆'),
};

export const QA_CHALLENGES_BY_UNIT: Record<string, DialogueChallenge> = {
  u1_1: qa('qa_u1_1', 'How are you today?', 'Hôm nay bạn cảm thấy thế nào?', 'I am happy!', 'happy', '😄', ['i am happy', 'happy', 'yes i am happy'], [
    ['I am sleepy!', 'Tớ buồn ngủ!', '😴', false],
    ['I am happy!', 'Tớ rất vui!', '😄', true],
    ['Good night!', 'Chúc ngủ ngon!', '🌙', false],
  ]),
  u1_2: qa('qa_u1_2', 'What color is the sun?', 'Ông mặt trời có màu gì nhỉ?', 'Yellow!', 'sun', '💛', ['yellow', 'it is yellow'], [
    ['Blue!', 'Màu xanh dương!', '💙', false],
    ['Green!', 'Màu xanh lá!', '💚', false],
    ['Yellow!', 'Màu vàng rực!', '💛', true],
  ]),
  u1_3: qa('qa_u1_3', 'Do you like apples?', 'Bé có thích ăn táo không?', 'Yes, yummy!', 'apple', '🍎', ['yes yummy', 'yes', 'yummy', 'apple'], [
    ['Yes, yummy!', 'Có ạ, ngon lắm!', '😋', true],
    ['It is a car!', 'Đó là xe hơi!', '🚗', false],
    ['No, sleep!', 'Không, đi ngủ!', '😴', false],
  ]),
  u1_4: qa('qa_u1_4', 'Which friend can bark "Woof"?', 'Bạn nào sủa "Gâu gâu" thế nhỉ?', 'Dog!', 'dog', '🐶', ['dog', 'a dog'], [
    ['Apple!', 'Quả táo!', '🍎', false],
    ['Dog!', 'Chú chó cún!', '🐶', true],
    ['Bus!', 'Xe buýt!', '🚌', false],
  ]),
  u2_1: qa('qa_u2_1', 'What shines in the sky?', 'Vật nào tỏa nắng trên bầu trời?', 'Sun!', 'sun', '☀️', ['sun', 'the sun'], [
    ['Sun!', 'Mặt trời!', '☀️', true],
    ['Pen!', 'Cây bút!', '🖊️', false],
    ['Pig!', 'Chú heo!', '🐷', false],
  ]),
  u2_2: qa('qa_u2_2', 'What says "Meow, meow"?', 'Bạn nào kêu "Meo meo" nhỉ?', 'Cat!', 'cat', '🐱', ['cat', 'a cat'], [
    ['Egg!', 'Quả trứng!', '🥚', false],
    ['Net!', 'Cái lưới!', '🥅', false],
    ['Cat!', 'Chú mèo!', '🐱', true],
  ]),
  u2_3: qa('qa_u2_3', 'What do you wear on your head?', 'Bé đội thứ gì lên đầu nhỉ?', 'Hat!', 'hat', '🎩', ['hat', 'a hat'], [
    ['Mouse!', 'Chú chuột!', '🐭', false],
    ['Hat!', 'Chiếc mũ!', '🎩', true],
    ['Dog!', 'Chú chó!', '🐶', false],
  ]),
  u2_4: qa('qa_u2_4', 'Which animal can jump high?', 'Bạn nào nhảy cao bên bờ ao?', 'Frog!', 'frog_log', '🐸', ['frog', 'a frog'], [
    ['Ball!', 'Quả bóng!', '⚽', false],
    ['Bed!', 'Cái giường!', '🛏️', false],
    ['Frog!', 'Chú ếch!', '🐸', true],
  ]),
  u3_1: qa('qa_u3_1', 'Where does the fat cat sit?', 'Chú mèo béo ngồi trên cái gì?', 'On a mat!', 'cat_mat', '🐈', ['on a mat', 'mat', 'cat on a mat'], [
    ['On a mat!', 'Trên tấm thảm!', '🧶', true],
    ['In a cup!', 'Trong cái cốc!', '🥤', false],
    ['On a sun!', 'Trên mặt trời!', '☀️', false],
  ]),
  u3_2: qa('qa_u3_2', 'Who lays fresh eggs?', 'Cô bạn nào đẻ ra quả trứng nhỉ?', 'Red hen!', 'hen', '🐔', ['red hen', 'hen', 'chicken'], [
    ['Red pen!', 'Cây bút đỏ!', '🖊️', false],
    ['Red hen!', 'Cô gà mái đỏ!', '🐔', true],
    ['Blue fox!', 'Chú cáo xanh!', '🦊', false],
  ]),
  u3_3: qa('qa_u3_3', 'Where is the little fox?', 'Chú cáo nhỏ đang trốn ở đâu?', 'In a box!', 'fox_box', '📦', ['in a box', 'box', 'fox in a box'], [
    ['On a bus!', 'Trên xe buýt!', '🚌', false],
    ['Under sun!', 'Dưới mặt trời!', '☀️', false],
    ['In a box!', 'Trong cái hộp!', '📦', true],
  ]),
  u3_4: qa('qa_u3_4', 'How do heroes go to school?', 'Cả đội anh hùng đi xe gì đến trường?', 'Red bus!', 'bus', '🚌', ['red bus', 'bus'], [
    ['Red bus!', 'Xe buýt đỏ!', '🚌', true],
    ['Big hat!', 'Chiếc mũ to!', '🎩', false],
    ['Hot sun!', 'Mặt trời nóng!', '☀️', false],
  ]),
  u4_1: qa('qa_u4_1', 'How do you feel right now?', 'Bé đang cảm thấy thế nào lúc này?', 'I am brave!', 'hero', '🦸', ['i am brave', 'brave', 'happy'], [
    ['I am sad!', 'Tớ buồn lắm!', '😢', false],
    ['I am brave!', 'Tớ rất dũng cảm!', '🦸', true],
    ['I am cold!', 'Tớ bị lạnh!', '🥶', false],
  ]),
  u4_2: qa('qa_u4_2', 'Who takes care of you at home?', 'Ai yêu thương chăm sóc bé ở nhà?', 'Mommy and daddy!', 'family', '👨‍👩‍👧', ['mommy and daddy', 'mommy', 'daddy', 'family'], [
    ['Mommy and daddy!', 'Mẹ và bố!', '👨‍👩‍👧', true],
    ['A robot dragon!', 'Rồng máy!', '🤖', false],
    ['Three apples!', 'Ba quả táo!', '🍎', false],
  ]),
  u4_3: qa('qa_u4_3', 'Look at the bright sky! Is it sunny?', 'Nhìn trời nắng vàng kìa! Có nắng không?', 'Yes, it is sunny!', 'sun', '☀️', ['yes it is sunny', 'sunny', 'yes'], [
    ['No, it is snow!', 'Không, tuyết rơi!', '❄️', false],
    ['It is night!', 'Trời tối rồi!', '🌑', false],
    ['Yes, it is sunny!', 'Vâng, trời nắng đẹp!', '☀️', true],
  ]),
  u4_4: qa('qa_u4_4', 'How many stars do you want?', 'Bé muốn giành mấy ngôi sao chiến thắng?', 'Five stars!', 'star', '⭐', ['five stars', 'five', 'three stars'], [
    ['Zero stars!', 'Không sao nào!', '0️⃣', false],
    ['Five stars!', 'Năm ngôi sao!', '⭐', true],
    ['One hat!', 'Một cái mũ!', '🎩', false],
  ]),
  u5_1: qa('qa_u5_1', 'What flies high in the wind?', 'Món đồ chơi nào bay cao trong gió?', 'A kite!', 'kite', '🪁', ['a kite', 'kite'], [
    ['A kite!', 'Chiếc diều!', '🪁', true],
    ['A cake!', 'Cái bánh!', '🎂', false],
    ['A bed!', 'Cái giường!', '🛏️', false],
  ]),
  u5_2: qa('qa_u5_2', 'What sails on the water?', 'Phương tiện nào lướt trên mặt nước?', 'A boat!', 'boat', '⛵', ['a boat', 'boat'], [
    ['A tree!', 'Cái cây!', '🌳', false],
    ['A boat!', 'Chiếc thuyền!', '⛵', true],
    ['A clock!', 'Đồng hồ!', '⏰', false],
  ]),
  u5_3: qa('qa_u5_3', 'What twinkles bright at night?', 'Thứ gì lấp lánh trên bầu trời đêm?', 'A star!', 'star', '🌟', ['a star', 'star', 'super star'], [
    ['A clown!', 'Chú hề!', '🤡', false],
    ['A shoe!', 'Chiếc giày!', '👞', false],
    ['A star!', 'Ngôi sao!', '🌟', true],
  ]),
  u5_4: qa('qa_u5_4', 'Who says "Cheep, cheep"?', 'Bạn nhỏ nào kêu "Chiếp, chiếp"?', 'Three chicks!', 'chick', '🐥', ['three chicks', 'chick', 'chicks'], [
    ['Three chicks!', 'Ba chú gà con!', '🐥', true],
    ['A blue ship!', 'Con tàu xanh!', '🚢', false],
    ['A fast car!', 'Xe hơi nhanh!', '🚗', false],
  ]),
  u6_1: qa('qa_u6_1', 'Where does our spaceship fly?', 'Phi thuyền anh hùng bay đi đâu nhỉ?', 'To the moon!', 'moon', '🌕', ['to the moon', 'moon', 'fly to the moon'], [
    ['Under a chair!', 'Dưới cái ghế!', '🪑', false],
    ['To the moon!', 'Lên mặt trăng!', '🌕', true],
    ['Inside a sock!', 'Trong chiếc tất!', '🧦', false],
  ]),
  u6_2: qa('qa_u6_2', 'Can you jump high like a hero?', 'Bé có thể nhảy cao như siêu anh hùng không?', 'Yes, I can!', 'hero', '🚀', ['yes i can', 'i can', 'yes'], [
    ['Yes, I can!', 'Có, tớ làm được!', '🦸', true],
    ['No, I am a tree!', 'Không, tớ là cây!', '🌳', false],
    ['It is a banana!', 'Là quả chuối!', '🍌', false],
  ]),
  u6_3: qa('qa_u6_3', 'Where does the brave king live?', 'Vị vua dũng cảm sống ở đâu thế?', 'In the castle!', 'castle', '🏰', ['in the castle', 'castle'], [
    ['On an apple!', 'Trên quả táo!', '🍎', false],
    ['In a spoon!', 'Trong cái thìa!', '🥄', false],
    ['In the castle!', 'Trong tòa lâu đài!', '🏰', true],
  ]),
  u6_4: qa('qa_u6_4', 'Can you speak English well?', 'Bé đã nói tiếng Anh giỏi chưa nào?', 'Yes, I can!', 'trophy', '🏆', ['yes i can', 'english is fun', 'yes'], [
    ['I forgot it!', 'Tớ quên rồi!', '🙈', false],
    ['Yes, I can!', 'Có, tớ nói giỏi rồi!', '🏆', true],
    ['Time to sleep!', 'Đi ngủ thôi!', '😴', false],
  ]),
};
