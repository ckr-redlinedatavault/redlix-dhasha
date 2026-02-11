import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Dhasha Media',
    description: 'Read the terms and conditions for using Dhasha Media services and platforms.',
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
