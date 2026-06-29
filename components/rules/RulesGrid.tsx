import { rulesList } from "@/lib/data/rules";

export default function RulesGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rulesList.map((rule, i) => {
            const Icon = rule.icon;
            const borderColor =
              rule.variant === "allowed"
                ? "border-green-200 bg-green-50/50"
                : rule.variant === "restricted"
                  ? "border-red-200 bg-red-50/50"
                  : "border-neutral-200 bg-neutral-50/50";
            const iconColor =
              rule.variant === "allowed"
                ? "text-green-600 bg-green-100"
                : rule.variant === "restricted"
                  ? "text-red-600 bg-red-100"
                  : "text-neutral-600 bg-neutral-100";

            return (
              <div
                key={i}
                className={`border ${borderColor} rounded-xl p-6 hover:shadow-soft-premium transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-medium text-neutral-900 mb-2">{rule.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{rule.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
