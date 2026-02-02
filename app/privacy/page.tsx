'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Privacy() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#DAC291] selection:text-black`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6">
                {/* Background ambient glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DAC291]/5 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <header className="mb-16 md:mb-24 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-[#DAC291]">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Transparency is our core value. This policy outlines how DHA Media protects your data and privacy.
                        </p>
                    </header>

                    <div className="space-y-16 text-gray-300 font-light leading-relaxed text-base md:text-lg">

                        {/* Introduction */}
                        <section className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#DAC291]/30 transition-colors duration-500">
                            <p className="mb-6">
                                This Privacy Policy explains how <strong className="text-white">DHA Media Private Limited</strong> (hereinafter referred to as “DHA Media,” “We,” “Us,” or “Our”) collects, uses, processes, stores, shares, and protects information belonging to users (“You,” “Your,” or “Users”) who access or use our services through our website <a href="https://www.dhashamedia.com/" className="text-[#DAC291] hover:underline underline-offset-4 decoration-[#DAC291]/50">https://www.dhashamedia.com/</a> (“Platform” or “Website”).
                            </p>
                            <p>
                                This Policy should be read together with our Terms of Use available at <a href="/terms" className="text-[#DAC291] hover:underline underline-offset-4 decoration-[#DAC291]/50">/terms</a>. By accessing or using our Website or Services, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy.
                            </p>
                        </section>

                        {/* About DHA Media */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                About DHA Media
                            </h2>
                            <p>
                                DHA Media is a 10-in-1 integrated media company, offering services that include but are not limited to digital marketing, branding, web development, app development, content creation, advertising, design, social media management, analytics, and media consulting.
                            </p>
                        </section>

                        {/* Legal Compliance */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Legal and Regulatory Compliance
                            </h2>
                            <p className="mb-4">Our data protection practices comply with applicable Indian laws, including:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-[#DAC291]">
                                <li>Information Technology Act, 2000, and its amendments</li>
                                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500">
                                The terms “Personal Information” and “Sensitive Personal Data or Information” shall have the meanings assigned under the above laws and any other applicable regulations in your jurisdiction.
                            </p>
                        </section>

                        {/* Storage */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Storage and Processing of Information
                            </h2>
                            <p>
                                The information collected by DHA Media may be stored and processed within India or in other countries, including the United States, where our infrastructure, affiliates, partners, or service providers operate. We ensure appropriate safeguards are in place wherever data is processed.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Information We Collect
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-4">1. Profile and Identity Information</h3>
                                    <p className="mb-4">We may collect and retain information such as:</p>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Name", "Email address", "Phone number", "Postal address",
                                            "Company or organization name", "Job title or role",
                                            "Customer identifiers or account-related details"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-xs text-gray-400">This information helps us create and manage user profiles, understand service preferences, and deliver customized solutions.</p>
                                </div>

                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-4">2. Transaction and Commercial Data</h3>
                                    <p className="mb-4">
                                        DHA Media does not store payment card details or bank account information.
                                    </p>
                                    <p className="text-sm">
                                        However, we may retain non-financial transaction records such as order confirmations, service references, and invoices strictly for operational and compliance purposes.
                                    </p>
                                </div>

                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-4">3. User-Generated and Usage Data</h3>
                                    <p className="mb-4">This includes:</p>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Browser type and device information", "IP address and network activity",
                                            "Website interaction data", "Cookies, tracking pixels, and similar technologies",
                                            "Social media interactions"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-xs text-gray-400">If enabled, we may also collect approximate or precise location data (city, state, country), for example when you interact with our social media campaigns or events.</p>
                                </div>

                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-4">4. Technical, Audio, Video, and Communication Data</h3>
                                    <p className="mb-4">We may collect information from:</p>
                                    <ul className="space-y-2 text-sm">
                                        {[
                                            "Recorded or observed phone calls or video meetings",
                                            "Emails, chats, and support interactions",
                                            "Offline engagements such as meetings or events"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-xs text-gray-400">This data allows us to improve service quality, ensure security, provide customer support, and enhance overall business operations.</p>
                                </div>
                            </div>
                        </section>

                        {/* Purpose of Collecting */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Purpose of Collecting Information
                            </h2>
                            <p className="mb-6">We collect and use your information to:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Deliver and manage our services",
                                    "Create and maintain user accounts",
                                    "Provide personalized customer support",
                                    "Share relevant updates, insights, and promotional content",
                                    "Communicate important service-related information",
                                    "Manage our digital platforms and social media presence",
                                    "Improve business performance and service offerings",
                                    "Ensure safety, fraud prevention, and legal compliance"
                                ].map((purpose, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-lg">
                                        <span className="text-[#DAC291] text-lg font-bold">✓</span>
                                        <span>{purpose}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* When we collect info */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                When We Collect Your Information
                            </h2>
                            <p className="mb-4">We may collect your personal information when:</p>
                            <ul className="list-none space-y-3">
                                {[
                                    "You sign up for or use our services",
                                    "You create an account or user profile",
                                    "You subscribe to newsletters or marketing communications",
                                    "You interact with us via website forms, email, chat, phone, or video calls",
                                    "You participate in surveys, contests, or events",
                                    "You browse our Website (through cookies and analytics tools)",
                                    "Information is shared by authorized partners with your consent"
                                ].map((item, i) => (
                                    <li key={i} className="pl-6 border-l-2 border-[#DAC291]/30 hover:border-[#DAC291] transition-colors">{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Sources */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-medium text-white mb-4">Sources of Information</h2>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Direct Sources", desc: "Data you provide voluntarily" },
                                        { title: "Customer Sources", desc: "Information shared by an organization or colleague" },
                                        { title: "Third-Party Sources", desc: "Public databases, social platforms, affiliates, and marketing partners" },
                                        { title: "Service Usage", desc: "Data generated while using our services" }
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <strong className="text-gray-200 block">{item.title}</strong>
                                            <span className="text-gray-500 text-sm">{item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-medium text-white mb-4">Third-Party Information Providers</h2>
                                <p className="mb-4 text-sm text-gray-400">In limited cases, we may receive information from:</p>
                                <ul className="list-disc pl-5 space-y-2 marker:text-[#DAC291]">
                                    <li>DHA Media affiliates and subsidiaries</li>
                                    <li>Event collaborators and partners</li>
                                    <li>Social media platforms</li>
                                    <li>Advertising and analytics partners</li>
                                    <li>Government or regulatory authorities</li>
                                    <li>Legal and enforcement agencies</li>
                                    <li>Individuals who refer or recommend you</li>
                                </ul>
                            </div>
                        </section>

                        {/* Sharing Info */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Sharing of Personal Information
                            </h2>
                            <p className="mb-4">We may share your information with:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-[#DAC291] mb-6">
                                <li>Authorized service providers and vendors</li>
                                <li>Technology and IT infrastructure partners</li>
                                <li>Marketing, advertising, and communication platforms</li>
                                <li>Legal, audit, and compliance professionals</li>
                                <li>Government bodies or courts when legally required</li>
                                <li>Other parties with your consent or for legitimate business purposes</li>
                            </ul>
                            <div className="p-4 bg-[#DAC291]/10 rounded-lg border border-[#DAC291]/20 text-[#DAC291]">
                                <strong>We do not sell your personal data.</strong>
                            </div>
                        </section>

                        {/* Refund Policy */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Refund Policy
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">1</div>
                                    <p className="mt-2">Orders cancelled before service execution are eligible for <strong>instant refunds</strong>.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">2</div>
                                    <p className="mt-2">If services are partially delivered, refunds will be processed <strong>proportionally</strong> after deducting non-recoverable costs.</p>
                                </div>
                                <p className="text-gray-400 text-sm mt-4 pl-14">For refund-related assistance, please contact us using the details below.</p>
                            </div>
                        </section>

                        {/* Cookie Policy */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Cookie Policy
                            </h2>
                            <p className="mb-4">With your consent (where required), we use cookies and similar technologies to:</p>
                            <ul className="list-disc pl-6 space-y-2 marker:text-[#DAC291] mb-4">
                                <li>Analyze website traffic</li>
                                <li>Understand user behavior</li>
                                <li>Enhance and personalize user experience</li>
                            </ul>
                            <p className="text-sm text-gray-500">You may disable cookies through your browser settings. However, disabling cookies may affect certain features of the Website. We are not responsible for cookies placed by third-party services.</p>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                Your Rights
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Withdrawal of Consent</h3>
                                    <p>You may withdraw your consent for data processing at any time by contacting us.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Marketing Preferences</h3>
                                    <p className="mb-2">You can opt out of promotional emails or messages by:</p>
                                    <ul className="list-square pl-6 space-y-1 text-sm text-gray-400 marker:text-[#DAC291]">
                                        <li>Clicking the unsubscribe link</li>
                                        <li>Replying “STOP” to SMS messages</li>
                                        <li>Contacting us directly</li>
                                    </ul>
                                    <p className="mt-2 text-xs text-gray-500">Service-related communications may still be sent when necessary.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Cookie Controls</h3>
                                    <p>You can manage or disable cookies through your browser settings.</p>
                                </div>
                            </div>
                        </section>

                        {/* Updates to this policy - Moved to bottom as standard */}
                        <section className="pt-12 border-t border-white/10">
                            <h2 className="text-2xl font-medium text-white mb-4">Updates to This Privacy Policy</h2>
                            <p className="text-sm text-gray-400">
                                We may revise or update this Privacy Policy from time to time to reflect changes in legal requirements, business practices, or service offerings. Any updates will be posted on this page, and continued use of the Website constitutes acceptance of the revised policy.
                            </p>
                            <p className="text-xs text-[#DAC291] mt-4 font-mono">
                                Last Updated: {new Date().toLocaleDateString()}
                            </p>
                        </section>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
