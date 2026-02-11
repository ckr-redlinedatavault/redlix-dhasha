'use client';

import {
    ShieldCheck,
    Settings,
    Eye,
    Check,
    Circle,
    Layers,
    Zap,
    Lock,
    ArrowUpRight
} from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const assets = {
    podcast: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1770717760/ChatGPT_Image_Feb_10_2026_03_32_31_PM_fdvjbb.png',
};

export default function StudioPage() {
    return (
        <main className={`${bricolage.className} min-h-screen bg-black text-white selection:bg-[#DAC291] selection:text-black antialiased`}>
            <Navbar />

            {/* Hero Section - Left Aligned & Clean */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-black">
                <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#DAC291]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-[#DAC291]" />
                            <span className="text-[10px] font-normal tracking-widest text-[#DAC291] uppercase">Studio Infrastructure</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-normal tracking-tight leading-[1] mb-8">
                            Dhasha <span className="text-[#DAC291]">Studio.</span>
                        </h1>

                        <p className="text-lg md:text-xl font-normal text-white/50 leading-relaxed mb-10 max-w-xl">
                            A unified network designed for elite studios. We provide the infrastructure for professional production, direct talent integration, and global creative workflows.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="https://bookings.dhashamedia.com/studio/register" className="px-10 py-4 bg-[#DAC291] text-black rounded-xl font-normal text-xs tracking-wider hover:bg-[#e2ceaa] transition-all">
                                Request Access
                            </Link>
                            <Link href="https://bookings.dhashamedia.com/studios" className="px-10 py-4 border border-white/10 rounded-xl font-normal text-xs tracking-wider hover:bg-white/5 transition-all">
                                Explore Studios
                            </Link>
                            <Link href="https://bookings.dhashamedia.com/studio/login" className="px-10 py-4 text-white/40 hover:text-[#DAC291] transition-colors font-normal text-xs tracking-wider flex items-center gap-2">
                                Studio Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values - Left Aligned */}
            <section className="py-16 bg-zinc-950/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <Eye size={20} className="text-[#DAC291]" />
                            <h3 className="text-lg font-normal">Professional discovery</h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                Gain visibility within a curated network of high-tier production houses and global creators.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Zap size={20} className="text-[#DAC291]" />
                            <h3 className="text-lg font-normal">Direct workflow</h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                A seamless booking system that connects your studio space directly with verified professional talent.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <ShieldCheck size={20} className="text-[#DAC291]" />
                            <h3 className="text-lg font-normal">Verified status</h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                Every partner undergoes a rigorous audit to maintain a high standard of excellence across the network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration Workflow - Compact Grid */}
            <section id="workflow" className="py-20 bg-[#DAC291] text-black">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-2xl mb-12">
                        <h2 className="text-4xl font-normal tracking-tight mb-4">Registration workflow</h2>
                        <p className="text-black/60 font-normal">Our structured onboarding process for studio partners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/10 border border-black/5 rounded-3xl overflow-hidden">
                        {[
                            { step: "01", title: "Identity", items: ["Legal Entity", "Contacts", "Location"] },
                            { step: "02", title: "Capacity", items: ["Team Size", "Equipment", "Hours"] },
                            { step: "03", title: "Showcase", items: ["Portfolio", "Media", "Pricing"] },
                            { step: "04", title: "Validation", items: ["Quality Audit", "ID Check", "Activation"] }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#DAC291] p-8">
                                <span className="text-black/30 text-xs block mb-6">{item.step}</span>
                                <h3 className="text-lg font-normal mb-4">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.items.map(li => (
                                        <li key={li} className="text-[11px] text-black/60 font-normal flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-black/20" /> {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manual Verification Info */}
            <section className="py-20 bg-black">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DAC291]/20 bg-[#DAC291]/5">
                                <ShieldCheck size={14} className="text-[#DAC291]" />
                                <span className="text-[10px] font-normal uppercase tracking-wider text-[#DAC291]">Verification Standards</span>
                            </div>
                            <h2 className="text-4xl font-normal tracking-tight">Manual audit process</h2>
                            <p className="text-white/50 leading-relaxed font-normal">
                                To ensure professional integrity, every registration is reviewed by our team. We verify equipment standards, professional background, and creative portfolio quality before granting network access.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Identity Audit", "Portfolio Quality", "Service Credibility", "Brand Alignment"].map(check => (
                                    <div key={check} className="flex items-center gap-3 text-[11px] text-white/70 font-normal border border-white/5 p-3 rounded-lg">
                                        <Check size={14} className="text-[#DAC291]" />
                                        {check}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 aspect-video flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <Lock size={32} className="text-[#DAC291] mx-auto opacity-50" />
                                <p className="text-xs text-white/30 tracking-widest uppercase">Secure Verification Portal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Unified OS */}
            <section className="py-20 border-t border-white/5 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl font-normal tracking-tight mb-6">Unified booking infrastructure</h2>
                        <p className="text-white/50 text-lg font-normal leading-relaxed">
                            Our commerce system integrates billing, confirmation, and scheduling directly into your dashboard. Manage your entire studio operation from a single, clean interface.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <Zap size={18} />, label: "Instant Connect" },
                            { icon: <Layers size={18} />, label: "Unified Stack" },
                            { icon: <Settings size={18} />, label: "Smart Control" },
                            { icon: <Lock size={18} />, label: "Secure Gateway" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 border border-white/5 rounded-xl bg-black hover:border-[#DAC291]/20 transition-colors group">
                                <div className="text-[#DAC291] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                                <span className="text-xs font-normal tracking-wide text-white/60">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Simple */}
            <section className="py-24 bg-black relative">
                <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-20">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl font-normal tracking-tight mb-6">Expand your empire.</h2>
                        <p className="text-white/40 text-lg mb-10 font-normal">
                            Join the most structured network for premium studios in India. Start your verification and integrate with the Dhasha Media ecosystem.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <Link href="https://bookings.dhashamedia.com/studio/register" className="px-12 py-5 bg-[#DAC291] text-black rounded-xl font-normal text-sm tracking-wider hover:scale-105 transition-all">
                                Apply for Verification
                            </Link>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#DAC291] animate-pulse" />
                                <span className="text-[10px] font-normal uppercase tracking-widest text-white/30">Limited Slots Q1 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}