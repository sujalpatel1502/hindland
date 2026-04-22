"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "../components/MotionWrappers";
import { services as serviceCatalog } from "../data/servicesContent";
import { industries as industryCatalog } from "../data/industriesContent";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            alt="Massive construction site with heavy cranes and steel structures"
            src="https://storage.googleapis.com/art-docs/Services.png"
            width={1920}
            height={1080}
            unoptimized
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <FadeInUp>
            <span className="inline-block px-4 py-1 mb-6 bg-primary-container text-on-primary font-label text-xs font-bold uppercase tracking-[0.2em]">
              Our Services
            </span>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <h1 className="font-headline text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8 max-w-4xl">
              INTEGRATED EPC, O&M &<br />
              INDUSTRIAL SOLUTIONS
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl font-body leading-relaxed">
              Hindland Infrastructure Pvt. Ltd. delivers end-to-end engineering
              and execution services across thermal power, industrial plants,
              mining operations, utilities, and renewable energy.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-surface border-b border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <FadeInUp className="lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Service portfolio
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tighter leading-tight">
              Explore our complete service portfolio
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1} className="lg:col-span-7">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Individual service pages include the essential details clients
              look for before connecting with us — scope, capabilities,
              sectors served, and execution approach. Click any service to
              dive into the details, or scroll to see them all at a glance.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCatalog.map((service) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col bg-white monolith-shadow overflow-hidden border border-transparent hover:border-outline-variant/40 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-highest">
                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      width={800}
                      height={600}
                      unoptimized
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/15 group-hover:bg-primary/0 transition-colors duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-primary-container text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                        {service.label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center monolith-shadow">
                      <span className="material-symbols-outlined text-primary-container">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="font-headline text-2xl font-black text-primary uppercase tracking-tight mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-5">
                      {service.summary}
                    </p>

                    {service.tags?.length ? (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-surface-container-low text-on-surface-variant border border-outline-variant/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {service.bestFor ? (
                      <p className="text-xs text-on-surface-variant/80 mb-6">
                        <span className="font-bold uppercase tracking-widest text-primary-container mr-2">
                          Best for
                        </span>
                        {service.bestFor}
                      </p>
                    ) : null}

                    <div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-5">
                      <span className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-primary-container">
                        Read more
                      </span>
                      <span className="material-symbols-outlined text-primary-container group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Engagement Models Strip */}
      <section className="py-20 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="mb-12">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Industries & Engagement Models
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase leading-tight max-w-3xl">
              Flexible engagement across diverse industrial environments
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem className="bg-surface-container-low border-l-4 border-primary-container p-8">
              <h3 className="font-headline text-lg font-bold uppercase tracking-wide text-on-surface mb-5">
                Engagement Models
              </h3>
              <ul className="space-y-3 text-on-surface-variant">
                {[
                  "EPC / Turnkey Project Execution",
                  "O&M Contracts (Annual / Long-term)",
                  "Project-Based Job Work",
                  "Shutdown & Turnaround Support",
                  "Emergency Breakdown Response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 bg-primary-container shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
            <StaggerItem className="bg-primary text-white p-8 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
              <h3 className="font-headline text-lg font-bold uppercase tracking-wide mb-5 relative">
                Why Hindland
              </h3>
              <p className="text-white/80 text-sm leading-relaxed relative mb-6">
                We combine engineering expertise with disciplined execution —
                ensuring client confidence through safety, quality,
                transparency, and dependable delivery.
              </p>
              <div className="grid grid-cols-2 gap-3 relative">
                {["Safety", "Quality", "Transparency", "Delivery"].map((v) => (
                  <div
                    key={v}
                    className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white/10 px-3 py-2 text-center"
                  >
                    {v}
                  </div>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Sector-wise Breakdown */}
      <section
        id="industries-we-serve"
        className="py-24 bg-surface-container-low scroll-mt-24"
      >
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-headline text-4xl font-black text-primary tracking-tighter uppercase mb-4">
                  Industries We Serve
                </h2>
                <p className="text-on-surface-variant max-w-xl">
                  We work across diverse industrial environments with flexible
                  execution models.
                </p>
              </div>
              <div className="h-px bg-outline-variant grow mx-8 hidden md:block"></div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-outline-variant hover:bg-primary-container hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">west</span>
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center border border-outline-variant hover:bg-primary-container hover:text-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">east</span>
                </div>
              </div>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {industryCatalog.map((item) => (
              <StaggerItem key={item.slug} className="h-full min-h-[320px]">
                <Link
                  href={`/services/industries/${item.slug}`}
                  className="bg-white group flex h-full min-h-[320px] flex-col overflow-hidden relative border border-transparent hover:border-outline-variant/30 transition-colors"
                >
                  <div className="p-10 relative z-10 flex-1 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="material-symbols-outlined text-4xl text-primary-container mb-8">
                      {item.icon}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 md:opacity-90 md:group-hover:opacity-100">
                      {item.teaser}
                    </p>
                  </div>
                  <div className="mt-auto px-10 pb-10 pt-2 flex items-center justify-between gap-4 border-t border-stone-100/80">
                    <span className="font-headline font-bold text-[10px] uppercase tracking-[0.2em] text-primary-container">
                      Read more
                    </span>
                    <span className="material-symbols-outlined text-primary-container text-xl group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process/How We Work */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase mb-6">
              Our Execution Approach
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Structured planning and execution workflows focused on timelines,
              coordination, and performance.
            </p>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-outline-variant">
            {[
              {
                num: "01",
                title: "Consultation",
                desc: "Technical feasibility studies and site analysis to define project scope and constraints.",
                border: true,
              },
              {
                num: "02",
                title: "Procurement",
                desc: "Strategic sourcing of high-performance materials through our supply network.",
                border: true,
              },
              {
                num: "03",
                title: "Fabrication",
                desc: "Precision manufacturing and assembly of structural components under quality controls.",
                border: true,
              },
              {
                num: "04",
                title: "Execution",
                desc: "On-site erection, alignment, and commissioning under strict safety protocols.",
                border: false,
              },
            ].map((step) => (
              <StaggerItem
                key={step.num}
                className={`p-12 ${step.border ? "border-b md:border-b-0 md:border-r border-outline-variant" : ""} group hover:bg-primary transition-colors duration-500`}
              >
                <span className="block font-headline text-6xl font-black text-surface-container-highest group-hover:text-white/20 mb-8">
                  {step.num}
                </span>
                <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white mb-4">
                  {step.title}
                </h4>
                <p className="text-sm text-on-surface-variant group-hover:text-white/70">
                  {step.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <FadeInUp className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6">
              READY TO BUILD THE FUTURE?
            </h2>
            <p className="text-white/70 text-lg">
              Partner with Hindland for infrastructure that stands the test of
              time. Let&apos;s discuss your next project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all text-center"
            >
              Start Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              View Projects
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
