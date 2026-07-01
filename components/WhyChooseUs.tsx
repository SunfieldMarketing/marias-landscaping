export default function WhyChooseUs() {
  const features = [
    {
      title: "Local Expertise",
      desc: "Deep knowledge of Riverside County's climate and optimal plant health.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    },
    {
      title: "Magnolia Specialists",
      desc: "Expert pruning and care tailored specifically for delicate Magnolia trees.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
    },
    {
      title: "Free Estimates",
      desc: "Transparent, up-front pricing with no hidden fees. Consultations are always on us.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      title: "Reliable Scheduling",
      desc: "Prompt arrivals and consistent service schedules give you peace of mind.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Cool decorative background patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-700/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-accent-700/10 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 mb-16 lg:mb-0">
            <h2 className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-white">
              Dedicated to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-100">Excellence</span>
            </h3>
            <p className="text-brand-100 text-lg leading-relaxed mb-8">
              We don't just maintain landscapes; we elevate them. With over a decade of hands-on experience, we provide unmatched quality and reliability for every project, big or small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Get Your Free Quote
              </a>
              <a href="tel:4422810394" className="btn-secondary text-center bg-white/10 text-white hover:bg-white/20 border-white/10">
                Call (442) 281-0394
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-brand-800/50 backdrop-blur-sm border border-brand-700 p-8 rounded-3xl hover:bg-brand-800 hover:border-brand-600 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-brand-700 text-brand-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-brand-100 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
