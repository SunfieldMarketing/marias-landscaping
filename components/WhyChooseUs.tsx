import Icon from "./Icon";

const reasons = [
  {
    icon: "mapPin",
    title: "Local Expertise",
    desc: "Deep knowledge of Riverside County's climate and optimal plant health.",
  },
  {
    icon: "tree",
    title: "Tree Specialists",
    desc: "Expert pruning and safe removal specifically for large trees and palms.",
  },
  {
    icon: "check",
    title: "Free Estimates",
    desc: "Transparent, up-front pricing and free on-site consultations and quotes.",
  },
  {
    icon: "calendar",
    title: "Reliable Scheduling",
    desc: "Prompt arrivals and consistent service schedules give you absolute peace of mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-50 section-padding border-t border-gray-100">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-surface-100 p-8 rounded flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 mb-6">
                <Icon name={reason.icon as any} className="h-6 w-6 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
