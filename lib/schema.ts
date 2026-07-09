import { RoomSuite, BlogArticle } from "./mockData";

const SITE = "https://hotelstaycasainn.com";

export function getHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE}/#hotel`,
    "name": "Hotel Stay Casa Inn",
    "description": "Comfortable rooms, free Wi-Fi, air conditioning, and warm hospitality in Sodala, Jaipur at affordable rates.",
    "url": SITE,
    "telephone": "+919773302154",
    "email": "staycasainn@gmail.com",
    "logo": `${SITE}/stay-casa-logo.png`,
    "image": [
      `${SITE}/DSC_3842-HDR.jpg.avif`,
      `${SITE}/DSC_3833-HDR.jpg.avif`,
      `${SITE}/DSC_3793.JPG.avif`,
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
    "priceRange": "₹1350 - ₹2050",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "24-hour Front Desk", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Daily Housekeeping", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Flat-screen TV", "value": "true" },
      { "@type": "LocationFeatureSpecification", "name": "Hot & Cold Water", "value": "true" },
    ],
    "hasMap": "https://www.google.com/maps/@26.8825417,75.7653348,3a,39.4y,96.87h,84.49t/data=!3m7!1e1!3m5!1sQI1hRbaqyI3-IhFlEhPYQQ!2e0",
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://wa.me/9773302154",
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    "name": "Hotel Stay Casa Inn",
    "url": SITE,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE}/stay-casa-logo.png`,
      "width": 512,
      "height": 512,
    },
    "image": `${SITE}/DSC_3842-HDR.jpg.avif`,
    "description": "Hotel Stay Casa Inn is a comfortable hotel in Sodala, Jaipur, offering well-furnished rooms, free Wi-Fi, and warm hospitality at affordable rates.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "112, New Sanganer Rd, Katewa Nagar, Sodala, Gurjar Ki Thadi, Jaipur, Rajasthan 302006",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302006",
      "addressCountry": "IN"
    },
    "telephone": "+919773302154",
    "email": "staycasainn@gmail.com",
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://wa.me/9773302154",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    "name": "Hotel Stay Casa Inn",
    "url": SITE,
    "publisher": {
      "@id": `${SITE}/#organization`,
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE}/rooms?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${SITE}${item.url}`,
    })),
  };
}

export function getRoomSchema(room: RoomSuite) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": room.name,
    "description": room.description,
    "url": `${SITE}/rooms/${room.slug}`,
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
      "url": `${SITE}/rooms/${room.slug}`,
    },
    "image": room.images.map(i => `${SITE}${i}`),
    "containedInPlace": {
      "@id": `${SITE}/#hotel`,
    },
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
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE}/stay-casa-logo.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE}/blog/${article.slug}`
    },
    "inLanguage": "en-IN",
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}
