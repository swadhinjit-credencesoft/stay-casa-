"use client";

import { CheckCircle, MapPin, Users, Wifi, Shield } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Link from "next/link";

const highlights = [
  { icon: MapPin, text: "Excellent location in Jaipur" },
  { icon: Users, text: "Friendly and professional staff" },
  { icon: CheckCircle, text: "Comfortable and hygienic rooms" },
  { icon: Wifi, text: "Free Wi-Fi connectivity" },
  { icon: Shield, text: "Safe and secure environment" },
];

const testimonials = [
  {
    quote: "Comfortable rooms, excellent service, and a great location. The staff was extremely helpful throughout our stay.",
    author: "— Guest Review"
  },
  {
    quote: "Clean rooms, peaceful environment, and excellent value for money. Highly recommended for Jaipur visitors.",
    author: "— Guest Review"
  },
  {
    quote: "A wonderful experience with warm hospitality and modern facilities. Will definitely visit again.",
    author: "— Guest Review"
  }
];

const amenities = [
  "Comfortable beds and premium linens",
  "Air-conditioned accommodation",
  "Free high-speed Wi-Fi",
  "Smart TV and entertainment facilities",
  "Daily housekeeping service",
  "24-hour room service",
  "Clean and hygienic bathrooms"
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/DSC_3823.JPG.avif" alt="Stay Casa Inn Jaipur" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">Guest Experience</span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">Experience Comfort, Convenience & Warm Hospitality</h1>
          <p className="text-neutral-400 font-light mt-5 max-w-2xl mx-auto text-lg">
            At Stay Casa Inn Jaipur, every guest is welcomed with comfort, cleanliness, and personalized service. Located in the heart of Jaipur&apos;s Sodala area, our hotel is designed to provide a relaxing and hassle-free stay for business travelers, families, couples, and solo explorers.
          </p>
        </div>
      </section>

      {/* A Comfortable Stay */}
      <section className="py-20 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">A Comfortable Stay You&apos;ll Remember</span>
                <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Warm Hospitality in the Heart of Jaipur</h2>
                <p className="text-neutral-600 font-light leading-relaxed mb-4">
                  From the moment you arrive, our friendly staff ensures a smooth check-in experience and attentive service throughout your stay. Our well-maintained rooms offer modern amenities, comfortable bedding, air conditioning, high-speed Wi-Fi, and a peaceful atmosphere to help you unwind after a busy day in the Pink City.
                </p>
                <p className="text-neutral-600 font-light leading-relaxed mb-6">
                  Our dedicated team takes pride in delivering warm Rajasthani hospitality. Guests frequently appreciate our courteous staff, quick service, and commitment to making every stay enjoyable and memorable.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative">
                <img
                  src="/DSC_3823.JPG.avif"
                  alt="Hotel room comfort"
                  className="rounded-2xl shadow-depth-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-premium p-6 hidden md:block">
                  <span className="text-3xl font-light text-red-600">Prime</span>
                  <p className="text-xs text-neutral-500 font-light tracking-wider">Location in Sodala</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Prime Location */}
      <section className="py-20 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Prime Location</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Conveniently Situated on New Sanganer Road</h2>
            <p className="text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed text-lg">
              Stay Casa Inn offers easy access to Jaipur&apos;s major attractions, shopping centers, business hubs, restaurants, and transportation facilities. Whether you&apos;re visiting for work or leisure, you&apos;ll find everything within easy reach.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Amenities / Clean Rooms */}
      <section className="py-20 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="/DSC_3793.JPG.avif"
                  alt="Clean and spacious room"
                  className="rounded-2xl shadow-depth-xl w-full h-[400px] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Clean, Spacious &amp; Well-Equipped</span>
                <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Thoughtfully Designed for Maximum Comfort</h2>
                <p className="text-neutral-600 font-light leading-relaxed mb-6">
                  Our rooms are thoughtfully designed to provide maximum comfort and convenience during your stay.
                </p>
                <ul className="space-y-3">
                  {amenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span className="text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Guests Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">Why Guests Choose Stay Casa Inn</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex items-center gap-4 bg-[#FCFCFF] border border-neutral-100 rounded-xl p-5 hover:shadow-soft-premium transition-shadow duration-300">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-sm font-light text-neutral-700">{item.text}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">What Our Guests Say</span>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">Guest Stories</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full flex flex-col">
                  <svg className="w-8 h-8 text-red-500/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  <p className="text-neutral-300 font-light leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <span className="text-xs text-neutral-500 tracking-wider">{t.author}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect for Every Traveler */}
      <section className="py-20 px-6 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Perfect for Every Traveler</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Affordable Comfort Without Compromise</h2>
            <p className="text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed text-lg mb-4">
              Whether you&apos;re planning a family vacation, a business trip, a weekend getaway, or a short city visit, Stay Casa Inn offers affordable comfort without compromising on quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-950 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Book Your Stay Today</h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto mb-8 text-lg">
            Experience the perfect blend of comfort, convenience, and hospitality at Stay Casa Inn Jaipur. We look forward to making your Jaipur visit memorable and enjoyable.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300">
            Reserve Now
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
