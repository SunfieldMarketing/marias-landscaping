import Icon from "./Icon";

export default function TrustBar() {
  const stats = [
    { label: "Years in Business", value: "15+", icon: "clock" },
    { label: "Completed Projects", value: "500+", icon: "check" },
    { label: "5-Star Ratings", value: "120+", icon: "star" },
    { label: "Satisfaction Guarantee", value: "100%", icon: "shield" },
  ];

  return (
    <div className="bg-brand-950 text-white py-6 border-b border-brand-900 shadow-xl relative z-20 -mt-2">
      <div className="container-wide">
        <div className="flex flex-wrap justify-between items-center gap-6 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 flex-1 min-w-[200px] justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-accent-400 border border-white/5">
                <Icon name={stat.icon as any} className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-xl lg:text-2xl text-white tracking-tight leading-none">{stat.value}</div>
                <div className="text-xs font-semibold text-brand-300 uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
