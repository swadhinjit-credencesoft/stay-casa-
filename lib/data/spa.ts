import { z } from "zod";

export const spaBookingSchema = z.object({
  treatment: z.string().min(1, "Select a treatment"),
  preferredDate: z.string().min(1, "Date required"),
  preferredTime: z.string().min(1, "Time required"),
  therapistGender: z.string().min(1, "Select preference"),
  notes: z.string().optional(),
});

export type SpaBookingForm = z.infer<typeof spaBookingSchema>;

export const spaCategories = ["treatments", "rituals", "packages"];

export const spaTimes = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];

export const spaCertifications = [
  "ESPA International Certified",
  "Ayurvedic Institute of India",
  "CIDESCO International",
  "Green Spa Network Member",
];

export const spaHeroData = {
  imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2400",
  preHeader: "Subterranean Wellness",
  heading: "Spa & Sound Healing",
  description: "Enter our volcanic lava-stone cave and let ancient vibrations restore what modernity has taken.",
};
