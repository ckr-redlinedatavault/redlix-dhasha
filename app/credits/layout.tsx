import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Credits | Dhasha Media',
    description: 'Credits and acknowledgments for tools and resources that power Dhasha Media.',
};

export default function CreditsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
