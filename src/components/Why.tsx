"use client";

import React from "react";

export default function Why() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-10 md:pt-16 pb-20">
        <h2 id="why-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Why Mindery Kids?
        </h2>

        <p className="mt-4 max-w-3xl text-base sm:text-lg text-muted">
          Children learn best through play and stories. Our sessions blend gentle
          breathing, guided imagery, and music to make mindfulness enjoyable and
          effective.
        </p>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <FeatureCard
            pill="Story Meditations"
            title="Guided Adventures"
            description="Short, age-wise journeys that help kids calm their bodies and name their feelings."
          />
          <FeatureCard
            pill="Anytime Calm"
            title="Tools for Big Feelings"
            description="Quick “reset” audios for anger, worry, pre-exam jitters, and bedtime battles."
          />
          <FeatureCard
            pill="Parent Hub"
            title="Guides & Routines"
            description="Weekly tips, printable charts, and simple routines you can use at home or school."
          />
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  pill: string;
  title: string;
  description: string;
};

function FeatureCard({ pill, title, description }: FeatureProps) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-card p-5 sm:p-6 ring-1 ring-[#dbeafe] shadow-sm transition-all duration-200 hover:shadow-[var(--shadow-soft)]">
      <span className="inline-flex items-center rounded-full bg-accent/15 text-accent-foreground px-3 py-1 text-[13px] font-semibold ring-1 ring-accent/20">
        {pill}
      </span>

      <h3 className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-2 text-muted">
        {description}
      </p>
    </div>
  );
}