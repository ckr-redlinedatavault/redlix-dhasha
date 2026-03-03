import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Story',
    description: 'The journey of Dhasha Media. Founded on a vision to bridge the gap between creative sparks and global reach, turning ambitious ideas into digital reality.',
    openGraph: {
        title: 'Our Story | Dhasha Media',
        description: 'Learn about the visionaries and values behind Dhasha Media.',
    }
};

export default function OurStoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
