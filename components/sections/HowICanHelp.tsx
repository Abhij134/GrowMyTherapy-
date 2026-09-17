import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";

export default function HowICanHelp() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24 md:py-28 lg:py-25 border-t border-stone-200/50">
      <div className="max-w-[1320px] ml-0 lg:ml-[30px] px-6 sm:px-10 md:px-16 lg:px-20">

        {/* Section Heading matching reference photo */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-light text-ink tracking-tight leading-none">
            How I Can{" "}
            <span className="font-script text-primary text-[1em] font-normal leading-none inline-block ml-2 relative top-[2px]">
              help
            </span>
          </h2>
        </div>

        {/* 3-column card grid — square 1:1 rounded images matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 relative lg:left-[150px]">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col"
              id={service.title.toLowerCase().replace(/[^a-z]/g, "-")}
            >
              {/* Image top — 3:4 portrait aspect ratio with sharp corners */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 sm:mb-7">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Text aligned with the left edge of the image */}
              <div className="pr-[10px]">
                {/* Title — light serif heading */}
                <h3 className="font-serif text-[22px] sm:text-[25px] lg:text-[28px] font-medium text-ink mb-6 group-hover:text-primary transition-colors duration-200 leading-snug">
                  {service.title}
                </h3>

                {/* Description — light sans-serif body in sentence case */}
                <p className="font-sans text-[14px] sm:text-[16px] leading-[1.75] text-muted ">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
