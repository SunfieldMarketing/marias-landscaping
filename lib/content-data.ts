export const testimonials = [
  {
    name: "Denise R.",
    location: "Hemet, CA",
    rating: 5,
    text: "Maria's crew transformed our backyard in two days. Professional, on time, and the cleanup was spotless. Highly recommend for anyone in the Hemet area.",
  },
  {
    name: "Carlos M.",
    location: "San Jacinto, CA",
    rating: 5,
    text: "We had three huge palm trees that needed trimming and it was done safely and fast. Fair pricing and they spoke Spanish with my parents which meant a lot.",
  },
  {
    name: "Jennifer T.",
    location: "Menifee, CA",
    rating: 5,
    text: "Best landscaping company we've used in Riverside County. They redesigned our front yard with drought-tolerant plants and it looks incredible.",
  },
  {
    name: "Steve A.",
    location: "Perris, CA",
    rating: 5,
    text: "Called for an emergency tree removal after a windstorm and they showed up the next morning. Great communication and very fair quote.",
  },
  {
    name: "Maria G.",
    location: "Winchester, CA",
    rating: 5,
    text: "We use them for bi-weekly lawn maintenance and it's the first company that actually shows up consistently. Yard always looks great.",
  },
  {
    name: "Robert L.",
    location: "Lake Elsinore, CA",
    rating: 5,
    text: "Stump grinding was quick and they left the area cleaner than before they arrived. Will be calling them for our next project too.",
  },
  {
    name: "Angela P.",
    location: "Murrieta, CA",
    rating: 5,
    text: "We got quotes from four companies and Maria's was the most thorough and fairly priced. The paver patio they installed looks incredible.",
  },
  {
    name: "Thomas W.",
    location: "Temecula, CA",
    rating: 5,
    text: "Our sprinkler system had leaks for months. They diagnosed it in one visit and fixed it the same day. Wish we'd called sooner.",
  },
  {
    name: "Lupe H.",
    location: "Moreno Valley, CA",
    rating: 5,
    text: "Excelente servicio. Nos explicaron todo en español y el trabajo quedó impecable. Muy recomendados.",
  },
  {
    name: "Brian K.",
    location: "Beaumont, CA",
    rating: 5,
    text: "Full yard cleanup after we bought a neglected property. They hauled off years of debris and it looks like a completely different lot now.",
  },
  {
    name: "Nicole S.",
    location: "Banning, CA",
    rating: 5,
    text: "Switched to their bi-weekly maintenance plan and it's been the easiest home service decision we've made. Consistent, professional, done right.",
  },
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve all of Riverside County including Hemet, San Jacinto, Menifee, Winchester, Perris, Murrieta, Temecula, Lake Elsinore, Beaumont, Banning, and Moreno Valley. Not sure if we cover your area? Give us a call.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes, every job starts with a free, no-obligation estimate. We'll walk your property, understand what you need, and provide clear pricing before any work begins.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Maria's Landscaping & Tree Service is fully licensed and insured for both landscaping and tree service work, protecting your property and giving you peace of mind.",
  },
  {
    question: "Do you speak Spanish?",
    answer:
      "Sí. Our team is fully bilingual in English and Spanish, so you can discuss your project comfortably in whichever language you prefer.",
  },
  {
    question: "How quickly can you schedule a job?",
    answer:
      "For most standard landscaping and tree service work, we can typically schedule within a few days. Emergency tree removal is available faster — call us directly for urgent situations.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, check, and most major payment methods. Ask about payment options when you book your free estimate.",
  },
  {
    question: "Do you offer recurring maintenance plans?",
    answer:
      "Yes, we offer weekly, bi-weekly, and monthly lawn care and landscape maintenance plans designed around your property and budget.",
  },
  {
    question: "How far in advance should I book a project?",
    answer:
      "Standard cleanups and maintenance can often be scheduled within the same week. Larger design and installation projects are best booked 1-2 weeks out, especially during spring and fall.",
  },
  {
    question: "Do you provide a written estimate?",
    answer:
      "Yes, every estimate is provided in writing with an itemized breakdown so you know exactly what's included before we start any work.",
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer:
      "Customer satisfaction is our top priority. If anything isn't right, contact us and we'll make it right — that's part of how we've built our reputation across Riverside County.",
  },
];

