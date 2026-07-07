"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ExternalLink, Mail, X, Sparkles, ArrowRight } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";

const waMsg =
  "This is an Enquiry from : The HotelMate Website" +
  "\nHotel Name: Stay Casa Inn," +
  "\nProperty Id: 3576," +
  "\nexternalSite: WebSite," +
  "\nAddress: 112, New Sanganer Rd, Katewa Nagar, Sodala, Gurjar Ki Thadi, Jaipur, Rajasthan 302006";
const waUrl = "https://api.whatsapp.com/send?phone=9773302154&text=" + encodeURIComponent(waMsg);

const actions = [
  {
    label: "WhatsApp",
    href: waUrl,
    icon: MessageCircle,
    accent: "text-green-400",
    ring: "ring-green-500/30 group-hover:ring-green-400/60",
    bgGlow: "group-hover:bg-green-500/5",
  },
  {
    label: "Call",
    href: "tel:+919773302154",
    icon: Phone,
    accent: "text-blue-400",
    ring: "ring-blue-500/30 group-hover:ring-blue-400/60",
    bgGlow: "group-hover:bg-blue-500/5",
  },
  {
    label: "Email",
    href: "mailto:info@hotelstaycasainn.com",
    icon: Mail,
    accent: "text-amber-400",
    ring: "ring-amber-500/30 group-hover:ring-amber-400/60",
    bgGlow: "group-hover:bg-amber-500/5",
  },
];

const panelVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    filter: "blur(2px)",
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.05, type: "spring" as const, stiffness: 350, damping: 26 },
  }),
};

export default function FloatingBooking() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [initialShow, setInitialShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInitialShow(true), 2500);
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const show = visible || initialShow;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.6, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(6px)" }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                key="panel"
                variants={panelVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="w-72 origin-bottom-right"
              >
                <div className="relative bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-2xl border border-white/[0.06] shadow-[0_0_100px_rgba(0,0,0,0.7),0_0_40px_rgba(239,68,68,0.06)] overflow-hidden">
                  {/* Top accent glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

                  {/* Header */}
                  <div className="relative px-5 pt-5 pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-1 h-4 bg-red-500 rounded-full" />
                      <span className="text-[9px] font-bold tracking-[0.35em] text-red-400 uppercase">
                        Concierge
                      </span>
                    </div>
                    <p className="text-[12px] text-neutral-500 font-light ml-3">
                      24/7 — How can we assist?
                    </p>
                  </div>

                  {/* Subtle divider */}
                  <div className="mx-5 h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent" />

                  {/* Action items */}
                  <div className="p-2.5 space-y-1">
                    {actions.map((action, i) => {
                      const Icon = action.icon;
                      return (
                        <motion.a
                          key={action.label}
                          href={action.href}
                          target={action.href.startsWith("http") ? "_blank" : undefined}
                          rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          custom={i}
                          variants={itemVariants}
                          initial="hidden"
                          animate="show"
                          className={`group flex items-center justify-between px-3.5 py-3 rounded-xl ${action.bgGlow} transition-all duration-300 cursor-pointer`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-xl ring-1 ${action.ring} bg-white/[0.03] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.06]`}>
                              <Icon className={`w-4 h-4 ${action.accent} transition-all duration-300`} />
                            </div>
                            <span className="text-[13px] text-neutral-300 font-medium tracking-wide group-hover:text-white transition-colors">
                              {action.label}
                            </span>
                          </div>
                          <ArrowRight className={`w-3.5 h-3.5 text-neutral-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${action.accent}`} />
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Book Now CTA */}
                  <div className="px-2.5 pb-2.5 pt-1">
                    <div className="mx-1 mb-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <motion.a
                      href={BOOKING_ENGINE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={3}
                      variants={itemVariants}
                      initial="hidden"
                      animate="show"
                      className="group relative block overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:via-rose-500 hover:to-red-600 shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-500"
                    >
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                      <div className="relative flex items-center justify-between px-4 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-white font-bold tracking-[0.2em] uppercase">
                            Book Now
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative flex items-center gap-4">
            <AnimatePresence>
              {!open && (
                <motion.div
                  initial={{ opacity: 0, x: 24, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 24, scale: 0.9 }}
                  transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
                  className="flex items-center gap-2.5 bg-gradient-to-r from-red-500 to-red-700 text-white text-[11px] font-bold tracking-[0.25em] uppercase px-6 py-3 rounded-full shadow-2xl shadow-red-600/30 border border-white/10"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={!open ? { scale: [1, 1.04, 1] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex-shrink-0"
            >
              {/* Cinematic multi-layer glow */}
              <div
                className={`absolute -inset-4 rounded-full bg-gradient-to-br from-red-500/20 via-red-600/10 to-transparent blur-xl transition-opacity duration-500 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <div
                className={`absolute -inset-[6px] rounded-full border-2 border-red-500/20 animate-ping ${open ? "opacity-0" : ""}`}
                style={{ animationDuration: "3s" }}
              />
              <div
                className={`absolute -inset-4 rounded-full border border-red-500/10 animate-ping ${open ? "opacity-0" : ""}`}
                style={{ animationDuration: "4s", animationDelay: "0.5s" }}
              />
              <div
                className={`absolute -inset-7 rounded-full border border-red-400/5 animate-ping ${open ? "opacity-0" : ""}`}
                style={{ animationDuration: "5s", animationDelay: "1s" }}
              />

              {/* Button inner ring */}
              <div className="absolute inset-[2px] rounded-full ring-1 ring-white/[0.08] pointer-events-none" />

              {/* Shimmer overlay */}
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent animate-pulse pointer-events-none" />

              <button
                onClick={() => setOpen(!open)}
                className="relative w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white shadow-[0_0_50px_rgba(239,68,68,0.3)] hover:shadow-[0_0_80px_rgba(239,68,68,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label={open ? "Close menu" : "Quick actions"}
              >
                {open ? (
                  <X className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                  <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />
                )}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
