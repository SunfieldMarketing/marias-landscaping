"use client";

import { useState } from "react";
import Icon from "./Icon";
import { services } from "@/lib/services-data";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const res = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      console.error("Form error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit. Please call us instead.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded bg-white p-8 text-center shadow-md border border-gray-100">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 mb-4">
          <Icon name="check" className="h-8 w-8 text-accent-600" />
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">Request Received!</h3>
        <p className="text-gray-600">
          Thank you for reaching out. We will contact you shortly to provide your free estimate.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded shadow-md border border-gray-100 w-full max-w-md mx-auto">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">Request a Free Estimate</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full Name"
            className="block w-full border-0 border-b border-gray-300 py-2.5 px-0 text-gray-900 placeholder:text-gray-400 focus:border-accent-600 focus:ring-0 sm:text-sm transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">Email (Optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email (Optional)"
            className="block w-full border-0 border-b border-gray-300 py-2.5 px-0 text-gray-900 placeholder:text-gray-400 focus:border-accent-600 focus:ring-0 sm:text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone Number"
            className="block w-full border-0 border-b border-gray-300 py-2.5 px-0 text-gray-900 placeholder:text-gray-400 focus:border-accent-600 focus:ring-0 sm:text-sm transition-colors"
          />
        </div>

        <div>
          <label htmlFor="service" className="sr-only">Service Needed</label>
          <select
            id="service"
            name="service"
            required
            className="block w-full border-0 border-b border-gray-300 py-2.5 px-0 text-gray-900 focus:border-accent-600 focus:ring-0 sm:text-sm transition-colors bg-transparent"
            defaultValue=""
          >
            <option value="" disabled>Select a Service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other">Other / Not Sure</option>
          </select>
        </div>
      </div>

      {status === "error" && (
        <div className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded">
          {errorMessage}
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full btn-primary"
        >
          {status === "submitting" ? "Sending..." : "Get My Quote"}
        </button>
      </div>
    </form>
  );
}
