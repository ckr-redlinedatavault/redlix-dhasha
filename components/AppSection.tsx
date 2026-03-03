'use client';

import { Percent, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { Bricolage_Grotesque } from 'next/font/google';
import { motion } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function AppSection() {
    return (
        <section className={`${bricolage.className} py-12 bg-[#050505] overflow-hidden relative`}>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#DAC291]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#DAC291]/20 bg-[#DAC291]/5 w-fit mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#DAC291] animate-pulse" />
                            <span className="text-[#DAC291] text-[9px] font-bold uppercase tracking-[0.2em]">Launching Q3 2026</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tighter mb-4">
                            Production <br />
                            <span className="bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">
                                in your pocket.
                            </span>
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base font-medium mb-8 max-w-sm leading-relaxed opacity-70">
                            The professional ecosystem for creators and brands, optimized for high-speed mobile workflows.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">

                            <div className="bg-[#DAC291] p-5 rounded-2xl flex flex-col justify-between min-h-[125px] shadow-xl transition-transform hover:scale-[1.01]">
                                <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-[#DAC291]">
                                    <Percent size={18} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h4 className="text-black text-2xl font-black tracking-tighter leading-none mb-1">50% OFF</h4>
                                    <p className="text-black/60 text-[9px] font-bold uppercase tracking-widest">Early Adopter Reward</p>
                                </div>
                            </div>
                            <div className="bg-[#0A0A0A] border border-white/5 p-5 rounded-2xl flex flex-col justify-between min-h-[125px] hover:border-[#DAC291]/30 transition-all">
                                <div className="flex items-center justify-between">
                                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-[#DAC291]">
                                        <Smartphone size={16} />
                                    </div>
                                    <span className="text-[8px] font-black text-white/30 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">v1.0.0</span>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex gap-3 items-center">

                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                            alt="Apple"
                                            width={16}
                                            height={16}
                                            className="h-4 w-auto invert"
                                        />

                                        <Image
                                            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                                            alt="Google Play"
                                            width={16}
                                            height={16}
                                            className="h-4 w-auto"
                                        />
                                    </div>
                                    <p className="text-white text-[9px] font-bold uppercase tracking-[0.2em] opacity-80">Global Build</p>
                                </div>
                            </div>
                        </div>


                        <div className="mt-8 flex items-center gap-4">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="App Store"
                                width={120}
                                height={40}
                                className="h-8 md:h-9 w-auto grayscale opacity-40"
                            />
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Play Store"
                                width={135}
                                height={40}
                                className="h-8 md:h-9 w-auto grayscale opacity-40"
                            />
                        </div>
                    </div>


                    <div className="relative flex justify-center items-center mt-8 lg:mt-0">
                        <div className="absolute w-[70%] aspect-square bg-[#DAC291]/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative flex items-center justify-center w-full">

                            <motion.div
                                initial={{ x: -10, opacity: 0, rotate: -4 }}
                                whileInView={{ x: -30, opacity: 0.15, rotate: -8 }}
                                transition={{ duration: 1 }}
                                className="absolute z-10 w-[180px] md:w-[220px] aspect-[9/19] bg-[#111] rounded-[2.2rem] border-[6px] border-white/5 shadow-2xl overflow-hidden pointer-events-none"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769871418/Screenshot_2026-01-31_at_20.26.06_hj6hdn.png"
                                    alt="UI BG"
                                    fill
                                    className="w-full h-full object-cover grayscale opacity-50"
                                />
                            </motion.div>


                            <motion.div
                                initial={{ y: 20, opacity: 0, rotate: 2 }}
                                whileInView={{ y: 0, opacity: 1, rotate: 4 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-20 w-[200px] md:w-[240px] aspect-[9/19] bg-[#0A0A0A] rounded-[2.2rem] border-[8px] border-white/10 shadow-[0_0_50px_rgba(218,194,145,0.1)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent z-30" />
                                <Image
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769871557/Screenshot_2026-01-31_at_20.29.05_e26wjv.png"
                                    alt="Dhasha App Hero"
                                    fill
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
