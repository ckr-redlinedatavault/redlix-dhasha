import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Join as a Creator',
    description: 'Elevate your content creation career. Join the Dhasha Media network of elite photographers, videographers, and influencers.',
    openGraph: {
        title: 'Join as a Creator | Dhasha Media',
        description: 'Become a part of the Dhasha Media creator network.',
    }
};

export default function JoinCreatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
