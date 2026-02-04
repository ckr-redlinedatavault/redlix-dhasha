'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Credits() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white`}>
            <Navbar />
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Credits</h1>
                    <p className="text-gray-400 text-lg">
                        Designed & Developed by <span className="text-[#DAC291] font-bold">Redlix</span>.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
