'use client';

import { 
  Flame, 
  GitCommit, 
  ExternalLink,
  ArrowRight,
  Users, 
  GraduationCap, 
  Code,
  Brain,
  Smartphone,
  Terminal,
  CheckCircle2,
  Star
} from 'lucide-react';
import Link from 'next/link';
import { stats, tracks } from '@/data/mockData';

export default function LandingPage() {
  return (
    <main className="pb-8">
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white px-6 pt-12 pb-10 rounded-b-[32px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#f97316] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">ABTalks</span>
          </div>
          
          <h1 className="text-3xl font-bold leading-tight mb-4">
            60 Days to Your<br />
            <span className="text-[#f97316]">Dream Job</span>
          </h1>
          
          <p className="text-blue-100 text-base leading-relaxed mb-6">
            Build something every day. Post publicly. Get noticed by recruiters from top tech companies.
          </p>
          
          <div className="flex gap-3 mb-8">
            <Link 
              href="/dashboard"
              className="flex-1 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3.5 px-6 rounded-2xl text-center transition-colors flex items-center justify-center gap-2"
            >
              Start Challenge
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 text-sm">
              <Users className="w-3.5 h-3.5 text-[#f97316]" />
              <span>{stats.totalStudents.toLocaleString()}+ students</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 text-sm">
              <GraduationCap className="w-3.5 h-3.5 text-[#f97316]" />
              <span>{stats.colleges} colleges</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5 mt-8">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">How It Works</h2>
        
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 bg-[#1e3a5f] rounded-xl flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e3a5f] text-sm">Pick Your Track</h3>
              <p className="text-[#64748b] text-xs mt-0.5">Web Dev, AI/ML, Mobile, or DSA. Choose what gets you hired.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 bg-[#1e3a5f] rounded-xl flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e3a5f] text-sm">Build Daily</h3>
              <p className="text-[#64748b] text-xs mt-0.5">Get a new task every day. Commit to GitHub. Post on LinkedIn.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 flex items-start gap-4 shadow-sm">
            <div className="w-10 h-10 bg-[#f97316] rounded-xl flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e3a5f] text-sm">Get Recruited</h3>
              <p className="text-[#64748b] text-xs mt-0.5">Your public streak becomes your portfolio. Recruiters are watching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="px-5 mt-8">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Choose Your Track</h2>
        
        <div className="grid grid-cols-2 gap-3">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-3 text-[#1e3a5f]">
                {track.id === 'Web Development' && <Code className="w-5 h-5" />}
                {track.id === 'AI/ML' && <Brain className="w-5 h-5" />}
                {track.id === 'Mobile Development' && <Smartphone className="w-5 h-5" />}
                {track.id === 'Data Structures' && <Terminal className="w-5 h-5" />}
              </div>
              <h3 className="font-semibold text-[#1e3a5f] text-sm">{track.id}</h3>
              <p className="text-[#64748b] text-[10px] mt-1">{track.description}</p>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-[#64748b]">
                <Users className="w-3 h-3" />
                {track.students.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof of Work */}
      <section className="px-5 mt-8">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Your Daily Proof</h2>
        
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                <GitCommit className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#1e3a5f] text-sm">GitHub Commit</p>
                <p className="text-[#64748b] text-xs">Push code every day</p>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0a66c2] rounded-full flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#1e3a5f] text-sm">LinkedIn Post</p>
                <p className="text-[#64748b] text-xs">Share your learnings</p>
              </div>
            </div>
            <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-5 mt-8">
        <div className="bg-[#1e3a5f] rounded-2xl p-5 shadow-lg text-white">
          <div className="flex items-center gap-1 mb-3">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-4 h-4 fill-[#f97316] text-[#f97316]" />
            ))}
          </div>
          <p className="text-sm leading-relaxed text-blue-50 mb-4">
            "I got 3 interview calls in Week 4 just from my LinkedIn posts. The streak made me visible to recruiters who never would have found me."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center text-sm font-bold">
              RK
            </div>
            <div>
              <p className="font-semibold text-sm">Rohan Kumar</p>
              <p className="text-blue-200 text-xs">Placed at Google • IIT Kharagpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 mt-8 mb-6">
        <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
          <Flame className="w-10 h-10 text-[#f97316] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Ready to Start?</h3>
          <p className="text-[#64748b] text-sm mb-4">Join {stats.totalStudents.toLocaleString()}+ students building their future.</p>
          <Link 
            href="/dashboard"
            className="block w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3.5 rounded-2xl transition-colors"
          >
            Start My 60-Day Challenge
          </Link>
          <p className="text-[#64748b] text-xs mt-3">Free for all college students</p>
        </div>
      </section>
    </main>
  );
}