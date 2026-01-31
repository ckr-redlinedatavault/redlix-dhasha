'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import {
    Video, PlayCircle, Mic2, Newspaper, Users,
    Briefcase, Megaphone, Heart, Calendar, Sparkles, ArrowRight
} from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Ecosystem() {
    const solutions = [
        {
            title: 'Reels shoot',
            icon: <Video size={18} />,
            desc: 'Professional vertical cinematography tailored for viral growth. We focus on high-retention hooks and seamless transitions to keep your audience engaged.'
        },
        {
            title: 'YouTube vlogs & shorts production',
            icon: <PlayCircle size={18} />,
            desc: 'End-to-end production for long-form storytelling and shorts. From multi-cam vlogs to rapid-fire shorts that dominate the homepage.'
        },
        {
            title: 'Podcast production',
            icon: <Mic2 size={18} />,
            desc: 'High-fidelity audio and video setups for podcasters. We specialize in extracting high-impact snippets for cross-platform promotion.'
        },
        {
            title: 'News & media content',
            icon: <Newspaper size={18} />,
            desc: 'Broadcast-quality digital news assets and media reporting. Fast-turnaround edits for timely news cycles and digital publications.'
        },
        {
            title: 'Content creators hub',
            icon: <Users size={18} />,
            desc: 'A collaborative space providing creators with elite equipment, studio environments, and a network of like-minded talent to scale production.'
        },
        {
            title: 'Business collaborations',
            icon: <Briefcase size={18} />,
            desc: 'Corporate storytelling and professional B2B content. We help businesses communicate their vision through LinkedIn-optimized video assets.'
        },
        {
            title: 'Brand promotions & digital marketing',
            icon: <Megaphone size={18} />,
            desc: 'Conversion-driven ad creatives and digital campaigns. We merge aesthetics with marketing psychology to drive measurable results.'
        },
        {
            title: 'Wedding shoots',
            icon: <Heart size={18} />,
            desc: 'Luxury cinematic wedding coverage. Capturing life’s most precious milestones with an editorial eye and high-end post-production.'
        },
        {
            title: 'Event management & coverage',
            icon: <Calendar size={18} />,
            desc: 'Comprehensive visual coverage for events, conferences, and launches. We provide live-streaming and instant social media highlight reels.'
        },
        {
            title: 'Creative collaborations across formats',
            icon: <Sparkles size={18} />,
            desc: 'Experimental media projects blending 3D, CGI, and innovative formats. We push the boundaries of digital content for forward-thinking brands.'
        },
    ];

    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-44 pb-20 px-6 relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 blur-[140px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#DAC291] text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
                        The infrastructure
                    </p>
                    <h1 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight leading-tight">
                        One platform, <span className="bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">multiple solutions</span>
                    </h1>
                    <p className="text-sm text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
                        We have streamlined the entire media production lifecycle into a single high-speed ecosystem for modern creators and brands.
                    </p>
                </div>
            </section>

            {/* Gold Cards Grid */}
            <section className="pb-32 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col p-6 rounded-[2rem] bg-gradient-to-br from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] transition-all duration-500 hover:scale-[1.01] shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center text-black">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-bold text-black tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="text-xs text-black/70 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-light text-white mb-10 tracking-tight">
                        Ready to join the <span className="text-[#DAC291] font-bold">dhasha network?</span>
                    </h2>
                    <button className="bg-gradient-to-r from-[#B89E6C] to-[#DAC291] text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2 mx-auto">
                        Get started now <ArrowRight size={14} />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}