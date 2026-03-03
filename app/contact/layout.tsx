import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Ready to build your digital legacy? Contact Dhasha Media for premium media production and branding services.',
    openGraph: {
        title: 'Contact Us | Dhasha Media',
        description: 'Get in touch with the Dhasha Media team.',
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
