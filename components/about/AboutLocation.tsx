import ScrollReveal from "@/components/motion/ScrollReveal";
import { locationContent } from "@/lib/data/about";

export default function AboutLocation() {
  return (
    <section className="py-24 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden h-80">
            <img
              src={locationContent.image}
              alt={locationContent.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">{locationContent.tag}</span>
          <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-5">{locationContent.title}</h2>
          {locationContent.paragraphs.map((p, i) => (
            <p key={i} className="text-neutral-400 font-light leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
