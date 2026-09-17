import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { specialtyPages } from "@/lib/content";

const page = specialtyPages["trauma-complex-ptsd"];

export const metadata: Metadata = {
  title: "Trauma & Complex PTSD Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function TraumaPTSDPage() {
  return (
    <SpecialtyPageLayout
      eyebrow={page.eyebrow}
      heading={page.heading}
      subtext={page.subtext}
      sections={page.sections}
      helpList={page.helpList}
      whoThisIsFor={page.whoThisIsFor}
      faqs={page.faqs}
      ctaHeading={page.ctaHeading}
      ctaSubtext={page.ctaSubtext}
      ctaButton={page.ctaButton}
      ctaFootnote={page.ctaFootnote}
      ctaBackgroundImage={page.ctaBackgroundImage}
      heroTextClassName="lg:mr-[-220px]"
      heroImageClassName="lg:-mt-160 lg:-left-18"
      heroImageSrc="/images/hero_specialty_new.png"
      sectionImageSrc="/images/section_trauma.png"
    />
  );
}
