'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Mail, Phone, MapPin, ArrowRight, Clock } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Contact() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">

                    {/* Left - Info */}
                    <div className="w-full md:w-1/2 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            <Mail size={12} /> Get in Touch
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
                            Let&apos;s Create <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">Something Viral.</span>
                        </h1>

                        <p className="text-xl text-gray-400 font-light max-w-lg mb-12 leading-relaxed">
                            Whether you need a single campaign or a monthly studio retainer, our team is ready to deploy in 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#DAC291] shrink-0 border border-white/5">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Email Us</h3>
                                    <p className="text-gray-500 font-light">hello@dhashamedia.com</p>
                                    <p className="text-gray-500 font-light">bookings@dhashamedia.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#DAC291] shrink-0 border border-white/5">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Call Us</h3>
                                    <p className="text-gray-500 font-light">+91 98765 43210</p>
                                    <p className="text-gray-500 font-light">Mon-Sat, 9am - 7pm</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#DAC291] shrink-0 border border-white/5">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">HQ Location</h3>
                                    <p className="text-gray-500 font-light">
                                        1204, Tech Park One, <br />
                                        Hitech City, Hyderabad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="w-full md:w-1/2 bg-zinc-900/40 p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#DAC291] font-bold ml-2">Name</label>
                                    <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#DAC291] transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-[#DAC291] font-bold ml-2">Phone</label>
                                    <input type="tel" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#DAC291] transition-colors" placeholder="+91..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-[#DAC291] font-bold ml-2">Email Address</label>
                                <input type="email" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#DAC291] transition-colors" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-[#DAC291] font-bold ml-2">Project Type</label>
                                <select className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#DAC291] transition-colors text-gray-400">
                                    <option>Select an option</option>
                                    <option>Reel Production (One-off)</option>
                                    <option>Monthly Retainer</option>
                                    <option>Event Coverage</option>
                                    <option>Podcast Production</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-[#DAC291] font-bold ml-2">Message</label>
                                <textarea className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-[#DAC291] transition-colors h-32" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase tracking-[0.2em] hover:bg-[#DAC291] transition-colors flex items-center justify-center gap-2 mt-4">
                                Send Inquiry <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
