import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WhyChooseUs from '@/components/WhyChooseUs';
import BestPricing from '@/components/BestPricing';
import WhyWeStandOut from '@/components/WhyWeStandOut';
import PricingPlans from '@/components/PricingPlans';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import AppSection from '@/components/AppSection';
import Footer from '@/components/Footer';

export default function ComponentsDemo() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyChooseUs />
      <BestPricing />
      <WhyWeStandOut />
      <PricingPlans />
      <Testimonial />
      <FAQ />
      <AppSection />
      <Footer />
    </main>
  );
}
