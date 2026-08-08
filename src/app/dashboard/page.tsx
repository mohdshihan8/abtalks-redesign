'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Flame,
  GitCommit,
  ExternalLink,
  Trophy,
  Moon,
  Sun,
  ChevronRight,
  Calendar,
  Zap,
  Target,
  Award,
  AlertCircle,
  RotateCcw,
  Home,
  User
} from 'lucide-react';
import { currentStudent, leaderboard } from '@/data/mockData';

export default function DashboardPage() {
  const [nightMode, setNightMode] = useState(false);
  const [showNightSuggestion, setShowNightSuggestion] = useState(false);
  const student = currentStudent;
  
  const completionPercent = Math.round((student.currentDay / student.totalDays) * 100);
  const hasMissedDay = student.missedDays.length > 0;
  const lastMissed = hasMissedDay ? Math.max(...student.missedDays) : null;
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 21 || hour < 6) {
      setShowNightSuggestion(true);
    }
  }, []);
  
  const calendarDays = Array.from({ length: 60 }, (_, i) => {
    const dayNum = i + 1;
    const isSubmitted = student.submissions.some(s => s.day === dayNum);
    const isMissed = student.missedDays.includes(dayNum);
    const isToday = dayNum === student.currentDay;
    return { day: dayNum, isSubmitted, isMissed, isToday };
  });

  const getStreakMessage = () => {
    if (student.streak === 0) return "Start your streak today!";
    if (student.streak < 7) return `${student.streak} days — keep building!`;
    if (student.streak < 14) return "You're on fire!";
    return "Unstoppable streak!";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <main className={`min-h-screen pb-28 transition-colors ${nightMode ? 'bg-[#0f172a]' : 'bg-[#f0f4f8]'}`}>
      {/* Header */}
      <header className={`px-5 pt-6 pb-4 ${nightMode ? 'bg-[#1e293b]' : 'bg-[#1e3a5f]'} rounded-b-[28px]`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {student.avatar}
            </div>
            <div>
              <p className={`text-xs ${nightMode ? 'text-slate-400' : 'text-blue-200'}`}>Welcome back,</p>
              <h1 className="text-white font-bold text-lg leading-tight">{student.name}</h1>
            </div>
          </div>
          <button
            onClick={() => setNightMode(!nightMode)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
          >
            {nightMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-200" />}
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-100">
          <span className="bg-white/10 rounded-full px-2.5 py-1 text-xs">{student.college}</span>
          <span className="bg-white/10 rounded-full px-2.5 py-1 text-xs">{student.track}</span>
        </div>
      </header>

      <motion.div 
        className="px-5 mt-5 space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Auto Night Mode Suggestion */}
        {showNightSuggestion && !nightMode && (
          <motion.div variants={cardVariants} className="bg-[#1e3a5f] rounded-2xl p-4 flex items-start gap-3 text-white">
            <Moon className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium">It's late — building in the dark?</p>
              <p className="text-blue-200 text-xs mt-0.5">Switch to Night Mode for easier on the eyes.</p>
            </div>
            <button 
              onClick={() => { setNightMode(true); setShowNightSuggestion(false); }}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium px-3 py-1.5 rounded-xl transition-colors"
            >
              Switch
            </button>
            <button 
              onClick={() => setShowNightSuggestion(false)}
              className="text-blue-300 text-xs hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </motion.div>
        )}

        {/* Streak Card */}
        <motion.div variants={cardVariants} className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#f97316]" />
              <span className={`font-semibold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Current Streak</span>
            </div>
            <span className="text-[#f97316] font-bold text-2xl">{student.streak}</span>
          </div>
          <p className={`text-xs mb-3 ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>{getStreakMessage()}</p>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#f97316] rounded-full transition-all" style={{ width: `${Math.min((student.streak / 60) * 100, 100)}%` }} />
          </div>
          <p className={`text-[10px] mt-1.5 ${nightMode ? 'text-slate-500' : 'text-[#94a3b8]'}`}>Longest: {student.longestStreak} days</p>
        </motion.div>

        {/* Missed Day Recovery Banner */}
        {hasMissedDay && (
          <motion.div variants={cardVariants} className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-amber-800 text-sm font-medium">You missed Day {lastMissed}</p>
              <p className="text-amber-600 text-xs mt-0.5">Don't break your momentum. Catch up now!</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium px-3 py-1.5 rounded-xl flex items-center gap-1 transition-colors">
              <RotateCcw className="w-3 h-3" />
              Recover
            </button>
          </motion.div>
        )}

        {/* Today's Task Card */}
        <motion.div variants={cardVariants}>
          <Link href={`/day/${student.currentDay}`} className="block">
            <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm border-l-4 border-[#f97316]`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${nightMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-[#f97316]'}`}>
                  Day {student.currentDay} of {student.totalDays}
                </span>
                <ChevronRight className={`w-4 h-4 ${nightMode ? 'text-slate-500' : 'text-[#94a3b8]'}`} />
              </div>
              <h3 className={`font-bold text-base mb-1 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Build a Responsive Pricing Page</h3>
              <p className={`text-xs ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Medium difficulty • Web Development</p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <GitCommit className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>GitHub</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-[#0a66c2]" />
                  <span className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>LinkedIn</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Progress Section */}
        <motion.div variants={cardVariants} className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[#1e3a5f]" />
              <span className={`font-semibold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Challenge Progress</span>
            </div>
            <span className={`font-bold text-sm ${nightMode ? 'text-orange-400' : 'text-[#f97316]'}`}>{completionPercent}%</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#1e3a5f] rounded-full transition-all" style={{ width: `${completionPercent}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-[#94a3b8]">
            <span>Day 1</span>
            <span>Day 30</span>
            <span>Day 60</span>
          </div>
        </motion.div>

        {/* Calendar Heatmap */}
        <motion.div variants={cardVariants} className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-[#1e3a5f]" />
            <span className={`font-semibold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Your Journey</span>
          </div>
          <div className="grid grid-cols-10 gap-1.5">
            {calendarDays.slice(0, 40).map((day) => (
              <Link
                key={day.day}
                href={`/day/${day.day}`}
                className={`aspect-square rounded-md text-[8px] flex items-center justify-center font-medium transition-transform active:scale-90 ${
                  day.isToday
                    ? 'bg-[#f97316] text-white ring-2 ring-[#f97316]/30'
                    : day.isSubmitted
                    ? 'bg-[#22c55e] text-white'
                    : day.isMissed
                    ? 'bg-red-200 text-red-600'
                    : nightMode
                    ? 'bg-slate-700 text-slate-500'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {day.day}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3 text-[10px]">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-[#22c55e] rounded-sm" />
              <span className={nightMode ? 'text-slate-400' : 'text-[#64748b]'}>Done</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-[#f97316] rounded-sm" />
              <span className={nightMode ? 'text-slate-400' : 'text-[#64748b]'}>Today</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-red-200 rounded-sm" />
              <span className={nightMode ? 'text-slate-400' : 'text-[#64748b]'}>Missed</span>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={cardVariants} className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#f97316]" />
              <span className={`font-semibold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Achievements</span>
            </div>
            <span className={`text-xs ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>{student.achievements.length} earned</span>
          </div>
          <div className="space-y-2.5">
            {student.achievements.map((ach) => (
              <div key={ach.id} className={`flex items-center gap-3 p-2.5 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
                <div className="w-9 h-9 bg-[#f97316]/10 rounded-lg flex items-center justify-center">
                  {ach.icon === 'GitCommit' && <GitCommit className="w-4 h-4 text-[#f97316]" />}
                  {ach.icon === 'Flame' && <Flame className="w-4 h-4 text-[#f97316]" />}
                  {ach.icon === 'Zap' && <Zap className="w-4 h-4 text-[#f97316]" />}
                </div>
                <div>
                  <p className={`font-medium text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>{ach.title}</p>
                  <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mini Leaderboard */}
        <motion.div variants={cardVariants} className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#f97316]" />
              <span className={`font-semibold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Leaderboard</span>
            </div>
            <span className={`text-xs ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Top 5</span>
          </div>
          <div className="space-y-2">
            {leaderboard.slice(0, 5).map((entry) => (
              <div 
                key={entry.studentId} 
                className={`flex items-center gap-3 p-2.5 rounded-xl ${
                  entry.studentId === student.id 
                    ? nightMode ? 'bg-orange-500/10' : 'bg-orange-50' 
                    : nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'
                }`}
              >
                <span className={`w-6 text-center font-bold text-sm ${
                  entry.rank === 1 ? 'text-[#f97316]' : 
                  entry.rank === 2 ? 'text-[#94a3b8]' : 
                  entry.rank === 3 ? 'text-[#b45309]' : 
                  nightMode ? 'text-slate-500' : 'text-[#94a3b8]'
                }`}>
                  {entry.rank}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  entry.studentId === student.id ? 'bg-[#f97316] text-white' : nightMode ? 'bg-slate-700 text-slate-300' : 'bg-[#1e3a5f]/10 text-[#1e3a5f]'
                }`}>
                  {entry.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium text-sm truncate ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
                    {entry.name} {entry.studentId === student.id && '(You)'}
                  </p>
                  <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>{entry.college}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#f97316]" />
                  <span className={`text-xs font-semibold ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>{entry.streak}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} border-t ${nightMode ? 'border-slate-700' : 'border-gray-100'} px-6 py-3 flex justify-between items-center z-50`}>
        <Link href="/dashboard" className="flex flex-col items-center gap-1 text-[#f97316]">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link href={`/day/${student.currentDay}`} className={`flex flex-col items-center gap-1 ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
          <Target className="w-5 h-5" />
          <span className="text-[10px] font-medium">Today</span>
        </Link>
        <Link href="/" className={`flex flex-col items-center gap-1 ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
          <Trophy className="w-5 h-5" />
          <span className="text-[10px] font-medium">Leaderboard</span>
        </Link>
        <Link href="/profile" className={`flex flex-col items-center gap-1 ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
    </main>
  );
}