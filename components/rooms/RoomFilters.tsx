"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

interface RoomFiltersProps {
  onFilterChange: (view: string, priceMax: number, occupancy: number) => void;
}

const viewOptions = ["All", "Ocean", "Garden", "Ocean & Mountain", "Ocean & Cove"];
const occupancyOptions = [0, 2, 3, 4];

export default function RoomFilters({ onFilterChange }: RoomFiltersProps) {
  const [activeView, setActiveView] = useState("All");
  const [priceMax, setPriceMax] = useState(10000);
  const [occupancy, setOccupancy] = useState(0);

  const handleViewChange = (view: string) => {
    setActiveView(view);
    onFilterChange(view, priceMax, occupancy);
  };

  const handlePriceChange = (val: number) => {
    setPriceMax(val);
    onFilterChange(activeView, val, occupancy);
  };

  const handleOccupancyChange = (val: number) => {
    setOccupancy(val);
    onFilterChange(activeView, priceMax, val);
  };

  return (
    <div className="bg-white border-b border-neutral-100 sticky top-[72px] z-30 shadow-soft-premium">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">

          {/* Filter label */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-red-500" />
            Filter By
          </div>

          {/* View Filter */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] tracking-widest text-neutral-400 uppercase font-semibold">View</span>
            <div className="flex flex-wrap gap-2">
              {viewOptions.map((v) => (
                <button
                  key={v}
                  onClick={() => handleViewChange(v)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-200",
                    activeView === v
                      ? "bg-red-600 border-red-600 text-white"
                      : "border-neutral-200 text-neutral-600 hover:border-red-400 hover:text-red-600"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-neutral-100" />

          {/* Occupancy Filter */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[9px] tracking-widest text-neutral-400 uppercase font-semibold">Guests</span>
            <div className="flex gap-2">
              {occupancyOptions.map((o) => (
                <button
                  key={o}
                  onClick={() => handleOccupancyChange(o)}
                  className={cn(
                    "w-9 h-9 rounded-full text-xs font-semibold border transition-all duration-200",
                    occupancy === o
                      ? "bg-red-600 border-red-600 text-white"
                      : "border-neutral-200 text-neutral-600 hover:border-red-400"
                  )}
                >
                  {o === 0 ? "All" : o === 4 ? "4+" : o}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-10 bg-neutral-100" />

          {/* Price Range */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
            <span className="text-[9px] tracking-widest text-neutral-400 uppercase font-semibold">
              Max Price: <span className="text-red-600 font-bold">${priceMax.toLocaleString()}/night</span>
            </span>
            <input
              type="range"
              min={500}
              max={10000}
              step={100}
              value={priceMax}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:shadow-md"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
