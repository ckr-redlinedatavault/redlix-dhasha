import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Dhasha Media - Content Creation Insights',
    description: 'Stay updated with the latest trends in photography, videography, and digital branding with the Dhasha Media blog.',
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
