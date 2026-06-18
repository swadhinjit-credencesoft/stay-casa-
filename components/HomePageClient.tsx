"use client";

import dynamic from "next/dynamic";

export const CinematicHero = dynamic(() => import("@/components/hero/CinematicHero"), { ssr: false });
export const RoomCard = dynamic(() => import("@/components/rooms/RoomCard"), { ssr: false });
