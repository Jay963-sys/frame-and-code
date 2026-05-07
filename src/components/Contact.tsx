"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLine from "./AnimatedLine";

const serviceOptions = [
  {
    id: "visuals",
    label: "Visual Production",
    description: "Photography & Cinematography",
  },
  {
    id: "digital",
    label: "Digital Architecture",
    description: "Web & E-Commerce",
  },
  {
    id: "synergy",
    label: "Complete Identity",
    description: "Full Studio Engagement",
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected) return;
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("service", selected);

    // Web3Forms — set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local
    // Get a free key at https://web3forms.com (no signup, just confirm via email)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      console.warn("Missing NEXT_PUBLIC_WEB3FORMS_KEY");
      setStatus("error");
      return;
    }
    formData.append("access_key", accessKey);
    formData.append("subject", `New inquiry: ${selected} — Frame & Code`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-10 max-w-[1400px] mx-auto"
    >
      <div className="flex items-center gap-4 mb-20 text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-muted)]">
        <span className="text-[var(--color-accent)]">05</span>
        <span className="block w-12 h-px bg-[var(--color-line-strong)]" />
        Contact
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
        <div className="col-span-12 md:col-span-10 lg:col-span-9">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-[var(--color-ink)]">
            <AnimatedLine>Let&apos;s build</AnimatedLine>
            <br />
            <AnimatedLine delay={0.1}>
              something{" "}
              <span className="italic text-[var(--color-accent)]">
                exceptional.
              </span>
            </AnimatedLine>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10">
        {/* Left column — meta */}
        <aside className="col-span-12 md:col-span-3 space-y-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)] mb-3">
              Direct
            </p>
            <a
              href="mailto:hello@frameandcode.com"
              className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              hello@frameandcode.com
            </a>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)] mb-3">
              Studios
            </p>
            <p className="text-[var(--color-ink-muted)] text-sm">Lagos, NG</p>
            <p className="text-[var(--color-ink-muted)] text-sm">Chicago, IL</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)] mb-3">
              Hours
            </p>
            <p className="text-[var(--color-ink-muted)] text-sm">Mon — Fri</p>
            <p className="text-[var(--color-ink-muted)] text-sm">
              By appointment
            </p>
          </div>
        </aside>

        {/* Right column — form */}
        <div className="col-span-12 md:col-span-9 border border-[var(--color-line-strong)] p-8 md:p-12">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
                Inquiry received
              </p>
              <h3 className="font-display text-4xl md:text-5xl text-[var(--color-ink)]">
                Thank you. <br />
                <span className="italic text-[var(--color-accent)]">
                  We&apos;ll be in touch.
                </span>
              </h3>
              <p className="mt-6 text-[var(--color-ink-muted)] text-sm">
                A member of the studio will reply within two business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-12">
              {/* Service select */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)] mb-6">
                  01. Engagement
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {serviceOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelected(option.id)}
                      className={`text-left p-5 border transition-all duration-300 ${
                        selected === option.id
                          ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                          : "border-[var(--color-line-strong)] hover:border-[var(--color-ink-muted)]"
                      }`}
                    >
                      <h4 className="text-[var(--color-ink)] mb-1.5 font-medium text-sm">
                        {option.label}
                      </h4>
                      <p className="text-[10px] text-[var(--color-ink-muted)] uppercase tracking-widest">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Details — appears once a service is chosen */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[var(--color-line-strong)] pt-10 space-y-10">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)]">
                        02. Particulars
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Field
                          name="name"
                          label="Your name"
                          type="text"
                          required
                        />
                        <Field
                          name="email"
                          label="Email address"
                          type="email"
                          required
                        />
                        <Field
                          name="company"
                          label="Company / brand"
                          type="text"
                        />
                        <Field
                          name="budget"
                          label="Budget range (optional)"
                          type="text"
                        />
                      </div>

                      <Field
                        name="message"
                        label="Tell us about your vision"
                        textarea
                        required
                      />

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-dim)]">
                          {status === "error"
                            ? "Submission failed — please email us directly"
                            : "We respond within 2 business days"}
                        </p>
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="group inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-ink)] text-[var(--color-bg)] uppercase tracking-[0.25em] text-xs hover:bg-[var(--color-accent)] transition-colors duration-500 disabled:opacity-60"
                        >
                          {status === "submitting"
                            ? "Sending…"
                            : "Submit Inquiry"}
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const className =
    "block w-full bg-transparent border-0 border-b border-[var(--color-line-strong)] py-3 text-[var(--color-ink)] focus:ring-0 focus:outline-none focus:border-[var(--color-accent)] transition-colors peer placeholder:text-transparent";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          placeholder=" "
          className={`${className} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder=" "
          className={className}
        />
      )}
      <label
        htmlFor={name}
        className="absolute top-3 left-0 text-[10px] uppercase tracking-[0.25em] text-[var(--color-ink-muted)] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-[var(--color-accent)] -top-2 pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
}
