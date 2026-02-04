import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Join as a Creator | Dhasha Media Network',
    description: 'Scale your content creation business with Dhasha Media. Get access to premium resources, tools, and a network of top-tier creators.',
};

export default function JoinCreatorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
