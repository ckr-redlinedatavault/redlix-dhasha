'use client';

import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function BottomBanner() {
    const currentYear = new Date().getFullYear();

    return (
        <div className={`${bricolage.className} bg-black py-10 border-t border-white/10`}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Main Content Area - Left Aligned */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                    {/* Left: Branding & Copyright */}
                    <div className="space-y-2">
                        <p className="text-xs font-normal tracking-wider text-[#DAC291]">
                            © {currentYear} Dhasha Media. All rights reserved.
                        </p>
                        <p className="text-[11px] font-normal text-white tracking-tight leading-relaxed">
                            The gold standard in media infrastructure and professional production.
                        </p>
                    </div>

                    {/* Right: Operational Details & Credits */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="flex flex-wrap gap-6">
                            <span className="text-[10px] font-normal uppercase tracking-[0.2em] text-white">
                                Nationwide Coverage
                            </span>
                            <span className="text-[10px] font-normal uppercase tracking-[0.2em] text-white">
                                10-Minute Delivery
                            </span>
                        </div>

                        <p className="text-[10px] font-normal text-white tracking-widest uppercase">
                            Designed & Developed by{' '}
                            <a
                                href="https://redlix.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#DAC291] hover:text-white transition-all underline underline-offset-8 decoration-[#DAC291]/50"
                            >
                                Redlix
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}