import { Award } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { spaCertifications } from "@/lib/data/spa";

export default function SpaCertifications() {
  return (
    <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {spaCertifications.map((cert, i) => (
            <ScrollReveal key={cert} delay={i * 0.1}>
              <div className="flex items-center gap-3 border border-neutral-200 bg-white rounded-full px-5 py-2.5 shadow-soft-premium">
                <Award className="w-4 h-4 text-red-500" />
                <span className="text-xs font-medium text-neutral-600">{cert}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
