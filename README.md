# Inner Peace Esports — Team Website

Production-grade esports team website for **Inner Peace**, a competitive Valorant & CS2 organization from Bangladesh.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript** (strict)
- **TailwindCSS** with custom design tokens
- **Framer Motion** for animations
- **Three.js / @react-three/fiber** for 3D hero background
- **Shadcn-style UI** (Button, Badge, Card, Avatar, Progress, Tooltip)
- **Lucide React** icons | **Geist** + **Orbitron** fonts
- **clsx** + **tailwind-merge**

## Design

- **Dark Dominance** — near-black (#050508), purple (#7C3AED) and cyan (#06B6D4) accents, neon glows, sharp geometry.
- Custom crosshair cursor (desktop), scroll progress bar, glitch text, scanline overlay, 3D card tilts on roster.

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` — Layout, homepage, `/roster`, `/matches`, `/games`, `/about`, `not-found`, `robots.ts`, `sitemap.ts`
- `components/ui/` — Button, Badge, Card, Avatar, Progress, Tooltip
- `components/sections/` — Navbar, Hero, Games, RosterPreview, Stats, Achievements, MatchesPreview, DiscordCta, Footer
- `components/three/` — ParticleField, GeometricBackground
- `components/shared/` — CustomCursor, ScrollProgress, BackToTop, PageTransition, GlitchText
- `constants/data.ts` — Team data (roster, matches, games, achievements, social links)
- `types/` — Shared TypeScript types + R3F JSX merge

## Data

Edit `constants/data.ts` to update:

- Team info, Discord, socials, email
- Roster (replace placeholder IGNs, avatars, stats)
- Matches, achievements
- `upcomingMatches` for countdown on `/matches`

Replace `discord.gg/YOURLINK` with your real Discord invite.

## Checklist

- [x] Crosshair cursor (desktop only)
- [x] Three.js particle background (lazy, no SSR)
- [x] Glitch text on hero
- [x] Roster/Match/Game filters
- [x] Countdown on upcoming matches
- [x] Scroll-triggered counter animations
- [x] Responsive layout
- [x] SEO: metadata, robots.txt, sitemap.xml

© 2025 Inner Peace Esports.
