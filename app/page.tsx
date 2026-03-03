import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhyWeStandOut from '@/components/WhyWeStandOut';
import PricingPlans from '@/components/PricingPlans';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import AppSection from '@/components/AppSection';
import Footer from '@/components/Footer';
import DhashaStudio from '@/components/DhashaStudio';

export default function ComponentsDemo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dhasha Media",
    "url": "https://dhashamedia.com",
    "logo": "https://dhashamedia.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/dhashamedia",
      "https://twitter.com/dhashamedia",
      "https://www.linkedin.com/company/dhashamedia"
    ],
    "description": "Dhasha Media is a 10-in-1 media powerhouse offering professional photography, videography, branding, and a dedicated creator platform.",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dhasha Media",
    "url": "https://dhashamedia.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dhashamedia.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Media Production",
    "provider": {
      "@type": "Organization",
      "name": "Dhasha Media"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Media Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cinematic Videography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reels & Short Form Content"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding & Identity"
          }
        }
      ]
    }
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dhasha Media",
    "image": "https://dhashamedia.com/logo.png",
    "@id": "https://dhashamedia.com",
    "url": "https://dhashamedia.com",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1204, Tech Park One, Hitech City",
      "addressLocality": "Hyderabad",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the 10-minute delivery promise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our on-site team is equipped with high-speed mobile editing suites. For most standard reel packages, we aim to have your first draft ready for review before we leave the filming location."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide my own scripts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can, but you don’t have to. Our 10-in-1 service includes professional script writing based on current viral hooks and your specific brand goals."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a female reel maker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. We prioritize comfort and safety. You can specifically request a female creator during the booking process at no extra cost."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyChooseUs />
      <DhashaStudio />
      <WhyWeStandOut />
      <PricingPlans />

      <Testimonial />
      <FAQ />
      <AppSection />
      <Footer />
    </main>
  );
}