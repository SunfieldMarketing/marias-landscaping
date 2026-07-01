export default function Gallery() {
  const projects = [
    "https://images.unsplash.com/photo-1558904541-efa843a96f09?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605810731174-839556843477?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628148906969-95e542cc7d67?q=80&w=800&auto=format&fit=crop",
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
