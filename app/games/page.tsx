"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RosterMember } from "@/types";

function GamePlayerCard({
  player,
  borderClass,
}: {
  player: RosterMember;
  borderClass: string;
}) {
  const [imgError, setImgError] = useState(false);
  const initials = player.username.slice(0, 2).toUpperCase();
  return (
    <Link href="/roster">
      <Card className={cn("hover:shadow-glow transition-all cursor-pointer", borderClass)}>
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-card overflow-hidden flex-shrink-0 flex items-center justify-center">
            {!imgError ? (
              <Image
                src={player.avatar}
                alt={player.username}
                width={48}
                height={48}
                className="object-cover w-full h-full"
                unoptimized
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="font-orbitron text-sm font-bold text-primary">{initials}</span>
            )}
          </div>
          <div>
            <p className="font-orbitron font-bold">{player.username}</p>
            <p className="text-xs text-text-muted">{player.role} · {player.rank}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function GamesPage() {
  const valorantRoster = teamData.roster.filter((p) => p.game === "Valorant");
  const cs2Roster = teamData.roster.filter((p) => p.game === "CS2");
  const valorantMaps = [...new Set(teamData.matches.filter((m) => m.game === "Valorant").map((m) => m.map))];
  const cs2Maps = [...new Set(teamData.matches.filter((m) => m.game === "CS2").map((m) => m.map))];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-12"
        >
          GAMES WE PLAY
        </motion.h1>

        {/* Valorant */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center font-orbitron text-lg font-bold"
              style={{ backgroundColor: "#FF465520", color: "#FF4655" }}
            >
              V
            </div>
            <div>
              <h2 className="font-orbitron text-2xl font-bold">Valorant</h2>
              <Badge variant="primary">Primary</Badge>
            </div>
          </div>
          <p className="text-text-muted mb-4">
            Rank: Diamond+ · Active roster: {valorantRoster.length} players
          </p>
          <p className="text-sm text-text-muted mb-4">
            Recent maps: {valorantMaps.length ? valorantMaps.join(", ") : "—"}
          </p>
          <p className="text-sm text-text-muted mb-6">
            Agents played:{" "}
            {[...new Set(valorantRoster.flatMap((p) => p.agents || []))].join(", ") || "—"}
          </p>
          <h3 className="font-orbitron text-lg font-bold mb-4">Roster</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valorantRoster.map((p) => (
              <GamePlayerCard key={p.id} player={p} borderClass="border-primary/30" />
            ))}
          </div>
        </motion.section>

        {/* CS2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center font-orbitron text-lg font-bold"
              style={{ backgroundColor: "#F0A50020", color: "#F0A500" }}
            >
              CS2
            </div>
            <div>
              <h2 className="font-orbitron text-2xl font-bold">CS2</h2>
              <Badge variant="primary">Primary</Badge>
            </div>
          </div>
          <p className="text-text-muted mb-4">
            Faceit Level 8+ · Active roster: {cs2Roster.length} players
          </p>
          <p className="text-sm text-text-muted mb-6">
            Recent maps: {cs2Maps.length ? cs2Maps.join(", ") : "—"}
          </p>
          <h3 className="font-orbitron text-lg font-bold mb-4">Roster</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cs2Roster.map((p) => (
              <GamePlayerCard key={p.id} player={p} borderClass="border-amber-500/30" />
            ))}
          </div>
        </motion.section>

        {/* Other */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-lg flex items-center justify-center font-orbitron text-lg font-bold bg-indigo-500/20 text-indigo-400"
            >
              +
            </div>
            <div>
              <h2 className="font-orbitron text-2xl font-bold">Other Titles</h2>
              <Badge variant="secondary">Casual</Badge>
            </div>
          </div>
          <p className="text-text-muted">We compete in other titles on a casual basis.</p>
        </motion.section>
      </div>
    </div>
  );
}
