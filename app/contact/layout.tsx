import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Dhasha Media - Get in Touch',
    description: 'Reach out to Dhasha Media for professional photography, videography, and branding services. Let\'s create something viral together.',
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://dhashamedia.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://dhashamedia.com/contact"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
