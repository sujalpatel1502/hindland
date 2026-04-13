"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary uppercase font-headline"
        >
          HINDLAND
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors ${
                  isActive
                    ? "text-primary-container border-b-2 border-primary-container pb-1"
                    : "text-stone-600 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-primary-container text-white px-6 py-2.5 font-headline font-bold uppercase tracking-wider text-xs hover:bg-primary transition-all active:scale-95"
          >
            Get a Quote
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-headline font-bold uppercase text-sm ${
                pathname === link.href
                  ? "text-primary-container"
                  : "text-stone-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block bg-primary-container text-white text-center px-6 py-3 font-headline font-bold uppercase tracking-wider text-xs"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
