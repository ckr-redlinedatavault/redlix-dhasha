'use client';

import { Download, Percent, Smartphone } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function AppSection() {
    return (
        <section className={`${bricolage.className} pt-16 pb-20 bg-black overflow-hidden relative`}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#DAC291]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content Side */}
                    <div className="flex flex-col items-start">
                        {/* Download Badge */}
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.3em]">
                                <Download size={12} />
                                <span>Coming Soon</span>
                            </div>

                        </div>

                        {/* Heading - Reduced Margin */}
                        <h2 className="text-4xl md:text-6xl font-extralight text-white leading-[1.1] mb-4">
                            Download The <br />
                            <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">
                                Dhasha Media
                            </span> App
                        </h2>

                        <p className="text-gray-400 text-base font-light mb-8 max-w-md italic opacity-80">
                            Professional content creation, as easy as booking a cab.
                        </p>

                        {/* Info Cards - Tightened Spacing */}
                        <div className="space-y-3 w-full max-w-sm">
                            {/* Discount Card */}
                            <div className="bg-zinc-900/40 border border-white/5 p-5 rounded-2xl flex items-center gap-5 group hover:border-[#DAC291]/30 transition-all">
                                <div className="w-10 h-10 bg-[#DAC291] rounded-xl flex items-center justify-center text-black shrink-0 shadow-lg shadow-[#DAC291]/20">
                                    <Percent size={20} strokeWidth={3} />
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold">Flat 50% Off</h4>
                                    <p className="text-gray-500 text-[11px] uppercase tracking-wider font-bold">On Your First Reel</p>
                                </div>
                            </div>

                            {/* Official Download Buttons Card */}
                            <div className="bg-zinc-900/40 border border-white/5 p-5 rounded-2xl">
                                <h4 className="text-white font-bold mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-40">
                                    <Smartphone size={14} /> Available Platforms
                                </h4>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Official App Store Badge */}
                                    <a href="#" className="hover:opacity-80 transition-opacity">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                            alt="Download on the App Store"
                                            className="h-10 w-auto"
                                        />
                                    </a>

                                    {/* Official Play Store Badge */}
                                    <a href="#" className="hover:opacity-80 transition-opacity">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                            alt="Get it on Google Play"
                                            className="h-10 w-auto"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Side (Smartphone Mockups) */}
                    <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
                        <div className="absolute w-[400px] h-[400px] bg-[#DAC291]/10 blur-[120px] rounded-full"></div>

                        {/* Phone 1 (Staggered Left) */}
                        <div className="relative z-20 w-[220px] md:w-[260px] aspect-[9/19] bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-2xl overflow-hidden -rotate-6 translate-y-8">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769871418/Screenshot_2026-01-31_at_20.26.06_hj6hdn.png"
                                alt="App Screen"
                                className="w-full h-full object-cover grayscale opacity-60"
                            />
                        </div>

                        {/* Phone 2 (Centered High) */}
                        <div className="relative z-30 w-[220px] md:w-[260px] aspect-[9/19] bg-zinc-900 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-2xl overflow-hidden rotate-6 lg:-ml-16">
                            <img
                                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769871557/Screenshot_2026-01-31_at_20.29.05_e26wjv.png"
                                alt="App Screen"
                                className="w-full h-full object-cover opacity-90 brightness-110"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}