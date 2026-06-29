"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { spaTreatments } from "@/lib/mockData";
import { spaBookingSchema } from "@/lib/data/spa";
import SpaHero from "@/components/spa/SpaHero";
import SpaTabs from "@/components/spa/SpaTabs";
import SpaTreatmentsGrid from "@/components/spa/SpaTreatmentsGrid";
import SpaBookingForm from "@/components/spa/SpaBookingForm";

type SpaBookingForm = z.infer<typeof spaBookingSchema>;
import SpaCertifications from "@/components/spa/SpaCertifications";

export default function SpaPage() {
  const [activeTab, setActiveTab] = useState<string>("treatments");
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<SpaBookingForm>({
    resolver: zodResolver(spaBookingSchema),
  });

  const onSubmit = () => setSubmitted(true);
  const filtered = spaTreatments.filter((t) => t.category === activeTab);

  return (
    <>
      <SpaHero />
      <SpaTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SpaTreatmentsGrid treatments={filtered} activeTab={activeTab} />
      <SpaBookingForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        submitted={submitted}
        onSubmit={onSubmit}
      />
      <SpaCertifications />
    </>
  );
}
