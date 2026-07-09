import type { Metadata } from "next";
import { offersMetadata } from "@/lib/data/offers";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import OffersHero from "@/components/offers/OffersHero";
import OffersGrid from "@/components/offers/OffersGrid";
import OffersCta from "@/components/offers/OffersCta";

export const metadata: Metadata = {
  ...offersMetadata,
  alternates: {
    canonical: "https://hotelstaycasainn.com/offers",
  },
  openGraph: {
    title: offersMetadata.title ?? undefined,
    description: offersMetadata.description ?? undefined,
    url: "https://hotelstaycasainn.com/offers",
  },
};

export default function OffersPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Offers", url: "/offers" }]} />
      <OffersHero />
      <OffersGrid />
      <OffersCta />
    </>
  );
}
