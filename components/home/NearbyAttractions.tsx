import ScrollReveal from "@/components/motion/ScrollReveal";
import { nearbyAttractions } from "@/lib/data/home";

export default function NearbyAttractionsSection() {
  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Explore Jaipur</span>
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">Nearby Attractions</h2>
          <p className="text-neutral-500 font-light mt-3 max-w-xl mx-auto">Stay Casa Inn is perfectly located to explore the Pink City&apos;s most iconic landmarks and experiences.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nearbyAttractions.map((place, i) => (
            <ScrollReveal key={place.name} delay={i * 0.05}>
              <div className="bg-white border border-neutral-100 rounded-xl p-5 text-center hover:shadow-soft-premium hover:border-red-100 transition-all duration-300">
                <span className="text-2xl mb-2 block">{place.emoji}</span>
                <h3 className="text-sm font-medium text-neutral-900">{place.name}</h3>
                <p className="text-[10px] tracking-wider text-red-500 uppercase font-semibold mt-1">{place.dist}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
