# SpeakGenie — Frontend Engineer Intern — Submission

## Summary
This repository contains my completed frontend assignment for SpeakGenie. It is a small, responsive React app implemented with TypeScript, focused on clarity, accessibility, and testability.

## Demo
- Local: see Setup below.

## Tech Stack
- Next.js + TypeScript
- Tailwind CSS (scoped styles) + responsive layout
- ESLint + Prettier for linting & formatting
- Git for version history

## What I implemented
- Responsive UI with mobile-first layout and accessible markup (semantic elements, ARIA where needed)
- Component decomposition (presentational and container components)
- Local state and simple data flow via React hooks
- Basic form validation and keyboard accessibility
- One unit/integration test covering a core interaction
- Build and run scripts (npm)

## Project structure (high level)
- src/
    - components/ — reusable UI components
    - app/ — route-level components
    - globals.css — global styles and tokens
    - layout.tsx, page.tsx
- public/ — static assets
- package.json — scripts & deps
- README.md — this file

## Setup & Run
Requirements: Node 18+ and npm 9+ (or equivalent yarn)

1. Install
    ``` npm install```

2. Run dev server
     ```npm run dev```
     - Open http://localhost:5173

3. Build production bundle
     ```npm run build```


## Assumptions
- No backend required; static/mock data is used for demonstration.
- Target modern browsers (last 2 versions). Polyfills can be added if broader support is needed.


