"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98290 76894",
    href: "tel:+919829076894",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@hotelstaycasainn.com",
    href: "mailto:info@hotelstaycasainn.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "R-3-50 North Part, Indraprasth Colony, Sodala, Jaipur",
    href: "https://maps.google.com",
  },
];

export default function ContactPage() {
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
            href="https://wa.me/919829076894"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Open WhatsApp
          </a>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <SectionHeading tag="Find Us" title="Our Location" align="center" />
          </div>
          <div className="max-w-xl mx-auto bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center">
            <MapPin className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <p className="text-lg font-light text-neutral-900 mb-1">R-3-50 North Part</p>
            <p className="text-neutral-500 font-light">Indraprasth Colony, Chordia City</p>
            <p className="text-neutral-500 font-light">Sodala, Jaipur</p>
            <a
              href="https://maps.google.com/?q=R-3-50+North+Part+Indraprasth+Colony+Sodala+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 text-xs font-semibold tracking-widest uppercase transition-all duration-300 mt-6"
            >
              <MapPin className="w-3.5 h-3.5" />
              View on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
