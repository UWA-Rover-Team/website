import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wa-roverproject.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://wa-roverproject.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://wa-roverproject.com/team',
      lastModified: new Date(),
    },
  ]
}
