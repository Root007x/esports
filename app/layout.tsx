import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { BackToTop } from "@/components/shared/BackToTop";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { TooltipProvider } from "@/components/ui/tooltip";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Inner Peace Esports | Valorant & CS2 Competitive Team",
  description:
    "Inner Peace — Chaos Is Our Canvas. Victory Is Our Peace. Competitive esports organization from Bangladesh. Valorant & CS2.",
  openGraph: {
    title: "Inner Peace Esports",
    description: "Chaos Is Our Canvas. Victory Is Our Peace. Competitive esports from Bangladesh.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${orbitron.variable} font-sans antialiased min-h-screen`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <TooltipProvider delayDuration={300} skipDelayDuration={0}>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </TooltipProvider>
      </body>
    </html>
  );
}
