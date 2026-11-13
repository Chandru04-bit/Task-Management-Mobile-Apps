import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { ArrowLeft, Camera, User, Calendar, Mail, ChevronDown } from 'lucide-react';
import { AVATAR_OPTIONS } from '../../data/mockData';

interface Screen10ProfileFormProps {
  onBack: () => void;
  onContinue: () => void;
  onFillSample?: () => void;
}

export const Screen10ProfileForm: React.FC<Screen10ProfileFormProps> = ({
  onBack,
  onContinue,
  onFillSample,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 select-none overflow-y-auto">
      <div>
        <StatusBar darkText={true} />

        {/* Top Header */}
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>

          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Fill Your Profile
          </h3>

          <div className="w-8"></div>
        </div>

        {/* Avatar Upload / Selector */}
        <div className="px-6 pt-5 pb-3 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-slate-50 dark:bg-slate-800 p-1 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              {selectedAvatar ? (
                <img
                  src={selectedAvatar}
                  alt="avatar"
                  className="w-full h-full rounded-2xl object-cover"
                />
              ) : (
                <User size={36} className="text-slate-400" />
              )}
            </div>

            <button
              type="button"
              onClick={() => setShowAvatarPicker(!showAvatarPicker)}
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#7A5AF8] text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900 hover:bg-[#6844F6] cursor-pointer"
            >
              <Camera size={14} />
            </button>
          </div>

          <p className="text-[11px] font-semibold text-[#7A5AF8] mt-2 cursor-pointer" onClick={() => setShowAvatarPicker(true)}>
            Choose Avatar / Upload Photo
          </p>

          {/* Avatar quick picker tray */}
          {showAvatarPicker && (
            <div className="w-full mt-3 p-3 bg-purple-50/50 dark:bg-purple-950/30 rounded-2xl border border-purple-100 dark:border-purple-900/40">
              <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400 mb-2 text-center uppercase tracking-wider">
                Select an Avatar
              </p>
              <div className="flex items-center justify-center space-x-3">
                {AVATAR_OPTIONS.map((av) => (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => {
                      setSelectedAvatar(av.url);
                      setShowAvatarPicker(false);
                    }}
                    className={`w-11 h-11 rounded-2xl overflow-hidden border-2 transition-transform hover:scale-105 cursor-pointer ${
                      selectedAvatar === av.url
                        ? 'border-[#7A5AF8] ring-2 ring-[#7A5AF8]/40 scale-105'
                        : 'border-transparent'
                    }`}
                  >
                    <img src={av.url} alt={av.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Personal Info Form */}
        <form onSubmit={handleSubmit} className="px-6 pt-2 space-y-3">
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ronald Richards"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
            />
          </div>

          {/* Nickname */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Nickname
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Ronald"
              className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Date of Birth
            </label>
            <div className="relative flex items-center">
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
              />
              <Calendar size={15} className="absolute right-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ronald.richards@example.com"
                className="w-full pl-3.5 pr-9 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
              />
              <Mail size={15} className="absolute right-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Gender
            </label>
            <div className="relative flex items-center">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all appearance-none cursor-pointer"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <ChevronDown size={15} className="absolute right-3.5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Action button */}
          <div className="pt-3 pb-6">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
