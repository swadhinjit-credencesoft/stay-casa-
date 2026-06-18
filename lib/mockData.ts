export interface RoomSuite {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  size: number; // in sq.ft
  occupancy: number; // max guests
  price: number; // per night in USD
  images: string[];
  amenities: string[];
  features: { label: string; value: string }[];
  virtualTourUrl?: string;
  view: string;
}

export interface Experience {
  id: string;
  title: string;
  category: "wellness" | "adventure" | "culture" | "dining" | "events";
  tagline: string;
  description: string;
  duration: string;
  price?: string;
  image: string;
  details: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  description: string;
  cuisine: string;
  hours: string;
  dressCode: string;
  chef: string;
  image: string;
  menuHighlights: { name: string; description: string; price?: string }[];
}

export interface SpaTreatment {
  id: string;
  name: string;
  category: "treatments" | "rituals" | "packages";
  duration: number; // minutes
  price: number;
  description: string;
  benefits: string[];
}

export interface Offer {
  id: string;
  title: string;
  category: "seasonal" | "honeymoon" | "family" | "corporate";
  tagline: string;
  description: string;
  benefits: string[];
  promoCode: string;
  validUntil: string;
  image: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishedAt: string;
  summary: string;
  content: string; // Markdown or plain text
  author: { name: string; role: string; avatar: string };
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "suites" | "wellness" | "dining" | "resort" | "events";
  mediaType: "image" | "video";
  url: string;
  thumbnail: string;
}

// -------------------------------------------------------------
// MOCK DATA GENERATION
// -------------------------------------------------------------

