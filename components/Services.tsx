import Link from 'next/link';
import { services } from '@/lib/services-data';
import Icon from './Icon';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Tree & Landscape Solutions</h3>
          <p className="text-lg text-gray-600">
            From structural tree care to elegant landscape design, we bring over 10 years of experience to ensure your property remains beautiful and thriving. Explore all our specialized services below.
          </p>
        </div>

        {/* 10-item comprehensive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Make the first two services span 2 columns on larger screens for visual interest
            const colSpan = (index === 0 || index === 1) ? 'xl:col-span-2' : 'col-span-1';
            
            return (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`} 
                className={`group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm block ${colSpan} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-200`}
              >
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="w-12 h-12 bg-green-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                      <Icon name={service.icon} className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-accent-600 text-sm font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    Learn More 
                    <Icon name="arrow" className="w-4 h-4 ml-2" />
                  </div>
                </div>
                
                {/* Decorative background accent on hover */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-brand-50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  );
}
