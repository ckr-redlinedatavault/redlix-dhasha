'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Terms() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#DAC291] selection:text-black`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6">

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DAC291]/5 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <header className="mb-16 md:mb-24 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-[#DAC291]">
                            Terms of Service
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            These terms govern your use of our services. Please read them carefully.
                        </p>
                    </header>

                    <div className="space-y-16 text-gray-300 font-light leading-relaxed text-base md:text-lg">


                        <section className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#DAC291]/30 transition-colors duration-500">
                            <h2 className="text-white text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <strong className="text-white">Dhasha Media</strong> ("Dhasha Media", "we", "us", or "our"), an independent freelance collective. Please be advised that Dhasha Media is <strong>not a government-registered company</strong> but operates as a freelance consultancy providing creative and technical media solutions.
                            </p>
                            <p className="mt-4">
                                By accessing the Site (<a href="https://www.dhashamedia.com/" className="text-[#DAC291] hover:underline decoration-[#DAC291]/50 underline-offset-4">https://www.dhashamedia.com/</a>) or using our services, you agree to be bound by these Terms of Service.
                            </p>
                        </section>


                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                2. Our Services
                            </h2>
                            <p className="mb-6">
                                Dhasha Media operates as a premium freelance consultancy. By engaging with us, you are commissioning independent creative work. Our service offerings include:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Reels shoot",
                                    "YouTube Vlogs & Shorts",
                                    "Podcast Production",
                                    "News & Media",
                                    "Creators Hub",
                                    "Business Collabs",
                                    "Brand Marketing",
                                    "Cinematic Weddings",
                                    "Event Coverage",
                                    "Creative Formats"
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-[#DAC291]/30 transition-all duration-300 group">
                                        <div className="w-10 h-10 rounded-full bg-[#DAC291]/10 flex items-center justify-center text-[#DAC291] font-bold group-hover:bg-[#DAC291] group-hover:text-black transition-all">
                                            {index + 1}
                                        </div>
                                        <span className="text-lg font-medium text-white">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </section>


                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                3. Intellectual Property
                            </h2>
                            <p>
                                All creative deliverables (videos, graphics, edits) remain the property of Dhasha Media until full payment is received. Upon final settlement, the client is granted a perpetual, global license for the intended use of the deliverables, while Dhasha Media retains the right to showcase the work in promotional portfolios.
                            </p>
                        </section>


                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                4. User Representations
                            </h2>
                            <p className="mb-4">By using the Site, you represent and warrant that:</p>
                            <ul className="list-disc pl-6 space-y-3 marker:text-[#DAC291]">
                                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                <li>You are not a minor in the jurisdiction in which you reside.</li>
                                <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                            </ul>
                        </section>


                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                5. Prohibited Activities
                            </h2>
                            <p>
                                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </p>
                        </section>


                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                6. Governing Law
                            </h2>
                            <p>
                                These Terms shall be governed by and defined following the laws of India. As a freelance consultancy operating in India, any disputes shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, India.
                            </p>
                        </section>


                        <section className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 text-center">
                            <h2 className="text-2xl font-medium text-white mb-4">Contact Us</h2>
                            <p className="mb-6 text-gray-400">
                                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                            </p>
                            <div className="flex flex-col items-center gap-2">
                                <strong className="text-xl text-[#DAC291]">Dhasha Media</strong>
                                <a href="mailto:dhashamedia07@gmail.com" className="text-white hover:text-[#DAC291] transition-colors">dhashamedia07@gmail.com</a>
                            </div>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <p className="text-xs text-[#DAC291] font-mono">
                                Last Updated: {new Date().toLocaleDateString()}
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
