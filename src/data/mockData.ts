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
    { id: 'ach-1', title: 'First Commit', description: 'Submitted your first day', icon: 'GitCommit', earnedAt: '2026-07-27' },
    { id: 'ach-2', title: '7-Day Streak', description: 'Built for 7 days straight', icon: 'Flame', earnedAt: '2026-08-02' },
    { id: 'ach-3', title: '10-Day Warrior', description: 'Double digits, keep going!', icon: 'Zap', earnedAt: '2026-08-05' },
  ],
  submissions: [
    { day: 1, githubUrl: 'https://github.com/arjunpatel/abtalks-day1', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day1', liveUrl: 'https://abtalks-day1.vercel.app', submittedAt: '2026-07-27T22:30:00Z', status: 'approved' },
    { day: 2, githubUrl: 'https://github.com/arjunpatel/abtalks-day2', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day2', liveUrl: 'https://abtalks-day2.vercel.app', submittedAt: '2026-07-28T23:15:00Z', status: 'approved' },
    { day: 3, githubUrl: 'https://github.com/arjunpatel/abtalks-day3', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day3', liveUrl: 'https://abtalks-day3.vercel.app', submittedAt: '2026-07-29T21:45:00Z', status: 'approved' },
    { day: 4, githubUrl: 'https://github.com/arjunpatel/abtalks-day4', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day4', liveUrl: 'https://abtalks-day4.vercel.app', submittedAt: '2026-07-30T22:00:00Z', status: 'approved' },
    { day: 6, githubUrl: 'https://github.com/arjunpatel/abtalks-day6', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day6', liveUrl: 'https://abtalks-day6.vercel.app', submittedAt: '2026-08-01T23:30:00Z', status: 'approved' },
    { day: 7, githubUrl: 'https://github.com/arjunpatel/abtalks-day7', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day7', liveUrl: 'https://abtalks-day7.vercel.app', submittedAt: '2026-08-02T22:45:00Z', status: 'approved' },
    { day: 8, githubUrl: 'https://github.com/arjunpatel/abtalks-day8', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day8', liveUrl: 'https://abtalks-day8.vercel.app', submittedAt: '2026-08-03T21:30:00Z', status: 'approved' },
    { day: 9, githubUrl: 'https://github.com/arjunpatel/abtalks-day9', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day9', liveUrl: 'https://abtalks-day9.vercel.app', submittedAt: '2026-08-04T23:00:00Z', status: 'approved' },
    { day: 10, githubUrl: 'https://github.com/arjunpatel/abtalks-day10', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day10', liveUrl: 'https://abtalks-day10.vercel.app', submittedAt: '2026-08-05T22:15:00Z', status: 'approved' },
    { day: 11, githubUrl: 'https://github.com/arjunpatel/abtalks-day11', linkedinUrl: 'https://linkedin.com/posts/arjunpatel-day11', liveUrl: 'https://abtalks-day11.vercel.app', submittedAt: '2026-08-06T23:45:00Z', status: 'approved' },
  ],
};

const allTasksData: DayTask[] = [
  {
    day: 1, track: 'Web Development', title: 'Build a Personal Portfolio', difficulty: 'Easy',
    description: 'Create a single-page personal portfolio with your name, photo, skills, and contact info using HTML and CSS.',
    acceptanceCriteria: ['Semantic HTML5 structure', 'CSS styling with custom colors', 'Responsive layout', 'Contact section with social links'],
    resources: [{ title: 'MDN HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', type: 'documentation' }, { title: 'CSS Tricks Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', type: 'article' }],
    hints: ['Use <section> tags for each part', 'Flexbox for centering content', 'Google Fonts for typography'],
  },
  {
    day: 2, track: 'Web Development', title: 'Responsive Navigation Bar', difficulty: 'Easy',
    description: 'Build a navigation bar that collapses into a hamburger menu on mobile screens.',
    acceptanceCriteria: ['Desktop horizontal nav', 'Mobile hamburger menu', 'Smooth CSS transitions', 'Active link highlighting'],
    resources: [{ title: 'Media Queries Guide', url: 'https://css-tricks.com/a-complete-guide-to-css-media-queries/', type: 'article' }, { title: 'CSS Transitions', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions', type: 'documentation' }],
    hints: ['Use display: none/block for mobile toggle', 'max-width: 768px for mobile breakpoint', 'transition: all 0.3s ease'],
  },
  {
    day: 3, track: 'Web Development', title: 'CSS Grid Photo Gallery', difficulty: 'Easy',
    description: 'Create a responsive photo gallery using CSS Grid with hover zoom effects.',
    acceptanceCriteria: ['CSS Grid layout with auto-fit', 'Hover zoom effect on images', 'Responsive columns (1-4)', 'Lazy loading placeholder'],
    resources: [{ title: 'CSS Grid Garden', url: 'https://cssgridgarden.com/', type: 'interactive' }, { title: 'Object-fit Property', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit', type: 'documentation' }],
    hints: ['grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))', 'overflow: hidden on container', 'transform: scale(1.05) on hover'],
  },
  {
    day: 4, track: 'Web Development', title: 'JavaScript Todo List', difficulty: 'Medium',
    description: 'Build a functional todo list with add, delete, complete, and localStorage persistence.',
    acceptanceCriteria: ['Add new tasks', 'Mark tasks complete/incomplete', 'Delete tasks', 'Persist in localStorage', 'Filter by all/active/completed'],
    resources: [{ title: 'LocalStorage API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage', type: 'documentation' }, { title: 'DOM Manipulation', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents', type: 'documentation' }],
    hints: ['Use JSON.stringify for storage', 'Event delegation for delete buttons', 'Array methods: filter, map, forEach'],
  },
  {
    day: 5, track: 'Web Development', title: 'Weather App with API', difficulty: 'Medium',
    description: 'Create a weather dashboard that fetches real-time data from a public weather API.',
    acceptanceCriteria: ['Fetch API for data', 'City search input', 'Display temp, humidity, wind', 'Loading and error states', '5-day forecast'],
    resources: [{ title: 'Fetch API Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API', type: 'documentation' }, { title: 'OpenWeatherMap API', url: 'https://openweathermap.org/api', type: 'documentation' }],
    hints: ['Use async/await for fetch', 'Handle 404 for invalid cities', 'Store API key in .env file'],
  },
  {
    day: 6, track: 'Web Development', title: 'React Counter with Hooks', difficulty: 'Medium',
    description: 'Build an interactive counter with increment, decrement, reset, and history tracking using React hooks.',
    acceptanceCriteria: ['useState for count', 'useEffect for document title', 'History log of changes', 'Keyboard shortcuts (+/-)', 'Custom step size'],
    resources: [{ title: 'React Hooks Overview', url: 'https://react.dev/reference/react', type: 'documentation' }, { title: 'useEffect Deep Dive', url: 'https://react.dev/reference/react/useEffect', type: 'documentation' }],
    hints: ['useState([]) for history', 'useEffect(() => {document.title = ...}, [count])', 'Array spread for immutability'],
  },
  {
    day: 7, track: 'Web Development', title: 'Markdown Previewer', difficulty: 'Medium',
    description: 'Build a live markdown previewer that converts markdown to HTML in real-time.',
    acceptanceCriteria: ['Textarea for markdown input', 'Live HTML preview', 'Support headers, lists, links', 'Syntax highlighting option', 'Copy HTML output'],
    resources: [{ title: 'Marked.js Library', url: 'https://marked.js.org/', type: 'documentation' }, { title: 'DOMPurify for XSS', url: 'https://github.com/cure53/DOMPurify', type: 'documentation' }],
    hints: ['npm install marked', 'Use dangerouslySetInnerHTML with DOMPurify', 'Split-pane layout with CSS Grid'],
  },
  {
    day: 8, track: 'Web Development', title: 'Authentication Flow UI', difficulty: 'Hard',
    description: 'Create a complete auth flow with login, signup, forgot password, and form validation.',
    acceptanceCriteria: ['Login and signup forms', 'Form validation with errors', 'Password strength indicator', 'Toggle show/hide password', 'Success toast messages'],
    resources: [{ title: 'React Hook Form', url: 'https://react-hook-form.com/', type: 'documentation' }, { title: 'Zod Validation', url: 'https://zod.dev/', type: 'documentation' }],
    hints: ['Use react-hook-form + zod', 'Regex for password strength', 'AnimatePresence for toast'],
  },
  {
    day: 9, track: 'Web Development', title: 'E-commerce Product Card', difficulty: 'Medium',
    description: 'Build a product card component with image gallery, size selector, add-to-cart, and wishlist.',
    acceptanceCriteria: ['Image carousel/gallery', 'Size/color selectors', 'Add to cart button', 'Wishlist toggle heart', 'Price display with discount'],
    resources: [{ title: 'Tailwind Components', url: 'https://tailwindui.com/components', type: 'documentation' }, { title: 'CSS Transforms', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform', type: 'documentation' }],
    hints: ['useState for selected size/color', 'Array.map for image thumbnails', 'Conditional classes for active state'],
  },
  {
    day: 10, track: 'Web Development', title: 'Infinite Scroll Feed', difficulty: 'Hard',
    description: 'Create a social media-style feed that loads more content as you scroll.',
    acceptanceCriteria: ['Intersection Observer API', 'Skeleton loading states', 'Smooth scroll behavior', 'Error retry mechanism', 'Virtual scrolling for performance'],
    resources: [{ title: 'Intersection Observer', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API', type: 'documentation' }, { title: 'React Query', url: 'https://tanstack.com/query/latest', type: 'documentation' }],
    hints: ['Use useRef for sentinel element', 'AbortController for fetch cleanup', 'Debounce scroll handler'],
  },
  {
    day: 11, track: 'Web Development', title: 'Dark Mode Toggle', difficulty: 'Easy',
    description: 'Implement a system-preference-aware dark mode toggle with CSS variables.',
    acceptanceCriteria: ['Toggle switch UI', 'CSS custom properties', 'localStorage persistence', 'System preference detection', 'Smooth theme transition'],
    resources: [{ title: 'prefers-color-scheme', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme', type: 'documentation' }, { title: 'CSS Variables', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/--*', type: 'documentation' }],
    hints: ['document.documentElement.classList.toggle', 'matchMedia("(prefers-color-scheme: dark)")', 'Transition on background-color'],
  },
  {
    day: 12, track: 'Web Development', title: 'Build a Responsive Pricing Page', difficulty: 'Medium',
    description: 'Create a fully responsive pricing page for a SaaS product. Include three tiers (Free, Pro, Enterprise) with feature comparisons, toggle for monthly/yearly billing, and a prominent CTA button.',
    acceptanceCriteria: ['Three pricing tiers with clear feature lists', 'Monthly/Yearly toggle with price animation', 'Fully responsive on mobile, tablet, and desktop', 'Hover effects on cards and buttons', 'Accessible color contrast and focus states'],
    resources: [{ title: 'CSS Grid Layout Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/', type: 'article' }, { title: 'Accessible Pricing Tables', url: 'https://www.smashingmagazine.com/accessible-pricing-tables/', type: 'article' }, { title: 'Tailwind CSS Transitions', url: 'https://tailwindcss.com/docs/transition-property', type: 'documentation' }],
    hints: ['Use CSS Grid for the pricing card layout', 'Store pricing data in an array and map over it', 'Use useState for the billing toggle'],
  },
  {
    day: 13, track: 'Web Development', title: 'Contact Form with Validation', difficulty: 'Medium',
    description: 'Build a contact form with real-time validation, error messages, and success state.',
    acceptanceCriteria: ['Name, email, message fields', 'Real-time validation', 'Error message display', 'Success confirmation', 'Loading state on submit'],
    resources: [{ title: 'HTML5 Validation', url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation', type: 'documentation' }, { title: 'React Hook Form', url: 'https://react-hook-form.com/', type: 'documentation' }],
    hints: ['Pattern attribute for regex', 'onBlur validation trigger', 'Animate error messages with Framer Motion'],
  },
  {
    day: 14, track: 'Web Development', title: 'Real-time Chat Interface', difficulty: 'Hard',
    description: 'Create a chat UI with message bubbles, timestamps, typing indicators, and auto-scroll.',
    acceptanceCriteria: ['Message bubble components', 'Auto-scroll to latest', 'Typing indicator animation', 'Message timestamps', 'Send message input'],
    resources: [{ title: 'ScrollIntoView API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView', type: 'documentation' }, { title: 'CSS Animations', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations', type: 'documentation' }],
    hints: ['useRef for messages container', 'setInterval for typing dots', 'Flexbox column-reverse for chat layout'],
  },
  // Days 15-60 fallback
  ...Array.from({ length: 46 }, (_, i) => ({
    day: i + 15,
    track: 'Web Development' as Track,
    title: `Day ${i + 15} Challenge`,
    difficulty: (i % 3 === 0 ? 'Hard' : i % 3 === 1 ? 'Medium' : 'Easy') as 'Easy' | 'Medium' | 'Hard',
    description: `Advanced web development challenge for Day ${i + 15}. Push your skills further with this hands-on project.`,
    acceptanceCriteria: ['Complete the core functionality', 'Make it responsive', 'Add smooth interactions', 'Write clean, documented code'],
    resources: [{ title: 'MDN Web Docs', url: 'https://developer.mozilla.org', type: 'documentation' as const }],
    hints: ['Break the problem into smaller parts', 'Test on mobile viewport', 'Ask in community if stuck'],
  })),
];

export const getTaskByDay = (day: number): DayTask => {
  return allTasksData.find(t => t.day === day) || allTasksData[0];
};

export const dayTasks: Record<Track, DayTask[]> = {
  'Web Development': allTasksData,
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
  { rank: 9, studentId: 's-167', name: 'Aditya Menon', college: 'Manipal', streak: 2, currentDay: 3, avatar: 'AM' },
  { rank: 10, studentId: 's-198', name: 'Divya Krishnan', college: 'Anna University', streak: 1, currentDay: 2, avatar: 'DK' },
  { rank: 11, studentId: 's-221', name: 'Rohan Das', college: 'Jadavpur', streak: 1, currentDay: 1, avatar: 'RD' },
  { rank: 12, studentId: 's-245', name: 'Neha Joshi', college: 'Pune University', streak: 0, currentDay: 0, avatar: 'NJ' },
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