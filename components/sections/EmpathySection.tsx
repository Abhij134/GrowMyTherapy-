import Image from "next/image";
import { empathy } from "@/lib/content";

export default function EmpathySection() {
  return (
    <section id="about" className="bg-[#F6F4EE] pt-[60px] lg:pt-[120px] pb-[40px] lg:pb-[90px] relative z-0">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">
          {/* Left Content Area */}
          <div className="lg:col-span-7 pl-0 sm:pl-6 lg:pl-[48px] pr-0 lg:pr-[48px] flex flex-col justify-start">
            {/* Main Heading */}
            <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[56px] text-[#2B2B2B] font-light leading-[1.18] lg:leading-[64px] mb-[40px] tracking-[-0.015em] max-w-[780px]">
              {empathy.heading}
            </h2>

            {/* 2-Column Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 ml-0 lg:ml-[20px] gap-8 lg:gap-[40px] items-start">
              {/* Column 1 */}
              <div className="flex flex-col">
                {empathy.eyebrow && (
                  <p className="text-[13px] uppercase tracking-[0.18em] font-sans font-medium text-[#556359] leading-[20px] mb-[16px]">
                    {empathy.eyebrow}
                  </p>
                )}
                <p className="font-sans text-[16px] lg:text-[17px] leading-[30px] text-[#556359] font-light mb-4">
                  {empathy.col1}
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col">
                <p className="font-sans text-[16px] lg:text-[17px] leading-[30px] text-[#556359] font-light mb-4">
                  {empathy.col2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Portrait Beach Image Area */}
          <div className="lg:col-span-5 relative w-full lg:w-[81%] h-[450px] sm:h-[550px] lg:h-[620px] aspect-[4/5] overflow-hidden ml-0 lg:ml-[180px] mt-10 lg:mt-0">
            <Image
              src={empathy.image.src}
              alt={empathy.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 41.667vw"
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
