import React, { useState, useEffect } from 'react';
import { ScreenId, ViewportWidth, BottomTab, UserProfile, TaskItem } from './types';
import { INITIAL_USER } from './data/mockData';
import { MobileFrame } from './components/common/MobileFrame';
import { ScreenSwitcherBar } from './components/common/ScreenSwitcherBar';

// 17 Mobile Screens
import { Screen01Onboarding } from './components/screens/Screen01Onboarding';
import { Screen02SignUpEmpty } from './components/screens/Screen02SignUpEmpty';
import { Screen03SignUpFilled } from './components/screens/Screen03SignUpFilled';
import { Screen04TermsConditions } from './components/screens/Screen04TermsConditions';
import { Screen05SignUpPhone } from './components/screens/Screen05SignUpPhone';
import { Screen06OtpVerification } from './components/screens/Screen06OtpVerification';
import { Screen07OtpKeypad } from './components/screens/Screen07OtpKeypad';
import { Screen08AccountReadyModal } from './components/screens/Screen08AccountReadyModal';
import { Screen09ProfileAvatar } from './components/screens/Screen09ProfileAvatar';
import { Screen10ProfileForm } from './components/screens/Screen10ProfileForm';
import { Screen11ProfileFormFilled } from './components/screens/Screen11ProfileFormFilled';
import { Screen12ProfileConfirmModal } from './components/screens/Screen12ProfileConfirmModal';
import { Screen13ProfileSuccessModal } from './components/screens/Screen13ProfileSuccessModal';
import { Screen14ProfileOverview } from './components/screens/Screen14ProfileOverview';
import { Screen15ProfileSettings } from './components/screens/Screen15ProfileSettings';
import { Screen16HomeEmptyState } from './components/screens/Screen16HomeEmptyState';
import { Screen17HomeActiveTasks } from './components/screens/Screen17HomeActiveTasks';

