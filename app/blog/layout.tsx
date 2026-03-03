import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Insights from the digital media frontline. Tips on content strategy, videography trends, and creative growth from Dhasha Media experts.',
    openGraph: {
        title: 'Blog | Dhasha Media',
        description: 'Read the latest insights from Dhasha Media.',
    }
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
