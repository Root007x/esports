import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games | Inner Peace Esports",
  description: "Games we play: Valorant, CS2, and more. Inner Peace Esports.",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
