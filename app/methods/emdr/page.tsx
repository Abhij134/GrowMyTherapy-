import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { methodPages } from "@/lib/content";

const page = methodPages["emdr"];

export const metadata: Metadata = {
  title: "EMDR Therapy — How It Works | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function EMDRMethodPage() {
  return (
    <SpecialtyPageLayout
      eyebrow={page.eyebrow}
      heading={page.heading}
      subtext={page.subtext}
      sections={page.sections}
      ctaHeading={page.ctaHeading}
      ctaSubtext={page.ctaSubtext}
      ctaButton={page.ctaButton}
      ctaFootnote={page.ctaFootnote}
      ctaBackgroundImage={page.ctaBackgroundImage || "/cta-transitions.png"}
      heroTextClassName="lg:mr-[-20px]"
      heroImageClassName="lg:-mt-160 lg:-left-18"
      heroImageSrc="/images/hero_emdr.png"
      sectionImageSrc="/images/section_emdr.png"
    />
  );
}
