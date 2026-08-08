'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Flame,
  GitCommit,
  ExternalLink,
  ChevronLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Lightbulb,
  Send,
  Trophy,
  Target,
  Home,
  User,
  Moon,
  Sun,
  Eye,
  EyeOff,
  RotateCcw
} from 'lucide-react';
import { currentStudent, dayTasks } from '@/data/mockData';
import { useParams } from 'next/navigation';
import confetti from 'canvas-confetti';

export default function DayPage() {
  const params = useParams();
  const dayId = parseInt(params.id as string) || 12;
  
  const [nightMode, setNightMode] = useState(false);
  const [showNightSuggestion, setShowNightSuggestion] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [showHints, setShowHints] = useState(false);
  
  const student = currentStudent;
    // Auto-detect late night usage
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 21 || hour < 6) {
      setShowNightSuggestion(true);
    }
  }, []);
  const task = dayTasks['Web Development'][0]; // Using day 12 task
  const isToday = dayId === student.currentDay;
  const alreadySubmitted = student.submissions.some(s => s.day === dayId);
  const isMissed = student.missedDays.includes(dayId);
  // Celebratory sound effect using Web Audio API
  const playSuccessSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Silently fail if audio blocked
    }
  };
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (githubUrl && linkedinUrl) {
      setSubmitted(true);
            playSuccessSound(); // <-- ADD THIS LINE

      
      // Confetti burst
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#f97316', '#1e3a5f', '#22c55e']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#f97316', '#1e3a5f', '#22c55e']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  };

  if (focusMode) {
    return (
      <main className={`min-h-screen ${nightMode ? 'bg-[#0f172a]' : 'bg-[#f0f4f8]'} p-6`}>
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setFocusMode(false)}
              className={`flex items-center gap-2 text-sm ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}
            >
              <ChevronLeft className="w-4 h-4" />
              Exit Focus
            </button>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#f97316]" />
              <span className={`font-mono text-sm ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
          
          <div className={`rounded-2xl p-6 mb-6 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${nightMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-[#f97316]'}`}>
              Day {dayId}
            </span>
            <h1 className={`text-xl font-bold mt-3 mb-2 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
              {task.title}
            </h1>
            <p className={`text-sm leading-relaxed ${nightMode ? 'text-slate-300' : 'text-[#475569]'}`}>
              {task.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${nightMode ? 'text-slate-300' : 'text-[#1e3a5f]'}`}>
                GitHub Repository
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/repo"
                className={`w-full px-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-[#f97316] ${
                  nightMode 
                    ? 'bg-[#0f172a] border-slate-700 text-white placeholder-slate-600' 
                    : 'bg-white border-gray-200 text-[#1e3a5f] placeholder-gray-400'
                }`}
                required
              />
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${nightMode ? 'text-slate-300' : 'text-[#1e3a5f]'}`}>
                LinkedIn Post URL
              </label>
              <input
                type="url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/posts/..."
                className={`w-full px-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-[#f97316] ${
                  nightMode 
                    ? 'bg-[#0f172a] border-slate-700 text-white placeholder-slate-600' 
                    : 'bg-white border-gray-200 text-[#1e3a5f] placeholder-gray-400'
                }`}
                required
              />
            </div>
            <div>
              <label className={`block text-xs font-medium mb-1.5 ${nightMode ? 'text-slate-300' : 'text-[#1e3a5f]'}`}>
                Live Deployment URL (optional)
              </label>
              <input
                type="url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://your-project.vercel.app"
                className={`w-full px-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-[#f97316] ${
                  nightMode 
                    ? 'bg-[#0f172a] border-slate-700 text-white placeholder-slate-600' 
                    : 'bg-white border-gray-200 text-[#1e3a5f] placeholder-gray-400'
                }`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3.5 rounded-2xl transition-colors flex items-center justify-center gap-2 mt-6"
            >
              <Send className="w-4 h-4" />
              Submit Day {dayId}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen pb-24 transition-colors ${nightMode ? 'bg-[#0f172a]' : 'bg-[#f0f4f8]'}`}>
      {/* Header */}
      <header className={`px-5 pt-6 pb-4 ${nightMode ? 'bg-[#1e293b]' : 'bg-[#1e3a5f]'} rounded-b-[28px]`}>
        <div className="flex items-center justify-between mb-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-blue-200 text-sm">
            <ChevronLeft className="w-4 h-4" />
            Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFocusMode(true)}
              className="bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-medium px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              Focus Mode
            </button>
            <button
              onClick={() => setNightMode(!nightMode)}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
            >
              {nightMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-200" />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-lg">
            {dayId}
          </div>
          <div>
            <p className="text-blue-200 text-xs">Day {dayId} of 60</p>
            <h1 className="text-white font-bold text-lg leading-tight">{task.track}</h1>
          </div>
        </div>
      </header>

      <div className="px-5 mt-5 space-y-4">
        {/* Already Submitted State */}
        {alreadySubmitted && !submitted && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-green-800 text-sm font-medium">Day {dayId} Completed!</p>
              <p className="text-green-600 text-xs mt-0.5">Great job keeping your streak alive.</p>
              <div className="flex gap-2 mt-2">
                <a href={student.submissions.find(s => s.day === dayId)?.githubUrl} target="_blank" className="text-xs text-green-700 underline">View GitHub</a>
                <a href={student.submissions.find(s => s.day === dayId)?.linkedinUrl} target="_blank" className="text-xs text-green-700 underline">View LinkedIn</a>
              </div>
            </div>
          </div>
        )}
        {/* Auto Night Mode Suggestion */}
        {showNightSuggestion && !nightMode && (
          <div className="bg-[#1e3a5f] rounded-2xl p-4 flex items-start gap-3 text-white">
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
          </div>
        )}
        {/* Missed Day Banner */}
        {isMissed && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-red-800 text-sm font-medium">You missed this day</p>
              <p className="text-red-600 text-xs mt-0.5">Complete it now to recover your streak.</p>
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-3 py-1.5 rounded-xl flex items-center gap-1 transition-colors">
              <RotateCcw className="w-3 h-3" />
              Recover
            </button>
          </div>
        )}

        {/* Task Card */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              task.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
              task.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {task.difficulty}
            </span>
            {isToday && (
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${nightMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-[#f97316]'}`}>
                Today's Task
              </span>
            )}
          </div>
          
          <h2 className={`text-lg font-bold mb-3 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
            {task.title}
          </h2>
          
          <p className={`text-sm leading-relaxed mb-4 ${nightMode ? 'text-slate-300' : 'text-[#475569]'}`}>
            {task.description}
          </p>

          {/* Acceptance Criteria */}
          <div className={`rounded-xl p-4 ${nightMode ? 'bg-slate-800' : 'bg-[#f8fafc]'}`}>
            <h3 className={`font-semibold text-sm mb-3 flex items-center gap-2 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
              <Target className="w-4 h-4 text-[#f97316]" />
              Acceptance Criteria
            </h3>
            <ul className="space-y-2">
              {task.acceptanceCriteria.map((criteria, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
                  <span className={nightMode ? 'text-slate-300' : 'text-[#475569]'}>{criteria}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <h3 className={`font-semibold text-sm mb-3 flex items-center gap-2 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
            <BookOpen className="w-4 h-4 text-[#1e3a5f]" />
            Resources
          </h3>
          <div className="space-y-2">
            {task.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  nightMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-[#f8fafc] hover:bg-gray-100'
                }`}
              >
                <ExternalLink className="w-4 h-4 text-[#64748b]" />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>{resource.title}</p>
                  <p className={`text-[10px] ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>{resource.type}</p>
                </div>
                <ChevronLeft className="w-4 h-4 rotate-180 text-[#94a3b8]" />
              </a>
            ))}
          </div>
        </div>

        {/* Hints */}
        <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center justify-between w-full"
          >
            <h3 className={`font-semibold text-sm flex items-center gap-2 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Hints
            </h3>
            {showHints ? <EyeOff className="w-4 h-4 text-[#94a3b8]" /> : <Eye className="w-4 h-4 text-[#94a3b8]" />}
          </button>
          {showHints && (
            <ul className="mt-3 space-y-2">
              {task.hints.map((hint, idx) => (
                <li key={idx} className={`flex items-start gap-2 text-xs ${nightMode ? 'text-slate-300' : 'text-[#475569]'}`}>
                  <span className="text-[#f97316] font-bold shrink-0">{idx + 1}.</span>
                  {hint}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Submission Form */}
        {!alreadySubmitted && !submitted && (
          <div className={`rounded-2xl p-5 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm`}>
            <h3 className={`font-semibold text-sm mb-4 flex items-center gap-2 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
              <Send className="w-4 h-4 text-[#f97316]" />
              Submit Your Work
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${nightMode ? 'text-slate-300' : 'text-[#1e3a5f]'}`}>
                  GitHub Repository URL
                </label>
                <div className="relative">
                  <GitCommit className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${nightMode ? 'text-slate-500' : 'text-[#94a3b8]'}`} />
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username/repo"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-[#f97316] ${
                      nightMode 
                        ? 'bg-[#0f172a] border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-[#f8fafc] border-gray-200 text-[#1e3a5f] placeholder-gray-400'
                    }`}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${nightMode ? 'text-slate-300' : 'text-[#1e3a5f]'}`}>
                  LinkedIn Post URL
                </label>
                <div className="relative">
                  <ExternalLink className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${nightMode ? 'text-slate-500' : 'text-[#94a3b8]'}`} />
                  <input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="https://linkedin.com/posts/..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-[#f97316] ${
                      nightMode 
                        ? 'bg-[#0f172a] border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-[#f8fafc] border-gray-200 text-[#1e3a5f] placeholder-gray-400'
                    }`}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${nightMode ? 'text-slate-300' : 'text-[#1e3a5f]'}`}>
                  Live Deployment URL <span className="text-[#94a3b8] font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <ExternalLink className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${nightMode ? 'text-slate-500' : 'text-[#94a3b8]'}`} />
                  <input
                    type="url"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://your-project.vercel.app"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border outline-none focus:ring-2 focus:ring-[#f97316] ${
                      nightMode 
                        ? 'bg-[#0f172a] border-slate-700 text-white placeholder-slate-600' 
                        : 'bg-[#f8fafc] border-gray-200 text-[#1e3a5f] placeholder-gray-400'
                    }`}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3.5 rounded-2xl transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Flame className="w-4 h-4" />
                Submit Day {dayId}
              </button>
            </form>
          </div>
        )}

                {/* Success State */}
        {submitted && (
          <>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-green-800 font-bold text-lg mb-1">Day {dayId} Submitted!</h3>
              <p className="text-green-600 text-sm mb-4">Your streak is now {student.streak + 1} days. Keep building!</p>
              <div className="flex gap-2 justify-center">
                <a href={githubUrl} target="_blank" className="bg-[#1e3a5f] text-white text-xs font-medium px-4 py-2 rounded-xl flex items-center gap-1.5">
                  <GitCommit className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a href={linkedinUrl} target="_blank" className="bg-[#0a66c2] text-white text-xs font-medium px-4 py-2 rounded-xl flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
              <Link 
                href="/dashboard"
                className="block mt-4 text-green-700 text-sm font-medium"
              >
                Back to Dashboard
              </Link>
            </div>
            
            {/* Next Day Preview */}
            <div className={`rounded-2xl p-5 mt-4 ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} shadow-sm border-l-4 border-[#1e3a5f]`}>
              <p className={`text-[10px] font-medium uppercase tracking-wider mb-2 ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
                Coming Up Tomorrow
              </p>
              <h3 className={`font-bold text-base mb-1 ${nightMode ? 'text-white' : 'text-[#1e3a5f]'}`}>
                Build a Contact Form with Validation
              </h3>
              <p className={`text-xs ${nightMode ? 'text-slate-400' : 'text-[#64748b]'}`}>
                Day {dayId + 1} of 60 • Medium difficulty
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className={`text-[10px] px-2 py-1 rounded-full ${nightMode ? 'bg-slate-800 text-slate-300' : 'bg-[#f8fafc] text-[#64748b]'}`}>
                  React Hook Form
                </span>
                <span className={`text-[10px] px-2 py-1 rounded-full ${nightMode ? 'bg-slate-800 text-slate-300' : 'bg-[#f8fafc] text-[#64748b]'}`}>
                  Zod Validation
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto ${nightMode ? 'bg-[#1e293b]' : 'bg-white'} border-t ${nightMode ? 'border-slate-700' : 'border-gray-100'} px-6 py-3 flex justify-between items-center z-50`}>
        <Link href="/dashboard" className={`flex flex-col items-center gap-1 ${nightMode ? 'text-slate-400' : 'text-[#94a3b8]'}`}>
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