"use client";

import Link from "next/link";
import { useState } from "react";
import { faqPreview } from "@/lib/content";

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="bg-[#F6F4EE] py-20 lg:py-28 overflow-hidden border-t border-ink/5">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (First Column) — Header & Subtext */}
          <div className="lg:col-span-5 flex flex-col justify-start relative">
            <h2 className="font-serif text-[44px] sm:text-[52px] lg:text-[60px] font-light text-ink leading-none mb-10 tracking-tight">
              Questions?
            </h2>
            <p className="font-sans text-[13.5px] sm:text-[14px] leading-[1.75] text-muted font-medium mb-4 max-w-[320px]">
              Here are some of the most common questions we get about working together.
            </p>
            <p className="font-sans text-[13.5px] sm:text-[14px] leading-[1.75] text-muted font-medium max-w-[320px]">
              If you don&apos;t see your question listed or are ready to schedule a free consult,{" "}
              <Link href="/contact" className="text-[#86B3B3] hover:underline underline-offset-2">
                contact us.
              </Link>
            </p>
          </div>

          {/* Right Column (Second Column) — Accordion List */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col divide-y divide-[#2B2B2B]/10 border-t border-[#2B2B2B]/10 lg:border-t-0 relative top-[60px]">
            {faqPreview.items.map((item, i) => (
              <div key={i} className="py-5 sm:py-6">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start gap-4 text-left group cursor-pointer"
                  aria-expanded={open === i}
                >
                  {/* Animated Plus / Minus Icon */}
                  <div className="relative w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] flex items-center justify-center shrink-0 mt-[10px] lg:mt-[12px]">
                    <div className={`absolute w-full h-[0.5px] bg-[#556359] transition-transform duration-500 ease-in-out ${open === i ? "rotate-180" : "rotate-0"}`}></div>
                    <div className={`absolute h-full w-[0.5px] bg-[#556359] transition-transform duration-500 ease-in-out ${open === i ? "rotate-180 scale-y-0" : "rotate-0 scale-y-100"}`}></div>
                  </div>

                  {/* Question Text */}
                  <span className="font-serif text-[26px] lg:text-[32px] font-normal text-[#2B2B2B] group-hover:text-[#749D97] transition-colors duration-200 leading-[1.3] pr-4">
                    {item.q}
                  </span>
                </button>

                {/* Expandable Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? "max-h-96 opacity-100 mt-3 pb-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-[15px] sm:text-[16px] leading-[1.75] text-muted font-light max-w-[680px]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
