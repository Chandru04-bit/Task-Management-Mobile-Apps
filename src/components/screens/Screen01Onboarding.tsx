import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { CheckCircle2, TrendingUp, Users, Calendar, ArrowRight } from 'lucide-react';

interface Screen01OnboardingProps {
  onNext: () => void;
  onSignIn: () => void;
}

export const Screen01Onboarding: React.FC<Screen01OnboardingProps> = ({
  onNext,
  onSignIn,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 select-none overflow-hidden relative">
      {/* Background soft purple ambient gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#7A5AF8]/15 via-[#7A5AF8]/5 to-transparent pointer-events-none" />

      {/* Top Status Bar */}
      <StatusBar darkText={true} />

      {/* Hero Illustration: Layered perspective task cards */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-2 pb-4 relative z-10">
        <div className="w-full max-w-[320px] h-[270px] relative flex items-center justify-center">
          {/* Background Card (Chart & analytics) */}
          <div className="absolute w-[250px] h-[170px] bg-white dark:bg-slate-800 rounded-2xl shadow-mobile-card border border-slate-100 dark:border-slate-700/60 p-4 transform -rotate-6 -translate-y-6 -translate-x-3 transition-transform duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                  <TrendingUp size={14} strokeWidth={2.5} />
                </div>
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Productivity</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                +42%
              </span>
            </div>

            {/* Mini visual SVG line graph */}
            <div className="w-full h-16 relative mt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7A5AF8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7A5AF8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 35 Q 20 28, 35 22 T 65 14 T 100 5 L 100 40 L 0 40 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0 35 Q 20 28, 35 22 T 65 14 T 100 5"
                  fill="none"
                  stroke="#7A5AF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="5" r="3.5" fill="#7A5AF8" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-medium">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
              <span>Sun</span>
            </div>
          </div>

          {/* Foreground Card (Active Task Card with checkboxes & avatars) */}
          <div className="absolute w-[260px] bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 transform rotate-3 translate-y-6 translate-x-2 transition-transform duration-300">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5AF8] bg-[#7A5AF8]/10 px-2.5 py-0.5 rounded-full">
                In Progress
              </span>
              <div className="flex items-center text-slate-400 text-[10px] space-x-1">
                <Calendar size={11} />
                <span>Today</span>
              </div>
            </div>

            <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
              Design Mobile App Wireframe
            </h4>
            <p className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">
              TaskFlow Design System v2.0
            </p>

            {/* Checklist item */}
            <div className="mt-3 space-y-1.5">
              <div className="flex items-center space-x-2 text-[10px] text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={13} className="text-[#7A5AF8]" />
                <span className="font-medium line-through text-slate-400">User Flow Definition</span>
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-slate-700 dark:text-slate-300">
                <div className="w-3 h-3 rounded-full border-2 border-[#7A5AF8] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7A5AF8]"></div>
                </div>
                <span className="font-medium">High Fidelity Components</span>
              </div>
            </div>

            {/* Footer with avatars & progress */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
              <div className="flex -space-x-1.5">
                <img
                  className="w-5 h-5 rounded-full border border-white dark:border-slate-800 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="avatar"
                />
                <img
                  className="w-5 h-5 rounded-full border border-white dark:border-slate-800 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="avatar"
                />
                <div className="w-5 h-5 rounded-full border border-white dark:border-slate-800 bg-[#7A5AF8] text-white text-[8px] font-bold flex items-center justify-center">
                  +3
                </div>
              </div>

              <div className="text-[10px] font-bold text-[#7A5AF8]">
                75%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="px-6 pb-8 pt-2 text-center flex flex-col items-center">
        {/* Dot Pagination indicator */}
        <div className="flex items-center space-x-1.5 mb-5">
          <span className="w-6 h-1.5 rounded-full bg-[#7A5AF8]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></span>
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug max-w-[280px]">
          Manage Your Task Having Fun with It
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2.5 max-w-[290px] leading-relaxed">
          Increase your productivity and manage your daily tasks in a fun and organized way.
        </p>

        {/* Action Buttons */}
        <div className="w-full mt-7 space-y-3">
          <button
            onClick={onNext}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-sm rounded-2xl shadow-purple-glow flex items-center justify-center space-x-2 transition-all duration-150 cursor-pointer"
          >
            <span>Next</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>

          <button
            onClick={onSignIn}
            className="w-full py-3 px-6 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60 active:scale-[0.98] text-slate-600 dark:text-slate-300 font-semibold text-sm rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-150 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
