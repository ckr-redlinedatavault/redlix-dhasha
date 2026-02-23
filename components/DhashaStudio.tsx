'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function DhashaStudioTeaser() {
    return (
        <section className={`${bricolage.className} bg-[#DAC291] text-black py-12 md:py-16 relative overflow-hidden flex items-center`}>
            <div className="absolute inset-0 opacity-[0.12] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.35),transparent)]" />

            <div className="absolute -bottom-10 -left-10 text-[12rem] md:text-[16rem] font-black opacity-[0.04] select-none pointer-events-none tracking-tighter leading-none">
                STUDIO
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-6 bg-black/80"></span>
                            <p className="text-[10px] font-black tracking-[0.5em] uppercase text-black/70">
                                Coming Soon
                            </p>
                        </div>

                        <div className="relative">
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-4">
                                THE STUDIO<span className="text-black/20">.</span>
                            </h2>
                            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-black/50 ml-1">
                                High-end digital production ecosystem
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-5">
                        <button className="group relative flex items-center gap-6 bg-black text-white px-10 py-5 rounded-xl font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-500 hover:rounded-3xl hover:scale-[1.03] shadow-2xl shadow-black/20">
                            <span className="relative z-10">Get Early Access</span>
                            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#DAC291] group-hover:text-black transition-all duration-300">
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </button>

                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Phase 01</span>
                            </div>
                            <span className="w-[1px] h-3 bg-black/20"></span>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Limited Waitlist</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5" />
        </section>
    );
}
