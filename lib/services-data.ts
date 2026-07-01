export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  icon: string;
  heroPoints: string[];
  description: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "tree-trimming-removal",
    title: "Tree Trimming & Removal",
    shortDescription:
      "Expert pruning, shaping, and safe removal for trees of every size.",
    metaDescription:
      "Professional tree trimming and tree removal in Hemet, San Jacinto, Menifee & Riverside County. Licensed crews, free estimates, safe equipment. Call (442) 281-0394.",
    icon: "tree",
    heroPoints: [
      "Certified, insured tree crews",
      "Emergency & storm-damage removal",
      "Full cleanup and debris haul-away",
    ],
    description: [
      "Overgrown, damaged, or dead trees are more than an eyesore — they're a liability. Our tree trimming and removal team handles everything from routine pruning to full removal of large, hazardous trees, all with the proper equipment and insurance to protect your property.",
      "We assess the health and structure of every tree before we start, so you get a plan that keeps healthy trees thriving and removes only what truly needs to come down.",
    ],
    features: [
      "Precision pruning & canopy shaping",
      "Palm tree trimming & skinning",
      "Hazardous & storm-damaged tree removal",
      "Stump grinding after removal",
      "Full debris cleanup and haul-away",
      "Emergency response availability",
    ],
    faqs: [
      {
        question: "How much does tree removal cost in Riverside County?",
        answer:
          "Cost depends on the tree's height, trunk diameter, location, and accessibility. Most residential removals range from a few hundred to a couple thousand dollars. We provide a free, no-obligation estimate before any work begins.",
      },
      {
        question: "Do you handle emergency tree removal after a storm?",
        answer:
          "Yes. We offer emergency response for fallen or hazardous trees threatening a home, fence, or power line throughout Hemet and the surrounding areas.",
      },
      {
        question: "Do I need a permit to remove a tree in Hemet, CA?",
        answer:
          "Some cities and HOAs require permits for certain protected trees. We can help you understand local requirements as part of your free estimate.",
      },
    ],
  },
  {
    slug: "landscaping-design-installation",
    title: "Landscaping Design & Installation",
    shortDescription:
      "Custom front and backyard landscape design built for our climate.",
    metaDescription:
      "Custom landscaping design & installation in Riverside County. Drought-tolerant designs, planting, and full yard transformations. Free estimates — (442) 281-0394.",
    icon: "leaf",
    heroPoints: [
      "Custom designs for any budget",
      "Drought-tolerant, low-water plant palettes",
      "Front yard & backyard transformations",
    ],
    description: [
      "A great landscape does more than look good — it fits the way you live and holds up to Riverside County's heat and dry summers. We design and install complete landscapes, from plant selection to layout, that balance curb appeal with long-term durability.",
      "Whether you're starting from bare dirt or refreshing a tired yard, our team plans every detail so the result is beautiful and easy to maintain.",
    ],
    features: [
      "Custom landscape design & layout",
      "Drought-tolerant & native plant installation",
      "Flower bed & planter design",
      "Decorative rock & mulch beds",
      "Yard grading & drainage solutions",
      "Full front & backyard makeovers",
    ],
    faqs: [
      {
        question: "Do you offer drought-tolerant landscaping?",
        answer:
          "Yes, most of our designs are built around drought-tolerant and native plants suited to Riverside County's climate, helping you save on water while keeping a beautiful yard year-round.",
      },
      {
        question: "Can you work with an existing landscape design?",
        answer:
          "Absolutely. We can build from your own design ideas or start fresh with a custom plan tailored to your property and budget.",
      },
    ],
  },
  {
    slug: "lawn-care-maintenance",
    title: "Lawn Care & Maintenance",
    shortDescription:
      "Reliable mowing, edging, and seasonal lawn programs.",
    metaDescription:
      "Weekly & bi-weekly lawn care and maintenance in Hemet, Menifee, San Jacinto & Riverside County. Mowing, edging, fertilization. Call (442) 281-0394.",
    icon: "grass",
    heroPoints: [
      "Weekly, bi-weekly & monthly plans",
      "Mowing, edging, and blowing",
      "Seasonal fertilization programs",
    ],
    description: [
      "Consistent lawn care keeps your property looking its best all year. Our maintenance programs are built around your schedule, covering everything from mowing and edging to fertilization and weed control.",
      "We treat every property like it's our own, showing up on schedule and leaving your lawn clean, even, and healthy after every visit.",
    ],
    features: [
      "Mowing, edging & line trimming",
      "Fertilization & weed control",
      "Aeration & overseeding",
      "Hedge & shrub trimming",
      "Seasonal cleanups",
      "Recurring maintenance plans",
    ],
    faqs: [
      {
        question: "Do you offer recurring lawn maintenance plans?",
        answer:
          "Yes, we offer weekly, bi-weekly, and monthly maintenance plans customized to your property size and needs.",
      },
      {
        question: "What areas do you provide lawn care in?",
        answer:
          "We provide lawn care throughout Hemet, San Jacinto, Menifee, Winchester, Perris, and the rest of Riverside County.",
      },
    ],
  },
  {
    slug: "yard-cleanup",
    title: "Yard Cleanup & Debris Removal",
    shortDescription:
      "Full property cleanups, brush clearing, and green waste removal.",
    metaDescription:
      "Yard cleanup, brush clearing, and debris removal in Riverside County. Seasonal & one-time cleanups. Fast, reliable service — (442) 281-0394.",
    icon: "broom",
    heroPoints: [
      "One-time or seasonal cleanups",
      "Brush & overgrowth clearing",
      "Fire-hazard weed abatement",
    ],
    description: [
      "Whether you're preparing your property for sale, tackling years of overgrowth, or just need a fresh start, our yard cleanup crews clear brush, leaves, weeds, and debris quickly and thoroughly.",
      "We also handle weed abatement for fire-hazard clearance, a common requirement across many Riverside County communities.",
    ],
    features: [
      "Full property & lot cleanups",
      "Brush & overgrowth clearing",
      "Weed abatement / fire clearance",
      "Leaf & green waste removal",
      "Junk & debris haul-away",
      "Pre-sale property cleanups",
    ],
    faqs: [
      {
        question: "Do you handle weed abatement for fire clearance?",
        answer:
          "Yes, we provide weed abatement services that meet local fire-hazard clearance requirements for residential and vacant lots.",
      },
    ],
  },
  {
    slug: "sod-turf-installation",
    title: "Sod & Turf Installation",
    shortDescription: "New sod installation and artificial turf options.",
    metaDescription:
      "Sod installation and artificial turf installation in Riverside County. Fresh, even lawns installed right. Free estimates — (442) 281-0394.",
    icon: "sod",
    heroPoints: [
      "Fresh sod & synthetic turf",
      "Soil prep & grading included",
      "Even, healthy results",
    ],
    description: [
      "Nothing transforms a yard faster than new sod or turf. We prepare the soil, grade for proper drainage, and lay sod or artificial turf for a lawn that looks great from day one.",
      "For low-maintenance properties, our artificial turf installations give you year-round green without the water bill.",
    ],
    features: [
      "New sod installation",
      "Artificial / synthetic turf",
      "Soil preparation & grading",
      "Irrigation coordination",
      "Lawn renovation & replacement",
    ],
    faqs: [
      {
        question: "Is artificial turf a good option in Riverside County?",
        answer:
          "Yes, artificial turf is a popular choice for our climate since it stays green year-round with minimal water and maintenance.",
      },
    ],
  },
  {
    slug: "irrigation-systems",
    title: "Irrigation & Sprinkler Systems",
    shortDescription: "Sprinkler installation, repair, and drip irrigation.",
    metaDescription:
      "Irrigation and sprinkler system installation & repair in Riverside County. Drip irrigation, timers, and repairs. Call (442) 281-0394.",
    icon: "drop",
    heroPoints: [
      "New sprinkler system installation",
      "Drip irrigation for beds & plants",
      "Repairs & leak diagnostics",
    ],
    description: [
      "An efficient irrigation system keeps your landscape healthy while keeping water bills in check. We install and repair sprinkler systems and drip irrigation lines tailored to your yard's layout.",
      "If your existing system has leaks, broken heads, or uneven coverage, we diagnose the issue and fix it fast.",
    ],
    features: [
      "Sprinkler system installation & repair",
      "Drip irrigation for planters & beds",
      "Smart timer & controller setup",
      "Leak detection & repair",
      "Seasonal system adjustments",
    ],
    faqs: [
      {
        question: "Can you repair an existing sprinkler system?",
        answer:
          "Yes, we diagnose and repair broken heads, leaks, valve issues, and controller problems on existing systems.",
      },
    ],
  },
  {
    slug: "hardscaping-pavers",
    title: "Hardscaping & Pavers",
    shortDescription: "Patios, walkways, retaining walls, and paver design.",
    metaDescription:
      "Hardscaping, paver patios, walkways, and retaining walls in Riverside County. Custom outdoor living spaces. Free estimates — (442) 281-0394.",
    icon: "brick",
    heroPoints: [
      "Paver patios & walkways",
      "Retaining walls & borders",
      "Custom outdoor living spaces",
    ],
    description: [
      "Hardscaping adds structure and function to your outdoor space. We design and install paver patios, walkways, retaining walls, and borders that complement your landscaping and stand up to daily use.",
      "From a simple walkway to a full outdoor living area, we build hardscapes meant to last.",
    ],
    features: [
      "Paver patios & walkways",
      "Retaining walls",
      "Garden borders & edging",
      "Outdoor living space design",
      "Drainage-conscious installation",
    ],
    faqs: [
      {
        question: "How long does a paver patio installation take?",
        answer:
          "Most residential paver patios take a few days to a week depending on size and design complexity. We'll give you a clear timeline with your estimate.",
      },
    ],
  },
  {
    slug: "stump-grinding",
    title: "Stump Grinding",
    shortDescription: "Fast, clean stump removal after tree removal.",
    metaDescription:
      "Stump grinding services in Hemet, Menifee, San Jacinto & Riverside County. Reclaim your yard space. Call (442) 281-0394 for a free estimate.",
    icon: "stump",
    heroPoints: [
      "Grinding for stumps of any size",
      "Reclaim usable yard space",
      "Clean, level finish",
    ],
    description: [
      "Leftover stumps are tripping hazards and magnets for pests. Our stump grinding service removes stumps below grade so you can replant, pave, or simply reclaim the space.",
      "We grind stumps from our own tree removal jobs as well as stumps left behind by others.",
    ],
    features: [
      "Stump grinding, any size",
      "Root flare grinding below grade",
      "Wood chip cleanup or leave-behind",
      "Multiple stump discounts",
    ],
    faqs: [
      {
        question: "Can you grind a stump that wasn't removed by your company?",
        answer:
          "Yes, we grind stumps regardless of who removed the original tree.",
      },
    ],
  },
  {
    slug: "palm-tree-trimming",
    title: "Palm Tree Trimming",
    shortDescription: "Skinning, trimming, and shaping for all palm varieties.",
    metaDescription:
      "Palm tree trimming and skinning services across Riverside County. Safe, clean results for all palm varieties. Call (442) 281-0394.",
    icon: "palm",
    heroPoints: [
      "All palm varieties",
      "Skinning & full trimming",
      "Fire-hazard frond removal",
    ],
    description: [
      "Overgrown palm fronds are a fire hazard and a home for pests. Our crews safely trim and skin palm trees of all heights and varieties, leaving a clean, manicured look.",
      "We use proper climbing and rigging equipment to handle tall palms safely, without risk to your property.",
    ],
    features: [
      "Palm frond trimming",
      "Trunk skinning",
      "Fire-hazard frond removal",
      "Tall palm specialist crews",
    ],
    faqs: [
      {
        question: "How often should palm trees be trimmed?",
        answer:
          "Most palm trees benefit from trimming once or twice a year to remove dead fronds and reduce fire hazard, depending on the variety and growth rate.",
      },
    ],
  },
  {
    slug: "mulching-soil",
    title: "Mulching & Soil Services",
    shortDescription: "Mulch installation and soil amendments for healthy beds.",
    metaDescription:
      "Mulch installation and soil amendment services in Riverside County. Protect plants and improve soil health. Free estimates — (442) 281-0394.",
    icon: "mulch",
    heroPoints: [
      "Bark, rock & mulch installation",
      "Soil amendment & conditioning",
      "Weed barrier installation",
    ],
    description: [
      "Fresh mulch and healthy soil are the foundation of a thriving landscape. We install bark, mulch, or decorative rock and amend soil to help your plants retain moisture and resist weeds.",
      "A well-mulched bed also gives your landscaping a clean, finished look year-round.",
    ],
    features: [
      "Bark & wood mulch installation",
      "Decorative rock installation",
      "Soil amendment & conditioning",
      "Weed barrier fabric installation",
    ],
    faqs: [
      {
        question: "How often should mulch be replaced?",
        answer:
          "Most mulch beds benefit from a fresh layer once a year to maintain moisture retention, weed control, and appearance.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
