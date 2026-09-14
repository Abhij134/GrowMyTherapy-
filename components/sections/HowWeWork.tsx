import Image from "next/image";
import Link from "next/link";
import { howWeWork } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section id="about" className="bg-[#EDE8E0] py-20 md:py-28 scroll-mt-20">
      <div className="site-container">
        {/* Large serif heading */}
        <h2 className="font-serif text-[2rem] md:text-[2.8rem] text-ink mb-12 max-w-[640px] leading-[1.2]">
          {howWeWork.heading}
        </h2>

        {/* Layout: copy takes ~65%, portrait image on far right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-start">
          {/* Copy block — two columns of text on desktop */}
          <div>
            {/* Subheading in small-caps teal */}
            <p className="text-[0.72rem] tracking-[0.16em] uppercase text-primary font-sans mb-5 max-w-[540px]">
              {howWeWork.subheading}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-[0.92rem] leading-[1.85] text-muted">
              <p>{howWeWork.bodyLeft}</p>
              <p>{howWeWork.bodyRight}</p>
            </div>

            {/* CTA link */}
            <div className="mt-8">
              <Link href={howWeWork.cta.href} className="cta-link">
                {howWeWork.cta.label}
              </Link>
            </div>
          </div>

          {/* Portrait image — 2:3 aspect ratio matching the portrait photo */}
          <div className="relative w-full aspect-[2/3] max-w-[360px] mx-auto lg:max-w-none lg:w-[320px] lg:h-[480px] overflow-hidden rounded-md shrink-0 shadow-sm">
            <Image
              src={howWeWork.image.src}
              alt={howWeWork.image.alt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
