import Link from "next/link";
import { footer } from "@/lib/content";

export default function Footer() {
  const { tagline, copyright } = footer;

  return (
    <footer className="bg-white border-t border-[#2B2B2B]/10 pt-28 sm:pt-32 lg:pt-45 pb-0 overflow-hidden">
      {/* Top Pure White Block matching attached reference screenshot 1:1 */}
      <div className="w-full pl-6 lg:pl-[120px] pr-6 lg:pr-[120px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — Logo Title & Subtitle matching Conejo Valley screenshot */}
          <div className="lg:col-span-5 flex flex-col justify-start relative lg:left-[0px] lg:-top-[87px]">
            <Link href="/" className="group mb-5 inline-block">
              <h2 className="font-serif text-[44px] sm:text-[50px] lg:text-[56px] font-light text-[#2B2B2B] leading-none tracking-tight">
                Dr. Maya Reynolds
              </h2>
              <span className="text-[12px] sm:text-[22px] tracking-[0.2em] uppercase font-sans font-medium text-[#86B3B3] block mt-4 mt-[-1px]">
                CLINICAL PSYCHOLOGY
              </span>
            </Link>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.85] text-[#556359] max-w-[350px] mt-[-3px]">
              We want to make getting started simple. You&apos;re welcome to come into our office in Santa Monica or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Right Columns — NAVIGATE, SPECIALTIES, CONTACT matching screenshot */}
          <div className="lg:col-span-7 relative lg:-top-[100px] lg:right-[20px] mt-10 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14">

              {/* Column 1 — NAVIGATE */}
              <div>
                <span className="text-[13px] sm:text-[14px] tracking-[0.15em] uppercase font-sans font-medium text-[#556359] mb-6 block">
                  NAVIGATE
                </span>
                <ul className="flex flex-col gap-1.5 font-sans text-[15px] sm:text-[16px] leading-[1.3] text-[#556359] font-light">
                  <li><Link href="/" className="hover:text-[#2B2B2B] transition-colors">Home</Link></li>
                  <li><Link href="/about" className="hover:text-[#2B2B2B] transition-colors">About</Link></li>
                  <li><Link href="/faqs" className="hover:text-[#2B2B2B] transition-colors">FAQs</Link></li>
                  <li><Link href="/contact" className="hover:text-[#2B2B2B] transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Column 2 — SPECIALTIES */}
              <div>
                <span className="text-[13px] sm:text-[14px] tracking-[0.15em] uppercase font-sans font-medium text-[#556359] mb-6 block">
                  SPECIALTIES
                </span>
                <ul className="flex flex-col gap-1.5 font-sans text-[15px] sm:text-[16px] leading-[1.3] text-[#556359] font-light">
                  <li><Link href="/specialties/anxiety-panic" className="hover:text-[#2B2B2B] transition-colors">Anxiety &amp; Panic</Link></li>
                  <li><Link href="/specialties/trauma-complex-ptsd" className="hover:text-[#2B2B2B] transition-colors">Trauma &amp; Complex PTSD</Link></li>
                  <li><Link href="/specialties/burnout-perfectionism" className="hover:text-[#2B2B2B] transition-colors">Burnout &amp; Perfectionism</Link></li>
                  <li><Link href="/methods/emdr" className="hover:text-[#2B2B2B] transition-colors">EMDR Therapy</Link></li>
                </ul>
              </div>

              {/* Column 3 — CONTACT */}
              <div>
                <span className="text-[13px] sm:text-[14px] tracking-[0.15em] uppercase font-sans font-medium text-[#556359] mb-6 block">
                  CONTACT
                </span>
                <div className="flex flex-col gap-1.5 font-sans text-[15px] sm:text-[16px] leading-[1.3] text-[#556359] font-light">
                  <p>123 W 45th St</p>
                  <p>Suite 200</p>
                  <p>Santa Monica, CA 90401</p>
                  <p className="mt-2">hello@mayareynoldspsyd.com</p>
                  <p>(310) 555-0192</p>
                  <p className="mt-4 text-[14px] text-[#556359]/90 leading-[1.6]">
                    Serving Santa Monica, Venice, West LA, &amp; CA via telehealth.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Full-Width Teal Strip (#86B3B3) matching reference screenshot 1:1 */}
      <div className="bg-[#86B3B3] py-2 pl-6 lg:pl-[120px] pr-6 lg:pr-[120px] text-white text-[14px] sm:text-[15px] font-sans font-light flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-white/95">
          <Link href="/terms" className="hover:underline">Terms</Link>
          <span>|</span>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
        </div>
        <p className="text-white/95">{copyright}</p>
      </div>
    </footer>
  );
}
