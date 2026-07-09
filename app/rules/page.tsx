import type { Metadata } from "next";
import { rulesMetadata } from "@/lib/data/rules";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import RulesHero from "@/components/rules/RulesHero";
import RulesGrid from "@/components/rules/RulesGrid";

export const metadata: Metadata = {
  ...rulesMetadata,
  alternates: {
    canonical: "https://hotelstaycasainn.com/rules",
  },
};

export default function RulesPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Rules & Regulations", url: "/rules" }]} />
      <RulesHero />
      <RulesGrid />
    </>
  );
}
