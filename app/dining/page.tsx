"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Clock, User, ChefHat, Check, ArrowRight } from "lucide-react";
import { restaurants } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/motion/ScrollReveal";

const reservationSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  date: z.string().min(1, "Date required"),
  time: z.string().min(1, "Time required"),
  guests: z.string().min(1, "Select guest count"),
  requests: z.string().optional(),
});

type ReservationForm = z.infer<typeof reservationSchema>;

export default function DiningPage() {
  const [activeTab, setActiveTab] = useState(restaurants[0].id);
  const [submitted, setSubmitted] = useState(false);
  const activeRestaurant = restaurants.find((r) => r.id === activeTab) || restaurants[0];

  const { register, handleSubmit, formState: { errors } } = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = () => setSubmitted(true);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2400"
          alt="Dining at Aman Sanctuary"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-400 uppercase mb-3 block">Three Distinct Worlds</span>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">Culinary Hearth</h1>
          <p className="text-neutral-300 font-light mt-3 max-w-lg">Where fire, craft, and local land converge in three singular dining destinations.</p>
        </div>
      </section>

      {/* Restaurant Tabs */}
      <section className="bg-neutral-950 px-6 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex gap-0">
          {restaurants.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveTab(r.id)}
              className={cn(
                "px-6 py-4 text-xs font-semibold tracking-widest uppercase border-b-2 transition-all duration-200",
                activeTab === r.id
                  ? "border-red-500 text-red-400"
                  : "border-transparent text-neutral-500 hover:text-neutral-300"
              )}
            >
              {r.name}
            </button>
          ))}
        </div>
      </section>

      {/* Restaurant Detail */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="py-16 px-6 bg-[#FCFCFF]"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden h-80">
              <img src={activeRestaurant.image} alt={activeRestaurant.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-bold tracking-widest text-red-500 uppercase">{activeRestaurant.cuisine}</span>
                <h2 className="text-3xl font-light text-neutral-900 mt-1">{activeRestaurant.name}</h2>
                <p className="text-neutral-500 font-light mt-2 leading-relaxed">{activeRestaurant.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Clock className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{activeRestaurant.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <ChefHat className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Chef {activeRestaurant.chef}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-500">
                  <User className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Dress: {activeRestaurant.dressCode}</span>
                </div>
              </div>

              {/* Menu Highlights */}
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">Signature Dishes</h3>
                <div className="space-y-3">
                  {activeRestaurant.menuHighlights.map((item) => (
                    <div key={item.name} className="border border-neutral-100 rounded-xl p-4 bg-white hover:shadow-soft-premium transition-shadow">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-neutral-900 text-sm">{item.name}</p>
                        {item.price && <span className="text-sm font-semibold text-red-600 ml-2 shrink-0">{item.price}</span>}
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 font-light">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Reservation Form */}
      <section className="py-20 px-6 bg-neutral-950">
        <div className="max-w-2xl mx-auto">
          <SectionHeading tag="Reserve Your Table" title="Secure Your Seat" subtitle="Tables are limited and highly sought. We recommend reserving at least 48 hours in advance." light align="center" />
          <div className="mt-12">
            {submitted ? (
              <div className="text-center py-12 border border-neutral-800 rounded-2xl bg-neutral-900">
                <div className="w-14 h-14 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-3">Reservation Received</h3>
                <p className="text-neutral-400 font-light">Our team will confirm your table within 2 hours via email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "name" as const, label: "Full Name", type: "text", placeholder: "Alexandra Monroe" },
                    { name: "email" as const, label: "Email", type: "email", placeholder: "you@example.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">{f.label}</label>
                      <input {...register(f.name)} type={f.type} placeholder={f.placeholder}
                        className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors" />
                      {errors[f.name] && <p className="text-xs text-red-400 mt-1">{errors[f.name]?.message}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Date</label>
                    <input {...register("date")} type="date" className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Time</label>
                    <select {...register("time")} className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors">
                      <option value="">Select time</option>
                      {["18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Guests</label>
                    <select {...register("guests")} className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors">
                      <option value="">Select guests</option>
                      {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Special Requests</label>
                  <textarea {...register("requests")} rows={3} placeholder="Dietary requirements, allergies, celebrations..."
                    className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2">
                  Confirm Table <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
