import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { RoomSuite } from "@/lib/mockData";
import { labels } from "@/lib/data/rooms-detail";

interface Props {
  room: RoomSuite;
}

export default function RoomDetailHero({ room }: Props) {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <img
        src={room.images[0]}
        alt={room.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-neutral-950/40" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 max-w-7xl mx-auto w-full">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-widest uppercase mb-6 transition-colors w-fit"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> {labels.backToSuites}
        </Link>
        <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-2 block">
          {room.view} {labels.viewPrefix} · {room.size} {labels.sizeSuffix}
        </span>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
          {room.name}
        </h1>
        <p className="text-neutral-200/70 font-light mt-3 max-w-lg">{room.tagline}</p>
      </div>
    </section>
  );
}
