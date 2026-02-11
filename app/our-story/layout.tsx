import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Story | Dhasha Media - The Vision Behind the Ecosystem',
    description: 'Learn about the journey and vision of Dhasha Media, the world\'s first 10-in-1 media powerhouse serving creators and businesses.',
};

export default function OurStoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
