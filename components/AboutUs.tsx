import Icon from "./Icon";
import Reveal from "./Reveal";
import { aboutUs } from "@/lib/content-data";
import { site } from "@/lib/site-config";

const steps = [
  {
    num: "01",
    icon: "phone",
    title: "Call or Text for a Free Estimate",
    desc: "Reach us by phone, text, or the form below. We respond fast — usually the same day.",
  },
  {
    num: "02",
    icon: "eye",
    title: "On-Site Property Assessment",
    desc: "We walk your property, assess the work, and give you a transparent written quote.",
  },
  {
    num: "03",
    icon: "truck",
    title: "Crew Arrives & Gets to Work",
    desc: "Licensed, insured crew shows up on schedule and completes the job to spec.",
  },
  {
    num: "04",
    icon: "sparkle",
    title: "Spotless Cleanup & Follow-Up",
    desc: "We haul away all debris and follow up to make sure you're 100% satisfied.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="overflow-hidden bg-white py-16 sm:py-24" aria-label="About Us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <span className="divider-dot" />
            Our Story
          </span>
          <h2 className="mt-3 section-title">{aboutUs.heading}</h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: story + founder */}
          <Reveal direction="left">
            <div className="space-y-5">
              {aboutUs.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-700">
                  {p}
                </p>
              ))}

              {/* Founder quote */}
              <blockquote className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-700 p-6 text-white">
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gold-500/10" />
                <Icon name="quote" className="h-8 w-8 text-gold-400 mb-3" />
                <p className="text-base italic leading-relaxed text-ink-100">
                  &ldquo;{aboutUs.founderNote.quote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display text-sm font-bold text-white">
                    M
                  </span>
                  <div>
                    <div className="font-display text-sm font-bold text-white">{aboutUs.founderNote.name}</div>
                    <div className="text-xs text-ink-300">{site.name}</div>
                  </div>
                </footer>
              </blockquote>

              {/* Stats highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {aboutUs.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-ink-100 bg-ink-50 p-4"
                  >
                    <div className="font-display text-xs font-bold uppercase tracking-widest text-ink-400">
                      {h.label}
                    </div>
                    <div className="mt-1 font-display text-lg font-extrabold text-ink-900">
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: How It Works */}
          <Reveal direction="right" delay={100}>
            <div>
              <div className="mb-6">
                <span className="kicker">
                  <span className="divider-dot" />
                  How It Works
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink-900">
                  Simple Process, Excellent Results
                </h3>
              </div>
              <div className="relative space-y-0">
                {/* Connecting line */}
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-gold-300 via-sage-400 to-ink-300 hidden sm:block" />

                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="relative flex gap-5 pb-8 last:pb-0"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Number circle */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-300 bg-white font-display text-sm font-extrabold text-gold-600 shadow-sm">
                      {step.num}
                    </div>
                    <div className="pt-1.5">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name={step.icon} className="h-4 w-4 text-gold-500" />
                        <h4 className="font-display text-base font-bold text-ink-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 rounded-2xl bg-gold-50 border border-gold-200 p-5">
                <p className="font-display text-base font-bold text-ink-900">
                  Ready to get started?
                </p>
                <p className="mt-1 text-sm text-ink-600">
                  Free estimates — no pressure, no obligation. We&apos;ll respond within hours.
                </p>
                <a
                  href="tel:+14422810394"
                  className="shimmer-btn mt-4 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-gold-600 transition"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Call {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
