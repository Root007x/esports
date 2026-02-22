"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((m) => ({ default: m.ParticleField })),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <ParticleField />
      <div className="scanline-overlay" aria-hidden />
      <Hero />
    </section>
  );
}
