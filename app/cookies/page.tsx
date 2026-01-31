'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Cookies() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-6xl font-medium mb-12 tracking-tight text-[#DAC291]">Cookie Policy</h1>

                    <div className="space-y-12 text-sm md:text-base font-light text-gray-400 leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files that are stored on your computer or mobile device when you visit a website.
                                They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                            <p>
                                We use cookies to enhance your experience on our website, including:
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li>Keeping you signed in</li>
                                <li>Understanding how you use our website</li>
                                <li>Showing you content that is relevant to you</li>
                                <li>Improving the speed and security of the site</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-[#DAC291] font-bold">Essential Cookies</h3>
                                    <p>These are necessary for the website to function and cannot be switched off in our systems.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#DAC291] font-bold">Performance Cookies</h3>
                                    <p>These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
                                </div>
                                <div>
                                    <h3 className="text-[#DAC291] font-bold">Functional Cookies</h3>
                                    <p>These enable the website to provide enhanced functionality and personalization.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white text-xl md:text-2xl font-bold mb-4">4. Managing Cookies</h2>
                            <p>
                                Most web browsers allow you to control cookies through their settings preferences.
                                However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
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
