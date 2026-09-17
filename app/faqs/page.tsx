"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { allFaqs } from "@/lib/content";

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F6F4EE] pt-[140px] pb-20 md:pb-28">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column — Header & Subtext */}
              <div className="lg:col-span-5 flex flex-col justify-start relative top-[20px] lg:top-[70px] left-0 lg:left-[40px]">
                <h1 className="font-serif text-[40px] sm:text-[48px] lg:text-[56px] font-light text-ink leading-[1.1] mb-6 tracking-tight">
                  {allFaqs.heading}
                </h1>
                <p className="font-sans text-[15px] sm:text-[16px] leading-[1.75] text-muted font-light max-w-[400px]">
                  {allFaqs.subtext}
                </p>
              </div>

              {/* Right Column — Accordion List */}
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col divide-y divide-[#2B2B2B]/10 border-t border-[#2B2B2B]/10 lg:border-t-0 relative top-[40px] lg:top-[60px]">
                {allFaqs.items.map((item, i) => (
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

                      <span className="font-serif text-[26px] lg:text-[32px] font-normal text-[#2B2B2B] group-hover:text-[#749D97] transition-colors duration-200 leading-[1.3] pr-4">
                        {item.q}
                      </span>
                    </button>
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

        {/* ── Bottom CTA ───────────────────────────── */}
        <section className="bg-[#EDE8E0] py-14 md:py-20">
          <div className="site-container">
            <div className="max-w-[580px]">
              <h2 className="font-serif text-[1.6rem] md:text-[2rem] text-ink mb-4 leading-[1.2]">
                {allFaqs.ctaHeading}
              </h2>
              <p className="font-sans text-[0.9rem] leading-relaxed text-muted mb-8">
                {allFaqs.ctaSubtext}
              </p>
              <Link
                href="/contact"
                className="inline-block text-[0.72rem] tracking-[0.14em] uppercase font-sans text-ink border border-ink rounded-full px-8 py-3 hover:bg-ink hover:text-[#F7F3EE] transition-all duration-200"
              >
                {allFaqs.ctaButton}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
