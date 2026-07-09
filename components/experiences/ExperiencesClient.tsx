"use client";

import { getFAQSchema } from "@/lib/schema";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import ExpHero from "@/components/experiences/ExpHero";
import ExpComfortStay from "@/components/experiences/ExpComfortStay";
import ExpLocation from "@/components/experiences/ExpLocation";
import ExpAmenities from "@/components/experiences/ExpAmenities";
import ExpWhyChooseUs from "@/components/experiences/ExpWhyChooseUs";
import ExpTestimonials from "@/components/experiences/ExpTestimonials";
import ExpPerfectTraveler from "@/components/experiences/ExpPerfectTraveler";
import ExpCta from "@/components/experiences/ExpCta";

export default function ExperiencesClient() {
  const faqSchema = getFAQSchema([
    { question: "What are the check-in and check-out times at Hotel Stay Casa Inn?", answer: "Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability." },
    { question: "Does Hotel Stay Casa Inn offer free Wi-Fi?", answer: "Yes, complimentary high-speed Wi-Fi is available throughout the hotel for all guests." },
    { question: "Is parking available at Hotel Stay Casa Inn?", answer: "Yes, free parking is available for guests at the hotel premises." },
    { question: "What types of rooms are available?", answer: "We offer Deluxe Room, Super Deluxe Room, and Suite Room — all with air conditioning, flat-screen TV, and modern amenities." },
    { question: "How far is Hotel Stay Casa Inn from Jaipur Airport?", answer: "Hotel Stay Casa Inn is approximately 3.5 km from Jaipur International Airport." },
  ]);

  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Experiences", url: "/experiences" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ExpHero />
      <ExpComfortStay />
      <ExpLocation />
      <ExpAmenities />
      <ExpWhyChooseUs />
      <ExpTestimonials />
      <ExpPerfectTraveler />
      <ExpCta />
    </>
  );
}
