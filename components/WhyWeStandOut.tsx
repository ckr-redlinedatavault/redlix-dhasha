'use client';

import { useState, useEffect } from 'react';
import {
    Video, PlayCircle, Mic2, Newspaper, Users,
    Briefcase, Megaphone, Heart, Calendar, Sparkles,
    ArrowLeft, ArrowRight, MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const services = [
    { title: 'Reels shoot', icon: <Video size={32} />, desc: 'Professional vertical cinematography tailored for viral growth. We focus on high-retention hooks and seamless transitions to keep your audience engaged.', tag: '01' },
    { title: 'YouTube vlogs & shorts production', icon: <PlayCircle size={32} />, desc: 'End-to-end production for long-form storytelling and shorts. From multi-cam vlogs to rapid-fire shorts that dominate the homepage.', tag: '02' },
    { title: 'Podcast production', icon: <Mic2 size={32} />, desc: 'High-fidelity audio and video setups for podcasters. We specialize in extracting high-impact snippets for cross-platform promotion.', tag: '03' },
    { title: 'News & media content', icon: <Newspaper size={32} />, desc: 'Broadcast-quality digital news assets and media reporting. Fast-turnaround edits for timely news cycles and digital publications.', tag: '04' },
    { title: 'Content creators hub', icon: <Users size={32} />, desc: 'A collaborative space providing creators with elite equipment, studio environments, and a network of like-minded talent to scale production.', tag: '05' },
    { title: 'Business collaborations', icon: <Briefcase size={32} />, desc: 'Corporate storytelling and professional B2B content. We help businesses communicate their vision through LinkedIn-optimized video assets.', tag: '06' },
    { title: 'Brand promotions & digital marketing', icon: <Megaphone size={32} />, desc: 'Conversion-driven ad creatives and digital campaigns. We merge aesthetics with marketing psychology to drive measurable results.', tag: '07' },
    { title: 'Wedding shoots', icon: <Heart size={32} />, desc: 'Luxury cinematic wedding coverage. Capturing life’s most precious milestones with an editorial eye and high-end post-production.', tag: '08' },
    { title: 'Event management & coverage', icon: <Calendar size={32} />, desc: 'Comprehensive visual coverage for events, conferences, and launches. We provide live-streaming and instant social media highlight reels.', tag: '09' },
    { title: 'Creative collaborations across formats', icon: <Sparkles size={32} />, desc: 'Experimental media projects blending 3D, CGI, and innovative formats. We push the boundaries of digital content for forward-thinking brands.', tag: '10' },
];

export default function PowerhouseSlider() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % services.length);
    const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${bricolage.className} py-20 bg-black text-white overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Text */}
                <div className="mb-12">
                    <p className="text-[#DAC291] text-[10px] font-bold tracking-[0.6em] uppercase mb-4">
                        The 10-in-1 Advantage
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Media <span className="text-[#DAC291]">Powerhouse</span>
                    </h2>
                </div>

                {/* Main Banner Container */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full bg-gradient-to-br from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] rounded-[2.5rem] p-8 md:p-16 min-h-[420px] flex flex-col md:flex-row items-center gap-10 shadow-2xl"
                        >
                            {/* Service Number Watermark */}
                            <div className="absolute top-6 right-10 text-9xl font-black text-black/5 select-none pointer-events-none">
                                {services[index].tag}
                            </div>



                            {/* Text Content */}
                            <div className="flex-1 text-black">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-50 mb-2 block">
                                    Service {services[index].tag}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-none">
                                    {services[index].title}
                                </h3>
                                <p className="text-black/70 text-lg md:text-xl font-medium leading-snug max-w-2xl mb-8">
                                    {services[index].desc}
                                </p>

                                {/* Get Quote Button */}
                                <Link href="/contact" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-900 transition-all shadow-lg active:scale-95">
                                    <MessageSquare size={18} />
                                    Get a Quote
                                </Link>
                            </div>

                            {/* BOTTOM RIGHT NAVIGATION */}
                            <div className="absolute bottom-8 right-8 flex gap-3">
                                <button
                                    onClick={prev}
                                    className="p-4 rounded-full bg-black/10 text-black hover:bg-black hover:text-[#DAC291] transition-all active:scale-90 border border-black/10"
                                    aria-label="Previous"
                                >
                                    <ArrowLeft size={24} strokeWidth={2} />
                                </button>
                                <button
                                    onClick={next}
                                    className="p-4 rounded-full bg-black/10 text-black hover:bg-black hover:text-[#DAC291] transition-all active:scale-90 border border-black/10"
                                    aria-label="Next"
                                >
                                    <ArrowRight size={24} strokeWidth={2} />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Tracker */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
                    <div className="flex gap-2">
                        {services.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-[#DAC291]' : 'w-2 bg-white/20'}`}
                            />
                        ))}
                    </div>
                    <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase font-bold">
                        Explore Our Services
                    </p>
                </div>

            </div>
        </section>
    );
}