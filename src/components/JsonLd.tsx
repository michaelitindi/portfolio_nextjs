import React from 'react';

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://itindi.com"; // Adjust if needed
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Itindi",
    "url": baseUrl,
    "jobTitle": "Systems Architect & Full-Stack Developer",
    "alumniOf": {
      "@type": "Organization",
      "name": "Nairobi Business Community"
    },
    "knowsAbout": ["ERP Systems", "SaaS Development", "Business Automation", "M-Pesa Integration", "KRA eTIMS"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Michael Itindi - Systems Architect",
    "description": "Specialized ERP, SaaS, and Business Automation solutions for Kenyan businesses.",
    "url": baseUrl,
    "telephone": "+254", // Optional: Add if public
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nairobi",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County",
      "postalCode": "00100",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.2921,
      "longitude": 36.8219
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Nairobi"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kenya"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    </>
  );
}
