import { Student, DayTask, LeaderboardEntry, Track } from '@/types';

export const currentStudent: Student = {
  id: 'student-001',
  name: 'Arjun Patel',
  college: 'IIT Bombay',
  track: 'Web Development',
  avatar: 'AP',
  streak: 11,
  longestStreak: 11,
  currentDay: 12,
  totalDays: 60,
  missedDays: [5],
  githubUrl: 'https://github.com/arjunpatel',
  linkedinUrl: 'https://linkedin.com/in/arjunpatel',
  bio: 'Aspiring full-stack developer | Third year CSE',
  achievements: [
    {
      id: 'ach-1',
      title: 'First Commit',
      description: 'Submitted your first day',
      icon: 'GitCommit',
      earnedAt: '2026-07-27',
    },
    {
      id: 'ach-2',
      title: '7-Day Streak',
      description: 'Built for 7 days straight',
      icon: 'Flame',
      earnedAt: '2026-08-02',
    },
    {
      id: 'ach-3',
      title: '10-Day Warrior',
      description: 'Double digits, keep going!',
      icon: 'Zap',
      earnedAt: '2026-08-05',
    },
  ],
  submissions: [
    {
      day: 1,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day1',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day1',
      liveUrl: 'https://abtalks-day1.vercel.app',
      submittedAt: '2026-07-27T22:30:00Z',
      status: 'approved',
    },
    {
      day: 2,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day2',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day2',
      liveUrl: 'https://abtalks-day2.vercel.app',
      submittedAt: '2026-07-28T23:15:00Z',
      status: 'approved',
    },
    {
      day: 3,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day3',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day3',
      liveUrl: 'https://abtalks-day3.vercel.app',
      submittedAt: '2026-07-29T21:45:00Z',
      status: 'approved',
    },
    {
      day: 4,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day4',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day4',
      liveUrl: 'https://abtalks-day4.vercel.app',
      submittedAt: '2026-07-30T22:00:00Z',
      status: 'approved',
    },
    {
      day: 6,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day6',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day6',
      liveUrl: 'https://abtalks-day6.vercel.app',
      submittedAt: '2026-08-01T23:30:00Z',
      status: 'approved',
    },
    {
      day: 7,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day7',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day7',
      liveUrl: 'https://abtalks-day7.vercel.app',
      submittedAt: '2026-08-02T22:45:00Z',
      status: 'approved',
    },
    {
      day: 8,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day8',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day8',
      liveUrl: 'https://abtalks-day8.vercel.app',
      submittedAt: '2026-08-03T21:30:00Z',
      status: 'approved',
    },
    {
      day: 9,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day9',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day9',
      liveUrl: 'https://abtalks-day9.vercel.app',
      submittedAt: '2026-08-04T23:00:00Z',
      status: 'approved',
    },
    {
      day: 10,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day10',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day10',
      liveUrl: 'https://abtalks-day10.vercel.app',
      submittedAt: '2026-08-05T22:15:00Z',
      status: 'approved',
    },
    {
      day: 11,
      githubUrl: 'https://github.com/arjunpatel/abtalks-day11',
      linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day11',
      liveUrl: 'https://abtalks-day11.vercel.app',
      submittedAt: '2026-08-06T23:45:00Z',
      status: 'approved',
    },
  ],
};

export const dayTasks: Record<Track, DayTask[]> = {
  'Web Development': [
    {
      day: 12,
      track: 'Web Development',
      title: 'Build a Responsive Pricing Page',
      description: 'Create a fully responsive pricing page for a SaaS product. Include three tiers (Free, Pro, Enterprise) with feature comparisons, toggle for monthly/yearly billing, and a prominent CTA button.',
      difficulty: 'Medium',
      acceptanceCriteria: [
        'Three pricing tiers with clear feature lists',
        'Monthly/Yearly toggle with price animation',
        'Fully responsive on mobile, tablet, and desktop',
        'Hover effects on cards and buttons',
        'Accessible color contrast and focus states',
      ],
      resources: [
        { title: 'CSS Grid Layout Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', type: 'article' },
        { title: 'Accessible Pricing Tables', url: 'https://www.smashingmagazine.com/accessible-pricing-tables/', type: 'article' },
        { title: 'Tailwind CSS Transitions', url: 'https://tailwindcss.com/docs/transition-property', type: 'documentation' },
      ],
      hints: [
        'Use CSS Grid for the pricing card layout',
        'Store pricing data in an array and map over it',
        'Use useState for the billing toggle',
      ],
    },
  ],
  'AI/ML': [],
  'Mobile Development': [],
  'Data Structures': [],
};

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, studentId: 's-102', name: 'Priya Sharma', college: 'NIT Trichy', streak: 28, currentDay: 28, avatar: 'PS' },
  { rank: 2, studentId: 's-045', name: 'Rahul Verma', college: 'BITS Pilani', streak: 24, currentDay: 24, avatar: 'RV' },
  { rank: 3, studentId: 's-089', name: 'Ananya Gupta', college: 'IIT Delhi', streak: 22, currentDay: 22, avatar: 'AG' },
  { rank: 4, studentId: 'student-001', name: 'Arjun Patel', college: 'IIT Bombay', streak: 11, currentDay: 12, avatar: 'AP' },
  { rank: 5, studentId: 's-156', name: 'Karthik Iyer', college: 'VIT Vellore', streak: 9, currentDay: 10, avatar: 'KI' },
  { rank: 6, studentId: 's-203', name: 'Sneha Reddy', college: 'SRM University', streak: 7, currentDay: 8, avatar: 'SR' },
  { rank: 7, studentId: 's-078', name: 'Vikram Singh', college: 'NIT Warangal', streak: 5, currentDay: 6, avatar: 'VS' },
  { rank: 8, studentId: 's-134', name: 'Meera Nair', college: 'IIT Madras', streak: 3, currentDay: 4, avatar: 'MN' },
];

export const tracks: { id: Track; description: string; icon: string; students: number }[] = [
  { id: 'Web Development', description: 'HTML, CSS, JS, React, Next.js', icon: 'Globe', students: 1240 },
  { id: 'AI/ML', description: 'Python, TensorFlow, NLP, CV', icon: 'Brain', students: 890 },
  { id: 'Mobile Development', description: 'React Native, Flutter, Swift', icon: 'Smartphone', students: 650 },
  { id: 'Data Structures', description: 'Algorithms, Problem Solving', icon: 'Code', students: 1560 },
];

export const stats = {
  totalStudents: 4340,
  colleges: 156,
  countries: 1,
  avgStreak: 8.5,
  completionRate: 34,
};