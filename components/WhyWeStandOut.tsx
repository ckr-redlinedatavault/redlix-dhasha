'use client';

import { useState, useEffect } from 'react';
import {
    Video, PlayCircle, Mic2, Newspaper, Users,
    Briefcase, Megaphone, Heart, Calendar, Sparkles,
    ArrowLeft, ArrowRight, Star
} from 'lucide-react';
import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const services = [
    { title: 'Reels shoot', icon: <Video size={48} />, desc: 'Professional vertical cinematography tailored for viral growth. We focus on high-retention hooks and seamless transitions to keep your audience engaged.', tag: '01' },
    { title: 'YouTube Vlogs & Shorts', icon: <PlayCircle size={48} />, desc: 'End-to-end production for long-form storytelling and shorts. From multi-cam vlogs to rapid-fire shorts that dominate the homepage.', tag: '02' },
    { title: 'Podcast Production', icon: <Mic2 size={48} />, desc: 'High-fidelity audio and video setups for podcasters. We specialize in extracting high-impact snippets for cross-platform promotion.', tag: '03' },
    { title: 'News & Media', icon: <Newspaper size={48} />, desc: 'Broadcast-quality digital news assets and media reporting. Fast-turnaround edits for timely news cycles and digital publications.', tag: '04' },
    { title: 'Creators Hub', icon: <Users size={48} />, desc: 'A collaborative space providing creators with elite equipment, studio environments, and a network of like-minded talent to scale production.', tag: '05' },
    { title: 'Business Collabs', icon: <Briefcase size={48} />, desc: 'Corporate storytelling and professional B2B content. We help businesses communicate their vision through LinkedIn-optimized video assets.', tag: '06' },
    { title: 'Brand Marketing', icon: <Megaphone size={48} />, desc: 'Conversion-driven ad creatives and digital campaigns. We merge aesthetics with marketing psychology to drive measurable results.', tag: '07' },
    { title: 'Cinematic Weddings', icon: <Heart size={48} />, desc: 'Luxury cinematic wedding coverage. Capturing life’s most precious milestones with an editorial eye and high-end post-production.', tag: '08' },
    { title: 'Event Coverage', icon: <Calendar size={48} />, desc: 'Comprehensive visual coverage for events, conferences, and launches. We provide live-streaming and instant social media highlight reels.', tag: '09' },
    { title: 'Creative Formats', icon: <Sparkles size={48} />, desc: 'Experimental media projects blending 3D, CGI, and innovative formats. We push the boundaries of digital content for forward-thinking brands.', tag: '10' },
];

export default function PowerhouseSlider() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % services.length);
    const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${bricolage.className} py-8 bg-black text-white overflow-hidden relative`}>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(218,194,145,0.1),_transparent_40%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Text */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="h-px w-12 bg-[#DAC291]"></span>
                            <p className="text-[#DAC291] text-xs font-bold tracking-[0.4em] uppercase">
                                Our Expertise
                            </p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">Powerhouse</span>
                        </h2>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#DAC291] hover:text-black hover:border-[#DAC291] transition-all duration-300"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Main Card Slider */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="w-full relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl" />

                            <div className="relative overflow-hidden w-full bg-[#111] border border-white/10 rounded-3xl p-6 md:p-10 min-h-[400px] flex flex-col md:flex-row gap-8 items-center">

                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAC291]/5 rounded-full blur-[100px] pointer-events-none" />

                                {/* Left Content */}
                                <div className="flex-1 relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#DAC291]/30 rounded-full bg-[#DAC291]/10 text-[#DAC291] text-[10px] font-bold tracking-widest uppercase mb-6">
                                        <Star size={10} fill="currentColor" />
                                        Service {services[index].tag}
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-none text-white">
                                        {services[index].title}
                                    </h3>

                                    <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                                        {services[index].desc}
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 text-[#DAC291] font-bold text-sm tracking-wide hover:gap-5 transition-all group/link"
                                    >
                                        Start Project
                                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Right Visualization / Icon */}
                                <div className="relative w-full md:w-[320px] aspect-square flex items-center justify-center bg-gradient-to-br from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] rounded-2xl shadow-2xl shrink-0 group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="text-black drop-shadow-xl relative z-10 scale-125">
                                        {services[index].icon}
                                    </div>

                                    {/* Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="h-1 bg-black/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 6, ease: "linear" }}
                                                className="h-full bg-black/40"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center justify-between mt-8">
                    <button
                        onClick={prev}
                        className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="text-xs font-bold tracking-widest text-white/50">
                        {index + 1} / {services.length}
                    </div>
                    <button
                        onClick={next}
                        className="p-4 rounded-full border border-white/10 hover:bg-[#DAC291] hover:text-black hover:border-transparent transition-colors"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}