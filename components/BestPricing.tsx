'use client';

import { Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            price: '1,999',
            description: 'Perfect for a quick high-quality social presence.',
            features: ['1 Professional Reel', '10-Minute Delivery', 'Basic Color Grading', 'Standard Audio Sync'],
            isPopular: false,
        },
        {
            name: 'Creator Pack',
            price: '8,999',
            description: 'The favorite choice for consistent content creators.',
            features: ['5 Professional Reels', 'Priority Production', 'Advanced Storytelling', 'Trending Audio Research', 'Dedicated Editor'],
            isPopular: true,
        },
        {
            name: 'Brand Studio',
            price: '15,999',
            description: 'Complete media coverage for high-end brands.',
            features: ['10 Professional Reels', 'Ultra-Fast Handover', 'Full Brand Integration', 'Raw Footage Access', 'Premium Transitions'],
            isPopular: false,
        },
    ];

    return (
        <section className={`${bricolage.className} py-16 bg-black text-white relative overflow-hidden`}>
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#DAC291]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#DAC291] text-[10px] md:text-xs font-light tracking-[0.4em] uppercase mb-4">
                        Transparent Pricing
                    </p>
                    <h2 className="text-4xl md:text-6xl font-extralight leading-tight">
                        Flexible Plans for <br />
                        <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">
                            Every Creator
                        </span>
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-6 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] flex flex-col ${plan.isPopular
                                ? 'bg-gradient-to-b from-[#DAC291]/20 to-transparent border-[#DAC291]/40'
                                : 'bg-white/5 border-white/10'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B89E6C] to-[#EAD7B0] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5">
                                    <Sparkles size={12} /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl md:text-5xl font-bold">₹{plan.price}</span>
                                <span className="text-gray-500 text-sm font-light">/package</span>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                                        <Check size={18} className="text-[#DAC291] shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link href="https://bookings.dhashamedia.com/contact" className={`block w-full text-center py-4 rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-300 ${plan.isPopular
                                ? 'bg-gradient-to-r from-[#B89E6C] to-[#DAC291] text-black hover:opacity-90 shadow-lg shadow-[#DAC291]/10'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                Choose {plan.name}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Brand Footer */}
                <div className="mt-20 text-center opacity-30">
                    <p className="text-[10px] tracking-[0.5em] uppercase font-light">
                        Dhasha Media • Precision Pricing
                    </p>
                </div>
            </div>
        </section>
    );
}