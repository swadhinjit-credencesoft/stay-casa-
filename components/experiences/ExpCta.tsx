import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { expCta } from "@/lib/data/experiences";

export default function ExpCta() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
          {expCta.title}
        </h2>
        <p className="text-neutral-400 font-light max-w-xl mx-auto mb-8 text-lg">
          {expCta.description}
        </p>
        <a
          href={expCta.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300"
        >
          {expCta.buttonText} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </ScrollReveal>
    </section>
  );
}
