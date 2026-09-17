import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpecialtyFaqs, { FAQItem } from "@/components/sections/SpecialtyFaqs";

interface Section {
  heading: string;
  body: string;
  sideText?: string;
}

interface SpecialtyPageLayoutProps {
  eyebrow: string;
  heading: string;
  subtext: string;
  sections: Section[];
  helpList?: {
    heading: string;
    items: string[];
    body: string;
  };
  whoThisIsFor?: string[];
  faqs?: FAQItem[];
  ctaHeading: string;
  ctaSubtext: string;
  ctaButton: string;
  ctaFootnote?: string;
  ctaBackgroundImage?: string;
  heroTextClassName?: string;
  heroImageClassName?: string;
  heroImageSrc?: string;
  sectionImageSrc?: string;
}

/**
 * Conejo Valley–style specialty page layout:
 * hero text -> portrait image -> bold lead copy -> 3-col bullet band ->
 * full-bleed wide image -> alternating text/image rows -> centered CTA.
 * Content props are unchanged from the original content model.
 */

/* Italicizes the last word of a heading in accent color (e.g. "...clarity.") */
function accentLastWord(text: string) {
  const words = text.trim().split(" ");
  if (words.length < 2) return text;
  const last = words[words.length - 1];
  const rest = words.slice(0, -1).join(" ");
  const isAcronym = last === last.toUpperCase() && last.length > 1 && /[A-Z]/.test(last);

  return (
    <>
      {rest}{" "}
      <em
        className={`italic font-serif text-primary ${
          isAcronym
            ? "text-[1rem] md:text-[2.1rem] not-italic font-sans font-light tracking-wide text-ink/70"
            : "text-[1.2rem] md:text-[3rem]"
        }`}
      >
        {last}
      </em>
    </>
  );
}

/* Dashed placeholder block - swap each one for a real <Image /> later. */
function ImagePlaceholder({
  label,
  ratioClass,
  src,
}: {
  label: string;
  ratioClass: string;
  src?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative w-full overflow-hidden rounded-[4px] border border-dashed border-ink/20 bg-[#eae4d8] flex items-center justify-center ${ratioClass}`}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover rounded-[4px]"
          sizes="(max-width: 1200px) 100vw, 800px"
        />
      ) : (
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-ink/35"
            aria-hidden="true"
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <circle cx="12" cy="13.5" r="3.5" />
            <path d="M8.5 7l1.2-2h4.6l1.2 2" />
          </svg>
          <p className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-ink/40">
            Image placeholder
          </p>
          <p className="font-sans text-[0.62rem] text-ink/30">{label}</p>
        </div>
      )}
    </div>
  );
}

