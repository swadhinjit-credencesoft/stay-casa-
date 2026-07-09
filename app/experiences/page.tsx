import type { Metadata } from "next";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import ExperiencesClient from "@/components/experiences/ExperiencesClient";

export const metadata: Metadata = {
  title: "Guest Experiences | Hotel Stay Casa Inn, Jaipur",
  description:
    "Discover the Stay Casa Inn experience — comfortable rooms, warm hospitality, prime location in Sodala, Jaipur, and modern amenities for business and leisure travelers.",
  alternates: {
    canonical: "https://hotelstaycasainn.com/experiences",
  },
  openGraph: {
    title: "Guest Experiences | Hotel Stay Casa Inn, Jaipur",
    description:
      "Comfort, convenience, and warm Rajasthani hospitality at Stay Casa Inn Jaipur.",
    url: "https://hotelstaycasainn.com/experiences",
  },
};

export default function ExperiencesPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Experiences", url: "/experiences" }]} />
      <ExperiencesClient />
    </>
  );
}
