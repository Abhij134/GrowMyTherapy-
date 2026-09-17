import Image from "next/image";
import Link from "next/link";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#F6F4EE] pt-[140px] lg:pt-[125px] pb-16 lg:pb-[96px] relative z-0 overflow-hidden"
    >
      <div className="w-full relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-0">
          {/* LEFT — Hero image ATTACHED FLUSH TO FAR-LEFT SCREEN EDGE (no gaps or frames) */}
          <div className="lg:col-span-5 relative w-full lg:w-[90%] h-[350px] sm:h-[450px] lg:h-[560px] overflow-hidden">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT — Copy block with 100% original position */}
          <div className="lg:col-span-7 pl-6 sm:pl-10 md:pl-14 lg:pl-[30px] pr-6 sm:pr-[4vw] flex flex-col justify-center relative z-10 py-6 lg:py-0 mt-6 lg:mt-[40px]">
            {/* Eyebrow */}
            <span className="font-sans text-[14px] uppercase tracking-[0.24em] font-semibold text-[#2B2B2B] leading-normal mb-10 lg:mb-[145px] max-w-lg block relative z-10">
              {hero.eyebrow}
            </span>

            {/* H1 — Large title with script accent */}
            <h1 className="font-serif text-[34px] sm:text-[44px] lg:text-[64px] font-light leading-[1.25] lg:leading-[76px] text-[#2B2B2B] mb-[28px] tracking-[-0.015em] max-w-[620px] relative z-10">
              {hero.titleStart}{" "}
              <span className="font-script text-[#749D97] text-[1.1em] font-normal leading-none inline-block mt-[18px]">
                {hero.titleAccent}
              </span>
            </h1>

            {/* Subtext paragraph */}
            <p className="font-sans text-[15px] sm:text-[16px] leading-[28px] tracking-[0.01em] text-[#556359] font-light mb-[36px] max-w-[540px] relative z-10">
              {hero.subtext}
            </p>

            {/* CTA — Underlined link matching reference photo */}
            <div className="relative z-10">
              <Link
                href={hero.cta.href}
                className="relative text-[11px] tracking-[0.22em] uppercase font-sans font-semibold text-[#2B2B2B] pb-[4px] hover:text-[#749D97] transition-colors duration-200 inline-block group"
              >
                {hero.cta.label}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#2B2B2B]/30 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-0"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT FLANKING IMAGE — Cropped on far right edge, shifted downward, no frame */}
        <div className="hidden lg:block absolute right-0 top-24 h-[460px] w-[12vw] max-w-[160px] overflow-hidden pointer-events-none translate-x-20">
          <Image
            src="/images/hero_anxiety.png"
            alt="Flanking ocean scene"
            fill
            sizes="15vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
