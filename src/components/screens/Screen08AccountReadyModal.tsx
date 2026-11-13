import React from 'react';
import { Check, UserCheck, ArrowRight } from 'lucide-react';
import { Screen17HomeActiveTasks } from './Screen17HomeActiveTasks';

interface Screen08AccountReadyModalProps {
  onCompleteProfile: () => void;
  onSkipToHome: () => void;
}

export const Screen08AccountReadyModal: React.FC<Screen08AccountReadyModalProps> = ({
  onCompleteProfile,
  onSkipToHome,
}) => {
  return (
    <div className="w-full h-full relative select-none overflow-hidden">
      {/* Background (Dashboard view) */}
      <div className="w-full h-full opacity-35 pointer-events-none filter blur-[1px]">
        <Screen17HomeActiveTasks
          onAddNewTask={() => {}}
          onOpenTask={() => {}}
          onProfileClick={() => {}}
        />
      </div>

      {/* Dimmed backdrop overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] z-30 transition-opacity" />

      {/* Bottom Sheet Modal */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[32px] pt-9 pb-8 px-6 shadow-sheet z-40 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom duration-300">
        {/* Floating Top Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#7A5AF8] flex items-center justify-center text-white shadow-purple-glow ring-4 ring-white dark:ring-slate-900">
          <UserCheck size={28} strokeWidth={2.4} />
        </div>

        <div className="text-center pt-3">
          <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold mb-2">
            <Check size={11} strokeWidth={3} />
            <span>Registration Success</span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
            Account Created!
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 max-w-[270px] mx-auto leading-relaxed">
            Your account is ready to use. Would you like to complete your profile now or jump straight to tasks?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-7 space-y-3">
          <button
            onClick={onCompleteProfile}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow flex items-center justify-center space-x-2 transition-all duration-150 cursor-pointer"
          >
            <span>Complete Profile</span>
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>

          <button
            onClick={onSkipToHome}
            className="w-full py-3 px-6 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-700 dark:text-slate-300 font-semibold text-xs rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-150 cursor-pointer"
          >
            Skip to Home
          </button>
        </div>
      </div>
    </div>
  );
};
