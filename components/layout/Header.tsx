"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/useUiStore";

const navLinks = [
  { name: "Rooms", href: "/rooms" },
  { name: "Experiences", href: "/experiences" },
  // { name: "Dining", href: "/dining" },
  { name: "events", href: "/events" },
  { name: "gallery", href: "/gallery" },
  { name: "about", href: "/about" },
   { name: "contact", href: "/contact" },
];

const fullscreenLinks = [
  { name: "Home", href: "/" },
  { name: "Our Philosophy & Heritage", href: "/about" },
  { name: "Suites & Rooms", href: "/rooms" },
  { name: "Curated Experiences", href: "/experiences" },
  // { name: "Culinary Hearth & Omakase", href: "/dining" },
  { name: "Subterranean Spa & Wellness", href: "/spa" },
  { name: "Visual Media Gallery", href: "/gallery" },
  { name: "Weddings & Celebrations", href: "/events" },
  { name: "Exclusive Offers", href: "/offers" },
  { name: "The Resort Journal", href: "/blog" },
  { name: "Contact & Concierge", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const setQuickBookingOpen = useUiStore((state) => state.setQuickBookingOpen);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on link click
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100/50 transition-all duration-300">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start z-50">
            <span className="text-xl lg:text-2xl font-light tracking-[0.3em] text-neutral-900 uppercase">
              S T A Y
            </span>
            <span className="text-[9px] tracking-[0.5em] text-red-500 uppercase mt-0.5 ml-0.5">
              C A S A  I N N
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-sm font-medium tracking-widest text-neutral-800 hover:text-neutral-900 transition-colors uppercase py-2"
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[1.5px] bg-red-600 origin-left transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 z-50">
            {/* Quick Reserve CTA */}
            <button
              onClick={() => setQuickBookingOpen(true)}
              className="hidden sm:flex items-center space-x-2 border border-neutral-300 hover:border-red-600 hover:bg-red-600 hover:text-white px-5 py-2.5 rounded-sm transition-all duration-300 text-xs font-semibold tracking-widest uppercase text-neutral-800"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>

            {/* Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200/50 hover:bg-neutral-900 hover:text-white transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-neutral-900 text-neutral-100 z-40 flex flex-col justify-between p-8 lg:p-16 overflow-y-auto"
          >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-24">
              
              {/* Left Column: Brand Context / Concierge */}
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800 pb-8 lg:pb-0 lg:pr-12">
                <div>
                  <h3 className="text-xs tracking-[0.4em] text-red-500 uppercase mb-4">
                    The Concierge Desk
                  </h3>
                  <p className="text-xl text-neutral-300 font-light leading-relaxed max-w-sm mb-6">
                    Allow us to curate your journey. Custom itineraries, private charters, and dietary preferences can all be structured prior to your arrival.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-neutral-400">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span className="text-sm tracking-wider">+1 800 STAY CASA</span>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-400">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <span className="text-sm tracking-wider">concierge@hotelstaycasainn.com</span>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setQuickBookingOpen(true);
                      }}
                      className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-red-500 hover:text-red-400 uppercase transition-all"
                    >
                      <span>Plan Your Stay</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Main Links */}
              <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                <h3 className="text-xs tracking-[0.4em] text-neutral-500 uppercase mb-6">
                  Navigate Resort
                </h3>
                <nav className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {fullscreenLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "group inline-flex items-center space-x-2 text-lg lg:text-xl font-light tracking-wide py-1.5 transition-colors uppercase",
                            isActive
                              ? "text-red-500 font-normal"
                              : "text-neutral-300 hover:text-white"
                          )}
                        >
                          <span className="w-1.5 h-1.5 bg-red-600 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full max-w-7xl mx-auto border-t border-neutral-800 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 tracking-widest uppercase">
              <span>© {new Date().getFullYear()} HOTEL STAY CASA INN. ALL RIGHTS RESERVED.</span>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
