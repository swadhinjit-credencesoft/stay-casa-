import type { Metadata } from "next";
import { privacyMetadata } from "@/lib/data/privacy";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
    </>
  );
}
