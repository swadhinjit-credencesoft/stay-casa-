import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Users, Maximize2, ArrowLeft, ExternalLink } from "lucide-react";
import { roomsSuites } from "@/lib/mockData";
import { formatCurrency } from "@/lib/utils";
import { getRoomSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return roomsSuites.map((r) => ({ id: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const room = roomsSuites.find((r) => r.slug === id);
  if (!room) return { title: "Suite Not Found" };
  return {
    title: room.name,
    description: room.description,
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { id } = await params;
  const room = roomsSuites.find((r) => r.slug === id);
  if (!room) notFound();

  const schema = getRoomSchema(room);
  const relatedRooms = roomsSuites.filter((r) => r.id !== room.id).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Image */}
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
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Suites
          </Link>
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-2 block">
            {room.view} View · {room.size} sq.ft
          </span>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
            {room.name}
          </h1>
          <p className="text-neutral-200/70 font-light mt-3 max-w-lg">{room.tagline}</p>
        </div>
      </section>

      {/* Gallery Strip */}
      {room.images.length > 1 && (
        <section className="bg-neutral-950 py-4 overflow-x-auto flex gap-2 px-4">
          {room.images.map((img, i) => (
            <div key={i} className="shrink-0 w-48 h-32 rounded-lg overflow-hidden">
              <img src={img} alt={`${room.name} - view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer" />
            </div>
          ))}
        </section>
      )}

      {/* Main Content */}
      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Details */}
            <div className="lg:col-span-7 space-y-12">

              {/* Description */}
              <div>
                <h2 className="text-2xl font-light text-neutral-900 mb-4">About This Suite</h2>
                <p className="text-neutral-500 font-light leading-relaxed text-base">{room.description}</p>
              </div>

              {/* Specs Grid */}
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-5">Suite Specifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Maximize2, label: "Size", value: `${room.size} sq.ft` },
                    { icon: Users, label: "Capacity", value: `${room.occupancy} guests` },
                    { icon: null, label: "View", value: room.view },
                    { icon: null, label: "Bed", value: room.features.find(f => f.label === "Bed Type")?.value || "King" },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-neutral-50 border border-neutral-100 rounded-xl p-4 text-center">
                      <p className="text-[10px] tracking-widest text-neutral-400 uppercase font-medium mb-1">{spec.label}</p>
                      <p className="text-sm font-medium text-neutral-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-5">Suite Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-neutral-600 font-light">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Virtual Tour */}
              <div className="border border-neutral-200 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-light text-neutral-900">3D Virtual Walkthrough</h3>
                  <p className="text-sm text-neutral-400 font-light mt-1">Explore every detail before you arrive.</p>
                </div>
                <a
                  href={room.virtualTourUrl}
                  className="inline-flex items-center gap-2 border border-red-200 hover:bg-red-600 hover:border-red-600 hover:text-white text-red-600 px-5 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
                >
                  Launch Tour <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Booking Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-white border border-neutral-200 rounded-2xl shadow-depth-xl overflow-hidden">
                <div className="bg-neutral-950 px-6 py-5 text-center">
                  <span className="text-xs tracking-widest text-neutral-400 uppercase">Nightly Rate From</span>
                  <p className="text-4xl font-light text-white mt-1">{formatCurrency(room.price)}</p>
                  <span className="text-xs text-neutral-500">/ per night · inclusive of taxes</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">Check In</label>
                      <input type="date" className="text-sm text-neutral-800 outline-none border-none w-full bg-transparent" />
                    </div>
                    <div className="border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">Check Out</label>
                      <input type="date" className="text-sm text-neutral-800 outline-none border-none w-full bg-transparent" />
                    </div>
                  </div>
                  <Link
                    href="/booking"
                    className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                  >
                    Reserve This Suite
                  </Link>
                  <p className="text-[11px] text-neutral-400 text-center font-light">
                    Free cancellation until 48 hours before arrival
                  </p>
                  <div className="border-t border-neutral-100 pt-4">
                    <Link href="/contact" className="block text-center text-xs text-neutral-500 hover:text-red-600 transition-colors font-medium tracking-wide">
                      Need help choosing? Contact our concierge →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-8">You May Also Love</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedRooms.map((r) => (
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
                      <p className="text-red-300 text-xs">{formatCurrency(r.price)}/night</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
