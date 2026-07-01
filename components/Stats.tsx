import Icon from "./Icon";

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: "15+", icon: "clock" },
    { label: "Projects Completed", value: "500+", icon: "check" },
    { label: "5-Star Reviews", value: "120+", icon: "star" },
    { label: "Satisfaction Guarantee", value: "100%", icon: "shield" },
  ];

  return (
    <section className="bg-brand-950 py-12 border-b border-brand-900 relative overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 bg-[url('/images/proj_2.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-900 text-accent-500 mb-4 shadow-inner">
                <Icon name={stat.icon as any} className="w-6 h-6" />
              </div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base font-semibold text-brand-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
