"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { teamData } from "@/constants/data";
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

function PlayerCard({ member, index }: { member: (typeof teamData.roster)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 10);
    y.set((e.clientY - centerY) / 10);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const roleVariant = ROLE_VARIANTS[member.role] ?? "outline";
  const winRateNum = parseFloat(member.stats.winRate) || 0;
  const initials = member.username.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="hidden md:block"
    >
      <Card
        className={cn(
          "overflow-hidden border-2 h-full transition-shadow duration-300",
          member.game === "Valorant" && "border-primary/30",
          member.game === "CS2" && "border-amber-500/30"
        )}
      >
        <CardContent className="p-0">
          <div className="relative h-48 bg-card">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-24 h-24 rounded-full ring-2 ring-primary/50 ring-offset-2 ring-offset-card overflow-hidden bg-card flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src={member.avatar}
                    alt={member.username}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                    unoptimized
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="font-orbitron text-xl font-bold text-primary">{initials}</span>
                )}
              </div>
            </div>
            {member.isCaptain && (
              <div className="absolute top-3 right-3 text-amber-400">
                <Crown className="h-6 w-6" aria-hidden />
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-orbitron text-lg font-bold">{member.username}</h3>
            <p className="text-xs text-text-muted">{member.realName}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge variant={roleVariant}>{member.role}</Badge>
              <Badge variant="outline">{member.game}</Badge>
              <span className="text-xs text-text-muted">{member.country}</span>
              <span className="text-xs text-text-muted">{member.rank}</span>
            </div>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span>KD</span>
                <span className="text-primary">{member.stats.kd}</span>
              </div>
              <Progress value={winRateNum} className="h-1.5" />
              <div className="flex justify-between text-xs text-text-muted">
                <span>HS% {member.stats.hs}</span>
                <span>WR {member.stats.winRate}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/** Mobile card without 3D tilt */
function PlayerCardMobile({ member, index }: { member: (typeof teamData.roster)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const roleVariant = ROLE_VARIANTS[member.role] ?? "outline";
  const initials = member.username.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="md:hidden"
    >
      <Card className="overflow-hidden border-2">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-4">
            <div className="w-16 h-16 rounded-full ring-2 ring-primary/50 overflow-hidden bg-card flex-shrink-0 flex items-center justify-center">
              {!imgError ? (
                <Image
                  src={member.avatar}
                  alt={member.username}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  unoptimized
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="font-orbitron text-sm font-bold text-primary">{initials}</span>
              )}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-orbitron font-bold">{member.username}</h3>
                {member.isCaptain && <Crown className="h-4 w-4 text-amber-400" />}
              </div>
              <Badge variant={roleVariant} className="mt-1">{member.role}</Badge>
              <p className="text-xs text-text-muted mt-1">{member.stats.kd} KD · {member.stats.winRate} WR</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const FEATURED = 5;

export function RosterPreview() {
  const featured = teamData.roster.slice(0, FEATURED);

  return (
    <section id="roster" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-text-muted mb-2"
        >
          THE SQUAD
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-12"
        >
          Meet Inner Peace
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featured.map((member, i) => (
            <div key={member.id}>
              <PlayerCard member={member} index={i} />
              <PlayerCardMobile member={member} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/roster">
            <Button variant="secondary" size="lg">
              VIEW FULL ROSTER →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
