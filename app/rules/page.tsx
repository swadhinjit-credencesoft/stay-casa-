import type { Metadata } from "next";
import { rulesMetadata } from "@/lib/data/rules";
import RulesHero from "@/components/rules/RulesHero";
import RulesGrid from "@/components/rules/RulesGrid";

export const metadata: Metadata = rulesMetadata;

export default function RulesPage() {
  return (
    <>
      <RulesHero />
      <RulesGrid />
    </>
  );
}
