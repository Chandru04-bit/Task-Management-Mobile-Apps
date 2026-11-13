import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { User, Mail, Lock, Eye, EyeOff, Check, ChevronDown, CheckSquare2, CheckCircle2 } from 'lucide-react';
import { COUNTRY_CODES } from '../../data/mockData';

interface Screen03SignUpFilledProps {
  onSignUp: () => void;
  onOpenTerms: () => void;
  onSignIn: () => void;
}

export const Screen03SignUpFilled: React.FC<Screen03SignUpFilledProps> = ({
  onSignUp,
  onOpenTerms,
  onSignIn,
}) => {
  const [fullName, setFullName] = useState('Ronald Richards');
  const [phoneNumber, setPhoneNumber] = useState('812 3456 7890');
  const [selectedCountry] = useState(COUNTRY_CODES[0]);
  const [email, setEmail] = useState('ronald.richards@example.com');
  const [password, setPassword] = useState('SecurePass123!');
  const [confirmPassword, setConfirmPassword] = useState('SecurePass123!');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 select-none overflow-y-auto">
      <div>
        <StatusBar darkText={true} />

        <div className="px-6 pt-4 pb-2 text-center flex flex-col items-center">
          {/* App Logo */}
          <div className="w-13 h-13 rounded-2xl bg-[#7A5AF8] flex items-center justify-center shadow-purple-glow text-white mb-3">
            <CheckSquare2 size={26} strokeWidth={2.4} />
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Sign Up
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Create an account to get started
          </p>
        </div>

        {/* Form Inputs (Filled State) */}
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8] rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none"
              />
              <span className="absolute right-3 text-emerald-500">
                <CheckCircle2 size={15} />
              </span>
            </div>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Phone Number
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 px-2.5 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs text-slate-800 dark:text-slate-200">
                <span>{selectedCountry.flag}</span>
                <span className="font-semibold text-[11px]">{selectedCountry.code}</span>
                <ChevronDown size={12} className="text-slate-400" />
              </div>

              <div className="flex-1 relative flex items-center">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none"
                />
                <span className="absolute right-3 text-emerald-500">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none"
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-slate-800 border-2 border-[#7A5AF8]/40 rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none"
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

          {/* Terms Agreement Checkbox (Checked) */}
          <div className="flex items-start space-x-2 pt-1">
            <button
              type="button"
              onClick={() => setAgreeTerms(!agreeTerms)}
              className="mt-0.5 w-4 h-4 rounded bg-[#7A5AF8] border border-[#7A5AF8] text-white flex items-center justify-center cursor-pointer"
            >
              <Check size={11} strokeWidth={3} />
            </button>
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

          {/* Active Submit Button */}
          <button
            onClick={onSignUp}
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer mt-4"
          >
            Sign Up
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
