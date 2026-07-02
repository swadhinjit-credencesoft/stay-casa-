import { BOOKING_ENGINE_URL } from "@/lib/bookone";

export interface Attraction {
  slug: string;
  name: string;
  rating: number;
  reviews: string;
  distance: string;
  duration: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  bestTime: string;

  highlights: string[];
  tips: string[];
  coordinates: { lat: number; lng: number };
}

export const attractions: Attraction[] = [
  {
    slug: "amber-palace",
    name: "Amber Palace",
    rating: 4.6,
    reviews: "18,716",
    distance: "12 km",
    duration: "30 min",
    description: "A magnificent fort-palace complex built with red sandstone and marble.",
    longDescription:
      "One of Jaipur's most iconic landmarks, Amber Palace is a sprawling fort-palace complex built in 1592 by Raja Man Singh. The complex is a stunning blend of Rajput and Mughal architecture, featuring intricate mirror work (Sheesh Mahal), beautiful courtyards, and panoramic views of the surrounding hills. Visitors can either take a jeep ride or an elephant ride to reach the main entrance. The light and sound show in the evening is a must-experience.",
    image: "/ambarjaipur.jpg",
    category: "Fort & Palace",
    bestTime: "8 AM – 11 AM",

    highlights: ["Sheesh Mahal (Mirror Palace)", "Light & Sound Show", "Elephant Ride", "Panoramic Hill Views"],
    tips: ["Arrive early to avoid crowds", "Hire a guide for historical context", "Combine with Jaigarh Fort visit"],
    coordinates: { lat: 26.9855, lng: 75.8513 },
  },
  {
    slug: "hawa-mahal",
    name: "Hawa Mahal",
    rating: 4.2,
    reviews: "9,263",
    distance: "5.8 km",
    duration: "15 min",
    description: "The iconic 'Palace of Winds' with 953 windows.",
    longDescription:
      "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is Jaipur's most iconic structure. The five-story pyramid-shaped facade with 953 small windows (jharokhas) was designed to allow royal women to observe street festivals without being seen. The honeycomb-like structure is built of red and pink sandstone, and the view from the top offers a stunning panorama of the city.",
    image: "/hawamahal.webp",
    category: "Heritage Monument",
    bestTime: "9 AM – 10:30 AM (morning light is best for photos)",
    highlights: ["953 intricate windows", "Sunrise photography", "Street view from top floors", "Adjacent City Palace connection"],
    tips: ["Best photographed from the street opposite", "Visit early for fewer crowds", "Combine with City Palace visit"],
    coordinates: { lat: 26.9239, lng: 75.8267 },
  },
  {
    slug: "city-palace",
    name: "City Palace",
    rating: 4.1,
    reviews: "6,860",
    distance: "6.1 km",
    duration: "15 min",
    description: "A stunning palace complex still home to the royal family.",
    longDescription:
      "The City Palace is a magnificent complex in the heart of Jaipur, built between 1729 and 1732 by Maharaja Sawai Jai Singh II. The palace is a beautiful fusion of Rajput, Mughal, and European architecture. It houses several courtyards, gardens, and buildings including the Chandra Mahal, Mubarak Mahal, and the City Palace Museum. The royal family still resides in a part of the palace.",
    image: "/citypalace.jpg",
    category: "Museum & Palace",
    bestTime: "9:30 AM – 12 PM",
    highlights: ["Chandra Mahal", "Mubarak Mahal", "Royal costume museum", "Massive silver urns"],
    tips: ["Get the audio guide for rich history", "Photography allowed in most areas", "Royal heritage walks available"],
    coordinates: { lat: 26.9256, lng: 75.8236 },
  },
  {
    slug: "jantar-mantar",
    name: "Jantar Mantar",
    rating: 4.3,
    reviews: "7,680",
    distance: "6.3 km",
    duration: "15 min",
    description: "A UNESCO World Heritage site with 19 astronomical instruments.",
    longDescription:
      "Built in 1734 by Maharaja Sawai Jai Singh II, Jantar Mantar is a collection of 19 astronomical instruments designed to measure time, track celestial bodies, and predict eclipses. It is a UNESCO World Heritage site and one of five such observatories built by the king. The Samrat Yantra, the world's largest stone sundial, stands at 27 meters tall and tells time to an accuracy of 2 seconds.",
    image: "/janatamantar.jpg",
    category: "Observatory",
    bestTime: "9 AM – 11 AM (clear skies recommended)",
    highlights: ["Samrat Yantra (giant sundial)", "UNESCO World Heritage site", "19 astronomical instruments", "Ancient science marvel"],
    tips: ["Hire a guide to understand the instruments", "Visit on a clear day", "Combine with City Palace (adjacent)"],
    coordinates: { lat: 26.9247, lng: 75.8244 },
  },
  {
    slug: "jal-mahal",
    name: "Jal Mahal",
    rating: 3.8,
    reviews: "3,987",
    distance: "10 km",
    duration: "25 min",
    description: "A beautiful water palace floating in Man Sagar Lake.",
    longDescription:
      "Jal Mahal (Water Palace) is a stunning palace floating in the middle of Man Sagar Lake, set against the backdrop of the Nahargarh hills. Built in 1750, the palace appears to float on the water's surface. While the palace itself is not open to the public, the view from the shore is breathtaking, especially during sunset when the palace is bathed in golden light.",
    image: "/Jalmahal.jpg",
    category: "Landmark",
    bestTime: "4 PM – 6 PM (sunset)",
    highlights: ["Sunset photography", "Floating palace illusion", "Migratory birds in winter", "Nahargarh hill backdrop"],
    tips: ["Best viewed at sunset", "Don't attempt to enter — closed to public", "Great photo spot from the bridge"],
    coordinates: { lat: 26.9537, lng: 75.8467 },
  },
  {
    slug: "nahargarh-fort",
    name: "Nahargarh Fort",
    rating: 4.2,
    reviews: "2,317",
    distance: "8 km",
    duration: "20 min",
    description: "A majestic fort with panoramic sunset views over Jaipur.",
    longDescription:
      "Perched on the edge of the Aravalli hills, Nahargarh Fort offers breathtaking panoramic views of Jaipur city. Built in 1734 by Maharaja Sawai Jai Singh II, the fort served as a retreat and defense structure. The fort features a wax museum, a step well, and the famous Padao restaurant. The sunset view from the fort is arguably the best in Jaipur.",
    image: "/nahargarhfort.jpg",
    category: "Fort",
    bestTime: "3 PM – 6 PM (sunset)",
    highlights: ["Sunset city views", "Wax museum", "Step wells", "Padao restaurant"],
    tips: ["Reach by 4 PM for sunset", "Carry water — it gets hot hiking", "Great spot for cityscape photography"],
    coordinates: { lat: 26.9376, lng: 75.8148 },
  },
  {
    slug: "birla-mandir",
    name: "Birla Mandir Temple",
    rating: 4.4,
    reviews: "2,615",
    distance: "3 km",
    duration: "8 min",
    description: "A stunning white marble temple dedicated to Lord Vishnu.",
    longDescription:
      "Located just 3 km from Stay Casa Inn, Birla Mandir is a stunning white marble temple dedicated to Lord Vishnu (Narayan) and Goddess Lakshmi. Built by the Birla family in 1988, the temple showcases exquisite marble carvings, intricate sculptures depicting scenes from Hindu mythology, and a peaceful atmosphere perfect for meditation and spiritual reflection.",
    image: "/birlamandir.jpg",
    category: "Temple",
    bestTime: "6 AM – 8 AM (aarti) or 7 PM – 9 PM (evening aarti)",
    highlights: ["White marble architecture", "Evening aarti ceremony", "Mythological carvings", "Peaceful atmosphere"],
    tips: ["Evening aarti is a spiritual experience", "Dress modestly", "Photography allowed outside only"],
    coordinates: { lat: 26.9019, lng: 75.8139 },
  },
  {
    slug: "albert-hall-museum",
    name: "Albert Hall Museum",
    rating: 4.1,
    reviews: "1,614",
    distance: "5 km",
    duration: "12 min",
    description: "The oldest museum in Rajasthan with an Egyptian mummy.",
    longDescription:
      "The Albert Hall Museum (Government Central Museum) is the oldest museum in Rajasthan and a fine example of Indo-Saracenic architecture. Built in 1887, it houses an extensive collection of artifacts including an Egyptian mummy, miniature paintings, carpets, ivory work, and ancient coins. The building itself is a masterpiece worth seeing.",
    image: "/alberthallmusium.jpg",
    category: "Museum",
    bestTime: "10 AM – 12 PM",
    highlights: ["Egyptian mummy", "Miniature painting gallery", "Indo-Saracenic architecture", "Night illumination"],
    tips: ["Allocate at least 2 hours", "Night view with lighting is beautiful", "Guides available at entrance"],
    coordinates: { lat: 26.9123, lng: 75.8198 },
  },
  {
    slug: "jaigarh-fort",
    name: "Jaigarh Fort",
    rating: 4.2,
    reviews: "2,325",
    distance: "12 km",
    duration: "30 min",
    description: "Known as the 'Fort of Victory' with the world's largest cannon.",
    longDescription:
      "Jaigarh Fort, meaning 'Fort of Victory', was built in 1726 by Maharaja Sawai Jai Singh II. It houses the Jaivana Cannon, the world's largest cannon on wheels. The fort offers incredible views of Amber Fort and the surrounding landscape. The palace complex includes a museum, armory, and beautiful gardens.",
    image: "/jaigarhfort.jpg",
    category: "Fort",
    bestTime: "9 AM – 11 AM",
    highlights: ["Jaivana Cannon (world's largest)", "Armory museum", "Panoramic Amber views", "Underground passages"],
    tips: ["Visit together with Amber Fort", "Wear comfortable shoes for walking", "Don't miss the cannon"],
    coordinates: { lat: 26.9855, lng: 75.8467 },
  },
  {
    slug: "galtaji-temple",
    name: "Galtaji Temple",
    rating: 4.0,
    reviews: "396",
    distance: "8 km",
    duration: "20 min",
    description: "Ancient pilgrimage site with natural springs and sacred kunds.",
    longDescription:
      "Galtaji Temple, also known as the Monkey Temple, is an ancient Hindu pilgrimage site in the Aravalli hills. The complex features several temples, natural springs, and sacred water tanks (kunds). The main temple is dedicated to Lord Hanuman and is inhabited by hundreds of friendly monkeys. The Galta Kund, a holy water tank, is believed to have healing properties.",
    image: "/galtaji-temple.jpg",
    category: "Temple",
    bestTime: "6 AM – 9 AM",
    highlights: ["Natural springs", "Monkey sanctuary", "Sacred water tanks", "Hilltop temple views"],
    tips: ["Early morning visit recommended", "Keep valuables secure from monkeys", "Carry water"],
    coordinates: { lat: 26.9186, lng: 75.8556 },
  },
  {
    slug: "bapu-bazar",
    name: "Bapu Bazar",
    rating: 4.0,
    reviews: "327",
    distance: "5 km",
    duration: "12 min",
    description: "Jaipur's most famous shopping market for textiles and handicrafts.",
    longDescription:
      "Bapu Bazar is Jaipur's most bustling and popular market, famous for its vibrant textiles, handcrafted jewellery, mojari shoes, blue pottery, and souvenirs. The market is named after Mahatma Bapu and offers a true taste of local Rajasthani culture. Bargaining is expected, and the narrow lanes are filled with the aroma of street food.",
    image: "/bapubazar.jpg",
    category: "Market",
    bestTime: "4 PM – 8 PM",
    highlights: ["Rajasthani textiles", "Blue pottery", "Mojari shoes", "Street food stalls"],
    tips: ["Bargain hard — start at 50% of quoted price", "Carry cash", "Try local kachori and lassi"],
    coordinates: { lat: 26.9116, lng: 75.8222 },
  },
  {
    slug: "elefanjoy-sanctuary",
    name: "Elefanjoy Sanctuary",
    rating: 5.0,
    reviews: "829",
    distance: "15 km",
    duration: "35 min",
    description: "An ethical elephant sanctuary for feeding, bathing, and painting.",
    longDescription:
      "Elefanjoy Elephant Sanctuary is a world-class ethical sanctuary dedicated to the welfare and conservation of elephants. Visitors can feed, bathe, and paint these gentle giants in a responsible and cruelty-free environment. The sanctuary is committed to ethical tourism practices, making it a must-visit for animal lovers visiting Jaipur.",
    image: "/elephantsantury.jpg",
    category: "Wildlife",
    bestTime: "7 AM – 10 AM",
    highlights: ["Elephant bathing experience", "Feeding and painting sessions", "Educational talks on elephant care", "Ethical tourism practices"],
    tips: ["Book in advance — limited slots", "Wear clothes you don't mind getting wet", "Avoid using flash photography"],
    coordinates: { lat: 26.9500, lng: 75.7800 },
  },
];

