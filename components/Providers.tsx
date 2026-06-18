"use client";

import dynamic from "next/dynamic";

const LenisProvider = dynamic(() => import("@/components/motion/LenisProvider"), { ssr: false });
const QuickBookingBar = dynamic(() => import("@/components/booking/QuickBookingBar"), { ssr: false });

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      {children}
      <QuickBookingBar />
    </LenisProvider>
  );
}
