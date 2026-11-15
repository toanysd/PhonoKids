import React, { useState } from 'react';
import {
  AttackEffectType,
  HeroCharacter,
  HeroTemplateType,
  RivalCharacter,
} from '../../types/heroGame';
import { CharacterRigSvg } from './CharacterRigSvg';
import { Eye, EyeOff, Maximize2, Plus, Sparkles, Upload, X } from 'lucide-react';

interface CustomCharacterStudioModalProps {
  initialBlur: boolean;
  onToggleBlurPref: (blur: boolean) => void;
  onSaveHero: (hero: HeroCharacter) => void;
  onSaveRival: (rival: RivalCharacter) => void;
  onClose: () => void;
}

const TEMPLATE_OPTIONS: { value: HeroTemplateType; label: string; kind: 'hero' | 'rival' }[] = [
  { value: 'mecha_lion', label: 'Chiến Giáp 5 Sư Tử (Kiểu Hesman / GoLion)', kind: 'hero' },
  { value: 'bread_hero', label: 'Siêu Nhân Áo Choàng (Kiểu Anpanman)', kind: 'hero' },
  { value: 'spider_hero', label: 'Anh Hùng Nhanh Nhẹn (Kiểu Spider-Man)', kind: 'hero' },
  { value: 'cosmic_ultra', label: 'Chiến Binh Vũ Trụ (Kiểu Ultraman)', kind: 'hero' },
  { value: 'thunder_pet', label: 'Linh Thú Tia Chớp (Kiểu Pikachu)', kind: 'hero' },
  { value: 'galra_boss', label: 'Chúa Tể Giáp Tím (Galra)', kind: 'rival' },
  { value: 'robeast_mech', label: 'Quái Thú Robot (Robeast)', kind: 'rival' },
  { value: 'germ_ufo', label: 'Đĩa Bay Baikinman (UFO)', kind: 'rival' },
  { value: 'dokin_ufo', label: 'Đĩa Bay Dokin-chan (UFO)', kind: 'rival' },
  { value: 'goblin_glider', label: 'Ván Lượn Yêu Tinh Xanh', kind: 'rival' },
  { value: 'octo_mech', label: 'Tiến Sĩ Bạch Tuộc (4 Tay Máy)', kind: 'rival' },
  { value: 'alien_baltan', label: 'Chiến Binh Baltan (Càng Thép)', kind: 'rival' },
  { value: 'meowth_balloon', label: 'Meowth Đĩa Bay', kind: 'rival' },
];

const COLOR_PALETTES = [
  { label: 'Đỏ Vàng Anh Hùng', primary: '#DC2626', secondary: '#1E293B', accent: '#FACC15' },
  { label: 'Xanh Biển Vũ Trụ', primary: '#2563EB', secondary: '#0F172A', accent: '#38BDF8' },
  { label: 'Ngọc Lục Bảo', primary: '#16A34A', secondary: '#1E293B', accent: '#FDE047' },
  { label: 'Tím Huyền Bí', primary: '#7C3AED', secondary: '#312E81', accent: '#F472B6' },
];

const ATTACK_EFFECTS: { value: AttackEffectType; label: string }[] = [
  { value: 'blazing_sword', label: 'Gươm Ánh Sáng' },
  { value: 'an_punch', label: 'Cú Đấm Siêu Năng' },
  { value: 'web_burst', label: 'Bắn Tơ Ánh Sáng' },
  { value: 'specium_ray', label: 'Tia Năng Lượng' },
  { value: 'thunder_bolt', label: 'Sấm Sét Vàng' },
];

