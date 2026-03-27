export default function AboutSection() {
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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-20">
          
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/58">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/15 text-[10px]">
                ⌘
              </span>
              <span>Studio</span>
            </div>

            <h2 className="mt-5 max-w-[12ch] font-serif text-[2.85rem] leading-[0.95] tracking-[-0.055em] text-black sm:text-[3.8rem] lg:text-[4.6rem]">
              A small studio focused on clarity and long-term design thinking.
            </h2>

            <p className="mt-6 max-w-[32rem] font-mono text-[15px] leading-[1.9] text-black/62 sm:text-[16px]">
              We work closely with businesses that want to present themselves
              more clearly and confidently online.
            </p>

            <p className="mt-4 max-w-[32rem] font-mono text-[15px] leading-[1.9] text-black/62 sm:text-[16px]">
              Rather than chasing trends, we focus on building digital
              experiences that feel calm, intentional, and built to last.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 sm:gap-7">
            
            {/* IMAGE BLOCK */}
            <div className="overflow-hidden rounded-[26px] border border-black/10 bg-white/70 p-3">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#e9e6df]">
                {/* Replace with real image later */}
                <div className="flex h-full w-full items-center justify-center font-mono text-sm text-black/40">
                  Studio / Founder Image
                </div>
              </div>
            </div>

            {/* SMALL NOTE (instead of heavy testimonial) */}
            <p className="max-w-[28rem] font-mono text-[14px] leading-[1.8] text-black/55">
              A focused team working across design and development, helping
              businesses build a more refined and consistent digital presence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}