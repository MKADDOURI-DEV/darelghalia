import React from 'react';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LodgingBusiness',
        name: 'Dar El Ghalia',
        description:
          'Historic Fassi riad and guesthouse in the Medina of Fès, Morocco.',
        url: 'https://www.riadelghalia.com/',
        telephone: '+212535634167',
        email: 'resa@riadelghalia.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '13-15 Ross Rhi, Ras Jnane, Rcif',
          addressLocality: 'Fès',
          addressCountry: 'MA',
        },
      },
      {
        '@type': 'WebPage',
        name: 'Dar El Ghalia — Fès',
        inLanguage: ['fr', 'en', 'ar'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}