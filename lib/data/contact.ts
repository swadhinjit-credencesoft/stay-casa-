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
    href: "tel:+919773302154",
  },
  {
    label: "Email",
    value: "staycasainn@gmail.com",
    href: "mailto:staycasainn@gmail.com",
  },
  {
    label: "Address",
    value: "112, New Sanganer Rd, Katewa Nagar, Sodala, Gurjar Ki Thadi, Jaipur, Rajasthan 302006",
    href: "https://maps.google.com",
  },
];

export const contactWhatsApp = {
  title: "Chat on WhatsApp",
  description: "Average response under 3 minutes for urgent enquiries",
  buttonText: "Open WhatsApp",
  link: "https://api.whatsapp.com/send?phone=9773302154&text=This%20is%20an%20Enquiry%20from%20%3A%20The%20HotelMate%20Website%0AHotel%20Name%3A%20Stay%20Casa%20Inn%2C%0AProperty%20Id%3A%203576%2C%0AexternalSite%3A%20WebSite%2C%0AAddress%3A%20112%2C%20New%20Sanganer%20Rd%2C%20Katewa%20Nagar%2C%20Sodala%2C%20Gurjar%20Ki%20Thadi%2C%20Jaipur%2C%20Rajasthan%20302006",
} as const;

export const contactLocation = {
  sectionTag: "Find Us",
  sectionTitle: "Our Location",
  lines: [
    "112, New Sanganer Rd",
    "Katewa Nagar, Sodala",
    "Gurjar Ki Thadi, Jaipur, Rajasthan 302006",
  ],
  streetViewThumb:
    "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=1200&h=800&panoid=QI1hRbaqyI3-IhFlEhPYQQ&yaw=96.87&pitch=5.5",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=26.8825417,75.7653348&z=19&output=embed",
  mapLink:
    "https://www.google.com/maps/@26.8825417,75.7653348,3a,39.4y,96.87h,84.49t/data=!3m7!1e1!3m5!1sQI1hRbaqyI3-IhFlEhPYQQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D5.512495506024763%26panoid%3DQI1hRbaqyI3-IhFlEhPYQQ%26yaw%3D96.86599549128485!7i16384!8i8192",
  mapButtonText: "Explore 360° Street View",
} as const;
