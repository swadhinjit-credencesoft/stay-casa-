import type { Metadata } from "next";
import { termsMetadata } from "@/lib/data/terms";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";

export const metadata: Metadata = termsMetadata;

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <TermsContent />
    </>
  );
}
