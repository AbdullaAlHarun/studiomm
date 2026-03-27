import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f1ec]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl pt-2 lg:pt-6">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/58">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/15 text-[10px]">
                ⌘
              </span>
              <span>Creative Digital Agency</span>
            </div>

            <h1 className="mt-6 max-w-[10.5ch] font-serif text-[3.3rem] leading-[0.94] tracking-[-0.055em] text-black sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6rem]">
              Digital presence that makes businesses feel established.
            </h1>

            <p className="mt-6 max-w-[34rem] font-mono text-[15px] leading-[1.9] text-black/62 sm:text-[16px]">
              We create refined websites and brand systems that help modern
              businesses look credible, clear, and ready for growth.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f1f1f] px-6 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:bg-black"
              >
                Start a Project
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/75 px-6 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-black transition duration-200 hover:bg-white"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 font-mono text-[14px] text-black/58">
              <span className="inline-block h-3 w-3 bg-[#7ee8c7]" />
              <span>Currently accepting new projects</span>
            </div>
          </div>

          <div className="hidden md:block lg:pt-2">
            <div className="rounded-[28px] border border-black/10 bg-white/75 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-[2px] sm:p-5">
              <div className="rounded-[24px] border border-black/10 bg-[#f6f3ed] p-5 sm:p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/42">
                      Studio Preview
                    </p>
                    <p className="mt-3 max-w-sm font-serif text-[2rem] leading-[0.98] tracking-[-0.045em] text-black sm:text-[2.3rem]">
                      Calm, strategic presentation for ambitious brands
                    </p>
                  </div>

                  <div className="mt-1 h-3 w-3 rounded-full bg-black/70" />
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-[22px] border border-black/10 bg-white/85 p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/40">
                      Positioning
                    </p>
                    <p className="mt-3 font-serif text-[1.45rem] leading-[1.05] tracking-[-0.035em] text-black">
                      Clear, premium brand presence
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-black/10 bg-white/85 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/40">
                        Web
                      </p>
                      <p className="mt-3 font-serif text-[1.15rem] leading-[1.08] tracking-[-0.03em] text-black">
                        Modern responsive websites
                      </p>
                    </div>

                    <div className="rounded-[22px] border border-black/10 bg-white/85 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/40">
                        Brand
                      </p>
                      <p className="mt-3 font-serif text-[1.15rem] leading-[1.08] tracking-[-0.03em] text-black">
                        Consistent visual identity
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[22px] bg-[#1f1f1f] p-6 text-white">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                      Agency Focus
                    </p>
                    <p className="mt-3 max-w-md font-serif text-[1.55rem] leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.9rem]">
                      Design that builds trust before the first conversation starts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}