export const getAttractionBySlug = (slug: string) => attractions.find((a) => a.slug === slug);

export const touristHeroData = {
  backgroundImage: "/jaipurbaground.avif",
  icon: "Compass",
  title: "Explore Jaipur",
  subtitle: "Discover the Pink City&apos;s most iconic attractions — all within easy reach from Stay Casa Inn.",
  badges: [
    { icon: "MapPin", label: "Sodala, Jaipur" },
    { icon: "Star", label: "Top-rated experiences" },
    { icon: "Clock", label: "3–30 min from hotel" },
  ],
};

export const quickStats = [
  { value: "12+", label: "Top Attractions" },
  { value: "3–30", label: "Minutes from Hotel" },
  { value: "4.2", label: "Average Rating" },
  { value: "4", label: "Curated Itineraries" },
];

export const attractionsSectionHeading = {
  tag: "Must-See Sights",
  title: "Top Attractions in Jaipur",
  subtitle: "Handpicked highlights from TripAdvisor and local guides. All easily accessible from Stay Casa Inn.",
};

export const itinerariesSectionHeading = {
  tag: "Plan Your Day",
  title: "Curated Itineraries",
  subtitle: "Suggested routes based on your interests — all starting from Stay Casa Inn.",
};

export const bookingCtaData = {
  backgroundImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=2400",
  icon: "MapPin",
  tagline: "Start Your Adventure",
  title: "Book Your Stay at Stay Casa Inn",
  subtitle: "Comfortable rooms, prime location, and easy access to all of Jaipur&apos;s top attractions.",
  primaryButton: { label: "Book Now", href: BOOKING_ENGINE_URL, external: true },
  secondaryButton: { label: "Ask About Tours", href: "/contact" },
};

