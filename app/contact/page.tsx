'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Mail, Phone, MapPin, ArrowRight, Clock, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Contact() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

                    {/* Left Column: Text & CTA */}
                    <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            <Mail size={12} /> Get in Touch
                        </div>

                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight leading-tight">
                            Let&apos;s Create <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">Something Viral.</span>
                        </h1>

                        <p className="text-sm md:text-base text-gray-400 font-light max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
                            Whether you need a single campaign or a monthly studio retainer, our team is ready to deploy in 24 hours.
                        </p>

                        <a href="mailto:hello@dhashamedia.com" className="inline-flex items-center gap-2 bg-[#DAC291] text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors shadow-lg shadow-[#DAC291]/10">
                            Drop us an email <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Right Column: Contact Cards */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">

                        {/* Email Card */}
                        <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-[#DAC291]/30 transition-all group">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-[#DAC291] border border-white/5 group-hover:scale-110 transition-transform shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                    <div className="space-y-1">
                                        <a href="mailto:hello@dhashamedia.com" className="block text-xs md:text-sm text-gray-400 font-light hover:text-[#DAC291] transition-colors">hello@dhashamedia.com</a>
                                        <a href="mailto:bookings@dhashamedia.com" className="block text-xs md:text-sm text-gray-400 font-light hover:text-[#DAC291] transition-colors">bookings@dhashamedia.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone/Office Card */}
                        <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-[#DAC291]/30 transition-all group">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-[#DAC291] border border-white/5 group-hover:scale-110 transition-transform shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                                    <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-2">
                                        1204, Tech Park One,<br />
                                        Hitech City, Hyderabad.
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-500 font-light flex items-center gap-2">
                                        <Clock size={12} /> Mon-Sat, 9am - 7pm
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Socials Card */}
                        <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-[#DAC291]/30 transition-all group">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-[#DAC291] border border-white/5 group-hover:scale-110 transition-transform shrink-0">
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Socials</h3>
                                    <div className="flex gap-4">
                                        <a href="#" className="p-3 bg-black rounded-xl text-gray-400 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                                            <Instagram size={18} />
                                        </a>
                                        <a href="#" className="p-3 bg-black rounded-xl text-gray-400 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                                            <Twitter size={18} />
                                        </a>
                                        <a href="#" className="p-3 bg-black rounded-xl text-gray-400 hover:text-white hover:bg-zinc-800 transition-all border border-white/5">
                                            <Linkedin size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
