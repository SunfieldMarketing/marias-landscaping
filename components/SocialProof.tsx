export default function SocialProof() {
  const badges = [
    { text: "Licensed & Insured", icon: "✓" },
    { text: "Over 10 Years Experience", icon: "⭐" },
    { text: "Free Estimates", icon: "✓" },
    { text: "Bilingual Service", icon: "🗣️" },
    { text: "Top Rated on Yelp", icon: "⭐" },
    { text: "Riverside County Locals", icon: "📍" },
  ];

  return (
    <section className="bg-brand-900 border-y border-brand-800 py-4 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-brand-900 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-brand-900 to-transparent"></div>
      
      <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:animate-[marquee_25s_linear_infinite_paused]">
        {/* Double the array for seamless infinite loop */}
        {[...badges, ...badges, ...badges].map((badge, index) => (
          <div key={index} className="flex items-center space-x-2 mx-8 text-brand-100 whitespace-nowrap">
            <span className="text-accent-400 font-bold">{badge.icon}</span>
            <span className="font-semibold text-sm sm:text-base tracking-wide">{badge.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
