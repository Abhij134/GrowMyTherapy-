import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { methodPages } from "@/lib/content";

const page = methodPages["body-oriented-work"];

export const metadata: Metadata = {
  title: "Body-Oriented & Somatic Therapy in Santa Monica | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function BodyOrientedPage() {
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
      ctaBackgroundImage={page.ctaBackgroundImage || "/cta-trauma.png"}
      heroTextClassName="lg:mr-[-220px]"
      heroImageClassName="lg:-mt-160 lg:-left-18"
      heroImageSrc="/images/Gemini_Generated_Image_12ynsm12ynsm12yn.png"
      sectionImageSrc="/images/section_trauma.png"
    />
  );
}
