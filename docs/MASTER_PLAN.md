# LITTLELINGO – EHON PHONICS
## KẾ HOẠCH TỔNG THỂ KIẾN TRÚC & PHÁT TRIỂN HỆ THỐNG (MASTER ARCHITECTURAL PLAN v1.0)
*Quy chuẩn Sư phạm Quốc tế (Jolly Phonics, PalFish, Mayer Multimedia Learning) & Công thái học Trẻ em (NNGroup, COPPA)*

---

### I. TẦNG NHÌN & ĐỐI TƯỢNG MỤC TIÊU
* **Tên ứng dụng:** LittleLingo – Ehon Phonics (Đảo Học Tiếng Anh Tương Tác Sư Phạm).
* **Đối tượng tiếp cận:** Trẻ em từ 3 đến 8 tuổi:
  * **3 – 4 tuổi (Mầm non bé):** Làm quen âm thanh tự nhiên, vận động phản xạ TPR, tranh truyện Ehon khổ lớn, rèn luyện tai nghe phân biệt âm.
  * **4 – 5 tuổi (Mầm non nhỡ & lớn):** Nhận diện tự mẫu (Grapheme-Phoneme), ghép vần âm đôi/âm ba (Blending CVC), xem ảnh thật khẩu hình miệng người bản xứ.
  * **5 – 6 tuổi (Tiền tiểu học):** Đọc lưu loát truyện Decodable đơn giản, phụ âm ghép (sh, ch, th), nguyên âm đôi (ee, oa).
  * **6 – 8 tuổi (Tiểu học Lớp 1 – 2):** Vần phức, từ bất quy tắc (Tricky/Sight words), giao tiếp phản xạ giọng nói cùng Bạn Sư Tử Leo AI.

---

### II. NGUYÊN TẮC THIẾT KẾ NGHỆ THUẬT & TRẢI NGHIỆM (UI/UX ERGONOMICS)

#### 1. Quy chuẩn Thẩm mỹ Ehon & Ảnh Chân Thực (Zero Flat Vectors & Zero Raw Emojis)
* **Phong cách Cắt dán Ehon (Eric Carle Gouache / Painted Tissue Paper Collage):** 100% hình ảnh minh họa cảnh vật, động vật, nhân vật đều mang chất liệu sơn dầu, màu nước có vân giấy thô mộc, ấm áp, giàu cảm xúc hội họa.
* **Mỗi câu đơn một bức tranh riêng biệt (Dedicated Per-Sentence Artwork):** Tuyệt đối không tái sử dụng một hình nền duy nhất cho nhiều câu trong một câu chuyện. Mỗi câu nói/trang sách sở hữu riêng một tác phẩm tranh minh họa đúng hành động cụ thể.
* **Ảnh Thật Khẩu Hình Miệng (Real Macro Photography Visemes):** Bước hướng dẫn khẩu hình miệng tại Bước 2 bắt buộc sử dụng ảnh chụp cận cảnh độ phân giải cao của người bản ngữ (khép răng, mím môi, mở hàm, chu môi tròn, vị trí lưỡi).

#### 2. Công thái học Viewport (Zero-Scroll Integrity)
* **Bố cục Trang đôi Sách tranh (Two-Page Picture-Book Spread):**
  * **Trang Trái (7 cột):** Tranh vẽ Ehon toàn cảnh chất lượng cao kèm các điểm chạm tương tác (Hotspots).
  * **Trang Phải (5 cột):** Thẻ từ Decodable, nút phát âm, bài tập tương tác nhẹ.
* **Khóa Khung Nhìn Tuyệt Đối (`h-screen w-screen overflow-hidden`):** Không để thanh cuộn dọc xuất hiện trên các màn hình hoạt động chính.
* **Ghim Chân Trang Bất Biến (Pinned Bottom Controls):** Các nút chuyển bước ("Quay Lại", "Bước Kế Tiếp", "Trang Trước", "Trang Tiếp Theo") luôn được ghim cố định ở đáy màn hình với thuộc tính `shrink-0`, đảm bảo tầm tay chạm của trẻ em không bao giờ bị trôi hoặc khuất tầm nhìn.

---

### III. KHUNG NỘI DUNG BÀI HỌC 15–30 PHÚT (BENCHMARK PALFISH / RADKID)

Mỗi âm vị / nhóm bài học được xây dựng theo chu trình 5 Hồi Sư Phạm (5-Act Lesson Unit):

