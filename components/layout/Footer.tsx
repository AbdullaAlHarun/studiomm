import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[#1c1c1c] text-white">
      
      {/* subtle grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-14 sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pb-12 lg:pt-20">
        
        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          
          {/* LEFT */}
          <div className="max-w-[36rem]">
            <Link
              href="/"
              className="inline-block font-serif text-[2.3rem] leading-none tracking-[-0.05em] text-white sm:text-[2.6rem]"
            >
              Ommino
            </Link>

            <p className="mt-6 max-w-[30rem] font-mono text-[14px] leading-[1.9] text-white/65 sm:text-[15px]">
              A calm digital partner for brands that want to look clear,
              credible, and established through thoughtful websites and
              brand-led digital experiences.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-10 sm:grid-cols-2 lg:justify-self-end lg:gap-14">
            
            {/* NAV */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                Navigation
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-mono text-[14px] leading-7 text-white/70 transition duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="mailto:hello@ommino.com"
                  className="font-mono text-[14px] leading-7 text-white/70 transition duration-200 hover:text-white"
                >
                  hello@ommino.com
                </a>

                <Link
                  href="/contact"
                  className="font-mono text-[14px] leading-7 text-white/70 transition duration-200 hover:text-white"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            
            <p className="font-mono text-[12px] leading-6 text-white/45">
              © 2026 Ommino. All rights reserved.
            </p>

            <p className="font-mono text-[12px] leading-6 text-white/45">
              Calm, strategic, and premium digital design.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}