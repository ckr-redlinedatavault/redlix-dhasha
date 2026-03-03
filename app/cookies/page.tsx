'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bricolage_Grotesque } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    display: 'swap',
});

export default function Cookies() {
    return (
        <main className={`${bricolage.className} bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#DAC291] selection:text-black`}>
            <Navbar />

            <section className="relative pt-40 pb-20 px-6">

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DAC291]/5 rounded-full blur-[140px] pointer-events-none opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DAC291]/5 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <header className="mb-16 md:mb-24 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-[#DAC291]">
                            Cookie Policy
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Understanding how we use cookies to improve your experience on our platform.
                        </p>
                    </header>

                    <div className="space-y-16 text-gray-300 font-light leading-relaxed text-base md:text-lg">


                        <section className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#DAC291]/30 transition-colors duration-500">
                            <p className="mb-4">
                                This Cookie Policy explains how Dhasha Media uses cookies and similar technologies to recognize you when you visit our website at <a href="https://www.dhashamedia.com/" className="text-[#DAC291] hover:underline underline-offset-4 decoration-[#DAC291]/50">https://www.dhashamedia.com/</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                1. What Are Cookies?
                            </h2>
                            <p className="mb-4">
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                            </p>
                            <p>
                                Cookies set by the website owner (in this case, Dhasha Media) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                2. Why We Use Cookies
                            </h2>
                            <p className="mb-6">
                                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 flex flex-col hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-3">Essential Cookies</h3>
                                    <p className="text-sm text-gray-400 flex-grow">
                                        These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 flex flex-col hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-3">Performance & Analytics</h3>
                                    <p className="text-sm text-gray-400 flex-grow">
                                        These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 flex flex-col hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-3">Functional Cookies</h3>
                                    <p className="text-sm text-gray-400 flex-grow">
                                        These cookies identify who you are and recall your settings or preferences (such as your preferred language) to provide a more personalized experience.
                                    </p>
                                </div>
                                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5 flex flex-col hover:border-[#DAC291]/20 transition duration-300">
                                    <h3 className="text-xl font-semibold text-[#DAC291] mb-3">Targeting/Advertising</h3>
                                    <p className="text-sm text-gray-400 flex-grow">
                                        These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-[#DAC291] rounded-sm inline-block"></span>
                                3. How Can You Control Cookies?
                            </h2>
                            <p className="mb-4">
                                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                            </p>
                            <p className="text-sm text-gray-400">
                                As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                            </p>
                        </section>

                        <section className="pt-12 border-t border-white/10">
                            <h2 className="text-2xl font-medium text-white mb-4">Updates to This Cookie Policy</h2>
                            <p className="text-sm text-gray-400">
                                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
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
