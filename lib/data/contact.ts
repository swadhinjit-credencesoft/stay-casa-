export const contactHero = {
  bgImage: "/jaipurbaground.avif",
  tag: "We're Here",
  title: "Contact & Concierge",
  description:
    "Our dedicated concierge team is available 24 hours a day to assist with any aspect of your stay or enquiry.",
} as const;

export const contactInfo = [
  {
    label: "Phone",
    value: "+91  9773 30 21 54",
    href: "tel:+ 919773302154",
  },
  {
    label: "Email",
    value: "staycasainn@gmail.com",
    href: "mailto:staycasainn@gmail.com",
  },
  {
    label: "Address",
    value: "R-3-50 North Part, Indraprasth Colony, Sodala, Jaipur",
    href: "https://maps.google.com",
  },
];

export const contactWhatsApp = {
  title: "Chat on WhatsApp",
  description: "Average response under 3 minutes for urgent enquiries",
  buttonText: "Open WhatsApp",
  link: "https://api.whatsapp.com/send?phone=9773302154&text=This%20is%20an%20Enquiry%20from%20%3A%20The%20HotelMate%20Website%0AHotel%20Name%3A%20Stay%20Casa%20Inn%2C%0AProperty%20Id%3A%203576%2C%0AexternalSite%3A%20WebSite%2C%0AAddress%3A%20R-3-50%20North%20Part%2C%20Indraprasth%20Colony%2C%20Chordia%20City%2C%20Sodala%2C%20Jaipur%2C%20India",
} as const;

export const contactLocation = {
  sectionTag: "Find Us",
  sectionTitle: "Our Location",
  lines: [
    "R-3-50 North Part",
    "Indraprasth Colony, Chordia City",
    "Sodala, Jaipur",
  ],
  mapLink:
    "https://maps.google.com/?q=R-3-50+North+Part+Indraprasth+Colony+Sodala+Jaipur",
  mapButtonText: "View on Google Maps",
} as const;
