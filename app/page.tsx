import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
