import { CountryCode, ProjectItem, TaskItem, UserProfile } from '../types';

export const INITIAL_USER: UserProfile = {
  fullName: 'Ronald Richards',
  nickname: 'Ronald',
  email: 'ronald.richards@example.com',
  phone: '812 3456 7890',
  countryCode: '+1',
  dob: '1998-07-24',
  gender: 'Male',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  role: 'Lead Product Designer',
  company: 'Stackly Design Systems',
  notificationsEnabled: true,
  biometricsEnabled: true,
  darkMode: false,
};

export const AVATAR_OPTIONS = [
  {
    id: 'avatar_1',
    name: 'Ronald (Pink Hood)',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    color: '#F472B6',
  },
  {
    id: 'avatar_2',
    name: 'Alex (Glasses)',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    color: '#60A5FA',
  },
  {
    id: 'avatar_3',
    name: 'Sara (Creative)',
    url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    color: '#34D399',
  },
  {
    id: 'avatar_4',
    name: 'Liam (Developer)',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    color: '#A78BFA',
  },
];

export const COUNTRY_CODES: CountryCode[] = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
];

export const INITIAL_TASKS: TaskItem[] = [
  {
    id: 'task-1',
    title: 'Mobile App Wireframing',
    startTime: '09:00 AM',
    endTime: '11:00 AM',
    category: 'Product Design',
    completed: false,
    priority: 'High',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    ],
    color: '#7A5AF8',
  },
  {
    id: 'task-2',
    title: 'User Testing & Interview Analysis',
    startTime: '01:00 PM',
    endTime: '02:30 PM',
    category: 'UX Research',
    completed: false,
    priority: 'Medium',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    ],
    color: '#3B82F6',
  },
  {
    id: 'task-3',
    title: 'Client Sprint Review Meeting',
    startTime: '03:30 PM',
    endTime: '04:30 PM',
    category: 'Management',
    completed: false,
    priority: 'High',
    assignees: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    ],
    color: '#10B981',
  },
  {
    id: 'task-4',
    title: 'Design System Component Tokens',
    startTime: '05:00 PM',
    endTime: '06:00 PM',
    category: 'Design System',
    completed: true,
    priority: 'Low',
    assignees: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    ],
    color: '#EC4899',
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    name: 'Task Management Mobile App',
    category: 'Mobile UX/UI',
    progress: 75,
    totalTasks: 8,
    completedTasks: 6,
    priority: 'High',
    color: '#7A5AF8',
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    ],
  },
  {
    id: 'proj-2',
    name: 'Stackly Cloud Web Platform',
    category: 'Web Application',
    progress: 45,
    totalTasks: 12,
    completedTasks: 5,
    priority: 'Medium',
    color: '#F59E0B',
    avatars: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    ],
  },
];

export const PROFILE_STATS = {
  completed: 24,
  inProgress: 12,
  pending: 8,
  overdue: 2,
};
