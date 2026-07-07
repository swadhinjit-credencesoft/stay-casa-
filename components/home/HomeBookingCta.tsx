import Link from "next/link";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { bookingCtaData } from "@/lib/data/home";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";

export default function HomeBookingCta() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <img
          src={bookingCtaData.image}
          alt="Hotel Stay Casa Inn suite"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/60" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">
            {bookingCtaData.tag}
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
            {bookingCtaData.heading}
          </h2>
          <p className="text-neutral-300 font-light mb-10 text-lg">
            {bookingCtaData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-10 py-4.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-2xl shadow-red-600/30 hover:shadow-red-600/60 hover:scale-105 transition-all duration-300"
            >
              Book Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 border border-white/30 hover:border-red-500/60 text-white/80 hover:text-white px-9 py-4.5 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm hover:bg-white/5 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
