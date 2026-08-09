export interface Student {
  id: string;
  name: string;
  college: string;
  track: Track;
  avatar: string;
  streak: number;
  longestStreak: number;
  currentDay: number;
  totalDays: number;
  missedDays: number[];
  githubUrl: string;
  linkedinUrl: string;
  bio: string;
  achievements: Achievement[];
  submissions: Submission[];
}

export type Track = 'Web Development' | 'AI/ML' | 'Mobile Development' | 'Data Structures';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface Submission {
  day: number;
  githubUrl: string;
  linkedinUrl: string;
  liveUrl: string;
  submittedAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface DayTask {
  day: number;
  track: Track;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptanceCriteria: string[];
  resources: Resource[];
  hints: string[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'documentation' | 'interactive';
}

export interface LeaderboardEntry {
  rank: number;
  studentId: string;
  name: string;
  college: string;
  streak: number;
  currentDay: number;
  avatar: string;
}