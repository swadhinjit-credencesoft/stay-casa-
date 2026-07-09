import type { Metadata } from "next";
import StoreProvider from "@/lib/store/provider";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import TouristHero from "@/components/tourist/TouristHero";
import QuickStats from "@/components/tourist/QuickStats";
import AttractionCardGrid from "@/components/tourist/AttractionCardGrid";
import Itineraries from "@/components/tourist/Itineraries";
import BookingCTA from "@/components/tourist/BookingCTA";

export const metadata: Metadata = {
  title: "Nearby Tourist Attractions | Stay Casa Inn, Jaipur",
  description: "Explore top tourist attractions near Stay Casa Inn in Sodala, Jaipur — Amber Palace, Hawa Mahal, City Palace, Jantar Mantar, and more.",
  alternates: {
    canonical: "https://hotelstaycasainn.com/tourist",
  },
  openGraph: {
    title: "Nearby Tourist Attractions | Stay Casa Inn, Jaipur",
    description: "Explore top tourist attractions near Stay Casa Inn in Sodala, Jaipur.",
    url: "https://hotelstaycasainn.com/tourist",
  },
};

export default function TouristPage() {
  return (
    <StoreProvider>
      <BreadcrumbsJsonLd items={[{ name: "Tourist Attractions", url: "/tourist" }]} />
      <TouristHero />
      <QuickStats />
      <AttractionCardGrid />
      <Itineraries />
      <BookingCTA />
    </StoreProvider>
  );
}
