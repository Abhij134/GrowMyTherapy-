import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import EmpathySection from "@/components/sections/EmpathySection";
import HowICanHelp from "@/components/sections/HowICanHelp";
import QuoteBanner from "@/components/sections/QuoteBanner";
import ExpertiseTags from "@/components/sections/ExpertiseTags";
import HowWeWork from "@/components/sections/HowWeWork";
import OurOffice from "@/components/sections/OurOffice";
import Specialties from "@/components/sections/Specialties";
import BookCTA from "@/components/sections/BookCTA";

/**
 * Page composition only — no content or styles here.
 * All copy lives in lib/content.ts.
 * Section order mirrors the verified reference (Conejo Valley Counseling, 1280px screenshot).
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EmpathySection />
        <HowICanHelp />
        <QuoteBanner />
        <ExpertiseTags />
        <HowWeWork />
        <OurOffice />
        <Specialties />
        <BookCTA />
      </main>
      <Footer />
    </>
  );
}
