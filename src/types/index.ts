export type ScreenId =
  | 'onboarding'             // Screen 1: Welcome & Onboarding
  | 'signup_empty'           // Screen 2: Sign Up Initial / Empty
  | 'signup_filled'          // Screen 3: Sign Up Filled State
  | 'terms_conditions'       // Screen 4: Terms & Conditions
  | 'signup_phone'           // Screen 5: Sign Up Ready / Phone Flow
  | 'otp_verification'       // Screen 6: OTP Code Modal (Empty)
  | 'otp_keypad'             // Screen 7: OTP Code with Numeric Keypad (Filled)
  | 'account_ready'          // Screen 8: Account Ready Modal (Branching Point)
  | 'profile_avatar'         // Screen 9: My Profile - Initial / Avatar Intro
  | 'profile_form'           // Screen 10: Personal Info Setup Form (Empty)
  | 'profile_form_filled'    // Screen 11: Personal Info Setup Form (Filled)
  | 'profile_confirm_modal'  // Screen 12: Profile Update Confirmation Modal
  | 'profile_success_modal'  // Screen 13: Profile Setup Success Modal
  | 'profile_overview'       // Screen 14: My Profile - Workspaces & Account
  | 'profile_settings'       // Screen 15: My Profile - Stats & Badges
  | 'home_empty'             // Screen 16: Home / Dashboard Empty State
  | 'home_active';           // Screen 17: Home / Dashboard Active Tasks State

export type BottomTab = 'home' | 'tasks' | 'notifications' | 'profile';

export type ViewportWidth = 320 | 360 | 375 | 390 | 414 | 430 | 'auto';

export interface UserProfile {
  fullName: string;
  nickname: string;
  email: string;
  phone: string;
  countryCode: string;
  dob: string;
  gender: string;
  avatar: string;
  role: string;
  company: string;
  notificationsEnabled: boolean;
  biometricsEnabled: boolean;
  darkMode: boolean;
}

export interface TaskItem {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  category: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  assignees: string[];
  color: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  priority: 'High' | 'Medium' | 'Low';
  color: string;
  avatars: string[];
}

export interface CountryCode {
  name: string;
  code: string;
  flag: string;
}
