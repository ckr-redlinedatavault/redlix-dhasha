import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Ecosystem | Dhasha Media - Digital Media Powerhouse',
    description: 'Explore the full range of Dhasha Media services, from photography and branding to our exclusive creator platform.',
};

export default function OurEcosystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
