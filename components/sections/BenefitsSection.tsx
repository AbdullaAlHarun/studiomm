const benefits = [
  {
    number: "01",
    title: "Clear Direction",
    description:
      "We focus on clarity before execution, helping every design and development decision feel intentional from the start.",
  },
  {
    number: "02",
    title: "Thoughtful Design",
    description:
      "Every detail is considered carefully so your business feels more credible, refined, and aligned with where it is going.",
  },
  {
    number: "03",
    title: "Built to Scale",
    description:
      "We create flexible digital systems that can grow with your business without feeling messy or disconnected later.",
  },
  {
    number: "04",
    title: "Consistent Output",
    description:
      "You can expect a steady, structured process with reliable communication and work that stays aligned from start to finish.",
  },
];

export default function BenefitsSection() {
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
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/58">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/15 text-[10px]">
                ⌘
              </span>
              <span>Benefits</span>
            </div>

            <h2 className="mt-5 max-w-[9ch] font-serif text-[2.85rem] leading-[0.93] tracking-[-0.06em] text-black sm:text-[3.8rem] lg:text-[4.65rem]">
              You&apos;re in good hands.
            </h2>

            <p className="mt-6 max-w-[30rem] font-mono text-[15px] leading-[1.9] text-black/62 sm:text-[16px]">
              We approach every project with clarity, structure, and a focus on
              long-term results — not just visual output.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-[24px] border border-black/10 bg-white/78 p-7 shadow-[0_3px_10px_rgba(0,0,0,0.035)] backdrop-blur-[2px] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)] sm:p-8"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/55">
                  {benefit.number}
                </div>

                <h3 className="mt-6 font-serif text-[1.8rem] leading-[0.98] tracking-[-0.045em] text-black sm:text-[2rem]">
                  {benefit.title}
                </h3>

                <p className="mt-5 max-w-[26rem] font-mono text-[15px] leading-[1.9] text-black/60">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}