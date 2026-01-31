'use client';

import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function SocialProof() {
    const partners = [
        {
            name: 'The Derma Co',
            logoUrl: 'https://airiamall.com/wp-content/uploads/2025/01/The-Derma-Co-Airia-Mall-Gurugram.png'
        },
        {
            name: 'Mamaearth',
            logoUrl: 'https://vectorseek.com/wp-content/uploads/2023/10/Mamaearth-Logo-Vector.svg-.png'
        },
        {
            name: 'NeoStretch',
            logoUrl: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769862961/WhatsApp-Image-2024-02-28-at-18.36.40_e65fd31f-removebg-preview_fwjmlk.png'
        },
    ];

    return (
        <section className={`${bricolage.className} py-16 bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]`}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Subtle Heading */}
                <div className="flex flex-col items-center mb-12">
                    <p className="text-black/60 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase">
                        Trusted by Industry Leaders
                    </p>
                    <div className="h-[1px] w-12 bg-black/20 mt-4"></div>
                </div>

                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 lg:gap-32">
                    {partners.map((brand) => (
                        <div key={brand.name} className="group flex items-center justify-center">
                            <img
                                src={brand.logoUrl}
                                alt={brand.name}
                                className="h-8 md:h-12 w-auto object-contain brightness-0 opacity-80 group-hover:opacity-100 transition-all duration-500"
                            // Tip: brightness-0 makes any colored logo solid black for a premium look
                            />
                        </div>
                    ))}
                </div>

                {/* Optional Branding Text below */}
                <div className="mt-12 text-center">
                    <p className="text-black/40 text-[9px] tracking-[0.2em] font-light italic">
                        DHASHA MEDIA • PRODUCTION PARTNERSHIPS 2024
                    </p>
                </div>
            </div>
        </section>
    );
}