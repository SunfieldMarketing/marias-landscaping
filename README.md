# Maria's Landscaping & Tree Service

Premium, conversion-optimized Next.js website for **Maria's Landscaping & Tree Service** — a family-owned landscaping and tree care company based in Hemet, CA serving all of Riverside County.

## Features

- **10-section homepage** — Hero, Social Proof, Services, About Us, Why Choose Us, Service Area, Gallery, Testimonials, FAQ, Contact
- **10 individual service pages** — Each with schema markup, sticky lead form, FAQ section, and related services
- **Premium UI** — Glassmorphism, animated mesh gradient hero, animated number counters, infinite scroll marquees, shimmer CTAs
- **Lead capture optimized** — Animated real-time form validation, success state, sticky mobile CTA bar
- **Fully responsive & mobile-first** — 3-button sticky mobile bar (Text / Quote / Call)
- **SEO optimized** — Full JSON-LD schema (LocalBusiness, Service, FAQPage), meta tags, sitemap, robots.txt
- **AI/LLM optimized** — `/llms.txt`, `/mirrors/` markdown content, structured data for AI search engines
- **Vercel ready** — Zero API keys needed, all static generation

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Vercel for deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repo to GitHub
2. Import into Vercel
3. Deploy — no environment variables required

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, JSON-LD schema
  page.tsx            # Homepage (all 10 sections)
  globals.css         # Design system — animations, glassmorphism, utilities
  services/
    page.tsx          # Services listing page
    [slug]/page.tsx   # Individual service pages (10 static routes)
  api/lead/route.ts   # Lead form handler

components/
  Header.tsx          # Sticky glassmorphism header + mobile drawer
  Hero.tsx            # Animated mesh gradient hero + lead form
  SocialProof.tsx     # Animated stat counters + trust marquee
  Services.tsx        # Service cards grid
  AboutUs.tsx         # Story + How It Works process
  WhyChooseUs.tsx     # Dark section + comparison table
  ServiceArea.tsx     # Google map + filterable city list
  Gallery.tsx         # Recent projects showcase
  Testimonials.tsx    # Featured reviews + scrolling marquee
  FAQ.tsx             # Categorized accordion FAQ
  Contact.tsx         # Contact info + lead form
  LeadForm.tsx        # High-conversion form with validation
  Footer.tsx          # SEO footer with all cities + services
  StickyMobileBar.tsx # Mobile call/text/quote bar

lib/
  site-config.ts      # Business info, service area, hours
  services-data.ts    # All service data (title, slug, features, FAQs)
  content-data.ts     # Stats, testimonials, FAQs, gallery projects

public/
  llms.txt            # AI/LLM discovery file
  sitemap.xml         # XML sitemap
  robots.txt          # Crawler instructions
  mirrors/            # Markdown mirrors for AI ingestion
    home.md
    services.md
    master-index.md
```

## Business Contact

- **Phone/Text**: (442) 281-0394
- **Location**: Hemet, CA — Riverside County
- **Website**: https://www.marialandscapingtreeservice.com
