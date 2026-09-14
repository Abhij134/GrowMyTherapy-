import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] mt-[80px] grid lg:grid-cols-[42%_58%]"
    >
      {/* LEFT — Full-bleed image (verified reference: image on left) */}
      <div className="relative w-full h-[300px] lg:h-full overflow-hidden">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-center"
        />
        {/* Subtle warm overlay to keep same color temperature */}
        <div className="absolute inset-0 bg-accent-soft/10 pointer-events-none" />
      </div>

      {/* RIGHT — Copy block */}
      <div className="flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-20 bg-secondary">
        {/* Eyebrow */}
        <p className="text-[0.68rem] tracking-[0.18em] uppercase font-sans text-primary font-medium mb-8 lg:mb-10">
          {hero.eyebrow}
        </p>

        {/* H1 — large serif with teal italic accent on last phrase */}
        <h1 className="font-serif text-[2.6rem] md:text-[3.2rem] xl:text-[3.8rem] leading-[1.1] text-ink mb-6">
          {hero.titleStart}{" "}
          <span className="font-script text-primary">
            {hero.titleAccent}
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-[1rem] leading-relaxed text-muted max-w-[480px] mb-10">
          {hero.subtext}
        </p>

        {/* CTA — underlined link style matching reference "BOOK AN APPOINTMENT" */}
        <Link href={hero.cta.href} className="cta-link self-start">
          {hero.cta.label}
        </Link>
      </div>
    </section>
  );
}
