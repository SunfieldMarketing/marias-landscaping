import { galleryProjects } from "@/lib/content-data";
import Icon from "./Icon";
import Reveal from "./Reveal";

const categoryColors: Record<string, string> = {
  "Landscaping Design": "bg-sage-100 text-sage-700",
  "Tree Removal":        "bg-ink-100 text-ink-700",
  "Hardscaping":         "bg-gold-100 text-gold-700",
  "Sod & Turf":          "bg-sage-100 text-sage-700",
  "Palm Tree Trimming":  "bg-ink-100 text-ink-700",
  "Irrigation":          "bg-ink-100 text-ink-700",
};

const cardGradients: Record<string, string> = {
  leaf:  "from-sage-600 to-sage-800",
  tree:  "from-ink-600 to-ink-800",
  brick: "from-gold-600 to-ink-700",
  sod:   "from-sage-500 to-sage-700",
  palm:  "from-sage-600 to-ink-700",
  drop:  "from-ink-500 to-sage-700",
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-24" aria-label="Our Work Gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <span className="divider-dot" />
            Our Work
          </span>
          <h2 className="mt-3 section-title">
            Recent Projects Across Riverside County
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            From full yard transformations to precise tree work, here are some of the
            projects our crews have completed for homeowners just like you.
          </p>
        </Reveal>

        {/* Project cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryProjects.map((project, i) => {
            const grad = cardGradients[project.icon] || "from-ink-600 to-ink-800";
            const catColor = categoryColors[project.category] || "bg-ink-100 text-ink-700";
            return (
              <Reveal key={project.title} delay={i * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-elevation-1 card-hover glow-sage">
                  {/* Illustration header */}
                  <div className={`relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br ${grad}`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 dot-grid opacity-100" />
                    {/* Decorative circles */}
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/8" />
                    <div className="absolute -left-6 bottom-2 h-20 w-20 rounded-full bg-white/6" />
                    {/* Central icon */}
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon name={project.icon} className="h-10 w-10 text-white" />
                    </span>
                    {/* Location badge */}
                    <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      <Icon name="pin" className="h-3 w-3" />
                      {project.location}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${catColor}`}>
                      {project.category}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold text-ink-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                      {project.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      Get a similar quote
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={200} className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-3 rounded-3xl bg-gradient-to-br from-sage-50 to-ink-50 border border-sage-200 px-8 py-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-500 text-white shadow-sage-glow">
              <Icon name="sparkle" className="h-7 w-7" />
            </span>
            <h3 className="font-display text-xl font-bold text-ink-900">
              Ready for Your Yard Transformation?
            </h3>
            <p className="max-w-md text-sm text-ink-600">
              Contact us today for a free, no-obligation estimate. We&apos;ll walk your property
              and design a plan that fits your budget and vision.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="#contact"
                className="shimmer-btn rounded-full bg-gold-500 px-6 py-3 text-sm font-bold text-white hover:bg-gold-600 transition"
              >
                Get Free Estimate
              </a>
              <a
                href="tel:+14422810394"
                className="rounded-full border border-ink-300 px-6 py-3 text-sm font-bold text-ink-800 hover:bg-ink-50 transition"
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
