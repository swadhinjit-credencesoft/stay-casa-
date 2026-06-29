"use client";

import ExpHero from "@/components/experiences/ExpHero";
import ExpComfortStay from "@/components/experiences/ExpComfortStay";
import ExpLocation from "@/components/experiences/ExpLocation";
import ExpAmenities from "@/components/experiences/ExpAmenities";
import ExpWhyChooseUs from "@/components/experiences/ExpWhyChooseUs";
import ExpTestimonials from "@/components/experiences/ExpTestimonials";
import ExpPerfectTraveler from "@/components/experiences/ExpPerfectTraveler";
import ExpCta from "@/components/experiences/ExpCta";

export default function ExperiencesPage() {
  return (
    <>
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
