import ScrollReveal from "@/components/motion/ScrollReveal";
import { expWhyChooseUs, highlights } from "@/lib/data/experiences";

export default function ExpWhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">
              {expWhyChooseUs.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
              {expWhyChooseUs.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex items-center gap-4 bg-[#FCFCFF] border border-neutral-100 rounded-xl p-5 hover:shadow-soft-premium transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-sm font-light text-neutral-700">
                    {item.text}
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
