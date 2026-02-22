"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";
      setIsPointer(!!isClickable);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
        }
      `}</style>
      <motion.div
        className={cn(
          "fixed left-0 top-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center"
        )}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className={cn(
            "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ease-out",
            isPointer ? "border-secondary scale-150" : "border-primary scale-100"
          )}
        >
          <div className="w-0.5 h-0.5 bg-primary rounded-full" />
        </div>
        <div className="absolute w-6 h-px bg-primary/40 -translate-x-1/2" />
        <div className="absolute h-6 w-px bg-primary/40 -translate-y-1/2" />
      </motion.div>
    </>
  );
}
