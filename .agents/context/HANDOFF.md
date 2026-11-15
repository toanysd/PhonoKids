# HANDOFF.md — englishStudy (HeroSpeak Kids)

- **Cập nhật:** 2026-11-15
- **Trạng thái mới nhất:** Hoàn tất cả 3 giai đoạn nâng cấp chấm phát âm chống đọc bừa, đồng bộ 1:1 câu mẫu/nhắc lại trên 24 bài học, và bổ sung Hỏi–Đáp chọn đáp án + Tô nét chữ ngay trong trận đấu 3 chặng.

## 1. Thay Đổi Trọng Tâm Đã Hoàn Tất
- **Giai đoạn 1 — Chấm phát âm nghiêm ngặt:** `src/utils/pronunciationScorer.ts` (`352L`) + `voiceCombatService.ts` (`402L`) + `VideoLessonCutscene.tsx` (`469L`). Khớp nguyên từ + biến thể ESL giới hạn, bảo vệ *Magic E* (`len >= 5`), loại từ đệm, bỏ qua tự đậu chỉ do tiếng ồn khi có Speech API, tách `coreKeywords` (`2⭐`) vs tròn câu (`3⭐`).
- **Giai đoạn 2 — Đồng bộ 1:1 trên 24 bài học:** `curriculumUnitsStage1To3.ts` (`571L`) + `curriculumUnitsStage4To6.ts` (`454L`) + `useVoiceDirector.ts` (`287L`). Xóa hướng dẫn siêu ngôn ngữ (`sound`, `for `, `c a t`), `speakerPromptEn === childTargetEn` trên toàn bộ vòng lặp lại.
- **Giai đoạn 3 — Vòng lặp 3 Chặng (`Săn & Nhắc` → `Tô Chữ` → `Hỏi Đáp`):**
  - `curriculumInteractiveData.ts` (`203L`) + `curriculumWorlds.ts` (`104L`): gắn `letterTraceRound` và `qa` 3 lựa chọn minh họa cho cả `24/24` bài học (`u1_1`..`u6_4`).
  - `BattleLetterTraceOverlay.tsx` (`401L`), `QaDuelStageCard.tsx` (`121L`), `BattleHudOverlay.tsx` (`386L`), `BattleStageViewport.tsx` (`451L`), `BattleStageArena.tsx` (`533L`), `battleRoundHelpers.ts` (`148L`), `useArenaMovement.ts` (`171L`).

## 2. Kết quả Kiểm chứng Mới nhất
- **Evidence:** `.agents/evidence/20261115-230930_voice_qa_trace_phases_1_to_3.md` (`E1..E6` đều `exit 0`):
  - `npx tsc --noEmit --pretty false`: `exit 0`, không output.
  - `verify_phase1_pronunciation.mjs`: `24/24` ca kiểm thử phát âm `ALL_PASS`.
  - `verify_phase2_alignment.mjs`: `24` bài (`37` Hunt, `48` Echo, `24` Boss), `errorCount: 0`, `ALL_PASS`.
  - `verify_tts_no_loop.py`: Cutscene & Battle `mid_speech_cancels: 0`, đọc trọn câu không lặp.
  - `verify_phase3_gameplay.py` (Mobile `390×844` & Desktop `1280×800`): Act 1 `1:1`, tô chữ `h` 2 nét chuyển Act 3, Hỏi–Đáp 3 thẻ, `overflow: 0`, `broken_images: []`, `ALL_PASS`.
  - `run_verify.mjs` (`390×844` & `1440×900`): `exit 0`, `boss_hp_drop_observed: true`, `0` lỗi/tràn khung.
  - `npm run build` (`tsc -b && vite build`): `exit 0`, build & deploy production nhánh `main` lên Vercel (`phonokids.vercel.app`).
- **Lưu ý vận hành:** Mở game bằng `start_game.bat`; tuân thủ Quy tắc #8 (không tự build) & #9 (không tự sync `D:` ⟷ USB).
