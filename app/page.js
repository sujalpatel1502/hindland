"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FadeInUp,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SlideInLeft,
  SlideInRight,
} from "./components/MotionWrappers";
import { services as homeServices } from "./data/servicesContent";

const heroBanners = [
  "https://storage.googleapis.com/art-docs/hindland_banner_3.png",
  "https://storage.googleapis.com/art-docs/hindland_banner_4.png",
  "https://storage.googleapis.com/art-docs/hindland_banner_5.png",
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroBanners.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroBanners.length);
  };

  return (
    <main>
      {/* Hero */}
      <section className="mt-20 relative h-[calc(100dvh-5rem)] flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroBanners.map((banner, index) => (
            <Image
              key={banner}
              alt={`Industrial site banner ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
              src={banner}
              width={1280}
              height={720}
              unoptimized
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-start max-w-screen-2xl mx-auto px-6 md:px-8 w-full pt-14 md:pt-16 pb-6 md:pb-8">
          <FadeIn className="mb-4 flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevSlide}
              className="h-8 w-8 rounded-full border border-white/40 text-white/90 hover:bg-white/15 transition-colors"
              aria-label="Previous banner"
            >
              <span className="material-symbols-outlined text-base leading-none">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              className="h-8 w-8 rounded-full border border-white/40 text-white/90 hover:bg-white/15 transition-colors"
              aria-label="Next banner"
            >
              <span className="material-symbols-outlined text-base leading-none">
                chevron_right
              </span>
            </button>
            <div className="ml-2 flex items-center gap-1.5">
              {heroBanners.map((banner, index) => (
                <button
                  key={`${banner}-dot`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 rounded-full transition-all ${activeSlide === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"}`}
                  aria-label={`Go to banner ${index + 1}`}
                />
              ))}
            </div>
          </FadeIn>
          <div className="max-w-4xl mb-5 md:mb-6">
            <FadeInUp delay={0.1}>
              <p className="text-white/80 font-headline font-medium text-xs tracking-wider uppercase mb-2">
                Engineering & Infrastructure
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h1 className="font-headline font-black text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] text-white leading-[1.05] mb-3 md:mb-4">
                Building Reliable Infrastructure
                <br />& for India&apos;s Growth
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.35}>
              <p className="text-white/90 text-sm md:text-base max-w-xl mb-5 md:mb-6 font-light leading-relaxed">
                Hindland Infrastructure Pvt. Ltd. delivers EPC execution, CHP
                systems, structural fabrication, piping works, and solar EPC
                projects with uncompromising focus on quality and safety.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.45}>
              <div className="flex flex-row gap-2 sm:gap-3 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-1.5 text-center bg-primary-container text-white font-headline font-bold uppercase tracking-wider md:tracking-wide text-[10px] md:text-[11px] px-4 md:px-6 py-3 md:py-2.5 rounded-full hover:bg-primary transition-all"
                >
                  Contact Us
                  <span className="material-symbols-outlined text-sm leading-none">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="flex-1 md:flex-none text-center bg-white border border-white text-black font-headline font-bold uppercase tracking-wider md:tracking-wide text-[10px] md:text-[11px] px-4 md:px-6 py-3 md:py-2.5 rounded-full hover:bg-stone-200 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.55}>
            <div className="mt-4 md:mt-6 bg-[#1b1c1c]/50 backdrop-blur-sm text-white rounded-2xl px-6 md:px-10 py-4 md:py-5 border border-white/10">
              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
                <StaggerItem className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
                    local_shipping
                  </span>
                  <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
                    Shipment
                    <br />
                    Delivered
                  </p>
                </StaggerItem>
                <StaggerItem className="flex items-center gap-3 md:border-l md:border-white/10 pl-0 md:pl-8">
                  <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
                    handshake
                  </span>
                  <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
                    Trusted
                    <br />
                    Clients
                  </p>
                </StaggerItem>
                <StaggerItem className="flex items-center gap-3 md:border-l md:border-white/10 pl-0 md:pl-8">
                  <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
                    calendar_month
                  </span>
                  <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
                    Years in
                    <br />
                    Business
                  </p>
                </StaggerItem>
                <StaggerItem className="flex items-center gap-3 md:border-l md:border-white/10 pl-0 md:pl-8">
                  <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
                    groups
                  </span>
                  <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
                    Skilled
                    <br />
                    Manpower
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/Services_section_bg.png"
            alt="Services section background"
            fill
            className="object-cover object-center opacity-100"
            priority={false}
          />
          <div className="absolute inset-0 bg-white/15"></div>
        </div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
          <FadeInUp>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
              <div>
                <h2 className="font-headline font-black text-4xl text-on-surface mb-4">
                  Our <span className="text-primary-container">Services</span>
                </h2>
                <p className="text-on-surface-variant max-w-md font-light">
                  Explore our complete service portfolio. From concept to
                  commissioning — we focus on quality, precision, safety, and
                  timely delivery.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded">
                  <span className="material-symbols-outlined text-primary-container text-sm">
                    check
                  </span>
                  <span className="font-headline font-bold text-[10px] uppercase tracking-wider">
                    EPC & Infrastructure Expertise
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded">
                  <span className="material-symbols-outlined text-primary-container text-sm">
                    architecture
                  </span>
                  <span className="font-headline font-bold text-[10px] uppercase tracking-wider">
                    Road & Bridge Project Experience
                  </span>
                </div>
              </div>
            </div>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {homeServices.map((svc) => (
              <StaggerItem
                key={svc.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    alt={svc.shortTitle}
                    className="w-full h-full object-cover"
                    src={svc.cardImage}
                    width={640}
                    height={480}
                    unoptimized
                  />
                </div>
                <div className="bg-primary-container p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-white text-xl">
                    {svc.icon}
                  </span>
                  <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                    {svc.shortTitle}
                  </h3>
                </div>
                <div className="p-8 flex flex-col grow">
                  <ul className="space-y-4 grow">
                    {svc.bullets.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 shrink-0"></span>
                        <p className="text-sm text-stone-600">{line}</p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group mt-6 pt-6 border-t border-stone-100 inline-flex items-center gap-2 text-primary-container font-headline font-bold uppercase text-[10px] tracking-widest hover:gap-3 transition-all"
                  >
                    Get details
                    <span className="material-symbols-outlined text-base leading-none group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeInUp>
            <div className="text-center">
              <Link
                href="/services"
                className="border border-stone-300 text-on-surface font-headline font-bold uppercase tracking-widest text-xs px-12 py-4 rounded-full hover:bg-stone-50 transition-all"
              >
                View All Services
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[url('/assets/Services_section_bg.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <SlideInLeft className="relative overflow-hidden h-full p-8 md:p-10">
            <div className="relative z-10">
              <h2 className="font-headline font-black text-4xl text-on-surface mb-4">
                Why <span className="text-primary-container">Choose Us</span>
              </h2>
              <p className="text-on-surface-variant mb-12">
                We combine engineering expertise with disciplined execution —
                ensuring client confidence through safety, quality, transparency,
                and dependable delivery.
              </p>
              <StaggerContainer>
                <ul className="space-y-6">
                  {[
                    { icon: "health_and_safety", label: "Safety First Approach" },
                    { icon: "high_quality", label: "Quality & Precision" },
                    { icon: "schedule", label: "On-Time Delivery" },
                    { icon: "handshake", label: "Transparent Operations" },
                  ].map((item) => (
                    <StaggerItem key={item.icon}>
                      <li className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary-container">
                          {item.icon}
                        </span>
                        <span className="font-headline font-bold text-sm uppercase tracking-wide">
                          {item.label}
                        </span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
              <div className="mt-16 flex items-center gap-6 grayscale opacity-60">
                <div className="flex items-center gap-2 border px-3 py-1 text-[10px] font-black uppercase">
                  ISO 9001
                </div>
                <div className="flex items-center gap-2 border px-3 py-1 text-[10px] font-black uppercase">
                  ISO 14001
                </div>
                <div className="flex items-center gap-2 border px-3 py-1 text-[10px] font-black uppercase">
                  ISO 45001
                </div>
                <span className="material-symbols-outlined text-green-600">
                  verified
                </span>
              </div>
            </div>
          </SlideInLeft>
          <SlideInRight className="flex flex-col lg:pl-16">
            <h5 className="font-headline font-medium text-stone-500 text-center mb-10 text-sm">
              Trusted by Industry Leaders
            </h5>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {[
                { src: "/assets/Tata.jpg", alt: "Tata Steel" },
                { src: "/assets/Adani.png", alt: "Adani" },
                { src: "/assets/L&T.png", alt: "Larsen and Toubro" },
                { src: "/assets/NHPC.png", alt: "NHPC" },
                { src: "/assets/Gail.png", alt: "GAIL" },
                { src: "/assets/Bharat_Petroleum.png", alt: "Bharat Petroleum" },
              ].map((logo) => (
                <StaggerItem
                  key={logo.alt}
                  className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={72}
                    className="max-h-12 w-auto object-contain"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <FadeInUp delay={0.3}>
              <div className="bg-[#1b1c1c] p-10 rounded-xl relative overflow-hidden mt-12">
                <Image
                  alt="Steel background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfRDnu80rDhKDhRF3pA2RhTi3uzT6KFatG5Aq8KQGPSs5Ylw6c5yPFm-l01HNAt0PSrZmWzOa_j4aoSD0-KGCAS8Bb1sWaVTY67oUTvGQNeUZ7SsGDV3-NcKnbfPdWvBU35z1nZ1oRYkwaUCqQAQshdIIobJvlRyF6-IVxWe5lsPuvGaE9K1r3vxI01I-Y07ru96ZNTHpJy6WR0vE6o7BYBXg6KQWoNj0TZc8BCfJkT4j6uOOxStCCpXkZLDsCkO_Vbm2M1-CU_1bd"
                  width={1280}
                  height={720}
                  className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
                  unoptimized
                />
                <div className="relative z-10 text-center">
                  <h3 className="text-white font-headline font-black text-2xl mb-2">
                    Let&apos;s Build Reliable Infrastructure Together
                  </h3>
                  <p className="text-white/60 text-xs mb-8">
                    Need EPC execution, O&M support, or industrial trading
                    supply? Share your requirement and our team will connect with
                    you.
                  </p>
                  <Link
                    href="/contact"
                    className="bg-[#facc15] text-primary font-headline font-black uppercase tracking-widest text-[10px] px-10 py-3 rounded-full hover:bg-[#eab308] transition-all"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </FadeInUp>
          </SlideInRight>
        </div>
      </section>
    </main>
  );
}
