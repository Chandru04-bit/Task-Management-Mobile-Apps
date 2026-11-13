import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { User, Mail, Lock, Eye, EyeOff, Check, ChevronDown, CheckSquare2 } from 'lucide-react';
import { COUNTRY_CODES } from '../../data/mockData';

interface Screen02SignUpEmptyProps {
  onSignUp: () => void;
  onOpenTerms: () => void;
  onSignIn: () => void;
  onFillSample?: () => void;
}

export const Screen02SignUpEmpty: React.FC<Screen02SignUpEmptyProps> = ({
  onSignUp,
  onOpenTerms,
  onSignIn,
  onFillSample,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      setErrorMessage('Please accept the Terms & Privacy Policy');
      return;
    }
    if (!fullName || !email || !password) {
      setErrorMessage('Please fill in all required fields');
      return;
    }
    setErrorMessage('');
    onSignUp();
  };

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

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="px-6 pt-3 space-y-3.5">
          {errorMessage && (
            <div className="p-2.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs rounded-xl text-center">
              {errorMessage}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400">
                <User size={16} />
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Phone Number
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="flex items-center space-x-1 px-2.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 cursor-pointer"
              >
                <span>{selectedCountry.flag}</span>
                <span className="font-semibold text-[11px]">{selectedCountry.code}</span>
                <ChevronDown size={12} className="text-slate-400" />
              </button>

              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="812 3456 7890"
                className="flex-1 px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
              />
            </div>

            {/* Country Dropdown */}
            {showCountryDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 max-h-44 overflow-y-auto">
                {COUNTRY_CODES.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(c);
                      setShowCountryDropdown(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-800 dark:text-slate-200 text-left cursor-pointer"
                  >
                    <span>{c.flag} {c.name}</span>
                    <span className="font-semibold text-slate-500">{c.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400">
                <Mail size={16} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400">
                <Lock size={16} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
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
              <span className="absolute left-3.5 text-slate-400">
                <Lock size={16} />
              </span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7A5AF8]/30 focus:border-[#7A5AF8] transition-all"
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
            <button
              type="button"
              onClick={() => setAgreeTerms(!agreeTerms)}
              className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-colors cursor-pointer ${
                agreeTerms
                  ? 'bg-[#7A5AF8] border-[#7A5AF8] text-white'
                  : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
              }`}
            >
              {agreeTerms && <Check size={11} strokeWidth={3} />}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer mt-4"
          >
            Sign Up
          </button>
        </form>
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
