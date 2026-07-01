import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden hero-mesh py-16 text-white sm:py-24">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="kicker-light inline-flex justify-center">
            <span className="divider-dot text-gold-300" />
            Our Services
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">
            Landscaping &amp; Tree Service Solutions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-200">
            Full-service landscaping and tree care for homeowners across{" "}
            {site.county}. Explore each service below or call for a free estimate.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.phoneHref}
              className="shimmer-btn inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-gold-glow hover:bg-gold-400 transition"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phone}
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center gap-2 rounded-full glass border border-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/15 transition"
            >
              Get Free Estimate
            </a>
          </div>
          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Licensed & Insured", "Free Estimates", "Bilingual Service", "Riverside County"].map((b) => (
              <span key={b} className="trust-badge">
                <Icon name="check" className="h-3 w-3 text-gold-300" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 50}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-elevation-1 card-hover glow-gold"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Icon header */}
                  <div className="relative flex h-24 items-end bg-gradient-to-br from-ink-700 to-ink-900 px-5 pb-4">
                    <div className="absolute right-3 top-3 h-14 w-14 rounded-full bg-white/8" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur text-white ring-2 ring-white/25 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold-500/30">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-base font-bold text-ink-900 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
                      View Details
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="estimate" className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 text-center">
            <span className="kicker">
              <span className="divider-dot" />
              Free Estimate
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink-900">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-2 text-sm text-ink-600">
              Tell us about your project and we&apos;ll help you figure out exactly what your yard needs — no pressure.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
