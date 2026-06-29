import ScrollReveal from "@/components/motion/ScrollReveal";
import { whyChooseUsContent } from "@/lib/data/events";

export default function WhyChooseUs() {
  const { items } = whyChooseUsContent;
  return (
    <section className="py-20 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">{whyChooseUsContent.tag}</span>
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-12">{whyChooseUsContent.title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 flex items-center gap-4 h-full text-left">
                  <div className="w-9 h-9 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-xs text-neutral-300 font-light">{item.text}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
