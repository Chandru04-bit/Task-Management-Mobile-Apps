import React from 'react';
import { X, Check } from 'lucide-react';
import { AVATAR_OPTIONS } from '../../data/mockData';

interface AvatarPickerModalProps {
  isOpen: boolean;
  currentAvatar: string;
  onClose: () => void;
  onSelectAvatar: (url: string) => void;
}

export const AvatarPickerModal: React.FC<AvatarPickerModalProps> = ({
  isOpen,
  currentAvatar,
  onClose,
  onSelectAvatar,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] transition-opacity"
      />

      <div className="relative bg-white dark:bg-slate-900 rounded-t-[32px] p-6 shadow-sheet z-10 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Choose Your Avatar
          </h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {AVATAR_OPTIONS.map((av) => {
            const isSelected = currentAvatar === av.url;
            return (
              <button
                key={av.id}
                onClick={() => {
                  onSelectAvatar(av.url);
                  onClose();
                }}
                className={`p-3 rounded-2xl border-2 flex items-center space-x-3 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#7A5AF8] bg-purple-50/50 dark:bg-purple-950/30'
                    : 'border-slate-100 dark:border-slate-800 hover:border-slate-200'
                }`}
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden relative">
                  <img src={av.url} alt={av.name} className="w-full h-full object-cover" />
                  {isSelected && (
                    <div className="absolute inset-0 bg-[#7A5AF8]/40 flex items-center justify-center text-white">
                      <Check size={16} strokeWidth={3} />
                    </div>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                    {av.name}
                  </p>
                  <span className="text-[10px] text-slate-400">Tap to apply</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
