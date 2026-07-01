import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services-data";
import { site } from "@/lib/site-config";
import Icon from "@/components/Icon";
import LeadForm from "@/components/LeadForm";

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
      
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-brand-900 text-white border-b border-brand-800">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero_bg.png"
            alt={service.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/90 to-brand-900/70 backdrop-blur-sm opacity-95" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <Link href="/services" className="inline-flex items-center text-sm font-semibold text-brand-300 hover:text-white transition-colors mb-6 drop-shadow-md">
                <Icon name="arrow" className="mr-2 h-4 w-4 rotate-180" />
                All Services
              </Link>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-600 mb-6 shadow-xl">
                <Icon name={service.icon} className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-6 text-white drop-shadow-lg">
                {service.title}
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed drop-shadow-md">
                {service.shortDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href={site.phoneHref} className="btn-primary">
                  <Icon name="phone" className="h-4 w-4 mr-2" />
                  Call {site.phone}
                </a>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white p-1 rounded-lg shadow-xl">
                <img
                  src="/images/service_tree.png"
                  alt={service.title}
                  className="w-full h-80 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded p-8 sm:p-10 shadow-sm border border-gray-100 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  {service.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start bg-white p-4 rounded border border-gray-100 shadow-sm">
                      <Icon name="check" className="h-5 w-5 text-accent-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24">
                <LeadForm />
                
                <div className="mt-8 bg-brand-50 p-6 rounded border border-brand-100">
                  <h3 className="font-bold text-gray-900 mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="group flex items-center text-gray-700 hover:text-accent-600 transition-colors">
                          <Icon name="arrow" className="h-4 w-4 mr-2 text-brand-300 group-hover:text-accent-600" />
                          <span className="font-medium">{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-brand-200">
                    <Link href="/services" className="text-sm font-bold text-accent-600 hover:text-accent-700">
                      View all services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
