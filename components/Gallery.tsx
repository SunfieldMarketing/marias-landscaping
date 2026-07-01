export default function Gallery() {
  const projects = [
    { src: "/images/proj_1.png", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/proj_2.png", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/proj_3.png", span: "md:col-span-1 md:row-span-1" },
    { src: "/images/proj_4.png", span: "md:col-span-1 md:row-span-2" },
    { src: "/images/proj_5.png", span: "md:col-span-2 md:row-span-1" },
    { src: "/images/proj_6.png", span: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our Recent Projects</h3>
          <p className="text-lg text-gray-600">
            Take a look at some of our recent Magnolia tree trimming, sod installations, and complete garden redesigns.
          </p>
        </div>

        {/* Asymmetric Bento/Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {projects.map((proj, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-2xl bg-gray-100 group cursor-pointer ${proj.span}`}
            >
              <img
                src={proj.src}
                alt={`Landscaping project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
