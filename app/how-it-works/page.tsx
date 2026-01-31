'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Search, Calendar, Download, UserCheck, Settings, Banknote, Star, ShieldCheck, Clock, Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

// Data for Steps
const customerSteps = [
    {
        id: '01',
        title: 'Discover & Book',
        desc: 'Browse our curated marketplace of verified creators. Filter by style, budget, and availability to find your perfect match.',
        icon: <Search size={28} />
    },
    {
        id: '02',
        title: 'Coordinate & Celebrate',
        desc: 'Chat directly with your creator to align on the vision. Then, enjoy your event while we capture every moment.',
        icon: <Calendar size={28} />
    },
    {
        id: '03',
        title: 'Receive & Relive',
        desc: 'Get your professionally edited gallery and video highlights within 24-48 hours. Download, share, and relive the magic.',
        icon: <Download size={28} />
    }
];

const creatorSteps = [
    {
        id: '01',
        title: 'Join & Verify',
        desc: 'Sign up and showcase your portfolio. We verify your skills to ensure you meet Dhasha’s premium standards.',
        icon: <UserCheck size={28} />
    },
    {
        id: '02',
        title: 'Set Up & Receive Bookings',
        desc: 'Customize your profile, set your rates, and manage your calendar. Get bookings directly from clients who love your style.',
        icon: <Settings size={28} />
    },
    {
        id: '03',
        title: 'Deliver & Earn',
        desc: 'Shoot the event, upload the footage, and get paid securely. We handle the admin so you can focus on creating.',
        icon: <Banknote size={28} />
    }
];

// Data for Pro Tips
const customerTips = [
    "Book in advance for better availability and rates.",
    "Provide detailed requirements for the best results.",
    "Consider booking multiple creators for a comprehensive experience.",
    "Leave detailed reviews to help improve the community."
];

const creatorTips = [
    "Keep your portfolio updated with your best work.",
    "Respond quickly to booking requests.",
    "Complete Creator Academy courses to improve your skills.",
    "Set competitive prices based on your experience and specialty."
];

export default function HowItWorks() {
    const [activeTab, setActiveTab] = useState<'customers' | 'creators'>('customers');

    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-16 px-6 text-center relative z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAC291]/10 rounded-full blur-[140px] pointer-events-none"></div>
                <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
                    Capture Life's Moments in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">3 Simple Steps!</span>
                </h1>
                <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
                    Whether you're looking to capture memories or monetize your talent, Dhasha Media connects the dots seamlessly.
                </p>
            </section>

            {/* Toggle Switch */}
            <section className="px-6 pb-20 relative z-10">
                <div className="flex justify-center mb-16">
                    <div className="bg-zinc-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-sm flex gap-2">
                        <button
                            onClick={() => setActiveTab('customers')}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'customers' ? 'bg-[#DAC291] text-black shadow-lg shadow-[#DAC291]/20' : 'text-gray-400 hover:text-white'}`}
                        >
                            For Customers
                        </button>
                        <button
                            onClick={() => setActiveTab('creators')}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'creators' ? 'bg-[#DAC291] text-black shadow-lg shadow-[#DAC291]/20' : 'text-gray-400 hover:text-white'}`}
                        >
                            For Creators
                        </button>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {(activeTab === 'customers' ? customerSteps : creatorSteps).map((step, index) => (
                                <div key={index} className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 relative group hover:border-[#DAC291]/30 transition-all hover:-translate-y-1">
                                    <div className="absolute top-6 right-8 text-6xl font-black text-white/5 group-hover:text-[#DAC291]/10 transition-colors select-none">
                                        {step.id}
                                    </div>
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#B89E6C] to-[#EAD7B0] rounded-2xl flex items-center justify-center text-black mb-8 shadow-lg shadow-[#DAC291]/10">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Pro Tips Section */}
            <section className="py-24 px-6 bg-zinc-900/20 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-[#DAC291]/30 bg-[#DAC291]/5 text-[#DAC291] text-[10px] font-bold uppercase tracking-widest mb-6">
                            Maximize Your Experience
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Pro Tips for Success</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Customer Tips */}
                        <div className="bg-black border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-zinc-900 rounded-xl text-white"><Star size={24} /></div>
                                <h3 className="text-xl font-bold">For Customers</h3>
                            </div>
                            <ul className="space-y-6">
                                {customerTips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAC291] shrink-0"></div>
                                        <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{tip}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Creator Tips */}
                        <div className="bg-black border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]"></div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-zinc-900 rounded-xl text-white"><Lightbulb size={24} /></div>
                                <h3 className="text-xl font-bold">For Creators</h3>
                            </div>
                            <ul className="space-y-6">
                                {creatorTips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAC291] shrink-0"></div>
                                        <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">{tip}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

