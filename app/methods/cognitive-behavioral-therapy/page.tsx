import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { methodPages } from "@/lib/content";

const page = methodPages["cognitive-behavioral-therapy"];

export const metadata: Metadata = {
  title: "Cognitive Behavioral Therapy (CBT) in Santa Monica | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function CBTPage() {
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
      ctaBackgroundImage={(page as any).ctaBackgroundImage || "/cta-beach-2.png"}
      heroTextClassName="lg:mr-[-190px]"
      heroImageClassName="lg:-mt-170 lg:-left-18"
      heroImageSrc="/images/Gemini_Generated_Image_m2q7nzm2q7nzm2q7.png"
      sectionImageSrc="/images/section_anxiety.png"
    />
  );
}
