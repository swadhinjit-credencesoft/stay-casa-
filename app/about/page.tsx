import type { Metadata } from "next";
import { aboutMetadata } from "@/lib/data/about";
import AboutHero from "@/components/about/AboutHero";
import AboutWelcome from "@/components/about/AboutWelcome";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutLocation from "@/components/about/AboutLocation";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWelcome />
      <AboutMissionVision />
      <AboutHighlights />
      <AboutLocation />
      <AboutCta />
    </>
  );
}
