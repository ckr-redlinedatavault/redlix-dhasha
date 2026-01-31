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
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-medium mb-12 tracking-tight text-[#DAC291]">Terms of Service</h1>

                    <div className="space-y-12 text-sm md:text-base font-light text-gray-400 leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Dhasha Media (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
                                (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">3. User Representations</h2>
                            <p>
                                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete;
                                (2) you will maintain the accuracy of such information and promptly update such registration information as necessary;
                                (3) you have the legal capacity and you agree to comply with these Terms of Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">4. Prohibited Activities</h2>
                            <p>
                                You may not access or use the Site for any purpose other than that for which we make the Site available.
                                The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                            </p>
                        </section>

                        <section>
                            <p className="text-xs text-gray-500 mt-12">
                                Last updated: {new Date().toLocaleDateString()}
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
