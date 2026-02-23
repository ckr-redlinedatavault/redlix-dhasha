'use client';

import { useState, useEffect, useRef } from 'react';
import { Bricolage_Grotesque } from 'next/font/google';
import { FlipWords } from './FlipWords';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const initialCards = [
    {
        id: 'v1',
        name: 'Sports',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769868656/WhatsApp_Video_2026-01-31_at_19.40.25_ocfnqz.mp4',
    },
    {
        id: 'v2',
        name: 'Product',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869357/WhatsApp_Video_2026-01-31_at_19.49.06_a5a7l1.mp4',
    },
    {
        id: 'v3',
        name: 'Events',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869228/WhatsApp_Video_2026-01-31_at_19.48.56_bqf5rk.mp4',
    },
    {
        id: 'v4',
        name: 'Dance',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769869236/WhatsApp_Video_2026-01-31_at_19.48.52_cbcvj4.mp4',
    },
    {
        id: 'v5',
        name: 'Corporate',
        video: 'https://res.cloudinary.com/dsqqrpzfl/video/upload/v1769963995/WhatsApp_Video_2026-02-01_at_22.08.32_kcvit1.mp4',
    },
];

export default function HeroWithCards() {
    const [cards, setCards] = useState(initialCards);
    const middleIndex = Math.floor(cards.length / 2);
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({});
    
    // Swipe/Drag State
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);
    const minSwipeDistance = 50;

    const rotateNext = () => {
        setCards(prev => {
            const newCards = [...prev];
            const first = newCards.shift();
            if (first) newCards.push(first);
            return newCards;
        });
    };

    const rotatePrev = () => {
        setCards(prev => {
            const newCards = [...prev];
            const last = newCards.pop();
            if (last) newCards.unshift(last);
            return newCards;
        });
    };

    useEffect(() => {
        const centerCard = cards[middleIndex];
        const videoEl = videoRefs.current[centerCard.id];
        let fallbackTimer: NodeJS.Timeout;

        if (videoEl) {
            videoEl.muted = true;
            videoEl.currentTime = 0;
            videoEl.play().catch(e => {
                console.log("Autoplay prevented:", e);
                fallbackTimer = setTimeout(rotateNext, 5000);
            });
        }

        cards.forEach((card, index) => {
            if (index !== middleIndex) {
                const el = videoRefs.current[card.id];
                if (el) {
                    el.pause();
                    el.currentTime = 0;
                }
            }
        });

        return () => { if (fallbackTimer) clearTimeout(fallbackTimer); };
    }, [cards, middleIndex]);

    const handleVideoEnded = (index: number) => {
        if (index === middleIndex) rotateNext();
    };

    
    const onStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
    };

    const onMove = (clientX: number) => {
        if (!isDragging) return;
        setDragDistance(clientX - startX);
    };

    const onEnd = () => {
        if (!isDragging) return;
        
        if (dragDistance < -minSwipeDistance) {
            rotateNext();
        } else if (dragDistance > minSwipeDistance) {
            rotatePrev();
        }

        setIsDragging(false);
        setDragDistance(0);
    };

    return (
        <section className={`${bricolage.className} relative z-0 min-h-screen bg-black overflow-hidden flex flex-col items-center pt-28 md:pt-40 pb-12 select-none`}>
            
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#DAC291]/5 blur-[160px] rounded-full" />
            </div>

            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="mb-6">
                    <span className="text-[#DAC291] text-[7px] md:text-[8px] font-bold tracking-[0.8em] uppercase border-b border-[#DAC291]/20 pb-4">
                        Welcome to Most loved
                    </span>
                </div>

                <h2 className="text-white text-lg md:text-4xl lg:text-5xl font-extralight tracking-tight leading-tight mb-4">
                    World&apos;s First 10 in 1 Creator and Media Platform
                </h2>

                <div className="mb-8 md:mb-16">
                    <div className="text-4xl md:text-7xl lg:text-[4rem] font-bold tracking-tighter leading-none inline-block">
                        <span className="bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0] bg-clip-text text-transparent mr-4">Book</span>
                        <FlipWords
                            words={["Influencer", "Photographer", "Videographer", "Brand Partner"]}
                            className="text-white font-bold"
                            duration={3000}
                        />
                    </div>
                </div>

                <div
                    
                    onTouchStart={(e) => onStart(e.touches[0].clientX)}
                    onTouchMove={(e) => onMove(e.touches[0].clientX)}
                    onTouchEnd={onEnd}
                  
                    onMouseDown={(e) => onStart(e.clientX)}
                    onMouseMove={(e) => onMove(e.clientX)}
                    onMouseUp={onEnd}
                    onMouseLeave={onEnd}
                    className={`flex flex-row items-center justify-center gap-2 md:gap-8 lg:gap-12 mt-8 md:mt-24 w-full min-h-[350px] md:min-h-[600px] lg:min-h-[700px] 
                        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} transition-transform duration-150`}
                >
                    {cards.map((card, index) => {
                        const isCenter = index === middleIndex;
                        const distFromCenter = Math.abs(index - middleIndex);

                        let widthClass = 'w-14 md:w-32 lg:w-40'; 
                        let opacityClass = 'opacity-30';
                        let zIndex = 10;
                        let scaleClass = 'scale-90';

                        if (isCenter) {
                            widthClass = 'w-48 md:w-80 lg:w-96';
                            opacityClass = 'opacity-100';
                            zIndex = 30;
                            scaleClass = 'scale-110';
                        } else if (distFromCenter === 1) {
                            widthClass = 'w-24 md:w-48 lg:w-56';
                            opacityClass = 'opacity-60';
                            zIndex = 20;
                            scaleClass = 'scale-100';
                        }

                        return (
                            <div
                                key={card.id}
                                className={`group relative transition-all duration-700 ease-in-out flex flex-col items-center mb-8 pointer-events-none
                                    ${widthClass}
                                    ${opacityClass}
                                    ${scaleClass}
                                `}
                                style={{ zIndex }}
                            >
                                <div className={`relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border-2 border-[#DAC291] shadow-2xl transition-all duration-500 
                                    ${isCenter ? 'shadow-[#DAC291]/40 scale-[1.02]' : 'shadow-black/50'}
                                `}>
                                    <video
                                        ref={el => { if (el) videoRefs.current[card.id] = el; }}
                                        src={card.video}
                                        className="w-full h-full object-cover pointer-events-none"
                                        muted
                                        playsInline
                                        preload="auto"
                                        onEnded={() => handleVideoEnded(index)}
                                    />
                                    <div className={`absolute inset-0 bg-black transition-opacity duration-500 pointer-events-none 
                                        ${isCenter ? 'opacity-0' : 'opacity-40'}
                                    `}></div>
                                </div>

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
