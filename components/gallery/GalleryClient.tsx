"use client";

import { useState } from "react";
import { galleryItems } from "@/lib/mockData";
import { type GalleryCategory } from "@/lib/data/gallery";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilterTabs from "@/components/gallery/GalleryFilterTabs";
import GalleryMasonry from "@/components/gallery/GalleryMasonry";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : null));

  return (
    <>
      <GalleryHero />
      <GalleryFilterTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <GalleryMasonry items={filtered} onOpen={openLightbox} />
      <GalleryLightbox
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
