"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { teamData } from "@/constants/data";
import { GlitchText } from "@/components/shared/GlitchText";

const SOCIAL_ICONS = [
  { label: "Twitter", href: teamData.twitter, icon: "𝕏" },
  { label: "Instagram", href: teamData.instagram, icon: "📷" },
  { label: "YouTube", href: teamData.youtube, icon: "▶" },
  { label: "Facebook", href: teamData.facebook, icon: "f" },
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const fullTagline = teamData.tagline;
  const [displayTagline, setDisplayTagline] = useState("");

  useEffect(() => {
    if (taglineIndex < fullTagline.length) {
      const t = setTimeout(
        () => {
          setDisplayTagline(fullTagline.slice(0, taglineIndex + 1));
          setTaglineIndex(taglineIndex + 1);
        },
        taglineIndex === 0 ? 800 : 50
      );
      return () => clearTimeout(t);
    }
  }, [taglineIndex, fullTagline]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Diagonal cut at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent z-10 pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 50%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--surface) 0%, transparent 100%)",
          clipPath: "polygon(0 80%, 100% 50%, 100% 0, 0 0)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-4"
        >
          ESTABLISHED {teamData.founded} • {teamData.region.toUpperCase()}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <GlitchText
            as="h1"
            className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent"
          >
            {teamData.name.toUpperCase()}
          </GlitchText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-sans text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 min-h-[2.5rem]"
        >
          {displayTagline}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Link href="/roster">
            <Button size="lg" className="shadow-glow-lg text-base">
              MEET THE ROSTER
            </Button>
          </Link>
          <a href={teamData.discord} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="text-base">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              JOIN OUR DISCORD
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center justify-center gap-6 text-text-muted"
        >
          {SOCIAL_ICONS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-primary transition-colors"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Game logos strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 opacity-60"
      >
        {teamData.games.slice(0, 2).map((g) => (
          <span
            key={g.name}
            className="font-orbitron text-xs uppercase tracking-widest"
            style={{ color: g.color }}
          >
            {g.name}
          </span>
        ))}
      </motion.div>

      {/* Recruiting badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute top-24 right-4 sm:right-8 flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs text-emerald-400"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Currently Recruiting
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
