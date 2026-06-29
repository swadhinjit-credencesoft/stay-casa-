"use client";

import { useState } from "react";
import { roomsSuites } from "@/lib/mockData";
import RoomCard from "@/components/rooms/RoomCard";
import RoomFilters from "@/components/rooms/RoomFilters";
import { emptyState } from "@/lib/data/rooms";

export default function RoomsContent() {
  const [view, setView] = useState("All");
  const [priceMax, setPriceMax] = useState(5000);
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
      <RoomFilters onFilterChange={handleFilterChange} />
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-neutral-400 text-lg font-light">{emptyState.message}</p>
              <button
                onClick={() => handleFilterChange("All", 5000, 0)}
                className="mt-4 text-xs text-red-600 font-semibold tracking-widest uppercase underline"
              >
                {emptyState.resetLabel}
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
