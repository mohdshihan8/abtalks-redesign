'use client';

import BottomNav from '@/components/BottomNav';
import { useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  GitCommit,
  ExternalLink,
  Trophy,
  Target,
  Home,
  User,
  Moon,
  Sun,
  Award,
  Calendar,
  ArrowLeft,
  Eye,
  Briefcase,
  MapPin,
  GraduationCap,
  Link as LinkIcon
} from 'lucide-react';
import { currentStudent } from '@/data/mockData';

export default function ProfilePage() {
  const [nightMode, setNightMode] = useState(false);
  const [recruiterView, setRecruiterView] = useState(false);
  const student = currentStudent;

  const completionPercent = Math.round((student.currentDay / student.totalDays) * 100);

  if (recruiterView) {
    return (
      <main className={`min-h-screen pb-24 transition-colors ${nightMode ? 'bg-[#0f172a]' : 'bg-[#f0f4f8]'}`}>
        {/* Recruiter Preview Header */}
        <header className={`px-5 pt-6 pb-4 ${nightMode ? 'bg-[#1e293b]' : 'bg-[#1e3a5f]'} rounded-b-[28px]`}>
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setRecruiterView(false)}
              className="flex items-center gap-2 text-blue-200 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Profile
            </button>
            <button
              onClick={() => setNightMode(!nightMode)}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            >
              {nightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-200" />}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-xl">
              {student.avatar}
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">{student.name}</h1>
              <p className="text-blue-200 text-xs">{student.college} • {student.track}</p>
            </div>
          </div>
        </header>

        <div className="px-5 mt-5 space-y-4">
          {/* Recruiter Stats */}
          <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-[#f97316]" />
              <h2 className={`font-bold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Recruiter View</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className={`text-center p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
                <p className="text-[#f97316] font-bold text-xl">{student.streak}</p>
                <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Day Streak</p>
              </div>
              <div className={`text-center p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
                <p className="text-[#f97316] font-bold text-xl">{student.currentDay}</p>
                <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Days Built</p>
              </div>
              <div className={`text-center p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
                <p className="text-[#f97316] font-bold text-xl">{completionPercent}%</p>
                <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Completion</p>
              </div>
            </div>

            <p className={`text-xs leading-relaxed ${nightMode ? 'text-slate-300' : 'text-[#475569]'}`}>
              {student.name} has publicly built and documented {student.currentDay} projects over {student.streak} consecutive days. 
              Their work is visible on GitHub and LinkedIn, demonstrating consistency and commitment.
            </p>
          </div>

          {/* Public Projects */}
          <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
            <h3 className={`font-semibold text-sm mb-3 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Recent Public Work</h3>
            <div className="space-y-2.5">
              {student.submissions.slice(-5).reverse().map((sub) => (
                <div key={sub.day} className={`flex items-center gap-3 p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
                  <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                    D{sub.day}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
                      Day {sub.day} Submission
                    </p>
                    <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
                      {new Date(sub.submittedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <a href={sub.githubUrl} target="_blank" className="w-7 h-7 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                      <GitCommit className="w-3.5 h-3.5 text-white" />
                    </a>
                    <a href={sub.linkedinUrl} target="_blank" className="w-7 h-7 bg-[#0a66c2] rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consistency Graph */}
          <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
            <h3 className={`font-semibold text-sm mb-3 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Consistency</h3>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#22c55e] rounded-full" style={{ width: `${completionPercent}%` }} />
            </div>
            <p className={`text-[10px] mt-2 ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
              {student.name} has maintained a {student.streak}-day streak with only {student.missedDays.length} missed days.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
                {/* Bottom Navigation */}
        <BottomNav nightMode={nightMode} activeTab="profile" currentDay={student.currentDay} />
      </main>
    );
  }

  return (
    <main className={`min-h-screen pb-24 transition-colors ${nightMode ? 'bg-[#0f172a]' : 'bg-[#f0f4f8]'}`}>
      {/* Header */}
      <header className={`px-5 pt-6 pb-4 ${nightMode ? 'bg-[#1e293b]' : 'bg-[#1e3a5f]'} rounded-b-[28px]`}>
        <div className="flex items-center justify-between mb-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-blue-200 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </Link>
          <button
            onClick={() => setNightMode(!nightMode)}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
          >
            {nightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-200" />}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-xl">
            {student.avatar}
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">{student.name}</h1>
            <p className="text-blue-200 text-xs">{student.college} • {student.track}</p>
          </div>
        </div>
      </header>

      <div className="px-5 mt-5 space-y-4">
        {/* Recruiter Preview Toggle */}
        <button
          onClick={() => setRecruiterView(true)}
          className={`w-full rounded-2xl p-4 flex items-center gap-3 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm border-2 border-dashed border-[#f97316]/30 hover:border-[#f97316] transition-colors`}
        >
          <div className="w-10 h-10 bg-[#f97316]/10 rounded-xl flex items-center justify-center">
            <Eye className="w-5 h-5 text-[#f97316]" />
          </div>
          <div className="text-left flex-1">
            <p className={`font-semibold text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>See Recruiter View</p>
            <p className={`text-xs ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Preview how hiring managers see your profile</p>
          </div>
          <ArrowLeft className="w-4 h-4 rotate-180 text-[#f97316]" />
        </button>

        {/* Bio */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <h3 className={`font-semibold text-sm mb-2 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>About</h3>
          <p className={`text-sm ${nightMode ? 'text-slate-300' : 'text-[#475569]'}`}>{student.bio}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className={`text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 ${nightMode ? 'bg-slate-800 text-slate-300' : 'bg-[#f8fafc] text-[#64748b]'}`}>
              <GraduationCap className="w-3 h-3" />
              {student.college}
            </span>
            <span className={`text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 ${nightMode ? 'bg-slate-800 text-slate-300' : 'bg-[#f8fafc] text-[#64748b]'}`}>
              <Briefcase className="w-3 h-3" />
              {student.track}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <h3 className={`font-semibold text-sm mb-3 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
              <p className="text-[#f97316] font-bold text-xl">{student.streak}</p>
              <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Current Streak</p>
            </div>
            <div className={`p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
              <p className="text-[#f97316] font-bold text-xl">{student.currentDay}</p>
              <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Days Completed</p>
            </div>
            <div className={`p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
              <p className="text-[#f97316] font-bold text-xl">{student.longestStreak}</p>
              <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Longest Streak</p>
            </div>
            <div className={`p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
              <p className="text-[#f97316] font-bold text-xl">{student.achievements.length}</p>
              <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>Achievements</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <h3 className={`font-semibold text-sm mb-3 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Links</h3>
          <div className="space-y-2">
            <a href={student.githubUrl} target="_blank" className={`flex items-center gap-3 p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
              <GitCommit className="w-4 h-4 text-[#1e3a5f]" />
              <span className={`text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>GitHub</span>
              <ArrowLeft className="w-4 h-4 rotate-180 text-[#94a3b8] ml-auto" />
            </a>
            <a href={student.linkedinUrl} target="_blank" className={`flex items-center gap-3 p-3 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
              <ExternalLink className="w-4 h-4 text-[#0a66c2]" />
              <span className={`text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>LinkedIn</span>
              <ArrowLeft className="w-4 h-4 rotate-180 text-[#94a3b8] ml-auto" />
            </a>
          </div>
        </div>

        {/* Achievements */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <h3 className={`font-semibold text-sm mb-3 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>Achievements</h3>
          <div className="space-y-2.5">
            {student.achievements.map((ach) => (
              <div key={ach.id} className={`flex items-center gap-3 p-2.5 rounded-xl ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
                <div className="w-9 h-9 bg-[#f97316]/10 rounded-lg flex items-center justify-center">
                  {ach.icon === 'GitCommit' && <GitCommit className="w-4 h-4 text-[#f97316]" />}
                  {ach.icon === 'Flame' && <Flame className="w-4 h-4 text-[#f97316]" />}
                  {ach.icon === 'Zap' && <Award className="w-4 h-4 text-[#f97316]" />}
                </div>
                <div>
                  <p className={`font-medium text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>{ach.title}</p>
                  <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>{ach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav nightMode={nightMode} activeTab="profile" currentDay={student.currentDay} />
    </main>
  );
}