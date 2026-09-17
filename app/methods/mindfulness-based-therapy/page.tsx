import type { Metadata } from "next";
import SpecialtyPageLayout from "@/components/layout/SpecialtyPageLayout";
import { methodPages } from "@/lib/content";

const page = methodPages["mindfulness-based-therapy"];

export const metadata: Metadata = {
  title: "Mindfulness-Based Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description: page.subtext,
};

export default function MindfulnessPage() {
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
      ctaBackgroundImage={page.ctaBackgroundImage || "/cta-beach-2.png"}
      heroTextClassName="lg:mr-[-80px]"
      heroImageClassName="lg:-mt-160 lg:-left-18"
      heroImageSrc="/images/hero_anxiety.png"
      sectionImageSrc="/images/section_burnout.png"
    />
  );
}
