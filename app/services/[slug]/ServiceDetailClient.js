"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
} from "../../components/MotionWrappers";

export default function ServiceDetailClient({ service, prev, next }) {
  const scopeItems = service.capabilities.map((c) => ({
    icon: c.icon,
    title: c.title,
    description: c.text,
  }));

  return (
    <main className="pt-20">
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={service.title}
            className="w-full h-full object-cover"
            src={service.heroImage}
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
              href="/services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs font-bold uppercase tracking-widest mb-6 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              Back to Services
            </Link>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <span className="inline-block px-4 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm bg-primary-container text-white">
              {service.label}
            </span>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter max-w-4xl mb-6">
              {service.title}
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.35}>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              {service.facts.slice(0, 3).map((f) => (
                <span
                  key={f.label}
                  className="flex items-center gap-2 text-sm max-w-[220px]"
                >
                  <span className="material-symbols-outlined text-base shrink-0">
                    {f.icon}
                  </span>
                  <span>
                    <span className="font-bold text-white/90">{f.label}: </span>
                    {f.value}
                  </span>
                </span>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="bg-surface-container-highest border-b border-outline-variant/30">
        <StaggerContainer className="max-w-screen-2xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-0">
          {service.facts.map((fact, i) => (
            <StaggerItem
              key={fact.label}
              className={`py-8 px-6 flex items-center gap-4 ${i < 3 ? "border-b md:border-b-0 md:border-r border-outline-variant/30" : ""}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
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

      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <SlideInLeft className="lg:col-span-7">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Service overview
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-black text-on-surface tracking-tight leading-tight mb-8">
              What we deliver
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              {service.description}
            </p>
          </SlideInLeft>
          <SlideInRight className="lg:col-span-5">
            <div className="bg-surface-container-low p-8 rounded-xl monolith-shadow">
              <h3 className="font-headline font-bold text-on-surface uppercase tracking-wider text-sm mb-8">
                At a glance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {service.highlights.map((h) => (
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

      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary tracking-tighter uppercase">
              Scope of work
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item) => (
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

      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeInUp className="mb-16">
            <p className="uppercase tracking-[0.3em] text-primary-container font-bold mb-4 text-xs">
              Visual reference
            </p>
            <h2 className="text-3xl md:text-5xl font-headline font-black text-primary tracking-tighter uppercase">
              Service gallery
            </h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.gallery.map((img, i) => (
              <StaggerItem
                key={i}
                className={`overflow-hidden rounded-lg monolith-shadow group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    alt={`${service.title} — ${i + 1}`}
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

      <section className="bg-surface-container-highest border-t border-outline-variant/30">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {prev ? (
              <FadeInUp>
                <Link
                  href={`/services/${prev.slug}`}
                  className="group py-12 px-6 flex items-center gap-6 border-b md:border-b-0 md:border-r border-outline-variant/30 hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-primary transition-colors">
                    arrow_back
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Previous service
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
                  href={`/services/${next.slug}`}
                  className="group py-12 px-6 flex items-center gap-6 justify-end text-right hover:bg-surface-container transition-colors"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                      Next service
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

      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <FadeInUp className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6">
              READY TO ENGAGE ON THIS SERVICE?
            </h2>
            <p className="text-white/70 text-lg">
              Share your scope and schedule — we will align execution, safety,
              and quality to your project realities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="bg-white text-primary px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all text-center"
            >
              Get a quote
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-10 py-4 font-headline font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              All services
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
