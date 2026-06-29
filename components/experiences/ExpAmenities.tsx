import ScrollReveal from "@/components/motion/ScrollReveal";
import { expAmenitiesSection, amenities } from "@/lib/data/experiences";

export default function ExpAmenities() {
  return (
    <section className="py-20 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <img
                src={expAmenitiesSection.image}
                alt="Clean and spacious room"
                className="rounded-2xl shadow-depth-xl w-full h-[400px] object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">
                {expAmenitiesSection.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">
                {expAmenitiesSection.title}
              </h2>
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                {expAmenitiesSection.description}
              </p>
              <ul className="space-y-3">
                {amenities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-neutral-700"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
