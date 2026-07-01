"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";
import Icon from "./Icon";

export default function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex border-t border-ink-900/10 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.12)] lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Text Now */}
      <a
        href={site.smsHref}
        id="mobile-text-btn"
        aria-label="Text us now"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 border-r border-ink-900/10 bg-ink-50 py-3 text-ink-800 hover:bg-ink-100 transition-colors"
      >
        <Icon name="sms" className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Text Now</span>
      </a>

      {/* Estimate CTA */}
      <a
        href="#contact"
        id="mobile-estimate-btn"
        aria-label="Get a free estimate"
        className="flex flex-1 flex-col items-center justify-center gap-0.5 bg-ink-700 py-3 text-white hover:bg-ink-800 transition-colors"
      >
        <Icon name="clipboard" className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Free Quote</span>
      </a>

      {/* Call Now */}
      <a
        href={site.phoneHref}
        id="mobile-call-btn"
        aria-label="Call us now"
        className="relative flex flex-1 flex-col items-center justify-center gap-0.5 bg-gold-500 py-3 text-white hover:bg-gold-600 transition-colors"
        style={{ animation: "pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
      >
        <span className="absolute left-4 top-3 h-2.5 w-2.5 rounded-full bg-white/70 animate-ping" />
        <Icon name="phone" className="h-5 w-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
      </a>
    </div>
  );
}
