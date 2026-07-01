import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import { site } from "@/lib/site-config";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Landscaping & Tree Service in Hemet, CA`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "landscaping Hemet CA",
    "tree service Riverside County",
    "tree removal Hemet",
    "landscaping company San Jacinto",
    "lawn care Menifee",
    "tree trimming Riverside County",
    "palm tree trimming Hemet",
    "yard cleanup Riverside County",
    "hardscaping Hemet CA",
    "irrigation system Menifee",
    "stump grinding Riverside County",
    "landscaping company near me",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Landscaping & Tree Service in Hemet, CA`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Landscaping & Tree Service in Hemet, CA`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: site.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.latitude,
      longitude: site.longitude,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.county,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [site.social.facebook],
    knowsLanguage: ["en", "es"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping & Tree Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tree Trimming & Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping Design & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Care & Maintenance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yard Cleanup & Debris Removal" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Palm Tree Trimming" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stump Grinding" } },
      ],
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
