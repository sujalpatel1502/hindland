"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FadeInUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  CountUp,
} from "../components/MotionWrappers";
import BrochureButton from "../components/BrochureButton";

const ONGOING_PROJECTS = [
  {
    id: "ntpc-north-karanpura",
    name: "NTPC North Karanpura Super Thermal Power Plant",
    summary: "Large-scale thermal power assignment",
    owner: "NTPC",
    scope: "Erection and alignment",
    value: "Rs. 3 Cr.",
    location: "Karanpura, Jharkhand",
    icon: "bolt",
  },
  {
    id: "patna-metro",
    name: "Patna Metro",
    summary: "Urban infrastructure and fabrication work",
    owner: "Delhi Metro Rail Corporation",
    scope: "Erection and fabrication",
    value: "Rs. 3.2 Cr.",
    location: "Patna, Bihar",
    icon: "train",
  },
  {
    id: "khurja-1320",
    name: "Khurja Thermal Power Plant 1320 MW",
    summary: "Thermal plant CHP and FGD assignment",
    owner: "NTPC",
    scope: "Erection and alignment of CHP and FGD",
    value: "Rs. 4.5 Cr.",
    location: "Khurja, Uttar Pradesh",
    icon: "factory",
  },
  {
    id: "ntpc-lara",
    name: "NTPC Lara Thermal Power Plant",
    summary: "Mechanical and civil execution work",
    owner: "NTPC",
    scope: "Stacker and reclaimer erection, alignment work, and civil work",
    value: "Rs. 5 Cr.",
    location: "Chhattisgarh",
    icon: "precision_manufacturing",
  },
  {
    id: "panki-thermal",
    name: "Panki Thermal Power Station",
    summary: "Utility and technological equipment works",
    owner: "UP Govt.",
    scope:
      "Balance CHPS utility and technological equipment erection and alignment work",
    value: "Rs. 6.5 Cr.",
    location: "Panki, Kanpur, Uttar Pradesh",
    icon: "electric_bolt",
  },
  {
    id: "mahan-energen-adani",
    name: "Mahan Energen Limited – Adani Power",
    summary: "CHP erection assignment",
    owner: "Adani Power",
    scope: "CHP erection and alignment work",
    value: "Rs. 4.6 Cr.",
    location: "Singrauli, Madhya Pradesh",
    icon: "conveyor_belt",
  },
];

const COMPLETED_PROJECTS = [
  {
    id: "india-bulls-1350",
    name: "India Bulls Power Projects 270 × 5 MW",
    summary: "High-capacity thermal power project",
    owner: "India Bulls Group",
    capacity: "1350 MW consisting of five units of 270 MW each",
    technology: "Originally built using BHEL-manufactured units",
    scope:
      "Boiler structure, coal pipe, P-91 piping, CS LP piping, hangers and supporters",
    value: "Rs. 9.92 Cr.",
    location: "Nandgaonpeth, Amravati, Maharashtra",
    icon: "factory",
  },
  {
    id: "ratan-india-1350",
    name: "Ratan India Power Projects 270 × 5 MW",
    summary: "Thermal power structural assignment",
    owner: "Ratan India",
    capacity: "1350 MW consisting of five units of 270 MW each",
    scope: "Structure of TG House",
    value: "Rs. 3.28 Cr.",
    location: "Sinnar, near Nashik, Maharashtra",
    icon: "architecture",
  },
  {
    id: "nirma-bhavnagar",
    name: "Nirmal Chemical Factory, Bhavnagar",
    summary: "Industrial structure and erection work",
    owner: "Nirma Group",
    scope: "Structure, fabrication and erection",
    value: "Rs. 1.50 Cr.",
    location: "Bhavnagar, Gujarat",
    icon: "science",
  },
  {
    id: "ntpc-nabinagar",
    name: "NTPC Nabinagar",
    summary: "Fabrication and erection assignment",
    owner: "NTPC",
    scope: "Structure, fabrication and erection",
    value: "Rs. 5.5 Cr.",
    location: "Nabinagar, Bihar",
    icon: "bolt",
  },
  {
    id: "railway-project",
    name: "Railway Project",
    summary: "Infrastructure bridge erection work",
    owner: "Railway",
    scope: "Railway bridge erection",
    value: "Rs. 3.25 Cr.",
    location: "Odisha",
    icon: "train",
  },
  {
    id: "panki-om",
    name: "Panki Thermal Power Plant",
    summary: "Maintenance and operation work",
    owner: "UP Govt.",
    scope: "Maintenance and operation",
    value: "Rs. 2.2 Cr.",
    location: "Panki, Kanpur, Uttar Pradesh",
    icon: "engineering",
  },
  {
    id: "era-infra",
    name: "ERA Infra Limited",
    summary: "Historic boiler turbine structure work",
    work: "Boiler turbine structure work",
    period: "Fabrication and erection from 2007 to 2009",
    worth: "Over Rs. 5.60 Cr.",
    icon: "foundation",
  },
  {
    id: "vasvi-power",
    name: "Vasvi Power",
    summary: "Boiler turbine structure works",
    work: "Boiler turbine structure work",
    period: "Fabrication and erection from 2008 to 2009",
    worth: "Rs. 4.9 Cr.",
    icon: "whatshot",
  },
  {
    id: "thermosystem",
    name: "Thermosystem Pvt. Ltd.",
    summary: "Fuel oil handling system execution",
    work: "Fuel oil handling system",
    period: "Project execution work from 2012 to 2013",
    worth: "Rs. 1.75 Cr.",
    icon: "local_gas_station",
  },
  {
    id: "unitech-machine",
    name: "Unitech Machine Limited",
    summary: "Rotary equipment erection",
    work: "Rotary equipment erection",
    period: "Erection work from 2012 to 2014",
    worth: "Rs. 1.9 Cr.",
    icon: "settings",
  },
  {
    id: "technofab",
    name: "Technofab Engineering Ltd.",
    summary: "Piping installation works",
    work: "CW piping and LP piping installation",
    period: "Erection work from 2012 to 2014",
    worth: "Rs. 2.20 Cr.",
    icon: "plumbing",
  },
  {
    id: "bsbk",
    name: "BSBK",
    summary: "Ash handling system project",
    work: "Ash handling system",
    period: "Project execution from 2013 to 2014",
    worth: "Rs. 1.3 Cr.",
    icon: "blur_on",
  },
];

