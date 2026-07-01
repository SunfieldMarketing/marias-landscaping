"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import Icon from "./Icon";

const navLinks = [
  { href: "/#services",      label: "Services" },
  { href: "/#why-us",        label: "Why Us" },
  { href: "/#service-area",  label: "Service Area" },
  { href: "/#testimonials",  label: "Reviews" },
  { href: "/#faq",           label: "FAQ" },
  { href: "/#contact",       label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink-900/10 bg-white/95 shadow-elevation-1 backdrop-blur-lg"
            : "border-b border-transparent bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Maria's Landscaping home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sage-500 to-ink-700 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
              <Icon name="leaf" className="h-5 w-5" />
            </span>
            <span className="font-display leading-tight text-ink-900">
              <span className="block text-sm font-extrabold sm:text-base">Maria&apos;s Landscaping</span>
              <span className="block text-[11px] font-semibold text-ink-500 sm:text-xs">&amp; Tree Service</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="/#services"
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-ink-800 transition hover:bg-ink-50 hover:text-ink-600"
              >
                Services
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-ink-400" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                </svg>
              </a>
              {/* Dropdown */}
              <div className={`absolute left-0 top-full z-50 mt-1 w-64 rounded-2xl border border-ink-100 bg-white py-2 shadow-elevation-3 transition-all duration-200 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-400">Our Services</div>
                {services.slice(0, 8).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-ink-700 transition hover:bg-gold-50 hover:text-gold-700"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Icon name={s.icon} className="h-4 w-4 text-gold-500" />
                    {s.title}
                  </Link>
                ))}
                <div className="mx-3 my-1 border-t border-ink-100" />
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gold-600 hover:text-gold-700"
                  onClick={() => setServicesOpen(false)}
                >
                  View All Services
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-ink-800 transition hover:bg-ink-50 hover:text-ink-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={site.smsHref}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-300 px-4 py-2 text-sm font-semibold text-ink-800 transition hover:bg-ink-50"
            >
              <Icon name="sms" className="h-4 w-4" />
              Text Us
            </a>
            <a
              href={site.phoneHref}
              className="shimmer-btn inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2 text-sm font-bold text-white shadow-gold-glow-sm transition hover:bg-gold-600 hover:shadow-gold-glow"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 transition hover:bg-ink-100 lg:hidden"
          >
            <span className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}>
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </span>
          </button>
        </div>

        {/* Mobile trust bar */}
        <div className="flex items-center justify-center gap-3 border-t border-ink-900/5 bg-gold-50 px-4 py-1.5 lg:hidden">
          {["Licensed & Insured", "Free Estimates", "Bilingual"].map((t) => (
            <span key={t} className="flex items-center gap-1 text-[10px] font-semibold text-gold-800">
              <Icon name="check" className="h-3 w-3 text-gold-600" />
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[300px] flex-col bg-white shadow-elevation-3 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-100 p-4">
          <span className="font-display text-base font-bold text-ink-900">Menu</span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-ink-600 hover:bg-ink-100"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center border-b border-ink-50 py-3.5 text-sm font-semibold text-ink-800 hover:text-gold-600"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-ink-400">Our Services</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 border-b border-ink-50 py-2.5 text-sm text-ink-700 hover:text-gold-600"
              >
                <Icon name={s.icon} className="h-4 w-4 text-gold-500" />
                {s.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="border-t border-ink-100 p-4 space-y-3">
          <a
            href={site.smsHref}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-300 py-3 text-sm font-bold text-ink-800 hover:bg-ink-50"
          >
            <Icon name="sms" className="h-4 w-4" />
            Text Us
          </a>
          <a
            href={site.phoneHref}
            className="shimmer-btn flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 py-3 text-sm font-bold text-white hover:bg-gold-600"
          >
            <Icon name="phone" className="h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </>
  );
}
