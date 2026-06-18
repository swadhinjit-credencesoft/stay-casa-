"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";
import { experiences } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const categories = ["All", "wellness", "adventure", "culture", "dining", "events"];

const categoryColors: Record<string, string> = {
  wellness: "bg-emerald-950/40 text-emerald-400 border-emerald-800/30",
  adventure: "bg-orange-950/40 text-orange-400 border-orange-800/30",
  culture: "bg-purple-950/40 text-purple-400 border-purple-800/30",
  dining: "bg-red-950/40 text-red-400 border-red-800/30",
  events: "bg-blue-950/40 text-blue-400 border-blue-800/30",
};

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = experiences.filter(
    (e) => activeCategory === "All" || e.category === activeCategory
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=2000" alt="Experiences" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 to-neutral-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">Beyond the Ordinary</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Curated Experiences</h1>
          <p className="text-neutral-400 font-light mt-5 max-w-2xl mx-auto text-lg">
            Helicopter picnics on volcanic peaks. Ancient sound healing. Marine archaeology dives. Every moment becomes a memory.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-neutral-100 sticky top-[72px] z-30 py-4 px-6 shadow-soft-premium">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border transition-all duration-200",
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

      {/* Experiences Grid */}
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group rounded-2xl overflow-hidden bg-white shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500"
                >
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                    <span className={cn(
                      "absolute top-4 left-4 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border backdrop-blur-sm",
                      categoryColors[exp.category]
                    )}>
                      {exp.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-light text-neutral-900 mb-2">{exp.title}</h3>
                    <p className="text-sm text-neutral-500 font-light mb-4 line-clamp-2">{exp.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <Clock className="w-3.5 h-3.5 text-red-400" />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.price && <span className="text-xs font-semibold text-red-600">{exp.price}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-400 font-light">
              No experiences found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-neutral-950 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Design Your Perfect Day</h2>
          <p className="text-neutral-400 font-light max-w-md mx-auto mb-8">Our concierge team will craft a bespoke itinerary tailored entirely to your desires.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300">
            Enquire with Concierge <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
