import type { Metadata } from "next";
import {
  Building2, MapPin, Clock, Wifi, Shield, Users, Home, Star
} from "lucide-react";

export const aboutMetadata: Metadata = {
  title: "About Stay Casa Inn | Hotel in Jaipur",
  description: "Discover Stay Casa Inn in Indraprasth Colony, Chordia City, Jaipur — comfortable rooms, warm hospitality, and a peaceful location for business and leisure travelers.",
};

export const heroContent = {
  tag: "About Stay Casa Inn",
  title: "Your Comfortable Home Away from Home",
  description: "Nestled in the peaceful surroundings of Indraprasth Colony, Chordia City, Jaipur — offering the perfect balance of tranquility, convenience, and modern hospitality.",
  image: "/DSC_3833-HDR.jpg.avif",
  imageAlt: "Stay Casa Inn Jaipur",
} as const;

export const welcomeContent = {
  tag: "Welcome to Stay Casa Inn",
  title: "Warm Hospitality in the Heart of Jaipur",
  paragraphs: [
    'Welcome to <strong>Stay Casa Inn</strong>, your comfortable home away from home in the heart of Jaipur. Located at <strong>R-3-50 North Part, Indraprasth Colony, Chordia City, Jaipur</strong>, our property offers easy access to Jaipur&#39;s major attractions, commercial centers, shopping destinations, and transportation hubs while allowing guests to enjoy a calm and relaxing residential environment.',
    'At Stay Casa Inn, we are committed to delivering a comfortable and memorable stay experience. Our thoughtfully designed rooms are equipped with modern amenities, including comfortable bedding, air conditioning, complimentary high-speed Wi-Fi, flat-screen televisions, and well-maintained private bathrooms.',
    'With facilities such as 24-hour front desk assistance, regular housekeeping, and secure premises, we strive to ensure a safe, hassle-free, and enjoyable experience for every guest. Whether you are traveling for business meetings, family vacations, sightseeing, or a short weekend getaway, our dedicated team is always ready to assist you.',
  ],
  image: "/DSC_3842-HDR.jpg.avif",
  imageAlt: "Hotel room",
  pinLocation: "Indraprasth Colony",
  pinSubLocation: "Chordia City, Jaipur",
} as const;

export const missionVisionContent = {
  mission: {
    icon: Star,
    title: "Our Mission",
    text: "To provide comfortable, affordable, and quality accommodation with personalized hospitality, ensuring every guest enjoys a pleasant and memorable stay in Jaipur.",
  },
  vision: {
    icon: Building2,
    title: "Our Vision",
    text: "To become a trusted hospitality destination recognized for exceptional guest experiences, comfort, and value while showcasing the warmth and charm of Jaipur.",
  },
} as const;

export const highlightsContent = {
  tag: "Why Choose Us",
  title: "Why Choose Stay Casa Inn?",
  items: [
    { icon: Home, title: "Comfortable & Well-Furnished Rooms", description: "Thoughtfully designed rooms with modern amenities for a relaxing stay." },
    { icon: MapPin, title: "Peaceful & Secure Location", description: "Nestled in the tranquil Indraprasth Colony, Chordia City, Jaipur." },
    { icon: Wifi, title: "Complimentary Wi-Fi Access", description: "Stay connected with high-speed internet throughout your visit." },
    { icon: Building2, title: "Air-Conditioned Accommodation", description: "Enjoy climate-controlled comfort in every room." },
    { icon: Clock, title: "24-Hour Guest Assistance", description: "Our front desk team is available around the clock to help you." },
    { icon: Users, title: "Professional Housekeeping", description: "Regular cleaning and upkeep to ensure a hygienic environment." },
    { icon: Shield, title: "Safe & Secure Premises", description: "Your safety and peace of mind are our top priorities." },
    { icon: Star, title: "Excellent Value for Money", description: "Affordable rates without compromising on quality or comfort." },
  ],
} as const;

export const locationContent = {
  tag: "Prime Location",
  title: "Explore the Pink City",
  paragraphs: [
    'The strategic location of Stay Casa Inn makes it easy to explore the rich heritage and vibrant culture of Jaipur. Guests can conveniently visit popular landmarks, shopping markets, restaurants, and entertainment venues while enjoying a peaceful retreat at the end of the day.',
    'Whether you are here for business or leisure, our location on New Sanganer Road ensures you&#39;re never far from where you need to be.',
  ],
  image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200",
  imageAlt: "Jaipur city",
} as const;

export const ctaContent = {
  title: "We Look Forward to Welcoming You",
  description: "At Stay Casa Inn, we believe that every journey deserves a comfortable stay. We look forward to welcoming you and making your visit to Jaipur truly enjoyable and memorable.",
  linkHref: "/rooms",
  linkText: "View Our Rooms",
} as const;
