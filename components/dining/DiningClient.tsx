"use client";

import { useState } from "react";
import { restaurants } from "@/lib/mockData";
import DiningHero from "@/components/dining/DiningHero";
import DiningTabs from "@/components/dining/DiningTabs";
import DiningDetail from "@/components/dining/DiningDetail";
import DiningReservation from "@/components/dining/DiningReservation";

export default function DiningClient() {
  const [activeTab, setActiveTab] = useState(restaurants[0].id);
  const activeRestaurant =
    restaurants.find((r) => r.id === activeTab) || restaurants[0];

  return (
    <>
      <DiningHero />
      <DiningTabs
        restaurants={restaurants}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <DiningDetail activeRestaurant={activeRestaurant} />
      <DiningReservation />
    </>
  );
}
