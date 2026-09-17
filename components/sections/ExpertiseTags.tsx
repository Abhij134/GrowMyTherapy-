import { expertise } from "@/lib/content";

export default function ExpertiseTags() {
  const col1 = [
    "ANXIETY",
    "PANIC DISORDER",
    "TRAUMA",
    "COMPLEX PTSD",
    "BURNOUT",
    "PERFECTIONISM",
  ];

  const col2 = [
    "EMDR THERAPY",
    "COGNITIVE BEHAVIORAL",
    "MINDFULNESS-BASED",
    "BODY-ORIENTED WORK",
    "STRESS MANAGEMENT",
    "...AND MORE.",
  ];

  return (
    <section id="methods" className="bg-white py-20 sm:py-24 md:py-28 lg:py-32 border-t border-stone-200/40">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* Left — Heading with 'Our areas of' strictly in black text */}
          <div className="lg:col-span-4 pt-1 sm:pt-[-3px] ml-0 lg:-ml-[80px] mb-8 lg:mb-0">
            <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[44px] font-light text-black leading-[1.15]">
              Our areas of{" "}
              <span className="font-script text-primary font-normal text-[42px] sm:text-[50px] lg:text-[44px] inline-block sm:block">
                expertise
              </span>
            </h2>
          </div>

          {/* Right — Symmetrical 2-Column List matching Conejo Valley screenshot */}
          <div className="lg:col-span-8 ml-0 lg:-ml-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 sm:gap-x-16 lg:gap-x-20">
              {/* Column 1 */}
              <div>
                {col1.map((tag) => (
                  <div
                    key={tag}
                    className="py-4 sm:py-4.5 border-b border-[#EAE6DE]"
                  >
                    <span className="font-sans text-[13.5px] sm:text-[15px] tracking-[0.2em] uppercase font-medium text-ink/90">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div>
                {col2.map((tag) => (
                  <div
                    key={tag}
                    className="py-4 sm:py-4.5 border-b border-[#EAE6DE]"
                  >
                    <span className="font-sans text-[13.5px] sm:text-[15px] tracking-[0.2em] uppercase font-medium text-ink/90">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
