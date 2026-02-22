"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { teamData } from "@/constants/data";

const VALUES = [
  {
    title: "Brotherhood",
    description: "We win and lose as one. Trust and respect are non-negotiable.",
    icon: Users,
  },
  {
    title: "Discipline",
    description: "Consistent practice, clear communication, and a growth mindset.",
    icon: Target,
  },
  {
    title: "Growth",
    description: "Every match is a lesson. We aim to get better every day.",
    icon: TrendingUp,
  },
  {
    title: "Fun",
    description: "We love the game. The grind is real but the vibes are too.",
    icon: Gamepad2,
  },
];

const MILESTONES = [
  { year: "2023", text: "Inner Peace founded in Bangladesh." },
  { year: "2024", text: "1st Place — Community Valorant Cup." },
  { year: "2024", text: "Top 8 — Regional CS2 Open." },
  { year: "2025", text: "Expanding roster and competing in more events." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-orbitron text-4xl sm:text-5xl font-bold mb-8"
        >
          ABOUT INNER PEACE
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-orbitron text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-text-muted max-w-3xl">
            Inner Peace was founded in {teamData.founded} with a simple belief: in the chaos of competition,
            true peace comes from mastery, teamwork, and a shared desire to be the best. Based in {teamData.region},
            we started as a group of friends who wanted to take our play to the next level. Today we compete
            in Valorant and CS2 at a regional level while building a community where every player can find
            their inner peace.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-orbitron text-2xl font-bold mb-4">Mission</h2>
          <p className="text-xl text-primary font-medium max-w-3xl border-l-4 border-primary pl-6">
            We don&apos;t just play games — we build a community where every player finds their inner peace.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-orbitron text-2xl font-bold mb-8">Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Card key={v.title} className="border-primary/20 hover:shadow-glow transition-all">
                <CardContent className="p-6">
                  <v.icon className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-orbitron font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-text-muted">{v.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-orbitron text-2xl font-bold mb-8">Timeline</h2>
          <div className="space-y-4">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year + m.text}
                className="flex gap-6 items-start border-l-2 border-primary/30 pl-6 py-2"
              >
                <span className="font-orbitron font-bold text-primary w-16 flex-shrink-0">{m.year}</span>
                <p className="text-text-muted">{m.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="join"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-orbitron text-2xl font-bold mb-4">Join Us</h2>
          <p className="text-text-muted mb-6 max-w-2xl">
            We&apos;re always looking for dedicated players who share our values. Open roles and applications
            are managed through our Discord. Join the server and drop a message in #recruitment.
          </p>
          <a href={teamData.discord} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="shadow-glow">
              Apply via Discord
            </Button>
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-orbitron text-2xl font-bold mb-4">Contact</h2>
          <p className="text-text-muted">
            Email:{" "}
            <a href={`mailto:${teamData.email}`} className="text-primary hover:underline">
              {teamData.email}
            </a>
          </p>
        </motion.section>
      </div>
    </div>
  );
}