export const roomsSuites: RoomSuite[] = [
  {
    id: "suite-deluxe",
    name: "Deluxe Room",
    slug: "deluxe-room",
    tagline: "Comfort and convenience for a relaxing stay.",
    description: "Our Deluxe Room offers a perfect blend of comfort and functionality. Featuring a spacious layout with a king-sized bed, modern amenities, and thoughtful touches throughout. Ideal for business travelers and couples seeking a comfortable stay.",
    size: 120,
    occupancy: 2,
    price: 1800,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
    ],
    amenities: [
      "Air Conditioning",
      "Bathroom with Hot & Cold Water",
      "Complimentary Mineral Water",
      "Wi-Fi",
      "Kettle",
      "Electronic Safe",
      "TV",
      "Toiletries",
      "Towels"
    ],
    features: [
      { label: "Bed Type", value: "1 King Bed" },
      { label: "View", value: "City View" },
      { label: "Bathrooms", value: "1 Bathroom" },
      { label: "Size", value: "120 sq.ft" }
    ],
    view: "City"
  },
  {
    id: "suite-super-deluxe",
    name: "Super Deluxe Room",
    slug: "super-deluxe-room",
    tagline: "Enhanced comfort with premium amenities.",
    description: "The Super Deluxe Room elevates your stay with additional space and enhanced amenities. Enjoy the comfort of a king-sized bed, modern bathroom facilities, and all the essentials for a memorable stay. Perfect for those who appreciate the finer details.",
    size: 120,
    occupancy: 2,
    price: 2100,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200"
    ],
    amenities: [
      "Air Conditioning",
      "Bathroom with Hot & Cold Water",
      "Complimentary Mineral Water",
      "Wi-Fi",
      "Kettle",
      "Electronic Safe",
      "TV",
      "Toiletries",
      "Towels"
    ],
    features: [
      { label: "Bed Type", value: "1 King Bed" },
      { label: "View", value: "City View" },
      { label: "Bathrooms", value: "1 Bathroom" },
      { label: "Size", value: "120 sq.ft" }
    ],
    view: "City"
  },
  {
    id: "suite-suite-room",
    name: "Suite Room",
    slug: "suite-room",
    tagline: "Extra space and premium comfort for an elevated stay.",
    description: "Our Suite Room offers generous living space with a separate sleeping area featuring a king-sized bed. With additional legroom, premium amenities, and thoughtful detailing, it is designed for guests who desire more space and comfort during their stay.",
    size: 140,
    occupancy: 2,
    price: 2400,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
    ],
    amenities: [
      "Air Conditioning",
      "Bathroom with Hot & Cold Water",
      "Mineral Water (additional charge)",
      "Wi-Fi",
      "Kettle",
      "Electronic Safe",
      "TV",
      "Toiletries",
      "Towels"
    ],
    features: [
      { label: "Bed Type", value: "1 King Bed" },
      { label: "View", value: "City View" },
      { label: "Bathrooms", value: "1 Bathroom" },
      { label: "Size", value: "140 sq.ft" }
    ],
    view: "City"
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-sound-bath",
    title: "Vibrational Sound Bath & Meditation",
    category: "wellness",
    tagline: "Restore cognitive harmony in our volcanic cavern.",
    description: "Harness the acoustics of our volcanic rock chamber as master practitioners play quartz crystal singing bowls and therapeutic gongs, guiding you into deep meditative states.",
    duration: "90 Minutes",
    price: "$250 / guest",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    details: [
      "Acoustically optimized lava-stone cave",
      "Custom crystal singing bowls attuned to natural frequencies",
      "Includes organic adaptogenic elixirs post-treatment",
      "Limited to 4 participants per session for maximum privacy"
    ]
  },
  {
    id: "exp-marine-safari",
    title: "Private Reef Marine Archeology Safari",
    category: "adventure",
    tagline: "Explore ancient underwater ruins with our resident marine biologist.",
    description: "Submerge into our secluded house reef to document ancient shipwrecks and active coral restoration sites using state-of-the-art sea scooters.",
    duration: "Half Day",
    price: "$850 / boat",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200",
    details: [
      "Guided by professional marine archeologist",
      "High-speed Seabob propulsion rentals included",
      "Underwater 4K photography and high-def video log",
      "Gourmet champagne lunch box served aboard our custom yacht"
    ]
  },
  {
    id: "exp-heli-dining",
    title: "Helicopter Peak Picnic & Tasting",
    category: "dining",
    tagline: "Dine on a glacier peak or volcano summit.",
    description: "Ascend via private Airbus helicopter to the highest peak overlooking the archipelago, where our culinary director prepares a fire-cooked local degustation menu.",
    duration: "4 Hours",
    price: "$2,400 / couple",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
    details: [
      "Chartered private flight with scenic flyby",
      "Live cooking by personal Michelin-starred chef",
      "Rare wine pairings curated by our lead sommelier",
      "Custom cashmere blankets and warming pods provided"
    ]
  },
  {
    id: "exp-indigo-dyeing",
    title: "Heritage Indigo Dyeing Workshop",
    category: "culture",
    tagline: "Learn the secrets of organic pigment extraction.",
    description: "Engage with local masters who preserve century-old natural dyeing methodologies. Extract rich pigments from indigo plants grown in the resort's estate garden.",
    duration: "3 Hours",
    price: "$180 / guest",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200",
    details: [
      "Private lesson in an open-air timber studio",
      "Harvest your own plant leaves from the organic farm",
      "Design and dye a bespoke silk scarf to take home",
      "Traditional herbal tea tasting included"
    ]
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "rest-amber",
    name: "Amber Woodfire Hearth",
    tagline: "Primal fire cooking meets sophisticated micro-gastronomy.",
    description: "Built entirely around a massive double-hearth oak grill, Amber honors elemental cooking techniques. We dry-age local heritage meats on-site and grill wild ocean catches over glowing embers of cherry wood.",
    cuisine: "Contemporary Woodfire & Grill",
    hours: "18:00 – 23:00 (Dinner Only)",
    dressCode: "Smart Elegant",
    chef: "Mikołaj Krasucki",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    menuHighlights: [
      { name: "30-Day Dry Aged Wagyu Ribeye", description: "Smoked over oak, served with black garlic reduction and wild forest mushrooms", price: "$140" },
      { name: "Charred Norwegian Diver Scallops", description: "Basted in brown butter, white asparagus, sea fern foam", price: "$52" },
      { name: "Smoked Honey & Lavender Soufflé", description: "Cooked to order, served with local pollen gelato", price: "$24" }
    ]
  },
  {
    id: "rest-shio",
    name: "Shio Omakase",
    tagline: "Hyper-focused Japanese seafood artistry.",
    description: "A ten-seat counter crafted from a single slab of 300-year-old Hinoki wood. Master Chef Kenji Sato delivers a seasonal 18-course tasting menu highlighting fresh catches flown in daily from Tokyo and local cold-current bays.",
    cuisine: "Traditional & Modern Omakase",
    hours: "18:00 & 20:30 (Two Seatings)",
    dressCode: "Formal",
    chef: "Kenji Sato",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200",
    menuHighlights: [
      { name: "A5 Miyazaki Wagyu Nigiri", description: "Seared with hot embers, white truffle oil, sea salt flake" },
      { name: "Hokkaido Sea Urchin & Caviar", description: "Crisp nori sheet, gold leaf, house-cured soy glaze" },
      { name: "Smoked Binchotan Otoro", description: "Fatty bluefin tuna belly lightly seared over special Japanese charcoal" }
    ]
  },
  {
    id: "rest-nexa",
    name: "Nexa Botanic Garden",
    tagline: "Zero-waste botanical dining in a glass restaurant.",
    description: "Surrounded by exotic ferns and orchid systems, Nexa features a plant-forward, bio-dynamic menu. 80% of ingredients are harvested from the resort's greenhouse within hours of plating.",
    cuisine: "Biodynamic Plant-Forward & Seafood",
    hours: "07:00 – 16:00 (Breakfast & Lunch)",
    dressCode: "Casual Luxury",
    chef: "Elara Vane",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
    menuHighlights: [
      { name: "Fermented Heirloom Tomato Gazpacho", description: "Dehydrated basil oil, frozen sour cream, wild flowers", price: "$28" },
      { name: "Salt-Baked Garden Celeriac", description: "Toasted hazelnut emulsion, watercress fluid gel, black truffle", price: "$38" }
    ]
  }
];

