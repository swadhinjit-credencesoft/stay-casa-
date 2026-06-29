import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roomsSuites } from "@/lib/mockData";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { RoomCard } from "@/components/HomePageClient";

export default function FeaturedSuites() {
  return (
    <section className="py-24 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            tag="Suites & Rooms"
            title="Our Rooms"
            subtitle="Each room is thoughtfully designed for comfort and relaxation — distinct in character, united in quality."
          />
          <ScrollReveal direction="right">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 transition-all shrink-0"
            >
              View All Rooms <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsSuites.slice(0, 3).map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
