"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "../components/MotionWrappers";
import { services as serviceCatalog } from "../data/servicesContent";
import { industries as industryCatalog } from "../data/industriesContent";

const [fabricationService, omService] = serviceCatalog;

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

      {/* Comprehensive Service List */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
            <SlideInLeft className="sticky top-32">
              <span className="text-primary-container font-headline font-bold uppercase tracking-widest text-sm mb-4 block">
                {fabricationService.label}
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">
                {fabricationService.title}
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {fabricationService.summary}
              </p>
              <ul className="space-y-4">
                {fabricationService.capabilities.slice(0, 2).map((cap) => (
                  <li key={cap.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">
                      {cap.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-on-surface">{cap.title}</h4>
                      <p className="text-sm text-on-surface-variant">{cap.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${fabricationService.slug}`}
                className="group mt-10 inline-flex items-center gap-2 text-primary font-headline font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all"
              >
                Read more
                <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </SlideInLeft>
            <SlideInRight className="relative group">
              <div className="absolute -inset-4 bg-surface-container-high -z-10 group-hover:inset-0 transition-all duration-500"></div>
              <Image
                src={fabricationService.heroImage}
                alt={fabricationService.title}
                width={800}
                height={1000}
                unoptimized
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </SlideInRight>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
            <SlideInLeft className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-surface-container-high -z-10 group-hover:inset-0 transition-all duration-500"></div>
              <Image
                src={omService.heroImage}
                alt={omService.title}
                width={800}
                height={1000}
                unoptimized
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </SlideInLeft>
            <SlideInRight className="order-1 lg:order-2 sticky top-32">
              <span className="text-primary-container font-headline font-bold uppercase tracking-widest text-sm mb-4 block">
                {omService.label}
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">
                {omService.title}
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                {omService.summary}
              </p>
              <StaggerContainer className="grid grid-cols-2 gap-6">
                {omService.capabilities.slice(0, 2).map((cap) => (
                  <StaggerItem
                    key={cap.title}
                    className="bg-surface-container-low p-6"
                  >
                    <span className="material-symbols-outlined text-primary-container mb-4">
                      {cap.icon}
                    </span>
                    <h4 className="font-bold mb-2">{cap.title}</h4>
                    <p className="text-xs text-on-surface-variant">{cap.text}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <Link
                href={`/services/${omService.slug}`}
                className="group mt-10 inline-flex items-center gap-2 text-primary font-headline font-bold uppercase text-xs tracking-widest hover:gap-3 transition-all"
              >
                Read more
                <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </SlideInRight>
          </div>

          <FadeInUp className="mb-32 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-xl border border-outline-variant/40 bg-surface-container-low px-8 py-8">
            <div>
              <p className="text-primary-container font-headline font-bold uppercase tracking-widest text-xs mb-2">
                {serviceCatalog[2].label}
              </p>
              <h3 className="font-headline text-2xl font-black text-primary">
                {serviceCatalog[2].title}
              </h3>
              <p className="text-on-surface-variant text-sm mt-2 max-w-xl">
                {serviceCatalog[2].summary}
              </p>
            </div>
            <Link
              href={`/services/${serviceCatalog[2].slug}`}
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary-container text-white font-headline font-bold uppercase text-xs tracking-widest px-8 py-4 hover:bg-primary transition-colors"
            >
              Read more
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </FadeInUp>
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
              <div className="h-px bg-outline-variant flex-grow mx-8 hidden md:block"></div>
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
