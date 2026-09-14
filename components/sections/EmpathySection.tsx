import { empathy } from "@/lib/content";

export default function EmpathySection() {
  return (
    <section
      id="about"
      className="bg-secondary py-20 md:py-28"
    >
      <div className="site-container">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="font-serif text-[1.9rem] md:text-[2.4rem] text-ink mb-6 leading-[1.2]">
            {empathy.heading}
          </h2>
          <p className="font-sans text-[1rem] md:text-[1.05rem] leading-[1.8] text-muted">
            {empathy.body}
          </p>
        </div>
      </div>
    </section>
  );
}
