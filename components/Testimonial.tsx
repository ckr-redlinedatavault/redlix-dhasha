'use client';

import { Star } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';
import { motion } from 'framer-motion';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const testimonials = [
    { name: 'Arjun Mehta', role: 'Lifestyle Influencer', content: 'Dhasha Media turned my raw footage into a viral masterpiece in literal minutes. The speed is actually insane.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Sarah D.', role: 'E-com Founder', content: 'We used to wait days for edits. Now, our reels are live before we even leave the studio. Game changer for our ROI.', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Vikram Singh', role: 'Tech Reviewer', content: 'The color grading and sound design are at a level I haven’t seen from traditional agencies. Pure quality.', image: 'https://randomuser.me/api/portraits/men/86.jpg' },
    { name: 'Sneha Kapoor', role: 'Fashion Blogger', content: 'The 10-minute delivery is no joke. I recorded 5 reels and they were all ready before my coffee got cold!', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
    { name: 'Rohit K.', role: 'Startup CEO', content: 'Professional, sharp, and tailored for the algorithm. Dhasha knows exactly what keeps people scrolling.', image: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Elena G.', role: 'Fitness Coach', content: 'Finally, a media partner that understands the pace of social media. The quality/speed ratio is unmatched.', image: 'https://randomuser.me/api/portraits/women/28.jpg' },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[350px] mx-4 p-8 rounded-[2rem] bg-zinc-900/60 border border-white/5 backdrop-blur-xl hover:bg-zinc-800/80 transition-all duration-500 flex flex-col justify-between h-[240px] shadow-2xl shadow-black/50">
        <div>
            <div className="flex gap-1 mb-5 text-[#DAC291]">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
            </div>
            <p className="text-gray-200 text-sm leading-relaxed font-light line-clamp-4 tracking-wide">
                "{testimonial.content}"
            </p>
        </div>

        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
            <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover border border-white/10 ring-2 ring-black/50"
            />
            <div className="overflow-hidden">
                <h4 className="font-bold text-white text-sm tracking-tight truncate">{testimonial.name}</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-medium truncate">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className={`${bricolage.className} py-20 bg-black overflow-hidden relative`}>

            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-center">
                <p className="text-[#DAC291] text-[10px] font-bold tracking-[0.5em] uppercase mb-3">Wall of Love</p>
                <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-tight">
                    Trusted by <span className="font-bold bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent">Industry Leaders</span>
                </h2>
            </div>

            {/* Marquee Row 1 - Moves Left */}
            <div className="flex mb-6 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex flex-nowrap"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>
            </div>

            {/* Marquee Row 2 - Moves Right */}
            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="flex flex-nowrap"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>
            </div>

            {/* Side Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

            <div className="mt-12 text-center opacity-10">
                <p className="text-[9px] tracking-[0.6em] text-[#DAC291] uppercase font-light">
                    Dhasha Media • The New Standard
                </p>
            </div>
        </section>
    );
}