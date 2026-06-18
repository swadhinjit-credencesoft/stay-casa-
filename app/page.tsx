import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Award, Leaf, Waves } from "lucide-react";
import { roomsSuites, experiences, restaurants, spaTreatments, offers } from "@/lib/mockData";
import { getHotelSchema } from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { CinematicHero, RoomCard } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Aman Sanctuary Resort – Luxury Volcanic Cove Retreat",
  description:
    "An ultra-luxury resort perched on volcanic Atlantic cliffs. Private ocean pavilions, subterranean sound healing, and cinematic culinary experiences.",
};

const stats = [
  { value: "4", label: "International Awards" },
  { value: "12", label: "Private Pavilions" },
  { value: "3", label: "Signature Restaurants" },
  { value: "1989", label: "Est. Year" },
];

const awards = [
  "Condé Nast Traveller – Top 10 World",
  "Forbes Five Star",
  "Relais & Châteaux",
  "Andrew Harper – Hidden Gem",
];

const testimonials = [
  {
    quote: "Absolutely transcendent. Every morning I woke to the sound of the ocean and felt the world dissolve. The Aman Sanctuary is the definition of true luxury.",
    name: "Sophia Armitage",
    title: "Editor, Condé Nast Traveller",
    rating: 5,
  },
  {
    quote: "The Sound Bath in the volcanic cave was life-changing. I've stayed at Amangiri, Amanjiwo, and every leading Aman — this rivals them all.",
    name: "James Thornton",
    title: "Luxury Travel Consultant",
    rating: 5,
  },
  {
    quote: "Chef Kenji's omakase at Shio is a religious experience. Paired with the cliffside view — nothing in the world compares.",
    name: "Mei-Ling Xiu",
    title: "Michelin Guide Contributor",
    rating: 5,
  },
];

export default function HomePage() {
  const schema = getHotelSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* 1. CINEMATIC HERO */}
      <CinematicHero />

      {/* 2. PHILOSOPHY STRIP */}
      <section className="bg-neutral-950 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8">
              Not a Hotel.{" "}
              <em className="text-red-500 not-italic">A Sanctuary.</em>
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-2xl mx-auto mb-16">
              We carved away everything that was not sanctuary. What remains is
              twelve pavilions of absolute stillness perched above the infinite Atlantic.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800/50 border border-neutral-800/50 rounded-sm overflow-hidden">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="bg-neutral-950 px-6 py-8 text-center">
                  <div className="text-4xl md:text-5xl font-light text-white mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SUITES */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              tag="Suites & Pavilions"
              title="Twelve Private Worlds"
              subtitle="Each pavilion is a self-contained sanctuary — distinct in architecture, united in philosophy."
            />
            <ScrollReveal direction="right">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 transition-all shrink-0"
              >
                View All Suites <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsSuites.slice(0, 3).map((room, i) => (
              <RoomCard key={room.id} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCES */}
      <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.06)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-14">
            <SectionHeading
              tag="Curated Experiences"
              title="Beyond the Ordinary"
              subtitle="Helicopter picnics on volcanic peaks. Marine archaeology dives. Ancient sound healing. Every moment is designed to become a memory."
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.slice(0, 4).map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl h-72 cursor-pointer">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-red-400 mb-2 bg-red-950/40 border border-red-500/20 px-2 py-1 rounded-full inline-block self-start">
                      {exp.category}
                    </span>
                    <h3 className="text-xl font-light text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-300">{exp.duration}</span>
                      {exp.price && <span className="text-xs text-red-400 font-medium">{exp.price}</span>}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              All Experiences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. INFINITY POOL SHOWCASE */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2400"
          alt="Aman Sanctuary infinity pool"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/40" />
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-300 uppercase mb-3 block">The Crown Jewel</span>
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">The Infinity Edge</h2>
            <p className="text-neutral-200/70 mt-4 font-light max-w-md mx-auto">
              Sixty meters of still water suspended above the Atlantic. Where the pool meets the horizon.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. DINING PREVIEW */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              tag="Culinary Experiences"
              title="Three Distinct Worlds of Taste"
              subtitle="From woodfire primal cooking to Japanese omakase excellence — each restaurant is a destination in itself."
            />
            <ScrollReveal direction="right">
              <Link
                href="/dining"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 transition-all shrink-0"
              >
                Explore Dining <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.slice(0, 2).map((r, i) => (
              <ScrollReveal key={r.id} delay={i * 0.15}>
                <div className="group rounded-2xl overflow-hidden bg-white shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-light text-white">{r.name}</h3>
                      <p className="text-xs text-red-300 mt-1">{r.cuisine}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-500 text-sm font-light mb-3">{r.tagline}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-100 pt-3">
                      <span>Chef {r.chef}</span>
                      <span>{r.hours}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SPA TEASER */}
      <section className="py-24 px-6 bg-neutral-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.05)_0%,transparent_60%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading
            tag="Spa & Wellness"
            title="Subterranean Sound Healing"
            subtitle="Enter our volcanic lava-stone cave and let ancient vibrations restore what modernity has taken."
            align="center"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {spaTreatments.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.1}>
                <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 text-left hover:border-red-900/50 transition-colors duration-300">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-red-400 mb-3 block">{t.category}</span>
                  <h3 className="text-lg font-light text-white mb-2">{t.name}</h3>
                  <p className="text-neutral-400 text-sm font-light mb-4 line-clamp-2">{t.description}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-800 pt-3">
                    <span>{t.duration} min</span>
                    <span className="text-red-400 font-semibold">${t.price}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/spa"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-8 py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Discover Wellness <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. AWARDS ROW */}
      <section className="py-16 px-6 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase">Recognised Excellence</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {awards.map((award, i) => (
              <ScrollReveal key={award} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-2 p-6 border border-neutral-200 rounded-xl bg-white text-center hover:border-red-200 hover:shadow-soft-premium transition-all duration-300">
                  <Award className="w-6 h-6 text-red-500" />
                  <span className="text-xs font-medium text-neutral-700 text-balance">{award}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionHeading
              tag="Guest Voices"
              title="Stories of Sanctuary"
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-neutral-600 font-light leading-relaxed text-sm italic">"{t.quote}"</p>
                  <div className="border-t border-neutral-100 pt-4 mt-auto">
                    <p className="font-medium text-neutral-900 text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOOKING CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2400"
            alt="Aman Sanctuary pavilion"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">
              Your Retreat Awaits
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Begin Your Sanctuary Journey
            </h2>
            <p className="text-neutral-300 font-light mb-10 text-lg">
              Twelve pavilions. Three restaurants. One subterranean cave. Infinite stillness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              >
                Reserve Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white/80 hover:text-white px-10 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                Speak to Concierge
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
