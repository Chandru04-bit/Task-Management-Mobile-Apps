import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { BottomNav } from '../common/BottomNav';
import { 
  Bell, 
  Search, 
  Plus, 
  Sparkles, 
  CheckSquare2, 
  FolderKanban, 
  ChevronRight,
  CalendarDays
} from 'lucide-react';
import { BottomTab, UserProfile } from '../../types';

interface Screen16HomeEmptyStateProps {
  user: UserProfile;
  currentTab: BottomTab;
  onTabChange: (tab: BottomTab) => void;
  onAddNewTask: () => void;
  onSwitchToPopulated: () => void;
  onProfileClick: () => void;
}

export const Screen16HomeEmptyState: React.FC<Screen16HomeEmptyStateProps> = ({
  user,
  currentTab,
  onTabChange,
  onAddNewTask,
  onSwitchToPopulated,
  onProfileClick,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 dark:bg-slate-900 select-none overflow-hidden relative">
      <div className="flex-1 overflow-y-auto pb-6">
        <StatusBar darkText={true} />

        {/* Top Header */}
        <div className="px-5 pt-2 pb-3 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onProfileClick}>
            <div className="w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-[#7A5AF8]/30 shadow-xs">
              <img
                src={user.avatar}
                alt={user.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  Good Morning, {user.nickname || 'Ronald'}
                </h3>
                <span className="text-xs">👋</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                Friday, 13 Nov
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-xs hover:bg-slate-50 cursor-pointer">
              <Search size={16} />
            </button>

            <button className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-xs relative hover:bg-slate-50 cursor-pointer">
              <Bell size={16} />
              <span className="absolute 1.5 top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-800"></span>
            </button>
          </div>
        </div>

        {/* Featured Purple Banner Card */}
        <div className="px-5 mt-2">
          <div className="w-full bg-gradient-to-r from-[#7A5AF8] to-[#9A7DFA] rounded-2xl p-4 text-white shadow-purple-glow relative overflow-hidden">
            <div className="absolute -right-4 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="relative z-10 pr-12">
              <span className="inline-flex items-center space-x-1 text-[10px] font-bold bg-white/20 px-2.5 py-0.5 rounded-full mb-1.5">
                <Sparkles size={11} />
                <span>Productivity Booster</span>
              </span>
              <h4 className="text-sm font-extrabold tracking-tight">
                Boost Your Daily Workflow
              </h4>
              <p className="text-[11px] text-purple-100 mt-1 max-w-[210px] leading-relaxed">
                Organize tasks, set sprint milestones, and collaborate effortlessly.
              </p>
            </div>

            <button
              onClick={onSwitchToPopulated}
              className="mt-3 px-3 py-1.5 bg-white text-[#7A5AF8] font-bold text-[10px] rounded-xl hover:bg-purple-50 active:scale-95 shadow-sm transition-all cursor-pointer"
            >
              Load Sample Tasks
            </button>
          </div>
        </div>

        {/* Today's Tasks Section (Empty State) */}
        <div className="px-5 mt-5">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
              <span>Today's Tasks</span>
              <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                0
              </span>
            </h4>
            <button
              onClick={onSwitchToPopulated}
              className="text-[11px] font-semibold text-[#7A5AF8] hover:underline cursor-pointer"
            >
              See All
            </button>
          </div>

          {/* Empty State Box (Matching Figma grid illustration) */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col items-center text-center shadow-xs">
            {/* Visual Grid Graphic */}
            <div className="w-20 h-16 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-100 dark:border-purple-900/50 p-2 flex flex-col justify-between mb-3">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-3 rounded-md bg-[#7A5AF8]/30"></div>
                <div className="h-3 rounded-md bg-[#7A5AF8]/20"></div>
                <div className="h-3 rounded-md bg-[#7A5AF8]/30"></div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-3 rounded-md bg-[#7A5AF8]/20"></div>
                <div className="h-3 rounded-md bg-[#7A5AF8]/40"></div>
                <div className="h-3 rounded-md bg-[#7A5AF8]/20"></div>
              </div>
            </div>

            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
              No Tasks Scheduled Yet
            </h5>
            <p className="text-[11px] text-slate-400 mt-1 max-w-[220px] leading-relaxed">
              You have no active tasks for today. Tap below to schedule your first task!
            </p>

            <button
              onClick={onAddNewTask}
              className="mt-3.5 px-4 py-2 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-95 text-white font-semibold text-[11px] rounded-xl shadow-purple-glow flex items-center space-x-1.5 transition-all cursor-pointer"
            >
              <Plus size={14} strokeWidth={2.5} />
              <span>Create Task</span>
            </button>
          </div>
        </div>

        {/* Projects Overview (Empty State) */}
        <div className="px-5 mt-5">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Ongoing Projects
            </h4>
            <span className="text-[11px] text-slate-400">0 active</span>
          </div>

          <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-2">
              <FolderKanban size={20} />
            </div>
            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
              No Projects Assigned
            </h5>
            <p className="text-[10px] text-slate-400 mt-0.5 max-w-[200px]">
              Projects from your team workspace will appear here.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button (+) */}
      <button
        onClick={onAddNewTask}
        className="absolute bottom-20 right-5 w-12 h-12 rounded-full bg-[#7A5AF8] hover:bg-[#6844F6] text-white flex items-center justify-center shadow-purple-glow transition-transform active:scale-95 cursor-pointer z-30"
      >
        <Plus size={24} strokeWidth={2.4} />
      </button>

      {/* Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onTabChange={onTabChange}
      />
    </div>
  );
};
