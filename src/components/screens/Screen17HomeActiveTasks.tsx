import React, { useState } from 'react';
import { StatusBar } from '../common/StatusBar';
import { BottomNav } from '../common/BottomNav';
import { 
  Bell, 
  Search, 
  Plus, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Check, 
  Flame,
  LayoutGrid
} from 'lucide-react';
import { BottomTab, TaskItem, ProjectItem, UserProfile } from '../../types';
import { INITIAL_TASKS, INITIAL_PROJECTS, INITIAL_USER } from '../../data/mockData';

interface Screen17HomeActiveTasksProps {
  user?: UserProfile;
  currentTab?: BottomTab;
  onTabChange?: (tab: BottomTab) => void;
  onAddNewTask: () => void;
  onOpenTask?: (task: TaskItem) => void;
  onProfileClick: () => void;
}

export const Screen17HomeActiveTasks: React.FC<Screen17HomeActiveTasksProps> = ({
  user = INITIAL_USER,
  currentTab = 'home',
  onTabChange = () => {},
  onAddNewTask,
  onOpenTask,
  onProfileClick,
}) => {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [filter, setFilter] = useState<'all' | 'in_progress' | 'completed'>('all');

  const toggleTask = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'in_progress') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="w-full h-full flex flex-col justify-between bg-slate-50 dark:bg-slate-900 select-none overflow-hidden relative">
      <div className="flex-1 overflow-y-auto pb-6">
        <StatusBar darkText={true} />

        {/* Top Header */}
        <div className="px-5 pt-2 pb-3 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onProfileClick}>
            <div className="w-10 h-10 rounded-2xl overflow-hidden ring-2 ring-[#7A5AF8]/40 shadow-xs">
              <img
                src={user.avatar}
                alt={user.fullName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white">
                  Good Morning, {user.nickname || 'Ronald'}
                </h3>
                <span className="text-xs">👋</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">
                Let's be productive today
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-xs hover:bg-slate-50 cursor-pointer">
              <Search size={16} />
            </button>

            <button className="w-9 h-9 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-xs relative hover:bg-slate-50 cursor-pointer">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-800"></span>
            </button>
          </div>
        </div>

        {/* Featured Banner Card */}
        <div className="px-5 mt-2">
          <div className="w-full bg-gradient-to-r from-[#7A5AF8] to-[#9A7DFA] rounded-2xl p-4 text-white shadow-purple-glow relative overflow-hidden">
            <div className="absolute -right-4 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
            
            <div className="relative z-10 pr-10">
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center space-x-1 text-[10px] font-bold bg-white/20 px-2.5 py-0.5 rounded-full">
                  <Sparkles size={11} />
                  <span>Sprint Status</span>
                </span>
                <span className="text-xs font-black">75%</span>
              </div>

              <h4 className="text-sm font-extrabold tracking-tight">
                Design System Sprint v2.0
              </h4>
              <p className="text-[11px] text-purple-100 mt-0.5">
                6 of 8 tasks completed for this milestone
              </p>

              {/* Progress bar */}
              <div className="w-full h-1.5 bg-white/25 rounded-full mt-3 overflow-hidden">
                <div className="w-3/4 h-full bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Filter Tabs */}
        <div className="px-5 mt-4">
          <div className="flex items-center space-x-1.5 bg-slate-200/60 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 py-1.5 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-[#7A5AF8] shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
              }`}
            >
              All ({tasks.length})
            </button>
            <button
              onClick={() => setFilter('in_progress')}
              className={`flex-1 py-1.5 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                filter === 'in_progress'
                  ? 'bg-white dark:bg-slate-700 text-[#7A5AF8] shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
              }`}
            >
              To Do ({tasks.filter((t) => !t.completed).length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`flex-1 py-1.5 text-center text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                filter === 'completed'
                  ? 'bg-white dark:bg-slate-700 text-[#7A5AF8] shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800'
              }`}
            >
              Done ({tasks.filter((t) => t.completed).length})
            </button>
          </div>
        </div>

        {/* Today's Tasks List */}
        <div className="px-5 mt-4">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Today's Tasks
            </h4>
            <span className="text-[11px] font-semibold text-[#7A5AF8]">
              {filteredTasks.length} items
            </span>
          </div>

          <div className="space-y-2.5">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                onClick={() => onOpenTask && onOpenTask(task)}
                className={`p-3.5 bg-white dark:bg-slate-800/80 rounded-2xl border transition-all duration-200 shadow-xs cursor-pointer ${
                  task.completed
                    ? 'border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/20'
                    : 'border-slate-100 dark:border-slate-800 hover:border-[#7A5AF8]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start space-x-3 flex-1 min-w-0">
                    {/* Checkbox toggle */}
                    <button
                      type="button"
                      onClick={(e) => toggleTask(task.id, e)}
                      className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-300 dark:border-slate-600 hover:border-[#7A5AF8]'
                      }`}
                    >
                      {task.completed && <Check size={12} strokeWidth={3} />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h5
                        className={`text-xs font-bold leading-tight truncate ${
                          task.completed
                            ? 'line-through text-slate-400 dark:text-slate-500'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {task.title}
                      </h5>

                      <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                        <span className="flex items-center text-[10px] text-slate-400 font-medium space-x-1 whitespace-nowrap">
                          <Clock size={11} className="flex-shrink-0" />
                          <span>
                            {task.startTime} - {task.endTime}
                          </span>
                        </span>
                        <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                          {task.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap ${
                      task.completed
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600'
                        : 'bg-[#7A5AF8]/10 text-[#7A5AF8]'
                    }`}
                  >
                    {task.completed ? 'Done' : 'In Progress'}
                  </span>
                </div>

                {/* Team Assignees */}
                <div className="mt-3 pt-2 border-t border-slate-50 dark:border-slate-700/40 flex items-center justify-between">
                  <div className="flex -space-x-1.5">
                    {task.assignees.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="assignee"
                        className="w-5 h-5 rounded-full border border-white dark:border-slate-800 object-cover"
                      />
                    ))}
                  </div>

                  <span className="text-[9px] font-semibold text-slate-400">
                    Tap to view details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div className="px-5 mt-5">
          <div className="flex items-center justify-between mb-2.5">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white">
              Ongoing Projects
            </h4>
            <span className="text-[11px] font-semibold text-[#7A5AF8]">
              {projects.length} Active
            </span>
          </div>

          <div className="space-y-3">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    {proj.name}
                  </span>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      proj.priority === 'High'
                        ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40'
                        : 'bg-amber-50 text-amber-600 dark:bg-amber-950/40'
                    }`}
                  >
                    {proj.priority}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 mb-1">
                  <span>Progress</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {proj.progress}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#7A5AF8] rounded-full transition-all duration-500"
                    style={{ width: `${proj.progress}%` }}
                  />
                </div>

                {/* Avatars & task count */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex -space-x-1.5">
                    {proj.avatars.map((av, i) => (
                      <img
                        key={i}
                        src={av}
                        alt="member"
                        className="w-5 h-5 rounded-full border border-white dark:border-slate-800 object-cover"
                      />
                    ))}
                  </div>

                  <span className="text-[10px] text-slate-400 font-medium">
                    {proj.completedTasks}/{proj.totalTasks} Tasks Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button (+) */}
      <button
        onClick={onAddNewTask}
        className="absolute bottom-20 right-5 w-12 h-12 rounded-full bg-[#7A5AF8] hover:bg-[#6844F6] text-white flex items-center justify-center shadow-purple-glow transition-transform active:scale-95 cursor-pointer z-30"
      >
        <Plus size={24} strokeWidth={2.4} />
      </button>

      {/* Bottom Navigation */}
      <BottomNav
        currentTab={currentTab}
        onTabChange={onTabChange}
      />
    </div>
  );
};
