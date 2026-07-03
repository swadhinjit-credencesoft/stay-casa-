import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactLocation } from "@/lib/data/contact";

export default function ContactLocation() {
  return (
    <section className="py-20 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <SectionHeading
            tag={contactLocation.sectionTag}
            title={contactLocation.sectionTitle}
            align="center"
          />
        </div>
        <div className="max-w-5xl mx-auto bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 text-center">
          <MapPin className="w-10 h-10 text-red-500 mx-auto mb-4" />
          {contactLocation.lines.map((line, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-lg font-light text-neutral-900 mb-1"
                  : "text-neutral-500 font-light"
              }
            >
              {line}
            </p>
          ))}
          <div className="relative mt-6 rounded-xl overflow-hidden border border-neutral-200 shadow-lg group">
            <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/20 pointer-events-none">
              360° Street View
            </div>
            <div className="relative w-full h-[600px] bg-neutral-900 overflow-hidden">
              <img
                src={contactLocation.streetViewThumb}
                alt="360° view of Stay Casa Inn, Sodala, Jaipur"
                className="w-full h-full object-cover"
              />
              <a
                href={contactLocation.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/0 hover:bg-black/20 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-600 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-10 h-10 ml-1">
                    <polygon points="5,3 19,12 5,21" fill="white" stroke="white" />
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold tracking-[0.3em] uppercase bg-black/50 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/20">
                  Open 360° View
                </span>
              </a>
            </div>
          </div>
          <p className="text-[10px] text-neutral-400 font-light tracking-wider mt-2">Click to explore interactive 16K 360° Street View in Google Maps</p>
          <div className="mt-8 rounded-xl overflow-hidden border border-neutral-200 shadow-lg">
            <iframe
              src={contactLocation.mapEmbedUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stay Casa Inn location map"
            />
          </div>
          <a
            href={contactLocation.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 border-b border-red-200 hover:border-red-600 pb-1 text-xs font-semibold tracking-widest uppercase transition-all duration-300 mt-6"
          >
            <MapPin className="w-3.5 h-3.5" />
            {contactLocation.mapButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
