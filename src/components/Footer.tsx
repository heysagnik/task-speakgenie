"use client";

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-12 md:pt-16 pb-12 md:pb-16 space-y-10">
       
        <div className="rounded-[var(--radius-xl)] bg-gradient-to-r from-indigo-50 via-violet-50 to-sky-50 p-6 sm:p-8 ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Start Your Child’s Mindfulness Journey
              </h3>
              <p className="mt-1 text-muted">
                Try it free. Build calm, focus, and kindness—one small practice a day.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="#create"
                className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-4 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/25 hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
              >
                Create Account
              </a>
              <a
                href="#download"
                className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/25 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                Download App
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-black/5" />

      
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
         
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-sky-400 ring-1 ring-black/5" />
            <div>
              <div className="font-semibold">Topmind Care</div>
              <p className="text-[13px] text-muted">
                Mindfulness for growing minds. © {year} Mindery Kids.
              </p>
            </div>
          </div>

          
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Contact</div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a className="text-brand hover:underline" href="#" aria-label="Instagram">
                Instagram
              </a>
              <a className="text-brand hover:underline" href="#" aria-label="YouTube">
                YouTube
              </a>
              <a className="text-brand hover:underline" href="#" aria-label="X">
                X
              </a>
            </div>
          </div>

         
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Legal</div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
              <a className="text-brand hover:underline" href="#">Privacy</a>
              <span className="text-muted-foreground">·</span>
              <a className="text-brand hover:underline" href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}