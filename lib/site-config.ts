export const site = {
  name: "Maria's Landscaping & Tree Service",
  shortName: "Maria's Landscaping & Tree Service",
  tagline: "Riverside County's Trusted Landscaping & Tree Care Experts",
  description:
    "Family-owned landscaping and tree service serving Hemet, San Jacinto, Menifee and all of Riverside County, CA. Bilingual crews, free estimates, and reliable, professional results on every job.",
  url: "https://www.marialandscapingtreeservice.com",
  phone: "(442) 281-0394",
  phoneHref: "tel:+14422810394",
  smsHref: "sms:+14422810394",
  email: "info@marialandscapingtreeservice.com",
  addressLocality: "Hemet",
  addressRegion: "CA",
  addressCountry: "US",
  county: "Riverside County",
  hours: [
    { day: "Monday - Friday", time: "7:00 AM - 6:00 PM" },
    { day: "Saturday", time: "8:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Closed (Emergency tree service available)" },
  ],
  languages: ["English", "Español"],
  social: {
    facebook: "https://www.facebook.com/",
  },
  founded: 2012,
  latitude: 33.7475,
  longitude: -116.9719,
  serviceRadiusMiles: 35,
};

export type City = {
  name: string;
  zips: string[];
};

export const serviceAreaCities: City[] = [
  { name: "Hemet", zips: ["92543", "92544", "92545", "92546"] },
  { name: "San Jacinto", zips: ["92581", "92582", "92583"] },
  { name: "Menifee", zips: ["92584", "92585", "92586"] },
  { name: "Winchester", zips: ["92596"] },
  { name: "Homeland", zips: ["92548"] },
  { name: "Idyllwild", zips: ["92549"] },
  { name: "Perris", zips: ["92570", "92571", "92572"] },
  { name: "Sun City", zips: ["92585", "92586"] },
  { name: "Murrieta", zips: ["92562", "92563"] },
  { name: "Temecula", zips: ["92590", "92591", "92592"] },
  { name: "Lake Elsinore", zips: ["92530", "92531", "92532"] },
  { name: "Beaumont", zips: ["92223"] },
  { name: "Banning", zips: ["92220"] },
  { name: "Moreno Valley", zips: ["92551", "92553", "92557"] },
];
