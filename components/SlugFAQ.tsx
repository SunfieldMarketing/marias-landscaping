"use client";
import { useState } from "react";
import Icon from "./Icon";

export default function SlugFAQ({ faqs, serviceName }: { faqs: { q: string, a: string }[], serviceName: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions About {serviceName}</h2>
          <p className="text-lg text-gray-600">Got questions? We've got answers.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`bg-surface-50 border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-accent-500' : 'border-gray-200'}`}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-accent-700' : 'text-gray-900'}`}>{faq.q}</span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-accent-600' : 'text-gray-400'}`}>
                  <Icon name="chevronDown" className="w-6 h-6" />
                </span>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 pt-2 border-t border-gray-200">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
