"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E61E32] selection:bg-[#E61E32] selection:text-white font-sans flex flex-col overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="w-full bg-transparent font-sans relative z-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* LEFT SIDE: Logo & Tagline */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <a href="/" className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772213103/Screenshot_2026-02-27_at_22.54.43-removebg-preview_jeh6kc.png"
                  alt="Logo"
                  className="h-12 w-auto transition-transform hover:scale-105 duration-300"
                />
              </a>
              <div className="hidden md:block h-6 w-[1px] bg-white/40" />
              <span className="hidden md:block text-white/90 text-[14px] font-bold tracking-wide">
                IT Services Agency
              </span>
            </div>

            {/* RIGHT SIDE: 504 Status & Support Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <span className="font-mono bg-white/20 px-2 py-0.5 text-sm font-bold tracking-wider rounded-sm">
                  504
                </span>
                <span className="hidden sm:block text-[14px] font-bold tracking-wide">
                  Under Construction
                </span>
              </div>
              <a
                href="https://csapp-systems.redlix.co.in/contact"
                className="flex items-center justify-center px-5 sm:px-6 py-2 bg-white text-[#E61E32] hover:bg-slate-100 transition-all duration-300 text-[13px] sm:text-[14px] font-bold shadow-sm rounded-none"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex items-center py-6 sm:py-8 lg:py-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center min-h-[600px]">

            {/* LEFT SIDE: Content inside a Flat Solid White Square */}
            <div className="bg-white flex flex-col items-start justify-center p-8 sm:p-12 lg:p-20 space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="space-y-1 sm:space-y-2">
                {/* Dhasha Media Availability Notice */}
                <div className="group inline-flex items-center gap-2 bg-[#E61E32]/5 border border-[#E61E32]/10 px-3 py-1 rounded-none transition-all duration-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E61E32] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E61E32]"></span>
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium text-[#E61E32] tracking-tight">
                    <span className="font-bold">Dhasha Media</span> website will be available by <span className="font-bold">2:00 AM</span> on <span className="font-bold">04-March-2026</span>
                  </span>
                </div>

                {/* Reduced 504 Status Code */}
                <div className="text-[6rem] sm:text-[8rem] lg:text-[9rem] font-bold text-[#E61E32] leading-none tracking-tighter -ml-1 sm:-ml-2 select-none">
                  504
                </div>
              </div>

              {/* Minimal Text Content */}
              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 border-l-4 border-[#E61E32] pl-4">
                  Under Construction
                </h1>
                <p className="max-w-md text-base text-gray-500 font-normal leading-relaxed">
                  We're currently updating our website to serve you better. We'll be right back.
                </p>
              </div>

              {/* Support Action */}
              <div className="pt-2">
                <a
                  href="mailto:support@redlix.co.in"
                  className="inline-block px-8 py-3 rounded-none font-semibold text-sm bg-[#E61E32] text-white hover:bg-[#CC192A] shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Support
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Illustration */}
            <div className="flex justify-center lg:justify-start items-center animate-in fade-in zoom-in-95 duration-1000 delay-200 lg:relative">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Under%20construction-pana.svg"
                alt="Under Construction Illustration"
                className="w-full max-w-[450px] lg:max-w-none h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] brightness-110 contrast-110 select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-transparent py-8 pb-14 md:pb-8 font-sans mt-auto">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
              <div className="flex items-center gap-3">
                <span className="text-white/90 text-[9px] tracking-widest font-bold">
                  Technical Partner
                </span>
                <a
                  href="https://redlix.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-all duration-300 ease-in-out"
                >
                  <img
                    src="https://res.cloudinary.com/dsqqrpzfl/image/upload/v1772213103/Screenshot_2026-02-27_at_22.54.43-removebg-preview_jeh6kc.png"
                    alt="Technical Partner Logo"
                    className="h-8 w-auto transition-transform hover:scale-105 duration-300"
                  />
                </a>
              </div>
              <div className="hidden sm:block h-5 w-[1px] bg-white/40" />
              <div className="flex items-center gap-2.5 text-white/70">
                <span className="text-[12px] font-bold tracking-wide text-white/90">
                  Designed and Maintained by Redlix Systems
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <a
                href="https://csapp-systems.redlix.co.in/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-white text-slate-950 hover:bg-slate-100 transition-all duration-300 text-[13px] font-bold rounded-none shadow-sm"
              >
                Help & Support
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/90 text-[10px] sm:text-[11px] font-bold tracking-wide">
            <p>© 2026 Dhasha Media. All Rights Reserved.</p>
            <p>© 2026 Redlix Systems. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
