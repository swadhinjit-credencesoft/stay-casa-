import { heroContent } from "@/lib/data/about";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroContent.image}
          alt={heroContent.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">{heroContent.tag}</span>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">{heroContent.title}</h1>
        <p className="text-neutral-400 font-light mt-5 max-w-2xl mx-auto text-lg">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
}
