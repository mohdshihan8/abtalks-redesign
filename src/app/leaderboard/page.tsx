'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trophy, Flame, ArrowLeft, Medal, Crown } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { leaderboard, currentStudent } from '@/data/mockData';

export default function LeaderboardPage() {
  const [filter, setFilter] = useState<'all' | 'week' | 'month'>('all');
  const student = currentStudent;

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-amber-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-700" />;
    return <span className="w-5 text-center text-sm font-bold text-slate-400">{rank}</span>;
  };

  return (
    <main className="min-h-screen pb-24 bg-[#f0f4f8]">
      <header className="bg-[#1e3a5f] rounded-b-[28px] px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-blue-200 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
        <h1 className="text-white font-bold text-xl">Leaderboard</h1>
        <p className="text-blue-200 text-xs mt-1">Top builders this month</p>
      </header>

      <div className="px-5 mt-5">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          {(['all', 'week', 'month'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                filter === f ? 'bg-[#f97316] text-white' : 'bg-white text-[#64748b] hover:bg-gray-50'
              }`}
            >
              {f === 'all' ? 'All Time' : f === 'week' ? 'This Week' : 'This Month'}
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className="flex items-end justify-center gap-3 mb-6">
          {leaderboard.slice(0, 3).map((entry, idx) => (
            <div key={entry.studentId} className={`flex flex-col items-center ${idx === 0 ? 'order-2' : idx === 1 ? 'order-1' : 'order-3'}`}>
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                idx === 0 ? 'bg-amber-400 ring-4 ring-amber-200' : idx === 1 ? 'bg-slate-400 ring-4 ring-slate-200' : 'bg-amber-700 ring-4 ring-amber-300'
              }`}>
                {entry.avatar}
              </div>
              <p className="text-xs font-semibold mt-2 text-[#1e3a5f]">{entry.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Flame className="w-3 h-3 text-[#f97316]" />
                <span className="text-xs font-bold text-[#f97316]">{entry.streak}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full List */}
        <div className="space-y-2">
          {leaderboard.map((entry) => (
            <div key={entry.studentId} className={`flex items-center gap-3 p-3 rounded-2xl ${
              entry.studentId === student.id ? 'bg-[#f97316]/10 border border-[#f97316]/20' : 'bg-white'
            }`}>
              <div className="w-8 flex justify-center">{getRankIcon(entry.rank)}</div>
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-xs font-bold">
                {entry.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1e3a5f] truncate">
                  {entry.name} {entry.studentId === student.id && <span className="text-[#f97316] text-xs">(You)</span>}
                </p>
                <p className="text-[10px] text-[#94a3b8]">{entry.college}</p>
              </div>
              <div className="flex items-center gap-1 bg-[#f8fafc] px-2.5 py-1.5 rounded-xl">
                <Flame className="w-3.5 h-3.5 text-[#f97316]" />
                <span className="text-xs font-bold text-[#1e3a5f]">{entry.streak}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav nightMode={false} activeTab="leaderboard" currentDay={student.currentDay} />
    </main>
  );
}