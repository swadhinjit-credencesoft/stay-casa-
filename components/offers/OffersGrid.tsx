import { Check, Tag, Calendar, ExternalLink } from "lucide-react";
import { offers } from "@/lib/mockData";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function OffersGrid() {
  return (
    <section className="py-16 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto space-y-10">
        {offers.map((offer, i) => (
          <ScrollReveal key={offer.id} delay={i * 0.1}>
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-soft-premium hover:shadow-depth-xl transition-shadow duration-500">
              <div className="lg:col-span-5 relative h-60 lg:h-auto overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-950/20" />
                <span className={`absolute top-4 left-4 text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-sm capitalize ${
                  offer.category === "honeymoon" ? "bg-rose-950/40 text-rose-300 border-rose-800/30" :
                  offer.category === "seasonal" ? "bg-amber-950/40 text-amber-300 border-amber-800/30" :
                  offer.category === "family" ? "bg-blue-950/40 text-blue-300 border-blue-800/30" :
                  "bg-neutral-900/60 text-neutral-300 border-neutral-700/30"
                }`}>
                  {offer.category}
                </span>
              </div>

              <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-light text-neutral-900 mb-2">{offer.title}</h2>
                  <p className="text-neutral-500 font-light mb-6 leading-relaxed">{offer.description}</p>
                  <div className="space-y-2 mb-6">
                    {offer.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-600 font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-neutral-100">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-red-400" />
                      <span className="font-mono text-sm font-medium text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded">
                        {offer.promoCode}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Valid until {offer.validUntil}</span>
                    </div>
                  </div>
                  <a
                    href="https://bookone.io/Stay-Casa-Inn-Hotel?bookingEngine=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 shrink-0"
                  >
                    Claim Offer <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
