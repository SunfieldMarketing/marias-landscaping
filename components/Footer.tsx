import Link from "next/link";
import { site, serviceAreaCities } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import Icon from "./Icon";

const quickLinks = [
  { href: "/#services",     label: "Our Services" },
  { href: "/#why-us",       label: "Why Choose Us" },
  { href: "/#service-area", label: "Service Area" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq",          label: "FAQ" },
  { href: "/#contact",      label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 pb-24 pt-16 text-ink-200 lg:pb-14" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sage-500 to-ink-700 text-white">
                <Icon name="leaf" className="h-5 w-5" />
              </span>
              <span className="font-display text-base font-bold text-white">
                Maria&apos;s Landscaping &amp; Tree Service
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Family-owned landscaping and tree service proudly serving Hemet and
              all of Riverside County, CA since 2012. Bilingual crews, free estimates,
              and dependable results on every job.
            </p>
            {/* Stars */}
            <div className="mt-4 flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-current text-gold-400" />
              ))}
              <span className="ml-1 text-sm font-semibold text-ink-300">5.0 rating</span>
            </div>
            {/* Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["Licensed & Insured", "Se Habla Español", "Free Estimates"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-ink-300"
                >
                  {b}
                </span>
              ))}
            </div>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maria's Landscaping on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-ink-300 hover:border-blue-500/50 hover:text-blue-400 transition"
              >
                <Icon name="facebook" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Services</h4>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-400 transition hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-semibold text-gold-400 hover:text-gold-300">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service area column */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Service Area</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
              {serviceAreaCities.map((c) => (
                <li key={c.name}>
                  <span className="text-sm text-ink-400">{c.name}</span>
                  <span className="block text-[11px] text-ink-600">{c.zips[0]}{c.zips.length > 1 ? "…" : ""}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-500">
              Not listed?{" "}
              <a href="tel:+14422810394" className="text-gold-400 hover:text-gold-300 underline">
                Call us
              </a>
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={site.phoneHref} className="text-ink-300 hover:text-white transition">{site.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="sms" className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={site.smsHref} className="text-ink-300 hover:text-white transition">Text Us Anytime</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${site.email}`} className="break-all text-ink-300 hover:text-white transition">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-ink-400">{site.addressLocality}, CA &mdash; All of {site.county}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <div className="text-ink-400">
                  {site.hours.map((h) => (
                    <div key={h.day} className="text-xs">
                      <span className="font-semibold text-ink-300">{h.day}:</span> {h.time}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
            <a
              href={site.phoneHref}
              className="shimmer-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-gold-400 transition"
            >
              <Icon name="phone" className="h-4 w-4" />
              Get a Free Estimate
            </a>
          </div>
        </div>

        {/* Quick links row */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-ink-800 pt-8">
          {quickLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-ink-500 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <Link href="/services" className="text-xs text-ink-500 hover:text-white transition">
            All Services
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Maria&apos;s Landscaping &amp; Tree Service. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Icon name="pin" className="h-3.5 w-3.5 text-gold-500" />
            Proudly serving Hemet &amp; Riverside County, CA
          </p>
        </div>
      </div>
    </footer>
  );
}
