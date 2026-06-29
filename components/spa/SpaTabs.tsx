"use client";
import { cn } from "@/lib/utils";
import { spaCategories } from "@/lib/data/spa";

interface SpaTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SpaTabs({ activeTab, setActiveTab }: SpaTabsProps) {
  return (
    <section className="bg-neutral-950 px-6 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex gap-0">
        {spaCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              "px-6 py-4 text-xs font-semibold tracking-widest uppercase border-b-2 transition-all duration-200 capitalize",
              activeTab === cat
                ? "border-red-500 text-red-400"
                : "border-transparent text-neutral-500 hover:text-neutral-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
