import { testimonials } from "@/lib/content-data";
import Icon from "./Icon";
import Reveal from "./Reveal";

const featured = testimonials.slice(0, 3);
const marqueeSet = [...testimonials, ...testimonials]; // duplicate for seamless loop

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < count ? "fill-current text-gold-400" : "text-ink-200"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  size = "normal",
}: {
  t: (typeof testimonials)[0];
  size?: "normal" | "large";
}) {
  return (
    <figure
      className={`flex h-full flex-col rounded-3xl border border-ink-100 bg-white shadow-elevation-1 ${
        size === "large" ? "p-7" : "p-5 w-80 shrink-0"
      }`}
    >
      <Icon name="quote" className="h-6 w-6 text-gold-300 mb-2 shrink-0" />
      <StarRow count={t.rating} />
      <blockquote className={`mt-3 flex-1 leading-relaxed text-ink-700 ${size === "large" ? "text-base" : "text-sm"}`}>
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sage-500 to-ink-700 font-display text-sm font-bold text-white">
          {t.name.charAt(0)}
        </span>
        <div>
          <div className="text-sm font-bold text-ink-900">{t.name}</div>
          <div className="text-xs text-ink-500">{t.location}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden bg-ink-50 py-16 sm:py-24" aria-label="Customer Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <span className="divider-dot" />
            Customer Reviews
          </span>
          <h2 className="mt-3 section-title">What Riverside County Homeowners Say</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Real reviews from real neighbors. Over 500 satisfied customers and counting.
          </p>
          {/* Aggregate rating */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-50 border border-gold-200 px-4 py-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-current text-gold-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-gold-800">4.9 / 5.0</span>
            <span className="text-xs text-gold-700">· 50+ reviews</span>
          </div>
        </Reveal>

        {/* Featured reviews (static grid) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <TestimonialCard t={t} size="large" />
            </Reveal>
          ))}
        </div>

        {/* Auto-scrolling marquee — row 1 */}
        <div className="mt-8 overflow-hidden">
          <div className="marquee-inner gap-5 py-2">
            {marqueeSet.slice(3).map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        {/* Bottom trust row */}
        <Reveal delay={100} className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href={`https://www.facebook.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 shadow-sm hover:border-ink-300 hover:shadow-md transition"
          >
            <Icon name="facebook" className="h-4 w-4 text-blue-600" />
            See us on Facebook
          </a>
          <div className="flex items-center gap-1.5 text-sm text-ink-600">
            <Icon name="shield" className="h-4 w-4 text-sage-500" />
            Licensed &amp; Insured
          </div>
          <div className="flex items-center gap-1.5 text-sm text-ink-600">
            <Icon name="language" className="h-4 w-4 text-sage-500" />
            Se Habla Español
          </div>
        </Reveal>
      </div>
    </section>
  );
}
