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
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f1ec]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-serif text-[2rem] leading-none tracking-[-0.05em] text-black sm:text-[2.15rem]"
          >
            Ommino
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[13px] uppercase tracking-[0.08em] text-black/58 transition duration-200 hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden h-11 items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-black transition duration-200 hover:bg-white md:inline-flex"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 transition duration-200 hover:bg-white md:hidden"
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
          className="absolute inset-0 bg-black/12"
        />

        <div className="flex min-h-screen items-start justify-end px-3 pt-3">
          <div
            className={`relative w-full max-w-[380px] overflow-hidden rounded-[26px] border border-black/10 bg-[#f3f1ec] shadow-[0_20px_70px_rgba(0,0,0,0.12)] transition-all duration-300 ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "-translate-y-2 scale-[0.98] opacity-0"
            }`}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-serif text-[1.85rem] leading-none tracking-[-0.05em] text-black"
              >
                Ommino
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/75 transition duration-200 hover:bg-white"
              >
                <span className="absolute h-[1.5px] w-[18px] rotate-45 rounded-full bg-black" />
                <span className="absolute h-[1.5px] w-[18px] -rotate-45 rounded-full bg-black" />
              </button>
            </div>

            <div className="border-t border-black/10 px-5 pb-6 pt-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/58">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/15 text-[10px]">
                  ⌘
                </span>
                <span>Creative Digital Agency</span>
              </div>

              <p className="mt-4 max-w-[18rem] font-mono text-[14px] leading-[1.8] text-black/60">
                Clean websites, branding, and digital design for modern
                businesses.
              </p>

              <nav className="mt-7 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between border-b border-black/10 py-4"
                  >
                    <span className="font-mono text-[13px] uppercase tracking-[0.08em] text-black transition duration-200">
                      {link.label}
                    </span>

                    <span className="font-mono text-[13px] text-black/35 transition duration-200 group-hover:translate-x-1 group-hover:text-black">
                      ↗
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f1f1f] px-6 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:bg-black"
                >
                  Start a Project
                </Link>

                <a
                  href="mailto:hello@ommino.com"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/75 px-6 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-black transition duration-200 hover:bg-white"
                >
                  hello@ommino.com
                </a>
              </div>

              <div className="mt-6 border-t border-black/10 pt-4">
                <p className="font-mono text-[12px] leading-6 text-black/45">
                  Creative digital agency with a calm, strategic, and premium
                  approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}