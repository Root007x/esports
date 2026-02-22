"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { teamData } from "@/constants/data";
import type { GameFilter } from "@/types";
import { cn } from "@/lib/utils";

const filters: GameFilter[] = ["All", "Valorant", "CS2"];

export function MatchesPreview() {
  const [filter, setFilter] = useState<GameFilter>("All");
  const filtered = teamData.matches.filter(
    (m) => filter === "All" || m.game === filter
  );

  return (
    <section id="matches" className="relative py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-2"
        >
          MATCH HISTORY
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-8"
        >
          Battlefield Records
        </motion.h2>

        <div className="flex gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "px-4 py-2 rounded-md font-orbitron text-xs font-bold uppercase transition-colors",
                filter === f
                  ? "bg-primary text-white shadow-glow"
                  : "bg-card text-text-muted hover:text-white border border-border"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "flex flex-wrap items-center gap-4 rounded-lg border-l-4 py-3 px-4 bg-card/50",
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
              <span className="text-text-muted text-sm truncate max-w-[180px]">{match.tournament}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <Link href="/matches">
            <Button variant="secondary" size="lg">
              VIEW ALL MATCHES →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
