import { offersHeroData } from "@/lib/data/offers";

export default function OffersHero() {
  const { preHeader, heading, description } = offersHeroData;
  return (
    <section className="relative bg-neutral-950 pt-32 pb-24 px-6 overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">{preHeader}</span>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">{heading}</h1>
        <p className="text-neutral-400 font-light mt-5 max-w-2xl mx-auto text-lg">{description}</p>
      </div>
    </section>
  );
}
