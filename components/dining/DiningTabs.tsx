"use client";

import type { Restaurant } from "@/lib/mockData";
import { cn } from "@/lib/utils";

interface DiningTabsProps {
  restaurants: Restaurant[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export default function DiningTabs({
  restaurants,
  activeTab,
  onTabChange,
}: DiningTabsProps) {
  return (
    <section className="bg-neutral-950 px-6 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex gap-0">
        {restaurants.map((r) => (
          <button
            key={r.id}
            onClick={() => onTabChange(r.id)}
            className={cn(
              "px-6 py-4 text-xs font-semibold tracking-widest uppercase border-b-2 transition-all duration-200",
              activeTab === r.id
                ? "border-red-500 text-red-400"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            )}
          >
            {r.name}
          </button>
        ))}
      </div>
    </section>
  );
}
