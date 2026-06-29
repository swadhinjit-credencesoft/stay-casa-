import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Star, Clock, ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, Compass, Sun } from "lucide-react";
import { BOOKING_ENGINE_URL } from "@/lib/bookone";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { attractions, getAttractionBySlug } from "@/lib/tourist-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return attractions.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = getAttractionBySlug(slug);
  if (!place) return {};
  return {
    title: `${place.name} | Tourist Attractions | Stay Casa Inn`,
    description: `${place.name} — ${place.description} Located ${place.distance} from Stay Casa Inn.`,
  };
}

export default async function AttractionDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = getAttractionBySlug(slug);
  if (!place) notFound();

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-neutral-900">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/tourist"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs tracking-widest uppercase font-semibold mb-4 transition-colors"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Attractions
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-3">{place.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" /> {place.distance} from Stay Casa Inn</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> {place.rating} ({place.reviews} reviews)</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-red-400" /> ~{place.duration} drive</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-semibold tracking-wider uppercase">{place.category}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#FCFCFF]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-light text-neutral-900 mb-4">About {place.name}</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base">{place.longDescription}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <h2 className="text-2xl font-light text-neutral-900 mb-4 mt-12">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {place.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-100">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">{h}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-2xl font-light text-neutral-900 mb-4 mt-12">Pro Tips</h2>
                <div className="space-y-3">
                  {place.tips.map((t) => (
                    <div key={t} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-amber-800">{t}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 space-y-5">
                  <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase">Visitor Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Best Time to Visit</div>
                        <div className="text-sm text-neutral-800">{place.bestTime}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Drive from Hotel</div>
                        <div className="text-sm text-neutral-800">~{place.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">Distance from Hotel</div>
                        <div className="text-sm text-neutral-800">{place.distance}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-950 rounded-2xl p-6 text-center">
                  <Compass className="w-6 h-6 text-red-400 mx-auto mb-3" />
                  <h3 className="text-white font-light text-lg mb-2">Stay at Stay Casa Inn</h3>
                  <p className="text-neutral-400 text-sm font-light mb-5">
                    Just {place.distance} away — book your stay and explore {place.name} with ease.
                  </p>
                  <a
                    href={BOOKING_ENGINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm text-[10px] font-bold tracking-widest uppercase transition-all duration-300 w-full justify-center"
                  >
                    Book Now <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <Link
                  href="/tourist"
                  className="block text-center text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  ← Back to all attractions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
