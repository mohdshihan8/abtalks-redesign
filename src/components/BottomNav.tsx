'use client';

import Link from 'next/link';
import { Home, Target, Trophy, User, Flame } from 'lucide-react';

interface BottomNavProps {
  nightMode: boolean;
  activeTab: 'home' | 'today' | 'leaderboard' | 'profile';
  currentDay: number;
}

export default function BottomNav({ nightMode, activeTab, currentDay }: BottomNavProps) {
  const inactiveClass = nightMode ? 'text-slate-500' : 'text-[#94a3b8]';
  const activeClass = 'text-[#f97316]';

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-end justify-between gap-1 px-2 pb-2 pt-1 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md ${
          nightMode ? 'bg-[#1e293b]/95 border border-slate-700' : 'bg-white/95 border border-gray-100'
        }`}
        style={{ maxWidth: '380px', width: '100%' }}
      >
        <Link
          href="/dashboard"
          className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-2xl transition-colors ${
            activeTab === 'home' ? activeClass : inactiveClass
          }`}
        >
          <Home className="w-5 h-5" strokeWidth={activeTab === 'home' ? 2.5 : 1.5} />
          <span className="text-[9px] font-medium">Home</span>
        </Link>

        <Link
          href={`/day/${currentDay}`}
          className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-2xl transition-colors ${
            activeTab === 'today' ? activeClass : inactiveClass
          }`}
        >
          <Target className="w-5 h-5" strokeWidth={activeTab === 'today' ? 2.5 : 1.5} />
          <span className="text-[9px] font-medium">Today</span>
        </Link>

        <Link
          href={`/day/${currentDay}`}
          className="relative -top-5 flex flex-col items-center"
        >
          <div className="w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(249,115,22,0.4)] border-4 border-[#f97316] ring-4 ring-[#f97316]/20 transition-transform active:scale-95">
            <Flame className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <span className={`text-[9px] font-medium mt-0.5 ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>
            Build
          </span>
        </Link>

        <Link
          href="/"
          className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-2xl transition-colors ${
            activeTab === 'leaderboard' ? activeClass : inactiveClass
          }`}
        >
          <Trophy className="w-5 h-5" strokeWidth={activeTab === 'leaderboard' ? 2.5 : 1.5} />
          <span className="text-[9px] font-medium">Rank</span>
        </Link>

        <Link
          href="/profile"
          className={`flex flex-col items-center gap-0.5 py-2 px-3 rounded-2xl transition-colors ${
            activeTab === 'profile' ? activeClass : inactiveClass
          }`}
        >
          <User className="w-5 h-5" strokeWidth={activeTab === 'profile' ? 2.5 : 1.5} />
          <span className="text-[9px] font-medium">Profile</span>
        </Link>
      </nav>
    </div>
  );
}