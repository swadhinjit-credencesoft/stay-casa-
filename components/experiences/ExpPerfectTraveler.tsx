import ScrollReveal from "@/components/motion/ScrollReveal";
import { expTraveler } from "@/lib/data/experiences";

export default function ExpPerfectTraveler() {
  return (
    <section className="py-20 px-6 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">
            {expTraveler.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">
            {expTraveler.title}
          </h2>
          <p className="text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed text-lg mb-4">
            {expTraveler.description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
