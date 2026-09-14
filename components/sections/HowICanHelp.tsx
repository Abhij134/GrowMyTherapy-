import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";

export default function HowICanHelp() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="site-container">
        {/* Section heading */}
        <div className="mb-14">
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-ink">
            How I Can Help
          </h2>
        </div>

        {/* 3-column card grid — anatomy: image top → title → description (matches reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col"
              id={service.title.toLowerCase().replace(/[^a-z]/g, "-")}
            >
              {/* Image top — full width, aspect-4/3 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Title — serif, no card border (matches reference) */}
              <h3 className="font-serif text-[1.45rem] text-ink mb-3 group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[0.9rem] leading-relaxed text-muted">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
