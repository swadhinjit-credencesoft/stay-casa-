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
        <div className="max-w-xl mx-auto bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center">
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
