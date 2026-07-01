import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} for a free estimate on landscaping and tree services in ${site.county}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white border-b border-brand-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-brand-950 opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-accent-900/20 mix-blend-overlay" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-200 drop-shadow-md">
            Reach out today for your free, no-obligation onsite estimate.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-4 rounded-full text-brand-600 flex-shrink-0">
                    <Icon name="phone" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mb-2">Call or text us directly for the fastest response.</p>
                    <a href={site.phoneHref} className="text-accent-600 font-bold text-lg hover:text-accent-700 transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-4 rounded-full text-brand-600 flex-shrink-0">
                    <Icon name="mapPin" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">
                      Proudly serving {site.addressLocality}, {site.addressRegion} and all surrounding areas in {site.county}.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-4 rounded-full text-brand-600 flex-shrink-0">
                    <Icon name="clock" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed (Emergency Service Available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-400 to-accent-600"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* What To Expect Expansion */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens After I Reach Out?</h2>
            <p className="text-lg text-gray-600">We respect your time. Here is our straightforward process for getting your project started.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-surface-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Response</h4>
              <p className="text-gray-600 text-sm">We will review your request and call you back within 24 hours to discuss your needs.</p>
            </div>
            <div className="p-6 bg-surface-50 rounded-2xl border border-gray-100 relative">
              <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gray-200"></div>
              <div className="w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold text-gray-900 mb-2">Onsite Consultation</h4>
              <p className="text-gray-600 text-sm">We visit your property for a free, no-pressure consultation to take exact measurements.</p>
            </div>
            <div className="p-6 bg-surface-50 rounded-2xl border border-gray-100 relative">
              <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gray-200"></div>
              <div className="w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold text-gray-900 mb-2">Transparent Estimate</h4>
              <p className="text-gray-600 text-sm">You receive a clear, upfront proposal with no hidden fees or surprise charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-[400px] lg:h-[500px] relative border-t border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105994.49841804246!2d-117.0607611!3d33.7475147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6e3bf29c8ab1%3A0x6b8bc2ec96216895!2sHemet%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Service Area Map"
        />
      </div>
    </>
  );
}
