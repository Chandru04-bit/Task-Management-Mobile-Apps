import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { ArrowLeft, Camera, Calendar, Mail, ChevronDown, CheckCircle2 } from 'lucide-react';
import { AVATAR_OPTIONS } from '../../data/mockData';

interface Screen11ProfileFormFilledProps {
  onBack: () => void;
  onContinue: () => void;
}

export const Screen11ProfileFormFilled: React.FC<Screen11ProfileFormFilledProps> = ({
  onBack,
  onContinue,
}) => {
  const [selectedAvatar] = useState(AVATAR_OPTIONS[0].url);
  const [fullName, setFullName] = useState('Ronald Richards');
  const [nickname, setNickname] = useState('Ronald');
  const [dob, setDob] = useState('1998-07-24');
  const [email, setEmail] = useState('ronald.richards@example.com');
  const [gender, setGender] = useState('Male');

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
            Personal Info
          </h3>

          <div className="w-8"></div>
        </div>

        {/* Selected Avatar Box */}
        <div className="px-6 pt-5 pb-3 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-purple-50 dark:bg-slate-800 p-1 shadow-lg border-2 border-[#7A5AF8] flex items-center justify-center overflow-hidden">
              <img
                src={selectedAvatar}
                alt="avatar"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#7A5AF8] text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900">
              <Camera size={14} />
            </div>
          </div>

          <p className="text-[11px] font-bold text-[#7A5AF8] mt-2">
            Avatar Selected
          </p>
        </div>

        {/* Personal Info Form (Filled State) */}
        <form onSubmit={handleSubmit} className="px-6 pt-2 space-y-3">
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-3.5 pr-9 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
              />
              <span className="absolute right-3 text-emerald-500">
                <CheckCircle2 size={15} />
              </span>
            </div>
          </div>

          {/* Nickname */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Nickname
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full pl-3.5 pr-9 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
              />
              <span className="absolute right-3 text-emerald-500">
                <CheckCircle2 size={15} />
              </span>
            </div>
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
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
              />
              <Calendar size={15} className="absolute right-3.5 text-[#7A5AF8] pointer-events-none" />
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
                className="w-full pl-3.5 pr-9 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
              />
              <Mail size={15} className="absolute right-3.5 text-[#7A5AF8] pointer-events-none" />
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
                className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-semibold text-slate-900 dark:text-white focus:outline-none appearance-none cursor-pointer"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <ChevronDown size={15} className="absolute right-3.5 text-[#7A5AF8] pointer-events-none" />
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
