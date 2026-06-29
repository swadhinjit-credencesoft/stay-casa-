import ScrollReveal from "@/components/motion/ScrollReveal";
import { highlightsContent } from "@/lib/data/about";

export default function AboutHighlights() {
  const { items } = highlightsContent;
  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">{highlightsContent.tag}</span>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">{highlightsContent.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white border border-neutral-100 rounded-xl p-6 hover:shadow-soft-premium transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
