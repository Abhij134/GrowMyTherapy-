import { testimonial } from "@/lib/content";

export default function Testimonial() {
  return (
    <section className="bg-secondary py-20 md:py-28 lg:py-32 border-t border-ink/5">
      <div className="site-container">
        <div className="max-w-[880px] mx-auto text-center px-4">
          <blockquote className="space-y-6">
            <p className="font-serif text-[1.75rem] sm:text-[2.2rem] md:text-[2.6rem] font-light italic leading-[1.35] text-ink tracking-tight">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer>
              <cite className="font-sans text-[12px] tracking-[0.16em] uppercase text-subtext font-semibold not-italic block">
                — {testimonial.attribution}
              </cite>
              <span className="font-sans text-[12px] text-muted/70 block mt-1">
                {testimonial.note}
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
