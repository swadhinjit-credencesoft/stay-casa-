"use client";
import { cn } from "@/lib/utils";
import { galleryCategories, type GalleryCategory } from "@/lib/data/gallery";

interface GalleryFilterTabsProps {
  activeCategory: GalleryCategory;
  setActiveCategory: (cat: GalleryCategory) => void;
}

export default function GalleryFilterTabs({ activeCategory, setActiveCategory }: GalleryFilterTabsProps) {
  return (
    <section className="bg-white border-b border-neutral-100 sticky top-[72px] z-30 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border transition-all duration-200 capitalize",
              activeCategory === cat
                ? "bg-red-600 border-red-600 text-white"
                : "border-neutral-200 text-neutral-500 hover:border-red-400 hover:text-red-600"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
