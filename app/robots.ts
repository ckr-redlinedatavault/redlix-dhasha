import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'], // Hypothetical admin/api paths to keep private
        },
        sitemap: 'https://dhashamedia.com/sitemap.xml',
    };
}