export const detailBackLink = {
  text: "Back to Attractions",
  href: "/tourist",
};

export const detailLabels = {
  visitorInfo: "Visitor Info",
  bestTime: "Best Time to Visit",
  driveFromHotel: "Drive from Hotel",
  distanceFromHotel: "Distance from Hotel",
  about: "About",
  highlights: "Highlights",
  proTips: "Pro Tips",
  stayCtaTitle: "Stay at Stay Casa Inn",
  stayCtaSubtitle: "Just {distance} away — book your stay and explore {name} with ease.",
  bookNow: "Book Now",
};

export const touristCardLabels = {
  reviews: "reviews",
  drive: "drive",
  viewDetails: "View Details",
};

export const attractionHeroLabels = {
  fromHotel: "from Stay Casa Inn",
  drive: "drive",
};

export const experiences = [
  {
    title: "Heritage & Culture Walk",
    places: "Hawa Mahal, City Palace, Jantar Mantar, Albert Hall",
    duration: "Full Day",
    tip: "Start early morning to avoid crowds and heat",
  },
  {
    title: "Fort Explorer Trail",
    places: "Amber Fort, Jaigarh Fort, Nahargarh Fort",
    duration: "Full Day",
    tip: "Combine all three forts — they're connected by scenic hill roads",
  },
  {
    title: "Shopping & Street Food",
    places: "Bapu Bazar, Johari Bazar, Chandpole Bazar",
    duration: "Half Day",
    tip: "Try kachori, dal bati churma, and lassi from local vendors",
  },
  {
    title: "Sunset & Night Tour",
    places: "Nahargarh Fort, Jal Mahal, Patrika Gate",
    duration: "Evening",
    tip: "Nahargarh sunset views are breathtaking — reach by 5 PM",
  },
];