export const aboutUs = {
  kicker: "About Us",
  heading: "Rooted in Riverside County, Built on Trust",
  paragraphs: [
    "Maria's Landscaping & Tree Service started as a small, family-run crew in Hemet with one simple goal: treat every yard like it was our own. Over a decade later, that same philosophy still guides every estimate, every crew, and every finished project.",
    "We've grown into a full-service landscaping and tree care company, but we've stayed local, hands-on, and personally accountable for the work we do. Our bilingual team communicates clearly in English and Spanish, so every customer — no matter their background — gets the same respect, honesty, and quality.",
    "Today we serve homeowners, property managers, and businesses across all of Riverside County, from routine lawn maintenance to complete landscape transformations and hazardous tree removal. What hasn't changed is the family-owned commitment behind every job.",
  ],
  founderNote: {
    quote:
      "Every property we work on has our name behind it. That's why we never cut corners, and why so many of our customers become repeat customers.",
    name: "Maria, Owner",
  },
  highlights: [
    { label: "Founded", value: "2012" },
    { label: "Based In", value: "Hemet, CA" },
    { label: "Team", value: "Bilingual & Insured" },
    { label: "Coverage", value: "All of Riverside County" },
  ],
};

export type GalleryProject = {
  title: string;
  category: string;
  location: string;
  description: string;
  icon: string;
};

export const galleryProjects: GalleryProject[] = [
  {
    title: "Front Yard Xeriscape Redesign",
    category: "Landscaping Design",
    location: "Hemet, CA",
    description:
      "Full front yard conversion to a drought-tolerant landscape with decorative rock, native plants, and a new paver walkway.",
    icon: "leaf",
  },
  {
    title: "Large Eucalyptus Removal",
    category: "Tree Removal",
    location: "San Jacinto, CA",
    description:
      "Safe removal of a 60-foot hazardous eucalyptus leaning toward a home, including full stump grinding and cleanup.",
    icon: "tree",
  },
  {
    title: "Backyard Paver Patio & Fire Pit",
    category: "Hardscaping",
    location: "Menifee, CA",
    description:
      "Custom paver patio with a seating wall and built-in fire pit, designed for year-round outdoor entertaining.",
    icon: "brick",
  },
  {
    title: "New Sod Installation",
    category: "Sod & Turf",
    location: "Winchester, CA",
    description:
      "Complete backyard sod replacement with regraded soil for even, healthy turf from day one.",
    icon: "sod",
  },
  {
    title: "Palm Tree Skinning & Trimming",
    category: "Palm Tree Trimming",
    location: "Perris, CA",
    description:
      "Fire-hazard frond removal and full trunk skinning on a row of mature Mexican fan palms.",
    icon: "palm",
  },
  {
    title: "Drip Irrigation Overhaul",
    category: "Irrigation",
    location: "Murrieta, CA",
    description:
      "Replaced an outdated sprinkler system with a smart-controller drip irrigation setup across all planter beds.",
    icon: "drop",
  },
];

export const whyChooseUs = [
  {
    title: "Locally Owned & Family Operated",
    description:
      "Based in Hemet and rooted in Riverside County, we treat every property like it's in our own neighborhood — because it is.",
    icon: "home",
  },
  {
    title: "Bilingual Team",
    description:
      "Our crew communicates fluently in English and Spanish so every customer gets clear, comfortable communication.",
    icon: "chat",
  },
  {
    title: "Licensed & Insured",
    description:
      "Full licensing and insurance coverage on every job protects your property and gives you total peace of mind.",
    icon: "shield",
  },
  {
    title: "Free, No-Pressure Estimates",
    description:
      "We'll walk your property and give you an honest, detailed quote — no pressure, no gimmicks.",
    icon: "clipboard",
  },
  {
    title: "Reliable & On Time",
    description:
      "We show up when we say we will, every time — from a one-time cleanup to ongoing maintenance plans.",
    icon: "clock",
  },
  {
    title: "Full-Service Capability",
    description:
      "From tree removal to full landscape design, we're a true one-stop shop for outdoor property care.",
    icon: "check",
  },
];

export const stats = [
  { value: "10+", label: "Years Serving Riverside County" },
  { value: "500+", label: "Properties Transformed" },
  { value: "5.0", label: "Average Customer Rating" },
  { value: "100%", label: "Licensed & Insured" },
];
