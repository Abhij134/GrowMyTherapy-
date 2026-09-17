import { howWeWorkSteps } from "@/lib/content";

export default function HowWeWorkSteps() {
  return (
    <section className="bg-secondary py-20 md:py-28 lg:py-32 border-t border-ink/5">
      <div className="site-container">
        <span className="section-subtag">The Process</span>
        <h2 className="font-serif text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] font-light text-ink mb-12 md:mb-16 leading-[1.22] max-w-[600px] tracking-tight">
          {howWeWorkSteps.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {howWeWorkSteps.steps.map((step) => (
            <div
              key={step.number}
              className="relative py-6 md:py-0 border-b md:border-b-0 border-ink/10 last:border-b-0"
            >
              {/* Step number — large serif accent */}
              <span
                className="block font-serif text-[3.8rem] md:text-[4.5rem] leading-none font-light text-primary/40 select-none mb-3"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <h3 className="font-serif text-[1.4rem] md:text-[1.55rem] font-normal text-ink mb-3 leading-[1.25]">
                {step.title}
              </h3>
              <p className="font-sans text-[0.95rem] md:text-[1rem] leading-[1.7] text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
