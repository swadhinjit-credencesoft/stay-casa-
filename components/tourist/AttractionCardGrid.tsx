"use client";

import Link from "next/link";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useAppSelector } from "@/lib/store/hooks";
import { selectAttractions } from "@/lib/store/slices/touristSlice";
import { attractionsSectionHeading, touristCardLabels } from "@/lib/tourist-data";

export default function AttractionCardGrid() {
  const attractions = useAppSelector(selectAttractions);

  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionHeading
            tag={attractionsSectionHeading.tag}
            title={attractionsSectionHeading.title}
            subtitle={attractionsSectionHeading.subtitle}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((place, i) => (
            <ScrollReveal key={place.slug} delay={i * 0.05}>
              <Link href={`/tourist/${place.slug}`} className="group block h-full">
                <div className="bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-soft-premium transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-neutral-100">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {place.rating}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-neutral-900/70 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] text-white font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {place.distance}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-neutral-900 group-hover:text-red-600 transition-colors">{place.name}</h3>
                      <span className="text-[10px] text-neutral-400">{place.reviews} {touristCardLabels.reviews}</span>
                    </div>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed mb-4 flex-1">
                      {place.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                      <span className="text-[10px] text-red-500 font-semibold tracking-wider uppercase flex items-center gap-1">
                        <Clock className="w-3 h-3" /> ~{place.duration} {touristCardLabels.drive}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-red-500 font-semibold tracking-wider uppercase group-hover:gap-2 transition-all">
                        {touristCardLabels.viewDetails} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
