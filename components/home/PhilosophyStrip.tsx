"use client";

import ScrollReveal from "@/components/motion/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { stats, philosophyData } from "@/lib/data/home";

export default function PhilosophyStrip() {
  return (
    <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8">
            {philosophyData.headingBefore}{" "}
            <em className="text-red-500 not-italic">{philosophyData.headingEmphasis}</em>
          </h2>
          <p className="text-neutral-400 text-lg font-light max-w-3xl mx-auto mb-16">
            {philosophyData.paragraphs[0]}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800/50 border border-neutral-800/50 rounded-sm overflow-hidden mb-14">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              {stat.value === "24/7" || stat.value === "Prime" ? (
                <CountUp value={stat.value} label={stat.label} />
              ) : (
                <div className="bg-neutral-950 px-6 py-8 text-center">
                  <div className="text-2xl md:text-3xl font-light text-white mb-2">{stat.value}</div>
                  <div className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">{stat.label}</div>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-neutral-500 text-sm font-light max-w-2xl mx-auto tracking-wide">
            {philosophyData.paragraphs[1]}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
