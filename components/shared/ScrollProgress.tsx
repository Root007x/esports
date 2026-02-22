"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const SCROLL_THROTTLE_MS = 50;

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);
  const lastRun = useRef(0);

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const now = Date.now();
      if (now - lastRun.current >= SCROLL_THROTTLE_MS) {
        lastRun.current = now;
        updateProgress();
      } else if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          rafId.current = null;
          updateProgress();
        });
      }
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [updateProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-0.5 overflow-hidden bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary shadow-glow transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
