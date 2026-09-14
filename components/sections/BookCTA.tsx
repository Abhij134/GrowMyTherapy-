import Image from "next/image";
import Link from "next/link";
import { bookCta } from "@/lib/content";

export default function BookCTA() {
  return (
    <section className="bg-secondary py-0 overflow-hidden">
      {/* Flanking images + centered copy — matches reference "book" section with images on both sides */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left image */}
        <div className="relative hidden lg:block h-[420px]">
          <Image
            src={bookCta.imageLeft.src}
            alt={bookCta.imageLeft.alt}
            fill
            sizes="33vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-secondary/20" />
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center text-center px-8 py-16 lg:py-20 lg:px-16 lg:w-[480px]">
          <h2 className="font-serif text-[1.8rem] md:text-[2.2rem] text-ink leading-[1.25] mb-5">
            {bookCta.heading}
          </h2>
          <p className="font-sans text-[0.9rem] leading-relaxed text-muted mb-3 max-w-[360px]">
            {bookCta.body}
          </p>

          {/* CTA — pill outline button matching reference "BOOK NOW" style */}
          <Link
            href={bookCta.cta.href}
            id="schedule"
            className="inline-block mt-6 text-[0.72rem] tracking-[0.14em] uppercase font-sans text-ink border border-ink rounded-full px-8 py-3 hover:bg-ink hover:text-[#F7F3EE] transition-all duration-200"
          >
            {bookCta.cta.label}
          </Link>

          <p className="font-sans text-[0.75rem] text-muted mt-5 max-w-[300px] leading-relaxed">
            {bookCta.subtext}
          </p>
        </div>

        {/* Right image */}
        <div className="relative hidden lg:block h-[420px]">
          <Image
            src={bookCta.imageRight.src}
            alt={bookCta.imageRight.alt}
            fill
            sizes="33vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-secondary/20" />
        </div>
      </div>

      {/* Mobile: single image below */}
      <div className="relative lg:hidden w-full h-[220px]">
        <Image
          src={bookCta.imageLeft.src}
          alt={bookCta.imageLeft.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