// Modals
import { NewTaskModal } from './components/modals/NewTaskModal';
import { AvatarPickerModal } from './components/modals/AvatarPickerModal';

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('onboarding');
  const [currentTab, setCurrentTab] = useState<BottomTab>('home');
  const [user, setUser] = useState<UserProfile>(INITIAL_USER);
  const [viewportWidth, setViewportWidth] = useState<ViewportWidth>(390);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isAvatarPickerModalOpen, setIsAvatarPickerModalOpen] = useState(false);

  // Sync dark mode to html root class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    setUser((prev) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  const handleTabChange = (tab: BottomTab) => {
    setCurrentTab(tab);
    if (tab === 'home' || tab === 'tasks' || tab === 'notifications') {
      setCurrentScreen('home_active');
    } else if (tab === 'profile') {
      setCurrentScreen('profile_settings');
    }
  };

  const handleResetFlow = () => {
    setCurrentScreen('onboarding');
    setCurrentTab('home');
  };

  return (
    <div className={`w-screen h-screen flex flex-col ${darkMode ? 'dark bg-[#0b0c10]' : 'bg-[#0f1117]'} overflow-hidden`}>
      {/* Top Testing Bar (Only on Desktop/Simulator view; allows direct testing of all 17 screens & responsive widths) */}
      <ScreenSwitcherBar
        currentScreen={currentScreen}
        onSelectScreen={(screen) => setCurrentScreen(screen)}
        onResetFlow={handleResetFlow}
        viewportWidth={viewportWidth}
        onChangeViewport={(w) => setViewportWidth(w)}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Mobile Device Viewport Simulator */}
      <MobileFrame viewportWidth={viewportWidth} darkMode={darkMode}>
        {/* Render Current Screen */}
        {currentScreen === 'onboarding' && (
          <Screen01Onboarding
            onNext={() => setCurrentScreen('signup_empty')}
            onSignIn={() => setCurrentScreen('home_active')}
          />
        )}

        {currentScreen === 'signup_empty' && (
          <Screen02SignUpEmpty
            onSignUp={() => setCurrentScreen('signup_phone')}
            onOpenTerms={() => setCurrentScreen('terms_conditions')}
            onSignIn={() => setCurrentScreen('home_active')}
            onFillSample={() => setCurrentScreen('signup_filled')}
          />
        )}

        {currentScreen === 'signup_filled' && (
          <Screen03SignUpFilled
            onSignUp={() => setCurrentScreen('signup_phone')}
            onOpenTerms={() => setCurrentScreen('terms_conditions')}
            onSignIn={() => setCurrentScreen('home_active')}
          />
        )}

        {currentScreen === 'terms_conditions' && (
          <Screen04TermsConditions
            onAccept={() => setCurrentScreen('signup_filled')}
            onDecline={() => setCurrentScreen('signup_empty')}
          />
        )}

        {currentScreen === 'signup_phone' && (
          <Screen05SignUpPhone
            onContinueToOtp={() => setCurrentScreen('otp_verification')}
            onOpenTerms={() => setCurrentScreen('terms_conditions')}
            onSignIn={() => setCurrentScreen('home_active')}
          />
        )}

        {currentScreen === 'otp_verification' && (
          <Screen06OtpVerification
            onVerify={() => setCurrentScreen('account_ready')}
            onClose={() => setCurrentScreen('signup_phone')}
            onOpenKeypadState={() => setCurrentScreen('otp_keypad')}
          />
        )}

        {currentScreen === 'otp_keypad' && (
          <Screen07OtpKeypad
            onVerify={() => setCurrentScreen('account_ready')}
            onClose={() => setCurrentScreen('otp_verification')}
          />
        )}

        {currentScreen === 'account_ready' && (
          <Screen08AccountReadyModal
            onCompleteProfile={() => setCurrentScreen('profile_avatar')}
            onSkipToHome={() => setCurrentScreen('home_active')}
          />
        )}

        {currentScreen === 'profile_avatar' && (
          <Screen09ProfileAvatar
            user={user}
            onStartFillProfile={() => setCurrentScreen('profile_form')}
            onSelectAvatarModal={() => setIsAvatarPickerModalOpen(true)}
          />
        )}

        {currentScreen === 'profile_form' && (
          <Screen10ProfileForm
            onBack={() => setCurrentScreen('profile_avatar')}
            onContinue={() => setCurrentScreen('profile_form_filled')}
          />
        )}

        {currentScreen === 'profile_form_filled' && (
          <Screen11ProfileFormFilled
            onBack={() => setCurrentScreen('profile_form')}
            onContinue={() => setCurrentScreen('profile_confirm_modal')}
          />
        )}

        {currentScreen === 'profile_confirm_modal' && (
          <Screen12ProfileConfirmModal
            onSaveAndContinue={() => setCurrentScreen('profile_success_modal')}
            onEditAgain={() => setCurrentScreen('profile_form_filled')}
          />
        )}

        {currentScreen === 'profile_success_modal' && (
          <Screen13ProfileSuccessModal
            onGoToHome={() => setCurrentScreen('home_active')}
          />
        )}

        {currentScreen === 'profile_overview' && (
          <Screen14ProfileOverview
            user={user}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            onEditPersonalInfo={() => setCurrentScreen('profile_form_filled')}
            onToggleDarkMode={handleToggleDarkMode}
            onSwitchToStatsView={() => setCurrentScreen('profile_settings')}
          />
        )}

        {currentScreen === 'profile_settings' && (
          <Screen15ProfileSettings
            user={user}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            onEditPersonalInfo={() => setCurrentScreen('profile_form_filled')}
            onToggleDarkMode={handleToggleDarkMode}
            onOpenTerms={() => setCurrentScreen('terms_conditions')}
          />
        )}

        {currentScreen === 'home_empty' && (
          <Screen16HomeEmptyState
            user={user}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            onAddNewTask={() => setIsNewTaskModalOpen(true)}
            onSwitchToPopulated={() => setCurrentScreen('home_active')}
            onProfileClick={() => setCurrentScreen('profile_settings')}
          />
        )}

        {currentScreen === 'home_active' && (
          <Screen17HomeActiveTasks
            user={user}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            onAddNewTask={() => setIsNewTaskModalOpen(true)}
            onProfileClick={() => setCurrentScreen('profile_settings')}
          />
        )}

        {/* Global Modals */}
        <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onClose={() => setIsNewTaskModalOpen(false)}
          onAddTask={(newTask) => {
            setCurrentScreen('home_active');
          }}
        />

        <AvatarPickerModal
          isOpen={isAvatarPickerModalOpen}
          currentAvatar={user.avatar}
          onClose={() => setIsAvatarPickerModalOpen(false)}
          onSelectAvatar={(url) => {
            setUser((prev) => ({ ...prev, avatar: url }));
          }}
        />
      </MobileFrame>
    </div>
  );
};

export default App;
