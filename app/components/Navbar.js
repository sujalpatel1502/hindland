"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { services as serviceCatalog } from "../data/servicesContent";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/projects", label: "Projects" },
  { href: "/machinery-equipments", label: "Machinery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 120);
  };

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm h-20">
      <div className="flex h-full justify-between items-center px-8 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Hindland Infrastructure Home"
        >
          <Image
            src="/assets/Hindland_Logo_Transparent.png"
            alt="Hindland Infrastructure"
            width={260}
            height={78}
            className="h-10 sm:h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/services" && pathname.startsWith("/services"));

            if (link.hasMenu) {
              return (
                <div
                  key={link.href}
                  className="relative h-20 flex items-center"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <Link
                    href={link.href}
                    className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors inline-flex items-center gap-1 ${
                      isActive
                        ? "text-primary-container border-b-2 border-primary-container pb-1"
                        : "text-stone-600 hover:text-primary"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <span
                      className={`material-symbols-outlined text-base transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </Link>
                </div>
              );
            }

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

      {/* Desktop Services Mega Menu */}
      <div
        className={`hidden md:block absolute left-0 right-0 top-full transition-all duration-200 ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={openServices}
        onMouseLeave={scheduleCloseServices}
      >
        <div className="max-w-screen-2xl mx-auto px-8 pt-3">
          <div className="bg-white monolith-shadow border border-outline-variant/30 overflow-hidden">
            <div className="flex items-center justify-between px-8 py-5 border-b border-outline-variant/30 bg-surface-container-low">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-container mb-1">
                  Our Services
                </p>
                <h3 className="font-headline text-xl font-black text-primary tracking-tight">
                  Integrated EPC, O&M & Industrial Solutions
                </h3>
              </div>
              <Link
                href="/services"
                className="hidden lg:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary-container hover:text-primary transition-colors"
              >
                View all services
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/20">
              {serviceCatalog.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-4 p-6 bg-white hover:bg-surface-container-low transition-colors"
                >
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 group-hover:bg-primary-container flex items-center justify-center transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">
                      {service.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-1">
                      {service.label}
                    </p>
                    <h4 className="font-headline font-bold text-on-surface text-sm uppercase tracking-tight mb-1.5 leading-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                      {service.summary}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant/0 group-hover:text-primary-container group-hover:translate-x-0.5 transition-all self-center">
                    chevron_right
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/services"
              className="lg:hidden flex items-center justify-center gap-2 py-4 text-[11px] font-bold uppercase tracking-widest text-white bg-primary-container hover:bg-primary transition-colors"
            >
              View all services
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-8 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => {
            if (link.hasMenu) {
              return (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
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
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="p-2 -mr-2"
                      aria-label="Toggle services submenu"
                      aria-expanded={mobileServicesOpen}
                    >
                      <span
                        className={`material-symbols-outlined text-primary transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <ul className="mt-3 pl-3 border-l-2 border-primary-container/30 space-y-3">
                      {serviceCatalog.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-start gap-3 py-1 group"
                          >
                            <span className="material-symbols-outlined text-primary-container text-lg mt-0.5">
                              {service.icon}
                            </span>
                            <span>
                              <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container">
                                {service.label}
                              </span>
                              <span className="block font-headline font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                                {service.title}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
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
