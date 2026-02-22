import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Inner Peace Esports",
  description: "Our story, mission, values, and how to join Inner Peace Esports.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
