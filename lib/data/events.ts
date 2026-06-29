import {
  Briefcase, Cake, Heart, Users, PartyPopper, Luggage,
  MapPin, Star, Check
} from "lucide-react";

export const heroContent = {
  image: "/DSC_3833-HDR.jpg.avif",
  imageAlt: "Events at Stay Casa Inn",
  tag: "Events at Stay Casa Inn",
  title: "Create Memorable Moments",
  description: "Whether you're planning a family celebration, a corporate gathering, a birthday party, an anniversary, or a social event — our welcoming ambiance and attentive hospitality help create unforgettable experiences.",
} as const;

export const introContent = {
  tag: "Perfect Setting for Every Occasion",
  title: "Every Special Occasion Deserves a Perfect Setting",
  description: 'Located in the peaceful surroundings of Indraprasth Colony, Chordia City, Jaipur, Stay Casa Inn offers a comfortable and convenient venue for intimate events and gatherings. Our team is dedicated to ensuring every event is organized smoothly, allowing you to focus on enjoying the occasion with your guests.',
} as const;

export const eventTypes = [
  {
    icon: Briefcase,
    title: "Corporate Meetings & Business Gatherings",
    description: "Host productive meetings, business discussions, training sessions, and small corporate events in a comfortable and professional environment."
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Celebrate your special day with family and friends in a warm and inviting atmosphere. Our team can assist in creating a memorable birthday experience."
  },
  {
    icon: Heart,
    title: "Anniversary Parties",
    description: "Mark life's most cherished milestones with an elegant and intimate celebration designed to make lasting memories."
  },
  {
    icon: Users,
    title: "Family Gatherings",
    description: "Bring loved ones together for reunions, get-togethers, festive occasions, and special family events in a relaxed setting."
  },
  {
    icon: PartyPopper,
    title: "Social Events",
    description: "From community gatherings to private functions, Stay Casa Inn provides the ideal space and hospitality for various social occasions."
  },
  {
    icon: Luggage,
    title: "Group Stays & Travel Events",
    description: "Whether it's a wedding group, corporate team, educational tour, or family trip, we offer comfortable accommodation and personalized service for group bookings."
  }
];

export const eventTypesContent = {
  tag: "Events We Cater To",
  title: "Occasions We Celebrate With You",
  items: eventTypes,
};

export const whyUs = [
  { icon: MapPin, text: "Convenient location in Jaipur" },
  { icon: Star, text: "Comfortable and well-maintained facilities" },
  { icon: Users, text: "Professional and friendly hospitality team" },
  { icon: Check, text: "Personalized event support" },
  { icon: Star, text: "Affordable event and stay packages" },
  { icon: Check, text: "Clean, safe, and welcoming environment" },
  { icon: Users, text: "Ideal for intimate gatherings and private celebrations" },
];

export const whyChooseUsContent = {
  tag: "Why Choose Us",
  title: "Why Choose Stay Casa Inn for Your Event?",
  items: whyUs,
};

export const customAssistanceContent = {
  tag: "Customized Event Assistance",
  title: "Tailored Support for Every Celebration",
  description: 'Every event is unique, and we work closely with our guests to understand their requirements and preferences. Our team is committed to providing personalized support to help make your celebration or gathering smooth, enjoyable, and memorable.',
} as const;

export const ctaContent = {
  title: "Plan Your Event with Us",
  description: "Whether you're organizing a corporate meeting, a family celebration, or a special gathering, Stay Casa Inn offers the perfect combination of comfort, convenience, and hospitality.",
  linkHref: "/contact",
  linkText: "Contact Us Today",
} as const;
