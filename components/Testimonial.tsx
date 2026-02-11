'use client';

import { Star } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const testimonials = [
    { name: 'Nirupam Paritala', role: 'Actor', content: 'Dhasha Media turned my raw footage into a viral masterpiece in literal minutes. The speed is actually insane.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5jw106cTah-ww2MF1uaAwcY3tWO2cdB9iw&s' },
    { name: 'Anshu Reddy', role: 'Actor', content: 'We used to wait days for edits. Now, our reels are live before we even leave the studio. Game changer.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsqizfqOfOKHbfHflbfoNT6kjufN3GRGjyQ&s' },
    { name: 'RJ Kajal', role: 'Influencer', content: 'The color grading and sound design are at a level I haven’t seen from traditional agencies. Pure quality.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHQWfQIY6TcrxVanYBqiTM9gNbs_Dr2qqsQ&s' },
    { name: 'Lakshmi Manchu', role: 'Producer', content: 'The 10-minute delivery is no joke. I recorded 5 reels and they were all ready before my coffee got cold!', image: 'https://media.newindianexpress.com/TNIE/import/2018/7/20/original/lakshmi_manchu_3.JPG?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true' },
    { name: 'Dr. Putta Ravi Kumar', role: 'PRK Hospital', content: 'Professional, sharp, and tailored for the algorithm. Dhasha knows exactly what keeps people scrolling.', image: 'https://media.licdn.com/dms/image/v2/D5603AQHLulpRcJv8zQ/profile-displayphoto-scale_200_200/B56ZhyIsXlH0AY-/0/1754261540977?e=2147483647&v=beta&t=tDetXQA2XfNnvETrnFk8Obi6afQuEixbZRK6dQ_nX20' },
];

const partners = [
    { name: 'The Derma Co', role: 'Partner', content: 'Standardizing high-quality skincare content through rapid post-production and precise color grading.', logoUrl: 'https://airiamall.com/wp-content/uploads/2025/01/The-Derma-Co-Airia-Mall-Gurugram.png' },
    { name: 'Mamaearth', role: 'Partner', content: 'Empowering organic growth with video assets that resonate with millions of health-conscious viewers.', logoUrl: 'https://vectorseek.com/wp-content/uploads/2023/10/Mamaearth-Logo-Vector.svg-.png' },
    { name: 'NeoStretch', role: 'Partner', content: 'Capturing the energy of our apparel with dynamic editing that captures the modern athlete.', logoUrl: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769862961/WhatsApp-Image-2024-02-28-at-18.36.40_e65fd31f-removebg-preview_fwjmlk.png' },
];

// Reusable clean card component
const Card = ({ title, subtitle, content, image, isLogo = false }: { title: string, subtitle: string, content: string, image: string, isLogo?: boolean }) => (
    <div className="flex-shrink-0 w-[450px] md:w-[500px] mx-4 p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 flex items-center gap-6 group hover:border-[#DAC291]/30 transition-colors duration-300">

        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col justify-between h-full">
            <div>
                {!isLogo && (
                    <div className="flex gap-1 mb-3 text-[#DAC291]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
                    </div>
                )}
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium mb-6">
                    &quot;{content}&quot;
                </p>
            </div>

            <div>
                <h4 className="text-white font-bold text-lg tracking-tight">{title}</h4>
                <p className="text-[#DAC291] text-[10px] uppercase tracking-[0.2em] font-semibold">{subtitle}</p>
            </div>
        </div>

        {/* Right Side: Square Image */}
        <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
            <img
                src={image}
                alt={title}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${isLogo ? 'object-contain p-4 filter brightness-0 invert opacity-90' : 'object-cover'}`}
            />
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className={`${bricolage.className} py-24 bg-black overflow-hidden relative`}>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee 85s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 50s linear infinite;
                }
                .group:hover .animate-marquee,
                .group:hover .animate-marquee-reverse {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <p className="text-[#DAC291] text-xs font-bold tracking-[0.4em] uppercase mb-4">Ecosystem</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    The <span className="text-transparent bg-gradient-to-r from-[#B89E6C] to-[#EAD7B0] bg-clip-text">Dhasha</span> Network
                </h2>
            </div>

            {/* Testimonials Row (Right to Left / Normal) - Hovering row pauses it */}
            <div className="flex mb-8 overflow-hidden group">
                <div className="flex flex-nowrap animate-marquee">
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <Card
                            key={i}
                            title={t.name}
                            subtitle={t.role}
                            content={t.content}
                            image={t.image}
                        />
                    ))}
                </div>
            </div>

            {/* Partners Row (Left to Right / Reverse) - Hovering row pauses it */}
            <div className="flex overflow-hidden group">
                <div className="flex flex-nowrap animate-marquee-reverse">
                    {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
                        <Card
                            key={i}
                            title={p.name}
                            subtitle="Official Partner"
                            content={p.content}
                            image={p.logoUrl}
                            isLogo
                        />
                    ))}
                </div>
            </div>

            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}