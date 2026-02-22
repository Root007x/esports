import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matches | Inner Peace Esports",
  description: "Match history and schedule for Inner Peace Esports.",
};

export default function MatchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
