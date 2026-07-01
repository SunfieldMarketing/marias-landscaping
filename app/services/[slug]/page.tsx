import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services-data";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";
import Process from "@/components/Process";
import SlugFAQ from "@/components/SlugFAQ";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Service Not Found" };

  const url = `${site.url}/services/${service.slug}`;

  return {
    title: `${service.title} in ${site.county}, CA`,
    description: `${service.shortDescription} Professional ${service.title.toLowerCase()} by ${site.name}. Free estimates — (442) 281-0394.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.shortDescription,
      url,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Service", "FAQPage"],
    "@id": `${site.url}/services/${service.slug}#service`,
    name: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      image: `${site.url}/favicon.svg`,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.addressLocality,
        addressRegion: site.addressRegion,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.county,
    },
    description: service.shortDescription,
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 80vh Premium Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white border-b border-brand-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/90 to-brand-900/70 backdrop-blur-sm opacity-95" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <Link href="/services" className="inline-flex items-center text-sm font-semibold text-accent-300 hover:text-white transition-colors mb-6 drop-shadow-md">
                <Icon name="arrow" className="mr-2 h-4 w-4 rotate-180" />
                All Services
              </Link>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xl">
                <Icon name={service.icon as any} className="h-8 w-8 text-accent-400" />
              </div>
              <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6 text-white drop-shadow-lg leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-brand-100 mb-8 leading-relaxed drop-shadow-md">
                {service.shortDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href={site.phoneHref} className="btn-primary">
                  <Icon name="phone" className="h-4 w-4 mr-2" />
                  Call {site.phone}
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-accent-500/20 rounded-[2.5rem] blur-2xl"></div>
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 shadow-2xl relative z-10 text-center">
                 <h3 className="text-2xl font-bold mb-2">Request an Estimate</h3>
                 <p className="text-brand-200 text-sm mb-6">Fast, free, and transparent pricing for your {service.title.toLowerCase()} project.</p>
                 <LeadForm theme="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TrustBar Injection */}
      <TrustBar />

      {/* Main Bento Feature Grid */}
      <section className="bg-surface-50 py-20 sm:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
            {/* Primary Detail Card */}
            <div className="lg:col-span-8 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 p-8 sm:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-50 rounded-full blur-3xl -mr-20 -mt-20 transition-colors duration-700"></div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 relative z-10">Why Choose Our {service.title} Services?</h2>
              <div className="text-lg text-gray-600 leading-relaxed relative z-10 mb-8 space-y-4">
                {service.description.map((p, idx) => (
                   <p key={idx}>{p}</p>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Icon name="check" className="w-6 h-6 text-accent-600" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-50 text-accent-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="check" className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 leading-tight">{feature}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Sticky Nav */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 bg-brand-900 rounded-[2.5rem] p-8 shadow-2xl text-white overflow-hidden border border-brand-800">
                <div className="relative z-10">
                  <h3 className="font-bold text-white mb-4 text-xl">Other Services</h3>
                  <ul className="space-y-4">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="group flex items-center text-brand-200 hover:text-white transition-colors">
                          <Icon name="arrow" className="h-4 w-4 mr-3 text-accent-500 group-hover:translate-x-1 transition-transform" />
                          <span className="font-medium">{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-brand-800">
                    <Link href="/services" className="text-sm font-bold text-accent-400 hover:text-accent-300">
                      View all services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Flow Architecture */}
      <Process />
      <SlugFAQ faqs={service.faqs || []} serviceName={service.title} />
      <Testimonials />

      {/* Local SEO Block */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container-wide max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why {site.county} Chooses Us for {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            When it comes to <strong>{service.title.toLowerCase()}</strong> in {site.county}, local homeowners trust {site.name} because of our unwavering commitment to quality, transparent pricing, and extensive local expertise. Whether you're in Hemet, San Jacinto, Menifee, or anywhere in between, we understand the unique climate and soil conditions of Southern California. Our highly-trained crews are fully licensed, bonded, and insured, ensuring that your property is protected every step of the way. Stop settling for unreliable contractors—experience the 5-star difference today.
          </p>
        </div>
      </section>
    </>
  );
}
