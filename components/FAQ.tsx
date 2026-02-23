'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What is the 10-minute delivery promise?',
            answer: 'Our on-site team is equipped with high-speed mobile editing suites. For most standard reel packages, we aim to have your first draft ready for review before we leave the filming location.'
        },
        {
            question: 'Do I need to provide my own scripts?',
            answer: 'You can, but you don’t have to. Our 10-in-1 service includes professional script writing based on current viral hooks and your specific brand goals.'
        },
        {
            question: 'Can I book a female reel maker?',
            answer: 'Yes, absolutely. We prioritize comfort and safety. You can specifically request a female creator during the booking process at no extra cost.'
        },
        {
            question: 'What areas do you currently serve?',
            answer: 'We are currently expanding rapidly. We serve all major metropolitan hubs. Contact us with your location to check immediate availability.'
        },
        {
            question: 'Is there a discount for bulk bookings?',
            answer: 'Yes, our Creator and Studio plans offer significant savings for monthly retainers compared to our one-off "Starter" package.'
        },
    ];

    return (
        <section id="faq" className={`${bricolage.className} py-16 bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] text-black`}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 opacity-60">
                        <HelpCircle size={16} />
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Support Centre</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-4">
                        Common <span className="font-bold">Queries</span>
                    </h2>
                    <p className="text-sm md:text-base font-medium opacity-60 max-w-md mx-auto">
                        Everything you need to know about the Dhasha Media workflow.
                    </p>
                </div>

                <div className="space-y-0 border-t border-black/10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-black/10 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-7 text-left focus:outline-none group"
                            >
                                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${openIndex === index ? 'text-black' : 'text-black/70 group-hover:text-black'}`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    {openIndex === index ? (
                                        <Minus className="text-black" size={24} strokeWidth={2.5} />
                                    ) : (
                                        <Plus className="text-black/40 group-hover:text-black" size={24} strokeWidth={2.5} />
                                    )}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="pb-8 pr-12 text-black/70 text-sm md:text-base leading-relaxed font-medium">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[10px] tracking-[0.2em] font-bold uppercase opacity-40">
                        Still have questions? Reach out to our team 24/7.
                    </p>
                </div>
            </div>
        </section>
    );
}
