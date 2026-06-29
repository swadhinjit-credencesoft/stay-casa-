"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactWhatsApp from "@/components/contact/ContactWhatsApp";
import ContactLocation from "@/components/contact/ContactLocation";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactWhatsApp />
      <ContactLocation />
    </>
  );
}
