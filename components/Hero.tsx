import Link from "next/link";
import { site } from "@/lib/site-config";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-900 text-white overflow-hidden">
      {/* Background Image & Slate Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.png"
          alt="Beautiful landscaping in Riverside County"
          className="h-full w-full object-cover object-center"
        />
        {/* Deep Slate Overlay for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/40 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent-500/20 border border-accent-400/30 text-accent-300 font-semibold text-sm mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Top Rated in Riverside County
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
              Professional Tree & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">Landscape Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-200 mb-8 max-w-2xl leading-relaxed font-medium">
              Specializing in Magnolia tree care, safe removal, and custom landscaping. Get your free estimate today and transform your outdoor space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary text-center group relative overflow-hidden bg-accent-600 hover:bg-accent-700">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </a>
              <a href="tel:4422810394" className="bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-md transition-all border border-white/10 backdrop-blur-md text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (442) 281-0394
              </a>
            </div>
          </div>

          {/* Right Lead Form - Modern Floating White Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-accent-500/20 rounded-3xl blur-2xl group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-extrabold text-brand-900 mb-2">Request a Free Estimate</h3>
              <p className="text-gray-500 text-sm mb-6 font-medium">Fill out the form below and we'll get back to you shortly.</p>
              <LeadForm theme="light" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
