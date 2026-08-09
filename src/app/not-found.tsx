import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f0f4f8] px-6 text-center">
      <div className="w-20 h-20 bg-[#1e3a5f]/10 rounded-full flex items-center justify-center mb-4">
        <AlertTriangle className="w-10 h-10 text-[#1e3a5f]" />
      </div>
      <h1 className="text-5xl font-bold text-[#1e3a5f] mb-2">404</h1>
      <p className="text-[#64748b] mb-2">This challenge day doesn&apos;t exist yet.</p>
      <p className="text-[#94a3b8] text-sm mb-8">The 60 Days Challenge only has tasks from Day 1 to Day 60.</p>
      <Link href="/dashboard" className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-2xl font-semibold flex items-center gap-2 transition-colors">
        <Home className="w-4 h-4" />
        Back to Dashboard
      </Link>
    </main>
  );
}