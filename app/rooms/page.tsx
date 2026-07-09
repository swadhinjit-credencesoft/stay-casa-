import type { Metadata } from "next";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import RoomsClient from "@/components/rooms/RoomsClient";

export const metadata: Metadata = {
  title: "Rooms & Suites | Hotel Stay Casa Inn, Jaipur",
  description:
    "Explore our comfortable rooms and suites at Hotel Stay Casa Inn, Sodala, Jaipur. Deluxe Room, Super Deluxe Room, and Suite Room with modern amenities at affordable rates.",
  alternates: {
    canonical: "https://hotelstaycasainn.com/rooms",
  },
  openGraph: {
    title: "Rooms & Suites | Hotel Stay Casa Inn, Jaipur",
    description:
      "Choose from Deluxe, Super Deluxe, and Suite rooms at Hotel Stay Casa Inn Jaipur. Free Wi-Fi, AC, and more.",
    url: "https://hotelstaycasainn.com/rooms",
  },
};

export default function RoomsPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Rooms", url: "/rooms" }]} />
      <RoomsClient />
    </>
  );
}
