"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, Phone, ExternalLink, Mail, X } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";

const actions = [
  {
    label: "WhatsApp",
    href: "https://wa.me/9773302154",
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
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
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
                    className={`${action.bg} text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3 text-xs font-semibold tracking-widest uppercase transition-all hover:scale-105`}
                  >
                    <Icon className="w-4 h-4" />
                    {action.label}
                  </a>
                );
              })}
            </motion.div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label={open ? "Close menu" : "Quick actions"}
          >
            {open ? <X className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
