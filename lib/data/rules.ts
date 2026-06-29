import { Ban, CheckCircle, MapPin, Users, XCircle } from "lucide-react";

export const rulesMetadata = {
  title: "Rules & Regulations | Stay Casa Inn",
  description: "Hotel rules and regulations for guests at Stay Casa Inn, Jaipur.",
};

export const rulesHeroData = {
  heading: "Rules & Regulations",
  description: "Guidelines to ensure a pleasant and safe stay for all guests.",
};

export const rulesList = [
  { icon: Ban, title: "Pets Are Not Allowed", description: "Pets are not permitted anywhere on the hotel premises.", variant: "restricted" },
  { icon: CheckCircle, title: "Couples Are Welcome", description: "Couples are allowed to book and stay at the property.", variant: "allowed" },
  { icon: CheckCircle, title: "Local IDs Accepted", description: "Guests with local IDs are welcome to check in.", variant: "allowed" },
  { icon: MapPin, title: "Cancellation Policy", description: "If you cancel within 24 hours before check-in, no refund is applicable. If you cancel more than 28 hours before check-in, a 50% refund will be applicable.", variant: "info" },
  { icon: Users, title: "Guest Responsibility", description: "Guests are responsible for their own safety and belongings. The hotel management is not responsible for any loss or damage to personal property.", variant: "info" },
  { icon: XCircle, title: "Prohibited Activities", description: "Smoking in non-designated areas, use of illegal substances, and any activity that disturbs other guests is strictly prohibited.", variant: "restricted" },
];
