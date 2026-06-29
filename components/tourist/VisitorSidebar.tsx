import Link from "next/link";
import { Sun, Clock, MapPin, Compass, ExternalLink } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";
import { detailLabels, detailBackLink } from "@/lib/tourist-data";

interface Props {
  name: string;
  bestTime: string;
  duration: string;
  distance: string;
}

export default function VisitorSidebar({ name, bestTime, duration, distance }: Props) {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        <div className="bg-white rounded-2xl border border-neutral-100 p-6 space-y-5">
          <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase">{detailLabels.visitorInfo}</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Sun className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">{detailLabels.bestTime}</div>
                <div className="text-sm text-neutral-800">{bestTime}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">{detailLabels.driveFromHotel}</div>
                <div className="text-sm text-neutral-800">~{duration}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">{detailLabels.distanceFromHotel}</div>
                <div className="text-sm text-neutral-800">{distance}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-950 rounded-2xl p-6 text-center">
          <Compass className="w-6 h-6 text-red-400 mx-auto mb-3" />
          <h3 className="text-white font-light text-lg mb-2">{detailLabels.stayCtaTitle}</h3>
          <p className="text-neutral-400 text-sm font-light mb-5">
            Just {distance} away — book your stay and explore {name} with ease.
          </p>
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all duration-300 w-full justify-center"
          >
            {detailLabels.bookNow} <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <Link
          href={detailBackLink.href}
          className="block text-center text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          ← {detailBackLink.text}
        </Link>
      </div>
    </div>
  );
}
