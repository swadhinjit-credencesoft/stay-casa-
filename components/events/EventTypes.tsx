import ScrollReveal from "@/components/motion/ScrollReveal";
import { eventTypesContent } from "@/lib/data/events";

export default function EventTypes() {
  const { items } = eventTypesContent;
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">{eventTypesContent.tag}</span>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">{eventTypesContent.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((event, i) => {
            const Icon = event.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="bg-[#FCFCFF] border border-neutral-100 rounded-2xl p-8 h-full hover:shadow-soft-premium transition-all duration-300">
                  <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-base font-medium text-neutral-900 mb-3">{event.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{event.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
