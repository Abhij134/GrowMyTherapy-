import { ourOffice } from "@/lib/content";
import Image from "next/image";

export default function OurOffice() {
  return (
    <section id="office" className="bg-[#e3d9ca] py-20 md:py-28 lg:py-32 border-t border-ink/5 overflow-hidden">
      <div className="site-container">
        {/* Heading & Subtag */}
        <div className="max-w-[640px] mb-12 md:mb-18 relative lg:left-[50px]">
          <span className="section-subtag inline-block mb-20">Our Space</span>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-light text-ink mb-5 leading-none tracking-tight">
            {ourOffice.heading}
          </h2>
          <p className="font-sans text-[0.95rem] md:text-[1rem] leading-[1.75] text-muted">
            {ourOffice.body}
          </p>
        </div>

        {/* 3-image horizontal gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-13 lg:max-w-[1100px] relative lg:left-[140px]">
          {ourOffice.images.map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        {/* Address + session note */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center relative lg:left-[140px]">
          <div className="flex items-start gap-3">
            <span className="text-primary mt-0.5" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-8-6.895-8-12a8 8 0 0 1 16 0c0 5.105-8 12-8 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <p className="font-sans text-[0.92rem] text-ink font-medium">
              {ourOffice.address}
            </p>
          </div>
          <span className="hidden sm:block w-px h-8 bg-ink/15" aria-hidden="true" />
          <p className="font-sans text-[0.88rem] tracking-[0.05em] text-muted">
            {ourOffice.sessionNote}
          </p>
        </div>
      </div>
    </section>
  );
}
