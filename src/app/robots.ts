import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/go/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Bingbot', 'Googlebot', 'Applebot-Extended'],
        allow: '/',
        disallow: ['/api/', '/go/'],
      },
    ],
    sitemap: 'https://hotjackpot.in/sitemap.xml',
  };
}
