import { MessageCircle } from "lucide-react";
import { contactWhatsApp } from "@/lib/data/contact";

export default function ContactWhatsApp() {
  return (
    <section className="py-10 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-950/50 rounded-xl border border-green-900/30">
            <MessageCircle className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <p className="text-white font-light text-lg">
              {contactWhatsApp.title}
            </p>
            <p className="text-neutral-400 text-sm font-light">
              {contactWhatsApp.description}
            </p>
          </div>
        </div>
        <a
          href={contactWhatsApp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors shrink-0"
        >
          <MessageCircle className="w-4 h-4" />
          {contactWhatsApp.buttonText}
        </a>
      </div>
    </section>
  );
}
