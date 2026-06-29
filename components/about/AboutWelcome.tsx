import ScrollReveal from "@/components/motion/ScrollReveal";
import { MapPin } from "lucide-react";
import { welcomeContent } from "@/lib/data/about";

export default function AboutWelcome() {
  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">{welcomeContent.tag}</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">{welcomeContent.title}</h2>
            {welcomeContent.paragraphs.map((p, i) => (
              <p key={i} className="text-neutral-600 font-light leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative">
              <img
                src={welcomeContent.image}
                alt={welcomeContent.imageAlt}
                className="rounded-2xl shadow-depth-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-premium p-6 hidden md:block">
                <MapPin className="w-5 h-5 text-red-500 mb-1" />
                <p className="text-sm font-medium text-neutral-800">{welcomeContent.pinLocation}</p>
                <p className="text-xs text-neutral-500">{welcomeContent.pinSubLocation}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
