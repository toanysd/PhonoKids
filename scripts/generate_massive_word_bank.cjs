// Master Script to generate 1,000+ Phonics Sound Bank items across all 42 phonemes
const fs = require('fs');
const path = require('path');

// 1. Read existing visuals map
const visualContent = fs.readFileSync(path.join(__dirname, '../src/data/wordVisuals.ts'), 'utf8');
const existingVisuals = {};
const visualRegex = /"([a-zA-Z0-9_\-]+)":\s*\{\s*"url":\s*"([^"]+)",\s*"type":\s*"([^"]+)",\s*"alt":\s*"([^"]+)"\s*\}/g;
let vm;
while ((vm = visualRegex.exec(visualContent)) !== null) {
  existingVisuals[vm[1].toLowerCase()] = {
    url: vm[2],
    type: vm[3],
    alt: vm[4]
  };
}

// 2. Read existing 420 vocabulary items
const { VOCABULARY } = require('./data_vocabulary.cjs');
console.log(`Loaded ${VOCABULARY.length} primary vocabulary words from data_vocabulary.cjs`);

// Helper to determine theme for primary vocabulary
function categorizeTheme(word, meaningVi) {
  const m = (meaningVi || '').toLowerCase();
  const animalKeywords = ['mèo', 'chó', 'kiến', 'cún', 'hổ', 'côn trùng', 'hải cẩu', 'heo', 'bọ', 'thú cưng', 'vịt', 'sư tử', 'ong', 'gấu', 'thỏ', 'ngựa', 'chim', 'cá', 'dê', 'chuột', 'rùa', 'cáo', 'khỉ', 'hươu', 'sóc', 'rắn', 'ốc sên', 'nai', 'ếch', 'voi', 'lừa', 'cừu', 'bò', 'tôm', 'quạ', 'công', 'thiên nga', 'cú'];
  const natureKeywords = ['mặt trời', 'nắng', 'sao', 'mưa', 'gió', 'mây', 'cát', 'biển', 'ao', 'nước', 'đồi', 'núi', 'đá', 'cây', 'lá', 'hoa', 'sông', 'rừng', 'tro', 'tuyết', 'mầm', 'bầu trời', 'đất', 'băng', 'suối', 'thung lũng', 'bãi biển', 'rêu', 'rễ', 'cánh đồng'];
  const foodObjectKeywords = ['ghế', 'thảm', 'số', 'tất', 'táo', 'rìu', 'vòi', 'hộp', 'quay', 'bồn', 'thẻ', 'lều', 'đồ chơi', 'mực', 'nhà băng', 'thước', 'chảo', 'ghim', 'nồi', 'bút', 'lưới', 'hạt', 'chuông', 'nón', 'bát', 'ly', 'trống', 'bánh', 'cốc', 'sách', 'thuyền', 'xe', 'áo', 'quần', 'mứt', 'đèn', 'cửa', 'thìa', 'đĩa', 'trứng', 'sữa', 'cam', 'tiền', 'đồng xu', 'bàn', 'vòng', 'dây', 'nơ', 'bình', 'đồng hồ', 'mũ', 'giày', 'tạp dề'];

  for (const k of animalKeywords) {
    if (m.includes(k)) return 'animals';
  }
  for (const k of natureKeywords) {
    if (m.includes(k)) return 'nature';
  }
  for (const k of foodObjectKeywords) {
    if (m.includes(k)) return 'objects_food';
  }
  return 'actions';
}

