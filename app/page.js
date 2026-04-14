 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    setActiveSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroBanners.length);
  };

  return (
    <main>
      {/* Hero — full viewport height, stats INSIDE the hero */}
<section className="mt-20 relative h-[calc(100dvh-5rem)] flex flex-col overflow-hidden">
  {/* Background Image */}
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

  {/* Hero Content */}
  <div className="relative z-10 flex-1 flex flex-col justify-start max-w-screen-2xl mx-auto px-6 md:px-8 w-full pt-14 md:pt-16 pb-6 md:pb-8">
    <div className="mb-4 flex items-center gap-2">
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
    </div>
    <div className="max-w-4xl mb-5 md:mb-6">
      <p className="text-white/80 font-headline font-medium text-xs tracking-wider uppercase mb-2">
        Engineering & Infrastructure
      </p>
      <h1 className="font-headline font-black text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.75rem] text-white leading-[1.05] mb-3 md:mb-4">
        Building Reliable Infrastructure
        <br />
        & for India's Growth
      </h1>
      <p className="text-white/90 text-sm md:text-base max-w-xl mb-5 md:mb-6 font-light leading-relaxed">
        Hindland Infrastructure Pvt. Ltd. delivers EPC execution, CHP systems, structural fabrication, piping works, and solar EPC projects with uncompromising focus on quality and safety.
      </p>
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
    </div>

    {/* Stats Bar — inside hero, below buttons */}
    <div className="mt-4 md:mt-6 bg-[#1b1c1c]/50 backdrop-blur-sm text-white rounded-2xl px-6 md:px-10 py-4 md:py-5 border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
            local_shipping
          </span>
          <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
            Shipment
            <br />
            Delivered
          </p>
        </div>
        <div className="flex items-center gap-3 md:border-l md:border-white/10 pl-0 md:pl-8">
          <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
            handshake
          </span>
          <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
            Trusted
            <br />
            Clients
          </p>
        </div>
        <div className="flex items-center gap-3 md:border-l md:border-white/10 pl-0 md:pl-8">
          <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
            calendar_month
          </span>
          <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
            Years in
            <br />
            Business
          </p>
        </div>
        <div className="flex items-center gap-3 md:border-l md:border-white/10 pl-0 md:pl-8">
          <span className="material-symbols-outlined text-white/60 text-2xl md:text-3xl">
            groups
          </span>
          <p className="font-headline font-bold text-[10px] md:text-[11px] uppercase tracking-wider leading-snug">
            Skilled
            <br />
            Manpower
          </p>
        </div>
      </div>
    </div>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div>
              <h2 className="font-headline font-black text-4xl text-on-surface mb-4">
                Our <span className="text-primary-container">Services</span>
              </h2>
              <p className="text-on-surface-variant max-w-md font-light">
                Explore our complete service portfolio. From concept to commissioning — we focus on quality, precision, safety, and timely delivery.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <Image
                  alt="Refinery"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2QhRCfafxtCEF_VRhOau0IDgmm60IwjSjSHLihPS97L55HGnW777w9UHu3qyb1QSy5WjlqXwLc2-v6-DpYWTAwH_f8Bt80_6ejsnG9fcNvg8kCXh4onXqlwmrty6063-dx7bLHiqrYZkInfItB2MDfgnJYj75m0Ki-a6Hb6iKMQcwP6XDcfnQw81ZVlO7ZajgFk1WiAdqCaAgnWQXjJAhuEGcSoQ59EixoHYMHkKs4cNQMYJ2neFrKOr386Gau6a_dTNKUQm-X2iO"
                  width={640}
                  height={480}
                  unoptimized
                />
              </div>
              <div className="bg-primary-container p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-xl">
                  construction
                </span>
                <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                  Heavy Fabrication & Erection
                </h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      BTG / TG / Boiler structural fabrication & erection, CHP execution & expansion works
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <Image
                  alt="Highway"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7LnThDKXWc8KKMRklXt2FbGTmTv4lPALsHWJPxcY66Ck-D9xpxuf5WTNmpRVc06P3Mw0kcULeskFwnyhdpgeZfEUTcAj6S5cQvJPq9giLtQhq0Ib4wLhhIzgVkcAw9Dmv7rOgFqgeLHQX-5zlgFEWEKTBjC2tuCYksLrtgBTOlyuUtIHinrLTdWpJ4kqBPfuWS7wo8yP9gbqcvPiiQC2Mvz4dqiGP7xreZ0Q2QwHBeK4P760BaK0soC28AmzV-lJbj7am1MtwHp6"
                  width={640}
                  height={480}
                  unoptimized
                />
              </div>
              <div className="bg-primary-container p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-xl">
                  build
                </span>
                <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                  O&M Services
                </h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">CHP operation & maintenance</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      Preventive maintenance & shutdown support
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <Image
                  alt="Ethanol Refinery"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeS1NTNiarV9UVPZtAbB2fO-Faku4iydtpTdJyiHilUYpDvVBlx3EuKUE9nZJxtMtst0C_8fm3sg7Q3vUOAiCsKvAcWzBuzA6m-K8Hoa1-o8TRb_c_KT6owZVChMX7p2FYZWWM91vQa7k5SixZPMByTIxJ0BVttNJX4rGLm8BCnGoqLB-o6B-IILc4vauVxm4-YkLQwr1v3xO0xLBXB19F5Bpe6YcG3fiyBBBmF9h1tUSyUiOhgOzBPDP5-EOGH67iiCe3K0pj5Z_b"
                  width={640}
                  height={480}
                  unoptimized
                />
              </div>
              <div className="bg-primary-container p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-xl">
                  solar_power
                </span>
                <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                  Solar EPC & Renewables
                </h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      Solar EPC execution (utility / industrial)
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      Ground & rooftop solar projects
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="border border-stone-300 text-on-surface font-headline font-bold uppercase tracking-widest text-xs px-12 py-4 rounded-full hover:bg-stone-50 transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[url('/assets/Services_section_bg.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div className="relative overflow-hidden h-full p-8 md:p-10">
            <div className="relative z-10">
            <h2 className="font-headline font-black text-4xl text-on-surface mb-4">
              Why <span className="text-primary-container">Choose Us</span>
            </h2>
            <p className="text-on-surface-variant mb-12">
              We combine engineering expertise with disciplined execution — ensuring client confidence through safety, quality, transparency, and dependable delivery.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  health_and_safety
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  Safety First Approach
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  high_quality
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  Quality & Precision
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  schedule
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  On-Time Delivery
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  handshake
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  Transparent Operations
                </span>
              </li>
            </ul>
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
          </div>
          <div className="flex flex-col lg:pl-16">
            <h5 className="font-headline font-medium text-stone-500 text-center mb-10 text-sm">
              Trusted by Industry Leaders
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              <div className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3">
                <Image
                  src="/assets/Tata.jpg"
                  alt="Tata Steel"
                  width={180}
                  height={72}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3">
                <Image
                  src="/assets/Adani.png"
                  alt="Adani"
                  width={180}
                  height={72}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3">
                <Image
                  src="/assets/L&T.png"
                  alt="Larsen and Toubro"
                  width={180}
                  height={72}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3">
                <Image
                  src="/assets/NHPC.png"
                  alt="NHPC"
                  width={180}
                  height={72}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3">
                <Image
                  src="/assets/Gail.png"
                  alt="GAIL"
                  width={180}
                  height={72}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="h-20 bg-white/70 border border-stone-200 rounded-lg flex items-center justify-center p-3">
                <Image
                  src="/assets/Bharat_Petroleum.png"
                  alt="Bharat Petroleum"
                  width={180}
                  height={72}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </div>
            <div className="mt-auto bg-[#1b1c1c] p-10 rounded-xl relative overflow-hidden mt-12">
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
                  Let's Build Reliable Infrastructure Together
                </h3>
                <p className="text-white/60 text-xs mb-8">
                  Need EPC execution, O&M support, or industrial trading supply? Share your requirement and our team will connect with you.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#facc15] text-primary font-headline font-black uppercase tracking-widest text-[10px] px-10 py-3 rounded-full hover:bg-[#eab308] transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}