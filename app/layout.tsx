import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxury-resort-cinematic.vercel.app"),
  title: {
    template: "%s | Aman Sanctuary Resort",
    default: "Aman Sanctuary Resort – Luxury Volcanic Cove Retreat",
  },
  description:
    "An ultra-luxury resort perched on volcanic Atlantic cliffs, offering private ocean pavilions, subterranean sound healing, and cinematic ocean experiences since 1989.",
  keywords: [
    "luxury resort",
    "volcanic cove hotel",
    "private pavilions",
    "five star spa",
    "Aman-style resort",
    "Atlantic coast luxury",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luxury-resort-cinematic.vercel.app",
    siteName: "Aman Sanctuary Resort",
    title: "Aman Sanctuary Resort – Luxury Volcanic Cove Retreat",
    description:
      "Where volcanic cliffs meet infinite ocean. A sanctuary designed for absolute tranquility.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Aman Sanctuary Resort aerial view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Sanctuary Resort",
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
        </Providers>
      </body>
    </html>
  );
}
