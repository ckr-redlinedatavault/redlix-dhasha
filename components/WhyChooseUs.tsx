'use client';

import { Sparkles } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function WhyChooseUs() {
    const features = [
        {
            title: 'Trained & Certified Reel Makers',
            description: 'Each Partner clears 6 filters to get their certification.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769864892/Generated_Image_January_31__2026_-_6_37PM-removebg-preview_swkrvk.png',
        },
        {
            title: 'Easy Booking',
            description: 'Stop struggling with complex booking procedures.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865615/Generated_Image_January_31__2026_-_6_48PM-removebg-preview_bimhtk.png',
        },
        {
            title: 'Unbelievable Pricing',
            description: 'Each Reel starts from just 1999/-',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769864200/Generated_Image_January_31__2026_-_6_26PM-removebg-preview_weltq9.png',
        },
        {
            title: 'Safe & Secure',
            description: 'You & Your data is safe and secured with us.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865655/image-removebg-preview_fzaacc.png',
        },
        {
            title: 'Instant Reels, Instant Editing',
            description: 'No hidden charges! Clients get upfront pricing and delivery.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865044/Generated_Image_January_31__2026_-_6_40PM-removebg-preview_afe8mf.png',
        },
        {
            title: 'Women Safety',
            description: 'A woman can book a female Reel maker specifically.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769864508/Generated_Image_January_31__2026_-_6_31PM-removebg-preview_hlvbyr.png',
        },
    ];

    return (
        <section className={`${bricolage.className} py-12 bg-black overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#DAC291]/30 bg-[#DAC291]/5 mb-8">
                        <Sparkles size={14} className="text-[#DAC291]" />
                        <span className="text-[#DAC291] text-[10px] font-light tracking-[0.4em] uppercase">Why Choose Us</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extralight text-white leading-tight">
                        Not Just Instant <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">Delivery</span>, But..
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative h-52 flex items-center group overflow-hidden rounded-[2.5rem]"
                        >
                            {/* THE GOLD CARD (The "Stage") */}
                            {/* We use absolute inset-0 to fill the container but keep the image "free" */}
                            <div className="absolute inset-0 w-full bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] rounded-[2.5rem] shadow-xl z-0 transition-all duration-500 group-hover:shadow-[#DAC291]/20 group-hover:shadow-2xl" />

                            <div className="relative z-10 w-full h-full flex items-center">

                                {/* IMAGE CONTAINER */}
                                <div className="w-[50%] h-full relative pointer-events-none">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="absolute inset-0 w-full h-full object-contain object-bottom grayscale brightness-110"
                                        style={{
                                            filter: 'grayscale(100%) contrast(110%)',
                                        }}
                                    />
                                </div>

                                {/* TEXT CONTENT */}
                                <div className="w-[50%] pr-6 pl-0 py-4 flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2 leading-tight tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-black/70 text-sm md:text-base font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}