import React, { useState } from 'react';
import { ShieldCheck, Delete, X } from 'lucide-react';
import { Screen05SignUpPhone } from './Screen05SignUpPhone';

interface Screen07OtpKeypadProps {
  onVerify: () => void;
  onClose: () => void;
}

export const Screen07OtpKeypad: React.FC<Screen07OtpKeypadProps> = ({
  onVerify,
  onClose,
}) => {
  const [digits, setDigits] = useState<string[]>(['5', '8', '2', '9', '1', '4']);

  const handleKeyPress = (num: string) => {
    if (digits.length < 6) {
      setDigits([...digits, num]);
    }
  };

  const handleDelete = () => {
    if (digits.length > 0) {
      setDigits(digits.slice(0, -1));
    }
  };

  return (
    <div className="w-full h-full relative select-none overflow-hidden">
      {/* Background (Darkened Sign Up screen) */}
      <div className="w-full h-full opacity-35 pointer-events-none filter blur-[1px]">
        <Screen05SignUpPhone
          onContinueToOtp={() => {}}
          onOpenTerms={() => {}}
          onSignIn={() => {}}
        />
      </div>

      {/* Dimmed backdrop overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] z-30 transition-opacity"
      />

      {/* Bottom Sheet Modal with Keypad */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[32px] pt-7 pb-4 px-5 shadow-sheet z-40 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom duration-300 flex flex-col justify-between max-h-[88%]">
        {/* Floating Top Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#7A5AF8] flex items-center justify-center text-white shadow-purple-glow ring-4 ring-white dark:ring-slate-900">
          <ShieldCheck size={28} strokeWidth={2.4} />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X size={15} />
        </button>

        <div className="text-center pt-2">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
            Enter Verification Code
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
            Code sent to <span className="font-semibold text-slate-800 dark:text-slate-200">+1 (812) 345-6789</span>
          </p>
        </div>

        {/* 6 OTP Input Boxes (Filled) */}
        <div className="flex items-center justify-center space-x-1.5 my-3">
          {[0, 1, 2, 3, 4, 5].map((idx) => {
            const digit = digits[idx] || '';
            const isFilled = digit !== '';
            const isCurrent = digits.length === idx;

            return (
              <div
                key={idx}
                className={`w-9 h-11 flex items-center justify-center text-sm font-bold rounded-xl transition-all ${
                  isFilled
                    ? 'border-2 border-[#7A5AF8] bg-purple-50/40 dark:bg-purple-950/30 text-slate-900 dark:text-white'
                    : isCurrent
                    ? 'border-2 border-[#7A5AF8] bg-white dark:bg-slate-800 ring-2 ring-[#7A5AF8]/30 animate-pulse'
                    : 'border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-400'
                }`}
              >
                {digit}
              </div>
            );
          })}
        </div>

        <div className="text-center text-[10px] text-slate-400 dark:text-slate-500 mb-2">
          Didn't receive code?{' '}
          <span className="font-semibold text-[#7A5AF8]">Resend in 00:48</span>
        </div>

        {/* Primary Verify Button */}
        <button
          onClick={onVerify}
          className="w-full py-2.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-xl shadow-purple-glow transition-all duration-150 cursor-pointer mb-3"
        >
          Verify
        </button>

        {/* Realistic Mobile Numeric Keypad */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-2 border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-3 gap-1.5">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleKeyPress(val)}
                className="h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-purple-50 dark:active:bg-purple-950/40 text-slate-800 dark:text-white font-bold text-sm shadow-xs border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
              >
                {val}
              </button>
            ))}

            <button
              type="button"
              onClick={handleDelete}
              className="h-10 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-rose-50 text-slate-600 dark:text-slate-300 font-bold text-sm shadow-xs border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
            >
              <Delete size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
