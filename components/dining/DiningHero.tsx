import { diningHero } from "@/lib/data/dining";

export default function DiningHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden flex items-end">
      <img
        src={diningHero.image}
        alt="Dining at Hotel Stay Casa Inn"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">
          {diningHero.tag}
        </span>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
          {diningHero.title}
        </h1>
        <p className="text-neutral-300 font-light mt-3 max-w-lg">
          {diningHero.description}
        </p>
      </div>
    </section>
  );
}
