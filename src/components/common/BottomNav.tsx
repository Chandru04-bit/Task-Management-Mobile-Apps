import React from 'react';
import { Home, CheckSquare, Bell, User } from 'lucide-react';
import { BottomTab } from '../../types';

interface BottomNavProps {
  currentTab: BottomTab;
  onTabChange: (tab: BottomTab) => void;
  unreadCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  unreadCount = 3,
}) => {
  const tabs = [
    { id: 'home' as BottomTab, label: 'Home', icon: Home },
    { id: 'tasks' as BottomTab, label: 'Tasks', icon: CheckSquare },
    { id: 'notifications' as BottomTab, label: 'Alerts', icon: Bell, badge: unreadCount },
    { id: 'profile' as BottomTab, label: 'Profile', icon: User },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-6 py-2 pb-5 flex items-center justify-between shadow-bottom-nav z-20">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center relative py-1 px-3 transition-all duration-200 group cursor-pointer"
          >
            <div className="relative">
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-[#7A5AF8]'
                    : 'text-slate-400 group-hover:text-slate-600 dark:text-slate-500'
                }`}
              />
              {tab.badge && tab.badge > 0 && !isActive && (
                <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
              )}
            </div>

            <span
              className={`text-[11px] mt-1 font-medium tracking-tight transition-colors duration-200 ${
                isActive
                  ? 'text-[#7A5AF8] font-semibold'
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              {tab.label}
            </span>

            {/* Active pill dot underneath */}
            {isActive && (
              <span className="w-1 h-1 bg-[#7A5AF8] rounded-full mt-0.5"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};
