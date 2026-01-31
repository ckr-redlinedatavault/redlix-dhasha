'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight, Smartphone, Mail } from 'lucide-react';
import Link from 'next/link';
// Import Bricolage Grotesque font
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAppModal, setShowAppModal] = useState(false);

  const navLinks = [
    { name: 'Our Story', href: '/our-story' },
    { name: 'Our Ecosystem', href: '/our-ecosystem' },
    { name: 'Creators', href: '/creators' },
    { name: 'How it works', href: '/how-it-works' },
  ];

  return (
    <nav className={`${bricolage.className} fixed w-full z-50 border-b border-black/5 shadow-md bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769863861/WhatsApp_Image_2026-01-31_at_18.18.05-removebg-preview_mqautr.png"
                alt="Brand Logo"
                className="h-16 w-auto brightness-[0.2] contrast-125"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6 mr-4 border-r border-black/10 pr-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-900/80 hover:text-black transition-colors duration-200 font-medium text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <Link href="/contact" className="flex items-center gap-2 bg-transparent border border-gray-900/20 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm hover:bg-black/5 transition-all">
                <Mail size={16} />
                Contact Us
              </Link>
              <button
                onClick={() => setShowAppModal(true)}
                className="flex items-center gap-2 bg-gray-900 text-[#DAC291] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-black transition-all shadow-lg shadow-black/10">
                <Smartphone size={16} />
                Get the App
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="lg:hidden bg-[#DAC291] border-t border-black/10 absolute w-full shadow-2xl">
            <div className="px-4 pt-4 pb-8 space-y-2 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-lg font-bold text-gray-900 hover:bg-black/5 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 space-y-3 px-4">
                <Link href="/contact" className="w-full flex items-center justify-center gap-2 border border-gray-900 text-gray-900 px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-sm">
                  <Mail size={18} /> Contact Us
                </Link>
                <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-[#DAC291] px-5 py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-xl">
                  Get the App <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )
      }

      {/* App Coming Soon Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowAppModal(false)}>
          <div className="bg-[#DAC291] w-full max-w-md rounded-[2rem] p-8 text-center relative border border-white/20 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button onClick={() => setShowAppModal(false)} className="absolute top-4 right-4 p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors">
              <X size={20} className="text-black" />
            </button>

            <div className="flex justify-center mb-6 text-black">
              <Smartphone size={48} />
            </div>

            <h3 className="text-3xl font-black text-black mb-2 tracking-tight uppercase">Coming Soon</h3>
            <p className="text-black/70 font-medium mb-8 leading-relaxed">
              The Dhasha Creator App is currently in exclusive beta. Join the waitlist to get early access.
            </p>

            <div className="flex flex-col gap-3">
              {/* App Store Badge - Official Style */}
              <button className="bg-black text-white w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="h-6 w-auto" />
                <div className="text-left leading-none">
                  <div className="text-[9px] uppercase font-bold text-white/60">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </button>

              {/* Play Store Badge - Official Style */}
              <button className="bg-black text-white w-full py-3 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto scale-110" />
                {/* Note: The Google Play Badge SVG usually contains text, so we adjust sizing */}
              </button>
            </div>

            <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-black/40">
              Launching Q3 2026
            </p>
          </div>
        </div>
      )}
    </nav >
  );
}