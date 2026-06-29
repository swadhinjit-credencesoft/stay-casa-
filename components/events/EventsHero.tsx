import { heroContent } from "@/lib/data/events";

export default function EventsHero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-end">
      <img
        src={heroContent.image}
        alt={heroContent.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">{heroContent.tag}</span>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">{heroContent.title}</h1>
        <p className="text-neutral-300 font-light mt-3 max-w-2xl text-lg">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
}
