import { termsSections } from "@/lib/data/terms";

export default function TermsContent() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-10">
          {termsSections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-light text-neutral-900 mb-3">{section.title}</h2>
              <p className="text-neutral-600 font-light leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
