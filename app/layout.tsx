import type { Metadata, Viewport } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingBooking from "@/components/layout/FloatingBooking";
import Providers from "@/components/Providers";

export const viewport: Viewport = {
  themeColor: "#EF4444",
  width: "device-width",
  initialScale: 1,
};

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
        url: "/DSC_3842-HDR.jpg.avif",
        width: 1200,
        height: 630,
        alt: "Hotel Stay Casa Inn - Comfortable Hotel in Sodala, Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Stay Casa Inn",
    description: "Comfortable rooms and warm hospitality in Jaipur. Book now.",
    images: ["/DSC_3842-HDR.jpg.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
