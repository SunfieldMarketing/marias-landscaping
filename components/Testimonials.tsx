"use client";

import { testimonials } from "@/lib/content-data";
import Icon from "./Icon";

export default function Testimonials() {
  // Taking a 3 featured testimonials for the grid
  const featured = testimonials.slice(0, 3);

  return (
    <section id="reviews" className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what homeowners across Riverside County have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <div key={i} className="bg-surface-50 p-8 rounded border border-gray-100 shadow-sm flex flex-col">
              <div className="flex text-accent-500 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Icon key={j} name="star" className="h-4 w-4" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 flex-1">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
