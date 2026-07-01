"use client";

import { useState } from "react";
import { faqs } from "@/lib/content-data";
import Icon from "./Icon";
import Reveal from "./Reveal";

const faqCategories = {
  "General":    faqs.slice(0, 4),
  "Services":   faqs.slice(4, 7),
  "Scheduling": faqs.slice(7),
};

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
        isOpen
          ? "border-gold-300 bg-white shadow-elevation-2"
          : "border-ink-100 bg-white hover:border-ink-200"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:rounded-2xl"
      >
        <span className="flex items-start gap-3">
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${isOpen ? "bg-gold-500 text-white" : "bg-ink-100 text-ink-600"}`}>
            Q
          </span>
          <span className="font-display text-base font-semibold text-ink-900">
            {faq.question}
          </span>
        </span>
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-gold-500 text-white rotate-45" : "bg-ink-100 text-ink-600"
          }`}
        >
          <Icon name="plus" className="h-3.5 w-3.5" />
        </span>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={`accordion-content ${isOpen ? "open" : ""}`}
      >
        <div className="accordion-inner">
          <div className="flex gap-3 px-5 pb-5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-[10px] font-bold text-sage-700 mt-0.5">
              A
            </span>
            <p className="text-sm leading-relaxed text-ink-600">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openMap, setOpenMap] = useState<Record<string, number | null>>({
    General: 0,
    Services: null,
    Scheduling: null,
  });

  const toggle = (cat: string, idx: number) => {
    setOpenMap((prev) => ({
      ...prev,
      [cat]: prev[cat] === idx ? null : idx,
    }));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="faq" className="bg-ink-50 py-16 sm:py-24" aria-label="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <span className="divider-dot" />
            FAQ
          </span>
          <h2 className="mt-3 section-title">Frequently Asked Questions</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Everything you need to know before booking. Still have questions?{" "}
            <a href="tel:+14422810394" className="font-semibold text-gold-600 hover:underline">
              Call us directly.
            </a>
          </p>
        </Reveal>

        {/* Category tabs + accordions */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {Object.entries(faqCategories).map(([cat, items], catIdx) => (
            <Reveal key={cat} delay={catIdx * 80}>
              <div>
                {/* Category label */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1 w-6 rounded-full bg-gold-400" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-widest text-gold-600">
                    {cat}
                  </h3>
                </div>
                {/* Accordion items */}
                <div className="space-y-3">
                  {items.map((faq, i) => (
                    <AccordionItem
                      key={faq.question}
                      faq={faq}
                      isOpen={openMap[cat] === i}
                      onToggle={() => toggle(cat, i)}
                      index={catIdx * 10 + i}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA below FAQ */}
        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-ink-600">
            Still have questions?{" "}
            <a href="tel:+14422810394" className="font-bold text-gold-600 hover:text-gold-700 underline">
              Call (442) 281-0394
            </a>{" "}
            or{" "}
            <a href="sms:+14422810394" className="font-bold text-gold-600 hover:text-gold-700 underline">
              text us
            </a>{" "}
            — we&apos;re happy to help.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
