import { Video, PlayCircle, Mic2, Newspaper, Users, Briefcase, Megaphone, Heart, Calendar, Sparkles } from 'lucide-react';

export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export interface ServiceData {
    slug: string;
    title: string;
    icon: any; // Using 'any' for Lucide icon component reference ease in data file, properly typed in usage
    shortDesc: string;
    fullDesc: string;
    benefits: string[];
    features: string[];
    heroImage: string;
    pricing: PricingTier[];
}

export const servicesData: ServiceData[] = [
    {
        slug: 'reels-shoot',
        title: 'Reels Shoot',
        icon: Video,
        shortDesc: 'Professional vertical cinematography tailored for viral growth.',
        fullDesc: 'Dominate social media with high-quality, professionally produced reels. We understand the algorithm and create content designed to stop the scroll.',
        benefits: [
            'Increased Engagement & Reach',
            'Professional Grade Editing',
            'Viral-Ready Concepts',
            'Consistent Brand aesthetics'
        ],
        features: [
            '4K Vertical Shooting',
            'Advanced Color Grading',
            'Trend Research & Scripting',
            'Quick Turnaround Time'
        ],
        heroImage: 'https://res.cloudinary.com/dsqqrpzfl/image/upload/v1769863861/WhatsApp_Image_2026-01-31_at_18.18.05-removebg-preview_mqautr.png',
        pricing: [
            {
                name: 'Starter',
                price: '₹15,000',
                description: 'Perfect for getting started with consistent content.',
                features: ['4 High-Quality Reels', 'Basic Editing & Captions', '1 Shooting Session', 'Standard Delivery']
            },
            {
                name: 'Pro',
                price: '₹30,000',
                description: 'Ideal for growing brands needing serious impact.',
                features: ['8 High-Quality Reels', 'Advanced Editing & FX', '2 Shooting Sessions', 'Priority Support'],
                isPopular: true
            },
            {
                name: 'Elite',
                price: '₹50,000',
                description: 'Maximum viral potential and brand dominance.',
                features: ['12 High-Quality Reels', 'Cinematic Grading', 'Monthly Strategy Call', 'Dedicated Editor']
            }
        ]
    },
    {
        slug: 'youtube-production',
        title: 'YouTube Production',
        icon: PlayCircle,
        shortDesc: 'End-to-end production for long-form storytelling and shorts.',
        fullDesc: 'From concept to upload, we handle every aspect of your YouTube channel. Creating engaging long-form content that builds loyal communities.',
        benefits: [
            'Channel Growth Strategy',
            'High Retention Editing',
            'SEO Optimized Titles & Thumbnails',
            'Consistent Upload Schedule'
        ],
        features: [
            'Multi-Cam Setup',
            'Professional Audio Recording',
            'Motion Graphics & Animation',
            'Comprehensive Analytics Review'
        ],
        heroImage: 'https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1770&auto=format&fit=crop',
        pricing: [
            {
                name: 'Essential',
                price: '₹25,000',
                description: 'Core production for consistent uploads.',
                features: ['2 Long-Form Videos', 'Thumbnail Design', 'Basic SEO', 'Audio Mixing']
            },
            {
                name: 'Growth',
                price: '₹45,000',
                description: 'Accelerated growth with higher production value.',
                features: ['4 Long-Form Videos', 'Advanced Motion Graphics', 'Channel Management', 'Script Assistance'],
                isPopular: true
            },
            {
                name: 'Authority',
                price: '₹80,000',
                description: 'Dominate your niche with broadcast quality.',
                features: ['8 Long-Form Videos', 'Dedicated Producer', 'A/B Testing Thumbnails', 'Monthly Analytics Report']
            }
        ]
    },
    {
        slug: 'podcast-production',
        title: 'Podcast Production',
        icon: Mic2,
        shortDesc: 'High-fidelity audio and video setups for podcasters.',
        fullDesc: 'Launch a podcast that sounds and looks professional from day one. We provide studio-quality recording and editing services.',
        benefits: [
            'Broadcast Quality Sound',
            'Video Podcast Capabilities',
            'Repurposable Social Clips',
            'Hassle-Free Post-Production'
        ],
        features: [
            'Soundproofing & Acoustics',
            'High-End Microphones',
            'Multi-Angle Video Recording',
            'Intro/Outro Creation'
        ],
        heroImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1770&auto=format&fit=crop',
        pricing: [
            {
                name: 'Audio Only',
                price: '₹10,000',
                description: 'Crystal clear audio production.',
                features: ['4 Episodes (Audio)', 'Noise Reduction', 'Intro/Outro Mixing', 'ID3 Tagging']
            },
            {
                name: 'Video Podcast',
                price: '₹25,000',
                description: 'Engage viewers on YouTube and Spotify.',
                features: ['4 Episodes (Video + Audio)', 'Multi-Cam Editing', 'Color Correction', 'Lower Thirds'],
                isPopular: true
            },
            {
                name: 'Network',
                price: '₹45,000',
                description: 'Full-scale show production and promotion.',
                features: ['8 Episodes', 'Social Media Shorts (10)', 'Guest Coordination', 'Distribution Setup']
            }
        ]
    },
    {
        slug: 'news-media-content',
        title: 'News & Media Content',
        icon: Newspaper,
        shortDesc: 'Broadcast-quality digital news assets and media reporting.',
        fullDesc: 'Deliver news with authority and speed. We produce professional news segments and digital reporting assets.',
        benefits: [
            'Credible & Authoritative Look',
            'Rapid Production Cycles',
            'Journalistic Standards',
            'Audience Trust Building'
        ],
        features: [
            'Green Screen Studios',
            'Teleprompter Services',
            'On-Location Reporting',
            'Motion Graphic Overlays'
        ],
        heroImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1770&auto=format&fit=crop',
        pricing: [
            {
                name: 'Reporter',
                price: '₹20,000',
                description: 'Standard news segment production.',
                features: ['5 News Segments', 'Basic Lower Thirds', 'Studio Access', 'Standard Editing']
            },
            {
                name: 'Anchor',
                price: '₹40,000',
                description: 'Professional broadcast quality daily news.',
                features: ['10 News Segments', 'Custom Graphics Package', 'Teleprompter Support', 'Priority Turnaround'],
                isPopular: true
            },
            {
                name: 'Network',
                price: '₹75,000',
                description: 'Complete channel management solution.',
                features: ['Daily Coverage (20 Segments)', 'Editorial Support', 'Live Streaming Setup', 'Dedicated Team']
            }
        ]
    },
    {
        slug: 'content-creators-hub',
        title: 'Content Creators Hub',
        icon: Users,
        shortDesc: 'A collaborative space providing creators with elite equipment.',
        fullDesc: 'Join a thriving community of creators. Access our state-of-the-art studios, equipment, and network to elevate your content.',
        benefits: [
            'Access to Premium Gear',
            'Networking Opportunities',
            'Collaborative Environment',
            'Skill Sharing Workshops'
        ],
        features: [
            'Fully Equipped Studios',
            'Co-Working Spaces',
            'Editing Suites',
            'Equipment Rental'
        ],
        heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1770&auto=format&fit=crop',
        pricing: [
            {
                name: 'Day Pass',
                price: '₹1,500',
                description: 'Access for a single day of creation.',
                features: ['Studio Access (8 Hours)', 'Basic Lighting Kit', 'High-Speed WiFi', 'Lounge Access']
            },
            {
                name: 'Creator Membership',
                price: '₹10,000',
                description: 'Monthly access for serious creators.',
                features: ['Unlimited Studio Access', 'Equipment Discount (20%)', 'Priority Booking', 'Community Events'],
                isPopular: true
            },
            {
                name: 'Agency Access',
                price: '₹25,000',
                description: 'For teams and small agencies.',
                features: ['Dedicated Desk', 'Meeting Room Access', 'Full Equipment Access', 'Guest Passes (5)']
            }
        ]
    },
    {
        slug: 'business-collaborations',
        title: 'Business Collaborations',
        icon: Briefcase,
        shortDesc: 'Corporate storytelling and professional B2B content.',
        fullDesc: 'Bridge the gap between your brand and other businesses. We create professional content that facilitates strong B2B partnerships.',
        benefits: [
            'Professional Brand Image',
            'Lead Generation Support',
            'Clear Value Communication',
            'Industry Authority'
        ],
        features: [
            'Corporate Interviews',
            'Case Study Videos',
            'LinkedIn Content Strategy',
            'Event Coverage'
        ],
        heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
        pricing: [
            {
                name: 'Consult',
                price: '₹30,000',
                description: 'Strategic content for B2B outreach.',
                features: ['3 Executive Interviews', '1 Case Study Video', 'LinkedIn Profile Optimization', 'Scripting']
            },
            {
                name: 'Enterprise',
                price: '₹60,000',
                description: 'Comprehensive corporate branding.',
                features: ['Brand Story Film', '5 Employee Spotlights', 'Quarterly Strategy', 'Ad Campaign Assets'],
                isPopular: true
            },
            {
                name: 'Partner',
                price: 'Custom',
                description: 'Tailored solutions for large organizations.',
                features: ['Full-Service Production', 'dedicated Account Manager', 'Multi-Location Shoots', 'Global Distribution']
            }
        ]
    },
    {
        slug: 'brand-promotions',
        title: 'Brand Promotions',
        icon: Megaphone,
        shortDesc: 'Conversion-driven ad creatives and digital campaigns.',
        fullDesc: 'Turn viewers into customers with high-impact promotional content. We blend creativity with marketing psychology.',
        benefits: [
            'Higher Conversion Rates',
            'Stronger Brand Recall',
            'Targeted Messaging',
            'ROI Focused Creativity'
        ],
        features: [
            'TVC & Commercial Ads',
            'Social Media Ads',
            'Influencer Marketing Campaigns',
            'Product Photography'
        ],
        heroImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1776&auto=format&fit=crop',
        pricing: [
            {
                name: 'Campaign Starter',
                price: '₹25,000',
                description: 'Launch your product with impact.',
                features: ['2 Ad Creatives (Video)', '5 Product Photos', 'Ad Copywriting', 'Format Adaptation']
            },
            {
                name: 'Brand Blitz',
                price: '₹50,000',
                description: 'Intensive promotional push.',
                features: ['5 Ad Creatives', 'Influencer Seeding (3 Micro)', 'Landing Page Video', 'A/B Testing Variants'],
                isPopular: true
            },
            {
                name: 'Market Leader',
                price: '₹1,00,000',
                description: 'Dominant market presence.',
                features: ['Commercial Production', 'Celebrity/Macro Influencer', 'Full Funnel Assets', 'Campaign Management']
            }
        ]
    },
    {
        slug: 'wedding-shoots',
        title: 'Wedding Shoots',
        icon: Heart,
        shortDesc: 'Luxury cinematic wedding coverage with editorial eye.',
        fullDesc: 'Capture your special day with cinematic grandeur. We turn wedding memories into timeless films.',
        benefits: [
            'Cinematic Storytelling',
            'Emotional & Candid Moments',
            'Timeless Editing Style',
            'Comprehensive Coverage'
        ],
        features: [
            'Pre-Wedding Shoots',
            'Drone Cinematography',
            'Same-Day Edits',
            'Luxury Photo Albums'
        ],
        heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1770&auto=format&fit=crop',
        pricing: [
            {
                name: 'Silver',
                price: '₹50,000',
                description: 'Beautiful coverage of key moments.',
                features: ['1 Day Coverage', 'Highlight Reel (3-5 mins)', 'Digital Photos (300+)', 'Tradition Focus']
            },
            {
                name: 'Gold',
                price: '₹1,20,000',
                description: 'Complete cinematic experience.',
                features: ['2 Days Coverage', 'Cinematic Film (10-15 mins)', 'Teaser Trailer', 'Drone Shots', 'Hardcover Album'],
                isPopular: true
            },
            {
                name: 'Platinum',
                price: '₹2,50,000',
                description: 'The ultimate luxury wedding package.',
                features: ['3+ Days Coverage', 'Pre-Wedding Shoot', 'Same Day Edit', 'Documentary Feature', 'Premium Album Box']
            }
        ]
    },
    {
        slug: 'event-management',
        title: 'Event Management',
        icon: Calendar,
        shortDesc: 'Comprehensive visual coverage for events and launches.',
        fullDesc: 'Ensure your event is captured perfectly. From corporate conferences to product launches, we handle all visual documentation.',
        benefits: [
            'Full Event Documentation',
            'Live Streaming Capabilities',
            'Social Media Buzz',
            'Post-Event Highlights'
        ],
        features: [
            'Multi-Camera Setup',
            'Live Switching',
            'Instant Reels Delivery',
            'Photography & Videography'
        ],
        heroImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1712&auto=format&fit=crop',
        pricing: [
            {
                name: 'Coverage',
                price: '₹20,000',
                description: 'Standard event documentation.',
                features: ['1 Photographer', '1 Videographer', 'Highlight Video', 'Cloud Gallery']
            },
            {
                name: 'Live',
                price: '₹45,000',
                description: 'Engage a remote audience in real-time.',
                features: ['Live Streaming Setup', '2 Camera Angles', 'Live Switching', 'Instant Social Clips'],
                isPopular: true
            },
            {
                name: 'Experience',
                price: '₹80,000',
                description: 'Full-scale event media production.',
                features: ['4 Person Crew', 'After-movie Production', 'Live Screen Projection', 'Interviews & Testimonials']
            }
        ]
    },
    {
        slug: 'creative-collaborations',
        title: 'Creative Collaborations',
        icon: Sparkles,
        shortDesc: 'Experimental media projects blending 3D, CGI, and innovative formats.',
        fullDesc: 'Push the boundaries of what is possible. We partner with brands to create avant-garde and experimental media projects.',
        benefits: [
            'Unique Brand Identity',
            'Cutting-Edge Visuals',
            'Viral Potential',
            'Innovation Leadership'
        ],
        features: [
            '3D Modeling & Animation',
            'AR/VR Experiences',
            'Interactive Media',
            'CGI & VFX'
        ],
        heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1770&auto=format&fit=crop',
        pricing: [
            {
                name: 'Concept',
                price: '₹40,000',
                description: 'Visualizing new ideas.',
                features: ['3D Concept Art', 'Moodboarding', 'Prototype Animation', 'Feasibility Study']
            },
            {
                name: 'Innovator',
                price: '₹80,000',
                description: 'Bringing experimental ideas to life.',
                features: ['CGI Product Video', 'VFX Integration', 'Social Media AR Filter', 'High-Res Renders'],
                isPopular: true
            },
            {
                name: 'Visionary',
                price: 'Custom',
                description: 'Large scale immersive projects.',
                features: ['Full VR Experience', 'Interactive WebGL', 'Advanced Simulation', 'Global IP Development']
            }
        ]
    }
];
