import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { BottomNav } from '../common/BottomNav';
import { 
  ChevronRight, 
  User, 
  Bell, 
  Shield, 
  HelpCircle, 
  Globe, 
  Moon, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Flame,
  FileText
} from 'lucide-react';
import { BottomTab, UserProfile } from '../../types';
import { PROFILE_STATS } from '../../data/mockData';

interface Screen15ProfileSettingsProps {
  user: UserProfile;
  currentTab: BottomTab;
  onTabChange: (tab: BottomTab) => void;
  onEditPersonalInfo: () => void;
  onToggleDarkMode: () => void;
  onOpenTerms: () => void;
}

export const Screen15ProfileSettings: React.FC<Screen15ProfileSettingsProps> = ({
  user,
  currentTab,
  onTabChange,
  onEditPersonalInfo,
  onToggleDarkMode,
  onOpenTerms,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 dark:bg-slate-900 select-none overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Top Purple Curved Banner */}
        <div className="bg-[#7A5AF8] pb-12 pt-1 text-white relative rounded-b-[32px] shadow-purple-glow">
          <StatusBar darkText={false} />

          <div className="px-6 pt-2 flex items-center justify-center">
            <h2 className="text-base font-bold text-white tracking-tight">
              My Profile
            </h2>
          </div>
        </div>

        {/* Overlapping User Card */}
        <div className="px-6 -mt-12 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 p-1 shadow-xl border-4 border-white dark:border-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src={user.avatar}
                alt={user.fullName}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#7A5AF8] text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-900">
              <CheckCircle2 size={13} strokeWidth={2.8} />
            </div>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-2.5 flex items-center space-x-1.5">
            <span>{user.fullName}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
            {user.email}
          </p>
        </div>

        {/* 4 Performance Metric Badges */}
        <div className="px-4 mt-5">
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {/* Completed */}
            <div className="bg-white dark:bg-slate-800/80 p-2 sm:p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center shadow-xs text-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mb-1.5">
                <CheckCircle2 size={16} strokeWidth={2.4} />
              </div>
              <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                {PROFILE_STATS.completed}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-1 truncate max-w-full">
                Completed
              </span>
            </div>

            {/* In Progress */}
            <div className="bg-white dark:bg-slate-800/80 p-2 sm:p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center shadow-xs text-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-50 dark:bg-purple-950/40 text-[#7A5AF8] flex items-center justify-center mb-1.5">
                <Clock size={16} strokeWidth={2.4} />
              </div>
              <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                {PROFILE_STATS.inProgress}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-1 truncate max-w-full">
                In Progress
              </span>
            </div>

            {/* Pending */}
            <div className="bg-white dark:bg-slate-800/80 p-2 sm:p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center shadow-xs text-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mb-1.5">
                <AlertCircle size={16} strokeWidth={2.4} />
              </div>
              <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                {PROFILE_STATS.pending}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-1 truncate max-w-full">
                Pending
              </span>
            </div>

            {/* Overdue */}
            <div className="bg-white dark:bg-slate-800/80 p-2 sm:p-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center shadow-xs text-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mb-1.5">
                <Flame size={16} strokeWidth={2.4} />
              </div>
              <span className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-none">
                {PROFILE_STATS.overdue}
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 mt-1 truncate max-w-full">
                Overdue
              </span>
            </div>
          </div>
        </div>

        {/* Account Settings List */}
        <div className="px-5 mt-5 space-y-4">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 mb-2">
              Account
            </h4>
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/60 shadow-xs">
              <button
                onClick={onEditPersonalInfo}
                className="w-full flex items-center justify-between p-3.5 hover:bg-slate-50 dark:hover:bg-slate-700/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[#7A5AF8] flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <span className="text-xs font-semibold">Personal Info</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </button>

              <div className="w-full flex items-center justify-between p-3.5 text-left">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
                    <Bell size={16} />
                  </div>
                  <span className="text-xs font-semibold">Notifications</span>
                </div>
                <div className="w-9 h-5 rounded-full bg-[#7A5AF8] p-0.5 flex items-center justify-end">
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs"></div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                    <Shield size={16} />
                  </div>
                  <span className="text-xs font-semibold">Security</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
                    <HelpCircle size={16} />
                  </div>
                  <span className="text-xs font-semibold">Help & FAQ</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </div>
            </div>
          </div>

          {/* General Settings List */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 mb-2">
              General
            </h4>
            <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden divide-y divide-slate-100 dark:divide-slate-800/60 shadow-xs">
              <div className="w-full flex items-center justify-between p-3.5 text-left">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center">
                    <Globe size={16} />
                  </div>
                  <span className="text-xs font-semibold">Language</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">English (US)</span>
              </div>

              <div className="w-full flex items-center justify-between p-3.5 text-left">
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                    <Moon size={16} />
                  </div>
                  <span className="text-xs font-semibold">Dark Mode</span>
                </div>
                <button
                  type="button"
                  onClick={onToggleDarkMode}
                  className={`w-9 h-5 rounded-full p-0.5 flex items-center transition-colors cursor-pointer ${
                    user.darkMode ? 'bg-[#7A5AF8] justify-end' : 'bg-slate-200 dark:bg-slate-700 justify-start'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-xs"></div>
                </button>
              </div>

              <button
                onClick={onOpenTerms}
                className="w-full flex items-center justify-between p-3.5 hover:bg-slate-50 dark:hover:bg-slate-700/40 text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3 text-slate-800 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[#7A5AF8] flex items-center justify-center">
                    <FileText size={16} />
                  </div>
                  <span className="text-xs font-semibold">Terms & Privacy Policy</span>
                </div>
                <ChevronRight size={15} className="text-slate-400" />
              </button>

              <div className="w-full flex items-center justify-between p-3.5 text-left text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer">
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

      {/* Mobile Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onTabChange={onTabChange}
      />
    </div>
  );
};
