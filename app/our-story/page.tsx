'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function OurStory() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAC291]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#DAC291] text-xs font-bold tracking-[0.4em] uppercase mb-6">
                        The Dhasha Media Story
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-tight">
                        Revolutionizing <br />
                        <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">Content Creation</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                        We started with a simple question: Why does high-quality video production still take weeks when the world moves in seconds?
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* Chapter 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#DAC291]/20 blur-xl rounded-full"></div>
                            <img
                                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000"
                                alt="Filming Process"
                                className="relative rounded-[2.5rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">The Old Way Was Broken</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Traditional agencies were built for the TV era. Slow, expensive, and disconnected from the algorithm. Creators were burning out trying to edit, and brands were losing relevance while waiting for "final_v2.mp4".
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                We realized that the modern digital landscape needed a factory, not just an artist. A system that could produce high-end cinema quality at internet speed.
                            </p>
                        </div>
                    </div>

                    {/* Chapter 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="md:order-2 relative">
                            <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
                            <img
                                src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000"
                                alt="Modern Editing"
                                className="relative rounded-[2.5rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="md:order-1">
                            <h2 className="text-3xl font-bold mb-6">Enter The 10-Minute Model</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                We didn't just optimize the process; we reinvented it. By integrating mobile editing suites directly on-site and utilizing proprietary AI color grading workflows, we cut production time by 98%.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Today, Dhasha Media operates as a decentralized powerhouse, connecting certified pro-creators with brands who command attention.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-[#DAC291] mb-2">500+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">Brands Scaled</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-[#DAC291] mb-2">10k+</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">Reels Delivered</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-[#DAC291] mb-2">24h</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">Avg. Turnaround</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-[#DAC291] mb-2">100%</div>
                        <div className="text-xs uppercase tracking-widest text-gray-500">Satisfaction</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
