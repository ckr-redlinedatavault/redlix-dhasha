'use client';

import { useState, useEffect, useRef } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

// Using standard placeholder videos or creative commons clips as placeholders
const initialCards = [
    {
        id: 'v1',
        name: 'Sports',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769868656/WhatsApp_Video_2026-01-31_at_19.40.25_ocfnqz.mp4',
    },
    {
        id: 'v2',
        name: 'Product Launch',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869357/WhatsApp_Video_2026-01-31_at_19.49.06_a5a7l1.mp4',
    },
    {
        id: 'v3',
        name: 'Events',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869228/WhatsApp_Video_2026-01-31_at_19.48.56_bqf5rk.mp4', // Center card initially
    },
    {
        id: 'v4',
        name: 'Dance',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869236/WhatsApp_Video_2026-01-31_at_19.48.52_cbcvj4.mp4',
    },
    {
        id: 'v5',
        name: 'Product Launch',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869344/WhatsApp_Video_2026-01-31_at_19.49.03_wzzt0w.mp4',
    },
];

export default function HeroWithCards() {
    const [cards, setCards] = useState(initialCards);
    const middleIndex = Math.floor(cards.length / 2);
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});

    // Ref to track if the shuffle was triggered by an ended event to prevent loops if needed
    // In this case, we just want to rotate when the CENTER video ends.

    useEffect(() => {
        // Ensure videos are playing/paused correctly based on position
        const centerCard = cards[middleIndex];
        const videoEl = videoRefs.current[centerCard.id];

        let fallbackTimer: NodeJS.Timeout;

        if (videoEl) {
            // Play center video
            videoEl.muted = true;
            videoEl.currentTime = 0;
            videoEl.play().catch(e => {
                console.log("Autoplay prevented:", e);
                // Fallback: If autoplay fails (e.g. low power mode), rotate after 5s so it doesn't get stuck.
                fallbackTimer = setTimeout(rotateCards, 5000);
            });
        }

        // Pause others
        cards.forEach((card, index) => {
            if (index !== middleIndex) {
                const el = videoRefs.current[card.id];
                if (el) {
                    el.pause();
                    el.currentTime = 0;
                }
            }
        });

        return () => {
            if (fallbackTimer) clearTimeout(fallbackTimer);
        };
    }, [cards, middleIndex]);

    const handleVideoEnded = (index: number) => {
        // Only trigger shuffle if the CENTER video ends
        if (index === middleIndex) {
            rotateCards();
        }
    };

    const rotateCards = () => {
        setCards(prev => {
            const newCards = [...prev];
            const first = newCards.shift();
            if (first) newCards.push(first);
            return newCards;
        });
    };

    return (
        <section className={`${bricolage.className} relative z-0 min-h-screen bg-black overflow-hidden flex flex-col items-center pt-40 pb-12`}>

            {/* Background Ambient Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#DAC291]/5 blur-[160px] rounded-full" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* LINE 1: Top Label */}
                <div className="mb-6">
                    <span className="text-[#DAC291] text-[7px] md:text-[8px] font-light tracking-[0.8em] uppercase border-b border-[#DAC291]/20 pb-4">
                        World&apos;s First 10 in 1 Creator and Media Platform
                    </span>
                </div>

                {/* LINE 2: Main Title (Lightweight) */}
                <h1 className="text-white text-lg md:text-4xl lg:text-5xl font-extralight tracking-tight leading-tight mb-4">
                    We Shoot • Edit • Deliver Reels in
                </h1>

                {/* LINE 3: The Gold Highlight (Large Scale) */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent leading-none">
                        10 Minutes<span className="text-[#EAD7B0] font-extralight text-[0.4em] align-top">*</span>
                    </h2>
                </div>

                {/* CARDS SECTION */}
                <div className="flex flex-row items-center justify-center gap-2 md:gap-8 lg:gap-12 mt-12 md:mt-24 w-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
                    {cards.map((card, index) => {
                        const isCenter = index === middleIndex;
                        const distFromCenter = Math.abs(index - middleIndex);

                        // Calculate scale/opacity based on distance/index
                        // 0 (center) -> large
                        // 1 -> medium
                        // 2 -> small

                        let widthClass = 'w-20 md:w-32 lg:w-40'; // Default small
                        let opacityClass = 'opacity-30';
                        let zIndex = 10;
                        let scaleClass = 'scale-90';

                        if (isCenter) {
                            widthClass = 'w-56 md:w-80 lg:w-96';
                            opacityClass = 'opacity-100';
                            zIndex = 30;
                            scaleClass = 'scale-110';
                        } else if (distFromCenter === 1) {
                            widthClass = 'w-32 md:w-48 lg:w-56';
                            opacityClass = 'opacity-60';
                            zIndex = 20;
                            scaleClass = 'scale-100';
                        }

                        return (
                            <div
                                key={card.id}
                                className={`group relative transition-all duration-700 ease-in-out flex flex-col items-center mb-8
                                    ${widthClass}
                                    ${opacityClass}
                                    ${scaleClass}
                                `}
                                style={{ zIndex }}
                            >
                                {/* Video Container */}
                                <div className={`relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border-2 border-[#DAC291] shadow-2xl transition-all duration-500 
                                    ${isCenter ? 'shadow-[#DAC291]/40 scale-[1.02]' : 'shadow-black/50'}
                                `}>
                                    <video
                                        ref={el => {
                                            if (el) videoRefs.current[card.id] = el;
                                        }}
                                        src={card.video}
                                        className="w-full h-full object-cover"
                                        muted
                                        playsInline
                                        autoPlay={isCenter}
                                        preload="auto"
                                        onEnded={() => handleVideoEnded(index)}
                                    // Loop only if not center? The requirement says shuffle after video completes.
                                    // So center video should NOT loop, it should end to trigger shuffle.
                                    // Others can probably just be paused as per logic.
                                    />

                                    {/* Dark Vignette Overlay - Only heavily visible on non-active cards */}
                                    <div className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none 
                                        ${isCenter ? 'opacity-0' : 'opacity-40'}
                                    `}></div>
                                </div>

                                {/* Label */}
                                <h3 className={`mt-6 text-sm md:text-xl font-light tracking-[0.3em] uppercase transition-all duration-500
                                    ${isCenter ? 'text-[#DAC291]' : 'text-white/40'}
                                `}>
                                    {card.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}