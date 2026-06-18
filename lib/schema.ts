import { RoomSuite, Offer, BlogArticle } from "./mockData";

const DOMAIN = "https://luxury-resort-cinematic.vercel.app"; // Fallback URL

export function getHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "The Aman Sanctuary Resort",
    "description": "A luxury 4K cinematic ocean & cliffside wellness resort nestled in a volcanic cove.",
    "url": DOMAIN,
    "telephone": "+1-800-AMAN-SANCTUARY",
    "logo": `${DOMAIN}/images/logo.png`,
    "image": [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Volcano Crest Road",
      "addressLocality": "East Peninsula Cove",
      "addressRegion": "Atlantic Coast",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.12345",
      "longitude": "-64.12345"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "priceRange": "$$$$",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Private Beach Cove", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Subterranean Sound Bath Cave", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Helipad Access", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Infinity Pool", "value": "true" }
    ]
  };
}

export function getRoomSchema(room: RoomSuite) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": room.name,
    "description": room.description,
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": room.occupancy,
      "unitCode": "C62" // Person count
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": room.size,
      "unitCode": "MTK" // Square meters
    },
    "bed": {
      "@type": "BedDetails",
      "numberOfBeds": room.occupancy > 3 ? 2 : 1,
      "typeOfBed": room.features.find(f => f.label === "Bed Type")?.value || "King Size"
    },
    "offers": {
      "@type": "Offer",
      "price": room.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2027-12-31"
    },
    "image": room.images
  };
}

export function getBreadcrumbSchema(links: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": `${DOMAIN}${link.url}`
    }))
  };
}

export function getOfferSchema(offer: Offer) {
  return {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    "name": offer.title,
    "description": offer.description,
    "url": `${DOMAIN}/offers`,
    "datePosted": "2026-06-12",
    "expires": offer.validUntil
  };
}

export function getArticleSchema(article: BlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.summary,
    "image": article.image,
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Aman Sanctuary Resort",
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${DOMAIN}/blog/${article.slug}`
    }
  };
}
