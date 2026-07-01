import type { Metadata } from "next";
import StoreProvider from "@/lib/store/provider";
import TouristHero from "@/components/tourist/TouristHero";
import QuickStats from "@/components/tourist/QuickStats";
import AttractionCardGrid from "@/components/tourist/AttractionCardGrid";
import Itineraries from "@/components/tourist/Itineraries";
import BookingCTA from "@/components/tourist/BookingCTA";

export const metadata: Metadata = {
  title: "Nearby Tourist Attractions | Stay Casa Inn",
  description: "Explore top tourist attractions near Stay Casa Inn in Shyam Nagar, Jaipur — Amber Palace, Hawa Mahal, City Palace, Jantar Mantar, and more.",
};

export default function TouristPage() {
  return (
    <StoreProvider>
      <TouristHero />
      <QuickStats />
      <AttractionCardGrid />
      <Itineraries />
      <BookingCTA />
    </StoreProvider>
  );
}
