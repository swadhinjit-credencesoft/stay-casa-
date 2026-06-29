import Link from "next/link";
import { MapPin, Star, Clock, ArrowLeft } from "lucide-react";
import { detailBackLink, attractionHeroLabels } from "@/lib/tourist-data";

interface Props {
  name: string;
  image: string;
  rating: number;
  reviews: string;
  distance: string;
  duration: string;
  category: string;
}

export default function AttractionHero({ name, image, rating, reviews, distance, duration, category }: Props) {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-neutral-900">
      <img src={image} alt={name} className="w-full h-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="max-w-5xl mx-auto">
          <Link
            href={detailBackLink.href}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-widest uppercase font-semibold mb-4 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> {detailBackLink.text}
          </Link>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-3">{name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> {distance} {attractionHeroLabels.fromHotel}</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {rating} ({reviews} reviews)</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-red-400" /> ~{duration} {attractionHeroLabels.drive}</span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-semibold tracking-wider uppercase">{category}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
