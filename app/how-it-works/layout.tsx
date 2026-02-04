import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works | Dhasha Media - Shoot, Edit, Deliver in 10 Mins',
    description: 'Discover how Dhasha Media streamlines professional media production. From booking to final delivery, we make content creation effortless.',
};

export default function HowItWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
