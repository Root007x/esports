"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { teamData } from "@/constants/data";
import type { GameFilter } from "@/types";
import { cn } from "@/lib/utils";

const ROLE_VARIANTS: Record<string, "IGL" | "Duelist" | "Sentinel" | "Controller" | "Initiator" | "AWPer" | "Rifler" | "Support" | "outline"> = {
  IGL: "IGL",
  Duelist: "Duelist",
  Sentinel: "Sentinel",
  Controller: "Controller",
  Initiator: "Initiator",
  AWPer: "AWPer",
  Rifler: "Rifler",
  Support: "Support",
};

export default function RosterPage() {
  const [gameFilter, setGameFilter] = useState<GameFilter>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return teamData.roster.filter((p) => {
      const matchGame = gameFilter === "All" || p.game === gameFilter;
      const matchSearch =
        !search ||
        p.username.toLowerCase().includes(search.toLowerCase()) ||
        p.realName.toLowerCase().includes(search.toLowerCase()) ||
        p.role.toLowerCase().includes(search.toLowerCase());
      return matchGame && matchSearch;
    });
  }, [gameFilter, search]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-6"
        >
          OUR ROSTER
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
            <input
              type="search"
              placeholder="Search by username or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md bg-card border border-border text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search roster"
            />
          </div>
          <div className="flex gap-2">
            {(["All", "Valorant", "CS2"] as GameFilter[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGameFilter(g)}
                className={cn(
                  "px-4 py-2 rounded-md font-orbitron text-xs font-bold uppercase transition-colors",
                  gameFilter === g
                    ? "bg-primary text-white shadow-glow"
                    : "bg-card text-text-muted hover:text-white border border-border"
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((member, i) => (
            <RosterCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">No players match your filters.</p>
        )}
      </div>
    </div>
  );
}

function RosterCard({
  member,
  index,
}: {
  member: (typeof teamData.roster)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const roleVariant = ROLE_VARIANTS[member.role] ?? "outline";
  const winRateNum = parseFloat(member.stats.winRate) || 0;
  const initials = member.username.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        className={cn(
          "overflow-hidden border-2 h-full transition-all hover:shadow-glow",
          member.game === "Valorant" && "border-primary/30",
          member.game === "CS2" && "border-amber-500/30"
        )}
      >
        <CardContent className="p-0">
          <div className="relative h-52 bg-card flex items-center justify-center">
            <div className="relative w-28 h-28 rounded-full ring-2 ring-primary/50 ring-offset-2 ring-offset-card overflow-hidden bg-card flex items-center justify-center">
              {!imgError ? (
                <Image
                  src={member.avatar}
                  alt={member.username}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                  unoptimized
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="font-orbitron text-2xl font-bold text-primary">{initials}</span>
              )}
            </div>
            {member.isCaptain && (
              <div className="absolute top-3 right-3 text-amber-400">
                <Crown className="h-6 w-6" aria-hidden />
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-orbitron text-xl font-bold">{member.username}</h3>
            <p className="text-sm text-text-muted">{member.realName}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant={roleVariant}>{member.role}</Badge>
              <Badge variant="outline">{member.game}</Badge>
              <span className="text-xs text-text-muted">{member.country} · {member.rank}</span>
            </div>
            <p className="text-xs text-text-muted mt-2">{member.bio}</p>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span>KD {member.stats.kd}</span>
                <span>HS% {member.stats.hs}</span>
                <span>WR {member.stats.winRate}</span>
              </div>
              <Progress value={winRateNum} className="h-1.5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
