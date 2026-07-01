import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${site.name} | Landscaping & Tree Service in Hemet, CA`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Landscaping & Tree Service in Hemet, CA`,
    description: site.description,
    url: site.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — headline + lead form + CTAs */}
      <Hero />

      {/* 2. Social Proof Bar — animated stats + trust marquee */}
      <SocialProof />

      {/* 3. Services — all 10 services with premium cards */}
      <Services />

      {/* 4. About Us — story + How It Works process */}
      <AboutUs />

      {/* 5. Why Choose Us — dark section + comparison table */}
      <WhyChooseUs />

      {/* 6. Service Area — map + filterable city/zip list */}
      <ServiceArea />

      {/* 7. Gallery — recent project showcase */}
      <Gallery />

      {/* 8. Testimonials — featured + scrolling marquee */}
      <Testimonials />

      {/* 9. FAQ — categorized accordion */}
      <FAQ />

      {/* 10. Contact — final CTA + lead form */}
      <Contact />
    </>
  );
}
