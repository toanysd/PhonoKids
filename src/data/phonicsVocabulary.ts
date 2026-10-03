import { VocabularyItem } from '../types/phonics';

export const PHONICS_VOCABULARY: VocabularyItem[] = [
  // ================= GROUP 1: s, a, t, i, p, n (STAGE 1: 3-4 Tuổi) =================
  // /s/
  { id: 'v_sun', word: 'sun', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'u', 'n'], meaningVi: 'mặt trời', emoji: '☀️', sampleSentence: 'The sun is hot.', sampleSentenceVi: 'Mặt trời tỏa nắng ấm.' },
  { id: 'v_sit', word: 'sit', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'i', 't'], meaningVi: 'ngồi xuống', emoji: '🪑', sampleSentence: 'Sit on the mat.', sampleSentenceVi: 'Bé ngồi trên thảm.' },
  { id: 'v_sat', word: 'sat', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'a', 't'], meaningVi: 'đã ngồi', emoji: '🧘', sampleSentence: 'Sam sat on a rock.', sampleSentenceVi: 'Sam đã ngồi trên tảng đá.' },
  { id: 'v_sad', word: 'sad', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'a', 'd'], meaningVi: 'buồn bã', emoji: '😢', sampleSentence: 'Do not be sad.', sampleSentenceVi: 'Bé đừng buồn nhé.' },
  { id: 'v_six', word: 'six', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'i', 'x'], meaningVi: 'số sáu', emoji: '6️⃣', sampleSentence: 'I see six ants.', sampleSentenceVi: 'Bé thấy sáu chú kiến.' },
  { id: 'v_sip', word: 'sip', phonemeId: 's', group: 1, stage: 1, phonemes: ['s', 'i', 'p'], meaningVi: 'nhấp ngụm nhỏ', emoji: '🥤', sampleSentence: 'Take a sip of milk.', sampleSentenceVi: 'Uống một ngụm sữa ấm.' },

  // /a/
  { id: 'v_ant', word: 'ant', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'n', 't'], meaningVi: 'con kiến', emoji: '🐜', sampleSentence: 'An ant is on a pan.', sampleSentenceVi: 'Chú kiến đang ở trên chảo.' },
  { id: 'v_apple', word: 'apple', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'p', 'l'], meaningVi: 'quả táo đỏ', emoji: '🍎', sampleSentence: 'A red apple is sweet.', sampleSentenceVi: 'Quả táo đỏ ngọt lành.' },
  { id: 'v_ax', word: 'ax', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'x'], meaningVi: 'cái rìu', emoji: '🪓', sampleSentence: 'The ax cuts wood.', sampleSentenceVi: 'Cái rìu bổ củi.' },
  { id: 'v_act', word: 'act', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'c', 't'], meaningVi: 'diễn kịch', emoji: '🎭', sampleSentence: 'We act like lions.', sampleSentenceVi: 'Chúng mình diễn vai chú sư tử.' },
  { id: 'v_as', word: 'as', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 'z'], meaningVi: 'như là', emoji: '✨', sampleSentence: 'As fast as a cat.', sampleSentenceVi: 'Nhanh như một chú mèo.' },
  { id: 'v_at', word: 'at', phonemeId: 'a', group: 1, stage: 1, phonemes: ['a', 't'], meaningVi: 'ở tại', emoji: '📍', sampleSentence: 'Look at the dog.', sampleSentenceVi: 'Hãy nhìn chú cún kìa.' },

  // /t/
  { id: 'v_tap', word: 'tap', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'a', 'p'], meaningVi: 'vòi nước / gõ nhẹ', emoji: '🚰', sampleSentence: 'Tap the little drum.', sampleSentenceVi: 'Gõ nhẹ lên chiếc trống con.' },
  { id: 'v_tin', word: 'tin', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'i', 'n'], meaningVi: 'hộp thiếc', emoji: '🥫', sampleSentence: 'A tin has seeds.', sampleSentenceVi: 'Chiếc hộp thiếc đựng hạt mầm.' },
  { id: 'v_top', word: 'top', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'o', 'p'], meaningVi: 'đỉnh / con quay', emoji: '🪀', sampleSentence: 'Spin the colorful top.', sampleSentenceVi: 'Xoay tít con quay sắc màu.' },
  { id: 'v_ten', word: 'ten', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'e', 'n'], meaningVi: 'số mười', emoji: '🔟', sampleSentence: 'Ten green apples.', sampleSentenceVi: 'Mười quả táo xanh thơm.' },
  { id: 'v_tub', word: 'tub', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'u', 'b'], meaningVi: 'bồn tắm', emoji: '🛁', sampleSentence: 'A bath in the tub.', sampleSentenceVi: 'Tắm mát trong bồn tắm.' },
  { id: 'v_tag', word: 'tag', phonemeId: 't', group: 1, stage: 1, phonemes: ['t', 'a', 'g'], meaningVi: 'thẻ nhãn / trò đuổi bắt', emoji: '🏷️', sampleSentence: 'We play tag together.', sampleSentenceVi: 'Các bạn nhỏ chơi đuổi bắt.' },

  // /i/
  { id: 'v_ink', word: 'ink', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'n', 'k'], meaningVi: 'mực viết', emoji: '🖋️', sampleSentence: 'Blue ink on paper.', sampleSentenceVi: 'Mực xanh vẽ trên trang giấy.' },
  { id: 'v_in', word: 'in', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'n'], meaningVi: 'bên trong', emoji: '📥', sampleSentence: 'The cat is in the box.', sampleSentenceVi: 'Chú mèo nằm trong hộp.' },
  { id: 'v_igloo', word: 'igloo', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'g', 'l', 'oo'], meaningVi: 'nhà băng', emoji: '🧊', sampleSentence: 'An igloo made of ice.', sampleSentenceVi: 'Ngôi nhà băng mát lạnh.' },
  { id: 'v_ill', word: 'ill', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'l'], meaningVi: 'bị ốm', emoji: '🤒', sampleSentence: 'Rest when you feel ill.', sampleSentenceVi: 'Nghỉ ngơi khi bé thấy mệt.' },
  { id: 'v_it', word: 'it', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 't'], meaningVi: 'nó / điều đó', emoji: '👉', sampleSentence: 'It is a happy day.', sampleSentenceVi: 'Đó là một ngày vui.' },
  { id: 'v_insect', word: 'insect', phonemeId: 'i', group: 1, stage: 1, phonemes: ['i', 'n', 's', 'e', 'c', 't'], meaningVi: 'côn trùng', emoji: '🐞', sampleSentence: 'A tiny green insect.', sampleSentenceVi: 'Một chú bọ tí hon màu xanh.' },

  // /p/
  { id: 'v_pat', word: 'pat', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'a', 't'], meaningVi: 'vỗ nhẹ thân mật', emoji: '👋', sampleSentence: 'Pat the gentle puppy.', sampleSentenceVi: 'Vỗ nhẹ chú cún con.' },
  { id: 'v_pan', word: 'pan', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'a', 'n'], meaningVi: 'cái chảo rán', emoji: '🍳', sampleSentence: 'An egg on the pan.', sampleSentenceVi: 'Chiếc trứng thơm trên chảo.' },
  { id: 'v_pin', word: 'pin', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'i', 'n'], meaningVi: 'cái ghim cài', emoji: '🧷', sampleSentence: 'A shiny little pin.', sampleSentenceVi: 'Cái ghim băng nhỏ lấp lánh.' },
  { id: 'v_pot', word: 'pot', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'o', 't'], meaningVi: 'cái nồi', emoji: '🍲', sampleSentence: 'Soup in the cooking pot.', sampleSentenceVi: 'Nồi súp nóng hổi thơm ngon.' },
  { id: 'v_pig', word: 'pig', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'i', 'g'], meaningVi: 'chú heo hồng', emoji: '🐷', sampleSentence: 'The pink pig loves mud.', sampleSentenceVi: 'Chú heo hồng thích nghịch bùn.' },
  { id: 'v_pen', word: 'pen', phonemeId: 'p', group: 1, stage: 1, phonemes: ['p', 'e', 'n'], meaningVi: 'bút mực', emoji: '🖊️', sampleSentence: 'Draw with a pen.', sampleSentenceVi: 'Vẽ tranh bằng cây bút mực.' },

  // /n/
  { id: 'v_net', word: 'net', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'e', 't'], meaningVi: 'cái lưới bắt bướm', emoji: '🥅', sampleSentence: 'A net catches bubbles.', sampleSentenceVi: 'Chiếc lưới đón bong bóng bay.' },
  { id: 'v_nap', word: 'nap', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'a', 'p'], meaningVi: 'giấc ngủ trưa', emoji: '😴', sampleSentence: 'The cat takes a nap.', sampleSentenceVi: 'Mèo con ngủ trưa thật ngoan.' },
  { id: 'v_nut', word: 'nut', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'u', 't'], meaningVi: 'hạt dẻ thơm', emoji: '🌰', sampleSentence: 'The squirrel holds a nut.', sampleSentenceVi: 'Sóc nhỏ ôm quả hạt dẻ.' },
  { id: 'v_nod', word: 'nod', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'o', 'd'], meaningVi: 'gật đầu đồng ý', emoji: '😊', sampleSentence: 'Nod your head yes.', sampleSentenceVi: 'Gật đầu đồng ý mỉm cười.' },
  { id: 'v_nest', word: 'nest', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'e', 's', 't'], meaningVi: 'tổ chim ấm', emoji: '🪹', sampleSentence: 'A bird in the nest.', sampleSentenceVi: 'Chim con trong tổ ấm êm.' },
  { id: 'v_nip', word: 'nip', phonemeId: 'n', group: 1, stage: 1, phonemes: ['n', 'i', 'p'], meaningVi: 'nhấm nháp', emoji: '🤏', sampleSentence: 'A tiny playful nip.', sampleSentenceVi: 'Nhấm một mẩu bánh nhỏ xíu.' },

  // ================= GROUP 2: c_k, e, h, r, m, d (STAGE 1 & 2: 3-5 Tuổi) =================
  // /c_k/
  { id: 'v_cat', word: 'cat', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'a', 't'], meaningVi: 'chú mèo', emoji: '🐱', sampleSentence: 'The cat sits on the mat.', sampleSentenceVi: 'Mèo ngồi trên thảm êm.' },
  { id: 'v_cup', word: 'cup', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'u', 'p'], meaningVi: 'chiếc cốc', emoji: '☕', sampleSentence: 'Drink from a yellow cup.', sampleSentenceVi: 'Uống nước bằng cốc vàng.' },
  { id: 'v_cap', word: 'cap', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['c', 'a', 'p'], meaningVi: 'mũ lưỡi trai', emoji: '🧢', sampleSentence: 'Wear a blue cap.', sampleSentenceVi: 'Đội chiếc mũ lưỡi trai xanh.' },
  { id: 'v_kid', word: 'kid', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['k', 'i', 'd'], meaningVi: 'em bé nhỏ', emoji: '🧒', sampleSentence: 'A happy kid sings.', sampleSentenceVi: 'Em bé vui hát líu lo.' },
  { id: 'v_kit', word: 'kit', phonemeId: 'c_k', group: 2, stage: 1, phonemes: ['k', 'i', 't'], meaningVi: 'bộ đồ chơi', emoji: '🧰', sampleSentence: 'An art kit with paint.', sampleSentenceVi: 'Bộ cọ vẽ nhiều sắc màu.' },
  { id: 'v_kite', word: 'kite', phonemeId: 'c_k', group: 2, stage: 2, phonemes: ['k', 'i', 't', 'e'], meaningVi: 'con diều bay', emoji: '🪁', sampleSentence: 'Fly a kite in the wind.', sampleSentenceVi: 'Thả diều no gió trên đồi.' },

  // /e/
  { id: 'v_egg', word: 'egg', phonemeId: 'e', group: 2, stage: 1, phonemes: ['e', 'g'], meaningVi: 'quả trứng', emoji: '🥚', sampleSentence: 'Crack an egg for baking.', sampleSentenceVi: 'Đập quả trứng làm bánh.' },
  { id: 'v_elf', word: 'elf', phonemeId: 'e', group: 2, stage: 1, phonemes: ['e', 'l', 'f'], meaningVi: 'chú yêu tinh nhỏ', emoji: '🧝', sampleSentence: 'A little fairy elf.', sampleSentenceVi: 'Chú yêu tinh nhỏ dễ thương.' },
  { id: 'v_elm', word: 'elm', phonemeId: 'e', group: 2, stage: 2, phonemes: ['e', 'l', 'm'], meaningVi: 'cây du', emoji: '🌳', sampleSentence: 'A tall leafy elm tree.', sampleSentenceVi: 'Cây du cao tỏa bóng mát.' },
  { id: 'v_end', word: 'end', phonemeId: 'e', group: 2, stage: 1, phonemes: ['e', 'n', 'd'], meaningVi: 'kết thúc', emoji: '🏁', sampleSentence: 'The end of the story.', sampleSentenceVi: 'Đoạn kết câu chuyện hay.' },

  // /h/
  { id: 'v_hat', word: 'hat', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'a', 't'], meaningVi: 'chiếc mũ rộng vành', emoji: '👒', sampleSentence: 'A sunny straw hat.', sampleSentenceVi: 'Chiếc mũ cói che nắng ấm.' },
  { id: 'v_hen', word: 'hen', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'e', 'n'], meaningVi: 'cô gà mái', emoji: '🐔', sampleSentence: 'The red hen pecks corn.', sampleSentenceVi: 'Cô gà mái mổ hạt bắp.' },
  { id: 'v_hop', word: 'hop', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'o', 'p'], meaningVi: 'nhảy lò cò', emoji: '🦘', sampleSentence: 'Hop like a little bunny.', sampleSentenceVi: 'Nhảy lò cò như chú thỏ con.' },
  { id: 'v_hot', word: 'hot', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'o', 't'], meaningVi: 'nóng ấm', emoji: '🔥', sampleSentence: 'The warm tea is hot.', sampleSentenceVi: 'Tách trà nóng thơm lừng.' },
  { id: 'v_hug', word: 'hug', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'u', 'g'], meaningVi: 'cái ôm ấm áp', emoji: '🤗', sampleSentence: 'Give mom a big hug.', sampleSentenceVi: 'Trao mẹ cái ôm ấm áp.' },
  { id: 'v_hut', word: 'hut', phonemeId: 'h', group: 2, stage: 1, phonemes: ['h', 'u', 't'], meaningVi: 'ngôi lều nhỏ', emoji: '🛖', sampleSentence: 'A cozy wooden hut.', sampleSentenceVi: 'Ngôi lều gỗ nhỏ xinh.' },

  // /r/
  { id: 'v_run', word: 'run', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'u', 'n'], meaningVi: 'chạy nhảy', emoji: '🏃', sampleSentence: 'Run fast on the grass.', sampleSentenceVi: 'Chạy nhanh trên thảm cỏ.' },
  { id: 'v_red', word: 'red', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'e', 'd'], meaningVi: 'màu đỏ tươi', emoji: '🔴', sampleSentence: 'A pretty red rose.', sampleSentenceVi: 'Bông hồng đỏ rực rỡ.' },
  { id: 'v_rat', word: 'rat', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'a', 't'], meaningVi: 'chú chuột', emoji: '🐀', sampleSentence: 'A little gray rat.', sampleSentenceVi: 'Chú chuột con màu xám.' },
  { id: 'v_rip', word: 'rip', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'i', 'p'], meaningVi: 'xé giấy cắt dán', emoji: '✂️', sampleSentence: 'Rip the colored paper.', sampleSentenceVi: 'Xé dán giấy thủ công.' },
  { id: 'v_rug', word: 'rug', phonemeId: 'r', group: 2, stage: 1, phonemes: ['r', 'u', 'g'], meaningVi: 'tấm thảm len', emoji: '🧶', sampleSentence: 'Sit on the soft rug.', sampleSentenceVi: 'Ngồi trên thảm len êm ái.' },
  { id: 'v_rob', word: 'rob', phonemeId: 'r', group: 2, stage: 2, phonemes: ['r', 'o', 'b'], meaningVi: 'chú chim Robin', emoji: '🐦', sampleSentence: 'Robin sings on the tree.', sampleSentenceVi: 'Chim robin hót trên cành.' },

  // /m/
  { id: 'v_man', word: 'man', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'a', 'n'], meaningVi: 'người đàn ông', emoji: '👨', sampleSentence: 'A tall kind man.', sampleSentenceVi: 'Một người chú tốt bụng.' },
  { id: 'v_mat', word: 'mat', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'a', 't'], meaningVi: 'tấm thảm chùi chân', emoji: '🧘', sampleSentence: 'Wipe shoes on the mat.', sampleSentenceVi: 'Lau giày trên tấm thảm.' },
  { id: 'v_mud', word: 'mud', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'u', 'd'], meaningVi: 'bùn đất', emoji: '🪵', sampleSentence: 'Puddle of brown mud.', sampleSentenceVi: 'Vũng bùn đất nâu mịn.' },
  { id: 'v_mop', word: 'mop', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'o', 'p'], meaningVi: 'cây lau sàn', emoji: '🧹', sampleSentence: 'Mop the kitchen floor.', sampleSentenceVi: 'Lau sàn nhà sạch bong.' },
  { id: 'v_milk', word: 'milk', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'i', 'l', 'k'], meaningVi: 'sữa bò tươi', emoji: '🥛', sampleSentence: 'Drink sweet fresh milk.', sampleSentenceVi: 'Uống ly sữa tươi thơm mát.' },
  { id: 'v_map', word: 'map', phonemeId: 'm', group: 2, stage: 1, phonemes: ['m', 'a', 'p'], meaningVi: 'bản đồ thám hiểm', emoji: '🗺️', sampleSentence: 'Look at the island map.', sampleSentenceVi: 'Xem bản đồ thám hiểm đảo.' },

  // /d/
  { id: 'v_dog', word: 'dog', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'o', 'g'], meaningVi: 'chú cún con', emoji: '🐶', sampleSentence: 'The happy dog wags tail.', sampleSentenceVi: 'Chú cún vẫy đuôi mừng vui.' },
  { id: 'v_dad', word: 'dad', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'a', 'd'], meaningVi: 'bố yêu', emoji: '👨‍👧', sampleSentence: 'Dad reads me a story.', sampleSentenceVi: 'Bố đọc truyện cho bé nghe.' },
  { id: 'v_dig', word: 'dig', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'i', 'g'], meaningVi: 'đào xới đất', emoji: '⛏️', sampleSentence: 'Dig a hole for seeds.', sampleSentenceVi: 'Đào hố nhỏ gieo mầm.' },
  { id: 'v_dot', word: 'dot', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'o', 't'], meaningVi: 'chấm tròn', emoji: '🔵', sampleSentence: 'A polka dot pattern.', sampleSentenceVi: 'Họa tiết chấm tròn xinh.' },
  { id: 'v_dip', word: 'dip', phonemeId: 'd', group: 2, stage: 1, phonemes: ['d', 'i', 'p'], meaningVi: 'chấm sốt', emoji: '🥣', sampleSentence: 'Dip bread in honey.', sampleSentenceVi: 'Chấm bánh mì vào mật ong.' },
  { id: 'v_dam', word: 'dam', phonemeId: 'd', group: 2, stage: 2, phonemes: ['d', 'a', 'm'], meaningVi: 'con đập nước', emoji: '🦫', sampleSentence: 'The beaver builds a dam.', sampleSentenceVi: 'Chú hải ly đắp đập ngăn dòng.' },

  // ================= GROUP 3: g, o, u, l, f, b (STAGE 2: 4-5 Tuổi) =================
  // /g/
  { id: 'v_gap', word: 'gap', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'a', 'p'], meaningVi: 'khoảng trống', emoji: '🕳️', sampleSentence: 'A gap in the garden fence.', sampleSentenceVi: 'Khe hở nhỏ ở hàng rào.' },
  { id: 'v_gas', word: 'gas', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'a', 's'], meaningVi: 'khí đốt / hơi', emoji: '💨', sampleSentence: 'Gas powers the stove.', sampleSentenceVi: 'Bếp gas nấu bữa cơm ấm.' },
  { id: 'v_gut', word: 'gut', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'u', 't'], meaningVi: 'bụng dạ tốt', emoji: '🫄', sampleSentence: 'Healthy food is good.', sampleSentenceVi: 'Ăn món ngon bụng khỏe khoắn.' },
  { id: 'v_gum', word: 'gum', phonemeId: 'g', group: 3, stage: 2, phonemes: ['g', 'u', 'm'], meaningVi: 'kẹo cao su', emoji: '🍬', sampleSentence: 'Sweet bubble gum.', sampleSentenceVi: 'Kẹo cao su ngọt thơm.' },

  // /o/
  { id: 'v_ox', word: 'ox', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'x'], meaningVi: 'chú bò đực', emoji: '🐂', sampleSentence: 'A strong working ox.', sampleSentenceVi: 'Chú bò tót khỏe mạnh.' },
  { id: 'v_off', word: 'off', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'f'], meaningVi: 'tắt đèn', emoji: '💡', sampleSentence: 'Turn the lights off.', sampleSentenceVi: 'Tắt đèn chuẩn bị ngủ ngon.' },
  { id: 'v_on', word: 'on', phonemeId: 'o', group: 3, stage: 2, phonemes: ['o', 'n'], meaningVi: 'ở trên', emoji: '🔛', sampleSentence: 'The book is on the table.', sampleSentenceVi: 'Sách nằm trên bàn học.' },

  // /u/
  { id: 'v_up', word: 'up', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 'p'], meaningVi: 'lên cao', emoji: '⬆️', sampleSentence: 'Look up at the stars.', sampleSentenceVi: 'Nhìn lên bầu trời ngàn sao.' },
  { id: 'v_us', word: 'us', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 's'], meaningVi: 'chúng mình', emoji: '👫', sampleSentence: 'Come play with us.', sampleSentenceVi: 'Cùng chơi với chúng mình nhé.' },
  { id: 'v_umbrella', word: 'umbrella', phonemeId: 'u', group: 3, stage: 2, phonemes: ['u', 'm', 'b', 'r', 'e', 'l', 'a'], meaningVi: 'chiếc ô che mưa', emoji: '☂️', sampleSentence: 'Open the colorful umbrella.', sampleSentenceVi: 'Bung chiếc ô che giọt mưa rơi.' },

  // /l/
  { id: 'v_lip', word: 'lip', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'i', 'p'], meaningVi: 'đôi môi xinh', emoji: '👄', sampleSentence: 'Smile with your lips.', sampleSentenceVi: 'Mỉm cười với bờ môi xinh.' },
  { id: 'v_log', word: 'log', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'o', 'g'], meaningVi: 'khúc gỗ tròn', emoji: '🪵', sampleSentence: 'A frog on a brown log.', sampleSentenceVi: 'Chú ếch ngồi trên khúc gỗ.' },
  { id: 'v_leg', word: 'leg', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'e', 'g'], meaningVi: 'đôi chân', emoji: '🦵', sampleSentence: 'Kick the ball with your leg.', sampleSentenceVi: 'Đá bóng bằng đôi chân khỏe.' },
  { id: 'v_lot', word: 'lot', phonemeId: 'l', group: 3, stage: 2, phonemes: ['l', 'o', 't'], meaningVi: 'rất nhiều', emoji: '✨', sampleSentence: 'A lot of bright stars.', sampleSentenceVi: 'Rất nhiều vì sao lấp lánh.' },

  // /f/
  { id: 'v_fox', word: 'fox', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'o', 'x'], meaningVi: 'chú cáo cam', emoji: '🦊', sampleSentence: 'A quick sly fox.', sampleSentenceVi: 'Chú cáo thông minh nhanh nhẹn.' },
  { id: 'v_fun', word: 'fun', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'u', 'n'], meaningVi: 'vui vẻ', emoji: '🎉', sampleSentence: 'Learning phonics is fun.', sampleSentenceVi: 'Học phát âm thật vui thích.' },
  { id: 'v_fan', word: 'fan', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'a', 'n'], meaningVi: 'chiếc quạt mát', emoji: '🪭', sampleSentence: 'The paper fan cools us.', sampleSentenceVi: 'Chiếc quạt giấy phe phẩy mát rượi.' },
  { id: 'v_fit', word: 'fit', phonemeId: 'f', group: 3, stage: 2, phonemes: ['f', 'i', 't'], meaningVi: 'vừa vặn', emoji: '👟', sampleSentence: 'Shoes fit my small feet.', sampleSentenceVi: 'Giày vừa vặn chân bé.' },

  // /b/
  { id: 'v_bat', word: 'bat', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'a', 't'], meaningVi: 'chú dơi / gậy bóng chày', emoji: '🦇', sampleSentence: 'A night flying bat.', sampleSentenceVi: 'Chú dơi bay đêm lượn vòng.' },
  { id: 'v_box', word: 'box', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'o', 'x'], meaningVi: 'chiếc hộp quà', emoji: '📦', sampleSentence: 'A surprise inside the box.', sampleSentenceVi: 'Món quà bất ngờ trong hộp.' },
  { id: 'v_bag', word: 'bag', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'a', 'g'], meaningVi: 'chiếc cặp sách', emoji: '🎒', sampleSentence: 'Pack books in the bag.', sampleSentenceVi: 'Xếp sách vào chiếc cặp xinh.' },
  { id: 'v_bug', word: 'bug', phonemeId: 'b', group: 3, stage: 2, phonemes: ['b', 'u', 'g'], meaningVi: 'chú bọ cánh cam', emoji: '🪲', sampleSentence: 'A green bug on a leaf.', sampleSentenceVi: 'Chú bọ xanh đậu trên lá biếc.' },

  // ================= GROUP 4: ai, j, oa, ie, ee, or (STAGE 2 & 3: 4-6 Tuổi) =================
  // /ai/
  { id: 'v_rain', word: 'rain', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['r', 'ai', 'n'], meaningVi: 'cơn mưa rào', emoji: '🌧️', sampleSentence: 'Rain falls from the cloud.', sampleSentenceVi: 'Mưa rơi tí tách trên mái nhà.' },
  { id: 'v_tail', word: 'tail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['t', 'ai', 'l'], meaningVi: 'chiếc đuôi cong', emoji: '🐕', sampleSentence: 'The puppy wags its tail.', sampleSentenceVi: 'Cún con vẫy chiếc đuôi cong.' },
  { id: 'v_sail', word: 'sail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['s', 'ai', 'l'], meaningVi: 'cánh buồm trắng', emoji: '⛵', sampleSentence: 'Sail the boat on the sea.', sampleSentenceVi: 'Thuyền giương buồm ra khơi xa.' },
  { id: 'v_snail', word: 'snail', phonemeId: 'ai', group: 4, stage: 3, phonemes: ['s', 'n', 'ai', 'l'], meaningVi: 'chú ốc sên', emoji: '🐌', sampleSentence: 'A slow snail crawls by.', sampleSentenceVi: 'Chú ốc sên bò chậm rãi.' },

  // /j/
  { id: 'v_jam', word: 'jam', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'a', 'm'], meaningVi: 'mứt dâu tây', emoji: '🍓', sampleSentence: 'Sweet strawberry jam.', sampleSentenceVi: 'Mứt dâu tây ngọt thơm phức.' },
  { id: 'v_jug', word: 'jug', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'u', 'g'], meaningVi: 'bình rót nước', emoji: '🏺', sampleSentence: 'Pour water from the jug.', sampleSentenceVi: 'Rót nước mát từ bình gốm.' },
  { id: 'v_jet', word: 'jet', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'e', 't'], meaningVi: 'máy bay phản lực', emoji: '✈️', sampleSentence: 'The fast jet flies high.', sampleSentenceVi: 'Máy bay bay vút qua tầng mây.' },
  { id: 'v_job', word: 'job', phonemeId: 'j', group: 4, stage: 2, phonemes: ['j', 'o', 'b'], meaningVi: 'công việc tốt', emoji: '💼', sampleSentence: 'Good job on your lesson!', sampleSentenceVi: 'Bé làm bài học thật xuất sắc!' },

  // /oa/
  { id: 'v_boat', word: 'boat', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['b', 'oa', 't'], meaningVi: 'chiếc thuyền', emoji: '🛶', sampleSentence: 'Row the little boat.', sampleSentenceVi: 'Chèo chiếc thuyền con trên sông.' },
  { id: 'v_coat', word: 'coat', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['c', 'oa', 't'], meaningVi: 'áo khoác ấm', emoji: '🧥', sampleSentence: 'Wear a warm winter coat.', sampleSentenceVi: 'Mặc áo khoác ấm mùa đông.' },
  { id: 'v_goat', word: 'goat', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['g', 'oa', 't'], meaningVi: 'chú dê núi', emoji: '🐐', sampleSentence: 'The goat climbs rocks.', sampleSentenceVi: 'Chú dê leo trèo vách núi.' },
  { id: 'v_soap', word: 'soap', phonemeId: 'oa', group: 4, stage: 3, phonemes: ['s', 'oa', 'p'], meaningVi: 'bánh xà phòng', emoji: '🧼', sampleSentence: 'Wash hands with bubbly soap.', sampleSentenceVi: 'Rửa tay sạch bằng xà phòng thơm.' },

  // /ie/
  { id: 'v_pie', word: 'pie', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['p', 'ie'], meaningVi: 'bánh nướng táo', emoji: '🥧', sampleSentence: 'Bake a warm apple pie.', sampleSentenceVi: 'Nướng chiếc bánh táo ngọt lành.' },
  { id: 'v_tie', word: 'tie', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['t', 'ie'], meaningVi: 'cà vạt / buộc dây', emoji: '👔', sampleSentence: 'Tie shoelaces in a bow.', sampleSentenceVi: 'Buộc dây giày thành nơ xinh.' },
  { id: 'v_lie', word: 'lie', phonemeId: 'ie', group: 4, stage: 3, phonemes: ['l', 'ie'], meaningVi: 'nằm nghỉ ngơi', emoji: '🛏️', sampleSentence: 'Lie down for bedtime.', sampleSentenceVi: 'Nằm nghỉ ngơi trên gối êm.' },

  // /ee/
  { id: 'v_bee', word: 'bee', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['b', 'ee'], meaningVi: 'chú ong chăm chỉ', emoji: '🐝', sampleSentence: 'The busy bee visits flowers.', sampleSentenceVi: 'Chú ong bay tìm mật hoa thơm.' },
  { id: 'v_tree', word: 'tree', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['t', 'r', 'ee'], meaningVi: 'cây xanh lớn', emoji: '🌳', sampleSentence: 'Green leaves on the tree.', sampleSentenceVi: 'Lá xanh mướt trên cành cây.' },
  { id: 'v_seed', word: 'seed', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['s', 'ee', 'd'], meaningVi: 'hạt mầm nhỏ', emoji: '🌱', sampleSentence: 'Plant a tiny seed.', sampleSentenceVi: 'Gieo hạt mầm xuống luống đất.' },
  { id: 'v_feet', word: 'feet', phonemeId: 'ee', group: 4, stage: 3, phonemes: ['f', 'ee', 't'], meaningVi: 'đôi bàn chân', emoji: '🦶', sampleSentence: 'Stamp your feet with joy.', sampleSentenceVi: 'Dậm chân theo nhịp điệu vui.' },

  // /or/
  { id: 'v_fork', word: 'fork', phonemeId: 'or', group: 4, stage: 3, phonemes: ['f', 'or', 'k'], meaningVi: 'chiếc nĩa ăn', emoji: '🍴', sampleSentence: 'Use a fork for noodles.', sampleSentenceVi: 'Dùng nĩa ăn món mì ngon.' },
  { id: 'v_horn', word: 'horn', phonemeId: 'or', group: 4, stage: 3, phonemes: ['h', 'or', 'n'], meaningVi: 'chiếc sừng hươu', emoji: '📯', sampleSentence: 'Blow the toy horn.', sampleSentenceVi: 'Thổi chiếc kèn sừng vang xa.' },
  { id: 'v_corn', word: 'corn', phonemeId: 'or', group: 4, stage: 3, phonemes: ['c', 'or', 'n'], meaningVi: 'bắp ngô vàng', emoji: '🌽', sampleSentence: 'Sweet boiled yellow corn.', sampleSentenceVi: 'Bắp ngô vàng ngọt bùi.' },
  { id: 'v_storm', word: 'storm', phonemeId: 'or', group: 4, stage: 3, phonemes: ['s', 't', 'or', 'm'], meaningVi: 'cơn bão', emoji: '⛈️', sampleSentence: 'Stay warm during a storm.', sampleSentenceVi: 'Ở trong nhà ấm khi có mưa to.' },

  // ================= GROUP 5: z, w, ng, v, oo_short, oo_long (STAGE 3: 5-6 Tuổi) =================
  // /z/
  { id: 'v_zip', word: 'zip', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'i', 'p'], meaningVi: 'kéo khóa áo', emoji: '🤐', sampleSentence: 'Zip up your cozy coat.', sampleSentenceVi: 'Kéo khóa áo khoác cho ấm.' },
  { id: 'v_zoo', word: 'zoo', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'oo'], meaningVi: 'vườn bách thú', emoji: '🦁', sampleSentence: 'Visit animals at the zoo.', sampleSentenceVi: 'Đi thăm các bạn thú ở vườn bách thú.' },
  { id: 'v_zebra', word: 'zebra', phonemeId: 'z', group: 5, stage: 3, phonemes: ['z', 'e', 'b', 'r', 'a'], meaningVi: 'ngựa vằn', emoji: '🦓', sampleSentence: 'A zebra has black and white stripes.', sampleSentenceVi: 'Ngựa vằn có sọc đen trắng.' },
  { id: 'v_buzz', word: 'buzz', phonemeId: 'z', group: 5, stage: 3, phonemes: ['b', 'u', 'z'], meaningVi: 'tiếng ve kêu vù vù', emoji: '🐝', sampleSentence: 'Bees buzz around blossoms.', sampleSentenceVi: 'Ong bay vù vù quanh khóm hoa.' },

  // /w/
  { id: 'v_wet', word: 'wet', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'e', 't'], meaningVi: 'ướt sũng nước', emoji: '💦', sampleSentence: 'My boots are wet from rain.', sampleSentenceVi: 'Đôi ủng ướt sau cơn mưa.' },
  { id: 'v_win', word: 'win', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'i', 'n'], meaningVi: 'chiến thắng', emoji: '🏆', sampleSentence: 'Play fair and win stars.', sampleSentenceVi: 'Chơi giỏi và giành nhiều sao.' },
  { id: 'v_wind', word: 'wind', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'i', 'n', 'd'], meaningVi: 'ngọn gió mát', emoji: '🍃', sampleSentence: 'Gentle wind blows leaves.', sampleSentenceVi: 'Làn gió nhẹ thổi lá lay bay.' },
  { id: 'v_web', word: 'web', phonemeId: 'w', group: 5, stage: 3, phonemes: ['w', 'e', 'b'], meaningVi: 'mạng nhện giăng', emoji: '🕸️', sampleSentence: 'A spider spins a silk web.', sampleSentenceVi: 'Chú nhện giăng tơ tròn xoe.' },

  // /ng/
  { id: 'v_ring', word: 'ring', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['r', 'i', 'ng'], meaningVi: 'chiếc nhẫn vàng / chuông reo', emoji: '💍', sampleSentence: 'A shiny gold ring.', sampleSentenceVi: 'Chiếc nhẫn vàng xinh xắn.' },
  { id: 'v_sing', word: 'sing', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['s', 'i', 'ng'], meaningVi: 'hát vang', emoji: '🎤', sampleSentence: 'Sing a joyful melody.', sampleSentenceVi: 'Hát vang giai điệu vui tươi.' },
  { id: 'v_king', word: 'king', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['k', 'i', 'ng'], meaningVi: 'vị vua anh minh', emoji: '👑', sampleSentence: 'The king wears a crown.', sampleSentenceVi: 'Vị vua đội vương miện vàng.' },
  { id: 'v_wing', word: 'wing', phonemeId: 'ng', group: 5, stage: 3, phonemes: ['w', 'i', 'ng'], meaningVi: 'đôi cánh chim', emoji: '🪽', sampleSentence: 'Birds flutter their wings.', sampleSentenceVi: 'Đôi cánh chim bay liệng.' },

  // /v/
  { id: 'v_van', word: 'van', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'a', 'n'], meaningVi: 'xe tải nhỏ', emoji: '🚐', sampleSentence: 'Drive the red camping van.', sampleSentenceVi: 'Lái chiếc xe van đi dã ngoại.' },
  { id: 'v_vet', word: 'vet', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'e', 't'], meaningVi: 'bác sĩ thú y', emoji: '🩺', sampleSentence: 'The vet cares for kittens.', sampleSentenceVi: 'Bác sĩ chăm sóc cho mèo con.' },
  { id: 'v_vest', word: 'vest', phonemeId: 'v', group: 5, stage: 3, phonemes: ['v', 'e', 's', 't'], meaningVi: 'áo gi-lê xinh', emoji: '🦺', sampleSentence: 'Put on a bright vest.', sampleSentenceVi: 'Mặc chiếc áo gi-lê xinh xắn.' },

  // /oo_short/
  { id: 'v_book', word: 'book', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['b', 'oo', 'k'], meaningVi: 'cuốn sách tranh', emoji: '📖', sampleSentence: 'Read an Ehon picture book.', sampleSentenceVi: 'Đọc cuốn sách tranh Ehon tuyệt đẹp.' },
  { id: 'v_cook', word: 'cook', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['c', 'oo', 'k'], meaningVi: 'nấu món ngon', emoji: '🧑‍🍳', sampleSentence: 'Cook a tasty vegetable soup.', sampleSentenceVi: 'Nấu món súp rau củ ngon.' },
  { id: 'v_look', word: 'look', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['l', 'oo', 'k'], meaningVi: 'nhìn ngắm', emoji: '👀', sampleSentence: 'Look at the rainbow sky.', sampleSentenceVi: 'Ngắm nhìn cầu vồng rực rỡ.' },
  { id: 'v_foot', word: 'foot', phonemeId: 'oo_short', group: 5, stage: 3, phonemes: ['f', 'oo', 't'], meaningVi: 'bàn chân', emoji: '🦶', sampleSentence: 'Hop on one foot.', sampleSentenceVi: 'Nhảy lò cò một chân.' },

  // /oo_long/
  { id: 'v_moon', word: 'moon', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['m', 'oo', 'n'], meaningVi: 'mặt trăng rằm', emoji: '🌕', sampleSentence: 'The bright moon glows at night.', sampleSentenceVi: 'Vầng trăng tròn sáng lung linh.' },
  { id: 'v_spoon', word: 'spoon', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['s', 'p', 'oo', 'n'], meaningVi: 'chiếc thìa con', emoji: '🥄', sampleSentence: 'Eat cereal with a silver spoon.', sampleSentenceVi: 'Dùng thìa con ăn ngũ cốc.' },
  { id: 'v_room', word: 'room', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['r', 'oo', 'm'], meaningVi: 'căn phòng ấm', emoji: '🚪', sampleSentence: 'Clean up your playroom.', sampleSentenceVi: 'Dọn dẹp căn phòng đồ chơi.' },
  { id: 'v_pool', word: 'pool', phonemeId: 'oo_long', group: 5, stage: 3, phonemes: ['p', 'oo', 'l'], meaningVi: 'hồ bơi xanh mát', emoji: '🏊', sampleSentence: 'Swim in the cool pool.', sampleSentenceVi: 'Bơi trong làn nước hồ mát rượi.' },

  // ================= GROUP 6: y, x, ch, sh, th_unvoiced, th_voiced (STAGE 3 & 4: 5-8 Tuổi) =================
  // /y/
  { id: 'v_yak', word: 'yak', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'a', 'k'], meaningVi: 'bò Tây Tạng lông dài', emoji: '🦬', sampleSentence: 'A furry yak on the mountain.', sampleSentenceVi: 'Chú bò lông dài trên đỉnh núi.' },
  { id: 'v_yes', word: 'yes', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'e', 's'], meaningVi: 'vâng ạ / đồng ý', emoji: '👍', sampleSentence: 'Say yes with a smile.', sampleSentenceVi: 'Mỉm cười dạ vâng ngoan ngoãn.' },
  { id: 'v_yell', word: 'yell', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'e', 'l'], meaningVi: 'reo hò vui mừng', emoji: '🗣️', sampleSentence: 'Cheer and yell hooray!', sampleSentenceVi: 'Reo vang hoan hô chiến thắng!' },
  { id: 'v_yam', word: 'yam', phonemeId: 'y', group: 6, stage: 3, phonemes: ['y', 'a', 'm'], meaningVi: 'củ khoai ngọt', emoji: '🍠', sampleSentence: 'Roasted sweet yam.', sampleSentenceVi: 'Củ khoai nướng thơm bùi.' },

  // /x/
  { id: 'v_box_x', word: 'box', phonemeId: 'x', group: 6, stage: 3, phonemes: ['b', 'o', 'x'], meaningVi: 'chiếc hộp', emoji: '📦', sampleSentence: 'Open the treasure box.', sampleSentenceVi: 'Mở chiếc hộp báu vật.' },
  { id: 'v_fix', word: 'fix', phonemeId: 'x', group: 6, stage: 3, phonemes: ['f', 'i', 'x'], meaningVi: 'sửa chữa', emoji: '🔧', sampleSentence: 'Fix the broken toy.', sampleSentenceVi: 'Sửa lại món đồ chơi con.' },
  { id: 'v_mix', word: 'mix', phonemeId: 'x', group: 6, stage: 3, phonemes: ['m', 'i', 'x'], meaningVi: 'pha trộn màu', emoji: '🥣', sampleSentence: 'Mix paint colors together.', sampleSentenceVi: 'Pha trộn các sắc màu kỳ diệu.' },

  // /ch/
  { id: 'v_chin', word: 'chin', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'i', 'n'], meaningVi: 'chiếc cằm nhỏ', emoji: '😊', sampleSentence: 'Touch your smiling chin.', sampleSentenceVi: 'Chạm tay vào chiếc cằm xinh.' },
  { id: 'v_chop', word: 'chop', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'o', 'p'], meaningVi: 'chặt thái rau', emoji: '🔪', sampleSentence: 'Chop carrots for dinner.', sampleSentenceVi: 'Thái củ cà rốt giòn ngọt.' },
  { id: 'v_chat', word: 'chat', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'a', 't'], meaningVi: 'trò chuyện vui', emoji: '💬', sampleSentence: 'Chat happily with Leo.', sampleSentenceVi: 'Trò chuyện vui cùng bạn Leo.' },
  { id: 'v_chest', word: 'chest', phonemeId: 'ch', group: 6, stage: 4, phonemes: ['ch', 'e', 's', 't'], meaningVi: 'rương kho báu', emoji: '🪙', sampleSentence: 'Gold in the ancient chest.', sampleSentenceVi: 'Rương kho báu chứa đồng tiền vàng.' },

  // /sh/
  { id: 'v_ship', word: 'ship', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'i', 'p'], meaningVi: 'con tàu lớn', emoji: '🚢', sampleSentence: 'A grand ship sails the ocean.', sampleSentenceVi: 'Con tàu lớn rẽ sóng đại dương.' },
  { id: 'v_shop', word: 'shop', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'o', 'p'], meaningVi: 'cửa tiệm bánh', emoji: '🏪', sampleSentence: 'Visit the bread shop.', sampleSentenceVi: 'Ghé thăm cửa tiệm bánh mì thơm.' },
  { id: 'v_shed', word: 'shed', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'e', 'd'], meaningVi: 'nhà kho nhỏ', emoji: '🏚️', sampleSentence: 'Garden tools in the shed.', sampleSentenceVi: 'Dụng cụ làm vườn xếp trong kho.' },
  { id: 'v_shell', word: 'shell', phonemeId: 'sh', group: 6, stage: 4, phonemes: ['sh', 'e', 'l'], meaningVi: 'vỏ ốc biển', emoji: '🐚', sampleSentence: 'Find a smooth shell on the sand.', sampleSentenceVi: 'Nhặt vỏ ốc óng ánh bên bờ cát.' },

  // /th_unvoiced/
  { id: 'v_thin', word: 'thin', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'i', 'n'], meaningVi: 'mảnh mai', emoji: '📏', sampleSentence: 'A thin clean line.', sampleSentenceVi: 'Một nét vẽ thanh mảnh.' },
  { id: 'v_thorn', word: 'thorn', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'or', 'n'], meaningVi: 'chiếc gai hoa hồng', emoji: '🌹', sampleSentence: 'A rose has prickly thorns.', sampleSentenceVi: 'Cành hồng có những chiếc gai con.' },
  { id: 'v_thumb', word: 'thumb', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['th', 'u', 'm'], meaningVi: 'ngón tay cái', emoji: '👍', sampleSentence: 'Thumbs up for good effort!', sampleSentenceVi: 'Giơ ngón cái khen bé tuyệt vời!' },
  { id: 'v_moth', word: 'moth', phonemeId: 'th_unvoiced', group: 6, stage: 4, phonemes: ['m', 'o', 'th'], meaningVi: 'chú bướm đêm', emoji: '🦋', sampleSentence: 'A soft moth flies by the light.', sampleSentenceVi: 'Chú bướm đêm bay lượn bên ánh đèn.' },

  // /th_voiced/
  { id: 'v_this', word: 'this', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'i', 's'], meaningVi: 'cái này', emoji: '👇', sampleSentence: 'This is my favorite book.', sampleSentenceVi: 'Đây là cuốn sách bé thích nhất.' },
  { id: 'v_that', word: 'that', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'a', 't'], meaningVi: 'cái kia', emoji: '👉', sampleSentence: 'Look at that soaring eagle.', sampleSentenceVi: 'Nhìn chú đại bàng đang bay kìa.' },
  { id: 'v_then', word: 'then', phonemeId: 'th_voiced', group: 6, stage: 4, phonemes: ['th', 'e', 'n'], meaningVi: 'sau đó', emoji: '⏳', sampleSentence: 'Eat breakfast and then we play.', sampleSentenceVi: 'Ăn sáng xong rồi mình cùng chơi.' },

  // ================= GROUP 7: qu, ou, oi, ue, er, ar (STAGE 4: 6-8 Tuổi Tiểu Học) =================
  // /qu/
  { id: 'v_queen', word: 'queen', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'ee', 'n'], meaningVi: 'nữ hoàng xinh đẹp', emoji: '👸', sampleSentence: 'The kind queen loves books.', sampleSentenceVi: 'Nữ hoàng nhân từ thích đọc sách.' },
  { id: 'v_quick', word: 'quick', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'i', 'c', 'k'], meaningVi: 'nhanh nhẹn', emoji: '⚡', sampleSentence: 'Be quick like lightning.', sampleSentenceVi: 'Nhanh nhẹn như tia chớp.' },
  { id: 'v_quilt', word: 'quilt', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'i', 'l', 't'], meaningVi: 'chiếc chăn ghép vải', emoji: '🛏️', sampleSentence: 'A cozy patchwork quilt.', sampleSentenceVi: 'Chiếc chăn ghép vải ấm cúng.' },
  { id: 'v_quack', word: 'quack', phonemeId: 'qu', group: 7, stage: 4, phonemes: ['qu', 'a', 'c', 'k'], meaningVi: 'tiếng vịt kêu cạp cạp', emoji: '🦆', sampleSentence: 'Ducks quack by the pond.', sampleSentenceVi: 'Đàn vịt kêu cạp cạp bên bờ ao.' },

  // /ou/
  { id: 'v_out', word: 'out', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['ou', 't'], meaningVi: 'ra ngoài', emoji: '🚪', sampleSentence: 'Go out and explore nature.', sampleSentenceVi: 'Ra ngoài thám hiểm thiên nhiên.' },
  { id: 'v_cloud', word: 'cloud', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['c', 'l', 'ou', 'd'], meaningVi: 'đám mây bồng bềnh', emoji: '☁️', sampleSentence: 'Fluffy white clouds float.', sampleSentenceVi: 'Những đám mây trắng bồng bềnh trôi.' },
  { id: 'v_loud', word: 'loud', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['l', 'ou', 'd'], meaningVi: 'âm thanh vang dội', emoji: '📢', sampleSentence: 'A loud cheerful cheer.', sampleSentenceVi: 'Tiếng reo hò vang rộn ràng.' },
  { id: 'v_shout', word: 'shout', phonemeId: 'ou', group: 7, stage: 4, phonemes: ['sh', 'ou', 't'], meaningVi: 'hét vang vui vẻ', emoji: '🗣️', sampleSentence: 'Shout hooray together!', sampleSentenceVi: 'Cùng hét to hoan hô vui vẻ!' },

  // /oi/
  { id: 'v_coin', word: 'coin', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['c', 'oi', 'n'], meaningVi: 'đồng xu vàng', emoji: '🪙', sampleSentence: 'A shiny gold coin in hand.', sampleSentenceVi: 'Đồng xu vàng lấp lánh trên tay.' },
  { id: 'v_soil', word: 'soil', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['s', 'oi', 'l'], meaningVi: 'đất mùn màu mỡ', emoji: '🪴', sampleSentence: 'Plants grow in rich soil.', sampleSentenceVi: 'Cây cối lớn lên từ đất lành.' },
  { id: 'v_oil', word: 'oil', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['oi', 'l'], meaningVi: 'dầu ô liu', emoji: '🫒', sampleSentence: 'A drop of golden olive oil.', sampleSentenceVi: 'Giọt dầu ô liu vàng óng.' },
  { id: 'v_boil', word: 'boil', phonemeId: 'oi', group: 7, stage: 4, phonemes: ['b', 'oi', 'l'], meaningVi: 'nước sôi sùng sục', emoji: '♨️', sampleSentence: 'Boil water for warm soup.', sampleSentenceVi: 'Đun nước sôi nấu món súp ngon.' },

  // /ue/
  { id: 'v_blue', word: 'blue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['b', 'l', 'ue'], meaningVi: 'màu xanh da trời', emoji: '💙', sampleSentence: 'The blue sky is calm.', sampleSentenceVi: 'Bầu trời xanh trong êm ả.' },
  { id: 'v_clue', word: 'clue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['c', 'l', 'ue'], meaningVi: 'manh mối bí mật', emoji: '🔍', sampleSentence: 'Find the secret clue.', sampleSentenceVi: 'Tìm manh mối thám hiểm bí ẩn.' },
  { id: 'v_glue', word: 'glue', phonemeId: 'ue', group: 7, stage: 4, phonemes: ['g', 'l', 'ue'], meaningVi: 'keo dán giấy Ehon', emoji: '🧴', sampleSentence: 'Stick paper shapes with glue.', sampleSentenceVi: 'Dán hình cắt vào trang tranh Ehon.' },

  // /er/
  { id: 'v_sister', word: 'sister', phonemeId: 'er', group: 7, stage: 4, phonemes: ['s', 'i', 's', 't', 'er'], meaningVi: 'chị gái yêu quý', emoji: '👧', sampleSentence: 'My elder sister helps me.', sampleSentenceVi: 'Chị gái giúp bé học bài.' },
  { id: 'v_winter', word: 'winter', phonemeId: 'er', group: 7, stage: 4, phonemes: ['w', 'i', 'n', 't', 'er'], meaningVi: 'mùa đông có tuyết', emoji: '❄️', sampleSentence: 'Winter brings white snow.', sampleSentenceVi: 'Mùa đông mang tuyết trắng rơi.' },
  { id: 'v_letter', word: 'letter', phonemeId: 'er', group: 7, stage: 4, phonemes: ['l', 'e', 't', 'er'], meaningVi: 'lá thư tay / chữ cái', emoji: '✉️', sampleSentence: 'Send a loving letter.', sampleSentenceVi: 'Gửi lá thư tay chan chứa yêu thương.' },
  { id: 'v_water', word: 'water', phonemeId: 'er', group: 7, stage: 4, phonemes: ['w', 'a', 't', 'er'], meaningVi: 'nước ngọt lành', emoji: '💧', sampleSentence: 'Drink clean fresh water.', sampleSentenceVi: 'Uống ly nước mát trong lành.' },

  // /ar/
  { id: 'v_star', word: 'star', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['s', 't', 'ar'], meaningVi: 'ngôi sao sáng', emoji: '⭐', sampleSentence: 'A twinkling golden star.', sampleSentenceVi: 'Ngôi sao vàng lấp lánh trên cao.' },
  { id: 'v_car', word: 'car', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['c', 'ar'], meaningVi: 'chiếc xe hơi', emoji: '🚗', sampleSentence: 'Drive the red family car.', sampleSentenceVi: 'Chiếc xe hơi bon bon trên đường.' },
  { id: 'v_park', word: 'park', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['p', 'ar', 'k'], meaningVi: 'công viên xanh', emoji: '🏞️', sampleSentence: 'Play on swings in the park.', sampleSentenceVi: 'Chơi xích đu trong công viên rợp bóng.' },
  { id: 'v_farm', word: 'farm', phonemeId: 'ar', group: 7, stage: 4, phonemes: ['f', 'ar', 'm'], meaningVi: 'nông trại bình yên', emoji: '🚜', sampleSentence: 'Animals live on the sunny farm.', sampleSentenceVi: 'Đàn thú đáng yêu trong nông trại nắng ấm.' },
];

/**
 * Helper to get all vocabulary words belonging to a specific phoneme
 */
export const getVocabularyByPhoneme = (phonemeId: string): VocabularyItem[] => {
  return PHONICS_VOCABULARY.filter(item => item.phonemeId === phonemeId);
};

/**
 * Helper to get all vocabulary words belonging to a specific island group (1 to 7)
 */
export const getVocabularyByGroup = (groupNumber: number): VocabularyItem[] => {
  return PHONICS_VOCABULARY.filter(item => item.group === groupNumber);
};

/**
 * Helper to get vocabulary words by stage
 */
export const getVocabularyByStage = (stage: 1 | 2 | 3 | 4): VocabularyItem[] => {
  return PHONICS_VOCABULARY.filter(item => item.stage === stage);
};
