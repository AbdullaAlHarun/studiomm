import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8">
      <div className="max-w-2xl">
        <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/65 shadow-sm">
          Norway × Saudi Arabia · Creative Digital Agency
        </div>

        <h1 className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl xl:text-7xl">
          Clean digital
          <br />
          experiences for
          <br />
          modern brands.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
          We help businesses grow through web design, branding, graphics, and
          social media with a clean strategy-first approach.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Start a Project
          </Link>

          <Link
            href="/portfolio"
            className="rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/[0.03]"
          >
            View Portfolio
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold">Websites</p>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Modern, responsive, conversion-focused.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Branding</p>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Visual identity with clarity and style.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold">Content</p>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Creative assets designed for growth.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="rounded-[1.75rem] border border-black/10 bg-[#ecece4] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-black/55">
                  Studio Preview
                </p>
                <p className="mt-1 text-lg font-semibold">
                  Modern agency presentation
                </p>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm text-black/45">Website Design</p>
                <p className="mt-2 text-xl font-semibold">
                  Professional brand presence
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-black/45">Branding</p>
                  <p className="mt-2 font-semibold">Identity systems</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-black/45">Content</p>
                  <p className="mt-2 font-semibold">Social creatives</p>
                </div>
              </div>

              <div className="rounded-2xl bg-black p-6 text-white">
                <p className="text-sm text-white/55">Agency Focus</p>
                <p className="mt-3 text-2xl font-semibold leading-snug">
                  Design that builds trust and helps brands look premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}