import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Text content */}
          <div className="mb-12 lg:mb-0 relative z-10 lg:-mr-12">
            <div className="bg-white/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative">
              <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-brand-600"></span>
                About Maria's Landscaping
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Over 10 years of dedication to transforming properties across <span className="text-brand-600">Riverside County</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Maria's Landscaping brings both technical arboriculture expertise and an artist's eye to every residential and commercial project. 
                </p>
                <p>
                  We are fully licensed and insured, ensuring that every job, whether it's delicate Magnolia tree pruning or a complete yard overhaul, is executed with the highest standards of safety and professionalism. 
                </p>
                <p className="font-medium text-gray-900 border-l-4 border-brand-500 pl-4 italic">
                  "Our bilingual English-Spanish team takes pride in clear communication, reliability, and our unwavering commitment to our local community."
                </p>
              </div>
              
              <Link href="/#contact" className="btn-secondary group">
                Work With Us 
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Image (Overlaps left text slightly on desktop) */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="/images/team_maintenance.png"
              alt="Professional landscaping team working on property maintenance"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            
            {/* Overlay stats badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 text-brand-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">10+</div>
                  <div className="text-brand-100 text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
