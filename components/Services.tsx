import Link from 'next/link';
import { services } from '@/lib/services-data';
import Icon from './Icon';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <h2 className="text-accent-500 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-900 mb-6 tracking-tight">Comprehensive Tree & Landscape Solutions</h3>
          <p className="text-xl text-gray-600 font-medium">
            From structural tree care to elegant landscape design, we bring over 10 years of experience to ensure your property remains beautiful and thriving.
          </p>
        </div>

        {/* 10-item Highly Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[280px]">
          {services.map((service, index) => {
            // Bento sizing
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge ? 'md:col-span-2 xl:col-span-2' : 'col-span-1';
            
            // Assign background images (cycling through our available images)
            const bgImageIndex = (index % 6) + 1;
            const bgImage = `/images/proj_${bgImageIndex}.png`;

            return (
              <Link 
                key={service.slug}
                href={`/services/${service.slug}`} 
                className={`group relative overflow-hidden rounded-[2rem] block ${colSpan} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-500/20`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={bgImage} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Heavy dark slate gradient overlay to ensure perfect white text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-900/80 to-brand-900/40 opacity-90 group-hover:opacity-95 transition-opacity"></div>
                </div>

                <div className="p-8 h-full flex flex-col justify-end relative z-10">
                  <div className="absolute top-8 left-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-accent-300 rounded-2xl flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500 group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <Icon name={service.icon} className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                      {service.title}
                    </h4>
                    <p className={`text-brand-100 text-sm leading-relaxed drop-shadow-sm font-medium ${isLarge ? 'line-clamp-3 mb-4' : 'line-clamp-2 mb-4'} opacity-80 group-hover:opacity-100 transition-opacity`}>
                      {service.shortDescription}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-accent-400 text-sm font-bold uppercase tracking-widest group-hover:text-accent-300 group-hover:translate-x-2 transition-all duration-300">
                    Explore Service 
                    <Icon name="arrow" className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  );
}
