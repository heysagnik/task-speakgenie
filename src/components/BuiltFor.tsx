"use client";

import React from "react";

export default function BuiltFor() {
  return (
    <section id="built-for" aria-labelledby="built-title" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-14 md:pt-20 pb-20 md:pb-28">
        <h2 id="built-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Built for Kids, Loved by Parents
        </h2>

       
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} title={f.title} desc={f.desc} />
          ))}
        </div>

       
        <h3 className="mt-16 md:mt-20 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Why Choose Mindery Kids Over Others?
        </h3>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 rounded-[var(--radius-xl)] ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
            <thead>
              <tr className="bg-[#f5f3ff] text-foreground">
                <Th className="rounded-tl-[var(--radius-xl)]">Feature</Th>
                <Th>Mindery Kids</Th>
                <Th className="rounded-tr-[var(--radius-xl)]">Other Apps</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className="bg-card">
                  <Td first>{r.feature}</Td>
                  <Td>{r.ours}</Td>
                  <Td last>{r.others}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-card p-5 sm:p-6 ring-1 ring-[#e6eaf5] shadow-sm">
      <h4 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 text-muted">{desc}</p>
    </div>
  );
}

function Th({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <th
      className={`px-5 py-3 text-left text-sm font-semibold text-muted-foreground ring-1 ring-[#e6eaf5] ${className}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  first,
  last,
}: React.PropsWithChildren<{ first?: boolean; last?: boolean }>) {
  return (
    <td
      className={[
        "px-5 py-4 text-sm sm:text-base text-foreground align-top",
        "ring-1 ring-[#e6eaf5] bg-card",
        first ? "rounded-bl-[var(--radius-xl)]" : "",
        last ? "rounded-br-[var(--radius-xl)]" : "",
      ].join(" ")}
    >
      {children}
    </td>
  );
}

const features = [
  {
    title: "Ad‑Free & Safe",
    desc: "Child-first design with privacy controls and no external ads.",
  },
  {
    title: "Rewards that Motivate",
    desc: "Stars, badges, and gentle streaks encourage healthy habits—no pressure.",
  },
  {
    title: "Offline Access",
    desc: "Download favorite sessions for calm on the go.",
  },
  {
    title: "Sleep Mode",
    desc: "Fade-out music and dim visuals help kids drift off peacefully.",
  },
  {
    title: "Classroom Friendly",
    desc: "Teacher packs with 5‑minute start‑of‑class resets and posters.",
  },
  {
    title: "Multi‑Child Profiles",
    desc: "Personalized tracks for each child in the family.",
  },
];

const rows = [
  {
    feature: "Child‑Friendly Guided Meditations",
    ours: "✅ Story‑based, fun & short",
    others: "❌ Generic adult content",
  },
  {
    feature: "Safe & Ad‑Free Environment",
    ours: "✅ 100% secure for kids",
    others: "❌ Ads & distractions",
  },
  {
    feature: "Age‑Specific Programs",
    ours: "✅ Tailored for 4–14",
    others: "❌ One‑size‑fits‑all",
  },
  {
    feature: "Parent & Teacher Support",
    ours: "✅ Guides, printables, progress insights",
    others: "❌ Limited or none",
  },
];