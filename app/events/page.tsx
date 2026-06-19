import Link from "next/link";
import {
  Briefcase, Cake, Heart, Users, PartyPopper, Luggage,
  MapPin, Star, Check, ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const eventTypes = [
  {
    icon: Briefcase,
    title: "Corporate Meetings & Business Gatherings",
    description: "Host productive meetings, business discussions, training sessions, and small corporate events in a comfortable and professional environment."
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Celebrate your special day with family and friends in a warm and inviting atmosphere. Our team can assist in creating a memorable birthday experience."
  },
  {
    icon: Heart,
    title: "Anniversary Parties",
    description: "Mark life's most cherished milestones with an elegant and intimate celebration designed to make lasting memories."
  },
  {
    icon: Users,
    title: "Family Gatherings",
    description: "Bring loved ones together for reunions, get-togethers, festive occasions, and special family events in a relaxed setting."
  },
  {
    icon: PartyPopper,
    title: "Social Events",
    description: "From community gatherings to private functions, Stay Casa Inn provides the ideal space and hospitality for various social occasions."
  },
  {
    icon: Luggage,
    title: "Group Stays & Travel Events",
    description: "Whether it's a wedding group, corporate team, educational tour, or family trip, we offer comfortable accommodation and personalized service for group bookings."
  }
];

const whyUs = [
  { icon: MapPin, text: "Convenient location in Jaipur" },
  { icon: Star, text: "Comfortable and well-maintained facilities" },
  { icon: Users, text: "Professional and friendly hospitality team" },
  { icon: Check, text: "Personalized event support" },
  { icon: Star, text: "Affordable event and stay packages" },
  { icon: Check, text: "Clean, safe, and welcoming environment" },
  { icon: Users, text: "Ideal for intimate gatherings and private celebrations" },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden flex items-end">
        <img
          src="/DSC_3833-HDR.jpg.avif"
          alt="Events at Stay Casa Inn"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">Events at Stay Casa Inn</span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">Create Memorable Moments</h1>
          <p className="text-neutral-300 font-light mt-3 max-w-2xl text-lg">
            Whether you&apos;re planning a family celebration, a corporate gathering, a birthday party, an anniversary, or a social event — our welcoming ambiance and attentive hospitality help create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-[#FCFCFF]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Perfect Setting for Every Occasion</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Every Special Occasion Deserves a Perfect Setting</h2>
            <p className="text-neutral-600 font-light leading-relaxed text-lg">
              Located in the peaceful surroundings of Indraprasth Colony, Chordia City, Jaipur, Stay Casa Inn offers a comfortable and convenient venue for intimate events and gatherings. Our team is dedicated to ensuring every event is organized smoothly, allowing you to focus on enjoying the occasion with your guests.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Events We Cater To</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">Occasions We Celebrate With You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, i) => {
              const Icon = event.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-[#FCFCFF] border border-neutral-100 rounded-2xl p-8 h-full hover:shadow-soft-premium transition-all duration-300">
                    <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-base font-medium text-neutral-900 mb-3">{event.title}</h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{event.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-12">Why Choose Stay Casa Inn for Your Event?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 flex items-center gap-4 h-full text-left">
                    <div className="w-9 h-9 rounded-full bg-red-900/30 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-xs text-neutral-300 font-light">{item.text}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customized Assistance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase mb-4 block">Customized Event Assistance</span>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight mb-6">Tailored Support for Every Celebration</h2>
            <p className="text-neutral-600 font-light leading-relaxed text-lg mb-4">
              Every event is unique, and we work closely with our guests to understand their requirements and preferences. Our team is committed to providing personalized support to help make your celebration or gathering smooth, enjoyable, and memorable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-950 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Plan Your Event with Us</h2>
          <p className="text-neutral-400 font-light max-w-xl mx-auto mb-8 text-lg">
            Whether you&apos;re organizing a corporate meeting, a family celebration, or a special gathering, Stay Casa Inn offers the perfect combination of comfort, convenience, and hospitality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
