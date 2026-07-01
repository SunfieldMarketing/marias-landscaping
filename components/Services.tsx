import Link from 'next/link';


export default function Services() {
  const featuredServices = [
    {
      title: "Professional Tree Services",
      image: "/images/service_tree.png",
      href: "/services/tree-trimming-removal",
      colSpan: "lg:col-span-2",
      rowSpan: "lg:row-span-2",
      desc: "Complete tree care including pruning, safe removal, and emergency services."
    },
    {
      title: "Custom Landscaping",
      image: "/images/service_landscape.png",
      href: "/services/landscaping-design-installation",
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      desc: "Beautiful, drought-tolerant designs."
    },
    {
      title: "Routine Maintenance",
      image: "/images/proj_1.png", // reusing a nice landscape photo for maintenance
      href: "/services/lawn-care-maintenance",
      colSpan: "lg:col-span-1",
      rowSpan: "lg:row-span-1",
      desc: "Keep your yard pristine year-round."
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Premium Services tailored to your property</h3>
          <p className="text-lg text-gray-600">
            From structural tree care to elegant landscape design, we bring years of experience to ensure your property remains beautiful and thriving.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {featuredServices.map((service, index) => (
            <Link 
              key={index}
              href={service.href} 
              className={`group relative overflow-hidden rounded-3xl bg-gray-900 shadow-xl border border-gray-200/50 block ${service.colSpan} ${service.rowSpan} transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/20`}
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />
                {/* Upgraded Strong Gradient overlay for perfect legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-transparent group-hover:via-gray-900/40 transition-colors duration-500" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-brand-500/20 backdrop-blur-md p-2 rounded-full border border-brand-400/30">
                      <svg className="w-5 h-5 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white tracking-tight">{service.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="btn-primary inline-flex items-center gap-2 relative overflow-hidden group">
            <span className="relative z-10">View All Services</span>
            <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </Link>
        </div>

      </div>
    </section>
  );
}
