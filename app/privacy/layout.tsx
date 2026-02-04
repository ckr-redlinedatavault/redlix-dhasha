import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Dhasha Media',
    description: 'Learn how Dhasha Media protects and handles your data. Your privacy is our priority.',
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
