import React from 'react';
import { ViewportWidth } from '../../types';

interface MobileFrameProps {
  children: React.ReactNode;
  viewportWidth: ViewportWidth;
  darkMode: boolean;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  children,
  viewportWidth,
  darkMode,
}) => {
  // If viewportWidth is 'auto' or numeric
  const widthStyle =
    viewportWidth === 'auto' ? '100%' : `${viewportWidth}px`;

  return (
    <div className="flex-1 w-full flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden bg-[#0d0f15]">
      {/* Mobile Device Mockup Container */}
      <div
        style={{ width: widthStyle, maxWidth: '100%' }}
        className="h-full sm:h-[844px] max-h-screen sm:max-h-[89vh] bg-white dark:bg-slate-900 sm:rounded-[44px] shadow-2xl overflow-hidden flex flex-col relative transition-all duration-300 border-0 sm:border-[8px] sm:border-slate-800 ring-0 sm:ring-1 sm:ring-slate-700/60"
      >
        {/* Dynamic Island / Speaker Pill for iPhone realism on larger screens */}
        <div className="hidden sm:block absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-40 shadow-xs pointer-events-none">
          <div className="absolute right-3.5 top-1.5 w-2 h-2 rounded-full bg-slate-900 border border-slate-700" />
        </div>

        {/* Screen Content Container */}
        <div className="flex-1 w-full h-full overflow-hidden flex flex-col relative">
          {children}
        </div>

        {/* Home Indicator Bar for iPhone */}
        <div className="w-full flex justify-center pb-1 pt-0.5 bg-transparent pointer-events-none z-30">
          <div className="w-32 h-1 bg-slate-400/40 dark:bg-slate-600/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
