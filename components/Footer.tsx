'use client';

import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import BottomBanner from './BottomBanner';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${bricolage.className} text-black`}>
            {/* Main Footer Content with Gradient */}
            <div className="bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] pt-16 pb-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                    {/* Top Section: Large Logo & Description */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-12">
                        <div className="col-span-1 lg:col-span-2">
                            {/* Large External Logo - brightness-0 forces it to be solid black */}
                            <div className="mb-8">
                                <img
                                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769863861/WhatsApp_Image_2026-01-31_at_18.18.05-removebg-preview_mqautr.png"
                                    alt="Dhasha Media Logo"
                                    className="h-16 md:h-20 w-auto object-contain brightness-0"
                                />
                            </div>

                            <p className="text-black/70 text-lg font-medium mb-8 max-w-sm leading-relaxed">
                                Setting the gold standard for instant media production.
                                From lens to final export in 10 minutes.
                            </p>

                            <div className="flex gap-4">
                                {[
                                    { icon: <Instagram size={20} />, href: "https://www.instagram.com/dhasha.media/" },
                                    { icon: <Twitter size={20} />, href: "https://x.com/dhashamedia01" },

                                    { icon: <Mail size={20} />, href: "mailto:dhashamedia07@gmail.com" },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-black hover:bg-black hover:text-[#DAC291] transition-all duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Groups */}
                        <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 lg:col-span-3 gap-12">
                            <div>
                                <h3 className="text-black text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-40">Resources</h3>
                                <ul className="space-y-4 text-sm font-bold text-black/70">
                                    <li><Link href="/privacy" className="hover:text-black transition-colors underline-offset-4 hover:underline">Privacy Policy</Link></li>
                                    <li><Link href="/terms" className="hover:text-black transition-colors underline-offset-4 hover:underline">Terms of Service</Link></li>
                                    <li><Link href="/privacy#refunds" className="hover:text-black transition-colors underline-offset-4 hover:underline">Refund Policy</Link></li>
                                    <li><Link href="/cookies" className="hover:text-black transition-colors underline-offset-4 hover:underline">Cookie Policy</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-black text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-40">Company</h3>
                                <ul className="space-y-4 text-sm font-bold text-black/70">
                                    <li><Link href="/our-story" className="hover:text-black transition-colors underline-offset-4 hover:underline">Our Story</Link></li>
                                    <li><Link href="/join-creator" className="hover:text-black transition-colors underline-offset-4 hover:underline">Join as Creator</Link></li>

                                    <li><Link href="/contact" className="hover:text-black transition-colors underline-offset-4 hover:underline">Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <h3 className="text-black text-[10px] font-black uppercase tracking-[0.3em] mb-8 opacity-40">Get Started</h3>
                                <Link
                                    href="https://bookings.dhashamedia.com/booking/7bee9ed4-6530-4e3d-b89e-98356b0bf47e"
                                    className="group flex items-center gap-2 text-2xl font-black hover:opacity-70 transition-all leading-none"
                                >
                                    Book Session <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>
                                <p className="mt-4 text-[10px] text-black/50 font-bold uppercase tracking-widest">
                                    Nationwide Coverage
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Integrated in Main Footer */}
                    <div className="pt-12 border-t border-black/5 flex flex-col items-center">
                        <p className="text-[10px] text-black/40 tracking-[0.3em] uppercase font-black text-center">
                            &copy; {currentYear} Dhasha Media. All Rights Reserved.
                        </p>
                    </div>
                </div>

                {/* Watermark */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
                    <span className="text-[12vw] leading-none font-black text-black whitespace-nowrap block text-center transform translate-y-1/4 select-none">
                        DHASHA MEDIA
                    </span>
                </div>
            </div>
            <BottomBanner />
        </footer>
    );
}