"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { roomsSuites } from "@/lib/mockData";
import RoomCard from "@/components/rooms/RoomCard";
import RoomFilters from "@/components/rooms/RoomFilters";

function RoomsClient() {
  const [view, setView] = useState("All");
  const [priceMax, setPriceMax] = useState(10000);
  const [occupancy, setOccupancy] = useState(0);

  const handleFilterChange = (v: string, p: number, o: number) => {
    setView(v);
    setPriceMax(p);
    setOccupancy(o);
  };

  const filtered = roomsSuites.filter((r) => {
    const viewMatch = view === "All" || r.view === view;
    const priceMatch = r.price <= priceMax;
    const occMatch = occupancy === 0 || r.occupancy >= occupancy;
    return viewMatch && priceMatch && occMatch;
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-neutral-950 pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2000"
            alt="Resort suites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 to-neutral-950" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-red-400">Suites & Rooms</span>
          </nav>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">
            Our Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            Suites & Rooms
          </h1>
          <p className="text-neutral-400 font-light mt-4 max-w-xl">
            Each suite is a self-contained world — distinct in character, united by exceptional comfort.
          </p>
        </div>
      </section>

      {/* Filters */}
      <RoomFilters onFilterChange={handleFilterChange} />

      {/* Grid */}
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-neutral-400 text-lg font-light">No suites match your current filters.</p>
              <button
                onClick={() => handleFilterChange("All", 10000, 0)}
                className="mt-4 text-xs text-red-600 font-semibold tracking-widest uppercase underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((room, i) => (
                <RoomCard key={room.id} room={room} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function RoomsPage() {
  return <RoomsClient />;
}
