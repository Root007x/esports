"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 font-orbitron text-[10px] font-bold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary/20 text-primary",
        primary: "border-primary bg-primary/20 text-primary",
        secondary: "border-secondary bg-secondary/20 text-secondary",
        danger: "border-danger bg-danger/20 text-danger",
        success: "border-emerald-500 bg-emerald-500/20 text-emerald-400",
        IGL: "border-amber-500 bg-amber-500/20 text-amber-400",
        Duelist: "border-danger bg-danger/20 text-red-400",
        Sentinel: "border-blue-500 bg-blue-500/20 text-blue-400",
        Controller: "border-purple-500 bg-purple-500/20 text-purple-400",
        Initiator: "border-cyan-500 bg-cyan-500/20 text-cyan-400",
        AWPer: "border-amber-500 bg-amber-500/20 text-amber-400",
        Rifler: "border-text-muted bg-card text-text-muted",
        Support: "border-secondary bg-secondary/20 text-secondary",
        outline: "border-border text-text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
