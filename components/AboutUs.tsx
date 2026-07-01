import { aboutUs } from "@/lib/content-data";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Maria&apos;s Landscaping</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                With over 10 years of dedicated experience transforming properties across Riverside County, Maria&apos;s Landscaping brings both technical arboriculture expertise and an artist&apos;s eye to every residential and commercial project.
              </p>
              <p>
                We are fully licensed and insured, ensuring that every job, whether it&apos;s a simple Magnolia tree pruning or a complete yard overhaul, is executed with the highest standards of safety and professionalism. As a bilingual (English and Spanish) team, we pride ourselves on clear communication, reliability, and our unwavering commitment to our local community.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] w-full">
            <img
              src="/images/about_hedges.png"
              alt="Immaculate hedge and landscape maintenance"
              className="absolute inset-0 w-full h-full object-cover object-center shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
