import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { specialtyPages } from "@/lib/content";

const page = specialtyPages["anxiety-panic"];

export const metadata: Metadata = {
  title: "Anxiety Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function AnxietyPanicPage() {
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
      heroImageSrc="/images/hero_anxiety.png"
      sectionImageSrc="/images/section_anxiety.png"
    />
  );
}
