'use client';

import { ArrowRight } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function DhashaStudioTeaser() {
    return (
        <section className={`${bricolage.className} bg-[#DAC291] text-black py-10 md:py-14 relative overflow-hidden flex items-center`}>

            {/* Minimal Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise-light.png')] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Minimal Heading */}
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 mb-1">Coming Soon</p>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                            THE STUDIO
                        </h2>
                    </div>

                    {/* Single Minimal Button */}
                    <button className="group flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                        GET EARLY ACCESS
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                </div>
            </div>
        </section>
    );
}
