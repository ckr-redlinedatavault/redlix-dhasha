'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';
import {
    Sparkles, ArrowRight
} from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Ecosystem() {
    const solutions = [
        {
            title: 'Reels shoot',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770717227/Generated_Image_February_10__2026_-_3_22PM-removebg-preview_xsaegw.png',
            desc: 'Professional vertical cinematography tailored for viral growth. High-retention hooks and seamless transitions.',
            link: '/services/reels-shoot'
        },
        {
            title: 'YouTube production',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770718663/ChatGPT_Image_Feb_10_2026_03_47_34_PM_k4wesr.png',
            desc: 'End-to-end production for storytelling and shorts that dominate homepages.',
            link: '/services/youtube-production'
        },
        {
            title: 'Podcast setup',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770717760/ChatGPT_Image_Feb_10_2026_03_32_31_PM_fdvjbb.png',
            desc: 'High-fidelity audio and video setups specializing in high-impact snippets.',
            link: '/services/podcast-production'
        },
        {
            title: 'Digital media',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770821737/Screenshot_2026-02-11_at_20.25.27_y2asdd.png',
            desc: 'Broadcast-quality digital news assets and media reporting for timely cycles.',
            link: '/services/news-media-content'
        },
        {
            title: 'Creators hub',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770812895/Screenshot_2026-02-11_at_17.58.05_rf2ghw.png',
            desc: 'Collaborative space with elite equipment, studio environments, and talent networks.',
            link: '/services/content-creators-hub'
        },
        {
            title: 'Business collaborations',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770812509/Screenshot_2026-02-11_at_17.35.26_aid5l4.png',
            desc: 'Corporate storytelling and professional B2B content optimized for LinkedIn branding.',
            link: '/services/business-collaborations'
        },
        {
            title: 'Brand marketing',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770812841/Screenshot_2026-02-11_at_17.57.11_sklfx8.png',
            desc: 'Conversion-driven ad creatives merging aesthetics with marketing psychology.',
            link: '/services/brand-promotions'
        },
        {
            title: 'Cinematic wedding',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770718358/Screenshot_2026-02-10_at_15.42.31_gxmi7r.png',
            desc: 'Luxury cinematic coverage capturing life’s milestones with an editorial eye.',
            link: '/services/wedding-shoots'
        },
        {
            title: 'Event coverage',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770813187/Screenshot_2026-02-11_at_18.02.57_pls4em.png',
            desc: 'Comprehensive visual coverage, live-streaming, and instant social highlights.',
            link: '/services/event-management'
        },
        {
            title: 'Experimental CGI',
            image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865615/Generated_Image_January_31__2026_-_6_48PM-removebg-preview_bimhtk.png',
            desc: 'Innovative projects blending 3D, CGI, and AI for forward-thinking brands.',
            link: '/services/creative-collaborations'
        },
    ];

    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white selection:bg-[#DAC291] selection:text-black antialiased`}>
            <Navbar />

            
            <section className="relative pt-32 pb-12 overflow-hidden bg-black">
                <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#DAC291]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-[#DAC291]" />
                            <span className="text-[10px] font-normal tracking-widest text-[#DAC291] uppercase">The Infrastructure</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-6">
                            The <span className="text-[#DAC291]">Ecosystem.</span>
                        </h1>

                        <p className="text-base md:text-lg font-normal text-white/50 leading-relaxed max-w-xl">
                            Streamlining the media production lifecycle into a single, high-speed network for modern creators and premium brands.
                        </p>
                    </div>
                </div>
            </section>

            
            <section className="pb-20 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {solutions.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className="group relative h-[380px] rounded-2xl bg-zinc-950/50 border border-white/5 hover:border-[#DAC291]/30 transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            
                            <div className="absolute top-6 left-6 z-20">
                                <span className="text-[9px] font-normal tracking-widest text-white/20 uppercase">
                                    Solution {(index + 1).toString().padStart(2, '0')}
                                </span>
                            </div>

                            
                            <div className="flex-1 relative flex items-center justify-center p-8">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="relative z-10 w-full h-40 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            
                            <div className="p-8 pt-0 relative z-10">
                                <h3 className="text-xl font-normal mb-2 tracking-tight group-hover:text-[#DAC291] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-white/40 font-normal leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>

                            
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowRight size={16} className="text-[#DAC291]" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            
            <section className="py-20 relative overflow-hidden bg-black border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/10 mb-8">
                        <Sparkles size={20} className="text-[#DAC291]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8">
                        Ready to scale your empire?
                    </h2>

                    <div className="flex flex-col items-center gap-6">
                        <Link href="/contact" className="px-12 py-4 bg-[#DAC291] text-black rounded-xl font-normal text-xs tracking-wider hover:bg-[#e2ceaa] transition-all">
                            Get started now
                        </Link>

                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#DAC291] animate-pulse" />
                            <span className="text-[10px] font-normal tracking-widest text-white/30 uppercase">Consultation available</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}