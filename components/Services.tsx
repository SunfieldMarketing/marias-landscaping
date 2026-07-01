import Link from "next/link";
import Icon from "./Icon";

export default function Services() {
  return (
    <section id="services" className="bg-surface-50 section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-lg text-gray-600">
            Comprehensive designs for your outdoor spaces, from structural tree removal to elegant landscape design. We bring years of hands-on experience to ensure your property remains safe, beautiful, and thriving year round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Tree Service */}
          <Link href="/services/tree-trimming-removal" className="group relative flex flex-col justify-end h-80 overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=800&auto=format&fit=crop"
                alt="Tree Service"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
            </div>
            <div className="relative p-6 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 mb-4">
                <Icon name="tree" className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Tree Service</h3>
              <p className="text-sm font-semibold flex items-center text-brand-300 group-hover:text-white transition-colors">
                Learn More <Icon name="arrow" className="h-4 w-4 ml-1" />
              </p>
            </div>
          </Link>

          {/* Card 2: Landscaping */}
          <Link href="/services/landscaping-design-installation" className="group relative flex flex-col justify-end h-80 overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=800&auto=format&fit=crop"
                alt="Landscaping"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
            </div>
            <div className="relative p-6 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 mb-4">
                <Icon name="sparkle" className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Landscaping</h3>
              <p className="text-sm font-semibold flex items-center text-brand-300 group-hover:text-white transition-colors">
                Learn More <Icon name="arrow" className="h-4 w-4 ml-1" />
              </p>
            </div>
          </Link>

          {/* Card 3: Maintenance */}
          <Link href="/services/lawn-care-maintenance" className="group relative flex flex-col justify-end h-80 bg-brand-900 p-6 text-white transition-colors hover:bg-brand-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 mb-auto mt-2">
              <Icon name="check" className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Maintenance</h3>
              <p className="text-sm text-brand-100 mb-6 leading-relaxed">
                Comprehensive ongoing care, precise mowing, edging, and detail irrigation management designed to keep your property consistently pristine.
              </p>
              <p className="text-sm font-semibold flex items-center text-brand-300 group-hover:text-white transition-colors">
                Learn More <Icon name="arrow" className="h-4 w-4 ml-1" />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
