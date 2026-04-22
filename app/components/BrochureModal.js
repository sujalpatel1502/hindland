"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  reason: "",
};

export default function BrochureModal({ open, onClose, source = "brochure_modal" }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const [brochureUrl, setBrochureUrl] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(INITIAL_FORM);
      setStatus("idle");
      setError("");
      setBrochureUrl("");
    }
  }, [open]);

  if (!open) return null;

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setBrochureUrl(data.brochureUrl);

      const link = document.createElement("a");
      link.href = data.brochureUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.download = "Hindland-Profile.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const modal = (
    <div
      className="fixed inset-0 z-[1100] overflow-y-auto overscroll-y-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 z-0 bg-primary/80 backdrop-blur-sm cursor-default"
      />
      {/* items-start + min-h-full: modal aligns from top so short viewports are not vertically clipped */}
      <div className="relative z-10 flex min-h-full items-start justify-center px-4 py-6 sm:py-10 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
        <div className="relative w-full max-w-lg flex max-h-[calc(100dvh-2.5rem)] flex-col bg-white monolith-shadow border border-outline-variant/40 overflow-hidden sm:max-h-[min(calc(100dvh-3rem),880px)]">
        <div className="relative shrink-0 bg-linear-to-br from-primary to-primary-container p-6 sm:p-8 text-white overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-10"></div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>

          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/15 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="material-symbols-outlined text-xs">download</span>
            Company Brochure
          </span>
          <h2
            id="brochure-modal-title"
            className="relative font-headline text-2xl md:text-3xl font-black tracking-tighter leading-tight uppercase"
          >
            Download Hindland Profile
          </h2>
          <p className="relative text-white/75 text-sm mt-2 leading-relaxed">
            Tell us a bit about yourself and we&apos;ll unlock the full company
            profile PDF.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {status === "success" ? (
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-600 text-4xl">
                task_alt
              </span>
            </div>
            <h3 className="font-headline text-xl font-black text-primary uppercase tracking-tight mb-2">
              Your download is starting
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              If the download doesn&apos;t start automatically, click the button
              below.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-white px-6 py-3 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all"
              >
                <span className="material-symbols-outlined text-base">
                  picture_as_pdf
                </span>
                Open Brochure
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-container text-primary-container px-6 py-3 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary-container hover:text-white transition-all"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <Field
              label="Full Name"
              required
              value={form.fullName}
              onChange={update("fullName")}
              placeholder="John Doe"
              autoComplete="name"
            />
            <Field
              label="Phone Number"
              required
              value={form.phone}
              onChange={update("phone")}
              placeholder="+91 99530 07178"
              type="tel"
              autoComplete="tel"
            />
            <Field
              label="Email (optional)"
              value={form.email}
              onChange={update("email")}
              placeholder="you@company.com"
              type="email"
              autoComplete="email"
            />
            <Field
              label="Company (optional)"
              value={form.company}
              onChange={update("company")}
              placeholder="Company name"
              autoComplete="organization"
            />
            <div className="space-y-2">
              <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                Reason for Download
              </label>
              <textarea
                value={form.reason}
                onChange={update("reason")}
                rows={3}
                placeholder="Evaluating a project, RFQ, partnership, etc."
                className="w-full bg-surface-container-low border border-outline-variant/40 focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-3 text-on-surface placeholder:text-stone-400 text-sm transition-all resize-none"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                <span className="material-symbols-outlined text-base shrink-0">
                  error
                </span>
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-container text-white px-6 py-3.5 font-headline font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-95"
              >
                {status === "submitting" ? (
                  <>
                    <span className="material-symbols-outlined text-base animate-spin">
                      progress_activity
                    </span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-base">
                      download
                    </span>
                    Download Brochure
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={status === "submitting"}
                className="sm:w-auto px-6 py-3.5 font-headline font-bold uppercase tracking-widest text-xs text-on-surface-variant hover:text-primary transition-colors"
              >
                Cancel
              </button>
            </div>
            <p className="text-[10px] text-on-surface-variant/70 text-center leading-relaxed pb-1">
              By submitting, you agree to be contacted by Hindland Infrastructure
              about your enquiry.
            </p>
          </form>
        )}
        </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

function Field({ label, required, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        {...props}
        required={required}
        className="w-full bg-surface-container-low border border-outline-variant/40 focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 rounded-sm p-3 text-on-surface placeholder:text-stone-400 text-sm transition-all"
      />
    </div>
  );
}
