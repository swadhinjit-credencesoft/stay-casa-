import type { Metadata } from "next";
import EventsHero from "@/components/events/EventsHero";
import EventsIntro from "@/components/events/EventsIntro";
import EventTypes from "@/components/events/EventTypes";
import WhyChooseUs from "@/components/events/WhyChooseUs";
import CustomAssistance from "@/components/events/CustomAssistance";
import EventsCta from "@/components/events/EventsCta";

export const metadata: Metadata = {
  title: "Events at Stay Casa Inn | Celebrations & Gatherings in Jaipur",
  description: "Plan your next event at Stay Casa Inn in Jaipur — corporate meetings, birthdays, anniversaries, family gatherings, and social celebrations.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsIntro />
      <EventTypes />
      <WhyChooseUs />
      <CustomAssistance />
      <EventsCta />
    </>
  );
}
