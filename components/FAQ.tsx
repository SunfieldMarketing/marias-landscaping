"use client";

import { useState } from "react";
import { faqs } from "@/lib/content-data";
import Icon from "./Icon";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Taking only the first 4 general FAQs to match reference
  const displayFaqs = faqs.slice(0, 4);

  return (
    <section className="bg-surface-50 section-padding border-t border-gray-100">
      <div className="container-wide max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded">
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <Icon
                  name="chevronDown"
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
