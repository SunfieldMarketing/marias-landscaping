import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services-data";
import { serviceAreaCities, site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    keywords: [
      `${service.title.toLowerCase()} Hemet CA`,
      `${service.title.toLowerCase()} Riverside County`,
      `${service.title.toLowerCase()} San Jacinto`,
      `${service.title.toLowerCase()} Menifee`,
      site.name,
    ],
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} | ${site.name}`,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: serviceAreaCities.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden hero-mesh py-14 text-white sm:py-20">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-ink-300">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <Link href="/services" className="hover:text-white transition">Services</Link>
            {" / "}
            <span className="text-white font-semibold">{service.title}</span>
          </nav>

          {/* Icon + Headline */}
          <div className="mt-5 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white ring-2 ring-white/20">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <h1 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
          </div>

          {/* Hero points */}
          <ul className="mt-6 flex flex-wrap gap-3">
            {service.heroPoints.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 rounded-full glass border border-white/15 px-4 py-2 text-sm font-medium"
              >
                <Icon name="check" className="h-4 w-4 text-gold-300" />
                {p}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="shimmer-btn inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-gold-glow transition hover:bg-gold-400"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phone}
            </a>
            <a
              href="#estimate"
              className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/15"
            >
              <Icon name="clipboard" className="h-4 w-4" />
              Get Free Estimate
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Licensed & Insured", "Free Written Estimates", "Bilingual English/Spanish"].map((b) => (
              <span key={b} className="trust-badge">
                <Icon name="check" className="h-3 w-3 text-gold-300" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">

          {/* Left: Service details */}
          <div className="lg:col-span-3">
            {/* Description */}
            <div className="space-y-4">
              {service.description.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-700">{p}</p>
              ))}
            </div>

            {/* What's Included */}
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-ink-900">What&apos;s Included</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-ink-50/40 px-4 py-3 text-sm text-ink-700"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 mt-0.5">
                      <Icon name="check" className="h-3.5 w-3.5 text-sage-600" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Why Choose Maria's for this service */}
            <Reveal className="mt-12">
              <div className="rounded-3xl border border-gold-200 bg-gold-50 p-6">
                <h2 className="font-display text-xl font-bold text-ink-900">
                  Why Choose Maria&apos;s for {service.title}?
                </h2>
                <ul className="mt-4 space-y-3">
                  {[
                    "Licensed & fully insured on every job",
                    "Bilingual English & Spanish crew",
                    "Free, written, no-pressure estimates",
                    "Fast scheduling — often same week",
                    "Full debris cleanup included",
                    "Serving Riverside County since 2012",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-ink-700">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-gold-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={site.phoneHref}
                  className="shimmer-btn mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-gold-600 transition"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call {site.phone}
                </a>
              </div>
            </Reveal>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="font-display text-2xl font-bold text-ink-900">
                  {service.title} FAQs
                </h2>
                <div className="mt-5 space-y-4">
                  {service.faqs.map((f) => (
                    <div
                      key={f.question}
                      className="rounded-2xl border border-ink-100 bg-white p-5 shadow-elevation-1"
                    >
                      <h3 className="flex items-start gap-2 font-display text-base font-semibold text-ink-900">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-[10px] font-bold text-gold-700 mt-0.5">Q</span>
                        {f.question}
                      </h3>
                      <p className="mt-3 pl-7 text-sm leading-relaxed text-ink-600">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Service area */}
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                {service.title} Service Area
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                We provide {service.title.toLowerCase()} throughout{" "}
                {serviceAreaCities
                  .slice(0, 10)
                  .map((c) => c.name)
                  .join(", ")}
                , and the rest of {site.county}.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceAreaCities.map((c) => (
                  <span
                    key={c.name}
                    className="rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                  >
                    {c.name} ({c.zips[0]})
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Sticky lead form */}
          <div className="lg:col-span-2" id="estimate">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <LeadForm
                  title={`Free ${service.title} Estimate`}
                  subtitle="Fast response from our local team."
                  defaultService={service.title}
                />
                {/* Trust below form */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {["Licensed & Insured", "No Obligation", "Fast Response"].map((b) => (
                    <span key={b} className="trust-badge-dark">
                      <Icon name="check" className="h-3 w-3 text-sage-600" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Final CTA band ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-800 to-ink-700 py-14 text-white">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-200">
            Call now or fill out the form above for a free, no-obligation estimate on your{" "}
            {service.title.toLowerCase()} project in {site.county}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.phoneHref}
              className="shimmer-btn inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-gold-glow hover:bg-gold-400 transition"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phone}
            </a>
            <a
              href={site.smsHref}
              className="inline-flex items-center gap-2 rounded-full glass border border-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/15 transition"
            >
              <Icon name="sms" className="h-4 w-4" />
              Text Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Related Services ───────────────────────────────────────── */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900">Related Services</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-elevation-1 card-hover glow-gold"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-600 to-ink-800 text-white transition-transform duration-300 group-hover:scale-110 group-hover:from-gold-500 group-hover:to-gold-700">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink-900 group-hover:text-gold-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
                  Learn more <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
