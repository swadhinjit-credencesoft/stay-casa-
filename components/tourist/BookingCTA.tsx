import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { bookingCtaData } from "@/lib/tourist-data";

export default function BookingCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-neutral-950 text-center">
      <div className="absolute inset-0">
        <img
          src={bookingCtaData.backgroundImage}
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
            {bookingCtaData.tagline}
          </span>
          <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
            {bookingCtaData.title}
          </h2>
          <p className="text-neutral-300 font-light mb-10 text-lg max-w-xl mx-auto">
            {bookingCtaData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={bookingCtaData.primaryButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
            >
              {bookingCtaData.primaryButton.label}
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href={bookingCtaData.secondaryButton.href}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white/80 hover:text-white px-10 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              {bookingCtaData.secondaryButton.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
