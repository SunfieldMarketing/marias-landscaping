export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Local Expertise",
      desc: "Deep knowledge of Riverside County's climate and optimal plant health.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      bg: "bg-surface-50",
      border: "border-gray-100"
    },
    {
      title: "Magnolia Specialists",
      desc: "Expert pruning and care tailored specifically for delicate Magnolia trees.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
      ),
      bg: "bg-brand-900 text-white",
      border: "border-brand-800",
      iconBg: "bg-brand-800",
      iconColor: "text-brand-300"
    },
    {
      title: "Free Estimates",
      desc: "Transparent, up-front pricing with no hidden fees. Consultations are always on us.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      bg: "bg-white",
      border: "border-gray-100"
    },
    {
      title: "Reliable Scheduling",
      desc: "Prompt arrivals and consistent service schedules give you peace of mind.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ),
      bg: "bg-brand-50",
      border: "border-brand-100",
      iconBg: "bg-brand-100",
      iconColor: "text-brand-600"
    }
  ];

  return (
    <section className="py-24 bg-surface-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Why Choose Us</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Dedicated to Excellence</h3>
        </div>

        {/* 2x2 Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const isDark = reason.bg.includes('bg-brand-900');
            return (
              <div 
                key={index}
                className={`${reason.bg} border ${reason.border} rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden`}
              >
                {/* Decorative background glow for dark card */}
                {isDark && (
                  <div className="absolute -inset-24 bg-gradient-to-br from-brand-700 to-transparent opacity-20 rounded-full blur-3xl"></div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 duration-300
                  ${reason.iconBg ? reason.iconBg : (isDark ? 'bg-brand-800' : 'bg-green-50')}
                  ${reason.iconColor ? reason.iconColor : (isDark ? 'text-brand-400' : 'text-brand-500')}
                `}>
                  {reason.icon}
                </div>
                
                <h4 className={`text-xl font-bold mb-3 relative z-10 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {reason.title}
                </h4>
                
                <p className={`relative z-10 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
