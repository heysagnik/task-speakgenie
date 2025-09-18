"use client";

import React from "react";

export default function Hero() {
	const [open, setOpen] = React.useState(false);
	const [submitted, setSubmitted] = React.useState(false);

	return (
		<section className="w-full bg-background text-foreground">
			<div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-24 pb-14 md:pb-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
					<div>
						
						<div className="inline-flex items-center gap-2 rounded-full bg-badge text-badge-foreground px-3.5 py-1.5 shadow-sm ring-1 ring-black/5">
							<span aria-hidden>🌈</span>
							<span className="text-sm font-semibold tracking-tight">
								Calm Minds, Happy Hearts
							</span>
						</div>

						
						<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-foreground">
							Mindfulness &
							<br />
							Meditation for Kids (4–14)
						</h1>

						
						<p className="mt-6 text-base sm:text-lg text-muted max-w-xl">
							Fun, story-based meditations that build focus, kindness, and confidence.
							Safe, ad-free, and crafted with child-development experts.
						</p>

						
						<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
							<a
								href="#start"
								onClick={(e) => {
									e.preventDefault();
									setSubmitted(false);
									setOpen(true);
								}}
								className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-brand-foreground shadow-md shadow-brand/25 transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
							>
								Start Free Trial
							</a>
							<a
								href="#programs"
								className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 font-semibold text-accent-foreground shadow-md shadow-accent/25 transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
							>
								Explore Programs
							</a>
						</div>

						
						<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
							<Benefit icon="🧠" labelTop="Improves" labelBottom="Focus" />
							<Benefit icon="🟡" labelTop="Reduces" labelBottom="Stress" />
							<Benefit icon="💤" labelTop="Better" labelBottom="Sleep" />
							<Benefit icon="❤️" labelTop="Builds" labelBottom="Empathy" />
						</div>
					</div>

					
					<div className="relative">
						<div className="relative w-full rounded-[var(--radius-xl)] bg-panel h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
							
							<div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-brand/35 via-brand/25 to-accent/25 blur-3xl" />
							
							<div className="absolute left-6 sm:left-10 bottom-8 sm:bottom-10 rotate-2">
								<div className="w-[300px] sm:w-[340px] rounded-[var(--radius-lg)] bg-card/95 backdrop-blur px-4 py-4 shadow-[var(--shadow-soft)] ring-1 ring-black/5">
									<p className="font-semibold">Today&apos;s Journey</p>
									<ul className="mt-2 space-y-2 text-muted-foreground">
										<li className="flex gap-2 text-foreground">
											<span className="shrink-0" aria-hidden>
												🐉
											</span>
											<span>
												Dragon Breath{" "}
												<span className="text-muted">(3 min)</span>
											</span>
										</li>
										<li className="flex gap-2 text-foreground">
											<span className="shrink-0" aria-hidden>
												🦋
											</span>
											<span>
												Butterfly Body Scan{" "}
												<span className="text-muted">(5 min)</span>
											</span>
										</li>
										<li className="flex gap-2 text-foreground">
											<span className="shrink-0" aria-hidden>
												🌙
											</span>
											<span>
												Sleep Story: Star Boat{" "}
												<span className="text-muted">(7 min)</span>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>

			
			<Modal open={open} onClose={() => setOpen(false)} title="Start Free Trial">
				{submitted ? (
					<div className="text-center">
						<div className="text-3xl mb-2">🎉</div>
						<h4 className="text-xl font-semibold">Thanks! We’ll be in touch soon.</h4>
						<p className="mt-1 text-muted">
							Your request was received. Check your email for next steps.
						</p>
						<button
							className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-md hover:bg-brand/90"
							onClick={() => setOpen(false)}
						>
							Close
						</button>
					</div>
				) : (
					<StartTrialForm
						onSubmitted={() => setSubmitted(true)}
						onCancel={() => setOpen(false)}
					/>
				)}
			</Modal>
		</section>
	);
}

type BenefitProps = {
	icon: string;
	labelTop: string;
	labelBottom: string;
};

