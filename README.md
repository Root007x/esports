# Inner Peace Esports — Team Website

Production-grade esports team website for **Inner Peace**, a competitive Valorant & CS2 organization from Bangladesh.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)

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
npm install
npm run dev
# or with Turbopack (default)
npm run dev
```


Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                    # Next.js App Router
├── layout.tsx          # Root layout with fonts, metadata
├── page.tsx            # Homepage with all sections
├── globals.css         # Global styles, CSS variables
├── not-found.tsx       # 404 page
├── robots.ts           # SEO robots config
├── sitemap.ts          # SEO sitemap config
├── about/              # About page (story, values, timeline)
├── games/              # Games page (Valorant, CS2 rosters)
├── matches/            # Match history with filters
└── roster/             # Full team roster with search

components/
├── ui/                 # shadcn-style components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   ├── avatar.tsx
│   ├── progress.tsx
│   └── tooltip.tsx
├── sections/           # Page sections
│   ├── Navbar.tsx
│   ├── Hero.tsx / HeroSection.tsx
│   ├── Games.tsx
│   ├── RosterPreview.tsx
│   ├── Stats.tsx
│   ├── Achievements.tsx
│   ├── MatchesPreview.tsx
│   ├── DiscordCta.tsx
│   └── Footer.tsx
├── three/              # 3D WebGL components
│   ├── ParticleField.tsx
│   └── GeometricBackground.tsx
└── shared/             # Shared utilities
    ├── CustomCursor.tsx
    ├── ScrollProgress.tsx
    ├── BackToTop.tsx
    ├── GlitchText.tsx
    └── PageTransition.tsx

constants/
└── data.ts             # All team data (roster, matches, etc.)

types/
└── index.ts            # TypeScript interfaces

lib/
└── utils.ts            # Utility functions (cn helper)
```


## Customization

### Update Team Data

Edit `constants/data.ts` to customize:

| Section | Data to Update |
|---------|---------------|
| **Team Info** | Name, tagline, founded year, region, email |
| **Social Links** | Discord, Twitter/X, Instagram, YouTube, Facebook |
| **Roster** | Player usernames, real names, roles, ranks, stats, avatars |
| **Matches** | Match history (opponent, score, result, map, tournament) |
| **Achievements** | Tournament placements with titles |
| **Upcoming** | `upcomingMatches` for countdown timers |

> ⚠️ **Important:** Replace `discord.gg/YOURLINK` with your actual Discord invite link.

### Design Tokens

Colors and styles can be customized in:
- `tailwind.config.ts` — Colors, fonts, shadows, animations
- `app/globals.css` — CSS variables, global styles


## Features

| Feature | Description |
|---------|-------------|
| 🎯 **Custom Cursor** | Crosshair-style cursor with hover states (desktop) |
| ✨ **3D Background** | Three.js particle field with connecting lines |
| 📝 **Glitch Text** | RGB split effect on hero title hover |
| 🔍 **Filters** | Game filters on roster, matches, and games pages |
| ⏱️ **Countdown** | Live countdown to upcoming matches |
| 📊 **Animated Stats** | Scroll-triggered number counters |
| 📱 **Responsive** | Mobile-first design with breakpoints |
| 🔍 **SEO Ready** | Meta tags, OpenGraph, robots.txt, sitemap.xml |
| ♿ **Accessible** | Skip-to-content, ARIA labels, keyboard nav |
| ⚡ **Performance** | Turbopack, lazy loading, RAF throttling |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Self-Hosted
```bash
npm run build
npm start
```

## License

© 2026 Inner Peace Esports. All rights reserved.

Built with ❤️ in Bangladesh.
