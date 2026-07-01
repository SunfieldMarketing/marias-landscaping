import Link from "next/link";
import { site } from "@/lib/site-config";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[600px] flex items-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=2000&auto=format&fit=crop"
          alt="Beautiful landscaping in Riverside County"
          className="h-full w-full object-cover object-center opacity-60"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">
          
          {/* Left Text */}
          <div className="max-w-2xl lg:max-w-xl text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Professional Tree &amp; Landscape Solutions in {site.county}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
              Specializing in magnolia and palm, safe removal, and custom landscaping. Get your free estimate today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md lg:shrink-0 mt-8 lg:mt-0">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
