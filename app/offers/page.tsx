import type { Metadata } from "next";
import { offersMetadata } from "@/lib/data/offers";
import OffersHero from "@/components/offers/OffersHero";
import OffersGrid from "@/components/offers/OffersGrid";
import OffersCta from "@/components/offers/OffersCta";

export const metadata: Metadata = offersMetadata;

export default function OffersPage() {
  return (
    <>
      <OffersHero />
      <OffersGrid />
      <OffersCta />
    </>
  );
}
