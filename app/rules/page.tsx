import type { Metadata } from "next";
import {
  Ban, CheckCircle, PawPrint, MapPin, Users, XCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rules & Regulations | Stay Casa Inn",
  description: "Hotel rules and regulations for guests at Stay Casa Inn, Jaipur.",
};

const rules = [
  {
    icon: Ban,
    title: "Pets Are Not Allowed",
    description: "Pets are not permitted anywhere on the hotel premises.",
    variant: "restricted",
  },
  {
    icon: CheckCircle,
    title: "Couples Are Welcome",
    description: "Couples are allowed to book and stay at the property.",
    variant: "allowed",
  },
  {
    icon: CheckCircle,
    title: "Local IDs Accepted",
    description: "Guests with local IDs are welcome to check in.",
    variant: "allowed",
  },
  {
    icon: MapPin,
    title: "Cancellation Policy",
    description:
      "If you cancel within 24 hours before check-in, no refund is applicable. If you cancel more than 28 hours before check-in, a 50% refund will be applicable.",
    variant: "info",
  },
  {
    icon: Users,
    title: "Guest Responsibility",
    description:
      "Guests are responsible for their own safety and belongings. The hotel management is not responsible for any loss or damage to personal property.",
    variant: "info",
  },
  {
    icon: XCircle,
    title: "Prohibited Activities",
    description:
      "Smoking in non-designated areas, use of illegal substances, and any activity that disturbs other guests is strictly prohibited.",
    variant: "restricted",
  },
];

export default function RulesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 bg-neutral-950 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <Ban className="w-7 h-7 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Rules &amp; Regulations
          </h1>
          <p className="text-neutral-400 font-light max-w-xl mx-auto">
            Guidelines to ensure a pleasant and safe stay for all guests.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, i) => {
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
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${iconColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-900 mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
