"use client";

import React from "react";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16 pb-24 space-y-14 md:space-y-20">
        
         <div className="rounded-[var(--radius-xl)] bg-gradient-to-r from-indigo-50 via-violet-50 to-sky-50 p-6 sm:p-8 ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Parent & Teacher Hub</h3>
              <p className="mt-2 text-muted">
                Practical guides, printable routines, and progress insights so you can support
                mindfulness at home and school.
              </p>
            </div>
           
        </div>

       <div className="pt-6  min-h-[3rem]">
          <nav aria-label="Parent & Teacher Hub actions" className="flex flex-wrap gap-3 items-center">
            <Pill href="#" icon="📥">Download Starter Kit (PDF)</Pill>
            <Pill href="#" icon="🗓️">7‑Day Calm Plan</Pill>
            <Pill href="#" icon="🏫">Classroom Pack</Pill>
          </nav>

          
        </div></div>

      
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">What Families Say</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Testimonial
              quote="Bedtime is finally peaceful. My 6‑year‑old asks for the Star Boat story every night."
              by="Priya, Mom of 6‑year‑old"
            />
            <Testimonial
              quote="The 5‑minute ‘reset’ before homework has been a game changer for focus."
              by="Ravi, Dad of 10‑year‑old"
            />
            <Testimonial
              quote="Our class uses the breathing games after lunch. Kids come back calm and ready."
              by="Anika, Grade 4 Teacher"
            />
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 id="faq-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="mt-4 overflow-hidden rounded-[var(--radius-xl)] ring-1 ring-black/5">
            <Accordion
              items={[
                {
                  q: "What ages is this for?",
                  a: "Designed for kids ages 4–14, with age‑wise programs and stories.",
                },
                {
                  q: "How long are the sessions?",
                  a: "Most sessions are 3–10 minutes, perfect for quick resets or bedtime.",
                },
                {
                  q: "Is it safe and ad‑free?",
                  a: "Yes. We designed this for children. No external ads, clear privacy options, and parent controls.",
                  defaultOpen: true,
                },
                {
                  q: "Can schools use it?",
                  a: "Yes—there are classroom packs, quick start routines, and printable posters for teachers.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* UI bits */

function Pill(props: React.PropsWithChildren<{ href: string; icon?: string }>) {
  const { href, icon, children } = props;
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-2 text-[13px] font-semibold text-foreground ring-1 ring-black/5 shadow-sm hover:bg-chip"
    >
      {icon ? <span aria-hidden>{icon}</span> : null}
      {children}
    </a>
  );
}

function Testimonial({ quote, by }: { quote: string; by: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-card p-5 sm:p-6 ring-1 ring-black/5 shadow-sm">
      <div className="text-brand text-sm" aria-hidden>★★★★★</div>
      <p className="mt-2 text-foreground">“{quote}”</p>
      <p className="mt-3 text-[13px] text-muted">— {by}</p>
    </div>
  );
}

/* Simple accordion */

type QA = { q: string; a: string; defaultOpen?: boolean };

function Accordion({ items }: { items: QA[] }) {
  return (
    <ul>
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} isLast={idx === items.length - 1} />
      ))}
    </ul>
  );
}

function AccordionItem({
  q,
  a,
  defaultOpen,
  isLast,
}: QA & { isLast?: boolean }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <li className={["bg-card", !isLast ? "border-b border-black/5" : ""].join(" ")}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold">{q}</span>
        <span aria-hidden className="text-muted-foreground">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-muted text-sm sm:text-base">
          {a}
        </div>
      )}
    </li>
  );
}