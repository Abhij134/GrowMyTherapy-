import Image from "next/image";
import Link from "next/link";
import { howWeWork } from "@/lib/content";

export default function HowWeWork() {
  return (
    <section id="approach" className="bg-[#e3d9ca] py-20 md:py-28 lg:py-32 relative z-0 border-t border-ink/5 overflow-hidden">
      <div className="site-container relative z-10">
        <span
          className="section-subtag inline-block relative z-10 cursor-pointer mb-16 ml-4 lg:ml-12 sm:text-[20px] font-light"
          data-editor-id="our_approach_subtag"
        >
          Our Approach
        </span>
        {/* Large serif heading */}
        <h2 className="font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] font-light text-ink mb-12 md:mb-16 max-w-[800px] leading-[1.22] tracking-tight relative z-10 ml-4 mt-4 lg:-mt-[-67px] lg:ml-13">
          {howWeWork.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start relative z-10">
          {/* Copy block */}
          <div className="relative z-10 lg:ml-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[0.95rem] md:text-[1rem] leading-[1.75] text-muted relative z-10">
              <p className="relative z-10">{howWeWork.bodyLeft}</p>
              <p className="relative z-10">{howWeWork.bodyRight}</p>
            </div>


          </div>

          {/* Portrait image (Maya Human Photo) */}
          <div className="relative w-full aspect-[3/4] lg:w-[360px] lg:h-[570px] shrink-0 overflow-hidden relative z-10 mt-10 lg:-mt-[200px] ml-0 lg:ml-20">
            <Image
              src={howWeWork.image.src}
              alt={howWeWork.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
