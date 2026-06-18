import type { Metadata } from "next";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Leaf, Sun, Anchor } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Philosophy & Heritage",
  description: "Discover the heritage, philosophy, architecture, and sustainable vision of Hotel Stay Casa Inn.",
};

const timeline = [
  { year: "1989", title: "The Land Acquired", description: "The founding family discovers a remote volcanic cove on the Atlantic coast — untouched, dramatic, transformative." },
  { year: "1994", title: "First Suite Designed", description: "A renowned architect is commissioned. The vision: structures that complement the landscape, not dominate it." },
  { year: "2001", title: "Carbon Neutrality Certified", description: "Among the first luxury resorts worldwide to achieve carbon-neutral certification through solar, geothermal, and biodynamic farming." },
  { year: "2012", title: "Wellness Wing Opens", description: "The spa and wellness wing opens, drawing guests from across the globe for transformative experiences." },
  { year: "2024", title: "Global Recognition", description: "Ranked #1 Luxury Resort by Condé Nast Traveller, Forbes Five Stars, and Relais & Châteaux member." },
];

const sustainabilityCards = [
  { icon: Leaf, title: "Carbon Neutral Since 2001", description: "100% renewable energy through volcanic geothermal taps and solar arrays integrated invisibly into cliff faces." },
  { icon: Sun, title: "80% Local Sourcing", description: "Our estates produce herbs, vegetables, and honeys. All proteins sourced from within 40km of the resort." },
  { icon: Anchor, title: "Coral Reef Restoration", description: "Active coral restoration program surrounding the private house reef, partnered with the Marine Restoration Trust." },
];

const team = [
  { name: "Édouard Voss", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Dr. Clara Mercer", role: "Director of Integrative Wellness", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "Kenji Sato", role: "Executive Chef & Culinary Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" alt="Resort architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 to-neutral-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Philosophy & Heritage</h1>
          <p className="text-neutral-400 font-light mt-5 max-w-2xl mx-auto text-lg">
            Three decades of hospitality. One stunning location. An uncompromising commitment to comfort.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <blockquote className="text-3xl md:text-4xl font-light text-neutral-900 leading-snug border-l-4 border-red-500 pl-8 italic">
              "We built more than a hotel. We created a place of genuine warmth and comfort."
            </blockquote>
            <p className="text-sm text-neutral-500 mt-4 pl-8">— Édouard Voss, Founder</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="right">
            <p className="text-neutral-500 font-light leading-relaxed text-base">
              Hotel Stay Casa Inn was born from a vision of genuine hospitality. When Édouard Voss first discovered the volcanic cliffs of the Atlantic cove in 1989, he saw not just a location, but the potential for a truly exceptional hotel experience.
            </p>
            <p className="text-neutral-500 font-light leading-relaxed text-base mt-4">
              Over three decades, that vision has become reality. The resort hosts twelve unique suites — each thoughtfully designed for comfort and privacy. Every space is crafted for rest, relaxation, and memorable stays.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeading tag="Since 1989" title="Our Heritage Timeline" light align="center" />
          <div className="mt-16 space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-8 group">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-red-500 bg-neutral-950 flex items-center justify-center text-red-400 text-xs font-bold z-10">
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-neutral-800 my-2" />}
                  </div>
                  <div className="pb-12">
                    <span className="text-[10px] font-bold tracking-widest text-red-400 uppercase">{item.year}</span>
                    <h3 className="text-xl font-light text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-neutral-400 font-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tag="Environmental Stewardship" title="Designed for the Planet" subtitle="Luxury and sustainability are not opposing forces — they are the same ambition expressed differently." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {sustainabilityCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-soft-premium hover:shadow-depth-xl transition-all duration-500">
                  <card.icon className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-lg font-light text-neutral-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{card.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden h-96">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" alt="Hotel architecture" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="right">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-5">Emerged from Volcanic Stone</h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-4">
              Every structure on the estate uses locally-quarried basalt lava stone for its insulating thermal properties and aesthetic resonance with the volcanic landscape. Untreated sustainable teak weathers naturally into silver-grey, mirroring the weathered cliffs.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              The aerodynamic building profiles capture coastal breezes through central light wells, eliminating the need for heavy mechanical cooling and maintaining a natural, salt-fresh atmosphere throughout the year.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tag="The People" title="Our Team" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-red-100 shadow-soft-premium">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-light text-neutral-900">{member.name}</h3>
                  <p className="text-xs text-red-500 font-medium tracking-wide uppercase mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
