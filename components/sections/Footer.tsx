"use client";

import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Youtube,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { teamData } from "@/constants/data";

const nav = [
  { href: "/", label: "Home" },
  { href: "/roster", label: "Roster" },
  { href: "/games", label: "Games" },
  { href: "/matches", label: "Matches" },
  { href: "/about", label: "About" },
];

const socials = [
  { href: teamData.twitter, label: "Twitter", icon: ExternalLink },
  { href: teamData.instagram, label: "Instagram", icon: Instagram },
  { href: teamData.youtube, label: "YouTube", icon: Youtube },
  { href: teamData.facebook, label: "Facebook", icon: Facebook },
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Top edge glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.6) 20%, rgba(6, 182, 212, 0.6) 80%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        {/* Main block: brand + Discord CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12 border-b border-border">
          <div>
            <Link
              href="/"
              className="font-orbitron text-2xl font-black tracking-[0.2em] text-white hover:text-primary transition-colors"
            >
              INNER PEACE
            </Link>
            <p className="mt-2 text-text-muted text-sm max-w-xs">
              {teamData.tagline}
            </p>
          </div>
          <a
            href={teamData.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg border-2 border-primary bg-primary/10 text-primary font-orbitron text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-200 w-fit"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Join Discord
          </a>
        </div>

        {/* Links + social + contact */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pt-10">
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div>
              <p className="font-orbitron text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4">
                Navigate
              </p>
              <ul className="space-y-2.5">
                {nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/90 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-orbitron text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4">
                Games
              </p>
              <ul className="space-y-2.5">
                {teamData.games.map((g) => (
                  <li key={g.name}>
                    <Link
                      href="/games"
                      className="text-sm text-white/90 hover:text-primary transition-colors"
                    >
                      {g.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="font-orbitron text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-4">
              Contact &amp; Follow
            </p>
            <a
              href={`mailto:${teamData.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-secondary transition-colors mb-4"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {teamData.email}
            </a>
            <div className="flex gap-3 mt-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-text-muted hover:border-primary/50 hover:text-primary hover:shadow-glow-sm transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Inner Peace Esports. All rights reserved.</p>
          <p className="font-mono">Built for champions</p>
        </div>
      </div>
    </footer>
  );
}
