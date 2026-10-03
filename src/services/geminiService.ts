// Service integrating Google Gemini API as Leo the Lion AI Companion
// Tailored for children aged 3-8 with child-safety guardrails, offline fallback, and pedagogical voice interaction

import { storageService } from './storageService';

export interface ChatMessage {
  id: string;
  sender: 'child' | 'leo';
  text: string;
  vietnameseMeaning?: string;
  timestamp: number;
}

const LEO_SYSTEM_INSTRUCTION = `You are Leo the Lion, a warm, joyful, and patient English-learning companion for children aged 3 to 8 years old in the LittleLingo Ehon Phonics app.

RULES FOR TALKING TO KIDS:
1. Tone: Cheerful, enthusiastic, kind, gentle, like a big friendly brother lion!
2. Language: Very simple English (1 to 2 short sentences max). If helpful for comprehension, add a tiny Vietnamese hint in parentheses.
3. Content: Focus ONLY on English phonics sounds, simple words (animals, toys, colors, fruits, family), clapping, singing, and encouraging their pronunciation!
4. Child Safety (COPPA): Never ask for child's name, address, school, or phone number. If anything scary or unsafe is mentioned, gently redirect to English fun: "Let's learn a happy English word! Can you say Cat?"
5. Response style: Always praise their effort! Include 1 cute emoji (🦁, 🐱, ⭐, 🍎). End with a fun little challenge or question.
Example: "Great job! A is for Apple! Can you say /æ/ /æ/ Apple? 🍎"`;

// Pre-authored pedagogical offline responses when API key is not configured
const SCRIPTED_RESPONSES: Record<string, { en: string; vi: string }> = {
  'hello': {
    en: "Roar! Hello little friend! I am Leo the Lion! Are you ready to play with Phonics sounds today? 🦁",
    vi: "Chào bạn nhỏ! Tớ là Sư tử Leo đây! Bé đã sẵn sàng vui học âm Phonics cùng tớ chưa nào?"
  },
  'cat': {
    en: "Meow! Cat starts with the /k/ sound: C-A-T! The cat sat on a mat! 🐱",
    vi: "Chú mèo bắt đầu bằng âm /k/! Mèo ngồi trên thảm êm nhé!"
  },
  'apple': {
    en: "Crunch! A is for Apple! /æ/ /æ/ Apple! A sweet red fruit! 🍎",
    vi: "Quả táo đỏ mọng bắt đầu bằng âm /a/! Thơm ngon lắm bé ơi!"
  },
  'sun': {
    en: "Sunny day! S is for Sun! /s/ /s/ Sun! Sssss like a snake in the warm sunshine! ☀️",
    vi: "Mặt trời ấm áp bắt đầu bằng âm /s/! Xì luồng hơi mát như chú rắn nha!"
  },
  'riddle': {
    en: "Here is a riddle: What animal says Woof Woof and loves to run? It starts with /d/! 🐶",
    vi: "Đố bé nè: Bạn nào sủa Gâu Gâu và thích chạy nhảy? Bắt đầu bằng âm /d/ đó!"
  },
  'default': {
    en: "Super effort! English is so much fun with you! Let's roar like a lion together: Roarrr! 🦁⭐",
    vi: "Bé giỏi quá! Học tiếng Anh cùng bé vui thật đấy! Chúng mình cùng gầm vang như sư tử nhé!"
  }
};

class GeminiService {
  private cache: Map<string, string> = new Map();

  private getCachedResponse(query: string): string | null {
    const key = query.trim().toLowerCase();
    if (this.cache.has(key)) return this.cache.get(key)!;
    try {
      const stored = localStorage.getItem(`leo_cache_${key}`);
      if (stored) {
        this.cache.set(key, stored);
        return stored;
      }
    } catch {
      // Ignore storage errors
    }
    return null;
  }

  private setCachedResponse(query: string, responseText: string) {
    const key = query.trim().toLowerCase();
    this.cache.set(key, responseText);
    try {
      localStorage.setItem(`leo_cache_${key}`, responseText);
    } catch {
      // Ignore storage errors
    }
  }

  private getSettings() {
    return storageService.getSettings();
  }

