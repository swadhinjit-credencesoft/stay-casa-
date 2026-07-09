"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, Users, ArrowRight, ExternalLink } from "lucide-react";
import { BOOKING_ENGINE_URL, buildBookingUrl } from "@/lib/bookone";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

function formatInput(d: Date | null) {
  return d ? d.toISOString().split("T")[0] : "";
}

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const phrases = [
    "Comfortable rooms in the heart of Jaipur",
    "Free Wi-Fi & air conditioning in every room",
    "24-hour front desk & room service",
    "Just minutes from Jaipur Airport",
    "Warm hospitality, affordable luxury",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const today = new Date();
  const twoDaysLater = new Date();
  twoDaysLater.setDate(today.getDate() + 2);
  const [checkIn, setCheckIn] = useState<Date | null>(today);
  const [checkOut, setCheckOut] = useState<Date | null>(twoDaysLater);
  const [guests, setGuests] = useState(2);

  const handleCheckRates = () => {
    if (!checkIn || !checkOut) return;
    const url = buildBookingUrl(checkIn, checkOut, guests);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="/DSC_3842-HDR.jpg.avif"
          alt="Hotel Stay Casa Inn aerial view"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/50 to-neutral-950/90"
      />

      {/* Subtle red radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08)_0%,transparent_70%)]" />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto pt-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Hero Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-light text-white leading-[0.92] tracking-tight text-balance mb-6"
        >
          Where Comfort
          <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 not-italic">
            Meets
          </em>{" "}
          Luxury
        </motion.h1>

        {/* Rotating Subtitle */}
        <motion.div variants={fadeUp} className="h-16 sm:h-12 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-sm sm:text-base text-white/80 font-normal max-w-xl leading-relaxed text-center"
            >
              {phrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-6"
        >
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-white/70 tracking-wider font-medium">Top Rated in Sodala</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-10 py-4.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-2xl shadow-red-600/30 hover:shadow-red-600/60 hover:scale-105 transition-all duration-300"
          >
            Book Your Stay
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-2.5 border border-white/30 hover:border-red-500/60 text-white/80 hover:text-white px-9 py-4.5 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm hover:bg-white/5 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Suites
          </Link>
        </motion.div>

        {/* Quick Booking Strip */}
        <motion.div
          variants={fadeUp}
          className="w-full max-w-4xl bg-glass-dark rounded-sm border border-white/10 p-1"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden">
            {/* Check In */}
            <div className="bg-neutral-950/80 px-4 py-3 flex flex-col gap-1 focus-within:bg-neutral-900/80 transition-colors">
              <label className="text-[9px] font-bold tracking-[0.3em] text-red-400 uppercase flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Check In
              </label>
              <input
                type="date"
                value={formatInput(checkIn)}
                onChange={(e) => setCheckIn(e.target.value ? new Date(e.target.value) : null)}
                min={new Date().toISOString().split("T")[0]}
                className="bg-transparent text-white text-sm font-light tracking-wide outline-none border-none cursor-pointer w-full"
              />
            </div>
            {/* Check Out */}
            <div className="bg-neutral-950/80 px-4 py-3 flex flex-col gap-1 focus-within:bg-neutral-900/80 transition-colors">
              <label className="text-[9px] font-bold tracking-[0.3em] text-red-400 uppercase flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Check Out
              </label>
              <input
                type="date"
                value={formatInput(checkOut)}
                onChange={(e) => setCheckOut(e.target.value ? new Date(e.target.value) : null)}
                min={formatInput(checkIn) || new Date().toISOString().split("T")[0]}
                className="bg-transparent text-white text-sm font-light tracking-wide outline-none border-none cursor-pointer w-full"
              />
            </div>
            {/* Guests */}
            <div className="bg-neutral-950/80 px-4 py-3 flex flex-col gap-1">
              <label className="text-[9px] font-bold tracking-[0.3em] text-red-400 uppercase flex items-center gap-1">
                <Users className="w-3 h-3" /> Guests
              </label>
              <div className="flex items-center gap-2 mt-0.5">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-5 h-5 border border-white/20 rounded-full text-white/60 hover:text-white text-xs flex items-center justify-center"
                >
                  -
                </button>
                <span className="text-white text-sm font-light">{guests} Guest{guests !== 1 ? "s" : ""}</span>
                <button
                  onClick={() => setGuests(Math.min(6, guests + 1))}
                  className="w-5 h-5 border border-white/20 rounded-full text-white/60 hover:text-white text-xs flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            {/* Check Rates CTA */}
            <button
              onClick={handleCheckRates}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
            >
              Check Rates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-medium">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
