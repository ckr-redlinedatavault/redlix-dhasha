import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | Dhasha Media',
    description: 'Information about how Dhasha Media uses cookies to improve your experience.',
};

export default function CookiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
