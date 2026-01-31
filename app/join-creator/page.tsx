'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { Camera, Check, ArrowRight } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function JoinCreator() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-32 px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50 pointer-events-none"></div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAC291]/10 border border-[#DAC291]/20 text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 relative z-10">
                    <Camera size={14} /> Creator Portal
                </div>

                <h1 className="relative z-10 text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl">
                    Turn Your Skills Into <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">High-Ticket Paychecks</span>
                </h1>

                <p className="relative z-10 text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                    Join the top 1% of mobile cinematographers. Get matched with premium brands, work on your own schedule, and get paid instantly.
                </p>

                <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#DAC291] text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-white transition-colors">
                        Apply Now
                    </button>
                    <button className="px-8 py-4 rounded-full font-bold text-sm tracking-widest bg-zinc-900 border border-zinc-800 hover:border-[#DAC291]/50 transition-colors">
                        How It Works
                    </button>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-6 lg:px-8 bg-zinc-900/30">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Premium Rates', desc: 'Earn 3x more than standard freelance gigs with our premium brand partners.' },
                        { title: 'Consistent Flow', desc: 'No more chasing clients. We fill your calendar with pre-vetted bookings.' },
                        { title: 'Fast Payouts', desc: 'Get paid within 24 hours of project completion. No chasing invoices.' }
                    ].map((item, i) => (
                        <div key={i} className="bg-black/40 border border-white/5 p-8 rounded-[2rem] hover:border-[#DAC291]/30 transition-colors">
                            <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-zinc-900/20 border border-white/5 p-8 md:p-12 rounded-[3rem]">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Start Your Application</h2>
                        <p className="text-gray-500">Join the waitlist for the next batch of creator onboarding.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#DAC291] font-bold ml-2">Full Name</label>
                                <input type="text" className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#DAC291] transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-[#DAC291] font-bold ml-2">Email</label>
                                <input type="email" className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#DAC291] transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#DAC291] font-bold ml-2">Portfolio / Instagram URL</label>
                            <input type="text" className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#DAC291] transition-colors" placeholder="instagram.com/yourhandle" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-[#DAC291] font-bold ml-2">Equipment List</label>
                            <textarea className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#DAC291] transition-colors h-32" placeholder="Tell us about your gear (Camera, Gimbal, Lighting etc.)"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-[#B89E6C] to-[#EAD7B0] text-black font-bold py-5 rounded-2xl uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Submit Application <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
