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
        {
            name: 'Emmadi',
            logoUrl: 'https://emmadisilverjewellery.com/cdn/shop/files/Emmadi_Rectangle_Logo_1.png?v=1710244742&width=300'
        },
    ];

    return (
        <section className={`${bricolage.className} py-8 md:py-12 bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4">

                {/* Subtle Heading */}
                <div className="flex flex-col items-center mb-6 md:mb-10">
                    <p className="text-black/60 text-[9px] md:text-xs font-light tracking-[0.4em] uppercase">
                        Trusted by Industry Leaders
                    </p>
                    <div className="h-[1px] w-10 bg-black/20 mt-3"></div>
                </div>

                {/* One Single Line Logo Container */}
                <div className="flex flex-row items-center justify-between gap-2 md:gap-12 lg:gap-20">
                    {partners.map((brand) => (
                        <div
                            key={brand.name}
                            className="flex-1 flex items-center justify-center group"
                        >
                            <img
                                src={brand.logoUrl}
                                alt={brand.name}
                                className={`w-auto object-contain transition-all duration-500 filter brightness-0 opacity-70 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105
                                ${brand.name === 'Emmadi'
                                        ? 'max-h-[40px] sm:max-h-[80px] md:max-h-[120px] lg:max-h-[150px]'
                                        : 'max-h-[25px] sm:max-h-[40px] md:max-h-[60px] lg:max-h-[80px]'}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Optional Branding Text */}
                <div className="mt-8 md:mt-12 text-center">
                    <p className="text-black/30 text-[8px] md:text-[9px] tracking-[0.3em] font-light uppercase italic">
                        Dhasha Media • The Gold Standard 2024
                    </p>
                </div>
            </div>
        </section>
    );
}