export const spaTreatments: SpaTreatment[] = [
  {
    id: "spa-volcanic-wrap",
    name: "Volcanic Lava Ash Body Cocoon",
    category: "treatments",
    duration: 90,
    price: 320,
    description: "An intensive body treatment utilizing rich, mineral-laden ash from surrounding dormant volcanoes. Detoxifies, exfoliates, and re-mineralizes the skin, leaving it incredibly smooth and nourished.",
    benefits: [
      "Draws out deep-seated skin impurities",
      "Increases blood circulation and lymph flow",
      "Soothes muscle fatigue and joint stiffness",
      "Nourishing volcanic clay moisturizing layer"
    ]
  },
  {
    id: "spa-sound-massage",
    name: "Sound Healing Synchronized Abhyanga",
    category: "rituals",
    duration: 120,
    price: 450,
    description: "A synchronized four-hand Ayurvedic warm oil massage combined with vibrational therapy. As warm medicated oils are massaged into the body, tuning forks are placed on spinal energy nodes to realign kinetic pathways.",
    benefits: [
      "Rebalances nervous system and sleep cycles",
      "Intense muscle tension relief",
      "Restores natural energy alignment",
      "Deep emotional and physical relaxation"
    ]
  },
  {
    id: "spa-couples-journey",
    name: "The Celestial Canopy Couples Journey",
    category: "packages",
    duration: 180,
    price: 980,
    description: "Designed for couples, this journey begins in a private outdoor treehouse bath overlooking the forest. Followed by a custom deep tissue massage, a collagen facial, and concluded with organic berries and chilled crystal champagne.",
    benefits: [
      "Private outdoor infinity copper tub bath",
      "Tailored deep-tissue full body massage",
      "Botanical facial restoration treatment",
      "Champagne, strawberries, and relaxation deck lounge access"
    ]
  }
];

