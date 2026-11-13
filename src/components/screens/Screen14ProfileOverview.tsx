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
  Briefcase, 
  Plus, 
  CheckCircle2,
  Settings,
  Sparkles
} from 'lucide-react';
import { BottomTab, UserProfile } from '../../types';

interface Screen14ProfileOverviewProps {
  user: UserProfile;
  currentTab: BottomTab;
  onTabChange: (tab: BottomTab) => void;
  onEditPersonalInfo: () => void;
  onToggleDarkMode: () => void;
  onSwitchToStatsView?: () => void;
}

export const Screen14ProfileOverview: React.FC<Screen14ProfileOverviewProps> = ({
  user,
  currentTab,
  onTabChange,
  onEditPersonalInfo,
  onToggleDarkMode,
  onSwitchToStatsView,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 dark:bg-slate-900 select-none overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Top Purple Curved Banner */}
        <div className="bg-[#7A5AF8] pb-12 pt-1 text-white relative rounded-b-[32px] shadow-purple-glow">
          <StatusBar darkText={false} />

          <div className="px-6 pt-2 flex items-center justify-between">
            <div className="w-8"></div>
            <h2 className="text-base font-bold text-white tracking-tight">
              My Profile
            </h2>
            <button
              onClick={onSwitchToStatsView}
              className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 cursor-pointer"
              title="View Badges & Stats"
            >
              <Sparkles size={16} />
            </button>
          </div>
        </div>

        {/* Overlapping User Info Card */}
        <div className="px-6 -mt-12 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-800 p-1 shadow-xl border-4 border-white dark:border-slate-800 flex items-center justify-center overflow-hidden">
              <img
                src={user.avatar}
                alt={user.fullName}
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>

            {/* Verified badge */}
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

          <span className="mt-2 text-[10px] font-semibold text-[#7A5AF8] bg-[#7A5AF8]/10 dark:bg-[#7A5AF8]/20 px-3 py-0.5 rounded-full">
            {user.role}
          </span>
        </div>

        {/* Workspaces Section */}
        <div className="px-5 mt-5">
          <div className="flex items-center justify-between px-2 mb-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Workspaces & Teams
            </h4>
            <button className="text-[10px] font-semibold text-[#7A5AF8] flex items-center space-x-0.5 hover:underline cursor-pointer">
              <Plus size={12} />
              <span>Add</span>
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 p-3 space-y-2 shadow-xs">
            <div className="flex items-center justify-between p-2 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100/60 dark:border-purple-900/30">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#7A5AF8] text-white flex items-center justify-center">
                  <Briefcase size={14} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">Product Design Team</h5>
                  <p className="text-[10px] text-slate-400">8 active members • Primary</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#7A5AF8] bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md shadow-xs">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                  <Briefcase size={14} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">Stackly Mobile App</h5>
                  <p className="text-[10px] text-slate-400">14 team members</p>
                </div>
              </div>
              <ChevronRight size={14} className="text-slate-400" />
            </div>
          </div>
        </div>

        {/* Account Menu */}
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
                  <span className="text-xs font-semibold">Notification</span>
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
                  <span className="text-xs font-semibold">Security & Face ID</span>
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

          {/* General Menu */}
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
                <span className="text-[11px] text-slate-400">English (US)</span>
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
