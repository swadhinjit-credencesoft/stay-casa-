import ScrollReveal from "@/components/motion/ScrollReveal";
import { expTestimonialsSection, testimonials } from "@/lib/data/experiences";

export default function ExpTestimonials() {
  return (
    <section className="py-20 px-6 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-4 block">
              {expTestimonialsSection.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
              {expTestimonialsSection.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-red-500/40 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-neutral-300 font-light leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span className="text-xs text-neutral-500 tracking-wider">
                  {t.author}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
