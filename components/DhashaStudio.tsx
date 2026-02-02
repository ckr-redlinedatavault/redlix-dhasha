'use client';

import { ArrowRight, Star, Video, Camera, Mic } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function DhashaStudio() {
    return (
        <section className={`${bricolage.className} bg-[#DAC291] text-black py-12 md:py-20 relative overflow-hidden`}>

            {/* Background Highlights (The "New" Look) */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-black/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/noise-light.png')] mix-blend-multiply pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-black/10 rounded-full bg-gradient-to-r from-black/10 to-transparent backdrop-blur-sm mb-6 animate-pulse">
                            <Star size={12} fill="currentColor" className="text-white" />
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                                New Launch 2024
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.1]">
                            INTRODUCING <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-700 to-white drop-shadow-sm">
                                DHASHA STUDIO
                            </span>
                        </h2>

                        <p className="text-base md:text-lg font-medium leading-relaxed max-w-lg mb-8 text-black/70">
                            The ultimate creative playground. A state-of-the-art production hub equipped with elite gear and versatile sets tailored for viral content.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-7 py-3.5 bg-black text-white rounded-full font-bold text-base hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-xl"
                            >
                                Book Tour
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/20 border border-black/10 backdrop-blur-md rounded-full font-bold text-base hover:bg-black hover:text-white transition-colors"
                            >
                                View Pricing
                            </Link>
                        </div>

                        {/* Features List - Made more compact */}
                        <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-black/10">
                            {[
                                { icon: Video, label: "Cinema Gear" },
                                { icon: Mic, label: "Podcast Hub" },
                                { icon: Camera, label: "Cyclorama" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <item.icon className="w-6 h-6 opacity-80" />
                                    <span className="font-bold text-[10px] uppercase tracking-wider opacity-60 leading-tight">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side - Reduced Aspect Ratio */}
                    <div className="relative">
                        <div className="aspect-[16/10] md:aspect-[16/11] rounded-[2.5rem] bg-black overflow-hidden relative shadow-2xl group border-4 border-white/10">

                            {/* Inner Highlight Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
                                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,_#DAC291_0%,_transparent_50%)]" />
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_80%,_#fff_0%,_transparent_50%)]" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center group-hover:scale-110 transition-transform duration-1000">
                                    <h3 className="text-[#DAC291] font-bricolage text-7xl md:text-8xl opacity-10 font-black tracking-tighter">DST</h3>
                                </div>
                            </div>

                            {/* Overlay Card - More compact */}
                            <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5">Location</p>
                                        <p className="text-white text-lg font-bold">Hyderabad, India</p>
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-[#DAC291] flex items-center justify-center text-black shadow-lg shadow-black/20">
                                        <ArrowRight size={18} className="-rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black/5 rounded-full blur-2xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}