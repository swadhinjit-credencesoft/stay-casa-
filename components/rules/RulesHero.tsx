import { Ban } from "lucide-react";
import { rulesHeroData } from "@/lib/data/rules";

export default function RulesHero() {
  const { heading, description } = rulesHeroData;
  return (
    <section className="relative pt-40 pb-24 px-6 bg-neutral-950 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <Ban className="w-7 h-7 text-red-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">{heading}</h1>
        <p className="text-neutral-400 font-light max-w-xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
