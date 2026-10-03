import React, { useState } from 'react';
import { ChildProfile, SessionSettings, PhonemeRecord } from '../types/user';
import { storageService } from '../services/storageService';
import { KidButton } from './KidButton';
import { PHONEMES_DATA } from '../data/phonicsGroups';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Settings2, 
  HeartHandshake, 
  Volume2, 
  X,
  CheckCircle,
  AlertCircle,
  Mic,
  Trash2,
  Eye,
  Lock
} from 'lucide-react';

interface ParentDashboardProps {
  onClose: () => void;
  onProfileUpdated: () => void;
}

export const ParentDashboard: React.FC<ParentDashboardProps> = ({ onClose, onProfileUpdated }) => {
  const [profile, setProfile] = useState<ChildProfile>(() => storageService.getProfile());
  const [settings, setSettings] = useState<SessionSettings>(() => storageService.getSettings());
  const [records] = useState<Record<string, PhonemeRecord>>(() => storageService.getPhonemeRecords());
  const [activeTab, setActiveTab] = useState<'progress' | 'settings' | 'privacy' | 'coplay'>('progress');

  // Adult Math Gate Lock
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [mathNum1] = useState<number>(() => Math.floor(Math.random() * 5) + 4);
  const [mathNum2] = useState<number>(() => Math.floor(Math.random() * 5) + 3);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [eraseConfirm, setEraseConfirm] = useState<boolean>(false);

  const handleVerifyMath = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer, 10) === mathNum1 + mathNum2) {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Đáp án chưa chính xác, xin vui lòng thử lại.');
      setUserAnswer('');
    }
  };

  const handleSaveSettings = (newSettings: SessionSettings) => {
    setSettings(newSettings);
    storageService.saveSettings(newSettings);
    onProfileUpdated();
  };

  const handleUpdateAge = (age: 3 | 4 | 5) => {
    const updated = { ...profile, age };
    setProfile(updated);
    storageService.saveProfile(updated);
    onProfileUpdated();
  };

  const handleEraseAllData = () => {
    storageService.eraseAllData();
    setProfile(storageService.getProfile());
    setSettings(storageService.getSettings());
    onProfileUpdated();
    setEraseConfirm(false);
  };

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full border-4 border-amber-300 shadow-2xl relative text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <h3 className="text-2xl font-black text-amber-950 mb-1">Cổng Kiểm Soát Phụ Huynh</h3>
          <p className="text-sm font-bold text-gray-600 mb-6">
            Xin vui lòng giải phép tính dưới đây để xác nhận bạn là phụ huynh:
          </p>

          <form onSubmit={handleVerifyMath} className="space-y-4">
            <div className="text-3xl font-black text-amber-900 bg-amber-50 py-3 rounded-2xl border-2 border-amber-200">
              {mathNum1} + {mathNum2} = ?
            </div>

            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Nhập kết quả"
              className="w-full text-center text-2xl font-black p-3 border-2 border-amber-300 rounded-2xl focus:outline-hidden focus:ring-4 focus:ring-amber-200"
              autoFocus
            />

            {errorMsg && <p className="text-xs font-bold text-rose-500">{errorMsg}</p>}

            <KidButton variant="primary" size="md" className="w-full">
              Xác Nhận Mở Khóa
            </KidButton>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-amber-50 rounded-3xl p-6 md:p-8 max-w-3xl w-full border-6 border-amber-300 shadow-2xl relative my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-200 pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{profile.avatar}</span>
            <div>
              <h2 className="text-2xl font-black text-amber-950">
                Góc Phụ Huynh • {profile.name}
              </h2>
              <p className="text-xs font-bold text-amber-800">
                Tuân thủ COPPA • Bảo vệ sức khỏe mắt bé • Tiến độ chuẩn sư phạm
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 bg-white rounded-full shadow border border-amber-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('progress')}
            className={`py-2 px-3 rounded-2xl font-black text-xs sm:text-sm flex items-center space-x-1.5 whitespace-nowrap transition-all ${
              activeTab === 'progress' ? 'bg-amber-400 text-amber-950 shadow-md' : 'bg-white text-gray-600 hover:bg-amber-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Tiến Độ Âm Vị</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-2 px-3 rounded-2xl font-black text-xs sm:text-sm flex items-center space-x-1.5 whitespace-nowrap transition-all ${
              activeTab === 'settings' ? 'bg-amber-400 text-amber-950 shadow-md' : 'bg-white text-gray-600 hover:bg-amber-100'
            }`}
          >
            <Settings2 className="w-4 h-4" />
            <span>Thời Gian & Sức Khỏe</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-2 px-3 rounded-2xl font-black text-xs sm:text-sm flex items-center space-x-1.5 whitespace-nowrap transition-all ${
              activeTab === 'privacy' ? 'bg-amber-400 text-amber-950 shadow-md' : 'bg-white text-gray-600 hover:bg-amber-100'
            }`}
          >
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>Bảo Mật & COPPA</span>
          </button>

          <button
            onClick={() => setActiveTab('coplay')}
            className={`py-2 px-3 rounded-2xl font-black text-xs sm:text-sm flex items-center space-x-1.5 whitespace-nowrap transition-all ${
              activeTab === 'coplay' ? 'bg-amber-400 text-amber-950 shadow-md' : 'bg-white text-gray-600 hover:bg-amber-100'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Đồng Hành (Co-Play)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto flex-1 pr-1">
          {/* TAB 1: PROGRESS */}
          {activeTab === 'progress' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white p-3 rounded-2xl border-2 border-amber-200">
                  <div className="text-2xl font-black text-amber-600">{profile.stars} ⭐</div>
                  <div className="text-xs font-bold text-gray-500">Ngôi sao động viên</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border-2 border-amber-200">
                  <div className="text-2xl font-black text-emerald-600">{profile.masteredPhonemes.length}</div>
                  <div className="text-xs font-bold text-gray-500">Âm đã làm quen</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border-2 border-amber-200">
                  <div className="text-2xl font-black text-sky-600">{profile.completedStories.length}</div>
                  <div className="text-xs font-bold text-gray-500">Truyện đã khám phá</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-amber-200">
                <h4 className="text-sm font-black text-amber-950 mb-3 flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Theo dõi nhận thức âm vị (Jolly Phonics 7 nhóm):</span>
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.values(PHONEMES_DATA).map((ph) => {
                    const isMastered = profile.masteredPhonemes.includes(ph.id);
                    return (
                      <div
                        key={ph.id}
                        className={`p-3 rounded-xl border flex items-center justify-between ${
                          isMastered ? 'bg-emerald-50 border-emerald-300' : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div>
                          <div className="font-black text-amber-950 text-base">
                            /{ph.id}/ ({ph.grapheme})
                          </div>
                          <div className="text-[11px] font-bold text-gray-500">
                            {isMastered ? 'Đã làm quen' : 'Chưa mở'}
                          </div>
                        </div>
                        {isMastered ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SETTINGS & HEALTH */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl p-5 border-2 border-amber-200 space-y-6">
              {/* Daily Session Limit */}
              <div>
                <label className="text-sm font-black text-amber-950 flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Thời lượng tự động nhắc nghỉ ngơi (Bảo vệ mắt):</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 8, 10, 15].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => handleSaveSettings({ ...settings, sessionMinutes: mins })}
                      className={`py-2 px-3 rounded-xl font-black text-sm border-2 transition-all ${
                        settings.sessionMinutes === mins
                          ? 'bg-amber-400 border-amber-500 text-amber-950'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-amber-50'
                      }`}
                    >
                      {mins} phút
                    </button>
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-500 mt-1.5">
                  Khuyến nghị y khoa: 5-8 phút/phiên cho trẻ 3-4 tuổi để chống mỏi mắt và tránh thụ động.
                </p>
              </div>

              {/* Reduced Motion & Visual comfort */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-amber-950 flex items-center space-x-1.5">
                    <Eye className="w-4 h-4 text-amber-600" />
                    <span>Chế độ giảm chuyển động (Reduced Motion)</span>
                  </div>
                  <p className="text-xs font-bold text-gray-500">Giảm bớt hoạt ảnh nhấp nháy, giúp mắt bé êm dịu hơn.</p>
                </div>
                <button
                  onClick={() => handleSaveSettings({ ...settings, reducedMotion: !settings.reducedMotion })}
                  className={`w-12 h-7 rounded-full p-1 transition-colors ${settings.reducedMotion ? 'bg-emerald-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.reducedMotion ? 'translate-x-5' : ''}`} />
                </button>
              </div>

              {/* Word Highlighting toggle */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-black text-amber-950">Tô màu chữ khi đọc (Karaoke Highlight)</div>
                  <p className="text-xs font-bold text-gray-500">Tắt nếu chỉ muốn bé tập trung nghe âm thanh và xem hình ảnh.</p>
                </div>
                <button
                  onClick={() => handleSaveSettings({ ...settings, showWordHighlights: !settings.showWordHighlights })}
                  className={`w-12 h-7 rounded-full p-1 transition-colors ${settings.showWordHighlights ? 'bg-emerald-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${settings.showWordHighlights ? 'translate-x-5' : ''}`} />
                </button>
              </div>

              {/* Voice Accent */}
              <div className="pt-3 border-t border-gray-100">
                <label className="text-sm font-black text-amber-950 flex items-center space-x-2 mb-2">
                  <Volume2 className="w-4 h-4 text-amber-600" />
                  <span>Giọng phát âm chuẩn người bản xứ:</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['US', 'UK'] as const).map((acc) => (
                    <button
                      key={acc}
                      onClick={() => handleSaveSettings({ ...settings, accent: acc })}
                      className={`py-2 px-4 rounded-xl font-black text-sm border-2 transition-all ${
                        settings.accent === acc
                          ? 'bg-amber-400 border-amber-500 text-amber-950'
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      Tiếng Anh {acc === 'US' ? 'Mỹ (US Standard)' : 'Anh (UK Received)'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY & COPPA COMPLIANCE */}
          {activeTab === 'privacy' && (
            <div className="bg-white rounded-2xl p-5 border-2 border-emerald-200 space-y-5">
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-4">
                <div className="flex items-center space-x-2 text-emerald-900 font-black text-sm mb-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Cam kết Bảo vệ Quyền Riêng Tư Trẻ Em (COPPA & GDPR-K)</span>
                </div>
                <p className="text-xs font-bold text-emerald-800 leading-relaxed">
                  Ứng dụng không thu thập thông tin nhận dạng cá nhân, không có quảng cáo, không theo dõi hành vi, và hoạt động hoàn toàn cục bộ trên thiết bị của gia đình.
                </p>
              </div>

              {/* Microphone Explicit Opt-In Toggle */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 flex items-start justify-between space-x-4">
                <div>
                  <div className="flex items-center space-x-2 text-sm font-black text-gray-900">
                    <Mic className="w-4 h-4 text-amber-600" />
                    <span>Cho phép sử dụng Microphone (Mặc định: TẮT)</span>
                  </div>
                  <p className="text-xs font-bold text-gray-600 mt-1 leading-relaxed">
                    Khi bật, giọng nói của bé chỉ được xử lý tạm thời trong bộ nhớ RAM để đưa ra phản hồi khích lệ. <strong>Tuyệt đối không lưu file âm thanh, không gửi lên bất kỳ máy chủ nào.</strong>
                  </p>
                </div>
                <button
                  onClick={() => handleSaveSettings({ ...settings, isMicrophoneConsentGranted: !settings.isMicrophoneConsentGranted })}
                  className={`w-14 h-8 rounded-full p-1 transition-colors shrink-0 ${settings.isMicrophoneConsentGranted ? 'bg-emerald-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full transition-transform ${settings.isMicrophoneConsentGranted ? 'translate-x-6' : ''}`} />
                </button>
              </div>

              {/* Erase all data button */}
              <div className="pt-3 border-t border-gray-200">
                <div className="text-sm font-black text-gray-900 mb-1">Quyền xóa dữ liệu (Right to Deletion):</div>
                <p className="text-xs font-bold text-gray-500 mb-3">
                  Bạn có thể xóa toàn bộ lịch sử học tập, số sao và cài đặt cục bộ bất cứ lúc nào.
                </p>

                {!eraseConfirm ? (
                  <button
                    onClick={() => setEraseConfirm(true)}
                    className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 font-extrabold px-4 py-2 rounded-xl border border-rose-200 text-xs"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Xóa Toàn Bộ Dữ Liệu Thiết Bị</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleEraseAllData}
                      className="bg-rose-600 text-white font-black px-4 py-2 rounded-xl text-xs shadow hover:bg-rose-700"
                    >
                      Xác Nhận Xóa Hết
                    </button>
                    <button
                      onClick={() => setEraseConfirm(false)}
                      className="bg-gray-200 text-gray-800 font-bold px-3 py-2 rounded-xl text-xs"
                    >
                      Hủy Bỏ
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: CO-PLAY */}
          {activeTab === 'coplay' && (
            <div className="space-y-3">
              <div className="bg-amber-100 rounded-2xl p-4 border border-amber-300">
                <h4 className="text-sm font-black text-amber-950 mb-1">
                  🌟 Triết lý Đồng Hành: Không Cần Ba Mẹ Giỏi Tiếng Anh!
                </h4>
                <p className="text-xs font-bold text-amber-800 leading-relaxed">
                  Trẻ 3-5 tuổi tiếp thu ngôn ngữ qua cảm xúc gắn kết gia đình. Dưới đây là 3 trò chơi 1 phút ba mẹ có thể chơi cùng con ngoài màn hình:
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-amber-200">
                <h5 className="font-black text-amber-950 text-sm mb-1">
                  1. Trò Chơi Thổi Nến Sinh Nhật (Âm /p/)
                </h5>
                <p className="text-xs font-bold text-gray-600">
                  Ba mẹ giơ ngón tay làm ngọn nến, đố con mím môi thổi phù nhẹ "p-p-p" sao cho gió thổi mát ngón tay ba mẹ. Khen ngợi ngay khi con tạo ra luồng gió mát!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-amber-200">
                <h5 className="font-black text-amber-950 text-sm mb-1">
                  2. Trò Chơi Điệu Bộ Rắn Trườn (Âm /s/)
                </h5>
                <p className="text-xs font-bold text-gray-600">
                  Khi cùng con đi dạo hoặc trước giờ ngủ, ba mẹ đưa bàn tay uốn lượn hình chữ S và xì "sssss". Con sẽ bắt chước uốn tay và xì theo thành một đoàn tàu rắn tí hon!
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-amber-200">
                <h5 className="font-black text-amber-950 text-sm mb-1">
                  3. Trò Chơi Xoa Bụng Món Ngon (Âm /m/)
                </h5>
                <p className="text-xs font-bold text-gray-600">
                  Khi ăn một món ngon, ba mẹ xoa tròn bụng và ngân dài "mmmmm, yummy!". Giúp kích hoạt cơ môi và âm rung vòm họng một cách hoàn toàn tự nhiên.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
