import { RoomSuite, BlogArticle } from "./mockData";

const SITE = "https://hotelstaycasainn.com";

export function getHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel Stay Casa Inn",
    "description": "Comfortable rooms, free Wi-Fi, air conditioning, and warm hospitality in Sodala, Jaipur at affordable rates.",
    "url": SITE,
    "telephone": "+919773302154",
    "logo": `${SITE}/stay-casa-logo.png`,
    "image": [
      `${SITE}/DSC_3842-HDR.jpg.avif`,
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "112, New Sanganer Rd, Katewa Nagar, Sodala, Gurjar Ki Thadi, Jaipur, Rajasthan 302006",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.882542",
      "longitude": "75.765335"
    },
    "priceRange": "₹1800 - ₹3500",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "24-hour Front Desk", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": "true" },
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
      "unitCode": "C62"
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": room.size,
      "unitCode": "MTK"
    },
    "offers": {
      "@type": "Offer",
      "price": room.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
    },
    "image": room.images.map(i => `${SITE}${i}`)
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
      "name": "Hotel Stay Casa Inn",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${article.slug}`
    }
  };
}
