'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Camera, FileText, Upload, Wand2, Zap, Send } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function HowItWorks() {
    const steps = [
        {
            id: '01',
            title: 'Create Your Brief',
            desc: 'Fill out our 2-minute creative questionnaire. Tell us your brand vibe, target audience, and key message.',
            icon: <FileText size={32} />
        },
        {
            id: '02',
            title: 'Ship Your Product',
            desc: 'Send your products to our studio HQ. We handle unboxing, staging, and prep work immediately upon arrival.',
            icon: <Send size={32} />
        },
        {
            id: '03',
            title: 'Production Day',
            desc: 'Our creators shoot high-fidelity 4K footage using cinema-grade gear, perfectly lighting your product.',
            icon: <Camera size={32} />
        },
        {
            id: '04',
            title: 'Magic Editing',
            desc: 'Editors cut the footage to trending audio, add dynamic captions, color grade, and inject visual effects.',
            icon: <Wand2 size={32} />
        },
        {
            id: '05',
            title: 'Review & Download',
            desc: 'Get a notification when your reel is ready. Review, request tweaks if needed, and download the final asset.',
            icon: <Upload size={32} />
        },
        {
            id: '06',
            title: 'Go Viral',
            desc: 'Post your content and watch the engagement roll in. We track performance to optimize your next batch.',
            icon: <Zap size={32} />
        }
    ];

    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DAC291]/10 rounded-full blur-[120px] pointer-events-none"></div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    From Concept to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">Content.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    Our streamlined process is designed for speed without compromising on the premium quality your brand deserves.
                </p>
            </section>

            {/* Timeline Steps */}
            <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="relative">
                    {/* Central Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#DAC291]/50 via-[#DAC291]/10 to-transparent -translate-x-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 mb-20 relative group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-8 md:px-16">
                                <h3 className="text-2xl font-bold mb-3 text-[#DAC291] flex items-center gap-3">
                                    <span className="text-sm font-light border border-[#DAC291]/30 rounded-full px-2 py-0.5">Step {step.id}</span>
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Center Marker */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 bg-black border border-[#DAC291] rounded-full shadow-[0_0_20px_rgba(218,194,145,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#DAC291] group-hover:text-black text-[#DAC291]">
                                {step.icon}
                            </div>

                            {/* Empty Side (Desktop) */}
                            <div className="w-full md:w-1/2 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
