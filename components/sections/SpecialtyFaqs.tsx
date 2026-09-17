"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface SpecialtyFaqsProps {
  faqs?: FAQItem[];
}

export default function SpecialtyFaqs({ faqs }: SpecialtyFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-[#EFECE6] py-20 lg:py-28 px-6 lg:px-16 text-ink border-t border-ink/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.2em] font-medium mb-4 text-ink/80">
            FAQS
          </p>
          <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] font-light leading-[1.15] text-ink">
            Frequently asked
            <br />
            questions
          </h2>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-[#D9D4CC] border-t border-[#D9D4CC]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-[1.05rem] md:text-[1.125rem] font-normal text-ink pr-6 group-hover:text-[#556359] transition-colors duration-200">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Icon - exact match to Conejo Valley icon size, minus tilt! */}
                  <div className="relative w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] flex items-center justify-center shrink-0 ml-auto">
                    <div
                      className={`absolute w-full h-[0.5px] bg-[#556359] transition-transform duration-500 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    ></div>
                    <div
                      className={`absolute h-full w-[0.5px] bg-[#556359] transition-transform duration-500 ease-in-out ${
                        isOpen ? "rotate-180 scale-y-0" : "rotate-0 scale-y-100"
                      }`}
                    ></div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="font-sans text-[0.95rem] md:text-[1rem] leading-[1.8] text-muted">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
