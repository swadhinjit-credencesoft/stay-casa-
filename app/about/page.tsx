import type { Metadata } from "next";
import { aboutMetadata } from "@/lib/data/about";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import AboutHero from "@/components/about/AboutHero";
import AboutWelcome from "@/components/about/AboutWelcome";
import AboutMissionVision from "@/components/about/AboutMissionVision";
import AboutHighlights from "@/components/about/AboutHighlights";
import AboutLocation from "@/components/about/AboutLocation";
import AboutCta from "@/components/about/AboutCta";

export const metadata: Metadata = {
  ...aboutMetadata,
  alternates: {
    canonical: "https://hotelstaycasainn.com/about",
  },
  openGraph: {
    title: aboutMetadata.title ?? undefined,
    description: aboutMetadata.description ?? undefined,
    url: "https://hotelstaycasainn.com/about",
    images: ["/DSC_3833-HDR.jpg.avif"],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "About", url: "/about" }]} />
      <AboutHero />
      <AboutWelcome />
      <AboutMissionVision />
      <AboutHighlights />
      <AboutLocation />
      <AboutCta />
    </>
  );
}
