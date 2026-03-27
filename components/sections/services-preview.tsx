"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    title: "Consulting",
    description:
      "We help shape digital direction, user experience, and business-focused decisions so every move feels clearer and more intentional.",
    icon: "⌘",
    tint: "bg-[#f6dfd7] text-[#d9755f]",
  },
  {
    title: "Design",
    description:
      "From interface systems to visual direction, we craft experiences that feel distinct, usable, and aligned with how your brand should be perceived.",
    icon: "✎",
    tint: "bg-[#dfe9fb] text-[#6f95d8]",
  },
  {
    title: "Engineering",
    description:
      "We build fast, scalable websites and digital experiences with clean implementation, strong foundations, and room for future growth.",
    icon: "▣",
    tint: "bg-[#f7e7bf] text-[#dd9d25]",
  },
];

const audienceGroups = [
  {
    title: "For Startups & SMBs",
    description:
      "We help smaller teams move faster with thoughtful design, conversion-focused websites, and a flexible partner that can support growth without unnecessary complexity.",
    href: "/services/startups",
  },
  {
    title: "For Enterprises",
    description:
      "We support larger organizations with scalable design systems, premium web experiences, and reliable execution across more complex digital needs.",
    href: "/services/enterprise",
  },
];

function AudienceAccordionItem({
  title,
  description,
  href,
  isOpen,
  onToggle,
}: {
  title: string;
  description: string;
  href: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-[20px] bg-[#1f1f1f] text-white shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
      >
        <span className="font-mono text-[0.98rem] font-semibold uppercase tracking-[0.05em] text-white sm:text-[1.05rem]">
          {title}
        </span>

        <span
          className={`relative block h-5 w-5 shrink-0 transition duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white" />
          <span
            className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-7 pb-7 pt-0">
            <p className="max-w-[56ch] font-mono text-[15px] leading-[1.8] text-white/78 sm:text-[16px]">
              {description}
            </p>

            <Link
              href={href}
              className="mt-5 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[0.08em] text-white/70 transition hover:text-white"
            >
              Explore
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  const [openItem, setOpenItem] = useState<string | null>("For Startups & SMBs");

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

      <div className="relative mx-auto max-w-[1600px] px-5 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/60">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/15 text-[10px]">
              ⌘
            </span>
            <span>Services &amp; Use Cases</span>
          </div>

          <h2 className="mt-5 max-w-3xl font-serif text-[2.8rem] leading-[0.95] tracking-[-0.05em] text-black sm:text-[4rem] lg:text-[4.8rem]">
            A Full Stack Studio with a Strategic Approach.
          </h2>

          <p className="mt-6 max-w-3xl font-mono text-[15px] leading-[1.85] text-black/65 sm:text-[17px]">
            We design, refine, and build digital experiences with clarity —
            combining strategy, design, and development to create work that
            feels elevated, useful, and built for long-term growth.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[22px] border border-black/10 bg-white/75 px-7 py-7 shadow-[0_4px_14px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg ${service.tint}`}
                >
                  {service.icon}
                </div>

                <h3 className="font-mono text-[1.05rem] font-semibold uppercase tracking-[0.05em] text-black/75 sm:text-[1.15rem]">
                  {service.title}
                </h3>
              </div>

              <p className="mt-6 max-w-sm font-mono text-[15px] leading-[1.8] text-black/58">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="font-mono text-[15px] text-black/58 sm:text-[16px]">
            We work with teams of all sizes
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {audienceGroups.map((group) => {
              const isOpen = openItem === group.title;

              return (
                <AudienceAccordionItem
                  key={group.title}
                  title={group.title}
                  description={group.description}
                  href={group.href}
                  isOpen={isOpen}
                  onToggle={() =>
                    setOpenItem((current) =>
                      current === group.title ? null : group.title
                    )
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}