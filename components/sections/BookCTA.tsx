import Image from "next/image";
import Link from "next/link";
import { bookCta } from "@/lib/content";

export default function BookCTA() {
  return (
    <section className="bg-secondary pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-14 overflow-hidden border-t border-ink/5 relative">
      {/* Left Flanking Image — Cropped more on left edge, lower opacity, plenty of gap to text */}
      <div className="hidden lg:block absolute -left-36 top-1/2 -translate-y-1/2 w-[280px] h-[520px] overflow-hidden pointer-events-none opacity-75">
        <Image
          src={bookCta.imageLeft?.src || "/images/Gemini_Generated_Image_joirjyjoirjyjoir.png"}
          alt={bookCta.imageLeft?.alt || "Desk view"}
          fill
          sizes="15vw"
          className="object-cover object-center"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">

        {/* Left Content Area — Exact 100% original positioning */}
        <div className="lg:col-span-7 pl-6 lg:pl-[300px] pr-6 lg:pr-12 flex flex-col justify-center relative z-10">
          <span className="text-[11px] sm:text-[16px] uppercase tracking-[0.22em] font-sans font-normal text-muted mb-10 lg:mb-26 block">
            SCHEDULE AN APPOINTMENT
          </span>

          <h2 className="font-serif text-[40px] sm:text-[50px] lg:text-[50px] font-light text-[#2B2B2B] mb-8 leading-[1.15] tracking-tight max-w-[600px]">
            Find a therapist who is the right fit for{" "}
            <span className="font-script text-primary font-normal text-[53px] sm:text-[55px] lg:text-[60px] inline-block ml-2 relative top-[6px] leading-none">
              you
            </span>
            .
          </h2>

          <p className="font-sans text-[16px] sm:text-[17px] leading-[30px] text-[#556359] font-light mb-6 max-w-[640px]">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>

          <p className="font-sans text-[16px] sm:text-[17px] leading-[30px] text-[#556359] font-light mb-10 max-w-[640px]">
            Click the button below to schedule an appointment.
          </p>

          <div>
            <Link
              href={bookCta.cta.href}
              id="schedule"
              className="text-[11px] sm:text-[11.5px] tracking-[0.22em] uppercase font-sans font-medium text-ink border border-ink rounded-full px-9 py-3.5 hover:bg-ink hover:text-white transition-all duration-200 inline-block"
            >
              BOOK NOW
            </Link>
          </div>
        </div>

        {/* Right Beach/Coastal Image Area — Attached flush to right edge */}
        <div className="lg:col-span-4 lg:col-start-9 relative w-full h-[380px] sm:h-[480px] lg:h-[700px] overflow-hidden">
          <Image
            src={bookCta.imageRight?.src || "/images/Gemini_Generated_Image_7gmc8c7gmc8c7gmc.png"}
            alt={bookCta.imageRight?.alt || "Therapy session"}
            fill
            sizes="(max-width: 1024px) 100vw, 41.667vw"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}
