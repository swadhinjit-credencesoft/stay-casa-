"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "Select inquiry type"),
  subject: z.string().min(3, "Subject required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    label: "Reservations",
    value: "+1 800 AMAN SANCTUARY",
    href: "tel:+18002626272",
  },
  {
    icon: Mail,
    label: "Concierge Email",
    value: "reservations@amansanctuary.com",
    href: "mailto:reservations@amansanctuary.com",
  },
  {
    icon: MapPin,
    label: "Resort Address",
    value: "100 Volcano Crest Road, East Peninsula Cove, Atlantic Coast",
    href: "https://maps.google.com",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => setSubmitted(true);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-950 pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">We're Here</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Contact & Concierge</h1>
          <p className="text-neutral-400 font-light mt-5 max-w-xl mx-auto text-lg">
            Our dedicated concierge team is available 24 hours a day to assist with any aspect of your stay or enquiry.
          </p>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="py-12 px-6 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 border border-neutral-100 rounded-2xl bg-white shadow-soft-premium hover:shadow-depth-xl hover:border-red-100 transition-all duration-500"
              >
                <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-700 font-light">{item.value}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-10 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-950/50 rounded-xl border border-green-900/30">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-white font-light text-lg">Chat on WhatsApp</p>
              <p className="text-neutral-400 text-sm font-light">Average response under 3 minutes for urgent enquiries</p>
            </div>
          </div>
          <a
            href="https://wa.me/18005551234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Open WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-20 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <SectionHeading tag="Send a Message" title="Get In Touch" subtitle="Our concierge will respond within 2 hours during business hours." />
            <div className="mt-10">
              {submitted ? (
                <div className="text-center py-16 border border-neutral-200 rounded-2xl bg-white shadow-soft-premium">
                  <div className="w-14 h-14 rounded-full bg-red-50 border-2 border-red-500 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-light text-neutral-900 mb-3">Message Received</h3>
                  <p className="text-neutral-500 font-light">Our concierge team will respond within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Full Name</label>
                      <input {...register("fullName")} placeholder="Alexandra Monroe"
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300" />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Email Address</label>
                      <input {...register("email")} type="email" placeholder="you@example.com"
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300" />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Phone (Optional)</label>
                      <input {...register("phone")} type="tel" placeholder="+1 234 567 8900"
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Inquiry Type</label>
                      <select {...register("inquiryType")} className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors">
                        <option value="">Select type</option>
                        {["Reservation","Dining","Spa","Wedding","Corporate","General"].map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.inquiryType && <p className="text-xs text-red-500 mt-1">{errors.inquiryType.message}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Subject</label>
                      <input {...register("subject")} placeholder="How can we help?"
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300" />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Your Message</label>
                      <textarea {...register("message")} rows={5} placeholder="Tell us how we can assist you..."
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors resize-none placeholder:text-neutral-300" />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-neutral-900 hover:bg-red-600 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2">
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="flex flex-col gap-6">
            <SectionHeading tag="Find Us" title="Our Location" />
            <div className="flex-1 min-h-[400px] bg-neutral-900 rounded-2xl border border-neutral-800 flex flex-col items-center justify-center text-center p-8 gap-4">
              <MapPin className="w-12 h-12 text-red-500/60" />
              <div>
                <p className="text-white font-light text-lg mb-1">100 Volcano Crest Road</p>
                <p className="text-neutral-400 text-sm font-light">East Peninsula Cove, Atlantic Coast 90210</p>
                <p className="text-neutral-500 text-xs mt-1">Coordinates: 32.1234°N, 64.1234°W</p>
              </div>
              <a
                href="https://maps.google.com/?q=32.12345,-64.12345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500 text-white hover:text-red-400 px-6 py-3 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300 mt-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
