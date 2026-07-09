import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { testimonials } from "@/lib/data/home";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionHeading
            tag="Guest Voices"
            title="Guest Stories"
            align="center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-neutral-600 font-light leading-relaxed text-sm italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-neutral-100 pt-4 mt-auto">
                  <p className="font-medium text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
