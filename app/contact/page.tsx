import type { Metadata } from "next";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactWhatsApp from "@/components/contact/ContactWhatsApp";
import ContactLocation from "@/components/contact/ContactLocation";

export const metadata: Metadata = {
  title: "Contact Us | Hotel Stay Casa Inn, Jaipur",
  description:
    "Get in touch with Hotel Stay Casa Inn in Sodala, Jaipur. Call +91 9773 30 21 54, email staycasainn@gmail.com, or visit us at 112, New Sanganer Rd, Sodala.",
  openGraph: {
    title: "Contact Us | Hotel Stay Casa Inn, Jaipur",
    description:
      "Reach out to Hotel Stay Casa Inn for bookings, inquiries, and concierge services. Available 24/7.",
    url: "https://hotelstaycasainn.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Contact", url: "/contact" }]} />
      <ContactHero />
      <ContactInfo />
      <ContactWhatsApp />
      <ContactLocation />
    </>
  );
}
