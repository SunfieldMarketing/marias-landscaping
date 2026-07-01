import { whyChooseUs } from "@/lib/content-data";
import Icon from "./Icon";
import Reveal from "./Reveal";

const comparisonRows = [
  { feature: "Locally Owned & Based in Hemet", us: true,  them: false },
  { feature: "Fully Licensed & Insured",        us: true,  them: "Varies" },
  { feature: "Bilingual (English/Spanish)",     us: true,  them: false },
  { feature: "Free Written Estimates",          us: true,  them: "Varies" },
  { feature: "Consistent Scheduling",           us: true,  them: false },
  { feature: "Full Cleanup Included",           us: true,  them: "Sometimes" },
  { feature: "Full-Service (10+ services)",     us: true,  them: false },
  { feature: "Emergency Tree Service",          us: true,  them: false },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-ink-950 py-16 sm:py-24" aria-label="Why Choose Us">
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />
      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sage-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker-light">
            <span className="divider-dot text-gold-300" />
            Why Choose Us
          </span>
          <h2 className="mt-3 section-title-light">
            Riverside County&apos;s Trusted Choice
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Homeowners across Hemet and the surrounding communities choose us
            because we show up, do the job right, and stand behind every project.
          </p>
        </Reveal>

        {/* Feature cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/8 glass-dark p-6 transition-all duration-300 hover:border-gold-500/30 glow-gold">
                {/* Gradient accent corner */}
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold-500/8 transition group-hover:bg-gold-500/15" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/20 to-sage-500/20 text-gold-300 ring-1 ring-gold-500/20">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comparison table */}
        <Reveal delay={200} className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="bg-white/5 px-6 py-4 backdrop-blur">
              <h3 className="font-display text-lg font-bold text-white">
                How We Compare
              </h3>
              <p className="mt-1 text-sm text-ink-400">Maria&apos;s vs. the average local contractor</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr className="border-t border-white/10">
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-ink-400">Feature</th>
                    <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-gold-300">Maria&apos;s</th>
                    <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest text-ink-400">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-t border-white/6 transition hover:bg-white/4 ${i % 2 === 0 ? "bg-white/2" : ""}`}
                    >
                      <td className="px-6 py-3.5 text-sm text-ink-200">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sage-500/20">
                          <Icon name="check" className="h-3.5 w-3.5 text-sage-300" />
                        </span>
                      </td>
                      <td className="px-6 py-3.5 text-center text-sm">
                        {row.them === true ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sage-500/20">
                            <Icon name="check" className="h-3.5 w-3.5 text-sage-300" />
                          </span>
                        ) : row.them === false ? (
                          <span className="font-bold text-ink-500">✗</span>
                        ) : (
                          <span className="rounded-full bg-gold-500/10 px-2 py-0.5 text-xs text-gold-300">{row.them}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
