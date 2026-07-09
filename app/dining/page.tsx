import type { Metadata } from "next";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import DiningClient from "@/components/dining/DiningClient";

export const metadata: Metadata = {
  title: "Dining & Restaurants | Hotel Stay Casa Inn, Jaipur",
  description:
    "Enjoy delicious meals at Hotel Stay Casa Inn, Jaipur. Explore our dining options, reserve a table, and savor authentic Rajasthani and multi-cuisine dishes.",
  alternates: {
    canonical: "https://hotelstaycasainn.com/dining",
  },
  openGraph: {
    title: "Dining & Restaurants | Hotel Stay Casa Inn, Jaipur",
    description:
      "Explore dining options at Hotel Stay Casa Inn. Authentic cuisine and warm hospitality in Jaipur.",
    url: "https://hotelstaycasainn.com/dining",
  },
};

export default function DiningPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Dining", url: "/dining" }]} />
      <DiningClient />
    </>
  );
}
