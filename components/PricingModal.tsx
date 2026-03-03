'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Star } from 'lucide-react';
import { PricingTier } from '@/lib/servicesData';

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
    pricing: PricingTier[];
    serviceTitle: string;
}

export default function PricingModal({ isOpen, onClose, pricing, serviceTitle }: PricingModalProps) {
    if (!isOpen) return null;

    const handleSelectPlan = (planName: string) => {
        
        window.location.href = 'https://bookings.dhashamedia.com/booking/7bee9ed4-6530-4e3d-b89e-98356b0bf47e';
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#0A0A0A] border border-white/10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 md:p-10 pointer-events-auto shadow-2xl relative">
                            
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Choose Your <span className="text-[#DAC291]">{serviceTitle}</span> Plan
                                </h2>
                                <p className="text-gray-400 max-w-2xl mx-auto">
                                    Select the package that best fits your needs. All plans include our premium quality standards.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {pricing.map((tier, index) => (
                                    <div
                                        key={index}
                                        className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${tier.isPopular
                                                ? 'bg-[#DAC291]/10 border-[#DAC291] scale-105 shadow-xl shadow-[#DAC291]/10 z-10'
                                                : 'bg-white/5 border-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        {tier.isPopular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#DAC291] text-black text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1">
                                                <Star size={12} fill="currentColor" /> Most Popular
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                            <div className="text-3xl font-bold text-[#DAC291] mb-2">{tier.price}</div>
                                            <p className="text-sm text-gray-400">{tier.description}</p>
                                        </div>

                                        <ul className="space-y-4 mb-8 flex-1">
                                            {tier.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                                    <Check size={16} className="text-[#DAC291] mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() => handleSelectPlan(tier.name)}
                                            className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${tier.isPopular
                                                    ? 'bg-[#DAC291] text-black hover:bg-[#F0D5A3] hover:shadow-lg hover:shadow-[#DAC291]/20'
                                                    : 'bg-white text-black hover:bg-gray-200'
                                                }`}
                                        >
                                            Select Plan
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
