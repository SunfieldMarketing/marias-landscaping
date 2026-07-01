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
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-900 text-white border-b border-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero_bg.png"
            alt="Beautiful landscaping in Riverside County"
            className="h-full w-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Landscaping &amp; Tree Service Solutions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
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

      {/* Lead form */}
      <section id="estimate" className="bg-brand-900 py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-brand-100 mb-8">
            Tell us about your project and we&apos;ll help you figure out exactly what your yard needs — no pressure.
          </p>
          <div className="text-left text-gray-900">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
