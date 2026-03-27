import Link from "next/link";

const projects = [
  {
    title: "Nordic Atelier",
    category: "Brand Website",
    description:
      "A refined digital presence designed to make the brand feel more established and premium online.",
    meta: "Positioning · Web Design",
  },
  {
    title: "Rosan Clinic",
    category: "Website Refresh",
    description:
      "A cleaner and more credible presentation built around trust, clarity, and calm visual structure.",
    meta: "UX/UI · Responsive Design",
  },
  {
    title: "Aven Social",
    category: "Content System",
    description:
      "A more consistent visual direction across campaign assets and social content.",
    meta: "Social Design · Content Assets",
  },
];

export default function FeaturedWork() {
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
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/58">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/15 text-[10px]">
                ⌘
              </span>
              <span>Selected Work</span>
            </div>

            <h2 className="mt-5 max-w-[12ch] font-serif text-[2.8rem] leading-[0.95] tracking-[-0.055em] text-black sm:text-[3.8rem] lg:text-[4.6rem]">
              A curated look at work shaped by clarity and restraint.
            </h2>
          </div>

          <div className="max-w-[34rem] lg:justify-self-end">
            <p className="font-mono text-[15px] leading-[1.9] text-black/62 sm:text-[16px]">
              Selected projects that show a calmer, more considered approach to
              digital presence and brand perception.
            </p>

            <div className="mt-7">
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/75 px-6 font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-black transition duration-200 hover:bg-white"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[24px] border border-black/10 bg-white/78 shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="p-4">
                <div className="aspect-[4/3] overflow-hidden rounded-[20px] border border-black/10 bg-[#f6f3ed]">
                  <svg
                    viewBox="0 0 400 300"
                    className="h-full w-full transition duration-500 group-hover:scale-[1.02]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="400" height="300" fill="#f8f6f1" />

                    <rect
                      x="20"
                      y="20"
                      width="360"
                      height="40"
                      rx="12"
                      fill="#ffffff"
                      stroke="#e8e4dc"
                    />

                    <rect
                      x="20"
                      y="80"
                      width="220"
                      height="140"
                      rx="16"
                      fill="#ffffff"
                      stroke="#e8e4dc"
                    />

                    <rect
                      x="260"
                      y="80"
                      width="120"
                      height="60"
                      rx="14"
                      fill="#ffffff"
                      stroke="#e8e4dc"
                    />

                    <rect
                      x="260"
                      y="160"
                      width="120"
                      height="60"
                      rx="14"
                      fill="#1f1f1f"
                    />

                    <circle cx="340" cy="40" r="4" fill="#111111" opacity="0.6" />
                  </svg>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/42">
                      {project.category}
                    </p>

                    <h3 className="mt-3 font-serif text-[1.9rem] leading-[0.98] tracking-[-0.05em] text-black sm:text-[2.15rem]">
                      {project.title}
                    </h3>
                  </div>

                  <Link
                    href="/portfolio"
                    aria-label={`View ${project.title}`}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f3f1ec] font-mono text-sm text-black/45 transition duration-200 group-hover:bg-[#1f1f1f] group-hover:text-white"
                  >
                    ↗
                  </Link>
                </div>

                <p className="mt-4 font-mono text-[15px] leading-[1.85] text-black/60">
                  {project.description}
                </p>

                <div className="mt-6 border-t border-black/8 pt-4">
                  <p className="font-mono text-[14px] text-black/46">
                    {project.meta}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}