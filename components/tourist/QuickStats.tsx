import { quickStats } from "@/lib/tourist-data";

export default function QuickStats() {
  return (
    <section className="py-10 px-6 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {quickStats.map((s, i) => (
          <div key={i}>
            <div className="text-2xl font-light text-neutral-900">{s.value}</div>
            <div className="text-[10px] tracking-wider text-neutral-500 uppercase font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
