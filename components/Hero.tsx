import Icon from "./Icon";
import LeadForm from "./LeadForm";
import { site } from "@/lib/site-config";

const trustBadges = [
  { icon: "shield", label: "Licensed & Insured" },
  { icon: "star",   label: "5-Star Rated" },
  { icon: "check",  label: "Free Estimates" },
  { icon: "language", label: "En Español" },
];

const heroPoints = [
  "Free, no-pressure written estimates",
  "Licensed & fully insured on every job",
  "Bilingual English / Spanish crews",
  "Fast scheduling — often same week",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-mesh" aria-label="Hero">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-sage-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

      {/* Animated leaf shapes */}
      <div className="absolute right-[8%] top-16 opacity-10 float-slow hidden lg:block">
        <svg viewBox="0 0 80 80" className="h-28 w-28 text-sage-300 fill-current">
          <path d="M10 70 Q10 10 70 10 Q70 70 10 70Z"/>
        </svg>
      </div>
      <div className="absolute left-[12%] bottom-24 opacity-8 float-med hidden lg:block">
        <svg viewBox="0 0 60 60" className="h-20 w-20 text-gold-300 fill-current">
          <circle cx="30" cy="30" r="28"/>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pb-28 lg:pt-20">
        {/* Left: Content */}
        <div className="flex flex-col justify-center text-white">
          {/* Location badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-200">
            <Icon name="pin" className="h-3.5 w-3.5 text-gold-400" />
            Serving all of {site.county}, CA
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl">
            Riverside County&apos;s{" "}
            <span className="block gradient-text">Trusted Landscaping</span>
            &amp; Tree Service Experts
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Family-owned, fully licensed crew serving Hemet, San Jacinto, Menifee
            and all of Riverside County. Bilingual English &amp; Spanish. Free estimates.
          </p>

          {/* Checklist */}
          <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {heroPoints.map((point, i) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm font-medium text-ink-100"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20">
                  <Icon name="check" className="h-3.5 w-3.5 text-gold-300" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              id="hero-call-btn"
              className="shimmer-btn inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-gold-glow transition hover:bg-gold-400"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call {site.phone}
            </a>
            <a
              href={site.smsHref}
              id="hero-text-btn"
              className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/15"
            >
              <Icon name="sms" className="h-4 w-4" />
              Text Us Now
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            {trustBadges.map((b) => (
              <span key={b.label} className="trust-badge">
                <Icon name={b.icon} className="h-3.5 w-3.5 text-gold-300" />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Lead Form */}
        <div className="flex items-center lg:pt-4">
          <div className="w-full">
            {/* Social proof above form */}
            <div className="mb-4 flex items-center gap-3 rounded-2xl glass px-4 py-3">
              <div className="flex -space-x-2">
                {["D","C","J","S"].map((l, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-gradient-to-br from-sage-500 to-ink-700 text-xs font-bold text-white"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div className="text-white">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-3.5 w-3.5 fill-current text-gold-400" />
                  ))}
                </div>
                <p className="text-xs font-medium text-ink-200">
                  500+ happy customers across Riverside County
                </p>
              </div>
            </div>
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-divider absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="h-10 w-full fill-white">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
        </svg>
      </div>
    </section>
  );
}
