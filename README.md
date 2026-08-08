# ABTalks Redesign - 60-Day Coding Challenge

A mobile-first redesign of ABTalks' 60-day coding challenge platform for Indian college students.

## Live Demo

https://abtalks-redesign-theta.vercel.app/

## Screens Built

| Route | Screen | Description |
|-------|--------|-------------|
| `/` | Landing Page | Trust, motivation, track selection, social proof |
| `/dashboard` | Student Dashboard | Streak, progress, calendar, leaderboard, achievements |
| `/day/12` | Challenge Day | Task details, resources, hints, submission form |

## Thoughtful Ideas

- **Focus Mode** — Distraction-free builder view with just the task and submission form
- **Night Mode + Auto Detection** — Automatically suggests dark mode for late-night builders (9 PM – 6 AM)
- **Recruiter Preview** — Toggle to see how hiring managers view your public profile
- **Confetti Celebration** — Reward animation on successful daily submission
- **Next-Day Preview** — Teaser card showing tomorrow's task to build anticipation

## Edge Cases Handled

- First day with zero streak → "Start your streak today!" message
- Missed day → Recovery banner with gentle catch-up prompt
- Already submitted → Completed state with view links
- Empty profile → Prompts to complete (mocked)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Canvas Confetti

## Data

All data is mocked via static JSON/TypeScript files as per hackathon requirements. No real backend or authentication.

## Route Map

/
/dashboard
/day/12

## Getting Started

```bash
npm install
npm run dev