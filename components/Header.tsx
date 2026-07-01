"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/lib/site-config";
import Icon from "./Icon";
import { services } from "@/lib/services-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100 ${
        isScrolled ? "py-3" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group relative z-10 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-accent-600 transition-colors">
            {site.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:gap-x-8 items-center">
          <Link href="/services" className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors">
            Services
          </Link>
          <Link href="/#gallery" className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors">
            Portfolio
          </Link>
          <Link href="/#reviews" className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors">
            Reviews
          </Link>
          <Link href="/#about" className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Call Now Button */}
        <div className="hidden lg:flex items-center gap-4 z-10">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center bg-accent-600 text-white font-semibold py-2.5 px-6 rounded hover:bg-accent-700 transition-colors duration-200"
          >
            <Icon name="phone" className="h-4 w-4 mr-2" />
            Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden z-10">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            <Icon name={mobileMenuOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-4 pt-4 pb-6 space-y-4 z-40">
          <Link
            href="/services"
            className="block w-full text-left font-semibold text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#gallery"
            className="block w-full text-left font-semibold text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/#reviews"
            className="block w-full text-left font-semibold text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="/#about"
            className="block w-full text-left font-semibold text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <a
            href={site.phoneHref}
            className="mt-4 flex w-full items-center justify-center rounded bg-accent-600 px-4 py-3 text-sm font-semibold text-white shadow-sm"
          >
            <Icon name="phone" className="h-4 w-4 mr-2" />
            Call {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
