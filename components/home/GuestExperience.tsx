import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { guestExperienceData } from "@/lib/data/home";

export default function GuestExperience() {
  return (
    <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.06)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            tag={guestExperienceData.tag}
            title={guestExperienceData.title}
            subtitle={guestExperienceData.subtitle}
            light
          />
          <ScrollReveal direction="right">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-400 hover:text-red-300 border-b border-red-800/50 hover:border-red-400 pb-1 transition-all shrink-0"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guestExperienceData.features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full">
                <span className="text-[9px] font-bold tracking-widest uppercase text-red-400 mb-3 block">{feature.tag}</span>
                <h3 className="text-lg font-light text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
