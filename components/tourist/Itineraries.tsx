"use client";

import { Clock, Compass } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useAppSelector } from "@/lib/store/hooks";
import { selectExperiences } from "@/lib/store/slices/touristSlice";
import { itinerariesSectionHeading } from "@/lib/tourist-data";

export default function Itineraries() {
  const experiences = useAppSelector(selectExperiences);

  return (
    <section className="py-24 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionHeading
            tag={itinerariesSectionHeading.tag}
            title={itinerariesSectionHeading.title}
            subtitle={itinerariesSectionHeading.subtitle}
            light
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full hover:border-red-900/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-light text-white mb-2">{exp.title}</h3>
                <p className="text-neutral-400 text-sm font-light mb-3">{exp.places}</p>
                <div className="flex items-center gap-2 text-[10px] text-red-400 font-semibold tracking-wider uppercase mb-2">
                  <Clock className="w-3 h-3" />
                  {exp.duration}
                </div>
                <p className="text-[11px] text-neutral-500 italic">💡 {exp.tip}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
