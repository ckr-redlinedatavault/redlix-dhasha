'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';
import { Target, Heart, Zap, Camera, Scissors, Cpu, LineChart, ArrowRight } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function OurStory() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white selection:bg-[#DAC291] selection:text-black antialiased`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-black">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-[#DAC291]" />
                            <span className="text-[10px] font-normal tracking-widest text-[#DAC291] uppercase">Our Journey</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-6">
                            Building legacies, <br />
                            <span className="text-[#DAC291]">one story at a time.</span>
                        </h1>

                        <p className="text-base md:text-lg font-normal text-white/50 leading-relaxed max-w-xl">
                            Dhasha Media was born out of a necessity for speed and quality. We bridge the gap between creative sparks and global reach, turning ambitious ideas into digital reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founders Section - Large Squares & Gold Background */}
            <section className="py-20 bg-[#DAC291] text-black">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl mb-12 border-l-2 border-black/20 ps-6">
                        <h2 className="text-4xl font-normal tracking-tight mb-4">The visionaries</h2>
                        <p className="text-sm text-black/60 font-normal">The minds turning the dream of a unified media ecosystem into reality.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Founder 1 */}
                        <div className="bg-black text-white p-4 rounded-3xl border border-black group">
                            <div className="aspect-square w-full bg-zinc-900 rounded-2xl mb-8 overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770828485/WhatsApp_Image_2026-02-11_at_21.33.25_buewpz.jpg"
                                    alt="Founder"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="text-2xl font-normal text-[#DAC291] mb-1">Dhanush Reddy Marivada</h3>
                                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-6">Chief executive officer</p>
                                <p className="text-sm text-white/50 leading-relaxed font-normal">
                                    Driving the strategic vision and infrastructure of Dhasha Media, ensuring the ecosystem scales with professional integrity and creative excellence.
                                </p>
                            </div>
                        </div>

                        {/* Founder 2 */}
                        <div className="bg-black text-white p-4 rounded-3xl border border-black group">
                            <div className="aspect-square w-full bg-zinc-900 rounded-2xl mb-8 overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770825669/Screenshot_2026-02-11_at_21.30.59_kot78w.png"
                                    alt="Founder"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="text-2xl font-normal text-[#DAC291] mb-1">Sai Sharan Puttla</h3>
                                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-6">Chief creative officer</p>
                                <p className="text-sm text-white/50 leading-relaxed font-normal">
                                    Architect of the creative pipeline, blending human storytelling with advanced technology to redefine how content is produced and consumed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values - Gold Box Layout */}
            <section className="py-20 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-10 border border-[#DAC291]/30 rounded-3xl bg-[#DAC291]/5 space-y-6">
                            <Target size={24} className="text-[#DAC291]" />
                            <h2 className="text-2xl font-normal">Our mission</h2>
                            <p className="text-sm text-white/50 leading-relaxed font-normal">
                                To democratize high-end production by making cinema-grade content accessible at the speed of digital trends. We empower brands to dominate their landscape through precision and storytelling excellence.
                            </p>
                        </div>
                        <div className="p-10 border border-[#DAC291]/30 rounded-3xl bg-[#DAC291]/5 space-y-6">
                            <Heart size={24} className="text-[#DAC291]" />
                            <h2 className="text-2xl font-normal">Our values</h2>
                            <p className="text-sm text-white/50 leading-relaxed font-normal">
                                Authenticity over hype. Quality over quantity. We believe in transparent workflows and building long-term creative partnerships that go beyond simple transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise - Gold Box Grid */}
            <section className="py-20 border-y border-white/5 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-normal tracking-tight mb-12">Technical expertise</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: 'Marketing', icon: <LineChart size={18} />, desc: 'Algorithm-first strategies designed to ensure your content actually performs.' },
                            { title: 'Videography', icon: <Camera size={18} />, desc: 'Visual architects specializing in vertical cinematography and professional lighting.' },
                            { title: 'Editing', icon: <Scissors size={18} />, desc: 'Masters of pacing and flow, focusing on high-retention editing and sound design.' },
                            { title: 'Innovation', icon: <Cpu size={18} />, desc: 'Integrating proprietary workflows for color grading and trend analysis.' }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-[#DAC291]/20 bg-black hover:border-[#DAC291]/50 transition-all group">
                                <div className="text-[#DAC291] mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                                <h3 className="text-base font-normal mb-3">{item.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed font-normal">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Advantage - Massive Gold Box */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="p-10 md:p-16 rounded-[3rem] border border-[#DAC291] bg-[#DAC291]/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Zap size={120} className="text-[#DAC291]" />
                        </div>
                        <div className="max-w-2xl relative z-10">
                            <div className="flex items-center gap-2 mb-6">
                                <Zap size={16} className="text-[#DAC291]" />
                                <span className="text-[10px] font-normal uppercase tracking-widest text-[#DAC291]">Technology integration</span>
                            </div>
                            <h2 className="text-4xl font-normal tracking-tight mb-6">The AI advantage.</h2>
                            <p className="text-sm text-white/50 leading-relaxed font-normal mb-10">
                                We integrate artificial intelligence to accelerate creativity, not replace it. Our pipeline handles technical correction and audio cleanup, allowing our creators to focus purely on the art of storytelling.
                            </p>
                            <div className="flex gap-12">
                                <div className="border-l border-[#DAC291]/30 ps-6">
                                    <p className="text-2xl font-normal text-white">98%</p>
                                    <p className="text-[9px] uppercase tracking-widest text-white/30">Faster delivery</p>
                                </div>
                                <div className="border-l border-[#DAC291]/30 ps-6">
                                    <p className="text-2xl font-normal text-white">Cinema</p>
                                    <p className="text-[9px] uppercase tracking-widest text-white/30">Grade quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl p-10 border border-[#DAC291]/20 rounded-3xl bg-zinc-950">
                        <h2 className="text-5xl font-normal tracking-tight mb-6">Be part of the story.</h2>
                        <p className="text-white/40 text-lg mb-10 font-normal leading-relaxed">
                            Whether you are a brand looking to scale or a creator looking for your tribe, the next chapter of Dhasha Media starts with you.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#DAC291] text-black rounded-xl font-normal text-xs tracking-wider hover:bg-[#e2ceaa] transition-all">
                            Join the movement <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
