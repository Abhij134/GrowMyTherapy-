import Link from "next/link";
import { specialties } from "@/lib/content";

export default function Specialties() {
  return (
    <section id="specialties" className="bg-white py-24 md:py-32 lg:py-36 border-t border-ink/5 overflow-hidden">
      <div className="w-full pl-6 lg:pl-[120px] pr-6 lg:pr-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Title Column matching reference screenshot */}
          <div className="lg:col-span-4 relative lg:left-[20px]">
            <h2 className="font-serif text-[2.4rem] sm:text-[2.5rem] font-light text-ink leading-[1.5] tracking-tight">
              Our <span className="font-script text-primary font-normal text-[1.05em] ml-1">specialties</span>
              <br />
              include...
            </h2>
          </div>

          {/* Right 2x2 Grid of Specialty Cards matching reference screenshot */}
          <div className="lg:col-span-8 relative lg:left-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 lg:gap-x-20 gap-y-16 lg:gap-y-20">
              {specialties.map((spec) => (
                <div key={spec.title} className="flex flex-col items-start">
                  <h3 className="font-serif text-[1.65rem] sm:text-[1.85rem] font-normal text-ink mb-4 tracking-tight">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-[15px] sm:text-[15.5px] leading-[1.85] text-muted font-light mb-6">
                    {spec.description}
                  </p>
                  <Link
                    href={spec.href}
                    className="text-[10.5px] tracking-[0.2em] uppercase font-sans font-medium text-ink border-b border-ink pb-0.5 hover:text-primary hover:border-primary transition-all duration-200 inline-block"
                  >
                    LEARN MORE
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
