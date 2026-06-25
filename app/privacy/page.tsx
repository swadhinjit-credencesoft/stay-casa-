import type { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Stay Casa Inn",
  description: "Privacy policy for Hotel Stay Casa Inn, Jaipur.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, and payment details when you make a reservation, submit an inquiry, or interact with our website. This information is used solely to facilitate your booking and improve your experience.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process bookings, communicate with you regarding your stay, send confirmations and updates, and improve our services. We do not sell, trade, or share your personal information with third parties except as required by law or to process your transaction.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no online transmission or storage method is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use cookies to enhance your browsing experience. You may choose to disable cookies in your browser settings, though this may affect certain functionality on our site.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use third-party service providers (e.g., payment gateways, booking engines) to process transactions. These providers have their own privacy policies governing the use of your information.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated effective date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this privacy policy, please contact us at staycasainn@gmail.com or visit our property in Indraprasth Colony, Chordia City, Jaipur.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 bg-neutral-950 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-7 h-7 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 font-light max-w-xl mx-auto">
            How we collect, use, and protect your personal information.
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
