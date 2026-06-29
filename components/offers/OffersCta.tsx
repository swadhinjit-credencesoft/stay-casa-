import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { offersCtaData } from "@/lib/data/offers";

export default function OffersCta() {
  const { heading, description, buttonText, buttonHref } = offersCtaData;
  return (
    <section className="py-20 px-6 bg-neutral-950 text-center">
      <ScrollReveal>
        <h2 className="text-3xl font-light text-white mb-4">{heading}</h2>
        <p className="text-neutral-400 font-light mb-8 max-w-md mx-auto">{description}</p>
        <Link href={buttonHref} className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300">
          {buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
