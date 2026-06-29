import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { locationData } from "@/lib/data/home";

export default function LocationSection() {
  return (
    <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <img
        src={locationData.image}
        alt="Stay Casa Inn Jaipur"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-neutral-950/50" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <ScrollReveal>
          <MapPin className="w-8 h-8 text-red-400 mx-auto mb-4" />
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-300 uppercase mb-3 block">{locationData.tag}</span>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">{locationData.heading}</h2>
          <p className="text-neutral-200/70 mt-4 font-light max-w-lg mx-auto">
            {locationData.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
            {locationData.address.map((item) => (
              <div key={item.value} className="text-center">
                <p className="text-2xl font-light text-white">{item.value}</p>
                <p className="text-[10px] tracking-widest text-neutral-400 uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
