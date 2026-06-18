"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Calendar, Users, ArrowRight } from "lucide-react";
import { useBookingStore } from "@/store/useBookingStore";
import { useUiStore } from "@/store/useUiStore";

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

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2 } },
};

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const { checkIn, checkOut, guests, setDates, setGuests } = useBookingStore();
  const { setQuickBookingOpen } = useUiStore();

  const formatInput = (d: Date | null) => (d ? d.toISOString().split("T")[0] : "");

  React.useEffect(() => {
    if (!checkIn) {
      const t = new Date();
      const t2 = new Date();
      t2.setDate(t.getDate() + 3);
      setDates(t, t2);
    }
  }, [checkIn, setDates]);

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
          alt="Aman Sanctuary aerial view"
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
        {/* Location Tag */}
        <motion.div variants={fadeIn} className="mb-8">
          <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-medium tracking-[0.4em] text-red-400 uppercase border border-red-500/30 rounded-full px-5 py-2 bg-red-950/20 backdrop-blur-sm">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
            Atlantic Coast &nbsp;·&nbsp; Volcanic Cove &nbsp;·&nbsp; Private Peninsula
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-light text-white leading-[0.92] tracking-tight text-balance mb-6"
        >
          Where Silence
          <br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 not-italic">
            Becomes
          </em>{" "}
          Luxury
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-neutral-300/80 font-light max-w-xl leading-relaxed mb-12"
        >
          Twelve private pavilions suspended above the Atlantic. Subterranean
          sound healing caves. A culinary philosophy rooted in fire and silence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => setQuickBookingOpen(true)}
            className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]"
          >
            <Calendar className="w-4 h-4" />
            Reserve Your Pavilion
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="/rooms"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/60 text-white/80 hover:text-white px-8 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
          >
            Explore Suites
          </a>
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
                onChange={(e) => setDates(e.target.value ? new Date(e.target.value) : null, checkOut)}
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
                onChange={(e) => setDates(checkIn, e.target.value ? new Date(e.target.value) : null)}
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
                <button onClick={() => setGuests(Math.max(1, guests.adults - 1), guests.children)} className="w-5 h-5 border border-white/20 rounded-full text-white/60 hover:text-white text-xs flex items-center justify-center">-</button>
                <span className="text-white text-sm font-light">{guests.adults + guests.children} Guest{guests.adults + guests.children !== 1 ? "s" : ""}</span>
                <button onClick={() => setGuests(Math.min(6, guests.adults + 1), guests.children)} className="w-5 h-5 border border-white/20 rounded-full text-white/60 hover:text-white text-xs flex items-center justify-center">+</button>
              </div>
            </div>
            {/* Reserve CTA */}
            <button
              onClick={() => setQuickBookingOpen(true)}
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
