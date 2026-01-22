import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://loveway.co.th';
  const lastModified = new Date();

  return [
    // English home page
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Thai home page
    {
      url: `${baseUrl}/th`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // English products page
    {
      url: `${baseUrl}/en/products`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Thai products page
    {
      url: `${baseUrl}/th/products`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];
}