const STATS = [
  { end: 6, suffix: "", label: "Ongoing projects listed", icon: "engineering" },
  { end: 10, suffix: "+", label: "Completed projects listed", icon: "verified" },
  { end: null, display: "Power + Infra", label: "Core industry segments", icon: "bolt" },
  { end: null, display: "Pan India", label: "Execution across multiple states", icon: "public" },
];

const FILTERS = ["All", "Ongoing", "Completed"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const showOngoing = activeFilter === "All" || activeFilter === "Ongoing";
  const showCompleted = activeFilter === "All" || activeFilter === "Completed";

  const totals = useMemo(
    () => ({
      All: ONGOING_PROJECTS.length + COMPLETED_PROJECTS.length,
      Ongoing: ONGOING_PROJECTS.length,
      Completed: COMPLETED_PROJECTS.length,
    }),
    []
  );

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[540px] h-[62vh] md:h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Civil engineering project"
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/art-docs/projects.png"
            width={1920}
            height={1080}
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 w-full">
          <FadeInUp>
            <span className="inline-block py-1 px-3 mb-6 bg-primary-container text-white text-[10px] font-bold tracking-[0.2em] uppercase">
              Our Projects
            </span>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <h1 className="font-headline text-[clamp(2rem,11vw,3.25rem)] md:text-7xl lg:text-8xl font-black text-white leading-[0.92] tracking-tight md:tracking-tighter max-w-5xl mb-6 md:mb-8">
              COMPLETED & ONGOING PROJECTS
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <div className="flex gap-3 md:gap-4 mb-7 md:mb-10">
              <div className="hidden sm:block h-1 w-24 bg-primary-container shrink-0 mt-2"></div>
              <p className="text-white/85 max-w-70 sm:max-w-2xl font-light text-base sm:text-lg leading-[1.45] sm:leading-relaxed">
                Hindland delivers thermal, industrial, and infrastructure
                projects with strong engineering, safety, and on-time execution
                across diverse project environments.
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <BrochureButton
                source="projects_hero"
                className="inline-flex items-center justify-center gap-2 bg-primary-container text-white px-6 sm:px-8 py-3.5 sm:py-4 font-headline font-bold uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white hover:text-primary transition-all active:scale-95"
              >
                Download Brochure
              </BrochureButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 font-headline font-bold uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white hover:text-primary transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-base">
                  forum
                </span>
                Talk to our Team
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-surface border-b border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-8 py-16">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/30 overflow-hidden">
            {STATS.map((stat, idx) => (
              <StaggerItem
                key={stat.label}
                className="group relative bg-surface p-10 flex flex-col items-start gap-3 hover:bg-primary hover:text-white transition-colors duration-500"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container group-hover:text-white text-2xl transition-colors">
                    {stat.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-container group-hover:text-white/70">
                    0{idx + 1}
                  </span>
                </div>
                {stat.end !== null ? (
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    className="block font-headline text-5xl md:text-6xl font-black text-primary group-hover:text-white tracking-tighter transition-colors"
                  />
                ) : (
                  <span className="block font-headline text-3xl md:text-4xl font-black text-primary group-hover:text-white tracking-tighter transition-colors">
                    {stat.display}
                  </span>
                )}
                <p className="text-sm text-on-surface-variant group-hover:text-white/80 leading-snug font-medium">
                  {stat.label}
                </p>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Intro + Filter */}
      <section
        id="portfolio"
        className="py-12 md:py-20 bg-surface-container-low scroll-mt-24"
      >
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-end mb-8 md:mb-12">
            <SlideInLeft className="lg:col-span-7">
              <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
                Project Portfolio
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tighter leading-tight uppercase">
                Execution across power, infrastructure & industry
              </h2>
            </SlideInLeft>
            <SlideInRight className="lg:col-span-5">
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {FILTERS.map((f) => {
                  const isActive = activeFilter === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setActiveFilter(f)}
                      className={`group inline-flex items-center gap-2 px-5 py-2.5 border font-headline text-[11px] font-bold uppercase tracking-[0.2em] transition-all active:scale-95 ${
                        isActive
                          ? "bg-primary-container text-white border-primary-container shadow-md"
                          : "bg-surface border-outline-variant/60 text-on-surface-variant hover:border-primary-container hover:text-primary"
                      }`}
                    >
                      {f}
                      <span
                        className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 text-[10px] font-bold rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-surface-container-high text-on-surface-variant group-hover:bg-primary-container group-hover:text-white"
                        } transition-colors`}
                      >
                        {totals[f]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      {showOngoing && (
        <section className="pt-6 pb-16 md:py-20 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-8">
            <FadeInUp className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        Live execution
                      </span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-container">
                      Current Execution Portfolio
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-tight">
                    Ongoing Projects
                  </h2>
                  <p className="text-on-surface-variant max-w-3xl mt-4 leading-relaxed">
                    Hindland&apos;s ongoing assignments include thermal power
                    plant works, CHP and FGD alignment, stacker &amp; reclaimer
                    erection, metro-related fabrication, and utility equipment
                    erection.
                  </p>
                </div>
                <div className="font-headline font-black text-primary/20 text-6xl md:text-8xl tracking-tighter">
                  {String(ONGOING_PROJECTS.length).padStart(2, "0")}
                </div>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ONGOING_PROJECTS.map((p) => (
                <StaggerItem
                  key={p.id}
                  className="group relative bg-surface border border-outline-variant/40 hover:border-primary-container transition-all duration-300 flex flex-col overflow-hidden monolith-shadow"
                >
                  {/* Top band */}
                  <div className="relative bg-linear-to-br from-primary to-primary-container p-6 overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-10"></div>
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/15 backdrop-blur text-white text-[9px] font-bold uppercase tracking-[0.2em] border border-white/20">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                          Ongoing
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-white/90 text-3xl">
                        {p.icon}
                      </span>
                    </div>
                    <h3 className="relative font-headline text-xl font-black text-white uppercase tracking-tight mt-5 leading-tight">
                      {p.name}
                    </h3>
                    <p className="relative text-white/70 text-xs mt-2 leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <DetailRow icon="corporate_fare" label="Owner" value={p.owner} />
                    <DetailRow icon="task" label="Scope" value={p.scope} />
                    <div className="grid grid-cols-2 gap-3 mt-2 pt-4 border-t border-outline-variant/40">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-1">
                          Value
                        </p>
                        <p className="font-headline font-black text-primary text-lg tracking-tight">
                          {p.value}
                        </p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-1">
                          Location
                        </p>
                        <p className="text-on-surface text-xs leading-snug flex items-start gap-1">
                          <span className="material-symbols-outlined text-primary-container text-sm mt-0.5">
                            location_on
                          </span>
                          <span className="font-medium">{p.location}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Completed Projects */}
      {showCompleted && (
        <section className="pt-6 pb-16 md:py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto px-8">
            <FadeInUp className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 text-primary-container border border-primary-container/20">
                      <span className="material-symbols-outlined text-sm">
                        verified
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        Delivered
                      </span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-container">
                      Delivered Works
                    </span>
                  </div>
                  <h2 className="font-headline text-3xl md:text-5xl font-black text-primary tracking-tighter uppercase leading-tight">
                    Completed Projects
                  </h2>
                  <p className="text-on-surface-variant max-w-3xl mt-4 leading-relaxed">
                    The company profile lists completed works across India Bulls,
                    Ratan India, NTPC, Nirma, railway infrastructure, fuel oil
                    handling, CW piping, ash handling, and boiler turbine
                    structure assignments.
                  </p>
                </div>
                <div className="font-headline font-black text-primary/15 text-6xl md:text-8xl tracking-tighter">
                  {String(COMPLETED_PROJECTS.length).padStart(2, "0")}
                </div>
              </div>
            </FadeInUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPLETED_PROJECTS.map((p, idx) => {
                const isLegacy = Boolean(p.period);
                return (
                  <StaggerItem
                    key={p.id}
                    className="group relative bg-surface border border-outline-variant/40 hover:border-primary-container transition-all duration-300 flex flex-col overflow-hidden monolith-shadow"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-outline-variant/40 bg-linear-to-br from-surface to-surface-container-low">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-container text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                          <span className="material-symbols-outlined text-xs">
                            check_circle
                          </span>
                          Completed
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-headline font-black text-primary/25 text-2xl">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="w-11 h-11 rounded-full bg-primary/5 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary-container">
                              {p.icon}
                            </span>
                          </span>
                        </div>
                      </div>
                      <h3 className="font-headline text-xl font-black text-primary uppercase tracking-tight leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-on-surface-variant text-xs mt-2 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      {isLegacy ? (
                        <>
                          <DetailRow icon="task" label="Work" value={p.work} />
                          <DetailRow
                            icon="calendar_month"
                            label="Period"
                            value={p.period}
                          />
                          <div className="pt-4 mt-2 border-t border-outline-variant/40">
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-1">
                              Worth
                            </p>
                            <p className="font-headline font-black text-primary text-xl tracking-tight">
                              {p.worth}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <DetailRow
                            icon="corporate_fare"
                            label="Owner"
                            value={p.owner}
                          />
                          {p.capacity && (
                            <DetailRow
                              icon="electric_bolt"
                              label="Capacity"
                              value={p.capacity}
                            />
                          )}
                          {p.technology && (
                            <DetailRow
                              icon="settings"
                              label="Technology"
                              value={p.technology}
                            />
                          )}
                          <DetailRow icon="task" label="Scope" value={p.scope} />
                          <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-outline-variant/40">
                            <div>
                              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-1">
                                Value
                              </p>
                              <p className="font-headline font-black text-primary text-lg tracking-tight">
                                {p.value}
                              </p>
                            </div>
                            <div>
                              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-1">
                                Location
                              </p>
                              <p className="text-on-surface text-xs leading-snug flex items-start gap-1">
                                <span className="material-symbols-outlined text-primary-container text-sm mt-0.5">
                                  location_on
                                </span>
                                <span className="font-medium">{p.location}</span>
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <span className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Pan India Strip */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <SlideInLeft className="lg:col-span-1">
              <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
                Pan-India Reach
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter leading-tight mb-6 uppercase">
                Execution Across Multiple States
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                From Jharkhand to Gujarat, Bihar to Chhattisgarh — our teams
                bring specialized engineering expertise to India&apos;s most
                critical industrial and infrastructure projects.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Jharkhand",
                  "Bihar",
                  "Uttar Pradesh",
                  "Chhattisgarh",
                  "Madhya Pradesh",
                  "Maharashtra",
                  "Gujarat",
                  "Odisha",
                ].map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low border border-outline-variant/40 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-container"></span>
                    {s}
                  </span>
                ))}
              </div>
            </SlideInLeft>
            <SlideInRight className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-outline-variant/30">
                {[
                  { icon: "bolt", title: "Thermal Power", count: "8+" },
                  { icon: "conveyor_belt", title: "CHP / FGD", count: "6+" },
                  { icon: "train", title: "Metro & Rail", count: "2" },
                  { icon: "plumbing", title: "Piping Works", count: "3+" },
                  { icon: "foundation", title: "Structural", count: "5+" },
                  { icon: "engineering", title: "O&M", count: "2" },
                  { icon: "precision_manufacturing", title: "Fabrication", count: "6+" },
                  { icon: "settings", title: "Equipment", count: "4+" },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="group bg-surface p-6 flex flex-col items-start gap-2 hover:bg-primary hover:text-white transition-colors duration-500"
                  >
                    <span className="material-symbols-outlined text-primary-container group-hover:text-white text-2xl transition-colors">
                      {b.icon}
                    </span>
                    <span className="font-headline text-3xl font-black text-primary group-hover:text-white tracking-tighter transition-colors">
                      {b.count}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white/80">
                      {b.title}
                    </span>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <FadeInUp className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6">
              PLANNING YOUR NEXT PROJECT?
            </h2>
            <p className="text-white/75 text-lg">
              Share your scope and we&apos;ll bring the right team, equipment,
              and engineering discipline to site — on time and on budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all text-center"
            >
              Talk to our Team
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              Explore Services
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary-container text-xl shrink-0 mt-0.5">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-container mb-0.5">
          {label}
        </p>
        <p className="text-on-surface text-sm leading-snug">{value}</p>
      </div>
    </div>
  );
}
