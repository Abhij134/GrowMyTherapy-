"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { nav, site, contact } from "@/lib/content";
import clsx from "clsx";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#F7F3EE]/95 backdrop-blur-sm shadow-[0_1px_20px_rgba(28,43,53,0.08)]"
            : "bg-[#F7F3EE]"
        )}
      >
        <div className="site-container">
          <nav className="flex items-center justify-between h-[80px]" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" aria-label="Home">
              <span className="font-serif text-[1.35rem] font-normal text-ink tracking-tight group-hover:text-primary transition-colors duration-200">
                Maya Reynolds
              </span>
              <span className="text-[0.65rem] tracking-[0.18em] uppercase text-muted font-sans font-light mt-0.5">
                PsyD · Clinical Psychologist
              </span>
            </Link>

            {/* Desktop nav */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-7">
              {nav.links.map((link: NavLink) =>
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center gap-1 text-[0.78rem] tracking-[0.12em] uppercase font-sans text-ink hover:text-primary transition-colors duration-200"
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <svg
                        className={clsx("w-3 h-3 transition-transform duration-200", openDropdown === link.label && "rotate-180")}
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white shadow-soft rounded-lg py-2 border border-[#E8E3DC]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-2.5 text-[0.78rem] text-ink hover:text-primary hover:bg-primary-soft transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[0.78rem] tracking-[0.12em] uppercase font-sans text-ink hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* CONTACT pill */}
              <Link
                href={contact.bookingUrl}
                className="ml-2 text-[0.72rem] tracking-[0.14em] uppercase font-sans text-ink border border-ink rounded-full px-5 py-2 hover:bg-ink hover:text-[#F7F3EE] transition-all duration-200"
              >
                {nav.cta.label}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={clsx(
                  "block w-6 h-[1.5px] bg-ink transition-all duration-300",
                  mobileOpen && "translate-y-[6.5px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "block w-6 h-[1.5px] bg-ink transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "block w-6 h-[1.5px] bg-ink transition-all duration-300",
                  mobileOpen && "-translate-y-[6.5px] -rotate-45"
                )}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-[#F7F3EE] flex flex-col pt-[80px] transition-all duration-300 lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="site-container py-8 flex flex-col gap-6">
          {nav.links.map((link: NavLink) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-serif text-2xl text-ink hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-3 pl-4 flex flex-col gap-2 border-l border-[#E8E3DC]">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-muted hover:text-primary transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 pt-6 border-t border-[#E8E3DC]">
            <Link
              href={contact.bookingUrl}
              onClick={() => setMobileOpen(false)}
              className="inline-block text-[0.8rem] tracking-[0.14em] uppercase font-sans text-ink border border-ink rounded-full px-6 py-3 hover:bg-ink hover:text-[#F7F3EE] transition-all duration-200"
            >
              {nav.cta.label}
            </Link>
          </div>
          <div className="mt-auto pt-8 text-sm text-muted">
            <p>{site.credential}</p>
            <p className="mt-1">{contact.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
