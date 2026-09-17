import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { specialtyPages } from "@/lib/content";

const page = specialtyPages["burnout-perfectionism"];

export const metadata: Metadata = {
  title: "Burnout Therapy for High-Achievers in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function BurnoutPage() {
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
      heroImageSrc="/images/hero_burnout.png"
      sectionImageSrc="/images/section_burnout.png"
    />
  );
}
