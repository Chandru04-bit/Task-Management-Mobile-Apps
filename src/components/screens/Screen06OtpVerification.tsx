import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { Screen05SignUpPhone } from './Screen05SignUpPhone';

interface Screen06OtpVerificationProps {
  onVerify: () => void;
  onClose: () => void;
  onOpenKeypadState?: () => void;
}

export const Screen06OtpVerification: React.FC<Screen06OtpVerificationProps> = ({
  onVerify,
  onClose,
  onOpenKeypadState,
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(48);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, val: string) => {
    if (val.length > 1) val = val[val.length - 1];
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Auto advance
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="w-full h-full relative select-none overflow-hidden">
      {/* Background (Darkened Sign Up screen) */}
      <div className="w-full h-full opacity-40 pointer-events-none filter blur-[1px]">
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

      {/* Bottom Sheet Modal */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-[32px] pt-8 pb-8 px-6 shadow-sheet z-40 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X size={15} />
        </button>

        {/* Floating Top Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-[#7A5AF8] flex items-center justify-center text-white shadow-purple-glow ring-4 ring-white dark:ring-slate-900">
          <ShieldCheck size={28} strokeWidth={2.4} />
        </div>

        <div className="text-center pt-3">
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
            Enter Verification Code
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[260px] mx-auto leading-relaxed">
            We have sent a 6-digit code to <span className="font-semibold text-slate-800 dark:text-slate-200">+1 (812) 345-6789</span>
          </p>
        </div>

        {/* 6 OTP Input Boxes */}
        <div className="flex items-center justify-center space-x-2 my-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-input-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              className="w-10 h-12 text-center text-base font-bold bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-[#7A5AF8] focus:bg-white dark:focus:bg-slate-900 transition-all"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 mb-6">
          Didn't receive code?{' '}
          {timer > 0 ? (
            <span className="font-semibold text-[#7A5AF8]">
              Resend in 00:{timer < 10 ? `0${timer}` : timer}
            </span>
          ) : (
            <button
              onClick={() => setTimer(59)}
              className="font-bold text-[#7A5AF8] hover:underline cursor-pointer"
            >
              Resend Code
            </button>
          )}
        </div>

        {/* Action Button */}
        <div className="space-y-2">
          <button
            onClick={onVerify}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer"
          >
            Verify
          </button>

          {onOpenKeypadState && (
            <button
              onClick={onOpenKeypadState}
              className="w-full py-2 text-center text-[11px] text-[#7A5AF8] font-medium hover:underline cursor-pointer"
            >
              Preview Filled State with Keypad (Screen 7)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
