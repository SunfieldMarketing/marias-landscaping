"use client";
import { useState } from "react";
import Icon from "./Icon";
import { site } from "@/lib/site-config";

export default function HomeFAQ() {
  const faqs = [
    {
      question: `Do you provide free estimates in ${site.county}?`,
      answer: `Yes! We provide 100% free, no-obligation onsite estimates for all landscaping, hardscaping, and tree service projects across ${site.county} including Hemet, Menifee, and San Jacinto.`
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed, bonded, and insured. This protects you, your property, and our crew during every project."
    },
    {
      question: "Do you offer emergency tree removal?",
      answer: "Yes, we offer emergency tree removal services for storm-damaged or hazardous trees that pose an immediate threat to your home or property."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Timelines vary by project size. Routine tree trimming or lawn care can often be scheduled within a few days. Larger hardscaping or full yard transformations may take a few weeks from design to completion. We provide exact timelines during your estimate."
    },
    {
      question: "Do you design drought-tolerant landscapes?",
      answer: "Yes! Living in Southern California means water conservation is critical. We specialize in designing beautiful, drought-tolerant landscapes using native plants, smart irrigation, and artificial turf to drastically lower your water bill."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-surface-50 border-t border-gray-200">
      <div className="container-wide max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Have questions before we start? Here are the most common things homeowners ask us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-accent-500 shadow-md' : 'border-gray-200 hover:border-accent-300'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className={`font-bold text-lg ${openIndex === idx ? 'text-accent-700' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-accent-600' : 'text-gray-400'}`}>
                  <Icon name="chevronDown" className="w-6 h-6" />
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
