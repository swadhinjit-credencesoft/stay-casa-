"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ExternalLink, Mail, X } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";

const waMsg =
  "This is an Enquiry from : The HotelMate Website" +
  "\nHotel Name: Stay Casa Inn," +
  "\nProperty Id: 3576," +
  "\nexternalSite: WebSite," +
  "\nAddress: R-3-50 North Part, Indraprasth Colony, Chordia City, Sodala, Jaipur, India";
const waUrl = "https://api.whatsapp.com/send?phone=9773302154&text=" + encodeURIComponent(waMsg);

const actions = [
  {
    label: "WhatsApp",
    href: waUrl,
    icon: MessageCircle,
    bg: "bg-green-500 hover:bg-green-600",
  },
  {
    label: "Call",
    href: "tel:+919773302154",
    icon: Phone,
    bg: "bg-blue-500 hover:bg-blue-600",
  },
  {
    label: "Email",
    href: "mailto:info@hotelstaycasainn.com",
    icon: Mail,
    bg: "bg-amber-500 hover:bg-amber-600",
  },
  {
    label: "Book Now",
    href: BOOKING_ENGINE_URL,
    icon: ExternalLink,
    bg: "bg-red-600 hover:bg-red-700",
  },
];

export default function FloatingBooking() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
        >
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex flex-col gap-2"
            >
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.href.startsWith("http") ? "_blank" : undefined}
                    rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`${action.bg} text-white pl-5 pr-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3.5 text-xs font-semibold tracking-widest uppercase transition-all hover:scale-105 hover:shadow-2xl`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                    <span className="pr-1">{action.label}</span>
                  </a>
                );
              })}
            </motion.div>
          )}

          <div className="relative flex items-center gap-4">
            <AnimatePresence>
              {!open && (
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-red-600 text-white text-xs font-bold tracking-[0.2em] uppercase px-5 py-3 rounded-full shadow-2xl border border-red-400/30"
                >
                  Book Now
                </motion.span>
              )}
            </AnimatePresence>

            <motion.div
              animate={!open ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Multiple pulsing rings */}
              <div
                className={`absolute -inset-3 rounded-full border-2 border-red-400/30 animate-ping ${open ? "opacity-0" : ""}`}
                style={{ animationDuration: "2.5s" }}
              />
              <div
                className={`absolute -inset-5 rounded-full border border-red-400/20 animate-ping ${open ? "opacity-0" : ""}`}
                style={{ animationDuration: "3s", animationDelay: "0.3s" }}
              />

              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/15 to-white/0 animate-pulse pointer-events-none" />

              <button
                onClick={() => setOpen(!open)}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label={open ? "Close menu" : "Quick actions"}
              >
                {open ? (
                  <X className="w-7 h-7" />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-9 sm:h-9">
                    {/* Bed / Hotel icon */}
                    <path d="M3 7v11" />
                    <path d="M21 7v11" />
                    <path d="M3 18h18" />
                    <rect x="6" y="10" width="12" height="4" rx="1" />
                    <path d="M8 10V7" />
                    <path d="M16 10V7" />
                    <circle cx="8" cy="6" r="1" fill="currentColor" />
                    <circle cx="16" cy="6" r="1" fill="currentColor" />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
