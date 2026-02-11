import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dhashamedia.com';

    const routes = [
        '',
        '/our-story',
        '/how-it-works',
        '/our-ecosystem',
        '/join-creator',
        '/blog',
        '/contact',
        '/privacy',
        '/terms',
        '/cookies',
        '/credits',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));
}
