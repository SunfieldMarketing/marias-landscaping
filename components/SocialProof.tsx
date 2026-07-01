"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { stats } from "@/lib/content-data";

const marqueeItems = [
  { icon: "shield",   text: "Licensed & Insured" },
  { icon: "star",     text: "5-Star Rated" },
  { icon: "check",    text: "Free Estimates" },
  { icon: "language", text: "Bilingual Service" },
  { icon: "home",     text: "Family Owned" },
  { icon: "clock",    text: "Fast Scheduling" },
  { icon: "users",    text: "500+ Customers" },
  { icon: "truck",    text: "Full Cleanup Included" },
  { icon: "shield",   text: "Licensed & Insured" },
  { icon: "star",     text: "5-Star Rated" },
  { icon: "check",    text: "Free Estimates" },
  { icon: "language", text: "Bilingual Service" },
  { icon: "home",     text: "Family Owned" },
  { icon: "clock",    text: "Fast Scheduling" },
  { icon: "users",    text: "500+ Customers" },
  { icon: "truck",    text: "Full Cleanup Included" },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Parse number from value string like "10+", "500+", "5.0", "100%"
  const numMatch = value.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, "");
  const isDecimal = value.includes(".");
  const displayCount = useCountUp(isDecimal ? num * 10 : num, active, 1400);
  const displayVal = isDecimal ? (displayCount / 10).toFixed(1) : displayCount;

  return (
    <div ref={ref} className="text-center">
      <div className="count-up font-display text-3xl font-extrabold text-white sm:text-4xl">
        {active ? `${displayVal}${suffix}` : value}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-gold-100 sm:text-sm">
        {label}
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 shadow-gold-glow" aria-label="Social proof statistics">
      {/* Stats row */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Rating row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/20 pt-5">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-current text-white" />
            ))}
            <span className="ml-1 text-sm font-bold text-white">5.0</span>
            <span className="text-sm font-medium text-gold-50">rated by Riverside County homeowners</span>
          </div>
          <div className="hidden h-4 w-px bg-white/30 sm:block" />
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-sm font-semibold text-white">
              <Icon name="shield" className="h-4 w-4" /> Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-white">
              <Icon name="language" className="h-4 w-4" /> Bilingual
            </span>
            <span className="flex items-center gap-1 text-sm font-semibold text-white">
              <Icon name="check" className="h-4 w-4" /> Free Estimates
            </span>
          </div>
        </div>
      </div>

      {/* Scrolling trust marquee */}
      <div className="overflow-hidden border-t border-white/20 bg-gold-700/30 py-2.5">
        <div className="marquee-inner gap-0">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="mx-5 flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90"
            >
              <Icon name={item.icon} className="h-3.5 w-3.5 text-gold-200" />
              {item.text}
              <span className="mx-3 text-white/30">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
