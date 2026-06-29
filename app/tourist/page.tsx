import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Star, Clock, Compass, ArrowRight, ExternalLink } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { attractions, experiences } from "@/lib/tourist-data";

export const metadata: Metadata = {
  title: "Nearby Tourist Attractions | Stay Casa Inn",
  description: "Explore top tourist attractions near Stay Casa Inn in Sodala, Jaipur — Amber Palace, Hawa Mahal, City Palace, Jantar Mantar, and more.",
};

export default function TouristPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 bg-neutral-950 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url(/jaipurbaground.avif)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <Compass className="w-7 h-7 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
            Explore Jaipur
          </h1>
          <p className="text-neutral-400 font-light text-lg max-w-xl mx-auto">
            Discover the Pink City&apos;s most iconic attractions — all within easy reach from Stay Casa Inn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-400" /> Sodala, Jaipur</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-red-400" /> Top-rated experiences</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-red-400" /> 3–30 min from hotel</span>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "12+", label: "Top Attractions" },
            { value: "3–30", label: "Minutes from Hotel" },
            { value: "4.2", label: "Average Rating" },
            { value: "4", label: "Curated Itineraries" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-light text-neutral-900">{s.value}</div>
              <div className="text-[10px] tracking-wider text-neutral-500 uppercase font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionHeading
              tag="Must-See Sights"
              title="Top Attractions in Jaipur"
              subtitle="Handpicked highlights from TripAdvisor and local guides. All easily accessible from Stay Casa Inn."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((place, i) => (
              <ScrollReveal key={place.slug} delay={i * 0.05}>
                <Link href={`/tourist/${place.slug}`} className="group block h-full">
                  <div className="bg-white border border-neutral-100 rounded-2xl overflow-hidden hover:shadow-soft-premium transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-neutral-100">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {place.rating}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-neutral-900/70 backdrop-blur-sm rounded-full px-3 py-1 text-[10px] text-white font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {place.distance}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-neutral-900 group-hover:text-red-600 transition-colors">{place.name}</h3>
                        <span className="text-[10px] text-neutral-400">{place.reviews} reviews</span>
                      </div>
                      <p className="text-sm text-neutral-500 font-light leading-relaxed mb-4 flex-1">
                        {place.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                        <span className="text-[10px] text-red-500 font-semibold tracking-wider uppercase flex items-center gap-1">
                          <Clock className="w-3 h-3" /> ~{place.duration} drive
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-red-500 font-semibold tracking-wider uppercase group-hover:gap-2 transition-all">
                          View Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionHeading
              tag="Plan Your Day"
              title="Curated Itineraries"
              subtitle="Suggested routes based on your interests — all starting from Stay Casa Inn."
              light
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 0.1}>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full hover:border-red-900/30 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                    <Compass className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{exp.title}</h3>
                  <p className="text-neutral-400 text-sm font-light mb-3">{exp.places}</p>
                  <div className="flex items-center gap-2 text-[10px] text-red-400 font-semibold tracking-wider uppercase mb-2">
                    <Clock className="w-3 h-3" />
                    {exp.duration}
                  </div>
                  <p className="text-[11px] text-neutral-500 italic">💡 {exp.tip}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden bg-neutral-950 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=2400"
            alt="Jaipur cityscape"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <ScrollReveal>
            <MapPin className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-300 uppercase mb-3 block">
              Start Your Adventure
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Book Your Stay at Stay Casa Inn
            </h2>
            <p className="text-neutral-300 font-light mb-10 text-lg max-w-xl mx-auto">
              Comfortable rooms, prime location, and easy access to all of Jaipur&apos;s top attractions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
              >
                Book Now
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white/80 hover:text-white px-10 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                Ask About Tours
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
