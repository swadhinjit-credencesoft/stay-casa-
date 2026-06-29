import type { Metadata } from "next";
import { getHotelSchema } from "@/lib/schema";
import { CinematicHero } from "@/components/HomePageClient";
import PhilosophyStrip from "@/components/home/PhilosophyStrip";
import AboutUs from "@/components/home/AboutUs";
import FeaturedSuites from "@/components/home/FeaturedSuites";
import GuestExperience from "@/components/home/GuestExperience";
import LocationSection from "@/components/home/LocationSection";
import NearbyAttractionsSection from "@/components/home/NearbyAttractions";
import EventsSection from "@/components/home/EventsSection";
import AwardsRow from "@/components/home/AwardsRow";
import Testimonials from "@/components/home/Testimonials";
import HomeBookingCta from "@/components/home/HomeBookingCta";

export const metadata: Metadata = {
  title: "Hotel Stay Casa Inn – Comfortable Stay in Jaipur",
  description:
    "Experience comfort, warm hospitality, and modern amenities at Stay Casa Inn Jaipur. Well-furnished rooms, free Wi-Fi, and a prime location in Sodala.",
};

export default function HomePage() {
  const schema = getHotelSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CinematicHero />
      <PhilosophyStrip />
      <AboutUs />
      <FeaturedSuites />
      <GuestExperience />
      <LocationSection />
      <NearbyAttractionsSection />
      <EventsSection />
      <AwardsRow />
      <Testimonials />
      <HomeBookingCta />
    </>
  );
}
