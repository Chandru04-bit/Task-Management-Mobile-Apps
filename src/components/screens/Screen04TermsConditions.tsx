import React from 'react';
import { StatusBar } from '../common/StatusBar';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface Screen04TermsConditionsProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const Screen04TermsConditions: React.FC<Screen04TermsConditionsProps> = ({
  onAccept,
  onDecline,
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white dark:bg-slate-900 select-none overflow-hidden">
      <div>
        <StatusBar darkText={true} />

        {/* Header */}
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={onDecline}
            className="w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} />
          </button>

          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Terms & Conditions
          </h3>

          <div className="w-8 h-8 flex items-center justify-center text-[#7A5AF8]">
            <ShieldCheck size={20} />
          </div>
        </div>
      </div>

      {/* Scrollable Terms Content */}
      <div className="flex-1 px-5 py-4 overflow-y-auto text-xs text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
        <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-100 dark:border-purple-900/40 text-[11px] text-[#7A5AF8] font-medium">
          Last updated: November 2026. Please read carefully before creating your TaskFlow account.
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
            1. Acceptance of Terms
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            By creating an account and accessing TaskFlow Mobile, you agree to be bound by these Terms of Service and all applicable regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this application.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
            2. Privacy Policy & Data Collection
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            We value your personal privacy. We collect only required account details (name, email, phone number) and task data needed to provide synchronization across your devices and team workspaces. All data is protected with end-to-end industry-standard encryption.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
            3. User Account Responsibilities
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use or security compromise.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
            4. Task Collaboration & Workspace Security
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Team workspaces allow members to assign, edit, and track shared tasks. You retain ownership of all uploaded content while granting TaskFlow license to store, sync, and display your data within your authorized teams.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
            5. Termination & Modifications
          </h4>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            We reserve the right to modify these terms with reasonable prior notice. You may terminate your account at any time via Profile Settings.
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
        <button
          onClick={onAccept}
          className="w-full py-3.5 px-6 bg-[#7A5AF8] hover:bg-[#6844F6] active:scale-[0.98] text-white font-semibold text-xs rounded-2xl shadow-purple-glow transition-all duration-150 cursor-pointer"
        >
          I Accept
        </button>

        <button
          onClick={onDecline}
          className="w-full py-2.5 px-6 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold text-xs rounded-2xl transition-all duration-150 cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  );
};
