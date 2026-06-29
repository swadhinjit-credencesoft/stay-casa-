import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { heroContent } from "@/lib/data/rooms";

export default function RoomsHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroContent.backgroundImage}
          alt={heroContent.backgroundAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-8" aria-label="Breadcrumb">
          <Link href={heroContent.breadcrumb.homeHref} className="hover:text-white flex items-center gap-1 transition-colors">
            <Home className="w-3 h-3" /> {heroContent.breadcrumb.homeLabel}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-red-400">{heroContent.breadcrumb.currentLabel}</span>
        </nav>
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">
          {heroContent.tag}
        </span>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
          {heroContent.title}
        </h1>
        <p className="text-neutral-400 font-light mt-4 max-w-xl">
          {heroContent.description}
        </p>
      </div>
    </section>
  );
}
