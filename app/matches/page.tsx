"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { teamData } from "@/constants/data";
import { upcomingMatches } from "@/constants/data";
import type { GameFilter } from "@/types";
import { cn } from "@/lib/utils";

const filters: GameFilter[] = ["All", "Valorant", "CS2"];
const tabs = ["Recent", "Upcoming", "All Time"] as const;

function Countdown({ dateStr, timeStr }: { dateStr: string; timeStr: string }) {
  // Parse date + time (strip timezone suffix like "BDT" for valid parsing)
  const timePart = (timeStr || "20:00").replace(/\s*[A-Z]+\s*$/i, "").trim() || "20:00";
  const d = new Date(`${dateStr}T${timePart}`);
  const now = new Date();
  const diff = d.getTime() - now.getTime();
  if (Number.isNaN(d.getTime()) || diff <= 0) return <span className="text-text-muted">TBD</span>;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return (
    <span className="text-secondary font-mono">
      {days}d {hours}h
    </span>
  );
}

export default function MatchesPage() {
  const [filter, setFilter] = useState<GameFilter>("All");
  const [tab, setTab] = useState<"Recent" | "Upcoming" | "All Time">("Recent");

  const filtered = teamData.matches.filter(
    (m) => filter === "All" || m.game === filter
  );
  const wins = filtered.filter((m) => m.result === "WIN").length;
  const losses = filtered.filter((m) => m.result === "LOSS").length;
  const winRate = filtered.length ? Math.round((wins / filtered.length) * 100) : 0;
  const maps = [...new Set(filtered.map((m) => m.map))];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-8"
        >
          MATCH HISTORY
        </motion.h1>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-2xl font-bold text-primary">{filtered.length}</p>
            <p className="text-xs text-text-muted uppercase">Total Matches</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-2xl font-bold text-emerald-400">{wins}</p>
            <p className="text-xs text-text-muted uppercase">Wins</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-2xl font-bold text-danger">{losses}</p>
            <p className="text-xs text-text-muted uppercase">Losses</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-2xl font-bold text-secondary">{winRate}%</p>
            <p className="text-xs text-text-muted uppercase">Win Rate</p>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-sm text-text-muted mb-8"
        >
          Maps: {maps.join(", ")}
        </motion.p>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-2 rounded-md font-orbitron text-xs font-bold uppercase transition-colors",
                tab === t
                  ? "bg-primary text-white shadow-glow"
                  : "bg-card text-text-muted hover:text-white border border-border"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1.5 rounded font-orbitron text-[10px] font-bold uppercase",
                filter === f ? "bg-primary/30 text-primary border border-primary" : "text-text-muted border border-border hover:border-primary/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Upcoming */}
        {tab === "Upcoming" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3 mb-8"
          >
            <h2 className="font-orbitron text-xl font-bold mb-4">Upcoming</h2>
            {upcomingMatches.map((m) => (
              <div
                key={m.id}
                className="flex flex-wrap items-center gap-4 rounded-lg border border-secondary/30 bg-card/50 py-4 px-4"
              >
                <span className="font-mono text-xs text-text-muted">{m.game}</span>
                <span className="font-orbitron font-bold">{m.opponent}</span>
                <span className="text-text-muted text-sm">{m.tournament}</span>
                <span className="text-text-muted text-sm">{m.date} · {m.time}</span>
                <Countdown dateStr={m.date} timeStr={m.time} />
              </div>
            ))}
          </motion.div>
        )}

        {/* Match list */}
        {(tab === "Recent" || tab === "All Time") && (
          <div className="space-y-3">
            {filtered.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className={cn(
                  "flex flex-wrap items-center gap-4 rounded-lg border-l-4 py-4 px-4 bg-card/50",
                  match.result === "WIN"
                    ? "border-emerald-500 shadow-glow-green/20"
                    : "border-danger shadow-glow-red/20"
                )}
              >
                <span className="font-mono text-xs text-text-muted w-20">{match.game}</span>
                <span className="font-orbitron font-bold flex-1 min-w-[120px]">{match.opponent}</span>
                <span
                  className={cn(
                    "font-orbitron text-sm font-bold uppercase",
                    match.result === "WIN" ? "text-emerald-400" : "text-danger"
                  )}
                >
                  {match.result}
                </span>
                <span className="text-text-muted">{match.score}</span>
                <span className="text-text-muted text-sm">{match.map}</span>
                <span className="text-text-muted text-sm">{match.date}</span>
                <span className="text-text-muted text-sm truncate max-w-[200px]">{match.tournament}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
