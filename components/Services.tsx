import Link from "next/link";
import { services } from "@/lib/services-data";
import Icon from "./Icon";
import Reveal from "./Reveal";

// Gradient per service category
const cardGradients: Record<string, string> = {
  "tree-trimming-removal":         "from-sage-600 to-sage-800",
  "landscaping-design-installation":"from-sage-500 to-ink-700",
  "lawn-care-maintenance":         "from-sage-500 to-sage-700",
  "yard-cleanup":                  "from-ink-600 to-ink-800",
  "sod-turf-installation":         "from-sage-400 to-sage-600",
  "irrigation-systems":            "from-ink-500 to-sage-700",
  "hardscaping-pavers":            "from-ink-600 to-ink-800",
  "stump-grinding":                "from-ink-700 to-ink-900",
  "palm-tree-trimming":            "from-sage-600 to-ink-700",
  "mulching-soil":                 "from-gold-600 to-ink-700",
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24" aria-label="Our Services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <span className="divider-dot" />
            What We Do
          </span>
          <h2 className="mt-3 section-title">
            Complete Landscaping &amp; Tree Care Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            From emergency tree removal to full landscape design, we handle every outdoor project
            across Riverside County — all from one licensed, insured, bilingual team.
          </p>
        </Reveal>

        {/* Service cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const grad = cardGradients[service.slug] || "from-ink-600 to-ink-800";
            return (
              <Reveal key={service.slug} delay={i * 55}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-elevation-1 card-hover glow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Icon header */}
                  <div className={`relative flex h-24 items-end bg-gradient-to-br ${grad} px-5 pb-4`}>
                    {/* Decorative circles */}
                    <div className="absolute right-3 top-3 h-14 w-14 rounded-full bg-white/8" />
                    <div className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-white/5" />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur text-white ring-2 ring-white/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base font-bold text-ink-900 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                      {service.shortDescription}
                    </p>

                    {/* CTA row */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
                        Learn More
                        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <a
                        href="/#contact"
                        className="rounded-full bg-gold-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-700 hover:bg-gold-100 transition-colors"
                      >
                        Free Quote
                      </a>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA band */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-ink-900 via-ink-800 to-ink-700 px-6 py-6 sm:flex-row sm:px-10">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-white">
                Not sure which service you need?
              </p>
              <p className="mt-1 text-sm text-ink-200">
                Call us — we&apos;ll help you figure out exactly what your yard needs.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/services"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                View All Services
              </Link>
              <a
                href="tel:+14422810394"
                className="shimmer-btn rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-gold-400 transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