export const offers: Offer[] = [
  {
    id: "off-mid-year-escape",
    title: "The Mid-Year Escape",
    category: "seasonal",
    tagline: "Extend your retreat and discover absolute rejuvenation.",
    description: "Book four nights or more in any Suite or Residence and receive a complimentary fifth night, plus daily spa credits, private airport chauffeur service, and culinary tastings.",
    benefits: [
      "Complimentary fifth night of stay",
      "$200 Daily Spa & Wellness treatment credit",
      "Return luxury Mercedes S-Class airport transfer",
      "Chef's custom welcome amenity in-suite"
    ],
    promoCode: "STAYCASA5",
    validUntil: "October 31, 2026",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "off-honeymoon-cove",
    title: "Cove Romance & Sea Solitude",
    category: "honeymoon",
    tagline: "Curate unforgettable moments for your new chapter.",
    description: "Designed exclusively for newlyweds. Experience a private candlelight dinner on a floating ocean pontoon, a couples massage, and a custom private sunrise yacht cruise.",
    benefits: [
      "Floating pontoon 4-course dinner with private butler",
      "3-Hour Celestial Canopy Couples Spa Journey",
      "Private sunrise yacht cruise with caviar breakfast",
      "Monogrammed luxury organic robes to take home"
    ],
    promoCode: "COVELOVE",
    validUntil: "December 15, 2026",
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1200"
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "blog-architecture",
    title: "Designing the Intangible: The Architectural Ethos of our Suites",
    slug: "designing-the-intangible",
    category: "Architecture & Design",
    readTime: "6 Min Read",
    publishedAt: "May 24, 2026",
    summary: "Discover how the minimalist dry-stone architecture of our resort works in absolute symbiosis with volcanic terrain and local micro-climates.",
    content: "## Nature as the Principal Architect\n\nWhen we first surveyed the volcanic cliffs of the East Bay, our objective was not to build structures that stood out against the landscape, but rather structures that emerged naturally from it. Drawing inspiration from local dry-stone masonry and ancient basalt formations, we designed the resort to harmonize with the surroundings.\n\n### The Choice of Basalt and Teak\n\nEvery raw material was chosen for durability, thermal properties, and regional history:\n- **Basalt Wallwork**: Locally quarried lava-stone insulates during hot afternoons and slowly radiates heat during cooler coastal evenings.\n- **Sustainable Teak**: Left untreated, it matures into a magnificent silver-grey hue, mirroring the weathered coastal cliffs.\n\n### Integrating the Micro-climate\n\nRather than blocking ocean breezes, the suites are shaped like aerodynamic forms. They draw refreshing offshore drafts through central light wells, eliminating the need for heavy mechanical cooling and offering pure, fresh air throughout the year.",
    author: {
      name: "Tadao Ando Studio",
      role: "Architectural Consultants",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "blog-sound-therapy",
    title: "Resonance & Healing: The Science Behind Volcanic Sound Baths",
    slug: "resonance-and-healing-sound-baths",
    category: "Wellness & Science",
    readTime: "4 Min Read",
    publishedAt: "June 02, 2026",
    summary: "How vibrational acoustic frequencies interact with brain waves to induce profound meditative states and physiological tension relief.",
    content: "## The Neurological Impact of Sound\n\nSound is not merely something we perceive with our ears; it is a mechanical force that resonates directly with our cellular structure. During our signature Sound Baths in the volcanic lava cave, participants are enveloped by acoustic waves designed to promote restorative mental states.\n\n### Shifting from Beta to Theta Waves\n\nUnder typical working stress, the human brain functions within the high-frequency **Beta wave** spectrum (12–30 Hz). By introducing rhythmic, pure frequencies from quartz singing bowls, the brain naturally aligns with these vibrations, shifting down into **Alpha** (8–12 Hz) and **Theta** (4–8 Hz) states. These frequencies are associated with deep relaxation, creative dreaming, and physical cell regeneration.\n\n### Volcanic Chamber Amplification\n\nThe unique basalt density of our subterranean meditation cave amplifies vibrational harmonics. The lava walls diffuse harsh echo peaks while boosting low-end grounding tones, creating a sensory environment that helps restore both mental focus and physical alignment.",
    author: {
      name: "Dr. Clara Mercer",
      role: "Director of Integrative Wellness",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    image: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1200"
  }
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Sunset over the Ocean Suite", category: "suites", mediaType: "image", url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200", thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400" },
  { id: "g2", title: "Subterranean sound bath experience", category: "wellness", mediaType: "image", url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400" },
  { id: "g3", title: "Amber Woodfire Hearth main dining room", category: "dining", mediaType: "image", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200", thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400" },
  { id: "g4", title: "Aerial view of our private peninsula", category: "resort", mediaType: "image", url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200", thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400" },
  { id: "g5", title: "Destination wedding at Cliff Edge Cove", category: "events", mediaType: "image", url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400" },
  { id: "g6", title: "Infinity pool stretching into the sea", category: "resort", mediaType: "image", url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200", thumbnail: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400" }
];
