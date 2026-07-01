import Icon from "./Icon";

export default function Process() {
  const steps = [
    {
      title: "1. Free Consultation",
      description: "We meet onsite to evaluate your property, understand your vision, and take exact measurements.",
      icon: "phone",
    },
    {
      title: "2. Custom Design & Estimate",
      description: "You receive a detailed, transparent proposal covering all costs, materials, and expected timelines.",
      icon: "fileText",
    },
    {
      title: "3. Professional Execution",
      description: "Our licensed, fully insured crews arrive on time and work efficiently to transform your space.",
      icon: "check",
    },
    {
      title: "4. Final Walkthrough",
      description: "We don't leave until you are 100% satisfied. We clean the site completely and review the work together.",
      icon: "star",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-accent-600 tracking-wide uppercase mb-2">How It Works</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Proven 4-Step Process</h3>
          <p className="text-lg text-gray-600">
            We make landscaping and tree care simple, transparent, and completely stress-free. Here is exactly what to expect when you hire us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gray-100 z-0 border-t-2 border-dashed border-gray-200" style={{ width: '75%', left: '12.5%' }}></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-surface-50 border-4 border-white shadow-xl rounded-full flex items-center justify-center mb-6 text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <Icon name={step.icon as any} className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
