"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  reservationSchema,
  type ReservationForm,
  formFields,
  timeOptions,
  guestOptions,
  formLabels,
  reservationSuccess,
  reservationSection,
} from "@/lib/data/dining";

export default function DiningReservation() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReservationForm>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = () => setSubmitted(true);

  return (
    <section className="py-20 px-6 bg-neutral-950">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          tag={reservationSection.tag}
          title={reservationSection.title}
          subtitle={reservationSection.subtitle}
          light
          align="center"
        />
        <div className="mt-12">
          {submitted ? (
            <div className="text-center py-12 border border-neutral-800 rounded-2xl bg-neutral-900">
              <div className="w-14 h-14 rounded-full bg-red-600/20 border-2 border-red-500 flex items-center justify-center mx-auto mb-6">
                <Check className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-light text-white mb-3">
                {reservationSuccess.title}
              </h3>
              <p className="text-neutral-400 font-light">
                {reservationSuccess.description}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formFields.map((f) => (
                  <div key={f.name}>
                    <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">
                      {f.label}
                    </label>
                    <input
                      {...register(f.name)}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors"
                    />
                    {errors[f.name] && (
                      <p className="text-xs text-red-400 mt-1">
                        {errors[f.name]?.message}
                      </p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">
                    {formLabels.date}
                  </label>
                  <input
                    {...register("date")}
                    type="date"
                    className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">
                    {formLabels.time}
                  </label>
                  <select
                    {...register("time")}
                    className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors"
                  >
                    <option value="">{formLabels.timePlaceholder}</option>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">
                    {formLabels.guests}
                  </label>
                  <select
                    {...register("guests")}
                    className="w-full bg-neutral-900 border border-neutral-700 text-white rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors"
                  >
                    <option value="">{formLabels.guestsPlaceholder}</option>
                    {guestOptions.map((n) => (
                      <option key={n} value={n}>
                        {n} guest{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase block mb-1.5">
                  {formLabels.specialRequests}
                </label>
                <textarea
                  {...register("requests")}
                  rows={3}
                  placeholder={formLabels.requestsPlaceholder}
                  className="w-full bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 rounded-sm px-3 py-2.5 text-sm outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                {formLabels.submitText}{" "}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
