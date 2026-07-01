import Icon from "./Icon";

export default function CoreValues() {
  const values = [
    { title: "Integrity", desc: "We never cut corners. Every job is done to code and built to last.", icon: "shield" },
    { title: "Craftsmanship", desc: "We bring an artisan's touch to every hardscape and garden design.", icon: "star" },
    { title: "Reliability", desc: "When we say we will be there, we are there. Punctuality is our promise.", icon: "clock" },
    { title: "Safety", desc: "Tree removal is dangerous. Our fully insured crew prioritizes safety above all.", icon: "check" }
  ];

  return (
    <section className="py-20 bg-surface-50 border-t border-gray-200">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">The Pillars of Our Business</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">These four core values dictate every decision we make and every project we build.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={v.icon as any} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
