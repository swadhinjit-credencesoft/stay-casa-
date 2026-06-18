"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, Check, ArrowRight, Award } from "lucide-react";
import { spaTreatments } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";

const spaBookingSchema = z.object({
  treatment: z.string().min(1, "Select a treatment"),
  preferredDate: z.string().min(1, "Date required"),
  preferredTime: z.string().min(1, "Time required"),
  therapistGender: z.string().min(1, "Select preference"),
  notes: z.string().optional(),
});

type SpaBookingForm = z.infer<typeof spaBookingSchema>;

const categories = ["treatments", "rituals", "packages"];

const certifications = [
  "ESPA International Certified",
  "Ayurvedic Institute of India",
  "CIDESCO International",
  "Green Spa Network Member",
];

export default function SpaPage() {
  const [activeTab, setActiveTab] = useState<string>("treatments");
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<SpaBookingForm>({
    resolver: zodResolver(spaBookingSchema),
  });

  const onSubmit = () => setSubmitted(true);

  const filtered = spaTreatments.filter((t) => t.category === activeTab);

  const times = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2400"
          alt="Spa & Wellness"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">Subterranean Wellness</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Spa & Sound Healing</h1>
          <p className="text-neutral-300 font-light mt-3 max-w-lg">
            Enter our volcanic lava-stone cave and let ancient vibrations restore what modernity has taken.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-neutral-950 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex gap-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-4 text-xs font-semibold tracking-widest uppercase border-b-2 transition-all duration-200 capitalize",
                activeTab === cat
                  ? "border-red-500 text-red-400"
                  : "border-transparent text-neutral-500 hover:text-neutral-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
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
              {filtered.map((treatment, i) => (
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

      {/* Booking Form */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-2xl mx-auto">
          <SectionHeading tag="Book Treatment" title="Reserve Your Healing Session" light align="center" />
          <div className="mt-12">
            {submitted ? (
              <div className="text-center py-12 border border-neutral-800 rounded-2xl bg-neutral-900">
                <div className="w-14 h-14 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-3">Treatment Reserved</h3>
                <p className="text-neutral-400 font-light">Your wellness journey is confirmed. Our spa director will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Select Treatment</label>
                  <select {...register("treatment")} className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors">
                    <option value="">Choose a treatment...</option>
                    {spaTreatments.map((t) => <option key={t.id} value={t.id}>{t.name} ({t.duration} min — ${t.price})</option>)}
                  </select>
                  {errors.treatment && <p className="text-xs text-red-400 mt-1">{errors.treatment.message}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Preferred Date</label>
                    <input {...register("preferredDate")} type="date" className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Preferred Time</label>
                    <select {...register("preferredTime")} className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors">
                      <option value="">Select time</option>
                      {times.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Therapist Preference</label>
                    <select {...register("therapistGender")} className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors">
                      <option value="Any">Any Therapist</option>
                      <option value="Female">Female Therapist</option>
                      <option value="Male">Male Therapist</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Notes (Optional)</label>
                  <textarea {...register("notes")} rows={3} placeholder="Any health conditions, sensitivities, or preferences..."
                    className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2">
                  Book Treatment <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.1}>
                <div className="flex items-center gap-3 border border-neutral-200 bg-white rounded-full px-5 py-2.5 shadow-soft-premium">
                  <Award className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-medium text-neutral-600">{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
