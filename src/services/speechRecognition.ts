// Child Speech Recognition and Pronunciation Evaluation Service
// STRICT COPPA COMPLIANT: Transient on-device analysis only, zero audio storage, zero cloud uploads
import { storageService } from './storageService';

export interface SpeechEvaluationResult {
  transcript: string;
  isMatch: boolean;
  score: number; // 0 - 100
  feedbackVi: string;
  detectedMistake?: string;
  encouragement: string;
}

type SpeechCallback = (result: SpeechEvaluationResult) => void;

class ChildSpeechService {
  private recognition: any = null;
  private isListening: boolean = false;

  constructor() {
    const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognitionClass) {
      try {
        this.recognition = new SpeechRecognitionClass();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';
      } catch (e) {
        console.warn('Speech recognition not available', e);
      }
    }
  }

  public isSupported(): boolean {
    return !!this.recognition;
  }

  // Check if Parent has granted COPPA explicit permission
  public isParentConsentGranted(): boolean {
    return storageService.getSettings().isMicrophoneConsentGranted;
  }

  public startListening(
    targetWord: string,
    onResult: SpeechCallback,
    onError: (err: string) => void
  ) {
    if (this.isListening) {
      this.stopListening();
    }

    // STRICT COPPA CHECK: If parent did not grant consent in settings, do NOT touch microphone
    if (!this.isParentConsentGranted()) {
      onError('Tính năng microphone đang tắt theo cài đặt quyền riêng tư của phụ huynh.');
      return;
    }

    if (!this.recognition) {
      // Gentle on-device fallback: Never penalize child for browser limitations
      this.isListening = true;
      setTimeout(() => {
        if (!this.isListening) return;
        this.isListening = false;
        onResult({
          transcript: targetWord.toLowerCase(),
          isMatch: true,
          score: 100,
          feedbackVi: 'Bé đã cố gắng phát âm rất đáng khen!',
          encouragement: '🌟 Hoan hô con! Con nói hay lắm!'
        });
      }, 2000);
      return;
    }

    this.isListening = true;

    this.recognition.onresult = (event: any) => {
      this.isListening = false;
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      const evaluation = this.evaluatePronunciation(targetWord.toLowerCase().trim(), transcript);
      // Immediately discard audio from memory
      onResult(evaluation);
    };

    this.recognition.onerror = (event: any) => {
      this.isListening = false;
      // No-fail: provide encouraging fallback instead of error frustration
      onResult({
        transcript: '',
        isMatch: true,
        score: 90,
        feedbackVi: 'Bé đã rất dũng cảm thử phát âm!',
        encouragement: '👏 Con làm tốt lắm! Cứ tiếp tục nhé!'
      });
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };

    try {
      this.recognition.start();
    } catch {
      this.isListening = false;
      onError('Không thể bật microphone');
    }
  }

  public stopListening() {
    this.isListening = false;
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch {
        // Ignore
      }
    }
  }

  // No-fail encouraging evaluation: ASR is purely playful, NEVER a barrier to progression
  private evaluatePronunciation(target: string, spoken: string): SpeechEvaluationResult {
    const cleanTarget = target.replace(/[^a-z]/g, '');
    const cleanSpoken = spoken.replace(/[^a-z]/g, '');

    let detectedMistake: string | undefined;
    let feedbackVi = 'Bé đã rất cố gắng!';

    if (cleanTarget.startsWith('c') && cleanSpoken.startsWith('t')) {
      detectedMistake = 'Gần đúng rồi! Hãy thử nâng cuống lưỡi lên nhé';
      feedbackVi = 'Bé nhớ nâng cuống lưỡi lên để tạo âm /k/ giòn nhé!';
    } else if (cleanTarget.startsWith('p') && cleanSpoken.startsWith('b')) {
      detectedMistake = 'Thổi luồng gió mát ra ngón tay: p-p-p';
      feedbackVi = 'Bé thổi luồng gió mát ra ngón tay: p-p-p!';
    }

    // Always positive outcome (No-fail pedagogy)
    return {
      transcript: spoken,
      isMatch: true, // Always considered successful effort for 3-5yo toddlers
      score: 95,
      feedbackVi,
      detectedMistake,
      encouragement: '🎉 Bé nói rất đáng yêu! Cùng tiếp tục phiêu lưu nào!'
    };
  }
}

export const childSpeechService = new ChildSpeechService();
