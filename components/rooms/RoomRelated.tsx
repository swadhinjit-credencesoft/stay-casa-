import Link from "next/link";
import type { RoomSuite } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";
import { labels } from "@/lib/data/rooms-detail";

interface Props {
  rooms: RoomSuite[];
}

export default function RoomRelated({ rooms }: Props) {
  return (
    <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-8">{labels.youMayAlsoLove}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((r) => (
            <Link key={r.id} href={`/rooms/${r.slug}`} className="group">
              <div className="rounded-2xl overflow-hidden bg-white shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.images[0]}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-light">{r.name}</p>
                    <p className="text-red-300 text-xs">{formatCurrency(r.price)}/{labels.perNightShort}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