| Hồi (Act) | Tên Giai Đoạn | Thời Lượng | Hoạt Động Cốt Lõi | Mục Tiêu Sư Phạm |
| :---: | :--- | :---: | :--- | :--- |
| **Act 1** | **Khởi Động & Kích Hoạt Âm** *(Warm-up & Sound Story)* | 2 – 3 phút | Chạm nghe âm to bản, bài thơ vần Ehon, hoạt cảnh sinh động. | Đánh thức vùng thính giác ngôn ngữ, tạo cảm giác tò mò thích thú. |
| **Act 2** | **Khẩu Hình Miệng & Vận Động TPR** *(Viseme & Physical Action)* | 3 – 5 phút | Ảnh thật cận cảnh cơ miệng (răng, môi, luồng hơi) + Động tác cơ thể TPR Jolly Phonics. | Định hình vị trí phát âm chuẩn ngay từ đầu, tránh mất gốc và lỗi phát âm địa phương. |
| **Act 3** | **Từ Vựng & Phân Biệt Âm Tinh Tế** *(Vocabulary & Minimal Pairs)* | 4 – 6 phút | Phòng tranh Ehon 3 từ mẫu + Trò chơi "Tai tinh mắt sáng" phân biệt cặp âm dễ nhầm (/s/ & /ʃ/, /p/ & /b/). | Rèn luyện màng nhĩ trẻ nhận diện biến thiên ngữ âm trước khi luyện nói. |
| **Act 4** | **Cỗ Máy Ghép Vần Âm Thanh** *(Synthetic Phonics Blending)* | 5 – 8 phút | Trò chơi bong bóng âm thanh: Tách âm (Segmenting) và Hợp nhất âm (Blending) tạo từ có nghĩa (s-a-t -> sat). | Cung cấp chìa khóa giải mã đọc chữ tự nhiên mà không cần học vẹt cả từ. |
| **Act 5** | **Ứng Dụng Đọc Truyện & Leo AI Chat** *(Decodable Story & AI Mastery)* | 4 – 8 phút | Đọc truyện Ehon theo câu, tương tác hotspots, nhận sao thưởng, trò chuyện củng cố cùng Bạn Sư Tử Leo AI. | Đưa từ vựng vào ngữ cảnh sống động, củng cố sự tự tin và phản xạ giao tiếp. |

---

### IV. HỆ THỐNG 7 QUẦN ĐẢO ÂM VỊ (42 ÂM JOLLY PHONICS)

* **Đảo 1: Đảo Nắng Ấm (Group 1):** `s`, `a`, `t`, `i`, `p`, `n` -> Cho phép trẻ ghép được ngay hàng chục từ đầu tiên: *sat, pat, tap, pin, tin, pan, ant*.
* **Đảo 2: Đảo Chú Mèo Cam (Group 2):** `c/k`, `e`, `h`, `r`, `m`, `d` -> Mở rộng thế giới động vật: *cat, hen, dog, red, mud, cup*.
* **Đảo 3: Đảo Nông Trại Vui Vẻ (Group 3):** `g`, `o`, `u`, `l`, `f`, `b` -> Vần CVC đa dạng: *big, bus, fog, log, bat, fan*.
* **Đảo 4: Đảo Hải Trình Con Tàu (Group 4):** `ai`, `j`, `oa`, `ie`, `ee`, `or` -> Nguyên âm dài và nguyên âm đôi: *rain, boat, tree, fork*.
* **Đảo 5: Đảo Rừng Xanh Thần Tiên (Group 5):** `z`, `w`, `ng`, `v`, `oo` (ngắn/dài) -> Âm rung và âm mũi: *ring, wind, van, moon, book*.
* **Đảo 6: Đảo Ngân Hà Lấp Lánh (Group 6):** `y`, `x`, `ch`, `sh`, `th` (vô thanh/hữu thanh) -> Phụ âm ghép: *ship, chin, that, three, fox*.
* **Đảo 7: Đảo Lâu Đài Hoàng Gia (Group 7):** `qu`, `ou`, `oi`, `ue`, `er`, `ar` -> Vần nâng cao & Lưu loát: *queen, cloud, coin, star, park*.

---

### V. KIẾN TRÚC TRÍ TUỆ NHÂN TẠO (GOOGLE GEMINI AI COMPANION)

#### 1. Nguyên Tắc An Toàn & Bảo Mật Trẻ Em (COPPA Compliant)
* **Không nhúng cứng API Key vào mã nguồn:** Phụ huynh tự chủ cấu hình API Key trong tab riêng "Góc Phụ Huynh".
* **Lọc Nội Dung Tuyệt Đối (Content Safety Guardrails):** Hệ thống thiết lập mức chặn cao nhất cho các chủ đề nhạy cảm, bạo lực, thông tin cá nhân.
* **Chế Độ Ngoại Tuyến Sư Phạm (Scripted Leo Fallback):** Nếu phụ huynh chưa cài đặt API Key hoặc thiết bị mất kết nối mạng, Bạn Sư Tử Leo tự động kích hoạt bộ kịch bản sư phạm định sẵn. Ứng dụng **không bao giờ hiển thị thông báo lỗi kỹ thuật** làm gián đoạn hứng thú của trẻ.

#### 2. Kênh Tương Tác
* **Tab Riêng "Bạn Leo AI 🦁" trên Navbar:** Phòng trò chuyện giọng nói toàn màn hình, hỗ trợ micro nhận diện tiếng Anh trẻ em, tự động phát âm chuẩn bản xứ, tặng sao khích lệ (+1 ⭐ mỗi lượt).
* **Trợ Lý Thông Minh Trong Từng Bài Học ("Hỏi Leo 🦁"):**
  * Trong **LessonPlayer:** Leo mách nước cách uốn lưỡi, xì hơi qua kẽ răng.
  * Trong **StoryReader:** Leo khơi gợi bé quan sát tranh và khen ngợi khi bé hoàn thành trang sách.

---

### VI. QUY CHUẨN KỸ THUẬT & VẬN HÀNH MẠNG
* **Framework:** React 19 + TypeScript + Vite.
* **Styling:** Tailwind CSS (bảng màu ấm áp Ehon: amber, orange, yellow, emerald).
* **Âm thanh & Giọng nói:** Web Audio API (Synthesizer nhạc hiệu chuông vàng, đàn hạc) + Web Speech API (Speech Recognition on-device).
* **Quy tắc Cổng Mạng:** Tuyệt đối không gán cứng cổng 3000, 5000, 8000, 8080. Cổng vận hành chuẩn hóa tại `5180` với chế độ tự động nâng cổng khi phát hiện `EADDRINUSE`.
