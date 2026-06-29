"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const numeric = parseInt(value.replace(/\D/g, ""), 10);

  useEffect(() => {
    if (!isInView || isNaN(numeric)) return;
    const duration = 1500;
    const steps = 30;
    const increment = numeric / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setCount(numeric);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isInView, numeric]);

  return (
    <div ref={ref} className="bg-neutral-950 px-6 py-8 text-center">
      <div className="text-2xl md:text-3xl font-light text-white mb-2">
        {isNaN(numeric) ? value : count}
      </div>
      <div className="text-[10px] tracking-widest text-neutral-500 uppercase font-medium">{label}</div>
    </div>
  );
}
