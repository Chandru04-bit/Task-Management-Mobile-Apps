import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { Camera, ChevronRight, User, Bell, Shield, HelpCircle, Globe, Moon, Lock, LogOut } from 'lucide-react';
import { UserProfile } from '../../types';

interface Screen09ProfileAvatarProps {
  user: UserProfile;
  onStartFillProfile: () => void;
  onSelectAvatarModal?: () => void;
}

export const Screen09ProfileAvatar: React.FC<Screen09ProfileAvatarProps> = ({
  user,
  onStartFillProfile,
  onSelectAvatarModal,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 dark:bg-slate-900 select-none overflow-y-auto">
      <div>
        {/* Top Purple Curved Banner */}
        <div className="bg-[#7A5AF8] pb-10 pt-1 text-white relative rounded-b-[32px] shadow-purple-glow">
          <StatusBar darkText={false} />

          <div className="px-6 pt-3 flex items-center justify-center relative">
            <h2 className="text-base font-bold text-white tracking-tight">
              My Profile
            </h2>
          </div>
        </div>

        {/* Overlapping Avatar Box */}
        <div className="px-6 -mt-12 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 p-1 shadow-xl border-4 border-white dark:border-slate-800 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-2xl bg-purple-50 dark:bg-purple-950/40 border-2 border-dashed border-[#7A5AF8]/50 flex flex-col items-center justify-center text-[#7A5AF8]">
                <User size={32} strokeWidth={1.8} />
              </div>
            </div>

            {/* Camera / Edit Badge */}
            <button
              onClick={onSelectAvatarModal || onStartFillProfile}
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#7A5AF8] text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900 hover:bg-[#6844F6] cursor-pointer"
            >
              <Camera size={14} />
            </button>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-3">
            Setup Your Profile
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Personalize your account & team presence
          </p>

          <button
            onClick={onStartFillProfile}
            className="mt-3.5 px-5 py-2 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-95 text-white text-xs font-semibold rounded-full shadow-purple-glow flex items-center space-x-1.5 transition-all cursor-pointer"
          >
            <span>Fill Personal Info</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Menu Preview List */}
        <div className="px-5 mt-6 space-y-4 pb-6">
          {/* Account Group */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 mb-2">
              Account
            </h4>
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/60 shadow-xs">
              <button
                onClick={onStartFillProfile}
                className="w-full flex items-center justify-between p-3.5 hover:bg-slate-50 dark:hover:bg-slate-700/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[#7A5AF8] flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <span className="text-xs font-semibold">Personal Info</span>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-400">
                  <span className="text-[10px] text-amber-500 font-semibold bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full">
                    Incomplete
                  </span>
                  <ChevronRight size={15} />
                </div>
              </button>

              <div className="w-full flex items-center justify-between p-3.5 text-left opacity-60">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
                    <Bell size={16} />
                  </div>
                  <span className="text-xs font-semibold">Notifications</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left opacity-60">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                    <Shield size={16} />
                  </div>
                  <span className="text-xs font-semibold">Security</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left opacity-60">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
                    <HelpCircle size={16} />
                  </div>
                  <span className="text-xs font-semibold">Help & Support</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </div>
            </div>
          </div>

          {/* General Group */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 mb-2">
              General
            </h4>
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/60 shadow-xs">
              <div className="w-full flex items-center justify-between p-3.5 text-left opacity-60">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center">
                    <Globe size={16} />
                  </div>
                  <span className="text-xs font-semibold">Language</span>
                </div>
                <span className="text-[11px] text-slate-400">English (US)</span>
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left opacity-60">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                    <Moon size={16} />
                  </div>
                  <span className="text-xs font-semibold">Dark Mode</span>
                </div>
                <span className="text-[11px] text-slate-400">Off</span>
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left text-rose-500 opacity-60">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 flex items-center justify-center">
                    <LogOut size={16} />
                  </div>
                  <span className="text-xs font-semibold">Log Out</span>
                </div>
                <ChevronRight size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
