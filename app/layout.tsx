import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBooking from "@/components/layout/FloatingBooking";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://hotelstaycasainn.com"),
  title: {
    template: "%s | Hotel Stay Casa Inn",
    default: "Hotel Stay Casa Inn – Comfortable Stay in Jaipur",
  },
  description:
    "Book Hotel Stay Casa Inn in Sodala, Jaipur. Comfortable rooms, free Wi-Fi, air conditioning, and warm hospitality at affordable rates. Perfect for business and leisure travelers.",
  keywords: [
    "hotel in jaipur",
    "stay casa inn",
    "budget hotel jaipur",
    "hotel near jaipur airport",
    "rooms in sodala jaipur",
    "best hotel jaipur",
    "stay casa inn sodala",
    "accommodation jaipur",
    "hotel booking jaipur",
    "comfortable stay jaipur",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hotelstaycasainn.com",
    siteName: "Hotel Stay Casa Inn",
    title: "Hotel Stay Casa Inn – Comfortable Stay in Jaipur",
    description:
      "Comfortable rooms, free Wi-Fi, and warm hospitality in Sodala, Jaipur. Book your stay today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Hotel Stay Casa Inn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Stay Casa Inn",
    description: "Comfortable rooms and warm hospitality in Jaipur. Book now.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingBooking />
        </Providers>
      </body>
    </html>
  );
}
