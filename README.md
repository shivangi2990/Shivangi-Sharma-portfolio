# Shivangi Sharma — Portfolio

A dark, editorial portfolio built with React. No external UI libraries — pure CSS Modules and custom animations.

## Tech Stack

- **React 18** — component architecture
- **CSS Modules** — scoped styles, no class conflicts
- **Canvas API** — particle animation in Hero
- **IntersectionObserver** — scroll-triggered animations
- **Google Fonts** — Bebas Neue + DM Mono + DM Sans

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .module.css      — sticky nav with active section tracking
│   ├── Hero.jsx / .module.css        — typewriter + particle canvas
│   ├── Skills.jsx / .module.css      — skill grid + marquee strip
│   ├── Experience.jsx / .module.css  — tab panel (desktop) + accordion (mobile)
│   ├── WhatIBuild.jsx / .module.css  — capability cards
│   ├── About.jsx / .module.css       — bio + stats
│   ├── Contact.jsx / .module.css     — links + copy email
│   └── Footer.jsx / .module.css
├── data/
│   └── portfolio.js   — all content in one place (easy to update)
├── hooks/
│   └── useInView.js   — IntersectionObserver hook for scroll animations
├── styles/
│   └── global.css     — CSS variables, resets, keyframes
└── App.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## Deploying to Netlify

1. Run `npm run build`
2. Drag the `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Done!

Or connect your GitHub repo and Netlify will auto-deploy on every push.

## Customising Content

All content lives in `src/data/portfolio.js` — update your skills, experience, links, and stats there without touching any component code.

To update social links, find the `contactLinks` array in `src/components/Contact.jsx`.
