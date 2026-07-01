"use client";

import { useState } from "react";
import { serviceAreaCities, site } from "@/lib/site-config";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ServiceArea() {
  const [search, setSearch] = useState("");

  const filtered = serviceAreaCities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.zips.some((z) => z.includes(search))
  );

  const mapQuery = encodeURIComponent(
    `Riverside County, CA`
  );

  return (
    <section id="service-area" className="bg-ink-50 py-16 sm:py-24" aria-label="Service Area">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <span className="divider-dot" />
            Service Area
          </span>
          <h2 className="mt-3 section-title">
            Proudly Serving All of {site.county}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Based in {site.addressLocality}, CA, we serve homeowners and businesses
            throughout Riverside County — from Hemet to Temecula and everywhere in between.
          </p>
        </Reveal>

        {/* Coverage badge */}
        <Reveal delay={80} className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-sage-200 bg-sage-50 px-5 py-2.5 shadow-sm">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-500 text-white">
              <Icon name="map" className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-sage-800">
              35-mile service radius · {serviceAreaCities.length} cities covered
            </span>
          </div>
        </Reveal>

        {/* Map + City list */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Map */}
          <Reveal className="lg:col-span-3" direction="left">
            <div className="h-[380px] w-full overflow-hidden rounded-4xl border border-ink-200 shadow-elevation-2 sm:h-[480px]">
              <iframe
                title={`${site.name} service area map — Riverside County, CA`}
                src={`https://maps.google.com/maps?q=${mapQuery}&z=9&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Interactive map showing Riverside County service area"
              />
            </div>
          </Reveal>

          {/* City list */}
          <Reveal delay={100} className="lg:col-span-2" direction="right">
            <div className="h-full rounded-4xl border border-ink-200 bg-white p-6 shadow-elevation-1">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
                <Icon name="pin" className="h-5 w-5 text-gold-500" />
                Cities &amp; Zip Codes We Serve
              </h3>

              {/* Search filter */}
              <div className="relative mt-4">
                <Icon name="pin" className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
                <input
                  type="text"
                  placeholder="Search city or zip code…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-ink-200 bg-ink-50 py-2.5 pl-9 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-gold-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-100"
                  aria-label="Filter cities by name or zip code"
                />
              </div>

              {/* City grid */}
              <ul className="mt-4 max-h-[320px] space-y-0 overflow-y-auto scrollbar-hide">
                {filtered.length === 0 ? (
                  <li className="py-6 text-center text-sm text-ink-500">
                    No cities found. <a href="tel:+14422810394" className="font-semibold text-gold-600 hover:underline">Call us</a> — we may still serve you!
                  </li>
                ) : (
                  filtered.map((city) => (
                    <li
                      key={city.name}
                      className="flex items-center justify-between border-b border-ink-50 py-2.5 last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                        <span className="text-sm font-semibold text-ink-900">{city.name}</span>
                      </div>
                      <span className="rounded-full bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-500">
                        {city.zips.join(", ")}
                      </span>
                    </li>
                  ))
                )}
              </ul>

              <p className="mt-4 rounded-xl bg-gold-50 p-3 text-xs leading-relaxed text-gold-800">
                <strong>Don&apos;t see your city?</strong> Call us at{" "}
                <a href="tel:+14422810394" className="font-bold underline hover:text-gold-600">
                  {site.phone}
                </a>{" "}
                — we likely still serve your area.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
