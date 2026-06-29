import { spaHeroData } from "@/lib/data/spa";

export default function SpaHero() {
  const { imageUrl, preHeader, heading, description } = spaHeroData;
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <img
        src={imageUrl}
        alt="Spa & Wellness"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">{preHeader}</span>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">{heading}</h1>
        <p className="text-neutral-300 font-light mt-3 max-w-lg">{description}</p>
      </div>
    </section>
  );
}
