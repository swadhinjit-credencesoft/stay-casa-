import Link from "next/link";
import type { RoomSuite } from "@/lib/mockData";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";
import { formatCurrency } from "@/lib/utils";
import { labels } from "@/lib/data/rooms-detail";

interface Props {
  room: RoomSuite;
}

export default function RoomDetailSidebar({ room }: Props) {
  return (
    <div className="lg:col-span-5">
      <div className="sticky top-24 bg-white border border-neutral-200 rounded-2xl shadow-depth-xl overflow-hidden">
        <div className="bg-neutral-950 px-6 py-5 text-center">
          <span className="text-xs tracking-widest text-neutral-400 uppercase">{labels.nightlyRateFrom}</span>
          <p className="text-4xl font-light text-white mt-1">{formatCurrency(room.price)}</p>
          <span className="text-xs text-neutral-500">{labels.perNight}</span>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
              <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">{labels.checkIn}</label>
              <input type="date" className="text-sm text-neutral-800 outline-none border-none w-full bg-transparent" />
            </div>
            <div className="border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
              <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">{labels.checkOut}</label>
              <input type="date" className="text-sm text-neutral-800 outline-none border-none w-full bg-transparent" />
            </div>
          </div>
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300"
          >
            {labels.bookThisRoom}
          </a>
          <p className="text-[11px] text-neutral-400 text-center font-light">
            {labels.cancellationText}
          </p>
          <div className="border-t border-neutral-100 pt-4">
            <Link href={labels.conciergeHref} className="block text-center text-xs text-neutral-500 hover:text-red-600 transition-colors font-medium tracking-wide">
              {labels.conciergeText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
