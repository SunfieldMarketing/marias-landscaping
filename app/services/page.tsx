import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import HomeFAQ from "@/components/HomeFAQ";
import Contact from "@/components/Contact";
import TrustBar from "@/components/TrustBar";

export const metadata: Metadata = {
  title: "Landscaping & Tree Services",
  description: `Explore all landscaping and tree service offerings from ${site.name}, serving Hemet, San Jacinto, Menifee and all of Riverside County, CA. Free estimates.`,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `All Landscaping & Tree Services | ${site.name}`,
    description: `Complete list of landscaping and tree care services for Riverside County homeowners. Free estimates — (442) 281-0394.`,
    url: `${site.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white border-b border-brand-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero_bg.png"
            alt="Beautiful landscaping in Riverside County"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/90 to-brand-900/70 backdrop-blur-sm opacity-95" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl text-white drop-shadow-lg">
            Landscaping &amp; Tree Service Solutions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200 drop-shadow-md">
            Full-service landscaping and tree care for homeowners across{" "}
            {site.county}. Explore each service below or call for a free estimate.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={site.phoneHref} className="btn-primary">
              <Icon name="phone" className="h-4 w-4 mr-2" />
              Call {site.phone}
            </a>
            <a href="#estimate" className="btn-secondary">
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services grid (Visual Bento) */}
      <section className="bg-surface-100 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[280px]">
            {services.map((service, index) => {
              // Bento sizing
              const isLarge = index === 0 || index === 3;
              const colSpan = isLarge ? 'md:col-span-2 xl:col-span-2' : 'col-span-1';

              return (
                <Link 
                  key={service.slug}
                  href={`/services/${service.slug}`} 
                  className={`group relative overflow-hidden rounded-[2rem] block ${colSpan} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-500/20`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Heavy dark slate gradient overlay to ensure perfect white text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/80 to-brand-900/40 opacity-90 group-hover:opacity-95 transition-opacity"></div>
                  </div>

                  <div className="p-8 h-full flex flex-col justify-end relative z-10">
                    <div className="absolute top-8 left-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 rounded-2xl flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500 group-hover:scale-110 transition-all duration-500 shadow-xl">
                      <Icon name={service.icon as any} className="w-7 h-7" />
                    </div>
                    
                    <div className="mt-auto">
                      <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                        {service.title}
                      </h4>
                      <p className={`text-brand-100 text-sm leading-relaxed drop-shadow-sm font-medium ${isLarge ? 'line-clamp-3 mb-4' : 'line-clamp-2 mb-4'} opacity-80 group-hover:opacity-100 transition-opacity`}>
                        {service.shortDescription}
                      </p>

                      {/* Injected Feature List Data */}
                      <ul className="space-y-1 mb-6 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 ease-in-out">
                        {service.features.slice(0, 3).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center text-sm text-brand-200">
                            <Icon name="check" className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center text-accent-400 text-sm font-bold uppercase tracking-widest group-hover:text-accent-300 group-hover:translate-x-2 transition-all duration-300">
                      Explore Service 
                      <Icon name="arrow" className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

        </div>
      </section>

      {/* Lead form section (Perfect match for reference image) */}
      <section id="estimate" className="bg-brand-900 py-16 sm:py-24 text-white border-t border-brand-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left side: Copy and CTA */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow-md">
                Ready to Transform Your Landscape?
              </h2>
              <p className="text-brand-300 text-lg sm:text-xl mb-10 leading-relaxed max-w-lg drop-shadow-sm">
                Genuine service & authentic free onsite estimates. Let's create the outdoor space you've always dreamed of.
              </p>
              
              <div className="flex items-center gap-4 bg-brand-800/50 p-6 rounded-2xl border border-brand-700/50 max-w-md backdrop-blur-sm">
                <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-600/20">
                  <Icon name="phone" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-brand-300 font-medium">Call us directly</p>
                  <a href={site.phoneHref} className="text-2xl font-bold text-white hover:text-accent-400 transition-colors">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Lead Form */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-accent-500/10 rounded-[3rem] blur-2xl"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-6">Request a Free Estimate</h3>
                <LeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Massive Expansion Elements */}
      <Process />
      <Testimonials />
      <HomeFAQ />
      <Contact />
    </>
  );
}
