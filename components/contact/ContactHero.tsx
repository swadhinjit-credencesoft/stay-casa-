import { contactHero } from "@/lib/data/contact";

export default function ContactHero() {
  return (
    <section className="relative bg-neutral-950 pt-32 pb-20 px-6 text-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${contactHero.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">
          {contactHero.tag}
        </span>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
          {contactHero.title}
        </h1>
        <p className="text-neutral-400 font-light mt-5 max-w-xl mx-auto text-lg">
          {contactHero.description}
        </p>
      </div>
    </section>
  );
}
