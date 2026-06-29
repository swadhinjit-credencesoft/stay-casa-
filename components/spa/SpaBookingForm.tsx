"use client";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { Check, ArrowRight } from "lucide-react";
import { spaTreatments } from "@/lib/mockData";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SpaBookingForm } from "@/lib/data/spa";
import { spaTimes } from "@/lib/data/spa";

interface SpaBookingFormProps {
  register: UseFormRegister<SpaBookingForm>;
  handleSubmit: (onValid: (data: SpaBookingForm) => void) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<SpaBookingForm>;
  submitted: boolean;
  onSubmit: () => void;
}

export default function SpaBookingForm({ register, handleSubmit, errors, submitted, onSubmit }: SpaBookingFormProps) {
  return (
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
                    {spaTimes.map((t) => <option key={t} value={t}>{t}</option>)}
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
  );
}
