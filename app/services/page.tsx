import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";

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
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white border-b border-brand-800">
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

      {/* Services grid */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="relative flex h-24 items-end bg-brand-900 px-5 pb-4">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent-600 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent-600 group-hover:text-accent-700 transition-colors">
                    View Details
                    <Icon name="arrow" className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
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
    </>
  );
}
