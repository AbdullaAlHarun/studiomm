import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-2xl">
          <div className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black/60 shadow-sm sm:text-sm">
           Creative Digital Agency
          </div>

          <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-6xl xl:text-7xl">
            Clean digital presence for modern businesses.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
            We design websites, branding, and content systems that help
            businesses look professional and grow with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start a Project
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black transition hover:bg-black/[0.03]"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-lg font-semibold sm:text-xl">Web Design</p>
              <p className="mt-1 text-sm leading-6 text-black/55">
                Responsive sites built to convert.
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold sm:text-xl">Branding</p>
              <p className="mt-1 text-sm leading-6 text-black/55">
                Identity systems with clarity and style.
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold sm:text-xl">Content</p>
              <p className="mt-1 text-sm leading-6 text-black/55">
                Social creatives designed for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block lg:pl-4">
          <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-5">
            <div className="rounded-[1.75rem] border border-black/10 bg-[#ecece4] p-5 sm:p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/45 sm:text-sm">
                    Studio Preview
                  </p>
                  <p className="mt-1 text-lg font-semibold sm:text-xl">
                    Modern agency presentation
                  </p>
                </div>
                <div className="h-3 w-3 rounded-full bg-black/75" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                  <p className="text-sm text-black/45">Website Design</p>
                  <p className="mt-2 text-lg font-semibold sm:text-xl">
                    Professional brand presence
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                    <p className="text-sm text-black/45">Branding</p>
                    <p className="mt-2 font-semibold">Identity systems</p>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                    <p className="text-sm text-black/45">Content</p>
                    <p className="mt-2 font-semibold">Social creatives</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-black p-5 text-white sm:p-6">
                  <p className="text-sm text-white/55">Agency Focus</p>
                  <p className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                    Design that builds trust and makes brands feel premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}