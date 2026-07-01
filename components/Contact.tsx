import { site } from "@/lib/site-config";
import Icon from "./Icon";
import LeadForm from "./LeadForm";
import Reveal from "./Reveal";

const contactDetails = [
  {
    icon: "phone",
    label: "Call or Text",
    content: site.phone,
    href: site.phoneHref,
    isLink: true,
  },
  {
    icon: "sms",
    label: "Text Us",
    content: "Text anytime for quick questions",
    href: site.smsHref,
    isLink: true,
  },
  {
    icon: "mail",
    label: "Email",
    content: site.email,
    href: `mailto:${site.email}`,
    isLink: true,
  },
  {
    icon: "pin",
    label: "Service Area",
    content: `${site.addressLocality}, CA — All of ${site.county}`,
    href: null,
    isLink: false,
  },
];

const trustSeals = [
  { icon: "shield",  label: "Licensed & Insured" },
  { icon: "check",   label: "Free Estimates" },
  { icon: "clock",   label: "Same-Week Response" },
  { icon: "language",label: "En Español" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800 bg-gradient-animated bg-300% py-16 sm:py-24"
      aria-label="Contact Us"
    >
      {/* Overlays */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-gold-500/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-sage-500/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Left column: contact info */}
        <Reveal className="text-white">
          <span className="kicker-light">
            <span className="divider-dot text-gold-300" />
            Contact Us
          </span>
          <h2 className="mt-3 section-title-light">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-200">
            Call, text, or fill out the form and we&apos;ll respond quickly — usually within hours.
            Every estimate is free, written, and no-obligation.
          </p>

          {/* Contact details */}
          <ul className="mt-8 space-y-5">
            {contactDetails.map((detail) => (
              <li key={detail.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300 ring-1 ring-white/15">
                  <Icon name={detail.icon} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-300">
                    {detail.label}
                  </div>
                  {detail.isLink && detail.href ? (
                    <a
                      href={detail.href}
                      className="mt-0.5 block text-lg font-bold text-white hover:text-gold-300 transition-colors"
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-base font-semibold text-ink-100">
                      {detail.content}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Business hours */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink-300">
              <Icon name="clock" className="h-4 w-4 text-gold-400" />
              Business Hours
            </h3>
            <ul className="mt-3 space-y-1.5">
              {site.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm text-ink-100">
                  <span className="font-semibold">{h.day}</span>
                  <span className="text-ink-300">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="flex items-center gap-2 rounded-full glass border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition"
            >
              <Icon name="facebook" className="h-4 w-4 text-blue-400" />
              Facebook
            </a>
            <span className="flex items-center gap-2 rounded-full glass border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/70">
              <Icon name="language" className="h-4 w-4 text-gold-400" />
              Se Habla Español
            </span>
          </div>

          {/* Trust seals row */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {trustSeals.map((seal) => (
              <div
                key={seal.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
              >
                <Icon name={seal.icon} className="h-4 w-4 text-gold-400 shrink-0" />
                <span className="text-xs font-semibold text-ink-200">{seal.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right column: form */}
        <Reveal delay={100}>
          <LeadForm
            variant="cta"
            title="Request Your Free Estimate"
            subtitle="Fill out the form — we'll respond within 2 hours."
          />
        </Reveal>
      </div>
    </section>
  );
}
