import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works',
    description: 'Our 10-in-1 media production process. From cinematic videography to rapid AI-integrated editing, discover how we deliver excellence at speed.',
    openGraph: {
        title: 'How It Works | Dhasha Media',
        description: 'Discover the Dhasha Media production pipeline.',
    }
};

export default function HowItWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
