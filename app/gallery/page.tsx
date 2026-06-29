"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryItems } from "@/lib/mockData";
import { cn } from "@/lib/utils";

type Category = "All" | "suites" | "interior" | "exterior";

const categories: Category[] = ["All", "suites", "interior", "exterior"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
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
      {/* Hero */}
      <section className="relative bg-neutral-950 pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url(/jaipurbaground.avif)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">Visual Stories</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">The Gallery</h1>
          <p className="text-neutral-400 font-light mt-4 max-w-xl mx-auto">Curated visual memories of the Hotel Stay Casa Inn experience.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-neutral-100 sticky top-[72px] z-30 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
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

      {/* Masonry Grid */}
      <section className="py-12 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500"
                onClick={() => openLightbox(i)}
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-neutral-950/70 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-light">{item.title}</p>
                    <p className="text-neutral-400 text-[10px] uppercase tracking-widest mt-0.5 capitalize">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-neutral-950/95 z-[100] flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].url}
                alt={filtered[lightboxIndex].title}
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-light">{filtered[lightboxIndex].title}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mt-1 capitalize">{filtered[lightboxIndex].category}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-neutral-500 tracking-widest">
              {lightboxIndex + 1} / {filtered.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
