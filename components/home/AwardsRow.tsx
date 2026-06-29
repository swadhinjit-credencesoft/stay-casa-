import { Award } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { awards } from "@/lib/data/home";

export default function AwardsRow() {
  return (
    <section className="py-16 px-6 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase">Recognised Excellence</span>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((award, i) => (
            <ScrollReveal key={award} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-2 p-6 border border-neutral-200 rounded-xl bg-white text-center hover:border-red-200 hover:shadow-soft-premium transition-all duration-300">
                <Award className="w-6 h-6 text-red-500" />
                <span className="text-xs font-medium text-neutral-700 text-balance">{award}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
