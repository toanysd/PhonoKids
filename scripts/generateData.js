// Generation script for 380+ Phonics Vocabulary & Visuals + 28 Decodable Ehon Books
const fs = require('fs');
const path = require('path');

// 1. Phonics Vocabulary Data Definitions
const VOCABULARY_LIST = [
  // ================= GROUP 1: s, a, t, i, p, n (STAGE 1: 3-4 Tuổi) =================
  // /s/
  { word: 'sun', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'u', 'n'], meaningVi: 'mặt trời', emoji: '☀️', sampleSentence: 'The sun is hot.', sampleSentenceVi: 'Mặt trời tỏa nắng ấm.' },
  { word: 'sit', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'i', 't'], meaningVi: 'ngồi xuống', emoji: '🪑', sampleSentence: 'Sit on the mat.', sampleSentenceVi: 'Bé ngồi trên thảm.' },
  { word: 'sat', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'a', 't'], meaningVi: 'đã ngồi', emoji: '🧘', sampleSentence: 'Sam sat on a rock.', sampleSentenceVi: 'Sam đã ngồi trên tảng đá.' },
  { word: 'sad', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'a', 'd'], meaningVi: 'buồn bã', emoji: '😢', sampleSentence: 'Do not be sad.', sampleSentenceVi: 'Bé đừng buồn nhé.' },
  { word: 'six', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'i', 'x'], meaningVi: 'số sáu', emoji: '6️⃣', sampleSentence: 'I see six ants.', sampleSentenceVi: 'Bé thấy sáu chú kiến.' },
  { word: 'sip', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'i', 'p'], meaningVi: 'nhấp ngụm nhỏ', emoji: '🥤', sampleSentence: 'Take a sip of milk.', sampleSentenceVi: 'Uống một ngụm sữa ấm.' },
  { word: 'sock', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'o', 'ck'], meaningVi: 'chiếc tất len', emoji: '🧦', sampleSentence: 'A warm wool sock.', sampleSentenceVi: 'Chiếc tất len ấm áp.' },
  { word: 'sand', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'a', 'n', 'd'], meaningVi: 'bãi cát vàng', emoji: '🏖️', sampleSentence: 'Play in the yellow sand.', sampleSentenceVi: 'Chơi đùa trên bãi cát vàng.' },
  { word: 'seal', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'ea', 'l'], meaningVi: 'chú hải cẩu', emoji: '🦭', sampleSentence: 'A seal claps on ice.', sampleSentenceVi: 'Chú hải cẩu vỗ tay trên băng.' },

  // /a/
  { word: 'ant', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'n', 't'], meaningVi: 'con kiến', emoji: '🐜', sampleSentence: 'An ant is on a pan.', sampleSentenceVi: 'Chú kiến đang ở trên chảo.' },
  { word: 'apple', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'p', 'l'], meaningVi: 'quả táo đỏ', emoji: '🍎', sampleSentence: 'A red apple is sweet.', sampleSentenceVi: 'Quả táo đỏ ngọt lành.' },
  { word: 'ax', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'x'], meaningVi: 'cái rìu', emoji: '🪓', sampleSentence: 'The ax cuts wood.', sampleSentenceVi: 'Cái rìu bổ củi.' },
  { word: 'act', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'c', 't'], meaningVi: 'diễn kịch', emoji: '🎭', sampleSentence: 'We act like lions.', sampleSentenceVi: 'Chúng mình diễn vai chú sư tử.' },
  { word: 'as', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'z'], meaningVi: 'như là', emoji: '✨', sampleSentence: 'As fast as a cat.', sampleSentenceVi: 'Nhanh như một chú mèo.' },
  { word: 'at', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 't'], meaningVi: 'ở tại', emoji: '📍', sampleSentence: 'Look at the dog.', sampleSentenceVi: 'Hãy nhìn chú cún kìa.' },
  { word: 'ash', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'sh'], meaningVi: 'tro ấm', emoji: '🪵', sampleSentence: 'Gray ash in the hearth.', sampleSentenceVi: 'Tro ấm trong bếp sưởi.' },
  { word: 'add', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'd'], meaningVi: 'cộng thêm', emoji: '➕', sampleSentence: 'Add one more brick.', sampleSentenceVi: 'Thêm một khối gỗ xếp hình.' },

  // /t/
  { word: 'tap', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'a', 'p'], meaningVi: 'vòi nước / gõ nhẹ', emoji: '🚰', sampleSentence: 'Tap the little drum.', sampleSentenceVi: 'Gõ nhẹ lên chiếc trống con.' },
  { word: 'tin', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'i', 'n'], meaningVi: 'hộp thiếc', emoji: '🥫', sampleSentence: 'A tin has seeds.', sampleSentenceVi: 'Chiếc hộp thiếc đựng hạt mầm.' },
  { word: 'top', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'o', 'p'], meaningVi: 'đỉnh / con quay', emoji: '🪀', sampleSentence: 'Spin the colorful top.', sampleSentenceVi: 'Xoay tít con quay sắc màu.' },
  { word: 'ten', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'e', 'n'], meaningVi: 'số mười', emoji: '🔟', sampleSentence: 'Ten green apples.', sampleSentenceVi: 'Mười quả táo xanh thơm.' },
  { word: 'tub', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'u', 'b'], meaningVi: 'bồn tắm', emoji: '🛁', sampleSentence: 'A bath in the tub.', sampleSentenceVi: 'Tắm mát trong bồn tắm.' },
  { word: 'tag', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'a', 'g'], meaningVi: 'thẻ nhãn / trò đuổi bắt', emoji: '🏷️', sampleSentence: 'We play tag together.', sampleSentenceVi: 'Các bạn nhỏ chơi đuổi bắt.' },
  { word: 'tent', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'e', 'n', 't'], meaningVi: 'chiếc lều vải', emoji: '⛺', sampleSentence: 'Sleep in a warm tent.', sampleSentenceVi: 'Ngủ trong chiếc lều ấm cúng.' },
  { word: 'tip', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'i', 'p'], meaningVi: 'đầu ngón tay', emoji: '☝️', sampleSentence: 'Touch the tip of your nose.', sampleSentenceVi: 'Chạm nhẹ vào chóp mũi.' },

  // /i/
  { word: 'ink', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'n', 'k'], meaningVi: 'mực viết', emoji: '🖋️', sampleSentence: 'Blue ink on paper.', sampleSentenceVi: 'Mực xanh vẽ trên trang giấy.' },
  { word: 'in', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'n'], meaningVi: 'bên trong', emoji: '📥', sampleSentence: 'The cat is in the box.', sampleSentenceVi: 'Chú mèo nằm trong hộp.' },
  { word: 'igloo', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'g', 'l', 'oo'], meaningVi: 'nhà băng', emoji: '🧊', sampleSentence: 'An igloo made of ice.', sampleSentenceVi: 'Ngôi nhà băng mát lạnh.' },
  { word: 'ill', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'l'], meaningVi: 'bị ốm', emoji: '🤒', sampleSentence: 'Rest when you feel ill.', sampleSentenceVi: 'Nghỉ ngơi khi bé thấy mệt.' },
  { word: 'it', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 't'], meaningVi: 'nó / điều đó', emoji: '👉', sampleSentence: 'It is a happy day.', sampleSentenceVi: 'Đó là một ngày vui.' },
  { word: 'insect', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'n', 's', 'e', 'c', 't'], meaningVi: 'côn trùng', emoji: '🐞', sampleSentence: 'A tiny green insect.', sampleSentenceVi: 'Một chú bọ tí hon màu xanh.' },
  { word: 'if', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'f'], meaningVi: 'nếu như', emoji: '❓', sampleSentence: 'Smile if you are glad.', sampleSentenceVi: 'Cười tươi nếu con thấy vui.' },
  { word: 'is', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'z'], meaningVi: 'thì / là', emoji: '✨', sampleSentence: 'The kitten is cute.', sampleSentenceVi: 'Chú mèo con thật đáng yêu.' },

  // /p/
  { word: 'pat', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'a', 't'], meaningVi: 'vỗ nhẹ thân mật', emoji: '👋', sampleSentence: 'Pat the gentle puppy.', sampleSentenceVi: 'Vỗ nhẹ chú cún con.' },
  { word: 'pan', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'a', 'n'], meaningVi: 'cái chảo rán', emoji: '🍳', sampleSentence: 'An egg on the pan.', sampleSentenceVi: 'Chiếc trứng thơm trên chảo.' },
  { word: 'pin', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'i', 'n'], meaningVi: 'cái ghim cài', emoji: '🧷', sampleSentence: 'A shiny little pin.', sampleSentenceVi: 'Cái ghim băng nhỏ lấp lánh.' },
  { word: 'pot', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'o', 't'], meaningVi: 'cái nồi', emoji: '🍲', sampleSentence: 'Soup in the cooking pot.', sampleSentenceVi: 'Nồi súp nóng hổi thơm ngon.' },
  { word: 'pig', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'i', 'g'], meaningVi: 'chú heo hồng', emoji: '🐷', sampleSentence: 'The pink pig loves mud.', sampleSentenceVi: 'Chú heo hồng thích nghịch bùn.' },
  { word: 'pen', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'e', 'n'], meaningVi: 'bút mực', emoji: '🖊️', sampleSentence: 'Draw with a pen.', sampleSentenceVi: 'Vẽ tranh bằng cây bút mực.' },
  { word: 'pup', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'u', 'p'], meaningVi: 'chó con đáng yêu', emoji: '🐶', sampleSentence: 'The pup runs to me.', sampleSentenceVi: 'Chú cún con chạy về phía bé.' },
  { word: 'pop', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'o', 'p'], meaningVi: 'tiếng bóng nổ bốp', emoji: '🎈', sampleSentence: 'Pop the soap bubble!', sampleSentenceVi: 'Bóp vỡ bong bóng xà phòng!' },

  // /n/
  { word: 'net', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'e', 't'], meaningVi: 'cái lưới bắt bướm', emoji: '🥅', sampleSentence: 'A net catches bubbles.', sampleSentenceVi: 'Chiếc lưới đón bong bóng bay.' },
  { word: 'nap', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'a', 'p'], meaningVi: 'giấc ngủ trưa', emoji: '😴', sampleSentence: 'The cat takes a nap.', sampleSentenceVi: 'Mèo con ngủ trưa thật ngoan.' },
  { word: 'nut', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'u', 't'], meaningVi: 'hạt dẻ thơm', emoji: '🌰', sampleSentence: 'The squirrel holds a nut.', sampleSentenceVi: 'Sóc nhỏ ôm quả hạt dẻ.' },
  { word: 'nod', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'o', 'd'], meaningVi: 'gật đầu đồng ý', emoji: '😊', sampleSentence: 'Nod your head yes.', sampleSentenceVi: 'Gật đầu đồng ý mỉm cười.' },
  { word: 'nest', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'e', 's', 't'], meaningVi: 'tổ chim ấm', emoji: '🪹', sampleSentence: 'A bird in the nest.', sampleSentenceVi: 'Chim con trong tổ ấm êm.' },
  { word: 'nip', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'i', 'p'], meaningVi: 'nhấm nháp', emoji: '🤏', sampleSentence: 'A tiny playful nip.', sampleSentenceVi: 'Nhấm một mẩu bánh nhỏ xíu.' },
  { word: 'neck', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'e', 'ck'], meaningVi: 'cổ hươu cao', emoji: '🦒', sampleSentence: 'A giraffe has a long neck.', sampleSentenceVi: 'Chú hươu cao cổ có chiếc cổ dài.' },

  // ================= GROUP 2: c_k, e, h, r, m, d (STAGE 1 & 2: 3-5 Tuổi) =================
  // /c_k/
  { word: 'cat', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'a', 't'], meaningVi: 'chú mèo', emoji: '🐱', sampleSentence: 'The cat sits on the mat.', sampleSentenceVi: 'Mèo ngồi trên thảm êm.' },
  { word: 'cup', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'u', 'p'], meaningVi: 'chiếc cốc', emoji: '☕', sampleSentence: 'Drink from a yellow cup.', sampleSentenceVi: 'Uống nước bằng cốc vàng.' },
  { word: 'cap', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'a', 'p'], meaningVi: 'mũ lưỡi trai', emoji: '🧢', sampleSentence: 'Wear a blue cap.', sampleSentenceVi: 'Đội chiếc mũ lưỡi trai xanh.' },
  { word: 'kid', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['k', 'i', 'd'], meaningVi: 'em bé nhỏ', emoji: '🧒', sampleSentence: 'A happy kid sings.', sampleSentenceVi: 'Em bé vui hát líu lo.' },
  { word: 'kit', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['k', 'i', 't'], meaningVi: 'bộ đồ chơi', emoji: '🧰', sampleSentence: 'An art kit with paint.', sampleSentenceVi: 'Bộ cọ vẽ nhiều sắc màu.' },
  { word: 'kite', phonemeId: 'c_k', group: 2, stage: 2, phonemes: ['k', 'i', 't', 'e'], meaningVi: 'con diều bay', emoji: '🪁', sampleSentence: 'Fly a kite in the wind.', sampleSentenceVi: 'Thả diều no gió trên đồi.' },
  { word: 'can', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'a', 'n'], meaningVi: 'chiếc lon nước', emoji: '🥫', sampleSentence: 'A can of fresh juice.', sampleSentenceVi: 'Lon nước trái cây tươi.' },
  { word: 'cot', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'o', 't'], meaningVi: 'chiếc nôi em bé', emoji: '🛏️', sampleSentence: 'Baby sleeps in a cot.', sampleSentenceVi: 'Bé con ngủ ngoan trong nôi.' },
  { word: 'kiss', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['k', 'i', 'ss'], meaningVi: 'nụ hôn yêu thương', emoji: '😘', sampleSentence: 'A sweet goodnight kiss.', sampleSentenceVi: 'Nụ hôn chúc ngủ ngon ấm áp.' },

  // /e/
  { word: 'egg', phonemeId: 'e', group: 2, stage: 1, phonemes: ['e', 'g'], meaningVi: 'quả trứng', emoji: '🥚', sampleSentence: 'Crack an egg for baking.', sampleSentenceVi: 'Đập quả trứng làm bánh.' },
  { word: 'elf', phonemeId: 'e', group: 2, stage: 1, phonemes: ['e', 'l', 'f'], meaningVi: 'chú yêu tinh nhỏ', emoji: '🧝', sampleSentence: 'A little fairy elf.', sampleSentenceVi: 'Chú yêu tinh nhỏ dễ thương.' },
  { word: 'elm', phonemeId: 'e', group: 2, stage: 2, phonemes: ['e', 'l', 'm'], meaningVi: 'cây du', emoji: '🌳', sampleSentence: 'A tall leafy elm tree.', sampleSentenceVi: 'Cây du cao tỏa bóng mát.' },
  { word: 'end', phonemeId: 'e', group: 2, stage: 1, phonemes: ['e', 'n', 'd'], meaningVi: 'kết thúc', emoji: '🏁', sampleSentence: 'The end of the story.', sampleSentenceVi: 'Đoạn kết câu chuyện hay.' },
  { word: 'elk', phonemeId: 'e', group: 2, stage: 2, phonemes: ['e', 'l', 'k'], meaningVi: 'chú nai sừng tấm', emoji: '🦌', sampleSentence: 'The majestic elk walks.', sampleSentenceVi: 'Chú nai sừng tấm dạo bước.' },
  { word: 'echo', phonemeId: 'e', group: 2, stage: 2, phonemes: ['e', 'ch', 'o'], meaningVi: 'tiếng vang', emoji: '📢', sampleSentence: 'Hear the mountain echo.', sampleSentenceVi: 'Lắng nghe tiếng vang từ hẻm núi.' },

  // /h/
  { word: 'hat', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'a', 't'], meaningVi: 'chiếc mũ rộng vành', emoji: '👒', sampleSentence: 'A sunny straw hat.', sampleSentenceVi: 'Chiếc mũ cói che nắng ấm.' },
  { word: 'hen', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'e', 'n'], meaningVi: 'cô gà mái', emoji: '🐔', sampleSentence: 'The red hen pecks corn.', sampleSentenceVi: 'Cô gà mái mổ hạt bắp.' },
  { word: 'hop', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'o', 'p'], meaningVi: 'nhảy lò cò', emoji: '🦘', sampleSentence: 'Hop like a little bunny.', sampleSentenceVi: 'Nhảy lò cò như chú thỏ con.' },
  { word: 'hot', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'o', 't'], meaningVi: 'nóng ấm', emoji: '🔥', sampleSentence: 'The warm tea is hot.', sampleSentenceVi: 'Tách trà nóng thơm lừng.' },
  { word: 'hug', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'u', 'g'], meaningVi: 'cái ôm ấm áp', emoji: '🤗', sampleSentence: 'Give mom a big hug.', sampleSentenceVi: 'Trao mẹ cái ôm ấm áp.' },
  { word: 'hut', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'u', 't'], meaningVi: 'ngôi lều nhỏ', emoji: '🛖', sampleSentence: 'A cozy wooden hut.', sampleSentenceVi: 'Ngôi lều gỗ nhỏ xinh.' },
  { word: 'hand', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'a', 'n', 'd'], meaningVi: 'bàn tay nhỏ', emoji: '✋', sampleSentence: 'Hold my gentle hand.', sampleSentenceVi: 'Nắm lấy bàn tay dịu dàng của mẹ.' },
  { word: 'hill', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'i', 'll'], meaningVi: 'ngọn đồi cỏ xanh', emoji: '⛰️', sampleSentence: 'Roll down the green hill.', sampleSentenceVi: 'Lăn tròn trên ngọn đồi cỏ êm.' },

  // /r/
  { word: 'run', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'u', 'n'], meaningVi: 'chạy nhảy', emoji: '🏃', sampleSentence: 'Run fast on the grass.', sampleSentenceVi: 'Chạy nhanh trên thảm cỏ.' },
  { word: 'red', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'e', 'd'], meaningVi: 'màu đỏ tươi', emoji: '🔴', sampleSentence: 'A pretty red rose.', sampleSentenceVi: 'Bông hồng đỏ rực rỡ.' },
  { word: 'rat', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'a', 't'], meaningVi: 'chú chuột', emoji: '🐀', sampleSentence: 'A little gray rat.', sampleSentenceVi: 'Chú chuột con màu xám.' },
  { word: 'rip', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'i', 'p'], meaningVi: 'xé giấy cắt dán', emoji: '✂️', sampleSentence: 'Rip the colored paper.', sampleSentenceVi: 'Xé dán giấy thủ công.' },
  { word: 'rug', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'u', 'g'], meaningVi: 'tấm thảm len', emoji: '🧶', sampleSentence: 'Sit on the soft rug.', sampleSentenceVi: 'Ngồi trên thảm len êm ái.' },
  { word: 'rob', phonemeId: 'r', group: 2, stage: 2, phonemes: ['r', 'o', 'b'], meaningVi: 'chú chim Robin', emoji: '🐦', sampleSentence: 'Robin sings on the tree.', sampleSentenceVi: 'Chim robin hót trên cành.' },
  { word: 'rod', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'o', 'd'], meaningVi: 'cần câu cá', emoji: '🎣', sampleSentence: 'A fishing rod by the lake.', sampleSentenceVi: 'Cần câu cá bên hồ nước êm.' },
  { word: 'rib', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'i', 'b'], meaningVi: 'xương sườn nhỏ', emoji: '🦴', sampleSentence: 'The kitten purrs inside.', sampleSentenceVi: 'Mèo con kêu gừ gừ êm ái.' },

  // /m/
  { word: 'man', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'a', 'n'], meaningVi: 'người đàn ông', emoji: '👨', sampleSentence: 'A kind farmer man.', sampleSentenceVi: 'Một bác nông dân tốt bụng.' },
  { word: 'mat', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'a', 't'], meaningVi: 'tấm thảm chùi chân', emoji: '🧘', sampleSentence: 'Wipe shoes on the mat.', sampleSentenceVi: 'Lau giày trên tấm thảm.' },
  { word: 'mud', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'u', 'd'], meaningVi: 'bùn đất', emoji: '🪵', sampleSentence: 'Puddle of brown mud.', sampleSentenceVi: 'Vũng bùn đất nâu mịn.' },
  { word: 'mop', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'o', 'p'], meaningVi: 'cây lau sàn', emoji: '🧹', sampleSentence: 'Mop the kitchen floor.', sampleSentenceVi: 'Lau sàn nhà sạch bong.' },
  { word: 'milk', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'i', 'l', 'k'], meaningVi: 'sữa bò tươi', emoji: '🥛', sampleSentence: 'Drink sweet fresh milk.', sampleSentenceVi: 'Uống ly sữa tươi thơm mát.' },
  { word: 'map', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'a', 'p'], meaningVi: 'bản đồ thám hiểm', emoji: '🗺️', sampleSentence: 'Look at the island map.', sampleSentenceVi: 'Xem bản đồ thám hiểm đảo.' },
  { word: 'mug', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'u', 'g'], meaningVi: 'chiếc ca gốm', emoji: '🍺', sampleSentence: 'Warm cocoa in a big mug.', sampleSentenceVi: 'Ca ca-cao ấm ngọt thơm.' },
  { word: 'moss', phonemeId: 'm', group: 2, stage: 2, phonemes: ['m', 'o', 'ss'], meaningVi: 'thảm rêu xanh', emoji: '🌿', sampleSentence: 'Green moss on the stone.', sampleSentenceVi: 'Thảm rêu xanh biếc trên tảng đá.' },

  // /d/
  { word: 'dog', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'o', 'g'], meaningVi: 'chú cún con', emoji: '🐶', sampleSentence: 'The happy dog wags tail.', sampleSentenceVi: 'Chú cún vẫy đuôi mừng vui.' },
  { word: 'dad', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'a', 'd'], meaningVi: 'bố yêu', emoji: '👨‍👧', sampleSentence: 'Dad reads me a story.', sampleSentenceVi: 'Bố đọc truyện cho bé nghe.' },
  { word: 'dig', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'i', 'g'], meaningVi: 'đào xới đất', emoji: '⛏️', sampleSentence: 'Dig a hole for seeds.', sampleSentenceVi: 'Đào hố nhỏ gieo mầm.' },
  { word: 'dot', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'o', 't'], meaningVi: 'chấm tròn', emoji: '🔵', sampleSentence: 'A polka dot pattern.', sampleSentenceVi: 'Họa tiết chấm tròn xinh.' },
  { word: 'dip', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'i', 'p'], meaningVi: 'chấm sốt', emoji: '🥣', sampleSentence: 'Dip bread in honey.', sampleSentenceVi: 'Chấm bánh mì vào mật ong.' },
  { word: 'dam', phonemeId: 'd', group: 2, stage: 2, phonemes: ['d', 'a', 'm'], meaningVi: 'con đập nước', emoji: '🦫', sampleSentence: 'The beaver builds a dam.', sampleSentenceVi: 'Chú hải ly đắp đập ngăn dòng.' },
  { word: 'duck', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'u', 'ck'], meaningVi: 'chú vịt con', emoji: '🦆', sampleSentence: 'Yellow duck in the pond.', sampleSentenceVi: 'Chú vịt vàng bơi lội dưới ao.' },
  { word: 'drum', phonemeId: 'd', group: 2, stage: 2, phonemes: ['d', 'r', 'u', 'm'], meaningVi: 'chiếc trống rộn ràng', emoji: '🥁', sampleSentence: 'Beat the wooden drum.', sampleSentenceVi: 'Gõ chiếc trống gỗ vang rộn rã.' },

  // ================= GROUP 3: g, o, u, l, f, b (STAGE 2: 4-5 Tuổi) =================
  // /g/
  { word: 'gap', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'a', 'p'], meaningVi: 'khoảng trống', emoji: '🕳️', sampleSentence: 'A gap in the garden fence.', sampleSentenceVi: 'Khe hở nhỏ ở hàng rào.' },
  { word: 'gas', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'a', 's'], meaningVi: 'khí đốt / hơi', emoji: '💨', sampleSentence: 'Gas powers the stove.', sampleSentenceVi: 'Bếp gas nấu bữa cơm ấm.' },
  { word: 'gut', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'u', 't'], meaningVi: 'bụng dạ tốt', emoji: '🫄', sampleSentence: 'Healthy food is good.', sampleSentenceVi: 'Ăn món ngon bụng khỏe khoắn.' },
  { word: 'gum', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'u', 'm'], meaningVi: 'kẹo cao su', emoji: '🍬', sampleSentence: 'Sweet bubble gum.', sampleSentenceVi: 'Kẹo cao su ngọt thơm.' },
  { word: 'gift', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'i', 'f', 't'], meaningVi: 'hộp quà tặng', emoji: '🎁', sampleSentence: 'Open the birthday gift.', sampleSentenceVi: 'Mở hộp quà sinh nhật bất ngờ.' },
  { word: 'gate', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'a', 't', 'e'], meaningVi: 'cổng gỗ rực rỡ', emoji: '⛩️', sampleSentence: 'Open the garden gate.', sampleSentenceVi: 'Mở cánh cổng gỗ vào vườn hoa.' },
  { word: 'gold', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'o', 'l', 'd'], meaningVi: 'vàng óng ánh', emoji: '🪙', sampleSentence: 'Shining gold coins.', sampleSentenceVi: 'Những đồng xu vàng óng ánh.' },

  // /o/
  { word: 'ox', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'x'], meaningVi: 'chú bò đực', emoji: '🐂', sampleSentence: 'A strong working ox.', sampleSentenceVi: 'Chú bò tót khỏe mạnh.' },
  { word: 'off', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'f'], meaningVi: 'tắt đèn', emoji: '💡', sampleSentence: 'Turn the lights off.', sampleSentenceVi: 'Tắt đèn chuẩn bị ngủ ngon.' },
  { word: 'on', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'n'], meaningVi: 'ở trên', emoji: '🔛', sampleSentence: 'The book is on the table.', sampleSentenceVi: 'Sách nằm trên bàn học.' },
  { word: 'odd', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'd'], meaningVi: 'kỳ lạ / số lẻ', emoji: '🎲', sampleSentence: 'An odd little beetle.', sampleSentenceVi: 'Một chú bọ ngộ nghĩnh lạ kỳ.' },
  { word: 'otter', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 't', 'er'], meaningVi: 'chú rái cá', emoji: '🦦', sampleSentence: 'The playful otter swims.', sampleSentenceVi: 'Chú rái cá tinh nghịch bơi lội.' },

  // /u/
  { word: 'up', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 'p'], meaningVi: 'lên cao', emoji: '⬆️', sampleSentence: 'Look up at the stars.', sampleSentenceVi: 'Nhìn lên bầu trời ngàn sao.' },
  { word: 'us', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 's'], meaningVi: 'chúng mình', emoji: '👫', sampleSentence: 'Come play with us.', sampleSentenceVi: 'Cùng chơi với chúng mình nhé.' },
  { word: 'umbrella', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 'm', 'b', 'r', 'e', 'l', 'a'], meaningVi: 'chiếc ô che mưa', emoji: '☂️', sampleSentence: 'Open the colorful umbrella.', sampleSentenceVi: 'Bung chiếc ô che giọt mưa rơi.' },
  { word: 'under', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 'n', 'd', 'er'], meaningVi: 'ở phía dưới', emoji: '👇', sampleSentence: 'Under the green leaf.', sampleSentenceVi: 'Dưới tán lá xanh mát.' },
  { word: 'uncle', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 'n', 'c', 'l'], meaningVi: 'chú / bác yêu quý', emoji: '👨', sampleSentence: 'Visit my funny uncle.', sampleSentenceVi: 'Đến thăm người chú vui tính.' },

  // /l/
  { word: 'lip', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'i', 'p'], meaningVi: 'đôi môi xinh', emoji: '👄', sampleSentence: 'Smile with your lips.', sampleSentenceVi: 'Mỉm cười với bờ môi xinh.' },
  { word: 'log', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'o', 'g'], meaningVi: 'khúc gỗ tròn', emoji: '🪵', sampleSentence: 'A frog on a brown log.', sampleSentenceVi: 'Chú ếch ngồi trên khúc gỗ.' },
  { word: 'leg', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'e', 'g'], meaningVi: 'đôi chân', emoji: '🦵', sampleSentence: 'Kick the ball with your leg.', sampleSentenceVi: 'Đá bóng bằng đôi chân khỏe.' },
  { word: 'lot', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'o', 't'], meaningVi: 'rất nhiều', emoji: '✨', sampleSentence: 'A lot of bright stars.', sampleSentenceVi: 'Rất nhiều vì sao lấp lánh.' },
  { word: 'lamp', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'a', 'm', 'p'], meaningVi: 'chiếc đèn ngủ ấm', emoji: '🛋️', sampleSentence: 'A warm reading lamp.', sampleSentenceVi: 'Chiếc đèn đọc sách tỏa sáng dịu.' },
  { word: 'leaf', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'ea', 'f'], meaningVi: 'chiếc lá biếc', emoji: '🍃', sampleSentence: 'A green fluttering leaf.', sampleSentenceVi: 'Chiếc lá xanh đung đưa trong gió.' },
  { word: 'lock', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'o', 'ck'], meaningVi: 'ổ khóa vàng', emoji: '🔒', sampleSentence: 'Turn the key in the lock.', sampleSentenceVi: 'Vặn chìa mở chiếc khóa xinh.' },

  // /f/
  { word: 'fox', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'o', 'x'], meaningVi: 'chú cáo cam', emoji: '🦊', sampleSentence: 'A quick sly fox.', sampleSentenceVi: 'Chú cáo thông minh nhanh nhẹn.' },
  { word: 'fun', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'u', 'n'], meaningVi: 'vui vẻ', emoji: '🎉', sampleSentence: 'Learning phonics is fun.', sampleSentenceVi: 'Học phát âm thật vui thích.' },
  { word: 'fan', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'a', 'n'], meaningVi: 'chiếc quạt mát', emoji: '🪭', sampleSentence: 'The paper fan cools us.', sampleSentenceVi: 'Chiếc quạt giấy phe phẩy mát rượi.' },
  { word: 'fit', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'i', 't'], meaningVi: 'vừa vặn', emoji: '👟', sampleSentence: 'Shoes fit my small feet.', sampleSentenceVi: 'Giày vừa vặn chân bé.' },
  { word: 'fog', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'o', 'g'], meaningVi: 'màn sương mù', emoji: '🌫️', sampleSentence: 'White fog over the hills.', sampleSentenceVi: 'Sương mù trắng giăng trên đồi.' },
  { word: 'fish', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'i', 'sh'], meaningVi: 'chú cá nhỏ bơi lội', emoji: '🐟', sampleSentence: 'Little fish swims fast.', sampleSentenceVi: 'Chú cá nhỏ bơi thoăn thoắt.' },
  { word: 'frog', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'r', 'o', 'g'], meaningVi: 'chú ếch xanh', emoji: '🐸', sampleSentence: 'A green frog hops.', sampleSentenceVi: 'Chú ếch xanh nhảy tõm xuống ao.' },
  { word: 'flag', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'l', 'a', 'g'], meaningVi: 'lá cờ sắc màu', emoji: '🚩', sampleSentence: 'Wave the bright flag.', sampleSentenceVi: 'Vẫy cao lá cờ rực rỡ.' },

  // /b/
  { word: 'bat', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'a', 't'], meaningVi: 'chú dơi / gậy bóng chày', emoji: '🦇', sampleSentence: 'A night flying bat.', sampleSentenceVi: 'Chú dơi bay đêm lượn vòng.' },
  { word: 'box', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'o', 'x'], meaningVi: 'chiếc hộp quà', emoji: '📦', sampleSentence: 'A surprise inside the box.', sampleSentenceVi: 'Món quà bất ngờ trong hộp.' },
  { word: 'bag', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'a', 'g'], meaningVi: 'chiếc cặp sách', emoji: '🎒', sampleSentence: 'Pack books in the bag.', sampleSentenceVi: 'Xếp sách vào chiếc cặp xinh.' },
  { word: 'bug', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'u', 'g'], meaningVi: 'chú bọ cánh cam', emoji: '🪲', sampleSentence: 'A green bug on a leaf.', sampleSentenceVi: 'Chú bọ xanh đậu trên lá biếc.' },
  { word: 'bed', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'e', 'd'], meaningVi: 'chiếc giường êm', emoji: '🛏️', sampleSentence: 'Sleep well in soft bed.', sampleSentenceVi: 'Ngủ say trên chiếc giường êm.' },
  { word: 'bus', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'u', 's'], meaningVi: 'xe buýt vàng', emoji: '🚌', sampleSentence: 'Ride the yellow bus.', sampleSentenceVi: 'Ngồi trên chiếc xe buýt vàng.' },
  { word: 'bun', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'u', 'n'], meaningVi: 'bánh mì tròn ngọt', emoji: '🥯', sampleSentence: 'A warm bakery bun.', sampleSentenceVi: 'Chiếc bánh mì tròn nóng giòn.' },
  { word: 'bell', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'e', 'll'], meaningVi: 'chuông leng keng', emoji: '🔔', sampleSentence: 'Ring the golden bell.', sampleSentenceVi: 'Rung chuông leng keng báo giờ vui.' },

  // ================= GROUP 4: ai, j, oa, ie, ee, or (STAGE 2 & 3: 4-6 Tuổi) =================
  // /ai/
  { word: 'rain', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['r', 'ai', 'n'], meaningVi: 'cơn mưa rào', emoji: '🌧️', sampleSentence: 'Rain falls from the cloud.', sampleSentenceVi: 'Mưa rơi tí tách trên mái nhà.' },
  { word: 'tail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['t', 'ai', 'l'], meaningVi: 'chiếc đuôi cong', emoji: '🐕', sampleSentence: 'The puppy wags its tail.', sampleSentenceVi: 'Cún con vẫy chiếc đuôi cong.' },
  { word: 'sail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['s', 'ai', 'l'], meaningVi: 'cánh buồm trắng', emoji: '⛵', sampleSentence: 'Sail the boat on the sea.', sampleSentenceVi: 'Thuyền giương buồm ra khơi xa.' },
  { word: 'snail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['s', 'n', 'ai', 'l'], meaningVi: 'chú ốc sên', emoji: '🐌', sampleSentence: 'A slow snail crawls by.', sampleSentenceVi: 'Chú ốc sên bò chậm rãi.' },
  { word: 'train', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['t', 'r', 'ai', 'n'], meaningVi: 'đoàn tàu hỏa', emoji: '🚂', sampleSentence: 'The steam train chugs.', sampleSentenceVi: 'Đoàn tàu hỏa xình xịch lăn bánh.' },
  { word: 'mail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['m', 'ai', 'l'], meaningVi: 'thư tay bưu điện', emoji: '💌', sampleSentence: 'Open loving mail.', sampleSentenceVi: 'Mở lá thư tay gửi từ bạn xa.' },
  { word: 'paint', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['p', 'ai', 'n', 't'], meaningVi: 'sơn màu nước', emoji: '🎨', sampleSentence: 'Paint a rainbow picture.', sampleSentenceVi: 'Vẽ cầu vồng sắc màu rực rỡ.' },
  { word: 'wait', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['w', 'ai', 't'], meaningVi: 'kiên nhẫn chờ', emoji: '⏱️', sampleSentence: 'Wait for your turn kindly.', sampleSentenceVi: 'Bé kiên nhẫn chờ đến lượt.' },

  // /j/
  { word: 'jam', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'a', 'm'], meaningVi: 'mứt dâu tây', emoji: '🍓', sampleSentence: 'Sweet strawberry jam.', sampleSentenceVi: 'Mứt dâu tây ngọt thơm phức.' },
  { word: 'jug', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'u', 'g'], meaningVi: 'bình rót nước', emoji: '🏺', sampleSentence: 'Pour water from the jug.', sampleSentenceVi: 'Rót nước mát từ bình gốm.' },
  { word: 'jet', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'e', 't'], meaningVi: 'máy bay phản lực', emoji: '✈️', sampleSentence: 'The fast jet flies high.', sampleSentenceVi: 'Máy bay bay vút qua tầng mây.' },
  { word: 'job', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'o', 'b'], meaningVi: 'công việc tốt', emoji: '💼', sampleSentence: 'Good job on your lesson!', sampleSentenceVi: 'Bé làm bài học thật xuất sắc!' },
  { word: 'jump', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'u', 'm', 'p'], meaningVi: 'nhảy cao', emoji: '🦘', sampleSentence: 'Jump over the puddles.', sampleSentenceVi: 'Nhảy qua những vũng nước mưa.' },
  { word: 'jar', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'a', 'r'], meaningVi: 'hũ thủy tinh đựng kẹo', emoji: '🫙', sampleSentence: 'A jar of sweet treats.', sampleSentenceVi: 'Hũ thủy tinh đựng kẹo thơm.' },
  { word: 'jeep', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'ee', 'p'], meaningVi: 'xe jeep thám hiểm', emoji: '🚙', sampleSentence: 'Drive the safari jeep.', sampleSentenceVi: 'Lái chiếc xe jeep đi thám hiểm rừng.' },

  // /oa/
  { word: 'boat', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['b', 'oa', 't'], meaningVi: 'chiếc thuyền', emoji: '🛶', sampleSentence: 'Row the little boat.', sampleSentenceVi: 'Chèo chiếc thuyền con trên sông.' },
  { word: 'coat', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['c', 'oa', 't'], meaningVi: 'áo khoác ấm', emoji: '🧥', sampleSentence: 'Wear a warm winter coat.', sampleSentenceVi: 'Mặc áo khoác ấm mùa đông.' },
  { word: 'goat', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['g', 'oa', 't'], meaningVi: 'chú dê núi', emoji: '🐐', sampleSentence: 'The goat climbs rocks.', sampleSentenceVi: 'Chú dê leo trèo vách núi.' },
  { word: 'soap', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['s', 'oa', 'p'], meaningVi: 'bánh xà phòng', emoji: '🧼', sampleSentence: 'Wash hands with bubbly soap.', sampleSentenceVi: 'Rửa tay sạch bằng xà phòng thơm.' },
  { word: 'road', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['r', 'oa', 'd'], meaningVi: 'con đường quê', emoji: '🛣️', sampleSentence: 'Walk along the quiet road.', sampleSentenceVi: 'Dạo bước trên con đường làng êm đềm.' },
  { word: 'toad', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['t', 'oa', 'd'], meaningVi: 'chú cóc tía', emoji: '🐸', sampleSentence: 'A little toad rests in moss.', sampleSentenceVi: 'Chú cóc nằm nghỉ dưới thảm rêu.' },
  { word: 'oak', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['oa', 'k'], meaningVi: 'cây sồi đại thụ', emoji: '🌳', sampleSentence: 'A mighty oak spreads branches.', sampleSentenceVi: 'Cây sồi vươn tán râm mát.' },

  // /ie/
  { word: 'pie', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['p', 'ie'], meaningVi: 'bánh nướng táo', emoji: '🥧', sampleSentence: 'Bake a warm apple pie.', sampleSentenceVi: 'Nướng chiếc bánh táo ngọt lành.' },
  { word: 'tie', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['t', 'ie'], meaningVi: 'cà vạt / buộc dây', emoji: '👔', sampleSentence: 'Tie shoelaces in a bow.', sampleSentenceVi: 'Buộc dây giày thành nơ xinh.' },
  { word: 'lie', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['l', 'ie'], meaningVi: 'nằm nghỉ ngơi', emoji: '🛏️', sampleSentence: 'Lie down for bedtime.', sampleSentenceVi: 'Nằm nghỉ ngơi trên gối êm.' },
  { word: 'die', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['d', 'ie'], meaningVi: 'xúc xắc trò chơi', emoji: '🎲', sampleSentence: 'Roll the lucky game die.', sampleSentenceVi: 'Tung con xúc xắc trò chơi.' },
  { word: 'cried', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['c', 'r', 'ie', 'd'], meaningVi: 'đã khóc nhè', emoji: '🥺', sampleSentence: 'Mom comforted when I cried.', sampleSentenceVi: 'Mẹ vỗ về khi con khóc nhè.' },
  { word: 'spied', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['s', 'p', 'ie', 'd'], meaningVi: 'đã phát hiện ra', emoji: '🕵️', sampleSentence: 'I spied a butterfly.', sampleSentenceVi: 'Bé đã phát hiện chú bướm xinh.' },

  // /ee/
  { word: 'bee', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['b', 'ee'], meaningVi: 'chú ong chăm chỉ', emoji: '🐝', sampleSentence: 'The busy bee visits flowers.', sampleSentenceVi: 'Chú ong bay tìm mật hoa thơm.' },
  { word: 'tree', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['t', 'r', 'ee'], meaningVi: 'cây xanh lớn', emoji: '🌳', sampleSentence: 'Green leaves on the tree.', sampleSentenceVi: 'Lá xanh mướt trên cành cây.' },
  { word: 'seed', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['s', 'ee', 'd'], meaningVi: 'hạt mầm nhỏ', emoji: '🌱', sampleSentence: 'Plant a tiny seed.', sampleSentenceVi: 'Gieo hạt mầm xuống luống đất.' },
  { word: 'feet', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['f', 'ee', 't'], meaningVi: 'đôi bàn chân', emoji: '🦶', sampleSentence: 'Stamp your feet with joy.', sampleSentenceVi: 'Dậm chân theo nhịp điệu vui.' },
  { word: 'sweet', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['s', 'w', 'ee', 't'], meaningVi: 'ngọt ngào', emoji: '🍯', sampleSentence: 'Honey is sweet and good.', sampleSentenceVi: 'Mật ong ngọt ngào bổ dưỡng.' },
  { word: 'sheep', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['sh', 'ee', 'p'], meaningVi: 'chú cừu lông bông', emoji: '🐑', sampleSentence: 'Fluffy white sheep graze.', sampleSentenceVi: 'Đàn cừu lông trắng ăn cỏ non.' },
  { word: 'green', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['g', 'r', 'ee', 'n'], meaningVi: 'màu xanh lá biếc', emoji: '🟢', sampleSentence: 'The green grass in summer.', sampleSentenceVi: 'Thảm cỏ xanh mát ngày hè.' },

  // /or/
  { word: 'fork', phonemeId: 'or', group: 4, stage: 3, phonemes: ['f', 'or', 'k'], meaningVi: 'chiếc nĩa ăn', emoji: '🍴', sampleSentence: 'Use a fork for noodles.', sampleSentenceVi: 'Dùng nĩa ăn món mì ngon.' },
  { word: 'horn', phonemeId: 'or', group: 4, stage: 3, phonemes: ['h', 'or', 'n'], meaningVi: 'chiếc sừng hươu', emoji: '📯', sampleSentence: 'Blow the toy horn.', sampleSentenceVi: 'Thổi chiếc kèn sừng vang xa.' },
  { word: 'corn', phonemeId: 'or', group: 4, stage: 3, phonemes: ['c', 'or', 'n'], meaningVi: 'bắp ngô vàng', emoji: '🌽', sampleSentence: 'Sweet boiled yellow corn.', sampleSentenceVi: 'Bắp ngô vàng ngọt bùi.' },
  { word: 'storm', phonemeId: 'or', group: 4, stage: 3, phonemes: ['s', 't', 'or', 'm'], meaningVi: 'cơn bão', emoji: '⛈️', sampleSentence: 'Stay warm during a storm.', sampleSentenceVi: 'Ở trong nhà ấm khi có mưa to.' },
  { word: 'cork', phonemeId: 'or', group: 4, stage: 3, phonemes: ['c', 'or', 'k'], meaningVi: 'nút bấc bồng bềnh', emoji: '🍾', sampleSentence: 'The cork floats in water.', sampleSentenceVi: 'Nút bấc nổi bồng bềnh trên nước.' },
  { word: 'torch', phonemeId: 'or', group: 4, stage: 3, phonemes: ['t', 'or', 'ch'], meaningVi: 'ngọn đuốc soi đường', emoji: '🔦', sampleSentence: 'Light up with a bright torch.', sampleSentenceVi: 'Soi sáng lối đi bằng ngọn đuốc.' },
  { word: 'horse', phonemeId: 'or', group: 4, stage: 3, phonemes: ['h', 'or', 's', 'e'], meaningVi: 'chú ngựa phi nhanh', emoji: '🐴', sampleSentence: 'A brown horse trots along.', sampleSentenceVi: 'Chú ngựa nâu phi nước kiệu.' },

  // ================= GROUP 5: z, w, ng, v, oo_short, oo_long (STAGE 3: 5-6 Tuổi) =================
  // /z/
  { word: 'zip', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'i', 'p'], meaningVi: 'kéo khóa áo', emoji: '🤐', sampleSentence: 'Zip up your cozy coat.', sampleSentenceVi: 'Kéo khóa áo khoác cho ấm.' },
  { word: 'zoo', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'oo'], meaningVi: 'vườn bách thú', emoji: '🦁', sampleSentence: 'Visit animals at the zoo.', sampleSentenceVi: 'Đi thăm các bạn thú ở vườn bách thú.' },
  { word: 'zebra', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'e', 'b', 'r', 'a'], meaningVi: 'ngựa vằn', emoji: '🦓', sampleSentence: 'A zebra has black and white stripes.', sampleSentenceVi: 'Ngựa vằn có sọc đen trắng.' },
  { word: 'buzz', phonemeId: 'z', group: 5, stage: 3, phonemes: ['b', 'u', 'z'], meaningVi: 'tiếng ve kêu vù vù', emoji: '🐝', sampleSentence: 'Bees buzz around blossoms.', sampleSentenceVi: 'Ong bay vù vù quanh khóm hoa.' },
  { word: 'fizz', phonemeId: 'z', group: 5, stage: 3, phonemes: ['f', 'i', 'zz'], meaningVi: 'tiếng sủi bọt xèo xèo', emoji: '🫧', sampleSentence: 'Bubbles fizz in cold lemonade.', sampleSentenceVi: 'Bọt sủi lăn tăn trong ly nước chanh.' },
  { word: 'zero', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'e', 'r', 'o'], meaningVi: 'số không tròn trĩnh', emoji: '0️⃣', sampleSentence: 'A round zero on the slate.', sampleSentenceVi: 'Số không tròn xoe trên bảng con.' },

  // /w/
  { word: 'wet', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'e', 't'], meaningVi: 'ướt sũng nước', emoji: '💦', sampleSentence: 'My boots are wet from rain.', sampleSentenceVi: 'Đôi ủng ướt sau cơn mưa.' },
  { word: 'win', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'i', 'n'], meaningVi: 'chiến thắng', emoji: '🏆', sampleSentence: 'Play fair and win stars.', sampleSentenceVi: 'Chơi giỏi và giành nhiều sao.' },
  { word: 'wind', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'i', 'n', 'd'], meaningVi: 'ngọn gió mát', emoji: '🍃', sampleSentence: 'Gentle wind blows leaves.', sampleSentenceVi: 'Làn gió nhẹ thổi lá lay bay.' },
  { word: 'web', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'e', 'b'], meaningVi: 'mạng nhện giăng', emoji: '🕸️', sampleSentence: 'A spider spins a silk web.', sampleSentenceVi: 'Chú nhện giăng tơ tròn xoe.' },
  { word: 'wig', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'i', 'g'], meaningVi: 'bộ tóc giả hóa trang', emoji: '💇', sampleSentence: 'Wear a funny party wig.', sampleSentenceVi: 'Đội bộ tóc giả hóa trang vui nhộn.' },
  { word: 'wall', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'a', 'll'], meaningVi: 'bức tường gạch', emoji: '🧱', sampleSentence: 'Paint pictures on the wall.', sampleSentenceVi: 'Treo tranh xinh trên bức tường.' },
  { word: 'wish', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'i', 'sh'], meaningVi: 'ước mơ diệu kỳ', emoji: '🌠', sampleSentence: 'Make a wish on a falling star.', sampleSentenceVi: 'Ước một điều ước dưới sao băng.' },

  // /ng/
  { word: 'ring', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['r', 'i', 'ng'], meaningVi: 'chiếc nhẫn vàng / chuông reo', emoji: '💍', sampleSentence: 'A shiny gold ring.', sampleSentenceVi: 'Chiếc nhẫn vàng xinh xắn.' },
  { word: 'sing', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['s', 'i', 'ng'], meaningVi: 'hát vang', emoji: '🎤', sampleSentence: 'Sing a joyful melody.', sampleSentenceVi: 'Hát vang giai điệu vui tươi.' },
  { word: 'king', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['k', 'i', 'ng'], meaningVi: 'vị vua anh minh', emoji: '👑', sampleSentence: 'The king wears a crown.', sampleSentenceVi: 'Vị vua đội vương miện vàng.' },
  { word: 'wing', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['w', 'i', 'ng'], meaningVi: 'đôi cánh chim', emoji: '🪽', sampleSentence: 'Birds flutter their wings.', sampleSentenceVi: 'Đôi cánh chim bay liệng.' },
  { word: 'song', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['s', 'o', 'ng'], meaningVi: 'bài hát vui tươi', emoji: '🎵', sampleSentence: 'Sing a lovely bedtime song.', sampleSentenceVi: 'Hát khúc ca ru ngủ êm đềm.' },
  { word: 'long', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['l', 'o', 'ng'], meaningVi: 'dài ngoằn', emoji: '📏', sampleSentence: 'A long colorful train.', sampleSentenceVi: 'Đoàn tàu hỏa dài sắc màu.' },
  { word: 'strong', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['s', 't', 'r', 'o', 'ng'], meaningVi: 'khỏe khoắn dẻo dai', emoji: '💪', sampleSentence: 'Grow up big and strong.', sampleSentenceVi: 'Lớn lên khỏe mạnh kiên cường.' },

  // /v/
  { word: 'van', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'a', 'n'], meaningVi: 'xe tải nhỏ', emoji: '🚐', sampleSentence: 'Drive the red camping van.', sampleSentenceVi: 'Lái chiếc xe van đi dã ngoại.' },
  { word: 'vet', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'e', 't'], meaningVi: 'bác sĩ thú y', emoji: '🩺', sampleSentence: 'The vet cares for kittens.', sampleSentenceVi: 'Bác sĩ chăm sóc cho mèo con.' },
  { word: 'vest', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'e', 's', 't'], meaningVi: 'áo gi-lê xinh', emoji: '🦺', sampleSentence: 'Put on a bright vest.', sampleSentenceVi: 'Mặc chiếc áo gi-lê xinh xắn.' },
  { word: 'vine', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'i', 'n', 'e'], meaningVi: 'dây leo nho xanh', emoji: '🍇', sampleSentence: 'Sweet grapes grow on the vine.', sampleSentenceVi: 'Nho ngọt chín mọng trên giàn leo.' },
  { word: 'vase', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'a', 's', 'e'], meaningVi: 'bình hoa gốm', emoji: '🏺', sampleSentence: 'Fresh flowers in the ceramic vase.', sampleSentenceVi: 'Hoa tươi cắm trong bình gốm xinh.' },

  // /oo_short/
  { word: 'book', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['b', 'oo', 'k'], meaningVi: 'cuốn sách tranh', emoji: '📖', sampleSentence: 'Read an Ehon picture book.', sampleSentenceVi: 'Đọc cuốn sách tranh Ehon tuyệt đẹp.' },
  { word: 'cook', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['c', 'oo', 'k'], meaningVi: 'nấu món ngon', emoji: '🧑‍🍳', sampleSentence: 'Cook a tasty vegetable soup.', sampleSentenceVi: 'Nấu món súp rau củ ngon.' },
  { word: 'look', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['l', 'oo', 'k'], meaningVi: 'nhìn ngắm', emoji: '👀', sampleSentence: 'Look at the rainbow sky.', sampleSentenceVi: 'Ngắm nhìn cầu vồng rực rỡ.' },
  { word: 'foot', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['f', 'oo', 't'], meaningVi: 'bàn chân', emoji: '🦶', sampleSentence: 'Hop on one foot.', sampleSentenceVi: 'Nhảy lò cò một chân.' },
  { word: 'wood', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['w', 'oo', 'd'], meaningVi: 'gỗ thơm rừng', emoji: '🪵', sampleSentence: 'A cabin made of cedar wood.', sampleSentenceVi: 'Ngôi nhà gỗ ấm áp giữa rừng.' },
  { word: 'wool', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['w', 'oo', 'l'], meaningVi: 'len cừu mềm mại', emoji: '🧶', sampleSentence: 'A warm sweater of soft wool.', sampleSentenceVi: 'Áo len cừu mềm mại ấm áp.' },
  { word: 'hook', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['h', 'oo', 'k'], meaningVi: 'móc treo áo', emoji: '🪝', sampleSentence: 'Hang your coat on the hook.', sampleSentenceVi: 'Treo áo khoác lên móc gọn gàng.' },

  // /oo_long/
  { word: 'moon', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['m', 'oo', 'n'], meaningVi: 'mặt trăng rằm', emoji: '🌕', sampleSentence: 'The bright moon glows at night.', sampleSentenceVi: 'Vầng trăng tròn sáng lung linh.' },
  { word: 'spoon', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['s', 'p', 'oo', 'n'], meaningVi: 'chiếc thìa con', emoji: '🥄', sampleSentence: 'Eat cereal with a silver spoon.', sampleSentenceVi: 'Dùng thìa con ăn ngũ cốc.' },
  { word: 'room', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['r', 'oo', 'm'], meaningVi: 'căn phòng ấm', emoji: '🚪', sampleSentence: 'Clean up your playroom.', sampleSentenceVi: 'Dọn dẹp căn phòng đồ chơi.' },
  { word: 'pool', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['p', 'oo', 'l'], meaningVi: 'hồ bơi xanh mát', emoji: '🏊', sampleSentence: 'Swim in the cool pool.', sampleSentenceVi: 'Bơi trong làn nước hồ mát rượi.' },
  { word: 'root', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['r', 'oo', 't'], meaningVi: 'rễ cây sâu', emoji: '🌱', sampleSentence: 'Tree roots reach deep down.', sampleSentenceVi: 'Rễ cây cắm sâu vào lòng đất mẹ.' },
  { word: 'cool', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['c', 'oo', 'l'], meaningVi: 'mát rượi sảng khoái', emoji: '🧊', sampleSentence: 'A cool breeze in summer.', sampleSentenceVi: 'Làn gió mát lành ngày hè.' },
  { word: 'tool', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['t', 'oo', 'l'], meaningVi: 'dụng cụ đồ nghề', emoji: '🔨', sampleSentence: 'Fix toys with a wooden tool.', sampleSentenceVi: 'Sửa đồ chơi bằng dụng cụ gỗ.' },

  // ================= GROUP 6: y, x, ch, sh, th_unvoiced, th_voiced (STAGE 3 & 4: 5-8 Tuổi) =================
  // /y/
  { word: 'yak', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'a', 'k'], meaningVi: 'bò Tây Tạng lông dài', emoji: '🦬', sampleSentence: 'A furry yak on the mountain.', sampleSentenceVi: 'Chú bò lông dài trên đỉnh núi.' },
  { word: 'yes', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'e', 's'], meaningVi: 'vâng ạ / đồng ý', emoji: '👍', sampleSentence: 'Say yes with a smile.', sampleSentenceVi: 'Mỉm cười dạ vâng ngoan ngoãn.' },
  { word: 'yell', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'e', 'l'], meaningVi: 'reo hò vui mừng', emoji: '🗣️', sampleSentence: 'Cheer and yell hooray!', sampleSentenceVi: 'Reo vang hoan hô chiến thắng!' },
  { word: 'yam', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'a', 'm'], meaningVi: 'củ khoai ngọt', emoji: '🍠', sampleSentence: 'Roasted sweet yam.', sampleSentenceVi: 'Củ khoai nướng thơm bùi.' },
  { word: 'yard', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'ar', 'd'], meaningVi: 'sân chơi cỏ xanh', emoji: '🏡', sampleSentence: 'Run around the grassy yard.', sampleSentenceVi: 'Tung tăng chạy nhảy trong sân vườn.' },
  { word: 'yarn', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'ar', 'n'], meaningVi: 'cuộn len nhiều màu', emoji: '🧶', sampleSentence: 'The kitten plays with yarn.', sampleSentenceVi: 'Mèo con vờn cuộn len tròn xoe.' },
  { word: 'yellow', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'e', 'll', 'ow'], meaningVi: 'sắc vàng nắng ấm', emoji: '💛', sampleSentence: 'Yellow sunflowers bloom.', sampleSentenceVi: 'Những đóa hướng dương vàng rực rỡ.' },

  // /x/
  { word: 'box', phonemeId: 'x', group: 6, stage: 3, phonemes: ['b', 'o', 'x'], meaningVi: 'chiếc hộp', emoji: '📦', sampleSentence: 'Open the treasure box.', sampleSentenceVi: 'Mở chiếc hộp báu vật.' },
  { word: 'fix', phonemeId: 'x', group: 6, stage: 3, phonemes: ['f', 'i', 'x'], meaningVi: 'sửa chữa', emoji: '🔧', sampleSentence: 'Fix the broken toy.', sampleSentenceVi: 'Sửa lại món đồ chơi con.' },
  { word: 'mix', phonemeId: 'x', group: 6, stage: 3, phonemes: ['m', 'i', 'x'], meaningVi: 'pha trộn màu', emoji: '🥣', sampleSentence: 'Mix paint colors together.', sampleSentenceVi: 'Pha trộn các sắc màu kỳ diệu.' },
  { word: 'fox', phonemeId: 'x', group: 6, stage: 3, phonemes: ['f', 'o', 'x'], meaningVi: 'chú cáo đuôi xù', emoji: '🦊', sampleSentence: 'A little red fox.', sampleSentenceVi: 'Chú cáo lông đỏ xinh đẹp.' },
  { word: 'six', phonemeId: 'x', group: 6, stage: 3, phonemes: ['s', 'i', 'x'], meaningVi: 'số sáu', emoji: '6️⃣', sampleSentence: 'Six shiny stars in line.', sampleSentenceVi: 'Sáu vì sao thẳng hàng lấp lánh.' },
  { word: 'wax', phonemeId: 'x', group: 6, stage: 3, phonemes: ['w', 'a', 'x'], meaningVi: 'sáp ong thiên nhiên', emoji: '🕯️', sampleSentence: 'Beeswax candle glows.', sampleSentenceVi: 'Ngọn nến sáp ong tỏa hương dịu.' },

  // /ch/
  { word: 'chin', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'i', 'n'], meaningVi: 'chiếc cằm nhỏ', emoji: '😊', sampleSentence: 'Touch your smiling chin.', sampleSentenceVi: 'Chạm tay vào chiếc cằm xinh.' },
  { word: 'chop', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'o', 'p'], meaningVi: 'chặt thái rau', emoji: '🔪', sampleSentence: 'Chop carrots for dinner.', sampleSentenceVi: 'Thái củ cà rốt giòn ngọt.' },
  { word: 'chat', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'a', 't'], meaningVi: 'trò chuyện vui', emoji: '💬', sampleSentence: 'Chat happily with Leo.', sampleSentenceVi: 'Trò chuyện vui cùng bạn Leo.' },
  { word: 'chest', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'e', 's', 't'], meaningVi: 'rương kho báu', emoji: '🪙', sampleSentence: 'Gold in the ancient chest.', sampleSentenceVi: 'Rương kho báu chứa đồng tiền vàng.' },
  { word: 'chip', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'i', 'p'], meaningVi: 'mẩu bánh giòn tan', emoji: '🍪', sampleSentence: 'A crunchy potato chip.', sampleSentenceVi: 'Mẩu khoai tây chiên giòn tan.' },
  { word: 'chick', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'i', 'ck'], meaningVi: 'chú gà con vàng óng', emoji: '🐥', sampleSentence: 'Fluffy yellow chick chirps.', sampleSentenceVi: 'Chú gà con lông tơ kêu chiếp chiếp.' },
  { word: 'cherry', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'e', 'r', 'y'], meaningVi: 'quả anh đào đỏ mọng', emoji: '🍒', sampleSentence: 'A pair of sweet cherries.', sampleSentenceVi: 'Cặp quả anh đào đỏ tươi.' },

  // /sh/
  { word: 'ship', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'i', 'p'], meaningVi: 'con tàu lớn', emoji: '🚢', sampleSentence: 'A grand ship sails the ocean.', sampleSentenceVi: 'Con tàu lớn rẽ sóng đại dương.' },
  { word: 'shop', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'o', 'p'], meaningVi: 'cửa tiệm bánh', emoji: '🏪', sampleSentence: 'Visit the bread shop.', sampleSentenceVi: 'Ghé thăm cửa tiệm bánh mì thơm.' },
  { word: 'shed', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'e', 'd'], meaningVi: 'nhà kho nhỏ', emoji: '🏚️', sampleSentence: 'Garden tools in the shed.', sampleSentenceVi: 'Dụng cụ làm vườn xếp trong kho.' },
  { word: 'shell', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'e', 'l'], meaningVi: 'vỏ ốc biển', emoji: '🐚', sampleSentence: 'Find a smooth shell on the sand.', sampleSentenceVi: 'Nhặt vỏ ốc óng ánh bên bờ cát.' },
  { word: 'dish', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['d', 'i', 'sh'], meaningVi: 'chiếc đĩa gốm hoa', emoji: '🍽️', sampleSentence: 'Put fruits on the clean dish.', sampleSentenceVi: 'Xếp trái cây lên chiếc đĩa hoa.' },
  { word: 'shine', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'i', 'n', 'e'], meaningVi: 'tỏa sáng lấp lánh', emoji: '✨', sampleSentence: 'Stars shine in the clear sky.', sampleSentenceVi: 'Ngàn sao tỏa sáng lung linh.' },
  { word: 'shark', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'ar', 'k'], meaningVi: 'chú cá mập đại dương', emoji: '🦈', sampleSentence: 'A swift shark swims deep.', sampleSentenceVi: 'Chú cá mập bơi lặn dưới biển sâu.' },

  // /th_unvoiced/
  { word: 'thin', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'i', 'n'], meaningVi: 'mảnh mai', emoji: '📏', sampleSentence: 'A thin clean line.', sampleSentenceVi: 'Một nét vẽ thanh mảnh.' },
  { word: 'thorn', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'or', 'n'], meaningVi: 'chiếc gai hoa hồng', emoji: '🌹', sampleSentence: 'A rose has prickly thorns.', sampleSentenceVi: 'Cành hồng có những chiếc gai con.' },
  { word: 'thumb', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'u', 'm'], meaningVi: 'ngón tay cái', emoji: '👍', sampleSentence: 'Thumbs up for good effort!', sampleSentenceVi: 'Giơ ngón cái khen bé tuyệt vời!' },
  { word: 'moth', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['m', 'o', 'th'], meaningVi: 'chú bướm đêm', emoji: '🦋', sampleSentence: 'A soft moth flies by the light.', sampleSentenceVi: 'Chú bướm đêm bay lượn bên ánh đèn.' },
  { word: 'three', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'r', 'ee'], meaningVi: 'số ba may mắn', emoji: '3️⃣', sampleSentence: 'Three little birds in a tree.', sampleSentenceVi: 'Ba chú chim nhỏ hót ca trên cành.' },
  { word: 'teeth', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['t', 'ee', 'th'], meaningVi: 'hàm răng trắng xinh', emoji: '🦷', sampleSentence: 'Brush your clean white teeth.', sampleSentenceVi: 'Đánh răng trắng sạch trước giờ ngủ.' },
  { word: 'path', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['p', 'a', 'th'], meaningVi: 'lối đi lát đá', emoji: '🛤️', sampleSentence: 'Follow the stone garden path.', sampleSentenceVi: 'Bước theo con đường đá trong vườn.' },
  { word: 'bath', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['b', 'a', 'th'], meaningVi: 'tắm mát sảng khoái', emoji: '🛁', sampleSentence: 'A warm bubble bath.', sampleSentenceVi: 'Tắm bọt xà phòng ấm áp vui thích.' },

  // /th_voiced/
  { word: 'this', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'i', 's'], meaningVi: 'cái này', emoji: '👇', sampleSentence: 'This is my favorite book.', sampleSentenceVi: 'Đây là cuốn sách bé thích nhất.' },
  { word: 'that', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'a', 't'], meaningVi: 'cái kia', emoji: '👉', sampleSentence: 'Look at that soaring eagle.', sampleSentenceVi: 'Nhìn chú đại bàng đang bay kìa.' },
  { word: 'then', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'e', 'n'], meaningVi: 'sau đó', emoji: '⏳', sampleSentence: 'Eat breakfast and then we play.', sampleSentenceVi: 'Ăn sáng xong rồi mình cùng chơi.' },
  { word: 'them', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'e', 'm'], meaningVi: 'chúng nó / các bạn ấy', emoji: '👥', sampleSentence: 'Give them sweet red berries.', sampleSentenceVi: 'Chia cho các bạn những quả mọng ngọt.' },
  { word: 'with', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['w', 'i', 'th'], meaningVi: 'cùng với', emoji: '🤝', sampleSentence: 'Walk in the park with mom.', sampleSentenceVi: 'Dạo chơi công viên cùng với mẹ.' },
  { word: 'they', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'ey'], meaningVi: 'họ / các bạn ấy', emoji: '🧑‍🤝‍🧑', sampleSentence: 'They dance around the flower bed.', sampleSentenceVi: 'Các bạn nhỏ nhảy múa quanh luống hoa.' },

  // ================= GROUP 7: qu, ou, oi, ue, er, ar (STAGE 4: 6-8 Tuổi Tiểu Học) =================
  // /qu/
  { word: 'queen', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'ee', 'n'], meaningVi: 'nữ hoàng xinh đẹp', emoji: '👸', sampleSentence: 'The kind queen loves books.', sampleSentenceVi: 'Nữ hoàng nhân từ thích đọc sách.' },
  { word: 'quick', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'i', 'c', 'k'], meaningVi: 'nhanh nhẹn', emoji: '⚡', sampleSentence: 'Be quick like lightning.', sampleSentenceVi: 'Nhanh nhẹn như tia chớp.' },
  { word: 'quilt', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'i', 'l', 't'], meaningVi: 'chiếc chăn ghép vải', emoji: '🛏️', sampleSentence: 'A cozy patchwork quilt.', sampleSentenceVi: 'Chiếc chăn ghép vải ấm cúng.' },
  { word: 'quack', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'a', 'c', 'k'], meaningVi: 'tiếng vịt kêu cạp cạp', emoji: '🦆', sampleSentence: 'Ducks quack by the pond.', sampleSentenceVi: 'Đàn vịt kêu cạp cạp bên bờ ao.' },
  { word: 'quiet', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'i', 'e', 't'], meaningVi: 'yên tĩnh dịu dàng', emoji: '🤫', sampleSentence: 'Be quiet in the reading nook.', sampleSentenceVi: 'Giữ yên lặng trong góc đọc sách.' },
  { word: 'quill', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'i', 'll'], meaningVi: 'bút lông vũ cổ tích', emoji: '🪶', sampleSentence: 'Write with a magical quill.', sampleSentenceVi: 'Viết thư bằng cây bút lông vũ.' },

  // /ou/
  { word: 'out', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['ou', 't'], meaningVi: 'ra ngoài', emoji: '🚪', sampleSentence: 'Go out and explore nature.', sampleSentenceVi: 'Ra ngoài thám hiểm thiên nhiên.' },
  { word: 'cloud', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['c', 'l', 'ou', 'd'], meaningVi: 'đám mây bồng bềnh', emoji: '☁️', sampleSentence: 'Fluffy white clouds float.', sampleSentenceVi: 'Những đám mây trắng bồng bềnh trôi.' },
  { word: 'loud', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['l', 'ou', 'd'], meaningVi: 'âm thanh vang dội', emoji: '📢', sampleSentence: 'A loud cheerful cheer.', sampleSentenceVi: 'Tiếng reo hò vang rộn ràng.' },
  { word: 'shout', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['sh', 'ou', 't'], meaningVi: 'hét vang vui vẻ', emoji: '🗣️', sampleSentence: 'Shout hooray together!', sampleSentenceVi: 'Cùng hét to hoan hô vui vẻ!' },
  { word: 'mouse', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['m', 'ou', 's', 'e'], meaningVi: 'chú chuột nhắt', emoji: '🐭', sampleSentence: 'A tiny field mouse nibbles.', sampleSentenceVi: 'Chú chuột nhắt gặm hạt ngô.' },
  { word: 'house', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['h', 'ou', 's', 'e'], meaningVi: 'ngôi nhà ấm cúng', emoji: '🏡', sampleSentence: 'Welcome to our cozy house.', sampleSentenceVi: 'Chào mừng bạn đến ngôi nhà ấm êm.' },
  { word: 'round', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['r', 'ou', 'n', 'd'], meaningVi: 'tròn xoe như quả bóng', emoji: '🔴', sampleSentence: 'A round bouncing ball.', sampleSentenceVi: 'Quả bóng tròn nảy tưng tưng.' },

  // /oi/
  { word: 'coin', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['c', 'oi', 'n'], meaningVi: 'đồng xu vàng', emoji: '🪙', sampleSentence: 'A shiny gold coin in hand.', sampleSentenceVi: 'Đồng xu vàng lấp lánh trên tay.' },
  { word: 'soil', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['s', 'oi', 'l'], meaningVi: 'đất mùn màu mỡ', emoji: '🪴', sampleSentence: 'Plants grow in rich soil.', sampleSentenceVi: 'Cây cối lớn lên từ đất lành.' },
  { word: 'oil', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['oi', 'l'], meaningVi: 'dầu ô liu', emoji: '🫒', sampleSentence: 'A drop of golden olive oil.', sampleSentenceVi: 'Giọt dầu ô liu vàng óng.' },
  { word: 'boil', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['b', 'oi', 'l'], meaningVi: 'nước sôi sùng sục', emoji: '♨️', sampleSentence: 'Boil water for warm soup.', sampleSentenceVi: 'Đun nước sôi nấu món súp ngon.' },
  { word: 'point', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['p', 'oi', 'n', 't'], meaningVi: 'chỉ tay vào tranh', emoji: '👉', sampleSentence: 'Point to the pretty bird.', sampleSentenceVi: 'Chỉ tay vào chú chim xinh xắn.' },
  { word: 'join', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['j', 'oi', 'n'], meaningVi: 'tham gia cùng bạn', emoji: '🤝', sampleSentence: 'Join our fun phonics game!', sampleSentenceVi: 'Cùng tham gia trò chơi phát âm nào!' },

  // /ue/
  { word: 'blue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['b', 'l', 'ue'], meaningVi: 'màu xanh da trời', emoji: '💙', sampleSentence: 'The blue sky is calm.', sampleSentenceVi: 'Bầu trời xanh trong êm ả.' },
  { word: 'clue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['c', 'l', 'ue'], meaningVi: 'manh mối bí mật', emoji: '🔍', sampleSentence: 'Find the secret clue.', sampleSentenceVi: 'Tìm manh mối thám hiểm bí ẩn.' },
  { word: 'glue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['g', 'l', 'ue'], meaningVi: 'keo dán giấy Ehon', emoji: '🧴', sampleSentence: 'Stick paper shapes with glue.', sampleSentenceVi: 'Dán hình cắt vào trang tranh Ehon.' },
  { word: 'true', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['t', 'r', 'ue'], meaningVi: 'sự thật / chân thành', emoji: '⭐', sampleSentence: 'A true and loyal friend.', sampleSentenceVi: 'Một người bạn chân thành tốt bụng.' },
  { word: 'rescue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['r', 'e', 's', 'c', 'ue'], meaningVi: 'giải cứu bạn nhỏ', emoji: '🚒', sampleSentence: 'Hero team to the rescue!', sampleSentenceVi: 'Đội cứu hộ dũng cảm lên đường!' },

  // /er/
  { word: 'sister', phonemeId: 'er', group: 7, stage: 4, phonemes: ['s', 'i', 's', 't', 'er'], meaningVi: 'chị gái yêu quý', emoji: '👧', sampleSentence: 'My elder sister helps me.', sampleSentenceVi: 'Chị gái giúp bé học bài.' },
  { word: 'winter', phonemeId: 'er', group: 7, stage: 4, phonemes: ['w', 'i', 'n', 't', 'er'], meaningVi: 'mùa đông có tuyết', emoji: '❄️', sampleSentence: 'Winter brings white snow.', sampleSentenceVi: 'Mùa đông mang tuyết trắng rơi.' },
  { word: 'letter', phonemeId: 'er', group: 7, stage: 4, phonemes: ['l', 'e', 't', 'er'], meaningVi: 'lá thư tay / chữ cái', emoji: '✉️', sampleSentence: 'Send a loving letter.', sampleSentenceVi: 'Gửi lá thư tay chan chứa yêu thương.' },
  { word: 'water', phonemeId: 'er', group: 7, stage: 4, phonemes: ['w', 'a', 't', 'er'], meaningVi: 'nước ngọt lành', emoji: '💧', sampleSentence: 'Drink clean fresh water.', sampleSentenceVi: 'Uống ly nước mát trong lành.' },
  { word: 'tiger', phonemeId: 'er', group: 7, stage: 4, phonemes: ['t', 'i', 'g', 'er'], meaningVi: 'chú hổ dũng mãnh', emoji: '🐅', sampleSentence: 'A striped tiger rests in shade.', sampleSentenceVi: 'Chú hổ vằn nghỉ mát dưới bóng cây.' },
  { word: 'farmer', phonemeId: 'er', group: 7, stage: 4, phonemes: ['f', 'ar', 'm', 'er'], meaningVi: 'bác nông dân chăm chỉ', emoji: '👨‍🌾', sampleSentence: 'The farmer gathers ripe fruit.', sampleSentenceVi: 'Bác nông dân hái trái ngọt thơm.' },
  { word: 'silver', phonemeId: 'er', group: 7, stage: 4, phonemes: ['s', 'i', 'l', 'v', 'er'], meaningVi: 'màu bạc lấp lánh', emoji: '🥈', sampleSentence: 'A silver bell rings softly.', sampleSentenceVi: 'Chiếc chuông bạc ngân nga êm dịu.' },

  // /ar/
  { word: 'star', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['s', 't', 'ar'], meaningVi: 'ngôi sao sáng', emoji: '⭐', sampleSentence: 'A twinkling golden star.', sampleSentenceVi: 'Ngôi sao vàng lấp lánh trên cao.' },
  { word: 'car', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['c', 'ar'], meaningVi: 'chiếc xe hơi', emoji: '🚗', sampleSentence: 'Drive the red family car.', sampleSentenceVi: 'Chiếc xe hơi bon bon trên đường.' },
  { word: 'park', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['p', 'ar', 'k'], meaningVi: 'công viên xanh', emoji: '🏞️', sampleSentence: 'Play on swings in the park.', sampleSentenceVi: 'Chơi xích đu trong công viên rợp bóng.' },
  { word: 'farm', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['f', 'ar', 'm'], meaningVi: 'nông trại bình yên', emoji: '🚜', sampleSentence: 'Animals live on the sunny farm.', sampleSentenceVi: 'Đàn thú đáng yêu trong nông trại nắng ấm.' },
  { word: 'barn', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['b', 'ar', 'n'], meaningVi: 'nhà kho thóc đỏ', emoji: '🛖', sampleSentence: 'Hay stored inside the red barn.', sampleSentenceVi: 'Cỏ khô xếp trong nhà kho đỏ.' },
  { word: 'dark', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['d', 'ar', 'k'], meaningVi: 'trời tối có trăng sao', emoji: '🌙', sampleSentence: 'Night is dark with stars.', sampleSentenceVi: 'Màn đêm yên tĩnh ngàn sao lung linh.' },
  { word: 'yard', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['y', 'ar', 'd'], meaningVi: 'sân chơi trước hiên', emoji: '🏡', sampleSentence: 'Flowers bloom in the front yard.', sampleSentenceVi: 'Hoa nở rực rỡ trước hiên nhà.' },
  { word: 'card', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['c', 'ar', 'd'], meaningVi: 'tấm thiệp chúc mừng', emoji: '💌', sampleSentence: 'Draw a colorful birthday card.', sampleSentenceVi: 'Vẽ tấm thiệp chúc mừng sinh nhật.' }
];

console.log(`Defined ${VOCABULARY_LIST.length} high quality decodable vocabulary items!`);
