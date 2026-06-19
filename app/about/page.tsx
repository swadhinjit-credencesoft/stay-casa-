import type { Metadata } from "next";
import ScrollReveal from "@/components/motion/ScrollReveal";
import Link from "next/link";
import {
  Building2, MapPin, Clock, Wifi, Shield, Users, Home, Star, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Stay Casa Inn | Hotel in Jaipur",
  description: "Discover Stay Casa Inn in Indraprasth Colony, Chordia City, Jaipur — comfortable rooms, warm hospitality, and a peaceful location for business and leisure travelers.",
};

const highlights = [
  { icon: Home, title: "Comfortable & Well-Furnished Rooms", description: "Thoughtfully designed rooms with modern amenities for a relaxing stay." },
  { icon: MapPin, title: "Peaceful & Secure Location", description: "Nestled in the tranquil Indraprasth Colony, Chordia City, Jaipur." },
  { icon: Wifi, title: "Complimentary Wi-Fi Access", description: "Stay connected with high-speed internet throughout your visit." },
  { icon: Building2, title: "Air-Conditioned Accommodation", description: "Enjoy climate-controlled comfort in every room." },
  { icon: Clock, title: "24-Hour Guest Assistance", description: "Our front desk team is available around the clock to help you." },
  { icon: Users, title: "Professional Housekeeping", description: "Regular cleaning and upkeep to ensure a hygienic environment." },
  { icon: Shield, title: "Safe & Secure Premises", description: "Your safety and peace of mind are our top priorities." },
  { icon: Star, title: "Excellent Value for Money", description: "Affordable rates without compromising on quality or comfort." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/DSC_3833-HDR.jpg.avif"
            alt="Stay Casa Inn Jaipur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">About Stay Casa Inn</span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">Your Comfortable Home Away from Home</h1>
          <p className="text-neutral-400 font-light mt-5 max-w-2xl mx-auto text-lg">
            Nestled in the peaceful surroundings of Indraprasth Colony, Chordia City, Jaipur — offering the perfect balance of tranquility, convenience, and modern hospitality.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Welcome to Stay Casa Inn</span>
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Warm Hospitality in the Heart of Jaipur</h2>
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                Welcome to <strong>Stay Casa Inn</strong>, your comfortable home away from home in the heart of Jaipur. Located at <strong>R-3-50 North Part, Indraprasth Colony, Chordia City, Jaipur</strong>, our property offers easy access to Jaipur&apos;s major attractions, commercial centers, shopping destinations, and transportation hubs while allowing guests to enjoy a calm and relaxing residential environment.
              </p>
              <p className="text-neutral-600 font-light leading-relaxed mb-4">
                At Stay Casa Inn, we are committed to delivering a comfortable and memorable stay experience. Our thoughtfully designed rooms are equipped with modern amenities, including comfortable bedding, air conditioning, complimentary high-speed Wi-Fi, flat-screen televisions, and well-maintained private bathrooms.
              </p>
              <p className="text-neutral-600 font-light leading-relaxed">
                With facilities such as 24-hour front desk assistance, regular housekeeping, and secure premises, we strive to ensure a safe, hassle-free, and enjoyable experience for every guest. Whether you are traveling for business meetings, family vacations, sightseeing, or a short weekend getaway, our dedicated team is always ready to assist you.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="relative">
                <img
                  src="/DSC_3842-HDR.jpg.avif"
                  alt="Hotel room"
                  className="rounded-2xl shadow-depth-xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-soft-premium p-6 hidden md:block">
                  <MapPin className="w-5 h-5 text-red-500 mb-1" />
                  <p className="text-sm font-medium text-neutral-800">Indraprasth Colony</p>
                  <p className="text-xs text-neutral-500">Chordia City, Jaipur</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="bg-[#FCFCFF] border border-neutral-100 rounded-2xl p-10 h-full">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5">
                  <Star className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900 mb-4">Our Mission</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  To provide comfortable, affordable, and quality accommodation with personalized hospitality, ensuring every guest enjoys a pleasant and memorable stay in Jaipur.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-[#FCFCFF] border border-neutral-100 rounded-2xl p-10 h-full">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5">
                  <Building2 className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900 mb-4">Our Vision</h3>
                <p className="text-neutral-600 font-light leading-relaxed">
                  To become a trusted hospitality destination recognized for exceptional guest experiences, comfort, and value while showcasing the warmth and charm of Jaipur.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">Why Choose Stay Casa Inn?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="bg-white border border-neutral-100 rounded-xl p-6 hover:shadow-soft-premium transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-sm font-medium text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden h-80">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200"
                alt="Jaipur city"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">Prime Location</span>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-5">Explore the Pink City</h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-4">
              The strategic location of Stay Casa Inn makes it easy to explore the rich heritage and vibrant culture of Jaipur. Guests can conveniently visit popular landmarks, shopping markets, restaurants, and entertainment venues while enjoying a peaceful retreat at the end of the day.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Whether you are here for business or leisure, our location on New Sanganer Road ensures you&apos;re never far from where you need to be.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-950 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">We Look Forward to Welcoming You</h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto mb-8 text-lg">
            At Stay Casa Inn, we believe that every journey deserves a comfortable stay. We look forward to welcoming you and making your visit to Jaipur truly enjoyable and memorable.
          </p>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            View Our Rooms <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
