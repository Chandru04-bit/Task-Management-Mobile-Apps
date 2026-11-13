import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Screen11ProfileFormFilled } from './Screen11ProfileFormFilled';

interface Screen13ProfileSuccessModalProps {
  onGoToHome: () => void;
}

export const Screen13ProfileSuccessModal: React.FC<Screen13ProfileSuccessModalProps> = ({
  onGoToHome,
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
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] z-30 transition-opacity" />

      {/* Bottom Sheet Modal */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[32px] pt-8 pb-8 px-6 shadow-sheet z-40 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom duration-300">
        {/* Floating Top Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#7A5AF8] flex items-center justify-center text-white shadow-purple-glow ring-4 ring-white dark:ring-slate-900">
          <CheckCircle2 size={28} strokeWidth={2.4} />
        </div>

        <div className="text-center pt-3">
          <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold mb-2">
            <span>Profile Ready</span>
          </div>

          <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            Profile Completed!
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[260px] mx-auto leading-relaxed">
            Your profile has been created successfully. You're ready to organize and track tasks!
          </p>
        </div>

        {/* Action Button */}
        <div className="w-full mt-6">
          <button
            onClick={onGoToHome}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow flex items-center justify-center space-x-2 transition-all duration-150 cursor-pointer"
          >
            <span>Go to Home</span>
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
