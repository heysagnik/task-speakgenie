"use client";

import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-brand/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        <div className="text-center">
          <h2 id="pricing-title" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Choose Your Plan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted">
            Start free, cancel anytime. No hidden charges.
          </p>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <PlanCard
            name="Starter"
            note="Perfect for new explorers"
            price="Free"
            cta={{ label: "Get Started", href: "#start" }}
            features={[
              "5 guided meditations",
              "2 sleep stories",
              "Parent starter kit",
            ]}
          />

          <PlanCard
            name="Premium"
            note="Unlock full potential"
            price="₹299/mo"
            cta={{ label: "Upgrade Now", href: "#upgrade" }}
            features={[
              "Unlimited meditations",
              "Sleep stories & calming music",
              "Printable guides for parents",
            ]}
          />

          <PlanCard
            name="Family"
            note="For multiple kids"
            price="₹499/mo"
            cta={{ label: "Get Family Plan", href: "#family" }}
            features={[
              "4 child profiles",
              "Rewards & streaks",
              "Classroom meditation pack",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  name,
  note,
  price,
  features,
  cta,
}: {
  name: string;
  note: string;
  price: string;
  features: string[];
  cta: { label: string; href: string };
}) {
  return (
    <div className="flex flex-col rounded-[var(--radius-xl)] bg-card p-6 sm:p-8 ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{name}</h3>
        <p className="mt-1 text-muted text-sm">{note}</p>
        <div className="mt-4 text-3xl sm:text-4xl font-extrabold text-brand">{price}</div>
      </div>

      <ul className="mt-5 space-y-2 text-sm sm:text-base text-foreground">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span aria-hidden className="mt-0.5 text-[18px] leading-none">✅</span>
            <span className="text-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={cta.href}
        className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/25 hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {cta.label}
      </a>
    </div>
  );
}