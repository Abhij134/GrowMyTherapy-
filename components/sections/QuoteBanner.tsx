import Image from "next/image";
import { quoteBanner } from "@/lib/content";

export default function QuoteBanner() {
  return (
    // Full-width image with overlay — verified structure (not dark solid band)
    <section className="relative w-full h-[440px] md:h-[520px] overflow-hidden">
      <Image
        src={quoteBanner.image.src}
        alt={quoteBanner.image.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-ink/55" />

      {/* Quote content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="site-container">
          <div className="max-w-[680px]">
            {/* Opening quotation mark */}
            <span
              className="block font-serif text-[5rem] leading-none text-white/20 -mb-4"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote>
              <p className="font-serif text-[1.5rem] md:text-[1.85rem] leading-[1.4] text-white italic">
                {quoteBanner.quote}
              </p>
              <footer className="mt-6">
                <cite className="font-sans text-[0.78rem] tracking-[0.12em] uppercase text-white/60 not-italic">
                  {quoteBanner.attribution}
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
