import { blogHeroData } from "@/lib/data/blog";

export default function BlogHero() {
  const { preHeader, heading, description } = blogHeroData;
  return (
    <section className="relative bg-neutral-950 pt-32 pb-24 px-6 overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative z-10">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">{preHeader}</span>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">{heading}</h1>
        <p className="text-neutral-400 font-light mt-5 max-w-xl mx-auto text-lg">{description}</p>
      </div>
    </section>
  );
}
