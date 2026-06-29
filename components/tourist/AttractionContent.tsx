"use client";

import { CheckCircle2, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { detailLabels } from "@/lib/tourist-data";

interface Props {
  name: string;
  longDescription: string;
  highlights: string[];
  tips: string[];
}

export default function AttractionContent({ name, longDescription, highlights, tips }: Props) {
  return (
    <div className="lg:col-span-2">
      <ScrollReveal>
        <h2 className="text-2xl font-light text-neutral-900 mb-4">{detailLabels.about} {name}</h2>
        <p className="text-neutral-600 font-light leading-relaxed text-base">{longDescription}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="text-2xl font-light text-neutral-900 mb-4 mt-12">{detailLabels.highlights}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div key={h} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-700">{h}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="text-2xl font-light text-neutral-900 mb-4 mt-12">{detailLabels.proTips}</h2>
        <div className="space-y-3">
          {tips.map((t) => (
            <div key={t} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-sm text-amber-800">{t}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
