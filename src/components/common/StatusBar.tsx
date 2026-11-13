import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface StatusBarProps {
  darkText?: boolean;
}

export const StatusBar: React.FC<StatusBarProps> = ({ darkText = true }) => {
  return (
    <div
      className={`w-full flex items-center justify-between px-6 pt-3 pb-2 text-xs font-semibold select-none z-30 transition-colors ${
        darkText ? 'text-slate-900' : 'text-white'
      }`}
    >
      <span className="font-semibold tracking-tight text-[13px]">9:41</span>
      
      <div className="flex items-center space-x-1.5">
        {/* Signal bars */}
        <div className="flex items-end space-x-[2px] h-3 mr-0.5">
          <span className={`w-[2.5px] h-1.5 rounded-xs ${darkText ? 'bg-slate-900' : 'bg-white'}`}></span>
          <span className={`w-[2.5px] h-2 rounded-xs ${darkText ? 'bg-slate-900' : 'bg-white'}`}></span>
          <span className={`w-[2.5px] h-2.5 rounded-xs ${darkText ? 'bg-slate-900' : 'bg-white'}`}></span>
          <span className={`w-[2.5px] h-3 rounded-xs ${darkText ? 'bg-slate-900' : 'bg-white'}`}></span>
        </div>

        {/* Wifi */}
        <Wifi size={13} strokeWidth={2.4} />

        {/* Battery */}
        <div className="flex items-center pl-0.5">
          <div className={`w-5 h-2.5 rounded-[3px] border-[1.5px] p-[1px] flex items-center ${
            darkText ? 'border-slate-900' : 'border-white'
          }`}>
            <div className={`w-full h-full rounded-[1px] ${darkText ? 'bg-slate-900' : 'bg-white'}`}></div>
          </div>
          <div className={`w-[1px] h-1 rounded-r-xs ml-[0.5px] ${darkText ? 'bg-slate-900' : 'bg-white'}`}></div>
        </div>
      </div>
    </div>
  );
};
