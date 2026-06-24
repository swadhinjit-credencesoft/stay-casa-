import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Award, MapPin, Calendar, Building2, ExternalLink } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";
import { roomsSuites } from "@/lib/mockData";
import { getHotelSchema } from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { CinematicHero, RoomCard } from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Hotel Stay Casa Inn – Comfortable Stay in Jaipur",
  description:
    "Experience comfort, warm hospitality, and modern amenities at Stay Casa Inn Jaipur. Well-furnished rooms, free Wi-Fi, and a prime location in Sodala.",
};

const stats = [
  { value: "24/7", label: "Guest Assistance" },
  { value: "Comfortable", label: "Well-Furnished Rooms" },
  { value: "Free", label: "High-Speed Wi-Fi" },
  { value: "Prime", label: "Location in Jaipur" },
];

const awards = [
  "Clean & Comfortable Rooms",
  "Friendly Hospitality",
  "Prime Jaipur Location",
  "Great Value for Money",
];

const testimonials = [
  {
    quote: "Comfortable rooms, excellent service, and a great location. The staff was extremely helpful throughout our stay. Highly recommended.",
    name: "Priya Sharma",
    title: "Business Traveler",
    rating: 5,
  },
  {
    quote: "Clean rooms, peaceful environment, and excellent value for money. The complimentary Wi-Fi was fast and reliable. Will definitely stay again.",
    name: "Rahul Verma",
    title: "Family Vacationer",
    rating: 5,
  },
  {
    quote: "A wonderful experience with warm hospitality and modern facilities. The staff went above and beyond to make our stay comfortable and memorable.",
    name: "Anita Desai",
    title: "Couple Traveler",
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8">
              More Than a Stay.{" "}
              <em className="text-red-500 not-italic">A Place to Feel at Home.</em>
            </h2>
            <p className="text-neutral-400 text-lg font-light max-w-3xl mx-auto mb-16">
              At Stay Casa Inn, every detail is thoughtfully designed to provide comfort, convenience, and genuine hospitality. Whether you&apos;re visiting Jaipur for business or leisure, enjoy a peaceful and relaxing experience in a welcoming environment.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800/50 border border-neutral-800/50 rounded-sm overflow-hidden mb-14">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div className="bg-neutral-950 px-6 py-8 text-center">
                  <div className="text-2xl md:text-3xl font-light text-white mb-2">{s.value}</div>
                  <div className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-neutral-500 text-sm font-light max-w-2xl mx-auto tracking-wide">
              Providing memorable hospitality experiences with comfort, affordability, and personalized service for every traveler.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase">About Stay Casa Inn</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight">
                  Your Comfortable Home Away from Home
                </h2>
                <p className="text-neutral-500 font-light leading-relaxed">
                  Welcome to Stay Casa Inn, a welcoming haven in the heart of Jaipur. Situated on New Sanganer Road in
                  Sodala, our hotel blends modern comfort with warm Rajasthani hospitality. Whether visiting for business
                  or leisure, we ensure a peaceful and relaxing stay with thoughtfully designed rooms, essential amenities,
                  and personalized service.
                </p>
                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Mission</p>
                      <p className="text-xs text-neutral-500">To provide every guest with a comfortable, clean, and welcoming stay at affordable rates.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Vision</p>
                      <p className="text-xs text-neutral-500">To be the preferred choice for travelers seeking comfort and genuine hospitality in Jaipur.</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 transition-all mt-4"
                >
                  Learn More About Us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img
                  src="/home2.jpeg"
                  alt="Stay Casa Inn Jaipur"
                  className="rounded-2xl shadow-depth-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-premium px-6 py-4 hidden md:block">
                  <p className="text-2xl font-light text-neutral-900">R-3-50 North Part</p>
                  <p className="text-xs text-neutral-500">Indraprasth Colony, Sodala</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SUITES */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              tag="Suites & Rooms"
              title="Our Rooms"
              subtitle="Each room is thoughtfully designed for comfort and relaxation — distinct in character, united in quality."
            />
            <ScrollReveal direction="right">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 transition-all shrink-0"
              >
                View All Rooms <ArrowRight className="w-3.5 h-3.5" />
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

      {/* 5. GUEST EXPERIENCE */}
      <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.06)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              tag="Guest Experience"
              title="Comfort, Convenience &amp; Hospitality"
              subtitle="Experience warm Rajasthani hospitality, clean and spacious rooms, and personalized service at Stay Casa Inn Jaipur."
              light
            />
            <ScrollReveal direction="right">
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-400 hover:text-red-300 border-b border-red-800/50 hover:border-red-400 pb-1 transition-all shrink-0"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full">
                <span className="text-[9px] font-bold tracking-widest uppercase text-red-400 mb-3 block">Prime Location</span>
                <h3 className="text-lg font-light text-white mb-2">Conveniently Situated</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Located on New Sanganer Road in Sodala, Jaipur — close to major attractions, shopping centers, and business hubs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full">
                <span className="text-[9px] font-bold tracking-widest uppercase text-red-400 mb-3 block">Clean &amp; Comfortable</span>
                <h3 className="text-lg font-light text-white mb-2">Well-Equipped Rooms</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Thoughtfully designed rooms with comfortable bedding, air conditioning, free Wi-Fi, Smart TV, and daily housekeeping.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full">
                <span className="text-[9px] font-bold tracking-widest uppercase text-red-400 mb-3 block">Warm Hospitality</span>
                <h3 className="text-lg font-light text-white mb-2">Personalized Service</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Our dedicated team delivers warm Rajasthani hospitality with 24-hour front desk assistance and room service.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. LOCATION */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <img
          src="/DSC_3817.JPG.avif"
          alt="Stay Casa Inn Jaipur"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <ScrollReveal>
            <MapPin className="w-8 h-8 text-red-400 mx-auto mb-4" />
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-300 uppercase mb-3 block">Prime Location</span>
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">Your Home in Jaipur</h2>
            <p className="text-neutral-200/70 mt-4 font-light max-w-lg mx-auto">
              Conveniently situated on New Sanganer Road in Sodala — close to Jaipur International Airport, railway station, shopping centers, and major attractions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
              <div className="text-center">
                <p className="text-2xl font-light text-white">R-3-50</p>
                <p className="text-[10px] tracking-widest text-neutral-400 uppercase">North Part</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-white">Indraprasth</p>
                <p className="text-[10px] tracking-widest text-neutral-400 uppercase">Colony</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-white">Chordia</p>
                <p className="text-[10px] tracking-widest text-neutral-400 uppercase">City, Sodala</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. EVENTS AT THE HOTEL */}
      <section className="py-24 px-6 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.05)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <SectionHeading
              tag="Events at Stay Casa Inn"
              title="Create Memorable Moments"
              subtitle="From corporate meetings to family celebrations, we provide a comfortable setting for every occasion."
              light
            />
            <ScrollReveal direction="right">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-400 hover:text-red-300 border-b border-red-800/50 hover:border-red-400 pb-1 transition-all shrink-0"
              >
                Plan Your Event <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full hover:border-red-900/30 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-light text-white mb-2">Corporate Events</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Business meetings, conferences, and team gatherings in a professional yet comfortable environment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full hover:border-red-900/30 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-light text-white mb-2">Birthday &amp; Anniversary</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Celebrate your special day with friends and family in our welcoming event spaces.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full hover:border-red-900/30 transition-colors duration-300">
                <Calendar className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-light text-white mb-2">Social Gatherings</h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  Family reunions, group stays, and social events tailored to your preferences.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. SPA TEASER */}
      {/* <section className="py-24 px-6 bg-neutral-950 text-center relative overflow-hidden">
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
      </section> */}

      {/* 9. AWARDS ROW */}
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

      {/* 10. TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <SectionHeading
              tag="Guest Voices"
              title="Guest Stories"
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

      {/* 11. BOOKING CTA */}
      <section className="relative py-32 px-6 overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2400"
            alt="Hotel Stay Casa Inn suite"
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
              Begin Your Stay
            </h2>
            <p className="text-neutral-300 font-light mb-10 text-lg">
              Comfortable rooms. Friendly hospitality. Unforgettable experiences.
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
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
