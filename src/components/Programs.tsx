"use client";

import React from "react";

export default function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16 pb-24">
        <h2 id="programs-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Programs for Every Age
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted">
          Pick a track or mix and match. Each program grows with your child.
        </p>

        <div className="mt-8 md:mt-12 space-y-12 lg:space-y-16">
       
          <ProgramRow
            image={{ src: "/image1.png", alt: "Kids exploring", shape: "tall" }}
            title="Little Explorers (4–6)"
            blurb="Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching."
            tags={[
              { icon: "🧸", label: "Cozy Corner" },
              { icon: "🎵", label: "Calm Music" },
              { icon: "🏅", label: "Sticker Badges" },
            ]}
          />

      
          <ProgramRow
            reverse
            image={{ src: "/image2.jpg", alt: "Child smiling with paint", shape: "tall" }}
            title="Brave Thinkers (7–10)"
            blurb="Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness."
            tags={[
              { icon: "⏱️", label: "Focus Timer" },
              { icon: "📝", label: "Gratitude Notes" },
              { icon: "⭐", label: "Streak Rewards" },
            ]}
          />

          <ProgramRow
            image={{ src: "/image3.jpg", alt: "Group of happy kids", shape: "wide" }}
            title="Calm & Curious (11–14)"
            blurb="Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance."
            tags={[
              { icon: "🧠", label: "Mindset Minis" },
              { icon: "🌙", label: "Sleep Stories" },
              { icon: "🎯", label: "Goal Cards" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

type ImageShape = "tall" | "wide";
type Tag = { icon: string; label: string };

function ProgramRow({
  reverse = false,
  image,
  title,
  blurb,
  tags,
}: {
  reverse?: boolean;
  image: { src: string; alt: string; shape: ImageShape };
  title: string;
  blurb: string;
  tags: Tag[];
}) {
  const tall = image.shape === "tall";
  return (
    <div className={`grid items-center gap-6 md:gap-10 lg:gap-16 lg:grid-cols-2`}>
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <Picture src={image.src} alt={image.alt} shape={image.shape} />
      </div>

      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <p className="text-sm font-semibold text-muted-foreground">{title}</p>
        <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">{
         }</h3>
        <h3 className="sr-only">{title}</h3>

        
        <div className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title.replace(/\s*\(.+\)$/, "")}
        </div>

        <p className="mt-2 text-muted max-w-prose">{blurb}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Chip key={t.label} icon={t.icon} label={t.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Picture({ src, alt, shape }: { src: string; alt: string; shape: ImageShape }) {
  const height = shape === "tall" ? "h-[440px] sm:h-[520px] md:h-[560px]" : "h-[200px] sm:h-[240px] md:h-[260px]";
  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-[var(--radius-xl)] ring-1 ring-black/5 shadow-[var(--shadow-soft)]`}>
      <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}

function Chip({ icon, label }: Tag) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-chip px-3 py-1 text-[13px] font-medium text-chip-foreground ring-1 ring-black/5">
      <span aria-hidden className="text-[15px] leading-none">{icon}</span>
      {label}
    </span>
  );
}