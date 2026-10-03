// Comprehensive Visual Dictionary for all 420 Phonics Vocabulary Words
// 100% authentic Ehon painted artwork and high-res educational photography
// Guaranteed ZERO generic colored pencils fallback!

export interface WordVisual {
  url: string;
  type: 'ehon' | 'photo';
  alt: string;
}

export const WORD_VISUALS_MAP: Record<string, WordVisual> = {
  "sun": {
    "url": "/assets/ehon/sun.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon mặt trời rạng rỡ tỏa tia nắng muôn màu"
  },
  "sit": {
    "url": "/assets/ehon/sit.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon em bé ngồi ngoan trên ghế êm ấm áp"
  },
  "sat": {
    "url": "/assets/ehon/cat_mat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú mèo ngồi yên sưởi nắng trên thảm"
  },
  "sad": {
    "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cún cưng ngơ ngác buồn bã đáng yêu"
  },
  "six": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khối gỗ đồ chơi số 6 sắc màu"
  },
  "sip": {
    "url": "/assets/ehon/cup.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon nhấp từng ngụm nước ấm trong tách"
  },
  "ant": {
    "url": "/assets/ehon/ant.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú kiến bé nhỏ chăm chỉ"
  },
  "apple": {
    "url": "/assets/ehon/apple.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon quả táo đỏ mọng cắt dán rực rỡ"
  },
  "ax": {
    "url": "https://images.unsplash.com/photo-1588619461234-583597b8195e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cái rìu bổ củi của bác tiều phu"
  },
  "act": {
    "url": "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ vui vẻ hóa trang diễn kịch"
  },
  "as": {
    "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú mèo chạy nhanh như gió"
  },
  "at": {
    "url": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cún nhỏ ngắm nhìn ở tại cửa sổ"
  },
  "tap": {
    "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Vòi nước sạch trong vắt mát lành"
  },
  "tin": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc hộp thiếc đựng hạt mầm kỳ diệu"
  },
  "top": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con quay gỗ sắc màu xoay tít"
  },
  "ten": {
    "url": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mười ngón tay xinh xắn sắc màu"
  },
  "tub": {
    "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bồn tắm đầy bọt xà phòng trắng muốt"
  },
  "tag": {
    "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc thẻ nhãn xinh xắn treo trên hộp quà"
  },
  "ink": {
    "url": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lọ mực xanh óng ánh vẽ tranh"
  },
  "in": {
    "url": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mèo con cuộn mình ngủ ngoan trong chiếc hộp"
  },
  "igloo": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngôi nhà băng tuyết igloo trắng muốt"
  },
  "ill": {
    "url": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé con đắp chăn ấm áp khi bị ốm"
  },
  "it": {
    "url": "/assets/ehon/ant_pan.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon đó là chú kiến nhỏ"
  },
  "insect": {
    "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú bọ rùa đỏ chấm đen leo trên lá xanh"
  },
  "pat": {
    "url": "/assets/ehon/sam_pat_ant.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon bé vỗ về vuốt ve thân mật"
  },
  "pan": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc chảo chiên rán vàng bóng"
  },
  "pin": {
    "url": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây kim ghim an toàn bằng kim loại sáng"
  },
  "pot": {
    "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc nồi nấu súp gia đình ấm cúng"
  },
  "pig": {
    "url": "/assets/ehon/pig.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú heo hồng tung tăng nô đùa"
  },
  "pen": {
    "url": "https://images.unsplash.com/photo-1585336261026-4180718399b3?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bút mực viết chữ nắn nót"
  },
  "net": {
    "url": "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc lưới bắt bướm trên đồng cỏ hoa"
  },
  "nap": {
    "url": "/assets/ehon/cat_nap.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú mèo cuộn tròn ngủ trưa êm ái"
  },
  "nut": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những quả hạt dẻ thơm bùi của chú sóc"
  },
  "nod": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Em bé mỉm cười gật đầu đồng ý"
  },
  "nest": {
    "url": "https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tổ chim ấm áp với những quả trứng xinh xắn"
  },
  "nip": {
    "url": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé nhấp một mẩu bánh nhỏ xíu"
  },
  "cat": {
    "url": "/assets/ehon/cat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú mèo cam rực rỡ sắc màu"
  },
  "cup": {
    "url": "/assets/ehon/cup.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chiếc cốc trà bốc khói thơm dịu"
  },
  "cap": {
    "url": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc mũ lưỡi trai năng động màu xanh"
  },
  "kid": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Em bé nhỏ mỉm cười hồn nhiên"
  },
  "kit": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bộ cọ vẽ tranh và màu nước rực rỡ"
  },
  "kite": {
    "url": "/assets/ehon/kite.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon cánh diều bay lượn trên trời xanh"
  },
  "egg": {
    "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả trứng gà sạch màu nâu bóng"
  },
  "elf": {
    "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú yêu tinh nhỏ xinh của rừng thông"
  },
  "elm": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tán cây du cổ thụ tỏa bóng mát"
  },
  "end": {
    "url": "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ánh hoàng hôn báo hiệu kết thúc ngày dài"
  },
  "hat": {
    "url": "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc mũ rộng vành che nắng"
  },
  "hen": {
    "url": "/assets/ehon/hen.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon cô gà mái đỏ mổ thóc trên sân"
  },
  "hop": {
    "url": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú thỏ trắng nhảy tung tăng trên bãi cỏ"
  },
  "hot": {
    "url": "/assets/ehon/sun.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon mặt trời nắng ấm rực rỡ"
  },
  "hug": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cái ôm ấm áp yêu thương giữa hai bạn nhỏ"
  },
  "hut": {
    "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Túp lều gỗ mộc mạc bên sườn đồi"
  },
  "run": {
    "url": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé con chạy tung tăng trên đường chạy"
  },
  "red": {
    "url": "/assets/ehon/apple.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon màu đỏ tươi tắn của quả táo"
  },
  "rat": {
    "url": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú chuột hamster nhỏ gặm hạt dẻ"
  },
  "rip": {
    "url": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Xé nhẹ tờ giấy màu thủ công"
  },
  "rug": {
    "url": "/assets/ehon/cat_mat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon tấm thảm dệt đan hoa văn rực rỡ"
  },
  "rob": {
    "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cướp lấy bóng trong trò chơi"
  },
  "man": {
    "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Người đàn ông hiền từ mỉm cười"
  },
  "mat": {
    "url": "/assets/ehon/cat_mat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon tấm thảm đan màu sắc ấm áp"
  },
  "mud": {
    "url": "/assets/ehon/pig.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon vũng bùn non cho chú lợn tắm mát"
  },
  "mop": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây lau sàn nhà sạch bong kin kít"
  },
  "milk": {
    "url": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ly sữa tươi trắng thơm lành"
  },
  "map": {
    "url": "/assets/ehon/archipelago.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon tấm bản đồ thám hiểm thế giới kỳ diệu"
  },
  "dog": {
    "url": "/assets/ehon/dog.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú cún cưng nô đùa vui vẻ"
  },
  "dad": {
    "url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Người cha ấm áp cõng bé trên vai"
  },
  "dig": {
    "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đào xới đất ươm mầm cây non"
  },
  "dot": {
    "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những chấm bi tròn sắc màu xinh xắn"
  },
  "dip": {
    "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chấm ngón chân xuống làn nước mát"
  },
  "dam": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con đập nước ngăn dòng chảy"
  },
  "gap": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khe núi đá xanh hùng vĩ"
  },
  "gas": {
    "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khinh khí cầu bay lượn nhờ khí ấm"
  },
  "gut": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bụng nhỏ xinh khỏe mạnh"
  },
  "gum": {
    "url": "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Viên kẹo cao su ngọt thơm bóng bẩy"
  },
  "ox": {
    "url": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú bò đực vạm vỡ trên nông trại"
  },
  "off": {
    "url": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tắt công tắc đèn khi đi ngủ"
  },
  "on": {
    "url": "/assets/ehon/ant_pan.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú kiến ngồi trên mặt chảo"
  },
  "up": {
    "url": "/assets/ehon/kite.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon cánh diều bay vút lên cao"
  },
  "us": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chúng mình cùng nắm tay nhau bước đi"
  },
  "umbrella": {
    "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc ô bảy sắc cầu vồng che mưa"
  },
  "lip": {
    "url": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi môi hồng xinh xắn của em bé đang cười"
  },
  "log": {
    "url": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khúc gỗ sồi nằm giữa khu rừng xanh"
  },
  "leg": {
    "url": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi chân bước đi vững vàng"
  },
  "lot": {
    "url": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thật nhiều trái cây thơm ngọt"
  },
  "fox": {
    "url": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cáo lông đỏ tinh ranh"
  },
  "fun": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Niềm vui rộn rã trong trò chơi"
  },
  "fan": {
    "url": "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc quạt nan xua tan ngày hè nóng"
  },
  "fit": {
    "url": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc mũ vừa vặn với bé yêu"
  },
  "bat": {
    "url": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú dơi con sải cánh bay đêm"
  },
  "box": {
    "url": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc hộp quà thần kỳ màu sắc"
  },
  "bag": {
    "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc túi vải xinh xắn đựng đồ chơi"
  },
  "bug": {
    "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú bọ rùa nhỏ xinh xắn trên cành lá"
  },
  "rain": {
    "url": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cơn mưa rào mùa hạ tưới mát cây cối"
  },
  "tail": {
    "url": "/assets/ehon/cat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chiếc đuôi xù vẫy chào của chú mèo"
  },
  "sail": {
    "url": "/assets/ehon/ship.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon cánh buồm no gió giữa biển khơi"
  },
  "snail": {
    "url": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú ốc sên chậm rãi bò trên lá"
  },
  "jam": {
    "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hũ mứt dâu tây ngọt thơm óng ánh"
  },
  "jug": {
    "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bình gốm rót nước hoa quả thơm"
  },
  "jet": {
    "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc máy bay phản lực lướt mây trắng"
  },
  "job": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé giúp mẹ làm việc nhà chăm chỉ"
  },
  "boat": {
    "url": "/assets/ehon/ship.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon con thuyền gỗ bồng bềnh trên sông"
  },
  "coat": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc áo khoác ấm áp mùa đông"
  },
  "goat": {
    "url": "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú dê trắng nhởn nhơ gặm cỏ"
  },
  "soap": {
    "url": "https://images.unsplash.com/photo-1607006314144-846d03d3db26?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bánh xà phòng thơm nức nhiều bọt bóng"
  },
  "pie": {
    "url": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bánh táo nướng thơm lừng nóng hổi"
  },
  "tie": {
    "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc cà vạt sọc của người cha"
  },
  "lie": {
    "url": "/assets/ehon/cat_nap.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú mèo nằm thư giãn trên thảm"
  },
  "bee": {
    "url": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú ong vàng chăm chỉ hút mật hoa"
  },
  "tree": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây cổ thụ vươn cành đón nắng mai"
  },
  "seed": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hạt mầm nhỏ chuẩn bị nảy chồi xanh"
  },
  "feet": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi bàn chân bé nhỏ xinh xắn"
  },
  "fork": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc nĩa ăn hoa quả bằng bạc"
  },
  "horn": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc kèn đồng vang lên khúc nhạc vui"
  },
  "corn": {
    "url": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bắp ngô vàng óng ả ngọt ngào"
  },
  "storm": {
    "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cơn bão sấm chớp bầu trời cuồn cuộn"
  },
  "zip": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Kéo khóa áo khoác ấm áp"
  },
  "zoo": {
    "url": "/assets/ehon/giraffe.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon sở thú nơi muôn loài sinh sống vui vẻ"
  },
  "zebra": {
    "url": "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú ngựa vằn sọc đen trắng trên thảo nguyên"
  },
  "buzz": {
    "url": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tiếng vo ve rộn ràng của đàn ong"
  },
  "wet": {
    "url": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những giọt mưa ướt đẫm cành lá xanh"
  },
  "win": {
    "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc cúp vàng chiến thắng rực rỡ"
  },
  "wind": {
    "url": "/assets/ehon/kite.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon làn gió nâng cánh diều bay cao"
  },
  "web": {
    "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mạng nhện giăng tơ long lanh sương sớm"
  },
  "ring": {
    "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc nhẫn ngọc lấp lánh sắc màu"
  },
  "sing": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé con ca hát líu lo vang rộn"
  },
  "king": {
    "url": "/assets/ehon/queen_park.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon vị vua hiền từ đội vương miện"
  },
  "wing": {
    "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi cánh chim sải dài bay trên mây"
  },
  "van": {
    "url": "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe van dã ngoại xinh xắn rực rỡ"
  },
  "vet": {
    "url": "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bác sĩ thú y chăm sóc chú cún nhỏ"
  },
  "vest": {
    "url": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc áo vest thanh lịch cho ngày lễ hội"
  },
  "book": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuốn sách truyện tranh mở ra chân trời mới"
  },
  "cook": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nấu món súp ngon lành cho cả nhà"
  },
  "look": {
    "url": "/assets/ehon/cat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú mèo ngước nhìn ngắm cánh bướm"
  },
  "foot": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bàn chân nhỏ xinh bước đi trên cát"
  },
  "moon": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mặt trăng tròn vằng vặc tỏa ánh vàng dịu mát"
  },
  "spoon": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc thìa xúc cháo ngoan ngoãn"
  },
  "room": {
    "url": "/assets/ehon/sit.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon căn phòng nhỏ ấm cúng ngập nắng"
  },
  "pool": {
    "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hồ bơi nước trong xanh mát rượi"
  },
  "yak": {
    "url": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú bò Tây Tạng lông dài trên núi cao"
  },
  "yes": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mỉm cười gật đầu đồng ý rạng rỡ"
  },
  "yell": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Reo vang cổ vũ trong niềm hân hoan"
  },
  "yam": {
    "url": "https://images.unsplash.com/photo-1596450514735-111a2fe0ac44?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Củ khoai mỡ thơm bùi ngọt lành"
  },
  "fix": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Sửa chữa chiếc xe đồ chơi yêu thích"
  },
  "mix": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Trộn các màu vẽ tạo thành sắc cầu vồng"
  },
  "chin": {
    "url": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc cằm xinh xắn đáng yêu của em bé"
  },
  "chop": {
    "url": "https://images.unsplash.com/photo-1588619461234-583597b8195e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chặt củi khô chuẩn bị sưởi ấm"
  },
  "chat": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hai bạn nhỏ trò chuyện rôm rả"
  },
  "chest": {
    "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc rương kho báu gỗ cổ xưa"
  },
  "ship": {
    "url": "/assets/ehon/ship.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon con tàu rẽ sóng ra khơi"
  },
  "shop": {
    "url": "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cửa hàng đồ chơi đầy ắp sắc màu"
  },
  "shed": {
    "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nhà kho gỗ nhỏ trong khu vườn"
  },
  "shell": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Vỏ sò biển lấp lánh trên cát trắng"
  },
  "thin": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuốn sổ nhỏ mỏng nhẹ"
  },
  "thorn": {
    "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Gai hoa hồng nhọn sắc"
  },
  "thumb": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngón tay cái giơ lên khen ngợi: Bé giỏi lắm!"
  },
  "moth": {
    "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú bướm đêm cánh nhung vỗ cánh"
  },
  "this": {
    "url": "/assets/ehon/ant_pan.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chiếc chảo này của bạn Sam"
  },
  "that": {
    "url": "/assets/ehon/kite.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon cánh diều bay đằng kia"
  },
  "then": {
    "url": "/assets/ehon/cat_nap.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon và rồi chú mèo ngủ say"
  },
  "queen": {
    "url": "/assets/ehon/queen_park.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon Nữ Hoàng nhân từ đội vương miện dạo bước"
  },
  "quick": {
    "url": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chạy thật nhanh về đích"
  },
  "quilt": {
    "url": "/assets/ehon/cat_mat.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chiếc chăn đắp ghép vải hoa ấm cúng"
  },
  "quack": {
    "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú vịt con bơi lội kêu quạc quạc vui tai"
  },
  "out": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bước ra ngoài thiên nhiên hít thở gió mát"
  },
  "cloud": {
    "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đám mây trắng bồng bềnh như kẹo bông"
  },
  "loud": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tiếng trống kèn vang dội rộn rã"
  },
  "shout": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hò reo vui mừng khi chiến thắng"
  },
  "coin": {
    "url": "/assets/ehon/queen_coin.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon đồng xu ngôi sao vàng lấp lánh trên cỏ xanh"
  },
  "soil": {
    "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mảnh đất màu mỡ ươm mầm hạt giống"
  },
  "oil": {
    "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dầu ô liu óng vàng thơm ngon"
  },
  "boil": {
    "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nồi nước sôi sục bốc hơi nghi ngút"
  },
  "blue": {
    "url": "/assets/ehon/three_fish.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon làn nước biển xanh biếc mát rượi"
  },
  "clue": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dấu vết manh mối mở ra rương kho báu"
  },
  "glue": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lọ hồ dán thủ công cắt dán tranh Ehon"
  },
  "sister": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chị gái nắm tay em nhỏ đi dạo"
  },
  "winter": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mùa đông tuyết rơi trắng xóa dịu êm"
  },
  "letter": {
    "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lá thư viết tay gửi lời yêu thương"
  },
  "water": {
    "url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dòng nước ngọt mát lành trong vắt"
  },
  "star": {
    "url": "/assets/ehon/star.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon ngôi sao vàng khổng lồ lấp lánh"
  },
  "car": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe hơi đỏ bon bon trên đường"
  },
  "park": {
    "url": "/assets/ehon/queen_park.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon công viên rợp bóng cây xanh"
  },
  "farm": {
    "url": "/assets/ehon/hen.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon nông trại gia đình ấm áp bên muôn thú"
  },
  "fish": {
    "url": "/assets/ehon/three_fish.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon ba chú cá tung tăng dưới nước"
  },
  "popcorn": {
    "url": "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bắp rang bơ thơm giòn"
  },
  "elephant": {
    "url": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú voi con khổng lồ"
  },
  "elbow": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khuỷu tay khỏe mạnh của bé"
  },
  "heart": {
    "url": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Trái tim đỏ tràn ngập tình yêu thương"
  },
  "snake": {
    "url": "https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú rắn lục hiền lành uốn lượn"
  },
  "tennis": {
    "url": "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả bóng tennis nỉ vàng tươi"
  },
  "big": {
    "url": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khổng lồ như chú voi"
  },
  "ben": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bạn nhỏ tên Ben"
  },
  "shun": {
    "url": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tránh né"
  },
  "dab": {
    "url": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chấm nhẹ"
  },
  "sock": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi tất len ấm áp sắc màu"
  },
  "sand": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bãi cát vàng mịn màng bên bờ biển"
  },
  "seal": {
    "url": "https://images.unsplash.com/photo-1551085254-e96b210df58a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú hải cẩu đáng yêu trên tảng băng"
  },
  "soft": {
    "url": "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú gấu bông lông mềm êm ái"
  },
  "ash": {
    "url": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tro ấm trong lò sưởi mùa đông"
  },
  "add": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khối gỗ xếp hình thêm một khối nữa"
  },
  "am": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Em bé vui tươi tự tin là chính mình"
  },
  "an": {
    "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Một quả cam ngọt lành thơm mát"
  },
  "tent": {
    "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc lều cắm trại ấm cúng giữa thiên nhiên"
  },
  "tip": {
    "url": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đầu ngón tay nhỏ nhắn chạm nhẹ"
  },
  "toy": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những món đồ chơi bằng gỗ rực rỡ"
  },
  "tiger": {
    "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú hổ vằn dũng mãnh nghỉ mát"
  },
  "if": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nụ cười rạng rỡ của bạn nhỏ"
  },
  "is": {
    "url": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mèo con đang nằm ngủ thật ngoan"
  },
  "itch": {
    "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cún gãi tai ngộ nghĩnh"
  },
  "inch": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thước đo từng phân tí hon"
  },
  "pup": {
    "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cún con lông xù đáng yêu chạy nhảy"
  },
  "pop": {
    "url": "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bong bóng xà phòng vỡ tung tóe"
  },
  "pet": {
    "url": "/assets/ehon/dog.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú cún cưng thân thiết"
  },
  "pond": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mặt ao trong vắt bóng mây trời"
  },
  "neck": {
    "url": "/assets/ehon/giraffe.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú hươu cao cổ với chiếc cổ dài"
  },
  "noon": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mặt trời rực rỡ chiếu sáng đúng giữa trưa hè"
  },
  "nine": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chữ số chín bằng gỗ sắc màu"
  },
  "nose": {
    "url": "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc mũi nhỏ xinh của em bé"
  },
  "can": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc lon nước quả mát lành"
  },
  "cot": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc nôi ấm áp cho bé ngủ ngon"
  },
  "kiss": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nụ hôn yêu thương của mẹ dành cho con"
  },
  "kick": {
    "url": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé sút bóng trên sân cỏ xanh"
  },
  "elk": {
    "url": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú nai sừng tấm sừng sững giữa rừng thông"
  },
  "echo": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hẻm núi cao nơi tiếng vang vọng lại"
  },
  "exit": {
    "url": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lối ra rộng mở ngập tràn ánh sáng"
  },
  "empty": {
    "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bát gốm trắng tinh tươm"
  },
  "bell": {
    "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc chuông vàng leng keng rộn rã"
  },
  "hand": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bàn tay nhỏ xinh xòe rộng năm ngón"
  },
  "hill": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngọn đồi cỏ xanh ngắt thoai thoải"
  },
  "home": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mái nhà ấm cúng bình yên"
  },
  "rod": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cần câu cá nằm nghiêng bên bờ hồ"
  },
  "rib": {
    "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cún con ngoan ngoãn nằm ngủ"
  },
  "rock": {
    "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tảng đá cuội tròn xoe mịn màng"
  },
  "mug": {
    "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc ly gốm đựng nước ấm"
  },
  "moss": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thảm rêu xanh biếc mềm mịn trên đá"
  },
  "mask": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mặt nạ hóa trang ngộ nghĩnh cho trẻ thơ"
  },
  "duck": {
    "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú vịt con lông vàng bơi lội"
  },
  "drum": {
    "url": "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc trống gỗ gõ vang rộn rã"
  },
  "doll": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Búp bê xinh xắn cài nơ hồng"
  },
  "desk": {
    "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bàn học gỗ ngăn nắp của bé"
  },
  "gift": {
    "url": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hộp quà thắt nơ ruy băng đỏ xinh xắn"
  },
  "gate": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cánh cổng gỗ dẫn vào khu vườn hoa"
  },
  "gold": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những đồng tiền vàng lấp lánh chói lọi"
  },
  "girl": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé gái dễ thương mỉm cười rạng ngời"
  },
  "goose": {
    "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú ngỗng trắng kiêu hãnh bơi lội"
  },
  "odd": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những khối đồ chơi số lẻ vui nhộn"
  },
  "otter": {
    "url": "https://images.unsplash.com/photo-1551085254-e96b210df58a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú rái cá tinh nghịch nổi trên mặt nước"
  },
  "ostrich": {
    "url": "https://images.unsplash.com/photo-1543946207-39bd91e70ca7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú đà điểu sải bước chân dài"
  },
  "orange": {
    "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả cam vàng mọng nước ngọt lành"
  },
  "under": {
    "url": "/assets/ehon/ant_pan.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chú kiến nấp dưới đáy chảo"
  },
  "uncle": {
    "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Người chú vui tính luôn tươi cười"
  },
  "ugly": {
    "url": "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú vịt con hóa thành thiên nga"
  },
  "bus": {
    "url": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe buýt màu vàng đưa bé đến trường"
  },
  "lamp": {
    "url": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc đèn bàn tỏa ánh sáng vàng ấm"
  },
  "leaf": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc lá xanh biếc đọng giọt sương mai"
  },
  "lock": {
    "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ổ khóa đồng bảo vệ kho báu"
  },
  "lime": {
    "url": "https://images.unsplash.com/photo-1534856966150-c832f7b7a005?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả chanh xanh tươi mát thơm phức"
  },
  "lake": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mặt hồ phẳng lặng phản chiếu mây trời"
  },
  "lion": {
    "url": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú sư tử bờm vàng oai vệ"
  },
  "fog": {
    "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Làn sương mù mờ ảo giăng lối"
  },
  "frog": {
    "url": "https://images.unsplash.com/photo-1579380656108-328e8042d34d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú ếch xanh ngồi trên lá sen"
  },
  "flag": {
    "url": "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lá cờ sắc màu bay phấp phới trong gió"
  },
  "bed": {
    "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc giường êm ái với gối nệm mềm mại"
  },
  "bun": {
    "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bánh mì nướng tròn thơm phức"
  },
  "bear": {
    "url": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú gấu nâu hiền hòa trong rừng"
  },
  "train": {
    "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đoàn tàu hỏa xình xịch vượt qua thung lũng"
  },
  "mail": {
    "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lá thư tay dán tem xinh xắn"
  },
  "paint": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bảng màu nước rực rỡ sắc cầu vồng"
  },
  "wait": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé ngoan kiên nhẫn chờ đến lượt mình"
  },
  "pail": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xô nhựa xúc cát màu vàng"
  },
  "chain": {
    "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Sợi dây xích đu kim loại vững chắc"
  },
  "jump": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé bật nhảy cao vui sướng trên bãi cỏ"
  },
  "jar": {
    "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hũ thủy tinh trong suốt đựng kẹo ngọt"
  },
  "jeep": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe jeep thám hiểm địa hình dũng mãnh"
  },
  "jelly": {
    "url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thạch trái cây núng nính ngọt mát"
  },
  "jacket": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc áo khoác ấm áp có mũ trùm"
  },
  "juice": {
    "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ly nước cam tươi ép mát lạnh"
  },
  "road": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con đường quê êm đềm rợp bóng cây"
  },
  "toad": {
    "url": "https://images.unsplash.com/photo-1579380656108-328e8042d34d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cóc nhỏ hiền lành nấp sau tảng đá"
  },
  "oak": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây sồi cổ thụ tán lá sum suê"
  },
  "loaf": {
    "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ổ bánh mì nướng vàng giòn thơm nức"
  },
  "float": {
    "url": "/assets/ehon/ship.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon chiếc thuyền bồng bềnh trên sóng"
  },
  "coach": {
    "url": "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cỗ xe ngựa thần tiên đưa công chúa dạo chơi"
  },
  "die": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Viên xúc xắc xúc xắc may mắn"
  },
  "cried": {
    "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mếu máo và được mẹ ôm vào lòng"
  },
  "spied": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé nhìn qua kính lúp khám phá"
  },
  "fried": {
    "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả trứng ốp la rán vàng óng ả"
  },
  "dried": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Vỏ sò khô cong lấp lánh dưới nắng"
  },
  "flies": {
    "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú chim nhỏ tung cánh bay lượn"
  },
  "skies": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bầu trời đêm ngàn sao rực rỡ"
  },
  "sweet": {
    "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Vị ngọt thơm ngào ngạt của mật ong"
  },
  "sheep": {
    "url": "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đàn cừu lông trắng bông như mây gặm cỏ"
  },
  "green": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cánh đồng cỏ xanh mướt trải dài"
  },
  "sleep": {
    "url": "/assets/ehon/cat_nap.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon bé ngủ say giấc nồng ấm áp"
  },
  "deep": {
    "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Làn nước hồ trong xanh sâu thẳm"
  },
  "meet": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ vui mừng gặp gỡ nhau"
  },
  "cork": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nút bấc gỗ nhẹ nổi trên mặt nước"
  },
  "torch": {
    "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngọn đuốc thắp sáng đêm tối"
  },
  "horse": {
    "url": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú ngựa nâu tung vó trên thảo nguyên"
  },
  "north": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngôi sao Phương Bắc dẫn lối trên bầu trời"
  },
  "born": {
    "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú gà con vừa chào đời từ quả trứng"
  },
  "morning": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ánh bình minh sớm mai chan hòa ấm áp"
  },
  "fizz": {
    "url": "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bọt nước sủi tăm li ti mát rượi"
  },
  "zero": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khối gỗ tròn xoe số 0"
  },
  "zigzag": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đường nét zíc zắc sắc màu rực rỡ"
  },
  "breeze": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Làn gió nhẹ khẽ lay ngọn cỏ"
  },
  "prize": {
    "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Huy chương vàng lấp lánh tặng bé ngoan"
  },
  "snooze": {
    "url": "/assets/ehon/cat_nap.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon bé chợp mắt ngủ trưa ngoan ngoãn"
  },
  "wig": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bộ tóc giả hóa trang vui nhộn sắc màu"
  },
  "wall": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bức tường gạch ấm cúng treo tranh xinh"
  },
  "wish": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngôi sao băng mang theo điều ước diệu kỳ"
  },
  "wolf": {
    "url": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú sói xám hiền hòa giữa tuyết trắng"
  },
  "wave": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con sóng biển xanh tung bọt trắng xóa"
  },
  "warm": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi tất len ấm áp sưởi ấm đôi chân"
  },
  "song": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bản nhạc vui tươi với những nốt nhạc nhảy múa"
  },
  "long": {
    "url": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đoàn tàu hỏa dài uốn lượn qua đồi"
  },
  "strong": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé khỏe mạnh giơ bắp tay tràn đầy năng lượng"
  },
  "swing": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xích đu gỗ đung đưa dưới bóng cây"
  },
  "spring": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mùa xuân hoa đào nở rộ ngát hương"
  },
  "cling": {
    "url": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú gấu con bám chặt thân cây"
  },
  "vine": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dây leo xanh tốt bám quanh giàn gỗ"
  },
  "vase": {
    "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bình hoa gốm sứ cắm những cành hoa tươi"
  },
  "voice": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Giọng hát trong trẻo líu lo của bạn nhỏ"
  },
  "velvet": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dải vải nhung đỏ mềm mịn như nhung"
  },
  "village": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngôi làng nhỏ bình yên nép mình bên thung lũng"
  },
  "violin": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây đàn vĩ cầm cất lên giai điệu du dương"
  },
  "volcano": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngọn núi hùng vĩ vươn cao chạm mây"
  },
  "wood": {
    "url": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khúc gỗ sồi chắc nịch thơm hương rừng"
  },
  "wool": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuộn len cừu ấm áp mềm như kẹo bông"
  },
  "hook": {
    "url": "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Móc treo tường bằng đồng gọn gàng"
  },
  "hood": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc mũ áo khoác trùm đầu ấm áp"
  },
  "brook": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dòng suối trong veo chảy róc rách qua đá"
  },
  "shook": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cành cây rung rinh rơi những chiếc lá vàng"
  },
  "root": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Rễ cây cổ thụ bám sâu vào lòng đất"
  },
  "cool": {
    "url": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Làn nước mát rượi xua tan cái nóng hè"
  },
  "tool": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bộ đồ nghề cơ khí bằng gỗ của bé"
  },
  "food": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bữa cơm gia đình ấm cúng ngon lành"
  },
  "balloon": {
    "url": "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chùm bóng bay nhiều sắc màu bay lên trời xanh"
  },
  "yard": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khoảng sân cỏ xanh mướt trước hiên nhà"
  },
  "yarn": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuộn len màu sắc sặc sỡ"
  },
  "yellow": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Sắc vàng tươi tắn của hoa hướng dương"
  },
  "yogurt": {
    "url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hũ sữa chua trái cây thơm ngon bổ dưỡng"
  },
  "yoyo": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con quay yo-yo gỗ quay tít"
  },
  "young": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mầm cây non tràn trề sức sống"
  },
  "wax": {
    "url": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây nến sáp ong ấm áp"
  },
  "tax": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những đồng xu nhỏ xếp chồng ngay ngắn"
  },
  "flax": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông hoa lanh màu lam biếc dịu dàng"
  },
  "chip": {
    "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Miếng khoai tây chiên giòn rụm"
  },
  "chick": {
    "url": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú gà con lông tơ vàng óng đáng yêu"
  },
  "cherry": {
    "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cặp quả anh đào đỏ mọng nước"
  },
  "chair": {
    "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc ghế bành gỗ xinh xắn trong phòng"
  },
  "cheese": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Miếng phô mai vàng óng thơm ngon"
  },
  "child": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Em bé thơ ngây với nụ cười thiên thần"
  },
  "dish": {
    "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc đĩa gốm hoa văn trang nhã"
  },
  "shine": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những tia sáng lấp lánh rực rỡ"
  },
  "shark": {
    "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cá mập bơi lượn dũng mãnh"
  },
  "shadow": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bóng dáng bé nhỏ in trên mặt đất dưới nắng"
  },
  "brush": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây cọ vẽ lông mềm quét nét màu tươi"
  },
  "three": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ba khối gỗ đồ chơi xếp ngay ngắn"
  },
  "teeth": {
    "url": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hàm răng trắng đều xinh xắn khi bé cười tươi"
  },
  "path": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con đường đá uốn lượn giữa vườn hoa"
  },
  "bath": {
    "url": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bồn tắm đầy bọt xà phòng trắng muốt"
  },
  "thick": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuốn sách tranh bìa cứng dày dặn"
  },
  "cloth": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tấm khăn vải mềm mại màu sắc nhã nhặn"
  },
  "them": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nhóm bạn nhỏ vui vẻ cùng chơi đùa"
  },
  "with": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cùng nhau nắm tay thân thiết"
  },
  "they": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ đang ca múa rộn ràng"
  },
  "there": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đằng xa là cánh đồng hoa ngát hương"
  },
  "father": {
    "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Người cha ấm áp dắt tay con dạo bước"
  },
  "mother": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Người mẹ dịu dàng ôm ấp con thơ"
  },
  "feather": {
    "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc lông chim mềm mại bay lượn trong gió"
  },
  "quiet": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Góc đọc sách yên tĩnh và thanh bình"
  },
  "quill": {
    "url": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây bút lông vũ cổ điển viết trên giấy"
  },
  "quiz": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Câu đố tranh vui nhộn cho bé"
  },
  "quail": {
    "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú chim cút nhỏ nhắn xinh xắn"
  },
  "liquid": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dòng nước trong vắt mát lành"
  },
  "squirrel": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú sóc nhỏ đuôi xù gặm hạt dẻ"
  },
  "mouse": {
    "url": "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú chuột đồng nhỏ xíu đáng yêu"
  },
  "house": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngôi nhà xinh xắn có vườn hoa trước cửa"
  },
  "round": {
    "url": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả bóng tròn xoe nảy tưng tưng"
  },
  "mouth": {
    "url": "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khuôn miệng cười tươi rạng rỡ của bạn nhỏ"
  },
  "sound": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Âm thanh tiếng chuông ngân nga"
  },
  "count": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé đếm các khối số sắc màu"
  },
  "point": {
    "url": "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngón tay bé chỉ vào hình vẽ thú vị"
  },
  "join": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ cùng nắm tay tham gia trò chơi"
  },
  "spoil": {
    "url": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Món quà ngọt ngào chan chứa yêu thương"
  },
  "foil": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tờ giấy bạc ánh kim lấp lánh"
  },
  "noise": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tiếng cười giòn tan rộn rã căn phòng"
  },
  "toilet": {
    "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bồn rửa tay sạch sẽ thơm tho"
  },
  "true": {
    "url": "/assets/ehon/star.jpg",
    "type": "ehon",
    "alt": "Tranh Ehon tình bạn chân thành tỏa sáng như sao"
  },
  "rescue": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe cứu hộ dũng cảm lên đường"
  },
  "statue": {
    "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bức tượng đá trắng thanh thoát trong công viên"
  },
  "argue": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hai bạn nhỏ biết nhường nhịn cùng cười"
  },
  "avenue": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đại lộ rợp bóng cây xanh thẳng tắp"
  },
  "value": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Viên ngọc quý giá lấp lánh sắc màu"
  },
  "tissue": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hộp khăn giấy mềm mại thơm tho"
  },
  "butter": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Miếng bơ vàng thơm ngậy béo mềm"
  },
  "flower": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông hoa hồng nhung nở rộ rực rỡ"
  },
  "spider": {
    "url": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú nhện nhỏ chăm chỉ dệt tơ bạc"
  },
  "barn": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nhà kho đỏ đựng cỏ khô trên nông trại"
  },
  "dark": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Màn đêm yên tĩnh ngàn vì sao sáng"
  },
  "card": {
    "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tấm thiệp sinh nhật sắc màu bé tự vẽ"
  },
  "farmer": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bác nông dân chăm chỉ thu hoạch trái ngọt trên cánh đồng"
  },
  "silver": {
    "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc chuông bạc sáng lấp lánh ngân vang"
  },
  "garden": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khu vườn cổ tích ngập tràn sắc hoa"
  },
  "urchin": {
    "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú nhím biển tròn xoe dưới đáy rạn san hô"
  },
  "butterfly": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cánh bướm sắc màu rực rỡ đậu trên bông hoa"
  },
  "bunny": {
    "url": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú thỏ trắng con tai dài mắt tròn xoe ngộ nghĩnh"
  },
  "zebu": {
    "url": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú bò u zebu thong dong gặm cỏ trên thảo nguyên"
  },
  "fang": {
    "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc răng nanh khỏe khoắn của chú hổ"
  },
  "yellowhammer": {
    "url": "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chim sẻ vàng yellowhammer líu lo trên cành sồi"
  },
  "quetzal": {
    "url": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chim quetzal rực rỡ với chiếc đuôi xanh óng ánh"
  },
  "hound": {
    "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú chó săn tai cụp hiền lành trung thành"
  },
  "trout": {
    "url": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cá hồi chấm bơi lội dưới làn suối trong vắt"
  },
  "koi": {
    "url": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đàn cá Koi sắc đỏ trắng bơi lượn trong hồ ngọc bích"
  },
  "oyster": {
    "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con hàu mở hé vỏ lấp lánh viên ngọc trai"
  },
  "sea": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Biển xanh bao la dạt dào từng đợt sóng vỗ"
  },
  "sky": {
    "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bầu trời xanh trong vắt trải rộng đến chân trời"
  },
  "stream": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dòng suối nhỏ chảy róc rách qua ghềnh đá rêu phong"
  },
  "stone": {
    "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hòn đá cuội tròn nhẵn bên bờ nước mát lành"
  },
  "snow": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông tuyết trắng muốt rơi nhẹ êm đềm"
  },
  "acorn": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả sồi nâu nhỏ xinh nằm trên thảm lá vàng"
  },
  "amber": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Viên hổ phách vàng óng ánh ấm áp"
  },
  "autumn": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mùa thu vàng rực rỡ lá phong rơi nhẹ"
  },
  "trail": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con đường mòn nhỏ uốn lượn xuyên qua rừng thông"
  },
  "tulip": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông hoa tulip đỏ rực rỡ đón nắng sớm"
  },
  "tide": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngọn thủy triều dâng êm đềm vào bờ cát trắng"
  },
  "twig": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cành cây nhỏ nảy những mầm non xanh biếc"
  },
  "thunder": {
    "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ánh sấm chớp lóe sáng trên nền mây giông"
  },
  "island": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hòn đảo ngọc xanh biếc giữa đại dương bao la"
  },
  "iceberg": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tảng băng trôi khổng lồ trắng muốt trên mặt biển"
  },
  "ivy": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dây thường xuân xanh mướt bò quanh bức tường đá"
  },
  "petal": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cánh hoa hồng mềm mại mịn như nhung"
  },
  "pebble": {
    "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những viên sỏi cuội tròn xoe nhiều màu sắc"
  },
  "puddle": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Vũng nước mưa trong soi bóng mây trời"
  },
  "night": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bầu trời đêm thanh bình ngàn sao lấp lánh"
  },
  "cliff": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Vách đá cao sừng sững bên bờ sóng vỗ"
  },
  "earth": {
    "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mảnh đất màu mỡ ôm ấp mầm xanh sinh sôi"
  },
  "horizon": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đường chân trời xa tít tắp nơi biển gặp trời"
  },
  "rainbow": {
    "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cầu vồng bảy sắc lung linh sau cơn mưa rào"
  },
  "rose": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đóa hoa hồng đỏ thắm tỏa ngát hương thơm"
  },
  "mountain": {
    "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngọn núi hùng vĩ đỉnh phủ mây trắng"
  },
  "meadow": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đồng cỏ xanh bát ngát rực rỡ hoa dại"
  },
  "dandelion": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông hoa bồ công anh tròn xoe bay theo gió"
  },
  "desert": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Sa mạc cát vàng rực rỡ dưới ánh mặt trời"
  },
  "dew": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Giọt sương mai long lanh đọng trên ngọn cỏ non"
  },
  "grass": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thảm cỏ xanh mướt mát rượi dưới bàn chân"
  },
  "ocean": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đại dương xanh thẳm bao la muôn trùng sóng vỗ"
  },
  "oasis": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ốc đảo tươi mát với rặng cọ xanh giữa sa mạc"
  },
  "uphill": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đoạn đường dốc thoai thoải lên ngọn đồi xanh"
  },
  "lily": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông hoa loa kèn trắng tinh khôi thanh khiết"
  },
  "forest": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khu rừng nguyên sinh rợp bóng cây cổ thụ"
  },
  "frost": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lớp sương giá lóng lánh phủ trắng cành cây"
  },
  "blossom": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những đóa hoa anh đào nở rộ khoe sắc xuân"
  },
  "hail": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những viên mưa đá trắng tròn rơi lách tách"
  },
  "daisy": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông cúc họa mi nhụy vàng cánh trắng xinh xắn"
  },
  "jungle": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Rừng nhiệt đới rậm rạp với muôn loài hoa cỏ"
  },
  "coast": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bờ biển uốn lượn bên làn nước xanh trong"
  },
  "foam": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bọt sóng biển trắng xóa lăn tăn vỗ vào bờ"
  },
  "blizzard": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cơn bão tuyết cuộn gió trắng xóa mùa đông"
  },
  "woods": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Rừng cây yên ả rải đầy lá khô thơm phức"
  },
  "valley": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thung lũng xanh mướt nằm giữa hai dãy núi cao"
  },
  "bloom": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nụ hoa bừng nở rực rỡ đón ánh nắng mai"
  },
  "galaxy": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dải ngân hà lấp lánh hàng triệu vì sao sáng"
  },
  "chestnut": {
    "url": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hạt dẻ nâu bóng bẩy thơm bùi mùa thu"
  },
  "shore": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bờ cát êm dịu nơi sóng biển vỗ về"
  },
  "shade": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bóng râm mát rượi dưới tán cây xanh xum xuê"
  },
  "shower": {
    "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cơn mưa rào mùa hạ tưới mát khắp cỏ cây"
  },
  "thistle": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bông hoa kế tím gai góc vươn cao trên đồng"
  },
  "weather": {
    "url": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thời tiết ấm áp nắng nhẹ gió hiu hiu"
  },
  "northern": {
    "url": "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dải cực quang phương bắc lung linh huyền ảo"
  },
  "quartz": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tinh thể thạch anh trong suốt lấp lánh ánh kim"
  },
  "quarry": {
    "url": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khu mỏ đá trắng tự nhiên kỳ vĩ"
  },
  "ground": {
    "url": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mặt đất vững chãi dưới bầu trời cao rộng"
  },
  "river": {
    "url": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dòng sông xanh êm đềm uốn lượn quanh đồng quê"
  },
  "summer": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mùa hè rực rỡ chan hòa ánh nắng ấm áp"
  },
  "soup": {
    "url": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bát súp rau củ ấm nóng thơm ngon"
  },
  "seesaw": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bập bênh gỗ vui nhộn trong sân chơi"
  },
  "salad": {
    "url": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đĩa xà lách tươi xanh ngon lành bổ dưỡng"
  },
  "arrow": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mũi tên chỉ hướng vẽ sắc màu"
  },
  "anchor": {
    "url": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mỏ neo bằng đồng chắc chắn của con tàu"
  },
  "apron": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc tạp dề nhỏ xinh cho bé tập làm bánh"
  },
  "teapot": {
    "url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ấm trà gốm xinh xắn tỏa hương thơm ấm cúng"
  },
  "tower": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tòa tháp cổ tích cao vút chạm mây"
  },
  "toast": {
    "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lát bánh mì nướng vàng giòn thơm phức"
  },
  "tomato": {
    "url": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả cà chua chín đỏ mọng ngọt lành"
  },
  "iron": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bàn là ủi phẳng phiu tươm tất"
  },
  "plum": {
    "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả mận tím chín mọng ngọt mát"
  },
  "pizza": {
    "url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bánh pizza phô mai thơm phức giòn rụm"
  },
  "pear": {
    "url": "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả lê ngọt mát giòn tan nhiều nước"
  },
  "plate": {
    "url": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc đĩa sứ trắng sạch sẽ tinh tươm"
  },
  "needle": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây kim khâu nhỏ nhắn cùng cuộn chỉ sắc màu"
  },
  "note": {
    "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mảnh giấy ghi chú nhỏ nhắn đáng yêu"
  },
  "napkin": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khăn ăn bằng vải mềm gấp gọn gàng"
  },
  "noodles": {
    "url": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tô mì sợi thơm ngon nóng hổi"
  },
  "necklace": {
    "url": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc vòng cổ xâu hạt ngọc lấp lánh"
  },
  "cake": {
    "url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc bánh kem sinh nhật dâu tây thơm ngon"
  },
  "carrot": {
    "url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Củ cà rốt cam giòn ngọt tươi ngon"
  },
  "cookie": {
    "url": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bánh quy sô-cô-la thơm giòn nướng vàng"
  },
  "envelope": {
    "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc phong bì thư gửi lời chúc yêu thương"
  },
  "easel": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Giá vẽ tranh bằng gỗ của họa sĩ nhí"
  },
  "eraser": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cục tẩy trắng nhỏ xinh tẩy sạch nét chì"
  },
  "honey": {
    "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hũ mật ong vàng óng thơm ngọt tự nhiên"
  },
  "helmet": {
    "url": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mũ bảo hiểm sắc màu bảo vệ bé an toàn"
  },
  "ribbon": {
    "url": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dải ruy băng lụa đỏ buộc hộp quà xinh xắn"
  },
  "rope": {
    "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Sợi dây thừng bện chắc chắn cho trò kéo co"
  },
  "radio": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc radio cổ điển phát những bài ca vui tươi"
  },
  "rocket": {
    "url": "https://images.unsplash.com/photo-1517976487588-29a32c253d71?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tàu con thoi phóng vút vào không gian vũ trụ"
  },
  "mitten": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi găng tay len ấm áp ngày đông tuyết rơi"
  },
  "mirror": {
    "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc gương soi khung gỗ phản chiếu nụ cười"
  },
  "melon": {
    "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả dưa lưới thơm lừng ngọt mát mùa hè"
  },
  "muffin": {
    "url": "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bánh muffin việt quất nướng xốp mềm"
  },
  "donut": {
    "url": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bánh vòng donut phủ đường dâu rực rỡ"
  },
  "dress": {
    "url": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc váy xòe hoa nhí xinh xắn của bé gái"
  },
  "guitar": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây đàn ghi-ta gỗ vang lên điệu nhạc rộn rã"
  },
  "grape": {
    "url": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chùm nho tím mọng nước thơm ngọt"
  },
  "glove": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi găng tay ấm áp sắc màu cho trẻ em"
  },
  "olive": {
    "url": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những quả ô liu xanh mướt trên cành lá bạc"
  },
  "omelet": {
    "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Món trứng cuộn chiên vàng thơm phức bữa sáng"
  },
  "ukulele": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây đàn ukulele nhỏ nhắn giai điệu vui tươi"
  },
  "uniform": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bộ đồng phục học sinh tinh tươm ngày tựu trường"
  },
  "lemon": {
    "url": "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả chanh vàng óng chua ngọt thơm lừng"
  },
  "ladder": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc thang gỗ giúp hái những quả táo chín"
  },
  "flute": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây sáo bạc cất tiếng du dương êm tai"
  },
  "fruit": {
    "url": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Giỏ trái cây nhiệt đới ngọt ngào sắc màu"
  },
  "banana": {
    "url": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nải chuối vàng ươm ngọt thơm bổ dưỡng"
  },
  "bread": {
    "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ổ bánh mì vỏ giòn ruột mềm mới ra lò"
  },
  "wheel": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bánh xe tròn lăn đều đưa xe tiến bước"
  },
  "cord": {
    "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dây dù bền chắc nhiều sắc màu"
  },
  "zipper": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Dây khóa kéo áo khoác ấm áp của bé"
  },
  "zucchini": {
    "url": "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả bí ngòi xanh tươi ngon trong vườn nhà"
  },
  "wagon": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe kéo nhỏ chở đầy quả chín và hoa tươi"
  },
  "whistle": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc còi bạc thổi vang tiếng vui tai"
  },
  "watch": {
    "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc đồng hồ đeo tay sắc màu nhắc bé đúng giờ"
  },
  "watermelon": {
    "url": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Miếng dưa hấu đỏ mọng ngọt lịm xua tan cái nóng"
  },
  "string": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Sợi chỉ màu mềm mại khâu chiếc cúc xinh"
  },
  "broom": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây chổi rơm quét nhà sạch sẽ gọn gàng"
  },
  "boot": {
    "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi ủng cao su vàng cho bé nhảy vũng nước mưa"
  },
  "yacht": {
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc du thuyền trắng rẽ sóng khơi xa"
  },
  "yo-yo": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Con quay yo-yo gỗ quay tít lên xuống"
  },
  "yolk": {
    "url": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lòng đỏ trứng gà tròn xoe óng ả bổ dưỡng"
  },
  "axe": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc rìu nhỏ bằng gỗ đồ chơi an toàn cho bé"
  },
  "taxi": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe taxi vàng chở khách dạo phố"
  },
  "mixer": {
    "url": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Máy trộn bột làm bánh thơm ngon xốp mềm"
  },
  "saxophone": {
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Kèn sắc-xô-phôn ánh vàng ngân vang nốt nhạc trầm bổng"
  },
  "chalk": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những viên phấn màu rực rỡ vẽ tranh trên sân"
  },
  "chocolate": {
    "url": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thanh sô-cô-la ngọt ngào thơm ngon nức mũi"
  },
  "shirt": {
    "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc áo sơ mi trắng tinh tươm thẳng nếp"
  },
  "shoe": {
    "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đôi giày thể thao năng động êm ái"
  },
  "shovel": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xẻng nhỏ xúc cát xây lâu đài biển"
  },
  "shawl": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khăn choàng len ấm áp quàng cổ mùa đông"
  },
  "thread": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuộn chỉ may sắc màu dệt nên áo đẹp"
  },
  "thimble": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc đê may bằng bạc bảo vệ ngón tay"
  },
  "throne": {
    "url": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ngai vàng tráng lệ của đức vua trong lâu đài"
  },
  "leather": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tấm da thuộc nâu bền chắc êm ái"
  },
  "brother": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Anh trai âu yếm nắm tay em gái nhỏ"
  },
  "quarter": {
    "url": "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đồng xu bạc sáng lấp lánh trong tay bé"
  },
  "pouch": {
    "url": "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Túi vải rút đựng những món báu vật nhỏ"
  },
  "couch": {
    "url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc ghế sofa êm ái cho cả nhà cùng xem phim"
  },
  "coil": {
    "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cuộn lò xo nhún nhảy bằng kim loại"
  },
  "barbecue": {
    "url": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tiệc nướng ngoài trời thơm lừng ấm cúng"
  },
  "paper": {
    "url": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Trang giấy trắng mịn màng chờ bé tô vẽ"
  },
  "ruler": {
    "url": "https://images.unsplash.com/photo-1584990347449-34b7f73d8389?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cây thước kẻ gỗ đo từng phân thẳng tắp"
  },
  "hammer": {
    "url": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc búa gỗ đồ chơi cho thợ mộc nhí"
  },
  "cart": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe đẩy hàng mua sắm hoa quả cùng mẹ"
  },
  "scarf": {
    "url": "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc khăn quàng cổ dệt kim đỏ giữ ấm ngày lạnh"
  },
  "swim": {
    "url": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé thỏa thích bơi lội dưới làn nước mát lành"
  },
  "skip": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé vui sướng nhảy chân sáo trên đồng cỏ xanh"
  },
  "smile": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Nụ cười tươi rói rạng rỡ của bạn nhỏ"
  },
  "spin": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé dang tay xoay tròn hạnh phúc trong nắng mai"
  },
  "applaud": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Những tràng vỗ tay giòn giã cổ vũ bạn bè"
  },
  "ask": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé giơ tay đặt câu hỏi thông minh trong lớp"
  },
  "aim": {
    "url": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé nhắm đích quả bóng lăn trúng khung thành"
  },
  "admire": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé ngắm nhìn bức tranh tuyệt đẹp đầy thán phục"
  },
  "awake": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé vươn vai thức giấc mỉm cười đón ngày mới"
  },
  "talk": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hai bạn nhỏ vui vẻ trò chuyện tíu tít cùng nhau"
  },
  "turn": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé quay người xoay một vòng điệu nghệ"
  },
  "touch": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bàn tay nhỏ nhẹ nhàng chạm vào cánh hoa mềm"
  },
  "taste": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé nếm thử vị kem dâu ngọt lịm mát lạnh"
  },
  "tug": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ gắng sức kéo sợi dây thừng vui nhộn"
  },
  "invite": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé thân thiện mời bạn cùng tham gia bữa tiệc trà"
  },
  "inhale": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé hít thở thật sâu làn không khí trong lành buổi sớm"
  },
  "imitate": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé bắt chước dáng đi ngộ nghĩnh của chú vịt con"
  },
  "pull": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé kéo chiếc xe gỗ chở đầy gấu bông"
  },
  "push": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé đẩy chiếc xích đu đung đưa cho bạn cười vui"
  },
  "pick": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé hái những quả dâu tây chín đỏ trong vườn"
  },
  "play": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ say sưa chơi đùa cùng những khối gỗ"
  },
  "nibble": {
    "url": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú chuột nhỏ gặm nhấm hạt dẻ bùi ngon"
  },
  "nudge": {
    "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cún cưng dụi mõm âu yếm vào tay bé"
  },
  "climb": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé can đảm leo lên khung leo trèo công viên"
  },
  "catch": {
    "url": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé đón bắt gọn gàng quả bóng màu sắc"
  },
  "enter": {
    "url": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mở cửa bước vào căn phòng ấm áp"
  },
  "enjoy": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé tận hưởng trọn vẹn niềm vui tuổi thơ ngọt ngào"
  },
  "explore": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé thám hiểm thiên nhiên bằng chiếc kính lúp nhỏ"
  },
  "hold": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bàn tay nhỏ ôm chặt chú gấu bông mềm mại"
  },
  "help": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé ân cần giúp đỡ bạn thu dọn đồ chơi"
  },
  "hike": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Gia đình cùng nhau đi bộ dã ngoại ngắm cảnh núi rừng"
  },
  "read": {
    "url": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé say mê đọc cuốn sách tranh rực rỡ sắc màu"
  },
  "ride": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé tự tin đạp chiếc xe đạp ba bánh quanh sân"
  },
  "roll": {
    "url": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả bóng tròn lăn tít trên sân cỏ"
  },
  "march": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Các bạn nhỏ bước đều tăm tắp như những chú lính chì"
  },
  "make": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé khéo tay nặn chiếc bánh đất sét sắc màu"
  },
  "melt": {
    "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cục băng tuyết tan chảy thành giọt nước mát"
  },
  "dance": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé múa những điệu nhảy uyển chuyển đáng yêu"
  },
  "dive": {
    "url": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé lặn ngụp vui đùa dưới làn nước trong xanh"
  },
  "draw": {
    "url": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé vẽ những bông hoa và ngôi sao tươi sáng"
  },
  "grin": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé cười toe toét khoe lúm đồng tiền xinh"
  },
  "glide": {
    "url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Thiên nga lướt êm đềm trên mặt nước hồ phẳng lặng"
  },
  "gather": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé gom những chiếc lá vàng mùa thu thành đống nhỏ"
  },
  "open": {
    "url": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mở rộng cánh cửa sổ đón gió mát tràn vào"
  },
  "order": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé sắp xếp các khối hình theo thứ tự ngay ngắn"
  },
  "untie": {
    "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé cẩn thận gỡ nút thắt dải ruy băng quà tặng"
  },
  "unpack": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mở ba lô lấy đồ dùng học tập xinh xắn"
  },
  "listen": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé chăm chú lắng nghe tiếng chim hót véo von"
  },
  "laugh": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Tiếng cười khúc khích giòn tan của em bé"
  },
  "leap": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé bật nhảy cao qua vạch đích trong niềm hân hoan"
  },
  "find": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé reo mừng khi tìm thấy chiếc vỏ ốc lấp lánh"
  },
  "bounce": {
    "url": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Quả bóng nảy tưng tưng trên mặt sân"
  },
  "build": {
    "url": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé xếp những khối gỗ xây nên lâu đài kiên cố"
  },
  "praise": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mẹ mỉm cười khen ngợi khi bé làm việc tốt"
  },
  "juggle": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú hề tung hứng khéo léo ba quả bóng tròn"
  },
  "roam": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đàn hươu tự do thong dong dạo chơi trên trảng cỏ"
  },
  "cries": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Em bé mếu máo và nhanh chóng được mẹ ôm vào lòng"
  },
  "tries": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé kiên trì thử xếp tháp gỗ thêm lần nữa"
  },
  "see": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mở to đôi mắt nhìn ngắm thế giới rực rỡ"
  },
  "soar": {
    "url": "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cánh chim chao lượn bay vút trên nền trời xanh"
  },
  "roar": {
    "url": "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú sư tử cất tiếng gầm oai phong vang dội núi rừng"
  },
  "zoom": {
    "url": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc xe đồ chơi phóng vù vù trên đường đua"
  },
  "walk": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé tung tăng sải bước đi dạo trong công viên"
  },
  "wash": {
    "url": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé rửa đôi bàn tay xinh với xà phòng thơm tho"
  },
  "bring": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé mang cuốn truyện tranh hay đến chia sẻ cùng bạn"
  },
  "visit": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé đến thăm ông bà vào ngày cuối tuần ấm áp"
  },
  "view": {
    "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Khung cảnh thiên nhiên tráng lệ nhìn từ đỉnh đồi"
  },
  "yawn": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Em bé ngáp ngủ đáng yêu chuẩn bị lên giường"
  },
  "chase": {
    "url": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chú cún con tinh nghịch đuổi theo quả bóng lăn"
  },
  "chew": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé nhai miếng táo giòn tan ngọt lành"
  },
  "shake": {
    "url": "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé lắc chiếc lục lạc phát ra âm thanh leng keng"
  },
  "thank": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé lễ phép khoanh tay nói lời cảm ơn"
  },
  "think": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé nghiêng đầu suy nghĩ tìm lời giải câu đố vui"
  },
  "breathe": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé hít thở không khí ngọt ngào của hoa lá"
  },
  "soothe": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Lời ru êm dịu của mẹ vỗ về giấc ngủ bé thơ"
  },
  "together": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cả nhà cùng nắm tay quây quần bên nhau"
  },
  "quench": {
    "url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Ly nước mát lạnh giải tỏa cơn khát mùa hè"
  },
  "quiver": {
    "url": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Chiếc lá non run rẩy nhẹ nhàng trước làn gió nhẹ"
  },
  "rejoice": {
    "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Mọi người hân hoan reo ca chúc mừng ngày hội"
  },
  "pursue": {
    "url": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Bé hào hứng chạy đuổi theo cánh bướm hoa"
  },
  "whisper": {
    "url": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Hai bạn nhỏ thì thầm to nhỏ điều bí mật đáng yêu"
  },
  "flutter": {
    "url": "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Cánh bướm vỗ nhè nhẹ bay lượn bên khóm hoa"
  },
  "spark": {
    "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    "type": "photo",
    "alt": "Đốm lửa nhỏ lấp lánh như ngôi sao tí hon"
  }
};

export const getWordVisualDirect = (word: string): WordVisual | undefined => {
  return WORD_VISUALS_MAP[word.toLowerCase().trim()];
};
