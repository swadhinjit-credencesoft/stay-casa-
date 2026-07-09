import type { Metadata } from "next";
import BreadcrumbsJsonLd from "@/components/seo/BreadcrumbsJsonLd";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Photo Gallery | Hotel Stay Casa Inn, Jaipur",
  description:
    "Browse photos of Hotel Stay Casa Inn in Sodala, Jaipur — rooms, suites, interiors, exterior views, dining areas, and more.",
  alternates: {
    canonical: "https://hotelstaycasainn.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Hotel Stay Casa Inn, Jaipur",
    description:
      "Visual tour of Hotel Stay Casa Inn — rooms, suites, and facilities in Jaipur.",
    url: "https://hotelstaycasainn.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbsJsonLd items={[{ name: "Gallery", url: "/gallery" }]} />
      <GalleryClient />
    </>
  );
}
