"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export function GlitchText({
  children,
  className,
  as: Comp = "h1",
}: GlitchTextProps) {
  return (
    <Comp
      className={cn("glitch-text relative inline-block", className)}
      data-text={children}
    >
      {children}
    </Comp>
  );
}
