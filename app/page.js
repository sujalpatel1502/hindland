import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Industrial site with cooling towers at sunset"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAliwqQ35Syf2dMgiNDJDBDyatrsRqzPY_yQWPIN5Ll-_F3GLzND26arMMUHpSj_lvvaARXy211OKwlPjCuqZx5qFGxL9ngj3oWBemtioJr3cf6D8F72y5cYNigFiELTx6IxIek_s4HuZFAZrf-oOyLDlR9AHZK_d5jYObfBbG-gKyt0V1Gq5LIgwKITmUZrcic3yOZW0LtNPc2QLKe3Pj9avMMSjJdAyEc9yHPLgUwmlVqhSv1gIq1XSmLlK0AYqhJ2nu_tdQlE0h-"
            width={1280}
            height={720}
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full py-20">
          <div className="max-w-3xl">
            <p className="text-white/80 font-headline font-medium text-xs tracking-wider uppercase mb-4">
              Vision, Project, Industries transformation performed.
            </p>
            <h1 className="font-headline font-black text-5xl md:text-7xl text-white leading-tight mb-8">
              Integrated EPC, Infrastructure & B2B Industrial Supply Solutions
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
              Delivering engineering excellence across power, industrial, road &
              bridge infrastructure, and material supply services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary-container text-white font-headline font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:bg-primary transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/company-profile"
                className="bg-transparent border border-white text-white font-headline font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-full hover:bg-white/10 transition-all"
              >
                Download Company Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Stats/Features Overlay Bar */}
      <section className="bg-[#1b1c1c] text-white py-8">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-white/60 text-3xl">
                verified
              </span>
              <p className="font-headline font-bold text-[11px] uppercase tracking-wider leading-snug">
                EPC & Infrastructure
                <br />
                Expertise
              </p>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-0 md:pl-8">
              <span className="material-symbols-outlined text-white/60 text-3xl">
                upload
              </span>
              <p className="font-headline font-bold text-[11px] uppercase tracking-wider leading-snug">
                Road & Bridge
                <br />
                Project Experience
              </p>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-0 md:pl-8">
              <span className="material-symbols-outlined text-white/60 text-3xl">
                groups
              </span>
              <p className="font-headline font-bold text-[11px] uppercase tracking-wider leading-snug">
                B2B Industrial
                <br />
                Material Supply
              </p>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-0 md:pl-8">
              <span className="material-symbols-outlined text-white/60 text-3xl">
                settings
              </span>
              <p className="font-headline font-bold text-[11px] uppercase tracking-wider leading-snug">
                Contracted
                <br />
                Fabrication Services
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services Section */}
      <section className="bg-surface py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div>
              <h2 className="font-headline font-black text-4xl text-on-surface mb-4">
                Our Services
              </h2>
              <p className="text-on-surface-variant max-w-md font-light">
                Comprehensive Solutions for Power, Infrastructure & Industrial
                Projects.
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
                  factory
                </span>
                <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                  EPC Contracting
                </h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      End-to-end project execution from design to commissioning
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
                  traffic
                </span>
                <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                  NH-48 Highway Bridge
                </h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">Bridge Construction</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      Heavy structural precision & erection
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
                  propane_tank
                </span>
                <h3 className="font-headline font-black text-white uppercase text-sm tracking-wider">
                  BPCL Ethanol Refinery
                </h3>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      Piping Fabrication, Equipment Erection
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 flex-shrink-0"></span>
                    <p className="text-sm text-stone-600">
                      Piping Infrastructure Supply
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/projects"
              className="border border-stone-300 text-on-surface font-headline font-bold uppercase tracking-widest text-xs px-12 py-4 rounded-full hover:bg-stone-50 transition-all"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="bg-white py-24">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-headline font-black text-4xl text-on-surface mb-4">
              Why Choose Us
            </h2>
            <p className="text-on-surface-variant mb-12">
              Engineering Excellence with Proven Execution Capability
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  support
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  High Quality Standards
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  check_circle
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  On-Time Project Delivery
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  engineering
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  Experienced Technical Team
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary-container">
                  health_and_safety
                </span>
                <span className="font-headline font-bold text-sm uppercase tracking-wide">
                  Strong Safety Practices
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
          <div className="flex flex-col">
            <h5 className="font-headline font-medium text-stone-500 text-center mb-10 text-sm">
              Trusted by Industry Leaders
            </h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="col-span-1 md:col-span-2 flex items-center justify-center font-bold text-2xl text-stone-300 italic">
                TATA STEEL
              </div>
              <div className="h-16 flex items-center justify-center p-2 font-bold text-2xl text-stone-300 italic">
                adani
              </div>
              <div className="h-16 flex items-center justify-center p-2 font-bold text-xl text-stone-300 italic">
                L&T
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
                  Ready to start your next project?
                </h3>
                <p className="text-white/60 text-xs mb-8">
                  Contact our experts today for reliable EPC and infrastructure
                  solutions.
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
