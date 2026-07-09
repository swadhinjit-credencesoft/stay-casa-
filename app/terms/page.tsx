import type { Metadata } from "next";
import { termsMetadata } from "@/lib/data/terms";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import TermsHero from "@/components/terms/TermsHero";
import TermsContent from "@/components/terms/TermsContent";

export const metadata: Metadata = {
  ...termsMetadata,
  alternates: {
    canonical: "https://hotelstaycasainn.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Terms & Conditions", url: "/terms" }]} />
      <TermsHero />
      <TermsContent />
    </>
  );
}
