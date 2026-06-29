import ScrollReveal from "@/components/motion/ScrollReveal";
import { customAssistanceContent } from "@/lib/data/events";

export default function CustomAssistance() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">{customAssistanceContent.tag}</span>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">{customAssistanceContent.title}</h2>
          <p className="text-neutral-600 font-light leading-relaxed text-lg mb-4">
            {customAssistanceContent.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
