"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "EPC / Fabrication & Erection",
  "O&M Services",
  "Solar EPC",
  "B2B Material Supply",
  "Other",
];

const INITIAL = {
  fullName: "",
  email: "",
  phone: "",
  projectType: PROJECT_TYPES[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact_page" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-50 flex items-center justify-center">
          <span className="material-symbols-outlined text-emerald-600 text-4xl">
            task_alt
          </span>
        </div>
        <h3 className="font-headline text-2xl font-black text-primary uppercase tracking-tight mb-3">
          Message received
        </h3>
        <p className="text-on-surface-variant mb-6 max-w-md mx-auto leading-relaxed">
          Thanks for reaching out — our team will review your requirement and
          get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="inline-flex items-center gap-2 bg-primary-container text-white px-6 py-3 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all"
        >
          <span className="material-symbols-outlined text-base">edit</span>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            value={form.fullName}
            onChange={update("fullName")}
            className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
            placeholder="John Doe"
            type="text"
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            value={form.email}
            onChange={update("email")}
            className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
            placeholder="john@company.com"
            type="email"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
            Phone Number
          </label>
          <input
            value={form.phone}
            onChange={update("phone")}
            className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
            placeholder="+91 99530 07178"
            type="tel"
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
            Project Type
          </label>
          <select
            value={form.projectType}
            onChange={update("projectType")}
            className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface transition-all"
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="block font-label text-[10px] uppercase tracking-widest text-secondary font-bold">
          Your Message
        </label>
        <textarea
          value={form.message}
          onChange={update("message")}
          className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-4 text-on-surface placeholder:text-stone-400 transition-all"
          placeholder="Describe your project requirements, location, timeline, and scope..."
          rows={5}
        ></textarea>
      </div>

      {error && (
        <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
          <span className="material-symbols-outlined text-base shrink-0">
            error
          </span>
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto bg-primary-container text-on-primary px-12 py-5 rounded-lg font-headline font-bold uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <span className="material-symbols-outlined text-lg animate-spin">
              progress_activity
            </span>
            Sending...
          </>
        ) : (
          <>
            Submit Now
            <span className="material-symbols-outlined text-lg">
              arrow_forward
            </span>
          </>
        )}
      </button>
    </form>
  );
}
