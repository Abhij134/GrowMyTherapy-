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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#F6F4EE]/95 backdrop-blur-md shadow-[0_1px_15px_rgba(43,43,43,0.05)]"
            : "bg-[#F6F4EE]"
        )}
      >
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <nav className="flex items-center justify-between h-[120px]" aria-label="Main navigation">
            {/* Logo — prominent & elegant font scaling */}
            <Link href="/" className="flex flex-col group py-1" aria-label="Home">
              <span className="font-serif text-[25px] sm:text-[40px] font-normal text-[#2B2B2B] leading-[1.15] tracking-[-0.04em] group-hover:text-[#749D97] transition-colors duration-200">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="text-[13px] tracking-[0.2em] uppercase text-[#86B3B3] font-sans font-medium mt-[2px] ml-1 sm:ml-[34px]">
                CLINICAL PSYCHOLOGY
              </span>
            </Link>

            {/* Desktop nav links — larger text & clear letter spacing */}
            <div ref={dropdownRef} className="hidden lg:flex items-center gap-[42px]">
              {nav.links.map((link: NavLink) =>
                link.children ? (
                  <div key={link.label} className="relative group py-2">
                    <Link
                      href={link.href}
                      className="text-[13px] tracking-[0.2em] uppercase font-sans font-medium text-[#2B2B2B] hover:text-[#749D97] transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>

                    {/* Dropdown menu */}
                    <div className="absolute top-full right-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 min-w-[240px]">
                      <div className="flex flex-col items-end gap-3 py-4 pl-8 bg-[#F6F4EE]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="text-[13px] tracking-[0.18em] uppercase font-sans text-[#2B2B2B] hover:underline underline-offset-4 transition-all duration-150 text-right whitespace-nowrap py-1.5 w-full"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[13px] tracking-[0.2em] uppercase font-sans font-medium text-[#2B2B2B] hover:text-[#749D97] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* CONTACT pill button — larger text & generous padding */}
              <Link
                href={contact.bookingUrl || "/contact"}
                className="text-[12px] tracking-[0.2em] uppercase font-sans font-medium text-[#2B2B2B] border border-[#2B2B2B] rounded-full px-[31px] py-[10px] hover:bg-[#2B2B2B] hover:text-[#F6F4EE] transition-all duration-200 inline-flex items-center justify-center min-w-[140px]"
              >
                CONTACT
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={clsx(
                  "block w-6 h-[1.5px] bg-[#2B2B2B] transition-all duration-300",
                  mobileOpen && "translate-y-[6.5px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "block w-6 h-[1.5px] bg-[#2B2B2B] transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "block w-6 h-[1.5px] bg-[#2B2B2B] transition-all duration-300",
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
          "fixed inset-0 z-40 bg-[#F6F4EE] flex flex-col pt-[105px] overflow-y-auto pb-10 transition-all duration-300 lg:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="site-container py-6 flex flex-col gap-4">
          {nav.links.map((link: NavLink) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-serif text-2xl text-[#2B2B2B] hover:text-[#749D97] transition-colors duration-200"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-3 pl-4 flex flex-col gap-2 border-l border-[#2B2B2B]/15">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-[#2B2B2B]/70 hover:text-[#749D97] transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block font-serif text-2xl text-[#2B2B2B] hover:text-[#749D97] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          <div className="mt-4 pt-6 border-t border-[#2B2B2B]/15">
            <Link
              href={contact.bookingUrl || "/contact"}
              onClick={() => setMobileOpen(false)}
              className="inline-block text-[11px] tracking-[0.22em] uppercase font-sans text-[#2B2B2B] border border-[#2B2B2B] rounded-full px-7 py-3 hover:bg-[#2B2B2B] hover:text-[#F6F4EE] transition-all duration-200"
            >
              CONTACT
            </Link>
          </div>
          <div className="mt-auto pt-8 text-xs text-[#2B2B2B]/60 tracking-wider">
            <p>{site.credential}</p>
            <p className="mt-1">{contact.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
