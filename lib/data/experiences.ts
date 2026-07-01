import { MapPin, Users, CheckCircle, Wifi, Shield } from "lucide-react";

export const expHero = {
  image: "/DSC_3823.JPG.avif",
  tag: "Guest Experience",
  title: "Experience Comfort, Convenience & Warm Hospitality",
  description:
    "At Stay Casa Inn Jaipur, every guest is welcomed with comfort, cleanliness, and personalized service. Located in the heart of the Keshopura locality, our hotel is designed to provide a relaxing and hassle-free stay for business travelers, families, couples, and solo explorers.",
} as const;

export const expComfortStay = {
  tag: "A Comfortable Stay You'll Remember",
  title: "Warm Hospitality in the Heart of Jaipur",
  paragraphs: [
    "From the moment you arrive, our friendly staff ensures a smooth check-in experience and attentive service throughout your stay. Our well-maintained rooms offer modern amenities, comfortable bedding, air conditioning, high-speed Wi-Fi, and a peaceful atmosphere to help you unwind after a busy day in the Pink City.",
    "Our dedicated team takes pride in delivering warm Rajasthani hospitality. Guests frequently appreciate our courteous staff, quick service, and commitment to making every stay enjoyable and memorable.",
  ],
  image: "/DSC_3823.JPG.avif",
  badge: { title: "Prime", description: "Location in Keshopura" },
} as const;

export const expLocation = {
  tag: "Prime Location",
  title: "Conveniently Situated on New Sanganer Road",
  description:
    "Stay Casa Inn offers easy access to Jaipur's major attractions, shopping centers, business hubs, restaurants, and transportation facilities. Whether you're visiting for work or leisure, you'll find everything within easy reach.",
} as const;

export const expAmenitiesSection = {
  tag: "Clean, Spacious & Well-Equipped",
  title: "Thoughtfully Designed for Maximum Comfort",
  description:
    "Our rooms are thoughtfully designed to provide maximum comfort and convenience during your stay.",
  image: "/DSC_3793.JPG.avif",
} as const;

export const amenities = [
  "Comfortable beds and premium linens",
  "Air-conditioned accommodation",
  "Free high-speed Wi-Fi",
  "Smart TV and entertainment facilities",
  "Daily housekeeping service",
  "24-hour room service",
  "Clean and hygienic bathrooms",
];

export const expWhyChooseUs = {
  tag: "Why Choose Us",
  title: "Why Guests Choose Stay Casa Inn",
} as const;

export const highlights = [
  { icon: MapPin, text: "Excellent location in Jaipur" },
  { icon: Users, text: "Friendly and professional staff" },
  { icon: CheckCircle, text: "Comfortable and hygienic rooms" },
  { icon: Wifi, text: "Free Wi-Fi connectivity" },
  { icon: Shield, text: "Safe and secure environment" },
];

export const expTestimonialsSection = {
  tag: "What Our Guests Say",
  title: "Guest Stories",
} as const;

export const testimonials = [
  {
    quote:
      "Comfortable rooms, excellent service, and a great location. The staff was extremely helpful throughout our stay.",
    author: "— Guest Review",
  },
  {
    quote:
      "Clean rooms, peaceful environment, and excellent value for money. Highly recommended for Jaipur visitors.",
    author: "— Guest Review",
  },
  {
    quote:
      "A wonderful experience with warm hospitality and modern facilities. Will definitely visit again.",
    author: "— Guest Review",
  },
];

export const expTraveler = {
  tag: "Perfect for Every Traveler",
  title: "Affordable Comfort Without Compromise",
  description:
    "Whether you're planning a family vacation, a business trip, a weekend getaway, or a short city visit, Stay Casa Inn offers affordable comfort without compromising on quality.",
} as const;

export const expCta = {
  title: "Book Your Stay Today",
  description:
    "Experience the perfect blend of comfort, convenience, and hospitality at Stay Casa Inn Jaipur. We look forward to making your Jaipur visit memorable and enjoyable.",
  buttonText: "Book Now",
  buttonLink: "https://bookone.io/Stay-Casa-Inn-Hotel?bookingEngine=true",
} as const;