function Benefit({ icon, labelTop, labelBottom }: BenefitProps) {
	return (
		<div className="relative rounded-[var(--radius-lg)]">
			<div className="rounded-[calc(var(--radius-lg)-4px)] bg-chip px-1 py-4 shadow-sm ring-1 ring-black/5 transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
				<div className="flex items-center gap-3">
					<span className="text-xl" aria-hidden>
						{icon}
					</span>
					<div className="leading-5">
						<div className="text-[13px] text-muted">{labelTop}</div>
						<div className="text-lg font-semibold text-chip-foreground flex items-center gap-2">
							{labelBottom}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


function Modal({
	open,
	onClose,
	title,
	children,
}: React.PropsWithChildren<{ open: boolean; onClose: () => void; title?: string }>) {
	React.useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") onClose();
		}
		if (open) document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-[60] flex items-center justify-center p-4"
			role="dialog"
			aria-modal="true"
			aria-labelledby="trial-title"
			onClick={onClose}
		>
			<div className="absolute inset-0 bg-black/40" />
			<div
				className="relative z-[61] w-[min(100%,580px)] rounded-[var(--radius-xl)] bg-card p-6 sm:p-8 ring-1 ring-black/10 shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-start justify-between">
					{title ? (
						<h3 id="trial-title" className="text-xl sm:text-2xl font-extrabold tracking-tight">
							{title}
						</h3>
					) : null}
					<button
						type="button"
						onClick={onClose}
						className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-black/10 text-muted hover:bg-chip"
						aria-label="Close"
					>
						✕
					</button>
				</div>
				<div className="mt-4">{children}</div>
			</div>
		</div>
	);
}

function StartTrialForm({
	onSubmitted,
	onCancel,
}: {
	onSubmitted: () => void;
	onCancel: () => void;
}) {
	const firstRef = React.useRef<HTMLInputElement>(null);
	React.useEffect(() => firstRef.current?.focus(), []);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const payload = Object.fromEntries(fd.entries());
		
		console.log("Start Free Trial form:", payload);
		onSubmitted();
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Field label="Name">
					<input
						ref={firstRef}
						name="name"
						type="text"
						required
						placeholder="Your full name"
						className="w-full rounded-lg border border-black/10 bg-background px-3.5 py-2.5 outline-none ring-0 focus:border-brand"
					/>
				</Field>
				<Field label="Email">
					<input
						name="email"
						type="email"
						required
						placeholder="you@example.com"
						className="w-full rounded-lg border border-black/10 bg-background px-3.5 py-2.5 outline-none focus:border-brand"
					/>
				</Field>
				<Field label="Phone Number">
					<input
						name="phone"
						type="tel"
						inputMode="tel"
						placeholder="+91 98765 43210"
						className="w-full rounded-lg border border-black/10 bg-background px-3.5 py-2.5 outline-none focus:border-brand"
					/>
				</Field>
				<Field label="Class">
					<input
						name="classLevel"
						type="text"
						placeholder="e.g., Grade 4"
						className="w-full rounded-lg border border-black/10 bg-background px-3.5 py-2.5 outline-none focus:border-brand"
					/>
				</Field>
			</div>

			<Field label="Message">
				<textarea
					name="message"
					rows={4}
					placeholder="Tell us about your child’s needs..."
					className="w-full rounded-lg border border-black/10 bg-background px-3.5 py-2.5 outline-none focus:border-brand"
				/>
			</Field>

			<div className="flex items-center justify-end gap-2 pt-2">
				<button
					type="button"
					onClick={onCancel}
					className="inline-flex h-10 items-center justify-center rounded-full bg-chip px-4 text-sm font-semibold text-foreground ring-1 ring-black/5 hover:bg-card"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/25 hover:bg-brand/90"
				>
					Submit
				</button>
			</div>
		</form>
	);
}

function Field({
	label,
	children,
}: React.PropsWithChildren<{ label: string }>) {
	return (
		<label className="block">
			<span className="mb-1 block text-sm font-medium text-muted-foreground">
				{label}
			</span>
			{children}
		</label>
	);
}

