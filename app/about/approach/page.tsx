import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { approachPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "My Therapeutic Approach | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds uses a personalized, depth-oriented approach combining CBT, EMDR, mindfulness, and somatic work for adults in Santa Monica, CA.",
};

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────── */}
        <section className="bg-secondary pt-[120px] pb-16 md:pb-20 overflow-hidden">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              {/* Left Column: Text */}
              <div className="max-w-[760px] relative z-10">
                <p className="text-[0.65rem] tracking-[0.18em] uppercase font-sans text-primary font-medium mb-6">
                  {approachPage.eyebrow}
                </p>
                <h1 className="font-serif text-[2.2rem] md:text-[3rem] text-ink leading-[1.1] mb-6">
                  {approachPage.heading}
                </h1>
                <p className="font-sans text-[1rem] md:text-[1.1rem] leading-relaxed text-muted max-w-[620px]">
                  {approachPage.opening}
                </p>
              </div>
              
              {/* Right Column: Image */}
              {/* 
                HOW TO RESIZE AND MOVE THIS IMAGE:
                - To change the size, adjust the width and height classes below (e.g. `w-full lg:w-[500px]` and `h-[400px] lg:h-[600px]`)
                - To move it UP or DOWN, add negative or positive top margin (e.g. `lg:-mt-[100px]` to move up, or `lg:mt-[50px]` to move down)
                - To move it LEFT or RIGHT, use positioning classes (e.g. `lg:relative lg:left-[50px]` or `lg:-left-[30px]`)
              */}
              <div className="relative z-10 w-full h-[400px] lg:h-[500px] lg:w-[110%] lg:mt-0 lg:-ml-10 rounded-[4px] overflow-hidden">
                <Image
                  src="/images/approach_hero.jpg"
                  alt="Therapy approach"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Body sections ─────────────────────────── */}
        <section className="bg-cream py-16 md:py-24">
          <div className="site-container">
            <div className="max-w-[760px] flex flex-col gap-14">
              {approachPage.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="font-serif text-[1.5rem] md:text-[1.85rem] text-ink mb-5 leading-[1.2]">
                    {sec.heading}
                  </h2>
                  {sec.body.split("\n\n").map((para, i) => (
                    <p key={i} className="font-sans text-[0.95rem] leading-[1.9] text-muted mb-4 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Methods list ──────────────────────────── */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="site-container">
            <div className="max-w-[680px]">
              <h2 className="font-serif text-[1.5rem] md:text-[1.85rem] text-ink mb-8">
                Methods I draw on
              </h2>
              <div className="flex flex-col gap-0 divide-y divide-[#E1DBD2]">
                {approachPage.methods.map((method) => (
                  <Link
                    key={method.href}
                    href={method.href}
                    className="flex items-center justify-between py-4 group"
                  >
                    <span className="font-sans text-[0.88rem] text-ink group-hover:text-primary transition-colors duration-200">
                      {method.label}
                    </span>
                    <svg
                      className="w-4 h-4 text-muted group-hover:text-primary transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pull-quote ────────────────────────────── */}
        <section className="bg-[#EDE8E0] py-14 md:py-20">
          <div className="site-container">
            <div className="max-w-[680px] mx-auto text-center">
              <span className="block font-serif text-[4rem] leading-none text-primary/20 -mb-2" aria-hidden="true">&ldquo;</span>
              <p className="font-serif text-[1.3rem] md:text-[1.6rem] leading-[1.45] text-ink italic mb-6">
                {approachPage.pullQuote}
              </p>
              <cite className="font-sans text-[0.72rem] tracking-[0.12em] uppercase text-muted not-italic">
                — Dr. Maya Reynolds, PsyD
              </cite>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
