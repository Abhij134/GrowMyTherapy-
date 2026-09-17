import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { aboutPage, expertise } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
  description:
    "Learn about Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica, CA. Specializing in anxiety, trauma, burnout, and EMDR therapy.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero banner ──────────────────────────── */}
        <section className="bg-secondary pt-[120px] pb-16 md:pb-20">
          <div className="site-container">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-sans text-primary font-medium mb-6">
              {aboutPage.eyebrow}
            </p>
            <h1 className="font-serif text-[2.2rem] md:text-[3rem] text-ink leading-[1.1] mb-6 max-w-[700px]">
              {aboutPage.heading}
            </h1>
            <p className="font-sans text-[1rem] md:text-[1.1rem] leading-relaxed text-muted max-w-[620px]">
              {aboutPage.subtext}
            </p>
          </div>
        </section>

        {/* ── Two-column: photo left, bio right ────── */}
        <section className="bg-cream py-16 md:py-24">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-start">
              {/* Photo */}
              <div className="relative w-full aspect-[3/4] lg:w-[300px] lg:aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={aboutPage.image.src}
                  alt={aboutPage.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Bio */}
              <div>
                <div className="flex flex-col gap-5 mb-10">
                  {aboutPage.bio.map((para, i) => (
                    <p
                      key={i}
                      className="font-sans text-[0.95rem] leading-[1.9] text-muted"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Credentials block */}
                <div className="border-l-2 border-primary/30 pl-6 mb-10">
                  {aboutPage.credentials.map((line, i) => (
                    <p
                      key={i}
                      className={`font-sans text-[0.85rem] leading-relaxed ${
                        i === 0 ? "text-ink font-medium" : "text-muted"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={aboutPage.cta.href}
                  className="inline-block text-[0.72rem] tracking-[0.14em] uppercase font-sans text-ink border border-ink rounded-full px-8 py-3 hover:bg-ink hover:text-[#F7F3EE] transition-all duration-200"
                >
                  {aboutPage.cta.label}
                </Link>
                <p className="font-sans text-[0.75rem] text-muted mt-3">
                  {aboutPage.ctaSub}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Expertise tags ───────────────────────── */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="site-container">
            <h2 className="font-serif text-[1.6rem] md:text-[2rem] text-ink mb-8">
              Areas of{" "}
              <span className="font-script text-primary italic">expertise</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-0">
              {aboutPage.expertiseTags.map((tag) => (
                <div key={tag} className="py-3 border-b border-[#E1DBD2]">
                  <span className="font-sans text-[0.78rem] tracking-[0.1em] uppercase text-ink">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
