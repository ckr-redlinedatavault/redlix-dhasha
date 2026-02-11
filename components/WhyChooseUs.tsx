'use client';

import { Sparkles, ArrowRight, ShieldCheck, Zap, Users2, BadgePercent, MousePointer2, Star } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function WhyChooseUs() {
    const features = [
        {
            title: 'Trained Reel Makers',
            description: 'Each Partner clears 6 filters and a rigorous certification process.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769864892/Generated_Image_January_31__2026_-_6_37PM-removebg-preview_swkrvk.png',
            icon: <Star size={14} />
        },
        {
            title: 'Easy Booking',
            description: 'Skip the complexity. Book a professional creator in just a few taps.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865615/Generated_Image_January_31__2026_-_6_48PM-removebg-preview_bimhtk.png',
            icon: <MousePointer2 size={14} />
        },
        {
            title: 'Elite Pricing',
            description: 'Premium content accessible to all. Reels starting from just 1999/-',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769864200/Generated_Image_January_31__2026_-_6_26PM-removebg-preview_weltq9.png',
            icon: <BadgePercent size={14} />
        },
        {
            title: 'Safe & Secure',
            description: 'Your data and production assets are protected with elite security.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865655/image-removebg-preview_fzaacc.png',
            icon: <ShieldCheck size={14} />
        },
        {
            title: 'Instant Delivery',
            description: 'No hidden wait times. Upfront pricing with rapid post-production.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865044/Generated_Image_January_31__2026_-_6_40PM-removebg-preview_afe8mf.png',
            icon: <Zap size={14} />
        },
        {
            title: 'Women Safety',
            description: 'Empowering safety. Request a female Reel maker for your project.',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769864508/Generated_Image_January_31__2026_-_6_31PM-removebg-preview_hlvbyr.png',
            icon: <Users2 size={14} />
        },
    ];

    return (
        <section className={`${bricolage.className} py-12 md:py-20 bg-[#050505] overflow-hidden relative`}>
            {/* Background Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DAC291]/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DAC291]/20 bg-[#DAC291]/5 mb-4 md:mb-6">
                        <Sparkles size={12} className="text-[#DAC291]" />
                        <span className="text-[#DAC291] text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">Why Choose Us</span>
                    </div>

                    {/* Fluid Typography for single line header */}
                    <h2 className="text-[1.4rem] xs:text-[1.7rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
                        Not just instant <span className="bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">delivery.</span>
                    </h2>

                    <p className="text-gray-500 text-xs md:text-base font-medium max-w-2xl mx-auto px-4">
                        We have re-engineered content creation to focus on safety, quality, and professional speed.
                    </p>
                </div>

                {/* Features Bento Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col bg-[#0A0A0A] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-[#DAC291]/30"
                        >
                            {/* Image Stage: Reduced height for mobile */}
                            <div className="h-40 md:h-44 relative bg-[#DAC291] flex items-end justify-center pt-6">
                                {/* Watermark Number: Italic Version */}
                                <div className="absolute top-3 left-5 md:top-4 md:left-6 text-black/10 text-3xl md:text-4xl font-black italic tracking-tighter select-none">
                                    0{index + 1}
                                </div>

                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="h-[95%] md:h-[105%] w-auto object-contain object-bottom grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-2 md:mb-3">
                                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#DAC291] border border-white/10 group-hover:bg-[#DAC291] group-hover:text-black transition-colors">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed font-medium opacity-80">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Responsive Footer CTA */}
                <div className="mt-10 md:mt-14 text-center">
                    <Link
                        href="https://bookings.dhashamedia.com/booking/7bee9ed4-6530-4e3d-b89e-98356b0bf47e"
                        className="group relative inline-flex items-center gap-3 md:gap-4 bg-white text-black px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#DAC291] transition-all overflow-hidden shadow-xl"
                    >
                        <span className="relative z-10">Book Creator Now</span>
                        <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>
                </div>
            </div>
        </section>
    );
}