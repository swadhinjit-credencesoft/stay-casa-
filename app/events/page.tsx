"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Users, MapPin, Star, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";

const inquirySchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone required"),
  eventType: z.string().min(1, "Event type required"),
  eventDate: z.string().min(1, "Event date required"),
  guestCount: z.string().min(1, "Guest count required"),
  budget: z.string().min(1, "Budget range required"),
  message: z.string().min(10, "Please describe your event"),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const whyUsFeatures = [
  { icon: MapPin, title: "Clifftop Ceremony Cove", description: "A natural volcanic amphitheater overlooking the Atlantic — an unrivaled wedding backdrop." },
  { icon: Star, title: "Private Island Access", description: "Exclusive use of our private islet for ceremonies accessible only by private boat." },
  { icon: Check, title: "Bespoke Floral Design", description: "Our in-house botanical artist crafts signature arrangements using resort-grown blooms." },
  { icon: Users, title: "Michelin Catering", description: "Chef Mikołaj Krasucki's team creates custom celebration menus for each event." },
];

const venues = [
  {
    name: "The Cliffside Ceremony Terrace",
    capacity: "Up to 60 guests",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    description: "Perched directly on the volcanic cliff edge with 180° unobstructed ocean views. The most photographed ceremony location on the Atlantic coast.",
  },
  {
    name: "The Grand Pavilion Ballroom",
    capacity: "Up to 200 guests",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1200",
    description: "An expansive glass-walled pavilion featuring retractable panels that open to the ocean terrace. Accommodates seated dinners, cocktail receptions, and keynote events.",
  },
  {
    name: "The Subterranean Banquet Cave",
    capacity: "Up to 30 guests exclusive",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    description: "For intimate celebrations carved from volcanic rock. Dramatically lit with candlelight and warm copper sconces — an unprecedented dining environment.",
  },
];

export default function EventsPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = () => setSubmitted(true);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2400"
          alt="Destination weddings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">Exceptional Celebrations</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Destination Weddings<br />&amp; Private Events</h1>
          <p className="text-neutral-300 font-light mt-3 max-w-lg">Where volcanic drama meets impeccable luxury. Your most important day deserves the world's most extraordinary setting.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tag="Our Promise" title="Why Choose The Sanctuary" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {whyUsFeatures.map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 0.1}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-soft-premium hover:shadow-depth-xl transition-all duration-500">
                  <feat.icon className="w-7 h-7 text-red-500 mb-4" />
                  <h3 className="text-base font-medium text-neutral-900 mb-2">{feat.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">{feat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading tag="Event Spaces" title="Three Extraordinary Venues" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {venues.map((venue, i) => (
              <ScrollReveal key={venue.name} delay={i * 0.12}>
                <div className="group rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-red-900/30 transition-all duration-500">
                  <div className="relative h-52 overflow-hidden">
                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[9px] font-bold tracking-widest text-red-400 uppercase flex items-center gap-1.5">
                        <Users className="w-3 h-3" /> {venue.capacity}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-light text-white mb-2">{venue.name}</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">{venue.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-6 bg-[#FCFCFF]">
        <div className="max-w-2xl mx-auto">
          <SectionHeading tag="Get In Touch" title="Begin Your Planning Journey" align="center" />
          <div className="mt-12">
            {submitted ? (
              <div className="text-center py-12 border border-neutral-200 rounded-2xl bg-white shadow-soft-premium">
                <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-red-500 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-2xl font-light text-neutral-900 mb-3">Inquiry Received</h3>
                <p className="text-neutral-500 font-light">Our events director will contact you within 24 hours to begin curating your extraordinary celebration.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {([
                    { name: "name" as const, label: "Full Name", type: "text", placeholder: "Alexandra Monroe" },
                    { name: "email" as const, label: "Email Address", type: "email", placeholder: "you@example.com" },
                    { name: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+1 234 567 8900" },
                  ] as const).map((f) => (
                    <div key={f.name} className={f.name === "phone" ? "md:col-span-2" : ""}>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">{f.label}</label>
                      <input {...register(f.name)} type={f.type} placeholder={f.placeholder}
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300" />
                      {errors[f.name] && <p className="text-xs text-red-500 mt-1">{errors[f.name]?.message}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Event Type</label>
                    <select {...register("eventType")} className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors">
                      <option value="">Select type</option>
                      {["Wedding","Corporate Retreat","Private Celebration","Product Launch","Other"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Event Date</label>
                    <input {...register("eventDate")} type="date" className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Guest Count</label>
                    <select {...register("guestCount")} className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors">
                      <option value="">Select count</option>
                      {["1-20","21-50","51-100","101-200","200+"].map(c => <option key={c} value={c}>{c} guests</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Budget Range</label>
                    <select {...register("budget")} className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors">
                      <option value="">Select range</option>
                      {["$10,000–25,000","$25,000–75,000","$75,000–150,000","$150,000+"].map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Tell Us About Your Vision</label>
                    <textarea {...register("message")} rows={4} placeholder="Share your dream event — themes, requirements, special requests..."
                      className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors resize-none placeholder:text-neutral-300" />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>
                </div>
                <button type="submit" className="w-full bg-neutral-900 hover:bg-red-600 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2">
                  Submit Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
