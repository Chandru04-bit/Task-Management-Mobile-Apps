import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { User, Mail, Lock, Eye, EyeOff, Check, ChevronDown, CheckSquare2, CheckCircle2 } from 'lucide-react';
import { COUNTRY_CODES } from '../../data/mockData';

interface Screen05SignUpPhoneProps {
  onContinueToOtp: () => void;
  onOpenTerms: () => void;
  onSignIn: () => void;
}

export const Screen05SignUpPhone: React.FC<Screen05SignUpPhoneProps> = ({
  onContinueToOtp,
  onOpenTerms,
  onSignIn,
}) => {
  const [fullName] = useState('Ronald Richards');
  const [phoneNumber] = useState('812 3456 7890');
  const [selectedCountry] = useState(COUNTRY_CODES[0]);
  const [email] = useState('ronald.richards@example.com');
  const [password] = useState('SecurePass123!');
  const [confirmPassword] = useState('SecurePass123!');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms] = useState(true);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 select-none overflow-y-auto">
      <div>
        <StatusBar darkText={true} />

        <div className="px-6 pt-4 pb-2 text-center flex flex-col items-center">
          <div className="w-13 h-13 rounded-2xl bg-[#7A5AF8] flex items-center justify-center shadow-purple-glow text-white mb-3">
            <CheckSquare2 size={26} strokeWidth={2.4} />
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Sign Up
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Verify phone number to activate account
          </p>
        </div>

        {/* Form Inputs with phone number highlight */}
        <div className="px-6 pt-3 space-y-3.5">
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#7A5AF8]">
                <User size={16} />
              </span>
              <input
                type="text"
                readOnly
                value={fullName}
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white"
              />
              <span className="absolute right-3 text-emerald-500">
                <CheckCircle2 size={15} />
              </span>
            </div>
          </div>

          {/* Phone Number (Highlighted for OTP) */}
          <div className="relative">
            <div className="flex items-center justify-between mb-1">
              <label className="text-[11px] font-semibold text-[#7A5AF8] dark:text-[#9A7DFA]">
                Phone Number (Verification required)
              </label>
              <span className="text-[10px] font-semibold text-[#7A5AF8] bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full">
                SMS Code
              </span>
            </div>

            <div className="flex items-center space-x-2 ring-2 ring-[#7A5AF8] rounded-xl p-0.5 bg-purple-50/20">
              <div className="flex items-center space-x-1 px-2.5 py-2.5 bg-white dark:bg-slate-800 border border-[#7A5AF8]/40 rounded-lg text-xs text-slate-800 dark:text-slate-200">
                <span>{selectedCountry.flag}</span>
                <span className="font-semibold text-[11px]">{selectedCountry.code}</span>
                <ChevronDown size={12} className="text-slate-400" />
              </div>

              <div className="flex-1 relative flex items-center">
                <input
                  type="tel"
                  readOnly
                  value={phoneNumber}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-900 dark:text-white focus:outline-none"
                />
                <span className="absolute right-3 text-[#7A5AF8]">
                  <CheckCircle2 size={15} />
                </span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#7A5AF8]">
                <Mail size={16} />
              </span>
              <input
                type="email"
                readOnly
                value={email}
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white"
              />
              <span className="absolute right-3 text-emerald-500">
                <CheckCircle2 size={15} />
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#7A5AF8]">
                <Lock size={16} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                readOnly
                value={password}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-[#7A5AF8]">
                <Lock size={16} />
              </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                readOnly
                value={confirmPassword}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-start space-x-2 pt-1">
            <div className="mt-0.5 w-4 h-4 rounded bg-[#7A5AF8] border border-[#7A5AF8] text-white flex items-center justify-center">
              <Check size={11} strokeWidth={3} />
            </div>
            <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
              I agree to the{' '}
              <button
                type="button"
                onClick={onOpenTerms}
                className="text-[#7A5AF8] font-semibold hover:underline cursor-pointer"
              >
                Terms & Privacy Policy
              </button>
            </span>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onContinueToOtp}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer mt-4"
          >
            Send Verification Code
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 pb-6 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Already have an account?{' '}
          <button
            onClick={onSignIn}
            className="text-[#7A5AF8] font-bold hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};
