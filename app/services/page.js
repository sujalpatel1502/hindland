import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Services | HINDLAND Infrastructure" };

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            alt="Massive construction site with heavy cranes and steel structures"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdVXMysp-8H776cIjPPFwZ0Dt9pAmtl7ReZlpIkQ2OFOH_W1B-bzKMi8SDTG_irDFWyKdKEDP3p9fFdG3nhzqQU09PXEy5XmowGbzL231dWoVuxqJblWzyp7FZkmqR01lQALF7ExpKGKEscqI1FVAHebDNK7VzNSyM93h-2eLPq3wvO7pbIJGTDjruLYUBQdwmadmXSagyztpdwTddGgFbwA1lIRw2AyrCu-g7n2YiZxOsmc1Ox7gTeMZsiskVn6qzchhAw0qBKjYV"
            width={1920}
            height={1080}
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary"></div>
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <span className="inline-block px-4 py-1 mb-6 bg-primary-container text-on-primary font-label text-xs font-bold uppercase tracking-[0.2em]">
            Our Expertise
          </span>
          <h1 className="font-headline text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8 max-w-4xl">
            OUR SPECIALIZED <br />
            SERVICES
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl font-body leading-relaxed">
            Engineering excellence at scale. We provide comprehensive
            infrastructure solutions, from initial procurement to final
            structural execution.
          </p>
        </div>
      </section>
      {/* Comprehensive Service List */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
            <div className="sticky top-32">
              <span className="text-primary-container font-headline font-bold uppercase tracking-widest text-sm mb-4 block">
                01. Infrastructure
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">
                EPC Contracting
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                We deliver end-to-end Engineering, Procurement, and Construction
                (EPC) services for complex industrial environments. Our approach
                integrates modular construction techniques with traditional
                engineering rigor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    precision_manufacturing
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface">Technical Design</h4>
                    <p className="text-sm text-on-surface-variant">
                      Precision engineering for large-scale structural integrity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">
                    engineering
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface">
                      Execution Management
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Real-time oversight and safety-first project delivery.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-surface-container-high -z-10 group-hover:inset-0 transition-all duration-500"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCetZZ4i9_T2L0g3JP9Fgfk_8PzA9cgErWqCYaR-EdTz1SYSbdcaP-bZYa-XuGC7k8eKBC0IpRR95O7OU0CaMyEpyQoEzWAdkRVEXvkWVoa6ATrgqqjU1T2kfmE8hvyspB0d4Y61TVTkBsH7BN2pPSEeQvb2-pfuR9iRWZ-Todm8aQQ8MD1TtWZ-xLX3mlQc-oy2f_-Zft5efYchN78k_5wZUFCgVWD3fiYs7IFaM7B5v8i5Ejy4YZ5Qkdh9Nauq_Tc0UrS5nLsZayN"
                alt="Industrial steel welding"
                width={800}
                height={1000}
                unoptimized
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-surface-container-high -z-10 group-hover:inset-0 transition-all duration-500"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAMq-qQ9lAikmrfvSIE2sst31Jp9Wl2fFG7aAvGbQ8_rfu1ymyTBnebOt8nQIidgffZeb_hKLdDGuMmNVw-X-qFNTVmbY_DwY06eVfeRQvmFJ-oq6LUadM4IizlkAoZIcTba0-Dr3RiK6AbdGNDZcrJke4f2CDntXeLviQZAlFqiLPDqHVd6_RAtnDdxHlT4kDKmsX4r6t28OKmWohY6orYgmA8ixtMYY5LetMhz4uxe7EEamSZqcGBvEwLcZbvg_-oYSzpPlKOY_g"
                alt="Industrial warehouse"
                width={800}
                height={1000}
                unoptimized
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 sticky top-32">
              <span className="text-primary-container font-headline font-bold uppercase tracking-widest text-sm mb-4 block">
                02. Supply Chain
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">
                B2B Industrial Supply
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Strategic sourcing of industrial materials and heavy-duty
                machinery. We bridge the gap between global manufacturers and
                local project requirements.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6">
                  <span className="material-symbols-outlined text-primary-container mb-4">
                    inventory_2
                  </span>
                  <h4 className="font-bold mb-2">Inventory Management</h4>
                  <p className="text-xs text-on-surface-variant">
                    Just-in-time delivery for critical project phases.
                  </p>
                </div>
                <div className="bg-surface-container-low p-6">
                  <span className="material-symbols-outlined text-primary-container mb-4">
                    local_shipping
                  </span>
                  <h4 className="font-bold mb-2">Global Logistics</h4>
                  <p className="text-xs text-on-surface-variant">
                    Complex movement of oversized industrial cargo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sector-wise Breakdown */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-4xl font-black text-primary tracking-tighter uppercase mb-4">
                Sector Breakdown
              </h2>
              <p className="text-on-surface-variant max-w-xl">
                Deep specialization across the core sectors that drive global
                infrastructure development.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="bg-white group cursor-pointer overflow-hidden relative">
              <div className="p-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-8">
                  bolt
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Power
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  High-voltage transmission lines, substation engineering, and
                  sustainable energy grid integration.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
            <div className="bg-white group cursor-pointer overflow-hidden relative">
              <div className="p-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-8">
                  factory
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Industrial
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Turnkey manufacturing plants, warehouse structures, and heavy
                  industrial foundation work.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
            <div className="bg-white group cursor-pointer overflow-hidden relative">
              <div className="p-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-8">
                  rebase_edit
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Road & Bridge
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Urban connectivity projects, highway extensions, and
                  pre-stressed concrete bridge structures.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
            <div className="bg-white group cursor-pointer overflow-hidden relative">
              <div className="p-10 relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
                <span className="material-symbols-outlined text-4xl text-primary-container mb-8">
                  foundation
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  Material Supply
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  High-grade cement, structural steel, and specialized aggregates
                  for critical engineering.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Process/How We Work */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase mb-6">
              The Execution Flow
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our rigorous four-step methodology ensures precision from the first
              blueprint to the final handover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-outline-variant">
            <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant group hover:bg-primary transition-colors duration-500">
              <span className="block font-headline text-6xl font-black text-surface-container-highest group-hover:text-white/20 mb-8">
                01
              </span>
              <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white mb-4">
                Consultation
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-white/70">
                Technical feasibility studies and site analysis to define project
                scope and constraints.
              </p>
            </div>
            <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant group hover:bg-primary transition-colors duration-500">
              <span className="block font-headline text-6xl font-black text-surface-container-highest group-hover:text-white/20 mb-8">
                02
              </span>
              <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white mb-4">
                Sourcing
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-white/70">
                Strategic procurement of high-performance materials through our
                global supply network.
              </p>
            </div>
            <div className="p-12 border-b md:border-b-0 md:border-r border-outline-variant group hover:bg-primary transition-colors duration-500">
              <span className="block font-headline text-6xl font-black text-surface-container-highest group-hover:text-white/20 mb-8">
                03
              </span>
              <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white mb-4">
                Fabrication
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-white/70">
                Precision manufacturing and assembly of structural components in
                controlled environments.
              </p>
            </div>
            <div className="p-12 group hover:bg-primary transition-colors duration-500">
              <span className="block font-headline text-6xl font-black text-surface-container-highest group-hover:text-white/20 mb-8">
                04
              </span>
              <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white mb-4">
                Execution
              </h4>
              <p className="text-sm text-on-surface-variant group-hover:text-white/70">
                On-site assembly and structural integration under strict safety
                protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-primary-container text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-screen-2xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6">
              READY TO BUILD THE FUTURE?
            </h2>
            <p className="text-white/70 text-lg">
              Partner with Hindland for infrastructure that stands the test of
              time. Let's discuss your next project.
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
        </div>
      </section>
    </main>
  );
}
