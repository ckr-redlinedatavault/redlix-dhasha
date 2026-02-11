'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Camera, Smartphone, Video, Users, Calendar, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

// Benefits Data
const benefits = [
    {
        title: 'Premium Earnings',
        desc: 'Unlock high-ticket opportunities with top-tier brands. Our creators earn 3x more than standard freelance market rates.',
        icon: <BanknoteIcon />
    },
    {
        title: 'Total Flexibility',
        desc: 'Work on your own terms. Choose the projects that fit your schedule and creative style. You are your own boss.',
        icon: <Calendar size={24} />
    },
    {
        title: 'Thriving Community',
        desc: 'Connect with a network of elite creators. Collaborations, meetups, and exclusive workshops to level up your game.',
        icon: <Users size={24} />
    }
];

// Who we look for data
const roles = [
    {
        title: 'Photographers',
        icon: <Camera size={20} />,
        tags: ['Event', 'Product', 'Portrait']
    },
    {
        title: 'Videographers',
        icon: <Video size={20} />,
        tags: ['Cinematic', 'Documentary', 'Drone']
    },
    {
        title: 'Mobile Creators',
        icon: <Smartphone size={20} />,
        tags: ['Reels', 'TikTok', 'BTS']
    },
    {
        title: 'Influencers',
        icon: <Users size={20} />,
        tags: ['Lifestyle', 'Tech', 'Fashion']
    },
    {
        title: 'Event Managers',
        icon: <Calendar size={20} />,
        tags: ['Coordination', 'Planning', 'Logistics']
    }
];

function BanknoteIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
    )
}

export default function JoinCreator() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAC291]/10 rounded-full blur-[140px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAC291]/10 border border-[#DAC291]/20 text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                        <Camera size={14} /> Creator Portal
                    </div>

                    <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight max-w-5xl mx-auto leading-tight">
                        Turn Your Passion Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">A Legacy.</span>
                    </h1>

                    <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                        Join Dhasha Media&apos;s elite network. Get matched with premium brands, work on your own schedule, and get paid instantly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://bookings.dhashamedia.com/join-creator"
                            className="bg-gradient-to-r from-[#B89E6C] to-[#DAC291] text-black px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:brightness-110 transition-all shadow-lg shadow-[#DAC291]/20 flex items-center justify-center gap-2"
                        >
                            Apply Now <ExternalLink size={16} />
                        </a>
                        <a
                            href="#"
                            className="px-10 py-4 rounded-full font-bold text-sm tracking-widest bg-zinc-900 border border-zinc-800 hover:border-[#DAC291]/50 hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={16} /> Download App
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Why Join Section */}
            <section className="py-24 px-6 bg-zinc-900/20 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Why Join Dhasha Media?</h2>
                        <p className="text-xs md:text-sm text-gray-400 font-light">More than just a platform. It&apos;s a career accelerator.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black border border-white/10 p-8 rounded-[2rem] hover:border-[#DAC291]/30 transition-all group hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-[#DAC291] mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#DAC291] transition-colors">{item.title}</h3>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are Looking For */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Who We Are Looking For</h2>
                            <p className="text-xs md:text-sm text-gray-400 font-light max-w-xl">
                                We are building a diverse ecosystem of talent. If you are passionate about your craft, there is a place for you here.
                            </p>
                        </div>
                        <div className="h-px flex-1 bg-white/10 ml-8 mb-4 hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {roles.map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative overflow-hidden rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#DAC291]/20 transition-all"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DAC291]/5 rounded-full blur-[40px] group-hover:bg-[#DAC291]/10 transition-all"></div>

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-black rounded-lg text-white border border-white/10 group-hover:border-[#DAC291]/50 group-hover:text-[#DAC291] transition-colors shadow-lg">
                                            {role.icon}
                                        </div>
                                        <h3 className="text-base font-bold">{role.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {role.tags.map((tag, t) => (
                                            <span key={t} className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-white/5 rounded-full text-gray-400 group-hover:text-white transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-b from-zinc-900 to-black p-12 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
                        <p className="text-gray-400 font-light mb-10 max-w-xl mx-auto">
                            The application takes less than 5 minutes. Join hundreds of creators earning on Dhasha Media today.
                        </p>
                        <a
                            href="https://bookings.dhashamedia.com/join-creator"
                            className="inline-block bg-gradient-to-r from-[#B89E6C] to-[#DAC291] text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-[#DAC291]/20"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
