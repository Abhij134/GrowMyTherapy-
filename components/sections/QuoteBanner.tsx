import Image from "next/image";
import { quoteBanner } from "@/lib/content";

export default function QuoteBanner() {
  return (
    <section className="relative w-full h-[450px] md:h-[500px] lg:h-[650px] overflow-hidden">
      <Image
        src={quoteBanner.image.src}
        alt={quoteBanner.image.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority={false}
      />
      {/* Dark overlay matching reference site */}
      <div className="absolute inset-0 bg-ink/45" />

      {/* Quote content left-aligned matching reference image 1 */}
      <div className="relative z-10 h-full flex items-center justify-start">
        <div className="w-full pl-6 md:pl-[80px] lg:pl-[150px] pr-5 lg:pr-[170px] mt-[90px] lg:mt-[200px]">
          <div className="max-w-[850px] text-left">
            <blockquote className="space-y-6">
              <p className="font-serif text-[1.8rem] sm:text-[2.4rem] md:text-[2.9rem] lg:text-[3.3rem] font-light leading-[1.25] text-white tracking-tight">
                {quoteBanner.quote}
              </p>
              {quoteBanner.attribution && (
                <footer>
                  <cite className="font-sans text-[12px] tracking-[0.16em] uppercase text-white/85 font-medium not-italic block">
                    — {quoteBanner.attribution}
                  </cite>
                </footer>
              )}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
