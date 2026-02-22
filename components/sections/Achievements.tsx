"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { teamData } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function getPlacementGlow(title: string) {
  if (title.toLowerCase().includes("1st")) return "shadow-[0_0_25px_rgba(234,179,8,0.4)] border-amber-500/50";
  if (title.toLowerCase().includes("2nd")) return "shadow-[0_0_20px_rgba(192,192,192,0.4)] border-slate-400/50";
  if (title.toLowerCase().includes("3rd") || title.toLowerCase().includes("top")) return "shadow-[0_0_20px_rgba(205,127,50,0.4)] border-amber-700/50";
  return "border-primary/30";
}

export function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-2"
        >
          ACHIEVEMENTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-12"
        >
          Our Trophy Case
        </motion.h2>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamData.achievements.map((a, i) => (
            <motion.div
              key={`achievement-${a.event}-${a.year}-${i}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-64 snap-center"
            >
              <Card
                className={cn(
                  "h-full border-2 transition-all duration-300 hover:scale-[1.02]",
                  getPlacementGlow(a.title)
                )}
              >
                <CardContent className="p-6">
                  <Trophy className="h-10 w-10 text-amber-500 mb-3" />
                  <p className="font-orbitron text-xl font-bold text-primary">{a.title}</p>
                  <p className="text-sm text-text-primary mt-1">{a.event}</p>
                  <div className="flex justify-between mt-3 text-xs text-text-muted">
                    <span>{a.game}</span>
                    <span>{a.year}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
