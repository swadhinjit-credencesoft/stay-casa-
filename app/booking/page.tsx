"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { buildBookingUrl, getDefaultBookingUrl } from "@/lib/bookone";

export default function BookingRedirectPage() {
  const params = useSearchParams();

  useEffect(() => {
    const fromDate = params.get("fromDate");
    const toDate = params.get("toDate");
    const adults = params.get("adults");

    if (fromDate && toDate && adults) {
      const ci = new Date(fromDate);
      const co = new Date(toDate);
      if (!isNaN(ci.getTime()) && !isNaN(co.getTime())) {
        window.location.href = buildBookingUrl(ci, co, parseInt(adults, 10) || 1);
        return;
      }
    }
    window.location.href = getDefaultBookingUrl();
  }, [params]);

  return (
    <section className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
        <p className="text-neutral-400 font-light text-sm">
          Redirecting to secure booking engine...
        </p>
      </div>
    </section>
  );
}
