'use client';

import { notFound } from 'next/navigation';
import { servicesData } from '@/lib/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { use, useState } from 'react';
import { ArrowLeft, CheckCircle2, Star, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';
import PricingModal from '@/components/PricingModal';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const service = servicesData.find((s) => s.slug === slug);
    const [isPricingOpen, setIsPricingOpen] = useState(false);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className={`${bricolage.className} min-h-screen bg-[#050505] text-white overflow-x-hidden`}>
            <Navbar />

            
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
                    <img
                        src={service.heroImage}
                        alt={service.title}
                        className={`w-full h-full ${slug === 'reels-shoot' ? 'object-contain scale-75' : 'object-cover scale-105'} animate-subtle-zoom`}
                    />
                </div>

                
                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center w-full">
                    
                    <div className="absolute top-8 left-6 md:left-12 z-30 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
                        <Link href="/" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Home</Link>
                        <div className="w-1 h-1 rounded-full bg-[#DAC291]" />
                        <Link href="/our-ecosystem" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Ecosystem</Link>
                        <div className="w-1 h-1 rounded-full bg-[#DAC291]" />
                        <span className="text-[10px] uppercase tracking-widest text-[#DAC291] font-bold">{service.title}</span>
                    </div>

                    <div className="flex justify-center mb-8 mt-24">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B89E6C] to-[#EAD7B0] flex items-center justify-center text-black shadow-[0_0_50px_rgba(218,194,145,0.2)]">
                            <Icon size={32} strokeWidth={1.5} />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-medium mb-8 tracking-tighter leading-none">
                        {service.title.split(' ').map((word, i) => (
                            <span key={i} className={i === service.title.split(' ').length - 1 ? "bg-gradient-to-r from-[#B89E6C] to-[#EAD7B0] bg-clip-text text-transparent" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        {service.shortDesc}
                    </p>
                </div>

                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#DAC291] to-transparent animate-pulse" />
                </div>
            </div>

            
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    
                    <div className="lg:col-span-7">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-xs uppercase tracking-[0.4em] text-[#DAC291] font-bold mb-6">The Approach</h2>
                                <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">Crafting visual excellence.</h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-light italic">
                                    "{service.fullDesc}"
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} className="group p-6 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-[#DAC291]/20 transition-all duration-500">
                                        <div className="w-8 h-8 rounded-full border border-[#DAC291]/30 flex items-center justify-center mb-4 group-hover:bg-[#DAC291] group-hover:text-black transition-all">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem]">
                            <div className="bg-[#0A0A0A] rounded-[2.4rem] p-8 md:p-12 relative overflow-hidden">
                                
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#DAC291]/10 blur-[80px] rounded-full pointer-events-none" />

                                <div className="flex items-center justify-between mb-10">
                                    <h3 className="text-2xl font-semibold">Service Features</h3>
                                    <Star className="text-[#DAC291] fill-[#DAC291]" size={20} />
                                </div>

                                <ul className="space-y-5 mb-12">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-4 group">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAC291] shadow-[0_0_10px_#DAC291]" />
                                            <span className="text-gray-300 text-base font-light group-hover:text-white transition-colors">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsPricingOpen(true)}
                                    className="group relative block w-full bg-[#DAC291] text-black font-bold text-center py-5 rounded-2xl overflow-hidden shadow-2xl shadow-[#DAC291]/10"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3 text-xs uppercase tracking-widest">
                                        Book Creator<MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                    
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                </button>

                                <p className="text-center mt-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                                    Response within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            
            <section className="py-32 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">
                        Scale your <span className="italic font-serif">vision</span> with us.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/contact" className="px-10 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#DAC291] transition-colors">
                            Contact Sales
                        </Link>
                        <Link href="/our-ecosystem" className="px-10 py-4 border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            <PricingModal
                isOpen={isPricingOpen}
                onClose={() => setIsPricingOpen(false)}
                pricing={service.pricing || []}
                serviceTitle={service.title}
            />

            <Footer />

            <style jsx global>{`
                @keyframes subtle-zoom {
                    0% { transform: scale(1.0); }
                    100% { transform: scale(1.1); }
                }
                .animate-subtle-zoom {
                    animation: subtle-zoom 20s ease-in-out infinite alternate;
                }
            `}</style>
        </main>
    );
}