// Visual catalog fallback database for newly added words
const CURATED_NEW_VISUALS = {
  // Animals
  'snake': { url: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú rắn lục hiền lành cuộn tròn trên cành lá' },
  'snail': { url: 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú ốc sên nhỏ bé bò thong thả trên chiếc lá' },
  'spider': { url: 'https://images.unsplash.com/photo-1577975882846-431adc8c2009?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú nhện giăng mạng tơ tròn lóng lánh sương mai' },
  'swan': { url: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Thiên nga trắng muốt bơi nhẹ nhàng trên mặt nước biếc' },
  'sloth': { url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú lười dễ thương đu mình trên cành cây rừng' },
  'alligator': { url: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú cá sấu nằm phơi nắng trên bờ suối' },
  'alpaca': { url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú alpaca lông trắng mềm mại mỉm cười' },
  'ape': { url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú vượn thông minh leo trèo giữa rừng' },
  'turtle': { url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú rùa biển bơi thảnh thơi giữa rạn san hô' },
  'turkey': { url: 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú gà tây xòe đuôi dạo chơi quanh nông trại' },
  'toucan': { url: 'https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim toucan rực rỡ đậu trên nhánh cây' },
  'toad': { url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú cóc hoa ngồi bên tảng đá rêu xanh' },
  'iguana': { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Kỳ nhông xanh sưởi ấm dưới ánh nắng mặt trời' },
  'ibis': { url: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim quắm sải cánh bay qua đầm nước' },
  'inchworm': { url: 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú sâu đo nhỏ bé xanh mướt bò trên cành non' },
  'panda': { url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Gấu trúc tròn xoe ôm nhành tre xanh' },
  'parrot': { url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Vẹt sặc sỡ vỗ cánh cất tiếng líu lo' },
  'penguin': { url: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Gia đình chim cánh cụt lạch bạch bước trên băng' },
  'pony': { url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú ngựa con đáng yêu gặm cỏ trên đồng' },
  'newt': { url: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú sa giông nhỏ ẩn mình bên dòng suối trong' },
  'nightingale': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim sơn ca đậu cành cất tiếng hót say sưa' },
  'narwhal': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Kỳ lân biển bơi lượn dưới làn nước bắc cực' },
  'koala': { url: 'https://images.unsplash.com/photo-1526970371639-bf02e6263d97?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú koala ôm chặt thân cây bạch đàn ngủ say' },
  'kangaroo': { url: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú chuột túi kangaroo nhảy từng bước thoăn thoắt' },
  'camel': { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú lạc đà thong dong bước qua đồi cát vàng' },
  'crow': { url: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú quạ đen thông minh đậu trên cành thông' },
  'kingfisher': { url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim bói cá rực rỡ dõi mắt nhìn đàn cá bơi' },
  'eagle': { url: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Đại bàng dũng mãnh sải cánh trên nền trời cao' },
  'hamster': { url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chuột hamster má phúng phính ăn hạt hướng dương' },
  'hippo': { url: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú hà mã ngâm mình trong dòng nước mát' },
  'hedgehog': { url: 'https://images.unsplash.com/photo-1505672678857-9293d8919bf5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú nhím nhỏ xíu cuộn tròn đáng yêu' },
  'hare': { url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Thỏ rừng nhanh nhẹn lắng nghe trên đồng cỏ' },
  'hawk': { url: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim ưng bay lượn trên rặng núi hùng vĩ' },
  'robin': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim cổ đỏ líu lo bên cành cây tuyết trắng' },
  'raccoon': { url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú gấu mèo nghịch ngợm rửa đồ ăn bên suối' },
  'rhino': { url: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Tê giác hiền hòa thong thả gặm cỏ non' },
  'rooster': { url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú gà trống oai vệ cất tiếng gáy đón bình minh' },
  'mole': { url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú chuột chũi nhỏ nhô đầu khỏi mô đất' },
  'moose': { url: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Nai sừng tấm sừng sững bên hồ rừng thông' },
  'moth': { url: 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú bướm đêm với đôi cánh hoa văn bí ẩn' },
  'deer': { url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú hươu sao mắt tròn xoe ngơ ngác giữa rừng' },
  'dolphin': { url: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú cá heo nhảy múa vui tươi trên mặt sóng biếc' },
  'dove': { url: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Bồ câu trắng ngậm cành ô liu hòa bình' },
  'donkey': { url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú lừa con hiền lành chở giỏ hoa dại' },
  'gorilla': { url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Khỉ đột to lớn hiền hòa chăm sóc gia đình' },
  'goldfish': { url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Cá vàng đuôi xòe bơi lượn trong làn nước trong' },
  'gazelle': { url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Linh dương bước nhảy thanh thoát trên thảo nguyên' },
  'otter': { url: 'https://images.unsplash.com/photo-1551085254-e96b210df58a?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Rái cá tinh nghịch nổi lưng trên mặt nước' },
  'ostrich': { url: 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Đà điểu sải đôi chân dài chạy nhanh như gió' },
  'octopus': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Bạch tuộc tám xúc tu bơi uốn lượn dưới đáy đại dương' },
  'orca': { url: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Cá voi sát thủ rẽ sóng giữa biển khơi' },
  'lamb': { url: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú cừu non lông trắng muốt nhảy tung tăng' },
  'leopard': { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Báo hoa mai nhanh nhẹn nằm trên cành cây cao' },
  'lizard': { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú thằn lằn nhỏ sưởi nắng trên tảng đá ấm' },
  'llama': { url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Lạc đà không bướu llama ngước nhìn đồi núi xanh' },
  'ladybug': { url: 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Bọ rùa chấm bi đỏ thắm đậu trên cánh hoa cúc' },
  'lobster': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Tôm hùm đỏ với đôi càng to khỏe dưới biển' },
  'fawn': { url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Hươu con bé bỏng nép mình bên mẹ hiền' },
  'flamingo': { url: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Hồng hạc lông hồng đứng một chân thanh thoát bên hồ' },
  'ferret': { url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chồn sương lanh lợi chui qua đường hầm đồ chơi' },
  'beaver': { url: 'https://images.unsplash.com/photo-1551085254-e96b210df58a?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Hải ly chăm chỉ xây đập nước bằng cành cây' },
  'beetle': { url: 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Bọ cánh cứng óng ánh như ngọc bích' },
  'badger': { url: 'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Lửng mật sọc đen trắng dạo bước quanh bìa rừng' },
  'quail': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim cút nhỏ xinh kiếm hạt trên thảm cỏ' },
  'quokka': { url: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Quokka nụ cười hạnh phúc nhất thế giới' },
  'jaguar': { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Báo đốm dũng mãnh dạo bước trong rừng già' },
  'jellyfish': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Sứa biển phát sáng lung linh như chiếc dù pha lê' },
  'jay': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim giẻ cùi lông xanh biếc hót líu lo' },
  'jackal': { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chó rừng chó rừng lanh lợi trên trảng cỏ' },
  'foal': { url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Ngựa con bé bỏng phi những bước chân đầu tiên' },
  'boar': { url: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Heo rừng kiếm hạt sồi thơm dưới gốc cây' },
  'magpie': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim ác là lông biếc sà xuống nhặt hạt mầm' },
  'firefly': { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Đom đóm thắp đèn sáng lấp lánh trong đêm hè' },
  'eel': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Lươn biển luồn lách qua các hốc đá' },
  'cheetah': { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Báo săn cheetah chạy nhanh tựa cơn gió' },
  'stork': { url: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim cò trắng xây tổ ấm áp trên ngọn cây cao' },
  'tortoise': { url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Cụ rùa cạn thong thả gặm từng ngọn cỏ tươi' },
  'wolf': { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Sói xám ngước nhìn vầng trăng sáng trên đỉnh đồi' },
  'whale': { url: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Cá voi khổng lồ phun cột nước trắng xóa giữa biển' },
  'walrus': { url: 'https://images.unsplash.com/photo-1551085254-e96b210df58a?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Hải mã với cặp ngà dài nằm nghỉ trên tảng băng' },
  'woodpecker': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim gõ kiến cần mẫn gõ cốc cốc vào thân cây' },
  'worm': { url: 'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chú giun đất nhỏ bé làm đất tơi xốp cho khu vườn' },
  'viper': { url: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Rắn lục trườn êm ái trên thảm lá rừng' },
  'vulture': { url: 'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Kền kền sải cánh lượn vòng trên nền trời cao vút' },
  'vole': { url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chuột đồng gặm nhấm những hạt lúa vàng' },
  'baboon': { url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Khỉ đầu chó dạo bước cùng bầy đàn' },
  'yak': { url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Bò Tây Tạng lông dài vững chãi giữa núi tuyết' },
  'lynx': { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Mèo rừng linh miêu với đôi tai chỏm lông tinh ranh' },
  'chimpanzee': { url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Tinh tinh thông minh nở nụ cười tinh nghịch' },
  'chick': { url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Gà con lông vàng ươm tròn xoe như cục bông' },
  'finch': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim sẻ sẻ chuyền cành ca hát rộn rã' },
  'shark': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Cá mập uy nghi lướt êm trong lòng đại dương xanh' },
  'shrimp': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Tôm con búng nhảy trong vũng nước trong vắt' },
  'panther': { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Báo đen bóng bẩy bước đi nhẹ nhàng không tiếng động' },
  'bluebird': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim xanh hạnh phúc đậu trên nhành đào nở hoa' },
  'starfish': { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Sao biển sắc cam rực rỡ nằm trên bãi cát' },
  'cardinal': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Chim hồng tước đỏ thắm nổi bật trên nền tuyết trắng' },
  'lark': { url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80', type: 'photo', alt: 'Sơn ca bay vút lên bầu trời cao cất tiếng hót mừng' }
};

// Generate comprehensive items
const MASTER_WORD_BANK = [];
const seenWords = new Set();

// 1. First add all 420 primary words from VOCABULARY
VOCABULARY.forEach((v, idx) => {
  const wordKey = v.word.toLowerCase();
  const theme = categorizeTheme(v.word, v.meaningVi);
  const visual = existingVisuals[wordKey] || CURATED_NEW_VISUALS[wordKey] || {
    url: '/assets/ehon/archipelago.jpg',
    type: 'ehon',
    alt: `Tranh minh họa từ ${v.word}`
  };

  MASTER_WORD_BANK.push({
    id: `wb_${v.phonemeId}_${wordKey}_${idx}`,
    word: v.word,
    phonemeId: v.phonemeId,
    group: v.group,
    stage: v.stage,
    phonemes: v.phonemes,
    theme: theme,
    meaningVi: v.meaningVi,
    emoji: v.emoji,
    sampleSentence: v.sampleSentence,
    sampleSentenceVi: v.sampleSentenceVi,
    visual: visual
  });
  seenWords.add(`${v.phonemeId}_${wordKey}`);
});

console.log(`Added ${MASTER_WORD_BANK.length} primary words.`);

// 2. Map phoneme to group & stage
const PHONEME_META = {
  // G1
  's': { group: 1, stage: 1 },
  'a': { group: 1, stage: 1 },
  't': { group: 1, stage: 1 },
  'i': { group: 1, stage: 1 },
  'p': { group: 1, stage: 1 },
  'n': { group: 1, stage: 1 },
  // G2
  'c_k': { group: 2, stage: 2 },
  'e': { group: 2, stage: 2 },
  'h': { group: 2, stage: 2 },
  'r': { group: 2, stage: 2 },
  'm': { group: 2, stage: 2 },
  'd': { group: 2, stage: 2 },
  // G3
  'g': { group: 3, stage: 2 },
  'o': { group: 3, stage: 2 },
  'u': { group: 3, stage: 2 },
  'l': { group: 3, stage: 2 },
  'f': { group: 3, stage: 2 },
  'b': { group: 3, stage: 2 },
  // G4
  'ai': { group: 4, stage: 3 },
  'j': { group: 4, stage: 3 },
  'oa': { group: 4, stage: 3 },
  'ie': { group: 4, stage: 3 },
  'ee': { group: 4, stage: 3 },
  'or': { group: 4, stage: 3 },
  // G5
  'z': { group: 5, stage: 3 },
  'w': { group: 5, stage: 3 },
  'ng': { group: 5, stage: 3 },
  'v': { group: 5, stage: 3 },
  'oo_short': { group: 5, stage: 3 },
  'oo_long': { group: 5, stage: 3 },
  // G6
  'y': { group: 6, stage: 4 },
  'x': { group: 6, stage: 4 },
  'ch': { group: 6, stage: 4 },
  'sh': { group: 6, stage: 4 },
  'th_unvoiced': { group: 6, stage: 4 },
  'th_voiced': { group: 6, stage: 4 },
  // G7
  'qu': { group: 7, stage: 4 },
  'ou': { group: 7, stage: 4 },
  'oi': { group: 7, stage: 4 },
  'ue': { group: 7, stage: 4 },
  'er': { group: 7, stage: 4 },
  'ar': { group: 7, stage: 4 }
};

// 3. Complete list of all phonemes with dozens of rich words per phoneme
const PHONEME_EXPANSION = {
  // G1 additions
  's': [
    { word: 'snake', theme: 'animals', phonemes: ['s', 'n', 'a_e', 'k'], meaningVi: 'chú rắn lục hiền lành', emoji: '🐍', sentence: 'The green snake sleeps in the sun.', sentenceVi: 'Chú rắn lục ngủ dưới ánh nắng ấm.' },
    { word: 'snail', theme: 'animals', phonemes: ['s', 'n', 'ai', 'l'], meaningVi: 'chú ốc sên chậm rãi', emoji: '🐌', sentence: 'The little snail crawls on a leaf.', sentenceVi: 'Chú ốc sên nhỏ bò trên chiếc lá.' },
    { word: 'spider', theme: 'animals', phonemes: ['s', 'p', 'i', 'd', 'er'], meaningVi: 'chú nhện giăng tơ', emoji: '🕷️', sentence: 'The spider weaves a silver web.', sentenceVi: 'Chú nhện dệt mạng tơ lóng lánh.' },
    { word: 'swan', theme: 'animals', phonemes: ['s', 'w', 'a', 'n'], meaningVi: 'thiên nga trắng muốt', emoji: '🦢', sentence: 'A white swan glides on the lake.', sentenceVi: 'Thiên nga trắng lướt trên mặt hồ.' },
    { word: 'sloth', theme: 'animals', phonemes: ['s', 'l', 'o', 'th'], meaningVi: 'chú lười leo cây', emoji: '🦥', sentence: 'The sloth smiles in the tall tree.', sentenceVi: 'Chú lười mỉm cười trên cành cây cao.' },
    { word: 'star', theme: 'nature', phonemes: ['s', 't', 'ar'], meaningVi: 'ngôi sao lấp lánh', emoji: '⭐', sentence: 'A bright star twinkles in the sky.', sentenceVi: 'Ngôi sao sáng lấp lánh trên bầu trời.' },
    { word: 'sea', theme: 'nature', phonemes: ['s', 'ea'], meaningVi: 'biển xanh bao la', emoji: '🌊', sentence: 'Blue waves lap the sunny sea.', sentenceVi: 'Sóng biếc vỗ về bãi biển đầy nắng.' },
    { word: 'sky', theme: 'nature', phonemes: ['s', 'k', 'y'], meaningVi: 'bầu trời trong xanh', emoji: '🌤️', sentence: 'Birds fly high across the blue sky.', sentenceVi: 'Đàn chim bay lượn trên bầu trời xanh.' },
    { word: 'stream', theme: 'nature', phonemes: ['s', 't', 'r', 'ea', 'm'], meaningVi: 'dòng suối trong veo', emoji: '🏞️', sentence: 'Fresh water rushes down the stream.', sentenceVi: 'Dòng nước mát lành róc rách chảy.' },
    { word: 'stone', theme: 'nature', phonemes: ['s', 't', 'o_e', 'n'], meaningVi: 'hòn đá cuội tròn', emoji: '🪨', sentence: 'A smooth gray stone by the path.', sentenceVi: 'Hòn đá cuội nhẵn bóng bên đường.' },
    { word: 'seed', theme: 'nature', phonemes: ['s', 'ee', 'd'], meaningVi: 'hạt mầm nhỏ bé', emoji: '🌱', sentence: 'Plant a tiny seed in the rich soil.', sentenceVi: 'Gieo hạt mầm bé nhỏ vào đất tốt.' },
    { word: 'snow', theme: 'nature', phonemes: ['s', 'n', 'ow'], meaningVi: 'tuyết trắng mùa đông', emoji: '❄️', sentence: 'White snow falls gently on rooftops.', sentenceVi: 'Tuyết trắng rơi êm trên mái nhà.' },
    { word: 'soup', theme: 'objects_food', phonemes: ['s', 'ou', 'p'], meaningVi: 'bát súp nóng hổi', emoji: '🍲', sentence: 'Warm pumpkin soup smells delicious.', sentenceVi: 'Bát súp bí đỏ thơm nức ngọt ngào.' },
    { word: 'spoon', theme: 'objects_food', phonemes: ['s', 'p', 'oo', 'n'], meaningVi: 'chiếc thìa con', emoji: '🥄', sentence: 'Hold the spoon to eat your meal.', sentenceVi: 'Cầm thìa con ăn bữa thật ngon.' },
    { word: 'sail', theme: 'objects_food', phonemes: ['s', 'ai', 'l'], meaningVi: 'cánh buồm trắng', emoji: '⛵', sentence: 'The boat has a big white sail.', sentenceVi: 'Chiếc thuyền có cánh buồm trắng muốt.' },
    { word: 'soap', theme: 'objects_food', phonemes: ['s', 'oa', 'p'], meaningVi: 'bánh xà phòng thơm', emoji: '🧼', sentence: 'Wash hands clean with bubbly soap.', sentenceVi: 'Rửa tay sạch bong cùng xà phòng thơm.' },
    { word: 'seesaw', theme: 'objects_food', phonemes: ['s', 'ee', 's', 'aw'], meaningVi: 'bập bênh vui nhộn', emoji: '🎪', sentence: 'Friends play up and down on the seesaw.', sentenceVi: 'Các bạn nhỏ cùng chơi bập bênh.' },
    { word: 'salad', theme: 'objects_food', phonemes: ['s', 'a', 'l', 'a', 'd'], meaningVi: 'đĩa salad rau củ', emoji: '🥗', sentence: 'Crisp green salad with sweet tomatoes.', sentenceVi: 'Đĩa salad tươi giòn với cà chua ngọt.' },
    { word: 'sing', theme: 'actions', phonemes: ['s', 'i', 'ng'], meaningVi: 'hát líu lo', emoji: '🎶', sentence: 'Children sing happy songs together.', sentenceVi: 'Các bạn nhỏ cùng hát vang khúc ca.' },
    { word: 'sleep', theme: 'actions', phonemes: ['s', 'l', 'ee', 'p'], meaningVi: 'ngủ say giấc', emoji: '💤', sentence: 'The baby sleeps soundly under a blanket.', sentenceVi: 'Bé ngủ say giấc dưới chăn ấm.' },
    { word: 'swim', theme: 'actions', phonemes: ['s', 'w', 'i', 'm'], meaningVi: 'bơi lội tung tăng', emoji: '🏊', sentence: 'Fish swim quickly in the cool pond.', sentenceVi: 'Đàn cá bơi tung tăng dưới hồ nước.' },
    { word: 'skip', theme: 'actions', phonemes: ['s', 'k', 'i', 'p'], meaningVi: 'nhảy chân sáo', emoji: '🦘', sentence: 'Skip with joy down the garden path.', sentenceVi: 'Nhảy chân sáo vui vẻ trên con đường vườn.' },
    { word: 'smile', theme: 'actions', phonemes: ['s', 'm', 'i_e', 'l'], meaningVi: 'mỉm cười rạng rỡ', emoji: '😊', sentence: 'Give everyone a warm friendly smile.', sentenceVi: 'Gửi tặng mọi người một nụ cười ấm áp.' },
    { word: 'spin', theme: 'actions', phonemes: ['s', 'p', 'i', 'n'], meaningVi: 'xoay tròn tít', emoji: '💫', sentence: 'Spin around like a merry top.', sentenceVi: 'Xoay tròn tít như chiếc con quay vui vẻ.' }
  ],
  'a': [
    { word: 'alligator', theme: 'animals', phonemes: ['a', 'l', 'i', 'g', 'a', 't', 'or'], meaningVi: 'chú cá sấu to lớn', emoji: '🐊', sentence: 'An alligator rests on the riverbank.', sentenceVi: 'Chú cá sấu nằm nghỉ bên bờ sông.' },
    { word: 'alpaca', theme: 'animals', phonemes: ['a', 'l', 'p', 'a', 'c', 'a'], meaningVi: 'lạc đà alpaca lông mịn', emoji: '🦙', sentence: 'The fluffy alpaca chews fresh grass.', sentenceVi: 'Chú alpaca lông xù gặm cỏ non.' },
    { word: 'ape', theme: 'animals', phonemes: ['a_e', 'p'], meaningVi: 'chú vượn thông minh', emoji: '🦧', sentence: 'The ape swings from branch to branch.', sentenceVi: 'Chú vượn chuyền cành thoăn thoắt.' },
    { word: 'acorn', theme: 'nature', phonemes: ['a', 'c', 'or', 'n'], meaningVi: 'hạt sồi nâu bóng', emoji: '🌰', sentence: 'A squirrel hides an acorn under leaves.', sentenceVi: 'Sóc nhỏ giấu hạt sồi dưới lớp lá.' },
    { word: 'arrow', theme: 'objects_food', phonemes: ['a', 'rr', 'ow'], meaningVi: 'mũi tên chỉ đường', emoji: '🏹', sentence: 'Follow the green arrow to the playground.', sentenceVi: 'Đi theo mũi tên xanh đến sân chơi.' },
    { word: 'anchor', theme: 'objects_food', phonemes: ['a', 'n', 'c', 'h', 'or'], meaningVi: 'chiếc mỏ neo sắt', emoji: '⚓', sentence: 'The ship drops its strong anchor.', sentenceVi: 'Con tàu thả chiếc mỏ neo vững chắc.' },
    { word: 'apron', theme: 'objects_food', phonemes: ['a', 'p', 'r', 'o', 'n'], meaningVi: 'tạp dề nấu ăn', emoji: '🧑‍🍳', sentence: 'Wear a bright apron while baking.', sentenceVi: 'Đeo chiếc tạp dề rực rỡ khi làm bánh.' },
    { word: 'amber', theme: 'nature', phonemes: ['a', 'm', 'b', 'er'], meaningVi: 'hổ phách vàng óng', emoji: '🔶', sentence: 'A drop of golden amber shines.', sentenceVi: 'Giọt hổ phách vàng óng tỏa sáng.' },
    { word: 'autumn', theme: 'nature', phonemes: ['au', 't', 'u', 'm', 'n'], meaningVi: 'mùa thu lá đỏ', emoji: '🍂', sentence: 'In autumn, golden leaves flutter down.', sentenceVi: 'Vào mùa thu, những chiếc lá vàng chao nghiêng.' },
    { word: 'applaud', theme: 'actions', phonemes: ['a', 'p', 'l', 'au', 'd'], meaningVi: 'vỗ tay khen ngợi', emoji: '👏', sentence: 'Applaud for the wonderful singer.', sentenceVi: 'Vỗ tay chúc mừng ca sĩ đáng yêu.' },
    { word: 'ask', theme: 'actions', phonemes: ['a', 's', 'k'], meaningVi: 'hỏi điều thắc mắc', emoji: '🙋‍♂️', sentence: 'Ask the teacher with a polite smile.', sentenceVi: 'Hỏi cô giáo với nụ cười lễ phép.' },
    { word: 'aim', theme: 'actions', phonemes: ['ai', 'm'], meaningVi: 'ngắm đích chuẩn', emoji: '🎯', sentence: 'Aim the soft ball into the basket.', sentenceVi: 'Ngắm quả bóng mềm ném vào rổ.' },
    { word: 'admire', theme: 'actions', phonemes: ['a', 'd', 'm', 'i_e', 'r'], meaningVi: 'chiêm ngưỡng vẻ đẹp', emoji: '🤩', sentence: 'Admire the stunning rainbow colors.', sentenceVi: 'Chiêm ngưỡng sắc màu cầu vồng lung linh.' },
    { word: 'awake', theme: 'actions', phonemes: ['a', 'w', 'a_e', 'k'], meaningVi: 'thức giấc tỉnh táo', emoji: '☀️', sentence: 'Be wide awake for morning sunshine.', sentenceVi: 'Tỉnh giấc đón ánh bình minh rạng rỡ.' }
  ],
  't': [
    { word: 'turtle', theme: 'animals', phonemes: ['t', 'ur', 't', 'l'], meaningVi: 'chú rùa mai tròn', emoji: '🐢', sentence: 'The green turtle swims in clear water.', sentenceVi: 'Chú rùa xanh bơi trong làn nước trong.' },
    { word: 'turkey', theme: 'animals', phonemes: ['t', 'ur', 'k', 'ey'], meaningVi: 'gà tây lông xòe', emoji: '🦃', sentence: 'The proud turkey struts in the farmyard.', sentenceVi: 'Chú gà tây xòe đuôi đi quanh sân nông trại.' },
    { word: 'toucan', theme: 'animals', phonemes: ['t', 'ou', 'c', 'a', 'n'], meaningVi: 'chim toucan mỏ sắc màu', emoji: '🦜', sentence: 'The toucan perches on a rainforest branch.', sentenceVi: 'Chim toucan đậu trên cành rừng nhiệt đới.' },
    { word: 'toad', theme: 'animals', phonemes: ['t', 'oa', 'd'], meaningVi: 'chú cóc hoa', emoji: '🐸', sentence: 'A bumpy toad hops across the lawn.', sentenceVi: 'Chú cóc hoa nhảy lò cò qua bãi cỏ.' },
    { word: 'tree', theme: 'nature', phonemes: ['t', 'r', 'ee'], meaningVi: 'cây xanh bóng mát', emoji: '🌳', sentence: 'The big oak tree gives cool shade.', sentenceVi: 'Cây sồi lớn cho bóng mát rượi.' },
    { word: 'trail', theme: 'nature', phonemes: ['t', 'r', 'ai', 'l'], meaningVi: 'lối mòn trong rừng', emoji: '🥾', sentence: 'Walk along the flower-lined trail.', sentenceVi: 'Dạo bước trên con đường mòn ngập hoa.' },
    { word: 'tulip', theme: 'nature', phonemes: ['t', 'u', 'l', 'i', 'p'], meaningVi: 'hoa tulip rực rỡ', emoji: '🌷', sentence: 'Red and yellow tulips bloom in spring.', sentenceVi: 'Những bông tulip đỏ vàng khoe sắc mùa xuân.' },
    { word: 'tide', theme: 'nature', phonemes: ['t', 'i_e', 'd'], meaningVi: 'thủy triều dâng', emoji: '🌊', sentence: 'The ocean tide rolls gently onto shore.', sentenceVi: 'Thủy triều dâng lăn tăn vỗ vào bờ.' },
    { word: 'twig', theme: 'nature', phonemes: ['t', 'w', 'i', 'g'], meaningVi: 'cành cây khô nhỏ', emoji: '🪵', sentence: 'A little bird carries a dry twig.', sentenceVi: 'Chú chim nhỏ ngậm nhành cành khô.' },
    { word: 'thunder', theme: 'nature', phonemes: ['th', 'u', 'n', 'd', 'er'], meaningVi: 'tiếng sấm ầm vang', emoji: '⚡', sentence: 'Rumble of thunder across the hills.', sentenceVi: 'Tiếng sấm rền vang qua những ngọn đồi.' },
    { word: 'teapot', theme: 'objects_food', phonemes: ['t', 'ea', 'p', 'o', 't'], meaningVi: 'ấm pha trà sứ', emoji: '🫖', sentence: 'Steaming tea pours from the porcelain teapot.', sentenceVi: 'Trà thơm bốc khói rót từ ấm sứ.' },
    { word: 'tower', theme: 'objects_food', phonemes: ['t', 'ow', 'er'], meaningVi: 'tòa tháp xếp gỗ', emoji: '🏰', sentence: 'Build a high wooden block tower.', sentenceVi: 'Xây một tòa tháp bằng khối gỗ thật cao.' },
    { word: 'toast', theme: 'objects_food', phonemes: ['t', 'oa', 's', 't'], meaningVi: 'bánh mì nướng giòn', emoji: '🍞', sentence: 'Crispy warm toast with golden butter.', sentenceVi: 'Bánh mì nướng giòn thơm bơ vàng.' },
    { word: 'tomato', theme: 'objects_food', phonemes: ['t', 'o', 'm', 'a', 't', 'o'], meaningVi: 'quả cà chua mọng đỏ', emoji: '🍅', sentence: 'A sweet ripe tomato from our garden.', sentenceVi: 'Quả cà chua chín mọng ngọt từ vườn nhà.' },
    { word: 'talk', theme: 'actions', phonemes: ['t', 'al', 'k'], meaningVi: 'nói chuyện vui vẻ', emoji: '🗣️', sentence: 'Talk kindly with your dear friends.', sentenceVi: 'Trò chuyện dịu dàng với bạn bè.' },
    { word: 'turn', theme: 'actions', phonemes: ['t', 'ur', 'n'], meaningVi: 'xoay người / đến lượt', emoji: '🔄', sentence: 'Turn around and take your turn.', sentenceVi: 'Xoay người lại và đến lượt bé chơi.' },
    { word: 'touch', theme: 'actions', phonemes: ['t', 'ou', 'ch'], meaningVi: 'chạm tay khẽ khàng', emoji: '👆', sentence: 'Touch the soft flower petal gently.', sentenceVi: 'Chạm nhẹ tay vào cánh hoa mềm mại.' },
    { word: 'taste', theme: 'actions', phonemes: ['t', 'a_e', 's', 't'], meaningVi: 'nếm thử vị ngọt', emoji: '👅', sentence: 'Taste the delicious homemade honey.', sentenceVi: 'Nếm thử vị mật ong ngọt ngào tự làm.' },
    { word: 'tug', theme: 'actions', phonemes: ['t', 'u', 'g'], meaningVi: 'kéo mạnh dây thừng', emoji: '🪢', sentence: 'Tug gently on the friendly rope.', sentenceVi: 'Kéo nhẹ sợi dây thừng cùng các bạn.' }
  ],
  'i': [
    { word: 'iguana', theme: 'animals', phonemes: ['i', 'g', 'u', 'a', 'n', 'a'], meaningVi: 'kỳ nhông xanh', emoji: '🦎', sentence: 'The green iguana basks on warm stones.', sentenceVi: 'Kỳ nhông xanh sưởi ấm trên tảng đá.' },
    { word: 'ibis', theme: 'animals', phonemes: ['i', 'b', 'i', 's'], meaningVi: 'chim quắm trắng', emoji: '🦩', sentence: 'The ibis wades through the shallow water.', sentenceVi: 'Chim quắm lội qua vùng nước nông.' },
    { word: 'inchworm', theme: 'animals', phonemes: ['i', 'n', 'ch', 'w', 'or', 'm'], meaningVi: 'sâu đo bé tí', emoji: '🐛', sentence: 'An inchworm crawls along the garden twig.', sentenceVi: 'Chú sâu đo nhích từng bước trên cành cây.' },
    { word: 'island', theme: 'nature', phonemes: ['i', 'l', 'a', 'n', 'd'], meaningVi: 'hòn đảo nhiệt đới', emoji: '🏝️', sentence: 'Palm trees sway on the sunny island.', sentenceVi: 'Hàng cọ đung đưa trên hòn đảo ngập nắng.' },
    { word: 'iceberg', theme: 'nature', phonemes: ['i', 's', 'b', 'er', 'g'], meaningVi: 'núi băng trôi', emoji: '🧊', sentence: 'A giant iceberg floats on polar seas.', sentenceVi: 'Khối núi băng khổng lồ trôi giữa biển cực.' },
    { word: 'ivy', theme: 'nature', phonemes: ['i', 'v', 'y'], meaningVi: 'dây thường xuân', emoji: '🌿', sentence: 'Green ivy climbs up the stone wall.', sentenceVi: 'Dây thường xuân leo trên bức tường đá.' },
    { word: 'iron', theme: 'objects_food', phonemes: ['i', 'r', 'o', 'n'], meaningVi: 'bàn là áo quần', emoji: '👔', sentence: 'Mom smooths clothes with an iron.', sentenceVi: 'Mẹ là phẳng áo quần bằng bàn là.' },
    { word: 'invite', theme: 'actions', phonemes: ['i', 'n', 'v', 'i_e', 't'], meaningVi: 'mời bạn đến chơi', emoji: '💌', sentence: 'Invite your friends to the garden party.', sentenceVi: 'Mời các bạn đến bữa tiệc ngoài vườn.' },
    { word: 'inhale', theme: 'actions', phonemes: ['i', 'n', 'h', 'a_e', 'l'], meaningVi: 'hít vào thật sâu', emoji: '🌬️', sentence: 'Inhale the sweet scent of roses.', sentenceVi: 'Hít vào thật sâu hương hoa hồng ngát.' },
    { word: 'imitate', theme: 'actions', phonemes: ['i', 'm', 'i', 't', 'a_e', 't'], meaningVi: 'bắt chước tiếng thú', emoji: '🎭', sentence: 'Imitate the sound of chirping birds.', sentenceVi: 'Bắt chước tiếng chim hót ríu ran.' }
  ],
  'p': [
    { word: 'panda', theme: 'animals', phonemes: ['p', 'a', 'n', 'd', 'a'], meaningVi: 'gấu trúc hiền hòa', emoji: '🐼', sentence: 'A fluffy panda eats bamboo leaves.', sentenceVi: 'Gấu trúc lông mềm ăn lá tre xanh.' },
    { word: 'parrot', theme: 'animals', phonemes: ['p', 'a', 'rr', 'o', 't'], meaningVi: 'vẹt sặc sỡ biết nói', emoji: '🦜', sentence: 'The colorful parrot says hello.', sentenceVi: 'Chú vẹt sặc sỡ cất tiếng chào bạn.' },
    { word: 'penguin', theme: 'animals', phonemes: ['p', 'e', 'n', 'g', 'u', 'i', 'n'], meaningVi: 'chim cánh cụt ngộ nghĩnh', emoji: '🐧', sentence: 'The happy penguin waddles on ice.', sentenceVi: 'Chim cánh cụt lạch bạch bước trên băng.' },
    { word: 'pony', theme: 'animals', phonemes: ['p', 'o', 'n', 'y'], meaningVi: 'chú ngựa lùn', emoji: '🐴', sentence: 'A little pony trots across the grass.', sentenceVi: 'Chú ngựa lùn phi nước kiệu trên bãi cỏ.' },
    { word: 'petal', theme: 'nature', phonemes: ['p', 'e', 't', 'a', 'l'], meaningVi: 'cánh hoa mềm mại', emoji: '🌸', sentence: 'A pink flower petal drops into the stream.', sentenceVi: 'Cánh hoa hồng rơi nhẹ xuống dòng suối.' },
    { word: 'pebble', theme: 'nature', phonemes: ['p', 'e', 'bb', 'l'], meaningVi: 'viên sỏi tròn nhẵn', emoji: '🪨', sentence: 'Skip a smooth pebble across the lake.', sentenceVi: 'Thả viên sỏi tròn lướt nhẹ trên mặt hồ.' },
    { word: 'puddle', theme: 'nature', phonemes: ['p', 'u', 'dd', 'l'], meaningVi: 'vũng nước mưa', emoji: '🌧️', sentence: 'Splash joyfully in a rain puddle.', sentenceVi: 'Nhảy té nước vui sướng trong vũng mưa.' },
    { word: 'plum', theme: 'objects_food', phonemes: ['p', 'l', 'u', 'm'], meaningVi: 'quả mận tím ngọt', emoji: '🫐', sentence: 'A sweet purple plum tastes delicious.', sentenceVi: 'Quả mận tím mọng nước thật ngọt ngào.' },
    { word: 'pizza', theme: 'objects_food', phonemes: ['p', 'i', 'zz', 'a'], meaningVi: 'bánh pizza thơm lừng', emoji: '🍕', sentence: 'Share a warm slice of cheese pizza.', sentenceVi: 'Cùng chia nhau miếng pizza phô mai thơm giòn.' },
    { word: 'pie', theme: 'objects_food', phonemes: ['p', 'ie'], meaningVi: 'bánh nướng nhân táo', emoji: '🥧', sentence: 'Grandma baked an apple pie today.', sentenceVi: 'Hôm nay bà nướng món bánh táo thơm phức.' },
    { word: 'pear', theme: 'objects_food', phonemes: ['p', 'ear'], meaningVi: 'quả lê vàng giòn', emoji: '🍐', sentence: 'Bite into a juicy yellow pear.', sentenceVi: 'Cắn một miếng lê vàng giòn ngọt lịm.' },
    { word: 'plate', theme: 'objects_food', phonemes: ['p', 'l', 'a_e', 't'], meaningVi: 'chiếc đĩa tròn sứ', emoji: '🍽️', sentence: 'Put sweet cookies on the ceramic plate.', sentenceVi: 'Xếp những chiếc bánh quy lên đĩa sứ.' },
    { word: 'paint', theme: 'actions', phonemes: ['p', 'ai', 'n', 't'], meaningVi: 'vẽ tranh sắc màu', emoji: '🎨', sentence: 'Paint a bright rainbow on paper.', sentenceVi: 'Vẽ cầu vồng rực rỡ trên trang giấy.' },
    { word: 'pull', theme: 'actions', phonemes: ['p', 'u', 'll'], meaningVi: 'kéo xe cộ', emoji: '🚜', sentence: 'Pull the red wagon across the yard.', sentenceVi: 'Kéo chiếc xe gòn màu đỏ qua khoảng sân.' },
    { word: 'push', theme: 'actions', phonemes: ['p', 'u', 'sh'], meaningVi: 'đẩy xích đu', emoji: '🛝', sentence: 'Push the swing high into the sky.', sentenceVi: 'Đẩy xích đu bay cao lên trời xanh.' },
    { word: 'pick', theme: 'actions', phonemes: ['p', 'i', 'ck'], meaningVi: 'hái hoa quả', emoji: '🍎', sentence: 'Pick red apples from the orchard tree.', sentenceVi: 'Hái những quả táo đỏ trên cây vườn nhà.' },
    { word: 'play', theme: 'actions', phonemes: ['p', 'l', 'ay'], meaningVi: 'chơi đùa vui tươi', emoji: '🎉', sentence: 'Children play happily with wooden blocks.', sentenceVi: 'Các bạn nhỏ chơi vui với những khối gỗ.' }
  ],
  'n': [
    { word: 'newt', theme: 'animals', phonemes: ['n', 'ew', 't'], meaningVi: 'chú sa giông nhỏ', emoji: '🦎', sentence: 'A spotted newt rests by the mossy log.', sentenceVi: 'Chú sa giông đốm nằm bên khúc gỗ rêu phong.' },
    { word: 'nightingale', theme: 'animals', phonemes: ['n', 'i_e', 't', 'i', 'ng', 'g', 'a_e', 'l'], meaningVi: 'chim sơn ca hót hay', emoji: '🐦', sentence: 'The nightingale sings a lovely song.', sentenceVi: 'Chim sơn ca hót khúc ca ngọt lành.' },
    { word: 'narwhal', theme: 'animals', phonemes: ['n', 'ar', 'w', 'h', 'a', 'l'], meaningVi: 'kỳ lân biển sừng dài', emoji: '🐋', sentence: 'The narwhal dives deep under arctic ice.', sentenceVi: 'Kỳ lân biển lặn sâu dưới lớp băng bắc cực.' },
    { word: 'nest', theme: 'nature', phonemes: ['n', 'e', 's', 't'], meaningVi: 'tổ chim ấm êm', emoji: '🪺', sentence: 'Baby birds rest cozy inside the nest.', sentenceVi: 'Những chú chim non nằm ấm cúng trong tổ.' },
    { word: 'night', theme: 'nature', phonemes: ['n', 'i_e', 't'], meaningVi: 'màn đêm yên bình', emoji: '🌙', sentence: 'Stars shine bright across the dark night.', sentenceVi: 'Những vì sao sáng tỏa trong màn đêm yên tĩnh.' },
    { word: 'needle', theme: 'objects_food', phonemes: ['n', 'ee', 'd', 'l'], meaningVi: 'cây kim chỉ khâu', emoji: '🪡', sentence: 'Thread the needle with colorful yarn.', sentenceVi: 'Xâu sợi chỉ sắc màu qua lỗ kim.' },
    { word: 'note', theme: 'objects_food', phonemes: ['n', 'o_e', 't'], meaningVi: 'nốt nhạc / lá thư nhỏ', emoji: '🎵', sentence: 'Write a sweet note to your friend.', sentenceVi: 'Viết lời nhắn nhủ ngọt ngào cho bạn.' },
    { word: 'napkin', theme: 'objects_food', phonemes: ['n', 'a', 'p', 'k', 'i', 'n'], meaningVi: 'khăn ăn sạch sẽ', emoji: '🧻', sentence: 'Wipe your mouth clean with a napkin.', sentenceVi: 'Lau miệng sạch sẽ bằng khăn ăn mềm.' },
    { word: 'noodles', theme: 'objects_food', phonemes: ['n', 'oo', 'd', 'l', 'z'], meaningVi: 'bát mì sợi dài', emoji: '🍜', sentence: 'Slurp warm noodles from the soup bowl.', sentenceVi: 'Thưởng thức bát mì sợi nóng hổi thơm ngon.' },
    { word: 'necklace', theme: 'objects_food', phonemes: ['n', 'e', 'c', 'k', 'l', 'a_e', 's'], meaningVi: 'chiếc vòng cổ hạt ngọc', emoji: '📿', sentence: 'Wear a beaded necklace for the party.', sentenceVi: 'Đeo chuỗi vòng hạt ngọc dự tiệc.' },
    { word: 'nibble', theme: 'actions', phonemes: ['n', 'i', 'bb', 'l'], meaningVi: 'gặm nhấm từng chút', emoji: '🐿️', sentence: 'The rabbit nibbles a crunchy orange carrot.', sentenceVi: 'Chú thỏ gặm nhấm củ cà rốt giòn ngọt.' },
    { word: 'nudge', theme: 'actions', phonemes: ['n', 'u', 'd', 'g_e'], meaningVi: 'huých nhẹ thân thiện', emoji: '🤝', sentence: 'The kitten gives a gentle nudge with its head.', sentenceVi: 'Mèo con huých nhẹ đầu âu yếm.' }
  ]
};

// Populate additional phonemes systematically (Groups 2 - 7)
const GENERIC_EXTENSIONS = {
  // G2
  'c_k': [
    { word: 'koala', theme: 'animals', phonemes: ['k', 'oa', 'l', 'a'], meaningVi: 'gấu túi koala', emoji: '🐨', sentence: 'The sleepy koala hugs an eucalyptus tree.', sentenceVi: 'Gấu koala ôm cây bạch đàn ngủ say.' },
    { word: 'kangaroo', theme: 'animals', phonemes: ['k', 'a', 'ng', 'g', 'a', 'r', 'oo'], meaningVi: 'chuột túi kangaroo', emoji: '🦘', sentence: 'The kangaroo hops high on the plains.', sentenceVi: 'Chuột túi kangaroo nhảy cao trên đồng nội.' },
    { word: 'camel', theme: 'animals', phonemes: ['c', 'a', 'm', 'e', 'l'], meaningVi: 'chú lạc đà sa mạc', emoji: '🐪', sentence: 'The camel walks across sandy hills.', sentenceVi: 'Chú lạc đà thong dong trên đồi cát.' },
    { word: 'crow', theme: 'animals', phonemes: ['c', 'r', 'ow'], meaningVi: 'chú quạ đen thông minh', emoji: '🦅', sentence: 'A clever crow perches on the fence.', sentenceVi: 'Chú quạ thông minh đậu trên hàng rào.' },
    { word: 'cloud', theme: 'nature', phonemes: ['c', 'l', 'ou', 'd'], meaningVi: 'đám mây trắng trôi', emoji: '☁️', sentence: 'A fluffy white cloud drifts in the sky.', sentenceVi: 'Đám mây trắng bồng bềnh trôi trên trời.' },
    { word: 'cliff', theme: 'nature', phonemes: ['c', 'l', 'i', 'ff'], meaningVi: 'vách đá dựng đứng', emoji: '🧗', sentence: 'Waves splash against the rocky cliff.', sentenceVi: 'Sóng vỗ vào vách đá dựng đứng.' },
    { word: 'cake', theme: 'objects_food', phonemes: ['c', 'a_e', 'k'], meaningVi: 'chiếc bánh kem sinh nhật', emoji: '🎂', sentence: 'A delicious birthday cake with candles.', sentenceVi: 'Chiếc bánh kem sinh nhật cắm nến lung linh.' },
    { word: 'carrot', theme: 'objects_food', phonemes: ['c', 'a', 'rr', 'o', 't'], meaningVi: 'củ cà rốt cam giòn', emoji: '🥕', sentence: 'The bunny loves crunchy orange carrots.', sentenceVi: 'Chú thỏ thích ăn củ cà rốt giòn ngọt.' },
    { word: 'corn', theme: 'objects_food', phonemes: ['c', 'or', 'n'], meaningVi: 'bắp ngô vàng óng', emoji: '🌽', sentence: 'Sweet yellow corn freshly boiled.', sentenceVi: 'Bắp ngô vàng ngọt mới luộc thơm phức.' },
    { word: 'cookie', theme: 'objects_food', phonemes: ['c', 'oo', 'k', 'ie'], meaningVi: 'bánh quy socola', emoji: '🍪', sentence: 'Warm chocolate cookie from the oven.', sentenceVi: 'Bánh quy socola ấm giòn vừa ra lò.' },
    { word: 'cook', theme: 'actions', phonemes: ['c', 'oo', 'k'], meaningVi: 'nấu bữa ăn ngon', emoji: '🍳', sentence: 'Cook delicious vegetable soup together.', sentenceVi: 'Cùng nhau nấu bát súp rau củ thơm ngon.' },
    { word: 'climb', theme: 'actions', phonemes: ['c', 'l', 'i_e', 'm'], meaningVi: 'leo trèo khéo léo', emoji: '🧗‍♂️', sentence: 'Climb safely up the wooden ladder.', sentenceVi: 'Leo trèo an toàn lên thang gỗ.' },
    { word: 'catch', theme: 'actions', phonemes: ['c', 'a', 'tch'], meaningVi: 'bắt lấy quả bóng', emoji: '⚾', sentence: 'Catch the bouncy ball with both hands.', sentenceVi: 'Bắt lấy quả bóng nảy bằng cả hai tay.' }
  ],
  'e': [
    { word: 'eagle', theme: 'animals', phonemes: ['ea', 'g', 'l'], meaningVi: 'đại bàng dũng mãnh', emoji: '🦅', sentence: 'The mighty eagle soars above mountains.', sentenceVi: 'Đại bàng dũng mãnh bay trên đỉnh núi cao.' },
    { word: 'earth', theme: 'nature', phonemes: ['ear', 'th'], meaningVi: 'trái đất xanh tươi', emoji: '🌍', sentence: 'Our planet Earth is full of wonders.', sentenceVi: 'Trái đất mến yêu của chúng ta ngập tràn kỳ quan.' },
    { word: 'elm', theme: 'nature', phonemes: ['e', 'l', 'm'], meaningVi: 'cây du rợp bóng mát', emoji: '🌳', sentence: 'The tall elm tree sways in the wind.', sentenceVi: 'Cây du cao lớn đu đưa trong gió mát.' },
    { word: 'envelope', theme: 'objects_food', phonemes: ['e', 'n', 'v', 'e', 'l', 'o_e', 'p'], meaningVi: 'phong bì thư trắng', emoji: '✉️', sentence: 'Put the greeting card into the envelope.', sentenceVi: 'Bỏ tấm thiệp chúc mừng vào phong bì.' },
    { word: 'easel', theme: 'objects_food', phonemes: ['ea', 's', 'e', 'l'], meaningVi: 'giá vẽ tranh gỗ', emoji: '🎨', sentence: 'Place your paper on the artist easel.', sentenceVi: 'Đặt trang giấy lên giá vẽ tranh gỗ.' },
    { word: 'eraser', theme: 'objects_food', phonemes: ['e', 'r', 'a_e', 's', 'er'], meaningVi: 'cục gôm tẩy mềm', emoji: '✏️', sentence: 'Erase pencil marks cleanly with an eraser.', sentenceVi: 'Tẩy sạch nét chì bằng cục gôm mềm.' },
    { word: 'enter', theme: 'actions', phonemes: ['e', 'n', 't', 'er'], meaningVi: 'bước vào lớp học', emoji: '🚪', sentence: 'Enter the classroom with a bright smile.', sentenceVi: 'Bước vào lớp học với nụ cười tươi.' },
    { word: 'enjoy', theme: 'actions', phonemes: ['e', 'n', 'j', 'oy'], meaningVi: 'thưởng thức niềm vui', emoji: '🥰', sentence: 'Enjoy reading wonderful Ehon storybooks.', sentenceVi: 'Thưởng thức những cuốn truyện tranh Ehon kỳ diệu.' },
    { word: 'explore', theme: 'actions', phonemes: ['e', 'x', 'p', 'l', 'or_e'], meaningVi: 'thám hiểm thế giới', emoji: '🧭', sentence: 'Explore the phonics island treasure.', sentenceVi: 'Thám hiểm kho báu trên hòn đảo âm vị.' }
  ],
  'h': [
    { word: 'hamster', theme: 'animals', phonemes: ['h', 'a', 'm', 's', 't', 'er'], meaningVi: 'chuột hamster bé xíu', emoji: '🐹', sentence: 'The cute hamster runs in its toy wheel.', sentenceVi: 'Chú hamster đáng yêu chạy trên bánh xe đồ chơi.' },
    { word: 'hippo', theme: 'animals', phonemes: ['h', 'i', 'pp', 'o'], meaningVi: 'chú hà mã ngâm nước', emoji: '🦛', sentence: 'The hippo splashes water with its ears.', sentenceVi: 'Chú hà mã vẫy tai té nước mát rượi.' },
    { word: 'hedgehog', theme: 'animals', phonemes: ['h', 'e', 'd', 'g_e', 'h', 'o', 'g'], meaningVi: 'chú nhím gai nhỏ', emoji: '🦔', sentence: 'A tiny hedgehog curls into a prickly ball.', sentenceVi: 'Chú nhím gai cuộn tròn như một quả bóng nhỏ.' },
    { word: 'hare', theme: 'animals', phonemes: ['h', 'air'], meaningVi: 'chú thỏ rừng tai dài', emoji: '🐇', sentence: 'The brown hare leaps through the meadow.', sentenceVi: 'Chú thỏ rừng nhảy qua đồng cỏ xanh biếc.' },
    { word: 'horizon', theme: 'nature', phonemes: ['h', 'o', 'r', 'i_e', 'z', 'o', 'n'], meaningVi: 'đường chân trời xa xa', emoji: '🌅', sentence: 'The orange sun sets on the horizon.', sentenceVi: 'Mặt trời cam lặn nơi đường chân trời xa.' },
    { word: 'heart', theme: 'objects_food', phonemes: ['h', 'ar', 't'], meaningVi: 'trái tim yêu thương', emoji: '❤️', sentence: 'Draw a loving red heart for mommy.', sentenceVi: 'Vẽ trái tim đỏ thắm tặng mẹ kính yêu.' },
    { word: 'honey', theme: 'objects_food', phonemes: ['h', 'u', 'n', 'ey'], meaningVi: 'mật ong ngọt ngào', emoji: '🍯', sentence: 'Sweet golden honey from the beehive.', sentenceVi: 'Mật ong vàng óng thơm ngát từ tổ ong.' },
    { word: 'helmet', theme: 'objects_food', phonemes: ['h', 'e', 'l', 'm', 'e', 't'], meaningVi: 'mũ bảo hiểm an toàn', emoji: '⛑️', sentence: 'Wear a safe helmet when riding your bike.', sentenceVi: 'Đội mũ bảo hiểm an toàn khi đi xe đạp.' },
    { word: 'hug', theme: 'actions', phonemes: ['h', 'u', 'g'], meaningVi: 'ôm ấp ấm áp', emoji: '🤗', sentence: 'Give mommy a big warm hug.', sentenceVi: 'Trao mẹ một cái ôm ấm áp ngọt ngào.' },
    { word: 'hold', theme: 'actions', phonemes: ['h', 'o', 'l', 'd'], meaningVi: 'nắm chặt bàn tay', emoji: '🤝', sentence: 'Hold hands when crossing the street.', sentenceVi: 'Nắm chặt tay nhau khi qua đường.' },
    { word: 'help', theme: 'actions', phonemes: ['h', 'e', 'l', 'p'], meaningVi: 'giúp đỡ mọi người', emoji: '🤲', sentence: 'Help tidy up the toys after play.', sentenceVi: 'Giúp dọn dẹp đồ chơi sau khi chơi xong.' },
    { word: 'hike', theme: 'actions', phonemes: ['h', 'i_e', 'k'], meaningVi: 'đi bộ leo núi', emoji: '🥾', sentence: 'Hike up the green hill with family.', sentenceVi: 'Đi dạo leo lên ngọn đồi xanh cùng gia đình.' }
  ],
  'r': [
    { word: 'robin', theme: 'animals', phonemes: ['r', 'o', 'b', 'i', 'n'], meaningVi: 'chim cổ đỏ líu lo', emoji: '🐦', sentence: 'A friendly robin perches on the fence.', sentenceVi: 'Chú chim cổ đỏ đậu trên hàng rào líu lo.' },
    { word: 'raccoon', theme: 'animals', phonemes: ['r', 'a', 'cc', 'oo', 'n'], meaningVi: 'chú gấu mèo ngộ nghĩnh', emoji: '🦝', sentence: 'The masked raccoon washes food in water.', sentenceVi: 'Chú gấu mèo rửa thức ăn bên bờ suối.' },
    { word: 'rhino', theme: 'animals', phonemes: ['r', 'i_e', 'n', 'o'], meaningVi: 'chú tê giác một sừng', emoji: '🦏', sentence: 'The strong rhino walks peacefully.', sentenceVi: 'Chú tê giác mạnh mẽ dạo bước bình yên.' },
    { word: 'rooster', theme: 'animals', phonemes: ['r', 'oo', 's', 't', 'er'], meaningVi: 'chú gà trống oai vệ', emoji: '🐓', sentence: 'The rooster crows to greet the dawn.', sentenceVi: 'Gà trống cất tiếng gáy đón ánh bình minh.' },
    { word: 'rainbow', theme: 'nature', phonemes: ['r', 'ai', 'n', 'b', 'ow'], meaningVi: 'cầu vồng bảy sắc', emoji: '🌈', sentence: 'A beautiful seven-colored rainbow in the sky.', sentenceVi: 'Cầu vồng bảy sắc rực rỡ sau cơn mưa.' },
    { word: 'rose', theme: 'nature', phonemes: ['r', 'o_e', 'z'], meaningVi: 'bông hoa hồng ngát hương', emoji: '🌹', sentence: 'The red rose blooms in the summer garden.', sentenceVi: 'Bông hoa hồng đỏ nở ngát hương trong vườn.' },
    { word: 'ribbon', theme: 'objects_food', phonemes: ['r', 'i', 'bb', 'o', 'n'], meaningVi: 'dải ruy băng buộc quà', emoji: '🎀', sentence: 'Tie the gift box with a pink silk ribbon.', sentenceVi: 'Thắt hộp quà bằng dải ruy băng hồng xinh.' },
    { word: 'rope', theme: 'objects_food', phonemes: ['r', 'o_e', 'p'], meaningVi: 'dây thừng nhảy dây', emoji: '🪢', sentence: 'Skip rope with friends in the schoolyard.', sentenceVi: 'Nhảy dây cùng bè bạn ngoài sân trường.' },
    { word: 'radio', theme: 'objects_food', phonemes: ['r', 'a', 'd', 'i', 'o'], meaningVi: 'chiếc đài radio phát nhạc', emoji: '📻', sentence: 'Listen to lovely songs on the radio.', sentenceVi: 'Nghe những khúc ca êm dịu trên đài radio.' },
    { word: 'rocket', theme: 'objects_food', phonemes: ['r', 'o', 'ck', 'e', 't'], meaningVi: 'tàu tên lửa vũ trụ', emoji: '🚀', sentence: 'The space rocket zooms to the moon.', sentenceVi: 'Tàu tên lửa bay vút lên cung trăng.' },
    { word: 'read', theme: 'actions', phonemes: ['r', 'ea', 'd'], meaningVi: 'đọc sách chăm chú', emoji: '📖', sentence: 'Read a wonderful bedtime story tonight.', sentenceVi: 'Đọc câu chuyện cổ tích tuyệt vời tối nay.' },
    { word: 'ride', theme: 'actions', phonemes: ['r', 'i_e', 'd'], meaningVi: 'lái xe đạp vui nhộn', emoji: '🚲', sentence: 'Ride your shiny bicycle in the park.', sentenceVi: 'Lái chiếc xe đạp bóng loáng trong công viên.' },
    { word: 'roll', theme: 'actions', phonemes: ['r', 'o', 'll'], meaningVi: 'lăn tròn quả bóng', emoji: '⚽', sentence: 'Roll the ball gently across the carpet.', sentenceVi: 'Lăn nhẹ quả bóng qua thảm êm.' }
  ],
  'm': [
    { word: 'mole', theme: 'animals', phonemes: ['m', 'o_e', 'l'], meaningVi: 'chú chuột chũi nhỏ', emoji: '🦔', sentence: 'The little mole burrows under garden soil.', sentenceVi: 'Chú chuột chũi đào hang dưới luống đất mềm.' },
    { word: 'moose', theme: 'animals', phonemes: ['m', 'oo', 's'], meaningVi: 'nai sừng tấm khổng lồ', emoji: '🦌', sentence: 'The moose wades in the clear forest lake.', sentenceVi: 'Nai sừng tấm lội nước bên hồ rừng trong.' },
    { word: 'moth', theme: 'animals', phonemes: ['m', 'o', 'th'], meaningVi: 'chú bướm đêm vỗ cánh', emoji: '🦋', sentence: 'The velvety moth flies near the lantern.', sentenceVi: 'Chú bướm đêm bay lượn bên ánh đèn lồng.' },
    { word: 'mountain', theme: 'nature', phonemes: ['m', 'ou', 'n', 't', 'ai', 'n'], meaningVi: 'ngọn núi tuyết phủ', emoji: '🏔️', sentence: 'Snow caps the peak of the high mountain.', sentenceVi: 'Tuyết trắng phủ trên đỉnh ngọn núi cao.' },
    { word: 'meadow', theme: 'nature', phonemes: ['m', 'e', 'd', 'ow'], meaningVi: 'đồng cỏ ngập hoa vàng', emoji: '🌼', sentence: 'Yellow buttercups blanket the sunny meadow.', sentenceVi: 'Hoa vàng trải thảm rực rỡ trên đồng cỏ.' },
    { word: 'mitten', theme: 'objects_food', phonemes: ['m', 'i', 'tt', 'e', 'n'], meaningVi: 'găng tay len ấm áp', emoji: '🧤', sentence: 'Wear warm wool mittens in winter.', sentenceVi: 'Đeo găng tay len ấm áp vào mùa đông.' },
    { word: 'mirror', theme: 'objects_food', phonemes: ['m', 'i', 'rr', 'or'], meaningVi: 'tấm gương soi sáng bóng', emoji: '🪞', sentence: 'Look at your happy smile in the mirror.', sentenceVi: 'Ngắm nhìn nụ cười tươi của con trong gương.' },
    { word: 'melon', theme: 'objects_food', phonemes: ['m', 'e', 'l', 'o', 'n'], meaningVi: 'quả dưa lưới ngọt mát', emoji: '🍈', sentence: 'Sweet juicy melon on a sunny afternoon.', sentenceVi: 'Thưởng thức dưa lưới ngọt mát ngày hè.' },
    { word: 'muffin', theme: 'objects_food', phonemes: ['m', 'u', 'ff', 'i', 'n'], meaningVi: 'bánh nướng xốp thơm', emoji: '🧁', sentence: 'Blueberry muffin warm from the oven.', sentenceVi: 'Bánh muffin việt quất thơm lừng vừa nướng.' },
    { word: 'march', theme: 'actions', phonemes: ['m', 'ar', 'ch'], meaningVi: 'bước đều tăm tắp', emoji: '🚶‍♂️', sentence: 'March like brave little soldiers in a row.', sentenceVi: 'Bước đều tăm tắp như những chú lính con dũng cảm.' },
    { word: 'make', theme: 'actions', phonemes: ['m', 'a_e', 'k'], meaningVi: 'tạo nên tác phẩm', emoji: '🛠️', sentence: 'Make a colorful collage with paper scraps.', sentenceVi: 'Cắt dán tạo nên bức tranh bằng giấy màu.' },
    { word: 'melt', theme: 'actions', phonemes: ['m', 'e', 'l', 't'], meaningVi: 'tan chảy ngọt ngào', emoji: '🍦', sentence: 'Ice cream melts sweetly on a warm day.', sentenceVi: 'Que kem ngọt ngào tan chảy dưới nắng ấm.' }
  ],
  'd': [
    { word: 'deer', theme: 'animals', phonemes: ['d', 'ee', 'r'], meaningVi: 'chú hươu sao mắt tròn', emoji: '🦌', sentence: 'The gentle deer walks softly in the woods.', sentenceVi: 'Chú hươu sao nhẹ nhàng dạo bước giữa rừng cây.' },
    { word: 'dolphin', theme: 'animals', phonemes: ['d', 'o', 'l', 'ph', 'i', 'n'], meaningVi: 'cá heo nhảy sóng', emoji: '🐬', sentence: 'A playful dolphin leaps out of the blue wave.', sentenceVi: 'Cá heo tinh nghịch nhảy vút khỏi ngọn sóng biếc.' },
    { word: 'dove', theme: 'animals', phonemes: ['d', 'u', 'v_e'], meaningVi: 'chim bồ câu trắng', emoji: '🕊️', sentence: 'A pure white dove rests on the branch.', sentenceVi: 'Chú chim bồ câu trắng muốt đậu trên cành.' },
    { word: 'donkey', theme: 'animals', phonemes: ['d', 'o', 'n', 'k', 'ey'], meaningVi: 'chú lừa chăm chỉ', emoji: '🫏', sentence: 'The kind donkey carries baskets of apples.', sentenceVi: 'Chú lừa hiền hòa chở những giỏ táo thơm.' },
    { word: 'dandelion', theme: 'nature', phonemes: ['d', 'a', 'n', 'd', 'e', 'l', 'i', 'o', 'n'], meaningVi: 'hoa bồ công anh bay gió', emoji: '🌾', sentence: 'Blow the fluffy dandelion seeds into the breeze.', sentenceVi: 'Thổi những hạt bồ công anh bay theo gió mát.' },
    { word: 'desert', theme: 'nature', phonemes: ['d', 'e', 's', 'er', 't'], meaningVi: 'sa mạc đồi cát vàng', emoji: '🏜️', sentence: 'Golden sand dunes stretch across the desert.', sentenceVi: 'Những đụn cát vàng óng trải dài nơi sa mạc.' },
    { word: 'dew', theme: 'nature', phonemes: ['d', 'ew'], meaningVi: 'giọt sương mai đọng lá', emoji: '💧', sentence: 'Morning dew sparkles like diamonds on leaves.', sentenceVi: 'Sương mai lấp lánh như kim cương trên lá.' },
    { word: 'donut', theme: 'objects_food', phonemes: ['d', 'o_e', 'n', 'u', 't'], meaningVi: 'bánh vòng ngọt thơm', emoji: '🍩', sentence: 'A pink frosted donut with rainbow sprinkles.', sentenceVi: 'Chiếc bánh vòng phủ kem hồng rắc kẹo cốm.' },
    { word: 'dish', theme: 'objects_food', phonemes: ['d', 'i', 'sh'], meaningVi: 'chiếc đĩa sứ sạch bóng', emoji: '🍽️', sentence: 'Wash and dry the ceramic dish carefully.', sentenceVi: 'Rửa và lau khô chiếc đĩa sứ cẩn thận.' },
    { word: 'dress', theme: 'objects_food', phonemes: ['d', 'r', 'e', 'ss'], meaningVi: 'chiếc váy xòe hoa', emoji: '👗', sentence: 'A pretty yellow dress with floral patterns.', sentenceVi: 'Chiếc váy vàng rực rỡ in hoa xinh xắn.' },
    { word: 'dance', theme: 'actions', phonemes: ['d', 'a', 'n', 's_e'], meaningVi: 'khiêu vũ uyển chuyển', emoji: '💃', sentence: 'Dance to the lively cheerful rhythm.', sentenceVi: 'Khiêu vũ nhịp nhàng theo điệu nhạc rộn rã.' },
    { word: 'dive', theme: 'actions', phonemes: ['d', 'i_e', 'v'], meaningVi: 'lặn sâu khám phá biển', emoji: '🤿', sentence: 'Dive underwater to see colorful corals.', sentenceVi: 'Lặn xuống nước ngắm san hô rực rỡ.' },
    { word: 'draw', theme: 'actions', phonemes: ['d', 'r', 'aw'], meaningVi: 'vẽ tranh sáng tạo', emoji: '🖍️', sentence: 'Draw happy animals with crayons.', sentenceVi: 'Vẽ những bạn thú vui tươi bằng bút sáp màu.' }
  ]
};

// Process explicit additions
for (const [phId, items] of Object.entries(PHONEME_EXPANSION)) {
  const meta = PHONEME_META[phId];
  if (!meta) continue;

  items.forEach((item, idx) => {
    const wordKey = item.word.toLowerCase();
    const dedupKey = `${phId}_${wordKey}`;
    if (seenWords.has(dedupKey)) return;

    const visual = existingVisuals[wordKey] || CURATED_NEW_VISUALS[wordKey] || {
      url: `/assets/ehon/theme_${item.theme}.jpg`,
      type: 'ehon',
      alt: `Tranh Ehon minh họa từ ${item.word}`
    };

    MASTER_WORD_BANK.push({
      id: `wb_${phId}_${wordKey}_${idx + 10}`,
      word: item.word,
      phonemeId: phId,
      group: meta.group,
      stage: meta.stage,
      phonemes: item.phonemes,
      theme: item.theme,
      meaningVi: item.meaningVi,
      emoji: item.emoji,
      sampleSentence: item.sentence,
      sampleSentenceVi: item.sentenceVi,
      visual: visual
    });
    seenWords.add(dedupKey);
  });
}

// Process generic extensions for remaining phonemes
for (const [phId, items] of Object.entries(GENERIC_EXTENSIONS)) {
  const meta = PHONEME_META[phId];
  if (!meta) continue;

  items.forEach((item, idx) => {
    const wordKey = item.word.toLowerCase();
    const dedupKey = `${phId}_${wordKey}`;
    if (seenWords.has(dedupKey)) return;

    const visual = existingVisuals[wordKey] || CURATED_NEW_VISUALS[wordKey] || {
      url: `/assets/ehon/theme_${item.theme}.jpg`,
      type: 'ehon',
      alt: `Tranh Ehon minh họa từ ${item.word}`
    };

    MASTER_WORD_BANK.push({
      id: `wb_${phId}_${wordKey}_${idx + 10}`,
      word: item.word,
      phonemeId: phId,
      group: meta.group,
      stage: meta.stage,
      phonemes: item.phonemes,
      theme: item.theme,
      meaningVi: item.meaningVi,
      emoji: item.emoji,
      sampleSentence: item.sentence,
      sampleSentenceVi: item.sentenceVi,
      visual: visual
    });
    seenWords.add(dedupKey);
  });
}

// To ensure EVERY phoneme has at least 25 decodable words across 4 themes:
// Generate balanced theme entries for any phoneme having fewer than 25 words
const ALL_PHONEMES = Object.keys(PHONEME_META);

// Phonics sound patterns database
const PHONEME_WORDS_DATABASE = {
  // G3: g, o, u, l, f, b
  'g': [
    { word: 'gorilla', theme: 'animals', phonemes: ['g', 'o', 'r', 'i', 'll', 'a'], meaningVi: 'khỉ đột hiền lành', emoji: '🦍', s: 'A gentle gorilla rests in the shade.', vi: 'Chú khỉ đột hiền hòa nằm nghỉ trong bóng râm.' },
    { word: 'goldfish', theme: 'animals', phonemes: ['g', 'o', 'l', 'd', 'f', 'i', 'sh'], meaningVi: 'chú cá vàng bơi lội', emoji: '🐠', s: 'The goldfish swims in clear water.', vi: 'Chú cá vàng bơi lội trong hồ nước trong.' },
    { word: 'gazelle', theme: 'animals', phonemes: ['g', 'a', 'z', 'e', 'll', 'e'], meaningVi: 'linh dương duyên dáng', emoji: '🦌', s: 'The graceful gazelle leaps over rocks.', vi: 'Linh dương duyên dáng nhảy qua gộp đá.' },
    { word: 'garden', theme: 'nature', phonemes: ['g', 'ar', 'd', 'e', 'n'], meaningVi: 'khu vườn hoa rực rỡ', emoji: '🏡', s: 'Roses bloom in the sunny garden.', vi: 'Hoa hồng nở rộ trong khu vườn ngập nắng.' },
    { word: 'grass', theme: 'nature', phonemes: ['g', 'r', 'a', 'ss'], meaningVi: 'thảm cỏ xanh mướt', emoji: '🌱', s: 'Walk barefoot on soft green grass.', vi: 'Dạo bước chân trần trên thảm cỏ non mềm mại.' },
    { word: 'guitar', theme: 'objects_food', phonemes: ['g', 'ui', 't', 'ar'], meaningVi: 'đàn guitar gỗ êm ái', emoji: '🎸', s: 'Strum joyful melodies on the guitar.', vi: 'Gảy những giai điệu vui tươi trên cây đàn guitar.' },
    { word: 'gate', theme: 'objects_food', phonemes: ['g', 'a_e', 't'], meaningVi: 'cánh cổng gỗ trắng', emoji: '🚪', s: 'Open the gate to the flower patch.', vi: 'Mở cánh cổng dẫn vào luống hoa xinh.' },
    { word: 'grape', theme: 'objects_food', phonemes: ['g', 'r', 'a_e', 'p'], meaningVi: 'chùm nho tím ngọt', emoji: '🍇', s: 'Sweet purple grapes fresh from the vine.', vi: 'Những chùm nho tím ngọt lành hái từ giàn.' },
    { word: 'glove', theme: 'objects_food', phonemes: ['g', 'l', 'u', 'v_e'], meaningVi: 'găng tay làm vườn', emoji: '🧤', s: 'Wear garden gloves to plant flowers.', vi: 'Đeo găng tay để trồng hoa cùng mẹ.' },
    { word: 'grin', theme: 'actions', phonemes: ['g', 'r', 'i', 'n'], meaningVi: 'cười toe toét', emoji: '😁', s: 'A big bright grin on your happy face.', vi: 'Nụ cười toe toét rạng rỡ trên khuôn mặt bé.' },
    { word: 'glide', theme: 'actions', phonemes: ['g', 'l', 'i_e', 'd'], meaningVi: 'lướt êm ái', emoji: '⛸️', s: 'Glide smoothly on the shiny ice rink.', vi: 'Lướt êm ái trên sân băng lóng lánh.' },
    { word: 'gather', theme: 'actions', phonemes: ['g', 'a', 'th', 'er'], meaningVi: 'thu gom quả chín', emoji: '🧺', s: 'Gather sweet berries into a basket.', vi: 'Thu gom quả mọng ngọt vào giỏ nhỏ.' }
  ],
  'o': [
    { word: 'otter', theme: 'animals', phonemes: ['o', 'tt', 'er'], meaningVi: 'chú rái cá tinh nghịch', emoji: '🦦', s: 'The playful otter slides into the stream.', sentenceVi: 'Chú rái cá tinh nghịch trượt xuống dòng suối.' },
    { word: 'ostrich', theme: 'animals', phonemes: ['o', 's', 't', 'r', 'i', 'ch'], meaningVi: 'chú đà điểu chạy nhanh', emoji: '🪶', s: 'The tall ostrich runs across open fields.', sentenceVi: 'Đà điểu cao lớn chạy băng băng qua cánh đồng.' },
    { word: 'octopus', theme: 'animals', phonemes: ['o', 'c', 't', 'o', 'p', 'u', 's'], meaningVi: 'bạch tuộc tám xúc tu', emoji: '🐙', s: 'An octopus hides behind coral reefs.', sentenceVi: 'Bạch tuộc ẩn mình sau rạn san hô.' },
    { word: 'orca', theme: 'animals', phonemes: ['or', 'c', 'a'], meaningVi: 'cá voi sát thủ rẽ sóng', emoji: '🐋', s: 'The orca leaps gracefully over waves.', sentenceVi: 'Cá voi nhảy thanh thoát qua ngọn sóng biếc.' },
    { word: 'ocean', theme: 'nature', phonemes: ['o', 'sh', 'a', 'n'], meaningVi: 'đại dương mênh mông', emoji: '🌊', s: 'Dolphins swim in the vast ocean.', sentenceVi: 'Đàn cá heo bơi lội giữa đại dương mênh mông.' },
    { word: 'oasis', theme: 'nature', phonemes: ['o', 'a', 's', 'i', 's'], meaningVi: 'ốc đảo xanh tươi', emoji: '🌴', s: 'A refreshing green oasis in the desert.', sentenceVi: 'Ốc đảo xanh tươi mát lành giữa sa mạc.' },
    { word: 'orange', theme: 'objects_food', phonemes: ['o', 'r', 'a', 'n', 'g_e'], meaningVi: 'quả cam mọng nước', emoji: '🍊', s: 'Peel a sweet juicy orange for snack.', sentenceVi: 'Bóc quả cam mọng nước cho bữa phụ thơm ngon.' },
    { word: 'olive', theme: 'objects_food', phonemes: ['o', 'l', 'i', 'v_e'], meaningVi: 'quả ô liu xanh', emoji: '🫒', s: 'Plump green olives on the salad.', sentenceVi: 'Những quả ô liu xanh mướt trên đĩa salad.' },
    { word: 'omelet', theme: 'objects_food', phonemes: ['o', 'm', 'e', 'l', 'e', 't'], meaningVi: 'trứng cuộn thơm béo', emoji: '🍳', s: 'A warm fluffy omelet for breakfast.', sentenceVi: 'Món trứng cuộn thơm béo cho bữa sáng.' },
    { word: 'open', theme: 'actions', phonemes: ['o', 'p', 'e', 'n'], meaningVi: 'mở trang sách mới', emoji: '📖', s: 'Open the colorful picture book.', sentenceVi: 'Mở trang sách tranh sắc màu kỳ diệu.' },
    { word: 'order', theme: 'actions', phonemes: ['or', 'd', 'er'], meaningVi: 'xếp theo thứ tự', emoji: '🔢', s: 'Put the wooden blocks in neat order.', sentenceVi: 'Xếp những khối gỗ theo thứ tự ngăn nắp.' }
  ],
  'u': [
    { word: 'urchin', theme: 'animals', phonemes: ['ur', 'ch', 'i', 'n'], meaningVi: 'nhím biển gai nhọn', emoji: '🦔', s: 'A sea urchin rests on the seafloor.', sentenceVi: 'Nhím biển nằm yên dưới đáy đại dương.' },
    { word: 'umbrella', theme: 'objects_food', phonemes: ['u', 'm', 'b', 'r', 'e', 'll', 'a'], meaningVi: 'chiếc ô che mưa nắng', emoji: '☂️', s: 'Hold a colorful umbrella in the rain.', sentenceVi: 'Cầm chiếc ô rực rỡ đi dưới cơn mưa rào.' },
    { word: 'ukulele', theme: 'objects_food', phonemes: ['u', 'k', 'u', 'l', 'e', 'l', 'e'], meaningVi: 'đàn ukulele nhỏ xinh', emoji: '🪕', s: 'Strum cheerful tunes on the ukulele.', sentenceVi: 'Gảy những giai điệu rộn ràng trên đàn ukulele.' },
    { word: 'uniform', theme: 'objects_food', phonemes: ['u', 'n', 'i', 'f', 'or', 'm'], meaningVi: 'đồng phục học sinh', emoji: '👔', s: 'Wear a clean neat school uniform.', sentenceVi: 'Mặc bộ đồng phục học sinh tinh tươm sạch sẽ.' },
    { word: 'under', theme: 'nature', phonemes: ['u', 'n', 'd', 'er'], meaningVi: 'dưới tán bóng râm', emoji: '🌳', s: 'Rest peacefully under the apple tree.', sentenceVi: 'Nghỉ ngơi yên bình dưới bóng cây táo.' },
    { word: 'uphill', theme: 'nature', phonemes: ['u', 'p', 'h', 'i', 'll'], meaningVi: 'con dốc thoai thoải', emoji: '⛰️', s: 'Walk uphill to see the grand view.', sentenceVi: 'Đi lên dốc để ngắm toàn cảnh hùng vĩ.' },
    { word: 'untie', theme: 'actions', phonemes: ['u', 'n', 't', 'ie'], meaningVi: 'cởi nút thắt nơ', emoji: '🎀', s: 'Untie the ribbon on the gift box.', sentenceVi: 'Cởi nút thắt ruy băng trên hộp quà.' },
    { word: 'unpack', theme: 'actions', phonemes: ['u', 'n', 'p', 'a', 'ck'], meaningVi: 'dỡ đồ chơi ra', emoji: '📦', s: 'Unpack wooden blocks to build a castle.', sentenceVi: 'Dỡ những khối gỗ ra để xây lâu đài.' }
  ],
  'l': [
    { word: 'lamb', theme: 'animals', phonemes: ['l', 'a', 'm'], meaningVi: 'chú cừu non lông xù', emoji: '🐑', s: 'The gentle lamb plays in the green grass.', sentenceVi: 'Chú cừu non đùa vui trên thảm cỏ biếc.' },
    { word: 'leopard', theme: 'animals', phonemes: ['l', 'e', 'p', 'ar', 'd'], meaningVi: 'báo hoa mai nhanh nhẹn', emoji: '🐆', s: 'The spotted leopard walks with soft steps.', sentenceVi: 'Báo hoa mai bước đi êm ái nhẹ nhàng.' },
    { word: 'lizard', theme: 'animals', phonemes: ['l', 'i', 'z', 'ar', 'd'], meaningVi: 'thằn lằn sưởi nắng', emoji: '🦎', s: 'A little green lizard warms itself on stone.', sentenceVi: 'Chú thằn lằn xanh sưởi nắng trên phiến đá.' },
    { word: 'llama', theme: 'animals', phonemes: ['l', 'a', 'm', 'a'], meaningVi: 'lạc đà llama thân thiện', emoji: '🦙', s: 'The friendly llama chews sweet clover.', sentenceVi: 'Chú llama thân thiện nhai cỏ ba lá ngọt.' },
    { word: 'ladybug', theme: 'animals', phonemes: ['l', 'a', 'd', 'y', 'b', 'u', 'g'], meaningVi: 'bọ rùa chấm bi đỏ', emoji: '🐞', s: 'A red ladybug crawls on a daisy flower.', sentenceVi: 'Bọ rùa chấm bi bò trên bông hoa cúc trắng.' },
    { word: 'lobster', theme: 'animals', phonemes: ['l', 'o', 'b', 's', 't', 'er'], meaningVi: 'tôm hùm đại dương', emoji: '🦞', s: 'The lobster scuttles along rocky sea caves.', sentenceVi: 'Tôm hùm bò men theo các hang đá biển.' },
    { word: 'lake', theme: 'nature', phonemes: ['l', 'a_e', 'k'], meaningVi: 'hồ nước phẳng lặng', emoji: '🏞️', s: 'Ducks glide across the serene lake.', sentenceVi: 'Đàn vịt lướt êm trên mặt hồ phẳng lặng.' },
    { word: 'lily', theme: 'nature', phonemes: ['l', 'i', 'l', 'y'], meaningVi: 'hoa loa kèn tinh khôi', emoji: '🌸', s: 'A white water lily floats on the pond.', sentenceVi: 'Hoa loa kèn nước trắng muốt nổi trên mặt ao.' },
    { word: 'lemon', theme: 'objects_food', phonemes: ['l', 'e', 'm', 'o', 'n'], meaningVi: 'quả chanh vàng thơm mát', emoji: '🍋', s: 'A slice of yellow lemon in cool water.', sentenceVi: 'Lát chanh vàng thơm mát trong ly nước lọc.' },
    { word: 'loaf', theme: 'objects_food', phonemes: ['l', 'oa', 'f'], meaningVi: 'ổ bánh mì vàng giòn', emoji: '🍞', s: 'A fresh loaf of bread sliced for family.', sentenceVi: 'Ổ bánh mì mới ra lò cắt lát thơm ngon.' },
    { word: 'ladder', theme: 'objects_food', phonemes: ['l', 'a', 'dd', 'er'], meaningVi: 'chiếc thang gỗ chắc chắn', emoji: '🪜', s: 'Climb the sturdy wooden ladder safely.', sentenceVi: 'Leo lên chiếc thang gỗ chắc chắn một cách an toàn.' },
    { word: 'listen', theme: 'actions', phonemes: ['l', 'i', 's', 'e', 'n'], meaningVi: 'lắng nghe tiếng chim', emoji: '👂', s: 'Listen to the sweet sounds of singing birds.', sentenceVi: 'Lắng nghe những thanh âm ngọt ngào của tiếng chim ca.' },
    { word: 'laugh', theme: 'actions', phonemes: ['l', 'a', 'f'], meaningVi: 'cười vang vui sướng', emoji: '😄', s: 'Laugh with friends at funny storybooks.', sentenceVi: 'Cười vang cùng bạn bè bên cuốn truyện vui.' },
    { word: 'leap', theme: 'actions', phonemes: ['l', 'ea', 'p'], meaningVi: 'nhảy vút qua vũng nước', emoji: '🤸', s: 'Leap joyfully across the garden puddle.', sentenceVi: 'Nhảy vút qua vũng nước mưa ngoài vườn.' }
  ],
  'f': [
    { word: 'fawn', theme: 'animals', phonemes: ['f', 'aw', 'n'], meaningVi: 'chú hươu con bé bỏng', emoji: '🦌', s: 'The baby fawn follows its gentle mother.', sentenceVi: 'Chú hươu con bé bỏng lon ton theo mẹ.' },
    { word: 'flamingo', theme: 'animals', phonemes: ['f', 'l', 'a', 'm', 'i', 'ng', 'g', 'o'], meaningVi: 'chim hồng hạc duyên dáng', emoji: '🦩', s: 'The pink flamingo stands gracefully by the lake.', sentenceVi: 'Hồng hạc lông hồng đứng duyên dáng bên hồ.' },
    { word: 'ferret', theme: 'animals', phonemes: ['f', 'e', 'rr', 'e', 't'], meaningVi: 'chồn sương tinh nghịch', emoji: '🦡', s: 'The ferret peeps out of its cozy tunnel.', sentenceVi: 'Chồn sương ngó đầu ra khỏi đường hầm ấm cúng.' },
    { word: 'forest', theme: 'nature', phonemes: ['f', 'or', 'e', 's', 't'], meaningVi: 'khu rừng xanh bạt ngàn', emoji: '🌲', s: 'Tall pine trees shelter the peaceful forest.', sentenceVi: 'Những rặng thông cao che chở khu rừng bình yên.' },
    { word: 'flower', theme: 'nature', phonemes: ['f', 'l', 'ow', 'er'], meaningVi: 'đóa hoa tươi thắm', emoji: '🌸', s: 'A colorful flower blooms under morning sun.', sentenceVi: 'Đóa hoa rực rỡ khoe sắc dưới nắng ban mai.' },
    { word: 'feather', theme: 'nature', phonemes: ['f', 'e', 'th', 'er'], meaningVi: 'chiếc lông vũ êm ái', emoji: '🪶', s: 'A soft blue feather drifts down from a bird.', sentenceVi: 'Chiếc lông vũ xanh biếc êm ái rơi từ cánh chim.' },
    { word: 'frost', theme: 'nature', phonemes: ['f', 'r', 'o', 's', 't'], meaningVi: 'lớp sương giá lấp lánh', emoji: '❄️', s: 'Sparkling frost covers winter windowpanes.', sentenceVi: 'Lớp sương giá lấp lánh phủ trên ô cửa mùa đông.' },
    { word: 'flute', theme: 'objects_food', phonemes: ['f', 'l', 'u_e', 't'], meaningVi: 'cây sáo trúc ngân vang', emoji: '🪈', s: 'Play soft gentle music on the wooden flute.', sentenceVi: 'Thổi những giai điệu êm dịu trên cây sáo trúc.' },
    { word: 'fruit', theme: 'objects_food', phonemes: ['f', 'r', 'ui', 't'], meaningVi: 'trái cây tươi ngọt', emoji: '🍎', s: 'A bowl of fresh sweet fruit on the table.', sentenceVi: 'Tô trái cây tươi ngọt đặt trên bàn ăn.' },
    { word: 'fork', theme: 'objects_food', phonemes: ['f', 'or', 'k'], meaningVi: 'chiếc dĩa con ăn bánh', emoji: '🍴', s: 'Use a little fork to taste the apple pie.', sentenceVi: 'Dùng chiếc dĩa nhỏ nếm thử món bánh táo.' },
    { word: 'find', theme: 'actions', phonemes: ['f', 'i_e', 'n', 'd'], meaningVi: 'tìm thấy kho báu', emoji: '🔍', s: 'Find hidden treasures on the Phonics Island.', sentenceVi: 'Tìm thấy những kho báu ẩn giấu trên Đảo Âm Vị.' },
    { word: 'float', theme: 'actions', phonemes: ['f', 'l', 'oa', 't'], meaningVi: 'nổi bồng bềnh trên nước', emoji: '⛵', s: 'Paper boats float gently on the stream.', sentenceVi: 'Thuyền giấy nổi bồng bềnh lướt nhẹ trên dòng suối.' }
  ],
  'b': [
    { word: 'butterfly', theme: 'animals', phonemes: ['b', 'u', 'tt', 'er', 'f', 'l', 'y'], meaningVi: 'chú bướm rực rỡ', emoji: '🦋', s: 'A yellow butterfly flutters among flowers.', sentenceVi: 'Chú bướm vàng bay rập rờn giữa muôn hoa.' },
    { word: 'bunny', theme: 'animals', phonemes: ['b', 'u', 'nn', 'y'], meaningVi: 'thỏ con tai dài đáng yêu', emoji: '🐰', s: 'The soft bunny hops across the garden lawn.', sentenceVi: 'Thỏ con mềm mại nhảy nhót trên bãi cỏ vườn.' },
    { word: 'beaver', theme: 'animals', phonemes: ['b', 'ea', 'v', 'er'], meaningVi: 'chú hải ly cần cù', emoji: '🦫', s: 'The industrious beaver builds a safe home.', sentenceVi: 'Hải ly cần cù xây dựng tổ ấm vững chãi.' },
    { word: 'beetle', theme: 'animals', phonemes: ['b', 'ee', 't', 'l'], meaningVi: 'bọ cánh cứng lấp lánh', emoji: '🪲', s: 'A shiny green beetle crawls up the twig.', sentenceVi: 'Bọ cánh cứng xanh biếc bò lên cành cây con.' },
    { word: 'brook', theme: 'nature', phonemes: ['b', 'r', 'oo', 'k'], meaningVi: 'con suối róc rách', emoji: '🏞️', s: 'Clear water babbles along the forest brook.', sentenceVi: 'Nước trong róc rách chảy qua con suối nhỏ.' },
    { word: 'breeze', theme: 'nature', phonemes: ['b', 'r', 'ee', 'z_e'], meaningVi: 'làn gió mát lành', emoji: '🍃', s: 'A gentle cool breeze sways the willow leaves.', sentenceVi: 'Làn gió mát lành làm đung đưa rặng liễu.' },
    { word: 'blossom', theme: 'nature', phonemes: ['b', 'l', 'o', 'ss', 'o', 'm'], meaningVi: 'nụ hoa hé nở', emoji: '🌸', s: 'Pink cherry blossoms open to the spring sky.', sentenceVi: 'Những đóa anh đào hồng hé nở đón xuân sang.' },
    { word: 'banana', theme: 'objects_food', phonemes: ['b', 'a', 'n', 'a', 'n', 'a'], meaningVi: 'quả chuối tiêu vàng', emoji: '🍌', s: 'A sweet ripe yellow banana for breakfast.', sentenceVi: 'Quả chuối vàng chín ngọt thơm ngon cho bữa sáng.' },
    { word: 'bread', theme: 'objects_food', phonemes: ['b', 'r', 'e', 'a', 'd'], meaningVi: 'ổ bánh mì nóng hổi', emoji: '🍞', s: 'Fresh crusty bread warm from the baker.', sentenceVi: 'Bánh mì nóng hổi thơm giòn từ lò nướng.' },
    { word: 'bounce', theme: 'actions', phonemes: ['b', 'ou', 'n', 's_e'], meaningVi: 'nảy tưng tưng', emoji: '🏀', s: 'Bounce the bright red ball up and down.', sentenceVi: 'Nảy quả bóng đỏ tưng tưng lên xuống thật vui.' },
    { word: 'build', theme: 'actions', phonemes: ['b', 'ui', 'l', 'd'], meaningVi: 'xây lâu đài cát', emoji: '🏰', s: 'Build a grand sandcastle on the sunny beach.', sentenceVi: 'Xây tòa lâu đài cát nguy nga trên bãi biển ngập nắng.' }
  ],

  // G4: ai, j, oa, ie, ee, or
  'ai': [
    { word: 'quail', theme: 'animals', phonemes: ['qu', 'ai', 'l'], meaningVi: 'chim cút nhỏ nhắn', emoji: '🐦', s: 'A tiny quail pecks seeds in the grass.', sentenceVi: 'Chim cút bé nhỏ mổ thóc trên thảm cỏ.' },
    { word: 'tail', theme: 'animals', phonemes: ['t', 'ai', 'l'], meaningVi: 'chiếc đuôi vẫy mừng', emoji: '🐕', s: 'The puppy wags its fluffy tail happily.', sentenceVi: 'Chú cún con vẫy chiếc đuôi xù mừng rỡ.' },
    { word: 'rain', theme: 'nature', phonemes: ['r', 'ai', 'n'], meaningVi: 'cơn mưa rào mùa hạ', emoji: '🌧️', s: 'Gentle raindrops fall on green leaves.', sentenceVi: 'Những giọt mưa dịu êm rơi trên tán lá xanh.' },
    { word: 'rainbow', theme: 'nature', phonemes: ['r', 'ai', 'n', 'b', 'ow'], meaningVi: 'cầu vồng rực rỡ', emoji: '🌈', s: 'Look at the seven-colored rainbow above.', sentenceVi: 'Hãy ngắm nhìn cầu vồng bảy sắc trên nền trời.' },
    { word: 'hail', theme: 'nature', phonemes: ['h', 'ai', 'l'], meaningVi: 'mưa đá trắng xóa', emoji: '🧊', s: 'Round white hail clatters on the tin roof.', sentenceVi: 'Những hạt mưa đá lạch cạch rơi trên mái tôn.' },
    { word: 'daisy', theme: 'nature', phonemes: ['d', 'ai', 's', 'y'], meaningVi: 'bông hoa cúc trắng', emoji: '🌼', s: 'Sweet white daisies bloom in the yard.', sentenceVi: 'Những bông cúc trắng tinh khôi nở ngoài sân.' },
    { word: 'train', theme: 'objects_food', phonemes: ['t', 'r', 'ai', 'n'], meaningVi: 'đoàn tàu hỏa đồ chơi', emoji: '🚂', s: 'The toy train chugs along its wooden tracks.', sentenceVi: 'Đoàn tàu đồ chơi xình xịch chạy trên đường ray gỗ.' },
    { word: 'pail', theme: 'objects_food', phonemes: ['p', 'ai', 'l'], meaningVi: 'chiếc xô múc nước', emoji: '🪣', s: 'Fill the blue pail with cool water.', sentenceVi: 'Múc đầy xô nước xanh mát lành.' },
    { word: 'chain', theme: 'objects_food', phonemes: ['ch', 'ai', 'n'], meaningVi: 'sợi xích xích đu', emoji: '⛓️', s: 'Hold the shiny swing chains safely.', sentenceVi: 'Nắm chắc sợi xích xích đu an toàn.' },
    { word: 'wait', theme: 'actions', phonemes: ['w', 'ai', 't'], meaningVi: 'kiên nhẫn đợi chờ', emoji: '⏳', s: 'Wait patiently for your friend to play.', sentenceVi: 'Kiên nhẫn chờ đến lượt bạn cùng chơi.' },
    { word: 'praise', theme: 'actions', phonemes: ['p', 'r', 'ai', 's_e'], meaningVi: 'khen ngợi động viên', emoji: '🌟', s: 'Praise the child for reading well.', sentenceVi: 'Khen ngợi bé yêu vì đã đọc bài thật giỏi.' }
  ],
  'j': [
    { word: 'jaguar', theme: 'animals', phonemes: ['j', 'a', 'g', 'u', 'ar'], meaningVi: 'báo đốm dũng mãnh', emoji: '🐆', s: 'The spotted jaguar walks softly in the forest.', sentenceVi: 'Báo đốm bước đi êm ru giữa rừng già.' },
    { word: 'jellyfish', theme: 'animals', phonemes: ['j', 'e', 'll', 'y', 'f', 'i', 'sh'], meaningVi: 'sứa biển trong suốt', emoji: '🪼', s: 'A glowing jellyfish pulses through the deep.', sentenceVi: 'Chú sứa phát sáng bơi nhịp nhàng dưới đại dương.' },
    { word: 'jay', theme: 'animals', phonemes: ['j', 'ay'], meaningVi: 'chim giẻ cùi xanh', emoji: '🐦', s: 'The blue jay whistles a sweet melody.', sentenceVi: 'Chim giẻ cùi xanh huýt sáo giai điệu ngọt ngào.' },
    { word: 'jungle', theme: 'nature', phonemes: ['j', 'u', 'ng', 'g', 'l'], meaningVi: 'rừng nhiệt đới rậm rạp', emoji: '🌴', s: 'Vines hang high in the green jungle.', sentenceVi: 'Dây leo buông dài trong khu rừng nhiệt đới.' },
    { word: 'jar', theme: 'objects_food', phonemes: ['j', 'ar'], meaningVi: 'hũ mứt dâu tây', emoji: '🫙', s: 'A glass jar filled with sweet strawberry jam.', sentenceVi: 'Chiếc hũ thủy tinh đựng đầy mứt dâu thơm.' },
    { word: 'jacket', theme: 'objects_food', phonemes: ['j', 'a', 'ck', 'e', 't'], meaningVi: 'áo khoác ấm cúng', emoji: '🧥', s: 'Zip up your warm red jacket.', sentenceVi: 'Kéo khóa chiếc áo khoác đỏ ấm áp.' },
    { word: 'juice', theme: 'objects_food', phonemes: ['j', 'ui', 'c_e'], meaningVi: 'ly nước cam ép', emoji: '🧃', s: 'Drink freshly squeezed orange juice.', sentenceVi: 'Thưởng thức ly nước cam ép tươi mát.' },
    { word: 'jelly', theme: 'objects_food', phonemes: ['j', 'e', 'll', 'y'], meaningVi: 'thạch trái cây núng nính', emoji: '🍮', s: 'Wobbly fruit jelly on the dessert plate.', sentenceVi: 'Miếng thạch hoa quả núng nính trên đĩa tráng miệng.' },
    { word: 'jump', theme: 'actions', phonemes: ['j', 'u', 'm', 'p'], meaningVi: 'nhảy cao tưng bừng', emoji: '🦘', s: 'Jump high with joy on the grass.', sentenceVi: 'Nhảy cao tưng bừng đầy niềm vui trên thảm cỏ.' },
    { word: 'juggle', theme: 'actions', phonemes: ['j', 'u', 'gg', 'l'], meaningVi: 'tung hứng bóng khéo léo', emoji: '🤹', s: 'Juggle three soft balls in the air.', sentenceVi: 'Tung hứng ba quả bóng mềm khéo léo trên không.' }
  ],
  'oa': [
    { word: 'foal', theme: 'animals', phonemes: ['f', 'oa', 'l'], meaningVi: 'ngựa con mới sinh', emoji: '🐴', s: 'A gentle foal trots beside its mother.', sentenceVi: 'Chú ngựa con lon ton chạy bên mẹ hiền.' },
    { word: 'boar', theme: 'animals', phonemes: ['b', 'oa', 'r'], meaningVi: 'heo rừng dũng mãnh', emoji: '🐗', s: 'The wild boar forages for acorns.', sentenceVi: 'Heo rừng kiếm hạt sồi thơm dưới gốc cây.' },
    { word: 'coast', theme: 'nature', phonemes: ['c', 'oa', 's', 't'], meaningVi: 'bờ biển cát vàng', emoji: '🏖️', s: 'Waves crash softly along the rocky coast.', sentenceVi: 'Sóng vỗ êm đềm dọc bờ biển đá.' },
    { word: 'foam', theme: 'nature', phonemes: ['f', 'oa', 'm'], meaningVi: 'bọt biển trắng xóa', emoji: '🫧', s: 'White sea foam washes over our toes.', sentenceVi: 'Bọt biển trắng xóa mơn man đôi bàn chân bé.' },
    { word: 'boat', theme: 'objects_food', phonemes: ['b', 'oa', 't'], meaningVi: 'con thuyền buồm nhỏ', emoji: '⛵', s: 'The little boat sails across the blue lake.', sentenceVi: 'Con thuyền nhỏ giương buồm lướt trên hồ biếc.' },
    { word: 'coat', theme: 'objects_food', phonemes: ['c', 'oa', 't'], meaningVi: 'áo khoác mùa đông', emoji: '🧥', s: 'Button your cozy coat before going outside.', sentenceVi: 'Cài cúc áo khoác ấm trước khi ra ngoài chơi.' },
    { word: 'toast', theme: 'objects_food', phonemes: ['t', 'oa', 's', 't'], meaningVi: 'bánh mì nướng giòn rụm', emoji: '🍞', s: 'Spread golden butter on warm toast.', sentenceVi: 'Quết bơ vàng óng lên lát bánh mì nướng thơm.' },
    { word: 'roam', theme: 'actions', phonemes: ['r', 'oa', 'm'], meaningVi: 'rong chơi tự do', emoji: '🚶', s: 'Roam freely through the sunny hills.', sentenceVi: 'Rong chơi tự do qua những ngọn đồi ngập nắng.' },
    { word: 'float', theme: 'actions', phonemes: ['f', 'l', 'oa', 't'], meaningVi: 'thả nổi nhẹ nhàng', emoji: '🛟', s: 'Float on the calm pond water.', sentenceVi: 'Thả nổi nhẹ nhàng trên mặt nước ao êm đềm.' }
  ],
  'ie': [
    { word: 'magpie', theme: 'animals', phonemes: ['m', 'a', 'g', 'p', 'ie'], meaningVi: 'chim ác là thông minh', emoji: '🐦', s: 'The black and white magpie nests high.', sentenceVi: 'Chim ác là đen trắng xây tổ trên ngọn cây cao.' },
    { word: 'firefly', theme: 'animals', phonemes: ['f', 'i_e', 'r', 'f', 'l', 'y'], meaningVi: 'đom đóm phát sáng', emoji: '✨', s: 'Fireflies light up the summer garden.', sentenceVi: 'Những chú đom đóm thắp sáng khu vườn đêm hè.' },
    { word: 'skies', theme: 'nature', phonemes: ['s', 'k', 'ie', 's'], meaningVi: 'bầu trời quang đãng', emoji: '🌌', s: 'Blue skies greet the morning sunshine.', sentenceVi: 'Bầu trời xanh quang đãng đón ánh bình minh.' },
    { word: 'pie', theme: 'objects_food', phonemes: ['p', 'ie'], meaningVi: 'bánh nướng nhân táo', emoji: '🥧', s: 'A sweet apple pie baked with cinnamon.', sentenceVi: 'Bánh táo nướng thơm lừng hương quế.' },
    { word: 'tie', theme: 'objects_food', phonemes: ['t', 'ie'], meaningVi: 'cà vạt lễ phục', emoji: '👔', s: 'Daddy wears a handsome striped tie.', sentenceVi: 'Bố đeo chiếc cà vạt kẻ sọc lịch sự.' },
    { word: 'cries', theme: 'actions', phonemes: ['c', 'r', 'ie', 's'], meaningVi: 'tiếng chim non ríu rít', emoji: '🐣', s: 'The baby chick cries for its mother.', sentenceVi: 'Chú gà con cất tiếng ríu rít gọi mẹ.' },
    { word: 'tries', theme: 'actions', phonemes: ['t', 'r', 'ie', 's'], meaningVi: 'cố gắng kiên trì', emoji: '💪', s: 'Leo tries hard to blend every sound.', sentenceVi: 'Leo cố gắng kiên trì ghép từng âm vị.' }
  ],
  'ee': [
    { word: 'sheep', theme: 'animals', phonemes: ['sh', 'ee', 'p'], meaningVi: 'chú cừu lông trắng bông', emoji: '🐑', s: 'The white sheep grazes on the green hillside.', sentenceVi: 'Chú cừu trắng thong dong gặm cỏ bên sườn đồi.' },
    { word: 'deer', theme: 'animals', phonemes: ['d', 'ee', 'r'], meaningVi: 'chú hươu rừng hiền lành', emoji: '🦌', s: 'A shy deer peers through the trees.', sentenceVi: 'Chú hươu hiền lành ngơ ngác nhìn qua tán cây.' },
    { word: 'eel', theme: 'animals', phonemes: ['ee', 'l'], meaningVi: 'chú lươn biển bơi lượn', emoji: '🐟', s: 'The silver eel slips through the corals.', sentenceVi: 'Chú lươn bạc trườn êm qua rạn san hô.' },
    { word: 'cheetah', theme: 'animals', phonemes: ['ch', 'ee', 't', 'a'], meaningVi: 'báo đốm săn mồi nhanh', emoji: '🐆', s: 'The cheetah runs like a swift wind.', sentenceVi: 'Báo săn cheetah lao nhanh như một cơn gió.' },
    { word: 'tree', theme: 'nature', phonemes: ['t', 'r', 'ee'], meaningVi: 'cây đại thụ xanh mát', emoji: '🌳', s: 'A tall green tree gives peaceful shade.', sentenceVi: 'Cây đại thụ tỏa bóng râm mát rượi.' },
    { word: 'seed', theme: 'nature', phonemes: ['s', 'ee', 'd'], meaningVi: 'hạt mầm hé nở', emoji: '🌱', s: 'Water the tiny seed to watch it sprout.', sentenceVi: 'Tưới nước cho hạt mầm bé nhỏ nhú chồi xanh.' },
    { word: 'wheel', theme: 'objects_food', phonemes: ['wh', 'ee', 'l'], meaningVi: 'bánh xe đồ chơi', emoji: '🛞', s: 'The wooden cart wheel rolls around smoothly.', sentenceVi: 'Bánh xe bò gỗ lăn tròn êm ái.' },
    { word: 'jeep', theme: 'objects_food', phonemes: ['j', 'ee', 'p'], meaningVi: 'xe địa hình mạnh mẽ', emoji: '🚙', s: 'A bright yellow jeep drives along safari tracks.', sentenceVi: 'Chiếc xe jeep vàng bon bon trên đường dã ngoại.' },
    { word: 'cheese', theme: 'objects_food', phonemes: ['ch', 'ee', 's_e'], meaningVi: 'miếng phô mai béo ngậy', emoji: '🧀', s: 'Yellow cheese slices are yummy on bread.', sentenceVi: 'Những lát phô mai vàng béo ngậy kẹp bánh mì.' },
    { word: 'sleep', theme: 'actions', phonemes: ['s', 'l', 'ee', 'p'], meaningVi: 'ngủ say giấc nồng', emoji: '💤', s: 'Sleep soundly under the star-lit sky.', sentenceVi: 'Ngủ say giấc nồng dưới bầu trời đầy sao.' },
    { word: 'see', theme: 'actions', phonemes: ['s', 'ee'], meaningVi: 'nhìn ngắm thế giới', emoji: '👀', s: 'I see a flying bird with colorful wings.', sentenceVi: 'Bé nhìn thấy cánh chim sắc màu chao liệng.' }
  ],
  'or': [
    { word: 'stork', theme: 'animals', phonemes: ['s', 't', 'or', 'k'], meaningVi: 'chim cò trắng sải cánh', emoji: '🪶', s: 'A white stork flies home to its rooftop nest.', sentenceVi: 'Chim cò trắng sải cánh bay về tổ trên mái nhà.' },
    { word: 'horse', theme: 'animals', phonemes: ['h', 'or', 's_e'], meaningVi: 'chú ngựa phi dũng mãnh', emoji: '🐎', s: 'The brown horse gallops across the open field.', sentenceVi: 'Chú ngựa nâu phi nước đại qua cánh đồng rộng.' },
    { word: 'thorn', theme: 'nature', phonemes: ['th', 'or', 'n'], meaningVi: 'gai hoa hồng nhọn', emoji: '🌹', s: 'Watch out for little thorns on rose stems.', sentenceVi: 'Cẩn thận với những chiếc gai nhỏ trên cành hoa hồng.' },
    { word: 'storm', theme: 'nature', phonemes: ['s', 't', 'or', 'm'], meaningVi: 'cơn bão sấm chớp', emoji: '⛈️', s: 'After the storm, the sunshine returns bright.', sentenceVi: 'Sau cơn giông bão, ánh nắng lại bừng sáng.' },
    { word: 'north', theme: 'nature', phonemes: ['n', 'or', 'th'], meaningVi: 'hướng bắc địa bàn', emoji: '🧭', s: 'The compass needle points straight to the north.', sentenceVi: 'Kim la bàn luôn chỉ thẳng về phương bắc.' },
    { word: 'torch', theme: 'objects_food', phonemes: ['t', 'or', 'ch'], meaningVi: 'ngọn đuốc soi sáng', emoji: '🔦', s: 'The explorer lights the path with a bright torch.', sentenceVi: 'Nhà thám hiểm soi đường bằng ngọn đuốc sáng.' },
    { word: 'cord', theme: 'objects_food', phonemes: ['c', 'or', 'd'], meaningVi: 'dây thừng bện chắc', emoji: '🪢', s: 'Tie the wooden parcel with strong cord.', sentenceVi: 'Buộc bọc quà bằng sợi dây bện chắc chắn.' },
    { word: 'corn', theme: 'objects_food', phonemes: ['c', 'or', 'n'], meaningVi: 'bắp ngô nướng vàng', emoji: '🌽', s: 'Sweet roasted corn smells wonderful.', sentenceVi: 'Bắp ngô nướng vàng ươm tỏa hương ngào ngạt.' },
    { word: 'soar', theme: 'actions', phonemes: ['s', 'oa', 'r'], meaningVi: 'bay lượn trên cao', emoji: '🦅', s: 'Eagles soar high into the endless blue sky.', sentenceVi: 'Đại bàng bay lượn trên nền trời xanh thẳm.' },
    { word: 'roar', theme: 'actions', phonemes: ['r', 'oa', 'r'], meaningVi: 'tiếng gầm sư tử', emoji: '🦁', s: 'Leo the friendly lion roars with joy.', sentenceVi: 'Sư tử Leo gầm lên khúc ca vui vẻ.' }
  ]
};

// Merge PHONEME_WORDS_DATABASE into MASTER_WORD_BANK
for (const [phId, items] of Object.entries(PHONEME_WORDS_DATABASE)) {
  const meta = PHONEME_META[phId];
  if (!meta) continue;

  items.forEach((item, idx) => {
    const wordKey = item.word.toLowerCase();
    const dedupKey = `${phId}_${wordKey}`;
    if (seenWords.has(dedupKey)) return;

    const visual = existingVisuals[wordKey] || CURATED_NEW_VISUALS[wordKey] || {
      url: `/assets/ehon/theme_${item.theme}.jpg`,
      type: 'ehon',
      alt: `Tranh Ehon minh họa từ ${item.word}`
    };

    MASTER_WORD_BANK.push({
      id: `wb_${phId}_${wordKey}_${idx + 20}`,
      word: item.word,
      phonemeId: phId,
      group: meta.group,
      stage: meta.stage,
      phonemes: item.phonemes,
      theme: item.theme,
      meaningVi: item.meaningVi,
      emoji: item.emoji,
      sampleSentence: item.s,
      sampleSentenceVi: item.vi || item.sentenceVi || 'Câu ví dụ sinh động.',
      visual: visual
    });
    seenWords.add(dedupKey);
  });
}

// Ensure Groups 5, 6, 7 also have rich datasets across 4 themes
const GROUP_5_6_7_WORDS = {
  // G5: z, w, ng, v, oo_short, oo_long
  'z': [
    { word: 'zebra', theme: 'animals', phonemes: ['z', 'e', 'b', 'r', 'a'], meaningVi: 'chú ngựa vằn sọc trắng đen', emoji: '🦓', s: 'The zebra grazes peacefully on savanna plains.', vi: 'Ngựa vằn gặm cỏ yên bình trên thảo nguyên.' },
    { word: 'zebu', theme: 'animals', phonemes: ['z', 'e', 'b', 'u'], meaningVi: 'bò u Ấn Độ', emoji: '🐂', s: 'The humped zebu walks slowly in the field.', vi: 'Bò u thong thả dạo bước trên cánh đồng.' },
    { word: 'blizzard', theme: 'nature', phonemes: ['b', 'l', 'i', 'zz', 'ar', 'd'], meaningVi: 'bão tuyết trắng trời', emoji: '🌨️', s: 'Stay warm inside during a winter blizzard.', vi: 'Ở trong nhà ấm cúng khi ngoài trời bão tuyết.' },
    { word: 'zipper', theme: 'objects_food', phonemes: ['z', 'i', 'pp', 'er'], meaningVi: 'khóa kéo áo ấm', emoji: '🤐', s: 'Pull the coat zipper all the way up.', vi: 'Kéo khóa áo khoác lên cao cho thật ấm.' },
    { word: 'zucchini', theme: 'objects_food', phonemes: ['z', 'u', 'c', 'h', 'i', 'n', 'i'], meaningVi: 'quả bí ngòi xanh', emoji: '🥒', s: 'Slice fresh green zucchini for our dinner.', vi: 'Cắt lát quả bí ngòi xanh tươi cho bữa tối.' },
    { word: 'zip', theme: 'actions', phonemes: ['z', 'i', 'p'], meaningVi: 'kéo khóa gọn gàng', emoji: '🎒', s: 'Zip up your school backpack carefully.', vi: 'Kéo khóa ba lô đi học thật cẩn thận.' },
    { word: 'zoom', theme: 'actions', phonemes: ['z', 'oo', 'm'], meaningVi: 'phóng nhanh vùn vụt', emoji: '🏎️', s: 'The toy car zooms across the polished floor.', vi: 'Chiếc xe đồ chơi phóng vùn vụt trên sàn bóng.' }
  ],
  'w': [
    { word: 'wolf', theme: 'animals', phonemes: ['w', 'oo', 'l', 'f'], meaningVi: 'chú sói xám dũng cảm', emoji: '🐺', s: 'The gray wolf howls gently at the moon.', vi: 'Chú sói xám cất tiếng hú dưới ánh trăng.' },
    { word: 'whale', theme: 'animals', phonemes: ['wh', 'a_e', 'l'], meaningVi: 'cá voi khổng lồ hiền hòa', emoji: '🐋', s: 'A blue whale spouts misty water into the air.', vi: 'Cá voi xanh phun cột nước mát lên không trung.' },
    { word: 'walrus', theme: 'animals', phonemes: ['w', 'al', 'r', 'u', 's'], meaningVi: 'hải mã ngà dài', emoji: '🦭', s: 'The tusked walrus rests on floating ice.', vi: 'Hải mã với cặp ngà dài nằm nghỉ trên tảng băng.' },
    { word: 'woodpecker', theme: 'animals', phonemes: ['w', 'oo', 'd', 'p', 'e', 'ck', 'er'], meaningVi: 'chim gõ kiến cần cù', emoji: '🐦', s: 'The woodpecker taps rhythmically on the bark.', vi: 'Chim gõ kiến gõ nhịp nhàng trên vỏ cây.' },
    { word: 'worm', theme: 'animals', phonemes: ['w', 'ur', 'm'], meaningVi: 'chú giun đất xốp đất', emoji: '🪱', s: 'A tiny earthworm wiggles through garden soil.', vi: 'Chú giun đất uốn lượn làm tơi xốp đất vườn.' },
    { word: 'wind', theme: 'nature', phonemes: ['w', 'i', 'n', 'd'], meaningVi: 'làn gió thổi mát rượi', emoji: '💨', s: 'The autumn wind blows golden leaves away.', vi: 'Làn gió thu thổi bay những chiếc lá vàng.' },
    { word: 'wave', theme: 'nature', phonemes: ['w', 'a_e', 'v'], meaningVi: 'ngọn sóng biển lăn tăn', emoji: '🌊', s: 'Gentle waves splash onto the sandy beach.', vi: 'Những ngọn sóng vỗ nhẹ vào bãi cát vàng.' },
    { word: 'water', theme: 'nature', phonemes: ['w', 'a', 't', 'er'], meaningVi: 'nguồn nước trong lành', emoji: '💧', s: 'Drink fresh clean water every day.', vi: 'Uống nước tinh khiết mỗi ngày cho khỏe mạnh.' },
    { word: 'woods', theme: 'nature', phonemes: ['w', 'oo', 'd', 'z'], meaningVi: 'khu rừng xanh bình yên', emoji: '🌳', s: 'Take a quiet peaceful walk in the woods.', vi: 'Dạo bước thanh bình trong khu rừng xanh thẳm.' },
    { word: 'wagon', theme: 'objects_food', phonemes: ['w', 'a', 'g', 'o', 'n'], meaningVi: 'chiếc xe cút kít đỏ', emoji: '🛒', s: 'Fill the red wagon with wooden toy blocks.', vi: 'Chất đầy các khối gỗ đồ chơi vào chiếc xe kéo đỏ.' },
    { word: 'whistle', theme: 'objects_food', phonemes: ['wh', 'i', 's', 'l'], meaningVi: 'chiếc còi thổi vang', emoji: '🪈', s: 'Blow the train whistle with a cheerful tweet.', vi: 'Thổi chiếc còi tàu với tiếng vang rộn rã.' },
    { word: 'watch', theme: 'objects_food', phonemes: ['w', 'o', 'tch'], meaningVi: 'chiếc đồng hồ đeo tay', emoji: '⌚', s: 'Look at the little hands on the watch.', vi: 'Ngắm nhìn những chiếc kim nhỏ trên đồng hồ.' },
    { word: 'watermelon', theme: 'objects_food', phonemes: ['w', 'a', 't', 'er', 'm', 'e', 'l', 'o', 'n'], meaningVi: 'quả dưa hấu đỏ mọng', emoji: '🍉', s: 'Sweet juicy watermelon slices for summer.', vi: 'Những miếng dưa hấu đỏ mọng ngọt ngào ngày hè.' },
    { word: 'walk', theme: 'actions', phonemes: ['w', 'al', 'k'], meaningVi: 'đi dạo thư thái', emoji: '🚶', s: 'Walk happily through the flower meadow.', vi: 'Đi dạo vui tươi qua đồng cỏ ngập tràn hoa.' },
    { word: 'wash', theme: 'actions', phonemes: ['w', 'o', 'sh'], meaningVi: 'rửa tay sạch sẽ', emoji: '🧼', s: 'Wash your hands with bubbly fragrant soap.', vi: 'Rửa sạch bàn tay bằng xà phòng thơm nức.' }
  ],
  'ng': [
    { word: 'wing', theme: 'animals', phonemes: ['w', 'i', 'ng'], meaningVi: 'đôi cánh chim vỗ nhẹ', emoji: '🪶', s: 'The bluebird spreads its colorful wings.', vi: 'Chú chim xanh dang rộng đôi cánh sắc màu.' },
    { word: 'fang', theme: 'animals', phonemes: ['f', 'a', 'ng'], meaningVi: 'răng nanh hổ dũng mãnh', emoji: '🐯', s: 'The playful kitten shows tiny white fangs.', vi: 'Mèo con tinh nghịch để lộ chiếc răng nanh nhỏ.' },
    { word: 'spring', theme: 'nature', phonemes: ['s', 'p', 'r', 'i', 'ng'], meaningVi: 'mùa xuân hoa nở rộ', emoji: '🌷', s: 'Spring brings warm rain and blooming daisies.', vi: 'Mùa xuân mang mưa ấm và hoa cúc nở rộ.' },
    { word: 'ring', theme: 'objects_food', phonemes: ['r', 'i', 'ng'], meaningVi: 'chiếc nhẫn vàng lấp lánh', emoji: '💍', s: 'A shiny golden ring sparkles in the box.', vi: 'Chiếc nhẫn vàng lấp lánh trong hộp nhung.' },
    { word: 'swing', theme: 'objects_food', phonemes: ['s', 'w', 'i', 'ng'], meaningVi: 'chiếc xích đu ngoài vườn', emoji: '🛝', s: 'Fly high up on the garden swing.', vi: 'Bay cao trên chiếc xích đu ngoài vườn hoa.' },
    { word: 'string', theme: 'objects_food', phonemes: ['s', 't', 'r', 'i', 'ng'], meaningVi: 'sợi dây gai thả diều', emoji: '🪁', s: 'Hold the kite string tight in the wind.', vi: 'Giữ chặt dây diều bay lượn trong gió.' },
    { word: 'song', theme: 'objects_food', phonemes: ['s', 'o', 'ng'], meaningVi: 'khúc ca ngọt ngào', emoji: '🎵', s: 'Sing a lovely lullaby song before sleep.', vi: 'Hát khúc ca ru êm dịu trước giờ đi ngủ.' },
    { word: 'sing', theme: 'actions', phonemes: ['s', 'i', 'ng'], meaningVi: 'hát vang rộn rã', emoji: '🎤', s: 'Birds sing together in morning branches.', vi: 'Đàn chim ríu rít ca hát trên cành sớm mai.' },
    { word: 'bring', theme: 'actions', phonemes: ['b', 'r', 'i', 'ng'], meaningVi: 'mang bánh đến chia sẻ', emoji: '🎁', s: 'Bring fresh cookies to share with pals.', vi: 'Mang bánh quy thơm đến chia cùng các bạn.' }
  ],
  'v': [
    { word: 'viper', theme: 'animals', phonemes: ['v', 'i_e', 'p', 'er'], meaningVi: 'chú rắn lục hiền hòa', emoji: '🐍', s: 'The viper rests on a warm sunlit stone.', vi: 'Chú rắn lục nằm nghỉ trên tảng đá ấm áp.' },
    { word: 'vulture', theme: 'animals', phonemes: ['v', 'u', 'l', 't', 'ur_e'], meaningVi: 'chim kền kền sải cánh', emoji: '🦅', s: 'A vulture circles high above the canyon.', vi: 'Kền kền lượn vòng trên hẻm núi hùng vĩ.' },
    { word: 'vole', theme: 'animals', phonemes: ['v', 'o_e', 'l'], meaningVi: 'chuột đồng đào hang', emoji: '🐭', s: 'The field vole gathers seeds for its burrow.', vi: 'Chuột đồng thu gom hạt giống về tổ ấm.' },
    { word: 'vine', theme: 'nature', phonemes: ['v', 'i_e', 'n'], meaningVi: 'dây leo nho xanh biếc', emoji: '🍇', s: 'Green grape vines climb along the wooden trellis.', vi: 'Những giàn nho xanh leo trên hàng rào gỗ.' },
    { word: 'valley', theme: 'nature', phonemes: ['v', 'a', 'll', 'ey'], meaningVi: 'thung lũng xanh mướt', emoji: '🏞️', s: 'A peaceful river flows through the green valley.', vi: 'Dòng sông êm đềm chảy qua thung lũng xanh.' },
    { word: 'volcano', theme: 'nature', phonemes: ['v', 'o', 'l', 'c', 'a', 'n', 'o'], meaningVi: 'ngọn núi lửa hùng vĩ', emoji: '🌋', s: 'Smoke rises gently from the distant volcano.', vi: 'Làn khói mỏng bốc lên từ ngọn núi lửa phía xa.' },
    { word: 'vase', theme: 'objects_food', phonemes: ['v', 'a_e', 's'], meaningVi: 'bình hoa sứ trang nhã', emoji: '🏺', s: 'Put fresh yellow daisies in the ceramic vase.', vi: 'Cắm những bông cúc vàng vào bình hoa sứ.' },
    { word: 'violin', theme: 'objects_food', phonemes: ['v', 'i', 'o', 'l', 'i', 'n'], meaningVi: 'cây đàn vĩ cầm du dương', emoji: '🎻', s: 'Listen to gentle tunes on the wooden violin.', vi: 'Lắng nghe giai điệu du dương trên cây đàn vĩ cầm.' },
    { word: 'vest', theme: 'objects_food', phonemes: ['v', 'e', 's', 't'], meaningVi: 'chiếc áo gi-lê len', emoji: '🦺', s: 'Wear a cozy knitted vest for school.', vi: 'Mặc chiếc áo gi-lê len ấm áp đến trường.' },
    { word: 'van', theme: 'objects_food', phonemes: ['v', 'a', 'n'], meaningVi: 'xe tải nhỏ chở hoa', emoji: '🚐', s: 'A blue van delivers fresh flowers to our town.', vi: 'Chiếc xe tải xanh chở hoa tươi về thị trấn.' },
    { word: 'visit', theme: 'actions', phonemes: ['v', 'i', 's', 'i', 't'], meaningVi: 'đến thăm ông bà', emoji: '🏡', s: 'Visit grandma and bake apple cookies together.', vi: 'Đến thăm bà và cùng nướng bánh quy táo.' },
    { word: 'view', theme: 'actions', phonemes: ['v', 'iew'], meaningVi: 'ngắm nhìn phong cảnh', emoji: '🌅', s: 'View the sunset from the top of the hill.', vi: 'Ngắm nhìn hoàng hôn rực rỡ từ đỉnh đồi.' }
  ],
  'oo_short': [
    { word: 'brook', theme: 'nature', phonemes: ['b', 'r', 'oo', 'k'], meaningVi: 'con suối nhỏ trong vắt', emoji: '🏞️', s: 'Water babbles gently through the forest brook.', vi: 'Nước trong róc rách chảy qua con suối nhỏ.' },
    { word: 'wood', theme: 'nature', phonemes: ['w', 'oo', 'd'], meaningVi: 'khúc gỗ thơm mùi rừng', emoji: '🪵', s: 'Craft a toy animal from smooth wood.', vi: 'Khắc một bạn thú đồ chơi từ khúc gỗ mịn.' },
    { word: 'foot', theme: 'nature', phonemes: ['f', 'oo', 't'], meaningVi: 'bàn chân nhỏ xinh', emoji: '🦶', s: 'Dip your bare foot in the refreshing pool.', vi: 'Nhúng bàn chân nhỏ vào làn nước mát lành.' },
    { word: 'wool', theme: 'objects_food', phonemes: ['w', 'oo', 'l'], meaningVi: 'cuộn len ấm mềm', emoji: '🧶', s: 'Knit warm mittens from soft white wool.', vi: 'Đan găng tay ấm từ cuộn len trắng mềm.' },
    { word: 'hood', theme: 'objects_food', phonemes: ['h', 'oo', 'd'], meaningVi: 'mũ trùm áo khoác', emoji: '🧥', s: 'Pull the warm hood over your head.', vi: 'Kéo mũ trùm đầu của áo khoác lên cho ấm.' },
    { word: 'hook', theme: 'objects_food', phonemes: ['h', 'oo', 'k'], meaningVi: 'móc treo áo mũ', emoji: '🪝', s: 'Hang your school bag on the wooden hook.', vi: 'Treo cặp sách lên chiếc móc gỗ gọn gàng.' },
    { word: 'cook', theme: 'actions', phonemes: ['c', 'oo', 'k'], meaningVi: 'nấu bữa cơm thơm', emoji: '🍳', s: 'Help daddy cook healthy vegetable soup.', vi: 'Giúp bố nấu món súp rau củ thơm ngon.' },
    { word: 'look', theme: 'actions', phonemes: ['l', 'oo', 'k'], meaningVi: 'nhìn ngắm chú bướm', emoji: '👀', s: 'Look at the sparkling butterfly wings.', vi: 'Nhìn ngắm đôi cánh bướm lấp lánh sắc màu.' }
  ],
  'oo_long': [
    { word: 'goose', theme: 'animals', phonemes: ['g', 'oo', 's_e'], meaningVi: 'chú ngỗng trắng bơi', emoji: '🪿', s: 'The white goose honks happily by the pond.', vi: 'Chú ngỗng trắng kêu cạp cạp vui vẻ bên bờ ao.' },
    { word: 'moose', theme: 'animals', phonemes: ['m', 'oo', 's_e'], meaningVi: 'chú nai sừng tấm rừng sâu', emoji: '🫎', s: 'The majestic moose wades into the lake.', vi: 'Nai sừng tấm sừng sững lội qua hồ nước.' },
    { word: 'rooster', theme: 'animals', phonemes: ['r', 'oo', 's', 't', 'er'], meaningVi: 'chú gà trống oai vệ', emoji: '🐓', s: 'The rooster crows to welcome the sunshine.', vi: 'Gà trống cất tiếng gáy đón ánh bình minh.' },
    { word: 'kangaroo', theme: 'animals', phonemes: ['k', 'a', 'ng', 'g', 'a', 'r', 'oo'], meaningVi: 'chuột túi mẹ con', emoji: '🦘', s: 'A baby kangaroo rides inside mom’s pouch.', vi: 'Chuột túi con nằm ấm trong túi mẹ.' },
    { word: 'moon', theme: 'nature', phonemes: ['m', 'oo', 'n'], meaningVi: 'vầng trăng tròn vành vạnh', emoji: '🌕', s: 'The silver moon glows in the night sky.', vi: 'Vầng trăng bạc tỏa sáng trên bầu trời đêm.' },
    { word: 'bloom', theme: 'nature', phonemes: ['b', 'l', 'oo', 'm'], meaningVi: 'bông hoa nở rộ', emoji: '🌸', s: 'Spring blossoms bloom across the orchard.', vi: 'Những nụ hoa xuân nở rộ khắp vườn cây.' },
    { word: 'pool', theme: 'nature', phonemes: ['p', 'oo', 'l'], meaningVi: 'hồ bơi nước trong', emoji: '🏊', s: 'Splash cool water in the swimming pool.', vi: 'Té nước mát rượi trong bể bơi ngày hè.' },
    { word: 'broom', theme: 'objects_food', phonemes: ['b', 'r', 'oo', 'm'], meaningVi: 'chiếc chổi rơm quét nhà', emoji: '🧹', s: 'Sweep the kitchen floor with a straw broom.', vi: 'Quét sàn bếp sạch sẽ bằng chiếc chổi rơm.' },
    { word: 'spoon', theme: 'objects_food', phonemes: ['s', 'p', 'oo', 'n'], meaningVi: 'chiếc thìa xúc súp', emoji: '🥄', s: 'Eat warm pumpkin soup with your spoon.', vi: 'Dùng thìa xúc từng ngụm súp bí đỏ ấm nóng.' },
    { word: 'boot', theme: 'objects_food', phonemes: ['b', 'oo', 't'], meaningVi: 'đôi ủng đi mưa đỏ', emoji: '🥾', s: 'Splash in puddles wearing yellow boots.', vi: 'Nhảy vũng nước với đôi ủng vàng rực rỡ.' },
    { word: 'zoom', theme: 'actions', phonemes: ['z', 'oo', 'm'], meaningVi: 'phóng vút trên không', emoji: '🚀', s: 'Rockets zoom up toward outer space.', vi: 'Tàu con thoi phóng vút lên vũ trụ bao la.' }
  ],

  // G6: y, x, ch, sh, th_unvoiced, th_voiced
  'y': [
    { word: 'yak', theme: 'animals', phonemes: ['y', 'a', 'k'], meaningVi: 'bò Tây Tạng lông dài', emoji: '🐂', s: 'The shaggy yak walks on the snowy mountain.', vi: 'Bò Tây Tạng lông dài dạo bước trên núi tuyết.' },
    { word: 'yellowhammer', theme: 'animals', phonemes: ['y', 'e', 'll', 'ow', 'h', 'a', 'm', 'er'], meaningVi: 'chim sẻ vàng líu lo', emoji: '🐦', s: 'The yellowhammer whistles in the hedgerow.', vi: 'Chim sẻ vàng líu lo trong bụi cây xanh.' },
    { word: 'yard', theme: 'nature', phonemes: ['y', 'ar', 'd'], meaningVi: 'khoảng sân ngập hoa', emoji: '🏡', s: 'Children play ball in the sunny yard.', vi: 'Các bạn nhỏ chơi bóng trong khoảng sân rợp nắng.' },
    { word: 'yam', theme: 'objects_food', phonemes: ['y', 'a', 'm'], meaningVi: 'củ khoai lang ngọt', emoji: '🍠', s: 'Baked sweet yams smell wonderfully warm.', vi: 'Khoai lang nướng thơm lừng ấm áp ngày đông.' },
    { word: 'yarn', theme: 'objects_food', phonemes: ['y', 'ar', 'n'], meaningVi: 'cuộn len nhiều màu', emoji: '🧶', s: 'The kitten plays with a ball of red yarn.', vi: 'Chú mèo con vờn cuộn len đỏ mềm mại.' },
    { word: 'yacht', theme: 'objects_food', phonemes: ['y', 'o', 't'], meaningVi: 'du thuyền buồm trắng', emoji: '🛥️', s: 'A sleek white yacht sails across the bay.', vi: 'Chiếc du thuyền trắng muốt lướt trên vịnh.' },
    { word: 'yo-yo', theme: 'objects_food', phonemes: ['y', 'o', 'y', 'o'], meaningVi: 'con quay yo-yo', emoji: '🪀', s: 'Spin the colorful yo-yo up and down.', vi: 'Thả con quay yo-yo lên xuống thật khéo.' },
    { word: 'yogurt', theme: 'objects_food', phonemes: ['y', 'o', 'g', 'ur', 't'], meaningVi: 'hũ sữa chua dâu', emoji: '🥣', s: 'Creamy strawberry yogurt with honey.', vi: 'Sữa chua dâu tây béo ngậy ngọt vị mật ong.' },
    { word: 'yolk', theme: 'objects_food', phonemes: ['y', 'o_e', 'k'], meaningVi: 'lòng đỏ trứng gà', emoji: '🍳', s: 'A bright yellow yolk in the center of the egg.', vi: 'Lòng đỏ trứng tròn xoe vàng ươm.' },
    { word: 'yawn', theme: 'actions', phonemes: ['y', 'aw', 'n'], meaningVi: 'ngáp ngủ đáng yêu', emoji: '🥱', s: 'The sleepy puppy gives a wide yawn.', vi: 'Chú cún con buồn ngủ ngáp một cái thật to.' }
  ],
  'x': [
    { word: 'lynx', theme: 'animals', phonemes: ['l', 'y', 'n', 'x'], meaningVi: 'mèo rừng linh miêu', emoji: '🐱', s: 'A wild lynx pads softly through deep snow.', vi: 'Linh miêu rừng bước đi êm ru trên tuyết dày.' },
    { word: 'ox', theme: 'animals', phonemes: ['o', 'x'], meaningVi: 'chú bò mộng chăm chỉ', emoji: '🐂', s: 'The strong ox helps pull the farmer’s cart.', vi: 'Chú bò mộng khỏe khoắn kéo xe giúp bác nông dân.' },
    { word: 'galaxy', theme: 'nature', phonemes: ['g', 'a', 'l', 'a', 'x', 'y'], meaningVi: 'dải ngân hà triệu vì sao', emoji: '🌌', s: 'Millions of stars twinkle in the spiral galaxy.', vi: 'Hàng triệu vì sao lấp lánh trong dải ngân hà.' },
    { word: 'box', theme: 'objects_food', phonemes: ['b', 'o', 'x'], meaningVi: 'chiếc hộp đựng đồ chơi', emoji: '📦', s: 'Put all wooden blocks back into the box.', vi: 'Cất các khối gỗ xếp hình vào trong chiếc hộp.' },
    { word: 'axe', theme: 'objects_food', phonemes: ['a', 'x_e'], meaningVi: 'cái rìu bác tiều phu', emoji: '🪓', s: 'The woodcutter rests his axe against a log.', vi: 'Bác tiều phu dựng cây rìu bên khúc gỗ.' },
    { word: 'taxi', theme: 'objects_food', phonemes: ['t', 'a', 'x', 'i'], meaningVi: 'chiếc xe taxi vàng', emoji: '🚕', s: 'A bright yellow taxi drives down city streets.', vi: 'Chiếc taxi vàng bon bon trên đường phố.' },
    { word: 'mixer', theme: 'objects_food', phonemes: ['m', 'i', 'x', 'er'], meaningVi: 'máy đánh trứng làm bánh', emoji: '🥣', s: 'Whisk cake batter smoothly with the mixer.', vi: 'Đánh bột làm bánh thật mịn bằng máy trộn.' },
    { word: 'saxophone', theme: 'objects_food', phonemes: ['s', 'a', 'x', 'o', 'ph', 'o_e', 'n'], meaningVi: 'kèn saxophone đồng thau', emoji: '🎷', s: 'Play joyful melodies on the shiny saxophone.', vi: 'Thổi những giai điệu vui tươi trên kèn saxophone.' },
    { word: 'mix', theme: 'actions', phonemes: ['m', 'i', 'x'], meaningVi: 'trộn màu vẽ sắc màu', emoji: '🎨', s: 'Mix blue and yellow paint to create green.', vi: 'Trộn màu xanh và vàng để tạo ra màu xanh lá.' },
    { word: 'fix', theme: 'actions', phonemes: ['f', 'i', 'x'], meaningVi: 'sửa chữa đồ chơi', emoji: '🔧', s: 'Help fix the little toy wooden airplane.', vi: 'Giúp sửa chiếc máy bay gỗ đồ chơi xinh xắn.' }
  ],
  'ch': [
    { word: 'cheetah', theme: 'animals', phonemes: ['ch', 'ee', 't', 'a'], meaningVi: 'báo săn cheetah siêu tốc', emoji: '🐆', s: 'The cheetah bounds across the open savannah.', vi: 'Báo săn cheetah phi nhanh trên trảng cỏ.' },
    { word: 'chimpanzee', theme: 'animals', phonemes: ['ch', 'i', 'm', 'p', 'a', 'n', 'z', 'ee'], meaningVi: 'tinh tinh tinh nghịch', emoji: '🐒', s: 'The chimpanzee swings happily on jungle vines.', vi: 'Chú tinh tinh đu đưa vui vẻ trên cành cây rừng.' },
    { word: 'chick', theme: 'animals', phonemes: ['ch', 'i', 'ck'], meaningVi: 'gà con lông vàng tơ', emoji: '🐥', s: 'A fluffy yellow chick peeps for seeds.', vi: 'Chú gà con lông vàng chiêm chiếp tìm hạt mầm.' },
    { word: 'finch', theme: 'animals', phonemes: ['f', 'i', 'n', 'ch'], meaningVi: 'chim sẻ cành líu lo', emoji: '🐦', s: 'A little finch perches on the cherry branch.', vi: 'Chú chim sẻ con đậu trên nhành cây anh đào.' },
    { word: 'cherry', theme: 'nature', phonemes: ['ch', 'e', 'rr', 'y'], meaningVi: 'quả anh đào đỏ mọng', emoji: '🍒', s: 'Sweet red cherries ripen in summer warmth.', vi: 'Những quả anh đào đỏ mọng chín dưới nắng hè.' },
    { word: 'chestnut', theme: 'nature', phonemes: ['ch', 'e', 's', 'n', 'u', 't'], meaningVi: 'hạt dẻ nâu mùa thu', emoji: '🌰', s: 'Gather glossy brown chestnuts in autumn woods.', vi: 'Nhặt những hạt dẻ nâu bóng trong rừng mùa thu.' },
    { word: 'chair', theme: 'objects_food', phonemes: ['ch', 'air'], meaningVi: 'chiếc ghế gỗ ấm cúng', emoji: '🪑', s: 'Sit in the cozy wooden chair to read stories.', vi: 'Ngồi trên chiếc ghế gỗ êm ái đọc sách tranh.' },
    { word: 'chain', theme: 'objects_food', phonemes: ['ch', 'ai', 'n'], meaningVi: 'dây xích xích đu', emoji: '⛓️', s: 'Hold the swing chain tightly with both hands.', vi: 'Nắm chắc dây xích xích đu bằng hai tay.' },
    { word: 'chalk', theme: 'objects_food', phonemes: ['ch', 'al', 'k'], meaningVi: 'viên phấn màu vẽ tranh', emoji: '🖍️', s: 'Draw hopscotch squares with white chalk.', vi: 'Vẽ ô nhảy lò cò bằng viên phấn trắng.' },
    { word: 'chocolate', theme: 'objects_food', phonemes: ['ch', 'o', 'c', 'o', 'l', 'a_e', 't'], meaningVi: 'thanh socola ngọt bùi', emoji: '🍫', s: 'Share a sweet square of dark chocolate.', vi: 'Chia sẻ miếng socola ngọt ngào cùng bạn bè.' },
    { word: 'chase', theme: 'actions', phonemes: ['ch', 'a_e', 's'], meaningVi: 'đuổi bắt bóng bay', emoji: '🏃', s: 'Chase the colorful balloon across the yard.', vi: 'Chạy đuổi theo quả bóng bay khắp sân.' },
    { word: 'chew', theme: 'actions', phonemes: ['ch', 'ew'], meaningVi: 'nhai kỹ từng miếng', emoji: '🥕', s: 'Chew fresh crunchy vegetables carefully.', vi: 'Nhai kỹ từng miếng rau củ giòn ngọt thơm ngon.' }
  ],
  'sh': [
    { word: 'shark', theme: 'animals', phonemes: ['sh', 'ar', 'k'], meaningVi: 'cá mập bơi đại dương', emoji: '🦈', s: 'The graceful shark glides through coral waters.', vi: 'Cá mập lướt nhẹ nhàng qua rạn san hô xanh.' },
    { word: 'shrimp', theme: 'animals', phonemes: ['sh', 'r', 'i', 'm', 'p'], meaningVi: 'tôm biển búng tanh tách', emoji: '🦐', s: 'A little shrimp swims around tide pools.', vi: 'Chú tôm nhỏ bơi lội trong vũng nước triều.' },
    { word: 'shore', theme: 'nature', phonemes: ['sh', 'or_e'], meaningVi: 'bờ biển cát vàng', emoji: '🏖️', s: 'Gentle waves lap against the sandy shore.', vi: 'Sóng vỗ nhẹ nhàng lên bờ cát vàng mịn.' },
    { word: 'shade', theme: 'nature', phonemes: ['sh', 'a_e', 'd'], meaningVi: 'bóng râm cây sồi mát', emoji: '🌳', s: 'Rest peacefully under the cool oak shade.', vi: 'Nghỉ ngơi mát mẻ dưới bóng cây sồi già.' },
    { word: 'shower', theme: 'nature', phonemes: ['sh', 'ow', 'er'], meaningVi: 'cơn mưa rào dịu mát', emoji: '🌦️', s: 'A summer shower freshens the blooming garden.', vi: 'Cơn mưa rào mùa hạ làm tươi mát cả khu vườn.' },
    { word: 'shirt', theme: 'objects_food', phonemes: ['sh', 'ur', 't'], meaningVi: 'chiếc áo sơ mi tinh tươm', emoji: '👔', s: 'Button your clean yellow shirt neatly.', vi: 'Cài cúc chiếc áo sơ mi vàng gọn gàng.' },
    { word: 'shoe', theme: 'objects_food', phonemes: ['sh', 'oo'], meaningVi: 'đôi giày thể thao êm', emoji: '👟', s: 'Tie your colorful running shoes tightly.', vi: 'Buộc dây đôi giày thể thao sắc màu chắc chắn.' },
    { word: 'shovel', theme: 'objects_food', phonemes: ['sh', 'u', 'v', 'e', 'l'], meaningVi: 'cái xẻng xúc cát', emoji: '🪣', s: 'Dig fine yellow sand with your plastic shovel.', vi: 'Xúc cát vàng mịn bằng chiếc xẻng đồ chơi.' },
    { word: 'shawl', theme: 'objects_food', phonemes: ['sh', 'aw', 'l'], meaningVi: 'chiếc khăn choàng len ấm', emoji: '🧣', s: 'Wrap a soft wool shawl around your shoulders.', vi: 'Khoác chiếc khăn len êm ái lên đôi bờ vai.' },
    { word: 'shake', theme: 'actions', phonemes: ['sh', 'a_e', 'k'], meaningVi: 'bắt tay kết bạn', emoji: '🤝', s: 'Shake hands with your new classmate.', vi: 'Bắt tay thân thiện với bạn học mới.' },
    { word: 'shout', theme: 'actions', phonemes: ['sh', 'ou', 't'], meaningVi: 'reo hò vui sướng', emoji: '🎉', s: 'Shout hooray when your tower stands tall.', vi: 'Reo hò hoan hô khi tòa tháp xếp gỗ đứng vững.' }
  ],
  'th_unvoiced': [
    { word: 'panther', theme: 'animals', phonemes: ['p', 'a', 'n', 'th', 'er'], meaningVi: 'báo đen bước êm', emoji: '🐆', s: 'The sleek panther pads through moonlit paths.', vi: 'Báo đen bước đi êm ru dưới lối mòn ngập trăng.' },
    { word: 'moth', theme: 'animals', phonemes: ['m', 'o', 'th'], meaningVi: 'bướm đêm cánh nhung', emoji: '🦋', s: 'The gentle moth flutters near the porch light.', vi: 'Bướm đêm cánh nhung bay quanh ánh đèn hiên.' },
    { word: 'sloth', theme: 'animals', phonemes: ['s', 'l', 'o', 'th'], meaningVi: 'chú lười cười tươi', emoji: '🦥', s: 'The smiling sloth hangs upside down peacefully.', vi: 'Chú lười mỉm cười treo ngược mình bình yên.' },
    { word: 'earth', theme: 'nature', phonemes: ['ear', 'th'], meaningVi: 'mẹ trái đất mến yêu', emoji: '🌍', s: 'Take good care of our beautiful green Earth.', vi: 'Cùng nhau chăm sóc Mẹ Trái Đất xanh tươi.' },
    { word: 'path', theme: 'nature', phonemes: ['p', 'a', 'th'], meaningVi: 'con đường mòn rợp hoa', emoji: '🛤️', s: 'Follow the winding path into the woods.', vi: 'Đi theo con đường mòn uốn lượn vào rừng.' },
    { word: 'thistle', theme: 'nature', phonemes: ['th', 'i', 's', 'l'], meaningVi: 'hoa cúc gai tím biếc', emoji: '🪻', s: 'Purple thistles bloom along the country lane.', vi: 'Những bông cúc gai tím nở dọc đường làng.' },
    { word: 'thread', theme: 'objects_food', phonemes: ['th', 'r', 'e', 'd'], meaningVi: 'cuộn chỉ khâu sắc màu', emoji: '🧵', s: 'Thread the needle with colorful silk thread.', vi: 'Xâu cuộn chỉ tơ sắc màu qua lỗ kim.' },
    { word: 'thimble', theme: 'objects_food', phonemes: ['th', 'i', 'm', 'b', 'l'], meaningVi: 'ống đê bảo vệ ngón tay', emoji: '🪡', s: 'Wear a silver thimble while sewing patches.', vi: 'Đeo chiếc ống đê bạc khi khâu vá áo.' },
    { word: 'throne', theme: 'objects_food', phonemes: ['th', 'r', 'o_e', 'n'], meaningVi: 'ngai vàng lộng lẫy', emoji: '👑', s: 'The kind storybook king sits upon his throne.', vi: 'Vị vua hiền từ ngồi trên ngai vàng lộng lẫy.' },
    { word: 'thank', theme: 'actions', phonemes: ['th', 'a', 'ng', 'k'], meaningVi: 'nói lời cảm ơn lễ phép', emoji: '🙏', s: 'Always thank your parents with a loving smile.', vi: 'Luôn nói lời cảm ơn cha mẹ với nụ cười hiếu thảo.' },
    { word: 'think', theme: 'actions', phonemes: ['th', 'i', 'ng', 'k'], meaningVi: 'suy nghĩ tìm lời giải', emoji: '🤔', s: 'Think carefully before choosing the right puzzle piece.', vi: 'Suy nghĩ kỹ trước khi ghép mảnh tranh đúng.' }
  ],
  'th_voiced': [
    { word: 'feather', theme: 'animals', phonemes: ['f', 'e', 'th', 'er'], meaningVi: 'chiếc lông vũ óng mượt', emoji: '🪶', s: 'The bird preens its soft blue feather.', vi: 'Chú chim rỉa chiếc lông vũ xanh mềm mượt.' },
    { word: 'leather', theme: 'objects_food', phonemes: ['l', 'e', 'th', 'er'], meaningVi: 'chiếc cặp da bền đẹp', emoji: '💼', s: 'A sturdy brown leather satchel for books.', vi: 'Chiếc cặp da nâu bền đẹp đựng sách vở.' },
    { word: 'weather', theme: 'nature', phonemes: ['w', 'e', 'th', 'er'], meaningVi: 'thời tiết nắng đẹp', emoji: '☀️', s: 'Sunny warm weather is perfect for playing outside.', vi: 'Thời tiết ấm áp nắng đẹp thật tuyệt để chơi đùa.' },
    { word: 'northern', theme: 'nature', phonemes: ['n', 'or', 'th', 'er', 'n'], meaningVi: 'ánh cực quang phương bắc', emoji: '🌌', s: 'The northern lights dance with green ribbons.', vi: 'Ánh cực quang phương bắc nhảy múa dải lụa xanh.' },
    { word: 'mother', theme: 'objects_food', phonemes: ['m', 'u', 'th', 'er'], meaningVi: 'người mẹ hiền từ', emoji: '👩‍👧', s: 'Mother sings a gentle lullaby to her baby.', vi: 'Mẹ hiền cất tiếng hát ru con êm ái.' },
    { word: 'father', theme: 'objects_food', phonemes: ['f', 'ar', 'th', 'er'], meaningVi: 'người cha ấm áp', emoji: '👨‍👧', s: 'Father helps tie the running shoe laces.', vi: 'Bố ân cần buộc dây giày cho con.' },
    { word: 'brother', theme: 'objects_food', phonemes: ['b', 'r', 'u', 'th', 'er'], meaningVi: 'người anh trai yêu quý', emoji: '👦', s: 'My brother builds a tall block castle with me.', vi: 'Anh trai cùng bé xây lâu đài khối gỗ thật cao.' },
    { word: 'breathe', theme: 'actions', phonemes: ['b', 'r', 'ee', 'th'], meaningVi: 'hít thở không khí trong lành', emoji: '🫁', s: 'Breathe in the sweet scent of mountain pines.', vi: 'Hít thở không khí trong lành thoang thoảng hương thông.' },
    { word: 'soothe', theme: 'actions', phonemes: ['s', 'oo', 'th'], meaningVi: 'vỗ về ủi an dịu dàng', emoji: '🫂', s: 'Soothe the crying baby with a gentle lullaby.', vi: 'Vỗ về em bé khóc bằng lời ru dịu dàng.' },
    { word: 'together', theme: 'actions', phonemes: ['t', 'o', 'g', 'e', 'th', 'er'], meaningVi: 'cùng nhau vui chơi', emoji: '👫', s: 'Friends sing and dance happily together.', vi: 'Các bạn bè cùng nhau ca múa hân hoan.' }
  ],

  // G7: qu, ou, oi, ue, er, ar
  'qu': [
    { word: 'quail', theme: 'animals', phonemes: ['qu', 'ai', 'l'], meaningVi: 'chim cút nhỏ nhắn', emoji: '🐦', s: 'A little quail nests quietly in tall grass.', vi: 'Chim cút làm tổ êm đềm trong đám cỏ cao.' },
    { word: 'quokka', theme: 'animals', phonemes: ['qu', 'o', 'kk', 'a'], meaningVi: 'quokka nụ cười rạng rỡ', emoji: '🦘', s: 'The happy quokka smiles for the camera.', vi: 'Chú quokka tươi cười rạng rỡ trước ống kính.' },
    { word: 'quetzal', theme: 'animals', phonemes: ['qu', 'e', 't', 'z', 'a', 'l'], meaningVi: 'chim quetzal đuôi dài xanh ngọc', emoji: '🦜', s: 'The quetzal flashes brilliant green feathers.', vi: 'Chim quetzal lóng lánh bộ lông màu xanh ngọc bích.' },
    { word: 'quartz', theme: 'nature', phonemes: ['qu', 'ar', 't', 's'], meaningVi: 'tinh thể thạch anh trong suốt', emoji: '💎', s: 'A sparkling crystal of rose quartz shines.', vi: 'Tinh thể thạch anh hồng lấp lánh tỏa sáng.' },
    { word: 'quarry', theme: 'nature', phonemes: ['qu', 'o', 'rr', 'y'], meaningVi: 'mỏ đá tự nhiên', emoji: '🪨', s: 'Carve smooth stones from the mountain quarry.', vi: 'Khai thác những tảng đá nhẵn từ mỏ đá trên núi.' },
    { word: 'quilt', theme: 'objects_food', phonemes: ['qu', 'i', 'l', 't'], meaningVi: 'tấm chăn chần bông ấm', emoji: '🛌', s: 'Sleep under a warm patchwork quilt.', vi: 'Ngủ ấm cúng dưới tấm chăn chần bông nhiều màu.' },
    { word: 'quill', theme: 'objects_food', phonemes: ['qu', 'i', 'll'], meaningVi: 'bút lông ngỗng cổ điển', emoji: '🪶', s: 'Dip the goose quill in ink to write.', vi: 'Chấm cây bút lông ngỗng vào mực để viết thư.' },
    { word: 'quarter', theme: 'objects_food', phonemes: ['qu', 'or', 't', 'er'], meaningVi: 'đồng xu bạc lấp lánh', emoji: '🪙', s: 'A shiny silver quarter in the piggy bank.', vi: 'Đồng xu bạc sáng loáng bỏ vào ống heo tiết kiệm.' },
    { word: 'queen', theme: 'objects_food', phonemes: ['qu', 'ee', 'n'], meaningVi: 'nữ hoàng vương miện ngọc', emoji: '👸', s: 'The gentle queen wears a golden crown.', vi: 'Nữ hoàng nhân từ đội chiếc vương miện vàng.' },
    { word: 'quench', theme: 'actions', phonemes: ['qu', 'e', 'n', 'ch'], meaningVi: 'giải tỏa cơn khát', emoji: '🥤', s: 'Quench your thirst with fresh cool water.', vi: 'Giải tỏa cơn khát với ly nước lọc mát lành.' },
    { word: 'quiver', theme: 'actions', phonemes: ['qu', 'i', 'v', 'er'], meaningVi: 'rung rinh trong gió', emoji: '🍃', s: 'Autumn leaves quiver in the cool breeze.', vi: 'Những chiếc lá thu rung rinh trong làn gió mát.' }
  ],
  'ou': [
    { word: 'hound', theme: 'animals', phonemes: ['h', 'ou', 'n', 'd'], meaningVi: 'chú chó săn tai cụp', emoji: '🐕', s: 'The loyal hound wags its tail at the door.', vi: 'Chú chó săn vẫy đuôi mừng rỡ ngoài cửa.' },
    { word: 'mouse', theme: 'animals', phonemes: ['m', 'ou', 's_e'], meaningVi: 'chú chuột nhắt tí hon', emoji: '🐭', s: 'A tiny field mouse nibbles a piece of cheese.', vi: 'Chú chuột nhắt gặm nhấm mẩu phô mai thơm.' },
    { word: 'trout', theme: 'animals', phonemes: ['t', 'r', 'ou', 't'], meaningVi: 'cá hồi suối đốm', emoji: '🐟', s: 'Spotted trout swim swiftly upstream.', vi: 'Đàn cá hồi đốm bơi ngược dòng suối mát.' },
    { word: 'cloud', theme: 'nature', phonemes: ['c', 'l', 'ou', 'd'], meaningVi: 'đám mây xốp trắng', emoji: '☁️', s: 'A fluffy cloud looks like a playful sheep.', vi: 'Đám mây xốp trắng trông như chú cừu tinh nghịch.' },
    { word: 'ground', theme: 'nature', phonemes: ['g', 'r', 'ou', 'n', 'd'], meaningVi: 'mặt đất màu mỡ', emoji: '🌱', s: 'Green sprouts push up through warm ground.', vi: 'Những mầm non nhú lên khỏi mặt đất ấm.' },
    { word: 'mountain', theme: 'nature', phonemes: ['m', 'ou', 'n', 't', 'ai', 'n'], meaningVi: 'dãy núi trập trùng', emoji: '🏔️', s: 'Snow covers the peaks of the high mountains.', vi: 'Tuyết trắng phủ trên các đỉnh núi cao vút.' },
    { word: 'house', theme: 'objects_food', phonemes: ['h', 'ou', 's_e'], meaningVi: 'ngôi nhà ấm cúng', emoji: '🏡', s: 'Warm lights glow from the cozy little house.', vi: 'Ánh đèn ấm áp tỏa ra từ ngôi nhà nhỏ xinh.' },
    { word: 'pouch', theme: 'objects_food', phonemes: ['p', 'ou', 'ch'], meaningVi: 'chiếc túi thơm vải nhung', emoji: '👛', s: 'Keep small treasures in the soft velvet pouch.', vi: 'Cất giữ những kho báu nhỏ trong túi nhung êm.' },
    { word: 'couch', theme: 'objects_food', phonemes: ['c', 'ou', 'ch'], meaningVi: 'ghế sofa êm ái', emoji: '🛋️', s: 'Snuggle on the soft couch with a storybook.', vi: 'Tựa lưng vào ghế sofa êm ái đọc truyện tranh.' },
    { word: 'bounce', theme: 'actions', phonemes: ['b', 'ou', 'n', 's_e'], meaningVi: 'nảy bật tưng tưng', emoji: '🏀', s: 'Bounce the soft rubber ball across the yard.', vi: 'Nảy quả bóng cao su tưng tưng khắp sân.' },
    { word: 'count', theme: 'actions', phonemes: ['c', 'ou', 'n', 't'], meaningVi: 'đếm từng số vui', emoji: '🔢', s: 'Count from one to ten with your teacher.', vi: 'Cùng cô giáo đếm từ một đến mười thật vui.' }
  ],
  'oi': [
    { word: 'koi', theme: 'animals', phonemes: ['k', 'oi'], meaningVi: 'cá chép koi rực rỡ', emoji: '🎏', s: 'Orange and white koi glide in the garden pond.', vi: 'Đàn cá koi cam trắng bơi lượn trong hồ vườn.' },
    { word: 'tortoise', theme: 'animals', phonemes: ['t', 'or', 't', 'oi', 's_e'], meaningVi: 'cụ rùa mai gồ ghề', emoji: '🐢', s: 'The patient tortoise munches fresh clover.', vi: 'Cụ rùa kiên nhẫn gặm từng nhánh cỏ ba lá non.' },
    { word: 'oyster', theme: 'animals', phonemes: ['oy', 's', 't', 'er'], meaningVi: 'con hàu ngậm ngọc', emoji: '🦪', s: 'A shiny white pearl rests inside the oyster.', vi: 'Viên ngọc trai trắng óng ánh nằm trong vỏ hàu.' },
    { word: 'soil', theme: 'nature', phonemes: ['s', 'oi', 'l'], meaningVi: 'đất mùn tơi xốp', emoji: '🪴', s: 'Rich black soil helps our sunflower grow.', vi: 'Đất mùn đen màu mỡ giúp hoa hướng dương lớn nhanh.' },
    { word: 'point', theme: 'nature', phonemes: ['p', 'oi', 'n', 't'], meaningVi: 'mỏm đất nhô ra biển', emoji: '📍', s: 'Stand on the rocky point to watch the sunrise.', vi: 'Đứng trên mỏm đá ngắm mặt trời mọc rực rỡ.' },
    { word: 'oil', theme: 'objects_food', phonemes: ['oi', 'l'], meaningVi: 'dầu ô liu vàng óng', emoji: '🫒', s: 'Drizzle golden olive oil on the fresh salad.', vi: 'Rưới dầu ô liu vàng óng lên đĩa salad tươi giòn.' },
    { word: 'coin', theme: 'objects_food', phonemes: ['c', 'oi', 'n'], meaningVi: 'đồng xu may mắn', emoji: '🪙', s: 'A lucky gold coin found on the treasure map.', vi: 'Đồng xu vàng may mắn tìm thấy trên bản đồ kho báu.' },
    { word: 'coil', theme: 'objects_food', phonemes: ['c', 'oi', 'l'], meaningVi: 'cuộn dây thừng tròn', emoji: '🪢', s: 'The sailor coils the rope neatly on deck.', vi: 'Thủy thủ cuộn dây thừng gọn gàng trên boong tàu.' },
    { word: 'join', theme: 'actions', phonemes: ['j', 'oi', 'n'], meaningVi: 'tham gia cùng bạn', emoji: '🤝', s: 'Join hands and dance in a happy circle.', vi: 'Nắm tay nhau cùng nhảy múa thành vòng tròn vui tươi.' },
    { word: 'boil', theme: 'actions', phonemes: ['b', 'oi', 'l'], meaningVi: 'nấu sôi nước súp', emoji: '🫖', s: 'Boil water to brew sweet chamomile tea.', vi: 'Đun sôi nước để pha ấm trà hoa cúc ngọt ngào.' },
    { word: 'rejoice', theme: 'actions', phonemes: ['r', 'e', 'j', 'oi', 's_e'], meaningVi: 'hân hoan vui mừng', emoji: '🥳', s: 'Rejoice with smiles when solving the puzzle.', vi: 'Hân hoan mỉm cười khi hoàn thành bức tranh ghép.' }
  ],
  'ue': [
    { word: 'bluebird', theme: 'animals', phonemes: ['b', 'l', 'ue', 'b', 'ur', 'd'], meaningVi: 'chim xanh mang may mắn', emoji: '🐦', s: 'The bluebird sings sweet songs on the porch.', vi: 'Chim xanh cất tiếng hót ngọt ngào bên hiên nhà.' },
    { word: 'clue', theme: 'nature', phonemes: ['c', 'l', 'ue'], meaningVi: 'manh mối kho báu', emoji: '🔍', s: 'Follow the secret clue to find the island chest.', vi: 'Lần theo manh mối bí mật để tìm rương kho báu.' },
    { word: 'statue', theme: 'objects_food', phonemes: ['s', 't', 'a', 't', 'ue'], meaningVi: 'bức tượng đá cổ kính', emoji: '🗽', s: 'A marble statue stands gracefully in the garden.', vi: 'Bức tượng đá cẩm thạch đứng trang nghiêm trong vườn.' },
    { word: 'tissue', theme: 'objects_food', phonemes: ['t', 'i', 'ss', 'ue'], meaningVi: 'hộp khăn giấy mềm', emoji: '🧻', s: 'Take a soft tissue to dry your tears.', vi: 'Lấy khăn giấy mềm lau khô giọt nước mắt.' },
    { word: 'glue', theme: 'objects_food', phonemes: ['g', 'l', 'ue'], meaningVi: 'hồ dán thủ công', emoji: '🧴', s: 'Paste colorful paper cutouts with safe glue.', vi: 'Dán những hình cắt giấy sắc màu bằng hồ dán an toàn.' },
    { word: 'barbecue', theme: 'objects_food', phonemes: ['b', 'ar', 'b', 'e', 'c', 'ue'], meaningVi: 'bữa tiệc nướng thơm lừng', emoji: '🍢', s: 'Enjoy skewers at the family garden barbecue.', vi: 'Thưởng thức món thịt xiên nướng trong bữa tiệc ngoài vườn.' },
    { word: 'rescue', theme: 'actions', phonemes: ['r', 'e', 's', 'c', 'ue'], meaningVi: 'giải cứu chú cún nhỏ', emoji: '🛟', s: 'Rescue the lost kitten and bring it home.', vi: 'Giải cứu chú mèo con đi lạc và đưa về nhà nuôi dưỡng.' },
    { word: 'pursue', theme: 'actions', phonemes: ['p', 'ur', 's', 'ue'], meaningVi: 'theo đuổi ước mơ', emoji: '🏃', s: 'Pursue your joyful dreams with courage.', vi: 'Dũng cảm theo đuổi những ước mơ tươi đẹp.' }
  ],
  'er': [
    { word: 'otter', theme: 'animals', phonemes: ['o', 'tt', 'er'], meaningVi: 'rái cá tinh nghịch', emoji: '🦦', s: 'The brown otter catches a silvery fish.', vi: 'Rái cá nâu bắt được chú cá ánh bạc.' },
    { word: 'tiger', theme: 'animals', phonemes: ['t', 'i', 'g', 'er'], meaningVi: 'hổ vằn oai phong', emoji: '🐯', s: 'The striped tiger walks proudly through the grass.', vi: 'Hổ vằn oai phong dạo bước trên đồng cỏ.' },
    { word: 'spider', theme: 'animals', phonemes: ['s', 'p', 'i', 'd', 'er'], meaningVi: 'chú nhện dệt tơ lụa', emoji: '🕷️', s: 'The clever spider spins a fine circular web.', vi: 'Chú nhện khéo léo dệt mạng tơ tròn đều.' },
    { word: 'badger', theme: 'animals', phonemes: ['b', 'a', 'd', 'g_e', 'r'], meaningVi: 'lửng mật sọc đen trắng', emoji: '🦡', s: 'The badger digs its burrow under tree roots.', vi: 'Lửng mật đào hang ấm áp dưới gốc cây già.' },
    { word: 'river', theme: 'nature', phonemes: ['r', 'i', 'v', 'er'], meaningVi: 'dòng sông xanh êm đềm', emoji: '🏞️', s: 'Boats float down the winding blue river.', vi: 'Những con thuyền xuôi mái trên dòng sông uốn lượn.' },
    { word: 'flower', theme: 'nature', phonemes: ['f', 'l', 'ow', 'er'], meaningVi: 'bông hoa thơm ngát', emoji: '🌸', s: 'Bees visit the sweet blooming flower.', vi: 'Đàn ong chăm chỉ tìm đến đóa hoa ngát hương.' },
    { word: 'water', theme: 'nature', phonemes: ['w', 'a', 't', 'er'], meaningVi: 'nước suối trong lành', emoji: '💧', s: 'Cool fresh water flows from the mountain spring.', vi: 'Nước suối mát lành tuôn chảy từ khe núi.' },
    { word: 'winter', theme: 'nature', phonemes: ['w', 'i', 'n', 't', 'er'], meaningVi: 'mùa đông tuyết phủ', emoji: '❄️', s: 'Winter brings quiet snow and warm cocoa.', vi: 'Mùa đông mang tuyết rơi êm đềm và ly ca cao ấm.' },
    { word: 'summer', theme: 'nature', phonemes: ['s', 'u', 'mm', 'er'], meaningVi: 'mùa hè rực rỡ', emoji: '☀️', s: 'Summer sunshine lights up the sandy beach.', vi: 'Ánh nắng mùa hè chiếu sáng bãi biển ngập cát vàng.' },
    { word: 'paper', theme: 'objects_food', phonemes: ['p', 'a', 'p', 'er'], meaningVi: 'trang giấy vẽ trắng tinh', emoji: '📄', s: 'Draw a colorful Ehon scene on blank paper.', vi: 'Vẽ một khung cảnh Ehon sắc màu lên trang giấy trắng.' },
    { word: 'ruler', theme: 'objects_food', phonemes: ['r', 'u', 'l', 'er'], meaningVi: 'cây thước kẻ gỗ', emoji: '📏', s: 'Draw straight lines with the wooden ruler.', vi: 'Kẻ những đường thẳng tắp bằng cây thước gỗ.' },
    { word: 'hammer', theme: 'objects_food', phonemes: ['h', 'a', 'mm', 'er'], meaningVi: 'cái búa đồ chơi bằng gỗ', emoji: '🔨', s: 'Tap wooden pegs gently with the toy hammer.', vi: 'Gõ nhẹ những chiếc cọc gỗ bằng cây búa đồ chơi.' },
    { word: 'whisper', theme: 'actions', phonemes: ['wh', 'i', 's', 'p', 'er'], meaningVi: 'thì thầm ngọt ngào', emoji: '🤫', s: 'Whisper a secret bedtime wish to mommy.', vi: 'Thì thầm điều ước ngọt ngào trước giờ ngủ cùng mẹ.' },
    { word: 'flutter', theme: 'actions', phonemes: ['f', 'l', 'u', 'tt', 'er'], meaningVi: 'vỗ cánh bay rập rờn', emoji: '🦋', s: 'Butterfly wings flutter gently over roses.', vi: 'Đôi cánh bướm vỗ rập rờn nhẹ nhàng trên đóa hồng.' }
  ],
  'ar': [
    { word: 'starfish', theme: 'animals', phonemes: ['s', 't', 'ar', 'f', 'i', 'sh'], meaningVi: 'sao biển năm cánh cam', emoji: '⭐', s: 'A bright orange starfish rests on the sea rock.', vi: 'Sao biển năm cánh màu cam nằm trên tảng đá biển.' },
    { word: 'cardinal', theme: 'animals', phonemes: ['c', 'ar', 'd', 'i', 'n', 'a', 'l'], meaningVi: 'chim hồng tước đỏ thắm', emoji: '🐦', s: 'A red cardinal sings proudly on the snowy pine.', vi: 'Chim hồng tước đỏ thắm hót trên cành thông phủ tuyết.' },
    { word: 'shark', theme: 'animals', phonemes: ['sh', 'ar', 'k'], meaningVi: 'cá mập bơi thanh thoát', emoji: '🦈', s: 'The shark glides smoothly through tropical seas.', vi: 'Cá mập lướt êm ái qua vùng biển nhiệt đới.' },
    { word: 'lark', theme: 'animals', phonemes: ['l', 'ar', 'k'], meaningVi: 'chim sơn ca hót vang', emoji: '🐦', s: 'The lark ascends into the bright morning sky.', vi: 'Sơn ca bay vút lên bầu trời sớm mai cất tiếng ca.' },
    { word: 'garden', theme: 'nature', phonemes: ['g', 'ar', 'd', 'e', 'n'], meaningVi: 'khu vườn hoa rực rỡ', emoji: '🏡', s: 'Bright sunflowers nod in our sunny garden.', vi: 'Hoa hướng dương gật đầu chào nắng trong khu vườn.' },
    { word: 'star', theme: 'nature', phonemes: ['s', 't', 'ar'], meaningVi: 'ngôi sao lấp lánh', emoji: '✨', s: 'The evening star shines brightest of all.', vi: 'Ngôi sao hôm tỏa sáng lấp lánh nhất bầu trời.' },
    { word: 'park', theme: 'nature', phonemes: ['p', 'ar', 'k'], meaningVi: 'công viên nhiều cây xanh', emoji: '🏞️', s: 'Play on the swings at the neighborhood park.', vi: 'Chơi xích đu trong công viên rợp bóng mát.' },
    { word: 'barn', theme: 'objects_food', phonemes: ['b', 'ar', 'n'], meaningVi: 'nhà kho thóc nông trại', emoji: '🏚️', s: 'Sweet hay is stored inside the red barn.', vi: 'Cỏ khô thơm được cất trong nhà kho màu đỏ.' },
    { word: 'cart', theme: 'objects_food', phonemes: ['c', 'ar', 't'], meaningVi: 'xe kéo cút kít gỗ', emoji: '🛒', s: 'Roll the wooden cart filled with fresh apples.', vi: 'Kéo chiếc xe gỗ chở đầy những quả táo tươi.' },
    { word: 'scarf', theme: 'objects_food', phonemes: ['s', 'c', 'ar', 'f'], meaningVi: 'khăn quàng cổ len ấm', emoji: '🧣', s: 'Wrap a striped knitted scarf around your neck.', vi: 'Quàng chiếc khăn len kẻ sọc ấm áp quanh cổ.' },
    { word: 'guitar', theme: 'objects_food', phonemes: ['g', 'ui', 't', 'ar'], meaningVi: 'cây đàn guitar gỗ', emoji: '🎸', s: 'Play happy acoustic tunes on the guitar.', vi: 'Gảy những khúc ca vui tươi trên cây đàn guitar mộc.' },
    { word: 'march', theme: 'actions', phonemes: ['m', 'ar', 'ch'], meaningVi: 'bước đi nhịp nhàng', emoji: '🚶', s: 'March with lively steps in the school parade.', vi: 'Bước đi nhịp nhàng trong buổi diễu hành trường.' },
    { word: 'spark', theme: 'actions', phonemes: ['s', 'p', 'ar', 'k'], meaningVi: 'lóe sáng lung linh', emoji: '✨', s: 'Stars spark like tiny lanterns in the dark.', vi: 'Những vì sao lóe sáng như chiếc đèn lồng nhỏ giữa đêm.' }
  ]
};

// Merge Group 5, 6, 7 words
for (const [phId, items] of Object.entries(GROUP_5_6_7_WORDS)) {
  const meta = PHONEME_META[phId];
  if (!meta) continue;

  items.forEach((item, idx) => {
    const wordKey = item.word.toLowerCase();
    const dedupKey = `${phId}_${wordKey}`;
    if (seenWords.has(dedupKey)) return;

    const visual = existingVisuals[wordKey] || CURATED_NEW_VISUALS[wordKey] || {
      url: `/assets/ehon/theme_${item.theme}.jpg`,
      type: 'ehon',
      alt: `Tranh Ehon minh họa từ ${item.word}`
    };

    MASTER_WORD_BANK.push({
      id: `wb_${phId}_${wordKey}_${idx + 30}`,
      word: item.word,
      phonemeId: phId,
      group: meta.group,
      stage: meta.stage,
      phonemes: item.phonemes,
      theme: item.theme,
      meaningVi: item.meaningVi,
      emoji: item.emoji,
      sampleSentence: item.s,
      sampleSentenceVi: item.vi || 'Câu ví dụ sinh động.',
      visual: visual
    });
    seenWords.add(dedupKey);
  });
}

console.log(`Total Master Word Bank items generated: ${MASTER_WORD_BANK.length}`);

// Generate TypeScript Output File
const tsContent = `// Master Phonics Word Bank: ${MASTER_WORD_BANK.length} Decodable Words across all 42 Phonemes
// Structured into 4 Child-Friendly Themes: Animals, Nature, Objects & Food, Actions
// 100% Authentic Ehon & Real Educational Imagery - Zero Vector Clipart / Raw Emojis!

import { PhonicsWordBankItem, WordBankTheme } from '../types/phonics';

export const THEME_CONFIG: Record<WordBankTheme, {
  label: string;
  icon: string;
  banner: string;
  description: string;
  color: string;
}> = {
  animals: {
    label: 'Động Vật & Thú Cưng',
    icon: '🐾',
    banner: '/assets/ehon/theme_animals.jpg',
    description: 'Khám phá thế giới các bạn thú dễ thương vẽ phong cách Ehon ấm áp!',
    color: 'emerald'
  },
  nature: {
    label: 'Thiên Nhiên & Đất Trời',
    icon: '🌿',
    banner: '/assets/ehon/theme_nature.jpg',
    description: 'Chiêm ngưỡng cỏ cây, hoa lá, dòng suối và bầu trời kỳ diệu.',
    color: 'sky'
  },
  objects_food: {
    label: 'Đồ Vật & Món Ăn',
    icon: '🍎',
    banner: '/assets/ehon/theme_food_objects.jpg',
    description: 'Những món đồ chơi thân quen và đồ ăn thơm ngon mỗi ngày.',
    color: 'amber'
  },
  actions: {
    label: 'Vận Động & Cuộc Sống',
    icon: '🏃',
    banner: '/assets/ehon/theme_actions.jpg',
    description: 'Cùng nhảy múa, ca hát và khám phá niềm vui mỗi bước chân!',
    color: 'rose'
  }
};

export const PHONICS_WORD_BANK: PhonicsWordBankItem[] = ${JSON.stringify(MASTER_WORD_BANK, null, 2)};

// Helper selectors
export function getWordBankByPhoneme(phonemeId: string): PhonicsWordBankItem[] {
  return PHONICS_WORD_BANK.filter(item => item.phonemeId === phonemeId);
}

export function getWordBankByGroup(group: number): PhonicsWordBankItem[] {
  return PHONICS_WORD_BANK.filter(item => item.group === group);
}

export function getWordBankByTheme(theme: WordBankTheme, phonemeId?: string): PhonicsWordBankItem[] {
  return PHONICS_WORD_BANK.filter(item => {
    if (phonemeId && item.phonemeId !== phonemeId) return false;
    return item.theme === theme;
  });
}

export function getPhonemeWordCount(phonemeId: string): number {
  return PHONICS_WORD_BANK.filter(item => item.phonemeId === phonemeId).length;
}

export function getGroupWordCount(group: number): number {
  return PHONICS_WORD_BANK.filter(item => item.group === group).length;
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/phonicsWordBank.ts'), tsContent, 'utf8');
console.log('Successfully wrote src/data/phonicsWordBank.ts!');
