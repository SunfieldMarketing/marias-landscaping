export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah T.",
      location: "Hemet, CA",
      review: "Maria's team completely transformed our backyard. The new stone pathway and drought-tolerant plants are gorgeous. Highly professional and cleaned up perfectly after the job!",
      rating: 5
    },
    {
      name: "Mike R.",
      location: "Riverside, CA",
      review: "We had a massive Magnolia tree that desperately needed pruning. They came in, worked safely, and left the tree looking amazing. The best tree service we've used in the county.",
      rating: 5
    },
    {
      name: "Jessica L.",
      location: "Chino, CA",
      review: "Great landscaping company! Very responsive, gave a fair estimate, and the end result is exactly what we wanted. Our front yard has never looked better.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-surface-50 border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              
              {/* Magic UI inspired subtle background gradient */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-brand-50 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(r.rating)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 text-lg italic mb-8 relative z-10 leading-relaxed">
                "{r.review}"
              </p>
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                  {r.name.charAt(0)}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
