"use client";

import { useState } from "react";
import { services } from "@/lib/services-data";

type Props = {
  variant?: "hero" | "cta";
  title?: string;
  subtitle?: string;
  defaultService?: string;
};

export default function LeadForm({
  variant = "hero",
  title = "Get Your Free Estimate",
  subtitle = "Fast response. No pressure. No obligation.",
  defaultService = "",
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState({ name: "", phone: "", email: "", zip: "", service: defaultService, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const isValid = (field: string) => {
    if (field === "name") return values.name.length >= 2;
    if (field === "phone") return /^[\d\s()+-]{7,20}$/.test(values.phone);
    if (field === "email") return !values.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
    return true;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    setTouched({ name: true, phone: true, email: true, zip: true, service: true });

    const payload = { ...values, source: variant };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || "Something went wrong. Please call us instead.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Please call us instead.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-sage-200 bg-white p-8 text-center shadow-elevation-2">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-100">
          <svg className="h-8 w-8 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="m4 12 5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-ink-900">You&apos;re all set!</h3>
        <p className="mt-2 text-sm text-ink-600">
          We received your request and will call you back <strong>within 2 hours</strong> during business hours.
        </p>
        <p className="mt-4 text-sm font-semibold text-ink-700">
          For faster service, call us directly:
        </p>
        <a
          href="tel:+14422810394"
          className="shimmer-btn mt-3 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-gold-600 transition"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
            <path d="M4 4c0 9 7 16 16 16l2-4-6-2-2 2c-2-1-4-3-5-5l2-2-2-6-4-1Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          (442) 281-0394
        </a>
      </div>
    );
  }

  const fieldClass = (field: string) => {
    const base = "w-full rounded-xl border px-3.5 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 focus:outline-none focus:ring-2";
    if (!touched[field]) return `${base} border-ink-200 bg-white focus:border-gold-400 focus:ring-gold-100`;
    if (isValid(field)) return `${base} border-sage-400 bg-sage-50/30 ring-2 ring-sage-100 focus:border-sage-500 focus:ring-sage-100`;
    return `${base} border-red-400 bg-red-50/30 ring-2 ring-red-100 focus:border-red-400 focus:ring-red-100`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-100 bg-white/98 p-5 shadow-elevation-3 backdrop-blur sm:p-7"
      noValidate
      aria-label="Free estimate request form"
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-100">
          <svg className="h-3.5 w-3.5 text-gold-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 3h6v3H9V3ZM6 6h12v15H6V6Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{title}</h3>
      </div>
      <p className="mb-5 text-sm text-ink-500">{subtitle}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Name */}
        <div className="sm:col-span-2">
          <label htmlFor="lead-name" className="mb-1 block text-xs font-semibold text-ink-700">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            required
            minLength={2}
            placeholder="Your full name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("name")}
            autoComplete="name"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className="mb-1 block text-xs font-semibold text-ink-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            required
            type="tel"
            placeholder="(555) 000-0000"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("phone")}
            autoComplete="tel"
          />
        </div>

        {/* Zip */}
        <div>
          <label htmlFor="lead-zip" className="mb-1 block text-xs font-semibold text-ink-700">
            Zip Code
          </label>
          <input
            id="lead-zip"
            name="zip"
            placeholder="92543"
            value={values.zip}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("zip")}
            autoComplete="postal-code"
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label htmlFor="lead-email" className="mb-1 block text-xs font-semibold text-ink-700">
            Email Address
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={fieldClass("email")}
            autoComplete="email"
          />
        </div>

        {/* Service */}
        <div className="sm:col-span-2">
          <label htmlFor="lead-service" className="mb-1 block text-xs font-semibold text-ink-700">
            Service Needed
          </label>
          <select
            id="lead-service"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-3 text-sm text-ink-900 transition-all duration-200 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
          >
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className="mb-1 block text-xs font-semibold text-ink-700">
            Project Details <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <textarea
            id="lead-message"
            name="message"
            placeholder="Tell us about your project — size, urgency, special requests…"
            rows={3}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-xl border border-ink-200 bg-white px-3.5 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-all duration-200 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-100"
          />
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="mt-3 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        id="lead-submit-btn"
        disabled={status === "loading"}
        className="shimmer-btn mt-5 w-full rounded-2xl bg-gold-500 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-gold-glow-sm transition hover:bg-gold-600 hover:shadow-gold-glow disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending…
          </span>
        ) : (
          "Get My Free Estimate →"
        )}
      </button>

      <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink-400">
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Your info is 100% secure. We never share your information.
      </div>
    </form>
  );
}
