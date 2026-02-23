'use client';

import { useState, useEffect } from 'react';
import {
    ArrowLeft, ArrowRight, MoveRight
} from 'lucide-react';
import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const services = [
    {
        title: 'Reels Shoot',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770717227/Generated_Image_February_10__2026_-_3_22PM-removebg-preview_xsaegw.png',
        desc: 'High-impact vertical video production designed for viral social growth and maximum engagement.',
        tag: '01'
    },
    {
        title: 'YouTube Production',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770718663/ChatGPT_Image_Feb_10_2026_03_47_34_PM_k4wesr.png',
        desc: 'End-to-end production for storytelling and shorts that dominate homepages and searches.',
        tag: '02'
    },
    {
        title: 'Podcast Setup',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770717760/ChatGPT_Image_Feb_10_2026_03_32_31_PM_fdvjbb.png',
        desc: 'Professional audio and multi-cam video recording with high-end post-production for cross-platform reach.',
        tag: '03'
    },
    {
        title: 'Digital Media',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770821737/Screenshot_2026-02-11_at_20.25.27_y2asdd.png',
        desc: 'Broadcast-quality assets for digital publications and real-time news reporting.',
        tag: '04'
    },
    {
        title: 'Creators Hub',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770812895/Screenshot_2026-02-11_at_17.58.05_rf2ghw.png',
        desc: 'Elite equipment and studio environments for a network of like-minded talent to scale.',
        tag: '05'
    },
    {
        title: 'Business Collabs',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770812509/Screenshot_2026-02-11_at_17.35.26_aid5l4.png',
        desc: 'Corporate storytelling and professional B2B content optimized for LinkedIn branding.',
        tag: '06'
    },
    {
        title: 'Brand Marketing',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770812841/Screenshot_2026-02-11_at_17.57.11_sklfx8.png',
        desc: 'Conversion-driven ad creatives merging aesthetics with marketing psychology for results.',
        tag: '07'
    },
    {
        title: 'Cinematic Wedding',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770718358/Screenshot_2026-02-10_at_15.42.31_gxmi7r.png',
        desc: 'Luxury cinematic coverage capturing life’s milestones with an editorial, high-end eye.',
        tag: '08'
    },
    {
        title: 'Event Coverage',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770813187/Screenshot_2026-02-11_at_18.02.57_pls4em.png',
        desc: 'Comprehensive visual coverage and live-streaming for high-profile events and launches.',
        tag: '09'
    },
    {
        title: 'Experimental CGI',
        image: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769865615/Generated_Image_January_31__2026_-_6_48PM-removebg-preview_bimhtk.png',
        desc: 'Innovative projects blending 3D, CGI, and AI formats for forward-thinking brands.',
        tag: '10'
    },
];

export default function PowerhouseSlider() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % services.length);
    const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <section className={`${bricolage.className} py-16 bg-black text-white`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <div>
                        <p className="text-[#DAC291] text-[10px] font-bold tracking-[0.4em] uppercase mb-2">Our Expertise</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Media <span className="text-gray-500 font-light">Powerhouse</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-xs font-bold tabular-nums">
                            <span className="text-[#DAC291]">{services[index].tag}</span>
                            <span className="text-gray-600 mx-2">/</span>
                            <span className="text-gray-600">{services.length}</span>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={prev} className="p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                                <ArrowLeft size={18} />
                            </button>
                            <button onClick={next} className="p-3 rounded-full border border-white/10 hover:bg-[#DAC291] hover:text-black hover:border-transparent transition-all">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.01 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[#0A0A0A] rounded-[2rem] overflow-hidden border border-white/5 shadow-xl"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] md:min-h-[400px]">

                                <div className={`lg:col-span-5 flex flex-col items-center justify-center relative overflow-hidden ${index === 1 || index === 2 ? 'p-0' : 'p-8 md:p-12'}`}>
                                    <div className={`relative z-10 w-full h-full flex items-center justify-center ${index === 1 || index === 2 ? 'absolute inset-0' : ''}`}>
                                        <img
                                            src={services[index].image}
                                            alt={services[index].title}
                                            className={`drop-shadow-2xl ${index === 0 ? 'w-full h-auto max-h-[250px] object-contain scale-[1.6]' :
                                                index === 1 ? 'w-full h-full object-cover grayscale' :
                                                    index === 2 ? 'w-full h-full object-cover' :
                                                        index === 7 ? 'w-full h-auto max-h-[350px] object-contain scale-[1.3]' :
                                                            'w-full h-auto max-h-[250px] object-contain scale-110'
                                                }`}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,194,145,0.08)_0%,transparent_70%)]" />
                                </div>

                                <div className="lg:col-span-7 bg-[#DAC291] p-8 md:p-12 flex flex-col justify-center text-black">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="h-[2px] w-6 bg-black/20" />
                                        <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Module {services[index].tag}</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter leading-none">
                                        {services[index].title}
                                    </h3>

                                    <p className="text-black/80 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-lg">
                                        {services[index].desc}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        <Link href="/contact" className="group flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-lg">
                                            Get Started
                                            <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <div className="flex items-center gap-3 opacity-40">
                                            <div className="w-12 h-[2px] bg-black/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    key={`timer-${index}`}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 6, ease: "linear" }}
                                                    className="h-full bg-black"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-[#DAC291]' : 'w-2 bg-white/10 hover:bg-white/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
