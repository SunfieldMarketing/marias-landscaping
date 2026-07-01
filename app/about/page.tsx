import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import CoreValues from "@/components/CoreValues";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${site.name}'s mission, expertise, and commitment to beautiful landscaping in ${site.county}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white border-b border-brand-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/about_bg.png"
            alt={`About ${site.name}`}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/90 to-brand-900/70 backdrop-blur-sm opacity-95" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl text-white drop-shadow-lg">
            About {site.name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-200 drop-shadow-md">
            Dedicated to transforming outdoor spaces across {site.county} with expert landscaping and professional tree care.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At {site.name}, we believe your outdoor space should be a beautiful, functional extension of your home. For years, our dedicated teams have worked across {site.county} to bring expert landscaping, reliable tree services, and stunning hardscape designs to life.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on our core values: <strong>Integrity, Craftsmanship, and Reliability</strong>. When you hire us, you get a team that shows up on time, respects your property, and delivers results that last.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-xl text-accent-600 flex-shrink-0">
                    <Icon name="check" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Licensed & Insured</h4>
                    <p className="text-sm text-gray-600">Full protection for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-xl text-accent-600 flex-shrink-0">
                    <Icon name="star" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">5-Star Quality</h4>
                    <p className="text-sm text-gray-600">Rated highly by your neighbors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <img src="/images/proj_1.png" alt="Landscaping work" className="rounded-3xl w-full h-full object-cover shadow-lg min-h-[300px]" />
              <img src="/images/proj_5.png" alt="Tree service work" className="rounded-3xl w-full h-full object-cover shadow-lg min-h-[300px]" />
            </div>
          </div>
        </div>
      </section>

      {/* History & Sustainability Expansion */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* History */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center">
                  <Icon name="clock" className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Local Roots</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Born and raised in the heart of Riverside County, we didn't just build a business here—we built our lives here. We started with a single truck, a few tools, and a relentless commitment to doing honest work.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we have grown into one of the most trusted names in Southern California landscaping and tree care. While our fleet and capabilities have expanded, our core promise remains exactly the same: <strong>treat every customer's yard as if it were our own.</strong>
              </p>
            </div>

            {/* Sustainability */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center">
                  <Icon name="leaf" className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Commitment to Sustainability</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Living in Southern California means we must be stewards of our water and our environment. We specialize in <strong>drought-tolerant designs, native plant integration, and smart irrigation systems</strong> that drastically reduce water usage without sacrificing beauty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Furthermore, our tree removal and pruning processes prioritize responsible green waste recycling. The wood and brush we clear are chipped and repurposed as nutrient-rich mulch, returning organic matter back to the earth instead of a landfill.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Massive Expansion Elements */}
      <CoreValues />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
