"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Check } from "lucide-react";
import type { SpaTreatment } from "@/lib/mockData";

interface SpaTreatmentsGridProps {
  treatments: SpaTreatment[];
  activeTab: string;
}

export default function SpaTreatmentsGrid({ treatments, activeTab }: SpaTreatmentsGridProps) {
  return (
    <section className="py-16 px-6 bg-[#FCFCFF]">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {treatments.map((treatment, i) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-soft-premium hover:shadow-depth-xl transition-all duration-500 group"
              >
                <span className="text-[9px] font-bold tracking-widest uppercase text-red-500 mb-3 block capitalize">{treatment.category}</span>
                <h3 className="text-xl font-light text-neutral-900 mb-2">{treatment.name}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-5">{treatment.description}</p>
                <div className="space-y-2 mb-5">
                  {treatment.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                      <span className="text-xs text-neutral-500 font-light">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>{treatment.duration} minutes</span>
                  </div>
                  <span className="text-lg font-light text-red-600">${treatment.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
