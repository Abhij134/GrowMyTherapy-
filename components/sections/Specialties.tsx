import Link from "next/link";
import { specialties } from "@/lib/content";

export default function Specialties() {
  return (
    <section id="specialties" className="bg-cream py-20 md:py-28">
      <div className="site-container">
        {/* Heading — serif + italic script accent (matches reference "Our specialties include…" pattern) */}
        <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-ink mb-14 leading-[1.2]">
          My{" "}
          <span className="font-script text-primary italic">
            specialties
          </span>{" "}
          include&hellip;
        </h2>

        {/* 2×2 grid — each cell: title + description + learn more link */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {specialties.map((spec, i) => (
            <div
              key={spec.title}
              className="py-10 border-b border-[#E1DBD2] first:border-t md:odd:border-r md:odd:pr-16 md:even:pl-0"
            >
              <h3 className="font-serif text-[1.35rem] text-ink mb-4">
                {spec.title}
              </h3>
              <p className="font-sans text-[0.88rem] leading-[1.85] text-muted mb-5">
                {spec.description}
              </p>
              <Link href={spec.href} className="cta-link text-[0.7rem]">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
