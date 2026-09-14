import Link from "next/link";
import { expertise } from "@/lib/content";

export default function ExpertiseTags() {
  return (
    <section id="methods" className="bg-secondary py-16 md:py-24">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start">
          {/* Left — heading with script accent (matches reference "Our areas of expertise" pattern) */}
          <div className="lg:pt-2">
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-ink leading-[1.15]">
              {expertise.heading}{" "}
              <span className="font-script text-primary italic">
                {expertise.headingAccent}
              </span>
            </h2>
          </div>

          {/* Right — 2-column tag list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
            {expertise.tags.map((tag) => (
              <div key={tag} className="py-3.5 border-b border-[#E1DBD2] flex items-center">
                <span className="text-[0.78rem] tracking-[0.12em] uppercase font-sans text-ink hover:text-primary transition-colors duration-200 cursor-default">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
