import ScrollReveal from "@/components/motion/ScrollReveal";
import { expComfortStay } from "@/lib/data/experiences";

export default function ExpComfortStay() {
  return (
    <section className="py-20 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">
                {expComfortStay.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">
                {expComfortStay.title}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                {expComfortStay.paragraphs[0]}
              </p>
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                {expComfortStay.paragraphs[1]}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative">
              <img
                src={expComfortStay.image}
                alt="Hotel room comfort"
                className="rounded-2xl shadow-depth-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-premium p-6 hidden md:block">
                <span className="text-3xl font-light text-red-600">
                  {expComfortStay.badge.title}
                </span>
                <p className="text-xs text-neutral-500 font-light tracking-wider">
                  {expComfortStay.badge.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
