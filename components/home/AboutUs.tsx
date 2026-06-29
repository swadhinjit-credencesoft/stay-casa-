import Link from "next/link";
import { Building2, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { aboutUsData } from "@/lib/data/home";

export default function AboutUs() {
  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase">{aboutUsData.tag}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight">
                {aboutUsData.heading}
              </h2>
              {aboutUsData.paragraphs.map((p, i) => (
                <p key={i} className="text-neutral-500 font-light leading-relaxed">{p}</p>
              ))}
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{aboutUsData.mission.label}</p>
                    <p className="text-xs text-neutral-500">{aboutUsData.mission.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">{aboutUsData.vision.label}</p>
                    <p className="text-xs text-neutral-500">{aboutUsData.vision.description}</p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 transition-all mt-4"
              >
                Learn More About Us <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative">
              <img
                src={aboutUsData.imageUrl}
                alt="Stay Casa Inn Jaipur"
                className="rounded-2xl shadow-depth-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-premium px-6 py-4 hidden md:block">
                <p className="text-2xl font-light text-neutral-900">{aboutUsData.address.line1}</p>
                <p className="text-xs text-neutral-500">{aboutUsData.address.line2}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
