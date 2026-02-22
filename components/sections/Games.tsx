"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { teamData } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const rosterCountByGame: Record<string, number> = {};
teamData.roster.forEach((p) => {
  rosterCountByGame[p.game] = (rosterCountByGame[p.game] || 0) + 1;
});

export function Games() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="games" className="relative py-24 bg-surface overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-2"
        >
          OUR GAMES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-16"
        >
          We Compete. We Dominate.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamData.games.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="perspective-[1000px]"
            >
              <div
                className={cn(
                  "relative h-64 cursor-pointer preserve-3d",
                  flipped === i && "flipped"
                )}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setFlipped(flipped === i ? null : i)}
              >
                <Card
                  className={cn(
                    "absolute inset-0 border-2 backface-hidden transition-all duration-500 hover:shadow-glow-lg",
                    flipped === i && "opacity-0"
                  )}
                  style={{
                    backfaceVisibility: "hidden",
                    borderColor: flipped === i ? "transparent" : game.color,
                    transform: flipped === i ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <div
                      className="w-20 h-20 rounded-lg mb-4 flex items-center justify-center font-orbitron text-2xl font-bold"
                      style={{ backgroundColor: `${game.color}20`, color: game.color }}
                    >
                      {game.name.slice(0, 2)}
                    </div>
                    <h3 className="font-orbitron text-xl font-bold mb-2">{game.name}</h3>
                    <Badge variant={game.status === "Primary" ? "primary" : "secondary"} className="mb-2">
                      {game.status}
                    </Badge>
                    <p className="text-sm text-text-muted">{game.rank}</p>
                  </CardContent>
                </Card>
                <Card
                  className={cn(
                    "absolute inset-0 border-2 backface-hidden",
                    flipped !== i && "opacity-0"
                  )}
                  style={{
                    backfaceVisibility: "hidden",
                    borderColor: game.color,
                    transform: flipped === i ? "rotateY(0deg)" : "rotateY(-180deg)",
                    boxShadow: `0 0 30px ${game.color}40`,
                  }}
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-6">
                    <p className="font-orbitron text-sm text-text-muted mb-2">ACTIVE ROSTER</p>
                    <p className="text-4xl font-bold" style={{ color: game.color }}>
                      {rosterCountByGame[game.name] ?? 0}
                    </p>
                    <p className="text-xs text-text-muted mt-2">players</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
