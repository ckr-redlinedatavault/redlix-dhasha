import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Ecosystem',
    description: 'A unified platform for creators and brands. Dhasha Media ecosystem integrates talent, technology, and strategy to build digital legacies.',
    openGraph: {
        title: 'Our Ecosystem | Dhasha Media',
        description: 'Explore the Dhasha Media creator and brand ecosystem.',
    }
};

export default function OurEcosystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
