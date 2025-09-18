"use client";

import React from "react";

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: "#why", label: "Why" },
    { href: "#programs", label: "Programs" },
    { href: "#built-for", label: "Features" },
    { href: "#faq", label: "For Parents" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-16 items-center justify-between gap-4">
        
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 ring-1 ring-black/5" />
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              Topmind Care
            </span>
          </a>

        
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-brand hover:opacity-80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#start"
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/25 hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
            >
              Start Free
            </a>
          </nav>

         
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-black/5"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        
        {open && (
          <div className="md:hidden pb-4">
            <nav className="rounded-xl ring-1 ring-black/5 bg-card p-3 shadow-sm">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand hover:bg-chip"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#start"
                    className="inline-flex w-full h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/25 hover:bg-brand/90"
                    onClick={() => setOpen(false)}
                  >
                    Start Free
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}