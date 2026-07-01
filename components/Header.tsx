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
          
          {/* Services Dropdown */}
          <div className="relative group">
            <Link href="/services" className="flex items-center text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors py-4">
              Services
              <Icon name="chevronDown" className="ml-1 w-4 h-4 text-gray-400 group-hover:text-accent-600 transition-transform group-hover:rotate-180" />
            </Link>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
              <div className="p-4 grid grid-cols-2 gap-x-2 gap-y-1">
                {services.map(service => (
                  <Link 
                    key={service.slug} 
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-50 transition-colors group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-50 flex items-center justify-center text-accent-600 group-hover/link:bg-accent-500 group-hover/link:text-white transition-colors">
                      <Icon name={service.icon} className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 line-clamp-1">{service.title}</span>
                  </Link>
                ))}
              </div>
              <div className="bg-surface-50 p-4 border-t border-gray-100 text-center">
                <Link href="/services" className="text-sm font-bold text-accent-600 hover:text-accent-700">
                  View All Services &rarr;
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-700 hover:text-accent-600 transition-colors">
            Contact
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-4 pt-4 pb-6 space-y-4 z-40 max-h-[80vh] overflow-y-auto">
          
          <div className="border-b border-gray-100 pb-2 mb-2">
            <Link
              href="/services"
              className="block w-full text-left font-bold text-gray-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services (View All)
            </Link>
            <div className="pl-4 border-l-2 border-brand-100 space-y-2 mt-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-gray-600 hover:text-accent-600 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="block w-full text-left font-semibold text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          
          <Link
            href="/contact"
            className="block w-full text-left font-semibold text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
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
