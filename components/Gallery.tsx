export default function Gallery() {
  const projects = [
    "/images/proj_1.png",
    "/images/proj_2.png",
    "/images/proj_3.png",
    "/images/proj_4.png",
    "/images/proj_5.png",
    "/images/proj_6.png",
  ];

  return (
    <section id="gallery" className="bg-surface-50 section-padding border-t border-gray-100">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-lg text-gray-600">
            Take a look at some of our recent Magnolia tree trimming, sod installations, and complete garden redesigns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((src, i) => (
            <div key={i} className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
              <img
                src={src}
                alt={`Recent landscaping project ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
