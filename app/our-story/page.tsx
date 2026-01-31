'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Target, Heart, Zap, Camera, Scissors, Cpu, LineChart, ArrowRight } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function OurStory() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            {/* Hero Section: From Idea to Impact */}
            <section className="relative pt-44 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/10 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#DAC291] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">
                        From Idea to Impact
                    </p>
                    <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight tracking-tight">
                        We don&apos;t just tell stories, <br />
                        <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">we build legacies.</span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Dhasha Media was born out of a necessity for speed in an era where attention is the most valuable currency. We bridge the gap between creative spark and global reach.
                    </p>
                </div>
            </section>

            {/* Mission & Values: Gold Grid */}
            <section className="py-20 px-6 bg-zinc-900/20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        {/* Mission */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] text-black">
                            <Target size={24} className="mb-6" />
                            <h2 className="text-xl font-bold mb-4">our mission</h2>
                            <p className="text-sm font-medium leading-relaxed opacity-80">
                                to democratize high-end production by making cinema-grade content accessible at the speed of social media. we empower brands to dominate the digital landscape through precision, speed, and storytelling excellence.
                            </p>
                        </div>
                        {/* Values */}
                        <div className="p-8 rounded-[2rem] border border-[#DAC291]/20 bg-black">
                            <Heart size={24} className="mb-6 text-[#DAC291]" />
                            <h2 className="text-xl font-bold mb-4 text-[#DAC291]">our values</h2>
                            <p className="text-sm font-light leading-relaxed text-gray-400">
                                authenticity over hype. quality over quantity. innovation over tradition. we believe in transparent workflows and building long-term creative partnerships that transcend simple transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team & Expertise Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">our team</h2>
                        <p className="text-xs md:text-sm text-gray-500 max-w-xl font-light">
                            the backbone of dhasha media consists of industry specialists who live and breathe digital-first content.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                title: 'marketing',
                                icon: <LineChart size={18} />,
                                desc: 'algorithm-first strategies that ensure your content doesn&apos;t just look good, but actually performs and converts.'
                            },
                            {
                                title: 'videography',
                                icon: <Camera size={18} />,
                                desc: 'visual architects specializing in vertical cinematography and high-retention lighting setups.'
                            },
                            {
                                title: 'editors',
                                icon: <Scissors size={18} />,
                                desc: 'the masters of the 10-minute cut. precision editing focused on pacing, sound fx, and seamless flow.'
                            },
                            {
                                title: 'ai innovation',
                                icon: <Cpu size={18} />,
                                desc: 'utilizing proprietary ai workflows for color grading, captioning, and predictive trend analysis.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-[#DAC291]/20 transition-all group">
                                <div className="text-[#DAC291] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                                <p className="text-xs text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Integration Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto p-1 rounded-[3rem] bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">
                    <div className="bg-black rounded-[2.9rem] p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-none">
                                the ai <br /> advantage.
                            </h2>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                we integrate artificial intelligence not to replace creativity, but to accelerate it. our ai-driven pipeline handles skin-tone correction, audio cleanup, and viral hook generation, allowing our human creators to focus purely on the art of the story.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                <Zap className="mx-auto mb-2 text-[#DAC291]" size={20} />
                                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">98% faster</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                <Sparkles className="mx-auto mb-2 text-[#DAC291]" size={20} />
                                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">cinema grade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA: Be Part of the Story */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight">
                        be part of <span className="text-[#DAC291] font-bold">the story.</span>
                    </h2>
                    <p className="text-sm text-gray-500 font-light mb-12 leading-relaxed italic">
                        whether you are a brand looking to scale or a creator looking for your tribe, the next chapter of dhasha media starts with you.
                    </p>
                    <button className="bg-gradient-to-r from-[#B89E6C] to-[#DAC291] text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2 mx-auto shadow-xl shadow-[#DAC291]/10">
                        Join the Movement <ArrowRight size={14} />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Simple Helper Icon for the AI section
function Sparkles({ className, size }: { className?: string, size?: number }) {
    return <Zap className={className} size={size} />;
}
