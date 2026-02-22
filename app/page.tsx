import { HeroSection } from "@/components/sections/HeroSection";
import { Games } from "@/components/sections/Games";
import { RosterPreview } from "@/components/sections/RosterPreview";
import { Stats } from "@/components/sections/Stats";
import { Achievements } from "@/components/sections/Achievements";
import { MatchesPreview } from "@/components/sections/MatchesPreview";
import { DiscordCta } from "@/components/sections/DiscordCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Games />
      <Stats />
      <RosterPreview />
      <Achievements />
      <MatchesPreview />
      <DiscordCta />
    </>
  );
}
