'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';
import { ArrowUpRight } from 'lucide-react';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of Content Creation in 2026",
        excerpt: "How AI and automated workflows are reshaping the creator economy landscape.",
        date: "Jan 15, 2026",
        category: "Industry Trends",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Mastering Short-Form Video production",
        excerpt: "Tips and tricks for creating viral reels that capture attention in the first 3 seconds.",
        date: "Jan 12, 2026",
        category: "Tutorials",
        image: "https://images.unsplash.com/photo-1574717432707-c25bc44655a3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Why Brand Consistency Matters",
        excerpt: "Building a recognizable visual identity across all your social media channels.",
        date: "Jan 08, 2026",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Blog() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden`}>
            <Navbar />

            
            <section className="relative pt-40 pb-20 px-6">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#DAC291] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                        Insights
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight leading-tight">
                        Latest from <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89E6C] via-[#DAC291] to-[#EAD7B0]">The Studio.</span>
                    </h1>
                </div>
            </section>

            
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-[#DAC291]/30 transition-all h-full flex flex-col">
                                
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gray-800">
                                        
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-4 text-xs text-gray-500 font-mono">{post.date}</div>
                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-[#DAC291] transition-colors">{post.title}</h3>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#DAC291] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Read Article <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
