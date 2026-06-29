import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { contactInfo } from "@/lib/data/contact";

const iconMap = { Phone, Mail, MapPin } as const;
const iconKeys = ["Phone", "Mail", "MapPin"] as const;

export default function ContactInfo() {
  return (
    <section className="py-12 px-6 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((item, i) => {
          const Icon = iconMap[iconKeys[i]];
          return (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 border border-neutral-100 rounded-2xl bg-white shadow-soft-premium hover:shadow-depth-xl hover:border-red-100 transition-all duration-500"
              >
                <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-neutral-700 font-light">
                    {item.value}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