export const CustomCharacterStudioModal: React.FC<CustomCharacterStudioModalProps> = ({
  initialBlur,
  onToggleBlurPref,
  onSaveHero,
  onSaveRival,
  onClose,
}) => {
  const [roleKind, setRoleKind] = useState<'hero' | 'rival'>('hero');
  const [nameVi, setNameVi] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [calloutEn, setCalloutEn] = useState('Super Power!');
  const [template, setTemplate] = useState<HeroTemplateType>('mecha_lion');
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [attackEffect, setAttackEffect] = useState<AttackEffectType>('blazing_sword');
  const [uploadedAvatar, setUploadedAvatar] = useState<string>('');
  // Privacy Shield: strictly ON (blurred) by default per Global Rule #3
  const [isBlurred, setIsBlurred] = useState<boolean>(initialBlur !== false);
  const [detailPopupOpen, setDetailPopupOpen] = useState<boolean>(false);

  const palette = COLOR_PALETTES[paletteIdx] || COLOR_PALETTES[0];

  const handleToggleBlur = () => {
    const next = !isBlurred;
    setIsBlurred(next);
    onToggleBlurPref(next);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 160;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const size = Math.min(img.width, img.height);
        const sx = (img.width - size) / 2;
        const sy = (img.height - size) / 2;
        ctx.drawImage(img, sx, sy, size, size, 0, 0, 160, 160);
        setUploadedAvatar(canvas.toDataURL('image/jpeg', 0.82));
      };
      img.src = String(reader.result || '');
    };
    reader.readAsDataURL(file);
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const safeVi = nameVi.trim() || (roleKind === 'hero' ? 'Siêu Anh Hùng Nhí' : 'Đối Thủ Bí Ẩn');
    const cleanAscii = nameEn.replace(/[à-ỹ]/gi, '').trim() || (roleKind === 'hero' ? 'Super Hero' : 'Mystery Rival');
    const safeCallout = calloutEn.replace(/[à-ỹ]/gi, '').trim() || 'Super Strike!';
    const uid = `custom_${roleKind}_${Date.now()}`;

    if (roleKind === 'hero') {
      onSaveHero({
        id: uid,
        nameVi: safeVi,
        nameEn: cleanAscii,
        universe: 'custom',
        template,
        primaryColor: palette.primary,
        secondaryColor: palette.secondary,
        accentColor: palette.accent,
        weaponName: 'Siêu Năng Lượng',
        attackEffect,
        attackCalloutEn: safeCallout,
        greetingEn: `I am ${cleanAscii}! Let us speak English!`,
        taglineVi: 'Nhân vật tự tạo của riêng bé.',
        moveStyle: 'fly',
        defaultRivalId: 'galra_king',
        isCustom: true,
        customAvatarUrl: uploadedAvatar || undefined,
      });
    } else {
      onSaveRival({
        id: uid,
        nameVi: safeVi,
        nameEn: cleanAscii,
        universe: 'custom',
        template,
        primaryColor: palette.primary,
        secondaryColor: palette.secondary,
        accentColor: palette.accent,
        tauntEn: safeCallout,
        taglineVi: 'Đối thủ tự tạo của bé.',
        isCustom: true,
        customAvatarUrl: uploadedAvatar || undefined,
      });
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl border-4 border-amber-300 shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5">
        <div className="flex items-center justify-between border-b border-amber-200 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <h3 className="font-display text-xl font-bold text-slate-900">
              Xưởng Tạo Nhân Vật Tự Chọn (Anh Hùng & Đối Thủ)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 cursor-pointer"
            aria-label="Đóng xưởng nhân vật"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Left Column: Inputs */}
          <div className="md:col-span-7 space-y-3.5">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setRoleKind('hero');
                  setTemplate('mecha_lion');
                }}
                className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-sm border-2 cursor-pointer ${
                  roleKind === 'hero'
                    ? 'bg-amber-400 border-amber-600 text-slate-950'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                🦸 Tạo Anh Hùng Chính
              </button>
              <button
                type="button"
                onClick={() => {
                  setRoleKind('rival');
                  setTemplate('germ_ufo');
                }}
                className={`flex-1 py-2 px-3 rounded-xl font-extrabold text-sm border-2 cursor-pointer ${
                  roleKind === 'rival'
                    ? 'bg-purple-600 border-purple-800 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                👾 Tạo Đối Thủ Mới
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-bold text-slate-700">Tên hiển thị (Tiếng Việt)</span>
                <input
                  type="text"
                  value={nameVi}
                  onChange={(e) => setNameVi(e.target.value)}
                  placeholder="Ví dụ: Siêu Nhân Bo"
                  className="mt-1 w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-amber-500 outline-none text-sm font-bold"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold text-slate-700">Tên gọi tiếng Anh (Phát âm)</span>
                <input
                  type="text"
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  placeholder="Ví dụ: Captain Bo"
                  className="mt-1 w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-amber-500 outline-none text-sm font-bold"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-bold text-slate-700">
                {roleKind === 'hero' ? 'Câu hô tuyệt kỹ (Tiếng Anh)' : 'Câu thách đấu trên đầu (Tiếng Anh)'}
              </span>
              <input
                type="text"
                value={calloutEn}
                onChange={(e) => setCalloutEn(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-xl border-2 border-amber-200 focus:border-amber-500 outline-none text-sm font-bold"
              />
            </label>

            <label className="block">
              <span className="text-xs font-bold text-slate-700">Mẫu nhân vật 2D AI đa tư thế</span>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value as HeroTemplateType)}
                className="mt-1 w-full px-3 py-2 rounded-xl border-2 border-amber-200 bg-white text-sm font-bold"
              >
                {TEMPLATE_OPTIONS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-xs font-bold text-slate-700">Bảng màu áo giáp</span>
                <div className="mt-1 grid grid-cols-2 gap-1.5">
                  {COLOR_PALETTES.map((p, idx) => (
                    <button
                      key={p.label}
                      type="button"
                      onClick={() => setPaletteIdx(idx)}
                      className={`px-2 py-1.5 rounded-lg text-[11px] font-bold border-2 flex items-center gap-1.5 cursor-pointer ${
                        paletteIdx === idx ? 'border-slate-900 bg-amber-50' : 'border-slate-200'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.primary }} />
                      <span className="truncate">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {roleKind === 'hero' && (
                <label className="block">
                  <span className="text-xs font-bold text-slate-700">Hiệu ứng tuyệt kỹ</span>
                  <select
                    value={attackEffect}
                    onChange={(e) => setAttackEffect(e.target.value as AttackEffectType)}
                    className="mt-1 w-full px-3 py-2 rounded-xl border-2 border-amber-200 bg-white text-sm font-bold"
                  >
                    {ATTACK_EFFECTS.map((ef) => (
                      <option key={ef.value} value={ef.value}>
                        {ef.label}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </div>

            {/* Avatar Upload Input with Privacy Blur Shield */}
            <div className="p-3 rounded-2xl bg-slate-50 border-2 border-dashed border-slate-300">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-extrabold text-slate-700">
                  Ảnh khuôn mặt tùy chọn (Mặc định làm mờ bảo vệ riêng tư)
                </span>
                <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-300 text-xs font-bold cursor-pointer hover:bg-amber-50">
                  <Upload className="w-3.5 h-3.5 text-amber-600" />
                  <span>Chọn ảnh</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
              {uploadedAvatar && (
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 bg-slate-200">
                    <img
                      src={uploadedAvatar}
                      alt="Ảnh tải lên đầu vào"
                      className={`w-full h-full object-cover transition-all ${
                        isBlurred ? 'privacy-blur-shield' : 'blur-0'
                      }`}
                    />
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Rê chuột lên ảnh để xem rõ tạm thời hoặc bấm nút Toggle Blur bên phải.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Live Output Preview with Privacy Blur Controls */}
          <div className="md:col-span-5 flex flex-col justify-between bg-gradient-to-b from-sky-50 to-amber-50 rounded-2xl border-2 border-amber-200 p-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-amber-900">Bản Xem Trước Nhân Vật</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleToggleBlur}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-[11px] font-bold text-slate-800 cursor-pointer hover:bg-slate-100"
                    title="Toggle Blur bảo vệ riêng tư"
                  >
                    {isBlurred ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>Toggle Blur</span>
                  </button>
                  {uploadedAvatar && (
                    <button
                      type="button"
                      onClick={() => setDetailPopupOpen(true)}
                      className="p-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 cursor-pointer hover:bg-slate-100"
                      title="Xem chi tiết ảnh"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="h-44 rounded-2xl bg-white/90 border border-amber-200 flex items-center justify-center group">
                <div className={uploadedAvatar && isBlurred ? 'blur-md group-hover:blur-none transition-all' : ''}>
                  <CharacterRigSvg
                    template={template}
                    primaryColor={palette.primary}
                    secondaryColor={palette.secondary}
                    accentColor={palette.accent}
                    pose="attack"
                    customAvatarUrl={uploadedAvatar || undefined}
                    privacyBlur={false}
                    interactiveOrbit
                    className="w-36 h-36"
                  />
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="font-display font-bold text-base text-slate-900">
                  {nameVi.trim() || (roleKind === 'hero' ? 'Siêu Anh Hùng Mới' : 'Đối Thủ Mới')}
                </p>
                <p className="text-xs font-bold text-amber-700">“{calloutEn}”</p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-sm shadow-md border-2 border-amber-600 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Plus className="w-5 h-5" />
              <span>Lưu & Chọn Nhân Vật Này</span>
            </button>
          </div>
        </form>
      </div>

      {/* Explicit Detail Popup when user clicks Maximize */}
      {detailPopupOpen && uploadedAvatar && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/80 flex items-center justify-center p-4"
          onClick={() => setDetailPopupOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-4 max-w-sm w-full border-4 border-amber-400 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-900">Chi Tiết Ảnh Đã Chọn</span>
              <button
                type="button"
                onClick={() => setDetailPopupOpen(false)}
                className="p-1.5 rounded-full bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <img src={uploadedAvatar} alt="Chi tiết ảnh nhân vật" className="w-full rounded-2xl object-cover" />
          </div>
        </div>
      )}
    </div>
  );
};
