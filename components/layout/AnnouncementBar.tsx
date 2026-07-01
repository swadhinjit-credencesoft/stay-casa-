"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";

const messages = [
  "✨ Book Direct for Best Rates Guaranteed",
  "🏨 Comfortable Rooms from ₹1,350/night",
  "📍 Prime Location in Keshopura, Jaipur",
  "📶 Free High-Speed Wi-Fi in All Rooms",
];

export default function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase overflow-hidden h-9 sm:h-10">
      <div className="flex h-full">
        <a
          href={BOOKING_ENGINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-5 bg-red-800/50 shrink-0 hover:bg-red-800 transition-colors"
        >
          <Sparkles className="w-3 h-3" />
          <span>Special Offer</span>
        </a>
        <div className="flex items-center overflow-hidden flex-1 relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 px-6"
          >
            {[...messages, ...messages].map((msg, i) => (
              <a
                key={i}
                href={BOOKING_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-200 transition-colors flex items-center gap-2"
              >
                <span className="text-red-200">|</span>
                {msg}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
