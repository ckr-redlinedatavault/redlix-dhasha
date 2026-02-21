'use client';

import { Check, Zap } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const plans = [
    {
        name: 'Hourly Plan',
        subtitle: 'FAST, FLEXIBLE, AND IMPACTFUL',
        wasPrice: '2,399',
        price: '1,999',
        description: 'Perfect for individuals who want a single, high-quality reel delivered fast.',
        features: [
            '1 Hour Shoot',
            '1 Edited Reel Delivered',
            '1 Reel Maker Onsite',
            'Shot on Latest iPhones',
            'Watermark Included'
        ],
    },
    {
        name: 'Half Day Plan',
        subtitle: 'Built for Events',
        wasPrice: '5,999',
        price: '4,999',
        description: 'Ideal for events and detailed social media coverage with faster turnaround.',
        features: [
            'Upto 3 hours shoot',
            '2 Edited Reels Delivered',
            '1 Reel Maker Onsite',
            'Raw footage access',
            'Shot on latest iPhones',
            'Watermark Included'
        ],
    },
    {
        name: 'Full Day Plan',
        subtitle: 'The Ultimate Package',
        wasPrice: '9,999',
        price: '7,999',
        description: 'Comprehensive 8-hour production for maximum brand impact and growth.',
        features: [
            'Full Day Shoot (8 Hours)',
            '5 Edited Reels Delivered',
            'Lead Reel Maker Onsite',
            'Raw footage access',
            'Shot on latest iPhones',
            'DHASHA MEDIA Branding Included'
        ],
    }
];

export default function PricingPlans() {
    return (
        <section id="pricing" className={`${bricolage.className} py-24 bg-black text-white overflow-hidden relative`}>
            
            {/* Ambient Gold Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#DAC291]/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B89E6C]/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DAC291]/20 bg-[#DAC291]/5 mb-6">
                        <Zap size={14} className="text-[#DAC291]" />
                        <span className="text-[#DAC291] text-[10px] font-bold tracking-[0.4em] uppercase">Premium Media Services</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-4">
                        Transparent <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">Pricing</span>
                    </h2>
                </div>

                {/* 3 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 hover:scale-[1.02] bg-zinc-900/40 border border-[#DAC291]/10 hover:border-[#DAC291]/40 group"
                        >
                            {/* Card Header */}
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold tracking-tight mb-1 text-white">
                                    {plan.name}
                                </h3>
                                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#DAC291] mb-4">
                                    {plan.subtitle}
                                </p>
                                <p className="text-sm leading-relaxed text-zinc-400 max-w-[250px] min-h-[40px]">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Pricing Section */}
                            <div className="mb-8 flex flex-col items-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-bold uppercase text-[#B89E6C]/60 tracking-widest">Was</span>
                                    <span className="text-zinc-600 line-through text-lg decoration-[#DAC291]/40">₹{plan.wasPrice}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-6xl font-black tracking-tighter bg-gradient-to-b from-[#EAD7B0] via-[#DAC291] to-[#B89E6C] bg-clip-text text-transparent">
                                        ₹{plan.price}
                                    </span>
                                </div>
                            </div>

                            {/* Features Section */}
                            <div className="w-full text-center mb-10">
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DAC291]/20 to-transparent mb-6" />
                                <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#DAC291]/40 mb-6">
                                    What&apos;s Included
                                </p>
                                <ul className="space-y-4 inline-block text-left">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <Check className="w-4 h-4 shrink-0 text-[#DAC291]" />
                                            <span className={`font-light ${feature.includes('DHASHA') ? 'text-[#DAC291] font-bold' : 'text-zinc-300'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button - Solid Gold Gradient */}
                            <Link
                                href="https://bookings.dhashamedia.com/contact"
                                className="mt-auto block w-full text-center py-4 rounded-2xl font-bold text-[13px] text-black transition-all bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] hover:brightness-110 shadow-lg shadow-[#DAC291]/5 uppercase tracking-widest"
                            >
                                Book Your Session &rarr;
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-20 text-center opacity-20">
                    <p className="text-[9px] tracking-[0.5em] uppercase font-light">
                        Premium Content Creation • DHASHA MEDIA 2025
                    </p>
                </div>
            </div>
        </section>
    );
}
