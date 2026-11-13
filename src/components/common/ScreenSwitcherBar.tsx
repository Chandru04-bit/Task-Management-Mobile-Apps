import React, { useState } from 'react';
import { ScreenId, ViewportWidth } from '../../types';
import { 
  Smartphone, 
  RotateCcw, 
  Sun, 
  Moon, 
  ChevronDown, 
  ListOrdered,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ScreenSwitcherBarProps {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  onResetFlow: () => void;
  viewportWidth: ViewportWidth;
  onChangeViewport: (w: ViewportWidth) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const SCREEN_CATALOG: { id: ScreenId; num: number; label: string; group: string }[] = [
  { id: 'onboarding', num: 1, label: '01. Welcome Onboarding', group: 'Onboarding' },
  { id: 'signup_empty', num: 2, label: '02. Sign Up (Empty)', group: 'Auth' },
  { id: 'signup_filled', num: 3, label: '03. Sign Up (Filled)', group: 'Auth' },
  { id: 'terms_conditions', num: 4, label: '04. Terms & Conditions', group: 'Legal' },
  { id: 'signup_phone', num: 5, label: '05. Sign Up (Phone Flow)', group: 'Auth' },
  { id: 'otp_verification', num: 6, label: '06. OTP Code Modal (Empty)', group: 'Verification' },
  { id: 'otp_keypad', num: 7, label: '07. OTP with Keypad (Filled)', group: 'Verification' },
  { id: 'account_ready', num: 8, label: '08. Account Ready Modal', group: 'Success' },
  { id: 'profile_avatar', num: 9, label: '09. Profile Initial Setup', group: 'Profile' },
  { id: 'profile_form', num: 10, label: '10. Personal Info (Empty)', group: 'Profile' },
  { id: 'profile_form_filled', num: 11, label: '11. Personal Info (Filled)', group: 'Profile' },
  { id: 'profile_confirm_modal', num: 12, label: '12. Profile Confirm Modal', group: 'Profile' },
  { id: 'profile_success_modal', num: 13, label: '13. Profile Success Modal', group: 'Profile' },
  { id: 'profile_overview', num: 14, label: '14. Profile Workspaces View', group: 'Profile' },
  { id: 'profile_settings', num: 15, label: '15. Profile Stats & Badges', group: 'Profile' },
  { id: 'home_empty', num: 16, label: '16. Home Dashboard (Empty)', group: 'Dashboard' },
  { id: 'home_active', num: 17, label: '17. Home Active Tasks (Populated)', group: 'Dashboard' },
];

export const ScreenSwitcherBar: React.FC<ScreenSwitcherBarProps> = ({
  currentScreen,
  onSelectScreen,
  onResetFlow,
  viewportWidth,
  onChangeViewport,
  darkMode,
  onToggleDarkMode,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentItem = SCREEN_CATALOG.find((s) => s.id === currentScreen) || SCREEN_CATALOG[0];

  const viewports: ViewportWidth[] = [320, 360, 375, 390, 414, 430];

  return (
    <div className="w-full bg-[#161922] border-b border-slate-800 text-slate-200 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs select-none z-50">
      {/* Left: Branding & Direct Screen Dropdown */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-lg bg-[#7A5AF8] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            TF
          </div>
          <span className="font-bold text-white tracking-tight hidden sm:inline">
            TaskFlow
          </span>
        </div>

        {/* Screen Picker Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700/80 cursor-pointer transition-colors shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#7A5AF8]"></span>
            <span>{currentItem.label}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-72 bg-[#1c202c] border border-slate-700 rounded-2xl shadow-2xl py-2 z-50 max-h-96 overflow-y-auto">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                All 17 Reference Screens
              </div>
              {SCREEN_CATALOG.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSelectScreen(s.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-800/80 transition-colors cursor-pointer ${
                    currentScreen === s.id
                      ? 'text-[#7A5AF8] font-bold bg-[#7A5AF8]/10'
                      : 'text-slate-300'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="w-5 text-[10px] text-slate-500 font-mono">
                      #{s.num}
                    </span>
                    <span>{s.label.split('. ')[1]}</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400">
                    {s.group}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Reset flow button */}
        <button
          onClick={onResetFlow}
          title="Restart Onboarding & Auth Flow"
          className="flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
        >
          <RotateCcw size={13} />
          <span className="text-[11px] hidden md:inline">Reset Journey</span>
        </button>
      </div>

      {/* Right: Viewport Width Switcher & Dark Mode Toggle */}
      <div className="flex items-center space-x-2">
        {/* Device Viewport Selector */}
        <div className="hidden sm:flex items-center space-x-1 bg-slate-800/80 p-0.5 rounded-xl border border-slate-700/60">
          <span className="text-[10px] text-slate-400 pl-2 pr-1 font-semibold">
            Viewport:
          </span>
          {viewports.map((w) => (
            <button
              key={w}
              onClick={() => onChangeViewport(w)}
              className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                viewportWidth === w
                  ? 'bg-[#7A5AF8] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {w}px
            </button>
          ))}
        </div>

        {/* Dark/Light mode toggle */}
        <button
          onClick={onToggleDarkMode}
          className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>
    </div>
  );
};
