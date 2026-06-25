import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stay Casa Inn",
  description: "Terms and conditions for Hotel Stay Casa Inn, Jaipur.",
};

const sections = [
  {
    title: "Reservations",
    content:
      "All reservations are subject to availability. A valid government-issued photo ID and a credit/debit card may be required at the time of check-in. The hotel reserves the right to cancel or modify reservations under special circumstances or during Force Majeure events.",
  },
  {
    title: "Check-In & Check-Out",
    content:
      "Standard check-in time is 12:00 PM and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges. Please contact the front desk for assistance.",
  },
  {
    title: "Payment",
    content:
      "Payment is due at the time of booking or upon check-in as per the chosen rate plan. We accept cash, debit cards, credit cards, and UPI payments. All rates are inclusive of applicable taxes unless stated otherwise.",
  },
  {
    title: "Cancellation & Refunds",
    content:
      "If the guest cancels the booking more than 28 hours before check-in, a 50% refund will be applicable. If the guest cancels within 24 hours before check-in, no refund will be applicable. No-shows will be charged the full amount.",
  },
  {
    title: "Guest Conduct",
    content:
      "Guests are expected to behave in a respectful manner towards staff and other guests. Any damage to hotel property caused by the guest will be charged to the guest. The hotel reserves the right to evict any guest engaging in disruptive or illegal activities without refund.",
  },
  {
    title: "Liability",
    content:
      "The hotel shall not be liable for any loss, theft, or damage to personal property during your stay. Guests are advised to use the in-room safe for valuables. The hotel is not responsible for any injuries or accidents occurring on the premises beyond its reasonable control.",
  },
  {
    title: "Modifications",
    content:
      "These terms and conditions may be modified by the hotel at any time without prior notice. It is the responsibility of the guest to review the latest terms before making a reservation.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 bg-neutral-950 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-7 h-7 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-neutral-400 font-light max-w-xl mx-auto">
            Please read these terms carefully before making a reservation.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-light text-neutral-900 mb-3">
                  {section.title}
                </h2>
                <p className="text-neutral-600 font-light leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
