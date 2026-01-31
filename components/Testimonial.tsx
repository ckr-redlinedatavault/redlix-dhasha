'use client';

import { Star, Quote } from 'lucide-react';
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
    <div className="flex-shrink-0 w-[350px] md:w-[400px] mx-6 p-6 rounded-3xl bg-[#111] border border-white/5 relative overflow-hidden group hover:border-[#DAC291]/30 transition-all duration-500 shadow-2xl">

        {/* Large Decorative Quote */}
        <Quote className="absolute top-6 right-8 text-[#DAC291]/10 w-16 h-16 transform rotate-180 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div className="flex gap-1 mb-4 text-[#DAC291]">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                </div>

                <h3 className="text-lg md:text-xl font-medium text-white leading-relaxed tracking-tight mb-4">
                    "{testimonial.content}"
                </h3>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B89E6C] to-[#EAD7B0] blur-sm opacity-50"></div>
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/10 relative z-10"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm tracking-wide">{testimonial.name}</h4>
                    <p className="text-[#DAC291]/60 text-[10px] uppercase tracking-widest font-bold">{testimonial.role}</p>
                </div>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section id="testimonials" className={`${bricolage.className} py-12 bg-black overflow-hidden relative`}>

            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center">
                <p className="text-[#DAC291] text-xs font-bold tracking-[0.5em] uppercase mb-4">Wall of Love</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    Trusted by <span className="text-transparent bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text">Industry Leaders</span>
                </h2>
            </div>

            {/* Marquee Row 1 - Moves Left */}
            <div className="flex mb-8 overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="flex flex-nowrap"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>
            </div>

            {/* Side Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

            <div className="mt-16 text-center opacity-20">
                <p className="text-[10px] tracking-[0.6em] text-[#DAC291] uppercase font-bold">
                    Dhasha Media • The New Standard
                </p>
            </div>
        </section>
    );
}