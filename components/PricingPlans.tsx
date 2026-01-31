'use client';

import { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function PricingPlans() {
    const [isYearly, setIsYearly] = useState(true);

    const plans = [
        {
            name: 'One-Off',
            price: isYearly ? 1499 : 1999,
            description: 'Perfect for testing our quality with a single reel.',
            features: ['1 Professional Reel', '10-Minute Handover', 'Basic Sound FX', 'Standard Quality'],
            popular: false
        },
        {
            name: 'Growth',
            price: isYearly ? 5999 : 7499,
            description: 'Strategic content for small business owners.',
            features: ['4 Reels Per Month', 'Trend Analysis', 'Advanced Editing', 'Priority Support', 'Thumbnail Design'],
            popular: false
        },
        {
            name: 'Creator',
            price: isYearly ? 11999 : 14999,
            description: 'Our most popular plan for rapid social growth.',
            features: ['10 Reels Per Month', 'Viral Script Writing', 'Professional Colorist', 'Dedicated WhatsApp Manager', '24h Delivery'],
            popular: true
        },
        {
            name: 'Studio',
            price: 'Custom',
            description: 'Full-scale media production for elite brands.',
            features: ['Unlimited Production', 'On-Site Team', 'Multi-Platform Strategy', 'Raw Footage Access', 'Full Intellectual Property'],
            popular: false
        }
    ];

    return (
        <section id="pricing" className={`${bricolage.className} py-32 bg-black text-white overflow-hidden`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#DAC291]/20 bg-[#DAC291]/5 mb-6">
                        <Zap size={14} className="text-[#DAC291]" />
                        <span className="text-[#DAC291] text-[10px] font-bold tracking-[0.4em] uppercase">Invest in Quality</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-6">
                        Transparent <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">Pricing</span>
                    </h2>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${!isYearly ? 'text-[#DAC291]' : 'text-zinc-600'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-14 h-7 bg-zinc-900 border border-[#DAC291]/20 rounded-full p-1 transition-all"
                        >
                            <div className={`w-5 h-5 bg-[#DAC291] rounded-full shadow-lg transform transition-transform duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-xs font-bold tracking-widest uppercase transition-colors ${isYearly ? 'text-[#DAC291]' : 'text-zinc-600'}`}>
                            Yearly <span className="text-[10px] bg-[#DAC291]/20 px-2 py-0.5 rounded ml-1 text-[#DAC291]">-20%</span>
                        </span>
                    </div>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-[2.5rem] p-8 flex flex-col transition-all duration-500 hover:scale-[1.03] ${plan.popular
                                    ? 'bg-gradient-to-br from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] text-black shadow-2xl'
                                    : 'bg-zinc-900/50 border border-white/10 hover:border-[#DAC291]/40'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-black text-[#DAC291] text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] flex items-center gap-2 whitespace-nowrap">
                                        <Sparkles size={12} /> Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className={`text-xl font-bold tracking-tight mb-2 ${plan.popular ? 'text-black' : 'text-[#DAC291]'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-xs leading-relaxed ${plan.popular ? 'text-black/60' : 'text-zinc-400'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-10 flex items-baseline gap-1">
                                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                                    {typeof plan.price === 'number' ? `₹${plan.price.toLocaleString()}` : plan.price}
                                </span>
                                {typeof plan.price === 'number' && (
                                    <span className={`text-sm ${plan.popular ? 'text-black/40' : 'text-zinc-600'}`}>/pack</span>
                                )}
                            </div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-black' : 'text-[#DAC291]'}`} />
                                        <span className={plan.popular ? 'font-medium' : 'font-light text-zinc-300'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] transition-all ${plan.popular
                                        ? 'bg-black text-[#DAC291] hover:bg-zinc-800 shadow-xl'
                                        : 'bg-white/5 border border-[#DAC291]/20 text-[#DAC291] hover:bg-[#DAC291]/5'
                                    }`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-16 text-center opacity-20">
                    <p className="text-[9px] tracking-[0.5em] uppercase font-light">
                        Prices are subject to project complexity • DHASHA MEDIA 2024
                    </p>
                </div>
            </div>
        </section>
    );
}