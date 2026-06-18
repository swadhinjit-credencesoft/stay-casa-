"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, ChevronRight, ChevronLeft, Calendar, Users, Hotel, User, Mail, Phone, FileText } from "lucide-react";
import { useBookingStore } from "@/store/useBookingStore";
import { roomsSuites } from "@/lib/mockData";
import { formatCurrency, getDaysDifference } from "@/lib/utils";
import Link from "next/link";

const guestSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  specialRequests: z.string().optional(),
});

type GuestFormData = z.infer<typeof guestSchema>;

const steps = ["Dates & Suite", "Your Details", "Confirmation"];

function StepProgress({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i < currentStep ? "bg-red-600 border-red-600 text-white" :
              i === currentStep ? "border-red-600 text-red-600 bg-white" :
              "border-neutral-200 text-neutral-400 bg-white"
            }`}>
              {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className={`text-[9px] tracking-widest uppercase font-semibold whitespace-nowrap ${i === currentStep ? "text-red-600" : "text-neutral-400"}`}>
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-16 md:w-32 h-px mx-2 mb-6 transition-colors duration-300 ${i < currentStep ? "bg-red-500" : "bg-neutral-200"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function BookingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [bookingRef] = useState(() => `ASR-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);

  const { checkIn, checkOut, guests, selectedRoom, setDates, setGuests, selectRoom, confirmBooking, isConfirmed } = useBookingStore();

  const { register, handleSubmit, formState: { errors } } = useForm<GuestFormData>({
    resolver: zodResolver(guestSchema),
  });

  const nights = checkIn && checkOut ? getDaysDifference(checkIn, checkOut) : 1;
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  const formatInput = (d: Date | null) => d ? d.toISOString().split("T")[0] : "";

  const onGuestSubmit = () => setStep(2);

  const handleConfirm = () => {
    confirmBooking();
  };

  if (isConfirmed) {
    return (
      <section className="min-h-screen bg-neutral-950 flex items-center justify-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg"
        >
          <div className="w-16 h-16 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Your Stay Awaits</h1>
          <p className="text-neutral-400 font-light mb-6">
            Your reservation has been confirmed. Our concierge will reach out within 2 hours with your personalized pre-arrival itinerary.
          </p>
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 mb-8">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Reservation Reference</p>
            <p className="text-2xl font-mono font-medium text-red-400">{bookingRef}</p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-red-500 px-8 py-3.5 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all">
            Return to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#FCFCFF] pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] font-semibold tracking-[0.4em] text-red-500 uppercase">Reservations</span>
          <h1 className="text-3xl md:text-4xl font-light text-neutral-900 mt-2">Reserve Your Suite</h1>
        </div>

        <StepProgress currentStep={step} />

        <AnimatePresence mode="wait">
          {/* STEP 1: Dates & Suite */}
          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft-premium space-y-5">
                <h2 className="text-lg font-light text-neutral-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-500" /> Select Your Dates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">Check In</label>
                    <input
                      type="date"
                      value={formatInput(checkIn)}
                      onChange={(e) => setDates(e.target.value ? new Date(e.target.value) : null, checkOut)}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-transparent text-sm text-neutral-800 outline-none border-none"
                    />
                  </div>
                  <div className="border border-neutral-200 rounded-sm p-3 focus-within:border-red-500 transition-colors">
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1">Check Out</label>
                    <input
                      type="date"
                      value={formatInput(checkOut)}
                      onChange={(e) => setDates(checkIn, e.target.value ? new Date(e.target.value) : null)}
                      min={formatInput(checkIn)}
                      className="w-full bg-transparent text-sm text-neutral-800 outline-none border-none"
                    />
                  </div>
                </div>
                {nights > 0 && (
                  <p className="text-xs text-neutral-400 font-light">{nights} night{nights !== 1 ? "s" : ""} selected</p>
                )}
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft-premium space-y-4">
                <h2 className="text-lg font-light text-neutral-900 flex items-center gap-2">
                  <Hotel className="w-4 h-4 text-red-500" /> Choose Your Suite
                </h2>
                <div className="space-y-3">
                  {roomsSuites.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => selectRoom(room)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-4 ${
                        selectedRoom?.id === room.id ? "border-red-500 bg-red-50" : "border-neutral-100 hover:border-neutral-300"
                      }`}
                    >
                      <img src={room.images[0]} alt={room.name} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-neutral-900 text-sm truncate">{room.name}</p>
                        <p className="text-xs text-neutral-500 truncate">{room.tagline}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-medium text-neutral-900">{formatCurrency(room.price)}</p>
                        <p className="text-[10px] text-neutral-400">/night</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft-premium space-y-4">
                <h2 className="text-lg font-light text-neutral-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-500" /> Guests
                </h2>
                <div className="flex gap-8">
                  {[
                    { label: "Adults", value: guests.adults, min: 1, max: 6, onChange: (v: number) => setGuests(v, guests.children) },
                    { label: "Children", value: guests.children, min: 0, max: 4, onChange: (v: number) => setGuests(guests.adults, v) },
                  ].map(g => (
                    <div key={g.label} className="flex items-center gap-4">
                      <span className="text-sm text-neutral-600 font-medium w-16">{g.label}</span>
                      <div className="flex items-center gap-3">
                        <button onClick={() => g.onChange(Math.max(g.min, g.value - 1))} disabled={g.value <= g.min} className="w-8 h-8 rounded-full border border-neutral-200 hover:border-red-400 flex items-center justify-center text-sm disabled:opacity-40 transition-colors">-</button>
                        <span className="w-6 text-center font-medium text-neutral-900">{g.value}</span>
                        <button onClick={() => g.onChange(Math.min(g.max, g.value + 1))} disabled={g.value >= g.max} className="w-8 h-8 rounded-full border border-neutral-200 hover:border-red-400 flex items-center justify-center text-sm disabled:opacity-40 transition-colors">+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(1)}
                disabled={!checkIn || !checkOut || !selectedRoom}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-neutral-200 disabled:text-neutral-400 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                Continue to Guest Details <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Guest Details */}
          {step === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={handleSubmit(onGuestSubmit)} className="space-y-6">
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-soft-premium space-y-5">
                  <h2 className="text-lg font-light text-neutral-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-red-500" /> Guest Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "firstName" as const, label: "First Name", placeholder: "Alexandra", icon: User },
                      { name: "lastName" as const, label: "Last Name", placeholder: "Monroe", icon: User },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">{f.label}</label>
                        <input
                          {...register(f.name)}
                          placeholder={f.placeholder}
                          className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300"
                        />
                        {errors[f.name] && <p className="text-xs text-red-500 mt-1">{errors[f.name]?.message}</p>}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Email Address</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Phone (Optional)</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">Special Requests (Optional)</label>
                    <textarea
                      {...register("specialRequests")}
                      rows={3}
                      placeholder="Dietary requirements, room preferences, special occasions..."
                      className="w-full border border-neutral-200 rounded-sm px-3 py-2.5 text-sm text-neutral-800 outline-none focus:border-red-500 transition-colors placeholder:text-neutral-300 resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="flex items-center gap-2 border border-neutral-200 hover:border-neutral-400 text-neutral-600 px-6 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Review Reservation <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3: Confirmation */}
          {step === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {selectedRoom && (
                <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-soft-premium">
                  <div className="relative h-48">
                    <img src={selectedRoom.images[0]} alt={selectedRoom.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-xl font-light text-white">{selectedRoom.name}</h3>
                      <p className="text-sm text-red-300">{selectedRoom.view} View</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="border border-neutral-100 rounded-xl p-3">
                        <p className="text-[9px] tracking-widest text-neutral-400 uppercase mb-1">Check In</p>
                        <p className="text-sm font-medium text-neutral-900">{checkIn?.toLocaleDateString()}</p>
                      </div>
                      <div className="border border-neutral-100 rounded-xl p-3">
                        <p className="text-[9px] tracking-widest text-neutral-400 uppercase mb-1">Check Out</p>
                        <p className="text-sm font-medium text-neutral-900">{checkOut?.toLocaleDateString()}</p>
                      </div>
                      <div className="border border-neutral-100 rounded-xl p-3">
                        <p className="text-[9px] tracking-widest text-neutral-400 uppercase mb-1">Guests</p>
                        <p className="text-sm font-medium text-neutral-900">{guests.adults + guests.children}</p>
                      </div>
                    </div>

                    <div className="border-t border-neutral-100 pt-4 space-y-2">
                      <div className="flex justify-between text-sm text-neutral-500">
                        <span>{formatCurrency(selectedRoom.price)} × {nights} nights</span>
                        <span>{formatCurrency(selectedRoom.price * nights)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-neutral-500">
                        <span>Resort fee (included)</span>
                        <span>$0</span>
                      </div>
                      <div className="flex justify-between text-base font-semibold text-neutral-900 border-t border-neutral-100 pt-2">
                        <span>Total</span>
                        <span className="text-red-600">{formatCurrency(totalPrice)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 border border-neutral-200 hover:border-neutral-400 text-neutral-600 px-6 py-4 rounded-sm text-xs font-semibold tracking-widest uppercase transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 bg-neutral-900 hover:bg-red-600 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" /> Confirm Reservation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
