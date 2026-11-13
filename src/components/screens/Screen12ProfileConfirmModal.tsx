import React from 'react';
import { UserCheck, X } from 'lucide-react';
import { Screen11ProfileFormFilled } from './Screen11ProfileFormFilled';

interface Screen12ProfileConfirmModalProps {
  onSaveAndContinue: () => void;
  onEditAgain: () => void;
}

export const Screen12ProfileConfirmModal: React.FC<Screen12ProfileConfirmModalProps> = ({
  onSaveAndContinue,
  onEditAgain,
}) => {
  return (
    <div className="w-full h-full relative select-none overflow-hidden">
      {/* Background form */}
      <div className="w-full h-full opacity-35 pointer-events-none filter blur-[1px]">
        <Screen11ProfileFormFilled
          onBack={() => {}}
          onContinue={() => {}}
        />
      </div>

      {/* Dimmed backdrop overlay */}
      <div
        onClick={onEditAgain}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] z-30 transition-opacity"
      />

      {/* Bottom Sheet Modal */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[32px] pt-8 pb-8 px-6 shadow-sheet z-40 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom duration-300">
        {/* Floating Top Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#7A5AF8] flex items-center justify-center text-white shadow-purple-glow ring-4 ring-white dark:ring-slate-900">
          <UserCheck size={28} strokeWidth={2.4} />
        </div>

        {/* Close Button */}
        <button
          onClick={onEditAgain}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X size={15} />
        </button>

        <div className="text-center pt-3">
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            Update Profile
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[260px] mx-auto leading-relaxed">
            Are you sure you want to save these profile changes and link your workspace?
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-6 space-y-3">
          <button
            onClick={onSaveAndContinue}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer"
          >
            Save & Continue
          </button>

          <button
            onClick={onEditAgain}
            className="w-full py-3 px-6 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] text-slate-600 dark:text-slate-300 font-semibold text-xs rounded-2xl border border-slate-200 dark:border-slate-700 transition-all duration-150 cursor-pointer"
          >
            Edit Profile Again
          </button>
        </div>
      </div>
    </div>
  );
};
