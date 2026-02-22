import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roster | Inner Peace Esports",
  description: "Meet the Inner Peace roster. Valorant and CS2 competitive players from Bangladesh.",
};

export default function RosterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
