import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { ctaContent } from "@/lib/data/events";

export default function EventsCta() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">{ctaContent.title}</h2>
        <p className="text-neutral-400 font-light max-w-xl mx-auto mb-8 text-lg">
          {ctaContent.description}
        </p>
        <Link
          href={ctaContent.linkHref}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300"
        >
          {ctaContent.linkText} <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
