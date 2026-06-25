import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBooking from "@/components/layout/FloatingBooking";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxury-resort-cinematic.vercel.app"),
  title: {
    template: "%s | Hotel Stay Casa Inn",
    default: "Hotel Stay Casa Inn – Luxury Volcanic Cove Retreat",
  },
  description:
    "An ultra-luxury resort perched on volcanic Atlantic cliffs, offering private ocean suites, relaxation and wellness, and cinematic ocean experiences since 1989.",
  keywords: [
    "luxury resort",
    "volcanic cove hotel",
    "private suites",
    "five star spa",
    "boutique luxury resort",
    "Atlantic coast luxury",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxury-resort-cinematic.vercel.app",
    siteName: "Hotel Stay Casa Inn",
    title: "Hotel Stay Casa Inn – Luxury Volcanic Cove Retreat",
    description:
      "Where coastal beauty meets refined comfort. Designed for an unforgettable stay.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Hotel Stay Casa Inn aerial view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Stay Casa Inn",
    description: "Ultra-luxury volcanic cove retreat on the Atlantic coast.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingBooking />
        </Providers>
      </body>
    </html>
  );
}
