import Link from "next/link";
import { site, footer, contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-[#F7F3EE]/90">
      <div className="site-container pt-16 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* Brand block */}
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-serif text-[1.5rem] text-white tracking-tight">
                {site.name}
              </span>
              <span className="text-[0.62rem] tracking-[0.18em] uppercase text-[#F7F3EE]/50 font-sans font-light mt-1">
                {site.credential}
              </span>
            </div>
            <p className="text-[0.85rem] leading-relaxed text-[#F7F3EE]/60 max-w-[260px]">
              {footer.tagline}
            </p>
          </div>

          {/* Dynamic columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[0.65rem] tracking-[0.18em] uppercase font-sans text-[#F7F3EE]/40 mb-4">
                {col.heading}
              </h3>
              {"links" in col ? (
                <ul className="flex flex-col gap-2.5">
                  {col.links?.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.85rem] text-[#F7F3EE]/70 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-col gap-2">
                  {col.lines?.map((line, i) => (
                    <li key={i} className="text-[0.85rem] text-[#F7F3EE]/70">
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.75rem] text-[#F7F3EE]/40">{footer.copyright}</p>
          <div className="flex items-center gap-5">
            {footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.72rem] text-[#F7F3EE]/40 hover:text-[#F7F3EE]/70 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