  // Test connection to Gemini API from Parent Dashboard
  async testConnection(apiKey: string, model: string = 'gemini-2.5-flash'): Promise<{ success: boolean; message: string }> {
    if (!apiKey || apiKey.trim() === '') {
      return { success: false, message: 'Vui lòng nhập Gemini API Key!' };
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: 'Hello, this is a test connection from LittleLingo kids app.' }]
              }
            ],
            generationConfig: {
              maxOutputTokens: 20
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.error?.message || `Lỗi HTTP ${response.status}`;
        return { success: false, message: `Kết nối thất bại: ${errorMsg}` };
      }

      return {
        success: true,
        message: `Kết nối thành công tới ${model}! Leo đã sẵn sàng trò chuyện cùng bé.`
      };
    } catch (err: any) {
      return {
        success: false,
        message: `Lỗi kết nối mạng: ${err.message || 'Không thể liên lạc với máy chủ Google Gemini'}`
      };
    }
  }

  // Send message to Leo (Uses Gemini API when key is configured, with graceful fallback to Scripted Leo)
  async chatWithLeo(
    childMessage: string,
    history: ChatMessage[] = []
  ): Promise<{ text: string; vietnameseMeaning?: string; isAiGenerated: boolean }> {
    const settings = this.getSettings();
    const apiKey = settings.geminiApiKey?.trim();
    const model = settings.geminiModel || 'gemini-2.5-flash';

    // If no API key configured, use friendly offline pedagogical scripted engine
    if (!apiKey) {
      return this.getScriptedResponse(childMessage);
    }

    // Check fast local cache for repeated kid prompts
    const cached = this.getCachedResponse(childMessage);
    if (cached) {
      return {
        text: cached,
        isAiGenerated: true
      };
    }

    try {
      // Build conversation history for Gemini API
      const contents = [
        {
          role: 'user',
          parts: [{ text: `System Instruction: ${LEO_SYSTEM_INSTRUCTION}` }]
        },
        {
          role: 'model',
          parts: [{ text: "Roar! I understand! I am Leo the Lion and I will talk cheerfully, simply, and safely with the child! 🦁" }]
        }
      ];

      // Add recent chat context (up to 4 turns)
      const recentHistory = history.slice(-4);
      for (const msg of recentHistory) {
        contents.push({
          role: msg.sender === 'child' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      }

      // Add current child message
      contents.push({
        role: 'user',
        parts: [{ text: childMessage }]
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contents,
            generationConfig: {
              maxOutputTokens: 120,
              temperature: 0.7
            },
            safetySettings: [
              { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_LOW_AND_ABOVE' },
              { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_LOW_AND_ABOVE' },
              { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
              { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_LOW_AND_ABOVE' }
            ]
          })
        }
      );

      if (!response.ok) {
        console.warn('Gemini API call returned status:', response.status, 'Falling back to Scripted Leo.');
        return this.getScriptedResponse(childMessage);
      }

      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText || rawText.trim() === '') {
        return this.getScriptedResponse(childMessage);
      }

      const cleanText = rawText.trim();
      this.setCachedResponse(childMessage, cleanText);

      return {
        text: cleanText,
        isAiGenerated: true
      };
    } catch (err) {
      console.warn('Network or Gemini API error:', err, 'Falling back to Scripted Leo.');
      return this.getScriptedResponse(childMessage);
    }
  }

  // Get pedagogical hint for a specific phonics sound (for Lesson helper)
  getPhonicsTip(phonemeId: string): string {
    const tips: Record<string, string> = {
      's': 'Bạn Leo mách bé: Răng khép nhẹ lại, mỉm cười và xì luồng hơi mát sssss như chú rắn nhé! 🐍',
      'a': 'Bạn Leo mách bé: Há miệng rộng tự nhiên, phát âm /æ/ thật tròn tiếng như lúc ăn quả táo mọng! 🍎',
      't': 'Bạn Leo mách bé: Đặt đầu lưỡi chạm vào nướu răng trên rồi bật nhẹ t-t-t như tiếng gõ cửa cộc cộc! 🚪',
      'i': 'Bạn Leo mách bé: Khóe miệng hé nhẹ sang hai bên, âm ngắn gọn /ɪ/ như chú kiến nhỏ in-in-in! 🐜',
      'p': 'Bạn Leo mách bé: Mím hai môi lại rồi bật luồng hơi ra p-p-p như tiếng bóng bay nổ bục bục! 🎈',
      'n': 'Bạn Leo mách bé: Đầu lưỡi chạm nướu trên, luồng hơi đi qua mũi tạo âm n-n-n như tiếng máy bay vù vù! ✈️'
    };

    return tips[phonemeId] || `Bạn Leo mách bé: Cùng lắng nghe thật kỹ và lặp lại âm /${phonemeId}/ với nụ cười tươi nhé! 🦁⭐`;
  }

  // Offline scripted fallback
  private getScriptedResponse(childMessage: string): { text: string; vietnameseMeaning: string; isAiGenerated: boolean } {
    const lower = childMessage.toLowerCase();
    let res = SCRIPTED_RESPONSES['default'];
    
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('chào')) {
      res = SCRIPTED_RESPONSES['hello'];
    } else if (lower.includes('cat') || lower.includes('mèo')) {
      res = SCRIPTED_RESPONSES['cat'];
    } else if (lower.includes('apple') || lower.includes('táo')) {
      res = SCRIPTED_RESPONSES['apple'];
    } else if (lower.includes('sun') || lower.includes('mặt trời') || lower.includes('/s/')) {
      res = SCRIPTED_RESPONSES['sun'];
    } else if (lower.includes('đố') || lower.includes('riddle') || lower.includes('chơi')) {
      res = SCRIPTED_RESPONSES['riddle'];
    }

    return {
      text: res.en,
      vietnameseMeaning: res.vi,
      isAiGenerated: false
    };
  }
}

export const geminiService = new GeminiService();
