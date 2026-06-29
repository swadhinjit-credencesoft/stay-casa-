import { MapPin, Star, Clock, Compass } from "lucide-react";
import { touristHeroData } from "@/lib/tourist-data";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-4 h-4 text-red-400" />,
  Star: <Star className="w-4 h-4 text-red-400" />,
  Clock: <Clock className="w-4 h-4 text-red-400" />,
};

export default function TouristHero() {
  return (
    <section className="relative pt-40 pb-24 px-6 bg-neutral-950 text-center overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${touristHeroData.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-7 h-7 text-red-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-4">
          {touristHeroData.title}
        </h1>
        <p className="text-neutral-400 font-light text-lg max-w-xl mx-auto">
          {touristHeroData.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
          {touristHeroData.badges.map((badge) => (
            <span key={badge.label} className="flex items-center gap-2">
              {iconMap[badge.icon]}
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
