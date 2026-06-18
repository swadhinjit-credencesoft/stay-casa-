"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Maximize2, Users, ArrowRight } from "lucide-react";
import { RoomSuite } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";

interface RoomCardProps {
  room: RoomSuite;
  index?: number;
}

export default function RoomCard({ room, index = 0 }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group rounded-2xl overflow-hidden bg-white shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64 bg-neutral-100">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* View badge */}
        <span className="absolute top-4 left-4 text-[9px] font-semibold tracking-widest uppercase bg-white/90 backdrop-blur-sm text-neutral-700 px-3 py-1 rounded-full border border-white/50">
          {room.view} View
        </span>
        {/* Price overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-light text-neutral-900 tracking-tight mb-1">{room.name}</h3>
        <p className="text-sm text-neutral-500 font-light mb-4 line-clamp-2">{room.tagline}</p>

        {/* Specs row */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Maximize2 className="w-3.5 h-3.5 text-red-400" />
            <span>{room.size} sqm</span>
          </div>
          <div className="w-px h-3.5 bg-neutral-200" />
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Users className="w-3.5 h-3.5 text-red-400" />
            <span>Up to {room.occupancy} guests</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between pt-4 border-t border-neutral-100">
          <div>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium block mb-0.5">
              From
            </span>
            <span className="text-2xl font-light text-neutral-900">
              {formatCurrency(room.price)}
            </span>
            <span className="text-xs text-neutral-400 ml-1">/ night</span>
          </div>
          <Link
            href={`/rooms/${room.slug}`}
            className="group/btn inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-white border border-red-200 hover:bg-red-600 hover:border-red-600 px-4 py-2.5 rounded-sm transition-all duration-300"
          >
            View Suite
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
