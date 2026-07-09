"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "Tourist Attractions", href: "/tourist" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        {/* Error Code */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="text-[120px] sm:text-[160px] md:text-[200px] font-light text-white/[0.04] leading-none select-none pointer-events-none">
            404
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">Page Not Found</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight mb-6"
        >
          This page has{" "}
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 not-italic font-normal">
            checked out
          </em>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-12"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find your way back to comfort.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:scale-105 transition-all duration-300"
          >
            <Home className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase backdrop-blur-sm hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Go Back
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <p className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-5">
            Quick Navigation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-red-400 font-light tracking-wider transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} className="mt-16 pt-8 border-t border-white/5">
          <p className="text-[10px] text-neutral-600 font-light tracking-wider">
            Need help? Call us at{" "}
            <a href="tel:+919773302154" className="text-neutral-400 hover:text-red-400 transition-colors">
              +91 9773 30 21 54
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
