import type { Metadata } from "next";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import EventsHero from "@/components/events/EventsHero";
import EventsIntro from "@/components/events/EventsIntro";
import EventTypes from "@/components/events/EventTypes";
import WhyChooseUs from "@/components/events/WhyChooseUs";
import CustomAssistance from "@/components/events/CustomAssistance";
import EventsCta from "@/components/events/EventsCta";

export const metadata: Metadata = {
  title: "Events at Stay Casa Inn | Celebrations & Gatherings in Jaipur",
  description: "Plan your next event at Stay Casa Inn in Jaipur — corporate meetings, birthdays, anniversaries, family gatherings, and social celebrations.",
  alternates: {
    canonical: "https://hotelstaycasainn.com/events",
  },
  openGraph: {
    title: "Events at Stay Casa Inn | Celebrations & Gatherings in Jaipur",
    description: "Plan your next event at Stay Casa Inn in Jaipur — corporate meetings, birthdays, and celebrations.",
    url: "https://hotelstaycasainn.com/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Events", url: "/events" }]} />
      <EventsHero />
      <EventsIntro />
      <EventTypes />
      <WhyChooseUs />
      <CustomAssistance />
      <EventsCta />
    </>
  );
}
