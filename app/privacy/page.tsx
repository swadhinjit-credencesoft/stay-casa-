import type { Metadata } from "next";
import { privacyMetadata } from "@/lib/data/privacy";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  ...privacyMetadata,
  alternates: {
    canonical: "https://hotelstaycasainn.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Privacy Policy", url: "/privacy" }]} />
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
