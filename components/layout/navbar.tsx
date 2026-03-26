"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-[1.05rem] font-semibold tracking-[-0.04em] text-black sm:text-[1.1rem]"
          >
            StudioMM
          </Link>

          <nav className="hidden items-center gap-7 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-[-0.01em] text-black/65 transition duration-200 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden h-11 items-center justify-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-black transition duration-200 hover:bg-black/[0.03] md:inline-flex"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition duration-200 hover:bg-black/[0.03] md:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-[18px] rounded-full bg-black transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-[18px] rounded-full bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-[18px] rounded-full bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/10"
        />

        <div className="flex min-h-screen items-start justify-end px-3 pt-2">
          <div
            className={`absolute right-3 top-[70px] w-full max-w-[360px] rounded-[2rem] border border-black/10 bg-[#f7f7f2] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.12)] transition-all duration-300 ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-2 scale-[0.97] opacity-0"
            }`}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-[1.05rem] font-semibold tracking-[-0.04em] text-black"
              >
                StudioMM
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition duration-200 hover:bg-black/[0.03]"
              >
                <span className="absolute h-[1.5px] w-[18px] rotate-45 rounded-full bg-black" />
                <span className="absolute h-[1.5px] w-[18px] -rotate-45 rounded-full bg-black" />
              </button>
            </div>

            <div className="border-t border-black/15 px-5 pb-6 pt-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/40">
                 Creative Digital Agency
              </p>

              <p className="mt-2 max-w-[17rem] text-sm leading-6 text-black/58">
                Clean websites, branding, and digital design for modern businesses.
              </p>

              <nav className="mt-7 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between border-b border-black/10 py-4 text-[1rem] font-medium tracking-[-0.03em] text-black transition-all duration-200"
                  >
                    <span>{link.label}</span>
                    <span className="text-sm text-black/30 transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition duration-200 hover:opacity-90"
                >
                  Start a Project
                </Link>

                <a
                  href="mailto:hello@studiomm.com"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black transition duration-200 hover:bg-black/[0.03]"
                >
                  hello@studiomm.com
                </a>
              </div>

              <div className="mt-6 border-t border-black/10 pt-4">
                <p className="text-xs tracking-[-0.01em] text-black/42">
                  Creative digital agency with a calm, premium approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}