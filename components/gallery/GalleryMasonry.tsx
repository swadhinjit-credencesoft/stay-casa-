"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import type { GalleryItem } from "@/lib/mockData";

interface GalleryMasonryProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

export default function GalleryMasonry({ items, onOpen }: GalleryMasonryProps) {
  return (
    <section className="py-12 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500"
              onClick={() => onOpen(i)}
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
  );
}
