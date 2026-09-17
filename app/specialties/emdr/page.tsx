import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { specialtyPages } from "@/lib/content";

const page = specialtyPages["emdr"];

export const metadata: Metadata = {
  title: "EMDR Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function EMDRSpecialtyPage() {
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
      heroImageSrc="/images/hero_emdr.png"
      sectionImageSrc="/images/section_emdr.png"
    />
  );
}
