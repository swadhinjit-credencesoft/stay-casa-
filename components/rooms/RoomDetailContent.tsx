import { Check, Maximize2, Users, ExternalLink } from "lucide-react";
import type { RoomSuite } from "@/lib/mockData";
import { labels } from "@/lib/data/rooms-detail";

interface Props {
  room: RoomSuite;
}

export default function RoomDetailContent({ room }: Props) {
  return (
    <div className="lg:col-span-7 space-y-12">
      <div>
        <h2 className="text-2xl font-light text-neutral-900 mb-4">{labels.aboutThisSuite}</h2>
        <p className="text-neutral-500 font-light leading-relaxed text-base">{room.description}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-5">{labels.suiteSpecifications}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Maximize2, label: labels.sizeLabel, value: `${room.size} ${labels.sizeSuffix}` },
            { icon: Users, label: labels.capacityLabel, value: `${room.occupancy} ${labels.guests}` },
            { icon: null, label: labels.viewLabel, value: room.view },
            { icon: null, label: labels.bedLabel, value: room.features.find(f => f.label === "Bed Type")?.value || "King" },
          ].map((spec) => (
            <div key={spec.label} className="bg-neutral-50 border border-neutral-100 rounded-xl p-4 text-center">
              <p className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium mb-1">{spec.label}</p>
              <p className="text-sm font-medium text-neutral-900">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-5">{labels.suiteAmenities}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {room.amenities.map((a) => (
            <div key={a} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
              <span className="text-sm text-neutral-600 font-light">{a}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-light text-neutral-900">{labels.virtualTourTitle}</h3>
          <p className="text-sm text-neutral-400 font-light mt-1">{labels.virtualTourSubtitle}</p>
        </div>
        <a
          href={room.virtualTourUrl}
          className="inline-flex items-center gap-2 border border-red-200 hover:bg-red-600 hover:border-red-600 hover:text-white text-red-600 px-5 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
        >
          {labels.launchTour} <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
