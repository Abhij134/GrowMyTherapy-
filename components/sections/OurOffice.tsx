import Image from "next/image";
import { ourOffice } from "@/lib/content";

export default function OurOffice() {
  return (
    <section id="office" className="bg-secondary py-20 md:py-28">
      <div className="site-container">
        {/* Heading + intro copy */}
        <div className="max-w-[580px] mb-12">
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-ink mb-5 leading-[1.15]">
            {ourOffice.heading}
          </h2>
          <p className="font-sans text-[0.95rem] md:text-[1rem] leading-[1.85] text-muted">
            {ourOffice.body}
          </p>
        </div>

        {/* 3-image horizontal gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {ourOffice.images.map((img, i) => (
            <div
              key={i}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-sm"
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

        {/* Address badge + session note */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
          {/* Address badge */}
          <div className="flex items-start gap-3">
            <span className="text-primary mt-0.5" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 21s-8-6.895-8-12a8 8 0 0 1 16 0c0 5.105-8 12-8 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <div>
              <p className="font-sans text-[0.85rem] text-ink font-medium">
                {ourOffice.address}
              </p>
            </div>
          </div>

          {/* Divider on desktop */}
          <span className="hidden sm:block w-px h-8 bg-[#DDD8D0]" aria-hidden="true" />

          {/* Session note */}
          <p className="font-sans text-[0.82rem] tracking-[0.08em] text-muted">
            {ourOffice.sessionNote}
          </p>
        </div>
      </div>
    </section>
  );
}
