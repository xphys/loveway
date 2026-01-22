import React from 'react';

interface Schema {
  [key: string]: unknown;
}

interface StructuredDataProps {
  data: Schema | Schema[];
}

export function StructuredData({ data }: StructuredDataProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </>
  );
}

// Organization Schema
export const organizationSchema: Schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Love Way',
  url: 'https://loveway.co.th',
  logo: 'https://loveway.co.th/logo.png',
  description: 'Premium beauty & health products provider',
};

// WebSite Schema
export const websiteSchema: Schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Love Way',
  url: 'https://loveway.co.th',
};
