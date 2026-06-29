import { z } from "zod";

export const reservationSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  date: z.string().min(1, "Date required"),
  time: z.string().min(1, "Time required"),
  guests: z.string().min(1, "Select guest count"),
  requests: z.string().optional(),
});

export type ReservationForm = z.infer<typeof reservationSchema>;

export const diningHero = {
  image:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2400",
  tag: "Three Distinct Worlds",
  title: "Culinary Hearth",
  description:
    "Where fire, craft, and local land converge in three singular dining destinations.",
} as const;

export const timeOptions = [
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

export const guestOptions = [1, 2, 3, 4, 5, 6];

export const formFields = [
  {
    name: "name" as const,
    label: "Full Name",
    type: "text",
    placeholder: "Alexandra Monroe",
  },
  {
    name: "email" as const,
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
];

export const reservationSuccess = {
  title: "Reservation Received",
  description: "Our team will confirm your table within 2 hours via email.",
} as const;

export const reservationSection = {
  tag: "Reserve Your Table",
  title: "Secure Your Seat",
  subtitle:
    "Tables are limited and highly sought. We recommend reserving at least 48 hours in advance.",
} as const;

export const formLabels = {
  date: "Date",
  time: "Time",
  guests: "Guests",
  specialRequests: "Special Requests",
  timePlaceholder: "Select time",
  guestsPlaceholder: "Select guests",
  requestsPlaceholder:
    "Dietary requirements, allergies, celebrations...",
  submitText: "Confirm Table",
} as const;
