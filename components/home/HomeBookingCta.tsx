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
  );
}
