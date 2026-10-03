import React, { useState, useEffect, useRef } from 'react';
import { geminiService, ChatMessage } from '../services/geminiService';
import { audioService } from '../services/audioService';
import { childSpeechService } from '../services/speechRecognition';
import { storageService } from '../services/storageService';
import { KidButton } from './KidButton';
import { 
  Mic, 
  Send, 
  Volume2, 
  Sparkles, 
  RotateCcw, 
  Bot, 
  ShieldCheck, 
  Info,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AiBuddyChatProps {
  onAddStars: (amount: number) => void;
  onOpenParentSettings: () => void;
}

const QUICK_PROMPTS = [
  { label: '🦁 Chào Bạn Leo!', prompt: 'Hello Leo! I am ready to learn English!' },
  { label: '🍎 Dạy bé âm /a/', prompt: 'Leo, can you teach me the /a/ sound like Apple?' },
  { label: '🐱 Truyện Chú Mèo', prompt: 'Tell me a tiny story about a cute cat!' },
  { label: '☀️ Đố vui âm /s/', prompt: 'Give me a fun riddle about the /s/ sound!' },
  { label: '🎈 Khen bé một câu', prompt: 'I practiced my phonics today! Am I doing great?' }
];

export const AiBuddyChat: React.FC<AiBuddyChatProps> = ({ onAddStars, onOpenParentSettings }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg_welcome',
      sender: 'leo',
      text: "Roar! Hello little explorer! I am Leo the Lion! What English sound or animal would you like to explore today? 🦁⭐",
      vietnameseMeaning: "Chào bạn nhỏ! Tớ là Bạn Sư Tử Leo! Hôm nay bé muốn khám phá âm tiếng Anh hay con vật đáng yêu nào nào?",
      timestamp: Date.now()
    }
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [starAwardedCount, setStarAwardedCount] = useState<number>(0);
  const [micNotice, setMicNotice] = useState<string | null>(null);

  const settings = storageService.getSettings();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Read message out loud using audioService
  const handleSpeakText = (text: string) => {
    setIsSpeaking(true);
    // Strip emojis for clean TTS
    const clean = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
    audioService.speakEnglish(clean, 0.85);
    setTimeout(() => setIsSpeaking(false), 3000);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `child_${Date.now()}`,
      sender: 'child',
      text: textToSend.trim(),
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Call Gemini Service (with automated fallback to Scripted Leo)
    const reply = await geminiService.chatWithLeo(textToSend, messages);

    const leoMsg: ChatMessage = {
      id: `leo_${Date.now()}`,
      sender: 'leo',
      text: reply.text,
      vietnameseMeaning: reply.vietnameseMeaning,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, leoMsg]);
    setIsLoading(false);

    // Auto-read aloud if enabled
    if (settings.aiVoiceAutoPlay) {
      handleSpeakText(reply.text);
    }

    // Award encouragement star (max 5 per chat session)
    if (starAwardedCount < 5) {
      setStarAwardedCount((prev) => prev + 1);
      onAddStars(1);
      audioService.playSuccessJingle();
      try {
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
      } catch {
        // Ignore
      }
    }
  };

  const handleStartVoiceInput = () => {
    if (!settings.isMicrophoneConsentGranted) {
      setMicNotice('🎙️ Quyền Microphone đang tắt. Phụ huynh có thể bật trong Góc Phụ Huynh để bé nói chuyện trực tiếp!');
      setTimeout(() => setMicNotice(null), 4000);
      return;
    }

    setIsListening(true);
    setMicNotice(null);

    childSpeechService.startListening(
      'hello',
      (result) => {
        setIsListening(false);
        if (result.transcript && result.transcript.trim() !== '') {
          handleSendMessage(result.transcript);
        } else {
          handleSendMessage('Hello Leo!');
        }
      },
      () => {
        setIsListening(false);
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-2 h-[calc(100vh-4.6rem)] flex flex-col justify-between overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <div className="flex items-center space-x-2.5 bg-white/95 px-4 py-1.5 rounded-2xl border-2 border-purple-300 shadow-xs">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-400 bg-amber-100 shrink-0">
            <img src="/assets/ehon/leo.jpg" alt="Leo Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-black text-purple-950 text-sm md:text-base">Trò Chuyện Cùng Bạn Sư Tử Leo AI</span>
            <span className="ml-2 text-[10px] bg-purple-200 text-purple-900 font-bold px-2 py-0.5 rounded-full">
              {settings.geminiApiKey ? 'Google Gemini Trực Tuyến ⚡' : 'Chế Độ Ngoại Tuyến Sư Phạm 🛡️'}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="bg-amber-100 text-amber-950 font-black text-xs px-3 py-1.5 rounded-xl border border-amber-300 flex items-center space-x-1 shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Thưởng trò chuyện: +{starAwardedCount}/5 ⭐</span>
          </div>

          <button
            onClick={onOpenParentSettings}
            className="text-[11px] font-bold text-gray-600 hover:text-purple-800 bg-white px-3 py-1.5 rounded-xl border border-gray-200 hover:border-purple-300 shadow-xs cursor-pointer active:scale-95"
          >
            Cấu hình API Key
          </button>
        </div>
      </div>

      {/* Main Two-Panel Chat Canvas */}
      <div className="bg-[#FFFDF9] rounded-3xl border-6 md:border-8 border-purple-300 shadow-2xl p-3 md:p-4 flex-1 min-h-0 overflow-hidden flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-full min-h-0">
          
          {/* LEFT COLUMN: Animated Leo Avatar, Voice Visualizer & Quick Prompts (4 cols) */}
          <div className="lg:col-span-4 h-full min-h-0 flex flex-col justify-between bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl p-3 border-2 border-purple-200">
            
            {/* Leo Hero Profile */}
            <div className="flex flex-col items-center text-center">
              <div className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-6 border-white shadow-xl bg-amber-100 transition-transform duration-300 ${
                isSpeaking ? 'scale-105 ring-6 ring-amber-300 animate-pulse' : 'hover:scale-102'
              }`}>
                <img
                  src="/assets/ehon/leo.jpg"
                  alt="Bạn Sư Tử Leo"
                  className="w-full h-full object-cover"
                />
                {isSpeaking && (
                  <div className="absolute inset-0 bg-amber-400/20 flex items-center justify-center">
                    <Volume2 className="w-10 h-10 text-amber-900 animate-bounce" />
                  </div>
                )}
              </div>

              <h3 className="font-black text-amber-950 text-base md:text-lg mt-2">
                Sư Tử Nhỏ Leo 🦁
              </h3>
              <p className="text-[11px] font-bold text-amber-800">
                Bạn đồng hành tiếng Anh siêu thân thiện cho bé
              </p>
            </div>

            {/* Quick Prompt Chips */}
            <div className="my-2">
              <div className="text-[10px] uppercase font-black tracking-wider text-purple-900 mb-1.5 flex items-center space-x-1">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span>Gợi ý câu hỏi nhanh cho bé:</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                {QUICK_PROMPTS.map((qp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(qp.prompt)}
                    disabled={isLoading}
                    className="text-left text-xs font-bold text-purple-950 bg-white hover:bg-purple-100 active:scale-98 transition-all p-2 rounded-xl border border-purple-200 shadow-2xs cursor-pointer truncate"
                  >
                    {qp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Child Safety Badge */}
            <div className="bg-white/80 rounded-xl p-2 border border-purple-200 text-[10px] font-bold text-purple-900 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>An toàn 100%: Lọc nội dung cho trẻ em, không hỏi thông tin cá nhân.</span>
            </div>

          </div>

          {/* RIGHT COLUMN: Chat Log & Interaction Controls (8 cols) */}
          <div className="lg:col-span-8 h-full min-h-0 flex flex-col justify-between">
            
            {/* Scrollable Message History */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-3 p-2">
              {messages.map((msg) => {
                const isLeo = msg.sender === 'leo';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start space-x-2 ${isLeo ? 'justify-start' : 'justify-end'}`}
                  >
                    {isLeo && (
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-300 shadow-xs shrink-0 bg-amber-100">
                        <img src="/assets/ehon/leo.jpg" alt="Leo" className="w-full h-full object-cover" />
                      </div>
                    )}

                    <div className={`max-w-[85%] rounded-2xl p-3 shadow-xs ${
                      isLeo
                        ? 'bg-white border-2 border-purple-200 text-purple-950'
                        : 'bg-purple-600 text-white font-bold rounded-tr-none'
                    }`}>
                      <div className="text-sm md:text-base font-extrabold leading-snug">
                        {msg.text}
                      </div>

                      {isLeo && msg.vietnameseMeaning && (
                        <div className="mt-1 pt-1 border-t border-purple-100 text-xs font-semibold text-amber-900">
                          {msg.vietnameseMeaning}
                        </div>
                      )}

                      {isLeo && (
                        <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400">
                          <button
                            onClick={() => handleSpeakText(msg.text)}
                            className="flex items-center space-x-1 text-purple-700 hover:text-purple-900 font-black bg-purple-50 hover:bg-purple-100 px-2 py-0.5 rounded-md cursor-pointer"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Nghe lại</span>
                          </button>
                          <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center space-x-2 text-purple-700 font-bold text-xs p-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-purple-300 shrink-0">
                    <img src="/assets/ehon/leo.jpg" alt="Leo" className="w-full h-full object-cover animate-spin" />
                  </div>
                  <span>Bạn Leo đang suy nghĩ câu trả lời vui nhất cho bé... 🦁✨</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Mic Notice if permission is missing */}
            {micNotice && (
              <div className="p-2 mb-2 bg-sky-100 border border-sky-300 text-sky-950 rounded-xl text-xs font-bold flex items-center space-x-1.5 animate-fadeIn">
                <Info className="w-4 h-4 text-sky-700 shrink-0" />
                <span>{micNotice}</span>
              </div>
            )}

            {/* Chat Input & Voice Controls (Pinned at bottom) */}
            <div className="pt-2 border-t-2 border-purple-100 shrink-0 flex items-center space-x-2">
              
              {/* Voice Microphone Big Button */}
              <button
                type="button"
                onClick={handleStartVoiceInput}
                className={`p-3 rounded-2xl border-2 flex items-center justify-center transition-all cursor-pointer shadow-md ${
                  isListening
                    ? 'bg-rose-500 border-rose-600 text-white animate-pulse ring-4 ring-rose-300'
                    : 'bg-purple-100 hover:bg-purple-200 border-purple-300 text-purple-900'
                }`}
                title="Bấm để nói chuyện với Leo bằng giọng nói"
              >
                <Mic className={`w-5 h-5 ${isListening ? 'animate-bounce' : ''}`} />
              </button>

              {/* Text Input */}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(inputValue);
                  }
                }}
                placeholder={isListening ? 'Leo đang lắng nghe bé nói...' : 'Nhập tin nhắn hoặc chạm micro để nói...'}
                className="flex-1 p-3 text-xs md:text-sm font-bold border-2 border-purple-200 rounded-2xl bg-white focus:outline-hidden focus:ring-3 focus:ring-purple-300 text-purple-950"
                disabled={isLoading || isListening}
              />

              {/* Send Button */}
              <KidButton
                variant="accent"
                size="md"
                onClick={() => handleSendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="px-4 py-3"
              >
                <Send className="w-4 h-4" />
              </KidButton>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