export default function SpecialtyPageLayout({
  eyebrow,
  heading,
  subtext,
  sections,
  helpList,
  whoThisIsFor,
  faqs,
  ctaHeading,
  ctaSubtext,
  ctaButton,
  ctaFootnote,
  ctaBackgroundImage = "/cta-beach-2.png",
  heroTextClassName,
  heroImageClassName,
  heroImageSrc,
  sectionImageSrc,
}: SpecialtyPageLayoutProps) {
  const intro = sections[0];
  const bodySections = sections.slice(1);

  return (
    <>
      {/* ── Fixed Navigation ── */}
      <Navbar />
      <main>
        {/* ── 1. Hero (text only, generous top padding for fixed nav) ── */}
        <section className="pt-[140px] lg:pt-[250px] pb-12 md:pb-16">
          <div className="site-container flex justify-center lg:justify-end">
            <div className={`max-w-[860px] ${heroTextClassName || 'lg:mr-[-50px]'}`}>
              <p className="font-sans text-[0.8rem] md:text-[0.9rem] tracking-[0.22em] uppercase text-ink font-semibold mb-10 lg:mb-34">
                {eyebrow}
              </p>
              <h1 className="font-serif text-[2rem] md:text-[4rem] leading-[1.4] text-ink mb-7 max-w-[900px] whitespace-pre-line">
                {accentLastWord(heading)}
              </h1>
              <p className="font-sans text-[1rem] md:text-[1rem] leading-[1.7] text-muted max-w-[640px] mb-10">
                {subtext}
              </p>
              <div className="relative z-10">
                <Link
                  href="/contact"
                  className="relative text-[11px] tracking-[0.22em] uppercase font-sans font-semibold text-ink pb-[4px] hover:text-primary transition-colors duration-200 inline-block group"
                >
                  Book an appointment
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-ink/30 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-0"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Hero portrait image ── */}
        <section className={`pb-16 md:pb-24 relative ${heroImageClassName || 'lg:-mt-140 lg:-left-18'}`}>
          <div className="site-container">
            {/* SWAP: replace with <Image src={heroImg} ... /> */}
            <ImagePlaceholder
              label="Hero image - portrait 4:5"
              ratioClass="aspect-[5/6] max-w-[650px]"
              src={heroImageSrc || "/images/hero_coastal.png"}
            />
          </div>
        </section>

        {/* ── 3. Intro copy (bold lead paragraph + supporting copy) ── */}
        {intro && (
          <section className="pt-[60px] pb-16 md:pb-24">
            <div className="site-container">
              <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                <div className="w-full md:w-[60%] max-w-[720px]">
                  {intro.heading && (
                    <h2 className="font-serif text-[1.75rem] md:text-[2.1rem] leading-[1.2] text-ink mb-[70px]">
                      {accentLastWord(intro.heading)}
                    </h2>
                  )}
                  {intro.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "font-sans text-[1.05rem] md:text-[1.2rem] leading-[1.75] font-light text-ink mb-7"
                          : "font-sans text-[0.95rem] leading-[1.9] text-muted mb-5 last:mb-0"
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>
                {intro.sideText && (
                  <div className="w-full md:w-[40%] flex flex-col justify-center mt-10 md:mt-0">
                    <p className="font-serif text-[1.4rem] md:text-[1.75rem] leading-[1.4] text-ink font-light md:pl-10">
                      {intro.sideText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── 4. "Who this is for" - 2-column list with side headline ── */}
        {whoThisIsFor && whoThisIsFor.length > 0 && (
          <section className="bg-white py-16 md:py-24">
            <div className="site-container max-w-[1200px]">
              <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Left side: Heading */}
                <div className="w-full md:w-[35%] shrink-0 relative lg:left-34">
                  <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.2] text-ink">
                    This may be a<br />
                    <em className="italic font-serif text-primary block text-[3.5rem] md:text-[3rem] leading-[1.5] my-1 lg:-ml-[-1rem]">
                      good fit
                    </em>
                    if you&rsquo;re...
                  </h2>
                </div>

                {/* Right side: List */}
                <div className="w-full md:w-[65%]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 md:mt-6">
                    {whoThisIsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 relative lg:-left-10">
                        <span className="shrink-0 text-muted/70 font-light text-[1.1rem] mt-1">
                          ✓
                        </span>
                        <span className="font-sans text-[1.05rem] leading-[1.6] text-muted font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}



        {/* ── 6. Body sections: odd ones = text+image row, even ones = full-width copy ── */}
        <section className="bg-white py-16 md:py-24">
          <div className="site-container flex flex-col gap-20 md:gap-28 relative lg:-left-50 lg:top-10">
            {bodySections.map((sec, i) => {
              const paras = sec.body.split("\n\n");
              const isRow = i % 2 === 0;
              const imageLeft = Math.floor(i / 2) % 2 === 0;

              if (isRow) {
                return (
                  <div
                    key={sec.heading}
                    className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:justify-between"
                  >
                    <div className={`w-full md:w-[60%] relative md:left-50 lg:-top-20 ${imageLeft ? "md:order-2" : ""}`}>
                      <h2 className="font-serif text-[1.75rem] md:text-[2.1rem] leading-[1.2] text-ink mb-[70px]">
                        {accentLastWord(sec.heading)}
                      </h2>
                      {paras.map((para, j) => (
                        <p
                          key={j}
                          className={
                            j === 0
                              ? "font-sans text-[1.05rem] md:text-[1.2rem] leading-[1.75] font-light text-ink mb-7"
                              : "font-sans text-[0.95rem] leading-[1.9] text-muted mb-5 last:mb-0"
                          }
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                    <div className={`w-full md:w-[70%] max-w-[800px] relative lg:left-20 ${imageLeft ? "md:order-1" : ""}`}>
                      {/* SWAP: replace with side <Image src={sideImg} ... /> */}
                      <ImagePlaceholder
                        label={`Section image ${i + 1} - portrait 3:4`}
                        ratioClass="aspect-[3/4] md:aspect-[4/3]"
                        src={sectionImageSrc || `/images/office_interior_${(i % 3) + 1}.png`}
                      />
                    </div>
                  </div>
                );
              }

              return (
                <div key={sec.heading} className="max-w-[720px]">
                  {sec.heading && (
                    <h2 className="font-serif text-[1.75rem] md:text-[2.1rem] leading-[1.2] text-ink mb-6">
                      {accentLastWord(sec.heading)}
                    </h2>
                  )}
                  {paras.map((para, j) => (
                    <p
                      key={j}
                      className={
                        j === 0
                          ? "font-sans text-[1.05rem] md:text-[1.2rem] leading-[1.75] font-medium text-ink mb-7"
                          : "font-sans text-[0.95rem] leading-[1.9] text-muted mb-5 last:mb-0"
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
        {/* ── Help List Section (if provided) ── */}
        {helpList && (
          <section className="bg-cream py-16 md:py-24">
            <div className="site-container max-w-[1200px]">
              <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="w-full md:w-[45%] shrink-0">
                  <h2 className="font-serif text-[2rem] md:text-[2.5rem] leading-[1.2] text-ink whitespace-pre-line">
                    {helpList.heading.split("help")[0]}
                    <em className="italic font-serif text-primary text-[2.5rem] md:text-[3.5rem] leading-[0.8] -ml-2 mr-1">help</em>
                    {helpList.heading.split("help")[1]}
                  </h2>
                </div>
                <div className="w-full md:w-[55%]">
                  <ul className="flex flex-col mb-10">
                    {helpList.items.map((item, i) => (
                      <li key={i} className="py-5 border-b border-muted/20 font-sans text-[0.8rem] tracking-[0.1em] uppercase text-ink font-semibold">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-sans text-[1rem] leading-[1.8] text-muted">
                    {helpList.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* ── 8. CTA bar (with background image) ── */}
        <section className="relative pt-20 pb-20 md:pt-64 md:pb-24 bg-[#2B2B2B]">
          <div className="absolute inset-0 z-0">
            <Image
              src={ctaBackgroundImage}
              alt="Background"
              fill
              className="object-cover object-center opacity-60"
            />
          </div>
          <div className="site-container relative z-10">
            <div className="max-w-[800px] md:pl-20 text-left">
              <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.15] text-white mb-10">
                {ctaHeading}
              </h2>
              {ctaSubtext && (
                <p className="font-sans text-[1.1rem] leading-[1.8] text-white/80 mb-9">
                  {ctaSubtext}
                </p>
              )}
              <Link
                href="/contact"
                className="inline-block text-[0.8rem] tracking-[0.15em] uppercase font-sans text-white border border-white rounded-[100px] px-12 py-4 hover:bg-white hover:text-ink transition-all duration-300"
              >
                {ctaButton}
              </Link>
              {ctaFootnote && (
                <p className="font-sans text-[0.75rem] text-white/70 mt-6">
                  {ctaFootnote}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ── 9. Specialty FAQs (moved under CTA) ── */}
        <SpecialtyFaqs faqs={faqs} />
      </main>
      <Footer />
    </>
  );
}