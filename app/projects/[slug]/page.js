"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import {
  FadeInUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
  CountUp,
} from "../../components/MotionWrappers";

function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

function getAdjacentProjects(slug) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  return { prev, next };
}

export default function ProjectDetailPage() {
  const params = useParams();
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(params.slug);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={project.title}
            className="w-full h-full object-cover"
            src={project.heroImage}
            width={1920}
            height={1080}
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full pb-16">
          <FadeInUp>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Back to Projects
            </Link>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <span
              className={`inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm ${
                project.status === "Completed"
                  ? "bg-green-700 text-white"
                  : "bg-primary-container text-white"
              }`}
            >
              {project.status}
            </span>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter max-w-4xl mb-6">
              {project.title}
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.35}>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base">
                  location_on
                </span>
                {project.location}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base">
                  business
                </span>
                {project.client}
              </span>
              <span className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-base">
                  calendar_month
                </span>
                {project.duration}
              </span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="bg-surface-container-highest border-b border-outline-variant/30">
        <StaggerContainer className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            {
              icon: "business",
              label: "Client",
              value: project.client,
            },
            {
              icon: "category",
              label: "Sector",
              value: project.sector,
            },
            {
              icon: "schedule",
              label: "Duration",
              value: project.duration,
            },
            {
              icon: "payments",
              label: "Value",
              value: project.value,
            },
          ].map((fact, i) => (
            <StaggerItem
              key={fact.label}
              className={`py-8 px-6 flex items-center gap-4 ${i < 3 ? "border-b md:border-b-0 md:border-r border-outline-variant/30" : ""}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-xl">
                  {fact.icon}
                </span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
                  {fact.label}
                </p>
                <p className="font-headline font-bold text-on-surface text-sm">
                  {fact.value}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <SlideInLeft className="lg:col-span-7">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Project Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-on-surface tracking-tight leading-tight mb-8">
              About This Project
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              {project.description}
            </p>
          </SlideInLeft>
          <SlideInRight className="lg:col-span-5">
            <div className="bg-surface-container-low p-8 rounded-xl monolith-shadow">
              <h3 className="font-headline font-bold text-on-surface uppercase tracking-wider text-sm mb-8">
                Key Highlights
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {project.highlights.map((h) => (
                  <div key={h.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-headline font-black text-primary mb-1">
                      {h.value}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              What We Deliver
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary tracking-tighter uppercase">
              Scope of Work
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.scope.map((item) => (
              <StaggerItem
                key={item.title}
                className="bg-white p-8 rounded-xl monolith-shadow border-b-4 border-transparent hover:border-primary-container transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary text-2xl group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-headline font-bold text-on-surface text-lg mb-3 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="mb-16">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Visual Documentation
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary tracking-tighter uppercase">
              Project Gallery
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <StaggerItem
                key={i}
                className={`overflow-hidden rounded-lg monolith-shadow group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`}
                >
                  <Image
                    alt={`${project.title} - Image ${i + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src={img}
                    width={800}
                    height={600}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="bg-surface-container-highest border-t border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {prev ? (
              <FadeInUp>
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group py-12 px-6 flex items-center gap-6 border-b md:border-b-0 md:border-r border-outline-variant/30 hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">
                    arrow_back
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Previous Project
                    </p>
                    <p className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                      {prev.title}
                    </p>
                  </div>
                </Link>
              </FadeInUp>
            ) : (
              <div className="py-12 px-6 border-b md:border-b-0 md:border-r border-outline-variant/30"></div>
            )}
            {next ? (
              <FadeInUp delay={0.1}>
                <Link
                  href={`/projects/${next.slug}`}
                  className="group py-12 px-6 flex items-center gap-6 justify-end text-right hover:bg-surface-container transition-colors"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Next Project
                    </p>
                    <p className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                      {next.title}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </Link>
              </FadeInUp>
            ) : (
              <div className="py-12 px-6"></div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <FadeInUp className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6">
              INTERESTED IN A SIMILAR PROJECT?
            </h2>
            <p className="text-white/70 text-lg">
              Let&apos;s discuss how Hindland can deliver the same level of
              engineering excellence for your next project.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all text-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              All Projects
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
