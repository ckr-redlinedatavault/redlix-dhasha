'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Privacy() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-medium mb-12 tracking-tight text-[#DAC291]">Privacy Policy</h1>

                    <div className="space-y-12 text-sm md:text-base font-light text-gray-400 leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">1. Introduction</h2>
                            <p>
                                Welcome to Dhasha Media. We are committed to protecting your personal information and your right to privacy.
                                If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information,
                                please contact us at hello@dhashamedia.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">2. Information We Collect</h2>
                            <p>
                                We collect personal information that you voluntarily provide to us when you register on the website,
                                express an interest in obtaining information about us or our products and services, when you participate
                                in activities on the website or otherwise when you contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                            <p>
                                We use personal information collected via our website for a variety of business purposes described below.
                                We process your personal information for these purposes in reliance on our legitimate business interests,
                                in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">4. Sharing Your Information</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services,
                                to protect your rights, or to fulfill business obligations.
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
